function Wv(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ud = { exports: {} }, $l = {};
var dy;
function i_() {
  if (dy) return $l;
  dy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(r, u, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), "key" in u) {
      c = {};
      for (var h in u)
        h !== "key" && (c[h] = u[h]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: r,
      key: d,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return $l.Fragment = i, $l.jsx = a, $l.jsxs = a, $l;
}
var hy;
function o_() {
  return hy || (hy = 1, Ud.exports = i_()), Ud.exports;
}
var k = o_(), Bd = { exports: {} }, Se = {};
var gy;
function a_() {
  if (gy) return Se;
  gy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.activity"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), x = Symbol.iterator;
  function w(A) {
    return A === null || typeof A != "object" ? null : (A = x && A[x] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, C = {};
  function U(A, J, de) {
    this.props = A, this.context = J, this.refs = C, this.updater = de || _;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(A, J) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, J, "setState");
  }, U.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function T() {
  }
  T.prototype = U.prototype;
  function E(A, J, de) {
    this.props = A, this.context = J, this.refs = C, this.updater = de || _;
  }
  var H = E.prototype = new T();
  H.constructor = E, N(H, U.prototype), H.isPureReactComponent = !0;
  var D = Array.isArray;
  function R() {
  }
  var V = { H: null, A: null, T: null, S: null }, G = Object.prototype.hasOwnProperty;
  function le(A, J, de) {
    var re = de.ref;
    return {
      $$typeof: n,
      type: A,
      key: J,
      ref: re !== void 0 ? re : null,
      props: de
    };
  }
  function te(A, J) {
    return le(A.type, J, A.props);
  }
  function ne(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function ie(A) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(de) {
      return J[de];
    });
  }
  var M = /\/+/g;
  function j(A, J) {
    return typeof A == "object" && A !== null && A.key != null ? ie("" + A.key) : J.toString(36);
  }
  function z(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(R, R) : (A.status = "pending", A.then(
          function(J) {
            A.status === "pending" && (A.status = "fulfilled", A.value = J);
          },
          function(J) {
            A.status === "pending" && (A.status = "rejected", A.reason = J);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function L(A, J, de, re, W) {
    var ce = typeof A;
    (ce === "undefined" || ce === "boolean") && (A = null);
    var he = !1;
    if (A === null) he = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case i:
              he = !0;
              break;
            case y:
              return he = A._init, L(
                he(A._payload),
                J,
                de,
                re,
                W
              );
          }
      }
    if (he)
      return W = W(A), he = re === "" ? "." + j(A, 0) : re, D(W) ? (de = "", he != null && (de = he.replace(M, "$&/") + "/"), L(W, J, de, "", function(be) {
        return be;
      })) : W != null && (ne(W) && (W = te(
        W,
        de + (W.key == null || A && A.key === W.key ? "" : ("" + W.key).replace(
          M,
          "$&/"
        ) + "/") + he
      )), J.push(W)), 1;
    he = 0;
    var ue = re === "" ? "." : re + ":";
    if (D(A))
      for (var fe = 0; fe < A.length; fe++)
        re = A[fe], ce = ue + j(re, fe), he += L(
          re,
          J,
          de,
          ce,
          W
        );
    else if (fe = w(A), typeof fe == "function")
      for (A = fe.call(A), fe = 0; !(re = A.next()).done; )
        re = re.value, ce = ue + j(re, fe++), he += L(
          re,
          J,
          de,
          ce,
          W
        );
    else if (ce === "object") {
      if (typeof A.then == "function")
        return L(
          z(A),
          J,
          de,
          re,
          W
        );
      throw J = String(A), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function I(A, J, de) {
    if (A == null) return A;
    var re = [], W = 0;
    return L(A, re, "", "", function(ce) {
      return J.call(de, ce, W++);
    }), re;
  }
  function X(A) {
    if (A._status === -1) {
      var J = A._result, de = J();
      de.then(
        function(re) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = re, de.status === void 0 && (de.status = "fulfilled", de.value = re));
        },
        function(re) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = re, de.status === void 0 && (de.status = "rejected", de.reason = re));
        }
      ), A._status === -1 && (A._status = 0, A._result = de);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ee = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function K(A) {
    var J = V.T, de = {};
    de.types = J !== null ? J.types : null, V.T = de;
    try {
      var re = A(), W = V.S;
      W !== null && W(de, re), typeof re == "object" && re !== null && typeof re.then == "function" && re.then(R, ee);
    } catch (ce) {
      ee(ce);
    } finally {
      J !== null && de.types !== null && (J.types = de.types), V.T = J;
    }
  }
  function se(A) {
    var J = V.T;
    if (J !== null) {
      var de = J.types;
      de === null ? J.types = [A] : de.indexOf(A) === -1 && de.push(A);
    } else K(se.bind(null, A));
  }
  var pe = {
    map: I,
    forEach: function(A, J, de) {
      I(
        A,
        function() {
          J.apply(this, arguments);
        },
        de
      );
    },
    count: function(A) {
      var J = 0;
      return I(A, function() {
        J++;
      }), J;
    },
    toArray: function(A) {
      return I(A, function(J) {
        return J;
      }) || [];
    },
    only: function(A) {
      if (!ne(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return Se.Activity = g, Se.Children = pe, Se.Component = U, Se.Fragment = a, Se.Profiler = u, Se.PureComponent = E, Se.StrictMode = r, Se.Suspense = p, Se.ViewTransition = v, Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, Se.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return V.H.useMemoCache(A);
    }
  }, Se.addTransitionType = se, Se.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, Se.cacheSignal = function() {
    return null;
  }, Se.cloneElement = function(A, J, de) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var re = N({}, A.props), W = A.key;
    if (J != null)
      for (ce in J.key !== void 0 && (W = "" + J.key), J)
        !G.call(J, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && J.ref === void 0 || (re[ce] = J[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) re.children = de;
    else if (1 < ce) {
      for (var he = Array(ce), ue = 0; ue < ce; ue++)
        he[ue] = arguments[ue + 2];
      re.children = he;
    }
    return le(A.type, W, re);
  }, Se.createContext = function(A) {
    return A = {
      $$typeof: d,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: c,
      _context: A
    }, A;
  }, Se.createElement = function(A, J, de) {
    var re, W = {}, ce = null;
    if (J != null)
      for (re in J.key !== void 0 && (ce = "" + J.key), J)
        G.call(J, re) && re !== "key" && re !== "__self" && re !== "__source" && (W[re] = J[re]);
    var he = arguments.length - 2;
    if (he === 1) W.children = de;
    else if (1 < he) {
      for (var ue = Array(he), fe = 0; fe < he; fe++)
        ue[fe] = arguments[fe + 2];
      W.children = ue;
    }
    if (A && A.defaultProps)
      for (re in he = A.defaultProps, he)
        W[re] === void 0 && (W[re] = he[re]);
    return le(A, ce, W);
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(A) {
    return { $$typeof: h, render: A };
  }, Se.isValidElement = ne, Se.lazy = function(A) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: A },
      _init: X
    };
  }, Se.memo = function(A, J) {
    return {
      $$typeof: m,
      type: A,
      compare: J === void 0 ? null : J
    };
  }, Se.startTransition = K, Se.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, Se.use = function(A) {
    return V.H.use(A);
  }, Se.useActionState = function(A, J, de) {
    return V.H.useActionState(A, J, de);
  }, Se.useCallback = function(A, J) {
    return V.H.useCallback(A, J);
  }, Se.useContext = function(A) {
    return V.H.useContext(A);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(A, J) {
    return V.H.useDeferredValue(A, J);
  }, Se.useEffect = function(A, J) {
    return V.H.useEffect(A, J);
  }, Se.useEffectEvent = function(A) {
    return V.H.useEffectEvent(A);
  }, Se.useId = function() {
    return V.H.useId();
  }, Se.useImperativeHandle = function(A, J, de) {
    return V.H.useImperativeHandle(A, J, de);
  }, Se.useInsertionEffect = function(A, J) {
    return V.H.useInsertionEffect(A, J);
  }, Se.useLayoutEffect = function(A, J) {
    return V.H.useLayoutEffect(A, J);
  }, Se.useMemo = function(A, J) {
    return V.H.useMemo(A, J);
  }, Se.useOptimistic = function(A, J) {
    return V.H.useOptimistic(A, J);
  }, Se.useReducer = function(A, J, de) {
    return V.H.useReducer(A, J, de);
  }, Se.useRef = function(A) {
    return V.H.useRef(A);
  }, Se.useState = function(A) {
    return V.H.useState(A);
  }, Se.useSyncExternalStore = function(A, J, de) {
    return V.H.useSyncExternalStore(
      A,
      J,
      de
    );
  }, Se.useTransition = function() {
    return V.H.useTransition();
  }, Se.version = "19.3.0", Se;
}
var py;
function pr() {
  return py || (py = 1, Bd.exports = a_()), Bd.exports;
}
var F = pr();
const Wl = /* @__PURE__ */ Wv(F);
var Ld = { exports: {} }, Xl = {}, jd = { exports: {} }, Vd = {};
var my;
function l_() {
  return my || (my = 1, (function(n) {
    function i(z, L) {
      var I = z.length;
      z.push(L);
      e: for (; 0 < I; ) {
        var X = I - 1 >>> 1, ee = z[X];
        if (0 < u(ee, L))
          z[X] = L, z[I] = ee, I = X;
        else break e;
      }
    }
    function a(z) {
      return z.length === 0 ? null : z[0];
    }
    function r(z) {
      if (z.length === 0) return null;
      var L = z[0], I = z.pop();
      if (I !== L) {
        z[0] = I;
        e: for (var X = 0, ee = z.length, K = ee >>> 1; X < K; ) {
          var se = 2 * (X + 1) - 1, pe = z[se], A = se + 1, J = z[A];
          if (0 > u(pe, I))
            A < ee && 0 > u(J, pe) ? (z[X] = J, z[A] = I, X = A) : (z[X] = pe, z[se] = I, X = se);
          else if (A < ee && 0 > u(J, I))
            z[X] = J, z[A] = I, X = A;
          else break e;
        }
      }
      return L;
    }
    function u(z, L) {
      var I = z.sortIndex - L.sortIndex;
      return I !== 0 ? I : z.id - L.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, h = d.now();
      n.unstable_now = function() {
        return d.now() - h;
      };
    }
    var p = [], m = [], y = 1, g = null, v = 3, x = !1, w = !1, _ = !1, N = !1, C = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    function E(z) {
      for (var L = a(m); L !== null; ) {
        if (L.callback === null) r(m);
        else if (L.startTime <= z)
          r(m), L.sortIndex = L.expirationTime, i(p, L);
        else break;
        L = a(m);
      }
    }
    function H(z) {
      if (_ = !1, E(z), !w)
        if (a(p) !== null)
          w = !0, D || (D = !0, ne());
        else {
          var L = a(m);
          L !== null && j(H, L.startTime - z);
        }
    }
    var D = !1, R = -1, V = 5, G = -1;
    function le() {
      return N ? !0 : !(n.unstable_now() - G < V);
    }
    function te() {
      if (N = !1, D) {
        var z = n.unstable_now();
        G = z;
        var L = !0;
        try {
          e: {
            w = !1, _ && (_ = !1, U(R), R = -1), x = !0;
            var I = v;
            try {
              t: {
                for (E(z), g = a(p); g !== null && !(g.expirationTime > z && le()); ) {
                  var X = g.callback;
                  if (typeof X == "function") {
                    g.callback = null, v = g.priorityLevel;
                    var ee = X(
                      g.expirationTime <= z
                    );
                    if (z = n.unstable_now(), typeof ee == "function") {
                      g.callback = ee, E(z), L = !0;
                      break t;
                    }
                    g === a(p) && r(p), E(z);
                  } else r(p);
                  g = a(p);
                }
                if (g !== null) L = !0;
                else {
                  var K = a(m);
                  K !== null && j(
                    H,
                    K.startTime - z
                  ), L = !1;
                }
              }
              break e;
            } finally {
              g = null, v = I, x = !1;
            }
            L = void 0;
          }
        } finally {
          L ? ne() : D = !1;
        }
      }
    }
    var ne;
    if (typeof T == "function")
      ne = function() {
        T(te);
      };
    else if (typeof MessageChannel < "u") {
      var ie = new MessageChannel(), M = ie.port2;
      ie.port1.onmessage = te, ne = function() {
        M.postMessage(null);
      };
    } else
      ne = function() {
        C(te, 0);
      };
    function j(z, L) {
      R = C(function() {
        z(n.unstable_now());
      }, L);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, n.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < z ? Math.floor(1e3 / z) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, n.unstable_next = function(z) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var I = v;
      v = L;
      try {
        return z();
      } finally {
        v = I;
      }
    }, n.unstable_requestPaint = function() {
      N = !0;
    }, n.unstable_runWithPriority = function(z, L) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var I = v;
      v = z;
      try {
        return L();
      } finally {
        v = I;
      }
    }, n.unstable_scheduleCallback = function(z, L, I) {
      var X = n.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? X + I : X) : I = X, z) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return ee = I + ee, z = {
        id: y++,
        callback: L,
        priorityLevel: z,
        startTime: I,
        expirationTime: ee,
        sortIndex: -1
      }, I > X ? (z.sortIndex = I, i(m, z), a(p) === null && z === a(m) && (_ ? (U(R), R = -1) : _ = !0, j(H, I - X))) : (z.sortIndex = ee, i(p, z), w || x || (w = !0, D || (D = !0, ne()))), z;
    }, n.unstable_shouldYield = le, n.unstable_wrapCallback = function(z) {
      var L = v;
      return function() {
        var I = v;
        v = L;
        try {
          return z.apply(this, arguments);
        } finally {
          v = I;
        }
      };
    };
  })(Vd)), Vd;
}
var yy;
function r_() {
  return yy || (yy = 1, jd.exports = l_()), jd.exports;
}
var Id = { exports: {} }, wt = {};
var vy;
function s_() {
  if (vy) return wt;
  vy = 1;
  var n = pr();
  function i(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var r = {
    d: {
      f: a,
      r: function() {
        throw Error(i(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, u = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function h(y, g, v) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: x == null ? null : x === d ? d : "" + x,
      children: y,
      containerInfo: g,
      implementation: v
    };
  }
  var p = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, g) {
    if (y === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, wt.browser = function(y) {
    return { $$typeof: c, _reason: y };
  }, wt.createPortal = function(y, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(i(299));
    return h(y, g, null, v);
  }, wt.flushSync = function(y) {
    var g = p.T, v = r.p;
    try {
      if (p.T = null, r.p = 2, y) return y();
    } finally {
      p.T = g, r.p = v, r.d.f();
    }
  }, wt.preconnect = function(y, g) {
    typeof y == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(y, g));
  }, wt.prefetchDNS = function(y) {
    typeof y == "string" && r.d.D(y);
  }, wt.preinit = function(y, g) {
    if (typeof y == "string" && g && typeof g.as == "string") {
      var v = g.as, x = m(v, g.crossOrigin), w = typeof g.integrity == "string" ? g.integrity : void 0, _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? r.d.S(
        y,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: x,
          integrity: w,
          fetchPriority: _
        }
      ) : v === "script" && r.d.X(y, {
        crossOrigin: x,
        integrity: w,
        fetchPriority: _,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, wt.preinitModule = function(y, g) {
    if (typeof y == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = m(
            g.as,
            g.crossOrigin
          );
          r.d.M(y, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && r.d.M(y);
  }, wt.preload = function(y, g) {
    if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, x = m(v, g.crossOrigin);
      r.d.L(y, v, {
        crossOrigin: x,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, wt.preloadModule = function(y, g) {
    if (typeof y == "string")
      if (g) {
        var v = m(g.as, g.crossOrigin);
        r.d.m(y, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else r.d.m(y);
  }, wt.requestFormReset = function(y) {
    r.d.r(y);
  }, wt.unstable_batchedUpdates = function(y, g) {
    return y(g);
  }, wt.useFormState = function(y, g, v) {
    return p.H.useFormState(y, g, v);
  }, wt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, wt.version = "19.3.0", wt;
}
var by;
function eb() {
  if (by) return Id.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Id.exports = s_(), Id.exports;
}
var xy;
function u_() {
  if (xy) return Xl;
  xy = 1;
  var n = r_(), i = pr(), a = eb();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++)
        t += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    for (var t = e, o = t; o && !o.alternate; )
      t = o, (t.flags & 4098) !== 0 && (e = t.return), o = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (c(e) !== e)
      throw Error(r(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var o = e, l = t; ; ) {
      var s = o.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (l = s.return, l !== null) {
          o = l;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === o) return p(s), e;
          if (f === l) return p(s), t;
          f = f.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== l.return) o = s, l = f;
      else {
        for (var b = !1, S = s.child; S; ) {
          if (S === o) {
            b = !0, o = s, l = f;
            break;
          }
          if (S === l) {
            b = !0, l = s, o = f;
            break;
          }
          S = S.sibling;
        }
        if (!b) {
          for (S = f.child; S; ) {
            if (S === o) {
              b = !0, o = f, l = s;
              break;
            }
            if (S === l) {
              b = !0, l = f, o = s;
              break;
            }
            S = S.sibling;
          }
          if (!b) throw Error(r(189));
        }
      }
      if (o.alternate !== l) throw Error(r(190));
    }
    if (o.tag !== 3) throw Error(r(188));
    return o.stateNode.current === o ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = y(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function g(e, t, o, l, s, f) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && o(e, l, s, f) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && g(
        e.child,
        t,
        o,
        l,
        s,
        f
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function v(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function x(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function w(e) {
    var t = [null, null], o = v(e);
    return o === null || _(
      t,
      e,
      o.child,
      { foundSelf: !1 }
    ), t;
  }
  function _(e, t, o, l) {
    for (; o !== null; ) {
      if (o === t) l.foundSelf = !0;
      else if (o.tag === 5 || o.tag === 27 || o.tag === 6) {
        if (l.foundSelf) return e[1] = o, !0;
        e[0] = o;
      } else if ((o.tag !== 22 || o.memoizedState === null) && _(
        e,
        t,
        o.child,
        l
      ))
        return !0;
      o = o.sibling;
    }
    return !1;
  }
  function N(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var C = null, U = null;
  function T(e, t, o) {
    return e === o ? !0 : e === t ? (C = e, !0) : !1;
  }
  function E(e, t, o) {
    return e === o ? (U = e, !1) : e === t ? (U !== null && (C = e), !0) : !1;
  }
  function H(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function D(e, t, o) {
    for (var l = 0, s = e; s; s = o(s)) l++;
    s = 0;
    for (var f = t; f; f = o(f)) s++;
    for (; 0 < l - s; ) e = o(e), l--;
    for (; 0 < s - l; ) t = o(t), s--;
    for (; l--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = o(e), t = o(t);
    }
    return null;
  }
  var R = Object.assign, V = /* @__PURE__ */ Symbol.for("react.element"), G = /* @__PURE__ */ Symbol.for("react.transitional.element"), le = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), ne = /* @__PURE__ */ Symbol.for("react.strict_mode"), ie = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), ee = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), se = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), pe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), A = /* @__PURE__ */ Symbol.for("react.view_transition"), J = /* @__PURE__ */ Symbol.for("react.recoverable"), de = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = de && e[de] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === W ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case ie:
        return "Profiler";
      case ne:
        return "StrictMode";
      case L:
        return "Suspense";
      case I:
        return "SuspenseList";
      case K:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case le:
          return "Portal";
        case j:
          return e.displayName || "Context";
        case M:
          return (e._context.displayName || "Context") + ".Consumer";
        case z:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case X:
          return t = e.displayName || null, t !== null ? t : ce(e.type) || "Memo";
        case ee:
          t = e._payload, e = e._init;
          try {
            return ce(e(t));
          } catch {
          }
      }
    return null;
  }
  var he = Array.isArray, ue = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, be = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, _e = [], Ee = -1;
  function Ce(e) {
    return { current: e };
  }
  function He(e) {
    0 > Ee || (e.current = _e[Ee], _e[Ee] = null, Ee--);
  }
  function ze(e, t) {
    Ee++, _e[Ee] = e.current, e.current = t;
  }
  var tt = Ce(null), St = Ce(null), dt = Ce(null), On = Ce(null);
  function on(e, t) {
    switch (ze(dt, t), ze(St, e), ze(tt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = wm(t), e = Sm(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    He(tt), ze(tt, e);
  }
  function Ht() {
    He(tt), He(St), He(dt);
  }
  function Nt(e) {
    var t = e.memoizedState;
    t !== null && (Ma._currentValue = t.memoizedState, ze(On, e)), t = tt.current;
    var o = Sm(t, e.type);
    t !== o && (ze(St, e), ze(tt, o));
  }
  function kt(e) {
    St.current === e && (He(tt), He(St)), On.current === e && (He(On), Ma._currentValue = be);
  }
  var Xt, zn;
  function an(e) {
    if (Xt === void 0)
      try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        Xt = t && t[1] || "", zn = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xt + e + zn;
  }
  var Wi = !1;
  function Ga(e, t) {
    if (!e || Wi) return "";
    Wi = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var ae = function() {
                throw Error();
              };
              if (Object.defineProperty(ae.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ae, []);
                } catch (ge) {
                  var q = ge;
                }
                Reflect.construct(e, [], ae);
              } else {
                try {
                  ae.call();
                } catch (ge) {
                  q = ge;
                }
                ae = !1;
                try {
                  var Q = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), ae = !0, new e();
                } finally {
                  ae && (Q !== void 0 ? Object.defineProperty(e.prototype, "props", Q) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ge) {
                q = ge;
              }
              (ae = e()) && typeof ae.catch == "function" && ae.catch(function() {
              });
            }
          } catch (ge) {
            if (ge && q && typeof ge.stack == "string")
              return [ge.stack, q.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = l.DetermineComponentFrameRoot(), b = f[0], S = f[1];
      if (b && S) {
        var O = b.split(`
`), $ = S.split(`
`);
        for (s = l = 0; l < O.length && !O[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; s < $.length && !$[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (l === O.length || s === $.length)
          for (l = O.length - 1, s = $.length - 1; 1 <= l && 0 <= s && O[l] !== $[s]; )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (O[l] !== $[s]) {
            if (l !== 1 || s !== 1)
              do
                if (l--, s--, 0 > s || O[l] !== $[s]) {
                  var P = `
` + O[l].replace(" at new ", " at ");
                  return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      Wi = !1, Error.prepareStackTrace = o;
    }
    return (o = e ? e.displayName || e.name : "") ? an(o) : "";
  }
  function Pu(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return an(e.type);
      case 16:
        return an("Lazy");
      case 13:
        return e.child !== t && t !== null ? an("Suspense Fallback") : an("Suspense");
      case 19:
        return an("SuspenseList");
      case 0:
      case 15:
        return Ga(e.type, !1);
      case 11:
        return Ga(e.type.render, !1);
      case 1:
        return Ga(e.type, !0);
      case 31:
        return an("Activity");
      case 30:
        return an("ViewTransition");
      default:
        return "";
    }
  }
  function _r(e) {
    try {
      var t = "", o = null;
      do
        t += Pu(e, o), o = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Za = Object.prototype.hasOwnProperty, Qa = n.unstable_scheduleCallback, Ka = n.unstable_cancelCallback, Wu = n.unstable_shouldYield, ec = n.unstable_requestPaint, Tt = n.unstable_now, tc = n.unstable_getCurrentPriorityLevel, Er = n.unstable_ImmediatePriority, Nr = n.unstable_UserBlockingPriority, jo = n.unstable_NormalPriority, nc = n.unstable_LowPriority, Tr = n.unstable_IdlePriority, ic = n.log, oc = n.unstable_setDisableYieldValue, eo = null, Ct = null;
  function Rn(e) {
    if (typeof ic == "function" && oc(e), Ct && typeof Ct.setStrictMode == "function")
      try {
        Ct.setStrictMode(eo, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : rc, ac = Math.log, lc = Math.LN2;
  function rc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ac(e) / lc | 0) | 0;
  }
  var Vo = 256, Io = 262144, qo = 4194304;
  function Kn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function Yo(e, t, o) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0, f = e.suspendedLanes, b = e.pingedLanes;
    e = e.warmLanes;
    var S = l & 134217727;
    return S !== 0 ? (l = S & ~f, l !== 0 ? s = Kn(l) : (b &= S, b !== 0 ? s = Kn(b) : o || (o = S & ~e, o !== 0 && (s = Kn(o))))) : (S = l & ~f, S !== 0 ? s = Kn(S) : b !== 0 ? s = Kn(b) : o || (o = l & ~e, o !== 0 && (s = Kn(o)))), s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s, o = t & -t, f >= o || f === 32 && (o & 4194048) !== 0) ? t : s;
  }
  function to(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Fa(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var l = 31 - At(o), s = 1 << l;
        t |= e[l], o &= ~s;
      }
    return t;
  }
  function Cr(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
        return -1;
    }
  }
  function Ja() {
    var e = qo;
    return qo <<= 1, (qo & 62914560) === 0 && (qo = 4194304), e;
  }
  function Pa(e) {
    for (var t = [], o = 0; 31 > o; o++) t.push(e);
    return t;
  }
  function no(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function sc(e, t, o, l, s, f) {
    var b = e.pendingLanes;
    e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= o, e.entangledLanes &= o, e.errorRecoveryDisabledLanes &= o, e.shellSuspendCounter = 0;
    var S = e.entanglements, O = e.expirationTimes, $ = e.hiddenUpdates;
    for (o = b & ~o; 0 < o; ) {
      var P = 31 - At(o), ae = 1 << P;
      S[P] = 0, O[P] = -1;
      var q = $[P];
      if (q !== null)
        for ($[P] = null, P = 0; P < q.length; P++) {
          var Q = q[P];
          Q !== null && (Q.lane &= -536870913);
        }
      o &= ~ae;
    }
    l !== 0 && Ar(e, l, 0), f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(b & ~t));
  }
  function Ar(e, t, o) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | o & 261930;
  }
  function Mr(e, t) {
    var o = e.entangledLanes |= t;
    for (e = e.entanglements; o; ) {
      var l = 31 - At(o), s = 1 << l;
      s & t | e[l] & t && (e[l] |= t), o &= ~s;
    }
  }
  function Or(e, t) {
    var o = t & -t;
    return o = (o & 42) !== 0 ? 1 : $o(o), (o & (e.suspendedLanes | t)) !== 0 ? 0 : o;
  }
  function $o(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Wa(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zr() {
    var e = fe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ay(e.type));
  }
  function Rr(e, t) {
    var o = fe.p;
    try {
      return fe.p = e, t();
    } finally {
      fe.p = o;
    }
  }
  var pn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + pn, _t = "__reactProps$" + pn, mi = "__reactContainer$" + pn, Dr = "__reactEvents$" + pn, Hr = "__reactListeners$" + pn, uc = "__reactHandles$" + pn, kr = "__reactResources$" + pn, io = "__reactMarker$" + pn, Xo = "__reactLoad$" + pn;
  function Go(e) {
    delete e[ct], delete e[_t], delete e[Hr], delete e[uc];
  }
  function Fn(e) {
    var t;
    if (t = e[ct]) return t;
    for (var o = e.parentNode; o; ) {
      if (t = o[mi] || o[ct]) {
        if (o = t.alternate, t.child !== null || o !== null && o.child !== null)
          for (e = jm(e); e !== null; ) {
            if (o = e[ct]) return o;
            e = jm(e);
          }
        return t;
      }
      e = o, o = e.parentNode;
    }
    return null;
  }
  function yi(e) {
    if (e = e[ct] || e[mi]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function oo(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Jn(e) {
    var t = e[kr];
    return t || (t = e[kr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ot(e) {
    e[io] = !0;
  }
  function el(e) {
    e[Xo] = void 0;
  }
  var Ur = /* @__PURE__ */ new Set(), Br = {};
  function mn(e, t) {
    vi(e, t), vi(e + "Capture", t);
  }
  function vi(e, t) {
    for (Br[e] = t, e = 0; e < t.length; e++)
      Ur.add(t[e]);
  }
  var cc = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tl = {}, lg = {};
  function Sx(e) {
    return Za.call(lg, e) ? !0 : Za.call(tl, e) ? !1 : cc.test(e) ? lg[e] = !0 : (tl[e] = !0, !1);
  }
  var Le = !1;
  function rg() {
    var e = Le;
    return Le = !1, e;
  }
  function Lr(e, t, o) {
    if (Sx(t))
      if (o === null) e.removeAttribute(t);
      else {
        switch (typeof o) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, o);
      }
  }
  function jr(e, t, o) {
    if (o === null) e.removeAttribute(t);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, o);
    }
  }
  function Pn(e, t, o, l) {
    if (l === null) e.removeAttribute(o);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(o);
          return;
      }
      e.setAttributeNS(t, o, l);
    }
  }
  function Gt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function sg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function _x(e, t, o) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var s = l.get, f = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(b) {
          o = "" + b, f.call(this, b);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(b) {
          o = "" + b;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function fc(e) {
    if (!e._valueTracker) {
      var t = sg(e) ? "checked" : "value";
      e._valueTracker = _x(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ug(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var o = t.getValue(), l = "";
    return e && (l = sg(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== o ? (t.setValue(e), !0) : !1;
  }
  var Ex = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      Ex,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function dc(e, t, o, l, s, f, b, S) {
    e.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.type = b : e.removeAttribute("type"), t != null ? b === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Gt(t)) : e.value !== "" + Gt(t) && (e.value = "" + Gt(t)) : b !== "submit" && b !== "reset" || e.removeAttribute("value"), t != null ? b === "number" && e.value == t ? hc(e, Gt(e.value)) : hc(e, Gt(t)) : o != null ? hc(e, Gt(o)) : l != null && e.removeAttribute("value"), s == null && f != null && (e.defaultChecked = !!f), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Gt(S) : e.removeAttribute("name");
  }
  function cg(e, t, o, l, s, f, b, S) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || o != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        fc(e);
        return;
      }
      o = o != null ? "" + Gt(o) : "", t = t != null ? "" + Gt(t) : o, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? s, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = S ? e.checked : !!l, e.defaultChecked = !!l, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b), fc(e);
  }
  function hc(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Zo(e, t, o, l) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < o.length; s++)
        t["$" + o[s]] = !0;
      for (o = 0; o < e.length; o++)
        s = t.hasOwnProperty("$" + e[o].value), e[o].selected !== s && (e[o].selected = s), s && l && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + Gt(o), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === o) {
          e[s].selected = !0, l && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fg(e, t, o) {
    if (t != null && (t = "" + Gt(t), t !== e.value && (e.value = t), o == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = o != null ? "" + Gt(o) : "";
  }
  function dg(e, t, o, l) {
    if (t == null) {
      if (l != null) {
        if (o != null) throw Error(r(92));
        if (he(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        o = l;
      }
      o == null && (o = ""), t = o;
    }
    o = Gt(t), e.defaultValue = o, l = e.textContent, l === o && l !== "" && l !== null && (e.value = l), fc(e);
  }
  function Qo(e, t) {
    if (t) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hg(e, t, o) {
    var l = t.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, o) : typeof o != "number" || o === 0 || Nx.has(t) ? t === "float" ? e.cssFloat = o : e[t] = ("" + o).trim() : e[t] = o + "px";
  }
  function gg(e, t, o) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, o != null) {
      for (var l in o)
        !o.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", Le = !0);
      for (var s in t)
        l = t[s], t.hasOwnProperty(s) && o[s] !== l && (hg(e, s, l), Le = !0);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && hg(e, f, t[f]);
  }
  function gc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
        return !0;
    }
  }
  var Tx = /* @__PURE__ */ new Map([
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
    ["maskType", "mask-type"],
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
  ]), Cx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vr(e) {
    return Cx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Dn() {
  }
  var pc = null;
  function mc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ko = null, Fo = null;
  function pg(e) {
    var t = yi(e);
    if (t && (e = t.stateNode)) {
      var o = e[_t] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (dc(
            e,
            o.value,
            o.defaultValue,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name
          ), t = o.name, o.type === "radio" && t != null) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll(
              'input[name="' + ln(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < o.length; t++) {
              var l = o[t];
              if (l !== e && l.form === e.form) {
                var s = l[_t] || null;
                if (!s) throw Error(r(90));
                dc(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < o.length; t++)
              l = o[t], l.form === e.form && ug(l);
          }
          break e;
        case "textarea":
          fg(e, o.value, o.defaultValue);
          break e;
        case "select":
          t = o.value, t != null && Zo(e, !!o.multiple, t, !1);
      }
    }
  }
  var yc = !1;
  function mg(e, t, o) {
    if (yc) return e(t, o);
    yc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (yc = !1, (Ko !== null || Fo !== null) && (Vs(), Ko && (t = Ko, e = Fo, Fo = Ko = null, pg(t), e)))
        for (t = 0; t < e.length; t++) pg(e[t]);
    }
  }
  function nl(e, t) {
    var o = e.stateNode;
    if (o === null) return null;
    var l = o[_t] || null;
    if (l === null) return null;
    o = l[t];
    e: switch (t) {
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (o && typeof o != "function")
      throw Error(
        r(231, t, typeof o)
      );
    return o;
  }
  var Wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vc = !1;
  if (Wn)
    try {
      var il = {};
      Object.defineProperty(il, "passive", {
        get: function() {
          vc = !0;
        }
      }), window.addEventListener("test", il, il), window.removeEventListener("test", il, il);
    } catch {
      vc = !1;
    }
  var bi = null, bc = null, Ir = null;
  function yg() {
    if (Ir) return Ir;
    var e, t = bc, o = t.length, l, s = "value" in bi ? bi.value : bi.textContent, f = s.length;
    for (e = 0; e < o && t[e] === s[e]; e++) ;
    var b = o - e;
    for (l = 1; l <= b && t[o - l] === s[f - l]; l++) ;
    return Ir = s.slice(e, 1 < l ? 1 - l : void 0);
  }
  function qr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yr() {
    return !0;
  }
  function vg() {
    return !1;
  }
  function Mt(e) {
    function t(o, l, s, f, b) {
      this._reactName = o, this._targetInst = s, this.type = l, this.nativeEvent = f, this.target = b, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (o = e[S], this[S] = o ? o(f) : f[S]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Yr : vg, this.isPropagationStopped = vg, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var o = this.nativeEvent;
        o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Yr);
      },
      stopPropagation: function() {
        var o = this.nativeEvent;
        o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Yr);
      },
      persist: function() {
      },
      isPersistent: Yr
    }), t;
  }
  var xi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $r = Mt(xi), ol = R({}, xi, { view: 0, detail: 0 }), Ax = Mt(ol), xc, wc, al, Xr = R({}, ol, {
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
    getModifierState: _c,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== al && (al && e.type === "mousemove" ? (xc = e.screenX - al.screenX, wc = e.screenY - al.screenY) : wc = xc = 0, al = e), xc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : wc;
    }
  }), bg = Mt(Xr), Mx = R({}, Xr, { dataTransfer: 0 }), Ox = Mt(Mx), zx = R({}, ol, { relatedTarget: 0 }), Sc = Mt(zx), Rx = R({}, xi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dx = Mt(Rx), Hx = R({}, xi, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), kx = Mt(Hx), Ux = R({}, xi, { data: 0 }), xg = Mt(Ux), Bx = {
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
  }, Lx = {
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
  }, jx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jx[e]) ? !!t[e] : !1;
  }
  function _c() {
    return Vx;
  }
  var Ix = R({}, ol, {
    key: function(e) {
      if (e.key) {
        var t = Bx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lx[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _c,
    charCode: function(e) {
      return e.type === "keypress" ? qr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), qx = Mt(Ix), Yx = R({}, Xr, {
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
  }), wg = Mt(Yx), $x = R({}, xi, { submitter: 0 }), Xx = Mt($x), Gx = R({}, ol, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _c
  }), Zx = Mt(Gx), Qx = R({}, xi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Kx = Mt(Qx), Fx = R({}, Xr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jx = Mt(Fx), Px = R({}, xi, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Wx = Mt(Px), ew = [9, 13, 27, 32], Ec = Wn && "CompositionEvent" in window, ll = null;
  Wn && "documentMode" in document && (ll = document.documentMode);
  var tw = Wn && "TextEvent" in window && !ll, Sg = Wn && (!Ec || ll && 8 < ll && 11 >= ll), _g = " ", Eg = !1;
  function Ng(e, t) {
    switch (e) {
      case "keyup":
        return ew.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tg(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jo = !1;
  function nw(e, t) {
    switch (e) {
      case "compositionend":
        return Tg(t);
      case "keypress":
        return t.which !== 32 ? null : (Eg = !0, _g);
      case "textInput":
        return e = t.data, e === _g && Eg ? null : e;
      default:
        return null;
    }
  }
  function iw(e, t) {
    if (Jo)
      return e === "compositionend" || !Ec && Ng(e, t) ? (e = yg(), Ir = bc = bi = null, Jo = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Sg && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ow = {
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
  function Cg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ow[e.type] : t === "textarea";
  }
  function Ag(e, t, o, l) {
    Ko ? Fo ? Fo.push(l) : Fo = [l] : Ko = l, t = Gs(t, "onChange"), 0 < t.length && (o = new $r(
      "onChange",
      "change",
      null,
      o,
      l
    ), e.push({ event: o, listeners: t }));
  }
  var rl = null, sl = null;
  function aw(e) {
    pm(e, 0);
  }
  function Gr(e) {
    var t = oo(e);
    if (ug(t)) return e;
  }
  function Mg(e, t) {
    if (e === "change") return t;
  }
  var Og = !1;
  if (Wn) {
    var Nc;
    if (Wn) {
      var Tc = "oninput" in document;
      if (!Tc) {
        var zg = document.createElement("div");
        zg.setAttribute("oninput", "return;"), Tc = typeof zg.oninput == "function";
      }
      Nc = Tc;
    } else Nc = !1;
    Og = Nc && (!document.documentMode || 9 < document.documentMode);
  }
  function Rg() {
    rl && (rl.detachEvent("onpropertychange", Dg), sl = rl = null);
  }
  function Dg(e) {
    if (e.propertyName === "value" && Gr(sl)) {
      var t = [];
      Ag(
        t,
        sl,
        e,
        mc(e)
      ), mg(aw, t);
    }
  }
  function lw(e, t, o) {
    e === "focusin" ? (Rg(), rl = t, sl = o, rl.attachEvent("onpropertychange", Dg)) : e === "focusout" && Rg();
  }
  function rw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gr(sl);
  }
  function sw(e, t) {
    if (e === "click") return Gr(t);
  }
  function uw(e, t) {
    if (e === "input" || e === "change")
      return Gr(t);
  }
  function cw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Zt = typeof Object.is == "function" ? Object.is : cw;
  function ul(e, t) {
    if (Zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var o = Object.keys(e), l = Object.keys(t);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var s = o[l];
      if (!Za.call(t, s) || !Zt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Cc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Hg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function kg(e, t) {
    var o = Hg(e);
    e = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (l = e + o.textContent.length, e <= t && l >= t)
          return { node: o, offset: t - e };
        e = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Hg(o);
    }
  }
  function Ug(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ug(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Bg(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Cc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof t.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) e = t.contentWindow;
      else break;
      t = Cc(e.document);
    }
    return t;
  }
  function Ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var fw = Wn && "documentMode" in document && 11 >= document.documentMode, Po = null, Mc = null, cl = null, Oc = !1;
  function Lg(e, t, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Oc || Po == null || Po !== Cc(l) || (l = Po, "selectionStart" in l && Ac(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), cl && ul(cl, l) || (cl = l, l = Gs(Mc, "onSelect"), 0 < l.length && (t = new $r(
      "onSelect",
      "select",
      null,
      t,
      o
    ), e.push({ event: t, listeners: l }), t.target = Po)));
  }
  function ao(e, t) {
    var o = {};
    return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o;
  }
  var Wo = {
    animationend: ao("Animation", "AnimationEnd"),
    animationiteration: ao("Animation", "AnimationIteration"),
    animationstart: ao("Animation", "AnimationStart"),
    transitionrun: ao("Transition", "TransitionRun"),
    transitionstart: ao("Transition", "TransitionStart"),
    transitioncancel: ao("Transition", "TransitionCancel"),
    transitionend: ao("Transition", "TransitionEnd")
  }, zc = {}, jg = {};
  Wn && (jg = document.createElement("div").style, "AnimationEvent" in window || (delete Wo.animationend.animation, delete Wo.animationiteration.animation, delete Wo.animationstart.animation), "TransitionEvent" in window || delete Wo.transitionend.transition);
  function lo(e) {
    if (zc[e]) return zc[e];
    if (!Wo[e]) return e;
    var t = Wo[e], o;
    for (o in t)
      if (t.hasOwnProperty(o) && o in jg)
        return zc[e] = t[o];
    return e;
  }
  var Vg = lo("animationend"), Ig = lo("animationiteration"), qg = lo("animationstart"), dw = lo("transitionrun"), hw = lo("transitionstart"), gw = lo("transitioncancel"), Yg = lo("transitionend"), $g = /* @__PURE__ */ new Map(), Rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Rc.push("scrollEnd");
  function yn(e, t) {
    $g.set(e, t), mn(t, [e]);
  }
  var pw = 0;
  function ei(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = wn.identifierPrefix;
    var o = pw++;
    return e = "_" + e + "t_" + o.toString(32) + "_", t.autoName = e;
  }
  function Xg(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, o = ba;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var s = e[o[l]];
        if (s != null) {
          if (s === "none") return "none";
          t = t == null ? s : t + (" " + s);
        }
      }
    return t ?? e.default;
  }
  function ti(e, t) {
    return e = Xg(e), t = Xg(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Zr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, rn = [], ea = 0, Dc = 0;
  function Qr() {
    for (var e = ea, t = Dc = ea = 0; t < e; ) {
      var o = rn[t];
      rn[t++] = null;
      var l = rn[t];
      rn[t++] = null;
      var s = rn[t];
      rn[t++] = null;
      var f = rn[t];
      if (rn[t++] = null, l !== null && s !== null) {
        var b = l.pending;
        b === null ? s.next = s : (s.next = b.next, b.next = s), l.pending = s;
      }
      f !== 0 && Gg(o, s, f);
    }
  }
  function Kr(e, t, o, l) {
    rn[ea++] = e, rn[ea++] = t, rn[ea++] = o, rn[ea++] = l, Dc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Hc(e, t, o, l) {
    return Kr(e, t, o, l), Fr(e);
  }
  function ro(e, t) {
    return Kr(e, null, null, t), Fr(e);
  }
  function Gg(e, t, o) {
    e.lanes |= o;
    var l = e.alternate;
    l !== null && (l.lanes |= o);
    for (var s = !1, f = e.return; f !== null; )
      f.childLanes |= o, l = f.alternate, l !== null && (l.childLanes |= o), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (s = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, s && t !== null && (s = 31 - At(o), e = f.hiddenUpdates, l = e[s], l === null ? e[s] = [t] : l.push(t), t.lane = o | 536870912), f) : null;
  }
  function Fr(e) {
    if (50 < Rl)
      throw Rl = 0, js = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ta = {};
  function mw(e, t, o, l) {
    this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ut(e, t, o, l) {
    return new mw(e, t, o, l);
  }
  function kc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ni(e, t) {
    var o = e.alternate;
    return o === null ? (o = Ut(
      e.tag,
      t,
      e.key,
      e.mode
    ), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 1206910976, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, t = e.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o.refCleanup = e.refCleanup, o;
  }
  function Zg(e, t) {
    e.flags &= 1206910978;
    var o = e.alternate;
    return o === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = o.childLanes, e.lanes = o.lanes, e.child = o.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = o.memoizedProps, e.memoizedState = o.memoizedState, e.updateQueue = o.updateQueue, e.type = o.type, t = o.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Jr(e, t, o, l, s, f) {
    var b = 0;
    if (l = e, typeof l == "function") kc(l) && (b = 1);
    else if (typeof l == "string")
      b = $S(
        e,
        o,
        tt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case K:
          return e = Ut(31, o, t, s), e.elementType = K, e.lanes = f, e;
        case te:
          return so(o.children, s, f, t);
        case ne:
          b = 8, s |= 24;
          break;
        case ie:
          return e = Ut(12, o, t, s | 2), e.elementType = ie, e.lanes = f, e;
        case L:
          return e = Ut(13, o, t, s), e.elementType = L, e.lanes = f, e;
        case I:
          return e = Ut(19, o, t, s), e.elementType = I, e.lanes = f, e;
        case se:
        case A:
          return e = s | 32, e = Ut(30, o, t, e), e.elementType = A, e.lanes = f, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case j:
                b = 10;
                break e;
              case M:
                b = 9;
                break e;
              case z:
                b = 11;
                break e;
              case X:
                b = 14;
                break e;
              case ee:
                b = 16, l = null;
                break e;
            }
          b = 29, o = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ut(b, o, t, s), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function so(e, t, o, l) {
    return e = Ut(7, e, l, t), e.lanes = o, e;
  }
  function Uc(e, t, o) {
    return e = Ut(6, e, null, t), e.lanes = o, e;
  }
  function Qg(e) {
    var t = Ut(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Bc(e, t, o) {
    return t = Ut(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = o, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Kg = /* @__PURE__ */ new WeakMap();
  function sn(e, t) {
    if (typeof e == "object" && e !== null) {
      var o = Kg.get(e);
      return o !== void 0 ? o : (t = {
        value: e,
        source: t,
        stack: _r(t)
      }, Kg.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: _r(t)
    };
  }
  var na = [], ia = 0, Pr = null, fl = 0, un = [], cn = 0, wi = null, Hn = 1, kn = "";
  function ii(e, t) {
    na[ia++] = fl, na[ia++] = Pr, Pr = e, fl = t;
  }
  function Fg(e, t, o) {
    un[cn++] = Hn, un[cn++] = kn, un[cn++] = wi, wi = e;
    var l = Hn;
    e = kn;
    var s = 32 - At(l) - 1;
    l &= ~(1 << s), o += 1;
    var f = 32 - At(t) + s;
    if (30 < f) {
      var b = s - s % 5;
      f = (l & (1 << b) - 1).toString(32), l >>= b, s -= b, Hn = 1 << 32 - At(t) + s | o << s | l, kn = f + e;
    } else
      Hn = 1 << f | o << s | l, kn = e;
  }
  function Wr(e) {
    e.return !== null && (ii(e, 1), Fg(e, 1, 0));
  }
  function Lc(e) {
    for (; e === Pr; )
      Pr = na[--ia], na[ia] = null, fl = na[--ia], na[ia] = null;
    for (; e === wi; )
      wi = un[--cn], un[cn] = null, kn = un[--cn], un[cn] = null, Hn = un[--cn], un[cn] = null;
  }
  function Jg(e, t) {
    un[cn++] = Hn, un[cn++] = kn, un[cn++] = wi, Hn = t.id, kn = t.overflow, wi = e;
  }
  var ht = null, Ge = null, Ae = !1, Si = null, fn = !1, jc = Error(r(519));
  function _i(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dl(sn(t, e)), jc;
  }
  function Pg(e) {
    var t = e.stateNode, o = e.type, l = e.memoizedProps;
    switch (t[ct] = e, t[_t] = l, o) {
      case "dialog":
        Oe("cancel", t), Oe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Oe("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Hl.length; o++)
          Oe(Hl[o], t);
        break;
      case "source":
        Oe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Oe("error", t), Oe("load", t);
        break;
      case "details":
        Oe("toggle", t);
        break;
      case "input":
        Oe("invalid", t), cg(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Oe("invalid", t);
        break;
      case "textarea":
        Oe("invalid", t), dg(t, l.value, l.defaultValue, l.children);
    }
    o = l.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || t.textContent === "" + o || l.suppressHydrationWarning === !0 || bm(t.textContent, o) ? (l.popover != null && (Oe("beforetoggle", t), Oe("toggle", t)), l.onScroll != null && Oe("scroll", t), l.onScrollEnd != null && Oe("scrollend", t), l.onClick != null && (t.onclick = Dn), t = !0) : t = !1, t || _i(e, !0);
  }
  function es(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function oa(e) {
    if (e !== ht) return !1;
    if (!Ae) return es(e), Ae = !0, !1;
    var t = e.tag, o;
    if ((o = t !== 3 && t !== 27) && ((o = t === 5) && (o = e.type, o = !(o !== "form" && o !== "button") || md(e.type, e.memoizedProps)), o = !o), o && Ge && _i(e), es(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ge = Lm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ge = Lm(e);
    } else
      t === 27 ? (t = Ge, ji(e.type) ? (e = Nd, Nd = null, Ge = e) : Ge = t) : Ge = ht ? hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function uo() {
    Ge = ht = null, Ae = !1;
  }
  function Vc() {
    var e = Si;
    return e !== null && (jt === null ? jt = e : jt.push.apply(
      jt,
      e
    ), Si = null), e;
  }
  function dl(e) {
    Si === null ? Si = [e] : Si.push(e);
  }
  var Ic = Ce(null), co = null, oi = null;
  function Ei(e, t, o) {
    ze(Ic, t._currentValue), t._currentValue = o;
  }
  function ai(e) {
    e._currentValue = Ic.current, He(Ic);
  }
  function ts(e, t, o) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === o) break;
      e = e.return;
    }
  }
  function qc(e, t, o, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var b = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = s;
          for (var O = 0; O < t.length; O++)
            if (S.context === t[O]) {
              f.lanes |= o, S = f.alternate, S !== null && (S.lanes |= o), ts(
                f.return,
                o,
                e
              ), l || (b = null);
              break e;
            }
          f = S.next;
        }
      } else if (s.tag === 18) {
        if (b = s.return, b === null) throw Error(r(341));
        b.lanes |= o, f = b.alternate, f !== null && (f.lanes |= o), ts(b, o, e), b = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= o, b = s.alternate, b !== null && (b.lanes |= o), ts(
          s.return,
          o,
          e
        ), b = s.child, b = b !== null ? b.sibling : null) : b = s.child;
      if (b !== null) b.return = s;
      else
        for (b = s; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (s = b.sibling, s !== null) {
            s.return = b.return, b = s;
            break;
          }
          b = b.return;
        }
      s = b;
    }
  }
  function fo(e, t, o, l) {
    e = null;
    for (var s = t, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var b = s.alternate;
        if (b === null) throw Error(r(387));
        if (b = b.memoizedProps, b !== null) {
          var S = s.type;
          Zt(s.pendingProps.value, b.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (s === On.current) {
        if (b = s.alternate, b === null) throw Error(r(387));
        b.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Ma) : e = [Ma]);
      }
      s = s.return;
    }
    return e !== null && qc(
      t,
      e,
      o,
      l
    ), t.flags |= 262144, e !== null;
  }
  function ns(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Zt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ho(e) {
    co = e, oi = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return Wg(co, e);
  }
  function is(e, t) {
    return co === null && ho(e), Wg(e, t);
  }
  function Wg(e, t) {
    var o = t._currentValue;
    if (t = { context: t, memoizedValue: o, next: null }, oi === null) {
      if (e === null) throw Error(r(308));
      oi = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else oi = oi.next = t;
    return o;
  }
  var yw = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(o, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(o) {
        return o();
      });
    };
  }, vw = n.unstable_scheduleCallback, bw = n.unstable_NormalPriority, at = {
    $$typeof: j,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yc() {
    return {
      controller: new yw(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hl(e) {
    e.refCount--, e.refCount === 0 && vw(bw, function() {
      e.controller.abort();
    });
  }
  function ep(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var o = e.transitionTypes;
      for (o === null && (o = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var l = t[e];
        o.indexOf(l) === -1 && o.push(l);
      }
    }
  }
  var gl = null;
  function xw(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var pl = null, $c = 0, go = 0, aa = null;
  function ww(e, t) {
    if (pl === null) {
      var o = pl = [];
      $c = 0, go = rd(), aa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          o.push(l);
        }
      };
    }
    return $c++, t.then(tp, tp), t;
  }
  function tp() {
    if (--$c === 0 && (gl = null, pl !== null)) {
      aa !== null && (aa.status = "fulfilled");
      var e = pl;
      pl = null, go = 0, aa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Sw(e, t) {
    var o = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        o.push(s);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var s = 0; s < o.length; s++) (0, o[s])(t);
      },
      function(s) {
        for (l.status = "rejected", l.reason = s, s = 0; s < o.length; s++)
          (0, o[s])(void 0);
      }
    ), l;
  }
  var np = ue.S;
  ue.S = function(e, t) {
    if (Q0 = Tt(), typeof t == "object" && t !== null && typeof t.then == "function" && ww(e, t), gl !== null)
      for (var o = _a; o !== null; )
        ep(o, gl), o = o.next;
    if (o = e.types, o !== null) {
      for (var l = _a; l !== null; )
        ep(l, o), l = l.next;
      if (go !== 0) {
        l = gl, l === null && (l = gl = []);
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          l.indexOf(f) === -1 && l.push(f);
        }
      }
    }
    np !== null && np(e, t);
  };
  var po = Ce(null);
  function Xc() {
    var e = po.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function os(e, t) {
    t === null ? ze(po, po.current) : ze(po, t.pool);
  }
  function ip() {
    var e = Xc();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var la = Error(r(460)), Gc = Error(r(474)), as = Error(r(542)), ls = { then: function() {
  } };
  function op(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ap(e, t, o) {
    switch (o = e[o], o === void 0 ? e.push(t) : o !== t && (t.then(Dn, Dn), t = o), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, rp(e), e === void 0 && !("reason" in t) ? Error(r(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Dn, Dn);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, rp(e), e;
        }
        throw yo = t, la;
    }
  }
  function mo(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (o) {
      throw o !== null && typeof o == "object" && typeof o.then == "function" ? (yo = o, la) : o;
    }
  }
  var yo = null;
  function lp() {
    if (yo === null) throw Error(r(459));
    var e = yo;
    return yo = null, e;
  }
  function rp(e) {
    if (e === la || e === as)
      throw Error(r(483));
  }
  var ra = null, ml = 0;
  function rs(e) {
    var t = ml;
    return ml += 1, ra === null && (ra = []), ap(ra, e, t);
  }
  function Ni(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ss(e, t) {
    throw t.$$typeof === V ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function sp(e) {
    function t(Y, B) {
      if (e) {
        var Z = Y.deletions;
        Z === null ? (Y.deletions = [B], Y.flags |= 16) : Z.push(B);
      }
    }
    function o(Y, B) {
      if (!e) return null;
      for (; B !== null; )
        t(Y, B), B = B.sibling;
      return null;
    }
    function l(Y) {
      for (var B = /* @__PURE__ */ new Map(); Y !== null; )
        Y.key === null ? B.set(Y.index, Y) : B.set(Y.key, Y), Y = Y.sibling;
      return B;
    }
    function s(Y, B) {
      return Y = ni(Y, B), Y.index = 0, Y.sibling = null, Y;
    }
    function f(Y, B, Z) {
      return Y.index = Z, e ? (Z = Y.alternate, Z !== null ? (Z = Z.index, Z < B ? (Y.flags |= 2, B) : Z) : (Y.flags |= 134217730, B)) : (Y.flags |= 1048576, B);
    }
    function b(Y) {
      return e && Y.alternate === null && (Y.flags |= 134217730), Y;
    }
    function S(Y, B, Z, oe) {
      return B === null || B.tag !== 6 ? (B = Uc(Z, Y.mode, oe), B.return = Y, B) : (B = s(B, Z), B.return = Y, B);
    }
    function O(Y, B, Z, oe) {
      var me = Z.type;
      return me === te ? (Y = P(
        Y,
        B,
        Z.props.children,
        oe,
        Z.key
      ), Ni(Y, Z), Y) : B !== null && (B.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ee && mo(me) === B.type) ? (B = s(B, Z.props), Ni(B, Z), B.return = Y, B) : (B = Jr(
        Z.type,
        Z.key,
        Z.props,
        null,
        Y.mode,
        oe
      ), Ni(B, Z), B.return = Y, B);
    }
    function $(Y, B, Z, oe) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== Z.containerInfo || B.stateNode.implementation !== Z.implementation ? (B = Bc(Z, Y.mode, oe), B.return = Y, B) : (B = s(B, Z.children || []), B.return = Y, B);
    }
    function P(Y, B, Z, oe, me) {
      return B === null || B.tag !== 7 ? (B = so(
        Z,
        Y.mode,
        oe,
        me
      ), B.return = Y, B) : (B = s(B, Z), B.return = Y, B);
    }
    function ae(Y, B, Z) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return B = Uc(
          "" + B,
          Y.mode,
          Z
        ), B.return = Y, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case G:
            return Z = Jr(
              B.type,
              B.key,
              B.props,
              null,
              Y.mode,
              Z
            ), Ni(Z, B), Z.return = Y, Z;
          case le:
            return B = Bc(
              B,
              Y.mode,
              Z
            ), B.return = Y, B;
          case ee:
            return B = mo(B), ae(Y, B, Z);
        }
        if (he(B) || re(B))
          return B = so(
            B,
            Y.mode,
            Z,
            null
          ), B.return = Y, B;
        if (typeof B.then == "function")
          return ae(Y, rs(B), Z);
        if (B.$$typeof === j)
          return ae(
            Y,
            is(Y, B),
            Z
          );
        ss(Y, B);
      }
      return null;
    }
    function q(Y, B, Z, oe) {
      var me = B !== null ? B.key : null;
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return me !== null ? null : S(Y, B, "" + Z, oe);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case G:
            return Z.key === me ? O(Y, B, Z, oe) : null;
          case le:
            return Z.key === me ? $(Y, B, Z, oe) : null;
          case ee:
            return Z = mo(Z), q(Y, B, Z, oe);
        }
        if (he(Z) || re(Z))
          return me !== null ? null : P(Y, B, Z, oe, null);
        if (typeof Z.then == "function")
          return q(
            Y,
            B,
            rs(Z),
            oe
          );
        if (Z.$$typeof === j)
          return q(
            Y,
            B,
            is(Y, Z),
            oe
          );
        ss(Y, Z);
      }
      return null;
    }
    function Q(Y, B, Z, oe, me) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return Y = Y.get(Z) || null, S(B, Y, "" + oe, me);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case G:
            return Y = Y.get(
              oe.key === null ? Z : oe.key
            ) || null, O(B, Y, oe, me);
          case le:
            return Y = Y.get(
              oe.key === null ? Z : oe.key
            ) || null, $(B, Y, oe, me);
          case ee:
            return oe = mo(oe), Q(
              Y,
              B,
              Z,
              oe,
              me
            );
        }
        if (he(oe) || re(oe))
          return Y = Y.get(Z) || null, P(B, Y, oe, me, null);
        if (typeof oe.then == "function")
          return Q(
            Y,
            B,
            Z,
            rs(oe),
            me
          );
        if (oe.$$typeof === j)
          return Q(
            Y,
            B,
            Z,
            is(B, oe),
            me
          );
        ss(B, oe);
      }
      return null;
    }
    function ge(Y, B, Z, oe) {
      for (var me = null, De = null, xe = B, we = B = 0, st = null; xe !== null && we < Z.length; we++) {
        xe.index > we ? (st = xe, xe = null) : st = xe.sibling;
        var ke = q(
          Y,
          xe,
          Z[we],
          oe
        );
        if (ke === null) {
          xe === null && (xe = st);
          break;
        }
        e && xe && ke.alternate === null && t(Y, xe), B = f(ke, B, we), De === null ? me = ke : De.sibling = ke, De = ke, xe = st;
      }
      if (we === Z.length)
        return o(Y, xe), Ae && ii(Y, we), me;
      if (xe === null) {
        for (; we < Z.length; we++)
          xe = ae(Y, Z[we], oe), xe !== null && (B = f(
            xe,
            B,
            we
          ), De === null ? me = xe : De.sibling = xe, De = xe);
        return Ae && ii(Y, we), me;
      }
      for (xe = l(xe); we < Z.length; we++)
        st = Q(
          xe,
          Y,
          we,
          Z[we],
          oe
        ), st !== null && (e && (ke = st.alternate, ke !== null && xe.delete(ke.key === null ? we : ke.key)), B = f(
          st,
          B,
          we
        ), De === null ? me = st : De.sibling = st, De = st);
      return e && xe.forEach(function($i) {
        return t(Y, $i);
      }), Ae && ii(Y, we), me;
    }
    function ve(Y, B, Z, oe) {
      if (Z == null) throw Error(r(151));
      for (var me = null, De = null, xe = B, we = B = 0, st = null, ke = Z.next(); xe !== null && !ke.done; we++, ke = Z.next()) {
        xe.index > we ? (st = xe, xe = null) : st = xe.sibling;
        var $i = q(Y, xe, ke.value, oe);
        if ($i === null) {
          xe === null && (xe = st);
          break;
        }
        e && xe && $i.alternate === null && t(Y, xe), B = f($i, B, we), De === null ? me = $i : De.sibling = $i, De = $i, xe = st;
      }
      if (ke.done)
        return o(Y, xe), Ae && ii(Y, we), me;
      if (xe === null) {
        for (; !ke.done; we++, ke = Z.next())
          ke = ae(Y, ke.value, oe), ke !== null && (B = f(ke, B, we), De === null ? me = ke : De.sibling = ke, De = ke);
        return Ae && ii(Y, we), me;
      }
      for (xe = l(xe); !ke.done; we++, ke = Z.next())
        ke = Q(xe, Y, we, ke.value, oe), ke !== null && (e && (st = ke.alternate, st !== null && xe.delete(
          st.key === null ? we : st.key
        )), B = f(ke, B, we), De === null ? me = ke : De.sibling = ke, De = ke);
      return e && xe.forEach(function(n_) {
        return t(Y, n_);
      }), Ae && ii(Y, we), me;
    }
    function Te(Y, B, Z, oe) {
      if (typeof Z == "object" && Z !== null && Z.type === te && Z.key === null && Z.props.ref === void 0 && (Z = Z.props.children), typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case G:
            e: {
              for (var me = Z.key; B !== null; ) {
                if (B.key === me) {
                  if (me = Z.type, me === te) {
                    if (B.tag === 7) {
                      o(
                        Y,
                        B.sibling
                      ), oe = s(
                        B,
                        Z.props.children
                      ), Ni(oe, Z), oe.return = Y, Y = oe;
                      break e;
                    }
                  } else if (B.elementType === me || typeof me == "object" && me !== null && me.$$typeof === ee && mo(me) === B.type) {
                    o(
                      Y,
                      B.sibling
                    ), oe = s(B, Z.props), Ni(oe, Z), oe.return = Y, Y = oe;
                    break e;
                  }
                  o(Y, B);
                  break;
                } else t(Y, B);
                B = B.sibling;
              }
              Z.type === te ? (oe = so(
                Z.props.children,
                Y.mode,
                oe,
                Z.key
              ), Ni(oe, Z), oe.return = Y, Y = oe) : (oe = Jr(
                Z.type,
                Z.key,
                Z.props,
                null,
                Y.mode,
                oe
              ), Ni(oe, Z), oe.return = Y, Y = oe);
            }
            return b(Y);
          case le:
            e: {
              for (me = Z.key; B !== null; ) {
                if (B.key === me)
                  if (B.tag === 4 && B.stateNode.containerInfo === Z.containerInfo && B.stateNode.implementation === Z.implementation) {
                    o(
                      Y,
                      B.sibling
                    ), oe = s(B, Z.children || []), oe.return = Y, Y = oe;
                    break e;
                  } else {
                    o(Y, B);
                    break;
                  }
                else t(Y, B);
                B = B.sibling;
              }
              oe = Bc(Z, Y.mode, oe), oe.return = Y, Y = oe;
            }
            return b(Y);
          case ee:
            return Z = mo(Z), Te(
              Y,
              B,
              Z,
              oe
            );
        }
        if (he(Z))
          return ge(
            Y,
            B,
            Z,
            oe
          );
        if (re(Z)) {
          if (me = re(Z), typeof me != "function") throw Error(r(150));
          return Z = me.call(Z), ve(
            Y,
            B,
            Z,
            oe
          );
        }
        if (typeof Z.then == "function")
          return Te(
            Y,
            B,
            rs(Z),
            oe
          );
        if (Z.$$typeof === j)
          return Te(
            Y,
            B,
            is(Y, Z),
            oe
          );
        ss(Y, Z);
      }
      return typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint" ? (Z = "" + Z, B !== null && B.tag === 6 ? (o(Y, B.sibling), oe = s(B, Z), oe.return = Y, Y = oe) : (o(Y, B), oe = Uc(Z, Y.mode, oe), oe.return = Y, Y = oe), b(Y)) : o(Y, B);
    }
    return function(Y, B, Z, oe) {
      try {
        ml = 0;
        var me = Te(
          Y,
          B,
          Z,
          oe
        );
        return ra = null, me;
      } catch (xe) {
        if (xe === la || xe === as) throw xe;
        var De = Ut(29, xe, null, Y.mode);
        return De.lanes = oe, De.return = Y, De;
      }
    };
  }
  var vo = sp(!0), up = sp(!1), Ti = !1;
  function Zc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Qc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ci(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ai(e, t, o) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (je & 2) !== 0) {
      var s = l.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, t = Fr(e), Gg(e, null, o), t;
    }
    return Kr(e, l, t, o), Fr(e);
  }
  function yl(e, t, o) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (o & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, o |= l, t.lanes = o, Mr(e, o);
    }
  }
  function Kc(e, t) {
    var o = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, o === l)) {
      var s = null, f = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var b = {
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          };
          f === null ? s = f = b : f = f.next = b, o = o.next;
        } while (o !== null);
        f === null ? s = f = t : f = f.next = t;
      } else s = f = t;
      o = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = o;
      return;
    }
    e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = t : e.next = t, o.lastBaseUpdate = t;
  }
  var Fc = !1;
  function vl() {
    if (Fc) {
      var e = aa;
      if (e !== null) throw e;
    }
  }
  function bl(e, t, o, l) {
    Fc = !1;
    var s = e.updateQueue;
    Ti = !1;
    var f = s.firstBaseUpdate, b = s.lastBaseUpdate, S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var O = S, $ = O.next;
      O.next = null, b === null ? f = $ : b.next = $, b = O;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, S = P.lastBaseUpdate, S !== b && (S === null ? P.firstBaseUpdate = $ : S.next = $, P.lastBaseUpdate = O));
    }
    if (f !== null) {
      var ae = s.baseState;
      b = 0, P = $ = O = null, S = f;
      do {
        var q = S.lane & -536870913, Q = q !== S.lane;
        if (Q ? (Re & q) === q : (l & q) === q) {
          q !== 0 && q === go && (Fc = !0), P !== null && (P = P.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = e, ve = S;
            q = t;
            var Te = o;
            switch (ve.tag) {
              case 1:
                if (ge = ve.payload, typeof ge == "function") {
                  ae = ge.call(Te, ae, q);
                  break e;
                }
                ae = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = ve.payload, q = typeof ge == "function" ? ge.call(Te, ae, q) : ge, q == null) break e;
                ae = R({}, ae, q);
                break e;
              case 2:
                Ti = !0;
            }
          }
          q = S.callback, q !== null && (e.flags |= 64, Q && (e.flags |= 8192), Q = s.callbacks, Q === null ? s.callbacks = [q] : Q.push(q));
        } else
          Q = {
            lane: q,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, P === null ? ($ = P = Q, O = ae) : P = P.next = Q, b |= q;
        if (S = S.next, S === null) {
          if (S = s.shared.pending, S === null)
            break;
          Q = S, S = Q.next, Q.next = null, s.lastBaseUpdate = Q, s.shared.pending = null;
        }
      } while (!0);
      P === null && (O = ae), s.baseState = O, s.firstBaseUpdate = $, s.lastBaseUpdate = P, f === null && (s.shared.lanes = 0), ki |= b, e.lanes = b, e.memoizedState = ae;
    }
  }
  function cp(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function fp(e, t) {
    var o = e.callbacks;
    if (o !== null)
      for (e.callbacks = null, e = 0; e < o.length; e++)
        cp(o[e], t);
  }
  var Mi = Ce(null), us = Ce(0);
  function dp(e, t) {
    e = ci, ze(us, e), ze(Mi, t), ci = e | t.baseLanes;
  }
  function Jc() {
    ze(us, ci), ze(Mi, Mi.current);
  }
  function Pc() {
    ci = us.current, He(Mi), He(us);
  }
  var yt = Ce(null), Et = null;
  function Oi(e) {
    var t = e.alternate;
    ze(vt, vt.current & 1), ze(yt, e), Et === null && (t === null || Mi.current !== null || t.memoizedState !== null) && (Et = e);
  }
  function Wc(e) {
    ze(vt, vt.current), ze(yt, e), Et === null && (Et = e);
  }
  function hp(e) {
    e.tag === 22 ? (ze(vt, vt.current), ze(yt, e), Et === null && (Et = e)) : zi();
  }
  function zi() {
    ze(vt, vt.current), ze(yt, yt.current);
  }
  function Qt(e) {
    He(yt), Et === e && (Et = null), He(vt);
  }
  var vt = Ce(0);
  function xl(e, t) {
    ze(yt, yt.current), ze(vt, t);
  }
  function ef(e) {
    He(vt), He(yt), Et === e && (Et = null);
  }
  function cs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var o = t.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || _d(o) || Ed(o)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var li = 0, Ne = null, $e = null, lt = null, fs = !1, sa = !1, bo = !1, ds = 0, wl = 0, ua = null, _w = 0;
  function Pe() {
    throw Error(r(321));
  }
  function tf(e, t) {
    if (t === null) return !1;
    for (var o = 0; o < t.length && o < e.length; o++)
      if (!Zt(e[o], t[o])) return !1;
    return !0;
  }
  function nf(e, t, o, l, s, f) {
    return li = f, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ue.H = e === null || e.memoizedState === null ? Fp : Jp, bo = !1, f = o(l, s), bo = !1, sa && (f = pp(
      t,
      o,
      l,
      s
    )), gp(e), f;
  }
  function gp(e) {
    ue.H = bs;
    var t = $e !== null && $e.next !== null;
    if (li = 0, lt = $e = Ne = null, fs = !1, wl = 0, ua = null, t) throw Error(r(300));
    e === null || rt || (e = e.dependencies, e !== null && ns(e) && (rt = !0));
  }
  function pp(e, t, o, l) {
    Ne = e;
    var s = 0;
    do {
      if (sa && (ua = null), wl = 0, sa = !1, 25 <= s) throw Error(r(301));
      if (s += 1, lt = $e = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      ue.H = zw, f = t(o, l);
    } while (sa);
    return f;
  }
  function Ew() {
    var e = ue.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Sl(t) : t, e = e.useState()[0], ($e !== null ? $e.memoizedState : null) !== e && (Ne.flags |= 1024), t;
  }
  function of() {
    var e = ds !== 0;
    return ds = 0, e;
  }
  function af(e, t, o) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o;
  }
  function lf(e) {
    if (fs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      fs = !1;
    }
    li = 0, lt = $e = Ne = null, sa = !1, wl = ds = 0, ua = null;
  }
  function Ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? Ne.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function nt() {
    if ($e === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = lt === null ? Ne.memoizedState : lt.next;
    if (t !== null)
      lt = t, $e = e;
    else {
      if (e === null)
        throw Ne.alternate === null ? Error(r(467)) : Error(r(310));
      $e = e, e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null
      }, lt === null ? Ne.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function hs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sl(e) {
    var t = wl;
    return wl += 1, ua === null && (ua = []), e = ap(ua, e, t), t = Ne, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, ue.H = t === null || t.memoizedState === null ? Fp : Jp), e;
  }
  function gs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Sl(e);
      if (e.$$typeof === J) return;
      if (e.$$typeof === j) return mt(e);
    }
    throw Error(r(438, String(e)));
  }
  function rf(e) {
    var t = null, o = Ne.updateQueue;
    if (o !== null && (t = o.memoCache), t == null) {
      var l = Ne.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), o === null && (o = hs(), Ne.updateQueue = o), o.memoCache = t, o = t.data[t.index], o === void 0)
      for (o = t.data[t.index] = Array(e), l = 0; l < e; l++)
        o[l] = pe;
    return t.index++, o;
  }
  function ri(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ps(e) {
    var t = nt();
    return sf(t, $e, e);
  }
  function sf(e, t, o) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = o;
    var s = e.baseQueue, f = l.pending;
    if (f !== null) {
      if (s !== null) {
        var b = s.next;
        s.next = f.next, f.next = b;
      }
      t.baseQueue = s = f, l.pending = null;
    }
    if (f = e.baseState, s === null) e.memoizedState = f;
    else {
      t = s.next;
      var S = b = null, O = null, $ = t, P = !1;
      do {
        var ae = $.lane & -536870913;
        if (ae !== $.lane ? (Re & ae) === ae : (li & ae) === ae) {
          var q = $.revertLane;
          if (q === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            }), ae === go && (P = !0);
          else if ((li & q) === q) {
            $ = $.next, q === go && (P = !0);
            continue;
          } else
            ae = {
              lane: 0,
              revertLane: $.revertLane,
              gesture: null,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            }, O === null ? (S = O = ae, b = f) : O = O.next = ae, Ne.lanes |= q, ki |= q;
          ae = $.action, bo && o(f, ae), f = $.hasEagerState ? $.eagerState : o(f, ae);
        } else
          q = {
            lane: ae,
            revertLane: $.revertLane,
            gesture: $.gesture,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          }, O === null ? (S = O = q, b = f) : O = O.next = q, Ne.lanes |= ae, ki |= ae;
        $ = $.next;
      } while ($ !== null && $ !== t);
      if (O === null ? b = f : O.next = S, !Zt(f, e.memoizedState) && (rt = !0, P && (o = aa, o !== null)))
        throw o;
      e.memoizedState = f, e.baseState = b, e.baseQueue = O, l.lastRenderedState = f;
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function uf(e) {
    var t = nt(), o = t.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = e;
    var l = o.dispatch, s = o.pending, f = t.memoizedState;
    if (s !== null) {
      o.pending = null;
      var b = s = s.next;
      do
        f = e(f, b.action), b = b.next;
      while (b !== s);
      Zt(f, t.memoizedState) || (rt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), o.lastRenderedState = f;
    }
    return [f, l];
  }
  function mp(e, t, o) {
    var l = Ne, s = nt(), f = Ae;
    if (f) {
      if (o === void 0) throw Error(r(407));
      o = o();
    } else o = t();
    var b = !Zt(
      ($e || s).memoizedState,
      o
    );
    if (b && (s.memoizedState = o, rt = !0), s = s.queue, df(bp.bind(null, l, s, e), [
      e
    ]), e = s.getSnapshot !== t || b || lt !== null && (lt.memoizedState.tag & 1) !== 0, ca(
      e ? 9 : 8,
      { destroy: void 0 },
      vp.bind(null, l, s, o, t),
      null
    ), e) {
      if (l.flags |= 2048, Xe === null) throw Error(r(349));
      f || (li & 127) !== 0 || yp(l, t, o);
    }
    return o;
  }
  function yp(e, t, o) {
    e.flags |= 16384, e = { getSnapshot: t, value: o }, t = Ne.updateQueue, t === null ? (t = hs(), Ne.updateQueue = t, t.stores = [e]) : (o = t.stores, o === null ? t.stores = [e] : o.push(e));
  }
  function vp(e, t, o, l) {
    t.value = o, t.getSnapshot = l, xp(t) && wp(e);
  }
  function bp(e, t, o) {
    return o(function() {
      xp(t) && wp(e);
    });
  }
  function xp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var o = t();
      return !Zt(e, o);
    } catch {
      return !0;
    }
  }
  function wp(e) {
    var t = ro(e, 2);
    t !== null && Vt(t, e, 2);
  }
  function cf(e) {
    var t = Ot();
    if (typeof e == "function") {
      var o = e;
      if (e = o(), bo) {
        Rn(!0);
        try {
          o();
        } finally {
          Rn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ri,
      lastRenderedState: e
    }, t;
  }
  function Sp(e, t, o, l) {
    return e.baseState = o, sf(
      e,
      $e,
      typeof l == "function" ? l : ri
    );
  }
  function Nw(e, t, o, l, s) {
    if (vs(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          f.listeners.push(b);
        }
      };
      ue.T !== null ? o(!0) : f.isTransition = !1, l(f), o = t.pending, o === null ? (f.next = t.pending = f, _p(t, f)) : (f.next = o.next, t.pending = o.next = f);
    }
  }
  function _p(e, t) {
    var o = t.action, l = t.payload, s = e.state;
    if (t.isTransition) {
      var f = ue.T, b = {};
      b.types = f !== null ? f.types : null, ue.T = b;
      try {
        var S = o(s, l), O = ue.S;
        O !== null && O(b, S), Ep(e, t, S);
      } catch ($) {
        ff(e, t, $);
      } finally {
        f !== null && b.types !== null && (f.types = b.types), ue.T = f;
      }
    } else
      try {
        f = o(s, l), Ep(e, t, f);
      } catch ($) {
        ff(e, t, $);
      }
  }
  function Ep(e, t, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(
      function(l) {
        Np(e, t, l);
      },
      function(l) {
        return ff(e, t, l);
      }
    ) : Np(e, t, o);
  }
  function Np(e, t, o) {
    t.status = "fulfilled", t.value = o, Tp(t), e.state = o, t = e.pending, t !== null && (o = t.next, o === t ? e.pending = null : (o = o.next, t.next = o, _p(e, o)));
  }
  function ff(e, t, o) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = o, Tp(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Tp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Cp(e, t) {
    return t;
  }
  function Ap(e, t) {
    if (Ae) {
      var o = Xe.formState;
      if (o !== null) {
        e: {
          var l = Ne;
          if (Ae) {
            if (Ge) {
              t: {
                for (var s = Ge, f = fn; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = hn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                Ge = hn(
                  s.nextSibling
                ), l = s.data === "F!";
                break e;
              }
            }
            _i(l);
          }
          l = !1;
        }
        l && (t = o[0]);
      }
    }
    return o = Ot(), o.memoizedState = o.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cp,
      lastRenderedState: t
    }, o.queue = l, o = Zp.bind(
      null,
      Ne,
      l
    ), l.dispatch = o, l = cf(!1), f = yf.bind(
      null,
      Ne,
      !1,
      l.queue
    ), l = Ot(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = s, o = Nw.bind(
      null,
      Ne,
      s,
      f,
      o
    ), s.dispatch = o, l.memoizedState = e, [t, o, !1];
  }
  function Mp(e) {
    var t = nt();
    return Op(t, $e, e);
  }
  function Op(e, t, o) {
    if (t = sf(
      e,
      t,
      Cp
    )[0], e = ps(ri)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Sl(t);
      } catch (b) {
        throw b === la ? as : b;
      }
    else l = t;
    t = nt();
    var s = t.queue, f = s.dispatch;
    return o !== t.memoizedState && (Ne.flags |= 2048, ca(
      9,
      { destroy: void 0 },
      Tw.bind(null, s, o),
      null
    )), [l, f, e];
  }
  function Tw(e, t) {
    e.action = t;
  }
  function zp(e) {
    var t = nt(), o = $e;
    if (o !== null)
      return Op(t, o, e);
    nt(), t = t.memoizedState, o = nt();
    var l = o.queue.dispatch;
    return o.memoizedState = e, [t, l, !1];
  }
  function ca(e, t, o, l) {
    return e = { tag: e, create: o, deps: l, inst: t, next: null }, t = Ne.updateQueue, t === null && (t = hs(), Ne.updateQueue = t), o = t.lastEffect, o === null ? t.lastEffect = e.next = e : (l = o.next, o.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Rp() {
    return nt().memoizedState;
  }
  function ms(e, t, o, l) {
    var s = Ot();
    Ne.flags |= e, s.memoizedState = ca(
      1 | t,
      { destroy: void 0 },
      o,
      l === void 0 ? null : l
    );
  }
  function ys(e, t, o, l) {
    var s = nt();
    l = l === void 0 ? null : l;
    var f = s.memoizedState.inst;
    $e !== null && l !== null && tf(l, $e.memoizedState.deps) ? s.memoizedState = ca(t, f, o, l) : (Ne.flags |= e, s.memoizedState = ca(
      1 | t,
      f,
      o,
      l
    ));
  }
  function Dp(e, t) {
    ms(8390656, 8, e, t);
  }
  function df(e, t) {
    ys(2048, 8, e, t);
  }
  function Cw(e) {
    Ne.flags |= 4;
    var t = Ne.updateQueue;
    if (t === null)
      t = hs(), Ne.updateQueue = t, t.events = [e];
    else {
      var o = t.events;
      o === null ? t.events = [e] : o.push(e);
    }
  }
  function Hp(e) {
    var t = nt().memoizedState;
    return Cw({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function kp(e, t) {
    return ys(4, 2, e, t);
  }
  function Up(e, t) {
    return ys(4, 4, e, t);
  }
  function Bp(e, t) {
    if (typeof t == "function") {
      e = e();
      var o = t(e);
      return function() {
        typeof o == "function" ? o() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Lp(e, t, o) {
    o = o != null ? o.concat([e]) : null, ys(4, 4, Bp.bind(null, t, e), o);
  }
  function hf() {
  }
  function jp(e, t) {
    var o = nt();
    t = t === void 0 ? null : t;
    var l = o.memoizedState;
    return t !== null && tf(t, l[1]) ? l[0] : (o.memoizedState = [e, t], e);
  }
  function Vp(e, t) {
    var o = nt();
    t = t === void 0 ? null : t;
    var l = o.memoizedState;
    if (t !== null && tf(t, l[1]))
      return l[0];
    if (l = e(), bo) {
      Rn(!0);
      try {
        e();
      } finally {
        Rn(!1);
      }
    }
    return o.memoizedState = [l, t], l;
  }
  function gf(e, t, o) {
    return o === void 0 || (li & 1073741824) !== 0 && (Re & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = o, e = F0(), Ne.lanes |= e, ki |= e, o);
  }
  function Ip(e, t, o, l) {
    return Zt(o, t) ? o : Mi.current !== null ? (e = gf(e, o, l), Zt(e, t) || (rt = !0), e) : (li & 106) === 0 || (li & 1073741824) !== 0 && (Re & 261930) === 0 ? (rt = !0, e.memoizedState = o) : (e = F0(), Ne.lanes |= e, ki |= e, t);
  }
  function qp(e, t, o, l, s) {
    var f = fe.p;
    fe.p = f !== 0 && 8 > f ? f : 8;
    var b = ue.T, S = {};
    S.types = b !== null ? b.types : null, ue.T = S, yf(e, !1, t, o);
    try {
      var O = s(), $ = ue.S;
      if ($ !== null && $(S, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var P = Sw(
          O,
          l
        );
        _l(
          e,
          t,
          P,
          Pt(e)
        );
      } else
        _l(
          e,
          t,
          l,
          Pt(e)
        );
    } catch (ae) {
      _l(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: ae },
        Pt()
      );
    } finally {
      fe.p = f, b !== null && S.types !== null && (b.types = S.types), ue.T = b;
    }
  }
  function Aw() {
  }
  function pf(e, t, o, l) {
    if (e.tag !== 5) throw Error(r(476));
    var s = Yp(e).queue;
    qp(
      e,
      s,
      t,
      be,
      o === null ? Aw : function() {
        return $p(e), o(l);
      }
    );
  }
  function Yp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: be,
      baseState: be,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ri,
        lastRenderedState: be
      },
      next: null
    };
    var o = {};
    return t.next = {
      memoizedState: o,
      baseState: o,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ri,
        lastRenderedState: o
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function $p(e) {
    var t = Yp(e);
    t.next === null && (t = e.alternate.memoizedState), _l(
      e,
      t.next.queue,
      {},
      Pt()
    );
  }
  function mf() {
    return mt(Ma);
  }
  function Xp() {
    return nt().memoizedState;
  }
  function Gp() {
    return nt().memoizedState;
  }
  function Mw(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var o = Pt();
          e = Ci(o);
          var l = Ai(t, e, o);
          l !== null && (Vt(l, t, o), yl(l, t, o)), t = { cache: Yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ow(e, t, o) {
    var l = Pt();
    o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vs(e) ? Qp(t, o) : (o = Hc(e, t, o, l), o !== null && (Vt(o, e, l), Kp(o, t, l)));
  }
  function Zp(e, t, o) {
    var l = Pt();
    _l(e, t, o, l);
  }
  function _l(e, t, o, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vs(e)) Qp(t, s);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var b = t.lastRenderedState, S = f(b, o);
          if (s.hasEagerState = !0, s.eagerState = S, Zt(S, b))
            return Kr(e, t, s, 0), Xe === null && Qr(), !1;
        } catch {
        }
      if (o = Hc(e, t, s, l), o !== null)
        return Vt(o, e, l), Kp(o, t, l), !0;
    }
    return !1;
  }
  function yf(e, t, o, l) {
    if (l = {
      lane: 2,
      revertLane: rd(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vs(e)) {
      if (t) throw Error(r(479));
    } else
      t = Hc(
        e,
        o,
        l,
        2
      ), t !== null && Vt(t, e, 2);
  }
  function vs(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function Qp(e, t) {
    sa = fs = !0;
    var o = e.pending;
    o === null ? t.next = t : (t.next = o.next, o.next = t), e.pending = t;
  }
  function Kp(e, t, o) {
    if ((o & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, o |= l, t.lanes = o, Mr(e, o);
    }
  }
  var bs = {
    readContext: mt,
    use: gs,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useLayoutEffect: Pe,
    useInsertionEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    useHostTransitionStatus: Pe,
    useFormState: Pe,
    useActionState: Pe,
    useOptimistic: Pe,
    useMemoCache: Pe,
    useCacheRefresh: Pe,
    useEffectEvent: Pe
  }, Fp = {
    readContext: mt,
    use: gs,
    useCallback: function(e, t) {
      return Ot().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: Dp,
    useImperativeHandle: function(e, t, o) {
      o = o != null ? o.concat([e]) : null, ms(
        4194308,
        4,
        Bp.bind(null, t, e),
        o
      );
    },
    useLayoutEffect: function(e, t) {
      return ms(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ms(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var o = Ot();
      t = t === void 0 ? null : t;
      var l = e();
      if (bo) {
        Rn(!0);
        try {
          e();
        } finally {
          Rn(!1);
        }
      }
      return o.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, o) {
      var l = Ot();
      if (o !== void 0) {
        var s = o(t);
        if (bo) {
          Rn(!0);
          try {
            o(t);
          } finally {
            Rn(!1);
          }
        }
      } else s = t;
      return l.memoizedState = l.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, l.queue = e, e = e.dispatch = Ow.bind(
        null,
        Ne,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ot();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = cf(e);
      var t = e.queue, o = Zp.bind(null, Ne, t);
      return t.dispatch = o, [e.memoizedState, o];
    },
    useDebugValue: hf,
    useDeferredValue: function(e, t) {
      var o = Ot();
      return gf(o, e, t);
    },
    useTransition: function() {
      var e = cf(!1);
      return e = qp.bind(
        null,
        Ne,
        e.queue,
        !0,
        !1
      ), Ot().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, o) {
      var l = Ne, s = Ot();
      if (Ae) {
        if (o === void 0)
          throw Error(r(407));
        o = o();
      } else {
        if (o = t(), Xe === null)
          throw Error(r(349));
        (Re & 127) !== 0 || yp(l, t, o);
      }
      s.memoizedState = o;
      var f = { value: o, getSnapshot: t };
      return s.queue = f, Dp(bp.bind(null, l, f, e), [
        e
      ]), l.flags |= 2048, ca(
        9,
        { destroy: void 0 },
        vp.bind(
          null,
          l,
          f,
          o,
          t
        ),
        null
      ), o;
    },
    useId: function() {
      var e = Ot(), t = Xe.identifierPrefix;
      if (Ae) {
        var o = kn, l = Hn;
        o = (l & ~(1 << 32 - At(l) - 1)).toString(32) + o, t = "_" + t + "R_" + o, o = ds++, 0 < o && (t += "H" + o.toString(32)), t += "_";
      } else
        o = _w++, t = "_" + t + "r_" + o.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: mf,
    useFormState: Ap,
    useActionState: Ap,
    useOptimistic: function(e) {
      var t = Ot();
      t.memoizedState = t.baseState = e;
      var o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = o, t = yf.bind(
        null,
        Ne,
        !0,
        o
      ), o.dispatch = t, [e, t];
    },
    useMemoCache: rf,
    useCacheRefresh: function() {
      return Ot().memoizedState = Mw.bind(
        null,
        Ne
      );
    },
    useEffectEvent: function(e) {
      var t = Ot(), o = { impl: e };
      return t.memoizedState = o, function() {
        if ((je & 2) !== 0)
          throw Error(r(440));
        return o.impl.apply(void 0, arguments);
      };
    }
  }, Jp = {
    readContext: mt,
    use: gs,
    useCallback: jp,
    useContext: mt,
    useEffect: df,
    useImperativeHandle: Lp,
    useInsertionEffect: kp,
    useLayoutEffect: Up,
    useMemo: Vp,
    useReducer: ps,
    useRef: Rp,
    useState: function() {
      return ps(ri);
    },
    useDebugValue: hf,
    useDeferredValue: function(e, t) {
      var o = nt();
      return Ip(
        o,
        $e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ps(ri)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Sl(e),
        t
      ];
    },
    useSyncExternalStore: mp,
    useId: Xp,
    useHostTransitionStatus: mf,
    useFormState: Mp,
    useActionState: Mp,
    useOptimistic: function(e, t) {
      var o = nt();
      return Sp(o, $e, e, t);
    },
    useMemoCache: rf,
    useCacheRefresh: Gp,
    useEffectEvent: Hp
  }, zw = {
    readContext: mt,
    use: gs,
    useCallback: jp,
    useContext: mt,
    useEffect: df,
    useImperativeHandle: Lp,
    useInsertionEffect: kp,
    useLayoutEffect: Up,
    useMemo: Vp,
    useReducer: uf,
    useRef: Rp,
    useState: function() {
      return uf(ri);
    },
    useDebugValue: hf,
    useDeferredValue: function(e, t) {
      var o = nt();
      return $e === null ? gf(o, e, t) : Ip(
        o,
        $e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = uf(ri)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Sl(e),
        t
      ];
    },
    useSyncExternalStore: mp,
    useId: Xp,
    useHostTransitionStatus: mf,
    useFormState: zp,
    useActionState: zp,
    useOptimistic: function(e, t) {
      var o = nt();
      return $e !== null ? Sp(o, $e, e, t) : (o.baseState = e, [e, o.queue.dispatch]);
    },
    useMemoCache: rf,
    useCacheRefresh: Gp,
    useEffectEvent: Hp
  };
  function vf(e, t, o, l) {
    t = e.memoizedState, o = o(l, t), o = o == null ? t : R({}, t, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var bf = {
    enqueueSetState: function(e, t, o) {
      e = e._reactInternals;
      var l = Pt(), s = Ci(l);
      s.payload = t, o != null && (s.callback = o), t = Ai(e, s, l), t !== null && (Vt(t, e, l), yl(t, e, l));
    },
    enqueueReplaceState: function(e, t, o) {
      e = e._reactInternals;
      var l = Pt(), s = Ci(l);
      s.tag = 1, s.payload = t, o != null && (s.callback = o), t = Ai(e, s, l), t !== null && (Vt(t, e, l), yl(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var o = Pt(), l = Ci(o);
      l.tag = 2, t != null && (l.callback = t), t = Ai(e, l, o), t !== null && (Vt(t, e, o), yl(t, e, o));
    }
  };
  function Pp(e, t, o, l, s, f, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, b) : t.prototype && t.prototype.isPureReactComponent ? !ul(o, l) || !ul(s, f) : !0;
  }
  function Wp(e, t, o, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, l), t.state !== e && bf.enqueueReplaceState(t, t.state, null);
  }
  function xo(e, t) {
    var o = t;
    if ("ref" in t) {
      o = {};
      for (var l in t)
        l !== "ref" && (o[l] = t[l]);
    }
    if (e = e.defaultProps) {
      o === t && (o = R({}, o));
      for (var s in e)
        o[s] === void 0 && (o[s] = e[s]);
    }
    return o;
  }
  function e0(e) {
    Zr(e);
  }
  function t0(e) {
    console.error(e);
  }
  function n0(e) {
    Zr(e);
  }
  function xs(e, t) {
    try {
      var o = e.onUncaughtError;
      o(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function i0(e, t, o) {
    try {
      var l = e.onCaughtError;
      l(o.value, {
        componentStack: o.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function xf(e, t, o) {
    return o = Ci(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      xs(e, t);
    }, o;
  }
  function o0(e) {
    return e = Ci(e), e.tag = 3, e;
  }
  function a0(e, t, o, l) {
    var s = o.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = l.value;
      e.payload = function() {
        return s(f);
      }, e.callback = function() {
        i0(t, o, l);
      };
    }
    var b = o.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
      i0(t, o, l), typeof s != "function" && (Ui === null ? Ui = /* @__PURE__ */ new Set([this]) : Ui.add(this));
      var S = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Rw(e, t, o, l, s) {
    if (o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = o.alternate, t !== null && fo(
        t,
        o,
        s,
        !0
      ), o = yt.current, o !== null) {
        switch (o.tag) {
          case 31:
          case 13:
          case 19:
            return Et === null ? Is() : o.alternate === null && We === 0 && (We = 3), o.flags &= -257, o.flags |= 65536, o.lanes = s, l === ls ? o.flags |= 16384 : (t = o.updateQueue, t === null ? o.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), od(e, l, s)), !1;
          case 22:
            return o.flags |= 65536, l === ls ? o.flags |= 16384 : (t = o.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, o.updateQueue = t) : (o = t.retryQueue, o === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : o.add(l)), od(e, l, s)), !1;
        }
        throw Error(r(435, o.tag));
      }
      return od(e, l, s), Is(), !1;
    }
    if (Ae)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, l !== jc && (e = Error(r(422), { cause: l }), dl(sn(e, o)))) : (l !== jc && (t = Error(r(423), {
        cause: l
      }), dl(
        sn(t, o)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, l = sn(l, o), s = xf(
        e.stateNode,
        l,
        s
      ), Kc(e, s), We !== 4 && (We = 2)), !1;
    var f = Error(r(520), { cause: l });
    if (f = sn(f, o), zl === null ? zl = [f] : zl.push(f), We !== 4 && (We = 2), t === null) return !0;
    l = sn(l, o), o = t;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, e = s & -s, o.lanes |= e, e = xf(o.stateNode, l, e), Kc(o, e), !1;
        case 1:
          if (t = o.type, f = o.stateNode, (o.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ui === null || !Ui.has(f))))
            return o.flags |= 65536, s &= -s, o.lanes |= s, s = o0(s), a0(
              s,
              e,
              o,
              l
            ), Kc(o, s), !1;
          break;
        case 22:
          if (o.memoizedState !== null)
            return o.flags |= 65536, !1;
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var wf = Error(r(461)), rt = !1;
  function ft(e, t, o, l) {
    t.child = e === null ? up(t, null, o, l) : vo(
      t,
      e.child,
      o,
      l
    );
  }
  function l0(e, t, o, l, s) {
    o = o.render;
    var f = t.ref;
    if ("ref" in l) {
      var b = {};
      for (var S in l)
        S !== "ref" && (b[S] = l[S]);
    } else b = l;
    return ho(t), l = nf(
      e,
      t,
      o,
      b,
      f,
      s
    ), S = of(), e !== null && !rt ? (af(e, t, s), si(e, t, s)) : (Ae && S && Wr(t), t.flags |= 1, ft(e, t, l, s), t.child);
  }
  function r0(e, t, o, l, s) {
    if (e === null) {
      var f = o.type;
      return typeof f == "function" && !kc(f) && f.defaultProps === void 0 && o.compare === null ? (t.tag = 15, t.type = f, s0(
        e,
        t,
        f,
        l,
        s
      )) : (e = Jr(
        o.type,
        null,
        l,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !Mf(e, s)) {
      var b = f.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ul, o(b, l) && e.ref === t.ref)
        return si(e, t, s);
    }
    return t.flags |= 1, e = ni(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function s0(e, t, o, l, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ul(f, l) && e.ref === t.ref)
        if (rt = !1, t.pendingProps = l = f, Mf(e, s))
          (e.flags & 131072) !== 0 && (rt = !0);
        else
          return t.lanes = e.lanes, si(e, t, s);
    }
    return Sf(
      e,
      t,
      o,
      l,
      s
    );
  }
  function u0(e, t, o, l) {
    var s = l.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | o : o, e !== null) {
          for (l = t.child = e.child, s = 0; l !== null; )
            s = s | l.lanes | l.childLanes, l = l.sibling;
          l = s & ~f;
        } else l = 0, t.child = null;
        return c0(
          e,
          t,
          f,
          o,
          l
        );
      }
      if ((o & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && os(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? dp(t, f) : Jc(), hp(t);
      else
        return l = t.lanes = 536870912, c0(
          e,
          t,
          f !== null ? f.baseLanes | o : o,
          o,
          l
        );
    } else
      f !== null ? (os(t, f.cachePool), dp(t, f), zi(), t.memoizedState = null) : (e !== null && os(t, null), Jc(), zi());
    return ft(e, t, s, o), t.child;
  }
  function El(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function c0(e, t, o, l, s) {
    var f = Xc();
    return f = f === null ? null : { parent: at._currentValue, pool: f }, t.memoizedState = {
      baseLanes: o,
      cachePool: f
    }, e !== null && os(t, null), Jc(), hp(t), e !== null && fo(e, t, l, !0), t.childLanes = s, null;
  }
  function ws(e, t) {
    return t = Ss(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function f0(e, t, o) {
    return vo(t, e.child, null, o), e = ws(t, t.pendingProps), e.flags |= 2, Qt(t), t.memoizedState = null, e;
  }
  function Dw(e, t, o) {
    var l = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = ws(t, l), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, El(null, e);
        if (Wc(t), (e = Ge) ? (e = Bm(
          e,
          fn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: wi !== null ? { id: Hn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, o = Qg(e), o.return = t, t.child = o, ht = t, Ge = null)) : e = null, e === null) throw _i(t);
        return t.lanes = 536870912, null;
      }
      return ws(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var b = f.dehydrated;
      if (Wc(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = f0(
            e,
            t,
            o
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (rt || fo(e, t, o, !1), s = (o & e.childLanes) !== 0, rt || s) {
        if (Mi.current === null) {
          if (l = Xe, l !== null && (b = Or(l, o), b !== 0 && b !== f.retryLane))
            throw f.retryLane = b, ro(e, b), Vt(l, e, b), wf;
          Is();
        }
        t = f0(
          e,
          t,
          o
        );
      } else
        e = f.treeContext, Ge = hn(b.nextSibling), ht = t, Ae = !0, Si = null, fn = !1, e !== null && Jg(t, e), t = ws(t, l), t.flags |= 134221824;
      return t;
    }
    return e = ni(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function fa(e, t) {
    var o = t.ref;
    if (o === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object")
        throw Error(r(284));
      (e === null || e.ref !== o) && (t.flags |= 4194816);
    }
  }
  function Sf(e, t, o, l, s) {
    return ho(t), o = nf(
      e,
      t,
      o,
      l,
      void 0,
      s
    ), l = of(), e !== null && !rt ? (af(e, t, s), si(e, t, s)) : (Ae && l && Wr(t), t.flags |= 1, ft(e, t, o, s), t.child);
  }
  function d0(e, t, o, l, s, f) {
    return ho(t), t.updateQueue = null, o = pp(
      t,
      l,
      o,
      s
    ), gp(e), l = of(), e !== null && !rt ? (af(e, t, f), si(e, t, f)) : (Ae && l && Wr(t), t.flags |= 1, ft(e, t, o, f), t.child);
  }
  function h0(e, t, o, l, s) {
    if (ho(t), t.stateNode === null) {
      var f = ta, b = o.contextType;
      typeof b == "object" && b !== null && (f = mt(b)), f = new o(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = bf, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, Zc(t), b = o.contextType, f.context = typeof b == "object" && b !== null ? mt(b) : ta, f.state = t.memoizedState, b = o.getDerivedStateFromProps, typeof b == "function" && (vf(
        t,
        o,
        b,
        l
      ), f.state = t.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (b = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), b !== f.state && bf.enqueueReplaceState(f, f.state, null), bl(t, l, f, s), vl(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var S = t.memoizedProps, O = xo(o, S);
      f.props = O;
      var $ = f.context, P = o.contextType;
      b = ta, typeof P == "object" && P !== null && (b = mt(P));
      var ae = o.getDerivedStateFromProps;
      P = typeof ae == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, P || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || $ !== b) && Wp(
        t,
        f,
        l,
        b
      ), Ti = !1;
      var q = t.memoizedState;
      f.state = q, bl(t, l, f, s), vl(), $ = t.memoizedState, S || q !== $ || Ti ? (typeof ae == "function" && (vf(
        t,
        o,
        ae,
        l
      ), $ = t.memoizedState), (O = Ti || Pp(
        t,
        o,
        O,
        l,
        q,
        $,
        b
      )) ? (P || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = $), f.props = l, f.state = $, f.context = b, l = O) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, Qc(e, t), b = t.memoizedProps, P = xo(o, b), f.props = P, ae = t.pendingProps, q = f.context, $ = o.contextType, O = ta, typeof $ == "object" && $ !== null && (O = mt($)), S = o.getDerivedStateFromProps, ($ = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (b !== ae || q !== O) && Wp(
        t,
        f,
        l,
        O
      ), Ti = !1, q = t.memoizedState, f.state = q, bl(t, l, f, s), vl();
      var Q = t.memoizedState;
      b !== ae || q !== Q || Ti || e !== null && e.dependencies !== null && ns(e.dependencies) ? (typeof S == "function" && (vf(
        t,
        o,
        S,
        l
      ), Q = t.memoizedState), (P = Ti || Pp(
        t,
        o,
        P,
        l,
        q,
        Q,
        O
      ) || e !== null && e.dependencies !== null && ns(e.dependencies)) ? ($ || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, Q, O), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        l,
        Q,
        O
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Q), f.props = l, f.state = Q, f.context = O, l = P) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, fa(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, o = l && typeof o.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = vo(
      t,
      e.child,
      null,
      s
    ), t.child = vo(
      t,
      null,
      o,
      s
    )) : ft(e, t, o, s), t.memoizedState = f.state, e = t.child) : e = si(
      e,
      t,
      s
    ), e;
  }
  function g0(e, t, o, l) {
    return uo(), t.flags |= 256, ft(e, t, o, l), t.child;
  }
  var _f = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ef(e) {
    return { baseLanes: e, cachePool: ip() };
  }
  function Nf(e, t, o) {
    return e = e !== null ? e.childLanes & ~o : 0, t && (e |= Jt), e;
  }
  function p0(e, t, o) {
    var l = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, b;
    if ((b = f) || (b = e !== null && e.memoizedState === null ? !1 : (vt.current & 2) !== 0), b && (s = !0, t.flags &= -129), b = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (s ? Oi(t) : zi(), (e = Ge) ? (e = Bm(
          e,
          fn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: wi !== null ? { id: Hn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, o = Qg(e), o.return = t, t.child = o, ht = t, Ge = null)) : e = null, e === null) throw _i(t);
        return Ed(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return f = l.children, l = l.fallback, s ? (zi(), s = t.mode, f = Ss(
        { mode: "hidden", children: f },
        s
      ), l = so(
        l,
        s,
        o,
        null
      ), f.return = t, l.return = t, f.sibling = l, t.child = f, l = t.child, l.memoizedState = Ef(o), l.childLanes = Nf(
        e,
        b,
        o
      ), t.memoizedState = _f, El(null, l)) : (Oi(t), Tf(t, f));
    }
    var S = e.memoizedState;
    if (S !== null) {
      var O = S.dehydrated;
      if (O !== null)
        return Hw(
          e,
          t,
          f,
          b,
          l,
          O,
          S,
          o
        );
    }
    return s ? (zi(), s = l.fallback, f = t.mode, S = e.child, O = S.sibling, l = ni(S, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = S.subtreeFlags & 1206910976, O !== null ? s = ni(O, s) : (s = so(
      s,
      f,
      o,
      null
    ), s.flags |= 2), s.return = t, l.return = t, l.sibling = s, t.child = l, El(null, l), l = t.child, s = e.child.memoizedState, s === null ? s = Ef(o) : (f = s.cachePool, f !== null ? (S = at._currentValue, f = f.parent !== S ? { parent: S, pool: S } : f) : f = ip(), s = {
      baseLanes: s.baseLanes | o,
      cachePool: f
    }), l.memoizedState = s, l.childLanes = Nf(
      e,
      b,
      o
    ), t.memoizedState = _f, El(e.child, l)) : (Oi(t), o = e.child, e = o.sibling, o = ni(o, {
      mode: "visible",
      children: l.children
    }), o.return = t, o.sibling = null, e !== null && (b = t.deletions, b === null ? (t.deletions = [e], t.flags |= 16) : b.push(e)), t.child = o, t.memoizedState = null, o);
  }
  function Tf(e, t) {
    return t = Ss(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ss(e, t) {
    return e = Ut(22, e, null, t), e.lanes = 0, e;
  }
  function _s(e, t, o) {
    return vo(t, e.child, null, o), e = Tf(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hw(e, t, o, l, s, f, b, S) {
    if (o)
      return t.flags & 256 ? (Oi(t), t.flags &= -257, _s(
        e,
        t,
        S
      )) : t.memoizedState !== null ? (zi(), t.child = e.child, t.flags |= 128, null) : (zi(), f = s.fallback, b = t.mode, s = Ss(
        { mode: "visible", children: s.children },
        b
      ), f = so(
        f,
        b,
        S,
        null
      ), f.flags |= 2, s.return = t, f.return = t, s.sibling = f, t.child = s, vo(t, e.child, null, S), s = t.child, s.memoizedState = Ef(S), s.childLanes = Nf(
        e,
        l,
        S
      ), t.memoizedState = _f, El(null, s));
    if (Oi(t), Ed(f)) {
      if (l = f.nextSibling && f.nextSibling.dataset, l) var O = l.dgst;
      return l = O, l !== "" && (s = Error(r(419)), s.stack = "", s.digest = l, dl({ value: s, source: null, stack: null })), _s(
        e,
        t,
        S
      );
    }
    if (rt || fo(e, t, S, !1), l = (S & e.childLanes) !== 0, rt || l) {
      if (Mi.current !== null)
        return _s(
          e,
          t,
          S
        );
      if (l = Xe, l !== null && (s = Or(
        l,
        S
      ), s !== 0 && s !== b.retryLane))
        throw b.retryLane = s, ro(e, s), Vt(l, e, s), wf;
      return _d(f) || Is(), _s(
        e,
        t,
        S
      );
    }
    return _d(f) ? (t.flags |= 192, t.child = e.child, null) : (e = b.treeContext, Ge = hn(f.nextSibling), ht = t, Ae = !0, Si = null, fn = !1, e !== null && Jg(t, e), t = Tf(
      t,
      s.children
    ), t.flags |= 134221824, t);
  }
  function m0(e, t, o) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ts(e.return, t, o);
  }
  function y0(e) {
    for (var t = null; e !== null; ) {
      var o = e.alternate;
      o !== null && cs(o) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Es(e, t, o, l, s, f) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: o,
      tailMode: s,
      treeForkCount: f
    } : (b.isBackwards = t, b.rendering = null, b.renderingStartTime = 0, b.last = l, b.tail = o, b.tailMode = s, b.treeForkCount = f);
  }
  function Cf(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var o = t.sibling;
      t.sibling = e.child, e.child = t, t = o;
    }
  }
  function Af(e, t, o) {
    var l = t.pendingProps, s = l.revealOrder, f = l.tail;
    l = l.children;
    var b = vt.current;
    if (t.flags & 128)
      return xl(t, b), null;
    var S = (b & 2) !== 0;
    if (S ? (b = b & 1 | 2, t.flags |= 128) : b &= 1, xl(t, b), s === "backwards" && e !== null ? (Cf(e), ft(e, t, l, o), Cf(e)) : ft(e, t, l, o), l = Ae ? fl : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && m0(e, o, t);
        else if (e.tag === 19)
          m0(e, o, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (s) {
      case "backwards":
        o = y0(t.child), o === null ? (s = t.child, t.child = null) : (s = o.sibling, o.sibling = null, Cf(t)), Es(
          t,
          !0,
          s,
          null,
          f,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (o = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && cs(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = o, o = s, s = e;
        }
        Es(
          t,
          !0,
          o,
          null,
          f,
          l
        );
        break;
      case "together":
        Es(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        o = y0(t.child), o === null ? (s = t.child, t.child = null) : (s = o.sibling, o.sibling = null), Es(
          t,
          !1,
          s,
          o,
          f,
          l
        );
    }
    return t.child;
  }
  function v0(e, t, o) {
    var l = t.pendingProps;
    return Ei(t, t.type, l.value), ft(e, t, l.children, o), t.child;
  }
  function si(e, t, o) {
    if (e !== null && (t.dependencies = e.dependencies), ki |= t.lanes, (o & t.childLanes) === 0)
      if (e !== null) {
        if (fo(
          e,
          t,
          o,
          !1
        ), (o & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, o = ni(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; )
        e = e.sibling, o = o.sibling = ni(e, e.pendingProps), o.return = t;
      o.sibling = null;
    }
    return t.child;
  }
  function Mf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ns(e)));
  }
  function kw(e, t, o) {
    switch (t.tag) {
      case 3:
        on(t, t.stateNode.containerInfo), Ei(t, at, e.memoizedState.cache), uo();
        break;
      case 27:
      case 5:
        Nt(t);
        break;
      case 4:
        on(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ei(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Wc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Oi(t), t.flags |= 128, null;
          l = fo(
            e,
            t,
            o,
            !1
          );
          var s = t.child.childLanes;
          return l || (o & s) !== 0 ? p0(e, t, o) : (Oi(t), e = si(
            e,
            t,
            o
          ), e !== null ? e.sibling : null);
        }
        Oi(t);
        break;
      case 19:
        if (t.flags & 128)
          return Af(
            e,
            t,
            o
          );
        if (s = (e.flags & 128) !== 0, l = (o & t.childLanes) !== 0, l || (fo(
          e,
          t,
          o,
          !1
        ), l = (o & t.childLanes) !== 0), s) {
          if (l)
            return Af(
              e,
              t,
              o
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), xl(t, vt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, u0(
          e,
          t,
          o,
          t.pendingProps
        );
      case 24:
        Ei(t, at, e.memoizedState.cache);
    }
    return si(e, t, o);
  }
  function b0(e, t, o) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        rt = !0;
      else {
        if (!Mf(e, o) && (t.flags & 128) === 0)
          return rt = !1, kw(
            e,
            t,
            o
          );
        rt = (e.flags & 131072) !== 0;
      }
    else
      rt = !1, Ae && (t.flags & 1048576) !== 0 && Fg(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = mo(t.elementType), t.type = e, typeof e == "function")
            kc(e) ? (l = xo(e, l), t.tag = 1, t = h0(
              null,
              t,
              e,
              l,
              o
            )) : (t.tag = 0, t = Sf(
              null,
              t,
              e,
              l,
              o
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === z) {
                t.tag = 11, t = l0(
                  null,
                  t,
                  e,
                  l,
                  o
                );
                break e;
              } else if (s === X) {
                t.tag = 14, t = r0(
                  null,
                  t,
                  e,
                  l,
                  o
                );
                break e;
              } else if (s === j) {
                t.tag = 10, t.type = e, t = v0(
                  null,
                  t,
                  o
                );
                break e;
              }
            }
            throw t = ce(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Sf(
          e,
          t,
          t.type,
          t.pendingProps,
          o
        );
      case 1:
        return l = t.type, s = xo(
          l,
          t.pendingProps
        ), h0(
          e,
          t,
          l,
          s,
          o
        );
      case 3:
        e: {
          if (on(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          s = f.element, Qc(e, t), bl(t, l, null, o);
          var b = t.memoizedState;
          if (l = b.cache, Ei(t, at, l), l !== f.cache && qc(
            t,
            [at],
            o,
            !0
          ), vl(), l = b.element, f.isDehydrated)
            if (f = {
              element: l,
              isDehydrated: !1,
              cache: b.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = g0(
                e,
                t,
                l,
                o
              );
              break e;
            } else if (l !== s) {
              s = sn(
                Error(r(424)),
                t
              ), dl(s), t = g0(
                e,
                t,
                l,
                o
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ge = hn(e.firstChild), ht = t, Ae = !0, Si = null, fn = !0, o = up(
                t,
                null,
                l,
                o
              ), t.child = o; o; )
                o.flags = o.flags & -3 | 134221824, o = o.sibling;
          else {
            if (uo(), l === s) {
              t = si(
                e,
                t,
                o
              );
              break e;
            }
            ft(e, t, l, o);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fa(e, t), e === null ? (o = $m(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = o : Ae || (t.stateNode = _m(
          t.type,
          t.pendingProps,
          dt.current,
          t
        )) : t.memoizedState = $m(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Nt(t), e === null && Ae && (l = t.stateNode = Vm(
          t.type,
          t.pendingProps,
          dt.current
        ), ht = t, fn = !0, s = Ge, ji(t.type) ? (Nd = s, Ge = hn(l.firstChild)) : Ge = s), ft(
          e,
          t,
          t.pendingProps.children,
          o
        ), fa(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((s = l = Ge) && (l = MS(
          l,
          t.type,
          t.pendingProps,
          fn
        ), l !== null ? (t.stateNode = l, ht = t, Ge = hn(l.firstChild), fn = !1, s = !0) : s = !1), s || _i(t)), Nt(t), s = t.type, f = t.pendingProps, b = e !== null ? e.memoizedProps : null, l = f.children, md(s, f) ? l = null : b !== null && md(s, b) && (t.flags |= 32), t.memoizedState !== null && (s = nf(
          e,
          t,
          Ew,
          null,
          null,
          o
        ), Ma._currentValue = s), fa(e, t), ft(e, t, l, o), t.child;
      case 6:
        return e === null && Ae && ((e = o = Ge) && (o = OS(
          o,
          t.pendingProps,
          fn
        ), o !== null ? (t.stateNode = o, ht = t, Ge = null, e = !0) : e = !1), e || _i(t)), null;
      case 13:
        return p0(e, t, o);
      case 4:
        return on(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = vo(
          t,
          null,
          l,
          o
        ) : ft(e, t, l, o), t.child;
      case 11:
        return l0(
          e,
          t,
          t.type,
          t.pendingProps,
          o
        );
      case 7:
        return l = t.pendingProps, fa(e, t), ft(e, t, l, o), t.child;
      case 8:
        return ft(
          e,
          t,
          t.pendingProps.children,
          o
        ), t.child;
      case 12:
        return ft(
          e,
          t,
          t.pendingProps.children,
          o
        ), t.child;
      case 10:
        return v0(e, t, o);
      case 9:
        return s = t.type._context, l = t.pendingProps.children, ho(t), s = mt(s), l = l(s), t.flags |= 1, ft(e, t, l, o), t.child;
      case 14:
        return r0(
          e,
          t,
          t.type,
          t.pendingProps,
          o
        );
      case 15:
        return s0(
          e,
          t,
          t.type,
          t.pendingProps,
          o
        );
      case 19:
        return Af(e, t, o);
      case 31:
        return Dw(e, t, o);
      case 22:
        return u0(
          e,
          t,
          o,
          t.pendingProps
        );
      case 24:
        return ho(t), l = mt(at), e === null ? (s = Xc(), s === null && (s = Xe, f = Yc(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= o), s = f), t.memoizedState = { parent: l, cache: s }, Zc(t), Ei(t, at, s)) : ((e.lanes & o) !== 0 && (Qc(e, t), bl(t, null, null, o), vl()), s = e.memoizedState, f = t.memoizedState, s.parent !== l ? (s = { parent: l, cache: l }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Ei(t, at, l)) : (l = f.cache, Ei(t, at, l), l !== s.cache && qc(
          t,
          [at],
          o,
          !0
        ))), ft(
          e,
          t,
          t.pendingProps.children,
          o
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = t.pendingProps, l.name != null && l.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ae && Wr(t), e !== null && e.memoizedProps.name !== l.name ? t.flags |= 4194816 : fa(e, t), ft(e, t, l.children, o), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function ui(e) {
    e.flags |= 4;
  }
  function Of(e, t, o, l, s) {
    var f;
    if ((f = (e.mode & 32) !== 0) && (f = o === null ? Qm(t, l) : Qm(t, l) && (l.src !== o.src || l.srcSet !== o.srcSet)), f) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (em()) e.flags |= 8192;
        else
          throw yo = ls, Gc;
    } else e.flags &= -16777217;
  }
  function x0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Km(t))
      if (em()) e.flags |= 8192;
      else
        throw yo = ls, Gc;
  }
  function Ns(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ja() : 536870912, e.lanes |= t, ma |= t);
  }
  function Nl(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var o = e.tail, l = null; o !== null; )
            o.alternate !== null && (l = o), o = o.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (t = e.tail, o = null; t !== null; )
            t.alternate !== null && (o = t), t = t.sibling;
          o === null ? e.tail = null : o.sibling = null;
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, o = 0, l = 0;
    if (t)
      for (var s = e.child; s !== null; )
        o |= s.lanes | s.childLanes, l |= s.subtreeFlags & 1206910976, l |= s.flags & 1206910976, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        o |= s.lanes | s.childLanes, l |= s.subtreeFlags, l |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= l, e.childLanes = o, t;
  }
  function Uw(e, t, o) {
    var l = t.pendingProps;
    switch (Lc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ze(t), null;
      case 1:
        return Ze(t), null;
      case 3:
        return o = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ai(at), Ht(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (oa(t) ? ui(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Vc())), Ze(t), null;
      case 26:
        var s = t.type, f = t.memoizedState;
        return e === null ? (ui(t), f !== null ? (Ze(t), x0(t, f)) : (Ze(t), Of(
          t,
          s,
          null,
          l,
          o
        ))) : f ? f !== e.memoizedState ? (ui(t), Ze(t), x0(t, f)) : (Ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && ui(t), Ze(t), Of(
          t,
          s,
          e,
          l,
          o
        )), null;
      case 27:
        if (kt(t), o = dt.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ui(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ze(t), t.subtreeFlags &= -33554433, null;
          }
          e = tt.current, oa(t) ? Pg(t) : (e = Vm(s, l, o), t.stateNode = e, ui(t));
        }
        return Ze(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (kt(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ui(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ze(t), t.subtreeFlags &= -33554433, null;
          }
          if (f = tt.current, oa(t))
            Pg(t);
          else {
            var b = Ul(
              dt.current
            );
            switch (f) {
              case 1:
                f = b.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                f = b.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    f = b.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    f = b.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    f = b.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof l.is == "string" ? b.createElement("select", {
                      is: l.is
                    }) : b.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                    break;
                  default:
                    f = typeof l.is == "string" ? b.createElement(s, { is: l.is }) : b.createElement(s);
                }
            }
            f[ct] = t, f[_t] = l;
            e: for (b = t.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6)
                f.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === t) break e;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === t)
                  break e;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            t.stateNode = f;
            e: switch (xt(f, s, l), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && ui(t);
          }
        }
        return Ze(t), t.subtreeFlags &= -33554433, Of(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          o
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && ui(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = dt.current, oa(t)) {
            if (e = t.stateNode, o = t.memoizedProps, l = null, s = ht, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            e[ct] = t, e = !!(e.nodeValue === o || l !== null && l.suppressHydrationWarning === !0 || bm(e.nodeValue, o)), e || _i(t, !0);
          } else
            e = Ul(e).createTextNode(
              l
            ), e[ct] = t, t.stateNode = e;
        }
        return Ze(t), null;
      case 31:
        if (o = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = oa(t), o !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[ct] = t;
            } else
              uo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), e = !1;
          } else
            o = Vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), e = !0;
          if (!e)
            return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ze(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = oa(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(r(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[ct] = t;
            } else
              uo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), s = !1;
          } else
            s = Vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
        }
        return Qt(t), (t.flags & 128) !== 0 ? (t.lanes = o, t) : (o = l !== null, e = e !== null && e.memoizedState !== null, o && (l = t.child, s = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== s && (l.flags |= 2048)), o !== e && o && (t.child.flags |= 8192), Ns(t, t.updateQueue), Ze(t), null);
      case 4:
        return Ht(), e === null && fd(t.stateNode.containerInfo), t.flags |= 67108864, Ze(t), null;
      case 10:
        return ai(t.type), Ze(t), null;
      case 19:
        if (ef(t), l = t.memoizedState, l === null) return Ze(t), null;
        if (s = (t.flags & 128) !== 0, f = l.rendering, f === null)
          if (s) Nl(l, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = cs(e), f !== null) {
                  for (t.flags |= 128, Nl(l, !1), e = f.updateQueue, t.updateQueue = e, Ns(t, e), t.subtreeFlags = 0, e = o, o = t.child; o !== null; )
                    Zg(o, e), o = o.sibling;
                  return xl(
                    t,
                    vt.current & 1 | 2
                  ), Ae && ii(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Tt() > Bs && (t.flags |= 128, s = !0, Nl(l, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = cs(f), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Ns(t, e), Nl(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !f.alternate && !Ae)
                return Ze(t), null;
            } else
              2 * Tt() - l.renderingStartTime > Bs && o !== 536870912 && (t.flags |= 128, s = !0, Nl(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (o = e; o !== null; ) {
              if (o.alternate !== null) {
                o = !1;
                break e;
              }
              o = o.sibling;
            }
            o = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Tt(), e.sibling = null, f = vt.current, f = s ? f & 1 | 2 : f & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !o || Ae ? xl(t, f) : (o = f, ze(yt, t), ze(vt, o), Et === null && (Et = t)), Ae && ii(t, l.treeForkCount), e;
        }
        return Ze(t), null;
      case 22:
      case 23:
        return Qt(t), Pc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (o & 536870912) !== 0 && (t.flags & 128) === 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), o = t.updateQueue, o !== null && Ns(t, o.retryQueue), o = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (o = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== o && (t.flags |= 2048), e !== null && He(po), null;
      case 24:
        return o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), ai(at), Ze(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Ze(t), null;
    }
    throw Error(r(156, t.tag));
  }
  function Bw(e, t) {
    switch (Lc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ai(at), Ht(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return kt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Qt(t), t.alternate === null)
            throw Error(r(340));
          uo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          uo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ef(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ht(), null;
      case 10:
        return ai(t.type), null;
      case 22:
      case 23:
        return Qt(t), Pc(), e !== null && He(po), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ai(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function w0(e, t) {
    switch (Lc(t), t.tag) {
      case 3:
        ai(at), Ht();
        break;
      case 26:
      case 27:
      case 5:
        kt(t);
        break;
      case 4:
        Ht();
        break;
      case 31:
        t.memoizedState !== null && Qt(t);
        break;
      case 13:
        Qt(t);
        break;
      case 19:
        ef(t);
        break;
      case 10:
        ai(t.type);
        break;
      case 22:
      case 23:
        Qt(t), Pc(), e !== null && He(po);
        break;
      case 24:
        ai(at);
    }
  }
  function Tl(e, t) {
    try {
      var o = t.updateQueue, l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        o = s;
        do {
          if ((o.tag & e) === e) {
            l = void 0;
            var f = o.create, b = o.inst;
            l = f(), b.destroy = l;
          }
          o = o.next;
        } while (o !== s);
      }
    } catch (S) {
      qe(t, t.return, S);
    }
  }
  function Ri(e, t, o) {
    try {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var b = l.inst, S = b.destroy;
            if (S !== void 0) {
              b.destroy = void 0, s = t;
              var O = o, $ = S;
              try {
                $();
              } catch (P) {
                qe(
                  s,
                  O,
                  P
                );
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (P) {
      qe(t, t.return, P);
    }
  }
  function S0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var o = e.stateNode;
      try {
        fp(t, o);
      } catch (l) {
        qe(e, e.return, l);
      }
    }
  }
  function _0(e, t, o) {
    o.props = xo(
      e.type,
      e.memoizedProps
    ), o.state = e.memoizedState;
    try {
      o.componentWillUnmount();
    } catch (l) {
      qe(e, t, l);
    }
  }
  function Un(e, t) {
    try {
      var o = e.ref;
      if (o !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var s = e.stateNode, f = ei(e.memoizedProps, s);
            (s.ref === null || s.ref.name !== f) && (s.ref = Om(f)), l = s.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var b = new Wt(e);
              g(
                e.child,
                !1,
                CS,
                b,
                void 0,
                void 0
              ), e.stateNode = b;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof o == "function" ? e.refCleanup = o(l) : o.current = l;
      }
    } catch (S) {
      qe(e, t, S);
    }
  }
  function bt(e, t) {
    var o = e.ref, l = e.refCleanup;
    if (o !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (s) {
          qe(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          qe(e, t, s);
        }
      else o.current = null;
  }
  function Ts(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var o = 0; o < t.length; o++)
        Um(
          e.stateNode,
          t[o]
        );
  }
  function E0(e) {
    for (var t = e.return; t !== null && (Rf(t) && Um(e.stateNode, t.stateNode), !zf(t)); )
      t = t.return;
  }
  function Cl(e) {
    for (var t = e.return; t !== null && (Rf(t) && AS(e.stateNode, t.stateNode), !zf(t)); )
      t = t.return;
  }
  function zf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Rf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Df(e) {
    var t = e.type, o = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && l.focus();
          break e;
        case "img":
          o.src ? l.src = o.src : o.srcSet && (l.srcset = o.srcSet);
      }
    } catch (s) {
      qe(e, e.return, s);
    }
  }
  function Hf(e, t, o) {
    try {
      var l = e.stateNode;
      uS(l, e.type, o, t), l[_t] = t;
    } catch (s) {
      qe(e, e.return, s);
    }
  }
  function N0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ji(e.type) || e.tag === 4;
  }
  function kf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || N0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ji(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Uf(e, t, o, l) {
    var s = e.tag;
    if (s === 5 || s === 6)
      s = e.stateNode, t ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(s, t) : (t = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, t.appendChild(s), o = o._reactRootContainer, o != null || t.onclick !== null || (t.onclick = Dn)), Ts(e, l), Le = !0;
    else if (s !== 4 && (s === 27 && (Ts(e, l), l = null, ji(e.type) && (o = e.stateNode, t = null)), e = e.child, e !== null))
      for (Uf(
        e,
        t,
        o,
        l
      ), e = e.sibling; e !== null; )
        Uf(
          e,
          t,
          o,
          l
        ), e = e.sibling;
  }
  function Cs(e, t, o, l) {
    var s = e.tag;
    if (s === 5 || s === 6)
      s = e.stateNode, t ? o.insertBefore(s, t) : o.appendChild(s), Ts(e, l), Le = !0;
    else if (s !== 4 && (s === 27 && (Ts(e, l), l = null, ji(e.type) && (o = e.stateNode)), e = e.child, e !== null))
      for (Cs(
        e,
        t,
        o,
        l
      ), e = e.sibling; e !== null; )
        Cs(
          e,
          t,
          o,
          l
        ), e = e.sibling;
  }
  function T0(e) {
    var t = e.stateNode, o = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      xt(t, l, o), t[ct] = e, t[_t] = o;
    } catch (f) {
      qe(e, e.return, f);
    }
  }
  var As = !1, Kt = null;
  function C0(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (As = !0);
  }
  var Bn = null;
  function A0() {
    var e = Bn;
    return Bn = null, e;
  }
  var Bt = 0;
  function da(e, t, o, l, s) {
    return Bt = 0, M0(
      e.child,
      t,
      o,
      l,
      s
    );
  }
  function M0(e, t, o, l, s) {
    for (var f = !1; e !== null; ) {
      if (e.tag === 5) {
        var b = e.stateNode;
        if (l !== null) {
          var S = bd(b);
          l.push(S), S.view && (f = !0);
        } else
          f || bd(b).view && (f = !0);
        As = !0, Am(
          b,
          Bt === 0 ? t : t + "_" + Bt,
          o
        ), Bt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && s || M0(
        e.child,
        t,
        o,
        l,
        s
      ) && (f = !0));
      e = e.sibling;
    }
    return f;
  }
  function Ln(e, t) {
    for (; e !== null; )
      e.tag === 5 ? Mm(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Ln(
        e.child,
        t
      )), e = e.sibling;
  }
  function Ms(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (Ms(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(r(544));
          var o = t.name;
          t = ti(t.default, t.share), t !== "none" && (da(
            e,
            o,
            t,
            null,
            !1
          ) || Ln(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function Bf(e, t) {
    if (e.tag === 30) {
      var o = e.stateNode, l = e.memoizedProps, s = ei(l, o), f = ti(
        l.default,
        o.paired ? l.share : l.enter
      );
      f !== "none" ? da(e, s, f, null, !1) ? (Ms(e), o.paired || t || xa(e, l.onEnter)) : Ln(e.child, !1) : Ms(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Bf(e, t), e = e.sibling;
    else Ms(e);
  }
  function Lf(e) {
    if (Kt !== null && Kt.size !== 0) {
      var t = Kt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var o = e.memoizedProps, l = o.name;
              if (l != null && l !== "auto") {
                var s = t.get(l);
                if (s !== void 0) {
                  var f = ti(
                    o.default,
                    o.share
                  );
                  if (f !== "none" && (da(
                    e,
                    l,
                    f,
                    null,
                    !1
                  ) ? (f = e.stateNode, s.paired = f, f.paired = s, xa(e, o.onShare)) : Ln(e.child, !1)), t.delete(l), t.size === 0) break;
                }
              }
            }
            Lf(e);
          }
          e = e.sibling;
        }
    }
  }
  function jf(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, o = ei(t, e.stateNode), l = Kt !== null ? Kt.get(o) : void 0, s = ti(
        t.default,
        l !== void 0 ? t.share : t.exit
      );
      s !== "none" && (da(e, o, s, null, !1) ? l !== void 0 ? (s = e.stateNode, l.paired = s, s.paired = l, Kt.delete(o), xa(e, t.onShare)) : xa(e, t.onExit) : Ln(e.child, !1)), Kt !== null && Lf(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        jf(e), e = e.sibling;
    else
      Kt !== null && Lf(e);
  }
  function O0(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, o = ei(t, e.stateNode);
        t = ti(t.default, t.update), e.flags &= -5, t !== "none" && da(
          e,
          o,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && O0(e);
      e = e.sibling;
    }
  }
  function Vf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Ln(e.child, !1));
          }
          Vf(e);
        }
        e = e.sibling;
      }
  }
  function Os(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Ln(e.child, !1), Vf(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Os(e), e = e.sibling;
    else Vf(e);
  }
  function z0(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Ln(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && z0(e), e = e.sibling;
  }
  function If(e, t, o, l, s, f, b) {
    for (var S = !1; t !== null; ) {
      if (t.tag === 5) {
        var O = t.stateNode;
        if (f !== null && Bt < f.length) {
          var $ = f[Bt], P = bd(O);
          ($.view || P.view) && (S = !0);
          var ae;
          if (ae = (e.flags & 4) === 0)
            if (P.clip) ae = !0;
            else {
              ae = $.rect;
              var q = P.rect;
              ae = ae.y !== q.y || ae.x !== q.x || ae.height !== q.height || ae.width !== q.width;
            }
          ae && (e.flags |= 4), P.abs ? P = !$.abs : ($ = $.rect, P = P.rect, P = $.height !== P.height || $.width !== P.width), P && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Am(
          O,
          Bt === 0 ? o : o + "_" + Bt,
          s
        ), S && (e.flags & 4) !== 0 || (Bn === null && (Bn = []), Bn.push(
          O,
          Bt === 0 ? l : l + "_" + Bt,
          t.memoizedProps
        )), Bt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && b ? e.flags |= t.flags & 32 : If(
        e,
        t.child,
        o,
        l,
        s,
        f,
        b
      ) && (S = !0));
      t = t.sibling;
    }
    return S;
  }
  function R0(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var o = e.memoizedProps, l = e.stateNode, s = ei(o, l), f = ti(o.default, o.update), b;
        b = e.memoizedState, e.memoizedState = null, l = e;
        var S = e.child;
        Bt = 0, s = If(
          l,
          S,
          s,
          s,
          f,
          b,
          !1
        ), (e.flags & 4) !== 0 && s && xa(e, o.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && R0(e);
      e = e.sibling;
    }
  }
  var gt = !1, Ve = !1, jn = !1, qf = !1, D0 = typeof WeakSet == "function" ? WeakSet : Set, pt = null, Vn = !1, Al = !1, zs = !1, Yf = !1;
  function Lw(e, t, o) {
    if (e = e.containerInfo, gd = Oa, e = Bg(e), Ac(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var s = l.getSelection && l.getSelection();
          if (s && s.rangeCount !== 0) {
            l = s.anchorNode;
            var f = s.anchorOffset, b = s.focusNode;
            s = s.focusOffset;
            try {
              l.nodeType, b.nodeType;
            } catch {
              l = null;
              break e;
            }
            var S = 0, O = -1, $ = -1, P = 0, ae = 0, q = e, Q = null;
            t: for (; ; ) {
              for (var ge; q !== l || f !== 0 && q.nodeType !== 3 || (O = S + f), q !== b || s !== 0 && q.nodeType !== 3 || ($ = S + s), q.nodeType === 3 && (S += q.nodeValue.length), (ge = q.firstChild) !== null; )
                Q = q, q = ge;
              for (; ; ) {
                if (q === e) break t;
                if (Q === l && ++P === f && (O = S), Q === b && ++ae === s && ($ = S), (ge = q.nextSibling) !== null) break;
                q = Q, Q = q.parentNode;
              }
              q = ge;
            }
            l = O === -1 || $ === -1 ? null : { start: O, end: $ };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pd = { focusedElem: e, selectionRange: l }, Oa = !1, o = (o & 335544064) === o, pt = t, t = o ? 9270 : 1024; pt !== null; ) {
      if (e = pt, o && (l = e.deletions, l !== null))
        for (f = 0; f < l.length; f++)
          o && jf(l[f]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        o && C0(e), Rs(o);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && o && jf(l), Rs(o);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            o && C0(e), Rs(o);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & t) !== 0 && l !== null ? (l.return = e, pt = l) : (o && O0(e), Rs(o));
      }
    }
    Kt = null;
  }
  function Rs(e) {
    for (; pt !== null; ) {
      var t = pt, o = e, l = t.alternate, s = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && l !== null) {
            o = void 0, s = l.memoizedProps, l = l.memoizedState;
            var f = t.stateNode;
            try {
              var b = xo(
                t.type,
                s
              );
              o = f.getSnapshotBeforeUpdate(
                b,
                l
              ), f.__reactInternalSnapshotBeforeUpdate = o;
            } catch (S) {
              qe(t, t.return, S);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, o = l.nodeType, o === 9)
              Sd(l);
            else if (o === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Sd(l);
                  break;
                default:
                  l.textContent = "";
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
        case 30:
          o && l !== null && (o = ei(
            l.memoizedProps,
            l.stateNode
          ), s = t.memoizedProps, s = ti(s.default, s.update), s !== "none" && da(
            l,
            o,
            s,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(r(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, pt = l;
        break;
      }
      pt = t.return;
    }
  }
  function H0(e, t, o) {
    var l = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        In(e, o), l & 4 && Tl(5, o);
        break;
      case 1:
        if (In(e, o), l & 4)
          if (e = o.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (b) {
              qe(o, o.return, b);
            }
          else {
            var s = xo(
              o.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              qe(
                o,
                o.return,
                b
              );
            }
          }
        l & 64 && S0(o), l & 512 && Un(o, o.return);
        break;
      case 3:
        if (In(e, o), l & 64 && (e = o.updateQueue, e !== null)) {
          if (t = null, o.child !== null)
            switch (o.child.tag) {
              case 27:
              case 5:
                t = o.child.stateNode;
                break;
              case 1:
                t = o.child.stateNode;
            }
          try {
            fp(e, t);
          } catch (b) {
            qe(o, o.return, b);
          }
        }
        break;
      case 27:
        t === null && l & 4 && T0(o);
      case 26:
      case 5:
        In(e, o), t === null && l & 4 && Df(o), l & 512 && Un(o, o.return);
        break;
      case 12:
        In(e, o);
        break;
      case 31:
        In(e, o), l & 4 && L0(e, o);
        break;
      case 13:
        In(e, o), l & 4 && j0(e, o), l & 64 && (e = o.memoizedState, e !== null && (e = e.dehydrated, e !== null && (o = Fw.bind(
          null,
          o
        ), zS(e, o))));
        break;
      case 22:
        if (l = o.memoizedState !== null || gt, !l) {
          var f = t !== null && t.memoizedState !== null || Ve;
          t = gt, s = Ve, gt = l, (Ve = f) && !s ? (l = 2, (o.subtreeFlags & 8772) !== 0 && (l |= 1), xn(
            e,
            o,
            l
          )) : In(e, o), gt = t, Ve = s;
        }
        break;
      case 30:
        In(e, o), l & 512 && Un(o, o.return);
        break;
      case 7:
        l & 512 && Un(o, o.return);
      default:
        In(e, o);
    }
  }
  function $f(e, t) {
    for (e = e.child; e !== null; )
      k0(e, t), e = e.sibling;
  }
  function k0(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var o = e.stateNode;
          if (t) {
            var l = o.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var s = e.stateNode, f = e.memoizedProps.style, b = f != null && f.hasOwnProperty("display") ? f.display : null;
            s.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
          }
        } catch (O) {
          qe(e, e.return, O);
        }
        Xf(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Le = !0;
        } catch (O) {
          qe(e, e.return, O);
        }
        break;
      case 18:
        try {
          var S = e.stateNode;
          t ? Cm(S, !0) : Cm(e.stateNode, !1);
        } catch (O) {
          qe(e, e.return, O);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && $f(e, t);
        break;
      default:
        $f(e, t);
    }
  }
  function Xf(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var o = e, l = t;
          switch (o.tag) {
            case 4:
              k0(o, l);
              break e;
            case 22:
              o.memoizedState === null && Xf(o, l);
              break e;
            default:
              Xf(o, l);
          }
        }
        e = e.sibling;
      }
  }
  function U0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, U0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Go(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, Lt = !1;
  function vn(e, t, o) {
    for (o = o.child; o !== null; )
      B0(e, t, o), o = o.sibling;
  }
  function B0(e, t, o) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
        Ct.onCommitFiberUnmount(eo, o);
      } catch {
      }
    switch (o.tag) {
      case 26:
        Ve || bt(o, t), vn(
          e,
          t,
          o
        ), o.memoizedState ? o.memoizedState.count-- : o.stateNode && !Ve && (o = o.stateNode, o.parentNode.removeChild(o));
        break;
      case 27:
        Ve || bt(o, t), Cl(o);
        var l = Ke, s = Lt;
        ji(o.type) && (Ke = o.stateNode, Lt = !1), vn(
          e,
          t,
          o
        ), Im(
          o.stateNode,
          o.type,
          o.memoizedProps
        ), Ke = l, Lt = s;
        break;
      case 5:
        Ve || bt(o, t), Cl(o);
      case 6:
        if (o.tag === 6 && Cl(o), l = Ke, s = Lt, Ke = null, vn(
          e,
          t,
          o
        ), Ke = l, Lt = s, Ke !== null)
          if (Lt)
            try {
              (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(o.stateNode), Le = !0;
            } catch (f) {
              qe(
                o,
                t,
                f
              );
            }
          else
            try {
              Ke.removeChild(o.stateNode), Le = !0;
            } catch (f) {
              qe(
                o,
                t,
                f
              );
            }
        break;
      case 18:
        Ke !== null && (Lt ? (e = Ke, Tm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          o.stateNode
        ), za(e)) : Tm(Ke, o.stateNode));
        break;
      case 4:
        l = Ke, s = Lt, Ke = o.stateNode.containerInfo, Lt = !0, vn(
          e,
          t,
          o
        ), Ke = l, Lt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ri(2, o, t), Ve || Ri(4, o, t), vn(
          e,
          t,
          o
        );
        break;
      case 1:
        Ve || (bt(o, t), l = o.stateNode, typeof l.componentWillUnmount == "function" && _0(
          o,
          t,
          l
        )), vn(
          e,
          t,
          o
        );
        break;
      case 21:
        vn(
          e,
          t,
          o
        );
        break;
      case 22:
        Ve = (l = Ve) || o.memoizedState !== null, vn(
          e,
          t,
          o
        ), Ve = l;
        break;
      case 30:
        bt(o, t), vn(
          e,
          t,
          o
        );
        break;
      case 7:
        Ve || bt(o, t), vn(
          e,
          t,
          o
        );
        break;
      default:
        vn(
          e,
          t,
          o
        );
    }
  }
  function L0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        za(e);
      } catch (o) {
        qe(t, t.return, o);
      }
    }
  }
  function j0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        za(e);
      } catch (o) {
        qe(t, t.return, o);
      }
  }
  function jw(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new D0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new D0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ds(e, t) {
    var o = jw(e);
    t.forEach(function(l) {
      if (!o.has(l)) {
        o.add(l);
        var s = Jw.bind(null, e, l);
        l.then(s, s);
      }
    });
  }
  function zt(e, t, o) {
    var l = t.deletions;
    if (l !== null)
      for (var s = 0; s < l.length; s++) {
        var f = l[s], b = e, S = t, O = S;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (ji(O.type)) {
                Ke = O.stateNode, Lt = !1;
                break e;
              }
              break;
            case 5:
              Ke = O.stateNode, Lt = !1;
              break e;
            case 3:
            case 4:
              Ke = O.stateNode.containerInfo, Lt = !0;
              break e;
          }
          O = O.return;
        }
        if (Ke === null) throw Error(r(160));
        B0(b, S, f), Ke = null, Lt = !1, b = f.alternate, b !== null && (b.return = null), f.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        V0(t, e, o), t = t.sibling;
  }
  var bn = null;
  function V0(e, t, o) {
    var l = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var f = 0; f < l.length; f++) {
            var b = l[f];
            b.ref.impl = b.nextImpl;
          }
        zt(t, e, o), Rt(e), s & 4 && (Ri(3, e, e.return), Tl(3, e), Ri(5, e, e.return));
        break;
      case 1:
        zt(t, e, o), Rt(e), s & 512 && (Ve || l === null || bt(l, l.return)), s & 64 && gt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (o = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = o === null ? t : o.concat(t))));
        break;
      case 26:
        if (f = bn, zt(t, e, o), Rt(e), s & 512 && (Ve || l === null || bt(l, l.return)), s & 4)
          if (s = l !== null ? l.memoizedState : null, o = e.memoizedState, l === null)
            if (o === null)
              if (e.stateNode === null)
                if (gt)
                  e.stateNode = _m(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, o = e.memoizedProps, s = f.ownerDocument || f;
                    t: switch (t) {
                      case "title":
                        l = s.getElementsByTagName("title")[0], (!l || l[io] || l[ct] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = s.createElement(t), s.head.insertBefore(
                          l,
                          s.querySelector("head > title")
                        )), xt(l, t, o), l[ct] = e, ot(l), t = l;
                        break e;
                      case "link":
                        if (f = Zm(
                          "link",
                          "href",
                          s
                        ).get(t + (o.href || ""))) {
                          for (b = 0; b < f.length; b++)
                            if (l = f[b], l.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && l.getAttribute("rel") === (o.rel == null ? null : o.rel) && l.getAttribute("title") === (o.title == null ? null : o.title) && l.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                              f.splice(b, 1);
                              break t;
                            }
                        }
                        l = s.createElement(t), xt(l, t, o), s.head.appendChild(l);
                        break;
                      case "meta":
                        if (f = Zm(
                          "meta",
                          "content",
                          s
                        ).get(t + (o.content || ""))) {
                          for (b = 0; b < f.length; b++)
                            if (l = f[b], l.getAttribute("content") === (o.content == null ? null : "" + o.content) && l.getAttribute("name") === (o.name == null ? null : o.name) && l.getAttribute("property") === (o.property == null ? null : o.property) && l.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && l.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                              f.splice(b, 1);
                              break t;
                            }
                        }
                        l = s.createElement(t), xt(l, t, o), s.head.appendChild(l);
                        break;
                      default:
                        throw Error(r(468, t));
                    }
                    l[ct] = e, ot(l), t = l;
                  }
                  e.stateNode = t;
                }
              else
                gt || Md(f, e.type, e.stateNode);
            else
              e.stateNode = Gm(
                f,
                o,
                e.memoizedProps
              );
          else
            s !== o ? (s === null ? (t = l.stateNode, t === null || Ve || t.parentNode.removeChild(t)) : s.count--, o === null ? gt || Md(f, e.type, e.stateNode) : Gm(f, o, e.memoizedProps)) : o === null && e.stateNode !== null && Hf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        zt(t, e, o), Rt(e), s & 512 && (Ve || l === null || bt(l, l.return)), l !== null && s & 4 && Hf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (f = jn, jn = !1, zt(t, e, o), jn = f, Rt(e), s & 512 && (Ve || l === null || bt(l, l.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            Qo(t, ""), Le = !0;
          } catch (P) {
            qe(e, e.return, P);
          }
        }
        s & 4 && e.stateNode != null && (t = e.memoizedProps, Hf(
          e,
          t,
          l !== null ? l.memoizedProps : t
        )), s & 1024 && (qf = !0);
        break;
      case 6:
        if (zt(t, e, o), Rt(e), s & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          t = e.memoizedProps, o = e.stateNode;
          try {
            o.nodeValue = t, Le = !0;
          } catch (P) {
            qe(e, e.return, P);
          }
        }
        break;
      case 3:
        if (Le = !1, Qs = null, f = bn, bn = Bl(t.containerInfo), zt(t, e, o), bn = f, Rt(e), s & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            za(t.containerInfo);
          } catch (P) {
            qe(e, e.return, P);
          }
        qf && (qf = !1, I0(e)), Le = !1;
        break;
      case 4:
        s = jn, jn = gt, l = rg(), f = bn, bn = Bl(
          e.stateNode.containerInfo
        ), zt(t, e, o), Rt(e), bn = f, Le && Al && (zs = !0), Le = l, jn = s;
        break;
      case 12:
        zt(t, e, o), Rt(e);
        break;
      case 31:
        zt(t, e, o), Rt(e), s & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ds(e, t)));
        break;
      case 13:
        zt(t, e, o), Rt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Us = Tt()), s & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ds(e, t)));
        break;
      case 22:
        f = e.memoizedState !== null, b = l !== null && l.memoizedState !== null;
        var S = gt, O = Ve, $ = jn;
        gt = S || f, jn = $ || f, Ve = O || b, zt(t, e, o), Ve = O, jn = $, gt = S, Rt(e), s & 8192 && (t = e.stateNode, t._visibility = f ? t._visibility & -2 : t._visibility | 1, !f || l === null || b || gt || Ve || (t = b || Ve, o = gt, l = Ve, gt = f || gt, Ve = t, Di(e, 2), gt = o, Ve = l), !f && jn || $f(e, f)), s & 4 && (t = e.updateQueue, t !== null && (o = t.retryQueue, o !== null && (t.retryQueue = null, Ds(e, o))));
        break;
      case 19:
        zt(t, e, o), Rt(e), s & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ds(e, t)));
        break;
      case 30:
        s & 512 && (Ve || l === null || bt(l, l.return)), s = rg(), f = Al, b = (o & 335544064) === o, S = e.memoizedProps, Al = b && ti(
          S.default,
          S.update
        ) !== "none", zt(t, e, o), Rt(e), b && l !== null && Le && (e.flags |= 4), Al = f, Le = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Ve || l === null || bt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        zt(t, e, o), Rt(e);
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var o, l = e.return; l !== null; ) {
          if (N0(l)) {
            o = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var s = e.return; s !== null; ) {
          if (Rf(s)) {
            var f = s.stateNode;
            l === null ? l = [f] : l.push(f);
          }
          if (zf(s)) break;
          s = s.return;
        }
        var b = l;
        if (o == null) throw Error(r(160));
        switch (o.tag) {
          case 27:
            var S = o.stateNode, O = kf(e);
            Cs(
              e,
              O,
              S,
              b
            );
            break;
          case 5:
            var $ = o.stateNode;
            o.flags & 32 && (Qo($, ""), o.flags &= -33);
            var P = kf(e);
            Cs(
              e,
              P,
              $,
              b
            );
            break;
          case 3:
          case 4:
            var ae = o.stateNode.containerInfo, q = kf(e);
            Uf(
              e,
              q,
              ae,
              b
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (Q) {
        qe(e, e.return, Q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function I0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        I0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Oa = !0, t.reset(), Oa = !1), e = e.sibling;
      }
  }
  function ha(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        q0(t, e), t = t.sibling;
    else R0(t);
  }
  function q0(e, t) {
    var o = e.alternate;
    if (o === null) Bf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Yf = Vn = !1, A0(), ha(t, e), !Vn && !zs) {
            if (e = Bn, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                o = e[l];
                var s = e[l + 1];
                Mm(o, e[l + 2]), o = o.ownerDocument.documentElement, o !== null && o.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Yf = !0;
          }
          Bn = null;
          break;
        case 5:
          ha(t, e);
          break;
        case 4:
          l = Vn, Vn = !1, ha(t, e), Vn && (zs = !0), Vn = l;
          break;
        case 22:
          e.memoizedState === null && (o.memoizedState !== null ? Bf(e, !1) : ha(t, e));
          break;
        case 30:
          l = Vn, s = A0(), Vn = !1, ha(t, e), Vn && (e.flags |= 4);
          var f = e.memoizedProps, b = e.stateNode;
          t = ei(f, b), b = ei(o.memoizedProps, b);
          var S = ti(f.default, f.update);
          S === "none" ? t = !1 : (f = o.memoizedState, o.memoizedState = null, o = e.child, Bt = 0, t = If(
            e,
            o,
            t,
            b,
            S,
            f,
            !0
          ), Bt !== (f === null ? 0 : f.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (xa(
            e,
            e.memoizedProps.onUpdate
          ), Bn = s) : s !== null && (s.push.apply(s, Bn), Bn = s), Vn = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          ha(t, e);
      }
  }
  function In(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        H0(e, t.alternate, t), t = t.sibling;
  }
  function Di(e, t) {
    for (e = e.child; e !== null; ) {
      var o = e, l = t;
      switch (o.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ri(4, o, o.return), Di(
            o,
            l
          );
          break;
        case 1:
          bt(o, o.return);
          var s = o.stateNode;
          typeof s.componentWillUnmount == "function" && _0(
            o,
            o.return,
            s
          ), Di(
            o,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Im(
            o.stateNode,
            o.type,
            o.memoizedProps
          );
        case 5:
          bt(o, o.return), o.tag !== 5 && o.tag !== 27 || Cl(o), Di(
            o,
            l
          );
          break;
        case 6:
          Cl(o);
          break;
        case 26:
          bt(o, o.return), s = o.stateNode, o.memoizedState !== null || s === null || Ve || s.parentNode.removeChild(s), Di(
            o,
            l
          );
          break;
        case 22:
          o.memoizedState === null && Di(
            o,
            l
          );
          break;
        case 30:
          bt(o, o.return), Di(
            o,
            l
          );
          break;
        case 7:
          bt(o, o.return);
        default:
          Di(
            o,
            l
          );
      }
      e = e.sibling;
    }
  }
  function xn(e, t, o) {
    for (o = (t.subtreeFlags & 8772) !== 0 ? o : o & -2, t = t.child; t !== null; ) {
      var l = t.alternate, s = e, f = t, b = f.flags, S = (o & 1) !== 0;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            s,
            f,
            o
          ), Tl(4, f);
          break;
        case 1:
          if (xn(
            s,
            f,
            o
          ), l = f, s = l.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (P) {
              qe(l, l.return, P);
            }
          if (l = f, s = l.updateQueue, s !== null) {
            var O = l.stateNode;
            try {
              var $ = s.shared.hiddenCallbacks;
              if ($ !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < $.length; s++)
                  cp($[s], O);
            } catch (P) {
              qe(l, l.return, P);
            }
          }
          S && b & 64 && S0(f), Un(f, f.return);
          break;
        case 27:
          (o & 2) !== 0 && T0(f);
        case 5:
          f.tag !== 5 && f.tag !== 27 || E0(f), xn(
            s,
            f,
            o
          ), S && l === null && b & 4 && Df(f), Un(f, f.return);
          break;
        case 6:
          E0(f);
          break;
        case 26:
          O = f.stateNode, f.memoizedState !== null || O === null || gt || Md(
            Bl(O.ownerDocument),
            f.type,
            O
          ), xn(
            s,
            f,
            o
          ), S && l === null && b & 4 && Df(f), Un(f, f.return);
          break;
        case 12:
          xn(
            s,
            f,
            o
          );
          break;
        case 31:
          xn(
            s,
            f,
            o
          ), S && b & 4 && L0(s, f);
          break;
        case 13:
          xn(
            s,
            f,
            o
          ), S && b & 4 && j0(s, f);
          break;
        case 22:
          f.memoizedState === null && xn(
            s,
            f,
            o
          ), Un(f, f.return);
          break;
        case 30:
          xn(
            s,
            f,
            o
          ), Un(f, f.return);
          break;
        case 7:
          Un(f, f.return);
        default:
          xn(
            s,
            f,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Gf(e, t) {
    var o = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (o = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== o && (e != null && e.refCount++, o != null && hl(o));
  }
  function Zf(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hl(e));
  }
  function dn(e, t, o, l) {
    var s = (o & 335544064) === o;
    if (t.subtreeFlags & (s ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Y0(
          e,
          t,
          o,
          l
        ), t = t.sibling;
    else s && z0(t);
  }
  function Y0(e, t, o, l) {
    var s = (o & 335544064) === o;
    s && t.alternate === null && t.return !== null && t.return.alternate !== null && Os(t);
    var f = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        dn(
          e,
          t,
          o,
          l
        ), f & 2048 && Tl(9, t);
        break;
      case 1:
        dn(
          e,
          t,
          o,
          l
        );
        break;
      case 3:
        dn(
          e,
          t,
          o,
          l
        ), s && Yf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), f & 2048 && (f = null, t.alternate !== null && (f = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== f && (t.refCount++, f != null && hl(f)));
        break;
      case 12:
        if (f & 2048) {
          dn(
            e,
            t,
            o,
            l
          ), f = t.stateNode;
          try {
            var b = t.memoizedProps, S = b.id, O = b.onPostCommit;
            typeof O == "function" && O(
              S,
              t.alternate === null ? "mount" : "update",
              f.passiveEffectDuration,
              -0
            );
          } catch ($) {
            qe(t, t.return, $);
          }
        } else
          dn(
            e,
            t,
            o,
            l
          );
        break;
      case 31:
        dn(
          e,
          t,
          o,
          l
        );
        break;
      case 13:
        dn(
          e,
          t,
          o,
          l
        );
        break;
      case 23:
        break;
      case 22:
        b = t.stateNode, S = t.alternate, t.memoizedState !== null ? (s && S !== null && S.memoizedState === null && Os(S), b._visibility & 2 ? dn(
          e,
          t,
          o,
          l
        ) : Ml(
          e,
          t
        )) : (s && S !== null && S.memoizedState !== null && Os(t), b._visibility & 2 ? dn(
          e,
          t,
          o,
          l
        ) : (b._visibility |= 2, ga(
          e,
          t,
          o,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), f & 2048 && Gf(S, t);
        break;
      case 24:
        dn(
          e,
          t,
          o,
          l
        ), f & 2048 && Zf(t.alternate, t);
        break;
      case 30:
        s && (f = t.alternate, f !== null && (Ln(f.child, !0), Ln(t.child, !0))), dn(
          e,
          t,
          o,
          l
        );
        break;
      default:
        dn(
          e,
          t,
          o,
          l
        );
    }
  }
  function ga(e, t, o, l, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, b = t, S = o, O = l, $ = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          ga(
            f,
            b,
            S,
            O,
            s
          ), Tl(8, b);
          break;
        case 23:
          break;
        case 22:
          var P = b.stateNode;
          b.memoizedState !== null ? P._visibility & 2 ? ga(
            f,
            b,
            S,
            O,
            s
          ) : Ml(
            f,
            b
          ) : (P._visibility |= 2, ga(
            f,
            b,
            S,
            O,
            s
          )), s && $ & 2048 && Gf(
            b.alternate,
            b
          );
          break;
        case 24:
          ga(
            f,
            b,
            S,
            O,
            s
          ), s && $ & 2048 && Zf(b.alternate, b);
          break;
        default:
          ga(
            f,
            b,
            S,
            O,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Ml(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var o = e, l = t, s = l.flags;
        switch (l.tag) {
          case 22:
            Ml(o, l), s & 2048 && Gf(
              l.alternate,
              l
            );
            break;
          case 24:
            Ml(o, l), s & 2048 && Zf(l.alternate, l);
            break;
          default:
            Ml(o, l);
        }
        t = t.sibling;
      }
  }
  var wo = 8192;
  function So(e, t, o) {
    if (e.subtreeFlags & wo)
      for (e = e.child; e !== null; )
        $0(
          e,
          t,
          o
        ), e = e.sibling;
  }
  function $0(e, t, o) {
    switch (e.tag) {
      case 26:
        So(
          e,
          t,
          o
        ), e.flags & wo && (e.memoizedState !== null ? XS(
          o,
          bn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Jm(o, e)));
        break;
      case 5:
        So(
          e,
          t,
          o
        ), e.flags & wo && (e = e.stateNode, (t & 335544128) === t && Jm(o, e));
        break;
      case 3:
      case 4:
        var l = bn;
        bn = Bl(e.stateNode.containerInfo), So(
          e,
          t,
          o
        ), bn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = wo, wo = 16777216, So(
          e,
          t,
          o
        ), wo = l) : So(
          e,
          t,
          o
        ));
        break;
      case 30:
        if ((e.flags & wo) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var s = e.stateNode;
          s.paired = null, Kt === null && (Kt = /* @__PURE__ */ new Map()), Kt.set(l, s);
        }
        So(
          e,
          t,
          o
        );
        break;
      default:
        So(
          e,
          t,
          o
        );
    }
  }
  function X0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ol(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var o = 0; o < t.length; o++) {
          var l = t[o];
          pt = l, Z0(
            l,
            e
          );
        }
      X0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        G0(e), e = e.sibling;
  }
  function G0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ol(e), e.flags & 2048 && Ri(9, e, e.return);
        break;
      case 3:
        Ol(e);
        break;
      case 12:
        Ol(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Hs(e)) : Ol(e);
        break;
      default:
        Ol(e);
    }
  }
  function Hs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var o = 0; o < t.length; o++) {
          var l = t[o];
          pt = l, Z0(
            l,
            e
          );
        }
      X0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ri(8, t, t.return), Hs(t);
          break;
        case 22:
          o = t.stateNode, o._visibility & 2 && (o._visibility &= -3, Hs(t));
          break;
        default:
          Hs(t);
      }
      e = e.sibling;
    }
  }
  function Z0(e, t) {
    for (; pt !== null; ) {
      var o = pt;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Ri(8, o, t);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var l = o.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          hl(o.memoizedState.cache);
      }
      if (l = o.child, l !== null) l.return = o, pt = l;
      else
        e: for (o = e; pt !== null; ) {
          l = pt;
          var s = l.sibling, f = l.return;
          if (U0(l), l === o) {
            pt = null;
            break e;
          }
          if (s !== null) {
            s.return = f, pt = s;
            break e;
          }
          pt = f;
        }
    }
  }
  var Vw = {
    getCacheForType: function(e) {
      var t = mt(at), o = t.data.get(e);
      return o === void 0 && (o = e(), t.data.set(e, o)), o;
    },
    cacheSignal: function() {
      return mt(at).controller.signal;
    }
  }, Iw = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Xe = null, Me = null, Re = 0, Ie = 0, Ft = null, Hi = !1, pa = !1, Qf = !1, ci = 0, We = 0, ki = 0, _o = 0, ks = 0, Jt = 0, ma = 0, zl = null, jt = null, Kf = !1, Us = 0, Q0 = 0, Bs = 1 / 0, Ls = null, Ui = null, Fe = 0, wn = null, Eo = null, qn = 0, Ff = 0, Jf = null, K0 = null, ya = null, va = null, ba = null, Rl = 0, js = null;
  function Pt() {
    return (je & 2) !== 0 && Re !== 0 ? Re & -Re : ue.T !== null ? rd() : zr();
  }
  function F0() {
    if (Jt === 0)
      if ((Re & 536870912) === 0 || Ae) {
        var e = Io;
        Io <<= 1, (Io & 3932160) === 0 && (Io = 262144), Jt = e;
      } else Jt = 536870912;
    return e = yt.current, e !== null && (e.flags |= 32), Jt;
  }
  function xa(e, t) {
    if (t != null) {
      var o = e.stateNode, l = o.ref;
      l === null && (l = o.ref = Om(
        ei(e.memoizedProps, o)
      )), va === null && (va = []), va.push(t.bind(null, l));
    }
  }
  function Vt(e, t, o) {
    (e === Xe && (Ie === 2 || Ie === 9) || e.cancelPendingCommit !== null) && (wa(e, 0), Bi(
      e,
      Re,
      Jt,
      !1
    )), no(e, o), ((je & 2) === 0 || e !== Xe) && (e === Xe && ((je & 2) === 0 && (_o |= o), We === 4 && Bi(
      e,
      Re,
      Jt,
      !1
    )), Yn(e));
  }
  function J0(e, t, o) {
    if ((je & 6) !== 0) throw Error(r(327));
    var l = !o && (t & 127) === 0 && (t & e.expiredLanes) === 0 || to(e, t), s = l ? $w(e, t) : Wf(e, t, !0), f = l;
    do {
      if (s === 0) {
        pa && !l && Bi(e, t, 0, !1);
        break;
      } else {
        if (o = e.current.alternate, f && !qw(o)) {
          s = Wf(e, t, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var b = 0;
          else
            b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            t = b;
            e: {
              var S = e;
              s = zl;
              var O = S.current.memoizedState.isDehydrated;
              if (O && (wa(S, b).flags |= 256), b = Wf(
                S,
                b,
                !1
              ), b !== 2 && b !== 6) {
                if (Qf && !O) {
                  S.errorRecoveryDisabledLanes |= f, _o |= f, s = 4;
                  break e;
                }
                f = jt, jt = s, f !== null && (jt === null ? jt = f : jt.push.apply(
                  jt,
                  f
                ));
              }
              s = b;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          wa(e, 0), Bi(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, f = s, f) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Bi(
                l,
                t,
                Jt,
                !Hi
              );
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (s = Us + 300 - Tt(), 10 < s)) {
            if (Bi(
              l,
              t,
              Jt,
              !Hi
            ), Yo(l, 0, !0) !== 0) break e;
            qn = t, l.timeoutHandle = vd(
              P0.bind(
                null,
                l,
                o,
                jt,
                Ls,
                Kf,
                t,
                Jt,
                _o,
                ma,
                Hi,
                f,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          P0(
            l,
            o,
            jt,
            Ls,
            Kf,
            t,
            Jt,
            _o,
            ma,
            Hi,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Yn(e);
  }
  function P0(e, t, o, l, s, f, b, S, O, $, P, ae, q, Q) {
    e.timeoutHandle = -1;
    var ge = t.subtreeFlags, ve = (f & 335544064) === f;
    if (ae = null, (ve || ge & 8192 || (ge & 16785408) === 16785408) && (ae = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Dn
    }, Kt = null, $0(
      t,
      f,
      ae
    ), ve && (ge = ae, ve = e.containerInfo, ve = (ve.nodeType === 9 ? ve : ve.ownerDocument).__reactViewTransition, ve != null && (ge.count++, ge.waitingForViewTransition = !0, ge = Vl.bind(ge), ve.finished.then(ge, ge))), ge = (f & 62914560) === f ? Us - Tt() : (f & 4194048) === f ? Q0 - Tt() : 0, ge = GS(
      ae,
      ge
    ), ge !== null)) {
      qn = f, e.cancelPendingCommit = ge(
        lm.bind(
          null,
          e,
          t,
          f,
          o,
          l,
          s,
          b,
          S,
          O,
          $,
          P,
          ae,
          null,
          q,
          Q
        )
      ), Bi(e, f, b, !$);
      return;
    }
    lm(
      e,
      t,
      f,
      o,
      l,
      s,
      b,
      S,
      O,
      $,
      P,
      ae
    );
  }
  function qw(e) {
    for (var t = e; ; ) {
      var o = t.tag;
      if ((o === 0 || o === 11 || o === 15) && t.flags & 16384 && (o = t.updateQueue, o !== null && (o = o.stores, o !== null)))
        for (var l = 0; l < o.length; l++) {
          var s = o[l], f = s.getSnapshot;
          s = s.value;
          try {
            if (!Zt(f(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (o = t.child, t.subtreeFlags & 16384 && o !== null)
        o.return = t, t = o;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Bi(e, t, o, l) {
    t = Fa(e, t), t &= ~ks, t &= ~_o, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var f = 31 - At(s), b = 1 << f;
      l[f] = -1, s &= ~b;
    }
    o !== 0 && Ar(e, o, t);
  }
  function Vs() {
    return (je & 6) === 0 ? (Dl(0), !1) : !0;
  }
  function Pf() {
    if (Me !== null) {
      if (Ie === 0)
        var e = Me.return;
      else
        e = Me, oi = co = null, lf(e), ra = null, ml = 0, e = Me;
      for (; e !== null; )
        w0(e.alternate, e), e = e.return;
      Me = null;
    }
  }
  function wa(e, t) {
    var o = e.timeoutHandle;
    return o !== -1 && (e.timeoutHandle = -1, dS(o)), o = e.cancelPendingCommit, o !== null && (e.cancelPendingCommit = null, o()), qn = 0, Pf(), Xe = e, Me = o = ni(e.current, null), Re = t, Ie = 0, Ft = null, Hi = !1, pa = to(e, t), Qf = !1, ma = Jt = ks = _o = ki = We = 0, jt = zl = null, Kf = !1, ci = Fa(e, t), Qr(), o;
  }
  function W0(e, t) {
    Ne = null, ue.H = bs, t === la || t === as ? (t = lp(), Ie = 3) : t === Gc ? (t = lp(), Ie = 4) : Ie = t === wf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ft = t, Me === null && (We = 1, xs(
      e,
      sn(t, e.current)
    ));
  }
  function em() {
    var e = yt.current;
    return e === null ? !0 : (Re & 4194048) === Re ? Et === null : (Re & 62914560) === Re || (Re & 536870912) !== 0 ? e === Et : !1;
  }
  function tm() {
    var e = ue.H;
    return ue.H = bs, e === null ? bs : e;
  }
  function nm() {
    var e = ue.A;
    return ue.A = Vw, e;
  }
  function Is() {
    We = 4, Hi || (Re & 4194048) !== Re && yt.current !== null || (pa = !0), (ki & 134217727) === 0 && (_o & 134217727) === 0 || Xe === null || Bi(
      Xe,
      Re,
      Jt,
      !1
    );
  }
  function Wf(e, t, o) {
    var l = je;
    je |= 2;
    var s = tm(), f = nm();
    (Xe !== e || Re !== t) && (Ls = null, wa(e, t)), t = !1;
    var b = We;
    e: do
      try {
        if (Ie !== 0 && Me !== null) {
          var S = Me, O = Ft;
          switch (Ie) {
            case 8:
              Pf(), b = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var $ = Ie;
              if (Ie = 0, Ft = null, Sa(e, S, O, $), o && pa) {
                b = 0;
                break e;
              }
              break;
            default:
              $ = Ie, Ie = 0, Ft = null, Sa(e, S, O, $);
          }
        }
        Yw(), b = We;
        break;
      } catch (P) {
        W0(e, P);
      }
    while (!0);
    return t && e.shellSuspendCounter++, oi = co = null, je = l, ue.H = s, ue.A = f, Me === null && (Xe = null, Re = 0, Qr()), b;
  }
  function Yw() {
    for (; Me !== null; ) im(Me);
  }
  function $w(e, t) {
    var o = je;
    je |= 2;
    var l = tm(), s = nm();
    Xe !== e || Re !== t ? (Ls = null, Bs = Tt() + 500, wa(e, t)) : pa = to(
      e,
      t
    );
    e: do
      try {
        if (Ie !== 0 && Me !== null) {
          t = Me;
          var f = Ft;
          t: switch (Ie) {
            case 1:
              Ie = 0, Ft = null, Sa(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (op(f)) {
                Ie = 0, Ft = null, om(t);
                break;
              }
              t = function() {
                Ie !== 2 && Ie !== 9 || Xe !== e || (Ie = 7), Yn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Ie = 7;
              break e;
            case 4:
              Ie = 5;
              break e;
            case 7:
              op(f) ? (Ie = 0, Ft = null, om(t)) : (Ie = 0, Ft = null, Sa(e, t, f, 7));
              break;
            case 5:
              var b = null;
              switch (Me.tag) {
                case 26:
                  b = Me.memoizedState;
                case 5:
                case 27:
                  var S = Me;
                  if (b ? Km(b) : S.stateNode.complete) {
                    Ie = 0, Ft = null;
                    var O = S.sibling;
                    if (O !== null) Me = O;
                    else {
                      var $ = S.return;
                      $ !== null ? (Me = $, qs($)) : Me = null;
                    }
                    break t;
                  }
              }
              Ie = 0, Ft = null, Sa(e, t, f, 5);
              break;
            case 6:
              Ie = 0, Ft = null, Sa(e, t, f, 6);
              break;
            case 8:
              Pf(), We = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Xw();
        break;
      } catch (P) {
        W0(e, P);
      }
    while (!0);
    return oi = co = null, ue.H = l, ue.A = s, je = o, Me !== null ? 0 : (Xe = null, Re = 0, Qr(), We);
  }
  function Xw() {
    for (; Me !== null && !Wu(); )
      im(Me);
  }
  function im(e) {
    var t = b0(e.alternate, e, ci);
    e.memoizedProps = e.pendingProps, t === null ? qs(e) : Me = t;
  }
  function om(e) {
    var t = e, o = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = d0(
          o,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Re
        );
        break;
      case 11:
        t = d0(
          o,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Re
        );
        break;
      case 5:
        lf(t);
        var l = t;
        l === ht && (Ae ? (es(l), l.tag === 5 && l.stateNode != null && (Ge = l.stateNode)) : (es(l), Ae = !0));
      default:
        w0(o, t), t = Me = Zg(t, ci), t = b0(o, t, ci);
    }
    e.memoizedProps = e.pendingProps, t === null ? qs(e) : Me = t;
  }
  function Sa(e, t, o, l) {
    oi = co = null, lf(t), ra = null, ml = 0;
    var s = t.return;
    try {
      if (Rw(
        e,
        s,
        t,
        o,
        Re
      )) {
        We = 1, xs(
          e,
          sn(o, e.current)
        ), Me = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw Me = s, f;
      We = 1, xs(
        e,
        sn(o, e.current)
      ), Me = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : pa || (Re & 536870912) !== 0 ? e = !1 : (Hi = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = yt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), am(t, e)) : qs(t);
  }
  function qs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        am(
          t,
          Hi
        );
        return;
      }
      e = t.return;
      var o = Uw(
        t.alternate,
        t,
        ci
      );
      if (o !== null) {
        Me = o;
        return;
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function am(e, t) {
    do {
      var o = Bw(e.alternate, e);
      if (o !== null) {
        o.flags &= 32767, Me = o;
        return;
      }
      if (o = e.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !t && (e = e.sibling, e !== null)) {
        Me = e;
        return;
      }
      Me = e = o;
    } while (e !== null);
    We = 6, Me = null;
  }
  function lm(e, t, o, l, s, f, b, S, O, $, P, ae) {
    e.cancelPendingCommit = null;
    do
      Ys();
    while (Fe !== 0);
    if ((je & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      e === Xe && (Me = Xe = null, Re = 0), Eo = t, wn = e, qn = o, Jf = s, K0 = l, Gw(
        e,
        t,
        o,
        b,
        S,
        O,
        ae
      );
    }
  }
  function Gw(e, t, o, l, s, f, b) {
    var S = t.lanes | t.childLanes;
    if (Ff = S, S |= Dc, sc(
      e,
      o,
      S,
      l,
      s,
      f
    ), va = null, (o & 335544064) === o ? (ba = xw(e), l = 10262) : (ba = null, l = 10256), (t.subtreeFlags & l) !== 0 || (t.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Pw(jo, function() {
      return id(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), As = !1, l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
      l = ue.T, ue.T = null, s = fe.p, fe.p = 2, f = je, je |= 4;
      try {
        Lw(e, t, o);
      } finally {
        je = f, fe.p = s, ue.T = l;
      }
    }
    Fe = 1, As ? ya = vS(
      b,
      e.containerInfo,
      ba,
      ed,
      td,
      Qw,
      nd,
      id,
      Zw
    ) : (ed(), td(), nd());
  }
  function Zw(e) {
    if (Fe !== 0) {
      var t = wn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Qw() {
    Fe === 3 && (Fe = 0, q0(Eo, wn), Fe = 4);
  }
  function ed() {
    if (Fe === 1) {
      Fe = 0;
      var e = wn, t = Eo, o = qn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = ue.T, ue.T = null;
        var s = fe.p;
        fe.p = 2;
        var f = je;
        je |= 4;
        try {
          Al = zs = !1, V0(t, e, o), o = pd;
          var b = Bg(e.containerInfo), S = o.focusedElem, O = o.selectionRange;
          if (b !== S && S && S.ownerDocument && Ug(
            S.ownerDocument.documentElement,
            S
          )) {
            if (O !== null && Ac(S)) {
              var $ = O.start, P = O.end;
              if (P === void 0 && (P = $), "selectionStart" in S)
                S.selectionStart = $, S.selectionEnd = Math.min(
                  P,
                  S.value.length
                );
              else {
                var ae = S.ownerDocument || document, q = ae && ae.defaultView || window;
                if (q.getSelection) {
                  var Q = q.getSelection(), ge = S.textContent.length, ve = Math.min(O.start, ge), Te = O.end === void 0 ? ve : Math.min(O.end, ge);
                  !Q.extend && ve > Te && (b = Te, Te = ve, ve = b);
                  var Y = kg(
                    S,
                    ve
                  ), B = kg(
                    S,
                    Te
                  );
                  if (Y && B && (Q.rangeCount !== 1 || Q.anchorNode !== Y.node || Q.anchorOffset !== Y.offset || Q.focusNode !== B.node || Q.focusOffset !== B.offset)) {
                    var Z = ae.createRange();
                    Z.setStart(Y.node, Y.offset), Q.removeAllRanges(), ve > Te ? (Q.addRange(Z), Q.extend(B.node, B.offset)) : (Z.setEnd(B.node, B.offset), Q.addRange(Z));
                  }
                }
              }
            }
            for (ae = [], Q = S; Q = Q.parentNode; )
              Q.nodeType === 1 && ae.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < ae.length; S++) {
              var oe = ae[S];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          Oa = !!gd, pd = gd = null;
        } finally {
          je = f, fe.p = s, ue.T = l;
        }
      }
      e.current = t, Fe = 2;
    }
  }
  function td() {
    if (Fe === 2) {
      Fe = 0;
      var e = wn, t = Eo, o = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || o) {
        o = ue.T, ue.T = null;
        var l = fe.p;
        fe.p = 2;
        var s = je;
        je |= 4;
        try {
          H0(e, t.alternate, t);
        } finally {
          je = s, fe.p = l, ue.T = o;
        }
      }
      Fe = 3;
    }
  }
  function nd() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0;
      var e = ya;
      ya = null, ec();
      var t = wn, o = Eo, l = qn, s = K0, f = (l & 335544064) === l ? 10262 : 10256;
      if ((o.subtreeFlags & f) !== 0 || (o.flags & f) !== 0 ? Fe = 5 : (Fe = 0, Eo = wn = null, rm(t, t.pendingLanes)), f = t.pendingLanes, f === 0 && (Ui = null), Wa(l), o = o.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function")
        try {
          Ct.onCommitFiberRoot(
            eo,
            o,
            void 0,
            (o.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        o = ue.T, f = fe.p, fe.p = 2, ue.T = null;
        try {
          for (var b = t.onRecoverableError, S = 0; S < s.length; S++) {
            var O = s[S];
            b(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          ue.T = o, fe.p = f;
        }
      }
      if (s = va, b = ba, ba = null, s !== null && (va = null, b === null && (b = []), e !== null))
        for (O = 0; O < s.length; O++)
          o = (0, s[O])(
            b
          ), o !== void 0 && e.finished.finally(o);
      (qn & 3) !== 0 && Ys(), Yn(t), f = t.pendingLanes, (l & 261930) !== 0 && (f & 42) !== 0 ? t === js ? Rl++ : (Rl = 0, js = t) : (Rl = 0, js = null), Dl(0);
    }
  }
  function rm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hl(t)));
  }
  function Ys() {
    return ya !== null && (ya.skipTransition(), ya = null), ed(), td(), nd(), id();
  }
  function id() {
    if (Fe !== 5) return !1;
    var e = wn, t = Ff;
    Ff = 0;
    var o = Wa(qn), l = ue.T, s = fe.p;
    try {
      fe.p = 32 > o ? 32 : o, ue.T = null, o = Jf, Jf = null;
      var f = wn, b = qn;
      if (Fe = 0, Eo = wn = null, qn = 0, (je & 6) !== 0) throw Error(r(331));
      var S = je;
      if (je |= 4, G0(f.current), Y0(
        f,
        f.current,
        b,
        o
      ), je = S, Dl(0, !1), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        try {
          Ct.onPostCommitFiberRoot(eo, f);
        } catch {
        }
      return !0;
    } finally {
      fe.p = s, ue.T = l, rm(e, t);
    }
  }
  function sm(e, t, o) {
    t = sn(o, t), t = xf(e.stateNode, t, 2), e = Ai(e, t, 2), e !== null && (no(e, 2), Yn(e));
  }
  function qe(e, t, o) {
    if (e.tag === 3)
      sm(e, e, o);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          sm(
            t,
            e,
            o
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ui === null || !Ui.has(l))) {
            e = sn(o, e), o = o0(2), l = Ai(t, o, 2), l !== null && (a0(
              o,
              l,
              t,
              e
            ), no(l, 2), Yn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function od(e, t, o) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Iw();
      var s = /* @__PURE__ */ new Set();
      l.set(t, s);
    } else
      s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s));
    s.has(o) || (Qf = !0, s.add(o), e = Kw.bind(null, e, t, o), t.then(e, e));
  }
  function Kw(e, t, o) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & o, e.warmLanes &= ~o, Xe === e && (Re & o) === o && ((We === 4 || We === 3 && (Re & 62914560) === Re && 300 > Tt() - Us) && (je & 2) === 0 ? wa(e, 0) : ks |= o, ma === Re && (ma = 0)), Yn(e);
  }
  function um(e, t) {
    t === 0 && (t = Ja()), e = ro(e, t), e !== null && (no(e, t), Yn(e));
  }
  function Fw(e) {
    var t = e.memoizedState, o = 0;
    t !== null && (o = t.retryLane), um(e, o);
  }
  function Jw(e, t) {
    var o = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, s = e.memoizedState;
        s !== null && (o = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), um(e, o);
  }
  function Pw(e, t) {
    return Qa(e, t);
  }
  var _a = null, Ea = null, ad = !1, $s = !1, ld = !1, Li = 0;
  function Yn(e) {
    e !== Ea && e.next === null && (Ea === null ? _a = Ea = e : Ea = Ea.next = e), $s = !0, ad || (ad = !0, eS());
  }
  function Dl(e, t) {
    if (!ld && $s) {
      ld = !0;
      do
        for (var o = !1, l = _a; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var b = l.suspendedLanes, S = l.pingedLanes;
              f = (1 << 31 - At(42 | e) + 1) - 1, f &= s & ~(b & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (o = !0, hm(l, f));
          } else
            f = Re, f = Yo(
              l,
              l === Xe ? f : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (f & 3) === 0 || to(l, f) || (o = !0, hm(l, f));
          l = l.next;
        }
      while (o);
      ld = !1;
    }
  }
  function Ww() {
    cm();
  }
  function cm() {
    $s = ad = !1;
    var e = 0;
    Li !== 0 && fS() && (e = Li);
    for (var t = Tt(), o = null, l = _a; l !== null; ) {
      var s = l.next, f = fm(l, t);
      f === 0 ? (l.next = null, o === null ? _a = s : o.next = s, s === null && (Ea = o)) : (o = l, (e !== 0 || (f & 3) !== 0) && ($s = !0)), l = s;
    }
    Fe !== 0 && Fe !== 5 || Dl(e), Li !== 0 && (Li = 0);
  }
  function fm(e, t) {
    for (var o = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var b = 31 - At(f), S = 1 << b, O = s[b];
      O === -1 ? ((S & o) === 0 || (S & l) !== 0) && (s[b] = Cr(S, t)) : O <= t && (e.expiredLanes |= S), f &= ~S;
    }
    if (t = Xe, o = Re, o = Yo(
      e,
      e === t ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, o === 0 || e === t && (Ie === 2 || Ie === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ka(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((o & 3) === 0 || to(e, o)) {
      if (t = o & -o, t === e.callbackPriority) return t;
      switch (l !== null && Ka(l), Wa(o)) {
        case 2:
        case 8:
          o = Nr;
          break;
        case 32:
          o = jo;
          break;
        case 268435456:
          o = Tr;
          break;
        default:
          o = jo;
      }
      return l = dm.bind(null, e), o = Qa(o, l), e.callbackPriority = t, e.callbackNode = o, t;
    }
    return l !== null && l !== null && Ka(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function dm(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var o = e.callbackNode;
    if (Ys() && e.callbackNode !== o)
      return null;
    var l = Re;
    return l = Yo(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (J0(e, l, t), fm(e, Tt()), e.callbackNode != null && e.callbackNode === o ? dm.bind(null, e) : null);
  }
  function hm(e, t) {
    if (Ys()) return null;
    J0(e, t, !0);
  }
  function eS() {
    hS(function() {
      (je & 6) !== 0 ? Qa(
        Er,
        Ww
      ) : cm();
    });
  }
  function rd() {
    if (Li === 0) {
      var e = go;
      e === 0 && (e = Vo, Vo <<= 1, (Vo & 261888) === 0 && (Vo = 256)), Li = e;
    }
    return Li;
  }
  function gm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Vr(e);
  }
  function tS(e, t, o, l, s) {
    if (t === "submit" && o && o.stateNode === s) {
      var f = gm(
        (s[_t] || null).action
      ), b = l.submitter;
      b && (t = (t = b[_t] || null) ? gm(t.formAction) : b.getAttribute("formAction"), t !== null && (f = t, b = null));
      var S = new $r(
        "action",
        "action",
        null,
        l,
        s
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Li !== 0) {
                  var O = new FormData(s, b);
                  pf(
                    o,
                    {
                      pending: !0,
                      data: O,
                      method: s.method,
                      action: f
                    },
                    null,
                    O
                  );
                }
              } else
                typeof f == "function" && (S.preventDefault(), O = new FormData(s, b), pf(
                  o,
                  {
                    pending: !0,
                    data: O,
                    method: s.method,
                    action: f
                  },
                  f,
                  O
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var sd = 0; sd < Rc.length; sd++) {
    var ud = Rc[sd], nS = ud.toLowerCase(), iS = ud[0].toUpperCase() + ud.slice(1);
    yn(
      nS,
      "on" + iS
    );
  }
  yn(Vg, "onAnimationEnd"), yn(Ig, "onAnimationIteration"), yn(qg, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(dw, "onTransitionRun"), yn(hw, "onTransitionStart"), yn(gw, "onTransitionCancel"), yn(Yg, "onTransitionEnd"), vi("onMouseEnter", ["mouseout", "mouseover"]), vi("onMouseLeave", ["mouseout", "mouseover"]), vi("onPointerEnter", ["pointerout", "pointerover"]), vi("onPointerLeave", ["pointerout", "pointerover"]), mn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), oS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl)
  );
  function pm(e, t) {
    t = (t & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var l = e[o], s = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var b = l.length - 1; 0 <= b; b--) {
            var S = l[b], O = S.instance, $ = S.currentTarget;
            if (S = S.listener, O !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = $;
            try {
              f(s);
            } catch (P) {
              Zr(P);
            }
            s.currentTarget = null, f = O;
          }
        else
          for (b = 0; b < l.length; b++) {
            if (S = l[b], O = S.instance, $ = S.currentTarget, S = S.listener, O !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = $;
            try {
              f(s);
            } catch (P) {
              Zr(P);
            }
            s.currentTarget = null, f = O;
          }
      }
    }
  }
  function Oe(e, t) {
    var o = t[Dr];
    o === void 0 && (o = t[Dr] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    o.has(l) || (mm(t, e, 2, !1), o.add(l));
  }
  function cd(e, t, o) {
    var l = 0;
    t && (l |= 4), mm(
      o,
      e,
      l,
      t
    );
  }
  var Xs = "_reactListening" + Math.random().toString(36).slice(2);
  function fd(e) {
    if (!e[Xs]) {
      e[Xs] = !0, Ur.forEach(function(o) {
        o !== "selectionchange" && (oS.has(o) || cd(o, !1, e), cd(o, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xs] || (t[Xs] = !0, cd("selectionchange", !1, t));
    }
  }
  function mm(e, t, o, l) {
    switch (ay(t)) {
      case 2:
        var s = FS;
        break;
      case 8:
        s = JS;
        break;
      default:
        s = zd;
    }
    o = s.bind(
      null,
      t,
      o,
      e
    ), s = void 0, !vc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), l ? s !== void 0 ? e.addEventListener(t, o, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, o, !0) : s !== void 0 ? e.addEventListener(t, o, {
      passive: s
    }) : e.addEventListener(t, o, !1);
  }
  function dd(e, t, o, l, s) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var S = l.stateNode.containerInfo;
          if (S === s) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var O = b.tag;
              if ((O === 3 || O === 4) && b.stateNode.containerInfo === s)
                return;
              b = b.return;
            }
          for (; S !== null; ) {
            if (b = Fn(S), b === null) return;
            if (O = b.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              l = f = b;
              continue e;
            }
            S = S.parentNode;
          }
        }
        l = l.return;
      }
    mg(function() {
      var $ = f, P = mc(o), ae = [];
      e: {
        var q = $g.get(e);
        if (q !== void 0) {
          var Q = $r, ge = e;
          switch (e) {
            case "keypress":
              if (qr(o) === 0) break e;
            case "keydown":
            case "keyup":
              Q = qx;
              break;
            case "focusin":
              ge = "focus", Q = Sc;
              break;
            case "focusout":
              ge = "blur", Q = Sc;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Sc;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = bg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Ox;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Zx;
              break;
            case Vg:
            case Ig:
            case qg:
              Q = Dx;
              break;
            case Yg:
              Q = Kx;
              break;
            case "scroll":
            case "scrollend":
              Q = Ax;
              break;
            case "wheel":
              Q = Jx;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = kx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = wg;
              break;
            case "submit":
              Q = Xx;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Wx;
          }
          var ve = (t & 4) !== 0, Te = !ve && (e === "scroll" || e === "scrollend"), Y = ve ? q !== null ? q + "Capture" : null : q;
          ve = [];
          for (var B = $, Z; B !== null; ) {
            var oe = B;
            if (Z = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || Z === null || Y === null || (oe = nl(B, Y), oe != null && ve.push(
              kl(B, oe, Z)
            )), Te) break;
            B = B.return;
          }
          0 < ve.length && (q = new Q(
            q,
            ge,
            null,
            o,
            P
          ), ae.push({ event: q, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", Q && o !== pc && (ge = o.relatedTarget || o.fromElement) && (Fn(ge) || ge[mi]))
            break e;
          (q || Q) && (ge = P.window === P ? P : (Q = P.ownerDocument) ? Q.defaultView || Q.parentWindow : window, q ? (Q = o.relatedTarget || o.toElement, q = $, Q = Q ? Fn(Q) : null, Q !== null && (Te = c(Q), ve = Q.tag, Q !== Te || ve !== 5 && ve !== 27 && ve !== 6) && (Q = null)) : (q = null, Q = $), q !== Q && (ve = bg, oe = "onMouseLeave", Y = "onMouseEnter", B = "mouse", (e === "pointerout" || e === "pointerover") && (ve = wg, oe = "onPointerLeave", Y = "onPointerEnter", B = "pointer"), Te = q == null ? ge : oo(q), Z = Q == null ? ge : oo(Q), ge = new ve(
            oe,
            B + "leave",
            q,
            o,
            P
          ), ge.target = Te, ge.relatedTarget = Z, oe = null, Fn(P) === $ && (ve = new ve(
            Y,
            B + "enter",
            Q,
            o,
            P
          ), ve.target = Z, ve.relatedTarget = Te, oe = ve), Te = oe, ve = q && Q ? D(
            q,
            Q,
            aS
          ) : null, q !== null && ym(
            ae,
            ge,
            q,
            ve,
            !1
          ), Q !== null && Te !== null && ym(
            ae,
            Te,
            Q,
            ve,
            !0
          )));
        }
        e: {
          if (q = $ ? oo($) : window, Q = q.nodeName && q.nodeName.toLowerCase(), Q === "select" || Q === "input" && q.type === "file")
            var me = Mg;
          else if (Cg(q))
            if (Og)
              me = uw;
            else {
              me = rw;
              var De = lw;
            }
          else
            Q = q.nodeName, !Q || Q.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? $ && gc($.elementType) && (me = Mg) : me = sw;
          if (me && (me = me(e, $))) {
            Ag(
              ae,
              me,
              o,
              P
            );
            break e;
          }
          De && De(e, q, $);
        }
        switch (De = $ ? oo($) : window, e) {
          case "focusin":
            (Cg(De) || De.contentEditable === "true") && (Po = De, Mc = $, cl = null);
            break;
          case "focusout":
            cl = Mc = Po = null;
            break;
          case "mousedown":
            Oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Oc = !1, Lg(ae, o, P);
            break;
          case "selectionchange":
            if (fw) break;
          case "keydown":
          case "keyup":
            Lg(ae, o, P);
        }
        var xe;
        if (Ec)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          Jo ? Ng(e, o) && (we = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
        we && (Sg && o.locale !== "ko" && (Jo || we !== "onCompositionStart" ? we === "onCompositionEnd" && Jo && (xe = yg()) : (bi = P, bc = "value" in bi ? bi.value : bi.textContent, Jo = !0)), De = Gs($, we), 0 < De.length && (we = new xg(
          we,
          e,
          null,
          o,
          P
        ), ae.push({ event: we, listeners: De }), xe ? we.data = xe : (xe = Tg(o), xe !== null && (we.data = xe)))), (xe = tw ? nw(e, o) : iw(e, o)) && (we = Gs($, "onBeforeInput"), 0 < we.length && (De = new xg(
          "onBeforeInput",
          "beforeinput",
          null,
          o,
          P
        ), ae.push({
          event: De,
          listeners: we
        }), De.data = xe)), tS(
          ae,
          e,
          $,
          o,
          P
        );
      }
      pm(ae, t);
    });
  }
  function kl(e, t, o) {
    return {
      instance: e,
      listener: t,
      currentTarget: o
    };
  }
  function Gs(e, t) {
    for (var o = t + "Capture", l = []; e !== null; ) {
      var s = e, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = nl(e, o), s != null && l.unshift(
        kl(e, s, f)
      ), s = nl(e, t), s != null && l.push(
        kl(e, s, f)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function aS(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ym(e, t, o, l, s) {
    for (var f = t._reactName, b = []; o !== null && o !== l; ) {
      var S = o, O = S.alternate, $ = S.stateNode;
      if (S = S.tag, O !== null && O === l) break;
      S !== 5 && S !== 26 && S !== 27 || $ === null || (O = $, s ? ($ = nl(o, f), $ != null && b.unshift(
        kl(o, $, O)
      )) : s || ($ = nl(o, f), $ != null && b.push(
        kl(o, $, O)
      ))), o = o.return;
    }
    b.length !== 0 && e.push({ event: t, listeners: b });
  }
  var lS = /\r\n?/g, rS = /\u0000|\uFFFD/g;
  function vm(e) {
    return (typeof e == "string" ? e : "" + e).replace(lS, `
`).replace(rS, "");
  }
  function bm(e, t) {
    return t = vm(t), vm(e) === t;
  }
  function Ye(e, t, o, l, s, f) {
    switch (o) {
      case "children":
        if (typeof l == "string")
          t === "body" || t === "textarea" && l === "" || Qo(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          t !== "body" && Qo(e, "" + l);
        else return;
        break;
      case "className":
        jr(e, "class", l);
        break;
      case "tabIndex":
        jr(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jr(e, o, l);
        break;
      case "style":
        gg(e, l, f);
        return;
      case "data":
        if (t !== "object") {
          jr(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || o !== "href")) {
          e.removeAttribute(o);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(o);
          break;
        }
        l = Vr(l), e.setAttribute(o, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (o === "formAction" ? (t !== "input" && Ye(e, t, "name", s.name, s, null), Ye(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ye(e, t, "encType", s.encType, s, null), Ye(e, t, "method", s.method, s, null), Ye(e, t, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(o);
          break;
        }
        l = Vr(l), e.setAttribute(o, l);
        break;
      case "onClick":
        l != null && (e.onclick = Dn);
        return;
      case "onScroll":
        l != null && Oe("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (o = l.__html, o != null) {
            if (s.children != null) throw Error(r(60));
            f?.__html !== o && (e.innerHTML = o);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        o = Vr(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          o
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(o, l) : e.removeAttribute(o);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(o, "") : e.removeAttribute(o);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(o, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(o, l) : e.removeAttribute(o);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(o, l) : e.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(o) : e.setAttribute(o, l);
        break;
      case "popover":
        Oe("beforetoggle", e), Oe("toggle", e), Lr(e, "popover", l);
        break;
      case "xlinkActuate":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Lr(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N")
          o = Tx.get(o) || o, Lr(e, o, l);
        else return;
    }
    Le = !0;
  }
  function hd(e, t, o, l, s, f) {
    switch (o) {
      case "style":
        gg(e, l, f);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (o = l.__html, o != null) {
            if (s.children != null) throw Error(r(60));
            f?.__html !== o && (e.innerHTML = o);
          }
        }
        break;
      case "children":
        if (typeof l == "string") Qo(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          Qo(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Oe("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = Dn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Br.hasOwnProperty(o))
          e: {
            if (o[0] === "o" && o[1] === "n" && (s = o.endsWith("Capture"), f = o.slice(2, s ? o.length - 7 : void 0), t = e[_t] || null, t = t != null ? t[o] : null, typeof t == "function" && e.removeEventListener(f, t, s), typeof l == "function")) {
              typeof t != "function" && t !== null && (o in e ? e[o] = null : e.hasAttribute(o) && e.removeAttribute(o)), e.addEventListener(f, l, s);
              break e;
            }
            Le = !0, o in e ? e[o] = l : l === !0 ? e.setAttribute(o, "") : Lr(e, o, l);
          }
        return;
    }
    Le = !0;
  }
  function xt(e, t, o) {
    switch (t) {
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
        Oe("error", e), Oe("load", e);
        var l = !1, s = !1, f;
        for (f in o)
          if (o.hasOwnProperty(f)) {
            var b = o[f];
            if (b != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Ye(e, t, f, b, o, null);
              }
          }
        s && Ye(e, t, "srcSet", o.srcSet, o, null), l && Ye(e, t, "src", o.src, o, null);
        return;
      case "input":
        Oe("invalid", e);
        var S = f = b = s = null, O = null, $ = null;
        for (l in o)
          if (o.hasOwnProperty(l)) {
            var P = o[l];
            if (P != null)
              switch (l) {
                case "name":
                  s = P;
                  break;
                case "type":
                  b = P;
                  break;
                case "checked":
                  O = P;
                  break;
                case "defaultChecked":
                  $ = P;
                  break;
                case "value":
                  f = P;
                  break;
                case "defaultValue":
                  S = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Ye(e, t, l, P, o, null);
              }
          }
        cg(
          e,
          f,
          S,
          O,
          $,
          b,
          s,
          !1
        );
        return;
      case "select":
        Oe("invalid", e), l = b = f = null;
        for (s in o)
          if (o.hasOwnProperty(s) && (S = o[s], S != null))
            switch (s) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                b = S;
                break;
              case "multiple":
                l = S;
              default:
                Ye(e, t, s, S, o, null);
            }
        t = f, o = b, e.multiple = !!l, t != null ? Zo(e, !!l, t, !1) : o != null && Zo(e, !!l, o, !0);
        return;
      case "textarea":
        Oe("invalid", e), f = s = l = null;
        for (b in o)
          if (o.hasOwnProperty(b) && (S = o[b], S != null))
            switch (b) {
              case "value":
                l = S;
                break;
              case "defaultValue":
                s = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(91));
                break;
              default:
                Ye(e, t, b, S, o, null);
            }
        dg(e, l, s, f);
        return;
      case "option":
        for (O in o)
          o.hasOwnProperty(O) && (l = o[O], l != null) && (O === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ye(e, t, O, l, o, null));
        return;
      case "dialog":
        Oe("beforetoggle", e), Oe("toggle", e), Oe("cancel", e), Oe("close", e);
        break;
      case "iframe":
      case "object":
        Oe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hl.length; l++)
          Oe(Hl[l], e);
        break;
      case "image":
        Oe("error", e), Oe("load", e);
        break;
      case "details":
        Oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Oe("error", e), Oe("load", e);
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
        for ($ in o)
          if (o.hasOwnProperty($) && (l = o[$], l != null))
            switch ($) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Ye(e, t, $, l, o, null);
            }
        return;
      default:
        if (gc(t)) {
          for (P in o)
            o.hasOwnProperty(P) && (l = o[P], l !== void 0 && hd(
              e,
              t,
              P,
              l,
              o,
              void 0
            ));
          return;
        }
    }
    for (S in o)
      o.hasOwnProperty(S) && (l = o[S], l != null && Ye(e, t, S, l, o, null));
  }
  var sS = {};
  function uS(e, t, o, l) {
    switch (t) {
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
        var s = null, f = null, b = null, S = null, O = null, $ = null, P = null;
        for (Q in o) {
          var ae = o[Q];
          if (o.hasOwnProperty(Q) && ae != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = ae;
              default:
                l.hasOwnProperty(Q) || Ye(e, t, Q, null, l, ae);
            }
        }
        for (var q in l) {
          var Q = l[q];
          if (ae = o[q], l.hasOwnProperty(q) && (Q != null || ae != null))
            switch (q) {
              case "type":
                Q !== ae && (Le = !0), f = Q;
                break;
              case "name":
                Q !== ae && (Le = !0), s = Q;
                break;
              case "checked":
                Q !== ae && (Le = !0), $ = Q;
                break;
              case "defaultChecked":
                Q !== ae && (Le = !0), P = Q;
                break;
              case "value":
                Q !== ae && (Le = !0), b = Q;
                break;
              case "defaultValue":
                Q !== ae && (Le = !0), S = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(r(137, t));
                break;
              default:
                Q !== ae && Ye(
                  e,
                  t,
                  q,
                  Q,
                  l,
                  ae
                );
            }
        }
        dc(
          e,
          b,
          S,
          O,
          $,
          P,
          f,
          s
        );
        return;
      case "select":
        Q = b = S = q = null;
        for (f in o)
          if (O = o[f], o.hasOwnProperty(f) && O != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                Q = O;
              default:
                l.hasOwnProperty(f) || Ye(
                  e,
                  t,
                  f,
                  null,
                  l,
                  O
                );
            }
        for (s in l)
          if (f = l[s], O = o[s], l.hasOwnProperty(s) && (f != null || O != null))
            switch (s) {
              case "value":
                f !== O && (Le = !0), q = f;
                break;
              case "defaultValue":
                f !== O && (Le = !0), S = f;
                break;
              case "multiple":
                f !== O && (Le = !0), b = f;
              default:
                f !== O && Ye(
                  e,
                  t,
                  s,
                  f,
                  l,
                  O
                );
            }
        t = S, o = b, l = Q, q != null ? Zo(e, !!o, q, !1) : !!l != !!o && (t != null ? Zo(e, !!o, t, !0) : Zo(e, !!o, o ? [] : "", !1));
        return;
      case "textarea":
        Q = q = null;
        for (S in o)
          if (s = o[S], o.hasOwnProperty(S) && s != null && !l.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, S, null, l, s);
            }
        for (b in l)
          if (s = l[b], f = o[b], l.hasOwnProperty(b) && (s != null || f != null))
            switch (b) {
              case "value":
                s !== f && (Le = !0), q = s;
                break;
              case "defaultValue":
                s !== f && (Le = !0), Q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== f && Ye(e, t, b, s, l, f);
            }
        fg(e, q, Q);
        return;
      case "option":
        for (var ge in o)
          q = o[ge], o.hasOwnProperty(ge) && q != null && !l.hasOwnProperty(ge) && (ge === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            ge,
            null,
            l,
            q
          ));
        for (O in l)
          q = l[O], Q = o[O], l.hasOwnProperty(O) && q !== Q && (q != null || Q != null) && (O === "selected" ? (q !== Q && (Le = !0), e.selected = q && typeof q != "function" && typeof q != "symbol") : Ye(
            e,
            t,
            O,
            q,
            l,
            Q
          ));
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
        for (var ve in o)
          q = o[ve], o.hasOwnProperty(ve) && q != null && !l.hasOwnProperty(ve) && Ye(e, t, ve, null, l, q);
        for ($ in l)
          if (q = l[$], Q = o[$], l.hasOwnProperty($) && q !== Q && (q != null || Q != null))
            switch ($) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(r(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  $,
                  q,
                  l,
                  Q
                );
            }
        return;
      default:
        if (gc(t)) {
          for (var Te in o)
            q = o[Te], o.hasOwnProperty(Te) && q !== void 0 && !l.hasOwnProperty(Te) && hd(
              e,
              t,
              Te,
              void 0,
              l,
              q
            );
          for (P in l)
            q = l[P], Q = o[P], !l.hasOwnProperty(P) || q === Q || q === void 0 && Q === void 0 || hd(
              e,
              t,
              P,
              q,
              l,
              Q
            );
          return;
        }
    }
    for (var Y in o)
      q = o[Y], o.hasOwnProperty(Y) && q != null && !l.hasOwnProperty(Y) && Ye(e, t, Y, null, l, q);
    for (ae in l)
      q = l[ae], Q = o[ae], !l.hasOwnProperty(ae) || q === Q || q == null && Q == null || Ye(e, t, ae, q, l, Q);
  }
  function xm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function cS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, o = performance.getEntriesByType("resource"), l = 0; l < o.length; l++) {
        var s = o[l], f = s.transferSize, b = s.initiatorType, S = s.duration;
        if (f && S && xm(b)) {
          for (b = 0, S = s.responseEnd, l += 1; l < o.length; l++) {
            var O = o[l], $ = O.startTime;
            if ($ > S) break;
            var P = O.transferSize, ae = O.initiatorType;
            P && xm(ae) && (O = O.responseEnd, b += P * (O < S ? 1 : (S - $) / (O - $)));
          }
          if (--l, t += 8 * (f + b) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var gd = null, pd = null;
  function Ul(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function _m(e, t, o, l) {
    return o = Ul(
      o
    ).createElement(e), o[ct] = l, o[_t] = t, xt(o, e, t), ot(o), o;
  }
  function md(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yd = null;
  function fS() {
    var e = window.event;
    return e && e.type === "popstate" ? e === yd ? !1 : (yd = e, !0) : (yd = null, !1);
  }
  var vd = typeof setTimeout == "function" ? setTimeout : void 0, dS = typeof clearTimeout == "function" ? clearTimeout : void 0, Em = typeof Promise == "function" ? Promise : void 0, Nm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : vd, hS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Em < "u" ? function(e) {
    return Em.resolve(null).then(e).catch(gS);
  } : vd;
  function gS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ji(e) {
    return e === "head";
  }
  function Tm(e, t) {
    var o = t, l = 0;
    do {
      var s = o.nextSibling;
      if (e.removeChild(o), s && s.nodeType === 8)
        if (o = s.data, o === "/$" || o === "/&") {
          if (l === 0) {
            e.removeChild(s), za(t);
            return;
          }
          l--;
        } else if (o === "$" || o === "$?" || o === "$~" || o === "$!" || o === "&")
          l++;
        else if (o === "html")
          Td(
            e.ownerDocument.documentElement
          );
        else if (o === "head") {
          o = e.ownerDocument.head, Td(o);
          for (var f = o.firstChild; f; ) {
            var b = f.nextSibling, S = f.nodeName;
            f[io] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && f.rel.toLowerCase() === "stylesheet" || o.removeChild(f), f = b;
          }
        } else
          o === "body" && Td(e.ownerDocument.body);
      o = s;
    } while (o);
    za(t);
  }
  function Cm(e, t) {
    var o = e;
    e = 0;
    do {
      var l = o.nextSibling;
      if (o.nodeType === 1 ? t ? (o._stashedDisplay = o.style.display, o.style.display = "none") : (o.style.display = o._stashedDisplay || "", o.getAttribute("style") === "" && o.removeAttribute("style")) : o.nodeType === 3 && (t ? (o._stashedText = o.nodeValue, o.nodeValue = "") : o.nodeValue = o._stashedText || ""), l && l.nodeType === 8)
        if (o = l.data, o === "/$") {
          if (e === 0) break;
          e--;
        } else
          o !== "$" && o !== "$?" && o !== "$~" && o !== "$!" || e++;
      o = l;
    } while (o);
  }
  function Am(e, t, o) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, o != null && (e.style.viewTransitionClass = o), o = getComputedStyle(e), o.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var l = 1;
      else
        for (var s = l = 0; s < t.length; s++) {
          var f = t[s];
          0 < f.width && 0 < f.height && l++;
        }
      l === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + o.paddingTop, e.marginBottom = "-" + o.paddingBottom);
    }
  }
  function Mm(e, t) {
    e = e.style, t = t.style;
    var o = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = o == null || typeof o == "boolean" ? "" : ("" + o).trim(), o = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = o == null || typeof o == "boolean" ? "" : ("" + o).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (o = t.display, e.display = o == null || typeof o == "boolean" ? "" : o, o = t.margin, o != null ? e.margin = o : (o = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = o == null || typeof o == "boolean" ? "" : o, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function pS(e, t, o) {
    return o = o.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= o.innerHeight && e.left <= o.innerWidth
    };
  }
  function bd(e) {
    var t = e.getBoundingClientRect(), o = getComputedStyle(e);
    return pS(t, o, e);
  }
  function mS(e) {
    return e.documentElement.clientHeight;
  }
  function yS(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function vS(e, t, o, l, s, f, b, S, O) {
    var $ = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var P = $.startViewTransition({
        update: function() {
          var q = $.defaultView, Q = q.navigation && q.navigation.transition, ge = $.fonts.status;
          l();
          var ve = [];
          if (ge === "loaded" && (mS($), $.fonts.status === "loading" && ve.push($.fonts.ready)), ge = ve.length, e !== null)
            for (var Te = e.suspenseyImages, Y = 0, B = 0; B < Te.length; B++) {
              var Z = Te[B];
              if (!Z.complete) {
                var oe = Z.getBoundingClientRect();
                if (0 < oe.bottom && 0 < oe.right && oe.top < q.innerHeight && oe.left < q.innerWidth) {
                  if (Y += Fm(Z), Y > Ks) {
                    ve.length = ge;
                    break;
                  }
                  Z = new Promise(
                    yS.bind(Z)
                  ), ve.push(Z);
                }
              }
            }
          if (0 < ve.length)
            return q = Promise.race([
              Promise.all(ve),
              new Promise(function(me) {
                return setTimeout(me, 500);
              })
            ]).then(s, s), (Q ? Promise.allSettled([Q.finished, q]) : q).then(f, f);
          if (s(), Q)
            return Q.finished.then(
              f,
              f
            );
          f();
        },
        types: o
      });
      $.__reactViewTransition = P;
      var ae = [];
      return P.ready.then(
        function() {
          for (var q = $.documentElement.getAnimations({
            subtree: !0
          }), Q = 0; Q < q.length; Q++) {
            var ge = q[Q], ve = ge.effect, Te = ve.pseudoElement;
            if (Te != null && Te.startsWith("::view-transition")) {
              ae.push(ge), ge = ve.getKeyframes();
              for (var Y = Te = void 0, B = !0, Z = 0; Z < ge.length; Z++) {
                var oe = ge[Z], me = oe.width;
                if (Te === void 0) Te = me;
                else if (Te !== me) {
                  B = !1;
                  break;
                }
                if (me = oe.height, Y === void 0) Y = me;
                else if (Y !== me) {
                  B = !1;
                  break;
                }
                delete oe.width, delete oe.height, oe.transform === "none" && delete oe.transform;
              }
              B && Te !== void 0 && Y !== void 0 && (ve.setKeyframes(ge), B = getComputedStyle(
                ve.target,
                ve.pseudoElement
              ), B.width !== Te || B.height !== Y) && (B = ge[0], B.width = Te, B.height = Y, B = ge[ge.length - 1], B.width = Te, B.height = Y, ve.setKeyframes(ge));
            }
          }
          b();
        },
        function(q) {
          $.__reactViewTransition === P && ($.__reactViewTransition = null);
          try {
            typeof q == "object" && q !== null && q.name === "InvalidStateError" && (q.message === "View transition was skipped because document visibility state is hidden." || q.message === "Skipping view transition because document visibility state has become hidden." || q.message === "Skipping view transition because viewport size changed." || q.message === "Transition was aborted because of invalid state") && (q = null), q !== null && O(q);
          } finally {
            l(), s(), b();
          }
        }
      ), P.finished.finally(function() {
        for (var q = 0; q < ae.length; q++)
          ae[q].cancel();
        $.__reactViewTransition === P && ($.__reactViewTransition = null), S();
      }), P;
    } catch {
      return l(), s(), b(), null;
    }
  }
  function No(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  No.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : R({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, No.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, o = e.getAnimations({ subtree: !0 }), l = [], s = 0; s < o.length; s++) {
      var f = o[s].effect;
      f !== null && f.target === e && f.pseudoElement === t && l.push(o[s]);
    }
    return l;
  }, No.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Om(e) {
    return {
      name: e,
      group: new No("group", e),
      imagePair: new No("image-pair", e),
      old: new No("old", e),
      new: new No("new", e)
    };
  }
  function Wt(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Wt.prototype.addEventListener = function(e, t, o) {
    var l = null, s = null;
    if (!(o != null && typeof o != "boolean" && (l = o.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var f = this._eventListeners;
      if (Rm(f, e, t, o) === -1) {
        var b = this, S = t;
        o != null && typeof o != "boolean" && o.once === !0 && (S = function(O) {
          b.removeEventListener(
            e,
            t,
            o
          ), typeof t == "function" ? t.call(this, O) : t.handleEvent(O);
        }), l !== null && (s = b.removeEventListener.bind(
          b,
          e,
          t,
          o
        ), l.addEventListener("abort", s, { once: !0 }), s = l.removeEventListener.bind(l, "abort", s)), l = Na(o), f.push({
          type: e,
          listener: t,
          optionsOrUseCapture: o,
          attachedListener: S,
          cleanup: s
        }), g(
          this._fragmentFiber.child,
          !1,
          bS,
          e,
          S,
          l
        );
      }
      this._eventListeners = f;
    }
  };
  function bS(e, t, o, l) {
    return N(e).addEventListener(
      t,
      o,
      l
    ), !1;
  }
  Wt.prototype.removeEventListener = function(e, t, o) {
    var l = this._eventListeners;
    if (l !== null && (t = Rm(
      l,
      e,
      t,
      o
    ), t !== -1)) {
      var s = l[t];
      o = s.attachedListener;
      var f = s.cleanup;
      s = Na(s.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        xS,
        e,
        o,
        s
      ), l.splice(t, 1), f !== null && f();
    }
  };
  function xS(e, t, o, l) {
    return N(e).removeEventListener(
      t,
      o,
      l
    ), !1;
  }
  function Na(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function zm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Rm(e, t, o, l) {
    if (e.length === 0) return -1;
    l = zm(l);
    for (var s = 0; s < e.length; s++) {
      var f = e[s];
      if (f.type === t && f.listener === o && zm(f.optionsOrUseCapture) === l)
        return s;
    }
    return -1;
  }
  Wt.prototype.dispatchEvent = function(e) {
    var t = v(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = N(t);
    var o = this._eventListeners;
    if (o !== null && 0 < o.length || !e.bubbles) {
      var l = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (o)
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          l.addEventListener(
            f.type,
            f.attachedListener,
            Na(f.optionsOrUseCapture)
          );
        }
      if (t.appendChild(l), e = l.dispatchEvent(e), o)
        for (s = 0; s < o.length; s++)
          f = o[s], l.removeEventListener(
            f.type,
            f.attachedListener,
            Na(f.optionsOrUseCapture)
          );
      return t.removeChild(l), e;
    }
    return t.dispatchEvent(e);
  }, Wt.prototype.focus = function(e) {
    g(
      this._fragmentFiber.child,
      !0,
      Dm,
      e,
      void 0,
      void 0
    );
  };
  function Dm(e, t) {
    return e.tag === 6 ? !1 : (e = N(e), RS(e, t));
  }
  Wt.prototype.focusLast = function(e) {
    var t = [];
    g(
      this._fragmentFiber.child,
      !0,
      xd,
      t,
      void 0,
      void 0
    );
    for (var o = t.length - 1; 0 <= o && !Dm(t[o], e); o--) ;
  };
  function xd(e, t) {
    return t.push(e), !1;
  }
  Wt.prototype.blur = function() {
    var e = v(
      this._fragmentFiber
    );
    e !== null && (e = N(e), e = Ul(e).activeElement, e !== null && g(
      this._fragmentFiber.child,
      !1,
      wS,
      e,
      void 0,
      void 0
    ));
  };
  function wS(e, t) {
    return e.tag === 6 ? !1 : (e = N(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Wt.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), g(
      this._fragmentFiber.child,
      !1,
      SS,
      e,
      void 0,
      void 0
    );
  };
  function SS(e, t) {
    return e.tag === 6 || (e = N(e), t.observe(e)), !1;
  }
  Wt.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), g(
        this._fragmentFiber.child,
        !1,
        _S,
        e,
        void 0,
        void 0
      );
      for (var o = t = 0; o < Sn.length; o++) {
        var l = Sn[o];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : Sn[t++] = l;
      }
      Sn.length = t;
    }
  };
  function _S(e, t) {
    return e.tag === 6 || (e = N(e), t.unobserve(e)), !1;
  }
  var Sn = [], wd = !1;
  function ES(e, t, o) {
    Sn.push({
      fragmentInstance: e,
      observer: t,
      instance: o
    }), wd || (wd = !0, DS(function() {
      wd = !1;
      var l = Sn;
      Sn = [];
      for (var s = 0; s < l.length; s++) {
        var f = l[s];
        f.observer.unobserve(f.instance);
      }
    }));
  }
  Wt.prototype.getClientRects = function() {
    var e = [];
    return g(
      this._fragmentFiber.child,
      !1,
      NS,
      e,
      void 0,
      void 0
    ), e;
  };
  function NS(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var o = e.ownerDocument.createRange();
      o.selectNodeContents(e), t.push.apply(t, o.getClientRects());
    } else
      e = N(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Wt.prototype.getRootNode = function(e) {
    var t = v(
      this._fragmentFiber
    );
    return t === null ? this : N(t).getRootNode(e);
  }, Wt.prototype.compareDocumentPosition = function(e) {
    var t = v(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var o = [];
    g(
      this._fragmentFiber.child,
      !1,
      xd,
      o,
      void 0,
      void 0
    );
    var l = N(t);
    if (o.length === 0) {
      if (o = l, x(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (o = t);
      }
      t = this._fragmentFiber;
      var s = l = o.compareDocumentPosition(e);
      return o === e ? s = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (o = w(t)[1], o === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (e = N(o).compareDocumentPosition(
        e
      ), s = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = N(o[0]), s = N(o[o.length - 1]);
    var f = x(this._fragmentFiber) ? t.parentElement : l;
    if (f == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = f.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, f = f.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var b = t.compareDocumentPosition(e), S = s.compareDocumentPosition(e), O = b & Node.DOCUMENT_POSITION_CONTAINED_BY || S & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return S = l && f && b & Node.DOCUMENT_POSITION_FOLLOWING && S & Node.DOCUMENT_POSITION_PRECEDING, t = l && t === e || f && s === e || O || S ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && t === e || !f && s === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : b, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || TS(
      t,
      this._fragmentFiber,
      o[0],
      o[o.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function TS(e, t, o, l, s) {
    var f = Fn(s);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (o = !!f)
        e: {
          for (; f !== null; ) {
            if (f.tag === 7 && (f === t || f.alternate === t)) {
              o = !0;
              break e;
            }
            f = f.return;
          }
          o = !1;
        }
      return o;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (f === null)
        return f = s.ownerDocument, s === f || s === f.documentElement || s === f.body;
      e: {
        for (f = t, t = v(t); f !== null; ) {
          if (!(f.tag !== 5 && f.tag !== 3 && f.tag !== 27 || f !== t && f.alternate !== t)) {
            f = !0;
            break e;
          }
          f = f.return;
        }
        f = !1;
      }
      return f;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!f) && !(t = f === o) && (t = D(
      o,
      f,
      H
    ), t === null ? t = !1 : (g(
      t,
      !0,
      T,
      f,
      o
    ), f = C, C = null, t = f !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!f) && !(t = f === l) && (t = D(
      l,
      f,
      H
    ), t === null ? t = !1 : (g(
      t,
      !0,
      E,
      f,
      l
    ), f = C, U = C = null, t = f !== null)), t) : !1;
  }
  function Hm(e, t) {
    var o = e.ownerDocument.createRange();
    o.selectNodeContents(e), e = o.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Wt.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(r(566));
    var t = [];
    g(
      this._fragmentFiber.child,
      !1,
      xd,
      t,
      void 0,
      void 0
    );
    var o = e !== !1;
    if (t.length === 0) {
      var l = w(
        this._fragmentFiber
      );
      if (l = o ? l[1] || l[0] || v(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = N(l), Hm(e, o);
        return;
      }
      if (l = N(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          o = "host" in l ? l.host : null, o !== null && o.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = o ? t.length - 1 : 0; l !== (o ? -1 : t.length); ) {
      var s = t[l];
      s.tag === 6 ? (s = N(s), Hm(s, o)) : N(s).scrollIntoView(e), l += o ? -1 : 1;
    }
  };
  function CS(e, t) {
    return e = N(e), km(e, t), !1;
  }
  function km(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Um(e, t) {
    var o = t._eventListeners;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var s = o[l];
        e.addEventListener(
          s.type,
          s.attachedListener,
          Na(s.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (o = t._observers, o !== null && o.forEach(function(f) {
      for (var b = 0, S = 0; S < Sn.length; S++) {
        var O = Sn[S];
        (O.fragmentInstance !== t || O.observer !== f || O.instance !== e) && (Sn[b++] = O);
      }
      Sn.length = b, f.observe(e);
    }), km(e, t));
  }
  function AS(e, t) {
    var o = t._eventListeners;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var s = o[l];
        e.removeEventListener(
          s.type,
          s.attachedListener,
          Na(s.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (o = t._observers, o !== null && o.forEach(function(f) {
      typeof f.rootMargin == "string" ? ES(
        t,
        f,
        e
      ) : f.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function Sd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var o = t;
      switch (t = t.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Sd(o), Go(o);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (o.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(o);
    }
  }
  function MS(e, t, o, l) {
    for (; e.nodeType === 1; ) {
      var s = o;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[io])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = hn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function OS(e, t, o) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !o || (e = hn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = hn(e.nextSibling), e === null)) return null;
    return e;
  }
  function _d(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ed(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function zS(e, t) {
    var o = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || o.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), o.removeEventListener("DOMContentLoaded", l);
      };
      o.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function hn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Nd = null;
  function Lm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "/$" || o === "/&") {
          if (t === 0)
            return hn(e.nextSibling);
          t--;
        } else
          o !== "$" && o !== "$!" && o !== "$?" && o !== "$~" && o !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function jm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?" || o === "$~" || o === "&") {
          if (t === 0) return e;
          t--;
        } else o !== "/$" && o !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function RS(e, t) {
    function o() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", o, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", o, !0);
    }
    return l;
  }
  function DS(e) {
    Nm(function() {
      Nm(function(t) {
        return e(t);
      });
    });
  }
  function Vm(e, t, o) {
    switch (t = Ul(o), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Im(e, t, o) {
    for (var l in o) {
      var s = o[l];
      o.hasOwnProperty(l) && s != null && Ye(e, t, l, null, sS, s);
    }
    o.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Dn && (e.onclick = null), Go(e);
  }
  function Td(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Go(e);
  }
  var gn = /* @__PURE__ */ new Map(), qm = /* @__PURE__ */ new Set();
  function Bl(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fi = fe.d;
  fe.d = {
    f: HS,
    r: kS,
    D: US,
    C: BS,
    L: LS,
    m: jS,
    X: IS,
    S: VS,
    M: qS
  };
  function HS() {
    var e = fi.f(), t = Vs();
    return e || t;
  }
  function kS(e) {
    var t = yi(e);
    t !== null && t.tag === 5 && t.type === "form" ? $p(t) : fi.r(e);
  }
  var Ta = typeof document > "u" ? null : document;
  function Ym(e, t, o) {
    var l = Ta;
    if (l && typeof t == "string" && t) {
      var s = ln(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof o == "string" && (s += '[crossorigin="' + o + '"]'), qm.has(s) || (qm.add(s), e = { rel: e, crossOrigin: o, href: t }, l.querySelector(s) === null && (t = l.createElement("link"), xt(t, "link", e), ot(t), l.head.appendChild(t)));
    }
  }
  function US(e) {
    fi.D(e), Ym("dns-prefetch", e, null);
  }
  function BS(e, t) {
    fi.C(e, t), Ym("preconnect", e, t);
  }
  function LS(e, t, o) {
    fi.L(e, t, o);
    var l = Ta;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + ln(t) + '"]';
      t === "image" && o && o.imageSrcSet ? (s += '[imagesrcset="' + ln(
        o.imageSrcSet
      ) + '"]', typeof o.imageSizes == "string" && (s += '[imagesizes="' + ln(
        o.imageSizes
      ) + '"]')) : s += '[href="' + ln(e) + '"]';
      var f = s;
      switch (t) {
        case "style":
          f = Ca(e);
          break;
        case "script":
          f = Aa(e);
      }
      if (!(gn.has(f) || (e = R(
        {
          rel: "preload",
          href: t === "image" && o && o.imageSrcSet ? void 0 : e,
          as: t
        },
        o
      ), gn.set(f, e), l.querySelector(s) !== null || t === "style" && l.querySelector(Ll(f)) || t === "script" && l.querySelector(jl(f))))) {
        var b = l.createElement("link");
        xt(b, "link", e), t === "style" && (b[Xo] = !0, b.onload = b.onerror = function() {
          el(b);
        }), ot(b), l.head.appendChild(b);
      }
    }
  }
  function jS(e, t) {
    fi.m(e, t);
    var o = Ta;
    if (o && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + ln(l) + '"][href="' + ln(e) + '"]', f = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Aa(e);
      }
      if (!gn.has(f) && (e = R({ rel: "modulepreload", href: e }, t), gn.set(f, e), o.querySelector(s) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(jl(f)))
              return;
        }
        l = o.createElement("link"), xt(l, "link", e), ot(l), o.head.appendChild(l);
      }
    }
  }
  function VS(e, t, o) {
    fi.S(e, t, o);
    var l = Ta;
    if (l && e) {
      var s = Jn(l).hoistableStyles, f = Ca(e);
      t = t || "default";
      var b = s.get(f);
      if (!b) {
        var S = { loading: 0, preload: null };
        if (b = l.querySelector(
          Ll(f)
        ))
          S.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            o
          ), (o = gn.get(f)) && Cd(e, o);
          var O = b = l.createElement("link");
          ot(O), xt(O, "link", e), O._p = new Promise(function($, P) {
            O.onload = $, O.onerror = P;
          }), O.addEventListener("load", function() {
            S.loading |= 1;
          }), O.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Zs(b, t, l);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: S
        }, s.set(f, b);
      }
    }
  }
  function IS(e, t) {
    fi.X(e, t);
    var o = Ta;
    if (o && e) {
      var l = Jn(o).hoistableScripts, s = Aa(e), f = l.get(s);
      f || (f = o.querySelector(jl(s)), f || (e = R({ src: e, async: !0 }, t), (t = gn.get(s)) && Ad(e, t), f = o.createElement("script"), ot(f), xt(f, "link", e), o.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(s, f));
    }
  }
  function qS(e, t) {
    fi.M(e, t);
    var o = Ta;
    if (o && e) {
      var l = Jn(o).hoistableScripts, s = Aa(e), f = l.get(s);
      f || (f = o.querySelector(jl(s)), f || (e = R({ src: e, async: !0, type: "module" }, t), (t = gn.get(s)) && Ad(e, t), f = o.createElement("script"), ot(f), xt(f, "link", e), o.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(s, f));
    }
  }
  function $m(e, t, o, l) {
    var s = (s = dt.current) ? Bl(s) : null;
    if (!s) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (o = Ca(o.href), t = Jn(
          s
        ).hoistableStyles, l = t.get(o), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(o, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          e = Ca(o.href);
          var f = Jn(
            s
          ).hoistableStyles, b = f.get(e);
          if (b || (s = s.ownerDocument || s, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, b), (f = s.querySelector(
            Ll(e)
          )) ? f._p || (b.instance = f, b.state.loading = 5) : (f = gn.get(e), f || (f = {
            rel: "preload",
            as: "style",
            href: o.href,
            crossOrigin: o.crossOrigin,
            integrity: o.integrity,
            media: o.media,
            hrefLang: o.hrefLang,
            referrerPolicy: o.referrerPolicy
          }, gn.set(e, f)), YS(
            s,
            e,
            f,
            b.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return b;
        }
        if (t && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = o.async, o = o.src, typeof o == "string" && t && typeof t != "function" && typeof t != "symbol" ? (o = Aa(o), t = Jn(
          s
        ).hoistableScripts, l = t.get(o), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(o, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Ca(e) {
    return 'href="' + ln(e) + '"';
  }
  function Ll(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xm(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function YS(e, t, o, l) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Xo] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[Xo] = !0, t.onload = t.onerror = el.bind(null, t), xt(t, "link", o), ot(t), e.head.appendChild(t);
    l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Aa(e) {
    return '[src="' + ln(e) + '"]';
  }
  function jl(e) {
    return "script[async]" + e;
  }
  function Gm(e, t, o) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + ln(o.href) + '"]'
          );
          if (l)
            return t.instance = l, ot(l), l;
          var s = R({}, o, {
            "data-href": o.href,
            "data-precedence": o.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ot(l), xt(l, "style", s), Zs(l, o.precedence, e), t.instance = l;
        case "stylesheet":
          s = Ca(o.href);
          var f = e.querySelector(
            Ll(s)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, ot(f), f;
          l = Xm(o), (s = gn.get(s)) && Cd(l, s), f = (e.ownerDocument || e).createElement("link"), ot(f);
          var b = f;
          return b._p = new Promise(function(S, O) {
            b.onload = S, b.onerror = O;
          }), xt(f, "link", l), t.state.loading |= 4, Zs(f, o.precedence, e), t.instance = f;
        case "script":
          return f = Aa(o.src), (s = e.querySelector(
            jl(f)
          )) ? (t.instance = s, ot(s), s) : (l = o, (s = gn.get(f)) && (l = R({}, o), Ad(l, s)), e = e.ownerDocument || e, s = e.createElement("script"), ot(s), xt(s, "link", l), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Zs(l, o.precedence, e));
    return t.instance;
  }
  function Zs(e, t, o) {
    for (var l = o.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = l.length ? l[l.length - 1] : null, f = s, b = 0; b < l.length; b++) {
      var S = l[b];
      if (S.dataset.precedence === t) f = S;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = o.nodeType === 9 ? o.head : o, t.insertBefore(e, t.firstChild));
  }
  function Cd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ad(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Qs = null;
  function Zm(e, t, o) {
    if (Qs === null) {
      var l = /* @__PURE__ */ new Map(), s = Qs = /* @__PURE__ */ new Map();
      s.set(o, l);
    } else
      s = Qs, l = s.get(o), l || (l = /* @__PURE__ */ new Map(), s.set(o, l));
    if (l.has(e)) return l;
    for (l.set(e, null), o = o.getElementsByTagName(e), s = 0; s < o.length; s++) {
      var f = o[s];
      if (!(f[io] || f[ct] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = f.getAttribute(t) || "";
        b = e + b;
        var S = l.get(b);
        S ? S.push(f) : l.set(b, [f]);
      }
    }
    return l;
  }
  function Md(e, t, o) {
    e = e.ownerDocument || e, e.head.insertBefore(
      o,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function $S(e, t, o) {
    if (o === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Qm(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Km(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Fm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Jm(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Fm(t), e.suspenseyImages.push(t)), e = ZS.bind(e), t.decode().then(e, e));
  }
  function XS(e, t, o, l) {
    if (o.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (o.state.loading & 4) === 0) {
      if (o.instance === null) {
        var s = Ca(l.href), f = t.querySelector(
          Ll(s)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Vl.bind(e), t.then(e, e)), o.state.loading |= 4, o.instance = f, ot(f);
          return;
        }
        f = t.ownerDocument || t, l = Xm(l), (s = gn.get(s)) && Cd(l, s), f = f.createElement("link"), ot(f);
        var b = f;
        b._p = new Promise(function(S, O) {
          b.onload = S, b.onerror = O;
        }), xt(f, "link", l), o.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(o, t), (t = o.state.preload) && (o.state.loading & 3) === 0 && (e.count++, o = Vl.bind(e), t.addEventListener("load", o), t.addEventListener("error", o));
    }
  }
  var Ks = 0;
  function GS(e, t) {
    return e.stylesheets && e.count === 0 && Js(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(o) {
      var l = setTimeout(function() {
        if (e.stylesheets && Js(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ks === 0 && (Ks = 62500 * cS());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Js(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > Ks ? 50 : 800) + t
      );
      return e.unsuspend = o, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(s);
      };
    } : null;
  }
  function Pm(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Js(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Vl() {
    this.count--, Pm(this);
  }
  function ZS() {
    this.imgCount--, Pm(this);
  }
  var Fs = null;
  function Js(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Fs = /* @__PURE__ */ new Map(), t.forEach(QS, e), Fs = null, Vl.call(e));
  }
  function QS(e, t) {
    if (!(t.state.loading & 4)) {
      var o = Fs.get(e);
      if (o) var l = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), Fs.set(e, o);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < s.length; f++) {
          var b = s[f];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (o.set(b.dataset.precedence, b), l = b);
        }
        l && o.set(null, l);
      }
      s = t.instance, b = s.getAttribute("data-precedence"), f = o.get(b) || l, f === l && o.set(null, s), o.set(b, s), this.count++, l = Vl.bind(this), s.addEventListener("load", l), s.addEventListener("error", l), f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ma = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: be,
    _currentValue2: be,
    _threadCount: 0
  };
  function KS(e, t, o, l, s, f, b, S, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pa(0), this.hiddenUpdates = Pa(null), this.identifierPrefix = l, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wm(e, t, o, l, s, f, b, S, O, $, P, ae) {
    return e = new KS(
      e,
      t,
      o,
      b,
      O,
      $,
      P,
      ae,
      S
    ), t = 1, f === !0 && (t |= 24), f = Ut(3, null, null, t), e.current = f, f.stateNode = e, t = Yc(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: o,
      cache: t
    }, Zc(f), e;
  }
  function ey(e) {
    return e ? (e = ta, e) : ta;
  }
  function ty(e, t, o, l, s, f) {
    s = ey(s), l.context === null ? l.context = s : l.pendingContext = s, l = Ci(t), l.payload = { element: o }, f = f === void 0 ? null : f, f !== null && (l.callback = f), o = Ai(e, l, t), o !== null && (Vt(o, e, t), yl(o, e, t));
  }
  function ny(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < t ? o : t;
    }
  }
  function Od(e, t) {
    ny(e, t), (e = e.alternate) && ny(e, t);
  }
  function iy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ro(e, 67108864);
      t !== null && Vt(t, e, 67108864), Od(e, 67108864);
    }
  }
  function oy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Pt();
      t = $o(t);
      var o = ro(e, t);
      o !== null && Vt(o, e, t), Od(e, t);
    }
  }
  var Oa = !0;
  function FS(e, t, o, l) {
    var s = ue.T;
    ue.T = null;
    var f = fe.p;
    try {
      fe.p = 2, zd(e, t, o, l);
    } finally {
      fe.p = f, ue.T = s;
    }
  }
  function JS(e, t, o, l) {
    var s = ue.T;
    ue.T = null;
    var f = fe.p;
    try {
      fe.p = 8, zd(e, t, o, l);
    } finally {
      fe.p = f, ue.T = s;
    }
  }
  function zd(e, t, o, l) {
    if (Oa) {
      var s = Rd(l);
      if (s === null)
        dd(
          e,
          t,
          l,
          Ps,
          o
        ), ly(e, l);
      else if (WS(
        s,
        e,
        t,
        o,
        l
      ))
        l.stopPropagation();
      else if (ly(e, l), t & 4 && -1 < PS.indexOf(e)) {
        for (; s !== null; ) {
          var f = yi(s);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var b = Kn(f.pendingLanes);
                  if (b !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; b; ) {
                      var O = 1 << 31 - At(b);
                      S.entanglements[1] |= O, b &= ~O;
                    }
                    Yn(f), (je & 6) === 0 && (Bs = Tt() + 500, Dl(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = ro(f, 2), S !== null && Vt(S, f, 2), Vs(), Od(f, 2);
            }
          if (f = Rd(l), f === null && dd(
            e,
            t,
            l,
            Ps,
            o
          ), f === s) break;
          s = f;
        }
        s !== null && l.stopPropagation();
      } else
        dd(
          e,
          t,
          l,
          null,
          o
        );
    }
  }
  function Rd(e) {
    return e = mc(e), Dd(e);
  }
  var Ps = null;
  function Dd(e) {
    if (Ps = null, e = Fn(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var o = t.tag;
        if (o === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (o === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (o === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ps = e, null;
  }
  function ay(e) {
    switch (e) {
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
      case "fullscreenerror":
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (tc()) {
          case Er:
            return 2;
          case Nr:
            return 8;
          case jo:
          case nc:
            return 32;
          case Tr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hd = !1, Vi = null, Ii = null, qi = null, Il = /* @__PURE__ */ new Map(), ql = /* @__PURE__ */ new Map(), Yi = [], PS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ly(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vi = null;
        break;
      case "dragenter":
      case "dragleave":
        Ii = null;
        break;
      case "mouseover":
      case "mouseout":
        qi = null;
        break;
      case "pointerover":
      case "pointerout":
        Il.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ql.delete(t.pointerId);
    }
  }
  function Yl(e, t, o, l, s, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: o,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [s]
    }, t !== null && (t = yi(t), t !== null && iy(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function WS(e, t, o, l, s) {
    switch (t) {
      case "focusin":
        return Vi = Yl(
          Vi,
          e,
          t,
          o,
          l,
          s
        ), !0;
      case "dragenter":
        return Ii = Yl(
          Ii,
          e,
          t,
          o,
          l,
          s
        ), !0;
      case "mouseover":
        return qi = Yl(
          qi,
          e,
          t,
          o,
          l,
          s
        ), !0;
      case "pointerover":
        var f = s.pointerId;
        return Il.set(
          f,
          Yl(
            Il.get(f) || null,
            e,
            t,
            o,
            l,
            s
          )
        ), !0;
      case "gotpointercapture":
        return f = s.pointerId, ql.set(
          f,
          Yl(
            ql.get(f) || null,
            e,
            t,
            o,
            l,
            s
          )
        ), !0;
    }
    return !1;
  }
  function ry(e) {
    var t = Fn(e.target);
    if (t !== null) {
      var o = c(t);
      if (o !== null) {
        if (t = o.tag, t === 13) {
          if (t = d(o), t !== null) {
            e.blockedOn = t, Rr(e.priority, function() {
              oy(o);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(o), t !== null) {
            e.blockedOn = t, Rr(e.priority, function() {
              oy(o);
            });
            return;
          }
        } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ws(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var o = Rd(e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var l = new o.constructor(
          o.type,
          o
        );
        pc = l, o.target.dispatchEvent(l), pc = null;
      } else
        return t = yi(o), t !== null && iy(t), e.blockedOn = o, !1;
      t.shift();
    }
    return !0;
  }
  function sy(e, t, o) {
    Ws(e) && o.delete(t);
  }
  function e_() {
    Hd = !1, Vi !== null && Ws(Vi) && (Vi = null), Ii !== null && Ws(Ii) && (Ii = null), qi !== null && Ws(qi) && (qi = null), Il.forEach(sy), ql.forEach(sy);
  }
  function eu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hd || (Hd = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      e_
    )));
  }
  var tu = null;
  function uy(e) {
    tu !== e && (tu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        tu === e && (tu = null);
        for (var t = 0; t < e.length; t += 3) {
          var o = e[t], l = e[t + 1], s = e[t + 2];
          if (typeof l != "function") {
            if (Dd(l || o) === null)
              continue;
            break;
          }
          var f = yi(o);
          f !== null && (e.splice(t, 3), t -= 3, pf(
            f,
            {
              pending: !0,
              data: s,
              method: o.method,
              action: l
            },
            l,
            s
          ));
        }
      }
    ));
  }
  function za(e) {
    function t(O) {
      return eu(O, e);
    }
    Vi !== null && eu(Vi, e), Ii !== null && eu(Ii, e), qi !== null && eu(qi, e), Il.forEach(t), ql.forEach(t);
    for (var o = 0; o < Yi.length; o++) {
      var l = Yi[o];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Yi.length && (o = Yi[0], o.blockedOn === null); )
      ry(o), o.blockedOn === null && Yi.shift();
    if (o = (e.ownerDocument || e).$$reactFormReplay, o != null)
      for (l = 0; l < o.length; l += 3) {
        var s = o[l], f = o[l + 1], b = s[_t] || null;
        if (typeof f == "function")
          b || uy(o);
        else if (b) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (s = f, b = f[_t] || null)
              S = b.formAction;
            else if (Dd(s) !== null) continue;
          } else S = b.action;
          typeof S == "function" ? o[l + 1] = S : (o.splice(l, 3), l -= 3), uy(o);
        }
      }
  }
  function cy() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(b) {
            return s = b;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), l || setTimeout(o, 20);
    }
    function o() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(o, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function kd(e) {
    this._internalRoot = e;
  }
  nu.prototype.render = kd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var o = t.current, l = Pt();
    ty(o, l, e, t, null, null);
  }, nu.prototype.unmount = kd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ty(e.current, 2, null, e, null, null), Vs(), t[mi] = null;
    }
  };
  function nu(e) {
    this._internalRoot = e;
  }
  nu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = zr();
      e = { blockedOn: null, target: e, priority: t };
      for (var o = 0; o < Yi.length && t !== 0 && t < Yi[o].priority; o++) ;
      Yi.splice(o, 0, e), o === 0 && ry(e);
    }
  };
  var fy = i.version;
  if (fy !== "19.3.0")
    throw Error(
      r(
        527,
        fy,
        "19.3.0"
      )
    );
  fe.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = m(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var t_ = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ue,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!iu.isDisabled && iu.supportsFiber)
      try {
        eo = iu.inject(
          t_
        ), Ct = iu;
      } catch {
      }
  }
  return Xl.createRoot = function(e, t) {
    if (!u(e)) throw Error(r(299));
    var o = !1, l = "", s = e0, f = t0, b = n0;
    return t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (b = t.onRecoverableError)), t = Wm(
      e,
      1,
      !1,
      null,
      null,
      o,
      l,
      null,
      s,
      f,
      b,
      cy
    ), e[mi] = t.current, fd(e), new kd(t);
  }, Xl.hydrateRoot = function(e, t, o) {
    if (!u(e)) throw Error(r(299));
    var l = !1, s = "", f = e0, b = t0, S = n0, O = null;
    return o != null && (o.unstable_strictMode === !0 && (l = !0), o.identifierPrefix !== void 0 && (s = o.identifierPrefix), o.onUncaughtError !== void 0 && (f = o.onUncaughtError), o.onCaughtError !== void 0 && (b = o.onCaughtError), o.onRecoverableError !== void 0 && (S = o.onRecoverableError), o.formState !== void 0 && (O = o.formState)), t = Wm(
      e,
      1,
      !0,
      t,
      o ?? null,
      l,
      s,
      O,
      f,
      b,
      S,
      cy
    ), t.context = ey(null), o = t.current, l = Pt(), l = $o(l), s = Ci(l), s.callback = null, Ai(o, s, l), o = l, t.current.lanes = o, no(t, o), Yn(t), e[mi] = t.current, fd(e), new nu(t);
  }, Xl.version = "19.3.0", Xl;
}
var wy;
function c_() {
  if (wy) return Ld.exports;
  wy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Ld.exports = u_(), Ld.exports;
}
var f_ = c_();
const zO = [
  "Action",
  "Condition",
  "Control",
  "Decorator",
  "SubTree"
], d_ = [
  { name: "_skipIf", help: "Skip the node (status SKIPPED) if this script is true" },
  { name: "_failureIf", help: "Return FAILURE without ticking if this script is true" },
  { name: "_successIf", help: "Return SUCCESS without ticking if this script is true" },
  { name: "_while", help: "Tick only while this script is true; halt and skip otherwise" },
  { name: "_onSuccess", help: "Script executed when the node returns SUCCESS" },
  { name: "_onFailure", help: "Script executed when the node returns FAILURE" },
  { name: "_onHalted", help: "Script executed when the node is halted" },
  { name: "_post", help: "Script executed when the node returns SUCCESS or FAILURE" }
], h_ = /* @__PURE__ */ new Set([
  "name",
  "ID",
  "_autoremap",
  "_description",
  "_uid",
  "_fullpath",
  ...d_.map((n) => n.name)
]);
function tb(n) {
  return /^\{[^{}]+\}$/.test(n.trim());
}
function nb(n, i) {
  const a = i.trim();
  return /^-?\d+$/.test(a) ? n.values.find((r) => r.value === Number(a)) : n.values.find((r) => r.name === a);
}
function g_(n, i) {
  return nb(n, i) ? !0 : /^-?\d+$/.test(i.trim()) && n.values.every((a) => a.value === void 0);
}
function p_(n) {
  switch (n) {
    case "Control":
      return [1, 1 / 0];
    case "Decorator":
      return [1, 1];
    case "Action":
    case "Condition":
    case "SubTree":
      return [0, 0];
    default:
      return [0, 1 / 0];
  }
}
function La(n, i, a = null) {
  if (n) {
    i(n, a);
    for (const r of n.children) La(r, i, n);
  }
}
function RO(n, i) {
  let a = null;
  return La(n, (r) => {
    r.uid === i && (a = r);
  }), a;
}
function DO(n, i) {
  let a = null;
  return La(n, (r, u) => {
    r.uid === i && (a = u);
  }), a;
}
function HO(n) {
  return n.type === "SubTree" ? n.attrs.name || n.attrs.ID || "SubTree" : n.attrs.name || n.type;
}
function Oh(n, i) {
  return n ? `${n}/${i}` : i;
}
function Sy(n, i, a) {
  const r = /* @__PURE__ */ new Map();
  for (const m of i) {
    const y = r.get(m.parent) ?? [];
    y.push(m), r.set(m.parent, y);
  }
  const u = { byRuntimeUid: /* @__PURE__ */ new Map(), mismatches: [], unmatched: 0 }, c = (m) => {
    u.unmatched++;
    for (const y of r.get(m.uid) ?? []) c(y);
  }, d = a.get(n), h = r.get(null) ?? [];
  if (!d)
    return u.mismatches.push(`The robot runs tree "${n}", which is not in this project`), h.forEach(c), u;
  if (h.length !== 1 || !d.root)
    return u.mismatches.push(`Tree "${n}" has ${d.root ? 1 : 0} root node(s) here and ${h.length} on the robot`), h.forEach(c), u;
  const p = (m, y, g, v, x) => {
    if (m.type !== y.type) {
      u.mismatches.push(`${g.id}: expected ${y.type} "${y.attrs.name ?? y.type}" but the robot has ${m.type} "${m.name}"`), c(m);
      return;
    }
    const w = Oh(v, y.uid);
    u.byRuntimeUid.set(m.uid, { path: w, treeId: g.id, nodeUid: y.uid });
    const _ = r.get(m.uid) ?? [];
    if (y.type === "SubTree") {
      const C = a.get(y.attrs.ID ?? "");
      if (x > 64) return;
      if (!C || !C.root) {
        u.mismatches.push(`${g.id}: SubTree "${y.attrs.ID}" is not defined here`), _.forEach(c);
        return;
      }
      if (_.length !== 1) {
        u.mismatches.push(`${g.id}: SubTree "${y.attrs.ID}" has ${_.length} children on the robot`), _.forEach(c);
        return;
      }
      p(_[0], C.root, C, w, x + 1);
      return;
    }
    const N = Math.min(_.length, y.children.length);
    for (let C = 0; C < N; C++) p(_[C], y.children[C], g, v, x);
    _.length !== y.children.length && (u.mismatches.push(
      `${g.id}: ${y.type} "${y.attrs.name ?? y.type}" has ${y.children.length} children here and ${_.length} on the robot`
    ), _.slice(N).forEach(c));
  };
  return p(h[0], d.root, d, "", 0), u;
}
const et = (n, i, a, r) => ({
  name: n,
  direction: "input",
  type: i,
  description: a,
  ...r !== void 0 ? { default: r } : {}
}), m_ = (n, i, a) => ({
  name: n,
  direction: "output",
  type: i,
  description: a
}), ib = (n, i, a) => ({
  name: n,
  direction: "inout",
  type: i,
  description: a
});
function Ue(n, i, a, r = []) {
  return { id: n, category: i, description: a, ports: r, source: "builtin" };
}
function Gl(n) {
  const i = [et("variable", "std::string", "Value compared against each case")];
  for (let a = 1; a <= n; a++) i.push(et(`case_${a}`, "std::string", `Value that selects child ${a}`));
  return Ue(
    `Switch${n}`,
    "Control",
    `Ticks the child whose case_N equals 'variable'; the last (${n + 1}th) child is the default.`,
    i
  );
}
function ou(n, i) {
  return Ue(`Loop${n}`, "Decorator", "Pops values from a queue into 'value' and ticks the child once per value.", [
    ib("queue", "BT::AnyTypeAllowed", "Queue of values to iterate, or a ';'-separated list"),
    et("if_empty", "BT::NodeStatus", "Status to return if queue is empty: SUCCESS, FAILURE, SKIPPED", "SUCCESS"),
    m_("value", i, "Current value")
  ]);
}
const y_ = [
  // Controls
  Ue("Sequence", "Control", "Ticks children in order until one fails. Restarts from the first child after a failure."),
  Ue("SequenceWithMemory", "Control", "Like Sequence, but a RUNNING/FAILED child is resumed instead of restarting from the first."),
  Ue("ReactiveSequence", "Control", "Re-ticks all previous children every tick; a child that turns FAILURE halts the running one."),
  Ue("AsyncSequence", "Control", "Sequence that returns RUNNING between children, yielding to the tree after each one."),
  Ue("Fallback", "Control", "Ticks children in order until one succeeds."),
  Ue("ReactiveFallback", "Control", "Re-ticks all previous children every tick; a child that turns SUCCESS halts the running one."),
  Ue("AsyncFallback", "Control", "Fallback that returns RUNNING between children."),
  Ue("Parallel", "Control", "Ticks all children concurrently.", [
    et("success_count", "int", "Successes needed to return SUCCESS (-1 = all)", "-1"),
    et("failure_count", "int", "Failures needed to return FAILURE (-1 = all)", "1")
  ]),
  Ue("ParallelAll", "Control", "Ticks all children until all complete.", [
    et("max_failures", "int", "Failures above which the node returns FAILURE (-1 = all)", "1")
  ]),
  Ue("IfThenElse", "Control", "Child 1 is the condition; ticks child 2 on SUCCESS, child 3 (if present) on FAILURE."),
  Ue("WhileDoElse", "Control", "Reactive IfThenElse: the condition is re-evaluated every tick."),
  Ue("TryCatch", "Control", "Ticks the first N-1 children as a Sequence; if one fails, ticks the last child (catch) and returns FAILURE.", [
    et("catch_on_halt", "bool", "If true, execute the catch child when the node is halted during the try-block", "false")
  ]),
  Gl(2),
  Gl(3),
  Gl(4),
  Gl(5),
  Gl(6),
  // Decorators
  Ue("Inverter", "Decorator", "Swaps SUCCESS and FAILURE."),
  Ue("ForceSuccess", "Decorator", "Returns SUCCESS when the child completes."),
  Ue("ForceFailure", "Decorator", "Returns FAILURE when the child completes."),
  Ue("KeepRunningUntilFailure", "Decorator", "Returns RUNNING while the child succeeds, FAILURE when it fails."),
  Ue("Repeat", "Decorator", "Ticks the child until it has succeeded N times; FAILURE if it fails.", [
    et("num_cycles", "int", "Repetitions (-1 = forever)")
  ]),
  Ue("RetryUntilSuccessful", "Decorator", "Ticks the child until it succeeds, up to N attempts.", [
    et("num_attempts", "int", "Attempts (-1 = forever)")
  ]),
  Ue("Timeout", "Decorator", "Halts the child and returns FAILURE if it runs longer than msec.", [
    et("msec", "unsigned", "Timeout in milliseconds")
  ]),
  Ue("Delay", "Decorator", "Waits delay_msec before ticking the child.", [
    et("delay_msec", "unsigned", "Delay in milliseconds")
  ]),
  Ue("RunOnce", "Decorator", "Ticks the child once; later ticks return its first result or SKIPPED.", [
    et("then_skip", "bool", "If true, return SKIPPED after the first run instead of the cached status", "true")
  ]),
  Ue("Precondition", "Decorator", "Ticks the child only if the script 'if' is true; otherwise returns 'else'.", [
    et("if", "std::string", "Condition script"),
    et("else", "BT::NodeStatus", "Status returned when the condition is false", "FAILURE")
  ]),
  Ue("SkipUnlessUpdated", "Decorator", "Skips the child unless the blackboard entry changed since the last tick.", [
    et("entry", "BT::Any", "Blackboard entry to check, e.g. {my_key}")
  ]),
  Ue("WaitValueUpdate", "Decorator", "Returns RUNNING until the blackboard entry changes, then ticks the child.", [
    et("entry", "BT::Any", "Blackboard entry to watch, e.g. {my_key}")
  ]),
  ou("Int", "int"),
  ou("Double", "double"),
  ou("String", "std::string"),
  ou("Bool", "bool"),
  // Actions
  Ue("AlwaysSuccess", "Action", "Returns SUCCESS."),
  Ue("AlwaysFailure", "Action", "Returns FAILURE."),
  Ue("Script", "Action", "Executes a script, e.g. counter += 1; target := 'home'", [
    et("code", "std::string", "Script to execute")
  ]),
  Ue("SetBlackboard", "Action", "Copies 'value' into the blackboard entry 'output_key'.", [
    et("value", "BT::AnyTypeAllowed", "Value to write (literal or {other_key})"),
    ib("output_key", "BT::AnyTypeAllowed", "Destination entry name")
  ]),
  Ue("UnsetBlackboard", "Action", "Removes an entry from the blackboard.", [et("key", "std::string", "Entry to remove")]),
  Ue("WasEntryUpdated", "Action", "SUCCESS if the blackboard entry changed since the last tick, else FAILURE.", [
    et("entry", "BT::Any", "Blackboard entry to check, e.g. {my_key}")
  ]),
  Ue("Sleep", "Action", "Returns RUNNING for msec milliseconds, then SUCCESS.", [
    et("msec", "unsigned", "Sleep duration in milliseconds")
  ]),
  // Conditions
  Ue("ScriptCondition", "Condition", "SUCCESS if the script evaluates to true, else FAILURE.", [
    et("code", "std::string", "Boolean script, e.g. battery > 20")
  ])
], _y = {
  id: "SubTree",
  category: "SubTree",
  description: "Instantiates another tree of the project.",
  ports: [],
  source: "builtin"
};
function _u(n, i) {
  const a = /* @__PURE__ */ new Map();
  for (const r of y_) a.set(r.id, r);
  a.set(_y.id, _y);
  for (const r of n)
    r.category !== "SubTree" && a.set(r.id, r);
  for (const r of i)
    a.set(ob(r.id), {
      id: r.id,
      category: "SubTree",
      ports: r.ports,
      description: r.description,
      source: "tree"
    });
  return a;
}
function ob(n) {
  return `SubTree:${n}`;
}
function ju(n, i) {
  return n.type === "SubTree" ? i.get(ob(n.attrs.ID ?? "")) ?? i.get("SubTree") : i.get(n.type);
}
const v_ = {
  IfThenElse: [2, 3],
  WhileDoElse: [2, 3],
  TryCatch: [2, 1 / 0],
  Switch2: [3, 3],
  Switch3: [4, 4],
  Switch4: [5, 5],
  Switch5: [6, 6],
  Switch6: [7, 7]
};
function kO(n, i) {
  return v_[n.type] ?? p_(ju(n, i)?.category);
}
function Ki(n) {
  if (n === void 0 || n === "") return "?";
  const i = /^\{([^{}]+)\}$/.exec(n.trim());
  return i ? i[1] : n;
}
function Ey(n) {
  const i = Number(n);
  return n === void 0 || Number.isNaN(i) ? null : i < 0 ? "forever" : i === 1 ? "once" : `${i} times`;
}
function Ny(n) {
  const i = Number(n);
  return n === void 0 || Number.isNaN(i) ? Ki(n) : i >= 6e4 ? `${+(i / 6e4).toFixed(1)} min` : i >= 1e3 ? `${+(i / 1e3).toFixed(1)} s` : `${i} ms`;
}
function zh(n) {
  const i = n.attrs;
  switch (n.type) {
    case "Inverter":
      return { label: "flip the answer", help: "If the step below works, this says it failed, and the other way around." };
    case "ForceSuccess":
      return { label: "always say it worked", help: "Whatever happens below, this reports success." };
    case "ForceFailure":
      return { label: "always say it failed", help: "Whatever happens below, this reports failure." };
    case "RetryUntilSuccessful": {
      const a = Ey(i.num_attempts);
      return {
        label: a === "forever" ? "keep trying" : `try up to ${a ?? Ki(i.num_attempts) + " times"}`,
        help: "If the step below fails, try it again, until it works or there are no tries left."
      };
    }
    case "Repeat": {
      const a = Ey(i.num_cycles);
      return { label: a === "forever" ? "repeat forever" : `do it ${a ?? Ki(i.num_cycles) + " times"}`, help: "Do the step below again and again. Stop if it fails." };
    }
    case "KeepRunningUntilFailure":
      return { label: "repeat until it fails", help: "Keep doing the step below for as long as it works." };
    case "Timeout":
      return { label: `stop after ${Ny(i.msec)}`, help: "If the step below takes too long, stop it and count it as failed." };
    case "Delay":
      return { label: `wait ${Ny(i.delay_msec)} first`, help: "Wait a little before starting the step below." };
    case "RunOnce":
      return { label: "only the first time", help: "Do the step below once. After that, skip it." };
    case "Precondition":
      return { label: `only if ${i.if || "?"}`, help: "Only do the step below when this is true." };
    case "SkipUnlessUpdated":
      return { label: `only when ${Ki(i.entry)} changes`, help: "Skip the step below unless this value has changed." };
    case "WaitValueUpdate":
      return { label: `wait for ${Ki(i.entry)} to change`, help: "Wait until this value changes, then do the step below." };
    case "SubTree":
      return { label: "runs this tree", help: `Everything below is the tree "${i.ID}", used here like one step.` };
    default:
      return n.type.startsWith("Loop") ? { label: `for each in ${Ki(i.queue)}`, help: "Do the step below once for every item in the list." } : null;
  }
}
function b_(n, i) {
  const a = n.type, r = n.children.length;
  if (a === "IfThenElse")
    return i === 1 ? { label: "if yes", help: "Done when the question in the box above is true." } : { label: "if no", help: "Done when the question in the box above is false." };
  if (a === "WhileDoElse")
    return i === 1 ? { label: "while yes", help: "Keeps going while the question in the box above stays true." } : { label: "if no", help: "Done when the question in the box above is false." };
  if (/Sequence/.test(a)) {
    const u = a === "ReactiveSequence" ? "Do the steps in order. Earlier steps are checked again every time, and if one fails, everything stops." : a === "SequenceWithMemory" ? "Do the steps in order. If a step fails, stop, and next time start again from that step." : "Do the steps in order, one after another. If a step fails, stop.";
    return { label: `step ${i + 1}`, help: u };
  }
  return /Fallback/.test(a) ? { label: i === 0 ? "try this first" : "if not, try", help: a === "ReactiveFallback" ? "Try each option in order until one works. Earlier options are tried again every time." : "Try each option in order until one works." } : a.startsWith("Parallel") ? { label: "at the same time", help: "All of these happen together." } : /^Switch\d$/.test(a) ? i === r - 1 ? { label: "otherwise", help: "Done when none of the other choices match." } : {
    label: `if ${Ki(n.attrs.variable)} is ${Ki(n.attrs[`case_${i + 1}`])}`,
    help: "Pick the branch whose value matches."
  } : a === "TryCatch" ? i === r - 1 && r > 1 ? { label: "if it goes wrong", help: "Done when one of the steps before it fails." } : { label: `step ${i + 1}`, help: "Do the steps in order. If one fails, do the last one instead." } : zh(n);
}
const x_ = 4, qd = 28, Ty = 56, w_ = {
  IfThenElse: ["if", "then", "else"],
  WhileDoElse: ["while", "do", "else"]
}, mu = { Precondition: "if" };
function Rh(n) {
  const i = mu[n.type];
  return Object.entries(n.attrs).filter(([a]) => !h_.has(a) && a !== i).map(([a, r]) => ({ key: a, value: r }));
}
function S_(n) {
  return Rh(n).map((i) => i.value).join(", ");
}
function rh(n, i, a) {
  const r = Oh(i, n.uid);
  if (a.push(r), n.type === "Inverter" && n.children.length === 1)
    return { kind: "not", path: r, node: n, child: rh(n.children[0], i, a) };
  if (n.type === "ScriptCondition")
    return { kind: "leaf", path: r, node: n, label: n.attrs.code ?? "", args: "", script: !0 };
  if (n.children.length === 0) {
    const c = n.type === "SubTree" ? n.attrs.ID ?? "SubTree" : n.attrs.name || n.type;
    return { kind: "leaf", path: r, node: n, label: c, args: S_(n) };
  }
  const u = /Sequence/.test(n.type) ? "∧" : /Fallback/.test(n.type) ? "∨" : null;
  return { kind: "group", path: r, node: n, op: u, children: n.children.map((c) => rh(c, i, a)) };
}
function Eu(n, i = !1) {
  switch (n.kind) {
    case "script":
      return n.text;
    case "leaf":
      return n.args ? `${n.label}(${n.args})` : n.label;
    case "not":
      return `¬${Eu(n.child, !0)}`;
    case "group": {
      const a = n.children.map((r) => Eu(r, !0)).join(n.op ? ` ${n.op} ` : ", ");
      return n.op ? i && n.children.length > 1 ? `(${a})` : a : `${n.node.type}(${a})`;
    }
  }
}
const Cy = 30;
function __(n, i, a, r, u) {
  const c = n.type === "SubTree" ? n.attrs.ID ?? "SubTree" : n.type, d = n.attrs.name && n.attrs.name !== c ? n.attrs.name : "";
  let h = Math.max(c.length * 1.15 + 4, d.length);
  for (const g of i.slice(0, a)) h = Math.max(h, (g.key.length + g.value.length + 2 + (g.old === void 0 ? 0 : g.old.length + 3)) * 0.95);
  let p = 0;
  if (u) {
    const g = `${u.keyword} ${Eu(u.part)}`;
    h = Math.max(h, Math.min(g.length, Cy + 4)), p = 12 + Math.max(1, Math.ceil(g.length / Cy)) * 21;
  }
  const m = Math.round(Math.min(300, Math.max(150, h * 7.4 + 34))), y = 40 + (d ? 16 : 0) + p + (a ? a * 17 + 8 : 0) + (r ? 15 : 0);
  return { w: m, h: y };
}
const E_ = "@window", N_ = 34, Yd = 6, au = 10, T_ = 10, C_ = 18, A_ = 70;
function M_(n, i, a) {
  if (!n.root) return [];
  const { isExpanded: r, dir: u } = a, c = Ty + (a.explain && u === "LR" ? A_ : 0), d = [], h = (E, H) => u === "TB" ? E : H, p = (E, H) => u === "TB" ? H : E, m = (E, H, D, R, V) => {
    u === "TB" ? Object.assign(E, { x: H, y: D, w: R, h: V }) : Object.assign(E, { x: D, y: H, w: V, h: R });
  }, y = (E) => u === "TB" ? E.x : E.y, g = (E) => u === "TB" ? E.y : E.x, v = /* @__PURE__ */ new Map(), x = (E, H, D, R, V, G, le, te, ne, ie) => {
    const M = Oh(D, E.uid), j = a.linesFor?.(E, H.id) ?? Rh(E), z = Math.min(j.length, x_), L = [], I = w_[E.type];
    let X, ee = E.children;
    I && E.children.length > 0 ? (X = { keyword: I[0], part: rh(E.children[0], D, L) }, ee = E.children.slice(1)) : mu[E.type] && (X = { keyword: mu[E.type], part: { kind: "script", text: E.attrs[mu[E.type]] ?? "" } });
    const K = E.children.length === 1 && !!a.frameDecorator?.(E), se = K && a.explain && !X ? zh(E)?.label : void 0, pe = __(E, j, z, j.length > z, X), A = se ? Math.max(pe.w, Math.min(300, se.length * 7 + 40)) : pe.w, J = pe.h + (I && !X ? 33 : 0) + (se ? C_ : 0), de = {
      path: M,
      node: E,
      treeId: H.id,
      readOnly: G,
      parentPath: R,
      depth: V,
      x: 0,
      y: 0,
      w: A,
      h: J,
      lines: j.slice(0, z),
      hiddenLines: j.length - z,
      condition: X,
      foldedPaths: L,
      childIndex: ie,
      hint: se
    };
    if (d.push(de), K) {
      de.frame = { headerW: A, headerH: J, level: ne };
      const ce = x(E.children[0], H, D, M, V, G, le, te + p(A, J) + Yd, ne + 1, 0);
      return { item: de, kids: [], inner: ce, span: Math.max(ce.span + 2 * au, h(A, J)) };
    }
    v.set(de, te);
    let re = [];
    if (E.type === "SubTree") {
      const ce = i[E.attrs.ID ?? ""];
      if (de.expanded = r(M), de.expanded && ce?.root && !le.includes(ce.id)) {
        const he = `${ce.id} · from ${ce.file.split("/").pop()}`, ue = Math.round(Math.min(320, Math.max(220, he.length * 7.2 + 130))), fe = u === "TB" ? N_ : 74, be = {
          path: M + E_,
          node: E,
          treeId: H.id,
          readOnly: !0,
          parentPath: M,
          depth: V + 1,
          x: 0,
          y: 0,
          w: ue,
          h: fe,
          lines: [],
          hiddenLines: 0,
          foldedPaths: [],
          childIndex: 0,
          frame: { headerW: ue, headerH: fe, level: ne },
          window: { treeId: ce.id, file: ce.file }
        };
        d.push(be);
        const _e = x(ce.root, ce, M, be.path, V + 1, !0, [...le, ce.id], p(ue, fe) + Yd, ne + 1, 0);
        re = [{ item: be, kids: [], inner: _e, span: Math.max(_e.span + 2 * au, h(ue, fe)) }];
      }
    } else {
      const ce = E.children.length - ee.length;
      re = ee.map((he, ue) => x(he, H, D, M, V + 1, G, le, 0, ne, ue + ce)), I && X && re.forEach((he, ue) => he.item.edgeLabel = I[ue + 1]);
    }
    const W = re.reduce((ce, he) => ce + he.span, 0) + qd * Math.max(0, re.length - 1);
    return { item: de, kids: re, span: Math.max(h(A, J), W) };
  }, w = x(n.root, n, "", null, 0, !1, [n.id], 0, 0, 0), _ = [], N = [];
  for (const [E, H] of v) _[E.depth] = Math.max(_[E.depth] ?? 0, H);
  for (const [E] of v) N[E.depth] = Math.max(N[E.depth] ?? 0, _[E.depth] + p(E.w, E.h));
  const C = [0];
  for (let E = 1; E < N.length; E++) C[E] = C[E - 1] + N[E - 1] + c;
  const U = (E, H) => {
    if (E.inner) {
      U(E.inner, H + (E.span - E.inner.span) / 2);
      return;
    }
    const D = E.kids.reduce((G, le) => G + le.span, 0) + qd * Math.max(0, E.kids.length - 1);
    let R = H + (E.span - D) / 2;
    for (const G of E.kids)
      U(G, R), R += G.span + qd;
    const V = h(E.item.w, E.item.h);
    m(E.item, H + E.span / 2 - V / 2, C[E.item.depth] + _[E.item.depth], V, p(E.item.w, E.item.h));
  };
  U(w, 0);
  const T = (E, H) => {
    if (E.item.parentPath !== null && (E.item.edgeBus = C[E.item.depth] - (u === "LR" ? c - Ty / 2 : c / 2)), E.inner) {
      const R = T(E.inner, !1), { headerW: V, headerH: G } = E.item.frame, le = H ? C[E.item.depth] : g(E.inner.item) - Yd - p(V, G);
      let te = R.b0 - au, ne = R.b1 + au;
      const ie = h(V, G);
      if (ne - te < ie) {
        const j = (te + ne) / 2;
        te = j - ie / 2, ne = j + ie / 2;
      }
      const M = R.d1 + T_;
      return m(E.item, te, le, ne - te, M - le), { b0: te, b1: ne, d1: M };
    }
    const D = { b0: y(E.item), b1: y(E.item) + h(E.item.w, E.item.h), d1: g(E.item) + p(E.item.w, E.item.h) };
    for (const R of E.kids) {
      const V = T(R, !0);
      D.b0 = Math.min(D.b0, V.b0), D.b1 = Math.max(D.b1, V.b1), D.d1 = Math.max(D.d1, V.d1);
    }
    return D;
  };
  return T(w, !0), d;
}
function O_(n, i) {
  return ju(n, i)?.category ?? "Unknown";
}
function Pi(n) {
  return n.new?.id ?? n.old.id;
}
function z_(n) {
  const { nodes: i } = n, a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  La(n.old?.root ?? null, (v, x) => {
    r.set(v.uid, v), u.set(v.uid, x);
  }), La(n.new?.root ?? null, (v, x) => c.set(v.uid, x));
  const d = (v, x) => {
    const w = c.get(x) ?? null;
    let _ = w;
    for (; _ && i.added.has(_.uid); ) _ = c.get(_.uid) ?? null;
    let N = u.get(v) ?? null;
    for (; N && i.removed.has(N.uid); ) N = u.get(N.uid) ?? null;
    if (_ && N ? i.oldToNew.get(N.uid) === _.uid : !_ && !N)
      return w && i.added.has(w.uid) ? "wrapped" : "unwrapped";
  }, h = (v) => {
    const x = `O${v.uid}`;
    return a.set(x, { kind: "removed", edited: !1, reordered: !1, oldNode: v }), { uid: x, type: v.type, attrs: v.attrs, children: v.children.flatMap(m) };
  }, p = (v, x) => {
    const w = `M${v.uid}`;
    return a.set(w, { kind: "moved-away", edited: !1, reordered: !1, oldNode: v, partner: `N${x}` }), { uid: w, type: v.type, attrs: v.attrs, children: [] };
  }, m = (v) => {
    if (i.removed.has(v.uid)) return [h(v)];
    const x = i.oldToNew.get(v.uid);
    return d(v.uid, x) ? [] : [p(v, x)];
  }, y = (v) => {
    const x = `N${v.uid}`, w = r.get(i.newToOld.get(v.uid) ?? "");
    if (!w)
      return a.set(x, { kind: "added", edited: !1, reordered: !1, newNode: v }), { uid: x, type: v.type, attrs: v.attrs, children: v.children.map(y) };
    const _ = i.matched.get(v.uid), N = !!_.type || Object.keys(_.attrs).length > 0, C = _.moved ? d(w.uid, v.uid) : void 0, U = _.moved && !C || _.reordered;
    a.set(x, { kind: U ? "moved" : N ? "changed" : "same", edited: N, reordered: _.reordered, change: _, oldNode: w, newNode: v, nesting: C });
    const T = v.children.map(y);
    let E = 0;
    for (const H of w.children) {
      const D = i.oldToNew.get(H.uid), R = D === void 0 ? -1 : T.findIndex((V) => V.uid === `N${D}`);
      if (R >= 0) E = R + 1;
      else for (const V of m(H)) T.splice(E++, 0, V);
    }
    return { uid: x, type: v.type, attrs: v.attrs, children: T };
  }, g = n.new?.root ? y(n.new.root) : n.old?.root ? h(n.old.root) : null;
  for (const [v, x] of a) {
    const w = x.kind === "moved-away" ? a.get(x.partner) : void 0;
    w && (w.partner = v);
  }
  return { key: Pi(n), diff: n, def: { ...n.new ?? n.old, root: g }, marks: a, changes: [] };
}
function R_(n) {
  const i = {};
  for (const r of n) i[Pi(r)] = z_(r);
  const a = new Set(n.filter((r) => r.status !== "unchanged").map(Pi));
  for (const r of Object.values(i))
    La(r.def.root, (u) => {
      const c = r.marks.get(u.uid);
      u.type === "SubTree" && a.has(u.attrs.ID ?? "") && (c.innerChange = !0), (c.kind !== "same" || c.innerChange) && r.changes.push(u.uid);
    });
  return i;
}
function D_(n, i) {
  const a = i?.change;
  if (!a || !i.edited) return;
  const r = [];
  a.type && r.push({ key: "type", value: a.type.new, old: a.type.old, change: "changed" });
  for (const [u, { old: c, new: d }] of Object.entries(a.attrs))
    d === void 0 ? r.push({ key: u, value: c, change: "removed" }) : c === void 0 ? r.push({ key: u, value: d, change: "added" }) : r.push({ key: u, value: d, old: c, change: "changed" });
  return [...r, ...Rh(n).filter((u) => !(u.key in a.attrs))];
}
function H_(n) {
  return n.moved || n.reordered || !!n.type || Object.keys(n.attrs).length > 0;
}
class ab {
  ids = /* @__PURE__ */ new Map();
  id(i) {
    let a = this.ids.get(i);
    return a === void 0 && this.ids.set(i, a = this.ids.size), a;
  }
}
function k_(n) {
  return JSON.stringify(Object.entries(n).sort(([i], [a]) => i < a ? -1 : i > a ? 1 : 0));
}
function U_(n) {
  return n.attrs.name ? `name:${n.attrs.name}` : n.type === "SubTree" ? `subtree:${n.attrs.ID ?? ""}` : `type:${n.type}`;
}
function sh(n, i) {
  const a = [], r = (u, c) => {
    const d = { node: u, parent: c, children: [], pre: a.length, size: 1, height: 1, hash: 0, label: U_(u) };
    a.push(d);
    for (const h of u.children) {
      const p = r(h, d);
      d.children.push(p), d.size += p.size, d.height = Math.max(d.height, p.height + 1);
    }
    return d.hash = i.id(`${u.type}\0${k_(u.attrs)}\0${d.children.map((h) => h.hash).join(",")}`), d;
  };
  return n && r(n, null), a;
}
function B_(n, i) {
  return n.pre > i.pre && n.pre < i.pre + i.size;
}
function L_(n, i, a) {
  const r = Array.from({ length: n.length + 1 }, () => new Array(i.length + 1).fill(0));
  for (let c = n.length - 1; c >= 0; c--)
    for (let d = i.length - 1; d >= 0; d--) r[c][d] = a(n[c], i[d]) ? r[c + 1][d + 1] + 1 : Math.max(r[c + 1][d], r[c][d + 1]);
  const u = [];
  for (let c = 0, d = 0; c < n.length && d < i.length; )
    a(n[c], i[d]) ? u.push([c++, d++]) : r[c + 1][d] >= r[c][d + 1] ? c++ : d++;
  return u;
}
function j_(n) {
  const i = n.map(() => 1), a = n.map(() => -1);
  let r = -1;
  for (let c = 0; c < n.length; c++) {
    for (let d = 0; d < c; d++) n[d] < n[c] && i[d] + 1 > i[c] && (i[c] = i[d] + 1, a[c] = d);
    (r < 0 || i[c] > i[r]) && (r = c);
  }
  const u = /* @__PURE__ */ new Set();
  for (let c = r; c >= 0; c = a[c]) u.add(c);
  return u;
}
let V_ = class {
  constructor(i, a) {
    this.olds = i, this.news = a;
  }
  olds;
  news;
  fwd = /* @__PURE__ */ new Map();
  back = /* @__PURE__ */ new Map();
  match(i, a) {
    this.fwd.set(i, a), this.back.set(a, i);
  }
  /** Matches two identical subtrees node for node. */
  matchSubtree(i, a) {
    this.match(i, a), i.children.forEach((r, u) => this.matchSubtree(r, a.children[u]));
  }
  topDown() {
    const i = (c) => {
      const d = /* @__PURE__ */ new Map();
      for (const h of c) d.get(h.hash)?.push(h) ?? d.set(h.hash, [h]);
      return d;
    }, a = i(this.olds), r = i(this.news), u = [...a.keys()].filter((c) => r.has(c)).sort((c, d) => a.get(d)[0].height - a.get(c)[0].height);
    for (const c of u) {
      const d = a.get(c).filter((m) => !this.fwd.has(m)), h = r.get(c).filter((m) => !this.back.has(m));
      if (!d.length || !h.length) continue;
      if (d.length === 1 && h.length === 1) {
        this.matchSubtree(d[0], h[0]);
        continue;
      }
      if (d[0].height === 1) continue;
      const p = [];
      for (const m of d)
        for (const y of h) {
          if (!m.parent || !y.parent || m.parent.label !== y.parent.label) continue;
          const g = (v) => v.parent.children.indexOf(v);
          p.push({ o: m, n: y, score: (this.fwd.get(m.parent) === y.parent ? 4 : 0) + (g(m) === g(y) ? 1 : 0) });
        }
      p.sort((m, y) => y.score - m.score);
      for (const { o: m, n: y } of p) !this.fwd.has(m) && !this.back.has(y) && this.matchSubtree(m, y);
    }
  }
  /** Share of matched descendants of `o` whose match lies under `n`. */
  dice(i, a) {
    let r = 0;
    for (let u = i.pre + 1; u < i.pre + i.size; u++) {
      const c = this.fwd.get(this.olds[u]);
      c && B_(c, a) && r++;
    }
    return 2 * r / (i.size - 1 + a.size - 1);
  }
  bottomUp() {
    for (let r = !0; r; ) {
      r = !1;
      const u = [];
      for (const c of this.olds) {
        if (this.fwd.has(c) || !c.children.length) continue;
        const d = /* @__PURE__ */ new Set();
        for (let h = c.pre + 1; h < c.pre + c.size; h++)
          for (let p = this.fwd.get(this.olds[h])?.parent; p; p = p.parent) this.back.has(p) || d.add(p);
        for (const h of d) {
          const p = this.dice(c, h), m = h.node.type === c.node.type;
          (m ? p >= 0.3 || h.label === c.label && p > 0 : p >= 0.6) && u.push({ o: c, n: h, score: p + (m ? 0.1 : 0) + (h.label === c.label ? 0.01 : 0) });
        }
      }
      u.sort((c, d) => d.score - c.score);
      for (const { o: c, n: d } of u)
        this.fwd.has(c) || this.back.has(d) || (this.match(c, d), r = !0);
    }
    const [i, a] = [this.olds[0], this.news[0]];
    i && a && !this.fwd.has(i) && !this.back.has(a) && this.match(i, a);
  }
  recover() {
    const i = [
      { key: (a) => a.hash, whole: !0 },
      { key: (a) => a.label, whole: !1 },
      { key: (a) => a.node.type, whole: !1 }
    ];
    for (const a of this.news) {
      const r = this.back.get(a);
      if (r)
        for (const { key: u, whole: c } of i) {
          const d = r.children.filter((p) => !this.fwd.has(p)), h = a.children.filter((p) => !this.back.has(p));
          if (!d.length || !h.length) break;
          for (const [p, m] of L_(d, h, (y, g) => u(y) === u(g)))
            c ? this.matchSubtree(d[p], h[m]) : this.match(d[p], h[m]);
        }
    }
  }
};
function lb(n, i) {
  const a = {};
  for (const r of /* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(i)]))
    n[r] !== i[r] && (a[r] = { old: n[r], new: i[r] });
  return a;
}
function rb(n, i) {
  const a = new V_(n, i);
  a.topDown(), a.bottomUp(), a.recover();
  const r = /* @__PURE__ */ new Set();
  for (const [c, d] of a.fwd) {
    const h = c.children.filter((y) => a.fwd.get(y)?.parent === d), p = h.map((y) => d.children.indexOf(a.fwd.get(y))), m = j_(p);
    h.forEach((y, g) => m.has(g) || r.add(y));
  }
  const u = { matched: /* @__PURE__ */ new Map(), oldToNew: /* @__PURE__ */ new Map(), newToOld: /* @__PURE__ */ new Map(), added: /* @__PURE__ */ new Set(), removed: /* @__PURE__ */ new Set(), changes: 0 };
  for (const [c, d] of a.fwd) {
    const h = {
      oldUid: c.node.uid,
      newUid: d.node.uid,
      attrs: lb(c.node.attrs, d.node.attrs),
      moved: (c.parent ? a.fwd.get(c.parent) : null) !== d.parent,
      reordered: r.has(c)
    };
    c.node.type !== d.node.type && (h.type = { old: c.node.type, new: d.node.type }), u.matched.set(d.node.uid, h), u.oldToNew.set(c.node.uid, d.node.uid), u.newToOld.set(d.node.uid, c.node.uid), H_(h) && u.changes++;
  }
  for (const c of n) a.fwd.has(c) || u.removed.add(c.node.uid);
  for (const c of i) a.back.has(c) || u.added.add(c.node.uid);
  return u.changes += u.added.size + u.removed.size, u;
}
function BO(n, i) {
  const a = new ab();
  return rb(sh(n, a), sh(i, a));
}
function I_(n, i) {
  const a = (h, p) => n && i && h !== p ? { old: h, new: p } : void 0, r = {
    attrs: n && i ? lb(n.attrs, i.attrs) : {},
    ports: !!n && !!i && JSON.stringify(n.ports) !== JSON.stringify(i.ports)
  }, u = a(n?.id, i?.id), c = a(n?.file, i?.file), d = a(n?.description, i?.description);
  return u && (r.id = u), c && (r.file = c), d && (r.description = d), r;
}
function q_(n, i) {
  const a = new ab(), r = new Map([...n, ...i].map((g) => [g, sh(g.root, a)])), u = new Map(n.map((g) => [g.id, g])), c = new Set(i.map((g) => g.id)), d = /* @__PURE__ */ new Map(), h = n.filter((g) => !c.has(g.id) && g.root);
  for (const g of i) {
    if (u.has(g.id) || !g.root) continue;
    const v = h.findIndex((x) => r.get(x)[0].hash === r.get(g)[0].hash);
    v >= 0 && d.set(g, h.splice(v, 1)[0]);
  }
  const p = new Set(d.values()), m = [], y = (g, v) => {
    const x = rb(g ? r.get(g) : [], v ? r.get(v) : []), w = I_(g, v);
    let _;
    g ? v ? w.id ? _ = "renamed" : _ = x.changes || w.file || w.description || w.ports || Object.keys(w.attrs).length ? "changed" : "unchanged" : _ = "removed" : _ = "added";
    const N = { status: _, nodes: x, meta: w };
    g && (N.old = g), v && (N.new = v), m.push(N);
  };
  for (const g of i) y(u.get(g.id) ?? d.get(g), g);
  for (const g of n) !c.has(g.id) && !p.has(g) && y(g, void 0);
  return m;
}
function Y_(n, i) {
  const a = q_(n.trees, i.trees);
  return { trees: Dh(a), merged: R_(a), models: $_(n, i) };
}
function $_(n, i) {
  const a = _u(i?.specModels ?? [], i?.trees ?? []);
  for (const [r, u] of _u(n?.specModels ?? [], n?.trees ?? [])) a.has(r) || a.set(r, u);
  return a;
}
const Ay = { changed: 0, renamed: 1, added: 2, removed: 3, unchanged: 4 };
function Dh(n) {
  return [...n].sort((i, a) => Ay[i.status] - Ay[a.status] || Pi(i).localeCompare(Pi(a)));
}
function LO(n, i) {
  return Dh(n).filter((a) => a.status !== "unchanged").flatMap((a) => i[Pi(a)].changes.map((r) => ({ key: Pi(a), uid: r })));
}
function X_(n) {
  const i = Dh(n), a = i.find((r) => r.status !== "unchanged") ?? i[0];
  return a ? Pi(a) : null;
}
const sb = [
  { type: "bool", values: [{ name: "true" }, { name: "false" }] },
  { type: "BT::NodeStatus", values: ["SUCCESS", "FAILURE", "RUNNING", "SKIPPED", "IDLE"].map((n) => ({ name: n })) }
], G_ = {
  "signed char": [8, !0],
  int8_t: [8, !0],
  "unsigned char": [8, !1],
  uint8_t: [8, !1],
  short: [16, !0],
  int16_t: [16, !0],
  "unsigned short": [16, !1],
  uint16_t: [16, !1],
  int: [32, !0],
  int32_t: [32, !0],
  unsigned: [32, !1],
  "unsigned int": [32, !1],
  uint32_t: [32, !1],
  long: [64, !0],
  "long long": [64, !0],
  int64_t: [64, !0],
  "unsigned long": [64, !1],
  "unsigned long long": [64, !1],
  uint64_t: [64, !1],
  size_t: [64, !1]
}, Z_ = /* @__PURE__ */ new Set(["float", "double", "long double"]), Q_ = /* @__PURE__ */ new Set(["true", "false", "TRUE", "FALSE", "True", "False", "1", "0"]);
function K_(n, i, a) {
  if (!n || tb(i)) return;
  const r = i.trim(), u = a.get(n);
  if (u) return g_(u, r) ? void 0 : `not ${F_(u.type)} ${u.type} value`;
  if (n === "bool") return Q_.has(r) ? void 0 : "not true or false";
  if (n === "BT::NodeStatus") return nb(sb[1], r) ? void 0 : "not a BT::NodeStatus value";
  const c = G_[n];
  if (c) {
    if (!/^[-+]?\d+$/.test(r)) return "not an integer";
    const [d, h] = c, p = BigInt(r.replace(/^\+/, "")), m = h ? -(1n << BigInt(d - 1)) : 0n, y = h ? (1n << BigInt(d - 1)) - 1n : (1n << BigInt(d)) - 1n;
    return p < m || p > y ? `out of range for ${n}` : void 0;
  }
  if (Z_.has(n))
    return /^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(r) || /^[-+]?(inf|infinity|nan)$/i.test(r) ? void 0 : "not a number";
}
function F_(n) {
  return /^[aeiou]/i.test(n) ? "an" : "a";
}
function jO(n, i) {
  if (n)
    return i.get(n) ?? sb.find((a) => a.type === n);
}
const ub = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J_ = ub + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", P_ = "[" + ub + "][" + J_ + "]*", W_ = new RegExp("^" + P_ + "$");
function eE(n, i) {
  const a = [];
  let r = i.exec(n);
  for (; r; ) {
    const u = [];
    u.startIndex = i.lastIndex - r[0].length;
    const c = r.length;
    for (let d = 0; d < c; d++)
      u.push(r[d]);
    a.push(u), r = i.exec(n);
  }
  return a;
}
const cb = function(n) {
  const i = W_.exec(n);
  return !(i === null || typeof i > "u");
};
function tE(n) {
  return typeof n < "u";
}
const Hh = [
  // '__proto__',
  // 'constructor',
  // 'prototype',
  "hasOwnProperty",
  "toString",
  "valueOf",
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__"
], fb = ["__proto__", "constructor", "prototype"], nE = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function iE(n, i) {
  i = Object.assign({}, nE, i);
  const a = [];
  let r = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = My(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let d = c;
      if (c++, n[c] === "!") {
        c = Oy(n, c);
        continue;
      } else {
        let h = !1;
        n[c] === "/" && (h = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !fE(p)) {
          let g;
          return p.trim().length === 0 ? g = "Invalid space after '<'." : g = "Tag '" + p + "' is an invalid name.", it("InvalidTag", g, Dt(n, c));
        }
        const m = lE(n, c);
        if (m === !1)
          return it("InvalidAttr", "Attributes for '" + p + "' have open quote.", Dt(n, c));
        let y = m.value;
        if (c = m.index, y[y.length - 1] === "/") {
          const g = c - y.length;
          y = y.substring(0, y.length - 1);
          const v = zy(y, i);
          if (v === !0)
            r = !0;
          else
            return it(v.err.code, v.err.msg, Dt(n, g + v.err.line));
        } else if (h)
          if (m.tagClosed) {
            if (y.trim().length > 0)
              return it("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Dt(n, d));
            if (a.length === 0)
              return it("InvalidTag", "Closing tag '" + p + "' has not been opened.", Dt(n, d));
            {
              const g = a.pop();
              if (p !== g.tagName) {
                let v = Dt(n, g.tagStartPos);
                return it(
                  "InvalidTag",
                  "Expected closing tag '" + g.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + p + "'.",
                  Dt(n, d)
                );
              }
              a.length == 0 && (u = !0);
            }
          } else return it("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Dt(n, c));
        else {
          const g = zy(y, i);
          if (g !== !0)
            return it(g.err.code, g.err.msg, Dt(n, c - y.length + g.err.line));
          if (u === !0)
            return it("InvalidXml", "Multiple possible root nodes found.", Dt(n, c));
          i.unpairedTags.indexOf(p) !== -1 || a.push({ tagName: p, tagStartPos: d }), r = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = Oy(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = My(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const g = uE(n, c);
            if (g == -1)
              return it("InvalidChar", "char '&' is not expected.", Dt(n, c));
            c = g;
          } else if (u === !0 && !Da(n[c]))
            return it("InvalidXml", "Extra text at the end", Dt(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (Da(n[c]))
        continue;
      return it("InvalidChar", "char '" + n[c] + "' is not expected.", Dt(n, c));
    }
  if (r) {
    if (a.length == 1)
      return it("InvalidTag", "Unclosed tag '" + a[0].tagName + "'.", Dt(n, a[0].tagStartPos));
    if (a.length > 0)
      return it("InvalidXml", "Invalid '" + JSON.stringify(a.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return it("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Da(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function My(n, i) {
  const a = i;
  for (; i < n.length; i++)
    if (n[i] == "?" || n[i] == " ") {
      const r = n.substr(a, i - a);
      if (i > 5 && r === "xml")
        return it("InvalidXml", "XML declaration allowed only at the start of the document.", Dt(n, i));
      if (n[i] == "?" && n[i + 1] == ">") {
        i++;
        break;
      } else
        continue;
    }
  return i;
}
function Oy(n, i) {
  if (n.length > i + 5 && n[i + 1] === "-" && n[i + 2] === "-") {
    for (i += 3; i < n.length; i++)
      if (n[i] === "-" && n[i + 1] === "-" && n[i + 2] === ">") {
        i += 2;
        break;
      }
  } else if (n.length > i + 8 && n[i + 1] === "D" && n[i + 2] === "O" && n[i + 3] === "C" && n[i + 4] === "T" && n[i + 5] === "Y" && n[i + 6] === "P" && n[i + 7] === "E") {
    let a = 1;
    for (i += 8; i < n.length; i++)
      if (n[i] === "<")
        a++;
      else if (n[i] === ">" && (a--, a === 0))
        break;
  } else if (n.length > i + 9 && n[i + 1] === "[" && n[i + 2] === "C" && n[i + 3] === "D" && n[i + 4] === "A" && n[i + 5] === "T" && n[i + 6] === "A" && n[i + 7] === "[") {
    for (i += 8; i < n.length; i++)
      if (n[i] === "]" && n[i + 1] === "]" && n[i + 2] === ">") {
        i += 2;
        break;
      }
  }
  return i;
}
const oE = '"', aE = "'";
function lE(n, i) {
  let a = "", r = "", u = !1;
  for (; i < n.length; i++) {
    if (n[i] === oE || n[i] === aE)
      r === "" ? r = n[i] : r !== n[i] || (r = "");
    else if (n[i] === ">" && r === "") {
      u = !0;
      break;
    }
    a += n[i];
  }
  return r !== "" ? !1 : {
    value: a,
    index: i,
    tagClosed: u
  };
}
function rE(n) {
  const i = [], a = n.length;
  let r = 0;
  for (; r < a; ) {
    const u = r;
    for (; r < a && Da(n[r]); ) r++;
    if (r >= a) break;
    if (n[r] === "=") {
      r = u + 1;
      continue;
    }
    const c = n.slice(u, r), d = r;
    for (; r < a && !Da(n[r]) && n[r] !== "="; ) r++;
    const h = n.slice(d, r);
    let p, m = r;
    for (; m < a && Da(n[m]); ) m++;
    m < a && n[m] === "=" && (p = n.slice(r, m + 1), r = m + 1);
    let y, g, v = r;
    for (; v < a && Da(n[v]); ) v++;
    if (v < a && (n[v] === '"' || n[v] === "'")) {
      const w = v + 1, _ = n.indexOf(n[v], w);
      _ !== -1 && (y = n[v], g = n.slice(w, _), r = _ + 1);
    }
    const x = { startIndex: u };
    x[1] = c, x[2] = h, x[3] = p, x[4] = y !== void 0 ? !0 : void 0, x[5] = y, x[6] = g, i.push(x);
  }
  return i;
}
function zy(n, i) {
  const a = rE(n), r = {};
  for (let u = 0; u < a.length; u++) {
    if (a[u][1].length === 0)
      return it("InvalidAttr", "Attribute '" + a[u][2] + "' has no space in starting.", Zl(a[u]));
    if (a[u][3] !== void 0 && a[u][4] === void 0)
      return it("InvalidAttr", "Attribute '" + a[u][2] + "' is without value.", Zl(a[u]));
    if (a[u][3] === void 0 && !i.allowBooleanAttributes)
      return it("InvalidAttr", "boolean attribute '" + a[u][2] + "' is not allowed.", Zl(a[u]));
    const c = a[u][2];
    if (!cE(c))
      return it("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Zl(a[u]));
    if (!Object.prototype.hasOwnProperty.call(r, c))
      r[c] = 1;
    else
      return it("InvalidAttr", "Attribute '" + c + "' is repeated.", Zl(a[u]));
  }
  return !0;
}
function sE(n, i) {
  let a = /\d/;
  for (n[i] === "x" && (i++, a = /[\da-fA-F]/); i < n.length; i++) {
    if (n[i] === ";")
      return i;
    if (!n[i].match(a))
      break;
  }
  return -1;
}
function uE(n, i) {
  if (i++, n[i] === ";")
    return -1;
  if (n[i] === "#")
    return i++, sE(n, i);
  let a = 0;
  for (; i < n.length; i++, a++)
    if (!(n[i].match(/\w/) && a < 20)) {
      if (n[i] === ";")
        break;
      return -1;
    }
  return i;
}
function it(n, i, a) {
  return {
    err: {
      code: n,
      msg: i,
      line: a.line || a,
      col: a.col
    }
  };
}
function cE(n) {
  return cb(n);
}
function fE(n) {
  return cb(n);
}
function Dt(n, i) {
  const a = n.substring(0, i).split(/\r?\n/);
  return {
    line: a.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: a[a.length - 1].length + 1
  };
}
function Zl(n) {
  return n.startIndex + n[1].length;
}
const dE = {
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  euro: "€",
  dollar: "$",
  fnof: "ƒ",
  inr: "₹",
  af: "؋",
  birr: "ብር",
  peso: "₱",
  rub: "₽",
  won: "₩",
  yuan: "¥",
  cedil: "¸"
}, db = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}, hE = {
  nbsp: " ",
  copy: "©",
  reg: "®",
  trade: "™",
  mdash: "—",
  ndash: "–",
  hellip: "…",
  laquo: "«",
  raquo: "»",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  bull: "•",
  para: "¶",
  sect: "§",
  deg: "°",
  frac12: "½",
  frac14: "¼",
  frac34: "¾"
}, Nu = Object.freeze({
  /** Resolve and expand the entity normally. */
  ALLOW: "allow",
  /** Silently skip this entity — it will not be registered. */
  BLOCK: "block",
  /** Throw an error, aborting entity registration entirely. */
  THROW: "throw"
}), gE = new Set("!?\\\\/[]$%{}^&*()<>|+");
function Ry(n) {
  if (n[0] === "#")
    throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${n}"`);
  for (const i of n)
    if (gE.has(i))
      throw new Error(`[EntityReplacer] Invalid character '${i}' in entity name: "${n}"`);
  return n;
}
function Ql(...n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of n)
    if (a)
      for (const r of Object.keys(a)) {
        const u = a[r];
        if (typeof u == "string")
          i[r] = u;
        else if (u && typeof u == "object" && u.val !== void 0) {
          const c = u.val;
          typeof c == "string" && (i[r] = c);
        }
      }
  return i;
}
const Mo = "external", Tu = "base", uh = "all";
function pE(n) {
  return !n || n === Mo ? /* @__PURE__ */ new Set([Mo]) : n === uh ? /* @__PURE__ */ new Set([uh]) : n === Tu ? /* @__PURE__ */ new Set([Tu]) : Array.isArray(n) ? new Set(n) : /* @__PURE__ */ new Set([Mo]);
}
const qt = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 }), mE = /* @__PURE__ */ new Set([9, 10, 13]);
function yE(n) {
  if (!n)
    return { xmlVersion: 1, onLevel: qt.allow, nullLevel: qt.remove };
  const i = n.xmlVersion === 1.1 ? 1.1 : 1, a = qt[n.onNCR] ?? qt.allow, r = qt[n.nullNCR] ?? qt.remove, u = Math.max(r, qt.remove);
  return { xmlVersion: i, onLevel: a, nullLevel: u };
}
class vE {
  /**
   * @param {object} [options]
   * @param {object|null}  [options.namedEntities]        — extra named entities merged into base map
   * @param {object}  [options.limit]                 — security limits
   * @param {number}       [options.limit.maxTotalExpansions=0]  — 0 = unlimited
   * @param {number}       [options.limit.maxExpandedLength=0]   — 0 = unlimited
   * @param {'external'|'base'|'all'|string[]} [options.limit.applyLimitsTo='external']
   *   Which entity tiers count against the security limits:
   *   - 'external' (default) — only input/runtime + persistent external entities
   *   - 'base'               — only DEFAULT_XML_ENTITIES + namedEntities
   *   - 'all'                — every entity regardless of tier
   *   - string[]             — explicit combination, e.g. ['external', 'base']
   * @param {((resolved: string, original: string) => string)|null} [options.postCheck=null]
   * @param {string[]} [options.remove=[]] — entity names (e.g. ['nbsp', '#13']) to delete (replace with empty string)
   * @param {string[]} [options.leave=[]]  — entity names to keep as literal (unchanged in output)
   * @param {object}   [options.ncr]       — Numeric Character Reference controls
   * @param {1.0|1.1}  [options.ncr.xmlVersion=1.0]
   *   XML version governing which codepoint ranges are restricted:
   *   - 1.0 — C0 controls U+0001–U+001F (except U+0009/000A/000D) are prohibited
   *   - 1.1 — C0 controls are allowed when written as NCRs; C1 (U+007F–U+009F) decoded as-is
   * @param {'allow'|'leave'|'remove'|'throw'} [options.ncr.onNCR='allow']
   *   Base action for numeric references. Severity order: allow < leave < remove < throw.
   *   For codepoint ranges that carry a minimum level (surrogates → remove, XML 1.0 C0 → remove),
   *   the effective action is max(onNCR, rangeMinimum).
   * @param {'remove'|'throw'} [options.ncr.nullNCR='remove']
   *   Action for U+0000 (null). 'allow' and 'leave' are clamped to 'remove' since null is never safe.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onExternalEntity=null]
   *   Hook called when an external entity is registered via `setExternalEntities()` or
   *   `addExternalEntity()`. Return `ENTITY_ACTION.ALLOW` to accept the entity,
   *   `ENTITY_ACTION.BLOCK` to silently skip it, or `ENTITY_ACTION.THROW` to abort with an error.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onInputEntity=null]
   *   Hook called when an input entity is registered via `addInputEntities()`. Return
   *   `ENTITY_ACTION.ALLOW` to accept, `ENTITY_ACTION.BLOCK` to silently skip, or
   *   `ENTITY_ACTION.THROW` to abort with an error.
   */
  constructor(i = {}) {
    this._limit = i.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = typeof i.postCheck == "function" ? i.postCheck : (r) => r, this._limitTiers = pE(this._limit.applyLimitsTo ?? Mo), this._numericAllowed = i.numericAllowed ?? !0, this._baseMap = Ql(db, i.namedEntities || null), this._externalMap = /* @__PURE__ */ Object.create(null), this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(i.remove && Array.isArray(i.remove) ? i.remove : []), this._leaveSet = new Set(i.leave && Array.isArray(i.leave) ? i.leave : []);
    const a = yE(i.ncr);
    this._ncrXmlVersion = a.xmlVersion, this._ncrOnLevel = a.onLevel, this._ncrNullLevel = a.nullLevel, this._onExternalEntity = typeof i.onExternalEntity == "function" ? i.onExternalEntity : null, this._onInputEntity = typeof i.onInputEntity == "function" ? i.onInputEntity : null;
  }
  // -------------------------------------------------------------------------
  // Private: registration hook dispatch
  // -------------------------------------------------------------------------
  /**
   * Invoke a registration hook for a single entity name/value pair.
   * Returns true when the entity should be accepted, false when it should be
   * silently skipped (BLOCK), and throws when the hook returns THROW.
   *
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} hook
   * @param {string} name
   * @param {string} value
   * @param {string} context  — used in error messages ('external' | 'input')
   * @returns {boolean}  true = accept, false = skip
   */
  _applyRegistrationHook(i, a, r, u) {
    if (!i) return !0;
    const c = i(a, r);
    if (c === Nu.BLOCK) return !1;
    if (c === Nu.THROW)
      throw new Error(
        `[EntityDecoder] Registration of ${u} entity "&${a};" was rejected by hook`
      );
    return !0;
  }
  // -------------------------------------------------------------------------
  // Persistent external entity registration
  // -------------------------------------------------------------------------
  /**
   * Replace the full set of persistent external entities.
   * All keys are validated — throws on invalid characters.
   * If `onExternalEntity` is set, it is called once per entry; entries that
   * return `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW`
   * aborts the whole call.
   * @param {Record<string, string | { regex?: RegExp, val: string }>} map
   */
  setExternalEntities(i) {
    if (i)
      for (const u of Object.keys(i))
        Ry(u);
    if (!this._onExternalEntity) {
      this._externalMap = Ql(i);
      return;
    }
    const a = Ql(i), r = /* @__PURE__ */ Object.create(null);
    for (const [u, c] of Object.entries(a))
      this._applyRegistrationHook(this._onExternalEntity, u, c, "external") && (r[u] = c);
    this._externalMap = r;
  }
  /**
   * Add a single persistent external entity.
   * If `onExternalEntity` is set it is called before the entity is stored;
   * `ENTITY_ACTION.BLOCK` silently skips storage, `ENTITY_ACTION.THROW` raises.
   * @param {string} key
   * @param {string} value
   */
  addExternalEntity(i, a) {
    Ry(i), typeof a == "string" && a.indexOf("&") === -1 && this._applyRegistrationHook(this._onExternalEntity, i, a, "external") && (this._externalMap[i] = a);
  }
  // -------------------------------------------------------------------------
  // Input / runtime entity registration (per document)
  // -------------------------------------------------------------------------
  /**
   * Inject DOCTYPE entities for the current document.
   * Also resets per-document expansion counters.
   * If `onInputEntity` is set it is called once per entry; entries returning
   * `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW` aborts.
   * @param {Record<string, string | { regx?: RegExp, regex?: RegExp, val: string }>} map
   */
  addInputEntities(i) {
    if (this._totalExpansions = 0, this._expandedLength = 0, !this._onInputEntity) {
      this._inputMap = Ql(i);
      return;
    }
    const a = Ql(i), r = /* @__PURE__ */ Object.create(null);
    for (const [u, c] of Object.entries(a))
      this._applyRegistrationHook(this._onInputEntity, u, c, "input") && (r[u] = c);
    this._inputMap = r;
  }
  // -------------------------------------------------------------------------
  // Per-document reset
  // -------------------------------------------------------------------------
  /**
   * Wipe input/runtime entities and reset counters.
   * Call this before processing each new document.
   * @returns {this}
   */
  reset() {
    return this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
  }
  // -------------------------------------------------------------------------
  // XML version (can be set after construction, e.g. once parser reads <?xml?>)
  // -------------------------------------------------------------------------
  /**
   * Update the XML version used for NCR classification.
   * Call this as soon as the document's `<?xml version="...">` declaration is parsed.
   * @param {1.0|1.1|number} version
   */
  setXmlVersion(i) {
    this._ncrXmlVersion = i === 1.1 ? 1.1 : 1;
  }
  // -------------------------------------------------------------------------
  // Primary API
  // -------------------------------------------------------------------------
  /**
   * Replace all entity references in `str` in a single pass.
   *
   * @param {string} str
   * @returns {string}
   */
  decode(i) {
    if (typeof i != "string" || i.length === 0 || i.indexOf("&") === -1) return i;
    const a = i, r = [], u = i.length;
    let c = 0, d = 0;
    const h = this._maxTotalExpansions > 0, p = this._maxExpandedLength > 0, m = h || p;
    for (; d < u; ) {
      if (i.charCodeAt(d) !== 38) {
        d++;
        continue;
      }
      let g = d + 1;
      for (; g < u && i.charCodeAt(g) !== 59 && g - d <= 32; ) g++;
      if (g >= u || i.charCodeAt(g) !== 59) {
        d++;
        continue;
      }
      const v = i.slice(d + 1, g);
      if (v.length === 0) {
        d++;
        continue;
      }
      let x, w;
      if (this._removeSet.has(v))
        x = "", w === void 0 && (w = Mo);
      else if (this._leaveSet.has(v)) {
        d++;
        continue;
      } else if (v.charCodeAt(0) === 35) {
        const _ = this._resolveNCR(v);
        if (_ === void 0) {
          d++;
          continue;
        }
        x = _, w = Tu;
      } else {
        const _ = this._resolveName(v);
        x = _?.value, w = _?.tier;
      }
      if (x === void 0) {
        d++;
        continue;
      }
      if (d > c && r.push(i.slice(c, d)), r.push(x), c = g + 1, d = c, m && this._tierCounts(w)) {
        if (h && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions))
          throw new Error(
            `[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`
          );
        if (p) {
          const _ = x.length - (v.length + 2);
          if (_ > 0 && (this._expandedLength += _, this._expandedLength > this._maxExpandedLength))
            throw new Error(
              `[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`
            );
        }
      }
    }
    c < u && r.push(i.slice(c));
    const y = r.length === 0 ? i : r.join("");
    return this._postCheck(y, a);
  }
  // -------------------------------------------------------------------------
  // Private: limit tier check
  // -------------------------------------------------------------------------
  /**
   * Returns true if a resolved entity of the given tier should count
   * against the expansion/length limits.
   * @param {string} tier  — LIMIT_TIER_EXTERNAL | LIMIT_TIER_BASE
   * @returns {boolean}
   */
  _tierCounts(i) {
    return this._limitTiers.has(uh) ? !0 : this._limitTiers.has(i);
  }
  // -------------------------------------------------------------------------
  // Private: entity resolution
  // -------------------------------------------------------------------------
  /**
   * Resolve a named entity token (without & and ;).
   * Priority: inputMap > externalMap > baseMap
   * Returns the resolved value tagged with its limit tier.
   *
   * @param {string} name
   * @returns {{ value: string, tier: string }|undefined}
   */
  _resolveName(i) {
    if (i in this._inputMap) return { value: this._inputMap[i], tier: Mo };
    if (i in this._externalMap) return { value: this._externalMap[i], tier: Mo };
    if (i in this._baseMap) return { value: this._baseMap[i], tier: Tu };
  }
  /**
   * Classify a codepoint and return the minimum action level that must be applied.
   * Returns -1 when no minimum is imposed (normal allow path).
   *
   * Ranges checked (in priority order):
   *   1. U+0000            — null, governed by nullNCR (always ≥ remove)
   *   2. U+D800–U+DFFF     — surrogates, always prohibited (min: remove)
   *   3. U+0001–U+001F \ {0x09,0x0A,0x0D}  — XML 1.0 restricted C0 (min: remove)
   *      (skipped in XML 1.1 — C0 controls are allowed when written as NCRs)
   *
   * @param {number} cp  — codepoint
   * @returns {number}   — minimum NCR_LEVEL value, or -1 for no restriction
   */
  _classifyNCR(i) {
    return i === 0 ? this._ncrNullLevel : i >= 55296 && i <= 57343 || this._ncrXmlVersion === 1 && i >= 1 && i <= 31 && !mE.has(i) ? qt.remove : -1;
  }
  /**
   * Execute a resolved NCR action.
   *
   * @param {number} action   — NCR_LEVEL value
   * @param {string} token    — raw token (e.g. '#38') for error messages
   * @param {number} cp       — codepoint, used only for error messages
   * @returns {string|undefined}
   *   - decoded character string  → 'allow'
   *   - ''                        → 'remove'
   *   - undefined                 → 'leave' (caller must skip past '&' only)
   *   - throws Error              → 'throw'
   */
  _applyNCRAction(i, a, r) {
    switch (i) {
      case qt.allow:
        return String.fromCodePoint(r);
      case qt.remove:
        return "";
      case qt.leave:
        return;
      // signal: keep literal
      case qt.throw:
        throw new Error(
          `[EntityDecoder] Prohibited numeric character reference &${a}; (U+${r.toString(16).toUpperCase().padStart(4, "0")})`
        );
      default:
        return String.fromCodePoint(r);
    }
  }
  /**
   * Full NCR resolution pipeline for a numeric token.
   *
   * Steps:
   *   1. Parse the codepoint (decimal or hex).
   *   2. Validate the raw codepoint range (NaN, <0, >0x10FFFF).
   *   3. If numericAllowed is false and no minimum restriction applies → leave as-is.
   *   4. Classify the codepoint to find the minimum required action level.
   *   5. Resolve effective action = max(onNCR, minimum).
   *   6. Apply and return.
   *
   * @param {string} token  — e.g. '#38', '#x26', '#X26'
   * @returns {string|undefined}
   *   - string (incl. '')  — replacement ('' = remove)
   *   - undefined          — leave original &token; as-is
   */
  _resolveNCR(i) {
    const a = i.charCodeAt(1);
    let r;
    if (a === 120 || a === 88 ? r = parseInt(i.slice(2), 16) : r = parseInt(i.slice(1), 10), Number.isNaN(r) || r < 0 || r > 1114111) return;
    const u = this._classifyNCR(r);
    if (!this._numericAllowed && u < qt.remove) return;
    const c = u === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, u);
    return this._applyNCRAction(c, i, r);
  }
}
const hb = (n) => Hh.includes(n) ? "__" + n : n, bE = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0,
    unicode: !1
  },
  tagValueProcessor: function(n, i) {
    return i;
  },
  attributeValueProcessor: function(n, i) {
    return i;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  entityDecoder: null,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(n, i, a) {
    return n;
  },
  // skipEmptyListItem: false
  captureMetaData: !1,
  maxNestedTags: 100,
  strictReservedNames: !0,
  jPath: !0,
  // if true, pass jPath string to callbacks; if false, pass matcher instance
  onDangerousProperty: hb
};
function xE(n, i) {
  if (typeof n != "string")
    return;
  const a = n.toLowerCase();
  if (Hh.some((r) => a === r.toLowerCase()))
    throw new Error(
      `[SECURITY] Invalid ${i}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  if (fb.some((r) => a === r.toLowerCase()))
    throw new Error(
      `[SECURITY] Invalid ${i}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
}
function gb(n, i) {
  return typeof n == "boolean" ? {
    enabled: n,
    // true or false
    maxEntitySize: 1e4,
    maxExpansionDepth: 1e4,
    maxTotalExpansions: 1 / 0,
    maxExpandedLength: 1e5,
    maxEntityCount: 1e3,
    allowedTags: null,
    tagFilter: null,
    appliesTo: "all"
  } : typeof n == "object" && n !== null ? {
    enabled: n.enabled !== !1,
    maxEntitySize: Math.max(1, n.maxEntitySize ?? 1e4),
    maxExpansionDepth: Math.max(1, n.maxExpansionDepth ?? 1e4),
    maxTotalExpansions: Math.max(1, n.maxTotalExpansions ?? 1 / 0),
    maxExpandedLength: Math.max(1, n.maxExpandedLength ?? 1e5),
    maxEntityCount: Math.max(1, n.maxEntityCount ?? 1e3),
    allowedTags: n.allowedTags ?? null,
    tagFilter: n.tagFilter ?? null,
    appliesTo: n.appliesTo ?? "all"
  } : gb(!0);
}
const wE = function(n) {
  const i = Object.assign({}, bE, n), a = [
    { value: i.attributeNamePrefix, name: "attributeNamePrefix" },
    { value: i.attributesGroupName, name: "attributesGroupName" },
    { value: i.textNodeName, name: "textNodeName" },
    { value: i.cdataPropName, name: "cdataPropName" },
    { value: i.commentPropName, name: "commentPropName" }
  ];
  for (const { value: r, name: u } of a)
    r && xE(r, u);
  return i.onDangerousProperty === null && (i.onDangerousProperty = hb), i.processEntities = gb(i.processEntities, i.htmlEntities), i.unpairedTagsSet = new Set(i.unpairedTags), i.stopNodes && Array.isArray(i.stopNodes) && (i.stopNodes = i.stopNodes.map((r) => typeof r == "string" && r.startsWith("*.") ? ".." + r.substring(2) : r)), i;
};
let Ao;
typeof Symbol != "function" ? Ao = "@@xmlMetadata" : Ao = /* @__PURE__ */ Symbol("XML Node Metadata");
class Zi {
  constructor(i) {
    this.tagname = i, this.child = [], this[":@"] = /* @__PURE__ */ Object.create(null);
  }
  add(i, a) {
    i === "__proto__" && (i = "#__proto__"), this.child.push({ [i]: a });
  }
  addChild(i, a) {
    i.tagname === "__proto__" && (i.tagname = "#__proto__"), i[":@"] && Object.keys(i[":@"]).length > 0 ? this.child.push({ [i.tagname]: i.child, ":@": i[":@"] }) : this.child.push({ [i.tagname]: i.child }), this.addStartIndex(a);
  }
  addStartIndex(i) {
    i !== void 0 && (this.child[this.child.length - 1][Ao] = { startIndex: i });
  }
  addEndIndex(i) {
    const a = this.child[this.child.length - 1];
    a !== void 0 && a[Ao] !== void 0 && a[Ao].endIndex === void 0 && (a[Ao].endIndex = i);
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return Ao;
  }
}
const pb = ":A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�", SE = pb + "\\-\\.\\d·̀-ͯ‿-⁀", mb = ":A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", _E = mb + "\\-\\.\\d·̀-ͯ҇‿-⁀", kh = (n, i, a = "") => {
  const r = n.replace(":", ""), u = i.replace(":", ""), c = `[${r}][${u}]*`;
  return {
    name: new RegExp(`^[${n}][${i}]*$`, a),
    ncName: new RegExp(`^${c}$`, a),
    qName: new RegExp(`^${c}(?::${c})?$`, a),
    nmToken: new RegExp(`^[${i}]+$`, a),
    nmTokens: new RegExp(`^[${i}]+(?:\\s+[${i}]+)*$`, a)
  };
}, EE = kh(pb, SE), NE = kh(mb, _E, "u"), yb = ":A-Za-z_", TE = yb + "\\-\\.\\d", CE = kh(yb, TE), AE = (n = "1.0", i = !1) => i ? CE : n === "1.1" ? NE : EE, vb = (n, { xmlVersion: i = "1.0", asciiOnly: a = !1 } = {}) => AE(i, a).qName.test(n);
class ME {
  constructor(i, a) {
    this.suppressValidationErr = !i, this.options = i, this.xmlVersion = a || 1;
  }
  setXmlVersion(i = 1) {
    this.xmlVersion = i;
  }
  readDocType(i, a) {
    const r = /* @__PURE__ */ Object.create(null);
    let u = 0;
    if (i[a + 3] === "O" && i[a + 4] === "C" && i[a + 5] === "T" && i[a + 6] === "Y" && i[a + 7] === "P" && i[a + 8] === "E") {
      a = a + 9;
      let c = 1, d = !1, h = !1, p = null, m = "";
      for (; a < i.length; a++) {
        if (p !== null) {
          i[a] === p && (p = null), m += i[a];
          continue;
        }
        if (!d && !h && (i[a] === '"' || i[a] === "'")) {
          p = i[a], m += i[a];
          continue;
        }
        if (i[a] === "<" && !h) {
          if (d && To(i, "!ENTITY", a)) {
            a += 7;
            let y, g;
            if ([y, g, a] = this.readEntityExp(i, a + 1, this.suppressValidationErr), g.indexOf("&") === -1) {
              if (this.options.enabled !== !1 && this.options.maxEntityCount != null && u >= this.options.maxEntityCount)
                throw new Error(
                  `Entity count (${u + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`
                );
              r[y] = g, u++;
            }
          } else if (d && To(i, "!ELEMENT", a)) {
            a += 8;
            const { index: y } = this.readElementExp(i, a + 1);
            a = y;
          } else if (d && To(i, "!ATTLIST", a))
            a += 8;
          else if (d && To(i, "!NOTATION", a)) {
            a += 9;
            const { index: y } = this.readNotationExp(i, a + 1, this.suppressValidationErr);
            a = y;
          } else if (To(i, "!--", a)) h = !0;
          else throw new Error("Invalid DOCTYPE");
          c++, m = "";
        } else if (i[a] === ">") {
          if (h ? i[a - 1] === "-" && i[a - 2] === "-" && (h = !1, c--) : c--, c === 0)
            break;
        } else i[a] === "[" ? d = !0 : m += i[a];
      }
      if (p !== null || c !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: r, i: a };
  }
  readEntityExp(i, a) {
    a = It(i, a);
    const r = a;
    for (; a < i.length && !/\s/.test(i[a]) && i[a] !== '"' && i[a] !== "'"; )
      a++;
    let u = i.substring(r, a);
    if (Kl(u, { xmlVersion: this.xmlVersion }), a = It(i, a), !this.suppressValidationErr) {
      if (i.substring(a, a + 6).toUpperCase() === "SYSTEM")
        throw new Error("External entities are not supported");
      if (i[a] === "%")
        throw new Error("Parameter entities are not supported");
    }
    let c = "";
    if ([a, c] = this.readIdentifierVal(i, a, "entity"), this.options.enabled !== !1 && this.options.maxEntitySize != null && c.length > this.options.maxEntitySize)
      throw new Error(
        `Entity "${u}" size (${c.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`
      );
    return a--, [u, c, a];
  }
  readNotationExp(i, a) {
    a = It(i, a);
    const r = a;
    for (; a < i.length && !/\s/.test(i[a]); )
      a++;
    let u = i.substring(r, a);
    !this.suppressValidationErr && Kl(u, { xmlVersion: this.xmlVersion }), a = It(i, a);
    const c = i.substring(a, a + 6).toUpperCase();
    if (!this.suppressValidationErr && c !== "SYSTEM" && c !== "PUBLIC")
      throw new Error(`Expected SYSTEM or PUBLIC, found "${c}"`);
    a += c.length, a = It(i, a);
    let d = null, h = null;
    if (c === "PUBLIC")
      [a, d] = this.readIdentifierVal(i, a, "publicIdentifier"), a = It(i, a), (i[a] === '"' || i[a] === "'") && ([a, h] = this.readIdentifierVal(i, a, "systemIdentifier"));
    else if (c === "SYSTEM" && ([a, h] = this.readIdentifierVal(i, a, "systemIdentifier"), !this.suppressValidationErr && !h))
      throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: u, publicIdentifier: d, systemIdentifier: h, index: --a };
  }
  readIdentifierVal(i, a, r) {
    let u = "";
    const c = i[a];
    if (c !== '"' && c !== "'")
      throw new Error(`Expected quoted string, found "${c}"`);
    a++;
    const d = a;
    for (; a < i.length && i[a] !== c; )
      a++;
    if (u = i.substring(d, a), i[a] !== c)
      throw new Error(`Unterminated ${r} value`);
    return a++, [a, u];
  }
  readElementExp(i, a) {
    a = It(i, a);
    const r = a;
    for (; a < i.length && !/\s/.test(i[a]); )
      a++;
    let u = i.substring(r, a);
    if (!this.suppressValidationErr && !vb(u, { xmlVersion: this.xmlVersion }))
      throw new Error(`Invalid element name: "${u}"`);
    a = It(i, a);
    let c = "";
    if (i[a] === "E" && To(i, "MPTY", a)) a += 4;
    else if (i[a] === "A" && To(i, "NY", a)) a += 2;
    else if (i[a] === "(") {
      a++;
      const d = a;
      for (; a < i.length && i[a] !== ")"; )
        a++;
      if (c = i.substring(d, a), i[a] !== ")")
        throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr)
      throw new Error(`Invalid Element Expression, found "${i[a]}"`);
    return {
      elementName: u,
      contentModel: c.trim(),
      index: a
    };
  }
  readAttlistExp(i, a) {
    a = It(i, a);
    let r = a;
    for (; a < i.length && !/\s/.test(i[a]); )
      a++;
    let u = i.substring(r, a);
    for (Kl(u, { xmlVersion: this.xmlVersion }), a = It(i, a), r = a; a < i.length && !/\s/.test(i[a]); )
      a++;
    let c = i.substring(r, a);
    if (!Kl(c, { xmlVersion: this.xmlVersion }))
      throw new Error(`Invalid attribute name: "${c}"`);
    a = It(i, a);
    let d = "";
    if (i.substring(a, a + 8).toUpperCase() === "NOTATION") {
      if (d = "NOTATION", a += 8, a = It(i, a), i[a] !== "(")
        throw new Error(`Expected '(', found "${i[a]}"`);
      a++;
      let p = [];
      for (; a < i.length && i[a] !== ")"; ) {
        const m = a;
        for (; a < i.length && i[a] !== "|" && i[a] !== ")"; )
          a++;
        let y = i.substring(m, a);
        if (y = y.trim(), !Kl(y, { xmlVersion: this.xmlVersion }))
          throw new Error(`Invalid notation name: "${y}"`);
        p.push(y), i[a] === "|" && (a++, a = It(i, a));
      }
      if (i[a] !== ")")
        throw new Error("Unterminated list of notations");
      a++, d += " (" + p.join("|") + ")";
    } else {
      const p = a;
      for (; a < i.length && !/\s/.test(i[a]); )
        a++;
      d += i.substring(p, a);
      const m = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !m.includes(d.toUpperCase()))
        throw new Error(`Invalid attribute type: "${d}"`);
    }
    a = It(i, a);
    let h = "";
    return i.substring(a, a + 8).toUpperCase() === "#REQUIRED" ? (h = "#REQUIRED", a += 8) : i.substring(a, a + 7).toUpperCase() === "#IMPLIED" ? (h = "#IMPLIED", a += 7) : [a, h] = this.readIdentifierVal(i, a, "ATTLIST"), {
      elementName: u,
      attributeName: c,
      attributeType: d,
      defaultValue: h,
      index: a
    };
  }
}
const It = (n, i) => {
  for (; i < n.length && /\s/.test(n[i]); )
    i++;
  return i;
};
function To(n, i, a) {
  for (let r = 0; r < i.length; r++)
    if (i[r] !== n[a + r + 1]) return !1;
  return !0;
}
function Kl(n, i) {
  if (vb(n, { xmlVersion: i }))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const OE = [
  // Basic Latin (ASCII) — included for completeness / pass-through
  48,
  // 0-9
  // Arabic scripts
  1632,
  // Arabic-Indic ٠١٢٣٤٥٦٧٨٩
  1776,
  // Extended Arabic-Indic (Urdu/Persian/Sindhi) ۰۱۲۳
  // Indic scripts
  2406,
  // Devanagari ०१२३४५६७८९
  2534,
  // Bengali ০১২৩৪৫৬৭৮৯
  2662,
  // Gurmukhi ੦੧੨੩੪੫੬੭੮੯
  2790,
  // Gujarati ૦૧૨૩૪૫૬૭૮૯
  2918,
  // Odia ୦୧୨୩୪୫୬୭୮୯
  3046,
  // Tamil ௦௧௨௩௪௫௬௭௮௯
  3174,
  // Telugu ౦౧౨౩౪౫౬౭౮౯
  3302,
  // Kannada ೦೧೨೩೪೫೬೭೮೯
  3430,
  // Malayalam ൦൧൨൩൪൫൬൭൮൯
  3558,
  // Sinhala Archaic ෦෧෨෩෪෫෬෭෮෯
  // Southeast Asian scripts
  3664,
  // Thai ๐๑๒๓๔๕๖๗๘๙
  3792,
  // Lao ໐໑໒໓໔໕໖໗໘໙
  3872,
  // Tibetan ༠༡༢༣༤༥༦༧༨༩
  4160,
  // Myanmar ၀၁၂၃၄၅၆၇၈၉
  4240,
  // Myanmar Shan ႐႑႒႓႔႕႖႗႘႙
  6112,
  // Khmer ០១២៣៤៥៦៧៨៩
  6160,
  // Mongolian ᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙
  6470,
  // Limbu ᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏
  6608,
  // New Tai Lue ᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙
  6784,
  // Tai Tham Hora ᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉
  6800,
  // Tai Tham Tham ᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙
  6992,
  // Balinese ᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙
  7088,
  // Sundanese ᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹
  7232,
  // Lepcha ᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉
  7248,
  // Ol Chiki ᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙
  // Fullwidth (CJK context)
  65296,
  // Fullwidth ０１２３４５６７８９
  // Mathematical digit variants (Unicode math block)
  120782,
  // Mathematical Bold
  120792,
  // Mathematical Double-Struck
  120802,
  // Mathematical Sans-Serif
  120812,
  // Mathematical Sans-Serif Bold
  120822,
  // Mathematical Monospace
  // Other scripts
  66720,
  // Osmanya 𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩
  68912,
  // Hanifi Rohingya 𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹
  69734,
  // Brahmi 𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯
  69872,
  // Sora Sompeng 𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹
  69942,
  // Chakma 𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿
  70096,
  // Sharada 𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙
  70384,
  // Khudawadi 𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹
  70736,
  // Newa 𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙
  70864,
  // Tirhuta 𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙
  71248,
  // Modi 𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙
  71360,
  // Takri 𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉
  71472,
  // Ahom 𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹
  71904,
  // Warang Citi 𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩
  72016,
  // Dives Akuru 𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙
  72688,
  // Khitan Small Script 𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹
  72784,
  // Bhaiksuki 𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙
  73040,
  // Masaram Gondi 𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙
  73120,
  // Gunjala Gondi 𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩
  73552,
  // Kawi 𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙
  92768,
  // Mro 𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩
  92864,
  // Tangsa 𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉
  93008,
  // Pahawh Hmong 𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙
  123200,
  // Nyiakeng Puachue Hmong 𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉
  123632,
  // Wancho 𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹
  124144,
  // Nag Mundari 𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹
  125264,
  // Adlam 𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙
  130032
  // Segmented digit symbols 🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹
], ch = 255, fh = /* @__PURE__ */ new Map(), bb = 65535, xb = 1632, er = xb, zE = bb - xb + 1, dh = new Uint8Array(zE).fill(ch);
for (const n of OE)
  for (let i = 0; i < 10; i++) {
    const a = n + i;
    a <= bb ? dh[a - er] = i : fh.set(a, i);
  }
const Dy = 48, Hy = 57, ky = 45, lu = /* @__PURE__ */ new Set([8722, 65293, 65123]);
function RE(n) {
  if (typeof n != "string") return n;
  const i = n.length;
  if (i === 0) return n;
  let a = -1;
  for (let u = 0; u < i; u++) {
    const c = n.charCodeAt(u);
    if (!(c >= Dy && c <= Hy || c === ky)) {
      if (c < er) {
        if (lu.has(c)) {
          a = u;
          break;
        }
        continue;
      }
      if (c >= 55296 && c <= 56319) {
        if (u + 1 < i) {
          const d = n.charCodeAt(u + 1);
          if (d >= 56320 && d <= 57343) {
            const h = 65536 + (c - 55296 << 10) + (d - 56320);
            if (fh.has(h)) {
              a = u;
              break;
            }
          }
        }
        continue;
      }
      if (dh[c - er] !== ch || lu.has(c)) {
        a = u;
        break;
      }
    }
  }
  if (a === -1) return n;
  const r = [];
  a > 0 && r.push(n.slice(0, a));
  for (let u = a; u < i; u++) {
    const c = n.charCodeAt(u);
    if (c >= Dy && c <= Hy || c === ky) {
      r.push(n[u]);
      continue;
    }
    if (c < er) {
      r.push(lu.has(c) ? "-" : n[u]);
      continue;
    }
    if (c >= 55296 && c <= 56319) {
      if (u + 1 < i) {
        const h = n.charCodeAt(u + 1);
        if (h >= 56320 && h <= 57343) {
          const p = 65536 + (c - 55296 << 10) + (h - 56320), m = fh.get(p);
          if (m !== void 0) {
            r.push(String.fromCharCode(m + 48)), u++;
            continue;
          }
        }
      }
      r.push(n[u]);
      continue;
    }
    if (lu.has(c)) {
      r.push("-");
      continue;
    }
    const d = dh[c - er];
    r.push(d !== ch ? String.fromCharCode(d + 48) : n[u]);
  }
  return r.join("");
}
const DE = /^[-+]?0x[a-fA-F0-9]+$/, HE = /^0b[01]+$/, kE = /^0o[0-7]+$/, UE = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, BE = {
  hex: !0,
  binary: !1,
  octal: !1,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0,
  //skipLike: /regex/,
  infinity: "original",
  // "null", "infinity" (Infinity type), "string" ("Infinity" (the string literal))
  unicode: !1
};
function LE(n, i = {}) {
  if (i = Object.assign({}, BE, i), !n || typeof n != "string") return n;
  let a = n.trim();
  if (a.length === 0) return n;
  if (i.skipLike !== void 0 && i.skipLike.test(a)) return n;
  if (a === "0" || i.unicode && (a = RE(a), a === "0"))
    return 0;
  if (i.hex && DE.test(a))
    return $d(a, 16);
  if (i.binary && HE.test(a))
    return $d(a, 2);
  if (i.octal && kE.test(a))
    return $d(a, 8);
  if (isFinite(a)) {
    if (a.includes("e") || a.includes("E"))
      return VE(n, a, i);
    {
      const r = UE.exec(a);
      if (r) {
        const u = r[1] || "", c = r[2];
        let d = IE(r[3]);
        const h = u ? (
          // 0., -00., 000.
          a[c.length + 1] === "."
        ) : a[c.length] === ".";
        if (!i.leadingZeros && (c.length > 1 || c.length === 1 && !h))
          return n;
        {
          const p = Number(a), m = String(p);
          if (p === 0) return p;
          if (m.search(/[eE]/) !== -1)
            return i.eNotation ? p : n;
          if (a.indexOf(".") !== -1)
            return m === "0" || m === d || m === `${u}${d}` ? p : n;
          let y = c ? d : a;
          return c ? y === m || u + y === m ? p : n : y === m || y === u + m ? p : n;
        }
      } else
        return n;
    }
  } else {
    const r = Number(a);
    return Number.isNaN(r) ? n : qE(n, r, i);
  }
}
const jE = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function VE(n, i, a) {
  if (!a.eNotation) return n;
  const r = i.match(jE);
  if (r) {
    let u = r[1] || "";
    const c = r[3].indexOf("e") === -1 ? "E" : "e", d = r[2], h = u ? (
      // 0E.
      i[d.length + 1] === c
    ) : i[d.length] === c;
    return d.length > 1 && h ? n : d.length === 1 && (r[3].startsWith(`.${c}`) || r[3][0] === c) ? Number(i) : d.length > 0 ? a.leadingZeros && !h ? Number(i) : n : Number(i);
  } else
    return n;
}
function IE(n) {
  if (n && n.indexOf(".") !== -1) {
    let i = n.length;
    for (; i > 0 && n.charCodeAt(i - 1) === 48; ) i--;
    return n = n.slice(0, i), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substring(0, n.length - 1)), n;
  }
  return n;
}
function $d(n, i) {
  const a = n.trim();
  if ((i === 2 || i === 8) && (n = a.substring(2)), parseInt) return parseInt(n, i);
  if (Number.parseInt) return Number.parseInt(n, i);
  if (window && window.parseInt) return window.parseInt(n, i);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function qE(n, i, a) {
  const r = i === 1 / 0;
  switch (a.infinity.toLowerCase()) {
    case "null":
      return null;
    case "infinity":
      return i;
    // Return Infinity or -Infinity
    case "string":
      return r ? "Infinity" : "-Infinity";
    default:
      return n;
  }
}
function YE(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (i) => {
    for (const a of n)
      if (typeof a == "string" && i === a || a instanceof RegExp && a.test(i))
        return !0;
  } : () => !1;
}
class Uy {
  /**
   * Create a new Expression
   * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
   * @param {Object} options - Configuration options
   * @param {string} options.separator - Path separator (default: '.')
   */
  constructor(i, a = {}, r) {
    this.pattern = i, this.separator = a.separator || ".", this.segments = this._parse(i), this.data = r, this._hasDeepWildcard = this.segments.some((u) => u.type === "deep-wildcard"), this._hasAttributeCondition = this.segments.some((u) => u.attrName !== void 0), this._hasPositionSelector = this.segments.some((u) => u.position !== void 0);
  }
  /**
   * Parse pattern string into segments
   * @private
   * @param {string} pattern - Pattern to parse
   * @returns {Array} Array of segment objects
   */
  _parse(i) {
    const a = [];
    let r = 0, u = "";
    for (; r < i.length; )
      i[r] === this.separator ? r + 1 < i.length && i[r + 1] === this.separator ? (u.trim() && (a.push(this._parseSegment(u.trim())), u = ""), a.push({ type: "deep-wildcard" }), r += 2) : (u.trim() && a.push(this._parseSegment(u.trim())), u = "", r++) : (u += i[r], r++);
    return u.trim() && a.push(this._parseSegment(u.trim())), a;
  }
  /**
   * Parse a single segment
   * @private
   * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
   * @returns {Object} Segment object
   */
  _parseSegment(i) {
    const a = { type: "tag" };
    let r = null, u = i;
    const c = i.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
    if (c && (u = c[1] + c[3], c[2])) {
      const y = c[2].slice(1, -1);
      y && (r = y);
    }
    let d, h = u;
    if (u.includes("::")) {
      const y = u.indexOf("::");
      if (d = u.substring(0, y).trim(), h = u.substring(y + 2).trim(), !d)
        throw new Error(`Invalid namespace in pattern: ${i}`);
    }
    let p, m = null;
    if (h.includes(":")) {
      const y = h.lastIndexOf(":"), g = h.substring(0, y).trim(), v = h.substring(y + 1).trim();
      ["first", "last", "odd", "even"].includes(v) || /^nth\(\d+\)$/.test(v) ? (p = g, m = v) : p = h;
    } else
      p = h;
    if (!p)
      throw new Error(`Invalid segment pattern: ${i}`);
    if (a.tag = p, d && (a.namespace = d), r)
      if (r.includes("=")) {
        const y = r.indexOf("=");
        a.attrName = r.substring(0, y).trim(), a.attrValue = r.substring(y + 1).trim();
      } else
        a.attrName = r.trim();
    if (m) {
      const y = m.match(/^nth\((\d+)\)$/);
      y ? (a.position = "nth", a.positionValue = parseInt(y[1], 10)) : a.position = m;
    }
    return a;
  }
  /**
   * Get the number of segments
   * @returns {number}
   */
  get length() {
    return this.segments.length;
  }
  /**
   * Check if expression contains deep wildcard
   * @returns {boolean}
   */
  hasDeepWildcard() {
    return this._hasDeepWildcard;
  }
  /**
   * Check if expression has attribute conditions
   * @returns {boolean}
   */
  hasAttributeCondition() {
    return this._hasAttributeCondition;
  }
  /**
   * Check if expression has position selectors
   * @returns {boolean}
   */
  hasPositionSelector() {
    return this._hasPositionSelector;
  }
  /**
   * Get string representation
   * @returns {string}
   */
  toString() {
    return this.pattern;
  }
}
class $E {
  constructor() {
    this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._deepByTerminalTag = /* @__PURE__ */ new Map(), this._patterns = /* @__PURE__ */ new Set(), this._sealed = !1;
  }
  /**
   * Add an Expression to the set.
   * Duplicate patterns (same pattern string) are silently ignored.
   *
   * @param {import('./Expression.js').default} expression - A pre-constructed Expression instance
   * @returns {this} for chaining
   * @throws {TypeError} if called after seal()
   *
   * @example
   * set.add(new Expression('root.users.user'));
   * set.add(new Expression('..script'));
   */
  add(i) {
    if (this._sealed)
      throw new TypeError(
        "ExpressionSet is sealed. Create a new ExpressionSet to add more expressions."
      );
    if (this._patterns.has(i.pattern)) return this;
    if (this._patterns.add(i.pattern), i.hasDeepWildcard()) {
      const c = i.segments[i.segments.length - 1];
      if (c && c.type !== "deep-wildcard" && c.tag !== "*") {
        const d = c.tag;
        this._deepByTerminalTag.has(d) || this._deepByTerminalTag.set(d, []), this._deepByTerminalTag.get(d).push(i);
      } else
        this._deepWildcards.push(i);
      return this;
    }
    const a = i.length, u = i.segments[i.segments.length - 1]?.tag;
    if (!u || u === "*")
      this._wildcardByDepth.has(a) || this._wildcardByDepth.set(a, []), this._wildcardByDepth.get(a).push(i);
    else {
      const c = `${a}:${u}`;
      this._byDepthAndTag.has(c) || this._byDepthAndTag.set(c, []), this._byDepthAndTag.get(c).push(i);
    }
    return this;
  }
  /**
   * Add multiple expressions at once.
   *
   * @param {import('./Expression.js').default[]} expressions - Array of Expression instances
   * @returns {this} for chaining
   *
   * @example
   * set.addAll([
   *   new Expression('root.users.user'),
   *   new Expression('root.config.setting'),
   * ]);
   */
  addAll(i) {
    for (const a of i) this.add(a);
    return this;
  }
  /**
   * Check whether a pattern string is already present in the set.
   *
   * @param {import('./Expression.js').default} expression
   * @returns {boolean}
   */
  has(i) {
    return this._patterns.has(i.pattern);
  }
  /**
   * Number of expressions in the set.
   * @type {number}
   */
  get size() {
    return this._patterns.size;
  }
  /**
   * Seal the set against further modifications.
   * Useful to prevent accidental mutations after config is built.
   * Calling add() or addAll() on a sealed set throws a TypeError.
   *
   * @returns {this}
   */
  seal() {
    return this._sealed = !0, this;
  }
  /**
   * Whether the set has been sealed.
   * @type {boolean}
   */
  get isSealed() {
    return this._sealed;
  }
  /**
   * Test whether the matcher's current path matches any expression in the set.
   *
   * Evaluation order (cheapest → most expensive):
   *  1. Exact depth + tag bucket  — O(1) lookup, typically 0–2 expressions
   *  2. Depth-only wildcard bucket — O(1) lookup, rare
   *  3. Deep-wildcard list         — always checked, but usually small
   *
   * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
   * @returns {boolean} true if any expression matches the current path
   *
   * @example
   * if (stopNodes.matchesAny(matcher)) {
   *   // handle stop node
   * }
   */
  matchesAny(i) {
    return this.findMatch(i) !== null;
  }
  /**
  * Find and return the first Expression that matches the matcher's current path.
  *
  * Uses the same evaluation order as matchesAny (cheapest → most expensive):
  *  1. Exact depth + tag bucket
  *  2. Depth-only wildcard bucket
  *  3. Deep-wildcard list
  *
  * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
  * @returns {import('./Expression.js').default | null} the first matching Expression, or null
  *
  * @example
  * const expr = stopNodes.findMatch(matcher);
  * if (expr) {
  *   // access expr.config, expr.pattern, etc.
  * }
  */
  findMatch(i) {
    const a = i.getDepth(), r = i.getCurrentTag(), u = `${a}:${r}`, c = this._byDepthAndTag.get(u);
    if (c) {
      for (let p = 0; p < c.length; p++)
        if (i.matches(c[p])) return c[p];
    }
    const d = this._wildcardByDepth.get(a);
    if (d) {
      for (let p = 0; p < d.length; p++)
        if (i.matches(d[p])) return d[p];
    }
    const h = this._deepByTerminalTag.get(r);
    if (h) {
      for (let p = 0; p < h.length; p++)
        if (i.matches(h[p])) return h[p];
    }
    for (let p = 0; p < this._deepWildcards.length; p++)
      if (i.matches(this._deepWildcards[p])) return this._deepWildcards[p];
    return null;
  }
}
class XE {
  /**
   * @param {Matcher} matcher - The parent Matcher instance to read from.
   */
  constructor(i) {
    this._matcher = i;
  }
  /**
   * Get the path separator used by the parent matcher.
   * @returns {string}
   */
  get separator() {
    return this._matcher.separator;
  }
  /**
   * Get current tag name.
   * @returns {string|undefined}
   */
  getCurrentTag() {
    const i = this._matcher.path;
    return i.length > 0 ? i[i.length - 1].tag : void 0;
  }
  /**
   * Get current namespace.
   * @returns {string|undefined}
   */
  getCurrentNamespace() {
    const i = this._matcher.path;
    return i.length > 0 ? i[i.length - 1].namespace : void 0;
  }
  /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */
  getAttrValue(i) {
    const a = this._matcher.path;
    if (a.length !== 0)
      return a[a.length - 1].values?.[i];
  }
  /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAttr(i) {
    const a = this._matcher.path;
    if (a.length === 0) return !1;
    const r = a[a.length - 1];
    return r.values !== void 0 && i in r.values;
  }
  /**
   * Get the value of a "kept" attribute from the nearest ancestor (or
   * current node) that declared it via `push(tag, attrs, ns, { keep: [...] })`.
   * @param {string} attrName
   * @returns {*}
   */
  getAnyParentAttr(i) {
    return this._matcher.getAnyParentAttr(i);
  }
  /**
   * Check whether any ancestor (or the current node) kept the given
   * attribute via `push(tag, attrs, ns, { keep: [...] })`.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAnyParentAttr(i) {
    return this._matcher.hasAnyParentAttr(i);
  }
  /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */
  getPosition() {
    const i = this._matcher.path;
    return i.length === 0 ? -1 : i[i.length - 1].position ?? 0;
  }
  /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */
  getCounter() {
    const i = this._matcher.path;
    return i.length === 0 ? -1 : i[i.length - 1].counter ?? 0;
  }
  /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */
  getIndex() {
    return this.getPosition();
  }
  /**
   * Get current path depth.
   * @returns {number}
   */
  getDepth() {
    return this._matcher.path.length;
  }
  /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */
  toString(i, a = !0) {
    return this._matcher.toString(i, a);
  }
  /**
   * Get path as array of tag names.
   * @returns {string[]}
   */
  toArray() {
    return this._matcher.path.map((i) => i.tag);
  }
  /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */
  matches(i) {
    return this._matcher.matches(i);
  }
  /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */
  matchesAny(i) {
    return i.matchesAny(this._matcher);
  }
}
class GE {
  /**
   * Create a new Matcher.
   * @param {Object} [options={}]
   * @param {string} [options.separator='.'] - Default path separator
   */
  constructor(i = {}) {
    this.separator = i.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new XE(this), this._keptAttrs = [];
  }
  /**
   * Push a new tag onto the path.
   * @param {string} tagName
   * @param {Object|null} [attrValues=null]
   * @param {string|null} [namespace=null]
   * @param {Object|null} [options=null]
   * @param {string[]} [options.keep] - Names of attributes (from attrValues)
   */
  push(i, a = null, r = null, u = null) {
    this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
    const c = this.path.length;
    let d = this.siblingStacks[c];
    d || (d = { counts: /* @__PURE__ */ new Map(), total: 0 }, this.siblingStacks[c] = d);
    const h = r ? `${r}:${i}` : i, p = d.counts.get(h) || 0, m = d.total;
    d.counts.set(h, p + 1), d.total++;
    const y = {
      tag: i,
      position: m,
      counter: p
    };
    r != null && (y.namespace = r), a != null && (y.values = a), this.path.push(y);
    const g = this.path.length, v = u !== null ? u.keep : null;
    if (v != null && v.length > 0 && a)
      for (let x = 0; x < v.length; x++) {
        const w = v[x];
        a[w] !== void 0 && this._keptAttrs.push({ depth: g, name: w, value: a[w] });
      }
  }
  /**
   * Pop the last tag from the path.
   * @returns {Object|undefined} The popped node
   */
  pop() {
    if (this.path.length === 0) return;
    this._pathStringCache = null;
    const i = this.path.pop();
    this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1);
    const a = this.path.length + 1;
    for (; this._keptAttrs.length > 0 && this._keptAttrs[this._keptAttrs.length - 1].depth >= a; )
      this._keptAttrs.pop();
    return i;
  }
  /**
   * Update current node's attribute values.
   * Useful when attributes are parsed after push.
   * @param {Object} attrValues
   */
  updateCurrent(i) {
    if (this.path.length > 0) {
      const a = this.path[this.path.length - 1];
      i != null && (a.values = i);
    }
  }
  /**
   * Get current tag name.
   * @returns {string|undefined}
   */
  getCurrentTag() {
    return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
  }
  /**
   * Get current namespace.
   * @returns {string|undefined}
   */
  getCurrentNamespace() {
    return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
  }
  /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */
  getAttrValue(i) {
    if (this.path.length !== 0)
      return this.path[this.path.length - 1].values?.[i];
  }
  /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAttr(i) {
    if (this.path.length === 0) return !1;
    const a = this.path[this.path.length - 1];
    return a.values !== void 0 && i in a.values;
  }
  /**
   * Get the value of a "kept" attribute from the nearest ancestor (or
   * current node) that declared it via `push(tag, attrs, ns, { keep: [...] })`.
   * Unlike getAttrValue(), this works regardless of how deep the path has
   * gone since the attribute was pushed — but only for attribute names that
   * were explicitly marked with `keep` at push time. Cost is proportional to
   * the number of currently-kept attributes (typically 0-3), not path depth.
   * @param {string} attrName
   * @returns {*} the value, or undefined if no ancestor kept this attribute
   */
  getAnyParentAttr(i) {
    const a = this._keptAttrs;
    for (let r = a.length - 1; r >= 0; r--)
      if (a[r].name === i) return a[r].value;
  }
  /**
   * Check whether any ancestor (or the current node) kept the given
   * attribute via `push(tag, attrs, ns, { keep: [...] })`.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAnyParentAttr(i) {
    const a = this._keptAttrs;
    for (let r = a.length - 1; r >= 0; r--)
      if (a[r].name === i) return !0;
    return !1;
  }
  /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */
  getPosition() {
    return this.path.length === 0 ? -1 : this.path[this.path.length - 1].position ?? 0;
  }
  /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */
  getCounter() {
    return this.path.length === 0 ? -1 : this.path[this.path.length - 1].counter ?? 0;
  }
  /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */
  getIndex() {
    return this.getPosition();
  }
  /**
   * Get current path depth.
   * @returns {number}
   */
  getDepth() {
    return this.path.length;
  }
  /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */
  toString(i, a = !0) {
    const r = i || this.separator;
    if (r === this.separator && a === !0) {
      if (this._pathStringCache !== null)
        return this._pathStringCache;
      const c = this.path.map(
        (d) => d.namespace ? `${d.namespace}:${d.tag}` : d.tag
      ).join(r);
      return this._pathStringCache = c, c;
    }
    return this.path.map(
      (c) => a && c.namespace ? `${c.namespace}:${c.tag}` : c.tag
    ).join(r);
  }
  /**
   * Get path as array of tag names.
   * @returns {string[]}
   */
  toArray() {
    return this.path.map((i) => i.tag);
  }
  /**
   * Reset the path to empty.
   */
  reset() {
    this._pathStringCache = null, this.path = [], this.siblingStacks = [], this._keptAttrs = [];
  }
  /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */
  matches(i) {
    const a = i.segments;
    return a.length === 0 ? !1 : i.hasDeepWildcard() ? this._matchWithDeepWildcard(a) : this._matchSimple(a);
  }
  /**
   * @private
   */
  _matchSimple(i) {
    if (this.path.length !== i.length)
      return !1;
    for (let a = 0; a < i.length; a++)
      if (!this._matchSegment(i[a], this.path[a], a === this.path.length - 1))
        return !1;
    return !0;
  }
  /**
   * @private
   */
  _matchWithDeepWildcard(i) {
    let a = this.path.length - 1, r = i.length - 1;
    for (; r >= 0 && a >= 0; ) {
      const u = i[r];
      if (u.type === "deep-wildcard") {
        if (r--, r < 0)
          return !0;
        const c = i[r];
        let d = !1;
        for (let h = a; h >= 0; h--)
          if (this._matchSegment(c, this.path[h], h === this.path.length - 1)) {
            a = h - 1, r--, d = !0;
            break;
          }
        if (!d)
          return !1;
      } else {
        if (!this._matchSegment(u, this.path[a], a === this.path.length - 1))
          return !1;
        a--, r--;
      }
    }
    return r < 0;
  }
  /**
   * @private
   */
  _matchSegment(i, a, r) {
    if (i.tag !== "*" && i.tag !== a.tag || i.namespace !== void 0 && i.namespace !== "*" && i.namespace !== a.namespace || i.attrName !== void 0 && (!r || !a.values || !(i.attrName in a.values) || i.attrValue !== void 0 && String(a.values[i.attrName]) !== String(i.attrValue)))
      return !1;
    if (i.position !== void 0) {
      if (!r)
        return !1;
      const u = a.counter ?? 0;
      if (i.position === "first" && u !== 0)
        return !1;
      if (i.position === "odd" && u % 2 !== 1)
        return !1;
      if (i.position === "even" && u % 2 !== 0)
        return !1;
      if (i.position === "nth" && u !== i.positionValue)
        return !1;
    }
    return !0;
  }
  /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */
  matchesAny(i) {
    return i.matchesAny(this);
  }
  /**
   * Create a snapshot of current state.
   * @returns {Object}
   */
  snapshot() {
    return {
      path: this.path.map((i) => ({ ...i })),
      siblingStacks: this.siblingStacks.map((i) => i && { counts: new Map(i.counts), total: i.total }),
      keptAttrs: this._keptAttrs.map((i) => ({ ...i }))
    };
  }
  /**
   * Restore state from snapshot.
   * @param {Object} snapshot
   */
  restore(i) {
    this._pathStringCache = null, this.path = i.path.map((a) => ({ ...a })), this.siblingStacks = i.siblingStacks.map((a) => a && { counts: new Map(a.counts), total: a.total }), this._keptAttrs = (i.keptAttrs || []).map((a) => ({ ...a }));
  }
  /**
   * Return the read-only {@link MatcherView} for this matcher.
   *
   * The same instance is returned on every call — no allocation occurs.
   * It always reflects the current parser state and is safe to pass to
   * user callbacks without risk of accidental mutation.
   *
   * @returns {MatcherView}
   *
   * @example
   * const view = matcher.readOnly();
   * // pass view to callbacks — it stays in sync automatically
   * view.matches(expr);       // ✓
   * view.getCurrentTag();     // ✓
   * // view.push(...)         // ✗ method does not exist — caught by TypeScript
   */
  readOnly() {
    return this._view;
  }
}
const wb = [
  {
    id: "html-script-open",
    description: "<script opening tag",
    pattern: /<script[\s>/]/i
  },
  {
    id: "html-script-close",
    description: "<\/script closing tag",
    pattern: /<\/script[\s>]/i
  },
  {
    id: "html-javascript-protocol",
    description: "javascript: URI scheme (with optional whitespace/encoding)",
    // Handles j&#x61;vascript:, j\u0061vascript:, and whitespace variants
    pattern: /j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i
  },
  {
    id: "html-vbscript-protocol",
    description: "vbscript: URI scheme",
    pattern: /vbscript[\t\n\r ]*:/i
  },
  {
    id: "html-data-html",
    description: "data:text/html URI — can execute scripts in browsers",
    pattern: /data[\t\n\r ]*:[\t\n\r ]*text\/html/i
  },
  {
    id: "html-data-xhtml",
    description: "data:application/xhtml+xml URI",
    pattern: /data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i
  },
  {
    id: "html-data-svg",
    description: "data:image/svg+xml URI — can execute scripts",
    pattern: /data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i
  },
  {
    id: "html-inline-event-handler",
    description: "Inline event handler attributes: onclick=, onerror=, onload=, etc.",
    // \bon ensures we match a word boundary so "phonetic=" is not caught
    pattern: /\bon\w{1,30}\s*=/i
  },
  {
    id: "html-entity-obfuscated-script",
    description: "HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)",
    // Entities include optional trailing semicolon: &#x3C; or &#x3C (both valid in HTML5)
    pattern: /(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i
  },
  {
    id: "html-entity-obfuscated-javascript",
    description: 'HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for "j")',
    pattern: /(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i
  },
  {
    id: "html-style-expression",
    description: "CSS expression() — IE-era code execution in style attributes",
    pattern: /style[\s\S]{0,20}expression\s*\(/i
  },
  {
    id: "html-object-embed",
    description: "<object or <embed tags that can load active content",
    pattern: /<(?:object|embed)[\s>/]/i
  },
  {
    id: "html-base-tag",
    description: "<base href= — can hijack all relative URLs on a page",
    pattern: /<base[\s>]/i
  },
  {
    id: "html-meta-refresh",
    description: '<meta http-equiv="refresh" — can redirect users',
    pattern: /<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i
  },
  {
    id: "html-srcdoc",
    description: "srcdoc= attribute on iframes — embeds HTML that can run scripts",
    pattern: /srcdoc\s*=/i
  },
  {
    id: "html-iframe",
    description: "<iframe tag",
    pattern: /<iframe[\s>/]/i
  },
  {
    id: "html-form",
    description: "<form tag — can be used for phishing / credential harvesting injection",
    pattern: /<form[\s>/]/i
  }
], Sb = [
  {
    id: "xml-cdata-injection",
    description: "CDATA section injection: <![CDATA[ breaks out of text node context",
    pattern: /<!\[CDATA\[/i
  },
  {
    id: "xml-cdata-close",
    description: "CDATA close sequence: ]]> can terminate an enclosing CDATA section",
    pattern: /\]\]>/
  },
  {
    id: "xml-processing-instruction",
    description: "XML processing instruction: <?xml-stylesheet or <?php etc.",
    pattern: /<\?(?:xml[\- ]|php|asp)/i
  },
  {
    id: "xml-doctype-injection",
    description: "DOCTYPE declaration embedded in content — can define entities",
    // Match <!DOCTYPE followed by end-of-string, whitespace, or [ (internal subset)
    pattern: /<!DOCTYPE(?:[\s[]|$)/i
  },
  {
    id: "xml-entity-system",
    description: "SYSTEM keyword — used in external entity declarations (XXE)",
    pattern: /\bSYSTEM\s+["']/i
  },
  {
    id: "xml-entity-public",
    description: "PUBLIC keyword — used in external entity declarations (XXE)",
    pattern: /\bPUBLIC\s+["']/i
  },
  {
    id: "xml-entity-declaration",
    description: "<!ENTITY declaration — defines entities, potential XXE or entity expansion",
    pattern: /<!ENTITY[\s%]/i
  },
  {
    id: "xml-billion-laughs",
    description: "Entity reference chaining / billion laughs: repeated &eX; style references",
    // Heuristic: 3+ consecutive entity refs suggests expansion attack
    pattern: /(?:&\w{1,20};){3,}/
  },
  {
    id: "xml-namespace-confusion",
    description: "xmlns: attribute injection — can redefine namespaces to confuse parsers",
    // pattern: /\bxmlns\s*(?::\w{1,40})?\s*=/i,
    pattern: /\bxmlns(?::\w{1,40})?\s*=/i
  },
  {
    id: "xml-comment-injection",
    description: "<!-- comment injection — can hide content from some parsers",
    pattern: /<!--/
  },
  {
    id: "xml-comment-close",
    description: "--> closes an enclosing XML comment",
    pattern: /-->/
  },
  {
    id: "xml-pi-close",
    description: "?> closes an enclosing processing instruction",
    pattern: /\?>/
  }
], ZE = [
  {
    id: "svg-script-element",
    description: "<script element inside SVG executes JavaScript",
    pattern: /<script[\s>/]/i
  },
  {
    id: "svg-xlink-href-javascript",
    description: "xlink:href with javascript: — classic SVG XSS via <a> or <use>",
    pattern: /xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i
  },
  {
    id: "svg-href-javascript",
    description: "href= with javascript: in SVG context (<a>, <animate>, etc.)",
    pattern: /href\s*=\s*["']?\s*javascript\s*:/i
  },
  {
    id: "svg-foreignobject",
    description: "<foreignObject embeds HTML inside SVG — can execute scripts",
    pattern: /<foreignObject[\s>/]/i
  },
  {
    id: "svg-use-external",
    description: "<use xlink:href or href pointing to external resource (non-fragment URL)",
    // Match <use with href= where the value starts with a non-# character (external URL)
    // [\"'][^#] catches quoted values not starting with #; [^\"'#\s>] catches unquoted
    pattern: /<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i
  },
  {
    id: "svg-animate-href",
    description: '<animate attributeName="href" — can dynamically change href to javascript:',
    pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i
  },
  {
    id: "svg-animate-xlinkhref",
    description: '<animate attributeName="xlink:href"',
    pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i
  },
  {
    id: "svg-set-javascript",
    description: '<set to="javascript:..." — sets an attribute to a javascript: URI',
    pattern: /<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i
  },
  {
    id: "svg-event-handler",
    description: "SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.",
    pattern: /\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i
  },
  {
    id: "svg-handler-generic",
    description: "Generic on* handler catch-all for SVG attributes",
    pattern: /\bon\w{1,30}\s*=/i
  },
  {
    id: "svg-filter-feimage",
    description: "<feImage href= — filter primitive that can load external resources",
    pattern: /<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i
  },
  {
    id: "svg-image-external",
    description: "<image xlink:href with http/https or javascript protocol",
    pattern: /<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i
  },
  {
    id: "svg-style-javascript",
    description: "style= attribute containing javascript: (e.g. background:url(javascript:...))",
    pattern: /style\s*=[\s\S]{0,60}javascript\s*:/i
  }
], _b = [
  {
    id: "sql-block-comment-open",
    description: "SQL block comment open: /* ... */ — unusual in legitimate user text",
    pattern: /\/\*/
  },
  {
    id: "sql-union-select",
    description: "UNION SELECT — most common SQL injection aggregation attack",
    pattern: /\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i
  },
  {
    id: "sql-drop-table",
    description: "DROP TABLE — destructive DDL injection",
    pattern: /\bDROP\s{1,20}TABLE\b/i
  },
  {
    id: "sql-drop-database",
    description: "DROP DATABASE — destructive DDL injection",
    pattern: /\bDROP\s{1,20}DATABASE\b/i
  },
  {
    id: "sql-insert-into",
    description: "INSERT INTO — data injection",
    pattern: /\bINSERT\s{1,20}INTO\b/i
  },
  {
    id: "sql-delete-from",
    description: "DELETE FROM — data deletion injection",
    pattern: /\bDELETE\s{1,20}FROM\b/i
  },
  {
    id: "sql-update-set",
    description: "UPDATE ... SET — data modification injection",
    // Allows arbitrary content between UPDATE and SET (table name, alias, etc.)
    pattern: /\bUPDATE\b[\s\S]{1,60}\bSET\b/i
  },
  {
    id: "sql-exec-xp",
    description: "EXEC xp_ — MSSQL extended stored procedure execution",
    pattern: /\bEXEC(?:UTE)?\s{1,20}xp_/i
  },
  {
    id: "sql-tautology-string",
    description: `Classic string tautology: ' OR '1'='1 or " OR "1"="1"`,
    // Last quote is optional — injection may truncate it: ' OR '1'='1--
    pattern: /'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i
  },
  {
    id: "sql-tautology-numeric",
    description: "Numeric tautology: OR 1=1",
    pattern: /\bOR\s{1,10}1\s*=\s*1\b/i
  },
  {
    id: "sql-always-true-zero",
    description: "Numeric tautology: OR 0=0",
    pattern: /\bOR\s{1,10}0\s*=\s*0\b/i
  },
  {
    id: "sql-sleep-benchmark",
    description: "Time-based blind injection: SLEEP() or BENCHMARK()",
    pattern: /\b(?:SLEEP|BENCHMARK)\s*\(/i
  },
  {
    id: "sql-waitfor-delay",
    description: "MSSQL time-based blind injection: WAITFOR DELAY",
    pattern: /\bWAITFOR\s{1,20}DELAY\b/i
  },
  {
    id: "sql-char-function",
    description: "CHAR() function — used to obfuscate injected strings",
    pattern: /\bCHAR\s*\(\s*\d{1,3}/i
  },
  {
    id: "sql-information-schema",
    description: "INFORMATION_SCHEMA — reconnaissance query for table/column enumeration",
    pattern: /\bINFORMATION_SCHEMA\b/i
  }
], QE = [
  {
    id: "shell-path-traversal-unix",
    description: "Unix path traversal: ../  — climbing the directory tree",
    pattern: /\.\.\//
  },
  {
    id: "shell-path-traversal-windows",
    description: "Windows path traversal: ..\\ — climbing the directory tree",
    pattern: /\.\.\\/
  },
  {
    id: "shell-path-traversal-encoded",
    description: "URL-encoded path traversal: %2e%2e or %2f variants",
    pattern: /%2e%2e|%2f\.\.|\.\.%2f/i
  },
  {
    id: "shell-null-byte",
    description: "Null byte injection: \\x00 or %00 — truncates strings in C-backed functions",
    pattern: /\x00|%00/
  },
  {
    id: "shell-semicolon",
    description: "Semicolon command separator: cmd1; cmd2",
    pattern: /;/
  },
  {
    id: "shell-pipe",
    description: "Pipe operator: cmd1 | cmd2",
    pattern: /\|/
  },
  {
    id: "shell-and-operator",
    description: "AND operator: cmd1 && cmd2",
    pattern: /&&/
  },
  {
    id: "shell-or-operator",
    description: "OR operator: cmd1 || cmd2",
    pattern: /\|\|/
  },
  {
    id: "shell-backtick",
    description: "Backtick command substitution: `cmd`",
    pattern: /`/
  },
  {
    id: "shell-dollar-paren",
    description: "Dollar-paren command substitution: $(cmd)",
    pattern: /\$\(/
  },
  {
    id: "shell-dollar-brace",
    description: "Dollar-brace variable expansion: ${var} — can be abused for injection",
    pattern: /\$\{/
  },
  {
    id: "shell-redirect-out",
    description: "Output redirection: cmd > file or cmd >> file",
    pattern: />{1,2}/
  },
  {
    id: "shell-redirect-in",
    description: "Input redirection: cmd < file",
    pattern: /</
  },
  {
    id: "shell-newline-injection",
    description: "Newline injection: \\n or \\r — can inject new shell commands",
    pattern: /[\n\r]/
  },
  {
    id: "shell-glob-star",
    description: "Glob expansion: * or ? — can expand to unintended files",
    // Only flag when combined with path separators to reduce false positives
    pattern: /[/\\][*?]/
  },
  {
    id: "shell-absolute-root",
    description: "Absolute root path injection: string starting with / or \\ (Windows UNC)",
    pattern: /^(?:\/|\\\\)/
  },
  {
    id: "shell-windows-drive",
    description: "Windows drive letter path injection: C:\\ or D:/",
    pattern: /^[a-zA-Z]:[/\\]/
  },
  {
    id: "shell-curl-wget",
    description: "curl/wget with URL or flags — can exfiltrate data or download payloads",
    // Require a URL scheme (http/https/ftp) or a flag (-) to reduce false positives
    // "curl is a tool" won't match; "curl http://..." or "curl -s ..." will
    pattern: /\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i
  }
], KE = [
  {
    id: "redos-nested-quantifier-plus",
    description: "Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.",
    // Matches any group containing a + quantifier, with an outer * or + — catches (a+)+, (.+b)*, etc.
    pattern: /\([^)]*\+[^)]*\)[+*]/
  },
  {
    id: "redos-nested-quantifier-star",
    description: "Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking",
    pattern: /\([^)]*\*[^)]*\)[*+]/
  },
  {
    id: "redos-nested-groups",
    description: "Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic",
    pattern: /\(\([^)]{0,40}\)[+*]\)[+*]/
  },
  {
    id: "redos-alternation-overlap",
    description: "Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths",
    // Detect repeated identical alternatives under a quantifier
    pattern: /\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/
  },
  {
    id: "redos-star-plus-concat",
    description: "(x*x)+ pattern — triggers super-linear backtracking",
    pattern: /\([^)]{0,10}\*[^)]{0,10}\)[+*]/
  },
  {
    id: "redos-dot-star-greedy",
    description: "(.*){n,} or (.+){n,} — repeated greedy dot quantifiers",
    pattern: /\(\.[*+]\)\{?\d/
  },
  {
    id: "redos-large-repetition",
    description: "Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking",
    // Matches { followed by 4+ digits (≥1000), then optional ,digits }
    pattern: /\{\d{4,}(?:,\d*)?\}/
  },
  {
    id: "redos-catastrophic-alternation",
    description: "Long alternation with many similar branches — polynomial backtracking risk",
    // Heuristic: 10+ pipe-separated alternatives in a single group
    pattern: /\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/
  }
], en = `["'\\s]*:`, FE = [
  // ─── MongoDB $ operator injection ────────────────────────────────────────
  {
    id: "nosql-where-operator",
    description: "$where — executes arbitrary JavaScript server-side in MongoDB",
    pattern: new RegExp(`\\$where${en}`, "i")
  },
  {
    id: "nosql-ne-operator",
    description: '$ne — "not equal" operator used to bypass equality checks',
    pattern: new RegExp(`\\$ne${en}`, "i")
  },
  {
    id: "nosql-gt-operator",
    description: '$gt — "greater than" used to bypass password/value checks',
    pattern: new RegExp(`\\$gte?${en}`, "i")
  },
  {
    id: "nosql-lt-operator",
    description: '$lt / $lte — "less than" bypass variants',
    pattern: new RegExp(`\\$lte?${en}`, "i")
  },
  {
    id: "nosql-regex-operator",
    description: "$regex — can be used to extract data character by character (blind injection)",
    pattern: new RegExp(`\\$regex${en}`, "i")
  },
  {
    id: "nosql-or-operator",
    description: "$or — logical OR; used to create always-true conditions",
    pattern: new RegExp(`\\$or${en}\\s*\\[`, "i")
  },
  {
    id: "nosql-and-operator",
    description: "$and — logical AND operator injection",
    pattern: new RegExp(`\\$and${en}\\s*\\[`, "i")
  },
  {
    id: "nosql-nor-operator",
    description: "$nor — logical NOR operator injection",
    pattern: new RegExp(`\\$nor${en}\\s*\\[`, "i")
  },
  {
    id: "nosql-exists-operator",
    description: "$exists — can enumerate fields to determine schema",
    pattern: new RegExp(`\\$exists${en}`, "i")
  },
  {
    id: "nosql-in-operator",
    description: "$in — matches any value in a list; can enumerate values",
    pattern: new RegExp(`\\$in${en}\\s*\\[`, "i")
  },
  {
    id: "nosql-expr-operator",
    description: "$expr — allows aggregation expressions in queries (MongoDB 3.6+)",
    pattern: new RegExp(`\\$expr${en}`, "i")
  },
  {
    id: "nosql-function-operator",
    description: "$function — executes arbitrary JavaScript in MongoDB 4.4+",
    pattern: new RegExp(`\\$function${en}`, "i")
  },
  {
    id: "nosql-accumulator-operator",
    description: "$accumulator — custom aggregation with arbitrary JS execution",
    pattern: new RegExp(`\\$accumulator${en}`, "i")
  },
  // ─── Prototype pollution ─────────────────────────────────────────────────
  {
    id: "nosql-proto-pollution",
    description: "__proto__ — prototype pollution via object key injection",
    pattern: /__proto__/
  },
  {
    id: "nosql-constructor-prototype",
    description: "constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)",
    // Matches dot-notation (obj.constructor.prototype) and JSON key adjacency
    // ("constructor": {"prototype": ...})
    pattern: /constructor[\s"':.,{\[]*prototype/i
  },
  {
    id: "nosql-proto-bracket",
    description: '["__proto__"] — bracket-notation prototype pollution',
    pattern: /\[["']__proto__["']\]/
  }
], JE = [
  // ─── CRLF / newline injection ─────────────────────────────────────────────
  {
    id: "log-crlf-injection",
    description: "CRLF injection: literal \\r or \\n embeds fake log lines",
    pattern: /[\r\n]/
  },
  {
    id: "log-url-encoded-crlf",
    description: "URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers",
    pattern: /%0[dDaA]/
  },
  {
    id: "log-unicode-newline",
    description: "Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)",
    pattern: /[\u2028\u2029]/
  },
  // ─── Log4Shell / JNDI injection (CVE-2021-44228) ─────────────────────────
  {
    id: "log-log4shell-jndi",
    description: "Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",
    pattern: /\$\{jndi\s*:/i
  },
  {
    id: "log-log4shell-obfuscated",
    description: "Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",
    // ${::- is the Log4j lookup-bypass escape sequence; presence alone is suspicious
    pattern: /\$\{::-/
  },
  {
    id: "log-log4j-lookup",
    description: "Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration",
    pattern: /\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i
  },
  // ─── Server-Side Template Injection (SSTI) in log messages ───────────────
  {
    id: "log-ssti-double-brace",
    description: "SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.",
    pattern: /\{\{[\s\S]{0,80}\}\}/
  },
  {
    id: "log-ssti-hash-brace",
    description: "SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB",
    pattern: /#\{[\s\S]{0,80}\}/
  },
  {
    id: "log-ssti-dollar-brace",
    description: "SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL",
    // Require that the ${...} content looks like an expression, not a plain variable name.
    // Flags if the content contains: . ( * + operators, or known SSTI keywords.
    // This avoids flagging ${PATH}, ${HOME} etc. (plain shell variables).
    pattern: /\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i
  },
  {
    id: "log-ssti-percent-tag",
    description: "SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP",
    pattern: /<%=[\s\S]{0,80}%>/
  },
  // ─── Null byte ────────────────────────────────────────────────────────────
  {
    id: "log-null-byte",
    description: "Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers",
    pattern: /\x00|%00/
  },
  // ─── ANSI escape injection ────────────────────────────────────────────────
  {
    id: "log-ansi-escape",
    description: "ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed",
    pattern: /\x1b\[/
  }
], PE = [
  {
    id: "sql-line-comment",
    description: "SQL line comment: -- followed by whitespace or end of string",
    pattern: /--(?:\s|$)/
  },
  {
    id: "sql-stacked-query",
    description: "Stacked queries: semicolon immediately followed by a SQL keyword",
    pattern: /;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i
  },
  {
    id: "sql-hex-encoding",
    description: "Hex-encoded string injection: 0x41414141 style (MySQL)",
    pattern: /\b0x[0-9a-f]{4,}/i
  }
], WE = [..._b, ...PE];
wb.label = "HTML";
Sb.label = "XML";
ZE.label = "SVG";
_b.label = "SQL";
WE.label = "SQL-STRICT";
QE.label = "SHELL";
KE.label = "REDOS";
FE.label = "NOSQL";
JE.label = "LOG";
function e2(n) {
  if (typeof n != "string")
    throw new TypeError(
      `is-unsafe: first argument must be a string, got ${typeof n}`
    );
}
function t2(n) {
  if (!(n instanceof RegExp)) {
    if (Array.isArray(n)) {
      if (n.length === 0)
        throw new TypeError("is-unsafe: context must not be an empty array");
      if (Array.isArray(n[0])) {
        for (const i of n)
          if (!Array.isArray(i) || i.length === 0)
            throw new TypeError(
              "is-unsafe: each context in the array must be a non-empty pattern array (PatternList)"
            );
      }
      return;
    }
    throw new TypeError(
      `is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: ${typeof n}`
    );
  }
}
function n2(n) {
  return n instanceof RegExp ? { lists: null, regex: n } : Array.isArray(n[0]) ? { lists: n, regex: null } : { lists: [n], regex: null };
}
function i2(n, i) {
  const a = i.label ?? "CUSTOM";
  for (const r of i)
    if (r.pattern.test(n))
      return { context: a, id: r.id, description: r.description, pattern: r.pattern };
  return null;
}
function o2(n, i) {
  e2(n), t2(i);
  const { lists: a, regex: r } = n2(i);
  if (r) return r.test(n);
  for (const u of a)
    if (i2(n, u) !== null) return !0;
  return !1;
}
function a2(n, i) {
  if (!n) return {};
  const a = i.attributesGroupName ? n[i.attributesGroupName] : n;
  if (!a) return {};
  const r = {};
  for (const u in a)
    if (u.startsWith(i.attributeNamePrefix)) {
      const c = u.substring(i.attributeNamePrefix.length);
      r[c] = a[u];
    } else
      r[u] = a[u];
  return r;
}
function l2(n) {
  if (!n || typeof n != "string") return;
  const i = n.indexOf(":");
  if (i !== -1 && i > 0) {
    const a = n.substring(0, i);
    if (a !== "xmlns")
      return a;
  }
}
class r2 {
  constructor(i, a) {
    this.options = i, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = d2, this.parseTextData = s2, this.resolveNameSpace = u2, this.buildAttributesMap = f2, this.isItStopNode = m2, this.replaceEntitiesValue = g2, this.readStopNodeData = b2, this.saveTextToParentTag = p2, this.addChild = h2, this.ignoreAttributesFn = YE(this.options.ignoreAttributes), this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.doctypefound = !1;
    let r = { ...db };
    this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : (typeof this.options.htmlEntities == "object" ? r = this.options.htmlEntities : this.options.htmlEntities === !0 && (r = { ...hE, ...dE }), this.entityDecoder = new vE({
      namedEntities: { ...r, ...a },
      numericAllowed: this.options.htmlEntities,
      limit: {
        maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
        maxExpandedLength: this.options.processEntities.maxExpandedLength,
        applyLimitsTo: this.options.processEntities.appliesTo
      },
      // onExternalEntity: (name, value) => isUnsafe(value) ? 'block' : 'allow',
      onInputEntity: (c, d) => (
        //TODO: VALID_CONTEXTS.HTML should be set only if this.options.htmlEntities
        o2(d, [wb, Sb]) ? Nu.BLOCK : Nu.ALLOW
      )
      //postCheck: resolved => resolved
    })), this.matcher = new GE(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new $E();
    const u = this.options.stopNodes;
    if (u && u.length > 0) {
      for (let c = 0; c < u.length; c++) {
        const d = u[c];
        typeof d == "string" ? this.stopNodeExpressionsSet.add(new Uy(d)) : d instanceof Uy && this.stopNodeExpressionsSet.add(d);
      }
      this.stopNodeExpressionsSet.seal();
    }
  }
}
function s2(n, i, a, r, u, c, d) {
  const h = this.options;
  if (n !== void 0 && (h.trimValues && !r && (n = n.trim()), n.length > 0)) {
    d || (n = this.replaceEntitiesValue(n, i, a));
    const p = h.jPath ? a.toString() : a, m = h.tagValueProcessor(i, n, p, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : h.trimValues || n.trim() === n ? gh(n, h.parseTagValue, h.numberParseOptions) : n;
  }
}
function u2(n) {
  if (this.options.removeNSPrefix) {
    const i = n.split(":"), a = n.charAt(0) === "/" ? "/" : "";
    if (i[0] === "xmlns")
      return "";
    i.length === 2 && (n = a + i[1]);
  }
  return n;
}
const c2 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function f2(n, i, a, r = !1) {
  const u = this.options;
  if (r === !0 || u.ignoreAttributes !== !0 && typeof n == "string") {
    const c = eE(n, c2), d = c.length, h = {}, p = new Array(d);
    let m = !1;
    const y = {};
    for (let x = 0; x < d; x++) {
      const w = this.resolveNameSpace(c[x][1]), _ = c[x][4];
      if (w.length && _ !== void 0) {
        let N = _;
        u.trimValues && (N = N.trim()), N = this.replaceEntitiesValue(N, a, this.readonlyMatcher), p[x] = N, y[w] = N, m = !0;
      }
    }
    m && typeof i == "object" && i.updateCurrent && i.updateCurrent(y);
    const g = u.jPath ? i.toString() : this.readonlyMatcher;
    let v = !1;
    for (let x = 0; x < d; x++) {
      const w = this.resolveNameSpace(c[x][1]);
      if (this.ignoreAttributesFn(w, g)) continue;
      let _ = u.attributeNamePrefix + w;
      if (w.length)
        if (u.transformAttributeName && (_ = u.transformAttributeName(_)), _ = Eb(_, u), c[x][4] !== void 0) {
          const N = p[x], C = u.attributeValueProcessor(w, N, g);
          C == null ? h[_] = N : typeof C != typeof N || C !== N ? h[_] = C : h[_] = gh(N, u.parseAttributeValue, u.numberParseOptions), v = !0;
        } else u.allowBooleanAttributes && (h[_] = !0, v = !0);
    }
    if (!v) return;
    if (u.attributesGroupName && !u.preserveOrder) {
      const x = {};
      return x[u.attributesGroupName] = h, x;
    }
    return h;
  }
}
const d2 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const i = new Zi("!xml");
  let a = i, r = "";
  this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.doctypefound = !1;
  const u = this.options, c = new ME(u.processEntities), d = n.length;
  for (let h = 0; h < d; h++)
    if (n[h] === "<") {
      const m = n.charCodeAt(h + 1);
      if (m === 47) {
        const y = ka(n, ">", h, "Closing Tag is not closed.");
        let g = n.substring(h + 2, y).trim();
        if (u.removeNSPrefix) {
          const x = g.indexOf(":");
          x !== -1 && (g = g.substr(x + 1));
        }
        g = Xd(u.transformTagName, g, "", u).tagName, a && (r = this.saveTextToParentTag(r, a, this.readonlyMatcher));
        const v = this.matcher.getCurrentTag();
        if (g && u.unpairedTagsSet.has(g))
          throw new Error(`Unpaired tag can not be used as closing tag: </${g}>`);
        v && u.unpairedTagsSet.has(v) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, a = this.tagsNodeStack.pop() || i, u.captureMetaData && a && a.addEndIndex(y + 1), r = "", h = y;
      } else if (m === 63) {
        let y = hh(n, h, !1, "?>");
        if (!y) throw new Error("Pi Tag is not closed.");
        r = this.saveTextToParentTag(r, a, this.readonlyMatcher);
        const g = this.buildAttributesMap(y.tagExp, this.matcher, y.tagName, !0);
        if (g) {
          const v = g[this.options.attributeNamePrefix + "version"];
          this.entityDecoder.setXmlVersion(Number(v) || 1), c.setXmlVersion(Number(v) || 1);
        }
        if (!(u.ignoreDeclaration && y.tagName === "?xml" || u.ignorePiTags)) {
          const v = new Zi(y.tagName);
          v.add(u.textNodeName, ""), y.tagName !== y.tagExp && y.attrExpPresent && u.ignoreAttributes !== !0 && (v[":@"] = g), this.addChild(a, v, this.readonlyMatcher, h), u.captureMetaData && a.addEndIndex(y.closeIndex + 2);
        }
        h = y.closeIndex + 1;
      } else if (m === 33 && n.charCodeAt(h + 2) === 45 && n.charCodeAt(h + 3) === 45) {
        const y = ka(n, "-->", h + 4, "Comment is not closed.");
        if (u.commentPropName) {
          const g = n.substring(h + 4, y - 2);
          r = this.saveTextToParentTag(r, a, this.readonlyMatcher), a.add(u.commentPropName, [{ [u.textNodeName]: g }]);
        }
        h = y;
      } else if (m === 33 && n.charCodeAt(h + 2) === 68) {
        if (this.doctypefound) throw new Error("Multiple DOCTYPE declarations found.");
        this.doctypefound = !0;
        const y = c.readDocType(n, h);
        this.entityDecoder.addInputEntities(y.entities), h = y.i;
      } else if (m === 33 && n.charCodeAt(h + 2) === 91) {
        const y = ka(n, "]]>", h, "CDATA is not closed.") - 2, g = n.substring(h + 9, y);
        r = this.saveTextToParentTag(r, a, this.readonlyMatcher);
        let v = this.parseTextData(g, a.tagname, this.readonlyMatcher, !0, !1, !0, !0);
        v == null && (v = ""), u.cdataPropName ? a.add(u.cdataPropName, [{ [u.textNodeName]: g }]) : a.add(u.textNodeName, v), h = y + 2;
      } else {
        let y = hh(n, h, u.removeNSPrefix);
        if (!y) {
          const H = n.substring(Math.max(0, h - 50), Math.min(d, h + 50));
          throw new Error(`readTagExp returned undefined at position ${h}. Context: "${H}"`);
        }
        let g = y.tagName;
        const v = y.rawTagName;
        let x = y.tagExp, w = y.attrExpPresent, _ = y.closeIndex;
        if ({ tagName: g, tagExp: x } = Xd(u.transformTagName, g, x, u), u.strictReservedNames && (g === u.commentPropName || g === u.cdataPropName || g === u.textNodeName || g === u.attributesGroupName))
          throw new Error(`Invalid tag name: ${g}`);
        a && r && a.tagname !== "!xml" && (r = this.saveTextToParentTag(r, a, this.readonlyMatcher, !1));
        const N = a;
        N && u.unpairedTagsSet.has(N.tagname) && (a = this.tagsNodeStack.pop(), this.matcher.pop());
        let C = !1;
        x.length > 0 && x.lastIndexOf("/") === x.length - 1 && (C = !0, g[g.length - 1] === "/" ? (g = g.substr(0, g.length - 1), x = g) : x = x.substr(0, x.length - 1), w = g !== x);
        let U = null, T;
        T = l2(v), g !== i.tagname && this.matcher.push(g, {}, T), g !== x && w && (U = this.buildAttributesMap(x, this.matcher, g), U && a2(U, u)), g !== i.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
        const E = h;
        if (this.isCurrentNodeStopNode) {
          let H = "";
          if (C)
            h = y.closeIndex;
          else if (u.unpairedTagsSet.has(g))
            h = y.closeIndex;
          else {
            const R = this.readStopNodeData(n, v, _ + 1);
            if (!R) throw new Error(`Unexpected end of ${v}`);
            h = R.i, H = R.tagContent;
          }
          const D = new Zi(g);
          U && (D[":@"] = U), D.add(u.textNodeName, H), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(a, D, this.readonlyMatcher, E), u.captureMetaData && a.addEndIndex(h + 1);
        } else {
          if (C) {
            ({ tagName: g, tagExp: x } = Xd(u.transformTagName, g, x, u));
            const H = new Zi(g);
            U && (H[":@"] = U), this.addChild(a, H, this.readonlyMatcher, E), u.captureMetaData && a.addEndIndex(_ + 1), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
          } else if (u.unpairedTagsSet.has(g)) {
            const H = new Zi(g);
            U && (H[":@"] = U), this.addChild(a, H, this.readonlyMatcher, E), u.captureMetaData && a.addEndIndex(y.closeIndex + 1), this.matcher.pop(), this.isCurrentNodeStopNode = !1, h = y.closeIndex;
            continue;
          } else {
            const H = new Zi(g);
            if (this.tagsNodeStack.length > u.maxNestedTags)
              throw new Error("Maximum nested tags exceeded");
            this.tagsNodeStack.push(a), U && (H[":@"] = U), this.addChild(a, H, this.readonlyMatcher, E), a = H;
          }
          r = "", h = _;
        }
      }
    } else
      r += n[h];
  return i.child;
};
function h2(n, i, a, r) {
  this.options.captureMetaData || (r = void 0);
  const u = this.options.jPath ? a.toString() : a, c = this.options.updateTag(i.tagname, u, i[":@"]);
  c === !1 || (typeof c == "string" && (i.tagname = c), n.addChild(i, r));
}
function g2(n, i, a) {
  const r = this.options.processEntities;
  if (!r || !r.enabled)
    return n;
  if (r.allowedTags) {
    const u = this.options.jPath ? a.toString() : a;
    if (!(Array.isArray(r.allowedTags) ? r.allowedTags.includes(i) : r.allowedTags(i, u)))
      return n;
  }
  if (r.tagFilter) {
    const u = this.options.jPath ? a.toString() : a;
    if (!r.tagFilter(i, u))
      return n;
  }
  return this.entityDecoder.decode(n);
}
function p2(n, i, a, r) {
  return n && (r === void 0 && (r = i.child.length === 0), n = this.parseTextData(
    n,
    i.tagname,
    a,
    !1,
    i[":@"] ? Object.keys(i[":@"]).length !== 0 : !1,
    r
  ), n !== void 0 && n !== "" && i.add(this.options.textNodeName, n), n = ""), n;
}
function m2() {
  return this.stopNodeExpressionsSet.size === 0 ? !1 : this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function y2(n, i, a = ">") {
  let r = 0;
  const u = n.length, c = a.charCodeAt(0), d = a.length > 1 ? a.charCodeAt(1) : -1;
  let h = "", p = i;
  for (let m = i; m < u; m++) {
    const y = n.charCodeAt(m);
    if (r)
      y === r && (r = 0);
    else if (y === 34 || y === 39)
      r = y;
    else if (y === c)
      if (d !== -1) {
        if (n.charCodeAt(m + 1) === d)
          return h += n.substring(p, m), { data: h, index: m };
      } else
        return h += n.substring(p, m), { data: h, index: m };
    else y === 9 && !r && (h += n.substring(p, m) + " ", p = m + 1);
  }
}
function ka(n, i, a, r) {
  const u = n.indexOf(i, a);
  if (u === -1)
    throw new Error(r);
  return u + i.length - 1;
}
function v2(n, i, a, r) {
  const u = n.indexOf(i, a);
  if (u === -1) throw new Error(r);
  return u;
}
function hh(n, i, a, r = ">") {
  const u = y2(n, i + 1, r);
  if (!u) return;
  let c = u.data;
  const d = u.index, h = c.search(/\s/);
  let p = c, m = !0;
  h !== -1 && (p = c.substring(0, h), c = c.substring(h + 1).trimStart());
  const y = p;
  if (a) {
    const g = p.indexOf(":");
    g !== -1 && (p = p.substr(g + 1), m = p !== u.data.substr(g + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: d,
    attrExpPresent: m,
    rawTagName: y
  };
}
function b2(n, i, a) {
  const r = a;
  let u = 1;
  const c = n.length;
  for (; a < c; a++)
    if (n[a] === "<") {
      const d = n.charCodeAt(a + 1);
      if (d === 47) {
        const h = v2(n, ">", a, `${i} is not closed`);
        if (n.substring(a + 2, h).trim() === i && (u--, u === 0))
          return {
            tagContent: n.substring(r, a),
            i: h
          };
        a = h;
      } else if (d === 63)
        a = ka(n, "?>", a + 1, "StopNode is not closed.");
      else if (d === 33 && n.charCodeAt(a + 2) === 45 && n.charCodeAt(a + 3) === 45)
        a = ka(n, "-->", a + 3, "StopNode is not closed.");
      else if (d === 33 && n.charCodeAt(a + 2) === 91)
        a = ka(n, "]]>", a, "StopNode is not closed.") - 2;
      else {
        const h = hh(n, a, !1);
        h && ((h && h.tagName) === i && h.tagExp[h.tagExp.length - 1] !== "/" && u++, a = h.closeIndex);
      }
    }
}
function gh(n, i, a) {
  if (i && typeof n == "string") {
    const r = n.trim();
    return r === "true" ? !0 : r === "false" ? !1 : LE(n, a);
  } else
    return tE(n) ? n : "";
}
function Xd(n, i, a, r) {
  if (n) {
    const u = n(i);
    a === i && (a = u), i = u;
  }
  return i = Eb(i, r), { tagName: i, tagExp: a };
}
function Eb(n, i) {
  if (fb.includes(n))
    throw new Error(`[SECURITY] Invalid name: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
  return Hh.includes(n) ? i.onDangerousProperty(n) : n;
}
const Gd = Zi.getMetaDataSymbol();
function x2(n, i) {
  if (!n || typeof n != "object") return {};
  if (!i) return n;
  const a = {};
  for (const r in n)
    if (r.startsWith(i)) {
      const u = r.substring(i.length);
      a[u] = n[r];
    } else
      a[r] = n[r];
  return a;
}
function w2(n, i, a, r) {
  return Nb(n, i, a, r);
}
function Nb(n, i, a, r) {
  let u;
  const c = {};
  for (let d = 0; d < n.length; d++) {
    const h = n[d], p = S2(h);
    if (p !== void 0 && p !== i.textNodeName) {
      const m = x2(
        h[":@"] || {},
        i.attributeNamePrefix
      );
      a.push(p, m);
    }
    if (p === i.textNodeName)
      u === void 0 ? u = h[p] : u += "" + h[p];
    else {
      if (p === void 0)
        continue;
      if (h[p]) {
        let m = Nb(h[p], i, a, r);
        const y = E2(m, i);
        if (Object.keys(m).length === 0 && i.alwaysCreateTextNode && (m[i.textNodeName] = ""), h[":@"] ? _2(m, h[":@"], r, i) : Object.keys(m).length === 1 && m[i.textNodeName] !== void 0 && !i.alwaysCreateTextNode ? m = m[i.textNodeName] : Object.keys(m).length === 0 && (i.alwaysCreateTextNode ? m[i.textNodeName] = "" : m = ""), h[Gd] !== void 0 && typeof m == "object" && m !== null && (m[Gd] = h[Gd]), c[p] !== void 0 && Object.prototype.hasOwnProperty.call(c, p))
          Array.isArray(c[p]) || (c[p] = [c[p]]), c[p].push(m);
        else {
          const g = i.jPath ? r.toString() : r;
          i.isArray(p, g, y) ? c[p] = [m] : c[p] = m;
        }
        p !== void 0 && p !== i.textNodeName && a.pop();
      }
    }
  }
  return typeof u == "string" ? u.length > 0 && (c[i.textNodeName] = u) : u !== void 0 && (c[i.textNodeName] = u), c;
}
function S2(n) {
  const i = Object.keys(n);
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (r !== ":@") return r;
  }
}
function _2(n, i, a, r) {
  if (i) {
    const u = Object.keys(i), c = u.length;
    for (let d = 0; d < c; d++) {
      const h = u[d], p = h.startsWith(r.attributeNamePrefix) ? h.substring(r.attributeNamePrefix.length) : h, m = r.jPath ? a.toString() + "." + p : a;
      r.isArray(h, m, !0, !0) ? n[h] = [i[h]] : n[h] = i[h];
    }
  }
}
function E2(n, i) {
  const { textNodeName: a } = i, r = Object.keys(n).length;
  return !!(r === 0 || r === 1 && (n[a] || typeof n[a] == "boolean" || n[a] === 0));
}
class N2 {
  constructor(i) {
    this.externalEntities = {}, this.options = wE(i);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Uint8Array} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(i, a) {
    if (typeof i != "string" && i.toString)
      i instanceof Uint8Array && !(typeof Buffer < "u" && Buffer.isBuffer(i)) ? i = new TextDecoder("utf-8", { ignoreBOM: !0 }).decode(i) : i = i.toString();
    else if (typeof i != "string")
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (a) {
      a === !0 && (a = {});
      const c = iE(i, a);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const r = new r2(this.options, this.externalEntities), u = r.parseXml(i);
    return this.options.preserveOrder || u === void 0 ? u : w2(u, this.options, r.matcher, r.readonlyMatcher);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(i, a) {
    if (a.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (i.indexOf("&") !== -1 || i.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (a === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[i] = a;
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return Zi.getMetaDataSymbol();
  }
}
const T2 = new N2({
  preserveOrder: !0,
  ignoreAttributes: !1,
  attributeNamePrefix: "",
  parseAttributeValue: !1,
  parseTagValue: !1,
  trimValues: !0,
  commentPropName: "#comment",
  processEntities: !0,
  htmlEntities: !0
});
function Yt(n) {
  for (const i of Object.keys(n)) if (i !== ":@") return i;
  return "";
}
function Tb(n) {
  return n[Yt(n)] ?? [];
}
function gi(n) {
  return { ...n[":@"] ?? {} };
}
function Xn(n) {
  return Tb(n).filter((i) => {
    const a = Yt(i);
    return a !== "#text" && a !== "#comment" && !a.startsWith("?");
  });
}
function yu(n) {
  return Tb(n).filter((i) => Yt(i) === "#text").map((i) => String(i["#text"])).join("").trim();
}
class By extends Error {
}
function Uh(n) {
  let i;
  try {
    i = T2.parse(n, !0);
  } catch (r) {
    throw new By(`Invalid XML: ${r.message}`);
  }
  const a = i.find((r) => Yt(r) === "root");
  if (!a) throw new By("Missing <root> element");
  return a;
}
const C2 = {
  input_port: "input",
  output_port: "output",
  inout_port: "inout"
}, A2 = /* @__PURE__ */ new Set(["Action", "Condition", "Control", "Decorator", "SubTree"]);
function M2(n, i) {
  const a = Yt(n);
  if (!A2.has(a)) return null;
  const r = gi(n);
  if (!r.ID) return null;
  const u = [];
  let c, d;
  for (const p of Xn(n)) {
    const m = Yt(p), y = C2[m];
    if (y) {
      const g = gi(p);
      if (!g.name) continue;
      const v = { name: g.name, direction: y };
      g.type && (v.type = g.type), g.default !== void 0 && (v.default = g.default);
      const x = yu(p) || g.description;
      x && (v.description = x), u.push(v);
    } else if (m === "description")
      c = yu(p);
    else if (m === "MetaFields") {
      d = {};
      for (const g of Xn(p)) d[Yt(g)] = yu(g);
    }
  }
  c ??= r.description ?? d?.description;
  const h = { id: r.ID, category: a, ports: u, source: i };
  return c && (h.description = c), d && Object.keys(d).length && (h.metadata = d), h;
}
function Bh(n, i) {
  const a = [];
  for (const r of Xn(n))
    if (Yt(r) === "TreeNodesModel")
      for (const u of Xn(r)) {
        const c = M2(u, i);
        c && a.push(c);
      }
  return a;
}
function O2(n, i) {
  const a = /* @__PURE__ */ new Map();
  for (const r of Xn(n))
    if (Yt(r) === "Enums")
      for (const u of Xn(r)) {
        if (Yt(u) !== "Enum") {
          i.push(`Unknown element <${Yt(u)}> in <Enums> was ignored`);
          continue;
        }
        const c = gi(u).type;
        if (!c) {
          i.push("<Enum> without a type was ignored");
          continue;
        }
        if (a.has(c)) {
          i.push(`Enum "${c}" is defined more than once; the first definition is used`);
          continue;
        }
        const d = { type: c, values: [] }, h = gi(u).description;
        h && (d.description = h);
        for (const p of Xn(u)) {
          const m = gi(p);
          if (Yt(p) !== "Value" || !m.name) {
            i.push(`Enum "${c}": only <Value name="..."> elements are allowed`);
            continue;
          }
          if (d.values.some((v) => v.name === m.name)) {
            i.push(`Enum "${c}": value "${m.name}" is listed more than once`);
            continue;
          }
          const y = { name: m.name };
          m.value !== void 0 && (/^-?\d+$/.test(m.value.trim()) ? y.value = Number(m.value) : i.push(`Enum "${c}": value "${m.name}" has a non-integer value="${m.value}"`));
          const g = yu(p);
          g && (y.description = g), d.values.push(y);
        }
        d.values.length || i.push(`Enum "${c}" has no values`), a.set(c, d);
      }
  return [...a.values()];
}
function z2(n) {
  const i = Uh(n), a = [], r = O2(i, a);
  return { models: Bh(i, "spec"), enums: r, warnings: a };
}
function VO(n) {
  return Bh(Uh(n), "spec");
}
const R2 = /* @__PURE__ */ new Set(["Action", "Condition", "Control", "Decorator"]);
function D2(n, i) {
  const a = Uh(n), r = gi(a), u = [];
  r.BTCPP_format && r.BTCPP_format !== "4" && u.push(`BTCPP_format="${r.BTCPP_format}"; the editor writes format 4`);
  const c = Bh(a, "tree"), d = new Map(c.filter((m) => m.category === "SubTree").map((m) => [m.id, m])), h = [], p = [];
  for (const m of Xn(a)) {
    const y = Yt(m);
    if (y === "include") {
      const g = gi(m).path;
      g && h.push(g);
    } else if (y === "BehaviorTree") {
      const g = gi(m), v = g.ID;
      if (!v) {
        u.push("<BehaviorTree> without an ID was ignored");
        continue;
      }
      delete g.ID;
      const x = g._description;
      delete g._description;
      let w = 0;
      const _ = () => `n${++w}`, N = Xn(m);
      N.length > 1 && u.push(`Tree "${v}" has ${N.length} root nodes; only the first is kept`);
      const C = {
        id: v,
        file: i,
        ports: d.get(v)?.ports ?? [],
        attrs: g,
        root: N.length ? Cb(N[0], _) : null
      };
      x && (C.description = x), d.delete(v), p.push(C);
    } else y === "Enums" ? u.push("<Enums> belongs in the node spec; enums in tree files are ignored and dropped on save") : y !== "TreeNodesModel" && u.push(`Unknown element <${y}> under <root> will be dropped on save`);
  }
  return {
    mainTree: r.main_tree_to_execute,
    includes: h,
    trees: p,
    foreignSubtreeModels: [...d.values()],
    nodeModels: c.filter((m) => m.category !== "SubTree"),
    warnings: u
  };
}
function Cb(n, i) {
  let a = Yt(n);
  const r = gi(n);
  return R2.has(a) && r.ID && (a = r.ID, delete r.ID), {
    uid: i(),
    type: a,
    attrs: r,
    children: Xn(n).map((u) => Cb(u, i))
  };
}
function Ly(n) {
  const i = [];
  let a = [], r = [];
  if (n.spec) {
    const g = n.spec.path;
    try {
      const v = z2(n.spec.xml);
      a = v.models, r = v.enums;
      for (const x of v.warnings) i.push({ severity: "warning", message: x, file: g });
      i.push(...H2(a, r, g));
    } catch (v) {
      i.push({ severity: "error", message: v.message, file: n.spec.path });
    }
  }
  const u = [], c = [], d = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  for (const { path: g, xml: v } of n.files) {
    const x = { path: g, includes: [], treeIds: [] };
    u.push(x);
    let w;
    try {
      w = D2(v, g);
    } catch (_) {
      x.readOnlyReason = _.message, i.push({ severity: "error", message: _.message, file: g });
      continue;
    }
    for (const _ of w.warnings) i.push({ severity: "warning", message: _, file: g });
    x.mainTree = w.mainTree, x.includes = w.includes;
    for (const _ of w.trees) {
      const N = d.get(_.id);
      if (N) {
        x.readOnlyReason = `Tree ID "${_.id}" is already defined in ${N}`, i.push({ severity: "error", message: x.readOnlyReason, file: g, treeId: _.id });
        continue;
      }
      d.set(_.id, g), x.treeIds.push(_.id), c.push(_);
    }
    for (const _ of w.nodeModels) h.has(_.id) || h.set(_.id, _);
    for (const _ of w.foreignSubtreeModels) {
      const N = c.find((C) => C.id === _.id);
      N && N.ports.length === 0 && (N.ports = _.ports);
    }
  }
  const p = new Set(a.map((g) => g.id)), m = [...h.values()].filter((g) => !p.has(g.id));
  m.length && i.push({
    severity: "info",
    message: `${m.length} node type(s) are only declared in tree files (${m.slice(0, 5).map((g) => g.id).join(", ")}${m.length > 5 ? ", ..." : ""}); add them to ${n.specPath ?? n.spec?.path ?? "the node spec"}`
  });
  const y = [...a, ...m];
  return { trees: c, specModels: y, specEnums: r, models: _u(y, c), files: u, diagnostics: i };
}
function H2(n, i, a) {
  const r = new Map(i.map((c) => [c.type, c])), u = [];
  for (const c of n)
    for (const d of c.ports) {
      const h = d.default ? K_(d.type, d.default, r) : void 0;
      h && u.push({ severity: "warning", message: `${c.id}: default "${d.default}" of port "${d.name}" is ${h}`, file: a });
    }
  return u;
}
function ut(n) {
  if (typeof n == "string" || typeof n == "number") return "" + n;
  let i = "";
  if (Array.isArray(n))
    for (let a = 0, r; a < n.length; a++)
      (r = ut(n[a])) !== "" && (i += (i && " ") + r);
  else
    for (let a in n)
      n[a] && (i += (i && " ") + a);
  return i;
}
var k2 = { value: () => {
} };
function Vu() {
  for (var n = 0, i = arguments.length, a = {}, r; n < i; ++n) {
    if (!(r = arguments[n] + "") || r in a || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    a[r] = [];
  }
  return new vu(a);
}
function vu(n) {
  this._ = n;
}
function U2(n, i) {
  return n.trim().split(/^|\s+/).map(function(a) {
    var r = "", u = a.indexOf(".");
    if (u >= 0 && (r = a.slice(u + 1), a = a.slice(0, u)), a && !i.hasOwnProperty(a)) throw new Error("unknown type: " + a);
    return { type: a, name: r };
  });
}
vu.prototype = Vu.prototype = {
  constructor: vu,
  on: function(n, i) {
    var a = this._, r = U2(n + "", a), u, c = -1, d = r.length;
    if (arguments.length < 2) {
      for (; ++c < d; ) if ((u = (n = r[c]).type) && (u = B2(a[u], n.name))) return u;
      return;
    }
    if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
    for (; ++c < d; )
      if (u = (n = r[c]).type) a[u] = jy(a[u], n.name, i);
      else if (i == null) for (u in a) a[u] = jy(a[u], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, i = this._;
    for (var a in i) n[a] = i[a].slice();
    return new vu(n);
  },
  call: function(n, i) {
    if ((u = arguments.length - 2) > 0) for (var a = new Array(u), r = 0, u, c; r < u; ++r) a[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    for (c = this._[n], r = 0, u = c.length; r < u; ++r) c[r].value.apply(i, a);
  },
  apply: function(n, i, a) {
    if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    for (var r = this._[n], u = 0, c = r.length; u < c; ++u) r[u].value.apply(i, a);
  }
};
function B2(n, i) {
  for (var a = 0, r = n.length, u; a < r; ++a)
    if ((u = n[a]).name === i)
      return u.value;
}
function jy(n, i, a) {
  for (var r = 0, u = n.length; r < u; ++r)
    if (n[r].name === i) {
      n[r] = k2, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return a != null && n.push({ name: i, value: a }), n;
}
var ph = "http://www.w3.org/1999/xhtml";
const Vy = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ph,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Iu(n) {
  var i = n += "", a = i.indexOf(":");
  return a >= 0 && (i = n.slice(0, a)) !== "xmlns" && (n = n.slice(a + 1)), Vy.hasOwnProperty(i) ? { space: Vy[i], local: n } : n;
}
function L2(n) {
  return function() {
    var i = this.ownerDocument, a = this.namespaceURI;
    return a === ph && i.documentElement.namespaceURI === ph ? i.createElement(n) : i.createElementNS(a, n);
  };
}
function j2(n) {
  return function() {
    return this.ownerDocument.createElementNS(n.space, n.local);
  };
}
function Ab(n) {
  var i = Iu(n);
  return (i.local ? j2 : L2)(i);
}
function V2() {
}
function Lh(n) {
  return n == null ? V2 : function() {
    return this.querySelector(n);
  };
}
function I2(n) {
  typeof n != "function" && (n = Lh(n));
  for (var i = this._groups, a = i.length, r = new Array(a), u = 0; u < a; ++u)
    for (var c = i[u], d = c.length, h = r[u] = new Array(d), p, m, y = 0; y < d; ++y)
      (p = c[y]) && (m = n.call(p, p.__data__, y, c)) && ("__data__" in p && (m.__data__ = p.__data__), h[y] = m);
  return new nn(r, this._parents);
}
function q2(n) {
  return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
}
function Y2() {
  return [];
}
function Mb(n) {
  return n == null ? Y2 : function() {
    return this.querySelectorAll(n);
  };
}
function $2(n) {
  return function() {
    return q2(n.apply(this, arguments));
  };
}
function X2(n) {
  typeof n == "function" ? n = $2(n) : n = Mb(n);
  for (var i = this._groups, a = i.length, r = [], u = [], c = 0; c < a; ++c)
    for (var d = i[c], h = d.length, p, m = 0; m < h; ++m)
      (p = d[m]) && (r.push(n.call(p, p.__data__, m, d)), u.push(p));
  return new nn(r, u);
}
function Ob(n) {
  return function() {
    return this.matches(n);
  };
}
function zb(n) {
  return function(i) {
    return i.matches(n);
  };
}
var G2 = Array.prototype.find;
function Z2(n) {
  return function() {
    return G2.call(this.children, n);
  };
}
function Q2() {
  return this.firstElementChild;
}
function K2(n) {
  return this.select(n == null ? Q2 : Z2(typeof n == "function" ? n : zb(n)));
}
var F2 = Array.prototype.filter;
function J2() {
  return Array.from(this.children);
}
function P2(n) {
  return function() {
    return F2.call(this.children, n);
  };
}
function W2(n) {
  return this.selectAll(n == null ? J2 : P2(typeof n == "function" ? n : zb(n)));
}
function eN(n) {
  typeof n != "function" && (n = Ob(n));
  for (var i = this._groups, a = i.length, r = new Array(a), u = 0; u < a; ++u)
    for (var c = i[u], d = c.length, h = r[u] = [], p, m = 0; m < d; ++m)
      (p = c[m]) && n.call(p, p.__data__, m, c) && h.push(p);
  return new nn(r, this._parents);
}
function Rb(n) {
  return new Array(n.length);
}
function tN() {
  return new nn(this._enter || this._groups.map(Rb), this._parents);
}
function Cu(n, i) {
  this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = i;
}
Cu.prototype = {
  constructor: Cu,
  appendChild: function(n) {
    return this._parent.insertBefore(n, this._next);
  },
  insertBefore: function(n, i) {
    return this._parent.insertBefore(n, i);
  },
  querySelector: function(n) {
    return this._parent.querySelector(n);
  },
  querySelectorAll: function(n) {
    return this._parent.querySelectorAll(n);
  }
};
function nN(n) {
  return function() {
    return n;
  };
}
function iN(n, i, a, r, u, c) {
  for (var d = 0, h, p = i.length, m = c.length; d < m; ++d)
    (h = i[d]) ? (h.__data__ = c[d], r[d] = h) : a[d] = new Cu(n, c[d]);
  for (; d < p; ++d)
    (h = i[d]) && (u[d] = h);
}
function oN(n, i, a, r, u, c, d) {
  var h, p, m = /* @__PURE__ */ new Map(), y = i.length, g = c.length, v = new Array(y), x;
  for (h = 0; h < y; ++h)
    (p = i[h]) && (v[h] = x = d.call(p, p.__data__, h, i) + "", m.has(x) ? u[h] = p : m.set(x, p));
  for (h = 0; h < g; ++h)
    x = d.call(n, c[h], h, c) + "", (p = m.get(x)) ? (r[h] = p, p.__data__ = c[h], m.delete(x)) : a[h] = new Cu(n, c[h]);
  for (h = 0; h < y; ++h)
    (p = i[h]) && m.get(v[h]) === p && (u[h] = p);
}
function aN(n) {
  return n.__data__;
}
function lN(n, i) {
  if (!arguments.length) return Array.from(this, aN);
  var a = i ? oN : iN, r = this._parents, u = this._groups;
  typeof n != "function" && (n = nN(n));
  for (var c = u.length, d = new Array(c), h = new Array(c), p = new Array(c), m = 0; m < c; ++m) {
    var y = r[m], g = u[m], v = g.length, x = rN(n.call(y, y && y.__data__, m, r)), w = x.length, _ = h[m] = new Array(w), N = d[m] = new Array(w), C = p[m] = new Array(v);
    a(y, g, _, N, C, x, i);
    for (var U = 0, T = 0, E, H; U < w; ++U)
      if (E = _[U]) {
        for (U >= T && (T = U + 1); !(H = N[T]) && ++T < w; ) ;
        E._next = H || null;
      }
  }
  return d = new nn(d, r), d._enter = h, d._exit = p, d;
}
function rN(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function sN() {
  return new nn(this._exit || this._groups.map(Rb), this._parents);
}
function uN(n, i, a) {
  var r = this.enter(), u = this, c = this.exit();
  return typeof n == "function" ? (r = n(r), r && (r = r.selection())) : r = r.append(n + ""), i != null && (u = i(u), u && (u = u.selection())), a == null ? c.remove() : a(c), r && u ? r.merge(u).order() : u;
}
function cN(n) {
  for (var i = n.selection ? n.selection() : n, a = this._groups, r = i._groups, u = a.length, c = r.length, d = Math.min(u, c), h = new Array(u), p = 0; p < d; ++p)
    for (var m = a[p], y = r[p], g = m.length, v = h[p] = new Array(g), x, w = 0; w < g; ++w)
      (x = m[w] || y[w]) && (v[w] = x);
  for (; p < u; ++p)
    h[p] = a[p];
  return new nn(h, this._parents);
}
function fN() {
  for (var n = this._groups, i = -1, a = n.length; ++i < a; )
    for (var r = n[i], u = r.length - 1, c = r[u], d; --u >= 0; )
      (d = r[u]) && (c && d.compareDocumentPosition(c) ^ 4 && c.parentNode.insertBefore(d, c), c = d);
  return this;
}
function dN(n) {
  n || (n = hN);
  function i(g, v) {
    return g && v ? n(g.__data__, v.__data__) : !g - !v;
  }
  for (var a = this._groups, r = a.length, u = new Array(r), c = 0; c < r; ++c) {
    for (var d = a[c], h = d.length, p = u[c] = new Array(h), m, y = 0; y < h; ++y)
      (m = d[y]) && (p[y] = m);
    p.sort(i);
  }
  return new nn(u, this._parents).order();
}
function hN(n, i) {
  return n < i ? -1 : n > i ? 1 : n >= i ? 0 : NaN;
}
function gN() {
  var n = arguments[0];
  return arguments[0] = this, n.apply(null, arguments), this;
}
function pN() {
  return Array.from(this);
}
function mN() {
  for (var n = this._groups, i = 0, a = n.length; i < a; ++i)
    for (var r = n[i], u = 0, c = r.length; u < c; ++u) {
      var d = r[u];
      if (d) return d;
    }
  return null;
}
function yN() {
  let n = 0;
  for (const i of this) ++n;
  return n;
}
function vN() {
  return !this.node();
}
function bN(n) {
  for (var i = this._groups, a = 0, r = i.length; a < r; ++a)
    for (var u = i[a], c = 0, d = u.length, h; c < d; ++c)
      (h = u[c]) && n.call(h, h.__data__, c, u);
  return this;
}
function xN(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function wN(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function SN(n, i) {
  return function() {
    this.setAttribute(n, i);
  };
}
function _N(n, i) {
  return function() {
    this.setAttributeNS(n.space, n.local, i);
  };
}
function EN(n, i) {
  return function() {
    var a = i.apply(this, arguments);
    a == null ? this.removeAttribute(n) : this.setAttribute(n, a);
  };
}
function NN(n, i) {
  return function() {
    var a = i.apply(this, arguments);
    a == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, a);
  };
}
function TN(n, i) {
  var a = Iu(n);
  if (arguments.length < 2) {
    var r = this.node();
    return a.local ? r.getAttributeNS(a.space, a.local) : r.getAttribute(a);
  }
  return this.each((i == null ? a.local ? wN : xN : typeof i == "function" ? a.local ? NN : EN : a.local ? _N : SN)(a, i));
}
function Db(n) {
  return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
}
function CN(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function AN(n, i, a) {
  return function() {
    this.style.setProperty(n, i, a);
  };
}
function MN(n, i, a) {
  return function() {
    var r = i.apply(this, arguments);
    r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, a);
  };
}
function ON(n, i, a) {
  return arguments.length > 1 ? this.each((i == null ? CN : typeof i == "function" ? MN : AN)(n, i, a ?? "")) : ja(this.node(), n);
}
function ja(n, i) {
  return n.style.getPropertyValue(i) || Db(n).getComputedStyle(n, null).getPropertyValue(i);
}
function zN(n) {
  return function() {
    delete this[n];
  };
}
function RN(n, i) {
  return function() {
    this[n] = i;
  };
}
function DN(n, i) {
  return function() {
    var a = i.apply(this, arguments);
    a == null ? delete this[n] : this[n] = a;
  };
}
function HN(n, i) {
  return arguments.length > 1 ? this.each((i == null ? zN : typeof i == "function" ? DN : RN)(n, i)) : this.node()[n];
}
function Hb(n) {
  return n.trim().split(/^|\s+/);
}
function jh(n) {
  return n.classList || new kb(n);
}
function kb(n) {
  this._node = n, this._names = Hb(n.getAttribute("class") || "");
}
kb.prototype = {
  add: function(n) {
    var i = this._names.indexOf(n);
    i < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(n) {
    var i = this._names.indexOf(n);
    i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(n) {
    return this._names.indexOf(n) >= 0;
  }
};
function Ub(n, i) {
  for (var a = jh(n), r = -1, u = i.length; ++r < u; ) a.add(i[r]);
}
function Bb(n, i) {
  for (var a = jh(n), r = -1, u = i.length; ++r < u; ) a.remove(i[r]);
}
function kN(n) {
  return function() {
    Ub(this, n);
  };
}
function UN(n) {
  return function() {
    Bb(this, n);
  };
}
function BN(n, i) {
  return function() {
    (i.apply(this, arguments) ? Ub : Bb)(this, n);
  };
}
function LN(n, i) {
  var a = Hb(n + "");
  if (arguments.length < 2) {
    for (var r = jh(this.node()), u = -1, c = a.length; ++u < c; ) if (!r.contains(a[u])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? BN : i ? kN : UN)(a, i));
}
function jN() {
  this.textContent = "";
}
function VN(n) {
  return function() {
    this.textContent = n;
  };
}
function IN(n) {
  return function() {
    var i = n.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function qN(n) {
  return arguments.length ? this.each(n == null ? jN : (typeof n == "function" ? IN : VN)(n)) : this.node().textContent;
}
function YN() {
  this.innerHTML = "";
}
function $N(n) {
  return function() {
    this.innerHTML = n;
  };
}
function XN(n) {
  return function() {
    var i = n.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function GN(n) {
  return arguments.length ? this.each(n == null ? YN : (typeof n == "function" ? XN : $N)(n)) : this.node().innerHTML;
}
function ZN() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function QN() {
  return this.each(ZN);
}
function KN() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function FN() {
  return this.each(KN);
}
function JN(n) {
  var i = typeof n == "function" ? n : Ab(n);
  return this.select(function() {
    return this.appendChild(i.apply(this, arguments));
  });
}
function PN() {
  return null;
}
function WN(n, i) {
  var a = typeof n == "function" ? n : Ab(n), r = i == null ? PN : typeof i == "function" ? i : Lh(i);
  return this.select(function() {
    return this.insertBefore(a.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function eT() {
  var n = this.parentNode;
  n && n.removeChild(this);
}
function tT() {
  return this.each(eT);
}
function nT() {
  var n = this.cloneNode(!1), i = this.parentNode;
  return i ? i.insertBefore(n, this.nextSibling) : n;
}
function iT() {
  var n = this.cloneNode(!0), i = this.parentNode;
  return i ? i.insertBefore(n, this.nextSibling) : n;
}
function oT(n) {
  return this.select(n ? iT : nT);
}
function aT(n) {
  return arguments.length ? this.property("__data__", n) : this.node().__data__;
}
function lT(n) {
  return function(i) {
    n.call(this, i, this.__data__);
  };
}
function rT(n) {
  return n.trim().split(/^|\s+/).map(function(i) {
    var a = "", r = i.indexOf(".");
    return r >= 0 && (a = i.slice(r + 1), i = i.slice(0, r)), { type: i, name: a };
  });
}
function sT(n) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var a = 0, r = -1, u = i.length, c; a < u; ++a)
        c = i[a], (!n.type || c.type === n.type) && c.name === n.name ? this.removeEventListener(c.type, c.listener, c.options) : i[++r] = c;
      ++r ? i.length = r : delete this.__on;
    }
  };
}
function uT(n, i, a) {
  return function() {
    var r = this.__on, u, c = lT(i);
    if (r) {
      for (var d = 0, h = r.length; d < h; ++d)
        if ((u = r[d]).type === n.type && u.name === n.name) {
          this.removeEventListener(u.type, u.listener, u.options), this.addEventListener(u.type, u.listener = c, u.options = a), u.value = i;
          return;
        }
    }
    this.addEventListener(n.type, c, a), u = { type: n.type, name: n.name, value: i, listener: c, options: a }, r ? r.push(u) : this.__on = [u];
  };
}
function cT(n, i, a) {
  var r = rT(n + ""), u, c = r.length, d;
  if (arguments.length < 2) {
    var h = this.node().__on;
    if (h) {
      for (var p = 0, m = h.length, y; p < m; ++p)
        for (u = 0, y = h[p]; u < c; ++u)
          if ((d = r[u]).type === y.type && d.name === y.name)
            return y.value;
    }
    return;
  }
  for (h = i ? uT : sT, u = 0; u < c; ++u) this.each(h(r[u], i, a));
  return this;
}
function Lb(n, i, a) {
  var r = Db(n), u = r.CustomEvent;
  typeof u == "function" ? u = new u(i, a) : (u = r.document.createEvent("Event"), a ? (u.initEvent(i, a.bubbles, a.cancelable), u.detail = a.detail) : u.initEvent(i, !1, !1)), n.dispatchEvent(u);
}
function fT(n, i) {
  return function() {
    return Lb(this, n, i);
  };
}
function dT(n, i) {
  return function() {
    return Lb(this, n, i.apply(this, arguments));
  };
}
function hT(n, i) {
  return this.each((typeof i == "function" ? dT : fT)(n, i));
}
function* gT() {
  for (var n = this._groups, i = 0, a = n.length; i < a; ++i)
    for (var r = n[i], u = 0, c = r.length, d; u < c; ++u)
      (d = r[u]) && (yield d);
}
var jb = [null];
function nn(n, i) {
  this._groups = n, this._parents = i;
}
function mr() {
  return new nn([[document.documentElement]], jb);
}
function pT() {
  return this;
}
nn.prototype = mr.prototype = {
  constructor: nn,
  select: I2,
  selectAll: X2,
  selectChild: K2,
  selectChildren: W2,
  filter: eN,
  data: lN,
  enter: tN,
  exit: sN,
  join: uN,
  merge: cN,
  selection: pT,
  order: fN,
  sort: dN,
  call: gN,
  nodes: pN,
  node: mN,
  size: yN,
  empty: vN,
  each: bN,
  attr: TN,
  style: ON,
  property: HN,
  classed: LN,
  text: qN,
  html: GN,
  raise: QN,
  lower: FN,
  append: JN,
  insert: WN,
  remove: tT,
  clone: oT,
  datum: aT,
  on: cT,
  dispatch: hT,
  [Symbol.iterator]: gT
};
function tn(n) {
  return typeof n == "string" ? new nn([[document.querySelector(n)]], [document.documentElement]) : new nn([[n]], jb);
}
function mT(n) {
  let i;
  for (; i = n.sourceEvent; ) n = i;
  return n;
}
function _n(n, i) {
  if (n = mT(n), i === void 0 && (i = n.currentTarget), i) {
    var a = i.ownerSVGElement || i;
    if (a.createSVGPoint) {
      var r = a.createSVGPoint();
      return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(i.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (i.getBoundingClientRect) {
      var u = i.getBoundingClientRect();
      return [n.clientX - u.left - i.clientLeft, n.clientY - u.top - i.clientTop];
    }
  }
  return [n.pageX, n.pageY];
}
const yT = { passive: !1 }, lr = { capture: !0, passive: !1 };
function Zd(n) {
  n.stopImmediatePropagation();
}
function Ua(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Vb(n) {
  var i = n.document.documentElement, a = tn(n).on("dragstart.drag", Ua, lr);
  "onselectstart" in i ? a.on("selectstart.drag", Ua, lr) : (i.__noselect = i.style.MozUserSelect, i.style.MozUserSelect = "none");
}
function Ib(n, i) {
  var a = n.document.documentElement, r = tn(n).on("dragstart.drag", null);
  i && (r.on("click.drag", Ua, lr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in a ? r.on("selectstart.drag", null) : (a.style.MozUserSelect = a.__noselect, delete a.__noselect);
}
const ru = (n) => () => n;
function mh(n, {
  sourceEvent: i,
  subject: a,
  target: r,
  identifier: u,
  active: c,
  x: d,
  y: h,
  dx: p,
  dy: m,
  dispatch: y
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: i, enumerable: !0, configurable: !0 },
    subject: { value: a, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: u, enumerable: !0, configurable: !0 },
    active: { value: c, enumerable: !0, configurable: !0 },
    x: { value: d, enumerable: !0, configurable: !0 },
    y: { value: h, enumerable: !0, configurable: !0 },
    dx: { value: p, enumerable: !0, configurable: !0 },
    dy: { value: m, enumerable: !0, configurable: !0 },
    _: { value: y }
  });
}
mh.prototype.on = function() {
  var n = this._.on.apply(this._, arguments);
  return n === this._ ? this : n;
};
function vT(n) {
  return !n.ctrlKey && !n.button;
}
function bT() {
  return this.parentNode;
}
function xT(n, i) {
  return i ?? { x: n.x, y: n.y };
}
function wT() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qb() {
  var n = vT, i = bT, a = xT, r = wT, u = {}, c = Vu("start", "drag", "end"), d = 0, h, p, m, y, g = 0;
  function v(E) {
    E.on("mousedown.drag", x).filter(r).on("touchstart.drag", N).on("touchmove.drag", C, yT).on("touchend.drag touchcancel.drag", U).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function x(E, H) {
    if (!(y || !n.call(this, E, H))) {
      var D = T(this, i.call(this, E, H), E, H, "mouse");
      D && (tn(E.view).on("mousemove.drag", w, lr).on("mouseup.drag", _, lr), Vb(E.view), Zd(E), m = !1, h = E.clientX, p = E.clientY, D("start", E));
    }
  }
  function w(E) {
    if (Ua(E), !m) {
      var H = E.clientX - h, D = E.clientY - p;
      m = H * H + D * D > g;
    }
    u.mouse("drag", E);
  }
  function _(E) {
    tn(E.view).on("mousemove.drag mouseup.drag", null), Ib(E.view, m), Ua(E), u.mouse("end", E);
  }
  function N(E, H) {
    if (n.call(this, E, H)) {
      var D = E.changedTouches, R = i.call(this, E, H), V = D.length, G, le;
      for (G = 0; G < V; ++G)
        (le = T(this, R, E, H, D[G].identifier, D[G])) && (Zd(E), le("start", E, D[G]));
    }
  }
  function C(E) {
    var H = E.changedTouches, D = H.length, R, V;
    for (R = 0; R < D; ++R)
      (V = u[H[R].identifier]) && (Ua(E), V("drag", E, H[R]));
  }
  function U(E) {
    var H = E.changedTouches, D = H.length, R, V;
    for (y && clearTimeout(y), y = setTimeout(function() {
      y = null;
    }, 500), R = 0; R < D; ++R)
      (V = u[H[R].identifier]) && (Zd(E), V("end", E, H[R]));
  }
  function T(E, H, D, R, V, G) {
    var le = c.copy(), te = _n(G || D, H), ne, ie, M;
    if ((M = a.call(E, new mh("beforestart", {
      sourceEvent: D,
      target: v,
      identifier: V,
      active: d,
      x: te[0],
      y: te[1],
      dx: 0,
      dy: 0,
      dispatch: le
    }), R)) != null)
      return ne = M.x - te[0] || 0, ie = M.y - te[1] || 0, function j(z, L, I) {
        var X = te, ee;
        switch (z) {
          case "start":
            u[V] = j, ee = d++;
            break;
          case "end":
            delete u[V], --d;
          // falls through
          case "drag":
            te = _n(I || L, H), ee = d;
            break;
        }
        le.call(
          z,
          E,
          new mh(z, {
            sourceEvent: L,
            subject: M,
            target: v,
            identifier: V,
            active: ee,
            x: te[0] + ne,
            y: te[1] + ie,
            dx: te[0] - X[0],
            dy: te[1] - X[1],
            dispatch: le
          }),
          R
        );
      };
  }
  return v.filter = function(E) {
    return arguments.length ? (n = typeof E == "function" ? E : ru(!!E), v) : n;
  }, v.container = function(E) {
    return arguments.length ? (i = typeof E == "function" ? E : ru(E), v) : i;
  }, v.subject = function(E) {
    return arguments.length ? (a = typeof E == "function" ? E : ru(E), v) : a;
  }, v.touchable = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : ru(!!E), v) : r;
  }, v.on = function() {
    var E = c.on.apply(c, arguments);
    return E === c ? v : E;
  }, v.clickDistance = function(E) {
    return arguments.length ? (g = (E = +E) * E, v) : Math.sqrt(g);
  }, v;
}
function Vh(n, i, a) {
  n.prototype = i.prototype = a, a.constructor = n;
}
function Yb(n, i) {
  var a = Object.create(n.prototype);
  for (var r in i) a[r] = i[r];
  return a;
}
function yr() {
}
var rr = 0.7, Au = 1 / rr, Ba = "\\s*([+-]?\\d+)\\s*", sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ST = /^#([0-9a-f]{3,8})$/, _T = new RegExp(`^rgb\\(${Ba},${Ba},${Ba}\\)$`), ET = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`), NT = new RegExp(`^rgba\\(${Ba},${Ba},${Ba},${sr}\\)$`), TT = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${sr}\\)$`), CT = new RegExp(`^hsl\\(${sr},${Gn},${Gn}\\)$`), AT = new RegExp(`^hsla\\(${sr},${Gn},${Gn},${sr}\\)$`), Iy = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Vh(yr, Do, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: qy,
  // Deprecated! Use color.formatHex.
  formatHex: qy,
  formatHex8: MT,
  formatHsl: OT,
  formatRgb: Yy,
  toString: Yy
});
function qy() {
  return this.rgb().formatHex();
}
function MT() {
  return this.rgb().formatHex8();
}
function OT() {
  return $b(this).formatHsl();
}
function Yy() {
  return this.rgb().formatRgb();
}
function Do(n) {
  var i, a;
  return n = (n + "").trim().toLowerCase(), (i = ST.exec(n)) ? (a = i[1].length, i = parseInt(i[1], 16), a === 6 ? $y(i) : a === 3 ? new $t(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : a === 8 ? su(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : a === 4 ? su(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = _T.exec(n)) ? new $t(i[1], i[2], i[3], 1) : (i = ET.exec(n)) ? new $t(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = NT.exec(n)) ? su(i[1], i[2], i[3], i[4]) : (i = TT.exec(n)) ? su(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = CT.exec(n)) ? Zy(i[1], i[2] / 100, i[3] / 100, 1) : (i = AT.exec(n)) ? Zy(i[1], i[2] / 100, i[3] / 100, i[4]) : Iy.hasOwnProperty(n) ? $y(Iy[n]) : n === "transparent" ? new $t(NaN, NaN, NaN, 0) : null;
}
function $y(n) {
  return new $t(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function su(n, i, a, r) {
  return r <= 0 && (n = i = a = NaN), new $t(n, i, a, r);
}
function zT(n) {
  return n instanceof yr || (n = Do(n)), n ? (n = n.rgb(), new $t(n.r, n.g, n.b, n.opacity)) : new $t();
}
function yh(n, i, a, r) {
  return arguments.length === 1 ? zT(n) : new $t(n, i, a, r ?? 1);
}
function $t(n, i, a, r) {
  this.r = +n, this.g = +i, this.b = +a, this.opacity = +r;
}
Vh($t, yh, Yb(yr, {
  brighter(n) {
    return n = n == null ? Au : Math.pow(Au, n), new $t(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? rr : Math.pow(rr, n), new $t(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $t(zo(this.r), zo(this.g), zo(this.b), Mu(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xy,
  // Deprecated! Use color.formatHex.
  formatHex: Xy,
  formatHex8: RT,
  formatRgb: Gy,
  toString: Gy
}));
function Xy() {
  return `#${Oo(this.r)}${Oo(this.g)}${Oo(this.b)}`;
}
function RT() {
  return `#${Oo(this.r)}${Oo(this.g)}${Oo(this.b)}${Oo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gy() {
  const n = Mu(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${zo(this.r)}, ${zo(this.g)}, ${zo(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function Mu(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function zo(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function Oo(n) {
  return n = zo(n), (n < 16 ? "0" : "") + n.toString(16);
}
function Zy(n, i, a, r) {
  return r <= 0 ? n = i = a = NaN : a <= 0 || a >= 1 ? n = i = NaN : i <= 0 && (n = NaN), new En(n, i, a, r);
}
function $b(n) {
  if (n instanceof En) return new En(n.h, n.s, n.l, n.opacity);
  if (n instanceof yr || (n = Do(n)), !n) return new En();
  if (n instanceof En) return n;
  n = n.rgb();
  var i = n.r / 255, a = n.g / 255, r = n.b / 255, u = Math.min(i, a, r), c = Math.max(i, a, r), d = NaN, h = c - u, p = (c + u) / 2;
  return h ? (i === c ? d = (a - r) / h + (a < r) * 6 : a === c ? d = (r - i) / h + 2 : d = (i - a) / h + 4, h /= p < 0.5 ? c + u : 2 - c - u, d *= 60) : h = p > 0 && p < 1 ? 0 : d, new En(d, h, p, n.opacity);
}
function DT(n, i, a, r) {
  return arguments.length === 1 ? $b(n) : new En(n, i, a, r ?? 1);
}
function En(n, i, a, r) {
  this.h = +n, this.s = +i, this.l = +a, this.opacity = +r;
}
Vh(En, DT, Yb(yr, {
  brighter(n) {
    return n = n == null ? Au : Math.pow(Au, n), new En(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? rr : Math.pow(rr, n), new En(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, i = isNaN(n) || isNaN(this.s) ? 0 : this.s, a = this.l, r = a + (a < 0.5 ? a : 1 - a) * i, u = 2 * a - r;
    return new $t(
      Qd(n >= 240 ? n - 240 : n + 120, u, r),
      Qd(n, u, r),
      Qd(n < 120 ? n + 240 : n - 120, u, r),
      this.opacity
    );
  },
  clamp() {
    return new En(Qy(this.h), uu(this.s), uu(this.l), Mu(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = Mu(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Qy(this.h)}, ${uu(this.s) * 100}%, ${uu(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Qy(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function uu(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function Qd(n, i, a) {
  return (n < 60 ? i + (a - i) * n / 60 : n < 180 ? a : n < 240 ? i + (a - i) * (240 - n) / 60 : i) * 255;
}
const Ih = (n) => () => n;
function HT(n, i) {
  return function(a) {
    return n + a * i;
  };
}
function kT(n, i, a) {
  return n = Math.pow(n, a), i = Math.pow(i, a) - n, a = 1 / a, function(r) {
    return Math.pow(n + r * i, a);
  };
}
function UT(n) {
  return (n = +n) == 1 ? Xb : function(i, a) {
    return a - i ? kT(i, a, n) : Ih(isNaN(i) ? a : i);
  };
}
function Xb(n, i) {
  var a = i - n;
  return a ? HT(n, a) : Ih(isNaN(n) ? i : n);
}
const Ou = (function n(i) {
  var a = UT(i);
  function r(u, c) {
    var d = a((u = yh(u)).r, (c = yh(c)).r), h = a(u.g, c.g), p = a(u.b, c.b), m = Xb(u.opacity, c.opacity);
    return function(y) {
      return u.r = d(y), u.g = h(y), u.b = p(y), u.opacity = m(y), u + "";
    };
  }
  return r.gamma = n, r;
})(1);
function BT(n, i) {
  i || (i = []);
  var a = n ? Math.min(i.length, n.length) : 0, r = i.slice(), u;
  return function(c) {
    for (u = 0; u < a; ++u) r[u] = n[u] * (1 - c) + i[u] * c;
    return r;
  };
}
function LT(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function jT(n, i) {
  var a = i ? i.length : 0, r = n ? Math.min(a, n.length) : 0, u = new Array(r), c = new Array(a), d;
  for (d = 0; d < r; ++d) u[d] = ir(n[d], i[d]);
  for (; d < a; ++d) c[d] = i[d];
  return function(h) {
    for (d = 0; d < r; ++d) c[d] = u[d](h);
    return c;
  };
}
function VT(n, i) {
  var a = /* @__PURE__ */ new Date();
  return n = +n, i = +i, function(r) {
    return a.setTime(n * (1 - r) + i * r), a;
  };
}
function $n(n, i) {
  return n = +n, i = +i, function(a) {
    return n * (1 - a) + i * a;
  };
}
function IT(n, i) {
  var a = {}, r = {}, u;
  (n === null || typeof n != "object") && (n = {}), (i === null || typeof i != "object") && (i = {});
  for (u in i)
    u in n ? a[u] = ir(n[u], i[u]) : r[u] = i[u];
  return function(c) {
    for (u in a) r[u] = a[u](c);
    return r;
  };
}
var vh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kd = new RegExp(vh.source, "g");
function qT(n) {
  return function() {
    return n;
  };
}
function YT(n) {
  return function(i) {
    return n(i) + "";
  };
}
function Gb(n, i) {
  var a = vh.lastIndex = Kd.lastIndex = 0, r, u, c, d = -1, h = [], p = [];
  for (n = n + "", i = i + ""; (r = vh.exec(n)) && (u = Kd.exec(i)); )
    (c = u.index) > a && (c = i.slice(a, c), h[d] ? h[d] += c : h[++d] = c), (r = r[0]) === (u = u[0]) ? h[d] ? h[d] += u : h[++d] = u : (h[++d] = null, p.push({ i: d, x: $n(r, u) })), a = Kd.lastIndex;
  return a < i.length && (c = i.slice(a), h[d] ? h[d] += c : h[++d] = c), h.length < 2 ? p[0] ? YT(p[0].x) : qT(i) : (i = p.length, function(m) {
    for (var y = 0, g; y < i; ++y) h[(g = p[y]).i] = g.x(m);
    return h.join("");
  });
}
function ir(n, i) {
  var a = typeof i, r;
  return i == null || a === "boolean" ? Ih(i) : (a === "number" ? $n : a === "string" ? (r = Do(i)) ? (i = r, Ou) : Gb : i instanceof Do ? Ou : i instanceof Date ? VT : LT(i) ? BT : Array.isArray(i) ? jT : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? IT : $n)(n, i);
}
var Ky = 180 / Math.PI, bh = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zb(n, i, a, r, u, c) {
  var d, h, p;
  return (d = Math.sqrt(n * n + i * i)) && (n /= d, i /= d), (p = n * a + i * r) && (a -= n * p, r -= i * p), (h = Math.sqrt(a * a + r * r)) && (a /= h, r /= h, p /= h), n * r < i * a && (n = -n, i = -i, p = -p, d = -d), {
    translateX: u,
    translateY: c,
    rotate: Math.atan2(i, n) * Ky,
    skewX: Math.atan(p) * Ky,
    scaleX: d,
    scaleY: h
  };
}
var cu;
function $T(n) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
  return i.isIdentity ? bh : Zb(i.a, i.b, i.c, i.d, i.e, i.f);
}
function XT(n) {
  return n == null || (cu || (cu = document.createElementNS("http://www.w3.org/2000/svg", "g")), cu.setAttribute("transform", n), !(n = cu.transform.baseVal.consolidate())) ? bh : (n = n.matrix, Zb(n.a, n.b, n.c, n.d, n.e, n.f));
}
function Qb(n, i, a, r) {
  function u(m) {
    return m.length ? m.pop() + " " : "";
  }
  function c(m, y, g, v, x, w) {
    if (m !== g || y !== v) {
      var _ = x.push("translate(", null, i, null, a);
      w.push({ i: _ - 4, x: $n(m, g) }, { i: _ - 2, x: $n(y, v) });
    } else (g || v) && x.push("translate(" + g + i + v + a);
  }
  function d(m, y, g, v) {
    m !== y ? (m - y > 180 ? y += 360 : y - m > 180 && (m += 360), v.push({ i: g.push(u(g) + "rotate(", null, r) - 2, x: $n(m, y) })) : y && g.push(u(g) + "rotate(" + y + r);
  }
  function h(m, y, g, v) {
    m !== y ? v.push({ i: g.push(u(g) + "skewX(", null, r) - 2, x: $n(m, y) }) : y && g.push(u(g) + "skewX(" + y + r);
  }
  function p(m, y, g, v, x, w) {
    if (m !== g || y !== v) {
      var _ = x.push(u(x) + "scale(", null, ",", null, ")");
      w.push({ i: _ - 4, x: $n(m, g) }, { i: _ - 2, x: $n(y, v) });
    } else (g !== 1 || v !== 1) && x.push(u(x) + "scale(" + g + "," + v + ")");
  }
  return function(m, y) {
    var g = [], v = [];
    return m = n(m), y = n(y), c(m.translateX, m.translateY, y.translateX, y.translateY, g, v), d(m.rotate, y.rotate, g, v), h(m.skewX, y.skewX, g, v), p(m.scaleX, m.scaleY, y.scaleX, y.scaleY, g, v), m = y = null, function(x) {
      for (var w = -1, _ = v.length, N; ++w < _; ) g[(N = v[w]).i] = N.x(x);
      return g.join("");
    };
  };
}
var GT = Qb($T, "px, ", "px)", "deg)"), ZT = Qb(XT, ", ", ")", ")"), QT = 1e-12;
function Fy(n) {
  return ((n = Math.exp(n)) + 1 / n) / 2;
}
function KT(n) {
  return ((n = Math.exp(n)) - 1 / n) / 2;
}
function FT(n) {
  return ((n = Math.exp(2 * n)) - 1) / (n + 1);
}
const bu = (function n(i, a, r) {
  function u(c, d) {
    var h = c[0], p = c[1], m = c[2], y = d[0], g = d[1], v = d[2], x = y - h, w = g - p, _ = x * x + w * w, N, C;
    if (_ < QT)
      C = Math.log(v / m) / i, N = function(R) {
        return [
          h + R * x,
          p + R * w,
          m * Math.exp(i * R * C)
        ];
      };
    else {
      var U = Math.sqrt(_), T = (v * v - m * m + r * _) / (2 * m * a * U), E = (v * v - m * m - r * _) / (2 * v * a * U), H = Math.log(Math.sqrt(T * T + 1) - T), D = Math.log(Math.sqrt(E * E + 1) - E);
      C = (D - H) / i, N = function(R) {
        var V = R * C, G = Fy(H), le = m / (a * U) * (G * FT(i * V + H) - KT(H));
        return [
          h + le * x,
          p + le * w,
          m * G / Fy(i * V + H)
        ];
      };
    }
    return N.duration = C * 1e3 * i / Math.SQRT2, N;
  }
  return u.rho = function(c) {
    var d = Math.max(1e-3, +c), h = d * d, p = h * h;
    return n(d, h, p);
  }, u;
})(Math.SQRT2, 2, 4);
var Va = 0, tr = 0, Fl = 0, Kb = 1e3, zu, nr, Ru = 0, Ho = 0, qu = 0, ur = typeof performance == "object" && performance.now ? performance : Date, Fb = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function qh() {
  return Ho || (Fb(JT), Ho = ur.now() + qu);
}
function JT() {
  Ho = 0;
}
function Du() {
  this._call = this._time = this._next = null;
}
Du.prototype = Jb.prototype = {
  constructor: Du,
  restart: function(n, i, a) {
    if (typeof n != "function") throw new TypeError("callback is not a function");
    a = (a == null ? qh() : +a) + (i == null ? 0 : +i), !this._next && nr !== this && (nr ? nr._next = this : zu = this, nr = this), this._call = n, this._time = a, xh();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xh());
  }
};
function Jb(n, i, a) {
  var r = new Du();
  return r.restart(n, i, a), r;
}
function PT() {
  qh(), ++Va;
  for (var n = zu, i; n; )
    (i = Ho - n._time) >= 0 && n._call.call(void 0, i), n = n._next;
  --Va;
}
function Jy() {
  Ho = (Ru = ur.now()) + qu, Va = tr = 0;
  try {
    PT();
  } finally {
    Va = 0, eC(), Ho = 0;
  }
}
function WT() {
  var n = ur.now(), i = n - Ru;
  i > Kb && (qu -= i, Ru = n);
}
function eC() {
  for (var n, i = zu, a, r = 1 / 0; i; )
    i._call ? (r > i._time && (r = i._time), n = i, i = i._next) : (a = i._next, i._next = null, i = n ? n._next = a : zu = a);
  nr = n, xh(r);
}
function xh(n) {
  if (!Va) {
    tr && (tr = clearTimeout(tr));
    var i = n - Ho;
    i > 24 ? (n < 1 / 0 && (tr = setTimeout(Jy, n - ur.now() - qu)), Fl && (Fl = clearInterval(Fl))) : (Fl || (Ru = ur.now(), Fl = setInterval(WT, Kb)), Va = 1, Fb(Jy));
  }
}
function Py(n, i, a) {
  var r = new Du();
  return i = i == null ? 0 : +i, r.restart((u) => {
    r.stop(), n(u + i);
  }, i, a), r;
}
var tC = Vu("start", "end", "cancel", "interrupt"), nC = [], Pb = 0, Wy = 1, wh = 2, xu = 3, ev = 4, Sh = 5, wu = 6;
function Yu(n, i, a, r, u, c) {
  var d = n.__transition;
  if (!d) n.__transition = {};
  else if (a in d) return;
  iC(n, a, {
    name: i,
    index: r,
    // For context during callback.
    group: u,
    // For context during callback.
    on: tC,
    tween: nC,
    time: c.time,
    delay: c.delay,
    duration: c.duration,
    ease: c.ease,
    timer: null,
    state: Pb
  });
}
function Yh(n, i) {
  var a = An(n, i);
  if (a.state > Pb) throw new Error("too late; already scheduled");
  return a;
}
function Qn(n, i) {
  var a = An(n, i);
  if (a.state > xu) throw new Error("too late; already running");
  return a;
}
function An(n, i) {
  var a = n.__transition;
  if (!a || !(a = a[i])) throw new Error("transition not found");
  return a;
}
function iC(n, i, a) {
  var r = n.__transition, u;
  r[i] = a, a.timer = Jb(c, 0, a.time);
  function c(m) {
    a.state = Wy, a.timer.restart(d, a.delay, a.time), a.delay <= m && d(m - a.delay);
  }
  function d(m) {
    var y, g, v, x;
    if (a.state !== Wy) return p();
    for (y in r)
      if (x = r[y], x.name === a.name) {
        if (x.state === xu) return Py(d);
        x.state === ev ? (x.state = wu, x.timer.stop(), x.on.call("interrupt", n, n.__data__, x.index, x.group), delete r[y]) : +y < i && (x.state = wu, x.timer.stop(), x.on.call("cancel", n, n.__data__, x.index, x.group), delete r[y]);
      }
    if (Py(function() {
      a.state === xu && (a.state = ev, a.timer.restart(h, a.delay, a.time), h(m));
    }), a.state = wh, a.on.call("start", n, n.__data__, a.index, a.group), a.state === wh) {
      for (a.state = xu, u = new Array(v = a.tween.length), y = 0, g = -1; y < v; ++y)
        (x = a.tween[y].value.call(n, n.__data__, a.index, a.group)) && (u[++g] = x);
      u.length = g + 1;
    }
  }
  function h(m) {
    for (var y = m < a.duration ? a.ease.call(null, m / a.duration) : (a.timer.restart(p), a.state = Sh, 1), g = -1, v = u.length; ++g < v; )
      u[g].call(n, y);
    a.state === Sh && (a.on.call("end", n, n.__data__, a.index, a.group), p());
  }
  function p() {
    a.state = wu, a.timer.stop(), delete r[i];
    for (var m in r) return;
    delete n.__transition;
  }
}
function Su(n, i) {
  var a = n.__transition, r, u, c = !0, d;
  if (a) {
    i = i == null ? null : i + "";
    for (d in a) {
      if ((r = a[d]).name !== i) {
        c = !1;
        continue;
      }
      u = r.state > wh && r.state < Sh, r.state = wu, r.timer.stop(), r.on.call(u ? "interrupt" : "cancel", n, n.__data__, r.index, r.group), delete a[d];
    }
    c && delete n.__transition;
  }
}
function oC(n) {
  return this.each(function() {
    Su(this, n);
  });
}
function aC(n, i) {
  var a, r;
  return function() {
    var u = Qn(this, n), c = u.tween;
    if (c !== a) {
      r = a = c;
      for (var d = 0, h = r.length; d < h; ++d)
        if (r[d].name === i) {
          r = r.slice(), r.splice(d, 1);
          break;
        }
    }
    u.tween = r;
  };
}
function lC(n, i, a) {
  var r, u;
  if (typeof a != "function") throw new Error();
  return function() {
    var c = Qn(this, n), d = c.tween;
    if (d !== r) {
      u = (r = d).slice();
      for (var h = { name: i, value: a }, p = 0, m = u.length; p < m; ++p)
        if (u[p].name === i) {
          u[p] = h;
          break;
        }
      p === m && u.push(h);
    }
    c.tween = u;
  };
}
function rC(n, i) {
  var a = this._id;
  if (n += "", arguments.length < 2) {
    for (var r = An(this.node(), a).tween, u = 0, c = r.length, d; u < c; ++u)
      if ((d = r[u]).name === n)
        return d.value;
    return null;
  }
  return this.each((i == null ? aC : lC)(a, n, i));
}
function $h(n, i, a) {
  var r = n._id;
  return n.each(function() {
    var u = Qn(this, r);
    (u.value || (u.value = {}))[i] = a.apply(this, arguments);
  }), function(u) {
    return An(u, r).value[i];
  };
}
function Wb(n, i) {
  var a;
  return (typeof i == "number" ? $n : i instanceof Do ? Ou : (a = Do(i)) ? (i = a, Ou) : Gb)(n, i);
}
function sC(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function uC(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function cC(n, i, a) {
  var r, u = a + "", c;
  return function() {
    var d = this.getAttribute(n);
    return d === u ? null : d === r ? c : c = i(r = d, a);
  };
}
function fC(n, i, a) {
  var r, u = a + "", c;
  return function() {
    var d = this.getAttributeNS(n.space, n.local);
    return d === u ? null : d === r ? c : c = i(r = d, a);
  };
}
function dC(n, i, a) {
  var r, u, c;
  return function() {
    var d, h = a(this), p;
    return h == null ? void this.removeAttribute(n) : (d = this.getAttribute(n), p = h + "", d === p ? null : d === r && p === u ? c : (u = p, c = i(r = d, h)));
  };
}
function hC(n, i, a) {
  var r, u, c;
  return function() {
    var d, h = a(this), p;
    return h == null ? void this.removeAttributeNS(n.space, n.local) : (d = this.getAttributeNS(n.space, n.local), p = h + "", d === p ? null : d === r && p === u ? c : (u = p, c = i(r = d, h)));
  };
}
function gC(n, i) {
  var a = Iu(n), r = a === "transform" ? ZT : Wb;
  return this.attrTween(n, typeof i == "function" ? (a.local ? hC : dC)(a, r, $h(this, "attr." + n, i)) : i == null ? (a.local ? uC : sC)(a) : (a.local ? fC : cC)(a, r, i));
}
function pC(n, i) {
  return function(a) {
    this.setAttribute(n, i.call(this, a));
  };
}
function mC(n, i) {
  return function(a) {
    this.setAttributeNS(n.space, n.local, i.call(this, a));
  };
}
function yC(n, i) {
  var a, r;
  function u() {
    var c = i.apply(this, arguments);
    return c !== r && (a = (r = c) && mC(n, c)), a;
  }
  return u._value = i, u;
}
function vC(n, i) {
  var a, r;
  function u() {
    var c = i.apply(this, arguments);
    return c !== r && (a = (r = c) && pC(n, c)), a;
  }
  return u._value = i, u;
}
function bC(n, i) {
  var a = "attr." + n;
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (i == null) return this.tween(a, null);
  if (typeof i != "function") throw new Error();
  var r = Iu(n);
  return this.tween(a, (r.local ? yC : vC)(r, i));
}
function xC(n, i) {
  return function() {
    Yh(this, n).delay = +i.apply(this, arguments);
  };
}
function wC(n, i) {
  return i = +i, function() {
    Yh(this, n).delay = i;
  };
}
function SC(n) {
  var i = this._id;
  return arguments.length ? this.each((typeof n == "function" ? xC : wC)(i, n)) : An(this.node(), i).delay;
}
function _C(n, i) {
  return function() {
    Qn(this, n).duration = +i.apply(this, arguments);
  };
}
function EC(n, i) {
  return i = +i, function() {
    Qn(this, n).duration = i;
  };
}
function NC(n) {
  var i = this._id;
  return arguments.length ? this.each((typeof n == "function" ? _C : EC)(i, n)) : An(this.node(), i).duration;
}
function TC(n, i) {
  if (typeof i != "function") throw new Error();
  return function() {
    Qn(this, n).ease = i;
  };
}
function CC(n) {
  var i = this._id;
  return arguments.length ? this.each(TC(i, n)) : An(this.node(), i).ease;
}
function AC(n, i) {
  return function() {
    var a = i.apply(this, arguments);
    if (typeof a != "function") throw new Error();
    Qn(this, n).ease = a;
  };
}
function MC(n) {
  if (typeof n != "function") throw new Error();
  return this.each(AC(this._id, n));
}
function OC(n) {
  typeof n != "function" && (n = Ob(n));
  for (var i = this._groups, a = i.length, r = new Array(a), u = 0; u < a; ++u)
    for (var c = i[u], d = c.length, h = r[u] = [], p, m = 0; m < d; ++m)
      (p = c[m]) && n.call(p, p.__data__, m, c) && h.push(p);
  return new pi(r, this._parents, this._name, this._id);
}
function zC(n) {
  if (n._id !== this._id) throw new Error();
  for (var i = this._groups, a = n._groups, r = i.length, u = a.length, c = Math.min(r, u), d = new Array(r), h = 0; h < c; ++h)
    for (var p = i[h], m = a[h], y = p.length, g = d[h] = new Array(y), v, x = 0; x < y; ++x)
      (v = p[x] || m[x]) && (g[x] = v);
  for (; h < r; ++h)
    d[h] = i[h];
  return new pi(d, this._parents, this._name, this._id);
}
function RC(n) {
  return (n + "").trim().split(/^|\s+/).every(function(i) {
    var a = i.indexOf(".");
    return a >= 0 && (i = i.slice(0, a)), !i || i === "start";
  });
}
function DC(n, i, a) {
  var r, u, c = RC(i) ? Yh : Qn;
  return function() {
    var d = c(this, n), h = d.on;
    h !== r && (u = (r = h).copy()).on(i, a), d.on = u;
  };
}
function HC(n, i) {
  var a = this._id;
  return arguments.length < 2 ? An(this.node(), a).on.on(n) : this.each(DC(a, n, i));
}
function kC(n) {
  return function() {
    var i = this.parentNode;
    for (var a in this.__transition) if (+a !== n) return;
    i && i.removeChild(this);
  };
}
function UC() {
  return this.on("end.remove", kC(this._id));
}
function BC(n) {
  var i = this._name, a = this._id;
  typeof n != "function" && (n = Lh(n));
  for (var r = this._groups, u = r.length, c = new Array(u), d = 0; d < u; ++d)
    for (var h = r[d], p = h.length, m = c[d] = new Array(p), y, g, v = 0; v < p; ++v)
      (y = h[v]) && (g = n.call(y, y.__data__, v, h)) && ("__data__" in y && (g.__data__ = y.__data__), m[v] = g, Yu(m[v], i, a, v, m, An(y, a)));
  return new pi(c, this._parents, i, a);
}
function LC(n) {
  var i = this._name, a = this._id;
  typeof n != "function" && (n = Mb(n));
  for (var r = this._groups, u = r.length, c = [], d = [], h = 0; h < u; ++h)
    for (var p = r[h], m = p.length, y, g = 0; g < m; ++g)
      if (y = p[g]) {
        for (var v = n.call(y, y.__data__, g, p), x, w = An(y, a), _ = 0, N = v.length; _ < N; ++_)
          (x = v[_]) && Yu(x, i, a, _, v, w);
        c.push(v), d.push(y);
      }
  return new pi(c, d, i, a);
}
var jC = mr.prototype.constructor;
function VC() {
  return new jC(this._groups, this._parents);
}
function IC(n, i) {
  var a, r, u;
  return function() {
    var c = ja(this, n), d = (this.style.removeProperty(n), ja(this, n));
    return c === d ? null : c === a && d === r ? u : u = i(a = c, r = d);
  };
}
function e1(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function qC(n, i, a) {
  var r, u = a + "", c;
  return function() {
    var d = ja(this, n);
    return d === u ? null : d === r ? c : c = i(r = d, a);
  };
}
function YC(n, i, a) {
  var r, u, c;
  return function() {
    var d = ja(this, n), h = a(this), p = h + "";
    return h == null && (p = h = (this.style.removeProperty(n), ja(this, n))), d === p ? null : d === r && p === u ? c : (u = p, c = i(r = d, h));
  };
}
function $C(n, i) {
  var a, r, u, c = "style." + i, d = "end." + c, h;
  return function() {
    var p = Qn(this, n), m = p.on, y = p.value[c] == null ? h || (h = e1(i)) : void 0;
    (m !== a || u !== y) && (r = (a = m).copy()).on(d, u = y), p.on = r;
  };
}
function XC(n, i, a) {
  var r = (n += "") == "transform" ? GT : Wb;
  return i == null ? this.styleTween(n, IC(n, r)).on("end.style." + n, e1(n)) : typeof i == "function" ? this.styleTween(n, YC(n, r, $h(this, "style." + n, i))).each($C(this._id, n)) : this.styleTween(n, qC(n, r, i), a).on("end.style." + n, null);
}
function GC(n, i, a) {
  return function(r) {
    this.style.setProperty(n, i.call(this, r), a);
  };
}
function ZC(n, i, a) {
  var r, u;
  function c() {
    var d = i.apply(this, arguments);
    return d !== u && (r = (u = d) && GC(n, d, a)), r;
  }
  return c._value = i, c;
}
function QC(n, i, a) {
  var r = "style." + (n += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (i == null) return this.tween(r, null);
  if (typeof i != "function") throw new Error();
  return this.tween(r, ZC(n, i, a ?? ""));
}
function KC(n) {
  return function() {
    this.textContent = n;
  };
}
function FC(n) {
  return function() {
    var i = n(this);
    this.textContent = i ?? "";
  };
}
function JC(n) {
  return this.tween("text", typeof n == "function" ? FC($h(this, "text", n)) : KC(n == null ? "" : n + ""));
}
function PC(n) {
  return function(i) {
    this.textContent = n.call(this, i);
  };
}
function WC(n) {
  var i, a;
  function r() {
    var u = n.apply(this, arguments);
    return u !== a && (i = (a = u) && PC(u)), i;
  }
  return r._value = n, r;
}
function eA(n) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (n == null) return this.tween(i, null);
  if (typeof n != "function") throw new Error();
  return this.tween(i, WC(n));
}
function tA() {
  for (var n = this._name, i = this._id, a = t1(), r = this._groups, u = r.length, c = 0; c < u; ++c)
    for (var d = r[c], h = d.length, p, m = 0; m < h; ++m)
      if (p = d[m]) {
        var y = An(p, i);
        Yu(p, n, a, m, d, {
          time: y.time + y.delay + y.duration,
          delay: 0,
          duration: y.duration,
          ease: y.ease
        });
      }
  return new pi(r, this._parents, n, a);
}
function nA() {
  var n, i, a = this, r = a._id, u = a.size();
  return new Promise(function(c, d) {
    var h = { value: d }, p = { value: function() {
      --u === 0 && c();
    } };
    a.each(function() {
      var m = Qn(this, r), y = m.on;
      y !== n && (i = (n = y).copy(), i._.cancel.push(h), i._.interrupt.push(h), i._.end.push(p)), m.on = i;
    }), u === 0 && c();
  });
}
var iA = 0;
function pi(n, i, a, r) {
  this._groups = n, this._parents = i, this._name = a, this._id = r;
}
function t1() {
  return ++iA;
}
var di = mr.prototype;
pi.prototype = {
  constructor: pi,
  select: BC,
  selectAll: LC,
  selectChild: di.selectChild,
  selectChildren: di.selectChildren,
  filter: OC,
  merge: zC,
  selection: VC,
  transition: tA,
  call: di.call,
  nodes: di.nodes,
  node: di.node,
  size: di.size,
  empty: di.empty,
  each: di.each,
  on: HC,
  attr: gC,
  attrTween: bC,
  style: XC,
  styleTween: QC,
  text: JC,
  textTween: eA,
  remove: UC,
  tween: rC,
  delay: SC,
  duration: NC,
  ease: CC,
  easeVarying: MC,
  end: nA,
  [Symbol.iterator]: di[Symbol.iterator]
};
function oA(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var aA = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: oA
};
function lA(n, i) {
  for (var a; !(a = n.__transition) || !(a = a[i]); )
    if (!(n = n.parentNode))
      throw new Error(`transition ${i} not found`);
  return a;
}
function rA(n) {
  var i, a;
  n instanceof pi ? (i = n._id, n = n._name) : (i = t1(), (a = aA).time = qh(), n = n == null ? null : n + "");
  for (var r = this._groups, u = r.length, c = 0; c < u; ++c)
    for (var d = r[c], h = d.length, p, m = 0; m < h; ++m)
      (p = d[m]) && Yu(p, n, i, m, d, a || lA(p, i));
  return new pi(r, this._parents, n, i);
}
mr.prototype.interrupt = oC;
mr.prototype.transition = rA;
const fu = (n) => () => n;
function sA(n, {
  sourceEvent: i,
  target: a,
  transform: r,
  dispatch: u
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: i, enumerable: !0, configurable: !0 },
    target: { value: a, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: u }
  });
}
function hi(n, i, a) {
  this.k = n, this.x = i, this.y = a;
}
hi.prototype = {
  constructor: hi,
  scale: function(n) {
    return n === 1 ? this : new hi(this.k * n, this.x, this.y);
  },
  translate: function(n, i) {
    return n === 0 & i === 0 ? this : new hi(this.k, this.x + this.k * n, this.y + this.k * i);
  },
  apply: function(n) {
    return [n[0] * this.k + this.x, n[1] * this.k + this.y];
  },
  applyX: function(n) {
    return n * this.k + this.x;
  },
  applyY: function(n) {
    return n * this.k + this.y;
  },
  invert: function(n) {
    return [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k];
  },
  invertX: function(n) {
    return (n - this.x) / this.k;
  },
  invertY: function(n) {
    return (n - this.y) / this.k;
  },
  rescaleX: function(n) {
    return n.copy().domain(n.range().map(this.invertX, this).map(n.invert, n));
  },
  rescaleY: function(n) {
    return n.copy().domain(n.range().map(this.invertY, this).map(n.invert, n));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var $u = new hi(1, 0, 0);
n1.prototype = hi.prototype;
function n1(n) {
  for (; !n.__zoom; ) if (!(n = n.parentNode)) return $u;
  return n.__zoom;
}
function Fd(n) {
  n.stopImmediatePropagation();
}
function Jl(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function uA(n) {
  return (!n.ctrlKey || n.type === "wheel") && !n.button;
}
function cA() {
  var n = this;
  return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]]) : [[0, 0], [n.clientWidth, n.clientHeight]];
}
function tv() {
  return this.__zoom || $u;
}
function fA(n) {
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
}
function dA() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function hA(n, i, a) {
  var r = n.invertX(i[0][0]) - a[0][0], u = n.invertX(i[1][0]) - a[1][0], c = n.invertY(i[0][1]) - a[0][1], d = n.invertY(i[1][1]) - a[1][1];
  return n.translate(
    u > r ? (r + u) / 2 : Math.min(0, r) || Math.max(0, u),
    d > c ? (c + d) / 2 : Math.min(0, c) || Math.max(0, d)
  );
}
function i1() {
  var n = uA, i = cA, a = hA, r = fA, u = dA, c = [0, 1 / 0], d = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], h = 250, p = bu, m = Vu("start", "zoom", "end"), y, g, v, x = 500, w = 150, _ = 0, N = 10;
  function C(M) {
    M.property("__zoom", tv).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", G).on("dblclick.zoom", le).filter(u).on("touchstart.zoom", te).on("touchmove.zoom", ne).on("touchend.zoom touchcancel.zoom", ie).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(M, j, z, L) {
    var I = M.selection ? M.selection() : M;
    I.property("__zoom", tv), M !== I ? H(M, j, z, L) : I.interrupt().each(function() {
      D(this, arguments).event(L).start().zoom(null, typeof j == "function" ? j.apply(this, arguments) : j).end();
    });
  }, C.scaleBy = function(M, j, z, L) {
    C.scaleTo(M, function() {
      var I = this.__zoom.k, X = typeof j == "function" ? j.apply(this, arguments) : j;
      return I * X;
    }, z, L);
  }, C.scaleTo = function(M, j, z, L) {
    C.transform(M, function() {
      var I = i.apply(this, arguments), X = this.__zoom, ee = z == null ? E(I) : typeof z == "function" ? z.apply(this, arguments) : z, K = X.invert(ee), se = typeof j == "function" ? j.apply(this, arguments) : j;
      return a(T(U(X, se), ee, K), I, d);
    }, z, L);
  }, C.translateBy = function(M, j, z, L) {
    C.transform(M, function() {
      return a(this.__zoom.translate(
        typeof j == "function" ? j.apply(this, arguments) : j,
        typeof z == "function" ? z.apply(this, arguments) : z
      ), i.apply(this, arguments), d);
    }, null, L);
  }, C.translateTo = function(M, j, z, L, I) {
    C.transform(M, function() {
      var X = i.apply(this, arguments), ee = this.__zoom, K = L == null ? E(X) : typeof L == "function" ? L.apply(this, arguments) : L;
      return a($u.translate(K[0], K[1]).scale(ee.k).translate(
        typeof j == "function" ? -j.apply(this, arguments) : -j,
        typeof z == "function" ? -z.apply(this, arguments) : -z
      ), X, d);
    }, L, I);
  };
  function U(M, j) {
    return j = Math.max(c[0], Math.min(c[1], j)), j === M.k ? M : new hi(j, M.x, M.y);
  }
  function T(M, j, z) {
    var L = j[0] - z[0] * M.k, I = j[1] - z[1] * M.k;
    return L === M.x && I === M.y ? M : new hi(M.k, L, I);
  }
  function E(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function H(M, j, z, L) {
    M.on("start.zoom", function() {
      D(this, arguments).event(L).start();
    }).on("interrupt.zoom end.zoom", function() {
      D(this, arguments).event(L).end();
    }).tween("zoom", function() {
      var I = this, X = arguments, ee = D(I, X).event(L), K = i.apply(I, X), se = z == null ? E(K) : typeof z == "function" ? z.apply(I, X) : z, pe = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), A = I.__zoom, J = typeof j == "function" ? j.apply(I, X) : j, de = p(A.invert(se).concat(pe / A.k), J.invert(se).concat(pe / J.k));
      return function(re) {
        if (re === 1) re = J;
        else {
          var W = de(re), ce = pe / W[2];
          re = new hi(ce, se[0] - W[0] * ce, se[1] - W[1] * ce);
        }
        ee.zoom(null, re);
      };
    });
  }
  function D(M, j, z) {
    return !z && M.__zooming || new R(M, j);
  }
  function R(M, j) {
    this.that = M, this.args = j, this.active = 0, this.sourceEvent = null, this.extent = i.apply(M, j), this.taps = 0;
  }
  R.prototype = {
    event: function(M) {
      return M && (this.sourceEvent = M), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(M, j) {
      return this.mouse && M !== "mouse" && (this.mouse[1] = j.invert(this.mouse[0])), this.touch0 && M !== "touch" && (this.touch0[1] = j.invert(this.touch0[0])), this.touch1 && M !== "touch" && (this.touch1[1] = j.invert(this.touch1[0])), this.that.__zoom = j, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(M) {
      var j = tn(this.that).datum();
      m.call(
        M,
        this.that,
        new sA(M, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: m
        }),
        j
      );
    }
  };
  function V(M, ...j) {
    if (!n.apply(this, arguments)) return;
    var z = D(this, j).event(M), L = this.__zoom, I = Math.max(c[0], Math.min(c[1], L.k * Math.pow(2, r.apply(this, arguments)))), X = _n(M);
    if (z.wheel)
      (z.mouse[0][0] !== X[0] || z.mouse[0][1] !== X[1]) && (z.mouse[1] = L.invert(z.mouse[0] = X)), clearTimeout(z.wheel);
    else {
      if (L.k === I) return;
      z.mouse = [X, L.invert(X)], Su(this), z.start();
    }
    Jl(M), z.wheel = setTimeout(ee, w), z.zoom("mouse", a(T(U(L, I), z.mouse[0], z.mouse[1]), z.extent, d));
    function ee() {
      z.wheel = null, z.end();
    }
  }
  function G(M, ...j) {
    if (v || !n.apply(this, arguments)) return;
    var z = M.currentTarget, L = D(this, j, !0).event(M), I = tn(M.view).on("mousemove.zoom", se, !0).on("mouseup.zoom", pe, !0), X = _n(M, z), ee = M.clientX, K = M.clientY;
    Vb(M.view), Fd(M), L.mouse = [X, this.__zoom.invert(X)], Su(this), L.start();
    function se(A) {
      if (Jl(A), !L.moved) {
        var J = A.clientX - ee, de = A.clientY - K;
        L.moved = J * J + de * de > _;
      }
      L.event(A).zoom("mouse", a(T(L.that.__zoom, L.mouse[0] = _n(A, z), L.mouse[1]), L.extent, d));
    }
    function pe(A) {
      I.on("mousemove.zoom mouseup.zoom", null), Ib(A.view, L.moved), Jl(A), L.event(A).end();
    }
  }
  function le(M, ...j) {
    if (n.apply(this, arguments)) {
      var z = this.__zoom, L = _n(M.changedTouches ? M.changedTouches[0] : M, this), I = z.invert(L), X = z.k * (M.shiftKey ? 0.5 : 2), ee = a(T(U(z, X), L, I), i.apply(this, j), d);
      Jl(M), h > 0 ? tn(this).transition().duration(h).call(H, ee, L, M) : tn(this).call(C.transform, ee, L, M);
    }
  }
  function te(M, ...j) {
    if (n.apply(this, arguments)) {
      var z = M.touches, L = z.length, I = D(this, j, M.changedTouches.length === L).event(M), X, ee, K, se;
      for (Fd(M), ee = 0; ee < L; ++ee)
        K = z[ee], se = _n(K, this), se = [se, this.__zoom.invert(se), K.identifier], I.touch0 ? !I.touch1 && I.touch0[2] !== se[2] && (I.touch1 = se, I.taps = 0) : (I.touch0 = se, X = !0, I.taps = 1 + !!y);
      y && (y = clearTimeout(y)), X && (I.taps < 2 && (g = se[0], y = setTimeout(function() {
        y = null;
      }, x)), Su(this), I.start());
    }
  }
  function ne(M, ...j) {
    if (this.__zooming) {
      var z = D(this, j).event(M), L = M.changedTouches, I = L.length, X, ee, K, se;
      for (Jl(M), X = 0; X < I; ++X)
        ee = L[X], K = _n(ee, this), z.touch0 && z.touch0[2] === ee.identifier ? z.touch0[0] = K : z.touch1 && z.touch1[2] === ee.identifier && (z.touch1[0] = K);
      if (ee = z.that.__zoom, z.touch1) {
        var pe = z.touch0[0], A = z.touch0[1], J = z.touch1[0], de = z.touch1[1], re = (re = J[0] - pe[0]) * re + (re = J[1] - pe[1]) * re, W = (W = de[0] - A[0]) * W + (W = de[1] - A[1]) * W;
        ee = U(ee, Math.sqrt(re / W)), K = [(pe[0] + J[0]) / 2, (pe[1] + J[1]) / 2], se = [(A[0] + de[0]) / 2, (A[1] + de[1]) / 2];
      } else if (z.touch0) K = z.touch0[0], se = z.touch0[1];
      else return;
      z.zoom("touch", a(T(ee, K, se), z.extent, d));
    }
  }
  function ie(M, ...j) {
    if (this.__zooming) {
      var z = D(this, j).event(M), L = M.changedTouches, I = L.length, X, ee;
      for (Fd(M), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, x), X = 0; X < I; ++X)
        ee = L[X], z.touch0 && z.touch0[2] === ee.identifier ? delete z.touch0 : z.touch1 && z.touch1[2] === ee.identifier && delete z.touch1;
      if (z.touch1 && !z.touch0 && (z.touch0 = z.touch1, delete z.touch1), z.touch0) z.touch0[1] = this.__zoom.invert(z.touch0[0]);
      else if (z.end(), z.taps === 2 && (ee = _n(ee, this), Math.hypot(g[0] - ee[0], g[1] - ee[1]) < N)) {
        var K = tn(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : fu(+M), C) : r;
  }, C.filter = function(M) {
    return arguments.length ? (n = typeof M == "function" ? M : fu(!!M), C) : n;
  }, C.touchable = function(M) {
    return arguments.length ? (u = typeof M == "function" ? M : fu(!!M), C) : u;
  }, C.extent = function(M) {
    return arguments.length ? (i = typeof M == "function" ? M : fu([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), C) : i;
  }, C.scaleExtent = function(M) {
    return arguments.length ? (c[0] = +M[0], c[1] = +M[1], C) : [c[0], c[1]];
  }, C.translateExtent = function(M) {
    return arguments.length ? (d[0][0] = +M[0][0], d[1][0] = +M[1][0], d[0][1] = +M[0][1], d[1][1] = +M[1][1], C) : [[d[0][0], d[0][1]], [d[1][0], d[1][1]]];
  }, C.constrain = function(M) {
    return arguments.length ? (a = M, C) : a;
  }, C.duration = function(M) {
    return arguments.length ? (h = +M, C) : h;
  }, C.interpolate = function(M) {
    return arguments.length ? (p = M, C) : p;
  }, C.on = function() {
    var M = m.on.apply(m, arguments);
    return M === m ? C : M;
  }, C.clickDistance = function(M) {
    return arguments.length ? (_ = (M = +M) * M, C) : Math.sqrt(_);
  }, C.tapDistance = function(M) {
    return arguments.length ? (N = +M, C) : N;
  }, C;
}
const Cn = {
  error001: (n = "react") => `Seems like you have not used ${n === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${n}flow.dev/error#001`,
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (n) => `Node type "${n}" not found. Using fallback type "default".`,
  error004: () => "The parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (n) => `The old edge with id=${n} does not exist.`,
  error009: (n) => `Marker type "${n}" doesn't exist.`,
  error008: (n, { id: i, sourceHandle: a, targetHandle: r }) => `Couldn't create edge for ${n} handle id: "${n === "source" ? a : r}", edge id: ${i}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (n) => `Edge type "${n}" not found. Using fallback type "default".`,
  error012: (n) => `Node with id "${n}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (n = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${n}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (n) => `Edge with id "${n}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, cr = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], o1 = ["Enter", " ", "Escape"], a1 = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: n, x: i, y: a }) => `Moved selected node ${n}. New position, x: ${i}, y: ${a}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Ia;
(function(n) {
  n.Strict = "strict", n.Loose = "loose";
})(Ia || (Ia = {}));
var Ro;
(function(n) {
  n.Free = "free", n.Vertical = "vertical", n.Horizontal = "horizontal";
})(Ro || (Ro = {}));
var fr;
(function(n) {
  n.Partial = "partial", n.Full = "full";
})(fr || (fr = {}));
const l1 = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var Fi;
(function(n) {
  n.Bezier = "default", n.Straight = "straight", n.Step = "step", n.SmoothStep = "smoothstep", n.SimpleBezier = "simplebezier";
})(Fi || (Fi = {}));
var Hu;
(function(n) {
  n.Arrow = "arrow", n.ArrowClosed = "arrowclosed";
})(Hu || (Hu = {}));
var ye;
(function(n) {
  n.Left = "left", n.Top = "top", n.Right = "right", n.Bottom = "bottom";
})(ye || (ye = {}));
const nv = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
}, r1 = (n) => !!n && typeof n == "object" && "id" in n && "source" in n && "target" in n, gA = (n) => !!n && typeof n == "object" && "id" in n && "position" in n && !("source" in n) && !("target" in n), Xh = (n) => !!n && typeof n == "object" && "id" in n && "internals" in n && !("source" in n) && !("target" in n), vr = (n, i = [0, 0]) => {
  const { width: a, height: r } = Mn(n), u = n.origin ?? i, c = a * u[0], d = r * u[1];
  return {
    x: n.position.x - c,
    y: n.position.y - d
  };
}, pA = (n, i = { nodeOrigin: [0, 0] }) => {
  if (n.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let a = !1;
  const r = n.reduce((u, c) => {
    const d = typeof c == "string";
    let h = !i.nodeLookup && !d ? c : void 0;
    return i.nodeLookup && (h = d ? i.nodeLookup.get(c) : Xh(c) ? c : i.nodeLookup.get(c.id)), h ? (a = !0, Xu(u, ku(h, i.nodeOrigin))) : u;
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return a ? Gu(r) : { x: 0, y: 0, width: 0, height: 0 };
}, br = (n, i = {}) => {
  let a = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return n.forEach((u) => {
    (i.filter === void 0 || i.filter(u)) && (a = Xu(a, ku(u)), r = !0);
  }), r ? Gu(a) : { x: 0, y: 0, width: 0, height: 0 };
}, Gh = (n, i, [a, r, u] = [0, 0, 1], c = !1, d = !1) => {
  const h = (i.x - a) / u, p = (i.y - r) / u, m = i.width / u, y = i.height / u, g = [];
  for (const v of n.values()) {
    const { measured: x, selectable: w = !0, hidden: _ = !1 } = v;
    if (d && !w || _)
      continue;
    const N = x.width ?? v.width ?? v.initialWidth ?? 0, C = x.height ?? v.height ?? v.initialHeight ?? 0, { x: U, y: T } = v.internals.positionAbsolute, E = f1(h, p, m, y, U, T, N, C), H = N * C, D = c && E > 0;
    (!v.internals.handleBounds || D || E >= H || v.dragging) && g.push(v);
  }
  return g;
}, mA = (n, i) => {
  const a = /* @__PURE__ */ new Set();
  return n.forEach((r) => {
    a.add(r.id);
  }), i.filter((r) => a.has(r.source) || a.has(r.target));
};
function yA(n, i) {
  const a = /* @__PURE__ */ new Map(), r = i?.nodes ? new Set(i.nodes.map((u) => u.id)) : null;
  return n.forEach((u) => {
    let c;
    if (i?.includeHiddenNodes) {
      const { width: d, height: h } = Mn(u);
      c = d > 0 && h > 0;
    } else
      c = !!(u.measured.width && u.measured.height && !u.hidden);
    c && (!r || r.has(u.id)) && a.set(u.id, u);
  }), a;
}
async function vA({ nodes: n, width: i, height: a, panZoom: r, minZoom: u, maxZoom: c }, d) {
  if (n.size === 0)
    return !0;
  const h = yA(n, d), p = br(h), m = Qh(p, i, a, d?.minZoom ?? u, d?.maxZoom ?? c, d?.padding ?? 0.1);
  return await r.setViewport(m, {
    duration: d?.duration,
    ease: d?.ease,
    interpolate: d?.interpolate
  }), !0;
}
function s1({ nodeId: n, nextPosition: i, nodeLookup: a, nodeOrigin: r = [0, 0], nodeExtent: u, onError: c }) {
  const d = a.get(n), h = d.parentId ? a.get(d.parentId) : void 0, { x: p, y: m } = h ? h.internals.positionAbsolute : { x: 0, y: 0 }, y = d.origin ?? r;
  let g = d.extent || u;
  if (d.extent === "parent" && !d.expandParent)
    if (!h)
      c?.("005", Cn.error005());
    else {
      const { width: x, height: w } = Mn(h);
      x && w && (g = [
        [p, m],
        [p + x, m + w]
      ]);
    }
  else h && Uo(d.extent) && (g = [
    [d.extent[0][0] + p, d.extent[0][1] + m],
    [d.extent[1][0] + p, d.extent[1][1] + m]
  ]);
  const v = Uo(g) ? ko(i, g, d.measured) : i;
  return (d.measured.width === void 0 || d.measured.height === void 0) && c?.("015", Cn.error015()), {
    position: {
      x: v.x - p + (d.measured.width ?? 0) * y[0],
      y: v.y - m + (d.measured.height ?? 0) * y[1]
    },
    positionAbsolute: v
  };
}
async function bA({ nodesToRemove: n = [], edgesToRemove: i = [], nodes: a, edges: r, onBeforeDelete: u }) {
  const c = new Set(n.map((v) => v.id)), d = [];
  for (const v of a) {
    if (v.deletable === !1)
      continue;
    const x = c.has(v.id), w = !x && v.parentId && d.find((_) => _.id === v.parentId);
    (x || w) && d.push(v);
  }
  const h = new Set(i.map((v) => v.id)), p = r.filter((v) => v.deletable !== !1), y = mA(d, p);
  for (const v of p)
    h.has(v.id) && !y.find((w) => w.id === v.id) && y.push(v);
  if (!u)
    return {
      edges: y,
      nodes: d
    };
  const g = await u({
    nodes: d,
    edges: y
  });
  return typeof g == "boolean" ? g ? { edges: y, nodes: d } : { edges: [], nodes: [] } : g;
}
const qa = (n, i = 0, a = 1) => Math.min(Math.max(n, i), a), ko = (n = { x: 0, y: 0 }, i, a) => ({
  x: qa(n.x, i[0][0], i[1][0] - (a?.width ?? 0)),
  y: qa(n.y, i[0][1], i[1][1] - (a?.height ?? 0))
});
function u1(n, i, a) {
  const { width: r, height: u } = Mn(a), { x: c, y: d } = a.internals.positionAbsolute;
  return ko(n, [
    [c, d],
    [c + r, d + u]
  ], i);
}
const iv = (n, i, a) => n < i ? qa(Math.abs(n - i), 1, i) / i : n > a ? -qa(Math.abs(n - a), 1, i) / i : 0, Zh = (n, i, a = 15, r = 40) => {
  const u = iv(n.x, r, i.width - r) * a, c = iv(n.y, r, i.height - r) * a;
  return [u, c];
}, Xu = (n, i) => ({
  x: Math.min(n.x, i.x),
  y: Math.min(n.y, i.y),
  x2: Math.max(n.x2, i.x2),
  y2: Math.max(n.y2, i.y2)
}), _h = ({ x: n, y: i, width: a, height: r }) => ({
  x: n,
  y: i,
  x2: n + a,
  y2: i + r
}), Gu = ({ x: n, y: i, x2: a, y2: r }) => ({
  x: n,
  y: i,
  width: a - n,
  height: r - i
}), dr = (n, i = [0, 0]) => {
  const { x: a, y: r } = Xh(n) ? n.internals.positionAbsolute : vr(n, i);
  return {
    x: a,
    y: r,
    width: n.measured?.width ?? n.width ?? n.initialWidth ?? 0,
    height: n.measured?.height ?? n.height ?? n.initialHeight ?? 0
  };
}, ku = (n, i = [0, 0]) => {
  const { x: a, y: r } = Xh(n) ? n.internals.positionAbsolute : vr(n, i);
  return {
    x: a,
    y: r,
    x2: a + (n.measured?.width ?? n.width ?? n.initialWidth ?? 0),
    y2: r + (n.measured?.height ?? n.height ?? n.initialHeight ?? 0)
  };
}, c1 = (n, i) => Gu(Xu(_h(n), _h(i))), f1 = (n, i, a, r, u, c, d, h) => {
  const p = Math.max(0, Math.min(n + a, u + d) - Math.max(n, u)), m = Math.max(0, Math.min(i + r, c + h) - Math.max(i, c));
  return Math.ceil(p * m);
}, Uu = (n, i) => f1(n.x, n.y, n.width, n.height, i.x, i.y, i.width, i.height), ov = (n) => Nn(n.width) && Nn(n.height) && Nn(n.x) && Nn(n.y), Nn = (n) => !isNaN(n) && isFinite(n), d1 = (n, i) => (a, r) => {
}, xr = (n, i = [1, 1]) => ({
  x: i[0] * Math.round(n.x / i[0]),
  y: i[1] * Math.round(n.y / i[1])
}), wr = ({ x: n, y: i }, [a, r, u], c = !1, d = [1, 1]) => {
  const h = {
    x: (n - a) / u,
    y: (i - r) / u
  };
  return c ? xr(h, d) : h;
}, Ya = ({ x: n, y: i }, [a, r, u]) => ({
  x: n * u + a,
  y: i * u + r
});
function Ra(n, i) {
  if (typeof n == "number")
    return Math.floor((i - i / (1 + n)) * 0.5);
  if (typeof n == "string" && n.endsWith("px")) {
    const a = parseFloat(n);
    if (!Number.isNaN(a))
      return Math.floor(a);
  }
  if (typeof n == "string" && n.endsWith("%")) {
    const a = parseFloat(n);
    if (!Number.isNaN(a))
      return Math.floor(i * a * 0.01);
  }
  return console.error(`The padding value "${n}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function xA(n, i, a) {
  if (typeof n == "string" || typeof n == "number") {
    const r = Ra(n, a), u = Ra(n, i);
    return {
      top: r,
      right: u,
      bottom: r,
      left: u,
      x: u * 2,
      y: r * 2
    };
  }
  if (typeof n == "object") {
    const r = Ra(n.top ?? n.y ?? 0, a), u = Ra(n.bottom ?? n.y ?? 0, a), c = Ra(n.left ?? n.x ?? 0, i), d = Ra(n.right ?? n.x ?? 0, i);
    return { top: r, right: d, bottom: u, left: c, x: c + d, y: r + u };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function wA(n, i, a, r, u, c) {
  const { x: d, y: h } = Ya(n, [i, a, r]), { x: p, y: m } = Ya({ x: n.x + n.width, y: n.y + n.height }, [i, a, r]), y = u - p, g = c - m;
  return {
    left: Math.floor(d),
    top: Math.floor(h),
    right: Math.floor(y),
    bottom: Math.floor(g)
  };
}
const Qh = (n, i, a, r, u, c) => {
  const d = xA(c, i, a), h = (i - d.x) / n.width, p = (a - d.y) / n.height, m = Math.min(h, p), y = qa(m, r, u), g = n.x + n.width / 2, v = n.y + n.height / 2, x = i / 2 - g * y, w = a / 2 - v * y, _ = wA(n, x, w, y, i, a), N = {
    left: Math.min(_.left - d.left, 0),
    top: Math.min(_.top - d.top, 0),
    right: Math.min(_.right - d.right, 0),
    bottom: Math.min(_.bottom - d.bottom, 0)
  };
  return {
    x: x - N.left + N.right,
    y: w - N.top + N.bottom,
    zoom: y
  };
}, hr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Uo(n) {
  return n != null && n !== "parent";
}
function Mn(n) {
  return {
    width: n.measured?.width ?? n.width ?? n.initialWidth ?? 0,
    height: n.measured?.height ?? n.height ?? n.initialHeight ?? 0
  };
}
function h1(n) {
  return (n.measured?.width ?? n.width ?? n.initialWidth) !== void 0 && (n.measured?.height ?? n.height ?? n.initialHeight) !== void 0;
}
function g1(n, i = { width: 0, height: 0 }, a, r, u) {
  const c = { ...n }, d = r.get(a);
  if (d) {
    const h = d.origin || u;
    c.x += d.internals.positionAbsolute.x - (i.width ?? 0) * h[0], c.y += d.internals.positionAbsolute.y - (i.height ?? 0) * h[1];
  }
  return c;
}
function av(n, i) {
  if (n.size !== i.size)
    return !1;
  for (const a of n)
    if (!i.has(a))
      return !1;
  return !0;
}
function SA() {
  let n, i;
  return { promise: new Promise((r, u) => {
    n = r, i = u;
  }), resolve: n, reject: i };
}
function _A(n) {
  return { ...a1, ...n || {} };
}
function p1(n) {
  return n === null ? null : n ? "valid" : "invalid";
}
function or(n, { snapGrid: i = [0, 0], snapToGrid: a = !1, transform: r, containerBounds: u }) {
  const { x: c, y: d } = Tn(n), h = wr({ x: c - (u?.left ?? 0), y: d - (u?.top ?? 0) }, r), { x: p, y: m } = a ? xr(h, i) : h;
  return {
    xSnapped: p,
    ySnapped: m,
    ...h
  };
}
const Kh = (n) => ({
  width: n.offsetWidth,
  height: n.offsetHeight
}), m1 = (n) => n?.getRootNode?.() || window?.document, EA = ["INPUT", "SELECT", "TEXTAREA"];
function y1(n) {
  const i = n.composedPath?.()?.[0] || n.target;
  return i?.nodeType !== 1 ? !1 : EA.includes(i.nodeName) || i.hasAttribute("contenteditable") || !!i.closest(".nokey");
}
const v1 = (n) => "clientX" in n, Tn = (n, i) => {
  const a = v1(n), r = a ? n.clientX : n.touches?.[0].clientX, u = a ? n.clientY : n.touches?.[0].clientY;
  return {
    x: r - (i?.left ?? 0),
    y: u - (i?.top ?? 0)
  };
}, lv = (n, i, a, r, u) => {
  const c = i.querySelectorAll(`.${n}`);
  return !c || !c.length ? null : Array.from(c).map((d) => {
    const h = d.getBoundingClientRect();
    return {
      id: d.getAttribute("data-handleid"),
      type: n,
      nodeId: u,
      position: d.getAttribute("data-handlepos"),
      x: (h.left - a.left) / r,
      y: (h.top - a.top) / r,
      ...Kh(d)
    };
  });
};
function b1({ sourceX: n, sourceY: i, targetX: a, targetY: r, sourceControlX: u, sourceControlY: c, targetControlX: d, targetControlY: h }) {
  const p = n * 0.125 + u * 0.375 + d * 0.375 + a * 0.125, m = i * 0.125 + c * 0.375 + h * 0.375 + r * 0.125, y = Math.abs(p - n), g = Math.abs(m - i);
  return [p, m, y, g];
}
function du(n, i) {
  return n >= 0 ? 0.5 * n : i * 25 * Math.sqrt(-n);
}
function rv({ pos: n, x1: i, y1: a, x2: r, y2: u, c }) {
  switch (n) {
    case ye.Left:
      return [i - du(i - r, c), a];
    case ye.Right:
      return [i + du(r - i, c), a];
    case ye.Top:
      return [i, a - du(a - u, c)];
    case ye.Bottom:
      return [i, a + du(u - a, c)];
  }
}
function x1({ sourceX: n, sourceY: i, sourcePosition: a = ye.Bottom, targetX: r, targetY: u, targetPosition: c = ye.Top, curvature: d = 0.25 }) {
  const [h, p] = rv({
    pos: a,
    x1: n,
    y1: i,
    x2: r,
    y2: u,
    c: d
  }), [m, y] = rv({
    pos: c,
    x1: r,
    y1: u,
    x2: n,
    y2: i,
    c: d
  }), [g, v, x, w] = b1({
    sourceX: n,
    sourceY: i,
    targetX: r,
    targetY: u,
    sourceControlX: h,
    sourceControlY: p,
    targetControlX: m,
    targetControlY: y
  });
  return [
    `M${n},${i} C${h},${p} ${m},${y} ${r},${u}`,
    g,
    v,
    x,
    w
  ];
}
function w1({ sourceX: n, sourceY: i, targetX: a, targetY: r }) {
  const u = Math.abs(a - n) / 2, c = a < n ? a + u : a - u, d = Math.abs(r - i) / 2, h = r < i ? r + d : r - d;
  return [c, h, u, d];
}
function NA({ sourceNode: n, targetNode: i, selected: a = !1, zIndex: r = 0, elevateOnSelect: u = !1, zIndexMode: c = "basic" }) {
  if (c === "manual")
    return r;
  const d = u && a ? r + 1e3 : r, h = Math.max(n.parentId || u && n.selected ? n.internals.z : 0, i.parentId || u && i.selected ? i.internals.z : 0);
  return d + h;
}
function TA({ sourceNode: n, targetNode: i, width: a, height: r, transform: u }) {
  const c = Xu(ku(n), ku(i));
  c.x === c.x2 && (c.x2 += 1), c.y === c.y2 && (c.y2 += 1);
  const d = {
    x: -u[0] / u[2],
    y: -u[1] / u[2],
    width: a / u[2],
    height: r / u[2]
  };
  return Uu(d, Gu(c)) > 0;
}
const CA = ({ source: n, sourceHandle: i, target: a, targetHandle: r }) => `xy-edge__${n}${i || ""}-${a}${r || ""}`, AA = (n, i) => i.some((a) => a.source === n.source && a.target === n.target && (a.sourceHandle === n.sourceHandle || !a.sourceHandle && !n.sourceHandle) && (a.targetHandle === n.targetHandle || !a.targetHandle && !n.targetHandle)), MA = (n, i, a = {}) => {
  if (!n.source || !n.target)
    return a.onError?.("006", Cn.error006()), i;
  const r = a.getEdgeId || CA;
  let u;
  return r1(n) ? u = { ...n } : u = {
    ...n,
    id: r(n)
  }, AA(u, i) ? i : (u.sourceHandle === null && delete u.sourceHandle, u.targetHandle === null && delete u.targetHandle, i.concat(u));
};
function S1({ sourceX: n, sourceY: i, targetX: a, targetY: r }) {
  const [u, c, d, h] = w1({
    sourceX: n,
    sourceY: i,
    targetX: a,
    targetY: r
  });
  return [`M ${n},${i}L ${a},${r}`, u, c, d, h];
}
const sv = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, OA = ({ source: n, sourcePosition: i = ye.Bottom, target: a }) => i === ye.Left || i === ye.Right ? n.x < a.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : n.y < a.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, uv = (n, i) => Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2));
function zA({ source: n, sourcePosition: i = ye.Bottom, target: a, targetPosition: r = ye.Top, center: u, offset: c, stepPosition: d }) {
  const h = sv[i], p = sv[r], m = { x: n.x + h.x * c, y: n.y + h.y * c }, y = { x: a.x + p.x * c, y: a.y + p.y * c }, g = OA({
    source: m,
    sourcePosition: i,
    target: y
  }), v = g.x !== 0 ? "x" : "y", x = g[v];
  let w = [], _, N;
  const C = { x: 0, y: 0 }, U = { x: 0, y: 0 }, [, , T, E] = w1({
    sourceX: n.x,
    sourceY: n.y,
    targetX: a.x,
    targetY: a.y
  });
  if (h[v] * p[v] === -1) {
    v === "x" ? (_ = u.x ?? m.x + (y.x - m.x) * d, N = u.y ?? (m.y + y.y) / 2) : (_ = u.x ?? (m.x + y.x) / 2, N = u.y ?? m.y + (y.y - m.y) * d);
    const V = [
      { x: _, y: m.y },
      { x: _, y: y.y }
    ], G = [
      { x: m.x, y: N },
      { x: y.x, y: N }
    ];
    h[v] === x ? w = v === "x" ? V : G : w = v === "x" ? G : V;
  } else {
    const V = [{ x: m.x, y: y.y }], G = [{ x: y.x, y: m.y }];
    if (v === "x" ? w = h.x === x ? G : V : w = h.y === x ? V : G, i === r) {
      const M = Math.abs(n[v] - a[v]);
      if (M <= c) {
        const j = Math.min(c - 1, c - M);
        h[v] === x ? C[v] = (m[v] > n[v] ? -1 : 1) * j : U[v] = (y[v] > a[v] ? -1 : 1) * j;
      }
    }
    if (i !== r) {
      const M = v === "x" ? "y" : "x", j = h[v] === p[M], z = m[M] > y[M], L = m[M] < y[M];
      (h[v] === 1 && (!j && z || j && L) || h[v] !== 1 && (!j && L || j && z)) && (w = v === "x" ? V : G);
    }
    const le = { x: m.x + C.x, y: m.y + C.y }, te = { x: y.x + U.x, y: y.y + U.y }, ne = Math.max(Math.abs(le.x - w[0].x), Math.abs(te.x - w[0].x)), ie = Math.max(Math.abs(le.y - w[0].y), Math.abs(te.y - w[0].y));
    ne >= ie ? (_ = (le.x + te.x) / 2, N = w[0].y) : (_ = w[0].x, N = (le.y + te.y) / 2);
  }
  const H = { x: m.x + C.x, y: m.y + C.y }, D = { x: y.x + U.x, y: y.y + U.y };
  return [[
    n,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...H.x !== w[0].x || H.y !== w[0].y ? [H] : [],
    ...w,
    ...D.x !== w[w.length - 1].x || D.y !== w[w.length - 1].y ? [D] : [],
    a
  ], _, N, T, E];
}
function RA(n, i, a, r) {
  const u = Math.min(uv(n, i) / 2, uv(i, a) / 2, r), { x: c, y: d } = i;
  if (n.x === c && c === a.x || n.y === d && d === a.y)
    return `L${c} ${d}`;
  if (n.y === d) {
    const m = n.x < a.x ? -1 : 1, y = n.y < a.y ? 1 : -1;
    return `L ${c + u * m},${d}Q ${c},${d} ${c},${d + u * y}`;
  }
  const h = n.x < a.x ? 1 : -1, p = n.y < a.y ? -1 : 1;
  return `L ${c},${d + u * p}Q ${c},${d} ${c + u * h},${d}`;
}
function Bu({ sourceX: n, sourceY: i, sourcePosition: a = ye.Bottom, targetX: r, targetY: u, targetPosition: c = ye.Top, borderRadius: d = 5, centerX: h, centerY: p, offset: m = 20, stepPosition: y = 0.5 }) {
  const [g, v, x, w, _] = zA({
    source: { x: n, y: i },
    sourcePosition: a,
    target: { x: r, y: u },
    targetPosition: c,
    center: { x: h, y: p },
    offset: m,
    stepPosition: y
  });
  let N = `M${g[0].x} ${g[0].y}`;
  for (let C = 1; C < g.length - 1; C++)
    N += RA(g[C - 1], g[C], g[C + 1], d);
  return N += `L${g[g.length - 1].x} ${g[g.length - 1].y}`, [N, v, x, w, _];
}
function cv(n) {
  return n && !!(n.internals.handleBounds || n.handles?.length) && !!(n.measured.width || n.width || n.initialWidth);
}
function DA(n) {
  const { sourceNode: i, targetNode: a } = n;
  if (!cv(i) || !cv(a))
    return null;
  const r = i.internals.handleBounds || fv(i.handles), u = a.internals.handleBounds || fv(a.handles), c = dv(r?.source ?? [], n.sourceHandle), d = dv(
    // when connection type is loose we can define all handles as sources and connect source -> source
    n.connectionMode === Ia.Strict ? u?.target ?? [] : (u?.target ?? []).concat(u?.source ?? []),
    n.targetHandle
  );
  if (!c || !d)
    return n.onError?.("008", Cn.error008(c ? "target" : "source", {
      id: n.id,
      sourceHandle: n.sourceHandle,
      targetHandle: n.targetHandle
    })), null;
  const h = c?.position || ye.Bottom, p = d?.position || ye.Top, m = Bo(i, c, h), y = Bo(a, d, p);
  return {
    sourceX: m.x,
    sourceY: m.y,
    targetX: y.x,
    targetY: y.y,
    sourcePosition: h,
    targetPosition: p
  };
}
function fv(n) {
  if (!n)
    return null;
  const i = [], a = [];
  for (const r of n)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? i.push(r) : r.type === "target" && a.push(r);
  return {
    source: i,
    target: a
  };
}
function Bo(n, i, a = ye.Left, r = !1) {
  const u = (i?.x ?? 0) + n.internals.positionAbsolute.x, c = (i?.y ?? 0) + n.internals.positionAbsolute.y, { width: d, height: h } = i ?? Mn(n);
  if (r)
    return { x: u + d / 2, y: c + h / 2 };
  switch (i?.position ?? a) {
    case ye.Top:
      return { x: u + d / 2, y: c };
    case ye.Right:
      return { x: u + d, y: c + h / 2 };
    case ye.Bottom:
      return { x: u + d / 2, y: c + h };
    case ye.Left:
      return { x: u, y: c + h / 2 };
  }
}
function dv(n, i) {
  return n && (i ? n.find((a) => a.id === i) : n[0]) || null;
}
function Eh(n, i) {
  return n ? typeof n == "string" ? n : `${i ? `${i}__` : ""}${Object.keys(n).sort().map((r) => `${r}=${n[r]}`).join("&")}` : "";
}
function HA(n, { id: i, defaultColor: a, defaultMarkerStart: r, defaultMarkerEnd: u }) {
  const c = /* @__PURE__ */ new Set();
  return n.reduce((d, h) => ([h.markerStart || r, h.markerEnd || u].forEach((p) => {
    if (p && typeof p == "object") {
      const m = Eh(p, i);
      c.has(m) || (d.push({ id: m, color: p.color || a, ...p }), c.add(m));
    }
  }), d), []).sort((d, h) => d.id.localeCompare(h.id));
}
const _1 = 1e3, kA = 10, Fh = {
  nodeOrigin: [0, 0],
  nodeExtent: cr,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, UA = {
  ...Fh,
  checkEquality: !0
};
function Jh(n, i) {
  const a = { ...n };
  for (const r in i)
    i[r] !== void 0 && (a[r] = i[r]);
  return a;
}
function BA(n, i, a) {
  const r = Jh(Fh, a);
  for (const u of n.values())
    if (u.parentId)
      Wh(u, n, i, r);
    else {
      const c = vr(u, r.nodeOrigin), d = Uo(u.extent) ? u.extent : r.nodeExtent, h = ko(c, d, Mn(u));
      u.internals.positionAbsolute = h;
    }
}
function LA(n, i) {
  if (!n.handles)
    return n.measured ? i?.internals.handleBounds : void 0;
  const a = [], r = [];
  for (const u of n.handles) {
    const c = {
      id: u.id,
      width: u.width ?? 1,
      height: u.height ?? 1,
      nodeId: n.id,
      x: u.x,
      y: u.y,
      position: u.position,
      type: u.type
    };
    u.type === "source" ? a.push(c) : u.type === "target" && r.push(c);
  }
  return {
    source: a,
    target: r
  };
}
function Ph(n) {
  return n === "manual";
}
function Nh(n, i, a, r = {}) {
  const u = Jh(UA, r), c = { i: 0 }, d = new Map(i), h = u?.elevateNodesOnSelect && !Ph(u.zIndexMode) ? _1 : 0;
  let p = n.length > 0, m = !1;
  i.clear(), a.clear();
  for (const y of n) {
    let g = d.get(y.id);
    if (u.checkEquality && y === g?.internals.userNode)
      i.set(y.id, g);
    else {
      const v = vr(y, u.nodeOrigin), x = Uo(y.extent) ? y.extent : u.nodeExtent, w = ko(v, x, Mn(y));
      g = {
        ...u.defaults,
        ...y,
        measured: {
          width: y.measured?.width,
          height: y.measured?.height
        },
        internals: {
          positionAbsolute: w,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: LA(y, g),
          z: E1(y, h, u.zIndexMode),
          userNode: y
        }
      }, i.set(y.id, g);
    }
    (g.measured === void 0 || g.measured.width === void 0 || g.measured.height === void 0) && !g.hidden && (p = !1), y.parentId && Wh(g, i, a, r, c), m ||= y.selected ?? !1;
  }
  return { nodesInitialized: p, hasSelectedNodes: m };
}
function jA(n, i) {
  if (!n.parentId)
    return;
  const a = i.get(n.parentId);
  a ? a.set(n.id, n) : i.set(n.parentId, /* @__PURE__ */ new Map([[n.id, n]]));
}
function Wh(n, i, a, r, u) {
  const { elevateNodesOnSelect: c, nodeOrigin: d, nodeExtent: h, zIndexMode: p } = Jh(Fh, r), m = n.parentId, y = i.get(m);
  if (!y) {
    console.warn(`Parent node ${m} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  jA(n, a), u && !y.parentId && y.internals.rootParentIndex === void 0 && p === "auto" && (y.internals.rootParentIndex = ++u.i, y.internals.z = y.internals.z + u.i * kA), u && y.internals.rootParentIndex !== void 0 && (u.i = y.internals.rootParentIndex);
  const g = c && !Ph(p) ? _1 : 0, { x: v, y: x, z: w } = VA(n, y, d, h, g, p), { positionAbsolute: _ } = n.internals, N = v !== _.x || x !== _.y;
  (N || w !== n.internals.z) && i.set(n.id, {
    ...n,
    internals: {
      ...n.internals,
      positionAbsolute: N ? { x: v, y: x } : _,
      z: w
    }
  });
}
function E1(n, i, a) {
  const r = Nn(n.zIndex) ? n.zIndex : 0;
  return Ph(a) ? r : r + (n.selected ? i : 0);
}
function VA(n, i, a, r, u, c) {
  const { x: d, y: h } = i.internals.positionAbsolute, p = Mn(n), m = vr(n, a), y = Uo(n.extent) ? ko(m, n.extent, p) : m;
  let g = ko({ x: d + y.x, y: h + y.y }, r, p);
  n.extent === "parent" && (g = u1(g, p, i));
  const v = E1(n, u, c), x = i.internals.z ?? 0;
  return {
    x: g.x,
    y: g.y,
    z: x >= v ? x + 1 : v
  };
}
function eg(n, i, a, r = [0, 0]) {
  const u = [], c = /* @__PURE__ */ new Map();
  for (const d of n) {
    const h = i.get(d.parentId);
    if (!h)
      continue;
    const p = c.get(d.parentId)?.expandedRect ?? dr(h), m = c1(p, d.rect);
    c.set(d.parentId, { expandedRect: m, parent: h });
  }
  return c.size > 0 && c.forEach(({ expandedRect: d, parent: h }, p) => {
    const m = h.internals.positionAbsolute, y = Mn(h), g = h.origin ?? r, v = d.x < m.x ? Math.round(Math.abs(m.x - d.x)) : 0, x = d.y < m.y ? Math.round(Math.abs(m.y - d.y)) : 0, w = Math.max(y.width, Math.round(d.width)), _ = Math.max(y.height, Math.round(d.height)), N = (w - y.width) * g[0], C = (_ - y.height) * g[1];
    (v > 0 || x > 0 || N || C) && (u.push({
      id: p,
      type: "position",
      position: {
        x: h.position.x - v + N,
        y: h.position.y - x + C
      }
    }), a.get(p)?.forEach((U) => {
      n.some((T) => T.id === U.id) || u.push({
        id: U.id,
        type: "position",
        position: {
          x: U.position.x + v,
          y: U.position.y + x
        }
      });
    })), (y.width < d.width || y.height < d.height || v || x) && u.push({
      id: p,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: w + (v ? g[0] * v - N : 0),
        height: _ + (x ? g[1] * x - C : 0)
      }
    });
  }), u;
}
function IA(n, i, a, r, u, c, d) {
  const h = r?.querySelector(".xyflow__viewport");
  let p = !1;
  if (!h)
    return { changes: [], updatedInternals: p };
  const m = [], y = window.getComputedStyle(h), { m22: g } = new window.DOMMatrixReadOnly(y.transform), v = [];
  for (const x of n.values()) {
    const w = i.get(x.id);
    if (!w)
      continue;
    if (w.hidden) {
      i.set(w.id, {
        ...w,
        internals: {
          ...w.internals,
          handleBounds: void 0
        }
      }), p = !0;
      continue;
    }
    const _ = Kh(x.nodeElement), N = w.measured.width !== _.width || w.measured.height !== _.height;
    if (!!(_.width && _.height && (N || !w.internals.handleBounds || x.force))) {
      const U = x.nodeElement.getBoundingClientRect(), T = Uo(w.extent) ? w.extent : c;
      let { positionAbsolute: E } = w.internals;
      if (w.parentId && w.extent === "parent") {
        const D = i.get(w.parentId);
        D && (E = u1(E, _, D));
      } else T && (E = ko(E, T, _));
      const H = {
        ...w,
        measured: _,
        internals: {
          ...w.internals,
          positionAbsolute: E,
          handleBounds: {
            source: lv("source", x.nodeElement, U, g, w.id),
            target: lv("target", x.nodeElement, U, g, w.id)
          }
        }
      };
      i.set(w.id, H), w.parentId && Wh(H, i, a, { nodeOrigin: u, zIndexMode: d }), p = !0, N && (m.push({
        id: w.id,
        type: "dimensions",
        dimensions: _
      }), w.expandParent && w.parentId && v.push({
        id: w.id,
        parentId: w.parentId,
        rect: dr(H, u)
      }));
    }
  }
  if (v.length > 0) {
    const x = eg(v, i, a, u);
    m.push(...x);
  }
  return { changes: m, updatedInternals: p };
}
async function qA({ delta: n, panZoom: i, transform: a, translateExtent: r, width: u, height: c }) {
  if (!i || !n.x && !n.y)
    return !1;
  const d = await i.setViewportConstrained({
    x: a[0] + n.x,
    y: a[1] + n.y,
    zoom: a[2]
  }, [
    [0, 0],
    [u, c]
  ], r);
  return !!d && (d.x !== a[0] || d.y !== a[1] || d.k !== a[2]);
}
function hv(n, i, a, r, u, c) {
  let d = u;
  const h = r.get(d) || /* @__PURE__ */ new Map();
  r.set(d, h.set(a, i)), d = `${u}-${n}`;
  const p = r.get(d) || /* @__PURE__ */ new Map();
  if (r.set(d, p.set(a, i)), c) {
    d = `${u}-${n}-${c}`;
    const m = r.get(d) || /* @__PURE__ */ new Map();
    r.set(d, m.set(a, i));
  }
}
function N1(n, i, a) {
  n.clear(), i.clear();
  for (const r of a) {
    const { source: u, target: c, sourceHandle: d = null, targetHandle: h = null } = r, p = { edgeId: r.id, source: u, target: c, sourceHandle: d, targetHandle: h }, m = `${u}-${d}--${c}-${h}`, y = `${c}-${h}--${u}-${d}`;
    hv("source", p, y, n, u, d), hv("target", p, m, n, c, h), i.set(r.id, r);
  }
}
function T1(n, i) {
  if (!n.parentId)
    return !1;
  const a = i.get(n.parentId);
  return a ? a.selected ? !0 : T1(a, i) : !1;
}
function gv(n, i, a) {
  let r = n;
  do {
    if (r?.matches?.(i))
      return !0;
    if (r === a)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function YA(n, i, a, r) {
  const u = /* @__PURE__ */ new Map();
  for (const [c, d] of n)
    if ((d.selected || d.id === r) && (!d.parentId || !T1(d, n)) && (d.draggable || i && typeof d.draggable > "u")) {
      const h = n.get(c);
      h && u.set(c, {
        id: c,
        position: h.position || { x: 0, y: 0 },
        distance: {
          x: a.x - h.internals.positionAbsolute.x,
          y: a.y - h.internals.positionAbsolute.y
        },
        extent: h.extent,
        parentId: h.parentId,
        origin: h.origin,
        expandParent: h.expandParent,
        internals: {
          positionAbsolute: h.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: h.measured.width ?? 0,
          height: h.measured.height ?? 0
        }
      });
    }
  return u;
}
function Jd({ nodeId: n, dragItems: i, nodeLookup: a, dragging: r = !0 }) {
  const u = [];
  for (const [d, h] of i) {
    const p = a.get(d)?.internals.userNode;
    p && u.push({
      ...p,
      position: h.position,
      dragging: r
    });
  }
  if (!n)
    return [u[0], u];
  const c = a.get(n)?.internals.userNode;
  return [
    c ? {
      ...c,
      position: i.get(n)?.position || c.position,
      dragging: r
    } : u[0],
    u
  ];
}
function $A({ dragItems: n, snapGrid: i, x: a, y: r }) {
  const u = n.values().next().value;
  if (!u)
    return null;
  const c = {
    x: a - u.distance.x,
    y: r - u.distance.y
  }, d = xr(c, i);
  return {
    x: d.x - c.x,
    y: d.y - c.y
  };
}
function XA({ onNodeMouseDown: n, getStoreItems: i, onDragStart: a, onDrag: r, onDragStop: u }) {
  let c = { x: null, y: null }, d = 0, h = /* @__PURE__ */ new Map(), p = !1, m = { x: 0, y: 0 }, y = null, g = !1, v = null, x = !1, w = !1, _ = null;
  function N({ noDragClassName: U, handleSelector: T, domNode: E, isSelectable: H, nodeId: D, nodeClickDistance: R = 0 }) {
    v = tn(E);
    function V({ x: ne, y: ie }) {
      const { nodeLookup: M, nodeExtent: j, snapGrid: z, snapToGrid: L, nodeOrigin: I, onNodeDrag: X, onSelectionDrag: ee, onError: K, updateNodePositions: se } = i();
      c = { x: ne, y: ie };
      let pe = !1;
      const A = h.size > 1, J = A && j ? _h(br(h)) : null, de = A && L ? $A({
        dragItems: h,
        snapGrid: z,
        x: ne,
        y: ie
      }) : null;
      for (const [re, W] of h) {
        if (!M.has(re))
          continue;
        let ce = { x: ne - W.distance.x, y: ie - W.distance.y };
        L && (ce = de ? {
          x: Math.round(ce.x + de.x),
          y: Math.round(ce.y + de.y)
        } : xr(ce, z));
        let he = null;
        if (A && j && !W.extent && J) {
          const { positionAbsolute: be } = W.internals, _e = be.x - J.x + j[0][0], Ee = be.x + W.measured.width - J.x2 + j[1][0], Ce = be.y - J.y + j[0][1], He = be.y + W.measured.height - J.y2 + j[1][1];
          he = [
            [_e, Ce],
            [Ee, He]
          ];
        }
        const { position: ue, positionAbsolute: fe } = s1({
          nodeId: re,
          nextPosition: ce,
          nodeLookup: M,
          nodeExtent: he || j,
          nodeOrigin: I,
          onError: K
        });
        pe = pe || W.position.x !== ue.x || W.position.y !== ue.y, W.position = ue, W.internals.positionAbsolute = fe;
      }
      if (w = w || pe, !!pe && (se(h, !0), _ && (r || X || !D && ee))) {
        const [re, W] = Jd({
          nodeId: D,
          dragItems: h,
          nodeLookup: M
        });
        r?.(_, h, re, W), X?.(_, re, W), D || ee?.(_, W);
      }
    }
    async function G() {
      if (!y)
        return;
      const { transform: ne, panBy: ie, autoPanSpeed: M, autoPanOnNodeDrag: j } = i();
      if (!j) {
        p = !1, cancelAnimationFrame(d);
        return;
      }
      const [z, L] = Zh(m, y, M);
      (z !== 0 || L !== 0) && (c.x = (c.x ?? 0) - z / ne[2], c.y = (c.y ?? 0) - L / ne[2], await ie({ x: z, y: L }) && V(c)), d = requestAnimationFrame(G);
    }
    function le(ne) {
      const { nodeLookup: ie, multiSelectionActive: M, nodesDraggable: j, transform: z, snapGrid: L, snapToGrid: I, selectNodesOnDrag: X, onNodeDragStart: ee, onSelectionDragStart: K, unselectNodesAndEdges: se } = i();
      g = !0, (!X || !H) && !M && D && (ie.get(D)?.selected || se()), H && X && D && n?.(D);
      const pe = or(ne.sourceEvent, { transform: z, snapGrid: L, snapToGrid: I, containerBounds: y });
      if (c = pe, h = YA(ie, j, pe, D), h.size > 0 && (a || ee || !D && K)) {
        const [A, J] = Jd({
          nodeId: D,
          dragItems: h,
          nodeLookup: ie
        });
        a?.(ne.sourceEvent, h, A, J), ee?.(ne.sourceEvent, A, J), D || K?.(ne.sourceEvent, J);
      }
    }
    const te = qb().clickDistance(R).on("start", (ne) => {
      const { domNode: ie, nodeDragThreshold: M, transform: j, snapGrid: z, snapToGrid: L } = i();
      y = ie?.getBoundingClientRect() || null, x = !1, w = !1, _ = ne.sourceEvent, M === 0 && le(ne), c = or(ne.sourceEvent, { transform: j, snapGrid: z, snapToGrid: L, containerBounds: y }), m = Tn(ne.sourceEvent, y);
    }).on("drag", (ne) => {
      const { autoPanOnNodeDrag: ie, transform: M, snapGrid: j, snapToGrid: z, nodeDragThreshold: L, nodeLookup: I } = i(), X = or(ne.sourceEvent, { transform: M, snapGrid: j, snapToGrid: z, containerBounds: y });
      if (_ = ne.sourceEvent, (ne.sourceEvent.type === "touchmove" && ne.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      D && !I.has(D)) && (x = !0), !x) {
        if (!p && ie && g && (p = !0, G()), !g) {
          const ee = Tn(ne.sourceEvent, y), K = ee.x - m.x, se = ee.y - m.y;
          Math.sqrt(K * K + se * se) > L && le(ne);
        }
        (c.x !== X.xSnapped || c.y !== X.ySnapped) && h && g && (m = Tn(ne.sourceEvent, y), V(X));
      }
    }).on("end", (ne) => {
      if (!g || x) {
        x && h.size > 0 && i().updateNodePositions(h, !1);
        return;
      }
      if (p = !1, g = !1, cancelAnimationFrame(d), h.size > 0) {
        const { nodeLookup: ie, updateNodePositions: M, onNodeDragStop: j, onSelectionDragStop: z } = i();
        if (w && (M(h, !1), w = !1), u || j || !D && z) {
          const [L, I] = Jd({
            nodeId: D,
            dragItems: h,
            nodeLookup: ie,
            dragging: !1
          });
          u?.(ne.sourceEvent, h, L, I), j?.(ne.sourceEvent, L, I), D || z?.(ne.sourceEvent, I);
        }
      }
    }).filter((ne) => {
      const ie = ne.target;
      return !ne.button && (!U || !gv(ie, `.${U}`, E)) && (!T || gv(ie, T, E));
    });
    v.call(te);
  }
  function C() {
    v?.on(".drag", null);
  }
  return {
    update: N,
    destroy: C
  };
}
function GA(n, i, a) {
  const r = [], u = {
    x: n.x - a,
    y: n.y - a,
    width: a * 2,
    height: a * 2
  };
  for (const c of i.values())
    Uu(u, dr(c)) > 0 && r.push(c);
  return r;
}
const ZA = 250;
function QA(n, i, a, r) {
  let u = [], c = 1 / 0;
  const d = GA(n, a, i + ZA);
  for (const h of d) {
    const p = [...h.internals.handleBounds?.source ?? [], ...h.internals.handleBounds?.target ?? []];
    for (const m of p) {
      if (r.nodeId === m.nodeId && r.type === m.type && r.id === m.id)
        continue;
      const { x: y, y: g } = Bo(h, m, m.position, !0), v = Math.sqrt(Math.pow(y - n.x, 2) + Math.pow(g - n.y, 2));
      v > i || (v < c ? (u = [{ ...m, x: y, y: g }], c = v) : v === c && u.push({ ...m, x: y, y: g }));
    }
  }
  if (!u.length)
    return null;
  if (u.length > 1) {
    const h = r.type === "source" ? "target" : "source";
    return u.find((p) => p.type === h) ?? u[0];
  }
  return u[0];
}
function C1(n, i, a, r, u, c = !1) {
  const d = r.get(n);
  if (!d)
    return null;
  const h = u === "strict" ? d.internals.handleBounds?.[i] : [...d.internals.handleBounds?.source ?? [], ...d.internals.handleBounds?.target ?? []], p = (a ? h?.find((m) => m.id === a) : h?.[0]) ?? null;
  return p && c ? { ...p, ...Bo(d, p, p.position, !0) } : p;
}
function A1(n, i) {
  return n || (i?.classList.contains("target") ? "target" : i?.classList.contains("source") ? "source" : null);
}
function KA(n, i) {
  let a = null;
  return i ? a = !0 : n && !i && (a = !1), a;
}
const M1 = () => !0;
function FA(n, { connectionMode: i, connectionRadius: a, handleId: r, nodeId: u, edgeUpdaterType: c, isTarget: d, domNode: h, nodeLookup: p, lib: m, autoPanOnConnect: y, flowId: g, panBy: v, cancelConnection: x, onConnectStart: w, onConnect: _, onConnectEnd: N, isValidConnection: C = M1, onReconnectEnd: U, updateConnection: T, getTransform: E, getFromHandle: H, autoPanSpeed: D, dragThreshold: R = 1, handleDomNode: V }) {
  const G = m1(n.target);
  let le = 0, te;
  const { x: ne, y: ie } = Tn(n), M = A1(c, V), j = h?.getBoundingClientRect();
  let z = !1;
  if (!j || !M)
    return;
  const L = C1(u, M, r, p, i);
  if (!L)
    return;
  let I = Tn(n, j), X = !1, ee = null, K = !1, se = null;
  function pe() {
    if (!y || !j)
      return;
    const [ue, fe] = Zh(I, j, D);
    v({ x: ue, y: fe }), le = requestAnimationFrame(pe);
  }
  const A = {
    ...L,
    nodeId: u,
    type: M,
    position: L.position
  }, J = p.get(u);
  let re = {
    inProgress: !0,
    isValid: null,
    from: Bo(J, A, ye.Left, !0),
    fromHandle: A,
    fromPosition: A.position,
    fromNode: J,
    to: I,
    toHandle: null,
    toPosition: nv[A.position],
    toNode: null,
    pointer: I
  };
  function W() {
    z = !0, T(re), w?.(n, { nodeId: u, handleId: r, handleType: M });
  }
  R === 0 && W();
  function ce(ue) {
    if (!z) {
      const { x: He, y: ze } = Tn(ue), tt = He - ne, St = ze - ie;
      if (!(tt * tt + St * St > R * R))
        return;
      W();
    }
    if (!H() || !A) {
      he(ue);
      return;
    }
    const fe = E();
    I = Tn(ue, j), te = QA(wr(I, fe, !1, [1, 1]), a, p, A), X || (pe(), X = !0);
    const be = O1(ue, {
      handle: te,
      connectionMode: i,
      fromNodeId: u,
      fromHandleId: r,
      fromType: d ? "target" : "source",
      isValidConnection: C,
      doc: G,
      lib: m,
      flowId: g,
      nodeLookup: p
    });
    se = be.handleDomNode, ee = be.connection, K = KA(!!te, be.isValid);
    const _e = p.get(u), Ee = _e ? Bo(_e, A, ye.Left, !0) : re.from, Ce = {
      ...re,
      from: Ee,
      isValid: K,
      to: be.toHandle && K ? Ya({ x: be.toHandle.x, y: be.toHandle.y }, fe) : I,
      toHandle: be.toHandle,
      toPosition: K && be.toHandle ? be.toHandle.position : nv[A.position],
      toNode: be.toHandle ? p.get(be.toHandle.nodeId) : null,
      pointer: I
    };
    T(Ce), re = Ce;
  }
  function he(ue) {
    if (!("touches" in ue && ue.touches.length > 0)) {
      if (z) {
        (te || se) && ee && K && _?.(ee);
        const { inProgress: fe, ...be } = re, _e = {
          ...be,
          toPosition: re.toHandle ? re.toPosition : null
        };
        N?.(ue, _e), c && U?.(ue, _e);
      }
      x(), cancelAnimationFrame(le), X = !1, K = !1, ee = null, se = null, G.removeEventListener("mousemove", ce), G.removeEventListener("mouseup", he), G.removeEventListener("touchmove", ce), G.removeEventListener("touchend", he);
    }
  }
  G.addEventListener("mousemove", ce), G.addEventListener("mouseup", he), G.addEventListener("touchmove", ce), G.addEventListener("touchend", he);
}
function O1(n, { handle: i, connectionMode: a, fromNodeId: r, fromHandleId: u, fromType: c, doc: d, lib: h, flowId: p, isValidConnection: m = M1, nodeLookup: y }) {
  const g = c === "target", v = i ? d.querySelector(`.${h}-flow__handle[data-id="${p}-${i?.nodeId}-${i?.id}-${i?.type}"]`) : null, { x, y: w } = Tn(n), _ = d.elementFromPoint(x, w), N = _?.classList.contains(`${h}-flow__handle`) ? _ : v, C = {
    handleDomNode: N,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (N) {
    const U = A1(void 0, N), T = N.getAttribute("data-nodeid"), E = N.getAttribute("data-handleid"), H = N.classList.contains("connectable"), D = N.classList.contains("connectableend");
    if (!T || !U)
      return C;
    const R = {
      source: g ? T : r,
      sourceHandle: g ? E : u,
      target: g ? r : T,
      targetHandle: g ? u : E
    };
    C.connection = R;
    const G = H && D && (a === Ia.Strict ? g && U === "source" || !g && U === "target" : T !== r || E !== u);
    C.isValid = G && m(R), C.toHandle = C1(T, U, E, y, a, !0);
  }
  return C;
}
const Th = {
  onPointerDown: FA,
  isValid: O1
};
function JA({ domNode: n, panZoom: i, getTransform: a, getViewScale: r }) {
  const u = tn(n);
  function c({ translateExtent: h, width: p, height: m, zoomStep: y = 1, pannable: g = !0, zoomable: v = !0, inversePan: x = !1 }) {
    const w = (T) => {
      if (T.sourceEvent.type !== "wheel" || !i)
        return;
      const E = a(), H = T.sourceEvent.ctrlKey && hr() ? 10 : 1, D = -T.sourceEvent.deltaY * (T.sourceEvent.deltaMode === 1 ? 0.05 : T.sourceEvent.deltaMode ? 1 : 2e-3) * y, R = E[2] * Math.pow(2, D * H);
      i.scaleTo(R);
    };
    let _ = [0, 0];
    const N = (T) => {
      (T.sourceEvent.type === "mousedown" || T.sourceEvent.type === "touchstart") && (_ = [
        T.sourceEvent.clientX ?? T.sourceEvent.touches[0].clientX,
        T.sourceEvent.clientY ?? T.sourceEvent.touches[0].clientY
      ]);
    }, C = (T) => {
      const E = a();
      if (T.sourceEvent.type !== "mousemove" && T.sourceEvent.type !== "touchmove" || !i)
        return;
      const H = [
        T.sourceEvent.clientX ?? T.sourceEvent.touches[0].clientX,
        T.sourceEvent.clientY ?? T.sourceEvent.touches[0].clientY
      ], D = [H[0] - _[0], H[1] - _[1]];
      _ = H;
      const R = r() * Math.max(E[2], Math.log(E[2])) * (x ? -1 : 1), V = {
        x: E[0] - D[0] * R,
        y: E[1] - D[1] * R
      }, G = [
        [0, 0],
        [p, m]
      ];
      i.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: E[2]
      }, G, h);
    }, U = i1().on("start", N).on("zoom", g ? C : null).on("zoom.wheel", v ? w : null);
    u.call(U, {});
  }
  function d() {
    u.on("zoom", null);
  }
  return {
    update: c,
    destroy: d,
    pointer: _n
  };
}
const Zu = (n) => ({
  x: n.x,
  y: n.y,
  zoom: n.k
}), Pd = ({ x: n, y: i, zoom: a }) => $u.translate(n, i).scale(a), Qi = (n, i) => n.target.closest(`.${i}`), z1 = (n, i) => i === 2 && Array.isArray(n) && n.includes(2), PA = (n) => ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2, Wd = (n, i = 0, a = PA, r = () => {
}) => {
  const u = typeof i == "number" && i > 0;
  return u || r(), u ? n.transition().duration(i).ease(a).on("end", r) : n;
}, R1 = (n) => {
  const i = n.ctrlKey && hr() ? 10 : 1;
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * i;
};
function WA({ zoomPanValues: n, noWheelClassName: i, d3Selection: a, d3Zoom: r, panOnScrollMode: u, panOnScrollSpeed: c, zoomOnPinch: d, onPanZoomStart: h, onPanZoom: p, onPanZoomEnd: m }) {
  return (y) => {
    if (Qi(y, i))
      return y.ctrlKey && y.preventDefault(), !1;
    y.preventDefault(), y.stopImmediatePropagation();
    const g = a.property("__zoom").k || 1;
    if (y.ctrlKey && d) {
      const N = _n(y), C = R1(y), U = g * Math.pow(2, C);
      r.scaleTo(a, U, N, y);
      return;
    }
    const v = y.deltaMode === 1 ? 20 : 1;
    let x = u === Ro.Vertical ? 0 : y.deltaX * v, w = u === Ro.Horizontal ? 0 : y.deltaY * v;
    !hr() && y.shiftKey && u !== Ro.Vertical && (x = y.deltaY * v, w = 0), r.translateBy(
      a,
      -(x / g) * c,
      -(w / g) * c,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = Zu(a.property("__zoom"));
    clearTimeout(n.panScrollTimeout), n.isPanScrolling ? p?.(y, _) : (n.isPanScrolling = !0, h?.(y, _)), n.panScrollTimeout = setTimeout(() => {
      m?.(y, _), n.isPanScrolling = !1;
    }, 150);
  };
}
function e3({ noWheelClassName: n, preventScrolling: i, d3ZoomHandler: a }) {
  return function(r, u) {
    const c = r.type === "wheel", d = !i && c && !r.ctrlKey, h = Qi(r, n);
    if (r.ctrlKey && c && h && r.preventDefault(), d || h)
      return null;
    r.preventDefault(), a.call(this, r, u);
  };
}
function t3({ zoomPanValues: n, onDraggingChange: i, onPanZoomStart: a }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const u = Zu(r.transform);
    n.mouseButton = r.sourceEvent?.button || 0, n.isZoomingOrPanning = !0, n.prevViewport = u, r.sourceEvent?.type === "mousedown" && i(!0), a && a?.(r.sourceEvent, u);
  };
}
function n3({ zoomPanValues: n, panOnDrag: i, onPaneContextMenu: a, onTransformChange: r, onPanZoom: u }) {
  return (c) => {
    n.usedRightMouseButton = !!(a && z1(i, n.mouseButton ?? 0)), c.sourceEvent?.sync || r([c.transform.x, c.transform.y, c.transform.k]), u && !c.sourceEvent?.internal && u?.(c.sourceEvent, Zu(c.transform));
  };
}
function i3({ zoomPanValues: n, panOnDrag: i, panOnScroll: a, onDraggingChange: r, onPanZoomEnd: u, onPaneContextMenu: c }) {
  return (d) => {
    if (!d.sourceEvent?.internal && (n.isZoomingOrPanning = !1, c && z1(i, n.mouseButton ?? 0) && !n.usedRightMouseButton && d.sourceEvent && c(d.sourceEvent), n.usedRightMouseButton = !1, r(!1), u)) {
      const h = Zu(d.transform);
      n.prevViewport = h, clearTimeout(n.timerId), n.timerId = setTimeout(
        () => {
          u?.(d.sourceEvent, h);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        a ? 150 : 0
      );
    }
  };
}
function o3({ panActivationKeyPressed: n, zoomActivationKeyPressed: i, zoomOnScroll: a, zoomOnPinch: r, panOnDrag: u, panOnScroll: c, zoomOnDoubleClick: d, userSelectionActive: h, noWheelClassName: p, noPanClassName: m, lib: y, connectionInProgress: g }) {
  return (v) => {
    const x = i || a, w = r && v.ctrlKey, _ = v.type === "wheel";
    if (v.button === 1 && v.type === "mousedown" && (Qi(v, `${y}-flow__node`) || Qi(v, `${y}-flow__edge`) || Qi(v, `${y}-flow__selection`) || Qi(v, `${y}-flow__nodesselection`)))
      return !0;
    if (!u && !x && !c && !d && !r || h || g && !_ || Qi(v, p) && _ || Qi(v, m) && (!_ || c && _ && !i) || !r && v.ctrlKey && _)
      return !1;
    if (!r && v.type === "touchstart" && v.touches?.length > 1)
      return v.preventDefault(), !1;
    if (!x && !c && !w && _ || !u && (v.type === "mousedown" || v.type === "touchstart") || Array.isArray(u) && !u.includes(v.button) && v.type === "mousedown")
      return !1;
    const N = Array.isArray(u) && u.includes(v.button) || !v.button || v.button <= 1;
    return (!v.ctrlKey || _ || n) && N;
  };
}
function a3({ domNode: n, minZoom: i, maxZoom: a, translateExtent: r, viewport: u, onPanZoom: c, onPanZoomStart: d, onPanZoomEnd: h, onDraggingChange: p }) {
  const m = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, y = n.getBoundingClientRect();
  let g = [
    [0, 0],
    [y.width, y.height]
  ];
  (typeof ResizeObserver < "u" ? new ResizeObserver((ie) => {
    const M = ie[0];
    M && (g = [
      [0, 0],
      [M.contentRect.width, M.contentRect.height]
    ]);
  }) : null)?.observe(n);
  const x = i1().extent(() => g).scaleExtent([i, a]).translateExtent(r), w = tn(n).call(x);
  E({
    x: u.x,
    y: u.y,
    zoom: qa(u.zoom, i, a)
  }, [
    [0, 0],
    [y.width, y.height]
  ], r);
  const _ = w.on("wheel.zoom"), N = w.on("dblclick.zoom");
  x.wheelDelta(R1);
  async function C(ie, M) {
    return w ? new Promise((j) => {
      x?.interpolate(M?.interpolate === "linear" ? ir : bu).transform(Wd(w, M?.duration, M?.ease, () => j(!0)), ie);
    }) : !1;
  }
  function U({ noWheelClassName: ie, noPanClassName: M, onPaneContextMenu: j, userSelectionActive: z, panOnScroll: L, panOnDrag: I, panOnScrollMode: X, panOnScrollSpeed: ee, preventScrolling: K, zoomOnPinch: se, zoomOnScroll: pe, zoomOnDoubleClick: A, panActivationKeyPressed: J = !1, zoomActivationKeyPressed: de, lib: re, onTransformChange: W, connectionInProgress: ce, paneClickDistance: he, selectionOnDrag: ue }) {
    z && !m.isZoomingOrPanning && T();
    const fe = L && !de && !z;
    x.clickDistance(ue ? 1 / 0 : !Nn(he) || he < 0 ? 0 : he);
    const be = fe ? WA({
      zoomPanValues: m,
      noWheelClassName: ie,
      d3Selection: w,
      d3Zoom: x,
      panOnScrollMode: X,
      panOnScrollSpeed: ee,
      zoomOnPinch: se,
      onPanZoomStart: d,
      onPanZoom: c,
      onPanZoomEnd: h
    }) : e3({
      noWheelClassName: ie,
      preventScrolling: K,
      d3ZoomHandler: _
    });
    w.on("wheel.zoom", be, { passive: !1 });
    const _e = t3({
      zoomPanValues: m,
      onDraggingChange: p,
      onPanZoomStart: d
    });
    x.on("start", _e);
    const Ee = n3({
      zoomPanValues: m,
      panOnDrag: I,
      onPaneContextMenu: !!j,
      onPanZoom: c,
      onTransformChange: W
    });
    x.on("zoom", Ee);
    const Ce = i3({
      zoomPanValues: m,
      panOnDrag: I,
      panOnScroll: L,
      onPaneContextMenu: j,
      onPanZoomEnd: h,
      onDraggingChange: p
    });
    x.on("end", Ce);
    const He = o3({
      panActivationKeyPressed: J,
      zoomActivationKeyPressed: de,
      panOnDrag: I,
      zoomOnScroll: pe,
      panOnScroll: L,
      zoomOnDoubleClick: A,
      zoomOnPinch: se,
      userSelectionActive: z,
      noPanClassName: M,
      noWheelClassName: ie,
      lib: re,
      connectionInProgress: ce
    });
    x.filter(He), A ? w.on("dblclick.zoom", N) : w.on("dblclick.zoom", null);
  }
  function T() {
    x.on("zoom", null);
  }
  async function E(ie, M, j) {
    const z = Pd(ie), L = x?.constrain()(z, M, j);
    return L && await C(L), L;
  }
  async function H(ie, M) {
    const j = Pd(ie);
    return await C(j, M), j;
  }
  function D(ie) {
    if (w) {
      const M = Pd(ie), j = w.property("__zoom");
      (j.k !== ie.zoom || j.x !== ie.x || j.y !== ie.y) && x?.transform(w, M, null, { sync: !0 });
    }
  }
  function R() {
    const ie = w ? n1(w.node()) : { x: 0, y: 0, k: 1 };
    return { x: ie.x, y: ie.y, zoom: ie.k };
  }
  async function V(ie, M) {
    return w ? new Promise((j) => {
      x?.interpolate(M?.interpolate === "linear" ? ir : bu).scaleTo(Wd(w, M?.duration, M?.ease, () => j(!0)), ie);
    }) : !1;
  }
  async function G(ie, M) {
    return w ? new Promise((j) => {
      x?.interpolate(M?.interpolate === "linear" ? ir : bu).scaleBy(Wd(w, M?.duration, M?.ease, () => j(!0)), ie);
    }) : !1;
  }
  function le(ie) {
    x?.scaleExtent(ie);
  }
  function te(ie) {
    x?.translateExtent(ie);
  }
  function ne(ie) {
    const M = !Nn(ie) || ie < 0 ? 0 : ie;
    x?.clickDistance(M);
  }
  return {
    update: U,
    destroy: T,
    setViewport: H,
    setViewportConstrained: E,
    getViewport: R,
    scaleTo: V,
    scaleBy: G,
    setScaleExtent: le,
    setTranslateExtent: te,
    syncViewport: D,
    setClickDistance: ne
  };
}
var $a;
(function(n) {
  n.Line = "line", n.Handle = "handle";
})($a || ($a = {}));
function l3({ width: n, prevWidth: i, height: a, prevHeight: r, affectsX: u, affectsY: c }) {
  const d = n - i, h = a - r, p = [d > 0 ? 1 : d < 0 ? -1 : 0, h > 0 ? 1 : h < 0 ? -1 : 0];
  return d && u && (p[0] = p[0] * -1), h && c && (p[1] = p[1] * -1), p;
}
function pv(n) {
  const i = n.includes("right") || n.includes("left"), a = n.includes("bottom") || n.includes("top"), r = n.includes("left"), u = n.includes("top");
  return {
    isHorizontal: i,
    isVertical: a,
    affectsX: r,
    affectsY: u
  };
}
function Xi(n, i) {
  return Math.max(0, i - n);
}
function Gi(n, i) {
  return Math.max(0, n - i);
}
function hu(n, i, a) {
  return Math.max(0, i - n, n - a);
}
function mv(n, i) {
  return n ? !i : i;
}
function r3(n, i, a, r, u, c, d, h) {
  let { affectsX: p, affectsY: m } = i;
  const { isHorizontal: y, isVertical: g } = i, v = y && g, { xSnapped: x, ySnapped: w } = a, { minWidth: _, maxWidth: N, minHeight: C, maxHeight: U } = r, { x: T, y: E, width: H, height: D, aspectRatio: R } = n;
  let V = Math.floor(y ? x - n.pointerX : 0), G = Math.floor(g ? w - n.pointerY : 0);
  const le = H + (p ? -V : V), te = D + (m ? -G : G), ne = -c[0] * H, ie = -c[1] * D;
  let M = hu(le, _, N), j = hu(te, C, U);
  if (d) {
    let I = 0, X = 0;
    p && V < 0 ? I = Xi(T + V + ne, d[0][0]) : !p && V > 0 && (I = Gi(T + le + ne, d[1][0])), m && G < 0 ? X = Xi(E + G + ie, d[0][1]) : !m && G > 0 && (X = Gi(E + te + ie, d[1][1])), M = Math.max(M, I), j = Math.max(j, X);
  }
  if (h) {
    let I = 0, X = 0;
    p && V > 0 ? I = Gi(T + V, h[0][0]) : !p && V < 0 && (I = Xi(T + le, h[1][0])), m && G > 0 ? X = Gi(E + G, h[0][1]) : !m && G < 0 && (X = Xi(E + te, h[1][1])), M = Math.max(M, I), j = Math.max(j, X);
  }
  if (u) {
    if (y) {
      const I = hu(le / R, C, U) * R;
      if (M = Math.max(M, I), d) {
        let X = 0;
        !p && !m || p && !m && v ? X = Gi(E + ie + le / R, d[1][1]) * R : X = Xi(E + ie + (p ? V : -V) / R, d[0][1]) * R, M = Math.max(M, X);
      }
      if (h) {
        let X = 0;
        !p && !m || p && !m && v ? X = Xi(E + le / R, h[1][1]) * R : X = Gi(E + (p ? V : -V) / R, h[0][1]) * R, M = Math.max(M, X);
      }
    }
    if (g) {
      const I = hu(te * R, _, N) / R;
      if (j = Math.max(j, I), d) {
        let X = 0;
        !p && !m || m && !p && v ? X = Gi(T + te * R + ne, d[1][0]) / R : X = Xi(T + (m ? G : -G) * R + ne, d[0][0]) / R, j = Math.max(j, X);
      }
      if (h) {
        let X = 0;
        !p && !m || m && !p && v ? X = Xi(T + te * R, h[1][0]) / R : X = Gi(T + (m ? G : -G) * R, h[0][0]) / R, j = Math.max(j, X);
      }
    }
  }
  G = G + (G < 0 ? j : -j), V = V + (V < 0 ? M : -M), u && (v ? le > te * R ? G = (mv(p, m) ? -V : V) / R : V = (mv(p, m) ? -G : G) * R : y ? (G = V / R, m = p) : (V = G * R, p = m));
  const z = p ? T + V : T, L = m ? E + G : E;
  return {
    width: H + (p ? -V : V),
    height: D + (m ? -G : G),
    x: c[0] * V * (p ? -1 : 1) + z,
    y: c[1] * G * (m ? -1 : 1) + L
  };
}
const D1 = { width: 0, height: 0, x: 0, y: 0 }, s3 = {
  ...D1,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function u3(n, i, a) {
  const r = i.position.x + n.position.x, u = i.position.y + n.position.y, c = n.measured.width ?? 0, d = n.measured.height ?? 0, h = a[0] * c, p = a[1] * d;
  return [
    [r - h, u - p],
    [r + c - h, u + d - p]
  ];
}
function c3({ domNode: n, nodeId: i, getStoreItems: a, onChange: r, onEnd: u }) {
  const c = tn(n);
  let d = {
    controlDirection: pv("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function h({ controlPosition: m, boundaries: y, keepAspectRatio: g, resizeDirection: v, onResizeStart: x, onResize: w, onResizeEnd: _, shouldResize: N }) {
    let C = { ...D1 }, U = { ...s3 };
    d = {
      boundaries: y,
      resizeDirection: v,
      keepAspectRatio: g,
      controlDirection: pv(m)
    };
    let T, E = null, H = [], D, R, V;
    const G = qb().on("start", (le) => {
      const { nodeLookup: te, transform: ne, snapGrid: ie, snapToGrid: M, nodeOrigin: j, paneDomNode: z } = a();
      if (T = te.get(i), !T)
        return;
      E = z?.getBoundingClientRect() ?? null;
      const { xSnapped: L, ySnapped: I } = or(le.sourceEvent, {
        transform: ne,
        snapGrid: ie,
        snapToGrid: M,
        containerBounds: E
      });
      C = {
        width: T.measured.width ?? 0,
        height: T.measured.height ?? 0,
        x: T.position.x ?? 0,
        y: T.position.y ?? 0
      }, U = {
        ...C,
        pointerX: L,
        pointerY: I,
        aspectRatio: C.width / C.height
      }, D = void 0, R = Uo(T.extent) ? T.extent : void 0, T.parentId && (T.extent === "parent" || T.expandParent) && (D = te.get(T.parentId)), D && T.extent === "parent" && (R = [
        [0, 0],
        [D.measured.width, D.measured.height]
      ]), H = [], V = void 0;
      for (const [X, ee] of te)
        if (ee.parentId === i && (H.push({
          id: X,
          position: { ...ee.position },
          extent: ee.extent
        }), ee.extent === "parent" || ee.expandParent)) {
          const K = u3(ee, T, ee.origin ?? j);
          V ? V = [
            [Math.min(K[0][0], V[0][0]), Math.min(K[0][1], V[0][1])],
            [Math.max(K[1][0], V[1][0]), Math.max(K[1][1], V[1][1])]
          ] : V = K;
        }
      x?.(le, { ...C });
    }).on("drag", (le) => {
      const { transform: te, snapGrid: ne, snapToGrid: ie, nodeOrigin: M } = a(), j = or(le.sourceEvent, {
        transform: te,
        snapGrid: ne,
        snapToGrid: ie,
        containerBounds: E
      }), z = [];
      if (!T)
        return;
      const { x: L, y: I, width: X, height: ee } = C, K = {}, se = T.origin ?? M, { width: pe, height: A, x: J, y: de } = r3(U, d.controlDirection, j, d.boundaries, d.keepAspectRatio, se, R, V), re = pe !== X, W = A !== ee, ce = J !== L && re, he = de !== I && W;
      if (!ce && !he && !re && !W)
        return;
      const ue = {
        prevValues: { ...C },
        startX: U.x,
        startY: U.y,
        childNodes: H.map((Ee) => ({
          ...Ee,
          position: { ...Ee.position }
        }))
      };
      if ((ce || he || se[0] === 1 || se[1] === 1) && (K.x = ce ? J : C.x, K.y = he ? de : C.y, C.x = K.x, C.y = K.y, H.length > 0)) {
        const Ee = J - L, Ce = de - I;
        for (const He of H)
          He.position = {
            x: He.position.x - Ee + se[0] * (pe - X),
            y: He.position.y - Ce + se[1] * (A - ee)
          }, z.push(He);
      }
      if ((re || W) && (K.width = re && (!d.resizeDirection || d.resizeDirection === "horizontal") ? pe : C.width, K.height = W && (!d.resizeDirection || d.resizeDirection === "vertical") ? A : C.height, C.width = K.width, C.height = K.height), D && T.expandParent) {
        const Ee = se[0] * (K.width ?? 0);
        K.x && K.x < Ee && (C.x = Ee, U.x = U.x - (K.x - Ee));
        const Ce = se[1] * (K.height ?? 0);
        K.y && K.y < Ce && (C.y = Ce, U.y = U.y - (K.y - Ce));
      }
      const fe = l3({
        width: C.width,
        prevWidth: X,
        height: C.height,
        prevHeight: ee,
        affectsX: d.controlDirection.affectsX,
        affectsY: d.controlDirection.affectsY
      }), be = { ...C, direction: fe };
      if (N?.(le, be) === !1) {
        C = ue.prevValues, U.x = ue.startX, U.y = ue.startY, H.forEach((Ee, Ce) => {
          Ee.position = ue.childNodes[Ce].position;
        });
        return;
      }
      w?.(le, be), r(K, z);
    }).on("end", (le) => {
      _?.(le, { ...C }), u?.({ ...C });
    });
    c.call(G);
  }
  function p() {
    c.on(".drag", null);
  }
  return {
    update: h,
    destroy: p
  };
}
var eh = { exports: {} }, th = {}, nh = { exports: {} }, ih = {};
var yv;
function f3() {
  if (yv) return ih;
  yv = 1;
  var n = pr();
  function i(g, v) {
    return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v;
  }
  var a = typeof Object.is == "function" ? Object.is : i, r = n.useState, u = n.useEffect, c = n.useLayoutEffect, d = n.useDebugValue;
  function h(g, v) {
    var x = v(), w = r({ inst: { value: x, getSnapshot: v } }), _ = w[0].inst, N = w[1];
    return c(
      function() {
        _.value = x, _.getSnapshot = v, p(_) && N({ inst: _ });
      },
      [g, x, v]
    ), u(
      function() {
        return p(_) && N({ inst: _ }), g(function() {
          p(_) && N({ inst: _ });
        });
      },
      [g]
    ), d(x), x;
  }
  function p(g) {
    var v = g.getSnapshot;
    g = g.value;
    try {
      var x = v();
      return !a(g, x);
    } catch {
      return !0;
    }
  }
  function m(g, v) {
    return v();
  }
  var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : h;
  return ih.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y, ih;
}
var vv;
function d3() {
  return vv || (vv = 1, nh.exports = f3()), nh.exports;
}
var bv;
function h3() {
  if (bv) return th;
  bv = 1;
  var n = pr(), i = d3();
  function a(m, y) {
    return m === y && (m !== 0 || 1 / m === 1 / y) || m !== m && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : a, u = i.useSyncExternalStore, c = n.useRef, d = n.useEffect, h = n.useMemo, p = n.useDebugValue;
  return th.useSyncExternalStoreWithSelector = function(m, y, g, v, x) {
    var w = c(null);
    if (w.current === null) {
      var _ = { hasValue: !1, value: null };
      w.current = _;
    } else _ = w.current;
    w = h(
      function() {
        function C(D) {
          if (!U) {
            if (U = !0, T = D, D = v(D), x !== void 0 && _.hasValue) {
              var R = _.value;
              if (x(R, D))
                return E = R;
            }
            return E = D;
          }
          if (R = E, r(T, D)) return R;
          var V = v(D);
          return x !== void 0 && x(R, V) ? (T = D, R) : (T = D, E = V);
        }
        var U = !1, T, E, H = g === void 0 ? null : g;
        return [
          function() {
            return C(y());
          },
          H === null ? void 0 : function() {
            return C(H());
          }
        ];
      },
      [y, g, v, x]
    );
    var N = u(m, w[0], w[1]);
    return d(
      function() {
        _.hasValue = !0, _.value = N;
      },
      [N]
    ), p(N), N;
  }, th;
}
var xv;
function g3() {
  return xv || (xv = 1, eh.exports = h3()), eh.exports;
}
var p3 = g3();
const m3 = /* @__PURE__ */ Wv(p3), y3 = {}, wv = (n) => {
  let i;
  const a = /* @__PURE__ */ new Set(), r = (y, g) => {
    const v = typeof y == "function" ? y(i) : y;
    if (!Object.is(v, i)) {
      const x = i;
      i = g ?? (typeof v != "object" || v === null) ? v : Object.assign({}, i, v), a.forEach((w) => w(i, x));
    }
  }, u = () => i, p = { setState: r, getState: u, getInitialState: () => m, subscribe: (y) => (a.add(y), () => a.delete(y)), destroy: () => {
    (y3 ? "mount" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), a.clear();
  } }, m = i = n(r, u, p);
  return p;
}, v3 = (n) => n ? wv(n) : wv, { useDebugValue: b3 } = Wl, { useSyncExternalStoreWithSelector: x3 } = m3, w3 = (n) => n;
function H1(n, i = w3, a) {
  const r = x3(
    n.subscribe,
    n.getState,
    n.getServerState || n.getInitialState,
    i,
    a
  );
  return b3(r), r;
}
const Sv = (n, i) => {
  const a = v3(n), r = (u, c = i) => H1(a, u, c);
  return Object.assign(r, a), r;
}, S3 = (n, i) => n ? Sv(n, i) : Sv;
function Je(n, i) {
  if (Object.is(n, i))
    return !0;
  if (typeof n != "object" || n === null || typeof i != "object" || i === null)
    return !1;
  if (n instanceof Map && i instanceof Map) {
    if (n.size !== i.size) return !1;
    for (const [r, u] of n)
      if (!Object.is(u, i.get(r)))
        return !1;
    return !0;
  }
  if (n instanceof Set && i instanceof Set) {
    if (n.size !== i.size) return !1;
    for (const r of n)
      if (!i.has(r))
        return !1;
    return !0;
  }
  const a = Object.keys(n);
  if (a.length !== Object.keys(i).length)
    return !1;
  for (const r of a)
    if (!Object.prototype.hasOwnProperty.call(i, r) || !Object.is(n[r], i[r]))
      return !1;
  return !0;
}
var _3 = eb();
const Qu = F.createContext(null), E3 = Qu.Provider, k1 = Cn.error001("react");
function Be(n, i) {
  const a = F.useContext(Qu);
  if (a === null)
    throw new Error(k1);
  return H1(a, n, i);
}
function Qe() {
  const n = F.useContext(Qu);
  if (n === null)
    throw new Error(k1);
  return F.useMemo(() => ({
    getState: n.getState,
    setState: n.setState,
    subscribe: n.subscribe
  }), [n]);
}
const _v = { display: "none" }, N3 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, U1 = "react-flow__node-desc", B1 = "react-flow__edge-desc", T3 = "react-flow__aria-live", C3 = (n) => n.ariaLiveMessage, A3 = (n) => n.ariaLabelConfig;
function M3({ rfId: n }) {
  const i = Be(C3);
  return k.jsx("div", { id: `${T3}-${n}`, "aria-live": "assertive", "aria-atomic": "true", style: N3, children: i });
}
function O3({ rfId: n, disableKeyboardA11y: i }) {
  const a = Be(A3);
  return k.jsxs(k.Fragment, { children: [k.jsx("div", { id: `${U1}-${n}`, style: _v, children: i ? a["node.a11yDescription.default"] : a["node.a11yDescription.keyboardDisabled"] }), k.jsx("div", { id: `${B1}-${n}`, style: _v, children: a["edge.a11yDescription.default"] }), !i && k.jsx(M3, { rfId: n })] });
}
const Ku = F.forwardRef(({ position: n = "top-left", children: i, className: a, style: r, ...u }, c) => {
  const d = `${n}`.split("-");
  return k.jsx("div", { className: ut(["react-flow__panel", a, ...d]), style: r, ref: c, ...u, children: i });
});
Ku.displayName = "Panel";
const Ev = "https://reactflow.dev?utm_source=attribution";
function z3({ proOptions: n, position: i = "bottom-right" }) {
  return F.useEffect(() => {
  }, []), n?.hideAttribution ? null : k.jsx(Ku, { position: i, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${Ev}`, children: k.jsx("a", { href: Ev, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const R3 = (n) => {
  const i = [], a = [];
  for (const [, r] of n.nodeLookup)
    r.selected && i.push(r.internals.userNode);
  for (const [, r] of n.edgeLookup)
    r.selected && a.push(r);
  return { selectedNodes: i, selectedEdges: a };
}, gu = (n) => n.id;
function D3(n, i) {
  return Je(n.selectedNodes.map(gu), i.selectedNodes.map(gu)) && Je(n.selectedEdges.map(gu), i.selectedEdges.map(gu));
}
function H3({ onSelectionChange: n }) {
  const i = Qe(), { selectedNodes: a, selectedEdges: r } = Be(R3, D3);
  return F.useEffect(() => {
    const u = { nodes: a, edges: r };
    n?.(u), i.getState().onSelectionChangeHandlers.forEach((c) => c(u));
  }, [a, r, n]), null;
}
const k3 = (n) => !!n.onSelectionChangeHandlers;
function U3({ onSelectionChange: n }) {
  const i = Be(k3);
  return n || i ? k.jsx(H3, { onSelectionChange: n }) : null;
}
const L1 = [0, 0], B3 = { x: 0, y: 0, zoom: 1 }, L3 = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Nv = [...L3, "rfId"], j3 = (n) => ({
  setNodes: n.setNodes,
  setEdges: n.setEdges,
  setMinZoom: n.setMinZoom,
  setMaxZoom: n.setMaxZoom,
  setTranslateExtent: n.setTranslateExtent,
  setNodeExtent: n.setNodeExtent,
  reset: n.reset,
  setDefaultNodesAndEdges: n.setDefaultNodesAndEdges
}), Tv = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: cr,
  nodeOrigin: L1,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function V3(n) {
  const { setNodes: i, setEdges: a, setMinZoom: r, setMaxZoom: u, setTranslateExtent: c, setNodeExtent: d, reset: h, setDefaultNodesAndEdges: p } = Be(j3, Je), m = Qe();
  F.useEffect(() => (p(n.defaultNodes, n.defaultEdges), () => {
    y.current = Tv, h();
  }), []);
  const y = F.useRef(Tv);
  return F.useEffect(
    () => {
      for (const g of Nv) {
        const v = n[g], x = y.current[g];
        v !== x && (typeof n[g] > "u" || (g === "nodes" ? i(v) : g === "edges" ? a(v) : g === "minZoom" ? r(v) : g === "maxZoom" ? u(v) : g === "translateExtent" ? c(v) : g === "nodeExtent" ? d(v) : g === "ariaLabelConfig" ? m.setState({ ariaLabelConfig: _A(v) }) : g === "fitView" ? m.setState({ fitViewQueued: v }) : g === "fitViewOptions" ? m.setState({ fitViewOptions: v }) : m.setState({ [g]: v })));
      }
      y.current = n;
    },
    // Only re-run the effect if one of the fields we track changes
    Nv.map((g) => n[g])
  ), null;
}
function Cv() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function I3(n) {
  const [i, a] = F.useState(n === "system" ? null : n);
  return F.useEffect(() => {
    if (n !== "system") {
      a(n);
      return;
    }
    const r = Cv(), u = () => a(r?.matches ? "dark" : "light");
    return u(), r?.addEventListener("change", u), () => {
      r?.removeEventListener("change", u);
    };
  }, [n]), i !== null ? i : Cv()?.matches ? "dark" : "light";
}
const Av = typeof document < "u" ? document : null;
function gr(n = null, i = { target: Av, actInsideInputWithModifier: !0 }) {
  const [a, r] = F.useState(!1), u = F.useRef(!1), c = F.useRef(/* @__PURE__ */ new Set([])), [d, h] = F.useMemo(() => {
    if (n !== null) {
      const m = (Array.isArray(n) ? n : [n]).filter((g) => typeof g == "string").map((g) => g.replace(/\+/g, `
`).replace(`

`, `
+`).split(`
`)), y = m.reduce((g, v) => g.concat(...v), []);
      return [m, y];
    }
    return [[], []];
  }, [n]);
  return F.useEffect(() => {
    const p = i?.target ?? Av, m = i?.actInsideInputWithModifier ?? !0;
    if (n !== null) {
      const y = (x) => {
        if (u.current = x.ctrlKey || x.metaKey || x.shiftKey || x.altKey, (!u.current || u.current && !m) && y1(x))
          return !1;
        const _ = Ov(x.code, h);
        if (c.current.add(x[_]), Mv(d, c.current, !1)) {
          const N = x.composedPath?.()?.[0] || x.target, C = N?.nodeName === "BUTTON" || N?.nodeName === "A";
          i.preventDefault !== !1 && (u.current || !C) && x.preventDefault(), r(!0);
        }
      }, g = (x) => {
        const w = Ov(x.code, h);
        Mv(d, c.current, !0) ? (r(!1), c.current.clear()) : c.current.delete(x[w]), x.key === "Meta" && c.current.clear(), u.current = !1;
      }, v = () => {
        c.current.clear(), r(!1);
      };
      return p?.addEventListener("keydown", y), p?.addEventListener("keyup", g), window.addEventListener("blur", v), window.addEventListener("contextmenu", v), () => {
        p?.removeEventListener("keydown", y), p?.removeEventListener("keyup", g), window.removeEventListener("blur", v), window.removeEventListener("contextmenu", v);
      };
    }
  }, [n, r]), a;
}
function Mv(n, i, a) {
  return n.filter((r) => a || r.length === i.size).some((r) => r.every((u) => i.has(u)));
}
function Ov(n, i) {
  return i.includes(n) ? "code" : "key";
}
const q3 = () => {
  const n = Qe();
  return F.useMemo(() => ({
    zoomIn: async (i) => {
      const { panZoom: a } = n.getState();
      return a ? a.scaleBy(1.2, i) : !1;
    },
    zoomOut: async (i) => {
      const { panZoom: a } = n.getState();
      return a ? a.scaleBy(1 / 1.2, i) : !1;
    },
    zoomTo: async (i, a) => {
      const { panZoom: r } = n.getState();
      return r ? r.scaleTo(i, a) : !1;
    },
    getZoom: () => n.getState().transform[2],
    setViewport: async (i, a) => {
      const { transform: [r, u, c], panZoom: d } = n.getState();
      return d ? (await d.setViewport({
        x: i.x ?? r,
        y: i.y ?? u,
        zoom: i.zoom ?? c
      }, a), !0) : !1;
    },
    getViewport: () => {
      const [i, a, r] = n.getState().transform;
      return { x: i, y: a, zoom: r };
    },
    setCenter: async (i, a, r) => n.getState().setCenter(i, a, r),
    fitBounds: async (i, a) => {
      const { width: r, height: u, minZoom: c, maxZoom: d, panZoom: h } = n.getState(), p = Qh(i, r, u, c, d, a?.padding ?? 0.1);
      return h ? (await h.setViewport(p, {
        duration: a?.duration,
        ease: a?.ease,
        interpolate: a?.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (i, a = {}) => {
      const { transform: r, snapGrid: u, snapToGrid: c, domNode: d } = n.getState();
      if (!d)
        return i;
      const { x: h, y: p } = d.getBoundingClientRect(), m = {
        x: i.x - h,
        y: i.y - p
      }, y = a.snapGrid ?? u, g = a.snapToGrid ?? c;
      return wr(m, r, g, y);
    },
    flowToScreenPosition: (i) => {
      const { transform: a, domNode: r } = n.getState();
      if (!r)
        return i;
      const { x: u, y: c } = r.getBoundingClientRect(), d = Ya(i, a);
      return {
        x: d.x + u,
        y: d.y + c
      };
    }
  }), []);
};
function j1(n, i) {
  const a = [], r = /* @__PURE__ */ new Map(), u = [];
  for (const c of n)
    if (c.type === "add") {
      u.push(c);
      continue;
    } else if (c.type === "remove" || c.type === "replace")
      r.set(c.id, [c]);
    else {
      const d = r.get(c.id);
      d ? d.push(c) : r.set(c.id, [c]);
    }
  for (const c of i) {
    const d = r.get(c.id);
    if (!d) {
      a.push(c);
      continue;
    }
    if (d[0].type === "remove")
      continue;
    if (d[0].type === "replace") {
      a.push({ ...d[0].item });
      continue;
    }
    const h = { ...c };
    for (const p of d)
      Y3(p, h);
    a.push(h);
  }
  return u.length && u.forEach((c) => {
    c.index !== void 0 ? a.splice(c.index, 0, { ...c.item }) : a.push({ ...c.item });
  }), a;
}
function Y3(n, i) {
  switch (n.type) {
    case "select": {
      i.selected = n.selected;
      break;
    }
    case "position": {
      typeof n.position < "u" && (i.position = n.position), typeof n.dragging < "u" && (i.dragging = n.dragging);
      break;
    }
    case "dimensions": {
      typeof n.dimensions < "u" && (i.measured = {
        ...n.dimensions
      }, n.setAttributes && ((n.setAttributes === !0 || n.setAttributes === "width") && (i.width = n.dimensions.width), (n.setAttributes === !0 || n.setAttributes === "height") && (i.height = n.dimensions.height))), typeof n.resizing == "boolean" && (i.resizing = n.resizing);
      break;
    }
  }
}
function $3(n, i) {
  return j1(n, i);
}
function X3(n, i) {
  return j1(n, i);
}
function Co(n, i) {
  return {
    id: n,
    type: "select",
    selected: i
  };
}
function Ha(n, i = /* @__PURE__ */ new Set(), a = !1) {
  const r = [];
  for (const [u, c] of n) {
    const d = i.has(u);
    !(c.selected === void 0 && !d) && c.selected !== d && (a && (c.selected = d), r.push(Co(c.id, d)));
  }
  return r;
}
function zv({ items: n = [], lookup: i }) {
  const a = [], r = new Map(n.map((u) => [u.id, u]));
  for (const [u, c] of n.entries()) {
    const d = i.get(c.id), h = d?.internals?.userNode ?? d;
    h !== void 0 && h !== c && a.push({ id: c.id, item: c, type: "replace" }), h === void 0 && a.push({ item: c, type: "add", index: u });
  }
  for (const [u] of i)
    r.get(u) === void 0 && a.push({ id: u, type: "remove" });
  return a;
}
function Rv(n) {
  return {
    id: n.id,
    type: "remove"
  };
}
const G3 = d1();
function Z3(n, i, a = {}) {
  return MA(n, i, {
    ...a,
    onError: a.onError ?? G3
  });
}
const Dv = (n) => gA(n), Q3 = (n) => r1(n);
function V1(n) {
  return F.forwardRef(n);
}
const I1 = typeof window < "u" ? F.useLayoutEffect : F.useEffect;
function Hv(n) {
  const [i, a] = F.useState(BigInt(0)), [r] = F.useState(() => K3(() => a((u) => u + BigInt(1))));
  return I1(() => {
    const u = r.get();
    u.length && (n(u), r.reset());
  }, [i]), r;
}
function K3(n) {
  let i = [];
  return {
    get: () => i,
    reset: () => {
      i = [];
    },
    push: (a) => {
      i.push(a), n();
    }
  };
}
const q1 = F.createContext(null);
function F3({ children: n }) {
  const i = Qe(), a = F.useCallback((h) => {
    const { nodes: p = [], setNodes: m, hasDefaultNodes: y, onNodesChange: g, nodeLookup: v, fitViewQueued: x, onNodesChangeMiddlewareMap: w } = i.getState();
    let _ = p;
    for (const C of h)
      _ = typeof C == "function" ? C(_) : C;
    let N = zv({
      items: _,
      lookup: v
    });
    for (const C of w.values())
      N = C(N);
    y && m(_), N.length > 0 ? g?.(N) : x && window.requestAnimationFrame(() => {
      const { fitViewQueued: C, nodes: U, setNodes: T } = i.getState();
      C && T(U);
    });
  }, []), r = Hv(a), u = F.useCallback((h) => {
    const { edges: p = [], setEdges: m, hasDefaultEdges: y, onEdgesChange: g, edgeLookup: v } = i.getState();
    let x = p;
    for (const w of h)
      x = typeof w == "function" ? w(x) : w;
    y ? m(x) : g && g(zv({
      items: x,
      lookup: v
    }));
  }, []), c = Hv(u), d = F.useMemo(() => ({ nodeQueue: r, edgeQueue: c }), []);
  return k.jsx(q1.Provider, { value: d, children: n });
}
function J3() {
  const n = F.useContext(q1);
  if (!n)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return n;
}
const P3 = (n) => !!n.panZoom;
function Fu() {
  const n = q3(), i = Qe(), a = J3(), r = Be(P3), u = F.useMemo(() => {
    const c = (g) => i.getState().nodeLookup.get(g), d = (g) => {
      a.nodeQueue.push(g);
    }, h = (g) => {
      a.edgeQueue.push(g);
    }, p = (g) => {
      const { nodeLookup: v, nodeOrigin: x } = i.getState(), w = Dv(g) ? g : v.get(g.id), _ = w.parentId ? g1(w.position, w.measured, w.parentId, v, x) : w.position, N = {
        ...w,
        position: _,
        width: w.measured?.width ?? w.width,
        height: w.measured?.height ?? w.height
      };
      return dr(N);
    }, m = (g, v, x = { replace: !1 }) => {
      d((w) => w.map((_) => {
        if (_.id === g) {
          const N = typeof v == "function" ? v(_) : v;
          return x.replace && Dv(N) ? N : { ..._, ...N };
        }
        return _;
      }));
    }, y = (g, v, x = { replace: !1 }) => {
      h((w) => w.map((_) => {
        if (_.id === g) {
          const N = typeof v == "function" ? v(_) : v;
          return x.replace && Q3(N) ? N : { ..._, ...N };
        }
        return _;
      }));
    };
    return {
      getNodes: () => i.getState().nodes.map((g) => ({ ...g })),
      getNode: (g) => c(g)?.internals.userNode,
      getInternalNode: c,
      getEdges: () => {
        const { edges: g = [] } = i.getState();
        return g.map((v) => ({ ...v }));
      },
      getEdge: (g) => i.getState().edgeLookup.get(g),
      setNodes: d,
      setEdges: h,
      addNodes: (g) => {
        const v = Array.isArray(g) ? g : [g];
        a.nodeQueue.push((x) => [...x, ...v]);
      },
      addEdges: (g) => {
        const v = Array.isArray(g) ? g : [g];
        a.edgeQueue.push((x) => [...x, ...v]);
      },
      toObject: () => {
        const { nodes: g = [], edges: v = [], transform: x } = i.getState(), [w, _, N] = x;
        return {
          nodes: g.map((C) => ({ ...C })),
          edges: v.map((C) => ({ ...C })),
          viewport: {
            x: w,
            y: _,
            zoom: N
          }
        };
      },
      deleteElements: async ({ nodes: g = [], edges: v = [] }) => {
        const { nodes: x, edges: w, onNodesDelete: _, onEdgesDelete: N, triggerNodeChanges: C, triggerEdgeChanges: U, onDelete: T, onBeforeDelete: E } = i.getState(), { nodes: H, edges: D } = await bA({
          nodesToRemove: g,
          edgesToRemove: v,
          nodes: x,
          edges: w,
          onBeforeDelete: E
        }), R = D.length > 0, V = H.length > 0;
        if (R) {
          const G = D.map(Rv);
          N?.(D), U(G);
        }
        if (V) {
          const G = H.map(Rv);
          _?.(H), C(G);
        }
        return (V || R) && T?.({ nodes: H, edges: D }), { deletedNodes: H, deletedEdges: D };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (g, v = !0, x) => {
        const w = ov(g), _ = w ? g : p(g), N = x !== void 0;
        return _ ? (x || i.getState().nodes).filter((C) => {
          const U = i.getState().nodeLookup.get(C.id);
          if (U && !w && (C.id === g.id || !U.internals.positionAbsolute))
            return !1;
          const T = dr(N ? C : U), E = Uu(T, _);
          return v && E > 0 || E >= T.width * T.height || E >= _.width * _.height;
        }) : [];
      },
      isNodeIntersecting: (g, v, x = !0) => {
        const _ = ov(g) ? g : p(g);
        if (!_)
          return !1;
        const N = Uu(_, v);
        return x && N > 0 || N >= v.width * v.height || N >= _.width * _.height;
      },
      updateNode: m,
      updateNodeData: (g, v, x = { replace: !1 }) => {
        m(g, (w) => {
          const _ = typeof v == "function" ? v(w) : v;
          return x.replace ? { ...w, data: _ } : { ...w, data: { ...w.data, ..._ } };
        }, x);
      },
      updateEdge: y,
      updateEdgeData: (g, v, x = { replace: !1 }) => {
        y(g, (w) => {
          const _ = typeof v == "function" ? v(w) : v;
          return x.replace ? { ...w, data: _ } : { ...w, data: { ...w.data, ..._ } };
        }, x);
      },
      getNodesBounds: (g) => {
        const { nodeLookup: v, nodeOrigin: x } = i.getState();
        return pA(g, { nodeLookup: v, nodeOrigin: x });
      },
      getHandleConnections: ({ type: g, id: v, nodeId: x }) => Array.from(i.getState().connectionLookup.get(`${x}-${g}${v ? `-${v}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: g, handleId: v, nodeId: x }) => Array.from(i.getState().connectionLookup.get(`${x}${g ? v ? `-${g}-${v}` : `-${g}` : ""}`)?.values() ?? []),
      fitView: async (g) => {
        const v = i.getState().fitViewResolver ?? SA();
        return i.setState({ fitViewQueued: !0, fitViewOptions: g, fitViewResolver: v }), a.nodeQueue.push((x) => [...x]), v.promise;
      }
    };
  }, []);
  return F.useMemo(() => ({
    ...u,
    ...n,
    viewportInitialized: r
  }), [r]);
}
const kv = (n) => n.selected, W3 = typeof window < "u" ? window : void 0;
function eM({ deleteKeyCode: n, multiSelectionKeyCode: i }) {
  const a = Qe(), { deleteElements: r } = Fu(), u = gr(n, { actInsideInputWithModifier: !1 }), c = gr(i, { target: W3 });
  F.useEffect(() => {
    if (u) {
      const { edges: d, nodes: h } = a.getState();
      r({ nodes: h.filter(kv), edges: d.filter(kv) }), a.setState({ nodesSelectionActive: !1 });
    }
  }, [u]), F.useEffect(() => {
    a.setState({ multiSelectionActive: c });
  }, [c]);
}
function tM(n) {
  const i = Qe();
  F.useEffect(() => {
    const a = () => {
      if (!n.current || !(n.current.checkVisibility?.() ?? !0))
        return !1;
      const r = Kh(n.current);
      (r.height === 0 || r.width === 0) && i.getState().onError?.("004", Cn.error004()), i.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (n.current) {
      a(), window.addEventListener("resize", a);
      const r = new ResizeObserver(() => a());
      return r.observe(n.current), () => {
        window.removeEventListener("resize", a), r && n.current && r.unobserve(n.current);
      };
    }
  }, []);
}
const Ju = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, nM = (n) => ({
  userSelectionActive: n.userSelectionActive,
  lib: n.lib,
  connectionInProgress: n.connection.inProgress
});
function iM({ onPaneContextMenu: n, zoomOnScroll: i = !0, zoomOnPinch: a = !0, panOnScroll: r = !1, panActivationKeyPressed: u, panOnScrollSpeed: c = 0.5, panOnScrollMode: d = Ro.Free, zoomOnDoubleClick: h = !0, panOnDrag: p = !0, defaultViewport: m, translateExtent: y, minZoom: g, maxZoom: v, zoomActivationKeyCode: x, preventScrolling: w = !0, children: _, noWheelClassName: N, noPanClassName: C, onViewportChange: U, isControlledViewport: T, paneClickDistance: E, selectionOnDrag: H }) {
  const D = Qe(), R = F.useRef(null), { userSelectionActive: V, lib: G, connectionInProgress: le } = Be(nM, Je), te = gr(x), ne = F.useRef();
  tM(R);
  const ie = F.useCallback((M) => {
    U?.({ x: M[0], y: M[1], zoom: M[2] }), T || D.setState({ transform: M });
  }, [U, T]);
  return F.useEffect(() => {
    if (R.current) {
      ne.current = a3({
        domNode: R.current,
        minZoom: g,
        maxZoom: v,
        translateExtent: y,
        viewport: m,
        onDraggingChange: (L) => D.setState((I) => I.paneDragging === L ? I : { paneDragging: L }),
        onPanZoomStart: (L, I) => {
          const { onViewportChangeStart: X, onMoveStart: ee } = D.getState();
          ee?.(L, I), X?.(I);
        },
        onPanZoom: (L, I) => {
          const { onViewportChange: X, onMove: ee } = D.getState();
          ee?.(L, I), X?.(I);
        },
        onPanZoomEnd: (L, I) => {
          const { onViewportChangeEnd: X, onMoveEnd: ee } = D.getState();
          ee?.(L, I), X?.(I);
        }
      });
      const { x: M, y: j, zoom: z } = ne.current.getViewport();
      return D.setState({
        panZoom: ne.current,
        transform: [M, j, z],
        domNode: R.current.closest(".react-flow")
      }), () => {
        ne.current?.destroy();
      };
    }
  }, []), F.useEffect(() => {
    ne.current?.update({
      onPaneContextMenu: n,
      zoomOnScroll: i,
      zoomOnPinch: a,
      panOnScroll: r,
      panActivationKeyPressed: u,
      panOnScrollSpeed: c,
      panOnScrollMode: d,
      zoomOnDoubleClick: h,
      panOnDrag: p,
      zoomActivationKeyPressed: te,
      preventScrolling: w,
      noPanClassName: C,
      userSelectionActive: V,
      noWheelClassName: N,
      lib: G,
      onTransformChange: ie,
      connectionInProgress: le,
      selectionOnDrag: H,
      paneClickDistance: E
    });
  }, [
    n,
    i,
    a,
    r,
    u,
    c,
    d,
    h,
    p,
    te,
    w,
    C,
    V,
    N,
    G,
    ie,
    le,
    H,
    E
  ]), k.jsx("div", { className: "react-flow__renderer", ref: R, style: Ju, children: _ });
}
const oM = (n) => ({
  userSelectionActive: n.userSelectionActive,
  userSelectionRect: n.userSelectionRect
});
function aM() {
  const { userSelectionActive: n, userSelectionRect: i } = Be(oM, Je);
  return n && i ? k.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: i.width,
    height: i.height,
    transform: `translate(${i.x}px, ${i.y}px)`
  } }) : null;
}
const oh = (n, i) => (a) => {
  a.target === i.current && n?.(a);
}, lM = (n) => ({
  userSelectionActive: n.userSelectionActive,
  elementsSelectable: n.elementsSelectable,
  dragging: n.paneDragging,
  panBy: n.panBy,
  autoPanSpeed: n.autoPanSpeed
});
function rM({ isSelecting: n, selectionKeyPressed: i, selectionMode: a = fr.Full, panOnDrag: r, autoPanOnSelection: u, paneClickDistance: c, selectionOnDrag: d, onSelectionStart: h, onSelectionEnd: p, onPaneClick: m, onPaneContextMenu: y, onPaneScroll: g, onPaneMouseEnter: v, onPaneMouseMove: x, onPaneMouseLeave: w, children: _ }) {
  const N = F.useRef(0), C = Qe(), { userSelectionActive: U, elementsSelectable: T, dragging: E, panBy: H, autoPanSpeed: D } = Be(lM, Je), R = T && (n || U), V = F.useRef(null), G = F.useRef(), le = F.useRef(/* @__PURE__ */ new Set()), te = F.useRef(/* @__PURE__ */ new Set()), ne = F.useRef(!1), ie = F.useRef(!1), M = F.useRef({ x: 0, y: 0 }), j = F.useRef(!1), z = (W) => {
    if (ie.current || ne.current || C.getState().connection.inProgress) {
      ie.current = !1, ne.current = !1;
      return;
    }
    m?.(W), C.getState().resetSelectedElements(), C.setState({ nodesSelectionActive: !1 });
  }, L = (W) => {
    if (Array.isArray(r) && r?.includes(2)) {
      W.preventDefault();
      return;
    }
    y?.(W);
  }, I = g ? (W) => g(W) : void 0, X = (W) => {
    ie.current && (W.stopPropagation(), ie.current = !1);
  }, ee = (W) => {
    if (W.pointerType === "touch" && r !== !1 && !i)
      return;
    const { domNode: ce, transform: he } = C.getState();
    if (G.current = ce?.getBoundingClientRect(), !G.current)
      return;
    const ue = W.target === V.current;
    if (!ue && !!W.target.closest(".nokey") || !n || !(d && ue || i) || W.button !== 0 || !W.isPrimary)
      return;
    W.target?.setPointerCapture?.(W.pointerId), ie.current = !1;
    const { x: _e, y: Ee } = Tn(W.nativeEvent, G.current), Ce = wr({ x: _e, y: Ee }, he);
    C.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: Ce.x,
        startY: Ce.y,
        x: _e,
        y: Ee
      }
    }), ue || (W.stopPropagation(), W.preventDefault());
  };
  function K(W, ce) {
    const { userSelectionRect: he } = C.getState();
    if (!he)
      return;
    const { transform: ue, nodeLookup: fe, edgeLookup: be, connectionLookup: _e, triggerNodeChanges: Ee, triggerEdgeChanges: Ce, defaultEdgeOptions: He } = C.getState(), ze = { x: he.startX, y: he.startY }, { x: tt, y: St } = Ya(ze, ue), dt = {
      startX: ze.x,
      startY: ze.y,
      x: W < tt ? W : tt,
      y: ce < St ? ce : St,
      width: Math.abs(W - tt),
      height: Math.abs(ce - St)
    }, On = le.current, on = te.current;
    le.current = new Set(Gh(fe, dt, ue, a === fr.Partial, !0).map((Nt) => Nt.id)), te.current = /* @__PURE__ */ new Set();
    const Ht = He?.selectable ?? !0;
    for (const Nt of le.current) {
      const kt = _e.get(Nt);
      if (kt)
        for (const { edgeId: Xt } of kt.values()) {
          const zn = be.get(Xt);
          zn && (zn.selectable ?? Ht) && te.current.add(Xt);
        }
    }
    if (!av(On, le.current)) {
      const Nt = Ha(fe, le.current, !0);
      Ee(Nt);
    }
    if (!av(on, te.current)) {
      const Nt = Ha(be, te.current);
      Ce(Nt);
    }
    C.setState({
      userSelectionRect: dt,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function se() {
    if (!u || !G.current)
      return;
    const [W, ce] = Zh(M.current, G.current, D);
    H({ x: W, y: ce }).then((he) => {
      if (!ie.current || !he) {
        N.current = requestAnimationFrame(se);
        return;
      }
      const { x: ue, y: fe } = M.current;
      K(ue, fe), N.current = requestAnimationFrame(se);
    });
  }
  const pe = () => {
    cancelAnimationFrame(N.current), N.current = 0, j.current = !1;
  };
  F.useEffect(() => () => pe(), []);
  const A = (W) => {
    const { userSelectionRect: ce, transform: he, resetSelectedElements: ue } = C.getState();
    if (!G.current || !ce)
      return;
    const { x: fe, y: be } = Tn(W.nativeEvent, G.current);
    M.current = { x: fe, y: be };
    const _e = Ya({ x: ce.startX, y: ce.startY }, he);
    if (!ie.current) {
      const Ee = i ? 0 : c;
      if (Math.hypot(fe - _e.x, be - _e.y) <= Ee)
        return;
      ue(), h?.(W);
    }
    ie.current = !0, j.current || (se(), j.current = !0), K(fe, be);
  }, J = (W) => {
    if (!R) {
      W.target === V.current && C.getState().connection.inProgress && (ne.current = !0);
      return;
    }
    W.button === 0 && (W.target?.releasePointerCapture?.(W.pointerId), !U && W.target === V.current && C.getState().userSelectionRect && z?.(W), C.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), ie.current && (p?.(W), C.setState({
      nodesSelectionActive: le.current.size > 0
    })), pe());
  }, de = (W) => {
    W.target?.releasePointerCapture?.(W.pointerId), pe();
  }, re = r === !0 || Array.isArray(r) && r.includes(0);
  return k.jsxs("div", { className: ut(["react-flow__pane", { draggable: re, dragging: E, selection: n }]), onClick: R ? void 0 : oh(z, V), onContextMenu: oh(L, V), onWheel: oh(I, V), onPointerEnter: R ? void 0 : v, onPointerMove: R ? A : x, onPointerUp: J, onPointerCancel: R ? de : void 0, onPointerDownCapture: R ? ee : void 0, onClickCapture: R ? X : void 0, onPointerLeave: w, ref: V, style: Ju, children: [_, k.jsx(aM, {})] });
}
function Ch({ id: n, store: i, unselect: a = !1, nodeRef: r }) {
  const { addSelectedNodes: u, unselectNodesAndEdges: c, multiSelectionActive: d, nodeLookup: h, onError: p } = i.getState(), m = h.get(n);
  if (!m) {
    p?.("012", Cn.error012(n));
    return;
  }
  i.setState({ nodesSelectionActive: !1 }), m.selected ? (a || m.selected && d) && (c({ nodes: [m], edges: [] }), requestAnimationFrame(() => r?.current?.blur())) : u([n]);
}
function Y1({ nodeRef: n, disabled: i = !1, noDragClassName: a, handleSelector: r, nodeId: u, isSelectable: c, nodeClickDistance: d }) {
  const h = Qe(), [p, m] = F.useState(!1), y = F.useRef();
  return F.useEffect(() => {
    if (!i)
      return y.current = XA({
        getStoreItems: () => h.getState(),
        onNodeMouseDown: (g) => {
          Ch({
            id: g,
            store: h,
            nodeRef: n
          });
        },
        onDragStart: () => {
          m(!0);
        },
        onDragStop: () => {
          m(!1);
        }
      }), () => {
        y.current?.destroy(), y.current = void 0;
      };
  }, [i, h, n]), F.useEffect(() => {
    i || !n.current || !y.current || y.current.update({
      noDragClassName: a,
      handleSelector: r,
      domNode: n.current,
      isSelectable: c,
      nodeId: u,
      nodeClickDistance: d
    });
  }, [a, r, i, c, n, u, d]), p;
}
const sM = (n) => (i) => i.selected && (i.draggable || n && typeof i.draggable > "u");
function $1() {
  const n = Qe();
  return F.useCallback((a) => {
    const { nodeExtent: r, snapToGrid: u, snapGrid: c, nodesDraggable: d, onError: h, updateNodePositions: p, nodeLookup: m, nodeOrigin: y } = n.getState(), g = /* @__PURE__ */ new Map(), v = sM(d), x = u ? c[0] : 5, w = u ? c[1] : 5, _ = a.direction.x * x * a.factor, N = a.direction.y * w * a.factor;
    for (const [, C] of m) {
      if (!v(C))
        continue;
      let U = {
        x: C.internals.positionAbsolute.x + _,
        y: C.internals.positionAbsolute.y + N
      };
      u && (U = xr(U, c));
      const { position: T, positionAbsolute: E } = s1({
        nodeId: C.id,
        nextPosition: U,
        nodeLookup: m,
        nodeExtent: r,
        nodeOrigin: y,
        onError: h
      });
      C.position = T, C.internals.positionAbsolute = E, g.set(C.id, C);
    }
    p(g);
  }, []);
}
const tg = F.createContext(null), uM = tg.Provider;
tg.Consumer;
const X1 = () => F.useContext(tg), cM = (n) => ({
  connectOnClick: n.connectOnClick,
  noPanClassName: n.noPanClassName,
  rfId: n.rfId
}), G1 = F.createContext(null);
function fM({ children: n }) {
  const i = Be(cM, Je);
  return k.jsx(G1.Provider, { value: i, children: n });
}
function dM() {
  const n = F.useContext(G1);
  if (!n)
    throw new Error("useHandleConfig must be used within a HandleConfigProvider");
  return n;
}
const hM = {
  connectingFrom: !1,
  connectingTo: !1,
  clickConnecting: !1,
  isPossibleEndHandle: !0,
  connectionInProcess: !1,
  clickConnectionInProcess: !1,
  valid: !1
}, gM = (n, i, a) => (r) => {
  const { connectionClickStartHandle: u, connectionMode: c, connection: d } = r, { fromHandle: h, toHandle: p, isValid: m } = d;
  if (!h && !u)
    return hM;
  const y = p?.nodeId === n && p?.id === i && p?.type === a;
  return {
    connectingFrom: h?.nodeId === n && h?.id === i && h?.type === a,
    connectingTo: y,
    clickConnecting: u?.nodeId === n && u?.id === i && u?.type === a,
    isPossibleEndHandle: c === Ia.Strict ? h?.type !== a : n !== h?.nodeId || i !== h?.id,
    connectionInProcess: !!h,
    clickConnectionInProcess: !!u,
    valid: y && m
  };
};
function pM({ type: n = "source", position: i = ye.Top, isValidConnection: a, isConnectable: r = !0, isConnectableStart: u = !0, isConnectableEnd: c = !0, id: d, onConnect: h, children: p, className: m, onMouseDown: y, onTouchStart: g, ...v }, x) {
  const w = d || null, _ = n === "target", N = Qe(), C = X1(), { connectOnClick: U, noPanClassName: T, rfId: E } = dM(), { connectingFrom: H, connectingTo: D, clickConnecting: R, isPossibleEndHandle: V, connectionInProcess: G, clickConnectionInProcess: le, valid: te } = Be(gM(C, w, n), Je);
  C || N.getState().onError?.("010", Cn.error010());
  const ne = (j) => {
    const { defaultEdgeOptions: z, onConnect: L, hasDefaultEdges: I } = N.getState(), X = {
      ...z,
      ...j
    };
    if (I) {
      const { edges: ee, setEdges: K, onError: se } = N.getState();
      K(Z3(X, ee, { onError: se }));
    }
    L?.(X), h?.(X);
  }, ie = (j) => {
    if (!C)
      return;
    const z = v1(j.nativeEvent);
    if (u && (z && j.button === 0 || !z)) {
      const L = N.getState();
      Th.onPointerDown(j.nativeEvent, {
        handleDomNode: j.currentTarget,
        autoPanOnConnect: L.autoPanOnConnect,
        connectionMode: L.connectionMode,
        connectionRadius: L.connectionRadius,
        domNode: L.domNode,
        nodeLookup: L.nodeLookup,
        lib: L.lib,
        isTarget: _,
        handleId: w,
        nodeId: C,
        flowId: L.rfId,
        panBy: L.panBy,
        cancelConnection: L.cancelConnection,
        onConnectStart: L.onConnectStart,
        onConnectEnd: (...I) => N.getState().onConnectEnd?.(...I),
        updateConnection: L.updateConnection,
        onConnect: ne,
        isValidConnection: a || ((...I) => N.getState().isValidConnection?.(...I) ?? !0),
        getTransform: () => N.getState().transform,
        getFromHandle: () => N.getState().connection.fromHandle,
        autoPanSpeed: L.autoPanSpeed,
        dragThreshold: L.connectionDragThreshold
      });
    }
    z ? y?.(j) : g?.(j);
  }, M = (j) => {
    const { onClickConnectStart: z, onClickConnectEnd: L, connectionClickStartHandle: I, connectionMode: X, isValidConnection: ee, lib: K, rfId: se, nodeLookup: pe, connection: A } = N.getState();
    if (!C || !I && !u)
      return;
    if (!I) {
      z?.(j.nativeEvent, { nodeId: C, handleId: w, handleType: n }), N.setState({ connectionClickStartHandle: { nodeId: C, type: n, id: w } });
      return;
    }
    const J = m1(j.target), de = a || ee, { connection: re, isValid: W } = Th.isValid(j.nativeEvent, {
      handle: {
        nodeId: C,
        id: w,
        type: n
      },
      connectionMode: X,
      fromNodeId: I.nodeId,
      fromHandleId: I.id || null,
      fromType: I.type,
      isValidConnection: de,
      flowId: se,
      doc: J,
      lib: K,
      nodeLookup: pe
    });
    W && re && ne(re);
    const ce = structuredClone(A);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, L?.(j, ce), N.setState({ connectionClickStartHandle: null });
  };
  return k.jsx("div", { "data-handleid": w, "data-nodeid": C, "data-handlepos": i, "data-id": `${E}-${C}-${w}-${n}`, className: ut([
    "react-flow__handle",
    `react-flow__handle-${i}`,
    "nodrag",
    T,
    m,
    {
      source: !_,
      target: _,
      connectable: r,
      connectablestart: u,
      connectableend: c,
      clickconnecting: R,
      connectingfrom: H,
      connectingto: D,
      valid: te,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!G || V) && (G || le ? c : u)
    }
  ]), onMouseDown: ie, onTouchStart: ie, onClick: U ? M : void 0, ref: x, ...v, children: p });
}
const Zn = F.memo(V1(pM));
function mM({ data: n, isConnectable: i, sourcePosition: a = ye.Bottom }) {
  return k.jsxs(k.Fragment, { children: [n?.label, k.jsx(Zn, { type: "source", position: a, isConnectable: i })] });
}
function yM({ data: n, isConnectable: i, targetPosition: a = ye.Top, sourcePosition: r = ye.Bottom }) {
  return k.jsxs(k.Fragment, { children: [k.jsx(Zn, { type: "target", position: a, isConnectable: i }), n?.label, k.jsx(Zn, { type: "source", position: r, isConnectable: i })] });
}
function vM() {
  return null;
}
function bM({ data: n, isConnectable: i, targetPosition: a = ye.Top }) {
  return k.jsxs(k.Fragment, { children: [k.jsx(Zn, { type: "target", position: a, isConnectable: i }), n?.label] });
}
const Lu = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Uv = {
  input: mM,
  default: yM,
  output: bM,
  group: vM
};
function xM(n) {
  return n.internals.handleBounds === void 0 ? {
    width: n.width ?? n.initialWidth ?? n.style?.width,
    height: n.height ?? n.initialHeight ?? n.style?.height
  } : {
    width: n.width ?? n.style?.width,
    height: n.height ?? n.style?.height
  };
}
const wM = (n) => {
  const { width: i, height: a, x: r, y: u } = br(n.nodeLookup, {
    filter: (c) => !!c.selected
  });
  return {
    width: Nn(i) ? i : null,
    height: Nn(a) ? a : null,
    userSelectionActive: n.userSelectionActive,
    transformString: `translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]}) translate(${r}px,${u}px)`
  };
};
function SM({ onSelectionContextMenu: n, noPanClassName: i, disableKeyboardA11y: a }) {
  const r = Qe(), { width: u, height: c, transformString: d, userSelectionActive: h } = Be(wM, Je), p = $1(), m = F.useRef(null);
  F.useEffect(() => {
    a || m.current?.focus({
      preventScroll: !0
    });
  }, [a]);
  const y = !h && u !== null && c !== null;
  if (Y1({
    nodeRef: m,
    disabled: !y
  }), !y)
    return null;
  const g = n ? (x) => {
    const w = r.getState().nodes.filter((_) => _.selected);
    n(x, w);
  } : void 0, v = (x) => {
    Object.prototype.hasOwnProperty.call(Lu, x.key) && (x.preventDefault(), p({
      direction: Lu[x.key],
      factor: x.shiftKey ? 4 : 1
    }));
  };
  return k.jsx("div", { className: ut(["react-flow__nodesselection", "react-flow__container", i]), style: {
    transform: d
  }, children: k.jsx("div", { ref: m, className: "react-flow__nodesselection-rect", onContextMenu: g, tabIndex: a ? void 0 : -1, onKeyDown: a ? void 0 : v, style: {
    width: u,
    height: c
  } }) });
}
const Bv = typeof window < "u" ? window : void 0, _M = (n) => ({ nodesSelectionActive: n.nodesSelectionActive, userSelectionActive: n.userSelectionActive });
function Z1({ children: n, onPaneClick: i, onPaneMouseEnter: a, onPaneMouseMove: r, onPaneMouseLeave: u, onPaneContextMenu: c, onPaneScroll: d, paneClickDistance: h, deleteKeyCode: p, selectionKeyCode: m, selectionOnDrag: y, selectionMode: g, onSelectionStart: v, onSelectionEnd: x, multiSelectionKeyCode: w, panActivationKeyCode: _, zoomActivationKeyCode: N, elementsSelectable: C, zoomOnScroll: U, zoomOnPinch: T, panOnScroll: E, panOnScrollSpeed: H, panOnScrollMode: D, zoomOnDoubleClick: R, panOnDrag: V, autoPanOnSelection: G, defaultViewport: le, translateExtent: te, minZoom: ne, maxZoom: ie, preventScrolling: M, onSelectionContextMenu: j, noWheelClassName: z, noPanClassName: L, disableKeyboardA11y: I, onViewportChange: X, isControlledViewport: ee }) {
  const { nodesSelectionActive: K, userSelectionActive: se } = Be(_M, Je), pe = gr(m, { target: Bv }), A = gr(_, { target: Bv }), J = A || V, de = A || E, re = y && J !== !0, W = pe || se || re;
  return eM({ deleteKeyCode: p, multiSelectionKeyCode: w }), k.jsx(iM, { onPaneContextMenu: c, elementsSelectable: C, zoomOnScroll: U, zoomOnPinch: T, panOnScroll: de, panActivationKeyPressed: A, panOnScrollSpeed: H, panOnScrollMode: D, zoomOnDoubleClick: R, panOnDrag: !pe && J, defaultViewport: le, translateExtent: te, minZoom: ne, maxZoom: ie, zoomActivationKeyCode: N, preventScrolling: M, noWheelClassName: z, noPanClassName: L, onViewportChange: X, isControlledViewport: ee, paneClickDistance: h, selectionOnDrag: re, children: k.jsxs(rM, { onSelectionStart: v, onSelectionEnd: x, onPaneClick: i, onPaneMouseEnter: a, onPaneMouseMove: r, onPaneMouseLeave: u, onPaneContextMenu: c, onPaneScroll: d, panOnDrag: J, autoPanOnSelection: G, isSelecting: !!W, selectionMode: g, selectionKeyPressed: pe, paneClickDistance: h, selectionOnDrag: re, children: [n, K && k.jsx(SM, { onSelectionContextMenu: j, noPanClassName: L, disableKeyboardA11y: I })] }) });
}
Z1.displayName = "FlowRenderer";
const EM = F.memo(Z1), NM = (n) => (i) => n ? Gh(i.nodeLookup, { x: 0, y: 0, width: i.width, height: i.height }, i.transform, !0).map((a) => a.id) : Array.from(i.nodeLookup.keys());
function TM(n) {
  return Be(F.useCallback(NM(n), [n]), Je);
}
const CM = (n) => n.updateNodeInternals;
function AM() {
  const n = Be(CM), [i] = F.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((a) => {
    const r = /* @__PURE__ */ new Map();
    a.forEach((u) => {
      const c = u.target.getAttribute("data-id");
      r.set(c, {
        id: c,
        nodeElement: u.target,
        force: !0
      });
    }), n(r);
  }));
  return F.useEffect(() => () => {
    i?.disconnect();
  }, [i]), i;
}
function MM({ node: n, nodeType: i, hasDimensions: a, resizeObserver: r }) {
  const u = Qe(), c = F.useRef(null), d = F.useRef(null), h = F.useRef(n.sourcePosition), p = F.useRef(n.targetPosition), m = F.useRef(i), y = a && !!n.internals.handleBounds;
  return F.useEffect(() => {
    c.current && !n.hidden && (!y || d.current !== c.current) && (d.current && r?.unobserve(d.current), r?.observe(c.current), d.current = c.current);
  }, [y, n.hidden]), F.useEffect(() => () => {
    d.current && (r?.unobserve(d.current), d.current = null);
  }, []), F.useEffect(() => {
    if (c.current) {
      const g = m.current !== i, v = h.current !== n.sourcePosition, x = p.current !== n.targetPosition;
      (g || v || x) && (m.current = i, h.current = n.sourcePosition, p.current = n.targetPosition, u.getState().updateNodeInternals(/* @__PURE__ */ new Map([[n.id, { id: n.id, nodeElement: c.current, force: !0 }]])));
    }
  }, [n.id, i, n.sourcePosition, n.targetPosition]), c;
}
function OM({ id: n, onClick: i, onMouseEnter: a, onMouseMove: r, onMouseLeave: u, onContextMenu: c, onDoubleClick: d, nodesDraggable: h, elementsSelectable: p, nodesConnectable: m, nodesFocusable: y, resizeObserver: g, noDragClassName: v, noPanClassName: x, disableKeyboardA11y: w, rfId: _, nodeTypes: N, nodeClickDistance: C, onError: U }) {
  const { node: T, internals: E, isParent: H } = Be((W) => {
    const ce = W.nodeLookup.get(n), he = W.parentLookup.has(n);
    return {
      node: ce,
      internals: ce.internals,
      isParent: he
    };
  }, Je);
  let D = T.type || "default", R = N?.[D] || Uv[D];
  R === void 0 && (U?.("003", Cn.error003(D)), D = "default", R = N?.default || Uv.default);
  const V = !!(T.draggable || h && typeof T.draggable > "u"), G = !!(T.selectable || p && typeof T.selectable > "u"), le = !!(T.connectable || m && typeof T.connectable > "u"), te = !!(T.focusable || y && typeof T.focusable > "u"), ne = Qe(), ie = h1(T), M = MM({ node: T, nodeType: D, hasDimensions: ie, resizeObserver: g }), j = Y1({
    nodeRef: M,
    disabled: T.hidden || !V,
    noDragClassName: v,
    handleSelector: T.dragHandle,
    nodeId: n,
    isSelectable: G,
    nodeClickDistance: C
  }), z = $1();
  if (T.hidden)
    return null;
  const L = Mn(T), I = xM(T), X = G || V || i || a || r || u, ee = a ? (W) => a(W, { ...E.userNode }) : void 0, K = r ? (W) => r(W, { ...E.userNode }) : void 0, se = u ? (W) => u(W, { ...E.userNode }) : void 0, pe = c ? (W) => c(W, { ...E.userNode }) : void 0, A = d ? (W) => d(W, { ...E.userNode }) : void 0, J = (W) => {
    const { selectNodesOnDrag: ce, nodeDragThreshold: he } = ne.getState();
    G && (!ce || !V || he > 0) && Ch({
      id: n,
      store: ne,
      nodeRef: M
    }), i && i(W, { ...E.userNode });
  }, de = (W) => {
    if (!(y1(W.nativeEvent) || w)) {
      if (o1.includes(W.key) && G) {
        const ce = W.key === "Escape";
        Ch({
          id: n,
          store: ne,
          unselect: ce,
          nodeRef: M
        });
      } else if (V && T.selected && Object.prototype.hasOwnProperty.call(Lu, W.key)) {
        W.preventDefault();
        const { ariaLabelConfig: ce } = ne.getState();
        ne.setState({
          ariaLiveMessage: ce["node.a11yDescription.ariaLiveMessage"]({
            direction: W.key.replace("Arrow", "").toLowerCase(),
            x: ~~E.positionAbsolute.x,
            y: ~~E.positionAbsolute.y
          })
        }), z({
          direction: Lu[W.key],
          factor: W.shiftKey ? 4 : 1
        });
      }
    }
  }, re = () => {
    if (w || !M.current?.matches(":focus-visible"))
      return;
    const { transform: W, width: ce, height: he, autoPanOnNodeFocus: ue, setCenter: fe } = ne.getState();
    if (!ue)
      return;
    Gh(/* @__PURE__ */ new Map([[n, T]]), { x: 0, y: 0, width: ce, height: he }, W, !0).length > 0 || fe(T.position.x + L.width / 2, T.position.y + L.height / 2, {
      zoom: W[2]
    });
  };
  return k.jsx("div", { className: ut([
    "react-flow__node",
    `react-flow__node-${D}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [x]: V
    },
    T.className,
    {
      selected: T.selected,
      selectable: G,
      parent: H,
      draggable: V,
      dragging: j
    }
  ]), ref: M, style: {
    zIndex: E.z,
    transform: `translate(${E.positionAbsolute.x}px,${E.positionAbsolute.y}px)`,
    pointerEvents: X ? "all" : "none",
    visibility: ie ? "visible" : "hidden",
    ...T.style,
    ...I
  }, "data-id": n, "data-testid": `rf__node-${n}`, onMouseEnter: ee, onMouseMove: K, onMouseLeave: se, onContextMenu: pe, onClick: J, onDoubleClick: A, onKeyDown: te ? de : void 0, tabIndex: te ? 0 : void 0, onFocus: te ? re : void 0, role: T.ariaRole ?? (te ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": w ? void 0 : `${U1}-${_}`, "aria-label": T.ariaLabel, ...T.domAttributes, children: k.jsx(uM, { value: n, children: k.jsx(R, { id: n, data: T.data, type: D, positionAbsoluteX: E.positionAbsolute.x, positionAbsoluteY: E.positionAbsolute.y, selected: T.selected ?? !1, selectable: G, draggable: V, deletable: T.deletable ?? !0, isConnectable: le, sourcePosition: T.sourcePosition, targetPosition: T.targetPosition, dragging: j, dragHandle: T.dragHandle, zIndex: E.z, parentId: T.parentId, ...L }) }) });
}
var zM = F.memo(OM);
const RM = (n) => ({
  nodesConnectable: n.nodesConnectable,
  nodesFocusable: n.nodesFocusable,
  elementsSelectable: n.elementsSelectable,
  onError: n.onError
});
function Q1(n) {
  const { nodesConnectable: i, nodesFocusable: a, elementsSelectable: r, onError: u } = Be(RM, Je), c = TM(n.onlyRenderVisibleElements), d = AM();
  return k.jsx("div", { className: "react-flow__nodes", style: Ju, children: c.map((h) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    k.jsx(zM, { id: h, nodeTypes: n.nodeTypes, nodeExtent: n.nodeExtent, onClick: n.onNodeClick, onMouseEnter: n.onNodeMouseEnter, onMouseMove: n.onNodeMouseMove, onMouseLeave: n.onNodeMouseLeave, onContextMenu: n.onNodeContextMenu, onDoubleClick: n.onNodeDoubleClick, noDragClassName: n.noDragClassName, noPanClassName: n.noPanClassName, rfId: n.rfId, disableKeyboardA11y: n.disableKeyboardA11y, resizeObserver: d, nodesDraggable: n.nodesDraggable ?? !0, nodesConnectable: i, nodesFocusable: a, elementsSelectable: r, nodeClickDistance: n.nodeClickDistance, onError: u }, h)
  )) });
}
Q1.displayName = "NodeRenderer";
const DM = F.memo(Q1);
function HM(n) {
  return Be(F.useCallback((a) => {
    if (!n)
      return a.edges.map((u) => u.id);
    const r = [];
    if (a.width && a.height)
      for (const u of a.edges) {
        const c = a.nodeLookup.get(u.source), d = a.nodeLookup.get(u.target);
        c && d && TA({
          sourceNode: c,
          targetNode: d,
          width: a.width,
          height: a.height,
          transform: a.transform
        }) && r.push(u.id);
      }
    return r;
  }, [n]), Je);
}
const kM = ({ color: n = "none", strokeWidth: i = 1 }) => {
  const a = {
    strokeWidth: i,
    ...n && { stroke: n }
  };
  return k.jsx("polyline", { className: "arrow", style: a, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, UM = ({ color: n = "none", strokeWidth: i = 1 }) => {
  const a = {
    strokeWidth: i,
    ...n && { stroke: n, fill: n }
  };
  return k.jsx("polyline", { className: "arrowclosed", style: a, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, Lv = {
  [Hu.Arrow]: kM,
  [Hu.ArrowClosed]: UM
};
function BM(n) {
  const i = Qe();
  return F.useMemo(() => Object.prototype.hasOwnProperty.call(Lv, n) ? Lv[n] : (i.getState().onError?.("009", Cn.error009(n)), null), [n]);
}
const LM = ({ id: n, type: i, color: a, width: r = 12.5, height: u = 12.5, markerUnits: c = "strokeWidth", strokeWidth: d, orient: h = "auto-start-reverse" }) => {
  const p = BM(i);
  return p ? k.jsx("marker", { className: "react-flow__arrowhead", id: n, markerWidth: `${r}`, markerHeight: `${u}`, viewBox: "-10 -10 20 20", markerUnits: c, orient: h, refX: "0", refY: "0", children: k.jsx(p, { color: a, strokeWidth: d }) }) : null;
}, K1 = ({ defaultColor: n, rfId: i }) => {
  const a = Be((c) => c.edges), r = Be((c) => c.defaultEdgeOptions), u = F.useMemo(() => HA(a, {
    id: i,
    defaultColor: n,
    defaultMarkerStart: r?.markerStart,
    defaultMarkerEnd: r?.markerEnd
  }), [a, r, i, n]);
  return u.length ? k.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: k.jsx("defs", { children: u.map((c) => k.jsx(LM, { id: c.id, type: c.type, color: c.color, width: c.width, height: c.height, markerUnits: c.markerUnits, strokeWidth: c.strokeWidth, orient: c.orient }, c.id)) }) }) : null;
};
K1.displayName = "MarkerDefinitions";
var jM = F.memo(K1);
function F1({ x: n, y: i, label: a, labelStyle: r, labelShowBg: u = !0, labelBgStyle: c, labelBgPadding: d = [2, 4], labelBgBorderRadius: h = 2, children: p, className: m, ...y }) {
  const [g, v] = F.useState({ x: 1, y: 0, width: 0, height: 0 }), x = ut(["react-flow__edge-textwrapper", m]), w = F.useRef(null);
  return F.useEffect(() => {
    if (w.current) {
      const _ = w.current.getBBox();
      v({
        x: _.x,
        y: _.y,
        width: _.width,
        height: _.height
      });
    }
  }, [a]), a ? k.jsxs("g", { transform: `translate(${n - g.width / 2} ${i - g.height / 2})`, className: x, visibility: g.width ? "visible" : "hidden", ...y, children: [u && k.jsx("rect", { width: g.width + 2 * d[0], x: -d[0], y: -d[1], height: g.height + 2 * d[1], className: "react-flow__edge-textbg", style: c, rx: h, ry: h }), k.jsx("text", { className: "react-flow__edge-text", y: g.height / 2, dy: "0.3em", ref: w, style: r, children: a }), p] }) : null;
}
F1.displayName = "EdgeText";
const VM = F.memo(F1);
function Sr({ path: n, labelX: i, labelY: a, label: r, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, interactionWidth: m = 20, ...y }) {
  return k.jsxs(k.Fragment, { children: [k.jsx("path", { ...y, d: n, fill: "none", className: ut(["react-flow__edge-path", y.className]) }), m ? k.jsx("path", { d: n, fill: "none", strokeOpacity: 0, strokeWidth: m, className: "react-flow__edge-interaction" }) : null, r && Nn(i) && Nn(a) ? k.jsx(VM, { x: i, y: a, label: r, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p }) : null] });
}
function jv({ pos: n, x1: i, y1: a, x2: r, y2: u }) {
  return n === ye.Left || n === ye.Right ? [0.5 * (i + r), a] : [i, 0.5 * (a + u)];
}
function J1({ sourceX: n, sourceY: i, sourcePosition: a = ye.Bottom, targetX: r, targetY: u, targetPosition: c = ye.Top }) {
  const [d, h] = jv({
    pos: a,
    x1: n,
    y1: i,
    x2: r,
    y2: u
  }), [p, m] = jv({
    pos: c,
    x1: r,
    y1: u,
    x2: n,
    y2: i
  }), [y, g, v, x] = b1({
    sourceX: n,
    sourceY: i,
    targetX: r,
    targetY: u,
    sourceControlX: d,
    sourceControlY: h,
    targetControlX: p,
    targetControlY: m
  });
  return [
    `M${n},${i} C${d},${h} ${p},${m} ${r},${u}`,
    y,
    g,
    v,
    x
  ];
}
function P1(n) {
  return F.memo(({ id: i, sourceX: a, sourceY: r, targetX: u, targetY: c, sourcePosition: d, targetPosition: h, label: p, labelStyle: m, labelShowBg: y, labelBgStyle: g, labelBgPadding: v, labelBgBorderRadius: x, style: w, markerEnd: _, markerStart: N, interactionWidth: C }) => {
    const [U, T, E] = J1({
      sourceX: a,
      sourceY: r,
      sourcePosition: d,
      targetX: u,
      targetY: c,
      targetPosition: h
    }), H = n.isInternal ? void 0 : i;
    return k.jsx(Sr, { id: H, path: U, labelX: T, labelY: E, label: p, labelStyle: m, labelShowBg: y, labelBgStyle: g, labelBgPadding: v, labelBgBorderRadius: x, style: w, markerEnd: _, markerStart: N, interactionWidth: C });
  });
}
const IM = P1({ isInternal: !1 }), W1 = P1({ isInternal: !0 });
IM.displayName = "SimpleBezierEdge";
W1.displayName = "SimpleBezierEdgeInternal";
function ex(n) {
  return F.memo(({ id: i, sourceX: a, sourceY: r, targetX: u, targetY: c, label: d, labelStyle: h, labelShowBg: p, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: g, style: v, sourcePosition: x = ye.Bottom, targetPosition: w = ye.Top, markerEnd: _, markerStart: N, pathOptions: C, interactionWidth: U }) => {
    const [T, E, H] = Bu({
      sourceX: a,
      sourceY: r,
      sourcePosition: x,
      targetX: u,
      targetY: c,
      targetPosition: w,
      borderRadius: C?.borderRadius,
      offset: C?.offset,
      stepPosition: C?.stepPosition
    }), D = n.isInternal ? void 0 : i;
    return k.jsx(Sr, { id: D, path: T, labelX: E, labelY: H, label: d, labelStyle: h, labelShowBg: p, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: g, style: v, markerEnd: _, markerStart: N, interactionWidth: U });
  });
}
const tx = ex({ isInternal: !1 }), nx = ex({ isInternal: !0 });
tx.displayName = "SmoothStepEdge";
nx.displayName = "SmoothStepEdgeInternal";
function ix(n) {
  return F.memo(({ id: i, ...a }) => {
    const r = n.isInternal ? void 0 : i;
    return k.jsx(tx, { ...a, id: r, pathOptions: F.useMemo(() => ({ borderRadius: 0, offset: a.pathOptions?.offset }), [a.pathOptions?.offset]) });
  });
}
const qM = ix({ isInternal: !1 }), ox = ix({ isInternal: !0 });
qM.displayName = "StepEdge";
ox.displayName = "StepEdgeInternal";
function ax(n) {
  return F.memo(({ id: i, sourceX: a, sourceY: r, targetX: u, targetY: c, label: d, labelStyle: h, labelShowBg: p, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: g, style: v, markerEnd: x, markerStart: w, interactionWidth: _ }) => {
    const [N, C, U] = S1({ sourceX: a, sourceY: r, targetX: u, targetY: c }), T = n.isInternal ? void 0 : i;
    return k.jsx(Sr, { id: T, path: N, labelX: C, labelY: U, label: d, labelStyle: h, labelShowBg: p, labelBgStyle: m, labelBgPadding: y, labelBgBorderRadius: g, style: v, markerEnd: x, markerStart: w, interactionWidth: _ });
  });
}
const YM = ax({ isInternal: !1 }), lx = ax({ isInternal: !0 });
YM.displayName = "StraightEdge";
lx.displayName = "StraightEdgeInternal";
function rx(n) {
  return F.memo(({ id: i, sourceX: a, sourceY: r, targetX: u, targetY: c, sourcePosition: d = ye.Bottom, targetPosition: h = ye.Top, label: p, labelStyle: m, labelShowBg: y, labelBgStyle: g, labelBgPadding: v, labelBgBorderRadius: x, style: w, markerEnd: _, markerStart: N, pathOptions: C, interactionWidth: U }) => {
    const [T, E, H] = x1({
      sourceX: a,
      sourceY: r,
      sourcePosition: d,
      targetX: u,
      targetY: c,
      targetPosition: h,
      curvature: C?.curvature
    }), D = n.isInternal ? void 0 : i;
    return k.jsx(Sr, { id: D, path: T, labelX: E, labelY: H, label: p, labelStyle: m, labelShowBg: y, labelBgStyle: g, labelBgPadding: v, labelBgBorderRadius: x, style: w, markerEnd: _, markerStart: N, interactionWidth: U });
  });
}
const $M = rx({ isInternal: !1 }), sx = rx({ isInternal: !0 });
$M.displayName = "BezierEdge";
sx.displayName = "BezierEdgeInternal";
const Vv = {
  default: sx,
  straight: lx,
  step: ox,
  smoothstep: nx,
  simplebezier: W1
}, Iv = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
  zIndex: void 0
}, XM = (n, i, a) => a === ye.Left ? n - i : a === ye.Right ? n + i : n, GM = (n, i, a) => a === ye.Top ? n - i : a === ye.Bottom ? n + i : n, qv = "react-flow__edgeupdater";
function Yv({ position: n, centerX: i, centerY: a, radius: r = 10, onMouseDown: u, onMouseEnter: c, onMouseOut: d, type: h }) {
  return k.jsx("circle", { onMouseDown: u, onMouseEnter: c, onMouseOut: d, className: ut([qv, `${qv}-${h}`]), cx: XM(i, r, n), cy: GM(a, r, n), r, stroke: "transparent", fill: "transparent" });
}
function ZM({ isReconnectable: n, reconnectRadius: i, edge: a, sourceX: r, sourceY: u, targetX: c, targetY: d, sourcePosition: h, targetPosition: p, onReconnect: m, onReconnectStart: y, onReconnectEnd: g, setReconnecting: v, setUpdateHover: x }) {
  const w = Qe(), _ = (E, H) => {
    if (E.button !== 0)
      return;
    const { autoPanOnConnect: D, domNode: R, connectionMode: V, connectionRadius: G, lib: le, onConnectStart: te, cancelConnection: ne, nodeLookup: ie, rfId: M, panBy: j, updateConnection: z } = w.getState(), L = H.type === "target", I = (K, se) => {
      v(!1), g?.(K, a, H.type, se);
    }, X = (K) => m?.(a, K), ee = (K, se) => {
      v(!0), y?.(E, a, H.type), te?.(K, se);
    };
    Th.onPointerDown(E.nativeEvent, {
      autoPanOnConnect: D,
      connectionMode: V,
      connectionRadius: G,
      domNode: R,
      handleId: H.id,
      nodeId: H.nodeId,
      nodeLookup: ie,
      isTarget: L,
      edgeUpdaterType: H.type,
      lib: le,
      flowId: M,
      cancelConnection: ne,
      panBy: j,
      isValidConnection: (...K) => w.getState().isValidConnection?.(...K) ?? !0,
      onConnect: X,
      onConnectStart: ee,
      onConnectEnd: (...K) => w.getState().onConnectEnd?.(...K),
      onReconnectEnd: I,
      updateConnection: z,
      getTransform: () => w.getState().transform,
      getFromHandle: () => w.getState().connection.fromHandle,
      dragThreshold: w.getState().connectionDragThreshold,
      handleDomNode: E.currentTarget
    });
  }, N = (E) => _(E, { nodeId: a.target, id: a.targetHandle ?? null, type: "target" }), C = (E) => _(E, { nodeId: a.source, id: a.sourceHandle ?? null, type: "source" }), U = () => x(!0), T = () => x(!1);
  return k.jsxs(k.Fragment, { children: [(n === !0 || n === "source") && k.jsx(Yv, { position: h, centerX: r, centerY: u, radius: i, onMouseDown: N, onMouseEnter: U, onMouseOut: T, type: "source" }), (n === !0 || n === "target") && k.jsx(Yv, { position: p, centerX: c, centerY: d, radius: i, onMouseDown: C, onMouseEnter: U, onMouseOut: T, type: "target" })] });
}
function QM({ id: n, edgesFocusable: i, edgesReconnectable: a, elementsSelectable: r, onClick: u, onDoubleClick: c, onContextMenu: d, onMouseEnter: h, onMouseMove: p, onMouseLeave: m, reconnectRadius: y, onReconnect: g, onReconnectStart: v, onReconnectEnd: x, rfId: w, edgeTypes: _, noPanClassName: N, onError: C, disableKeyboardA11y: U }) {
  let T = Be((fe) => fe.edgeLookup.get(n));
  const E = Be((fe) => fe.defaultEdgeOptions);
  T = E ? { ...E, ...T } : T;
  let H = T.type || "default", D = _?.[H] || Vv[H];
  D === void 0 && (C?.("011", Cn.error011(H)), H = "default", D = _?.default || Vv.default);
  const R = !!(T.focusable || i && typeof T.focusable > "u"), V = typeof g < "u" && (T.reconnectable || a && typeof T.reconnectable > "u"), G = !!(T.selectable || r && typeof T.selectable > "u"), le = F.useRef(null), [te, ne] = F.useState(!1), [ie, M] = F.useState(!1), j = Qe(), { zIndex: z = T.zIndex, sourceX: L, sourceY: I, targetX: X, targetY: ee, sourcePosition: K, targetPosition: se } = Be(F.useCallback((fe) => {
    const be = fe.nodeLookup.get(T.source), _e = fe.nodeLookup.get(T.target);
    if (!be || !_e)
      return Iv;
    const Ee = DA({
      id: n,
      sourceNode: be,
      targetNode: _e,
      sourceHandle: T.sourceHandle || null,
      targetHandle: T.targetHandle || null,
      connectionMode: fe.connectionMode,
      onError: C
    }), Ce = NA({
      selected: T.selected,
      zIndex: T.zIndex,
      sourceNode: be,
      targetNode: _e,
      elevateOnSelect: fe.elevateEdgesOnSelect,
      zIndexMode: fe.zIndexMode
    });
    return {
      ...Ee || Iv,
      zIndex: Ce
    };
  }, [T.source, T.target, T.sourceHandle, T.targetHandle, T.selected, T.zIndex, C]), Je), pe = F.useMemo(() => T.markerStart ? `url('#${Eh(T.markerStart, w)}')` : void 0, [T.markerStart, w]), A = F.useMemo(() => T.markerEnd ? `url('#${Eh(T.markerEnd, w)}')` : void 0, [T.markerEnd, w]);
  if (T.hidden || L === null || I === null || X === null || ee === null)
    return null;
  const J = (fe) => {
    const { addSelectedEdges: be, unselectNodesAndEdges: _e, multiSelectionActive: Ee } = j.getState();
    G && (j.setState({ nodesSelectionActive: !1 }), T.selected && Ee ? (_e({ nodes: [], edges: [T] }), le.current?.blur()) : be([n])), u && u(fe, T);
  }, de = c ? (fe) => {
    c(fe, { ...T });
  } : void 0, re = d ? (fe) => {
    d(fe, { ...T });
  } : void 0, W = h ? (fe) => {
    h(fe, { ...T });
  } : void 0, ce = p ? (fe) => {
    p(fe, { ...T });
  } : void 0, he = m ? (fe) => {
    m(fe, { ...T });
  } : void 0, ue = (fe) => {
    if (!U && o1.includes(fe.key) && G) {
      const { unselectNodesAndEdges: be, addSelectedEdges: _e } = j.getState();
      fe.key === "Escape" ? (le.current?.blur(), be({ edges: [T] })) : _e([n]);
    }
  };
  return k.jsx("svg", { style: { zIndex: z }, children: k.jsxs("g", { className: ut([
    "react-flow__edge",
    `react-flow__edge-${H}`,
    T.className,
    N,
    {
      selected: T.selected,
      animated: T.animated,
      inactive: !G && !u,
      updating: te,
      selectable: G
    }
  ]), onClick: J, onDoubleClick: de, onContextMenu: re, onMouseEnter: W, onMouseMove: ce, onMouseLeave: he, onKeyDown: R ? ue : void 0, tabIndex: R ? 0 : void 0, role: T.ariaRole ?? (R ? "group" : "img"), "aria-roledescription": "edge", "data-id": n, "data-testid": `rf__edge-${n}`, "aria-label": T.ariaLabel === null ? void 0 : T.ariaLabel || `Edge from ${T.source} to ${T.target}`, "aria-describedby": R ? `${B1}-${w}` : void 0, ref: le, ...T.domAttributes, children: [!ie && k.jsx(D, { id: n, source: T.source, target: T.target, type: T.type, selected: T.selected, animated: T.animated, selectable: G, deletable: T.deletable ?? !0, label: T.label, labelStyle: T.labelStyle, labelShowBg: T.labelShowBg, labelBgStyle: T.labelBgStyle, labelBgPadding: T.labelBgPadding, labelBgBorderRadius: T.labelBgBorderRadius, sourceX: L, sourceY: I, targetX: X, targetY: ee, sourcePosition: K, targetPosition: se, data: T.data, style: T.style, sourceHandleId: T.sourceHandle, targetHandleId: T.targetHandle, markerStart: pe, markerEnd: A, pathOptions: "pathOptions" in T ? T.pathOptions : void 0, interactionWidth: T.interactionWidth }), V && k.jsx(ZM, { edge: T, isReconnectable: V, reconnectRadius: y, onReconnect: g, onReconnectStart: v, onReconnectEnd: x, sourceX: L, sourceY: I, targetX: X, targetY: ee, sourcePosition: K, targetPosition: se, setUpdateHover: ne, setReconnecting: M })] }) });
}
var KM = F.memo(QM);
const FM = (n) => ({
  edgesFocusable: n.edgesFocusable,
  edgesReconnectable: n.edgesReconnectable,
  elementsSelectable: n.elementsSelectable,
  connectionMode: n.connectionMode,
  onError: n.onError
});
function ux({ defaultMarkerColor: n, onlyRenderVisibleElements: i, rfId: a, edgeTypes: r, noPanClassName: u, onReconnect: c, onEdgeContextMenu: d, onEdgeMouseEnter: h, onEdgeMouseMove: p, onEdgeMouseLeave: m, onEdgeClick: y, reconnectRadius: g, onEdgeDoubleClick: v, onReconnectStart: x, onReconnectEnd: w, disableKeyboardA11y: _ }) {
  const { edgesFocusable: N, edgesReconnectable: C, elementsSelectable: U, onError: T } = Be(FM, Je), E = HM(i);
  return k.jsxs("div", { className: "react-flow__edges", children: [k.jsx(jM, { defaultColor: n, rfId: a }), E.map((H) => k.jsx(KM, { id: H, edgesFocusable: N, edgesReconnectable: C, elementsSelectable: U, noPanClassName: u, onReconnect: c, onContextMenu: d, onMouseEnter: h, onMouseMove: p, onMouseLeave: m, onClick: y, reconnectRadius: g, onDoubleClick: v, onReconnectStart: x, onReconnectEnd: w, rfId: a, onError: T, edgeTypes: r, disableKeyboardA11y: _ }, H))] });
}
ux.displayName = "EdgeRenderer";
const JM = F.memo(ux), $v = (n) => `translate(${n[0]}px,${n[1]}px) scale(${n[2]})`;
function PM({ children: n }) {
  const i = Qe(), a = F.useRef(null), [r] = F.useState(() => i.getState().transform);
  return I1(() => {
    let u = null;
    const c = () => {
      const d = i.getState().transform;
      u && d[0] === u[0] && d[1] === u[1] && d[2] === u[2] || (u = d, a.current && (a.current.style.transform = $v(d)));
    };
    return c(), i.subscribe(c);
  }, [i]), k.jsx("div", { ref: a, className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: $v(r) }, children: n });
}
function WM(n) {
  const i = Fu(), a = F.useRef(!1);
  F.useEffect(() => {
    !a.current && i.viewportInitialized && n && (setTimeout(() => n(i), 1), a.current = !0);
  }, [n, i.viewportInitialized]);
}
const e4 = (n) => n.panZoom?.syncViewport;
function t4(n) {
  const i = Be(e4), a = Qe();
  return F.useEffect(() => {
    n && (i?.(n), a.setState({ transform: [n.x, n.y, n.zoom] }));
  }, [n, i]), null;
}
function n4(n) {
  return n.connection.inProgress ? { ...n.connection, to: wr(n.connection.to, n.transform) } : { ...n.connection };
}
function i4(n) {
  return n4;
}
function o4(n) {
  const i = i4();
  return Be(i, Je);
}
const a4 = (n) => ({
  nodesConnectable: n.nodesConnectable,
  isValid: n.connection.isValid,
  inProgress: n.connection.inProgress,
  width: n.width,
  height: n.height
});
function l4({ containerStyle: n, style: i, type: a, component: r }) {
  const { nodesConnectable: u, width: c, height: d, isValid: h, inProgress: p } = Be(a4, Je);
  return !(c && u && p) ? null : k.jsx("svg", { style: n, width: c, height: d, className: "react-flow__connectionline react-flow__container", children: k.jsx("g", { className: ut(["react-flow__connection", p1(h)]), children: k.jsx(cx, { style: i, type: a, CustomComponent: r, isValid: h }) }) });
}
const cx = ({ style: n, type: i = Fi.Bezier, CustomComponent: a, isValid: r }) => {
  const { inProgress: u, from: c, fromNode: d, fromHandle: h, fromPosition: p, to: m, toNode: y, toHandle: g, toPosition: v, pointer: x } = o4();
  if (!u)
    return;
  if (a)
    return k.jsx(a, { connectionLineType: i, connectionLineStyle: n, fromNode: d, fromHandle: h, fromX: c.x, fromY: c.y, toX: m.x, toY: m.y, fromPosition: p, toPosition: v, connectionStatus: p1(r), toNode: y, toHandle: g, pointer: x });
  let w = "";
  const _ = {
    sourceX: c.x,
    sourceY: c.y,
    sourcePosition: p,
    targetX: m.x,
    targetY: m.y,
    targetPosition: v
  };
  switch (i) {
    case Fi.Bezier:
      [w] = x1(_);
      break;
    case Fi.SimpleBezier:
      [w] = J1(_);
      break;
    case Fi.Step:
      [w] = Bu({
        ..._,
        borderRadius: 0
      });
      break;
    case Fi.SmoothStep:
      [w] = Bu(_);
      break;
    default:
      [w] = S1(_);
  }
  return k.jsx("path", { d: w, fill: "none", className: "react-flow__connection-path", style: n });
};
cx.displayName = "ConnectionLine";
const r4 = {};
function Xv(n = r4) {
  F.useRef(n), Qe(), F.useEffect(() => {
  }, [n]);
}
function s4() {
  Qe(), F.useRef(!1), F.useEffect(() => {
  }, []);
}
function fx({ nodeTypes: n, edgeTypes: i, onInit: a, onNodeClick: r, onEdgeClick: u, onNodeDoubleClick: c, onEdgeDoubleClick: d, onNodeMouseEnter: h, onNodeMouseMove: p, onNodeMouseLeave: m, onNodeContextMenu: y, onSelectionContextMenu: g, onSelectionStart: v, onSelectionEnd: x, connectionLineType: w, connectionLineStyle: _, connectionLineComponent: N, connectionLineContainerStyle: C, selectionKeyCode: U, selectionOnDrag: T, selectionMode: E, multiSelectionKeyCode: H, panActivationKeyCode: D, zoomActivationKeyCode: R, deleteKeyCode: V, onlyRenderVisibleElements: G, elementsSelectable: le, defaultViewport: te, translateExtent: ne, minZoom: ie, maxZoom: M, preventScrolling: j, defaultMarkerColor: z, zoomOnScroll: L, zoomOnPinch: I, panOnScroll: X, panOnScrollSpeed: ee, panOnScrollMode: K, zoomOnDoubleClick: se, panOnDrag: pe, autoPanOnSelection: A, onPaneClick: J, onPaneMouseEnter: de, onPaneMouseMove: re, onPaneMouseLeave: W, onPaneScroll: ce, onPaneContextMenu: he, paneClickDistance: ue, nodeClickDistance: fe, onEdgeContextMenu: be, onEdgeMouseEnter: _e, onEdgeMouseMove: Ee, onEdgeMouseLeave: Ce, reconnectRadius: He, onReconnect: ze, onReconnectStart: tt, onReconnectEnd: St, noDragClassName: dt, noWheelClassName: On, noPanClassName: on, disableKeyboardA11y: Ht, nodeExtent: Nt, rfId: kt, viewport: Xt, onViewportChange: zn, nodesDraggable: an }) {
  return Xv(n), Xv(i), s4(), WM(a), t4(Xt), k.jsx(EM, { onPaneClick: J, onPaneMouseEnter: de, onPaneMouseMove: re, onPaneMouseLeave: W, onPaneContextMenu: he, onPaneScroll: ce, paneClickDistance: ue, deleteKeyCode: V, selectionKeyCode: U, selectionOnDrag: T, selectionMode: E, onSelectionStart: v, onSelectionEnd: x, multiSelectionKeyCode: H, panActivationKeyCode: D, zoomActivationKeyCode: R, elementsSelectable: le, zoomOnScroll: L, zoomOnPinch: I, zoomOnDoubleClick: se, panOnScroll: X, panOnScrollSpeed: ee, panOnScrollMode: K, panOnDrag: pe, autoPanOnSelection: A, defaultViewport: te, translateExtent: ne, minZoom: ie, maxZoom: M, onSelectionContextMenu: g, preventScrolling: j, noDragClassName: dt, noWheelClassName: On, noPanClassName: on, disableKeyboardA11y: Ht, onViewportChange: zn, isControlledViewport: !!Xt, children: k.jsxs(PM, { children: [k.jsx(JM, { edgeTypes: i, onEdgeClick: u, onEdgeDoubleClick: d, onReconnect: ze, onReconnectStart: tt, onReconnectEnd: St, onlyRenderVisibleElements: G, onEdgeContextMenu: be, onEdgeMouseEnter: _e, onEdgeMouseMove: Ee, onEdgeMouseLeave: Ce, reconnectRadius: He, defaultMarkerColor: z, noPanClassName: on, disableKeyboardA11y: Ht, rfId: kt }), k.jsx(l4, { style: _, type: w, component: N, containerStyle: C }), k.jsx("div", { className: "react-flow__edgelabel-renderer" }), k.jsx(DM, { nodeTypes: n, onNodeClick: r, onNodeDoubleClick: c, onNodeMouseEnter: h, onNodeMouseMove: p, onNodeMouseLeave: m, onNodeContextMenu: y, nodeClickDistance: fe, onlyRenderVisibleElements: G, noPanClassName: on, noDragClassName: dt, disableKeyboardA11y: Ht, nodeExtent: Nt, rfId: kt, nodesDraggable: an }), k.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
fx.displayName = "GraphView";
const u4 = F.memo(fx), c4 = d1(), Gv = ({ nodes: n, edges: i, defaultNodes: a, defaultEdges: r, width: u, height: c, fitView: d, fitViewOptions: h, minZoom: p = 0.5, maxZoom: m = 2, nodeOrigin: y, nodeExtent: g, zIndexMode: v = "basic" } = {}) => {
  const x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), C = r ?? i ?? [], U = a ?? n ?? [], T = y ?? [0, 0], E = g ?? cr;
  N1(_, N, C);
  const { nodesInitialized: H } = Nh(U, x, w, {
    nodeOrigin: T,
    nodeExtent: E,
    zIndexMode: v
  });
  let D = [0, 0, 1];
  if (d && u && c) {
    const R = br(x, {
      filter: (te) => !!((te.width || te.initialWidth) && (te.height || te.initialHeight))
    }), { x: V, y: G, zoom: le } = Qh(R, u, c, p, m, h?.padding ?? 0.1);
    D = [V, G, le];
  }
  return {
    rfId: "1",
    width: u ?? 0,
    height: c ?? 0,
    transform: D,
    nodes: U,
    nodesInitialized: H,
    nodeLookup: x,
    parentLookup: w,
    edges: C,
    edgeLookup: N,
    connectionLookup: _,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: a !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: p,
    maxZoom: m,
    translateExtent: cr,
    nodeExtent: E,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Ia.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: T,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: d ?? !1,
    fitViewOptions: h,
    fitViewResolver: null,
    connection: { ...l1 },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: c4,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: a1,
    zIndexMode: v,
    defaultEdgeOptions: void 0,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onNodesDelete: void 0,
    onEdgesDelete: void 0,
    onDelete: void 0,
    onBeforeDelete: void 0,
    onViewportChangeStart: void 0,
    onViewportChange: void 0,
    onViewportChangeEnd: void 0,
    onNodeDragStart: void 0,
    onNodeDrag: void 0,
    onNodeDragStop: void 0,
    onSelectionDragStart: void 0,
    onSelectionDrag: void 0,
    onSelectionDragStop: void 0,
    onMoveStart: void 0,
    onMove: void 0,
    onMoveEnd: void 0,
    onConnect: void 0,
    onConnectStart: void 0,
    onConnectEnd: void 0,
    onClickConnectStart: void 0,
    onClickConnectEnd: void 0
  };
}, f4 = ({ nodes: n, edges: i, defaultNodes: a, defaultEdges: r, width: u, height: c, fitView: d, fitViewOptions: h, minZoom: p, maxZoom: m, nodeOrigin: y, nodeExtent: g, zIndexMode: v }) => S3((x, w) => {
  async function _() {
    const { nodeLookup: N, panZoom: C, fitViewOptions: U, fitViewResolver: T, width: E, height: H, minZoom: D, maxZoom: R } = w();
    C && (await vA({
      nodes: N,
      width: E,
      height: H,
      panZoom: C,
      minZoom: D,
      maxZoom: R
    }, U), T?.resolve(!0), x({ fitViewResolver: null }));
  }
  return {
    ...Gv({
      nodes: n,
      edges: i,
      width: u,
      height: c,
      fitView: d,
      fitViewOptions: h,
      minZoom: p,
      maxZoom: m,
      nodeOrigin: y,
      nodeExtent: g,
      defaultNodes: a,
      defaultEdges: r,
      zIndexMode: v
    }),
    setNodes: (N) => {
      const { nodeLookup: C, parentLookup: U, nodeOrigin: T, nodeExtent: E, elevateNodesOnSelect: H, fitViewQueued: D, zIndexMode: R, nodesSelectionActive: V } = w(), { nodesInitialized: G, hasSelectedNodes: le } = Nh(N, C, U, {
        nodeOrigin: T,
        nodeExtent: E,
        elevateNodesOnSelect: H,
        checkEquality: !0,
        zIndexMode: R
      }), te = V && le;
      D && G ? (_(), x({
        nodes: N,
        nodesInitialized: G,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: te
      })) : x({ nodes: N, nodesInitialized: G, nodesSelectionActive: te });
    },
    setEdges: (N) => {
      const { connectionLookup: C, edgeLookup: U } = w();
      N1(C, U, N), x({ edges: N });
    },
    setDefaultNodesAndEdges: (N, C) => {
      if (N) {
        const { setNodes: U } = w();
        U(N), x({ hasDefaultNodes: !0 });
      }
      if (C) {
        const { setEdges: U } = w();
        U(C), x({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (N) => {
      const { triggerNodeChanges: C, nodeLookup: U, parentLookup: T, domNode: E, nodeOrigin: H, nodeExtent: D, debug: R, fitViewQueued: V, zIndexMode: G } = w(), { changes: le, updatedInternals: te } = IA(N, U, T, E, H, D, G);
      te && (BA(U, T, { nodeOrigin: H, nodeExtent: D, zIndexMode: G }), V ? (_(), x({ fitViewQueued: !1, fitViewOptions: void 0 })) : x({}), le?.length > 0 && (R && console.log("React Flow: trigger node changes", le), C?.(le)));
    },
    updateNodePositions: (N, C = !1) => {
      const U = [];
      let T = [];
      const { nodeLookup: E, triggerNodeChanges: H, connection: D, updateConnection: R, onNodesChangeMiddlewareMap: V } = w();
      for (const [G, le] of N) {
        const te = E.get(G), ne = !!(te?.expandParent && te?.parentId && le?.position), ie = {
          id: G,
          type: "position",
          position: ne ? {
            x: Math.max(0, le.position.x),
            y: Math.max(0, le.position.y)
          } : le.position,
          dragging: C
        };
        if (te && D.inProgress && D.fromNode.id === te.id) {
          const M = Bo(te, D.fromHandle, ye.Left, !0);
          R({ ...D, from: M });
        }
        ne && te.parentId && U.push({
          id: G,
          parentId: te.parentId,
          rect: {
            ...le.internals.positionAbsolute,
            width: le.measured.width ?? 0,
            height: le.measured.height ?? 0
          }
        }), T.push(ie);
      }
      if (U.length > 0) {
        const { parentLookup: G, nodeOrigin: le } = w(), te = eg(U, E, G, le);
        T.push(...te);
      }
      for (const G of V.values())
        T = G(T);
      H(T);
    },
    triggerNodeChanges: (N) => {
      const { onNodesChange: C, setNodes: U, nodes: T, hasDefaultNodes: E, debug: H } = w();
      if (N?.length) {
        if (E) {
          const D = $3(N, T);
          U(D);
        }
        H && console.log("React Flow: trigger node changes", N), C?.(N);
      }
    },
    triggerEdgeChanges: (N) => {
      const { onEdgesChange: C, setEdges: U, edges: T, hasDefaultEdges: E, debug: H } = w();
      if (N?.length) {
        if (E) {
          const D = X3(N, T);
          U(D);
        }
        H && console.log("React Flow: trigger edge changes", N), C?.(N);
      }
    },
    addSelectedNodes: (N) => {
      const { multiSelectionActive: C, edgeLookup: U, nodeLookup: T, triggerNodeChanges: E, triggerEdgeChanges: H } = w();
      if (C) {
        const D = N.map((R) => Co(R, !0));
        E(D);
        return;
      }
      E(Ha(T, /* @__PURE__ */ new Set([...N]), !0)), H(Ha(U));
    },
    addSelectedEdges: (N) => {
      const { multiSelectionActive: C, edgeLookup: U, nodeLookup: T, triggerNodeChanges: E, triggerEdgeChanges: H } = w();
      if (C) {
        const D = N.map((R) => Co(R, !0));
        H(D);
        return;
      }
      H(Ha(U, /* @__PURE__ */ new Set([...N]))), E(Ha(T, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: N, edges: C } = {}) => {
      const { edges: U, nodes: T, nodeLookup: E, triggerNodeChanges: H, triggerEdgeChanges: D } = w(), R = N || T, V = C || U, G = [];
      for (const te of R) {
        if (!te.selected)
          continue;
        const ne = E.get(te.id);
        ne && (ne.selected = !1), G.push(Co(te.id, !1));
      }
      const le = [];
      for (const te of V)
        te.selected && le.push(Co(te.id, !1));
      H(G), D(le);
    },
    setMinZoom: (N) => {
      const { panZoom: C, maxZoom: U } = w();
      C?.setScaleExtent([N, U]), x({ minZoom: N });
    },
    setMaxZoom: (N) => {
      const { panZoom: C, minZoom: U } = w();
      C?.setScaleExtent([U, N]), x({ maxZoom: N });
    },
    setTranslateExtent: (N) => {
      w().panZoom?.setTranslateExtent(N), x({ translateExtent: N });
    },
    resetSelectedElements: () => {
      const { edges: N, nodes: C, triggerNodeChanges: U, triggerEdgeChanges: T, elementsSelectable: E } = w();
      if (!E)
        return;
      const H = C.reduce((R, V) => V.selected ? [...R, Co(V.id, !1)] : R, []), D = N.reduce((R, V) => V.selected ? [...R, Co(V.id, !1)] : R, []);
      U(H), T(D);
    },
    setNodeExtent: (N) => {
      const { nodes: C, nodeLookup: U, parentLookup: T, nodeOrigin: E, elevateNodesOnSelect: H, nodeExtent: D, zIndexMode: R } = w();
      N[0][0] === D[0][0] && N[0][1] === D[0][1] && N[1][0] === D[1][0] && N[1][1] === D[1][1] || (Nh(C, U, T, {
        nodeOrigin: E,
        nodeExtent: N,
        elevateNodesOnSelect: H,
        checkEquality: !1,
        zIndexMode: R
      }), x({ nodeExtent: N }));
    },
    panBy: (N) => {
      const { transform: C, width: U, height: T, panZoom: E, translateExtent: H } = w();
      return qA({ delta: N, panZoom: E, transform: C, translateExtent: H, width: U, height: T });
    },
    setCenter: async (N, C, U) => {
      const { width: T, height: E, maxZoom: H, panZoom: D } = w();
      if (!D)
        return !1;
      const R = typeof U?.zoom < "u" ? U.zoom : H;
      return await D.setViewport({
        x: T / 2 - N * R,
        y: E / 2 - C * R,
        zoom: R
      }, { duration: U?.duration, ease: U?.ease, interpolate: U?.interpolate }), !0;
    },
    cancelConnection: () => {
      x({
        connection: { ...l1 }
      });
    },
    updateConnection: (N) => {
      x({ connection: N });
    },
    reset: () => x({ ...Gv() })
  };
}, Object.is);
function dx({ initialNodes: n, initialEdges: i, defaultNodes: a, defaultEdges: r, initialWidth: u, initialHeight: c, initialMinZoom: d, initialMaxZoom: h, initialFitViewOptions: p, fitView: m, nodeOrigin: y, nodeExtent: g, zIndexMode: v, children: x }) {
  const [w] = F.useState(() => f4({
    nodes: n,
    edges: i,
    defaultNodes: a,
    defaultEdges: r,
    width: u,
    height: c,
    fitView: m,
    minZoom: d,
    maxZoom: h,
    fitViewOptions: p,
    nodeOrigin: y,
    nodeExtent: g,
    zIndexMode: v
  }));
  return k.jsx(E3, { value: w, children: k.jsx(F3, { children: k.jsx(fM, { children: x }) }) });
}
function d4({ children: n, nodes: i, edges: a, defaultNodes: r, defaultEdges: u, width: c, height: d, fitView: h, fitViewOptions: p, minZoom: m, maxZoom: y, nodeOrigin: g, nodeExtent: v, zIndexMode: x }) {
  return F.useContext(Qu) ? k.jsx(k.Fragment, { children: n }) : k.jsx(dx, { initialNodes: i, initialEdges: a, defaultNodes: r, defaultEdges: u, initialWidth: c, initialHeight: d, fitView: h, initialFitViewOptions: p, initialMinZoom: m, initialMaxZoom: y, nodeOrigin: g, nodeExtent: v, zIndexMode: x, children: n });
}
const h4 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function g4({ nodes: n, edges: i, defaultNodes: a, defaultEdges: r, className: u, nodeTypes: c, edgeTypes: d, onNodeClick: h, onEdgeClick: p, onInit: m, onMove: y, onMoveStart: g, onMoveEnd: v, onConnect: x, onConnectStart: w, onConnectEnd: _, onClickConnectStart: N, onClickConnectEnd: C, onNodeMouseEnter: U, onNodeMouseMove: T, onNodeMouseLeave: E, onNodeContextMenu: H, onNodeDoubleClick: D, onNodeDragStart: R, onNodeDrag: V, onNodeDragStop: G, onNodesDelete: le, onEdgesDelete: te, onDelete: ne, onSelectionChange: ie, onSelectionDragStart: M, onSelectionDrag: j, onSelectionDragStop: z, onSelectionContextMenu: L, onSelectionStart: I, onSelectionEnd: X, onBeforeDelete: ee, connectionMode: K, connectionLineType: se = Fi.Bezier, connectionLineStyle: pe, connectionLineComponent: A, connectionLineContainerStyle: J, deleteKeyCode: de = "Backspace", selectionKeyCode: re = "Shift", selectionOnDrag: W = !1, selectionMode: ce = fr.Full, panActivationKeyCode: he = "Space", multiSelectionKeyCode: ue = hr() ? "Meta" : "Control", zoomActivationKeyCode: fe = hr() ? "Meta" : "Control", snapToGrid: be, snapGrid: _e, onlyRenderVisibleElements: Ee = !1, selectNodesOnDrag: Ce, nodesDraggable: He, autoPanOnNodeFocus: ze, nodesConnectable: tt, nodesFocusable: St, nodeOrigin: dt = L1, edgesFocusable: On, edgesReconnectable: on, elementsSelectable: Ht = !0, defaultViewport: Nt = B3, minZoom: kt = 0.5, maxZoom: Xt = 2, translateExtent: zn = cr, preventScrolling: an = !0, nodeExtent: Wi, defaultMarkerColor: Ga = "#b1b1b7", zoomOnScroll: Pu = !0, zoomOnPinch: _r = !0, panOnScroll: Za = !1, panOnScrollSpeed: Qa = 0.5, panOnScrollMode: Ka = Ro.Free, zoomOnDoubleClick: Wu = !0, panOnDrag: ec = !0, onPaneClick: Tt, onPaneMouseEnter: tc, onPaneMouseMove: Er, onPaneMouseLeave: Nr, onPaneScroll: jo, onPaneContextMenu: nc, paneClickDistance: Tr = 1, nodeClickDistance: ic = 0, children: oc, onReconnect: eo, onReconnectStart: Ct, onReconnectEnd: Rn, onEdgeContextMenu: At, onEdgeDoubleClick: ac, onEdgeMouseEnter: lc, onEdgeMouseMove: rc, onEdgeMouseLeave: Vo, reconnectRadius: Io = 10, onNodesChange: qo, onEdgesChange: Kn, noDragClassName: Yo = "nodrag", noWheelClassName: to = "nowheel", noPanClassName: Fa = "nopan", fitView: Cr, fitViewOptions: Ja, connectOnClick: Pa, attributionPosition: no, proOptions: sc, defaultEdgeOptions: Ar, elevateNodesOnSelect: Mr = !0, elevateEdgesOnSelect: Or = !1, disableKeyboardA11y: $o = !1, autoPanOnConnect: Wa, autoPanOnNodeDrag: zr, autoPanOnSelection: Rr = !0, autoPanSpeed: pn, connectionRadius: ct, isValidConnection: _t, onError: mi, style: Dr, id: Hr, nodeDragThreshold: uc, connectionDragThreshold: kr, viewport: io, onViewportChange: Xo, width: Go, height: Fn, colorMode: yi = "light", debug: oo, onScroll: Jn, ariaLabelConfig: ot, zIndexMode: el = "basic", ...Ur }, Br) {
  const mn = Hr || "1", vi = I3(yi), cc = F.useCallback((tl) => {
    tl.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Jn?.(tl);
  }, [Jn]);
  return k.jsx("div", { "data-testid": "rf__wrapper", ...Ur, onScroll: cc, style: { ...Dr, ...h4 }, ref: Br, className: ut(["react-flow", u, vi]), id: Hr, role: "application", children: k.jsxs(d4, { nodes: n, edges: i, width: Go, height: Fn, fitView: Cr, fitViewOptions: Ja, minZoom: kt, maxZoom: Xt, nodeOrigin: dt, nodeExtent: Wi, zIndexMode: el, children: [k.jsx(V3, { nodes: n, edges: i, defaultNodes: a, defaultEdges: r, onConnect: x, onConnectStart: w, onConnectEnd: _, onClickConnectStart: N, onClickConnectEnd: C, nodesDraggable: He, autoPanOnNodeFocus: ze, nodesConnectable: tt, nodesFocusable: St, edgesFocusable: On, edgesReconnectable: on, elementsSelectable: Ht, elevateNodesOnSelect: Mr, elevateEdgesOnSelect: Or, minZoom: kt, maxZoom: Xt, nodeExtent: Wi, onNodesChange: qo, onEdgesChange: Kn, snapToGrid: be, snapGrid: _e, connectionMode: K, translateExtent: zn, connectOnClick: Pa, defaultEdgeOptions: Ar, fitView: Cr, fitViewOptions: Ja, onNodesDelete: le, onEdgesDelete: te, onDelete: ne, onNodeDragStart: R, onNodeDrag: V, onNodeDragStop: G, onSelectionDrag: j, onSelectionDragStart: M, onSelectionDragStop: z, onMove: y, onMoveStart: g, onMoveEnd: v, noPanClassName: Fa, nodeOrigin: dt, rfId: mn, autoPanOnConnect: Wa, autoPanOnNodeDrag: zr, autoPanSpeed: pn, onError: mi, connectionRadius: ct, isValidConnection: _t, selectNodesOnDrag: Ce, nodeDragThreshold: uc, connectionDragThreshold: kr, onBeforeDelete: ee, debug: oo, ariaLabelConfig: ot, zIndexMode: el }), k.jsx(u4, { onInit: m, onNodeClick: h, onEdgeClick: p, onNodeMouseEnter: U, onNodeMouseMove: T, onNodeMouseLeave: E, onNodeContextMenu: H, onNodeDoubleClick: D, nodeTypes: c, edgeTypes: d, connectionLineType: se, connectionLineStyle: pe, connectionLineComponent: A, connectionLineContainerStyle: J, selectionKeyCode: re, selectionOnDrag: W, selectionMode: ce, deleteKeyCode: de, multiSelectionKeyCode: ue, panActivationKeyCode: he, zoomActivationKeyCode: fe, onlyRenderVisibleElements: Ee, defaultViewport: Nt, translateExtent: zn, minZoom: kt, maxZoom: Xt, preventScrolling: an, zoomOnScroll: Pu, zoomOnPinch: _r, zoomOnDoubleClick: Wu, panOnScroll: Za, panOnScrollSpeed: Qa, panOnScrollMode: Ka, panOnDrag: ec, autoPanOnSelection: Rr, onPaneClick: Tt, onPaneMouseEnter: tc, onPaneMouseMove: Er, onPaneMouseLeave: Nr, onPaneScroll: jo, onPaneContextMenu: nc, paneClickDistance: Tr, nodeClickDistance: ic, onSelectionContextMenu: L, onSelectionStart: I, onSelectionEnd: X, onReconnect: eo, onReconnectStart: Ct, onReconnectEnd: Rn, onEdgeContextMenu: At, onEdgeDoubleClick: ac, onEdgeMouseEnter: lc, onEdgeMouseMove: rc, onEdgeMouseLeave: Vo, reconnectRadius: Io, defaultMarkerColor: Ga, noDragClassName: Yo, noWheelClassName: to, noPanClassName: Fa, rfId: mn, disableKeyboardA11y: $o, nodeExtent: Wi, viewport: io, onViewportChange: Xo, nodesDraggable: He }), k.jsx(U3, { onSelectionChange: ie }), oc, k.jsx(z3, { proOptions: sc, position: no }), k.jsx(O3, { rfId: mn, disableKeyboardA11y: $o })] }) });
}
var p4 = V1(g4);
const m4 = (n) => n.domNode?.querySelector(".react-flow__edgelabel-renderer");
function y4({ children: n }) {
  const i = Be(m4);
  return i ? _3.createPortal(n, i) : null;
}
function v4({ dimensions: n, lineWidth: i, variant: a, className: r }) {
  return k.jsx("path", { strokeWidth: i, d: `M${n[0] / 2} 0 V${n[1]} M0 ${n[1] / 2} H${n[0]}`, className: ut(["react-flow__background-pattern", a, r]) });
}
function b4({ radius: n, className: i }) {
  return k.jsx("circle", { cx: n, cy: n, r: n, className: ut(["react-flow__background-pattern", "dots", i]) });
}
var Ji;
(function(n) {
  n.Lines = "lines", n.Dots = "dots", n.Cross = "cross";
})(Ji || (Ji = {}));
const x4 = {
  [Ji.Dots]: 1,
  [Ji.Lines]: 1,
  [Ji.Cross]: 6
}, w4 = (n) => ({ transform: n.transform, patternId: `pattern-${n.rfId}` });
function hx({
  id: n,
  variant: i = Ji.Dots,
  // only used for dots and cross
  gap: a = 20,
  // only used for lines and cross
  size: r,
  lineWidth: u = 1,
  offset: c = 0,
  color: d,
  bgColor: h,
  style: p,
  className: m,
  patternClassName: y
}) {
  const g = F.useRef(null), { transform: v, patternId: x } = Be(w4, Je), w = r || x4[i], _ = i === Ji.Dots, N = i === Ji.Cross, C = Array.isArray(a) ? a : [a, a], U = [C[0] * v[2] || 1, C[1] * v[2] || 1], T = w * v[2], E = Array.isArray(c) ? c : [c, c], H = N ? [T, T] : U, D = [
    E[0] * v[2] + H[0] / 2,
    E[1] * v[2] + H[1] / 2
  ], R = `${x}${n || ""}`;
  return k.jsxs("svg", { className: ut(["react-flow__background", m]), style: {
    ...p,
    ...Ju,
    "--xy-background-color-props": h,
    "--xy-background-pattern-color-props": d
  }, ref: g, "data-testid": "rf__background", children: [k.jsx("pattern", { id: R, x: v[0] % U[0], y: v[1] % U[1], width: U[0], height: U[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${D[0]},-${D[1]})`, children: _ ? k.jsx(b4, { radius: T / 2, className: y }) : k.jsx(v4, { dimensions: H, lineWidth: u, variant: i, className: y }) }), k.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${R})` })] });
}
hx.displayName = "Background";
const S4 = F.memo(hx);
function _4() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: k.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function E4() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: k.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function N4() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: k.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function T4() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: k.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function C4() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: k.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function pu({ children: n, className: i, ...a }) {
  return k.jsx("button", { type: "button", className: ut(["react-flow__controls-button", i]), ...a, children: n });
}
const A4 = (n) => ({
  isInteractive: n.nodesDraggable || n.nodesConnectable || n.elementsSelectable,
  minZoomReached: n.transform[2] <= n.minZoom,
  maxZoomReached: n.transform[2] >= n.maxZoom,
  ariaLabelConfig: n.ariaLabelConfig
});
function gx({ style: n, showZoom: i = !0, showFitView: a = !0, showInteractive: r = !0, fitViewOptions: u, onZoomIn: c, onZoomOut: d, onFitView: h, onInteractiveChange: p, className: m, children: y, position: g = "bottom-left", orientation: v = "vertical", "aria-label": x }) {
  const w = Qe(), { isInteractive: _, minZoomReached: N, maxZoomReached: C, ariaLabelConfig: U } = Be(A4, Je), { zoomIn: T, zoomOut: E, fitView: H } = Fu(), D = () => {
    T(), c?.();
  }, R = () => {
    E(), d?.();
  }, V = () => {
    H(u), h?.();
  }, G = () => {
    w.setState({
      nodesDraggable: !_,
      nodesConnectable: !_,
      elementsSelectable: !_
    }), p?.(!_);
  }, le = v === "horizontal" ? "horizontal" : "vertical";
  return k.jsxs(Ku, { className: ut(["react-flow__controls", le, m]), position: g, style: n, "data-testid": "rf__controls", "aria-label": x ?? U["controls.ariaLabel"], children: [i && k.jsxs(k.Fragment, { children: [k.jsx(pu, { onClick: D, className: "react-flow__controls-zoomin", title: U["controls.zoomIn.ariaLabel"], "aria-label": U["controls.zoomIn.ariaLabel"], disabled: C, children: k.jsx(_4, {}) }), k.jsx(pu, { onClick: R, className: "react-flow__controls-zoomout", title: U["controls.zoomOut.ariaLabel"], "aria-label": U["controls.zoomOut.ariaLabel"], disabled: N, children: k.jsx(E4, {}) })] }), a && k.jsx(pu, { className: "react-flow__controls-fitview", onClick: V, title: U["controls.fitView.ariaLabel"], "aria-label": U["controls.fitView.ariaLabel"], children: k.jsx(N4, {}) }), r && k.jsx(pu, { className: "react-flow__controls-interactive", onClick: G, title: U["controls.interactive.ariaLabel"], "aria-label": U["controls.interactive.ariaLabel"], children: _ ? k.jsx(C4, {}) : k.jsx(T4, {}) }), y] });
}
gx.displayName = "Controls";
const M4 = F.memo(gx);
function O4({ id: n, x: i, y: a, width: r, height: u, style: c, color: d, strokeColor: h, strokeWidth: p, className: m, borderRadius: y, shapeRendering: g, selected: v, onClick: x }) {
  const { background: w, backgroundColor: _ } = c || {}, N = d || w || _;
  return k.jsx("rect", { className: ut(["react-flow__minimap-node", { selected: v }, m]), x: i, y: a, rx: y, ry: y, width: r, height: u, style: {
    fill: N,
    stroke: h,
    strokeWidth: p
  }, shapeRendering: g, onClick: x ? (C) => x(C, n) : void 0 });
}
const z4 = F.memo(O4), R4 = (n) => n.nodes.map((i) => i.id), ah = (n) => n instanceof Function ? n : () => n;
function D4({
  nodeStrokeColor: n,
  nodeColor: i,
  nodeClassName: a = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: u,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: c = z4,
  onClick: d
}) {
  const h = Be(R4, Je), p = ah(i), m = ah(n), y = ah(a), g = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return k.jsx(k.Fragment, { children: h.map((v) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    k.jsx(k4, { id: v, nodeColorFunc: p, nodeStrokeColorFunc: m, nodeClassNameFunc: y, nodeBorderRadius: r, nodeStrokeWidth: u, NodeComponent: c, onClick: d, shapeRendering: g }, v)
  )) });
}
function H4({ id: n, nodeColorFunc: i, nodeStrokeColorFunc: a, nodeClassNameFunc: r, nodeBorderRadius: u, nodeStrokeWidth: c, shapeRendering: d, NodeComponent: h, onClick: p }) {
  const { node: m, x: y, y: g, width: v, height: x } = Be((w) => {
    const _ = w.nodeLookup.get(n);
    if (!_)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const N = _.internals.userNode, { x: C, y: U } = _.internals.positionAbsolute, { width: T, height: E } = Mn(N);
    return {
      node: N,
      x: C,
      y: U,
      width: T,
      height: E
    };
  }, Je);
  return !m || m.hidden || !h1(m) ? null : k.jsx(h, { x: y, y: g, width: v, height: x, style: m.style, selected: !!m.selected, className: r(m), color: i(m), borderRadius: u, strokeColor: a(m), strokeWidth: c, shapeRendering: d, onClick: p, id: m.id });
}
const k4 = F.memo(H4);
var U4 = F.memo(D4);
const B4 = 200, L4 = 150, j4 = (n) => !n.hidden, V4 = (n) => {
  const i = {
    x: -n.transform[0] / n.transform[2],
    y: -n.transform[1] / n.transform[2],
    width: n.width / n.transform[2],
    height: n.height / n.transform[2]
  };
  let a = !1;
  for (const r of n.nodeLookup.values())
    if (!r.hidden) {
      a = !0;
      break;
    }
  return {
    viewBB: i,
    boundingRect: a ? c1(br(n.nodeLookup, { filter: j4 }), i) : i,
    rfId: n.rfId,
    panZoom: n.panZoom,
    translateExtent: n.translateExtent,
    flowWidth: n.width,
    flowHeight: n.height,
    ariaLabelConfig: n.ariaLabelConfig
  };
}, Zv = (n, i) => n.x === i.x && n.y === i.y && n.width === i.width && n.height === i.height, I4 = (n, i) => Zv(n.viewBB, i.viewBB) && Zv(n.boundingRect, i.boundingRect) && n.rfId === i.rfId && n.panZoom === i.panZoom && n.translateExtent === i.translateExtent && n.flowWidth === i.flowWidth && n.flowHeight === i.flowHeight && n.ariaLabelConfig === i.ariaLabelConfig, q4 = "react-flow__minimap-desc";
function px({
  style: n,
  className: i,
  nodeStrokeColor: a,
  nodeColor: r,
  nodeClassName: u = "",
  nodeBorderRadius: c = 5,
  nodeStrokeWidth: d,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: h,
  bgColor: p,
  maskColor: m,
  maskStrokeColor: y,
  maskStrokeWidth: g,
  position: v = "bottom-right",
  onClick: x,
  onNodeClick: w,
  pannable: _ = !1,
  zoomable: N = !1,
  ariaLabel: C,
  inversePan: U,
  zoomStep: T = 1,
  offsetScale: E = 5
}) {
  const H = Qe(), D = F.useRef(null), { boundingRect: R, panZoom: V, viewBB: G, rfId: le, translateExtent: te, flowWidth: ne, flowHeight: ie, ariaLabelConfig: M } = Be(V4, I4), j = n?.width ?? B4, z = n?.height ?? L4, L = R.width / j, I = R.height / z, X = Math.max(L, I), ee = X * j, K = X * z, se = E * X, pe = R.x - (ee - R.width) / 2 - se, A = R.y - (K - R.height) / 2 - se, J = ee + se * 2, de = K + se * 2, re = `${q4}-${le}`, W = F.useRef(0), ce = F.useRef();
  W.current = X, F.useEffect(() => {
    const _e = H.getState().panZoom;
    if (D.current && _e)
      return ce.current = JA({
        domNode: D.current,
        panZoom: _e,
        getTransform: () => H.getState().transform,
        getViewScale: () => W.current
      }), () => {
        ce.current?.destroy();
      };
  }, [V]), F.useEffect(() => {
    ce.current?.update({
      translateExtent: te,
      width: ne,
      height: ie,
      inversePan: U,
      pannable: _,
      zoomStep: T,
      zoomable: N
    });
  }, [_, N, U, T, te, ne, ie]);
  const he = x ? (_e) => {
    const [Ee, Ce] = ce.current?.pointer(_e) || [0, 0];
    x(_e, { x: Ee, y: Ce });
  } : void 0, ue = F.useCallback((_e, Ee) => {
    const Ce = H.getState().nodeLookup.get(Ee).internals.userNode;
    w?.(_e, Ce);
  }, [w]), fe = w ? ue : void 0, be = C ?? M["minimap.ariaLabel"];
  return k.jsx(Ku, { position: v, style: {
    ...n,
    "--xy-minimap-background-color-props": typeof p == "string" ? p : void 0,
    "--xy-minimap-mask-background-color-props": typeof m == "string" ? m : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof y == "string" ? y : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof g == "number" ? g * X : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-node-stroke-width-props": typeof d == "number" ? d : void 0
  }, className: ut(["react-flow__minimap", i]), "data-testid": "rf__minimap", children: k.jsxs("svg", { width: j, height: z, viewBox: `${pe} ${A} ${J} ${de}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": re, ref: D, onClick: he, children: [be && k.jsx("title", { id: re, children: be }), k.jsx(U4, { onClick: fe, nodeColor: r, nodeStrokeColor: a, nodeBorderRadius: c, nodeClassName: u, nodeStrokeWidth: d, nodeComponent: h }), k.jsx("path", { className: "react-flow__minimap-mask", d: `M${pe - se},${A - se}h${J + se * 2}v${de + se * 2}h${-J - se * 2}z
        M${G.x},${G.y}h${G.width}v${G.height}h${-G.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
px.displayName = "MiniMap";
F.memo(px);
const Y4 = (n) => (i) => n ? `${Math.max(1 / i.transform[2], 1)}` : void 0, $4 = {
  [$a.Line]: "right",
  [$a.Handle]: "bottom-right"
};
function X4({ nodeId: n, position: i, variant: a = $a.Handle, className: r, style: u = void 0, children: c, color: d, minWidth: h = 10, minHeight: p = 10, maxWidth: m = Number.MAX_VALUE, maxHeight: y = Number.MAX_VALUE, keepAspectRatio: g = !1, resizeDirection: v, autoScale: x = !0, shouldResize: w, onResizeStart: _, onResize: N, onResizeEnd: C }) {
  const U = X1(), T = typeof n == "string" ? n : U, E = Qe(), H = F.useRef(null), D = a === $a.Handle, R = Be(F.useCallback(Y4(D && x), [D, x]), Je), V = F.useRef(null), G = i ?? $4[a];
  F.useEffect(() => {
    if (!(!H.current || !T))
      return V.current || (V.current = c3({
        domNode: H.current,
        nodeId: T,
        getStoreItems: () => {
          const { nodeLookup: te, transform: ne, snapGrid: ie, snapToGrid: M, nodeOrigin: j, domNode: z } = E.getState();
          return {
            nodeLookup: te,
            transform: ne,
            snapGrid: ie,
            snapToGrid: M,
            nodeOrigin: j,
            paneDomNode: z
          };
        },
        onChange: (te, ne) => {
          const { triggerNodeChanges: ie, nodeLookup: M, parentLookup: j, nodeOrigin: z } = E.getState(), L = [], I = { x: te.x, y: te.y }, X = M.get(T);
          if (X && X.expandParent && X.parentId) {
            const ee = X.origin ?? z, K = te.width ?? X.measured.width ?? 0, se = te.height ?? X.measured.height ?? 0, pe = {
              id: X.id,
              parentId: X.parentId,
              rect: {
                width: K,
                height: se,
                ...g1({
                  x: te.x ?? X.position.x,
                  y: te.y ?? X.position.y
                }, { width: K, height: se }, X.parentId, M, ee)
              }
            }, A = eg([pe], M, j, z);
            L.push(...A), I.x = te.x ? Math.max(ee[0] * K, te.x) : void 0, I.y = te.y ? Math.max(ee[1] * se, te.y) : void 0;
          }
          if (I.x !== void 0 && I.y !== void 0) {
            const ee = {
              id: T,
              type: "position",
              position: { ...I }
            };
            L.push(ee);
          }
          if (te.width !== void 0 && te.height !== void 0) {
            const K = {
              id: T,
              type: "dimensions",
              resizing: !0,
              setAttributes: v ? v === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: te.width,
                height: te.height
              }
            };
            L.push(K);
          }
          for (const ee of ne) {
            const K = {
              ...ee,
              type: "position"
            };
            L.push(K);
          }
          ie(L);
        },
        onEnd: ({ width: te, height: ne }) => {
          const ie = {
            id: T,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: te,
              height: ne
            }
          };
          E.getState().triggerNodeChanges([ie]);
        }
      })), V.current.update({
        controlPosition: G,
        boundaries: {
          minWidth: h,
          minHeight: p,
          maxWidth: m,
          maxHeight: y
        },
        keepAspectRatio: g,
        resizeDirection: v,
        onResizeStart: _,
        onResize: N,
        onResizeEnd: C,
        shouldResize: w
      }), () => {
        V.current?.destroy();
      };
  }, [
    G,
    h,
    p,
    m,
    y,
    g,
    _,
    N,
    C,
    w
  ]);
  const le = G.split("-");
  return k.jsx("div", { className: ut(["react-flow__resize-control", "nodrag", ...le, a, r]), ref: H, style: {
    ...u,
    scale: R,
    ...d && { [D ? "backgroundColor" : "borderColor"]: d }
  }, children: c });
}
F.memo(X4);
const Qv = (n) => {
  let i;
  const a = /* @__PURE__ */ new Set(), r = (m, y) => {
    const g = typeof m == "function" ? m(i) : m;
    if (!Object.is(g, i)) {
      const v = i;
      i = y ?? (typeof g != "object" || g === null) ? g : Object.assign({}, i, g), a.forEach((x) => x(i, v));
    }
  }, u = () => i, h = { setState: r, getState: u, getInitialState: () => p, subscribe: (m) => (a.add(m), () => a.delete(m)) }, p = i = n(r, u, h);
  return h;
}, G4 = ((n) => n ? Qv(n) : Qv), Z4 = (n) => n;
function lh(n, i = Z4) {
  const a = Wl.useSyncExternalStore(
    n.subscribe,
    Wl.useCallback(() => i(n.getState()), [n, i]),
    Wl.useCallback(() => i(n.getInitialState()), [n, i])
  );
  return Wl.useDebugValue(a), a;
}
const Q4 = /* @__PURE__ */ new Set(["SUCCESS", "FAILURE", "SKIPPED"]);
function ng(n) {
  return n ? n.status !== "IDLE" ? `is-${n.status.toLowerCase()}` : `${n.done ? "is" : "was"}-${n.last.toLowerCase()}` : "";
}
const ar = { statusByUid: {}, statusByPath: {}, statusByDef: {} };
function Xa(n, i) {
  return `${n}:${i}`;
}
function ig(n, i) {
  const a = {}, r = {};
  if (i)
    for (const [u, c] of Object.entries(n)) {
      const d = i.byRuntimeUid.get(Number(u));
      if (!d) continue;
      a[d.path] = c;
      const h = Xa(d.treeId, d.nodeUid);
      (!r[h] || r[h].t < c.t) && (r[h] = c);
    }
  return { statusByPath: a, statusByDef: r };
}
function K4(n, i, a) {
  const r = {};
  for (const [u, c] of n) r[u] = { status: c, last: c, t: i };
  return { statusByUid: r, ...ig(r, a) };
}
function F4(n, i, a, r) {
  let u = { ...n.statusByUid };
  const c = { ...n.statusByPath }, d = { ...n.statusByDef };
  let h = n.runStart, p = !1;
  for (const [m, y, g, v] of i) {
    y === r && v === "RUNNING" && g !== "RUNNING" && (h = m, p = !0, u = Object.fromEntries(Object.entries(u).map(([N, C]) => [N, C.done ? { ...C, done: !1 } : C])));
    const x = u[y], w = { status: v, last: v === "IDLE" ? x?.last ?? g : v, t: m };
    v === "IDLE" && Q4.has(g) && (h === void 0 || (x?.t ?? m) >= h) && (w.done = !0), u[y] = w;
    const _ = a?.byRuntimeUid.get(y);
    _ && (c[_.path] = w, d[Xa(_.treeId, _.nodeUid)] = w);
  }
  return { statusByUid: u, ...p ? ig(u, a) : { statusByPath: c, statusByDef: d }, runStart: h };
}
function og(n, i, a, r, u) {
  return u ? n.statusByPath[i] : n.statusByDef[Xa(a, r)];
}
const mx = F.createContext(null);
function Lo() {
  const n = F.useContext(mx);
  if (!n) throw new Error("Arborist node views need a <ViewerContext.Provider> (TreeViewer provides one)");
  return n;
}
const J4 = () => {
}, P4 = () => null;
function ag(n, i, a) {
  return (n.useMark ?? J4)(i, a);
}
function W4(n, i) {
  return (n.useNodeClass ?? P4)(i);
}
const Kv = /* @__PURE__ */ new WeakMap();
function eO(n) {
  if (!n) return;
  let i = Kv.get(n);
  return i || Kv.set(n, i = { className: tO(n), tag: nO(n) }), i;
}
function tO(n) {
  return [n.kind === "same" ? "" : `diff-${n.kind}`, n.edited ? "diff-edited" : "", n.innerChange ? "diff-inner" : ""].join(" ");
}
function nO(n) {
  let i;
  switch (n.kind) {
    case "added":
      i = "added";
      break;
    case "removed":
      i = "removed";
      break;
    case "moved-away":
      i = "moved away";
      break;
    case "moved":
      i = n.reordered ? "reordered" : "moved";
      break;
    case "changed":
      i = "edited";
      break;
    default:
      i = n.nesting ?? (n.innerChange ? "contents changed" : null);
  }
  return i && i + (n.kind === "moved" && n.edited ? " · edited" : "");
}
function iO(n) {
  return (i) => {
    const a = i.window ? void 0 : n[i.treeId]?.marks.get(i.node.uid)?.kind;
    return a && a !== "same" ? `diff-${a}` : void 0;
  };
}
function oO(n) {
  return (i, a) => D_(i, n[a]?.marks.get(i.uid));
}
function aO(n) {
  const { data: i } = n, a = Lo().useStatuses((h) => i ? og(h, i.childPath, i.childTree, i.childUid, i.liveMain) : void 0), r = i?.bus, [u] = Bu({
    ...n,
    borderRadius: 10,
    ...r === void 0 ? {} : i?.dir === "LR" ? { centerX: r } : { centerY: r }
  }), c = [ng(a), i?.className ?? ""].join(" "), d = i?.dir === "LR";
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Sr, { path: u, className: `bt-edge ${c}` }),
    i?.label && /* @__PURE__ */ k.jsx(y4, { children: /* @__PURE__ */ k.jsx(
      "div",
      {
        className: `bt-edge-label nodrag nopan ${c}`,
        title: i.help,
        style: {
          transform: d ? `translate(-100%, -100%) translate(${n.targetX - 8}px, ${n.targetY - 3}px)` : `translate(-50%, -100%) translate(${n.targetX}px, ${n.targetY - 5}px)`
        },
        children: i.label
      }
    ) })
  ] });
}
const lO = F.memo(aO), yx = {
  Sequence: "→",
  SequenceWithMemory: "→",
  ReactiveSequence: "→",
  AsyncSequence: "→",
  Fallback: "?",
  ReactiveFallback: "?",
  AsyncFallback: "?",
  Parallel: "⇉",
  ParallelAll: "⇉",
  IfThenElse: "⋎",
  WhileDoElse: "⋎",
  Inverter: "¬",
  RetryUntilSuccessful: "↻",
  Repeat: "⟳",
  KeepRunningUntilFailure: "⟳",
  Timeout: "◷",
  Delay: "◴",
  ForceSuccess: "✓",
  ForceFailure: "✗",
  RunOnce: "1",
  Precondition: "⊢",
  Script: "ƒ",
  ScriptCondition: "ƒ",
  SetBlackboard: "≔",
  UnsetBlackboard: "≔",
  Sleep: "◔",
  AlwaysSuccess: "✓",
  AlwaysFailure: "✗",
  SubTree: "▣"
}, Ah = {
  Control: "⋔",
  Decorator: "◇",
  Action: "▶",
  Condition: "◉",
  SubTree: "▣",
  Unknown: "!"
}, vx = {
  Switch: "⋮",
  Loop: "⟳"
};
function rO(n, i, a) {
  if (a) return a;
  for (const [r, u] of Object.entries(vx)) if (n.startsWith(r)) return u;
  return yx[n] ?? Ah[i] ?? "•";
}
function sO(n) {
  return n.startsWith("Reactive") ? "reactive" : n === "SequenceWithMemory" ? "memory" : n.startsWith("Async") ? "async" : null;
}
function uO() {
  const n = /* @__PURE__ */ new Map();
  for (const i of [Ah, yx, vx])
    for (const [a, r] of Object.entries(i)) r !== Ah.Unknown && n.set(r, (n.get(r) ?? /* @__PURE__ */ new Set()).add(a));
  return [...n].map(([i, a]) => {
    const r = [...a];
    return [i, r.length > 3 ? `${r.slice(0, 3).join(", ")}, …` : r.join(", ")];
  });
}
const IO = [
  { group: "Built-in", icons: uO() },
  {
    group: "Motion",
    icons: [
      ["🚗", "Drive"],
      ["🧭", "Navigate"],
      ["📍", "Location"],
      ["🗺️", "Map"],
      ["🏁", "Finish"],
      ["🏠", "Home"],
      ["🔄", "Rotate"],
      ["🛑", "Stop"],
      ["🧗", "Climb"],
      ["🚀", "Launch"]
    ]
  },
  {
    group: "Sensing",
    icons: [
      ["👁️", "Look"],
      ["📷", "Camera"],
      ["🔍", "Search"],
      ["📡", "Sensor"],
      ["🎯", "Target"],
      ["📏", "Measure"],
      ["🌡️", "Temperature"],
      ["🚦", "Signal"]
    ]
  },
  {
    group: "Manipulation",
    icons: [
      ["🦾", "Arm"],
      ["✋", "Hand"],
      ["🤏", "Grip"],
      ["📦", "Object"],
      ["⚽", "Ball"],
      ["🧹", "Sweep"],
      ["🧲", "Magnet"],
      ["🔧", "Tool"],
      ["⚙️", "Mechanism"]
    ]
  },
  {
    group: "Power",
    icons: [
      ["🔋", "Battery"],
      ["🔌", "Charge"],
      ["⚡", "Power"]
    ]
  },
  {
    group: "Logic & data",
    icons: [
      ["⏱️", "Timer"],
      ["⏳", "Wait"],
      ["🧮", "Compute"],
      ["❓", "Query"],
      ["✅", "Check"],
      ["⚠️", "Warning"],
      ["🔒", "Lock"],
      ["🔓", "Unlock"],
      ["💾", "Save"],
      ["📝", "Log"]
    ]
  },
  {
    group: "Communication",
    icons: [
      ["💬", "Say"],
      ["🔔", "Alert"],
      ["📨", "Send"],
      ["📥", "Receive"],
      ["💡", "Light"],
      ["🔊", "Sound"]
    ]
  },
  {
    group: "Other",
    icons: [
      ["⭐", "Star"],
      ["❤️", "Heart"],
      ["🧪", "Test"],
      ["🐞", "Debug"],
      ["🔥", "Fire"],
      ["❄️", "Freeze"]
    ]
  }
];
function bx(n, i, a) {
  return n.useStatuses((r) => og(r, i.path, i.treeId, i.node.uid, a));
}
const Fv = { IfThenElse: "if", WhileDoElse: "while" };
function Jv(n) {
  return n.type === "SubTree" ? n.attrs.ID ?? "SubTree" : n.type;
}
function Pl({ path: n, node: i, ctx: a, className: r, children: u }) {
  const c = Lo(), d = c.useStatuses((x) => og(x, n, a.treeId, i.uid, a.liveMain)), h = c.useSelected(n), p = ag(c, a.treeId, i.uid), m = a.problems[i.uid], y = ["cond-token", "nodrag", r, ng(d), p?.className ?? "", h ? "selected" : "", m ? "has-problem" : ""].join(" "), g = (x) => {
    x.stopPropagation(), c.select(n);
  }, v = (x) => {
    x.preventDefault(), x.stopPropagation(), c.onContextMenu?.(x, n);
  };
  return /* @__PURE__ */ k.jsx("span", { className: y, onClick: g, onContextMenu: v, title: [i.type, ...m ?? []].join(`
`), children: u });
}
function Mh({ part: n, ctx: i, nested: a }) {
  switch (n.kind) {
    case "script":
      return /* @__PURE__ */ k.jsx("span", { className: "cond-script", children: n.text || /* @__PURE__ */ k.jsx("em", { className: "muted", children: "no condition" }) });
    case "leaf":
      return /* @__PURE__ */ k.jsxs(Pl, { path: n.path, node: n.node, ctx: i, className: n.script ? "cond-leaf cond-script" : "cond-leaf", children: [
        n.label,
        n.args && /* @__PURE__ */ k.jsxs("span", { className: "cond-args", children: [
          "(",
          n.args,
          ")"
        ] })
      ] });
    case "not":
      return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx(Pl, { path: n.path, node: n.node, ctx: i, className: "cond-op", children: "¬" }),
        /* @__PURE__ */ k.jsx(Mh, { part: n.child, ctx: i, nested: !0 })
      ] });
    case "group": {
      const r = n.op ? a && n.children.length > 1 ? "(" : "" : `${n.node.type}(`, u = r ? ")" : "";
      return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        r && /* @__PURE__ */ k.jsx(Pl, { path: n.path, node: n.node, ctx: i, className: "cond-op", children: r }),
        n.children.map((c, d) => /* @__PURE__ */ k.jsxs("span", { className: "cond-seq", children: [
          d > 0 && /* @__PURE__ */ k.jsx(Pl, { path: n.path, node: n.node, ctx: i, className: "cond-op", children: n.op ?? "," }),
          /* @__PURE__ */ k.jsx(Mh, { part: c, ctx: i, nested: !0 })
        ] }, d)),
        u && /* @__PURE__ */ k.jsx(Pl, { path: n.path, node: n.node, ctx: i, className: "cond-op", children: u })
      ] });
    }
  }
}
function cO({ condition: n, ctx: i }) {
  return /* @__PURE__ */ k.jsxs("div", { className: "bt-node-cond", title: `${n.keyword} ${Eu(n.part)}`, children: [
    /* @__PURE__ */ k.jsx("span", { className: "cond-keyword", children: n.keyword }),
    /* @__PURE__ */ k.jsx("span", { className: "cond-body", children: /* @__PURE__ */ k.jsx(Mh, { part: n.part, ctx: i, nested: !1 }) })
  ] });
}
function fO({ mark: n }) {
  return n.tag ? /* @__PURE__ */ k.jsx("span", { className: "bt-node-diff", children: n.tag }) : null;
}
const Pv = (n) => n === "" ? '""' : n;
function xx({ data: n, status: i, mark: a }) {
  const r = Lo(), { item: u, category: c, icon: d, problems: h, foldedProblems: p, liveMain: m } = n, { node: y } = u, g = y.attrs.name && y.attrs.name !== Jv(y) ? y.attrs.name : null, v = h.filter((_) => _.severity === "error").length, x = h.length - v, w = sO(y.type);
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsxs("div", { className: "bt-node-header", children: [
      /* @__PURE__ */ k.jsx("span", { className: "bt-node-icon", "aria-hidden": !0, children: rO(y.type, c, d) }),
      /* @__PURE__ */ k.jsx("span", { className: "bt-node-title", children: Jv(y) }),
      w && /* @__PURE__ */ k.jsx("span", { className: "bt-node-flavor", children: w }),
      v > 0 && /* @__PURE__ */ k.jsx("span", { className: "badge badge-error", children: v }),
      x > 0 && v === 0 && /* @__PURE__ */ k.jsx("span", { className: "badge badge-warning", children: x })
    ] }),
    g && /* @__PURE__ */ k.jsx("div", { className: "bt-node-name", children: g }),
    u.hint && /* @__PURE__ */ k.jsx("div", { className: "bt-node-hint", title: zh(y)?.help, children: u.hint }),
    u.condition && /* @__PURE__ */ k.jsx(cO, { condition: u.condition, ctx: { treeId: u.treeId, liveMain: m, problems: p } }),
    !u.condition && r.editable && u.node.type in Fv && /* @__PURE__ */ k.jsxs("div", { className: "bt-node-cond empty", children: [
      /* @__PURE__ */ k.jsx("span", { className: "cond-keyword", children: Fv[u.node.type] }),
      /* @__PURE__ */ k.jsx("span", { className: "muted", children: "drop a condition here" })
    ] }),
    u.lines.length > 0 && /* @__PURE__ */ k.jsxs("div", { className: "bt-node-ports", children: [
      u.lines.map((_) => /* @__PURE__ */ k.jsxs("div", { className: `bt-node-port ${_.change ? `diff-${_.change}` : ""}`, children: [
        /* @__PURE__ */ k.jsx("span", { className: "k", children: _.key }),
        _.old !== void 0 && /* @__PURE__ */ k.jsx("span", { className: "v old", children: Pv(_.old) }),
        /* @__PURE__ */ k.jsx("span", { className: tb(_.value) ? "v bb" : "v", children: Pv(_.value) })
      ] }, _.key)),
      u.hiddenLines > 0 && /* @__PURE__ */ k.jsxs("div", { className: "bt-node-more", children: [
        "+",
        u.hiddenLines,
        " more"
      ] })
    ] }),
    y.type === "SubTree" && /* @__PURE__ */ k.jsx(
      "button",
      {
        className: "bt-node-expand nodrag",
        title: u.expanded ? "Collapse subtree" : "Show subtree inline",
        onClick: (_) => {
          _.stopPropagation(), r.toggleExpanded(u.path);
        },
        children: u.expanded ? "−" : "+"
      }
    ),
    i && (i.status !== "IDLE" || i.done) && /* @__PURE__ */ k.jsx("span", { className: "bt-node-status", children: i.done ? i.last : i.status }),
    a && /* @__PURE__ */ k.jsx(fO, { mark: a })
  ] });
}
function wx(n, i, a, r, u) {
  const c = W4(Lo(), n.item.path);
  return [
    u,
    `cat-${n.category.toLowerCase()}`,
    i ? "selected" : "",
    n.item.readOnly ? "readonly" : "",
    ng(a),
    r?.className ?? "",
    c ?? ""
  ].join(" ");
}
function dO({ data: n, selected: i }) {
  const { item: a, problems: r, dir: u, liveMain: c } = n, d = Lo(), h = bx(d, a, c), p = ag(d, a.treeId, a.node.uid), m = wx(n, i, h, p, "bt-node");
  return /* @__PURE__ */ k.jsxs("div", { className: m, style: { width: a.w }, title: r.map((y) => y.message).join(`
`) || void 0, children: [
    /* @__PURE__ */ k.jsx(Zn, { type: "target", position: u === "TB" ? ye.Top : ye.Left, isConnectable: !1 }),
    /* @__PURE__ */ k.jsx(xx, { data: n, status: h, mark: p }),
    /* @__PURE__ */ k.jsx(Zn, { type: "source", position: u === "TB" ? ye.Bottom : ye.Right, isConnectable: !1 })
  ] });
}
const hO = F.memo(dO);
function gO({ data: n, selected: i }) {
  const { item: a, problems: r, dir: u, liveMain: c } = n, d = Lo(), h = bx(d, a, c), p = ag(d, a.treeId, a.node.uid), m = wx(n, i, h, p, `bt-frame ${u === "LR" ? "lr" : "tb"}`), y = u === "TB" ? { height: a.frame.headerH } : { width: a.frame.headerW };
  return /* @__PURE__ */ k.jsxs("div", { className: m, style: { width: a.w, height: a.h }, children: [
    /* @__PURE__ */ k.jsx(Zn, { type: "target", position: u === "TB" ? ye.Top : ye.Left, isConnectable: !1 }),
    /* @__PURE__ */ k.jsx("div", { className: "bt-frame-header", style: y, title: r.map((g) => g.message).join(`
`) || void 0, children: /* @__PURE__ */ k.jsx(xx, { data: n, status: h, mark: p }) }),
    /* @__PURE__ */ k.jsx(Zn, { type: "source", position: u === "TB" ? ye.Bottom : ye.Right, isConnectable: !1 })
  ] });
}
const pO = F.memo(gO);
function mO({ data: n }) {
  const { item: i, dir: a } = n, r = i.window, u = Lo().windowAction, c = a === "TB" ? { height: i.frame.headerH } : { width: i.frame.headerW };
  return /* @__PURE__ */ k.jsxs("div", { className: `bt-window ${a === "LR" ? "lr" : "tb"}`, style: { width: i.w, height: i.h }, children: [
    /* @__PURE__ */ k.jsx(Zn, { type: "target", position: a === "TB" ? ye.Top : ye.Left, isConnectable: !1 }),
    /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: "bt-window-header",
        style: c,
        title: u?.title?.(r.treeId, r.file) ?? `These steps belong to the tree "${r.treeId}" (${r.file}).`,
        children: [
          /* @__PURE__ */ k.jsx("span", { className: "bt-window-lock", "aria-hidden": !0, children: "🔒" }),
          /* @__PURE__ */ k.jsxs("span", { className: "bt-window-title", children: [
            /* @__PURE__ */ k.jsx("strong", { children: r.treeId }),
            " ",
            /* @__PURE__ */ k.jsxs("span", { className: "muted", children: [
              "· from ",
              r.file.split("/").pop()
            ] })
          ] }),
          u && /* @__PURE__ */ k.jsx(
            "button",
            {
              className: "small nodrag",
              onClick: (d) => {
                d.stopPropagation(), u.run(r.treeId);
              },
              children: u.label
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ k.jsx(Zn, { type: "source", position: a === "TB" ? ye.Bottom : ye.Right, isConnectable: !1 })
  ] });
}
const yO = F.memo(mO), vO = { bt: hO, frame: pO, window: yO }, bO = { bt: lO };
function xO(n) {
  const i = /* @__PURE__ */ new Map();
  for (const a of n) {
    if (!a.nodeUid || !a.treeId) continue;
    const r = Xa(a.treeId, a.nodeUid);
    i.set(r, [...i.get(r) ?? [], a]);
  }
  return i;
}
function wO(n, i) {
  const { models: a, dir: r, liveMain: u, selection: c, problems: d, draggable: h, lifted: p } = i;
  return n.map((m) => {
    const y = {}, g = [...d?.get(Xa(m.treeId, m.node.uid)) ?? []];
    for (const v of m.foldedPaths) {
      const x = v.split("/").pop(), w = d?.get(Xa(m.treeId, x));
      w && (y[x] = w.map((_) => _.message), g.push(...w));
    }
    return {
      id: m.path,
      type: m.window ? "window" : m.frame ? "frame" : "bt",
      position: { x: m.x, y: m.y },
      // Frames sit behind the nodes they surround (outer behind inner), and only their header
      // takes the pointer, so the canvas can still be panned from inside one.
      zIndex: (m.frame ? m.frame.level : 1e3) + (p?.has(m.path) ? 5e3 : 0),
      ...m.frame ? { dragHandle: m.window ? ".bt-window-header" : ".bt-frame-header", style: { pointerEvents: "none" } } : {},
      data: {
        item: m,
        category: O_(m.node, a),
        icon: ju(m.node, a)?.metadata?.icon,
        problems: g,
        foldedProblems: y,
        dir: r,
        liveMain: u
      },
      draggable: h?.(m) ?? !1,
      selected: m.path === c
    };
  });
}
function SO(n, i) {
  const { dir: a, liveMain: r, explain: u, unbussed: c, edgeClass: d } = i, h = new Map(n.map((p) => [p.path, p]));
  return n.filter((p) => p.parentPath && !h.get(p.parentPath)?.frame).map((p) => {
    const m = u ? b_(h.get(p.parentPath).node, p.childIndex) : null;
    return {
      id: `${p.parentPath}->${p.path}`,
      source: p.parentPath,
      target: p.path,
      type: "bt",
      data: {
        childPath: p.path,
        childTree: p.treeId,
        childUid: p.node.uid,
        liveMain: r,
        label: m?.label ?? p.edgeLabel,
        help: m?.help,
        dir: a,
        bus: c?.has(p.path) ? void 0 : p.edgeBus,
        className: d?.(p)
      },
      selectable: !1
    };
  });
}
function _O(n, i) {
  return n.frame ? i === "TB" ? { x: n.x, y: n.y, w: n.w, h: n.frame.headerH } : { x: n.x, y: n.y, w: n.frame.headerW, h: n.h } : n;
}
function EO(n) {
  const i = new Map(n.map((a) => [a.path, a]));
  for (const a of n) for (const r of a.foldedPaths) i.set(r, a);
  return i;
}
const NO = F.forwardRef(function(i, a) {
  const { theme: r = "auto", className: u, style: c } = i;
  return /* @__PURE__ */ k.jsx(
    "div",
    {
      className: `arbor-viewer ${u ?? ""}`,
      "data-theme": r === "auto" ? void 0 : r,
      style: { position: "relative", width: "100%", height: "100%", ...c },
      children: /* @__PURE__ */ k.jsx(dx, { children: /* @__PURE__ */ k.jsx(TO, { ...i, handle: a }) })
    }
  );
});
function TO(n) {
  const { compare: i, dir: a = "TB", decoratorFrames: r = !0, explainEdges: u = !1, liveTreeId: c, onSelect: d, onTreeChange: h } = n, p = Fu(), [m] = F.useState(() => G4(() => ({ statuses: ar, selection: null, merged: null }))), [y, g] = F.useState(null), v = n.selection !== void 0 ? n.selection : y, x = i?.merged ?? null;
  F.useLayoutEffect(() => m.setState({ statuses: n.statuses ?? ar, selection: v, merged: x }), [m, n.statuses, v, x]);
  const w = F.useMemo(
    () => Object.fromEntries(x ? Object.entries(x).map(([K, se]) => [K, se.def]) : (n.trees ?? []).map((K) => [K.id, K])),
    [x, n.trees]
  ), _ = F.useMemo(() => i?.models ?? n.models ?? _u([], n.trees ?? []), [i, n.models, n.trees]), [N, C] = F.useState(null);
  F.useEffect(() => C(null), [n.treeId, i]);
  const U = i ? X_(i.trees) : n.trees?.[0]?.id ?? null, T = [N, n.treeId, U].find((K) => K && w[K]) ?? null, E = T ? w[T] : void 0, H = !i && !!T && T === c, [D, R] = F.useState({}), V = `${i ? "diff:" : ""}${T}`, G = F.useCallback(
    (K) => {
      g(K), d?.(K);
    },
    [d]
  ), le = F.useCallback(
    (K) => {
      w[K] && (C(K), G(null), h?.(K));
    },
    [w, G, h]
  ), te = F.useMemo(
    () => ({
      useStatuses: (K) => lh(m, (se) => K(se.statuses)),
      useSelected: (K) => lh(m, (se) => se.selection === K),
      useMark: (K, se) => eO(lh(m, (pe) => pe.merged?.[K]?.marks.get(se))),
      select: G,
      toggleExpanded: (K) => R((se) => {
        const pe = `${V}|${K}`, A = { ...se };
        return A[pe] ? delete A[pe] : A[pe] = !0, A;
      }),
      windowAction: { label: "Open", run: le }
    }),
    [m, G, V, le]
  ), ne = F.useMemo(
    () => E ? M_(E, w, {
      isExpanded: (K) => !!D[`${V}|${K}`],
      dir: a,
      frameDecorator: r ? (K) => ju(K, _)?.category === "Decorator" : void 0,
      explain: u,
      ...x ? { linesFor: oO(x) } : {}
    }) : [],
    [E, w, D, V, a, r, _, u, x]
  ), ie = F.useMemo(() => new Map(ne.map((K) => [K.path, K])), [ne]), M = F.useMemo(() => EO(ne), [ne]), j = F.useMemo(() => n.diagnostics ? xO(n.diagnostics) : void 0, [n.diagnostics]), z = F.useMemo(() => wO(ne, { models: _, dir: a, liveMain: H, selection: v, problems: j }), [ne, _, a, H, v, j]), L = F.useMemo(
    () => SO(ne, { dir: a, liveMain: H, explain: u, ...x ? { edgeClass: iO(x) } : {} }),
    [ne, a, H, u, x]
  ), I = F.useCallback(() => p.fitView({ padding: 0.15, maxZoom: 1.1, duration: 200 }), [p]), X = F.useCallback(
    (K) => {
      const se = M.get(K);
      if (!se) return;
      const pe = _O(se, a);
      p.setCenter(pe.x + pe.w / 2, pe.y + pe.h / 2, { zoom: Math.max(p.getZoom(), 0.9), duration: 250 });
    },
    [M, a, p]
  );
  F.useImperativeHandle(n.handle, () => ({ fit: I, reveal: X }), [I, X]);
  const ee = F.useRef("");
  return F.useEffect(() => {
    const K = `${V}|${a}`;
    K === ee.current || !ne.length || (ee.current = K, requestAnimationFrame(I));
  }, [V, a, ne.length, I]), E ? /* @__PURE__ */ k.jsxs(mx.Provider, { value: te, children: [
    /* @__PURE__ */ k.jsxs(
      p4,
      {
        className: a === "LR" ? "lr" : "",
        nodes: z,
        edges: L,
        nodeTypes: vO,
        edgeTypes: bO,
        nodesDraggable: !1,
        nodesConnectable: !1,
        elementsSelectable: !0,
        minZoom: 0.1,
        maxZoom: 2,
        proOptions: { hideAttribution: !0 },
        deleteKeyCode: null,
        selectionKeyCode: null,
        multiSelectionKeyCode: null,
        onNodeClick: (K, se) => G(ie.get(se.id)?.window ? ie.get(se.id).parentPath : se.id),
        onNodeDoubleClick: (K, se) => {
          const pe = ie.get(se.id);
          pe?.node.type === "SubTree" && pe.node.attrs.ID && le(pe.node.attrs.ID);
        },
        onPaneClick: () => G(null),
        children: [
          n.background !== !1 && /* @__PURE__ */ k.jsx(S4, { gap: 24, size: 1 }),
          n.controls !== !1 && /* @__PURE__ */ k.jsx(M4, { showInteractive: !1 })
        ]
      }
    ),
    !E.root && /* @__PURE__ */ k.jsxs("div", { className: "arbor-empty", children: [
      E.id,
      " is empty"
    ] })
  ] }) : /* @__PURE__ */ k.jsx("div", { className: "arbor-empty", children: "No tree to show" });
}
class CO {
  trees;
  /** The robot's main tree ID, once setRuntimeTree() was called. */
  treeId;
  runtime;
  /** How runtime UIDs pair up with tree nodes; mapping.mismatches says where they don't. */
  mapping;
  statuses = ar;
  constructor(i = []) {
    this.trees = new Map([...i].map((a) => [a.id, a]));
  }
  /** New versions of the trees (an edit, a reload): runtime nodes are paired up again. */
  setTrees(i) {
    this.trees = new Map([...i].map((a) => [a.id, a])), !(!this.treeId || !this.runtime) && (this.mapping = Sy(this.treeId, this.runtime, this.trees), this.statuses = { ...this.statuses, ...ig(this.statuses.statusByUid, this.mapping) });
  }
  /** The tree the robot runs (btlive "tree"); clears statuses. */
  setRuntimeTree(i, a) {
    this.treeId = i, this.runtime = a, this.mapping = Sy(i, a, this.trees), this.statuses = ar;
  }
  /** Every node's status at time `t` (btlive "snapshot"). */
  applySnapshot(i, a) {
    this.statuses = K4(i, a, this.mapping);
  }
  /** Status changes in time order (btlive "status"). */
  applyChanges(i) {
    this.statuses = F4(this.statuses, i, this.mapping, this.runtime?.[0]?.uid);
  }
  clear() {
    this.statuses = ar;
  }
}
const AO = '.react-flow{direction:ltr;--xy-edge-stroke-default: #b1b1b7;--xy-edge-stroke-width-default: 1;--xy-edge-stroke-selected-default: #555;--xy-connectionline-stroke-default: #b1b1b7;--xy-connectionline-stroke-width-default: 1;--xy-attribution-background-color-default: rgba(255, 255, 255, .5);--xy-minimap-background-color-default: #fff;--xy-minimap-mask-background-color-default: rgba(240, 240, 240, .6);--xy-minimap-mask-stroke-color-default: transparent;--xy-minimap-mask-stroke-width-default: 1;--xy-minimap-node-background-color-default: #e2e2e2;--xy-minimap-node-stroke-color-default: transparent;--xy-minimap-node-stroke-width-default: 2;--xy-background-color-default: transparent;--xy-background-pattern-dots-color-default: #91919a;--xy-background-pattern-lines-color-default: #eee;--xy-background-pattern-cross-color-default: #e2e2e2;background-color:var(--xy-background-color, var(--xy-background-color-default));--xy-node-color-default: inherit;--xy-node-border-default: 1px solid #1a192b;--xy-node-background-color-default: #fff;--xy-node-group-background-color-default: rgba(240, 240, 240, .25);--xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, .08);--xy-node-boxshadow-selected-default: 0 0 0 .5px #1a192b;--xy-node-border-radius-default: 3px;--xy-handle-background-color-default: #1a192b;--xy-handle-border-color-default: #fff;--xy-selection-background-color-default: rgba(0, 89, 220, .08);--xy-selection-border-default: 1px dotted rgba(0, 89, 220, .8);--xy-controls-button-background-color-default: #fefefe;--xy-controls-button-background-color-hover-default: #f4f4f4;--xy-controls-button-color-default: inherit;--xy-controls-button-color-hover-default: inherit;--xy-controls-button-border-color-default: #eee;--xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, .08);--xy-edge-label-background-color-default: #ffffff;--xy-edge-label-color-default: inherit;--xy-resize-background-color-default: #3367d9}.react-flow.dark{--xy-edge-stroke-default: #3e3e3e;--xy-edge-stroke-width-default: 1;--xy-edge-stroke-selected-default: #727272;--xy-connectionline-stroke-default: #b1b1b7;--xy-connectionline-stroke-width-default: 1;--xy-attribution-background-color-default: rgba(150, 150, 150, .25);--xy-minimap-background-color-default: #141414;--xy-minimap-mask-background-color-default: rgba(60, 60, 60, .6);--xy-minimap-mask-stroke-color-default: transparent;--xy-minimap-mask-stroke-width-default: 1;--xy-minimap-node-background-color-default: #2b2b2b;--xy-minimap-node-stroke-color-default: transparent;--xy-minimap-node-stroke-width-default: 2;--xy-background-color-default: #141414;--xy-background-pattern-dots-color-default: #555;--xy-background-pattern-lines-color-default: #333;--xy-background-pattern-cross-color-default: #333;--xy-node-color-default: #f8f8f8;--xy-node-border-default: 1px solid #3c3c3c;--xy-node-background-color-default: #1e1e1e;--xy-node-group-background-color-default: rgba(240, 240, 240, .25);--xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, .08);--xy-node-boxshadow-selected-default: 0 0 0 .5px #999;--xy-handle-background-color-default: #bebebe;--xy-handle-border-color-default: #1e1e1e;--xy-selection-background-color-default: rgba(200, 200, 220, .08);--xy-selection-border-default: 1px dotted rgba(200, 200, 220, .8);--xy-controls-button-background-color-default: #2b2b2b;--xy-controls-button-background-color-hover-default: #3e3e3e;--xy-controls-button-color-default: #f8f8f8;--xy-controls-button-color-hover-default: #fff;--xy-controls-button-border-color-default: #5b5b5b;--xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, .08);--xy-edge-label-background-color-default: #141414;--xy-edge-label-color-default: #f8f8f8}.react-flow__background{background-color:var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));pointer-events:none;z-index:-1}.react-flow__container{position:absolute;width:100%;height:100%;top:0;left:0}.react-flow__pane{z-index:1;touch-action:none}.react-flow__pane.draggable{cursor:grab}.react-flow__pane.dragging{cursor:grabbing}.react-flow__pane.selection{cursor:pointer}.react-flow__viewport{transform-origin:0 0;z-index:2;pointer-events:none}.react-flow__renderer{z-index:4}.react-flow__selection{z-index:6}.react-flow__nodesselection-rect:focus,.react-flow__nodesselection-rect:focus-visible{outline:none}.react-flow__edge-path{stroke:var(--xy-edge-stroke, var(--xy-edge-stroke-default));stroke-width:var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));fill:none}.react-flow__connection-path{stroke:var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));stroke-width:var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));fill:none}.react-flow .react-flow__edges{position:absolute}.react-flow .react-flow__edges svg{overflow:visible;position:absolute;pointer-events:none}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.selectable{cursor:pointer}.react-flow__edge.animated path{stroke-dasharray:5;animation:dashdraw .5s linear infinite}.react-flow__edge.animated path.react-flow__edge-interaction{stroke-dasharray:none;animation:none}.react-flow__edge.inactive{pointer-events:none}.react-flow__edge.selected,.react-flow__edge:focus,.react-flow__edge:focus-visible{outline:none}.react-flow__edge.selected .react-flow__edge-path,.react-flow__edge.selectable:focus .react-flow__edge-path,.react-flow__edge.selectable:focus-visible .react-flow__edge-path{stroke:var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default))}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge .react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__arrowhead polyline{stroke:var(--xy-edge-stroke, var(--xy-edge-stroke-default))}.react-flow__arrowhead polyline.arrowclosed{fill:var(--xy-edge-stroke, var(--xy-edge-stroke-default))}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;animation:dashdraw .5s linear infinite}svg.react-flow__connectionline{z-index:1001;overflow:visible;position:absolute}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:all;transform-origin:0 0;box-sizing:border-box;cursor:default}.react-flow__node.selectable{cursor:pointer}.react-flow__node.draggable{cursor:grab;pointer-events:all}.react-flow__node.draggable.dragging{cursor:grabbing}.react-flow__nodesselection{z-index:3;transform-origin:left top;pointer-events:none}.react-flow__nodesselection-rect{position:absolute;pointer-events:all;cursor:grab}.react-flow__handle{position:absolute;pointer-events:none;min-width:5px;min-height:5px;width:6px;height:6px;background-color:var(--xy-handle-background-color, var(--xy-handle-background-color-default));border:1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));border-radius:100%}.react-flow__handle.connectingfrom{pointer-events:all}.react-flow__handle.connectionindicator{pointer-events:all;cursor:crosshair}.react-flow__handle-bottom{top:auto;left:50%;bottom:0;transform:translate(-50%,50%)}.react-flow__handle-top{top:0;left:50%;transform:translate(-50%,-50%)}.react-flow__handle-left{top:50%;left:0;transform:translate(-50%,-50%)}.react-flow__handle-right{top:50%;right:0;transform:translate(50%,-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__pane.selection .react-flow__panel{pointer-events:none}.react-flow__panel{position:absolute;z-index:5;margin:15px}.react-flow__panel.top{top:0}.react-flow__panel.bottom{bottom:0}.react-flow__panel.top.center,.react-flow__panel.bottom.center{left:50%;transform:translate(-15px) translate(-50%)}.react-flow__panel.left{left:0}.react-flow__panel.right{right:0}.react-flow__panel.left.center,.react-flow__panel.right.center{top:50%;transform:translateY(-15px) translateY(-50%)}.react-flow__attribution{font-size:10px;background:var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));padding:2px 3px;margin:0}.react-flow__attribution a{text-decoration:none;color:#999}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edgelabel-renderer{position:absolute;width:100%;height:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;left:0;top:0}.react-flow__viewport-portal{position:absolute;width:100%;height:100%;left:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__minimap{background:var( --xy-minimap-background-color-props, var(--xy-minimap-background-color, var(--xy-minimap-background-color-default)) )}.react-flow__minimap-svg{display:block}.react-flow__minimap-mask{fill:var( --xy-minimap-mask-background-color-props, var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default)) );stroke:var( --xy-minimap-mask-stroke-color-props, var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default)) );stroke-width:var( --xy-minimap-mask-stroke-width-props, var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default)) )}.react-flow__minimap-node{fill:var( --xy-minimap-node-background-color-props, var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default)) );stroke:var( --xy-minimap-node-stroke-color-props, var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default)) );stroke-width:var( --xy-minimap-node-stroke-width-props, var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default)) )}.react-flow__background-pattern.dots{fill:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default)) )}.react-flow__background-pattern.lines{stroke:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default)) )}.react-flow__background-pattern.cross{stroke:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default)) )}.react-flow__controls{display:flex;flex-direction:column;box-shadow:var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default))}.react-flow__controls.horizontal{flex-direction:row}.react-flow__controls-button{display:flex;justify-content:center;align-items:center;height:26px;width:26px;padding:4px;border:none;background:var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));border-bottom:1px solid var( --xy-controls-button-border-color-props, var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default)) );color:var( --xy-controls-button-color-props, var(--xy-controls-button-color, var(--xy-controls-button-color-default)) );cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__controls-button svg{width:100%;max-width:12px;max-height:12px;fill:currentColor}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-text{font-size:10px}.react-flow__node.selectable:focus,.react-flow__node.selectable:focus-visible{outline:none}.react-flow__node-input,.react-flow__node-default,.react-flow__node-output,.react-flow__node-group{padding:10px;border-radius:var(--xy-node-border-radius, var(--xy-node-border-radius-default));width:150px;font-size:12px;color:var(--xy-node-color, var(--xy-node-color-default));text-align:center;border:var(--xy-node-border, var(--xy-node-border-default));background-color:var(--xy-node-background-color, var(--xy-node-background-color-default))}.react-flow__node-input.selectable:hover,.react-flow__node-default.selectable:hover,.react-flow__node-output.selectable:hover,.react-flow__node-group.selectable:hover{box-shadow:var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default))}.react-flow__node-input.selectable.selected,.react-flow__node-input.selectable:focus,.react-flow__node-input.selectable:focus-visible,.react-flow__node-default.selectable.selected,.react-flow__node-default.selectable:focus,.react-flow__node-default.selectable:focus-visible,.react-flow__node-output.selectable.selected,.react-flow__node-output.selectable:focus,.react-flow__node-output.selectable:focus-visible,.react-flow__node-group.selectable.selected,.react-flow__node-group.selectable:focus,.react-flow__node-group.selectable:focus-visible{box-shadow:var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default))}.react-flow__node-group{background-color:var(--xy-node-group-background-color, var(--xy-node-group-background-color-default))}.react-flow__nodesselection-rect,.react-flow__selection{background:var(--xy-selection-background-color, var(--xy-selection-background-color-default));border:var(--xy-selection-border, var(--xy-selection-border-default))}.react-flow__nodesselection-rect:focus,.react-flow__nodesselection-rect:focus-visible,.react-flow__selection:focus,.react-flow__selection:focus-visible{outline:none}.react-flow__controls-button:hover{background:var( --xy-controls-button-background-color-hover-props, var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default)) );color:var( --xy-controls-button-color-hover-props, var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default)) )}.react-flow__controls-button:disabled{pointer-events:none}.react-flow__controls-button:disabled svg{fill-opacity:.4}.react-flow__controls-button:last-child{border-bottom:none}.react-flow__controls.horizontal .react-flow__controls-button{border-bottom:none;border-right:1px solid var( --xy-controls-button-border-color-props, var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default)) )}.react-flow__controls.horizontal .react-flow__controls-button:last-child{border-right:none}.react-flow__resize-control{position:absolute}.react-flow__resize-control.left,.react-flow__resize-control.right{cursor:ew-resize}.react-flow__resize-control.top,.react-flow__resize-control.bottom{cursor:ns-resize}.react-flow__resize-control.top.left,.react-flow__resize-control.bottom.right{cursor:nwse-resize}.react-flow__resize-control.bottom.left,.react-flow__resize-control.top.right{cursor:nesw-resize}.react-flow__resize-control.handle{width:5px;height:5px;border:1px solid #fff;border-radius:1px;background-color:var(--xy-resize-background-color, var(--xy-resize-background-color-default));translate:-50% -50%}.react-flow__resize-control.handle.left{left:0;top:50%}.react-flow__resize-control.handle.right{left:100%;top:50%}.react-flow__resize-control.handle.top{left:50%;top:0}.react-flow__resize-control.handle.bottom{left:50%;top:100%}.react-flow__resize-control.handle.top.left,.react-flow__resize-control.handle.bottom.left{left:0}.react-flow__resize-control.handle.top.right,.react-flow__resize-control.handle.bottom.right{left:100%}.react-flow__resize-control.line{border-color:var(--xy-resize-background-color, var(--xy-resize-background-color-default));border-width:0;border-style:solid}.react-flow__resize-control.line.left,.react-flow__resize-control.line.right{width:1px;transform:translate(-50%);top:0;height:100%}.react-flow__resize-control.line.left{left:0;border-left-width:1px}.react-flow__resize-control.line.right{left:100%;border-right-width:1px}.react-flow__resize-control.line.top,.react-flow__resize-control.line.bottom{height:1px;transform:translateY(-50%);left:0;width:100%}.react-flow__resize-control.line.top{top:0;border-top-width:1px}.react-flow__resize-control.line.bottom{border-bottom-width:1px;top:100%}.react-flow__edge-textbg{fill:var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default))}.react-flow__edge-text{fill:var(--xy-edge-label-color, var(--xy-edge-label-color-default))}.arbor-viewer{--canvas: #fafbfc;--grid: #e3e6eb;--node-bg: #ffffff;--panel: #ffffff;--panel-2: #f1f3f6;--hover: #eef1f6;--border: #dde1e7;--text: #1c2330;--muted: #6b7484;--accent: #2563eb;--shadow: 0 1px 2px rgb(0 0 0 / .06), 0 2px 8px rgb(0 0 0 / .05);--cat-control: #2563eb;--cat-decorator: #7c3aed;--cat-action: #0f766e;--cat-condition: #c026d3;--cat-subtree: #475569;--cat-unknown: #b91c1c;--st-running: #f59e0b;--st-success: #16a34a;--st-failure: #dc2626;--st-skipped: #94a3b8;--error: #dc2626;--warning: #d97706;--bb: #7c3aed;--diff-add: #15803d;--diff-del: #dc2626;--diff-mod: #d97706;--diff-move: #0284c7;color-scheme:light;background:var(--canvas);color:var(--text);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:13px}.arbor-viewer[data-theme=dark]{--canvas: #14181e;--grid: #232833;--node-bg: #1f242d;--panel: #1a1e26;--panel-2: #20252e;--hover: #262c37;--border: #2d333e;--text: #e3e7ee;--muted: #8b93a3;--accent: #3b82f6;--shadow: 0 1px 2px rgb(0 0 0 / .4), 0 2px 10px rgb(0 0 0 / .3);--cat-control: #60a5fa;--cat-decorator: #a78bfa;--cat-action: #2dd4bf;--cat-condition: #e879f9;--cat-subtree: #94a3b8;--cat-unknown: #f87171;--st-success: #22c55e;--st-failure: #ef4444;--bb: #c4b5fd;--diff-add: #4ade80;--diff-del: #f87171;--diff-mod: #fbbf24;--diff-move: #38bdf8;color-scheme:dark}@media(prefers-color-scheme:dark){.arbor-viewer:not([data-theme=light]){--canvas: #14181e;--grid: #232833;--node-bg: #1f242d;--panel: #1a1e26;--panel-2: #20252e;--hover: #262c37;--border: #2d333e;--text: #e3e7ee;--muted: #8b93a3;--accent: #3b82f6;--shadow: 0 1px 2px rgb(0 0 0 / .4), 0 2px 10px rgb(0 0 0 / .3);--cat-control: #60a5fa;--cat-decorator: #a78bfa;--cat-action: #2dd4bf;--cat-condition: #e879f9;--cat-subtree: #94a3b8;--cat-unknown: #f87171;--st-success: #22c55e;--st-failure: #ef4444;--bb: #c4b5fd;--diff-add: #4ade80;--diff-del: #f87171;--diff-mod: #fbbf24;--diff-move: #38bdf8;color-scheme:dark}}.arbor-viewer .muted{color:var(--muted)}.arbor-viewer .bt-node-port .v.bb{color:var(--bb)}.arbor-empty{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--muted);pointer-events:none}.bt-window-header button{font:inherit;font-size:12px;color:inherit;background:var(--panel);border:1px solid var(--border);border-radius:6px;padding:2px 8px;cursor:pointer;white-space:nowrap}.bt-window-header button:hover{background:var(--hover)}.badge{display:inline-block;font-size:10px;font-weight:600;line-height:1;padding:3px 5px;border-radius:8px;margin-left:4px;color:#fff}.badge-error{background:var(--error)}.badge-warning{background:var(--warning)}.cat-control{--c: var(--cat-control)}.cat-decorator{--c: var(--cat-decorator)}.cat-action{--c: var(--cat-action)}.cat-condition{--c: var(--cat-condition)}.cat-subtree{--c: var(--cat-subtree)}.cat-unknown{--c: var(--cat-unknown)}.arbor-viewer .react-flow{--xy-background-pattern-color: var(--grid);--xy-edge-stroke: var(--muted);--xy-controls-button-background-color: var(--panel);--xy-controls-button-color: var(--text);--xy-controls-button-border-color: var(--border);--xy-controls-button-background-color-hover: var(--hover)}.bt-node{position:relative;background:var(--node-bg);border:1.5px solid var(--border);border-left:4px solid var(--c);border-radius:8px;box-shadow:var(--shadow);font-size:12px;transition:border-color .15s,box-shadow .15s}.bt-node.selected{border-color:var(--accent);border-left-color:var(--c);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 30%,transparent)}.bt-node.readonly{opacity:.78;border-style:dashed;border-left-style:solid}.bt-node-header{display:flex;align-items:center;gap:6px;padding:8px 10px 6px;font-weight:650;font-size:13px}.bt-node-icon{color:var(--c);font-weight:800;width:16px;text-align:center;flex:none}.bt-node-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bt-node-flavor{font-size:10px;font-weight:500;color:var(--muted);border:1px solid var(--border);border-radius:6px;padding:0 4px}.bt-node-header .badge{margin-left:auto}.bt-node-name{padding:0 10px 4px 32px;color:var(--muted);font-style:italic;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:-4px}.bt-node-cond{display:flex;align-items:baseline;gap:6px;margin:0 8px 6px;padding:4px 6px;border-radius:6px;background:color-mix(in srgb,var(--cat-condition) 9%,transparent);border:1px solid color-mix(in srgb,var(--cat-condition) 25%,transparent);font-size:12px;line-height:19px}.bt-node-cond.empty{border-style:dashed;background:none}.cond-keyword{font-weight:700;font-size:11px;color:var(--cat-condition);text-transform:uppercase;letter-spacing:.03em;flex:none}.cond-body{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 3px;min-width:0}.cond-seq{display:contents}.cond-token{cursor:pointer;border-radius:4px;padding:0 3px;border:1px solid transparent;overflow-wrap:anywhere}.cond-token:hover{background:var(--hover)}.cond-token.selected{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,transparent)}.cond-leaf{font-weight:600}.cond-op{color:var(--muted);font-weight:700}.cond-args,.cond-script{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;font-weight:400;color:var(--muted)}.cond-script{color:var(--text);overflow-wrap:anywhere}.cond-token.has-problem{text-decoration:underline wavy var(--error)}.cond-token.is-running{background:color-mix(in srgb,var(--st-running) 25%,transparent)}.cond-token.is-success{background:color-mix(in srgb,var(--st-success) 30%,transparent)}.cond-token.is-failure{background:color-mix(in srgb,var(--st-failure) 30%,transparent)}.cond-token.was-success{background:color-mix(in srgb,var(--st-success) 12%,transparent)}.cond-token.was-failure{background:color-mix(in srgb,var(--st-failure) 12%,transparent)}.bt-node-ports{border-top:1px solid var(--border);padding:4px 10px 5px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.bt-node-port{display:flex;gap:6px;line-height:17px;white-space:nowrap}.bt-node-port .k{color:var(--muted)}.bt-node-port .k:after{content:":"}.bt-node-port .v{overflow:hidden;text-overflow:ellipsis}.bt-node-more{color:var(--muted);font-size:10px}.bt-node-expand{position:absolute;right:-10px;bottom:-10px;width:20px;height:20px;padding:0;border-radius:50%;font-weight:700;line-height:1;z-index:2}.bt-node-status{position:absolute;top:-9px;right:8px;font-size:9px;font-weight:700;letter-spacing:.04em;padding:1px 5px;border-radius:6px;color:#fff;background:var(--s)}.bt-node .react-flow__handle{opacity:0;pointer-events:none}.bt-edge-label{position:absolute;pointer-events:all;cursor:help;white-space:nowrap;font-size:11px;font-weight:600;line-height:1;padding:3px 7px;border-radius:9px;color:var(--text);background:var(--panel);border:1px solid var(--border);box-shadow:var(--shadow)}.bt-edge-label.is-running{border-color:var(--st-running)}.bt-edge-label.is-success{border-color:var(--st-success)}.bt-edge-label.is-failure{border-color:var(--st-failure)}.bt-node-hint{padding:0 10px 4px 32px;margin-top:-2px;font-size:12px;color:var(--c);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:help}.bt-window{position:relative;display:flex;flex-direction:column;border:2px solid color-mix(in srgb,var(--cat-subtree) 55%,var(--border));border-radius:12px;background:repeating-linear-gradient(-45deg,color-mix(in srgb,var(--cat-subtree) 7%,transparent) 0 8px,transparent 8px 16px),color-mix(in srgb,var(--cat-subtree) 4%,transparent)}.bt-window.lr{flex-direction:row}.bt-window-header{pointer-events:auto;flex:none;display:flex;align-items:center;gap:8px;padding:0 8px 0 10px;border-radius:10px 10px 0 0;background:color-mix(in srgb,var(--cat-subtree) 16%,var(--node-bg));border-bottom:1px solid color-mix(in srgb,var(--cat-subtree) 35%,var(--border));font-size:12px;cursor:default}.bt-window.lr .bt-window-header{flex-direction:column;align-items:flex-start;justify-content:center;padding:8px;border-radius:10px 0 0 10px;border-bottom:none;border-right:1px solid color-mix(in srgb,var(--cat-subtree) 35%,var(--border))}.bt-window-title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bt-window.lr .bt-window-title{flex:none;max-width:100%}.bt-window .react-flow__handle{opacity:0;pointer-events:none}.bt-node.readonly:active,.bt-frame.readonly .bt-frame-header:active,.bt-window-header:active{cursor:not-allowed}.bt-frame{position:relative;display:flex;flex-direction:column;border:1.5px dashed color-mix(in srgb,var(--c) 55%,var(--border));border-radius:12px;background:color-mix(in srgb,var(--c) 5%,transparent);transition:border-color .15s,box-shadow .15s}.bt-frame.lr{flex-direction:row}.bt-frame-header{position:relative;pointer-events:auto;flex:none;border-radius:10px 10px 0 0;background:color-mix(in srgb,var(--c) 10%,var(--node-bg));border-bottom:1px solid color-mix(in srgb,var(--c) 30%,var(--border));cursor:grab}.bt-frame.lr .bt-frame-header{border-radius:10px 0 0 10px;border-bottom:none;border-right:1px solid color-mix(in srgb,var(--c) 30%,var(--border))}.bt-frame.selected{border-style:solid;border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 25%,transparent)}.bt-frame.readonly{opacity:.85}.bt-frame .react-flow__handle{opacity:0;pointer-events:none}.bt-frame.is-running{--s: var(--st-running);border-style:solid;border-color:var(--s);box-shadow:0 0 0 3px color-mix(in srgb,var(--s) 30%,transparent)}.bt-frame.is-success{--s: var(--st-success);border-style:solid;border-color:var(--s)}.bt-frame.is-failure{--s: var(--st-failure);border-style:solid;border-color:var(--s)}.bt-frame.is-skipped{--s: var(--st-skipped)}.bt-frame.was-success{border-color:color-mix(in srgb,var(--st-success) 50%,var(--border))}.bt-frame.was-failure{border-color:color-mix(in srgb,var(--st-failure) 50%,var(--border))}.bt-node.is-running{--s: var(--st-running);border-color:var(--s);border-left-color:var(--c);box-shadow:0 0 0 3px color-mix(in srgb,var(--s) 35%,transparent),var(--shadow)}.bt-node.is-success{--s: var(--st-success);border-color:var(--s);border-left-color:var(--c);box-shadow:0 0 0 3px color-mix(in srgb,var(--s) 30%,transparent)}.bt-node.is-failure{--s: var(--st-failure);border-color:var(--s);border-left-color:var(--c);box-shadow:0 0 0 3px color-mix(in srgb,var(--s) 30%,transparent)}.bt-node.is-skipped{--s: var(--st-skipped);border-color:var(--s);border-left-color:var(--c)}.bt-node.was-success{border-color:color-mix(in srgb,var(--st-success) 45%,var(--border));border-left-color:var(--c)}.bt-node.was-failure{border-color:color-mix(in srgb,var(--st-failure) 45%,var(--border));border-left-color:var(--c)}.bt-edge{stroke:var(--muted)!important;stroke-width:1.5}.bt-edge.is-running{stroke:var(--st-running)!important;stroke-width:2.5}.bt-edge.is-success{stroke:var(--st-success)!important;stroke-width:2}.bt-edge.is-failure{stroke:var(--st-failure)!important;stroke-width:2}.bt-node.diff-added,.bt-frame.diff-added{--d: var(--diff-add)}.bt-node.diff-removed,.bt-frame.diff-removed{--d: var(--diff-del)}.bt-node.diff-changed,.bt-frame.diff-changed{--d: var(--diff-mod)}.bt-node.diff-moved,.bt-node.diff-moved-away,.bt-frame.diff-moved{--d: var(--diff-move)}.bt-node.diff-inner{--d: var(--diff-mod)}.bt-node:is(.diff-added,.diff-removed,.diff-changed,.diff-moved,.diff-moved-away,.diff-inner){border-color:var(--d);border-width:2px;border-left-width:4px;border-left-color:var(--c);background:color-mix(in srgb,var(--d) 7%,var(--node-bg))}.bt-node.diff-removed{opacity:.7;border-style:dashed;border-left-style:solid}.bt-node.diff-removed .bt-node-title,.bt-node.diff-removed .bt-node-name{text-decoration:line-through;text-decoration-color:color-mix(in srgb,var(--diff-del) 70%,transparent)}.bt-node.diff-moved-away{opacity:.5;border-style:dotted;border-left-style:dotted;border-left-color:var(--d);background:transparent;box-shadow:none}.bt-frame:is(.diff-added,.diff-removed,.diff-changed,.diff-moved){border-color:var(--d);border-width:2px}.bt-frame:is(.diff-added,.diff-removed,.diff-changed,.diff-moved)>.bt-frame-header{background:color-mix(in srgb,var(--d) 12%,var(--node-bg))}.bt-frame.diff-removed{opacity:.75}.bt-node-diff{position:absolute;top:-9px;left:10px;font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:1px 5px;border-radius:6px;color:#fff;background:var(--d, var(--muted));white-space:nowrap;pointer-events:none}.bt-frame-header .bt-node-diff{top:4px;left:auto;right:8px}.bt-node:not(.diff-added,.diff-removed,.diff-changed,.diff-moved,.diff-moved-away,.diff-inner) .bt-node-diff{background:var(--panel-2);color:var(--muted);border:1px solid var(--border)}.bt-node-port.diff-changed,.bt-node-port.diff-added,.bt-node-port.diff-removed{margin:0 -6px;padding:0 6px;border-radius:3px}.bt-node-port.diff-changed{background:color-mix(in srgb,var(--diff-mod) 14%,transparent)}.bt-node-port.diff-added{background:color-mix(in srgb,var(--diff-add) 14%,transparent)}.bt-node-port.diff-removed{background:color-mix(in srgb,var(--diff-del) 12%,transparent)}.bt-node-port .v.old,.bt-node-port.diff-removed .v,.bt-node-port.diff-removed .k{text-decoration:line-through;color:var(--diff-del)}.bt-node-port .v.old:after{content:" →";display:inline-block;margin-left:2px;color:var(--muted);text-decoration:none}.bt-node-port.diff-added .v,.bt-node-port.diff-changed .v:not(.old){color:var(--diff-add)}.cond-token.diff-added{background:color-mix(in srgb,var(--diff-add) 18%,transparent)}.cond-token.diff-removed{background:color-mix(in srgb,var(--diff-del) 15%,transparent);text-decoration:line-through}.cond-token.diff-changed,.cond-token.diff-edited{background:color-mix(in srgb,var(--diff-mod) 20%,transparent)}.cond-token.diff-moved{background:color-mix(in srgb,var(--diff-move) 18%,transparent)}.cond-token.diff-moved-away{opacity:.55;text-decoration:line-through dotted}.bt-edge.diff-added{stroke:var(--diff-add)!important;stroke-width:2}.bt-edge.diff-removed{stroke:var(--diff-del)!important;stroke-dasharray:5 4}.bt-edge.diff-moved{stroke:var(--diff-move)!important;stroke-width:2}.bt-edge.diff-moved-away{stroke:var(--diff-move)!important;stroke-dasharray:2 4;opacity:.6}', qO = "btlive", YO = 1, $O = ["IDLE", "RUNNING", "SUCCESS", "FAILURE", "SKIPPED"], MO = (n) => "files" in n;
function OO(n) {
  const i = n.getRootNode() instanceof ShadowRoot ? n.getRootNode() : document.head;
  if (i.querySelector("style[data-arborist]")) return;
  const a = document.createElement("style");
  a.dataset.arborist = "", a.textContent = AO, i.appendChild(a);
}
function XO(n, i = {}) {
  OO(n);
  const a = f_.createRoot(n), r = F.createRef(), u = new CO();
  let c = i, d = [], h, p = null, m, y = null;
  const g = () => a.render(
    /* @__PURE__ */ k.jsx(
      NO,
      {
        ref: r,
        ...c,
        trees: d,
        models: h,
        compare: p,
        statuses: m ?? u.statuses,
        liveTreeId: m ? y : u.treeId ?? null
      }
    )
  ), v = (w) => MO(w) ? Ly(w) : w, x = {
    load(w) {
      const _ = Ly(w);
      return x.setTrees(_.trees, _.models), _;
    },
    setTrees(w, _) {
      d = w, h = _, u.setTrees(w), g();
    },
    showTree(w) {
      c = { ...c, treeId: w }, g();
    },
    compare(w, _) {
      return p = Y_(v(w), v(_)), g(), p;
    },
    clearComparison() {
      p = null, g();
    },
    setRuntimeTree(w, _) {
      m = void 0, u.setRuntimeTree(w, _), g();
    },
    applySnapshot(w, _) {
      u.applySnapshot(w, _), g();
    },
    applyStatusChanges(w) {
      u.applyChanges(w), g();
    },
    setStatuses(w, _) {
      m = w, y = _ ?? null, g();
    },
    clearStatuses() {
      m = void 0, u.clear(), g();
    },
    get mismatches() {
      return u.mapping?.mismatches ?? [];
    },
    setOptions(w) {
      c = { ...c, ...w }, g();
    },
    fit: () => r.current?.fit(),
    reveal: (w) => r.current?.reveal(w),
    destroy: () => a.unmount()
  };
  return g(), x;
}
export {
  sb as BUILTIN_ENUMS,
  y_ as BUILTIN_MODELS,
  w_ as CONDITION_FIRST,
  Q4 as FINISHED,
  IO as ICON_CHOICES,
  qO as LIVE_PROTOCOL,
  YO as LIVE_PROTOCOL_VERSION,
  x_ as MAX_LINES,
  zO as NODE_CATEGORIES,
  ar as NO_STATUSES,
  d_ as PRE_POST_CONDITIONS,
  h_ as RESERVED_ATTRS,
  $O as STATUS_VALUES,
  _y as SUBTREE_MODEL,
  CO as StatusTracker,
  E_ as WINDOW_SUFFIX,
  By as XmlError,
  kO as allowedChildren,
  O_ as categoryOf,
  LO as changeStops,
  p_ as childBounds,
  Y_ as compareTrees,
  rh as conditionPart,
  Eu as conditionText,
  XO as createTreeViewer,
  zh as decoratorHint,
  Xa as defKey,
  ig as derive,
  D_ as diffLines,
  q_ as diffTreeDefs,
  BO as diffTrees,
  b_ as edgeHint,
  jO as enumForType,
  nb as findEnumValue,
  RO as findNode,
  DO as findParent,
  X_ as firstChangedTree,
  sO as flavorOf,
  F4 as foldStatusChanges,
  rO as iconFor,
  tb as isBlackboardRef,
  H_ as isChanged,
  g_ as isEnumLiteral,
  Oh as joinPath,
  M_ as layoutTree,
  K_ as literalProblem,
  Ly as loadTrees,
  Sy as mapRuntimeTree,
  R_ as mergeAll,
  $_ as mergeModels,
  z_ as mergeTree,
  ju as modelFor,
  HO as nodeLabel,
  og as nodeStatus,
  z2 as parseSpec,
  VO as parseSpecFile,
  D2 as parseTreeFile,
  _u as projectModels,
  K4 as snapshotStatuses,
  Dh as sortTreeDiffs,
  ng as statusClass,
  ob as subtreeModelKey,
  Pi as treeKey,
  Rh as visibleAttrs,
  La as walk
};
