"use strict";
(self.webpackChunkHM_Starter = self.webpackChunkHM_Starter || []).push([
  [790],
  {
    4790: function (e, t, n) {
      var i = n(6244),
        r = n(367),
        o = n(2555),
        s = n(2279);
      function a(e) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          a(e)
        );
      }
      function l(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? u(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var o,
          s = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((s = e.done), e);
          },
          e: function (e) {
            ((a = !0), (o = e));
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (a) throw o;
            }
          },
        };
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, h(i.key), i));
        }
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" != a(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != a(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == a(t) ? t : t + "";
      }
      var v = (function () {
          return (
            (e = function e(t) {
              var n = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._lastTransform = ""),
                (this._observer = null),
                (this._tickerAttached = !1),
                (this.updateTranslation = function () {
                  if (n._canvas) {
                    var e = n._canvas.getBoundingClientRect(),
                      t = n._canvas.width,
                      i = n._canvas.height,
                      r = (e.width / t) * n._renderer.resolution,
                      o = (e.height / i) * n._renderer.resolution,
                      s = e.left,
                      a = e.top,
                      l = "translate("
                        .concat(s, "px, ")
                        .concat(a, "px) scale(")
                        .concat(r, ", ")
                        .concat(o, ")");
                    l !== n._lastTransform &&
                      ((n._domElement.style.transform = l),
                      (n._lastTransform = l));
                  }
                }),
                (this._domElement = t.domElement),
                (this._renderer = t.renderer),
                (globalThis.OffscreenCanvas &&
                  this._renderer.canvas instanceof OffscreenCanvas) ||
                  ((this._canvas = this._renderer.canvas),
                  this._attachObserver()));
            }),
            (t = [
              {
                key: "canvas",
                get: function () {
                  return this._canvas;
                },
              },
              {
                key: "ensureAttached",
                value: function () {
                  !this._domElement.parentNode &&
                    this._canvas.parentNode &&
                    (this._canvas.parentNode.appendChild(this._domElement),
                    this.updateTranslation());
                },
              },
              {
                key: "_attachObserver",
                value: function () {
                  var e = this;
                  "ResizeObserver" in globalThis
                    ? (this._observer &&
                        (this._observer.disconnect(), (this._observer = null)),
                      (this._observer = new ResizeObserver(function (t) {
                        var n,
                          i = l(t);
                        try {
                          for (i.s(); !(n = i.n()).done; ) {
                            var r = n.value;
                            if (r.target === e._canvas) {
                              var o = e.canvas.width,
                                s = e.canvas.height,
                                a =
                                  (r.contentRect.width / o) *
                                  e._renderer.resolution,
                                u =
                                  (r.contentRect.height / s) *
                                  e._renderer.resolution;
                              (e._lastScaleX !== a || e._lastScaleY !== u) &&
                                (e.updateTranslation(),
                                (e._lastScaleX = a),
                                (e._lastScaleY = u));
                            }
                          }
                        } catch (e) {
                          i.e(e);
                        } finally {
                          i.f();
                        }
                      })),
                      this._observer.observe(this._canvas))
                    : this._tickerAttached ||
                      s.R.shared.add(this.updateTranslation, this, o.d.HIGH);
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this._tickerAttached &&
                      s.R.shared.remove(this.updateTranslation),
                    (this._domElement = null),
                    (this._renderer = null),
                    (this._canvas = null),
                    (this._tickerAttached = !1),
                    (this._lastTransform = ""),
                    (this._lastScaleX = null),
                    (this._lastScaleY = null));
                },
              },
            ]) && c(e.prototype, t),
            n && c(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })(),
        p = n(2334);
      function d(e) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          d(e)
        );
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, y(i.key), i));
        }
      }
      function y(e) {
        var t = (function (e, t) {
          if ("object" != d(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != d(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == d(t) ? t : t + "";
      }
      var m,
        b = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.bubbles = !0),
                (this.cancelBubble = !0),
                (this.cancelable = !1),
                (this.composed = !1),
                (this.defaultPrevented = !1),
                (this.eventPhase = e.prototype.NONE),
                (this.propagationStopped = !1),
                (this.propagationImmediatelyStopped = !1),
                (this.layer = new p.b()),
                (this.page = new p.b()),
                (this.NONE = 0),
                (this.CAPTURING_PHASE = 1),
                (this.AT_TARGET = 2),
                (this.BUBBLING_PHASE = 3),
                (this.manager = t));
            }),
            (t = [
              {
                key: "layerX",
                get: function () {
                  return this.layer.x;
                },
              },
              {
                key: "layerY",
                get: function () {
                  return this.layer.y;
                },
              },
              {
                key: "pageX",
                get: function () {
                  return this.page.x;
                },
              },
              {
                key: "pageY",
                get: function () {
                  return this.page.y;
                },
              },
              {
                key: "data",
                get: function () {
                  return this;
                },
              },
              {
                key: "composedPath",
                value: function () {
                  return (
                    !this.manager ||
                      (this.path &&
                        this.path[this.path.length - 1] === this.target) ||
                      (this.path = this.target
                        ? this.manager.propagationPath(this.target)
                        : []),
                    this.path
                  );
                },
              },
              {
                key: "initEvent",
                value: function (e, t, n) {
                  throw new Error(
                    "initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.",
                  );
                },
              },
              {
                key: "initUIEvent",
                value: function (e, t, n, i, r) {
                  throw new Error(
                    "initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.",
                  );
                },
              },
              {
                key: "preventDefault",
                value: function () {
                  (this.nativeEvent instanceof Event &&
                    this.nativeEvent.cancelable &&
                    this.nativeEvent.preventDefault(),
                    (this.defaultPrevented = !0));
                },
              },
              {
                key: "stopImmediatePropagation",
                value: function () {
                  this.propagationImmediatelyStopped = !0;
                },
              },
              {
                key: "stopPropagation",
                value: function () {
                  this.propagationStopped = !0;
                },
              },
            ]) && f(e.prototype, t),
            n && f(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })(),
        g = /iPhone/i,
        _ = /iPod/i,
        E = /iPad/i,
        T = /\biOS-universal(?:.+)Mac\b/i,
        P = /\bAndroid(?:.+)Mobile\b/i,
        w = /Android/i,
        O = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        k = /Silk/i,
        S = /Windows Phone/i,
        A = /\bWindows(?:.+)ARM\b/i,
        M = /BlackBerry/i,
        j = /BB10/i,
        D = /Opera Mini/i,
        I = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        x = /Mobile(?:.+)Firefox\b/i,
        L = function (e) {
          return (
            void 0 !== e &&
            "MacIntel" === e.platform &&
            "number" == typeof e.maxTouchPoints &&
            e.maxTouchPoints > 1 &&
            "undefined" == typeof MSStream
          );
        };
      function B(e) {
        var t = { userAgent: "", platform: "", maxTouchPoints: 0 };
        e || "undefined" == typeof navigator
          ? "string" == typeof e
            ? (t.userAgent = e)
            : e &&
              e.userAgent &&
              (t = {
                userAgent: e.userAgent,
                platform: e.platform,
                maxTouchPoints: e.maxTouchPoints || 0,
              })
          : (t = {
              userAgent: navigator.userAgent,
              platform: navigator.platform,
              maxTouchPoints: navigator.maxTouchPoints || 0,
            });
        var n = t.userAgent,
          i = n.split("[FBAN");
        (void 0 !== i[1] && (n = i[0]),
          void 0 !== (i = n.split("Twitter"))[1] && (n = i[0]));
        var r = (function (e) {
            return function (t) {
              return t.test(e);
            };
          })(n),
          o = {
            apple: {
              phone: r(g) && !r(S),
              ipod: r(_),
              tablet: !r(g) && (r(E) || L(t)) && !r(S),
              universal: r(T),
              device: (r(g) || r(_) || r(E) || r(T) || L(t)) && !r(S),
            },
            amazon: {
              phone: r(O),
              tablet: !r(O) && r(k),
              device: r(O) || r(k),
            },
            android: {
              phone: (!r(S) && r(O)) || (!r(S) && r(P)),
              tablet: !r(S) && !r(O) && !r(P) && (r(k) || r(w)),
              device:
                (!r(S) && (r(O) || r(k) || r(P) || r(w))) || r(/\bokhttp\b/i),
            },
            windows: { phone: r(S), tablet: r(A), device: r(S) || r(A) },
            other: {
              blackberry: r(M),
              blackberry10: r(j),
              opera: r(D),
              firefox: r(x),
              chrome: r(I),
              device: r(M) || r(j) || r(D) || r(x) || r(I),
            },
            any: !1,
            phone: !1,
            tablet: !1,
          };
        return (
          (o.any =
            o.apple.device ||
            o.android.device ||
            o.windows.device ||
            o.other.device),
          (o.phone = o.apple.phone || o.android.phone || o.windows.phone),
          (o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet),
          o
        );
      }
      var C = (null !== (m = B.default) && void 0 !== m ? m : B)(
          globalThis.navigator,
        ),
        R = n(7318);
      function U(e) {
        return (
          (U =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          U(e)
        );
      }
      function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                F(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : X(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function F(e, t, n) {
        return (
          (t = W(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Y(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return G(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? G(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var o,
          s = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((s = e.done), e);
          },
          e: function (e) {
            ((a = !0), (o = e));
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (a) throw o;
            }
          },
        };
      }
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function H(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, W(i.key), i));
        }
      }
      function W(e) {
        var t = (function (e, t) {
          if ("object" != U(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != U(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == U(t) ? t : t + "";
      }
      var K = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._mobileInfo = n),
            (this.debug = !1),
            (this._activateOnTab = !0),
            (this._deactivateOnMouseMove = !0),
            (this._isActive = !1),
            (this._isMobileAccessibility = !1),
            (this._div = null),
            (this._pools = {}),
            (this._renderId = 0),
            (this._children = []),
            (this._androidUpdateCount = 0),
            (this._androidUpdateFrequency = 500),
            (this._isRunningTests = !1),
            (this._boundOnKeyDown = this._onKeyDown.bind(this)),
            (this._boundOnMouseMove = this._onMouseMove.bind(this)),
            (this._hookDiv = null),
            (n.tablet || n.phone) && this._createTouchHook(),
            (this._renderer = t));
        }
        return (
          (t = e),
          (n = [
            {
              key: "isActive",
              get: function () {
                return this._isActive;
              },
            },
            {
              key: "isMobileAccessibility",
              get: function () {
                return this._isMobileAccessibility;
              },
            },
            {
              key: "hookDiv",
              get: function () {
                return this._hookDiv;
              },
            },
            {
              key: "div",
              get: function () {
                return this._div;
              },
            },
            {
              key: "_createTouchHook",
              value: function () {
                var e = this,
                  t = document.createElement("button");
                ((t.style.width = "".concat(1, "px")),
                  (t.style.height = "".concat(1, "px")),
                  (t.style.position = "absolute"),
                  (t.style.top = "".concat(-1e3, "px")),
                  (t.style.left = "".concat(-1e3, "px")),
                  (t.style.zIndex = (2).toString()),
                  (t.style.backgroundColor = "#FF0000"),
                  (t.title = "select to enable accessibility for this content"),
                  t.addEventListener("focus", function () {
                    ((e._isMobileAccessibility = !0),
                      e._activate(),
                      e._destroyTouchHook());
                  }),
                  document.body.appendChild(t),
                  (this._hookDiv = t));
              },
            },
            {
              key: "_destroyTouchHook",
              value: function () {
                this._hookDiv &&
                  (document.body.removeChild(this._hookDiv),
                  (this._hookDiv = null));
              },
            },
            {
              key: "_activate",
              value: function () {
                var e = this;
                if (!this._isActive) {
                  ((this._isActive = !0),
                    this._div ||
                      ((this._div = document.createElement("div")),
                      (this._div.style.position = "absolute"),
                      (this._div.style.top = "".concat(0, "px")),
                      (this._div.style.left = "".concat(0, "px")),
                      (this._div.style.pointerEvents = "none"),
                      (this._div.style.zIndex = (2).toString()),
                      (this._canvasObserver = new v({
                        domElement: this._div,
                        renderer: this._renderer,
                      }))),
                    this._activateOnTab &&
                      globalThis.addEventListener(
                        "keydown",
                        this._boundOnKeyDown,
                        !1,
                      ),
                    this._deactivateOnMouseMove &&
                      globalThis.document.addEventListener(
                        "mousemove",
                        this._boundOnMouseMove,
                        !0,
                      ));
                  var t = this._renderer.view.canvas;
                  if (t.parentNode)
                    (this._canvasObserver.ensureAttached(),
                      this._initAccessibilitySetup());
                  else {
                    var n = new MutationObserver(function () {
                      t.parentNode &&
                        (n.disconnect(),
                        e._canvasObserver.ensureAttached(),
                        e._initAccessibilitySetup());
                    });
                    n.observe(document.body, { childList: !0, subtree: !0 });
                  }
                }
              },
            },
            {
              key: "_initAccessibilitySetup",
              value: function () {
                (this._renderer.runners.postrender.add(this),
                  this._renderer.lastObjectRendered &&
                    this._updateAccessibleObjects(
                      this._renderer.lastObjectRendered,
                    ));
              },
            },
            {
              key: "_deactivate",
              value: function () {
                var e;
                if (this._isActive && !this._isMobileAccessibility) {
                  ((this._isActive = !1),
                    globalThis.document.removeEventListener(
                      "mousemove",
                      this._boundOnMouseMove,
                      !0,
                    ),
                    this._activateOnTab &&
                      globalThis.addEventListener(
                        "keydown",
                        this._boundOnKeyDown,
                        !1,
                      ),
                    this._renderer.runners.postrender.remove(this));
                  var t,
                    n = Y(this._children);
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var i,
                        r = t.value;
                      (null !== (i = r._accessibleDiv) &&
                        void 0 !== i &&
                        i.parentNode &&
                        (r._accessibleDiv.parentNode.removeChild(
                          r._accessibleDiv,
                        ),
                        (r._accessibleDiv = null)),
                        (r._accessibleActive = !1));
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                  for (var o in this._pools)
                    (this._pools[o].forEach(function (e) {
                      e.parentNode && e.parentNode.removeChild(e);
                    }),
                      delete this._pools[o]);
                  (null !== (e = this._div) &&
                    void 0 !== e &&
                    e.parentNode &&
                    this._div.parentNode.removeChild(this._div),
                    (this._pools = {}),
                    (this._children = []));
                }
              },
            },
            {
              key: "_updateAccessibleObjects",
              value: function (e) {
                if (e.visible && e.accessibleChildren) {
                  e.accessible &&
                    (e._accessibleActive || this._addChild(e),
                    (e._renderId = this._renderId));
                  var t = e.children;
                  if (t)
                    for (var n = 0; n < t.length; n++)
                      this._updateAccessibleObjects(t[n]);
                }
              },
            },
            {
              key: "init",
              value: function (t) {
                var n = {
                  accessibilityOptions: N(
                    N({}, e.defaultOptions),
                    (null == t ? void 0 : t.accessibilityOptions) || {},
                  ),
                };
                ((this.debug = n.accessibilityOptions.debug),
                  (this._activateOnTab = n.accessibilityOptions.activateOnTab),
                  (this._deactivateOnMouseMove =
                    n.accessibilityOptions.deactivateOnMouseMove),
                  n.accessibilityOptions.enabledByDefault && this._activate(),
                  this._renderer.runners.postrender.remove(this));
              },
            },
            {
              key: "postrender",
              value: function () {
                var e = performance.now();
                if (
                  !(
                    this._mobileInfo.android.device &&
                    e < this._androidUpdateCount
                  ) &&
                  ((this._androidUpdateCount =
                    e + this._androidUpdateFrequency),
                  (this._renderer.renderingToScreen &&
                    this._renderer.view.canvas) ||
                    this._isRunningTests)
                ) {
                  var t = new Set();
                  if (this._renderer.lastObjectRendered) {
                    this._updateAccessibleObjects(
                      this._renderer.lastObjectRendered,
                    );
                    var n,
                      i = Y(this._children);
                    try {
                      for (i.s(); !(n = i.n()).done; ) {
                        var r = n.value;
                        r._renderId === this._renderId &&
                          t.add(this._children.indexOf(r));
                      }
                    } catch (e) {
                      i.e(e);
                    } finally {
                      i.f();
                    }
                  }
                  for (var o = this._children.length - 1; o >= 0; o--) {
                    var s = this._children[o];
                    t.has(o) ||
                      (s._accessibleDiv &&
                        s._accessibleDiv.parentNode &&
                        (s._accessibleDiv.parentNode.removeChild(
                          s._accessibleDiv,
                        ),
                        this._getPool(s.accessibleType).push(s._accessibleDiv),
                        (s._accessibleDiv = null)),
                      (s._accessibleActive = !1),
                      (0, R.d)(this._children, o, 1));
                  }
                  this._renderer.renderingToScreen &&
                    this._canvasObserver.ensureAttached();
                  for (var a = 0; a < this._children.length; a++) {
                    var l = this._children[a];
                    if (l._accessibleActive && l._accessibleDiv) {
                      var u = l._accessibleDiv,
                        c = l.hitArea || l.getBounds().rectangle;
                      if (l.hitArea) {
                        var h = l.worldTransform;
                        ((u.style.left = "".concat(h.tx + c.x * h.a, "px")),
                          (u.style.top = "".concat(h.ty + c.y * h.d, "px")),
                          (u.style.width = "".concat(c.width * h.a, "px")),
                          (u.style.height = "".concat(c.height * h.d, "px")));
                      } else
                        (this._capHitArea(c),
                          (u.style.left = "".concat(c.x, "px")),
                          (u.style.top = "".concat(c.y, "px")),
                          (u.style.width = "".concat(c.width, "px")),
                          (u.style.height = "".concat(c.height, "px")));
                    }
                  }
                  this._renderId++;
                }
              },
            },
            {
              key: "_updateDebugHTML",
              value: function (e) {
                e.innerHTML = "type: "
                  .concat(e.type, "</br> title : ")
                  .concat(e.title, "</br> tabIndex: ")
                  .concat(e.tabIndex);
              },
            },
            {
              key: "_capHitArea",
              value: function (e) {
                (e.x < 0 && ((e.width += e.x), (e.x = 0)),
                  e.y < 0 && ((e.height += e.y), (e.y = 0)));
                var t = this._renderer,
                  n = t.width,
                  i = t.height;
                (e.x + e.width > n && (e.width = n - e.x),
                  e.y + e.height > i && (e.height = i - e.y));
              },
            },
            {
              key: "_addChild",
              value: function (e) {
                var t = this._getPool(e.accessibleType).pop();
                (t
                  ? ((t.innerHTML = ""),
                    t.removeAttribute("title"),
                    t.removeAttribute("aria-label"),
                    (t.tabIndex = 0))
                  : ("button" === e.accessibleType
                      ? (t = document.createElement("button"))
                      : (((t = document.createElement(
                          e.accessibleType,
                        )).style.cssText =
                          "\n                        color: transparent;\n                        pointer-events: none;\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        outline: 0;\n                        background: transparent;\n                        box-sizing: border-box;\n                        user-select: none;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                    "),
                        e.accessibleText && (t.innerText = e.accessibleText)),
                    (t.style.width = "".concat(100, "px")),
                    (t.style.height = "".concat(100, "px")),
                    (t.style.backgroundColor = this.debug
                      ? "rgba(255,255,255,0.5)"
                      : "transparent"),
                    (t.style.position = "absolute"),
                    (t.style.zIndex = (2).toString()),
                    (t.style.borderStyle = "none"),
                    navigator.userAgent.toLowerCase().includes("chrome")
                      ? t.setAttribute("aria-live", "off")
                      : t.setAttribute("aria-live", "polite"),
                    navigator.userAgent.match(/rv:.*Gecko\//)
                      ? t.setAttribute("aria-relevant", "additions")
                      : t.setAttribute("aria-relevant", "text"),
                    t.addEventListener("click", this._onClick.bind(this)),
                    t.addEventListener("focus", this._onFocus.bind(this)),
                    t.addEventListener(
                      "focusout",
                      this._onFocusOut.bind(this),
                    )),
                  (t.style.pointerEvents = e.accessiblePointerEvents),
                  (t.type = e.accessibleType),
                  e.accessibleTitle && null !== e.accessibleTitle
                    ? (t.title = e.accessibleTitle)
                    : (e.accessibleHint && null !== e.accessibleHint) ||
                      (t.title = "container ".concat(e.tabIndex)),
                  e.accessibleHint &&
                    null !== e.accessibleHint &&
                    t.setAttribute("aria-label", e.accessibleHint),
                  e.interactive ? (t.tabIndex = e.tabIndex) : (t.tabIndex = 0),
                  this.debug && this._updateDebugHTML(t),
                  (e._accessibleActive = !0),
                  (e._accessibleDiv = t),
                  (t.container = e),
                  this._children.push(e),
                  this._div.appendChild(e._accessibleDiv));
              },
            },
            {
              key: "_dispatchEvent",
              value: function (e, t) {
                var n = e.target.container,
                  i = this._renderer.events.rootBoundary,
                  r = Object.assign(new b(i), { target: n });
                ((i.rootTarget = this._renderer.lastObjectRendered),
                  t.forEach(function (e) {
                    return i.dispatchEvent(r, e);
                  }));
              },
            },
            {
              key: "_onClick",
              value: function (e) {
                this._dispatchEvent(e, ["click", "pointertap", "tap"]);
              },
            },
            {
              key: "_onFocus",
              value: function (e) {
                (e.target.getAttribute("aria-live") ||
                  e.target.setAttribute("aria-live", "assertive"),
                  this._dispatchEvent(e, ["mouseover"]));
              },
            },
            {
              key: "_onFocusOut",
              value: function (e) {
                (e.target.getAttribute("aria-live") ||
                  e.target.setAttribute("aria-live", "polite"),
                  this._dispatchEvent(e, ["mouseout"]));
              },
            },
            {
              key: "_onKeyDown",
              value: function (e) {
                9 === e.keyCode && this._activateOnTab && this._activate();
              },
            },
            {
              key: "_onMouseMove",
              value: function (e) {
                (0 === e.movementX && 0 === e.movementY) || this._deactivate();
              },
            },
            {
              key: "destroy",
              value: function () {
                var e;
                (this._deactivate(),
                  this._destroyTouchHook(),
                  null === (e = this._canvasObserver) ||
                    void 0 === e ||
                    e.destroy(),
                  (this._canvasObserver = null),
                  (this._div = null),
                  (this._pools = null),
                  (this._children = null),
                  (this._renderer = null),
                  (this._hookDiv = null),
                  globalThis.removeEventListener(
                    "keydown",
                    this._boundOnKeyDown,
                  ),
                  (this._boundOnKeyDown = null),
                  globalThis.document.removeEventListener(
                    "mousemove",
                    this._boundOnMouseMove,
                    !0,
                  ),
                  (this._boundOnMouseMove = null));
              },
            },
            {
              key: "setAccessibilityEnabled",
              value: function (e) {
                e ? this._activate() : this._deactivate();
              },
            },
            {
              key: "_getPool",
              value: function (e) {
                return (
                  this._pools[e] || (this._pools[e] = []),
                  this._pools[e]
                );
              },
            },
          ]),
          n && H(t.prototype, n),
          i && H(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, n, i;
      })();
      ((K.extension = {
        type: [i.Ag.WebGLSystem, i.Ag.WebGPUSystem],
        name: "accessibility",
      }),
        (K.defaultOptions = {
          enabledByDefault: !1,
          debug: !1,
          activateOnTab: !0,
          deactivateOnMouseMove: !0,
        }));
      var z = K;
      (i.XO.add(z),
        i.XO.mixin(r.mc, {
          accessible: !1,
          accessibleTitle: null,
          accessibleHint: null,
          tabIndex: 0,
          accessibleType: "button",
          accessibleText: null,
          accessiblePointerEvents: "auto",
          accessibleChildren: !0,
          _accessibleActive: !1,
          _accessibleDiv: null,
          _renderId: -1,
        }));
      n(8456);
      var Z = n(9586),
        q = n(9209);
      function $(e) {
        return (
          ($ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          $(e)
        );
      }
      function J(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, Q(i.key), i));
        }
      }
      function Q(e) {
        var t = (function (e, t) {
          if ("object" != $(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != $(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == $(t) ? t : t + "";
      }
      var V = new ((function () {
        return (
          (e = function e() {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.interactionFrequency = 10),
              (this._deltaTime = 0),
              (this._didMove = !1),
              (this._tickerAdded = !1),
              (this._pauseUpdate = !0));
          }),
          (t = [
            {
              key: "init",
              value: function (e) {
                (this.removeTickerListener(),
                  (this.events = e),
                  (this.interactionFrequency = 10),
                  (this._deltaTime = 0),
                  (this._didMove = !1),
                  (this._tickerAdded = !1),
                  (this._pauseUpdate = !0));
              },
            },
            {
              key: "pauseUpdate",
              get: function () {
                return this._pauseUpdate;
              },
              set: function (e) {
                this._pauseUpdate = e;
              },
            },
            {
              key: "addTickerListener",
              value: function () {
                !this._tickerAdded &&
                  this.domElement &&
                  (s.R.system.add(this._tickerUpdate, this, o.d.INTERACTION),
                  (this._tickerAdded = !0));
              },
            },
            {
              key: "removeTickerListener",
              value: function () {
                this._tickerAdded &&
                  (s.R.system.remove(this._tickerUpdate, this),
                  (this._tickerAdded = !1));
              },
            },
            {
              key: "pointerMoved",
              value: function () {
                this._didMove = !0;
              },
            },
            {
              key: "_update",
              value: function () {
                if (this.domElement && !this._pauseUpdate)
                  if (this._didMove) this._didMove = !1;
                  else {
                    var e = this.events._rootPointerEvent;
                    (this.events.supportsTouchEvents &&
                      "touch" === e.pointerType) ||
                      globalThis.document.dispatchEvent(
                        this.events.supportsPointerEvents
                          ? new PointerEvent("pointermove", {
                              clientX: e.clientX,
                              clientY: e.clientY,
                              pointerType: e.pointerType,
                              pointerId: e.pointerId,
                            })
                          : new MouseEvent("mousemove", {
                              clientX: e.clientX,
                              clientY: e.clientY,
                            }),
                      );
                  }
              },
            },
            {
              key: "_tickerUpdate",
              value: function (e) {
                ((this._deltaTime += e.deltaTime),
                  this._deltaTime < this.interactionFrequency ||
                    ((this._deltaTime = 0), this._update()));
              },
            },
            {
              key: "destroy",
              value: function () {
                (this.removeTickerListener(),
                  (this.events = null),
                  (this.domElement = null),
                  (this._deltaTime = 0),
                  (this._didMove = !1),
                  (this._tickerAdded = !1),
                  (this._pauseUpdate = !0));
              },
            },
          ]) && J(e.prototype, t),
          n && J(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, n;
      })())();
      function ee(e) {
        return (
          (ee =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ee(e)
        );
      }
      function te(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, ne(i.key), i));
        }
      }
      function ne(e) {
        var t = (function (e, t) {
          if ("object" != ee(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != ee(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ee(t) ? t : t + "";
      }
      function ie(e, t, n) {
        return (
          (t = oe(t)),
          (function (e, t) {
            if (t && ("object" == ee(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            re()
              ? Reflect.construct(t, n || [], oe(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function re() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (re = function () {
          return !!e;
        })();
      }
      function oe(e) {
        return (
          (oe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          oe(e)
        );
      }
      function se(e, t) {
        return (
          (se = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          se(e, t)
        );
      }
      var ae = (function (e) {
        function t() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = ie(this, t, arguments)).client = new p.b()),
            (e.movement = new p.b()),
            (e.offset = new p.b()),
            (e.global = new p.b()),
            (e.screen = new p.b()),
            e
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && se(e, t));
          })(t, e),
          (n = t),
          (i = [
            {
              key: "clientX",
              get: function () {
                return this.client.x;
              },
            },
            {
              key: "clientY",
              get: function () {
                return this.client.y;
              },
            },
            {
              key: "x",
              get: function () {
                return this.clientX;
              },
            },
            {
              key: "y",
              get: function () {
                return this.clientY;
              },
            },
            {
              key: "movementX",
              get: function () {
                return this.movement.x;
              },
            },
            {
              key: "movementY",
              get: function () {
                return this.movement.y;
              },
            },
            {
              key: "offsetX",
              get: function () {
                return this.offset.x;
              },
            },
            {
              key: "offsetY",
              get: function () {
                return this.offset.y;
              },
            },
            {
              key: "globalX",
              get: function () {
                return this.global.x;
              },
            },
            {
              key: "globalY",
              get: function () {
                return this.global.y;
              },
            },
            {
              key: "screenX",
              get: function () {
                return this.screen.x;
              },
            },
            {
              key: "screenY",
              get: function () {
                return this.screen.y;
              },
            },
            {
              key: "getLocalPosition",
              value: function (e, t, n) {
                return e.worldTransform.applyInverse(n || this.global, t);
              },
            },
            {
              key: "getModifierState",
              value: function (e) {
                return (
                  "getModifierState" in this.nativeEvent &&
                  this.nativeEvent.getModifierState(e)
                );
              },
            },
            {
              key: "initMouseEvent",
              value: function (e, t, n, i, r, o, s, a, l, u, c, h, v, p, d) {
                throw new Error("Method not implemented.");
              },
            },
          ]) && te(n.prototype, i),
          r && te(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, i, r;
      })(b);
      function le(e) {
        return (
          (le =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          le(e)
        );
      }
      function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, ce(i.key), i));
        }
      }
      function ce(e) {
        var t = (function (e, t) {
          if ("object" != le(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != le(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == le(t) ? t : t + "";
      }
      function he(e, t, n) {
        return (
          (t = pe(t)),
          (function (e, t) {
            if (t && ("object" == le(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            ve()
              ? Reflect.construct(t, n || [], pe(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function ve() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (ve = function () {
          return !!e;
        })();
      }
      function pe(e) {
        return (
          (pe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          pe(e)
        );
      }
      function de(e, t) {
        return (
          (de = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          de(e, t)
        );
      }
      var fe = (function (e) {
        function t() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = he(this, t, arguments)).width = 0),
            (e.height = 0),
            (e.isPrimary = !1),
            e
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && de(e, t));
          })(t, e),
          (n = t),
          (i = [
            {
              key: "getCoalescedEvents",
              value: function () {
                return "pointermove" === this.type ||
                  "mousemove" === this.type ||
                  "touchmove" === this.type
                  ? [this]
                  : [];
              },
            },
            {
              key: "getPredictedEvents",
              value: function () {
                throw new Error("getPredictedEvents is not supported!");
              },
            },
          ]) && ue(n.prototype, i),
          r && ue(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, i, r;
      })(ae);
      function ye(e) {
        return (
          (ye =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ye(e)
        );
      }
      function me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, be(i.key), i));
        }
      }
      function be(e) {
        var t = (function (e, t) {
          if ("object" != ye(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != ye(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ye(t) ? t : t + "";
      }
      function ge(e, t, n) {
        return (
          (t = Ee(t)),
          (function (e, t) {
            if (t && ("object" == ye(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            _e()
              ? Reflect.construct(t, n || [], Ee(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function _e() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (_e = function () {
          return !!e;
        })();
      }
      function Ee(e) {
        return (
          (Ee = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ee(e)
        );
      }
      function Te(e, t) {
        return (
          (Te = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Te(e, t)
        );
      }
      var Pe = (function (e) {
        function t() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = ge(this, t, arguments)).DOM_DELTA_PIXEL = 0),
            (e.DOM_DELTA_LINE = 1),
            (e.DOM_DELTA_PAGE = 2),
            e
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && Te(e, t));
          })(t, e),
          (n = t),
          i && me(n.prototype, i),
          r && me(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, i, r;
      })(ae);
      function we(e) {
        return (
          (we =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          we(e)
        );
      }
      function Oe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, ke(i.key), i));
        }
      }
      function ke(e) {
        var t = (function (e, t) {
          if ("object" != we(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != we(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == we(t) ? t : t + "";
      }
      ((Pe.DOM_DELTA_PIXEL = 0),
        (Pe.DOM_DELTA_LINE = 1),
        (Pe.DOM_DELTA_PAGE = 2));
      var Se = new p.b(),
        Ae = new p.b(),
        Me = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.dispatch = new Z.A()),
                (this.moveOnAll = !1),
                (this.enableGlobalMoveEvents = !0),
                (this.mappingState = { trackingData: {} }),
                (this.eventPool = new Map()),
                (this._allInteractiveElements = []),
                (this._hitElements = []),
                (this._isPointerMoveEvent = !1),
                (this.rootTarget = t),
                (this.hitPruneFn = this.hitPruneFn.bind(this)),
                (this.hitTestFn = this.hitTestFn.bind(this)),
                (this.mapPointerDown = this.mapPointerDown.bind(this)),
                (this.mapPointerMove = this.mapPointerMove.bind(this)),
                (this.mapPointerOut = this.mapPointerOut.bind(this)),
                (this.mapPointerOver = this.mapPointerOver.bind(this)),
                (this.mapPointerUp = this.mapPointerUp.bind(this)),
                (this.mapPointerUpOutside =
                  this.mapPointerUpOutside.bind(this)),
                (this.mapWheel = this.mapWheel.bind(this)),
                (this.mappingTable = {}),
                this.addEventMapping("pointerdown", this.mapPointerDown),
                this.addEventMapping("pointermove", this.mapPointerMove),
                this.addEventMapping("pointerout", this.mapPointerOut),
                this.addEventMapping("pointerleave", this.mapPointerOut),
                this.addEventMapping("pointerover", this.mapPointerOver),
                this.addEventMapping("pointerup", this.mapPointerUp),
                this.addEventMapping(
                  "pointerupoutside",
                  this.mapPointerUpOutside,
                ),
                this.addEventMapping("wheel", this.mapWheel));
            }),
            (t = [
              {
                key: "addEventMapping",
                value: function (e, t) {
                  (this.mappingTable[e] || (this.mappingTable[e] = []),
                    this.mappingTable[e].push({ fn: t, priority: 0 }),
                    this.mappingTable[e].sort(function (e, t) {
                      return e.priority - t.priority;
                    }));
                },
              },
              {
                key: "dispatchEvent",
                value: function (e, t) {
                  ((e.propagationStopped = !1),
                    (e.propagationImmediatelyStopped = !1),
                    this.propagate(e, t),
                    this.dispatch.emit(t || e.type, e));
                },
              },
              {
                key: "mapEvent",
                value: function (e) {
                  if (this.rootTarget) {
                    var t = this.mappingTable[e.type];
                    if (t) for (var n = 0, i = t.length; n < i; n++) t[n].fn(e);
                    else
                      (0, q.R)(
                        "[EventBoundary]: Event mapping not defined for ".concat(
                          e.type,
                        ),
                      );
                  }
                },
              },
              {
                key: "hitTest",
                value: function (e, t) {
                  V.pauseUpdate = !0;
                  var n = this[
                    this._isPointerMoveEvent && this.enableGlobalMoveEvents
                      ? "hitTestMoveRecursive"
                      : "hitTestRecursive"
                  ](
                    this.rootTarget,
                    this.rootTarget.eventMode,
                    Se.set(e, t),
                    this.hitTestFn,
                    this.hitPruneFn,
                  );
                  return n && n[0];
                },
              },
              {
                key: "propagate",
                value: function (e, t) {
                  if (e.target) {
                    var n = e.composedPath();
                    e.eventPhase = e.CAPTURING_PHASE;
                    for (var i = 0, r = n.length - 1; i < r; i++)
                      if (
                        ((e.currentTarget = n[i]),
                        this.notifyTarget(e, t),
                        e.propagationStopped || e.propagationImmediatelyStopped)
                      )
                        return;
                    if (
                      ((e.eventPhase = e.AT_TARGET),
                      (e.currentTarget = e.target),
                      this.notifyTarget(e, t),
                      !e.propagationStopped && !e.propagationImmediatelyStopped)
                    ) {
                      e.eventPhase = e.BUBBLING_PHASE;
                      for (var o = n.length - 2; o >= 0; o--)
                        if (
                          ((e.currentTarget = n[o]),
                          this.notifyTarget(e, t),
                          e.propagationStopped ||
                            e.propagationImmediatelyStopped)
                        )
                          return;
                    }
                  }
                },
              },
              {
                key: "all",
                value: function (e, t) {
                  var n = this,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : this._allInteractiveElements;
                  if (0 !== i.length) {
                    e.eventPhase = e.BUBBLING_PHASE;
                    for (
                      var r = Array.isArray(t) ? t : [t],
                        o = function (t) {
                          r.forEach(function (r) {
                            ((e.currentTarget = i[t]), n.notifyTarget(e, r));
                          });
                        },
                        s = i.length - 1;
                      s >= 0;
                      s--
                    )
                      o(s);
                  }
                },
              },
              {
                key: "propagationPath",
                value: function (e) {
                  for (
                    var t = [e], n = 0;
                    n < 2048 && e !== this.rootTarget && e.parent;
                    n++
                  ) {
                    if (!e.parent)
                      throw new Error(
                        "Cannot find propagation path to disconnected target",
                      );
                    (t.push(e.parent), (e = e.parent));
                  }
                  return (t.reverse(), t);
                },
              },
              {
                key: "hitTestMoveRecursive",
                value: function (e, t, n, i, r) {
                  var o =
                      arguments.length > 5 &&
                      void 0 !== arguments[5] &&
                      arguments[5],
                    s = !1;
                  if (this._interactivePrune(e)) return null;
                  if (
                    (("dynamic" !== e.eventMode && "dynamic" !== t) ||
                      (V.pauseUpdate = !1),
                    e.interactiveChildren && e.children)
                  )
                    for (var a = e.children, l = a.length - 1; l >= 0; l--) {
                      var u = a[l],
                        c = this.hitTestMoveRecursive(
                          u,
                          this._isInteractive(t) ? t : u.eventMode,
                          n,
                          i,
                          r,
                          o || r(e, n),
                        );
                      if (c) {
                        if (c.length > 0 && !c[c.length - 1].parent) continue;
                        var h = e.isInteractive();
                        ((c.length > 0 || h) &&
                          (h && this._allInteractiveElements.push(e),
                          c.push(e)),
                          0 === this._hitElements.length &&
                            (this._hitElements = c),
                          (s = !0));
                      }
                    }
                  var v = this._isInteractive(t),
                    p = e.isInteractive();
                  return (
                    p && p && this._allInteractiveElements.push(e),
                    o || this._hitElements.length > 0
                      ? null
                      : s
                        ? this._hitElements
                        : v && !r(e, n) && i(e, n)
                          ? p
                            ? [e]
                            : []
                          : null
                  );
                },
              },
              {
                key: "hitTestRecursive",
                value: function (e, t, n, i, r) {
                  if (this._interactivePrune(e) || r(e, n)) return null;
                  if (
                    (("dynamic" !== e.eventMode && "dynamic" !== t) ||
                      (V.pauseUpdate = !1),
                    e.interactiveChildren && e.children)
                  )
                    for (
                      var o = e.children, s = n, a = o.length - 1;
                      a >= 0;
                      a--
                    ) {
                      var l = o[a],
                        u = this.hitTestRecursive(
                          l,
                          this._isInteractive(t) ? t : l.eventMode,
                          s,
                          i,
                          r,
                        );
                      if (u) {
                        if (u.length > 0 && !u[u.length - 1].parent) continue;
                        var c = e.isInteractive();
                        return ((u.length > 0 || c) && u.push(e), u);
                      }
                    }
                  var h = this._isInteractive(t),
                    v = e.isInteractive();
                  return h && i(e, n) ? (v ? [e] : []) : null;
                },
              },
              {
                key: "_isInteractive",
                value: function (e) {
                  return "static" === e || "dynamic" === e;
                },
              },
              {
                key: "_interactivePrune",
                value: function (e) {
                  return (
                    !(e && e.visible && e.renderable && e.measurable) ||
                    "none" === e.eventMode ||
                    ("passive" === e.eventMode && !e.interactiveChildren)
                  );
                },
              },
              {
                key: "hitPruneFn",
                value: function (e, t) {
                  if (
                    e.hitArea &&
                    (e.worldTransform.applyInverse(t, Ae),
                    !e.hitArea.contains(Ae.x, Ae.y))
                  )
                    return !0;
                  if (e.effects && e.effects.length)
                    for (var n = 0; n < e.effects.length; n++) {
                      var i = e.effects[n];
                      if (
                        i.containsPoint &&
                        !i.containsPoint(t, this.hitTestFn)
                      )
                        return !0;
                    }
                  return !1;
                },
              },
              {
                key: "hitTestFn",
                value: function (e, t) {
                  return (
                    !!e.hitArea ||
                    (!(null == e || !e.containsPoint) &&
                      (e.worldTransform.applyInverse(t, Ae),
                      e.containsPoint(Ae)))
                  );
                },
              },
              {
                key: "notifyTarget",
                value: function (e, t) {
                  var n, i;
                  if (e.currentTarget.isInteractive()) {
                    null != t || (t = e.type);
                    var r = "on".concat(t);
                    null === (n = (i = e.currentTarget)[r]) ||
                      void 0 === n ||
                      n.call(i, e);
                    var o =
                      e.eventPhase === e.CAPTURING_PHASE ||
                      e.eventPhase === e.AT_TARGET
                        ? "".concat(t, "capture")
                        : t;
                    (this._notifyListeners(e, o),
                      e.eventPhase === e.AT_TARGET &&
                        this._notifyListeners(e, t));
                  }
                },
              },
              {
                key: "mapPointerDown",
                value: function (e) {
                  if (e instanceof fe) {
                    var t = this.createPointerEvent(e);
                    if (
                      (this.dispatchEvent(t, "pointerdown"),
                      "touch" === t.pointerType)
                    )
                      this.dispatchEvent(t, "touchstart");
                    else if (
                      "mouse" === t.pointerType ||
                      "pen" === t.pointerType
                    ) {
                      var n = 2 === t.button;
                      this.dispatchEvent(t, n ? "rightdown" : "mousedown");
                    }
                    ((this.trackingData(e.pointerId).pressTargetsByButton[
                      e.button
                    ] = t.composedPath()),
                      this.freeEvent(t));
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-pointer event as a pointer event",
                    );
                },
              },
              {
                key: "mapPointerMove",
                value: function (e) {
                  var t, n;
                  if (e instanceof fe) {
                    ((this._allInteractiveElements.length = 0),
                      (this._hitElements.length = 0),
                      (this._isPointerMoveEvent = !0));
                    var i = this.createPointerEvent(e);
                    this._isPointerMoveEvent = !1;
                    var r =
                        "mouse" === i.pointerType || "pen" === i.pointerType,
                      o = this.trackingData(e.pointerId),
                      s = this.findMountedTarget(o.overTargets);
                    if (
                      (null === (t = o.overTargets) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                      s !== i.target
                    ) {
                      var a =
                          "mousemove" === e.type ? "mouseout" : "pointerout",
                        l = this.createPointerEvent(e, a, s);
                      if (
                        (this.dispatchEvent(l, "pointerout"),
                        r && this.dispatchEvent(l, "mouseout"),
                        !i.composedPath().includes(s))
                      ) {
                        var u = this.createPointerEvent(e, "pointerleave", s);
                        for (
                          u.eventPhase = u.AT_TARGET;
                          u.target && !i.composedPath().includes(u.target);
                        )
                          ((u.currentTarget = u.target),
                            this.notifyTarget(u),
                            r && this.notifyTarget(u, "mouseleave"),
                            (u.target = u.target.parent));
                        this.freeEvent(u);
                      }
                      this.freeEvent(l);
                    }
                    if (s !== i.target) {
                      var c =
                          "mousemove" === e.type ? "mouseover" : "pointerover",
                        h = this.clonePointerEvent(i, c);
                      (this.dispatchEvent(h, "pointerover"),
                        r && this.dispatchEvent(h, "mouseover"));
                      for (
                        var v = null == s ? void 0 : s.parent;
                        v && v !== this.rootTarget.parent && v !== i.target;
                      )
                        v = v.parent;
                      if (!v || v === this.rootTarget.parent) {
                        var p = this.clonePointerEvent(i, "pointerenter");
                        for (
                          p.eventPhase = p.AT_TARGET;
                          p.target &&
                          p.target !== s &&
                          p.target !== this.rootTarget.parent;
                        )
                          ((p.currentTarget = p.target),
                            this.notifyTarget(p),
                            r && this.notifyTarget(p, "mouseenter"),
                            (p.target = p.target.parent));
                        this.freeEvent(p);
                      }
                      this.freeEvent(h);
                    }
                    var d,
                      f = [],
                      y =
                        null === (n = this.enableGlobalMoveEvents) ||
                        void 0 === n ||
                        n;
                    (this.moveOnAll
                      ? f.push("pointermove")
                      : this.dispatchEvent(i, "pointermove"),
                      y && f.push("globalpointermove"),
                      "touch" === i.pointerType &&
                        (this.moveOnAll
                          ? f.splice(1, 0, "touchmove")
                          : this.dispatchEvent(i, "touchmove"),
                        y && f.push("globaltouchmove")),
                      r &&
                        (this.moveOnAll
                          ? f.splice(1, 0, "mousemove")
                          : this.dispatchEvent(i, "mousemove"),
                        y && f.push("globalmousemove"),
                        (this.cursor =
                          null === (d = i.target) || void 0 === d
                            ? void 0
                            : d.cursor)),
                      f.length > 0 && this.all(i, f),
                      (this._allInteractiveElements.length = 0),
                      (this._hitElements.length = 0),
                      (o.overTargets = i.composedPath()),
                      this.freeEvent(i));
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-pointer event as a pointer event",
                    );
                },
              },
              {
                key: "mapPointerOver",
                value: function (e) {
                  var t;
                  if (e instanceof fe) {
                    var n = this.trackingData(e.pointerId),
                      i = this.createPointerEvent(e),
                      r = "mouse" === i.pointerType || "pen" === i.pointerType;
                    (this.dispatchEvent(i, "pointerover"),
                      r && this.dispatchEvent(i, "mouseover"),
                      "mouse" === i.pointerType &&
                        (this.cursor =
                          null === (t = i.target) || void 0 === t
                            ? void 0
                            : t.cursor));
                    var o = this.clonePointerEvent(i, "pointerenter");
                    for (
                      o.eventPhase = o.AT_TARGET;
                      o.target && o.target !== this.rootTarget.parent;
                    )
                      ((o.currentTarget = o.target),
                        this.notifyTarget(o),
                        r && this.notifyTarget(o, "mouseenter"),
                        (o.target = o.target.parent));
                    ((n.overTargets = i.composedPath()),
                      this.freeEvent(i),
                      this.freeEvent(o));
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-pointer event as a pointer event",
                    );
                },
              },
              {
                key: "mapPointerOut",
                value: function (e) {
                  if (e instanceof fe) {
                    var t = this.trackingData(e.pointerId);
                    if (t.overTargets) {
                      var n =
                          "mouse" === e.pointerType || "pen" === e.pointerType,
                        i = this.findMountedTarget(t.overTargets),
                        r = this.createPointerEvent(e, "pointerout", i);
                      (this.dispatchEvent(r),
                        n && this.dispatchEvent(r, "mouseout"));
                      var o = this.createPointerEvent(e, "pointerleave", i);
                      for (
                        o.eventPhase = o.AT_TARGET;
                        o.target && o.target !== this.rootTarget.parent;
                      )
                        ((o.currentTarget = o.target),
                          this.notifyTarget(o),
                          n && this.notifyTarget(o, "mouseleave"),
                          (o.target = o.target.parent));
                      ((t.overTargets = null),
                        this.freeEvent(r),
                        this.freeEvent(o));
                    }
                    this.cursor = null;
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-pointer event as a pointer event",
                    );
                },
              },
              {
                key: "mapPointerUp",
                value: function (e) {
                  if (e instanceof fe) {
                    var t = performance.now(),
                      n = this.createPointerEvent(e);
                    if (
                      (this.dispatchEvent(n, "pointerup"),
                      "touch" === n.pointerType)
                    )
                      this.dispatchEvent(n, "touchend");
                    else if (
                      "mouse" === n.pointerType ||
                      "pen" === n.pointerType
                    ) {
                      var i = 2 === n.button;
                      this.dispatchEvent(n, i ? "rightup" : "mouseup");
                    }
                    var r = this.trackingData(e.pointerId),
                      o = this.findMountedTarget(
                        r.pressTargetsByButton[e.button],
                      ),
                      s = o;
                    if (o && !n.composedPath().includes(o)) {
                      for (var a = o; a && !n.composedPath().includes(a); ) {
                        if (
                          ((n.currentTarget = a),
                          this.notifyTarget(n, "pointerupoutside"),
                          "touch" === n.pointerType)
                        )
                          this.notifyTarget(n, "touchendoutside");
                        else if (
                          "mouse" === n.pointerType ||
                          "pen" === n.pointerType
                        ) {
                          var l = 2 === n.button;
                          this.notifyTarget(
                            n,
                            l ? "rightupoutside" : "mouseupoutside",
                          );
                        }
                        a = a.parent;
                      }
                      (delete r.pressTargetsByButton[e.button], (s = a));
                    }
                    if (s) {
                      var u = this.clonePointerEvent(n, "click");
                      ((u.target = s),
                        (u.path = null),
                        r.clicksByButton[e.button] ||
                          (r.clicksByButton[e.button] = {
                            clickCount: 0,
                            target: u.target,
                            timeStamp: t,
                          }));
                      var c = r.clicksByButton[e.button];
                      if (
                        (c.target === u.target && t - c.timeStamp < 200
                          ? ++c.clickCount
                          : (c.clickCount = 1),
                        (c.target = u.target),
                        (c.timeStamp = t),
                        (u.detail = c.clickCount),
                        "mouse" === u.pointerType)
                      ) {
                        var h = 2 === u.button;
                        this.dispatchEvent(u, h ? "rightclick" : "click");
                      } else
                        "touch" === u.pointerType &&
                          this.dispatchEvent(u, "tap");
                      (this.dispatchEvent(u, "pointertap"), this.freeEvent(u));
                    }
                    this.freeEvent(n);
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-pointer event as a pointer event",
                    );
                },
              },
              {
                key: "mapPointerUpOutside",
                value: function (e) {
                  if (e instanceof fe) {
                    var t = this.trackingData(e.pointerId),
                      n = this.findMountedTarget(
                        t.pressTargetsByButton[e.button],
                      ),
                      i = this.createPointerEvent(e);
                    if (n) {
                      for (var r = n; r; )
                        ((i.currentTarget = r),
                          this.notifyTarget(i, "pointerupoutside"),
                          "touch" === i.pointerType
                            ? this.notifyTarget(i, "touchendoutside")
                            : ("mouse" !== i.pointerType &&
                                "pen" !== i.pointerType) ||
                              this.notifyTarget(
                                i,
                                2 === i.button
                                  ? "rightupoutside"
                                  : "mouseupoutside",
                              ),
                          (r = r.parent));
                      delete t.pressTargetsByButton[e.button];
                    }
                    this.freeEvent(i);
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-pointer event as a pointer event",
                    );
                },
              },
              {
                key: "mapWheel",
                value: function (e) {
                  if (e instanceof Pe) {
                    var t = this.createWheelEvent(e);
                    (this.dispatchEvent(t), this.freeEvent(t));
                  } else
                    (0, q.R)(
                      "EventBoundary cannot map a non-wheel event as a wheel event",
                    );
                },
              },
              {
                key: "findMountedTarget",
                value: function (e) {
                  if (!e) return null;
                  for (
                    var t = e[0], n = 1;
                    n < e.length && e[n].parent === t;
                    n++
                  )
                    t = e[n];
                  return t;
                },
              },
              {
                key: "createPointerEvent",
                value: function (e, t, n) {
                  var i,
                    r = this.allocateEvent(fe);
                  return (
                    this.copyPointerData(e, r),
                    this.copyMouseData(e, r),
                    this.copyData(e, r),
                    (r.nativeEvent = e.nativeEvent),
                    (r.originalEvent = e),
                    (r.target =
                      null !==
                        (i =
                          null != n
                            ? n
                            : this.hitTest(r.global.x, r.global.y)) &&
                      void 0 !== i
                        ? i
                        : this._hitElements[0]),
                    "string" == typeof t && (r.type = t),
                    r
                  );
                },
              },
              {
                key: "createWheelEvent",
                value: function (e) {
                  var t = this.allocateEvent(Pe);
                  return (
                    this.copyWheelData(e, t),
                    this.copyMouseData(e, t),
                    this.copyData(e, t),
                    (t.nativeEvent = e.nativeEvent),
                    (t.originalEvent = e),
                    (t.target = this.hitTest(t.global.x, t.global.y)),
                    t
                  );
                },
              },
              {
                key: "clonePointerEvent",
                value: function (e, t) {
                  var n = this.allocateEvent(fe);
                  return (
                    (n.nativeEvent = e.nativeEvent),
                    (n.originalEvent = e.originalEvent),
                    this.copyPointerData(e, n),
                    this.copyMouseData(e, n),
                    this.copyData(e, n),
                    (n.target = e.target),
                    (n.path = e.composedPath().slice()),
                    (n.type = null != t ? t : n.type),
                    n
                  );
                },
              },
              {
                key: "copyWheelData",
                value: function (e, t) {
                  ((t.deltaMode = e.deltaMode),
                    (t.deltaX = e.deltaX),
                    (t.deltaY = e.deltaY),
                    (t.deltaZ = e.deltaZ));
                },
              },
              {
                key: "copyPointerData",
                value: function (e, t) {
                  e instanceof fe &&
                    t instanceof fe &&
                    ((t.pointerId = e.pointerId),
                    (t.width = e.width),
                    (t.height = e.height),
                    (t.isPrimary = e.isPrimary),
                    (t.pointerType = e.pointerType),
                    (t.pressure = e.pressure),
                    (t.tangentialPressure = e.tangentialPressure),
                    (t.tiltX = e.tiltX),
                    (t.tiltY = e.tiltY),
                    (t.twist = e.twist));
                },
              },
              {
                key: "copyMouseData",
                value: function (e, t) {
                  e instanceof ae &&
                    t instanceof ae &&
                    ((t.altKey = e.altKey),
                    (t.button = e.button),
                    (t.buttons = e.buttons),
                    t.client.copyFrom(e.client),
                    (t.ctrlKey = e.ctrlKey),
                    (t.metaKey = e.metaKey),
                    t.movement.copyFrom(e.movement),
                    t.screen.copyFrom(e.screen),
                    (t.shiftKey = e.shiftKey),
                    t.global.copyFrom(e.global));
                },
              },
              {
                key: "copyData",
                value: function (e, t) {
                  ((t.isTrusted = e.isTrusted),
                    (t.srcElement = e.srcElement),
                    (t.timeStamp = performance.now()),
                    (t.type = e.type),
                    (t.detail = e.detail),
                    (t.view = e.view),
                    (t.which = e.which),
                    t.layer.copyFrom(e.layer),
                    t.page.copyFrom(e.page));
                },
              },
              {
                key: "trackingData",
                value: function (e) {
                  return (
                    this.mappingState.trackingData[e] ||
                      (this.mappingState.trackingData[e] = {
                        pressTargetsByButton: {},
                        clicksByButton: {},
                        overTarget: null,
                      }),
                    this.mappingState.trackingData[e]
                  );
                },
              },
              {
                key: "allocateEvent",
                value: function (e) {
                  this.eventPool.has(e) || this.eventPool.set(e, []);
                  var t = this.eventPool.get(e).pop() || new e(this);
                  return (
                    (t.eventPhase = t.NONE),
                    (t.currentTarget = null),
                    (t.defaultPrevented = !1),
                    (t.path = null),
                    (t.target = null),
                    t
                  );
                },
              },
              {
                key: "freeEvent",
                value: function (e) {
                  if (e.manager !== this)
                    throw new Error(
                      "It is illegal to free an event not managed by this EventBoundary!",
                    );
                  var t = e.constructor;
                  (this.eventPool.has(t) || this.eventPool.set(t, []),
                    this.eventPool.get(t).push(e));
                },
              },
              {
                key: "_notifyListeners",
                value: function (e, t) {
                  var n = e.currentTarget._events[t];
                  if (n)
                    if ("fn" in n)
                      (n.once &&
                        e.currentTarget.removeListener(t, n.fn, void 0, !0),
                        n.fn.call(n.context, e));
                    else
                      for (
                        var i = 0, r = n.length;
                        i < r && !e.propagationImmediatelyStopped;
                        i++
                      )
                        (n[i].once &&
                          e.currentTarget.removeListener(
                            t,
                            n[i].fn,
                            void 0,
                            !0,
                          ),
                          n[i].fn.call(n[i].context, e));
                },
              },
            ]),
            t && Oe(e.prototype, t),
            n && Oe(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
      function je(e) {
        return (
          (je =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          je(e)
        );
      }
      function De(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function Ie(e, t, n) {
        return (
          (t = Le(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function xe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, Le(i.key), i));
        }
      }
      function Le(e) {
        var t = (function (e, t) {
          if ("object" != je(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != je(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == je(t) ? t : t + "";
      }
      var Be = {
          touchstart: "pointerdown",
          touchend: "pointerup",
          touchendoutside: "pointerupoutside",
          touchmove: "pointermove",
          touchcancel: "pointercancel",
        },
        Ce = (function () {
          function e(t) {
            var n = this;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.supportsTouchEvents = "ontouchstart" in globalThis),
              (this.supportsPointerEvents = !!globalThis.PointerEvent),
              (this.domElement = null),
              (this.resolution = 1),
              (this.renderer = t),
              (this.rootBoundary = new Me(null)),
              V.init(this),
              (this.autoPreventDefault = !0),
              (this._eventsAdded = !1),
              (this._rootPointerEvent = new fe(null)),
              (this._rootWheelEvent = new Pe(null)),
              (this.cursorStyles = { default: "inherit", pointer: "pointer" }),
              (this.features = new Proxy(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? De(Object(n), !0).forEach(function (t) {
                          Ie(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : De(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({}, e.defaultEventFeatures),
                {
                  set: function (e, t, i) {
                    return (
                      "globalMove" === t &&
                        (n.rootBoundary.enableGlobalMoveEvents = i),
                      (e[t] = i),
                      !0
                    );
                  },
                },
              )),
              (this._onPointerDown = this._onPointerDown.bind(this)),
              (this._onPointerMove = this._onPointerMove.bind(this)),
              (this._onPointerUp = this._onPointerUp.bind(this)),
              (this._onPointerOverOut = this._onPointerOverOut.bind(this)),
              (this.onWheel = this.onWheel.bind(this)));
          }
          return (
            (t = e),
            (i = [
              {
                key: "defaultEventMode",
                get: function () {
                  return this._defaultEventMode;
                },
              },
            ]),
            (n = [
              {
                key: "init",
                value: function (t) {
                  var n,
                    i,
                    r = this.renderer,
                    o = r.canvas,
                    s = r.resolution;
                  (this.setTargetElement(o),
                    (this.resolution = s),
                    (e._defaultEventMode =
                      null !== (n = t.eventMode) && void 0 !== n
                        ? n
                        : "passive"),
                    Object.assign(
                      this.features,
                      null !== (i = t.eventFeatures) && void 0 !== i ? i : {},
                    ),
                    (this.rootBoundary.enableGlobalMoveEvents =
                      this.features.globalMove));
                },
              },
              {
                key: "resolutionChange",
                value: function (e) {
                  this.resolution = e;
                },
              },
              {
                key: "destroy",
                value: function () {
                  (V.destroy(),
                    this.setTargetElement(null),
                    (this.renderer = null),
                    (this._currentCursor = null));
                },
              },
              {
                key: "setCursor",
                value: function (e) {
                  e || (e = "default");
                  var t = !0;
                  if (
                    (globalThis.OffscreenCanvas &&
                      this.domElement instanceof OffscreenCanvas &&
                      (t = !1),
                    this._currentCursor !== e)
                  ) {
                    this._currentCursor = e;
                    var n = this.cursorStyles[e];
                    if (n)
                      switch (je(n)) {
                        case "string":
                          t && (this.domElement.style.cursor = n);
                          break;
                        case "function":
                          n(e);
                          break;
                        case "object":
                          t && Object.assign(this.domElement.style, n);
                      }
                    else
                      t &&
                        "string" == typeof e &&
                        !Object.prototype.hasOwnProperty.call(
                          this.cursorStyles,
                          e,
                        ) &&
                        (this.domElement.style.cursor = e);
                  }
                },
              },
              {
                key: "pointer",
                get: function () {
                  return this._rootPointerEvent;
                },
              },
              {
                key: "_onPointerDown",
                value: function (e) {
                  if (this.features.click) {
                    this.rootBoundary.rootTarget =
                      this.renderer.lastObjectRendered;
                    var t = this._normalizeToPointerData(e);
                    this.autoPreventDefault &&
                      t[0].isNormalized &&
                      (e.cancelable || !("cancelable" in e)) &&
                      e.preventDefault();
                    for (var n = 0, i = t.length; n < i; n++) {
                      var r = t[n],
                        o = this._bootstrapEvent(this._rootPointerEvent, r);
                      this.rootBoundary.mapEvent(o);
                    }
                    this.setCursor(this.rootBoundary.cursor);
                  }
                },
              },
              {
                key: "_onPointerMove",
                value: function (e) {
                  if (this.features.move) {
                    ((this.rootBoundary.rootTarget =
                      this.renderer.lastObjectRendered),
                      V.pointerMoved());
                    for (
                      var t = this._normalizeToPointerData(e),
                        n = 0,
                        i = t.length;
                      n < i;
                      n++
                    ) {
                      var r = this._bootstrapEvent(
                        this._rootPointerEvent,
                        t[n],
                      );
                      this.rootBoundary.mapEvent(r);
                    }
                    this.setCursor(this.rootBoundary.cursor);
                  }
                },
              },
              {
                key: "_onPointerUp",
                value: function (e) {
                  if (this.features.click) {
                    this.rootBoundary.rootTarget =
                      this.renderer.lastObjectRendered;
                    var t = e.target;
                    e.composedPath &&
                      e.composedPath().length > 0 &&
                      (t = e.composedPath()[0]);
                    for (
                      var n = t !== this.domElement ? "outside" : "",
                        i = this._normalizeToPointerData(e),
                        r = 0,
                        o = i.length;
                      r < o;
                      r++
                    ) {
                      var s = this._bootstrapEvent(
                        this._rootPointerEvent,
                        i[r],
                      );
                      ((s.type += n), this.rootBoundary.mapEvent(s));
                    }
                    this.setCursor(this.rootBoundary.cursor);
                  }
                },
              },
              {
                key: "_onPointerOverOut",
                value: function (e) {
                  if (this.features.click) {
                    this.rootBoundary.rootTarget =
                      this.renderer.lastObjectRendered;
                    for (
                      var t = this._normalizeToPointerData(e),
                        n = 0,
                        i = t.length;
                      n < i;
                      n++
                    ) {
                      var r = this._bootstrapEvent(
                        this._rootPointerEvent,
                        t[n],
                      );
                      this.rootBoundary.mapEvent(r);
                    }
                    this.setCursor(this.rootBoundary.cursor);
                  }
                },
              },
              {
                key: "onWheel",
                value: function (e) {
                  if (this.features.wheel) {
                    var t = this.normalizeWheelEvent(e);
                    ((this.rootBoundary.rootTarget =
                      this.renderer.lastObjectRendered),
                      this.rootBoundary.mapEvent(t));
                  }
                },
              },
              {
                key: "setTargetElement",
                value: function (e) {
                  (this._removeEvents(),
                    (this.domElement = e),
                    (V.domElement = e),
                    this._addEvents());
                },
              },
              {
                key: "_addEvents",
                value: function () {
                  if (!this._eventsAdded && this.domElement) {
                    V.addTickerListener();
                    var e = this.domElement.style;
                    (e &&
                      (globalThis.navigator.msPointerEnabled
                        ? ((e.msContentZooming = "none"),
                          (e.msTouchAction = "none"))
                        : this.supportsPointerEvents &&
                          (e.touchAction = "none")),
                      this.supportsPointerEvents
                        ? (globalThis.document.addEventListener(
                            "pointermove",
                            this._onPointerMove,
                            !0,
                          ),
                          this.domElement.addEventListener(
                            "pointerdown",
                            this._onPointerDown,
                            !0,
                          ),
                          this.domElement.addEventListener(
                            "pointerleave",
                            this._onPointerOverOut,
                            !0,
                          ),
                          this.domElement.addEventListener(
                            "pointerover",
                            this._onPointerOverOut,
                            !0,
                          ),
                          globalThis.addEventListener(
                            "pointerup",
                            this._onPointerUp,
                            !0,
                          ))
                        : (globalThis.document.addEventListener(
                            "mousemove",
                            this._onPointerMove,
                            !0,
                          ),
                          this.domElement.addEventListener(
                            "mousedown",
                            this._onPointerDown,
                            !0,
                          ),
                          this.domElement.addEventListener(
                            "mouseout",
                            this._onPointerOverOut,
                            !0,
                          ),
                          this.domElement.addEventListener(
                            "mouseover",
                            this._onPointerOverOut,
                            !0,
                          ),
                          globalThis.addEventListener(
                            "mouseup",
                            this._onPointerUp,
                            !0,
                          ),
                          this.supportsTouchEvents &&
                            (this.domElement.addEventListener(
                              "touchstart",
                              this._onPointerDown,
                              !0,
                            ),
                            this.domElement.addEventListener(
                              "touchend",
                              this._onPointerUp,
                              !0,
                            ),
                            this.domElement.addEventListener(
                              "touchmove",
                              this._onPointerMove,
                              !0,
                            ))),
                      this.domElement.addEventListener("wheel", this.onWheel, {
                        passive: !0,
                        capture: !0,
                      }),
                      (this._eventsAdded = !0));
                  }
                },
              },
              {
                key: "_removeEvents",
                value: function () {
                  if (this._eventsAdded && this.domElement) {
                    V.removeTickerListener();
                    var e = this.domElement.style;
                    (e &&
                      (globalThis.navigator.msPointerEnabled
                        ? ((e.msContentZooming = ""), (e.msTouchAction = ""))
                        : this.supportsPointerEvents && (e.touchAction = "")),
                      this.supportsPointerEvents
                        ? (globalThis.document.removeEventListener(
                            "pointermove",
                            this._onPointerMove,
                            !0,
                          ),
                          this.domElement.removeEventListener(
                            "pointerdown",
                            this._onPointerDown,
                            !0,
                          ),
                          this.domElement.removeEventListener(
                            "pointerleave",
                            this._onPointerOverOut,
                            !0,
                          ),
                          this.domElement.removeEventListener(
                            "pointerover",
                            this._onPointerOverOut,
                            !0,
                          ),
                          globalThis.removeEventListener(
                            "pointerup",
                            this._onPointerUp,
                            !0,
                          ))
                        : (globalThis.document.removeEventListener(
                            "mousemove",
                            this._onPointerMove,
                            !0,
                          ),
                          this.domElement.removeEventListener(
                            "mousedown",
                            this._onPointerDown,
                            !0,
                          ),
                          this.domElement.removeEventListener(
                            "mouseout",
                            this._onPointerOverOut,
                            !0,
                          ),
                          this.domElement.removeEventListener(
                            "mouseover",
                            this._onPointerOverOut,
                            !0,
                          ),
                          globalThis.removeEventListener(
                            "mouseup",
                            this._onPointerUp,
                            !0,
                          ),
                          this.supportsTouchEvents &&
                            (this.domElement.removeEventListener(
                              "touchstart",
                              this._onPointerDown,
                              !0,
                            ),
                            this.domElement.removeEventListener(
                              "touchend",
                              this._onPointerUp,
                              !0,
                            ),
                            this.domElement.removeEventListener(
                              "touchmove",
                              this._onPointerMove,
                              !0,
                            ))),
                      this.domElement.removeEventListener(
                        "wheel",
                        this.onWheel,
                        !0,
                      ),
                      (this.domElement = null),
                      (this._eventsAdded = !1));
                  }
                },
              },
              {
                key: "mapPositionToPoint",
                value: function (e, t, n) {
                  var i = this.domElement.isConnected
                      ? this.domElement.getBoundingClientRect()
                      : {
                          x: 0,
                          y: 0,
                          width: this.domElement.width,
                          height: this.domElement.height,
                          left: 0,
                          top: 0,
                        },
                    r = 1 / this.resolution;
                  ((e.x = (t - i.left) * (this.domElement.width / i.width) * r),
                    (e.y =
                      (n - i.top) * (this.domElement.height / i.height) * r));
                },
              },
              {
                key: "_normalizeToPointerData",
                value: function (e) {
                  var t = [];
                  if (this.supportsTouchEvents && e instanceof TouchEvent)
                    for (var n = 0, i = e.changedTouches.length; n < i; n++) {
                      var r = e.changedTouches[n];
                      (void 0 === r.button && (r.button = 0),
                        void 0 === r.buttons && (r.buttons = 1),
                        void 0 === r.isPrimary &&
                          (r.isPrimary =
                            1 === e.touches.length && "touchstart" === e.type),
                        void 0 === r.width && (r.width = r.radiusX || 1),
                        void 0 === r.height && (r.height = r.radiusY || 1),
                        void 0 === r.tiltX && (r.tiltX = 0),
                        void 0 === r.tiltY && (r.tiltY = 0),
                        void 0 === r.pointerType && (r.pointerType = "touch"),
                        void 0 === r.pointerId &&
                          (r.pointerId = r.identifier || 0),
                        void 0 === r.pressure && (r.pressure = r.force || 0.5),
                        void 0 === r.twist && (r.twist = 0),
                        void 0 === r.tangentialPressure &&
                          (r.tangentialPressure = 0),
                        void 0 === r.layerX &&
                          (r.layerX = r.offsetX = r.clientX),
                        void 0 === r.layerY &&
                          (r.layerY = r.offsetY = r.clientY),
                        (r.isNormalized = !0),
                        (r.type = e.type),
                        t.push(r));
                    }
                  else if (
                    !globalThis.MouseEvent ||
                    (e instanceof MouseEvent &&
                      !(
                        this.supportsPointerEvents &&
                        e instanceof globalThis.PointerEvent
                      ))
                  ) {
                    var o = e;
                    (void 0 === o.isPrimary && (o.isPrimary = !0),
                      void 0 === o.width && (o.width = 1),
                      void 0 === o.height && (o.height = 1),
                      void 0 === o.tiltX && (o.tiltX = 0),
                      void 0 === o.tiltY && (o.tiltY = 0),
                      void 0 === o.pointerType && (o.pointerType = "mouse"),
                      void 0 === o.pointerId && (o.pointerId = 1),
                      void 0 === o.pressure && (o.pressure = 0.5),
                      void 0 === o.twist && (o.twist = 0),
                      void 0 === o.tangentialPressure &&
                        (o.tangentialPressure = 0),
                      (o.isNormalized = !0),
                      t.push(o));
                  } else t.push(e);
                  return t;
                },
              },
              {
                key: "normalizeWheelEvent",
                value: function (e) {
                  var t = this._rootWheelEvent;
                  return (
                    this._transferMouseData(t, e),
                    (t.deltaX = e.deltaX),
                    (t.deltaY = e.deltaY),
                    (t.deltaZ = e.deltaZ),
                    (t.deltaMode = e.deltaMode),
                    this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
                    t.global.copyFrom(t.screen),
                    t.offset.copyFrom(t.screen),
                    (t.nativeEvent = e),
                    (t.type = e.type),
                    t
                  );
                },
              },
              {
                key: "_bootstrapEvent",
                value: function (e, t) {
                  return (
                    (e.originalEvent = null),
                    (e.nativeEvent = t),
                    (e.pointerId = t.pointerId),
                    (e.width = t.width),
                    (e.height = t.height),
                    (e.isPrimary = t.isPrimary),
                    (e.pointerType = t.pointerType),
                    (e.pressure = t.pressure),
                    (e.tangentialPressure = t.tangentialPressure),
                    (e.tiltX = t.tiltX),
                    (e.tiltY = t.tiltY),
                    (e.twist = t.twist),
                    this._transferMouseData(e, t),
                    this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
                    e.global.copyFrom(e.screen),
                    e.offset.copyFrom(e.screen),
                    (e.isTrusted = t.isTrusted),
                    "pointerleave" === e.type && (e.type = "pointerout"),
                    e.type.startsWith("mouse") &&
                      (e.type = e.type.replace("mouse", "pointer")),
                    e.type.startsWith("touch") &&
                      (e.type = Be[e.type] || e.type),
                    e
                  );
                },
              },
              {
                key: "_transferMouseData",
                value: function (e, t) {
                  ((e.isTrusted = t.isTrusted),
                    (e.srcElement = t.srcElement),
                    (e.timeStamp = performance.now()),
                    (e.type = t.type),
                    (e.altKey = t.altKey),
                    (e.button = t.button),
                    (e.buttons = t.buttons),
                    (e.client.x = t.clientX),
                    (e.client.y = t.clientY),
                    (e.ctrlKey = t.ctrlKey),
                    (e.metaKey = t.metaKey),
                    (e.movement.x = t.movementX),
                    (e.movement.y = t.movementY),
                    (e.page.x = t.pageX),
                    (e.page.y = t.pageY),
                    (e.relatedTarget = null),
                    (e.shiftKey = t.shiftKey));
                },
              },
            ]) && xe(t.prototype, n),
            i && xe(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n, i;
        })();
      ((Ce.extension = {
        name: "events",
        type: [i.Ag.WebGLSystem, i.Ag.CanvasSystem, i.Ag.WebGPUSystem],
        priority: -1,
      }),
        (Ce.defaultEventFeatures = {
          move: !0,
          globalMove: !0,
          click: !0,
          wheel: !0,
        }));
      var Re = Ce;
      function Ue(e) {
        return (
          (Ue =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ue(e)
        );
      }
      var Xe = {
        onclick: null,
        onmousedown: null,
        onmouseenter: null,
        onmouseleave: null,
        onmousemove: null,
        onglobalmousemove: null,
        onmouseout: null,
        onmouseover: null,
        onmouseup: null,
        onmouseupoutside: null,
        onpointercancel: null,
        onpointerdown: null,
        onpointerenter: null,
        onpointerleave: null,
        onpointermove: null,
        onglobalpointermove: null,
        onpointerout: null,
        onpointerover: null,
        onpointertap: null,
        onpointerup: null,
        onpointerupoutside: null,
        onrightclick: null,
        onrightdown: null,
        onrightup: null,
        onrightupoutside: null,
        ontap: null,
        ontouchcancel: null,
        ontouchend: null,
        ontouchendoutside: null,
        ontouchmove: null,
        onglobaltouchmove: null,
        ontouchstart: null,
        onwheel: null,
        get interactive() {
          return "dynamic" === this.eventMode || "static" === this.eventMode;
        },
        set interactive(e) {
          this.eventMode = e ? "static" : "passive";
        },
        _internalEventMode: void 0,
        get eventMode() {
          var e;
          return null !== (e = this._internalEventMode) && void 0 !== e
            ? e
            : Re.defaultEventMode;
        },
        set eventMode(e) {
          this._internalEventMode = e;
        },
        isInteractive: function () {
          return "static" === this.eventMode || "dynamic" === this.eventMode;
        },
        interactiveChildren: !0,
        hitArea: null,
        addEventListener: function (e, t, n) {
          var i =
              ("boolean" == typeof n && n) || ("object" === Ue(n) && n.capture),
            r = "object" === Ue(n) ? n.signal : void 0,
            o = "object" === Ue(n) && !0 === n.once,
            s = "function" == typeof t ? void 0 : t;
          e = i ? "".concat(e, "capture") : e;
          var a = "function" == typeof t ? t : t.handleEvent,
            l = this;
          (r &&
            r.addEventListener("abort", function () {
              l.off(e, a, s);
            }),
            o ? l.once(e, a, s) : l.on(e, a, s));
        },
        removeEventListener: function (e, t, n) {
          var i = "function" == typeof t ? void 0 : t;
          ((e =
            ("boolean" == typeof n && n) || ("object" === Ue(n) && n.capture)
              ? "".concat(e, "capture")
              : e),
            (t = "function" == typeof t ? t : t.handleEvent),
            this.off(e, t, i));
        },
        dispatchEvent: function (e) {
          if (!(e instanceof b))
            throw new Error(
              "Container cannot propagate events outside of the Federated Events API",
            );
          return (
            (e.defaultPrevented = !1),
            (e.path = null),
            (e.target = this),
            e.manager.dispatchEvent(e),
            !e.defaultPrevented
          );
        },
      };
      function Ne(e) {
        return (
          (Ne =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ne(e)
        );
      }
      function Fe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, Ye(i.key), i));
        }
      }
      function Ye(e) {
        var t = (function (e, t) {
          if ("object" != Ne(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != Ne(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ne(t) ? t : t + "";
      }
      (i.XO.add(Re), i.XO.mixin(r.mc, Xe));
      var Ge = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._attachedDomElements = []),
              (this._renderer = t),
              this._renderer.runners.postrender.add(this),
              this._renderer.runners.init.add(this),
              (this._domElement = document.createElement("div")),
              (this._domElement.style.position = "absolute"),
              (this._domElement.style.top = "0"),
              (this._domElement.style.left = "0"),
              (this._domElement.style.pointerEvents = "none"),
              (this._domElement.style.zIndex = "1000"));
          }),
          (t = [
            {
              key: "init",
              value: function () {
                this._canvasObserver = new v({
                  domElement: this._domElement,
                  renderer: this._renderer,
                });
              },
            },
            {
              key: "addRenderable",
              value: function (e, t) {
                this._attachedDomElements.includes(e) ||
                  this._attachedDomElements.push(e);
              },
            },
            { key: "updateRenderable", value: function (e) {} },
            {
              key: "validateRenderable",
              value: function (e) {
                return !0;
              },
            },
            {
              key: "postrender",
              value: function () {
                var e = this._attachedDomElements;
                if (0 !== e.length) {
                  this._canvasObserver.ensureAttached();
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      i = n.element;
                    if (!n.parent || n.globalDisplayStatus < 7)
                      (null == i || i.remove(), e.splice(t, 1), t--);
                    else {
                      this._domElement.contains(i) ||
                        ((i.style.position = "absolute"),
                        (i.style.pointerEvents = "auto"),
                        this._domElement.appendChild(i));
                      var r = n.worldTransform,
                        o = n._anchor,
                        s = n.width * o.x,
                        a = n.height * o.y;
                      ((i.style.transformOrigin = ""
                        .concat(s, "px ")
                        .concat(a, "px")),
                        (i.style.transform = "matrix("
                          .concat(r.a, ", ")
                          .concat(r.b, ", ")
                          .concat(r.c, ", ")
                          .concat(r.d, ", ")
                          .concat(r.tx - s, ", ")
                          .concat(r.ty - a, ")")),
                        (i.style.opacity = n.groupAlpha.toString()));
                    }
                  }
                } else this._domElement.remove();
              },
            },
            {
              key: "destroy",
              value: function () {
                this._renderer.runners.postrender.remove(this);
                for (var e = 0; e < this._attachedDomElements.length; e++) {
                  var t;
                  null === (t = this._attachedDomElements[e].element) ||
                    void 0 === t ||
                    t.remove();
                }
                ((this._attachedDomElements.length = 0),
                  this._domElement.remove(),
                  this._canvasObserver.destroy(),
                  (this._renderer = null));
              },
            },
          ]) && Fe(e.prototype, t),
          n && Fe(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, n;
      })();
      ((Ge.extension = {
        type: [i.Ag.WebGLPipes, i.Ag.WebGPUPipes, i.Ag.CanvasPipes],
        name: "dom",
      }),
        i.XO.add(Ge));
      (n(8925),
        n(7464),
        n(4418),
        n(8119),
        n(869),
        n(1066),
        n(2424),
        n(7602),
        n(2310),
        n(2384),
        n(5189));
    },
  },
]);
