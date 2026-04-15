/*! For license information please see 777.js.LICENSE.txt */
"use strict";
(self.webpackChunkHM_Starter = self.webpackChunkHM_Starter || []).push([
  [777],
  {
    150: function (e, t, r) {
      r.d(t, {
        R: function () {
          return n;
        },
        m: function () {
          return o;
        },
      });
      var n = {
          name: "texture-bit",
          vertex: {
            header:
              "\n\n        struct TextureUniforms {\n            uTextureMatrix:mat3x3<f32>,\n        }\n\n        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;\n        ",
            main: "\n            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;\n        ",
          },
          fragment: {
            header:
              "\n            @group(2) @binding(0) var uTexture: texture_2d<f32>;\n            @group(2) @binding(1) var uSampler: sampler;\n\n\n        ",
            main: "\n            outColor = textureSample(uTexture, uSampler, vUV);\n        ",
          },
        },
        o = {
          name: "texture-bit",
          vertex: {
            header: "\n            uniform mat3 uTextureMatrix;\n        ",
            main: "\n            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;\n        ",
          },
          fragment: {
            header: "\n        uniform sampler2D uTexture;\n\n\n        ",
            main: "\n            outColor = texture(uTexture, vUV);\n        ",
          },
        };
    },
    867: function (e, t, r) {
      function n(e, t, r) {
        var n = ((e >> 24) & 255) / 255;
        ((t[r++] = ((255 & e) / 255) * n),
          (t[r++] = (((e >> 8) & 255) / 255) * n),
          (t[r++] = (((e >> 16) & 255) / 255) * n),
          (t[r++] = n));
      }
      r.d(t, {
        V: function () {
          return n;
        },
      });
    },
    2082: function (e, t, r) {
      r.d(t, {
        l: function () {
          return y;
        },
      });
      var n = r(410),
        o = r(861),
        i = r(6932);
      var a = r(8244),
        u = r(7967),
        s = r(4822),
        c = r(3760),
        l = r(3822);
      var f = r(7546);
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
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, v(n.key), n));
        }
      }
      function v(e) {
        var t = (function (e, t) {
          if ("object" != d(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != d(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == d(t) ? t : t + "";
      }
      var y = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.rootViewPort = new o.M()),
              (this.viewport = new o.M()),
              (this.onRenderTargetChange = new a.C("onRenderTargetChange")),
              (this.projectionMatrix = new n.u()),
              (this.defaultClearColor = [0, 0, 0, 0]),
              (this._renderSurfaceToRenderTargetHash = new Map()),
              (this._gpuRenderTargetHash = Object.create(null)),
              (this._renderTargetStack = []),
              (this._renderer = t),
              t.renderableGC.addManagedHash(this, "_gpuRenderTargetHash"));
          }),
          (t = [
            {
              key: "finishRenderPass",
              value: function () {
                this.adaptor.finishRenderPass(this.renderTarget);
              },
            },
            {
              key: "renderStart",
              value: function (e) {
                var t,
                  r,
                  n,
                  o,
                  i = e.target,
                  a = e.clear,
                  u = e.clearColor,
                  s = e.frame;
                ((this._renderTargetStack.length = 0),
                  this.push(i, a, u, s),
                  this.rootViewPort.copyFrom(this.viewport),
                  (this.rootRenderTarget = this.renderTarget),
                  (this.renderingToScreen =
                    ((n = this.rootRenderTarget),
                    (o = n.colorTexture.source.resource),
                    globalThis.HTMLCanvasElement &&
                      o instanceof HTMLCanvasElement &&
                      document.body.contains(o))),
                  null === (t = (r = this.adaptor).prerender) ||
                    void 0 === t ||
                    t.call(r, this.rootRenderTarget));
              },
            },
            {
              key: "postrender",
              value: function () {
                var e, t;
                null === (e = (t = this.adaptor).postrender) ||
                  void 0 === e ||
                  e.call(t, this.rootRenderTarget);
              },
            },
            {
              key: "bind",
              value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = arguments.length > 2 ? arguments[2] : void 0,
                  n = arguments.length > 3 ? arguments[3] : void 0,
                  o = this.getRenderTarget(e),
                  i = this.renderTarget !== o;
                ((this.renderTarget = o), (this.renderSurface = e));
                var a = this.getGpuRenderTarget(o);
                (o.pixelWidth === a.width && o.pixelHeight === a.height) ||
                  (this.adaptor.resizeGpuRenderTarget(o),
                  (a.width = o.pixelWidth),
                  (a.height = o.pixelHeight));
                var u,
                  s,
                  l,
                  f,
                  d,
                  p,
                  v,
                  y = o.colorTexture,
                  h = this.viewport,
                  b = y.pixelWidth,
                  m = y.pixelHeight;
                if ((!n && e instanceof c.g && (n = e.frame), n)) {
                  var g = y._resolution;
                  ((h.x = (n.x * g + 0.5) | 0),
                    (h.y = (n.y * g + 0.5) | 0),
                    (h.width = (n.width * g + 0.5) | 0),
                    (h.height = (n.height * g + 0.5) | 0));
                } else ((h.x = 0), (h.y = 0), (h.width = b), (h.height = m));
                return (
                  (u = this.projectionMatrix),
                  (s = 0),
                  (l = 0),
                  (f = h.width / y.resolution),
                  (d = h.height / y.resolution),
                  (p = !o.isRoot),
                  (v = p ? 1 : -1),
                  u.identity(),
                  (u.a = (1 / f) * 2),
                  (u.d = v * ((1 / d) * 2)),
                  (u.tx = -1 - s * u.a),
                  (u.ty = -v - l * u.d),
                  this.adaptor.startRenderPass(o, t, r, h),
                  i && this.onRenderTargetChange.emit(o),
                  o
                );
              },
            },
            {
              key: "clear",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : i.u.ALL,
                  r = arguments.length > 2 ? arguments[2] : void 0;
                t &&
                  (e && (e = this.getRenderTarget(e)),
                  this.adaptor.clear(
                    e || this.renderTarget,
                    t,
                    r,
                    this.viewport,
                  ));
              },
            },
            {
              key: "contextChange",
              value: function () {
                this._gpuRenderTargetHash = Object.create(null);
              },
            },
            {
              key: "push",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : i.u.ALL,
                  r = arguments.length > 2 ? arguments[2] : void 0,
                  n = arguments.length > 3 ? arguments[3] : void 0,
                  o = this.bind(e, t, r, n);
                return (
                  this._renderTargetStack.push({ renderTarget: o, frame: n }),
                  o
                );
              },
            },
            {
              key: "pop",
              value: function () {
                this._renderTargetStack.pop();
                var e =
                  this._renderTargetStack[this._renderTargetStack.length - 1];
                this.bind(e.renderTarget, !1, null, e.frame);
              },
            },
            {
              key: "getRenderTarget",
              value: function (e) {
                var t;
                return (
                  e.isTexture && (e = e.source),
                  null !== (t = this._renderSurfaceToRenderTargetHash.get(e)) &&
                  void 0 !== t
                    ? t
                    : this._initRenderTarget(e)
                );
              },
            },
            {
              key: "copyToTexture",
              value: function (e, t, r, n, o) {
                (r.x < 0 && ((n.width += r.x), (o.x -= r.x), (r.x = 0)),
                  r.y < 0 && ((n.height += r.y), (o.y -= r.y), (r.y = 0)));
                var i = e.pixelWidth,
                  a = e.pixelHeight;
                return (
                  (n.width = Math.min(n.width, i - r.x)),
                  (n.height = Math.min(n.height, a - r.y)),
                  this.adaptor.copyToTexture(e, t, r, n, o)
                );
              },
            },
            {
              key: "ensureDepthStencil",
              value: function () {
                this.renderTarget.stencil ||
                  ((this.renderTarget.stencil = !0),
                  this.adaptor.startRenderPass(
                    this.renderTarget,
                    !1,
                    null,
                    this.viewport,
                  ));
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this._renderer = null),
                  this._renderSurfaceToRenderTargetHash.forEach(
                    function (e, t) {
                      e !== t && e.destroy();
                    },
                  ),
                  this._renderSurfaceToRenderTargetHash.clear(),
                  (this._gpuRenderTargetHash = Object.create(null)));
              },
            },
            {
              key: "_initRenderTarget",
              value: function (e) {
                var t = this,
                  r = null;
                return (
                  u.q.test(e) && (e = (0, l.c)(e).source),
                  e instanceof f.O
                    ? (r = e)
                    : e instanceof s.v &&
                      ((r = new f.O({ colorTextures: [e] })),
                      e.source instanceof u.q && (r.isRoot = !0),
                      e.once("destroy", function () {
                        (r.destroy(),
                          t._renderSurfaceToRenderTargetHash.delete(e));
                        var n = t._gpuRenderTargetHash[r.uid];
                        n &&
                          ((t._gpuRenderTargetHash[r.uid] = null),
                          t.adaptor.destroyGpuRenderTarget(n));
                      })),
                  this._renderSurfaceToRenderTargetHash.set(e, r),
                  r
                );
              },
            },
            {
              key: "getGpuRenderTarget",
              value: function (e) {
                return (
                  this._gpuRenderTargetHash[e.uid] ||
                  (this._gpuRenderTargetHash[e.uid] =
                    this.adaptor.initGpuRenderTarget(e))
                );
              },
            },
            {
              key: "resetState",
              value: function () {
                ((this.renderTarget = null), (this.renderSurface = null));
              },
            },
          ]),
          t && p(e.prototype, t),
          r && p(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
    },
    3822: function (e, t, r) {
      r.d(t, {
        c: function () {
          return f;
        },
      });
      var n = r(7948),
        o = r(7967),
        i = r(3760);
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
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function c(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != a(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == a(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var l = new Map();
      function f(e, t) {
        if (!l.has(e)) {
          var r = new i.g({ source: new o.q(s({ resource: e }, t)) }),
            n = function () {
              l.get(e) === r && l.delete(e);
            };
          (r.once("destroy", n), r.source.once("destroy", n), l.set(e, r));
        }
        return l.get(e);
      }
      n.L.register(l);
    },
    3863: function (e, t, r) {
      r.d(t, {
        f: function () {
          return Mr;
        },
        i: function () {
          return Cr;
        },
      });
      var n = r(6244);
      function o(e) {
        return (
          (o =
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
          o(e)
        );
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, a(n.key), n));
        }
      }
      function a(e) {
        var t = (function (e, t) {
          if ("object" != o(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == o(t) ? t : t + "";
      }
      var u = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._renderer = t));
          }),
          (t = [
            { key: "updateRenderable", value: function () {} },
            { key: "destroyRenderable", value: function () {} },
            {
              key: "validateRenderable",
              value: function () {
                return !1;
              },
            },
            {
              key: "addRenderable",
              value: function (e, t) {
                (this._renderer.renderPipes.batch.break(t), t.add(e));
              },
            },
            {
              key: "execute",
              value: function (e) {
                e.isRenderable && e.render(this._renderer);
              },
            },
            {
              key: "destroy",
              value: function () {
                this._renderer = null;
              },
            },
          ]) && i(e.prototype, t),
          r && i(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      u.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "customRender",
      };
      var s = r(410),
        c = r(2005),
        l = r(9627);
      function f(e, t) {
        for (
          var r = e.instructionSet, n = r.instructions, o = 0;
          o < r.instructionSize;
          o++
        ) {
          var i = n[o];
          t[i.renderPipeId].execute(i);
        }
      }
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
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, v(n.key), n));
        }
      }
      function v(e) {
        var t = (function (e, t) {
          if ("object" != d(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != d(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == d(t) ? t : t + "";
      }
      var y = new s.u(),
        h = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._renderer = t));
            }),
            (t = [
              {
                key: "addRenderGroup",
                value: function (e, t) {
                  e.isCachedAsTexture
                    ? this._addRenderableCacheAsTexture(e, t)
                    : this._addRenderableDirect(e, t);
                },
              },
              {
                key: "execute",
                value: function (e) {
                  e.isRenderable &&
                    (e.isCachedAsTexture
                      ? this._executeCacheAsTexture(e)
                      : this._executeDirect(e));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._renderer = null;
                },
              },
              {
                key: "_addRenderableDirect",
                value: function (e, t) {
                  (this._renderer.renderPipes.batch.break(t),
                    e._batchableRenderGroup &&
                      (c.Z.return(e._batchableRenderGroup),
                      (e._batchableRenderGroup = null)),
                    t.add(e));
                },
              },
              {
                key: "_addRenderableCacheAsTexture",
                value: function (e, t) {
                  var r,
                    n =
                      null !== (r = e._batchableRenderGroup) && void 0 !== r
                        ? r
                        : (e._batchableRenderGroup = c.Z.get(l.K));
                  ((n.renderable = e.root),
                    (n.transform = e.root.relativeGroupTransform),
                    (n.texture = e.texture),
                    (n.bounds = e._textureBounds),
                    t.add(e),
                    this._renderer.renderPipes.blendMode.pushBlendMode(
                      e,
                      e.root.groupBlendMode,
                      t,
                    ),
                    this._renderer.renderPipes.batch.addToBatch(n, t),
                    this._renderer.renderPipes.blendMode.popBlendMode(t));
                },
              },
              {
                key: "_executeCacheAsTexture",
                value: function (e) {
                  if (e.textureNeedsUpdate) {
                    e.textureNeedsUpdate = !1;
                    var t = y
                      .identity()
                      .translate(-e._textureBounds.x, -e._textureBounds.y);
                    (this._renderer.renderTarget.push(
                      e.texture,
                      !0,
                      null,
                      e.texture.frame,
                    ),
                      this._renderer.globalUniforms.push({
                        worldTransformMatrix: t,
                        worldColor: 4294967295,
                        offset: { x: 0, y: 0 },
                      }),
                      f(e, this._renderer.renderPipes),
                      this._renderer.renderTarget.finishRenderPass(),
                      this._renderer.renderTarget.pop(),
                      this._renderer.globalUniforms.pop());
                  }
                  (e._batchableRenderGroup._batcher.updateElement(
                    e._batchableRenderGroup,
                  ),
                    e._batchableRenderGroup._batcher.geometry.buffers[0].update());
                },
              },
              {
                key: "_executeDirect",
                value: function (e) {
                  (this._renderer.globalUniforms.push({
                    worldTransformMatrix: e.inverseParentTextureTransform,
                    worldColor: e.worldColorAlpha,
                  }),
                    f(e, this._renderer.renderPipes),
                    this._renderer.globalUniforms.pop());
                },
              },
            ]) && p(e.prototype, t),
            r && p(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      h.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "renderGroup",
      };
      var b = r(8432),
        m = r(6437),
        g = r(5595);
      function _(e, t) {
        t || (t = 0);
        for (var r = t; r < e.length && e[r]; r++) e[r] = null;
      }
      var w = r(367),
        k = r(392),
        x = new w.mc(),
        O = w.fR | w.ig | w.u;
      function S(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(function (e) {
          var t,
            r = e.root;
          if (e.renderGroupParent) {
            var n = e.renderGroupParent;
            (e.worldTransform.appendFrom(
              r.relativeGroupTransform,
              n.worldTransform,
            ),
              (e.worldColor = (0, k.j)(r.groupColor, n.worldColor)),
              (t = r.groupAlpha * n.worldAlpha));
          } else
            (e.worldTransform.copyFrom(r.localTransform),
              (e.worldColor = r.localColor),
              (t = r.localAlpha));
          ((t = t < 0 ? 0 : t > 1 ? 1 : t),
            (e.worldAlpha = t),
            (e.worldColorAlpha = e.worldColor + ((255 * t) << 24)));
        })(e);
        var r = e.childrenToUpdate,
          n = e.updateTick++;
        for (var o in r) {
          for (
            var i = Number(o), a = r[o], u = a.list, s = a.index, c = 0;
            c < s;
            c++
          ) {
            var l = u[c];
            l.parentRenderGroup === e &&
              l.relativeRenderGroupDepth === i &&
              P(l, n, 0);
          }
          (_(u, s), (a.index = 0));
        }
        if (t)
          for (var f = 0; f < e.renderGroupChildren.length; f++)
            S(e.renderGroupChildren[f], t);
      }
      function P(e, t, r) {
        if (t !== e.updateTick) {
          ((e.updateTick = t), (e.didChange = !1));
          var n = e.localTransform;
          e.updateLocalTransform();
          var o = e.parent;
          if (
            (o && !o.renderGroup
              ? ((r |= e._updateFlags),
                e.relativeGroupTransform.appendFrom(
                  n,
                  o.relativeGroupTransform,
                ),
                r & O && T(e, o, r))
              : ((r = e._updateFlags),
                e.relativeGroupTransform.copyFrom(n),
                r & O && T(e, x, r)),
            !e.renderGroup)
          ) {
            for (var i = e.children, a = i.length, u = 0; u < a; u++)
              P(i[u], t, r);
            var s = e.parentRenderGroup,
              c = e;
            c.renderPipeId && !s.structureDidChange && s.updateRenderable(c);
          }
        }
      }
      function T(e, t, r) {
        if (r & w.ig) {
          e.groupColor = (0, k.j)(e.localColor, t.groupColor);
          var n = e.localAlpha * t.groupAlpha;
          ((n = n < 0 ? 0 : n > 1 ? 1 : n),
            (e.groupAlpha = n),
            (e.groupColorAlpha = e.groupColor + ((255 * n) << 24)));
        }
        (r & w.u &&
          (e.groupBlendMode =
            "inherit" === e.localBlendMode
              ? t.groupBlendMode
              : e.localBlendMode),
          r & w.fR &&
            (e.globalDisplayStatus =
              e.localDisplayStatus & t.globalDisplayStatus),
          (e._updateFlags = 0));
      }
      function j(e) {
        return (
          (j =
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
          j(e)
        );
      }
      function C(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, M(n.key), n));
        }
      }
      function M(e) {
        var t = (function (e, t) {
          if ("object" != j(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != j(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == j(t) ? t : t + "";
      }
      var G = new s.u(),
        E = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._renderer = t));
            }),
            (t = [
              {
                key: "render",
                value: function (e) {
                  var t = e.container,
                    r = e.transform,
                    n = t.parent,
                    o = t.renderGroup.renderGroupParent;
                  ((t.parent = null), (t.renderGroup.renderGroupParent = null));
                  var i = this._renderer,
                    a = G;
                  r &&
                    (a.copyFrom(t.renderGroup.localTransform),
                    t.renderGroup.localTransform.copyFrom(r));
                  var u = i.renderPipes;
                  (this._updateCachedRenderGroups(t.renderGroup, null),
                    this._updateRenderGroups(t.renderGroup),
                    i.globalUniforms.start({
                      worldTransformMatrix: r
                        ? t.renderGroup.localTransform
                        : t.renderGroup.worldTransform,
                      worldColor: t.renderGroup.worldColorAlpha,
                    }),
                    f(t.renderGroup, u),
                    u.uniformBatch && u.uniformBatch.renderEnd(),
                    r && t.renderGroup.localTransform.copyFrom(a),
                    (t.parent = n),
                    (t.renderGroup.renderGroupParent = o));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._renderer = null;
                },
              },
              {
                key: "_updateCachedRenderGroups",
                value: function (e, t) {
                  if (
                    ((e._parentCacheAsTextureRenderGroup = t),
                    e.isCachedAsTexture)
                  ) {
                    if (!e.textureNeedsUpdate) return;
                    t = e;
                  }
                  for (var r = e.renderGroupChildren.length - 1; r >= 0; r--)
                    this._updateCachedRenderGroups(e.renderGroupChildren[r], t);
                  if ((e.invalidateMatrices(), e.isCachedAsTexture)) {
                    if (e.textureNeedsUpdate) {
                      var n,
                        o,
                        i = e.root.getLocalBounds();
                      i.ceil();
                      var a = e.texture;
                      e.texture && b.W.returnTexture(e.texture, !0);
                      var u = this._renderer,
                        s = e.textureOptions.resolution || u.view.resolution,
                        c =
                          null !== (n = e.textureOptions.antialias) &&
                          void 0 !== n
                            ? n
                            : u.view.antialias,
                        l =
                          null !== (o = e.textureOptions.scaleMode) &&
                          void 0 !== o
                            ? o
                            : "linear",
                        f = b.W.getOptimalTexture(i.width, i.height, s, c);
                      ((f._source.style = new m.n({ scaleMode: l })),
                        (e.texture = f),
                        e._textureBounds || (e._textureBounds = new g.c()),
                        e._textureBounds.copyFrom(i),
                        a !== e.texture &&
                          e.renderGroupParent &&
                          (e.renderGroupParent.structureDidChange = !0));
                    }
                  } else
                    e.texture &&
                      (b.W.returnTexture(e.texture, !0), (e.texture = null));
                },
              },
              {
                key: "_updateRenderGroups",
                value: function (e) {
                  var t = this._renderer,
                    r = t.renderPipes;
                  if (
                    (e.runOnRender(t),
                    (e.instructionSet.renderPipes = r),
                    e.structureDidChange
                      ? _(e.childrenRenderablesToUpdate.list, 0)
                      : (function (e, t) {
                          for (
                            var r = e.childrenRenderablesToUpdate.list,
                              n = !1,
                              o = 0;
                            o < e.childrenRenderablesToUpdate.index;
                            o++
                          ) {
                            var i = r[o];
                            if ((n = t[i.renderPipeId].validateRenderable(i)))
                              break;
                          }
                          e.structureDidChange = n;
                        })(e, r),
                    S(e),
                    e.structureDidChange
                      ? ((e.structureDidChange = !1),
                        this._buildInstructions(e, t))
                      : this._updateRenderables(e),
                    (e.childrenRenderablesToUpdate.index = 0),
                    t.renderPipes.batch.upload(e.instructionSet),
                    !e.isCachedAsTexture || e.textureNeedsUpdate)
                  )
                    for (var n = 0; n < e.renderGroupChildren.length; n++)
                      this._updateRenderGroups(e.renderGroupChildren[n]);
                },
              },
              {
                key: "_updateRenderables",
                value: function (e) {
                  for (
                    var t = e.childrenRenderablesToUpdate,
                      r = t.list,
                      n = t.index,
                      o = 0;
                    o < n;
                    o++
                  ) {
                    var i = r[o];
                    i.didViewUpdate && e.updateRenderable(i);
                  }
                  _(r, n);
                },
              },
              {
                key: "_buildInstructions",
                value: function (e, t) {
                  var r = e.root,
                    n = e.instructionSet;
                  n.reset();
                  var o = t.renderPipes ? t : t.batch.renderer,
                    i = o.renderPipes;
                  (i.batch.buildStart(n),
                    i.blendMode.buildStart(),
                    i.colorMask.buildStart(),
                    r.sortableChildren && r.sortChildren(),
                    r.collectRenderablesWithEffects(n, o, null),
                    i.batch.buildEnd(n),
                    i.blendMode.buildEnd(n));
                },
              },
            ]) && C(e.prototype, t),
            r && C(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      function R(e) {
        return (
          (R =
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
          R(e)
        );
      }
      function A(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, B(n.key), n));
        }
      }
      function B(e) {
        var t = (function (e, t) {
          if ("object" != R(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != R(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == R(t) ? t : t + "";
      }
      E.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "renderGroup",
      };
      var U = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "addRenderable",
              value: function (e, t) {
                var r = this._getGpuSprite(e);
                (e.didViewUpdate && this._updateBatchableSprite(e, r),
                  this._renderer.renderPipes.batch.addToBatch(r, t));
              },
            },
            {
              key: "updateRenderable",
              value: function (e) {
                var t = this._getGpuSprite(e);
                (e.didViewUpdate && this._updateBatchableSprite(e, t),
                  t._batcher.updateElement(t));
              },
            },
            {
              key: "validateRenderable",
              value: function (e) {
                var t = this._getGpuSprite(e);
                return !t._batcher.checkAndUpdateTexture(t, e._texture);
              },
            },
            {
              key: "_updateBatchableSprite",
              value: function (e, t) {
                ((t.bounds = e.visualBounds), (t.texture = e._texture));
              },
            },
            {
              key: "_getGpuSprite",
              value: function (e) {
                return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
              },
            },
            {
              key: "_initGPUSprite",
              value: function (e) {
                var t = new l.K();
                return (
                  (t.renderable = e),
                  (t.transform = e.groupTransform),
                  (t.texture = e._texture),
                  (t.bounds = e.visualBounds),
                  (t.roundPixels =
                    this._renderer._roundPixels | e._roundPixels),
                  (e._gpuData[this._renderer.uid] = t),
                  t
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                this._renderer = null;
              },
            },
          ]) && A(e.prototype, t),
          r && A(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      U.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "sprite",
      };
      var D = r(3948),
        I = r(5510),
        F = r(4210);
      function z(e) {
        return (
          (z =
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
          z(e)
        );
      }
      function W(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, N(n.key), n));
        }
      }
      function N(e) {
        var t = (function (e, t) {
          if ("object" != z(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == z(t) ? t : t + "";
      }
      var H = (function () {
        function e(t, r) {
          var n, o;
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.state = I.U.for2d()),
            (this._batchersByInstructionSet = Object.create(null)),
            (this._activeBatches = Object.create(null)),
            (this.renderer = t),
            (this._adaptor = r),
            null === (n = (o = this._adaptor).init) ||
              void 0 === n ||
              n.call(o, this));
        }
        return (
          (t = e),
          (n = [
            {
              key: "getBatcher",
              value: function (e) {
                return new this._availableBatchers[e]();
              },
            },
          ]),
          (r = [
            {
              key: "buildStart",
              value: function (e) {
                var t = this._batchersByInstructionSet[e.uid];
                for (var r in (t ||
                  (t = this._batchersByInstructionSet[e.uid] =
                    Object.create(null)).default ||
                  (t.default = new F.J({
                    maxTextures: this.renderer.limits.maxBatchableTextures,
                  })),
                (this._activeBatches = t),
                (this._activeBatch = this._activeBatches.default),
                this._activeBatches))
                  this._activeBatches[r].begin();
              },
            },
            {
              key: "addToBatch",
              value: function (t, r) {
                if (this._activeBatch.name !== t.batcherName) {
                  this._activeBatch.break(r);
                  var n = this._activeBatches[t.batcherName];
                  (n ||
                    (n = this._activeBatches[t.batcherName] =
                      e.getBatcher(t.batcherName)).begin(),
                    (this._activeBatch = n));
                }
                this._activeBatch.add(t);
              },
            },
            {
              key: "break",
              value: function (e) {
                this._activeBatch.break(e);
              },
            },
            {
              key: "buildEnd",
              value: function (e) {
                this._activeBatch.break(e);
                var t = this._activeBatches;
                for (var r in t) {
                  var n = t[r],
                    o = n.geometry;
                  (o.indexBuffer.setDataWithSize(
                    n.indexBuffer,
                    n.indexSize,
                    !0,
                  ),
                    o.buffers[0].setDataWithSize(
                      n.attributeBuffer.float32View,
                      n.attributeSize,
                      !1,
                    ));
                }
              },
            },
            {
              key: "upload",
              value: function (e) {
                var t = this._batchersByInstructionSet[e.uid];
                for (var r in t) {
                  var n = t[r],
                    o = n.geometry;
                  n.dirty &&
                    ((n.dirty = !1), o.buffers[0].update(4 * n.attributeSize));
                }
              },
            },
            {
              key: "execute",
              value: function (e) {
                if ("startBatch" === e.action) {
                  var t = e.batcher,
                    r = t.geometry,
                    n = t.shader;
                  this._adaptor.start(this, r, n);
                }
                this._adaptor.execute(this, e);
              },
            },
            {
              key: "destroy",
              value: function () {
                for (var e in ((this.state = null),
                (this.renderer = null),
                (this._adaptor = null),
                this._activeBatches))
                  this._activeBatches[e].destroy();
                this._activeBatches = null;
              },
            },
          ]) && W(t.prototype, r),
          n && W(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, r, n;
      })();
      ((H.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "batch",
      }),
        (H._availableBatchers = Object.create(null)));
      var L = H;
      (n.XO.handleByMap(n.Ag.Batcher, L._availableBatchers), n.XO.add(F.J));
      var V = r(7356),
        q = r(8338),
        K = r(8594),
        $ = r(8309),
        Q = r(6769),
        Y = r(7447),
        J =
          "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct MaskUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uMaskClamp:vec4<f32>,\n  uAlpha:f32,\n  uInverse:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;\n@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n};\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var maskClamp = filterUniforms.uMaskClamp;\n    var uAlpha = filterUniforms.uAlpha;\n\n    var clip = step(3.5,\n      step(maskClamp.x, filterUv.x) +\n      step(maskClamp.y, filterUv.y) +\n      step(filterUv.x, maskClamp.z) +\n      step(filterUv.y, maskClamp.w));\n\n    var mask = textureSample(uMaskTexture, uSampler, filterUv);\n    var source = textureSample(uTexture, uSampler, uv);\n    var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);\n\n    var a: f32 = alphaMul * mask.r * uAlpha * clip;\n\n    if (filterUniforms.uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    return source * a;\n}\n";
      function X(e) {
        return (
          (X =
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
          X(e)
        );
      }
      var Z = ["sprite"];
      function ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ee(Object(r), !0).forEach(function (t) {
                re(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ee(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function re(e, t, r) {
        return (
          (t = oe(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ne(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, oe(n.key), n));
        }
      }
      function oe(e) {
        var t = (function (e, t) {
          if ("object" != X(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != X(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == X(t) ? t : t + "";
      }
      function ie(e, t, r) {
        return (
          (t = ue(t)),
          (function (e, t) {
            if (t && ("object" == X(t) || "function" == typeof t)) return t;
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
            ae()
              ? Reflect.construct(t, r || [], ue(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function ae() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (ae = function () {
          return !!e;
        })();
      }
      function ue(e) {
        return (
          (ue = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ue(e)
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
      var ce = (function (e) {
          function t(e) {
            var r;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = e.sprite,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                      }
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < i.length; n++)
                    ((r = i[n]),
                      -1 === t.indexOf(r) &&
                        {}.propertyIsEnumerable.call(e, r) &&
                        (o[r] = e[r]));
                }
                return o;
              })(e, Z),
              i = new Q.N(n.texture),
              a = new $.k({
                uFilterMatrix: { value: new s.u(), type: "mat3x3<f32>" },
                uMaskClamp: { value: i.uClampFrame, type: "vec4<f32>" },
                uAlpha: { value: 1, type: "f32" },
                uInverse: { value: e.inverse ? 1 : 0, type: "f32" },
              }),
              u = K.B.from({
                vertex: { source: J, entryPoint: "mainVertex" },
                fragment: { source: J, entryPoint: "mainFragment" },
              }),
              c = q.M.from({
                vertex:
                  "in vec2 aPosition;\n\nout vec2 vTextureCoord;\nout vec2 vMaskCoord;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition(  vec2 aPosition )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n       \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord(  vec2 aPosition )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( vec2 aPosition )\n{\n    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}   \n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition(aPosition);\n    vTextureCoord = filterTextureCoord(aPosition);\n    vMaskCoord = getFilterCoord(aPosition);\n}\n",
                fragment:
                  "in vec2 vMaskCoord;\nin vec2 vTextureCoord;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMaskTexture;\n\nuniform float uAlpha;\nuniform vec4 uMaskClamp;\nuniform float uInverse;\n\nout vec4 finalColor;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(uMaskClamp.x, vMaskCoord.x) +\n        step(uMaskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, uMaskClamp.z) +\n        step(vMaskCoord.y, uMaskClamp.w));\n\n    // TODO look into why this is needed\n    float npmAlpha = uAlpha;\n    vec4 original = texture(uTexture, vTextureCoord);\n    vec4 masky = texture(uMaskTexture, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    float a = alphaMul * masky.r * npmAlpha * clip;\n\n    if (uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    finalColor = original * a;\n}\n",
                name: "mask-filter",
              });
            return (
              ((r = ie(this, t, [
                te(
                  te({}, o),
                  {},
                  {
                    gpuProgram: u,
                    glProgram: c,
                    clipToViewport: !1,
                    resources: {
                      filterUniforms: a,
                      uMaskTexture: n.texture.source,
                    },
                  },
                ),
              ])).sprite = n),
              (r._textureMatrix = i),
              r
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
            (r = t),
            (n = [
              {
                key: "inverse",
                get: function () {
                  return 1 === this.resources.filterUniforms.uniforms.uInverse;
                },
                set: function (e) {
                  this.resources.filterUniforms.uniforms.uInverse = e ? 1 : 0;
                },
              },
              {
                key: "apply",
                value: function (e, t, r, n) {
                  ((this._textureMatrix.texture = this.sprite.texture),
                    e
                      .calculateSpriteMatrix(
                        this.resources.filterUniforms.uniforms.uFilterMatrix,
                        this.sprite,
                      )
                      .prepend(this._textureMatrix.mapCoord),
                    (this.resources.uMaskTexture = this.sprite.texture.source),
                    e.applyFilter(this, t, r, n));
                },
              },
            ]) && ne(r.prototype, n),
            o && ne(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n, o;
        })(Y.d),
        le = r(8326),
        fe = r(987),
        de = r(3760),
        pe = r(2664);
      function ve(e) {
        return (
          (ve =
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
          ve(e)
        );
      }
      function ye(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function he(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, me(n.key), n));
        }
      }
      function be(e, t, r) {
        return (
          t && he(e.prototype, t),
          r && he(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function me(e) {
        var t = (function (e, t) {
          if ("object" != ve(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != ve(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ve(t) ? t : t + "";
      }
      function ge(e, t, r) {
        return (
          (t = we(t)),
          (function (e, t) {
            if (t && ("object" == ve(t) || "function" == typeof t)) return t;
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
              ? Reflect.construct(t, r || [], we(e).constructor)
              : t.apply(e, r),
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
      function we(e) {
        return (
          (we = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          we(e)
        );
      }
      function ke(e, t) {
        return (
          (ke = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          ke(e, t)
        );
      }
      var xe = new g.c(),
        Oe = (function (e) {
          function t() {
            var e;
            return (
              ye(this, t),
              ((e = ge(this, t)).filters = [
                new ce({
                  sprite: new fe.k(de.g.EMPTY),
                  inverse: !1,
                  resolution: "inherit",
                  antialias: "inherit",
                }),
              ]),
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
                t && ke(e, t));
            })(t, e),
            be(t, [
              {
                key: "sprite",
                get: function () {
                  return this.filters[0].sprite;
                },
                set: function (e) {
                  this.filters[0].sprite = e;
                },
              },
              {
                key: "inverse",
                get: function () {
                  return this.filters[0].inverse;
                },
                set: function (e) {
                  this.filters[0].inverse = e;
                },
              },
            ])
          );
        })(V.a),
        Se = (function () {
          return be(
            function e(t) {
              (ye(this, e), (this._activeMaskStage = []), (this._renderer = t));
            },
            [
              {
                key: "push",
                value: function (e, t, r) {
                  var n = this._renderer;
                  if (
                    (n.renderPipes.batch.break(r),
                    r.add({
                      renderPipeId: "alphaMask",
                      action: "pushMaskBegin",
                      mask: e,
                      inverse: t._maskOptions.inverse,
                      canBundle: !1,
                      maskedContainer: t,
                    }),
                    (e.inverse = t._maskOptions.inverse),
                    e.renderMaskToTexture)
                  ) {
                    var o = e.mask;
                    ((o.includeInBuild = !0),
                      o.collectRenderables(r, n, null),
                      (o.includeInBuild = !1));
                  }
                  (n.renderPipes.batch.break(r),
                    r.add({
                      renderPipeId: "alphaMask",
                      action: "pushMaskEnd",
                      mask: e,
                      maskedContainer: t,
                      inverse: t._maskOptions.inverse,
                      canBundle: !1,
                    }));
                },
              },
              {
                key: "pop",
                value: function (e, t, r) {
                  (this._renderer.renderPipes.batch.break(r),
                    r.add({
                      renderPipeId: "alphaMask",
                      action: "popMaskEnd",
                      mask: e,
                      inverse: t._maskOptions.inverse,
                      canBundle: !1,
                    }));
                },
              },
              {
                key: "execute",
                value: function (e) {
                  var t = this._renderer,
                    r = e.mask.renderMaskToTexture;
                  if ("pushMaskBegin" === e.action) {
                    var n = c.Z.get(Oe);
                    if (((n.inverse = e.inverse), r)) {
                      e.mask.mask.measurable = !0;
                      var o = (0, le.f)(e.mask.mask, !0, xe);
                      ((e.mask.mask.measurable = !1), o.ceil());
                      var i = t.renderTarget.renderTarget.colorTexture.source,
                        a = b.W.getOptimalTexture(
                          o.width,
                          o.height,
                          i._resolution,
                          i.antialias,
                        );
                      (t.renderTarget.push(a, !0),
                        t.globalUniforms.push({
                          offset: o,
                          worldColor: 4294967295,
                        }));
                      var u = n.sprite;
                      ((u.texture = a),
                        (u.worldTransform.tx = o.minX),
                        (u.worldTransform.ty = o.minY),
                        this._activeMaskStage.push({
                          filterEffect: n,
                          maskedContainer: e.maskedContainer,
                          filterTexture: a,
                        }));
                    } else
                      ((n.sprite = e.mask.mask),
                        this._activeMaskStage.push({
                          filterEffect: n,
                          maskedContainer: e.maskedContainer,
                        }));
                  } else if ("pushMaskEnd" === e.action) {
                    var s =
                      this._activeMaskStage[this._activeMaskStage.length - 1];
                    (r &&
                      (t.type === pe.W.WEBGL &&
                        t.renderTarget.finishRenderPass(),
                      t.renderTarget.pop(),
                      t.globalUniforms.pop()),
                      t.filter.push({
                        renderPipeId: "filter",
                        action: "pushFilter",
                        container: s.maskedContainer,
                        filterEffect: s.filterEffect,
                        canBundle: !1,
                      }));
                  } else if ("popMaskEnd" === e.action) {
                    t.filter.pop();
                    var l = this._activeMaskStage.pop();
                    (r && b.W.returnTexture(l.filterTexture),
                      c.Z.return(l.filterEffect));
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  ((this._renderer = null), (this._activeMaskStage = null));
                },
              },
            ],
          );
        })();
      function Pe(e) {
        return (
          (Pe =
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
          Pe(e)
        );
      }
      function Te(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, je(n.key), n));
        }
      }
      function je(e) {
        var t = (function (e, t) {
          if ("object" != Pe(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Pe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Pe(t) ? t : t + "";
      }
      Se.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "alphaMask",
      };
      var Ce = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._colorStack = []),
              (this._colorStackIndex = 0),
              (this._currentColor = 0),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "buildStart",
              value: function () {
                ((this._colorStack[0] = 15),
                  (this._colorStackIndex = 1),
                  (this._currentColor = 15));
              },
            },
            {
              key: "push",
              value: function (e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                var n = this._colorStack;
                n[this._colorStackIndex] =
                  n[this._colorStackIndex - 1] & e.mask;
                var o = this._colorStack[this._colorStackIndex];
                (o !== this._currentColor &&
                  ((this._currentColor = o),
                  r.add({
                    renderPipeId: "colorMask",
                    colorMask: o,
                    canBundle: !1,
                  })),
                  this._colorStackIndex++);
              },
            },
            {
              key: "pop",
              value: function (e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                var n = this._colorStack;
                this._colorStackIndex--;
                var o = n[this._colorStackIndex - 1];
                o !== this._currentColor &&
                  ((this._currentColor = o),
                  r.add({
                    renderPipeId: "colorMask",
                    colorMask: o,
                    canBundle: !1,
                  }));
              },
            },
            {
              key: "execute",
              value: function (e) {
                this._renderer.colorMask.setMask(e.colorMask);
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this._renderer = null), (this._colorStack = null));
              },
            },
          ]) && Te(e.prototype, t),
          r && Te(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      Ce.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "colorMask",
      };
      var Me = r(6932),
        Ge = r(7856);
      function Ee(e) {
        return (
          (Ee =
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
          Ee(e)
        );
      }
      function Re(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Ae(n.key), n));
        }
      }
      function Ae(e) {
        var t = (function (e, t) {
          if ("object" != Ee(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ee(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ee(t) ? t : t + "";
      }
      var Be = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._maskStackHash = {}),
              (this._maskHash = new WeakMap()),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "push",
              value: function (e, t, r) {
                var n,
                  o,
                  i = e,
                  a = this._renderer;
                (a.renderPipes.batch.break(r),
                  a.renderPipes.blendMode.setBlendMode(i.mask, "none", r),
                  r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1,
                  }));
                var u = i.mask;
                ((u.includeInBuild = !0),
                  this._maskHash.has(i) ||
                    this._maskHash.set(i, {
                      instructionsStart: 0,
                      instructionsLength: 0,
                    }));
                var s = this._maskHash.get(i);
                ((s.instructionsStart = r.instructionSize),
                  u.collectRenderables(r, a, null),
                  (u.includeInBuild = !1),
                  a.renderPipes.batch.break(r),
                  r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskEnd",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1,
                  }));
                var c = r.instructionSize - s.instructionsStart - 1;
                s.instructionsLength = c;
                var l = a.renderTarget.renderTarget.uid;
                (null !== (n = (o = this._maskStackHash)[l]) && void 0 !== n) ||
                  (o[l] = 0);
              },
            },
            {
              key: "pop",
              value: function (e, t, r) {
                var n = e,
                  o = this._renderer;
                (o.renderPipes.batch.break(r),
                  o.renderPipes.blendMode.setBlendMode(n.mask, "none", r),
                  r.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskBegin",
                    inverse: t._maskOptions.inverse,
                    canBundle: !1,
                  }));
                for (
                  var i = this._maskHash.get(e), a = 0;
                  a < i.instructionsLength;
                  a++
                )
                  r.instructions[r.instructionSize++] =
                    r.instructions[i.instructionsStart++];
                r.add({
                  renderPipeId: "stencilMask",
                  action: "popMaskEnd",
                  canBundle: !1,
                });
              },
            },
            {
              key: "execute",
              value: function (e) {
                var t,
                  r,
                  n = this._renderer,
                  o = n.renderTarget.renderTarget.uid,
                  i =
                    null !== (t = (r = this._maskStackHash)[o]) && void 0 !== t
                      ? t
                      : (r[o] = 0);
                ("pushMaskBegin" === e.action
                  ? (n.renderTarget.ensureDepthStencil(),
                    n.stencil.setStencilMode(Ge.K.RENDERING_MASK_ADD, i),
                    i++,
                    n.colorMask.setMask(0))
                  : "pushMaskEnd" === e.action
                    ? (e.inverse
                        ? n.stencil.setStencilMode(Ge.K.INVERSE_MASK_ACTIVE, i)
                        : n.stencil.setStencilMode(Ge.K.MASK_ACTIVE, i),
                      n.colorMask.setMask(15))
                    : "popMaskBegin" === e.action
                      ? (n.colorMask.setMask(0),
                        0 !== i
                          ? n.stencil.setStencilMode(
                              Ge.K.RENDERING_MASK_REMOVE,
                              i,
                            )
                          : (n.renderTarget.clear(null, Me.u.STENCIL),
                            n.stencil.setStencilMode(Ge.K.DISABLED, i)),
                        i--)
                      : "popMaskEnd" === e.action &&
                        (e.inverse
                          ? n.stencil.setStencilMode(
                              Ge.K.INVERSE_MASK_ACTIVE,
                              i,
                            )
                          : n.stencil.setStencilMode(Ge.K.MASK_ACTIVE, i),
                        n.colorMask.setMask(15)),
                  (this._maskStackHash[o] = i));
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this._renderer = null),
                  (this._maskStackHash = null),
                  (this._maskHash = null));
              },
            },
          ]) && Re(e.prototype, t),
          r && Re(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      Be.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "stencilMask",
      };
      var Ue = r(3614),
        De = r(9209);
      function Ie(e) {
        return (
          (Ie =
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
          Ie(e)
        );
      }
      function Fe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fe(Object(r), !0).forEach(function (t) {
                We(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Fe(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function We(e, t, r) {
        return (
          (t = He(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function Ne(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, He(n.key), n));
        }
      }
      function He(e) {
        var t = (function (e, t) {
          if ("object" != Ie(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ie(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ie(t) ? t : t + "";
      }
      var Le = (function () {
        function e() {
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.clearBeforeRender = !0),
            (this._backgroundColor = new Ue.Q(0)),
            (this.color = this._backgroundColor),
            (this.alpha = 1));
        }
        return (
          (t = e),
          (r = [
            {
              key: "init",
              value: function (t) {
                ((t = ze(ze({}, e.defaultOptions), t)),
                  (this.clearBeforeRender = t.clearBeforeRender),
                  (this.color =
                    t.background || t.backgroundColor || this._backgroundColor),
                  (this.alpha = t.backgroundAlpha),
                  this._backgroundColor.setAlpha(t.backgroundAlpha));
              },
            },
            {
              key: "color",
              get: function () {
                return this._backgroundColor;
              },
              set: function (e) {
                (Ue.Q.shared.setValue(e).alpha < 1 &&
                  1 === this._backgroundColor.alpha &&
                  (0, De.R)(
                    "Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application.",
                  ),
                  this._backgroundColor.setValue(e));
              },
            },
            {
              key: "alpha",
              get: function () {
                return this._backgroundColor.alpha;
              },
              set: function (e) {
                this._backgroundColor.setAlpha(e);
              },
            },
            {
              key: "colorRgba",
              get: function () {
                return this._backgroundColor.toArray();
              },
            },
            { key: "destroy", value: function () {} },
          ]) && Ne(t.prototype, r),
          n && Ne(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, r, n;
      })();
      ((Le.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "background",
        priority: 0,
      }),
        (Le.defaultOptions = {
          backgroundAlpha: 1,
          backgroundColor: 0,
          clearBeforeRender: !0,
        }));
      var Ve = Le,
        qe = r(6371);
      function Ke(e) {
        return (
          (Ke =
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
          Ke(e)
        );
      }
      function $e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Qe(n.key), n));
        }
      }
      function Qe(e) {
        var t = (function (e, t) {
          if ("object" != Ke(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ke(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ke(t) ? t : t + "";
      }
      var Ye = {};
      n.XO.handle(
        n.Ag.BlendMode,
        function (e) {
          if (!e.name)
            throw new Error("BlendMode extension must have a name property");
          Ye[e.name] = e.ref;
        },
        function (e) {
          delete Ye[e.name];
        },
      );
      var Je = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._blendModeStack = []),
              (this._isAdvanced = !1),
              (this._filterHash = Object.create(null)),
              (this._renderer = t),
              this._renderer.runners.prerender.add(this));
          }),
          (t = [
            {
              key: "prerender",
              value: function () {
                ((this._activeBlendMode = "normal"), (this._isAdvanced = !1));
              },
            },
            {
              key: "pushBlendMode",
              value: function (e, t, r) {
                (this._blendModeStack.push(t), this.setBlendMode(e, t, r));
              },
            },
            {
              key: "popBlendMode",
              value: function (e) {
                var t;
                this._blendModeStack.pop();
                var r =
                  null !==
                    (t =
                      this._blendModeStack[this._activeBlendMode.length - 1]) &&
                  void 0 !== t
                    ? t
                    : "normal";
                this.setBlendMode(null, r, e);
              },
            },
            {
              key: "setBlendMode",
              value: function (e, t, r) {
                var n,
                  o = e instanceof qe.m;
                this._activeBlendMode !== t
                  ? (this._isAdvanced && this._endAdvancedBlendMode(r),
                    (this._activeBlendMode = t),
                    e &&
                      ((this._isAdvanced = !!Ye[t]),
                      this._isAdvanced && this._beginAdvancedBlendMode(e, r)))
                  : this._isAdvanced &&
                    e &&
                    !o &&
                    (null === (n = this._renderableList) ||
                      void 0 === n ||
                      n.push(e));
              },
            },
            {
              key: "_beginAdvancedBlendMode",
              value: function (e, t) {
                this._renderer.renderPipes.batch.break(t);
                var r = this._activeBlendMode;
                if (Ye[r]) {
                  var n = this._ensureFilterEffect(r),
                    o = e instanceof qe.m,
                    i = {
                      renderPipeId: "filter",
                      action: "pushFilter",
                      filterEffect: n,
                      renderables: o ? null : [e],
                      container: o ? e.root : null,
                      canBundle: !1,
                    };
                  ((this._renderableList = i.renderables), t.add(i));
                } else
                  (0, De.R)(
                    "Unable to assign BlendMode: '".concat(
                      r,
                      "'. You may want to include: import 'pixi.js/advanced-blend-modes'",
                    ),
                  );
              },
            },
            {
              key: "_ensureFilterEffect",
              value: function (e) {
                var t = this._filterHash[e];
                return (
                  t ||
                    ((t = this._filterHash[e] = new V.a()).filters = [
                      new Ye[e](),
                    ]),
                  t
                );
              },
            },
            {
              key: "_endAdvancedBlendMode",
              value: function (e) {
                ((this._isAdvanced = !1),
                  (this._renderableList = null),
                  this._renderer.renderPipes.batch.break(e),
                  e.add({
                    renderPipeId: "filter",
                    action: "popFilter",
                    canBundle: !1,
                  }));
              },
            },
            {
              key: "buildStart",
              value: function () {
                this._isAdvanced = !1;
              },
            },
            {
              key: "buildEnd",
              value: function (e) {
                this._isAdvanced && this._endAdvancedBlendMode(e);
              },
            },
            {
              key: "destroy",
              value: function () {
                for (var e in ((this._renderer = null),
                (this._renderableList = null),
                this._filterHash))
                  this._filterHash[e].destroy();
                this._filterHash = null;
              },
            },
          ]) && $e(e.prototype, t),
          r && $e(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      Je.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "blendMode",
      };
      var Xe = r(8689);
      function Ze(e) {
        return (
          (Ze =
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
          Ze(e)
        );
      }
      function et() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var s = n && n.prototype instanceof u ? n : u,
            c = Object.create(s.prototype);
          return (
            tt(
              c,
              "_invoke",
              (function (r, n, o) {
                var i,
                  u,
                  s,
                  c = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (u = 0), (s = e), (d.n = r), a);
                    },
                  };
                function p(r, n) {
                  for (
                    u = r, s = n, t = 0;
                    !f && c && !o && t < l.length;
                    t++
                  ) {
                    var o,
                      i = l[t],
                      p = d.p,
                      v = i[2];
                    r > 3
                      ? (o = v === n) &&
                        ((s = i[(u = i[4]) ? 5 : ((u = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= p &&
                        ((o = r < 2 && p < i[1])
                          ? ((u = 0), (d.v = n), (d.n = i[1]))
                          : p < v &&
                            (o = r < 3 || i[0] > n || n > v) &&
                            ((i[4] = r), (i[5] = n), (d.n = v), (u = 0)));
                  }
                  if (o || r > 1) return a;
                  throw ((f = !0), n);
                }
                return function (o, l, v) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), u = l, s = v;
                    (t = u < 2 ? e : s) || !f;
                  ) {
                    i ||
                      (u
                        ? u < 3
                          ? (u > 1 && (d.n = -1), p(u, s))
                          : (d.n = s)
                        : (d.v = s));
                    try {
                      if (((c = 2), i)) {
                        if ((u || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((s = t.value), u < 2 && (u = 0));
                        } else
                          (1 === u && (t = i.return) && t.call(i),
                            u < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (u = 1)));
                        i = e;
                      } else if ((t = (f = d.n < 0) ? s : r.call(n, d)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (u = 1), (s = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            c
          );
        }
        var a = {};
        function u() {}
        function s() {}
        function c() {}
        t = Object.getPrototypeOf;
        var l = [][n]
            ? t(t([][n]()))
            : (tt((t = {}), n, function () {
                return this;
              }),
              t),
          f = (c.prototype = u.prototype = Object.create(l));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), tt(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (s.prototype = c),
          tt(f, "constructor", c),
          tt(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          tt(c, o, "GeneratorFunction"),
          tt(f),
          tt(f, o, "Generator"),
          tt(f, n, function () {
            return this;
          }),
          tt(f, "toString", function () {
            return "[object Generator]";
          }),
          (et = function () {
            return { w: i, m: d };
          })()
        );
      }
      function tt(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((tt = function (e, t, r, n) {
          function i(t, r) {
            tt(e, t, function (e) {
              return this._invoke(t, r, e);
            });
          }
          t
            ? o
              ? o(e, t, {
                  value: r,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (e[t] = r)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          tt(e, t, r, n));
      }
      function rt(e, t, r, n, o, i, a) {
        try {
          var u = e[i](a),
            s = u.value;
        } catch (e) {
          return void r(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function nt(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function a(e) {
              rt(i, n, o, a, u, "next", e);
            }
            function u(e) {
              rt(i, n, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ot(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(r), !0).forEach(function (t) {
                at(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ot(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function at(e, t, r) {
        return (
          (t = st(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ut(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, st(n.key), n));
        }
      }
      function st(e) {
        var t = (function (e, t) {
          if ("object" != Ze(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ze(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ze(t) ? t : t + "";
      }
      var ct = { png: "image/png", jpg: "image/jpeg", webp: "image/webp" },
        lt = (function () {
          function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._renderer = t));
          }
          return (
            (t = e),
            (r = [
              {
                key: "_normalizeOptions",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return e instanceof w.mc || e instanceof de.g
                    ? it({ target: e }, t)
                    : it(it({}, t), e);
                },
              },
              {
                key: "image",
                value:
                  ((i = nt(
                    et().m(function e(t) {
                      var r;
                      return et().w(
                        function (e) {
                          for (;;)
                            switch (e.n) {
                              case 0:
                                return (
                                  (r = Xe.e.get().createImage()),
                                  (e.n = 1),
                                  this.base64(t)
                                );
                              case 1:
                                return ((r.src = e.v), e.a(2, r));
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "base64",
                value:
                  ((o = nt(
                    et().m(function t(r) {
                      var n, o, i, a, u;
                      return et().w(
                        function (t) {
                          for (;;)
                            switch (t.n) {
                              case 0:
                                if (
                                  ((r = this._normalizeOptions(
                                    r,
                                    e.defaultImageOptions,
                                  )),
                                  (o = (n = r).format),
                                  (i = n.quality),
                                  void 0 === (a = this.canvas(r)).toBlob)
                                ) {
                                  t.n = 1;
                                  break;
                                }
                                return t.a(
                                  2,
                                  new Promise(function (e, t) {
                                    a.toBlob(
                                      function (r) {
                                        if (r) {
                                          var n = new FileReader();
                                          ((n.onload = function () {
                                            return e(n.result);
                                          }),
                                            (n.onerror = t),
                                            n.readAsDataURL(r));
                                        } else
                                          t(
                                            new Error("ICanvas.toBlob failed!"),
                                          );
                                      },
                                      ct[o],
                                      i,
                                    );
                                  }),
                                );
                              case 1:
                                if (void 0 === a.toDataURL) {
                                  t.n = 2;
                                  break;
                                }
                                return t.a(2, a.toDataURL(ct[o], i));
                              case 2:
                                if (void 0 === a.convertToBlob) {
                                  t.n = 4;
                                  break;
                                }
                                return (
                                  (t.n = 3),
                                  a.convertToBlob({ type: ct[o], quality: i })
                                );
                              case 3:
                                return (
                                  (u = t.v),
                                  t.a(
                                    2,
                                    new Promise(function (e, t) {
                                      var r = new FileReader();
                                      ((r.onload = function () {
                                        return e(r.result);
                                      }),
                                        (r.onerror = t),
                                        r.readAsDataURL(u));
                                    }),
                                  )
                                );
                              case 4:
                                throw new Error(
                                  "Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented",
                                );
                              case 5:
                                return t.a(2);
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: "canvas",
                value: function (e) {
                  var t = (e = this._normalizeOptions(e)).target,
                    r = this._renderer;
                  if (t instanceof de.g) return r.texture.generateCanvas(t);
                  var n = r.textureGenerator.generateTexture(e),
                    o = r.texture.generateCanvas(n);
                  return (n.destroy(!0), o);
                },
              },
              {
                key: "pixels",
                value: function (e) {
                  var t = (e = this._normalizeOptions(e)).target,
                    r = this._renderer,
                    n =
                      t instanceof de.g
                        ? t
                        : r.textureGenerator.generateTexture(e),
                    o = r.texture.getPixels(n);
                  return (t instanceof w.mc && n.destroy(!0), o);
                },
              },
              {
                key: "texture",
                value: function (e) {
                  return (e = this._normalizeOptions(e)).target instanceof de.g
                    ? e.target
                    : this._renderer.textureGenerator.generateTexture(e);
                },
              },
              {
                key: "download",
                value: function (e) {
                  var t;
                  e = this._normalizeOptions(e);
                  var r = this.canvas(e),
                    n = document.createElement("a");
                  ((n.download =
                    null !== (t = e.filename) && void 0 !== t
                      ? t
                      : "image.png"),
                    (n.href = r.toDataURL("image/png")),
                    document.body.appendChild(n),
                    n.click(),
                    document.body.removeChild(n));
                },
              },
              {
                key: "log",
                value: function (e) {
                  var t,
                    r = null !== (t = e.width) && void 0 !== t ? t : 200;
                  e = this._normalizeOptions(e);
                  var n = this.canvas(e),
                    o = n.toDataURL();
                  console.log(
                    "[Pixi Texture] "
                      .concat(n.width, "px ")
                      .concat(n.height, "px"),
                  );
                  var i = [
                    "font-size: 1px;",
                    "padding: ".concat(r, "px ", 300, "px;"),
                    "background: url(".concat(o, ") no-repeat;"),
                    "background-size: contain;",
                  ].join(" ");
                  console.log("%c ", i);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._renderer = null;
                },
              },
            ]),
            r && ut(t.prototype, r),
            n && ut(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, r, n, o, i;
        })();
      ((lt.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem],
        name: "extract",
      }),
        (lt.defaultImageOptions = { format: "png", quality: 1 }));
      var ft = lt,
        dt = r(861),
        pt = r(7258),
        vt = r(4822);
      function yt(e) {
        return (
          (yt =
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
          yt(e)
        );
      }
      function ht(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, bt(n.key), n));
        }
      }
      function bt(e) {
        var t = (function (e, t) {
          if ("object" != yt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != yt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == yt(t) ? t : t + "";
      }
      function mt(e, t, r) {
        return (
          (t = _t(t)),
          (function (e, t) {
            if (t && ("object" == yt(t) || "function" == typeof t)) return t;
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
            gt()
              ? Reflect.construct(t, r || [], _t(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function gt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (gt = function () {
          return !!e;
        })();
      }
      function _t(e) {
        return (
          (_t = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          _t(e)
        );
      }
      function wt(e, t) {
        return (
          (wt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          wt(e, t)
        );
      }
      var kt = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            mt(this, t, arguments)
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
              t && wt(e, t));
          })(t, e),
          (r = t),
          (o = [
            {
              key: "create",
              value: function (e) {
                return new t({ source: new vt.v(e) });
              },
            },
          ]),
          (n = [
            {
              key: "resize",
              value: function (e, t, r) {
                return (this.source.resize(e, t, r), this);
              },
            },
          ]) && ht(r.prototype, n),
          o && ht(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(de.g);
      function xt(e) {
        return (
          (xt =
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
          xt(e)
        );
      }
      function Ot(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ot(Object(r), !0).forEach(function (t) {
                Pt(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ot(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Pt(e, t, r) {
        return (
          (t = jt(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function Tt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, jt(n.key), n));
        }
      }
      function jt(e) {
        var t = (function (e, t) {
          if ("object" != xt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != xt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == xt(t) ? t : t + "";
      }
      var Ct = new dt.M(),
        Mt = new g.c(),
        Gt = [0, 0, 0, 0],
        Et = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._renderer = t));
            }),
            (t = [
              {
                key: "generateTexture",
                value: function (e) {
                  var t;
                  e instanceof w.mc &&
                    (e = {
                      target: e,
                      frame: void 0,
                      textureSourceOptions: {},
                      resolution: void 0,
                    });
                  var r = e.resolution || this._renderer.resolution,
                    n = e.antialias || this._renderer.view.antialias,
                    o = e.target,
                    i = e.clearColor;
                  i = i
                    ? Array.isArray(i) && 4 === i.length
                      ? i
                      : Ue.Q.shared.setValue(i).toArray()
                    : Gt;
                  var a =
                    (null === (t = e.frame) || void 0 === t
                      ? void 0
                      : t.copyTo(Ct)) || (0, pt.n)(o, Mt).rectangle;
                  ((a.width = 0 | Math.max(a.width, 1 / r)),
                    (a.height = 0 | Math.max(a.height, 1 / r)));
                  var u = kt.create(
                      St(
                        St({}, e.textureSourceOptions),
                        {},
                        {
                          width: a.width,
                          height: a.height,
                          resolution: r,
                          antialias: n,
                        },
                      ),
                    ),
                    c = s.u.shared.translate(-a.x, -a.y);
                  return (
                    this._renderer.render({
                      container: o,
                      transform: c,
                      target: u,
                      clearColor: i,
                    }),
                    u.source.updateMipmaps(),
                    u
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._renderer = null;
                },
              },
            ]) && Tt(e.prototype, t),
            r && Tt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      Et.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem],
        name: "textureGenerator",
      };
      var Rt = r(2334),
        At = r(867),
        Bt = r(3820);
      function Ut(e) {
        return (
          (Ut =
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
          Ut(e)
        );
      }
      function Dt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, It(n.key), n));
        }
      }
      function It(e) {
        var t = (function (e, t) {
          if ("object" != Ut(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ut(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ut(t) ? t : t + "";
      }
      var Ft = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._stackIndex = 0),
              (this._globalUniformDataStack = []),
              (this._uniformsPool = []),
              (this._activeUniforms = []),
              (this._bindGroupPool = []),
              (this._activeBindGroups = []),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "reset",
              value: function () {
                this._stackIndex = 0;
                for (var e = 0; e < this._activeUniforms.length; e++)
                  this._uniformsPool.push(this._activeUniforms[e]);
                for (var t = 0; t < this._activeBindGroups.length; t++)
                  this._bindGroupPool.push(this._activeBindGroups[t]);
                ((this._activeUniforms.length = 0),
                  (this._activeBindGroups.length = 0));
              },
            },
            {
              key: "start",
              value: function (e) {
                (this.reset(), this.push(e));
              },
            },
            {
              key: "bind",
              value: function (e) {
                var t = e.size,
                  r = e.projectionMatrix,
                  n = e.worldTransformMatrix,
                  o = e.worldColor,
                  i = e.offset,
                  a = this._renderer.renderTarget.renderTarget,
                  u = this._stackIndex
                    ? this._globalUniformDataStack[this._stackIndex - 1]
                    : {
                        projectionData: a,
                        worldTransformMatrix: new s.u(),
                        worldColor: 4294967295,
                        offset: new Rt.b(),
                      },
                  c = {
                    projectionMatrix:
                      r || this._renderer.renderTarget.projectionMatrix,
                    resolution: t || a.size,
                    worldTransformMatrix: n || u.worldTransformMatrix,
                    worldColor: o || u.worldColor,
                    offset: i || u.offset,
                    bindGroup: null,
                  },
                  l = this._uniformsPool.pop() || this._createUniforms();
                this._activeUniforms.push(l);
                var f,
                  d = l.uniforms;
                ((d.uProjectionMatrix = c.projectionMatrix),
                  (d.uResolution = c.resolution),
                  d.uWorldTransformMatrix.copyFrom(c.worldTransformMatrix),
                  (d.uWorldTransformMatrix.tx -= c.offset.x),
                  (d.uWorldTransformMatrix.ty -= c.offset.y),
                  (0, At.V)(c.worldColor, d.uWorldColorAlpha, 0),
                  l.update(),
                  this._renderer.renderPipes.uniformBatch
                    ? (f =
                        this._renderer.renderPipes.uniformBatch.getUniformBindGroup(
                          l,
                          !1,
                        ))
                    : ((f = this._bindGroupPool.pop() || new Bt.T()),
                      this._activeBindGroups.push(f),
                      f.setResource(l, 0)),
                  (c.bindGroup = f),
                  (this._currentGlobalUniformData = c));
              },
            },
            {
              key: "push",
              value: function (e) {
                (this.bind(e),
                  (this._globalUniformDataStack[this._stackIndex++] =
                    this._currentGlobalUniformData));
              },
            },
            {
              key: "pop",
              value: function () {
                ((this._currentGlobalUniformData =
                  this._globalUniformDataStack[--this._stackIndex - 1]),
                  this._renderer.type === pe.W.WEBGL &&
                    this._currentGlobalUniformData.bindGroup.resources[0].update());
              },
            },
            {
              key: "bindGroup",
              get: function () {
                return this._currentGlobalUniformData.bindGroup;
              },
            },
            {
              key: "globalUniformData",
              get: function () {
                return this._currentGlobalUniformData;
              },
            },
            {
              key: "uniformGroup",
              get: function () {
                return this._currentGlobalUniformData.bindGroup.resources[0];
              },
            },
            {
              key: "_createUniforms",
              value: function () {
                return new $.k(
                  {
                    uProjectionMatrix: {
                      value: new s.u(),
                      type: "mat3x3<f32>",
                    },
                    uWorldTransformMatrix: {
                      value: new s.u(),
                      type: "mat3x3<f32>",
                    },
                    uWorldColorAlpha: {
                      value: new Float32Array(4),
                      type: "vec4<f32>",
                    },
                    uResolution: { value: [0, 0], type: "vec2<f32>" },
                  },
                  { isStatic: !0 },
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this._renderer = null),
                  (this._globalUniformDataStack.length = 0),
                  (this._uniformsPool.length = 0),
                  (this._activeUniforms.length = 0),
                  (this._bindGroupPool.length = 0),
                  (this._activeBindGroups.length = 0),
                  (this._currentGlobalUniformData = null));
              },
            },
          ]) && Dt(e.prototype, t),
          r && Dt(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      Ft.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "globalUniforms",
      };
      var zt = r(2279);
      function Wt(e) {
        return (
          (Wt =
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
          Wt(e)
        );
      }
      function Nt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Ht(n.key), n));
        }
      }
      function Ht(e) {
        var t = (function (e, t) {
          if ("object" != Wt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Wt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Wt(t) ? t : t + "";
      }
      var Lt = 1,
        Vt = (function () {
          return (
            (e = function e() {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._tasks = []),
                (this._offset = 0));
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  zt.R.system.add(this._update, this);
                },
              },
              {
                key: "repeat",
                value: function (e, t) {
                  var r = Lt++,
                    n = 0;
                  return (
                    (!(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2]) &&
                      ((this._offset += 1e3), (n = this._offset)),
                    this._tasks.push({
                      func: e,
                      duration: t,
                      start: performance.now(),
                      offset: n,
                      last: performance.now(),
                      repeat: !0,
                      id: r,
                    }),
                    r
                  );
                },
              },
              {
                key: "cancel",
                value: function (e) {
                  for (var t = 0; t < this._tasks.length; t++)
                    if (this._tasks[t].id === e)
                      return void this._tasks.splice(t, 1);
                },
              },
              {
                key: "_update",
                value: function () {
                  for (
                    var e = performance.now(), t = 0;
                    t < this._tasks.length;
                    t++
                  ) {
                    var r = this._tasks[t];
                    if (e - r.offset - r.last >= r.duration) {
                      var n = e - r.start;
                      (r.func(n), (r.last = e));
                    }
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  (zt.R.system.remove(this._update, this),
                    (this._tasks.length = 0));
                },
              },
            ]),
            t && Nt(e.prototype, t),
            r && Nt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      Vt.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "scheduler",
        priority: 0,
      };
      var qt = r(1692),
        Kt = !1;
      function $t(e) {
        return (
          ($t =
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
          $t(e)
        );
      }
      function Qt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Yt(n.key), n));
        }
      }
      function Yt(e) {
        var t = (function (e, t) {
          if ("object" != $t(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != $t(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == $t(t) ? t : t + "";
      }
      var Jt = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "init",
              value: function (e) {
                if (e.hello) {
                  var t = this._renderer.name;
                  (this._renderer.type === pe.W.WEBGL &&
                    (t += " ".concat(this._renderer.context.webGLVersion)),
                    (function (e) {
                      if (!Kt) {
                        if (
                          Xe.e
                            .get()
                            .getNavigator()
                            .userAgent.toLowerCase()
                            .indexOf("chrome") > -1
                        ) {
                          var t,
                            r = [
                              "%c  %c  %c  %c  %c PixiJS %c v"
                                .concat(qt.xv, " (")
                                .concat(e, ") http://www.pixijs.com/\n\n"),
                              "background: #E72264; padding:5px 0;",
                              "background: #6CA2EA; padding:5px 0;",
                              "background: #B5D33D; padding:5px 0;",
                              "background: #FED23F; padding:5px 0;",
                              "color: #FFFFFF; background: #E72264; padding:5px 0;",
                              "color: #E72264; background: #FFFFFF; padding:5px 0;",
                            ];
                          (t = globalThis.console).log.apply(t, r);
                        } else
                          globalThis.console &&
                            globalThis.console.log(
                              "PixiJS "
                                .concat(qt.xv, " - ")
                                .concat(e, " - http://www.pixijs.com/"),
                            );
                        Kt = !0;
                      }
                    })(t));
                }
              },
            },
          ]) && Qt(e.prototype, t),
          r && Qt(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function Xt(e) {
        var t = !1;
        for (var r in e)
          if (null == e[r]) {
            t = !0;
            break;
          }
        if (!t) return e;
        var n = Object.create(null);
        for (var o in e) {
          var i = e[o];
          i && (n[o] = i);
        }
        return n;
      }
      function Zt(e) {
        for (var t = 0, r = 0; r < e.length; r++)
          null == e[r] ? t++ : (e[r - t] = e[r]);
        return ((e.length -= t), e);
      }
      function er(e) {
        return (
          (er =
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
          er(e)
        );
      }
      function tr(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return rr(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? rr(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          a = !0,
          u = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((u = !0), (i = e));
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function rr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function nr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nr(Object(r), !0).forEach(function (t) {
                ir(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : nr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function ir(e, t, r) {
        return (
          (t = ur(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ar(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ur(n.key), n));
        }
      }
      function ur(e) {
        var t = (function (e, t) {
          if ("object" != er(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != er(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == er(t) ? t : t + "";
      }
      ((Jt.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "hello",
        priority: -2,
      }),
        (Jt.defaultOptions = { hello: !1 }));
      var sr = 0,
        cr = (function () {
          function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._managedRenderables = []),
              (this._managedHashes = []),
              (this._managedArrays = []),
              (this._renderer = t));
          }
          return (
            (t = e),
            (r = [
              {
                key: "init",
                value: function (t) {
                  ((t = or(or({}, e.defaultOptions), t)),
                    (this.maxUnusedTime = t.renderableGCMaxUnusedTime),
                    (this._frequency = t.renderableGCFrequency),
                    (this.enabled = t.renderableGCActive));
                },
              },
              {
                key: "enabled",
                get: function () {
                  return !!this._handler;
                },
                set: function (e) {
                  var t = this;
                  this.enabled !== e &&
                    (e
                      ? ((this._handler = this._renderer.scheduler.repeat(
                          function () {
                            return t.run();
                          },
                          this._frequency,
                          !1,
                        )),
                        (this._hashHandler = this._renderer.scheduler.repeat(
                          function () {
                            var e,
                              r = tr(t._managedHashes);
                            try {
                              for (r.s(); !(e = r.n()).done; ) {
                                var n = e.value;
                                n.context[n.hash] = Xt(n.context[n.hash]);
                              }
                            } catch (e) {
                              r.e(e);
                            } finally {
                              r.f();
                            }
                          },
                          this._frequency,
                        )),
                        (this._arrayHandler = this._renderer.scheduler.repeat(
                          function () {
                            var e,
                              r = tr(t._managedArrays);
                            try {
                              for (r.s(); !(e = r.n()).done; ) {
                                var n = e.value;
                                Zt(n.context[n.hash]);
                              }
                            } catch (e) {
                              r.e(e);
                            } finally {
                              r.f();
                            }
                          },
                          this._frequency,
                        )))
                      : (this._renderer.scheduler.cancel(this._handler),
                        this._renderer.scheduler.cancel(this._hashHandler),
                        this._renderer.scheduler.cancel(this._arrayHandler)));
                },
              },
              {
                key: "addManagedHash",
                value: function (e, t) {
                  this._managedHashes.push({ context: e, hash: t });
                },
              },
              {
                key: "addManagedArray",
                value: function (e, t) {
                  this._managedArrays.push({ context: e, hash: t });
                },
              },
              {
                key: "prerender",
                value: function (e) {
                  var t = e.container;
                  ((this._now = performance.now()),
                    (t.renderGroup.gcTick = sr++),
                    this._updateInstructionGCTick(
                      t.renderGroup,
                      t.renderGroup.gcTick,
                    ));
                },
              },
              {
                key: "addRenderable",
                value: function (e) {
                  this.enabled &&
                    (-1 === e._lastUsed &&
                      (this._managedRenderables.push(e),
                      e.once("destroyed", this._removeRenderable, this)),
                    (e._lastUsed = this._now));
                },
              },
              {
                key: "run",
                value: function () {
                  for (
                    var e = this._now,
                      t = this._managedRenderables,
                      r = this._renderer.renderPipes,
                      n = 0,
                      o = 0;
                    o < t.length;
                    o++
                  ) {
                    var i,
                      a,
                      u,
                      s,
                      c = t[o];
                    if (null !== c) {
                      var l =
                          null !== (i = c.renderGroup) && void 0 !== i
                            ? i
                            : c.parentRenderGroup,
                        f =
                          null !==
                            (a =
                              null == l ||
                              null === (u = l.instructionSet) ||
                              void 0 === u
                                ? void 0
                                : u.gcTick) && void 0 !== a
                            ? a
                            : -1;
                      if (
                        ((null !== (s = null == l ? void 0 : l.gcTick) &&
                        void 0 !== s
                          ? s
                          : 0) === f && (c._lastUsed = e),
                        e - c._lastUsed > this.maxUnusedTime)
                      ) {
                        if (!c.destroyed) {
                          var d = r;
                          (l && (l.structureDidChange = !0),
                            d[c.renderPipeId].destroyRenderable(c));
                        }
                        ((c._lastUsed = -1),
                          n++,
                          c.off("destroyed", this._removeRenderable, this));
                      } else t[o - n] = c;
                    } else n++;
                  }
                  t.length -= n;
                },
              },
              {
                key: "destroy",
                value: function () {
                  ((this.enabled = !1),
                    (this._renderer = null),
                    (this._managedRenderables.length = 0),
                    (this._managedHashes.length = 0),
                    (this._managedArrays.length = 0));
                },
              },
              {
                key: "_removeRenderable",
                value: function (e) {
                  var t = this._managedRenderables.indexOf(e);
                  t >= 0 &&
                    (e.off("destroyed", this._removeRenderable, this),
                    (this._managedRenderables[t] = null));
                },
              },
              {
                key: "_updateInstructionGCTick",
                value: function (e, t) {
                  e.instructionSet.gcTick = t;
                  var r,
                    n = tr(e.renderGroupChildren);
                  try {
                    for (n.s(); !(r = n.n()).done; ) {
                      var o = r.value;
                      this._updateInstructionGCTick(o, t);
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                },
              },
            ]) && ar(t.prototype, r),
            n && ar(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, r, n;
        })();
      ((cr.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem],
        name: "renderableGC",
        priority: 0,
      }),
        (cr.defaultOptions = {
          renderableGCActive: !0,
          renderableGCMaxUnusedTime: 6e4,
          renderableGCFrequency: 3e4,
        }));
      var lr = cr;
      function fr(e) {
        return (
          (fr =
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
          fr(e)
        );
      }
      function dr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dr(Object(r), !0).forEach(function (t) {
                vr(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : dr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function vr(e, t, r) {
        return (
          (t = hr(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function yr(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, hr(n.key), n));
        }
      }
      function hr(e) {
        var t = (function (e, t) {
          if ("object" != fr(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != fr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == fr(t) ? t : t + "";
      }
      var br = (function () {
        function e(t) {
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._renderer = t),
            (this.count = 0),
            (this.checkCount = 0));
        }
        return (
          (t = e),
          (r = [
            {
              key: "init",
              value: function (t) {
                var r;
                ((t = pr(pr({}, e.defaultOptions), t)),
                  (this.checkCountMax = t.textureGCCheckCountMax),
                  (this.maxIdle =
                    null !== (r = t.textureGCAMaxIdle) && void 0 !== r
                      ? r
                      : t.textureGCMaxIdle),
                  (this.active = t.textureGCActive));
              },
            },
            {
              key: "postrender",
              value: function () {
                this._renderer.renderingToScreen &&
                  (this.count++,
                  this.active &&
                    (this.checkCount++,
                    this.checkCount > this.checkCountMax &&
                      ((this.checkCount = 0), this.run())));
              },
            },
            {
              key: "run",
              value: function () {
                for (
                  var e = this._renderer.texture.managedTextures, t = 0;
                  t < e.length;
                  t++
                ) {
                  var r = e[t];
                  r.autoGarbageCollect &&
                    r.resource &&
                    r._touched > -1 &&
                    this.count - r._touched > this.maxIdle &&
                    ((r._touched = -1), r.unload());
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                this._renderer = null;
              },
            },
          ]) && yr(t.prototype, r),
          n && yr(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, r, n;
      })();
      ((br.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem],
        name: "textureGC",
      }),
        (br.defaultOptions = {
          textureGCActive: !0,
          textureGCAMaxIdle: null,
          textureGCMaxIdle: 3600,
          textureGCCheckCountMax: 600,
        }));
      var mr = br,
        gr = r(2573),
        _r = r(7546),
        wr = r(3822);
      function kr(e) {
        return (
          (kr =
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
          kr(e)
        );
      }
      function xr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? xr(Object(r), !0).forEach(function (t) {
                Sr(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : xr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Sr(e, t, r) {
        return (
          (t = Tr(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function Pr(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Tr(n.key), n));
        }
      }
      function Tr(e) {
        var t = (function (e, t) {
          if ("object" != kr(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != kr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == kr(t) ? t : t + "";
      }
      var jr = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          (t = e),
          (r = [
            {
              key: "autoDensity",
              get: function () {
                return this.texture.source.autoDensity;
              },
              set: function (e) {
                this.texture.source.autoDensity = e;
              },
            },
            {
              key: "resolution",
              get: function () {
                return this.texture.source._resolution;
              },
              set: function (e) {
                this.texture.source.resize(
                  this.texture.source.width,
                  this.texture.source.height,
                  e,
                );
              },
            },
            {
              key: "init",
              value: function (t) {
                ((t = Or(Or({}, e.defaultOptions), t)).view &&
                  ((0, gr.t6)(
                    gr.lj,
                    "ViewSystem.view has been renamed to ViewSystem.canvas",
                  ),
                  (t.canvas = t.view)),
                  (this.screen = new dt.M(0, 0, t.width, t.height)),
                  (this.canvas = t.canvas || Xe.e.get().createCanvas()),
                  (this.antialias = !!t.antialias),
                  (this.texture = (0, wr.c)(this.canvas, t)),
                  (this.renderTarget = new _r.O({
                    colorTextures: [this.texture],
                    depth: !!t.depth,
                    isRoot: !0,
                  })),
                  (this.texture.source.transparent = t.backgroundAlpha < 1),
                  (this.resolution = t.resolution));
              },
            },
            {
              key: "resize",
              value: function (e, t, r) {
                (this.texture.source.resize(e, t, r),
                  (this.screen.width = this.texture.frame.width),
                  (this.screen.height = this.texture.frame.height));
              },
            },
            {
              key: "destroy",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                (("boolean" == typeof e ? e : !(null == e || !e.removeView)) &&
                  this.canvas.parentNode &&
                  this.canvas.parentNode.removeChild(this.canvas),
                  this.texture.destroy());
              },
            },
          ]),
          r && Pr(t.prototype, r),
          n && Pr(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, r, n;
      })();
      ((jr.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "view",
        priority: 0,
      }),
        (jr.defaultOptions = {
          width: 800,
          height: 600,
          autoDensity: !1,
          antialias: !1,
        }));
      var Cr = [Ve, Ft, Jt, jr, E, mr, Et, ft, D.d, lr, Vt],
        Mr = [Je, L, U, h, Se, Be, Ce, u];
    },
    5179: function (e, t, r) {
      r.d(t, {
        $: function () {
          return n;
        },
      });
      var n = [
        {
          type: "mat3x3<f32>",
          test: function (e) {
            return void 0 !== e.value.a;
          },
          ubo: "\n            var matrix = uv[name].toArray(true);\n            data[offset] = matrix[0];\n            data[offset + 1] = matrix[1];\n            data[offset + 2] = matrix[2];\n            data[offset + 4] = matrix[3];\n            data[offset + 5] = matrix[4];\n            data[offset + 6] = matrix[5];\n            data[offset + 8] = matrix[6];\n            data[offset + 9] = matrix[7];\n            data[offset + 10] = matrix[8];\n        ",
          uniform:
            "\n            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));\n        ",
        },
        {
          type: "vec4<f32>",
          test: function (e) {
            return (
              "vec4<f32>" === e.type && 1 === e.size && void 0 !== e.value.width
            );
          },
          ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n            data[offset + 2] = v.width;\n            data[offset + 3] = v.height;\n        ",
          uniform:
            "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                cv[2] = v.width;\n                cv[3] = v.height;\n                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);\n            }\n        ",
        },
        {
          type: "vec2<f32>",
          test: function (e) {
            return (
              "vec2<f32>" === e.type && 1 === e.size && void 0 !== e.value.x
            );
          },
          ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n        ",
          uniform:
            "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                gl.uniform2f(ud[name].location, v.x, v.y);\n            }\n        ",
        },
        {
          type: "vec4<f32>",
          test: function (e) {
            return (
              "vec4<f32>" === e.type && 1 === e.size && void 0 !== e.value.red
            );
          },
          ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n            data[offset + 3] = v.alpha;\n        ",
          uniform:
            "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                cv[3] = v.alpha;\n                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);\n            }\n        ",
        },
        {
          type: "vec3<f32>",
          test: function (e) {
            return (
              "vec3<f32>" === e.type && 1 === e.size && void 0 !== e.value.red
            );
          },
          ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n        ",
          uniform:
            "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);\n            }\n        ",
        },
      ];
    },
    5510: function (e, t, r) {
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, i(n.key), n));
        }
      }
      function i(e) {
        var t = (function (e, t) {
          if ("object" != n(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t || "default");
            if ("object" != n(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == n(t) ? t : t + "";
      }
      r.d(t, {
        U: function () {
          return s;
        },
      });
      var a = {
          normal: 0,
          add: 1,
          multiply: 2,
          screen: 3,
          overlay: 4,
          erase: 5,
          "normal-npm": 6,
          "add-npm": 7,
          "screen-npm": 8,
          min: 9,
          max: 10,
        },
        u = (function () {
          function e() {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.data = 0),
              (this.blendMode = "normal"),
              (this.polygonOffset = 0),
              (this.blend = !0),
              (this.depthMask = !0));
          }
          return (
            (t = e),
            (n = [
              {
                key: "for2d",
                value: function () {
                  var t = new e();
                  return ((t.depthTest = !1), (t.blend = !0), t);
                },
              },
            ]),
            (r = [
              {
                key: "blend",
                get: function () {
                  return !!(1 & this.data);
                },
                set: function (e) {
                  !!(1 & this.data) !== e && (this.data ^= 1);
                },
              },
              {
                key: "offsets",
                get: function () {
                  return !!(2 & this.data);
                },
                set: function (e) {
                  !!(2 & this.data) !== e && (this.data ^= 2);
                },
              },
              {
                key: "cullMode",
                get: function () {
                  return this.culling
                    ? this.clockwiseFrontFace
                      ? "front"
                      : "back"
                    : "none";
                },
                set: function (e) {
                  "none" !== e
                    ? ((this.culling = !0),
                      (this.clockwiseFrontFace = "front" === e))
                    : (this.culling = !1);
                },
              },
              {
                key: "culling",
                get: function () {
                  return !!(4 & this.data);
                },
                set: function (e) {
                  !!(4 & this.data) !== e && (this.data ^= 4);
                },
              },
              {
                key: "depthTest",
                get: function () {
                  return !!(8 & this.data);
                },
                set: function (e) {
                  !!(8 & this.data) !== e && (this.data ^= 8);
                },
              },
              {
                key: "depthMask",
                get: function () {
                  return !!(32 & this.data);
                },
                set: function (e) {
                  !!(32 & this.data) !== e && (this.data ^= 32);
                },
              },
              {
                key: "clockwiseFrontFace",
                get: function () {
                  return !!(16 & this.data);
                },
                set: function (e) {
                  !!(16 & this.data) !== e && (this.data ^= 16);
                },
              },
              {
                key: "blendMode",
                get: function () {
                  return this._blendMode;
                },
                set: function (e) {
                  ((this.blend = "none" !== e),
                    (this._blendMode = e),
                    (this._blendModeId = a[e] || 0));
                },
              },
              {
                key: "polygonOffset",
                get: function () {
                  return this._polygonOffset;
                },
                set: function (e) {
                  ((this.offsets = !!e), (this._polygonOffset = e));
                },
              },
              {
                key: "toString",
                value: function () {
                  return "[pixi.js/core:State blendMode="
                    .concat(this.blendMode, " clockwiseFrontFace=")
                    .concat(this.clockwiseFrontFace, " culling=")
                    .concat(this.culling, " depthMask=")
                    .concat(this.depthMask, " polygonOffset=")
                    .concat(this.polygonOffset, "]");
                },
              },
            ]) && o(t.prototype, r),
            n && o(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, r, n;
        })();
      u.default2d = u.for2d();
      var s = u;
    },
    5768: function (e, t, r) {
      r.d(t, {
        g: function () {
          return o;
        },
      });
      var n = r(7856),
        o = [];
      ((o[n.K.NONE] = void 0),
        (o[n.K.DISABLED] = { stencilWriteMask: 0, stencilReadMask: 0 }),
        (o[n.K.RENDERING_MASK_ADD] = {
          stencilFront: { compare: "equal", passOp: "increment-clamp" },
          stencilBack: { compare: "equal", passOp: "increment-clamp" },
        }),
        (o[n.K.RENDERING_MASK_REMOVE] = {
          stencilFront: { compare: "equal", passOp: "decrement-clamp" },
          stencilBack: { compare: "equal", passOp: "decrement-clamp" },
        }),
        (o[n.K.MASK_ACTIVE] = {
          stencilWriteMask: 0,
          stencilFront: { compare: "equal", passOp: "keep" },
          stencilBack: { compare: "equal", passOp: "keep" },
        }),
        (o[n.K.INVERSE_MASK_ACTIVE] = {
          stencilWriteMask: 0,
          stencilFront: { compare: "not-equal", passOp: "keep" },
          stencilBack: { compare: "not-equal", passOp: "keep" },
        }));
    },
    6263: function (e, t, r) {
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function a(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != n(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var o = r.call(e, t || "default");
                if ("object" != n(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function u(e, t) {
        return "\n        for (let i = 0; i < "
          .concat(e * t, "; i++) {\n            data[offset + (((i / ")
          .concat(e, ")|0) * 4) + (i % ")
          .concat(e, ")] = v[i];\n        }\n    ");
      }
      r.d(t, {
        _: function () {
          return c;
        },
        g: function () {
          return s;
        },
      });
      var s = {
          f32: "\n        data[offset] = v;",
          i32: "\n        dataInt32[offset] = v;",
          "vec2<f32>":
            "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];",
          "vec3<f32>":
            "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];",
          "vec4<f32>":
            "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];",
          "vec2<i32>":
            "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];",
          "vec3<i32>":
            "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];",
          "vec4<i32>":
            "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];\n        dataInt32[offset + 3] = v[3];",
          "mat2x2<f32>":
            "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 4] = v[2];\n        data[offset + 5] = v[3];",
          "mat3x3<f32>":
            "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];",
          "mat4x4<f32>":
            "\n        for (let i = 0; i < 16; i++) {\n            data[offset + i] = v[i];\n        }",
          "mat3x2<f32>": u(3, 2),
          "mat4x2<f32>": u(4, 2),
          "mat2x3<f32>": u(2, 3),
          "mat4x3<f32>": u(4, 3),
          "mat2x4<f32>": u(2, 4),
          "mat3x4<f32>": u(3, 4),
        },
        c = i(
          i({}, s),
          {},
          {
            "mat2x2<f32>":
              "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];\n    ",
          },
        );
    },
    7048: function (e, t, r) {
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function a(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != n(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var o = r.call(e, t || "default");
                if ("object" != n(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == n(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.d(t, {
        Ls: function () {
          return u;
        },
        _Q: function () {
          return s;
        },
        mA: function () {
          return c;
        },
      });
      var u = {
          name: "local-uniform-bit",
          vertex: {
            header:
              "\n\n            struct LocalUniforms {\n                uTransformMatrix:mat3x3<f32>,\n                uColor:vec4<f32>,\n                uRound:f32,\n            }\n\n            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ",
            main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ",
            end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        ",
          },
        },
        s = i(
          i({}, u),
          {},
          {
            vertex: i(
              i({}, u.vertex),
              {},
              { header: u.vertex.header.replace("group(1)", "group(2)") },
            ),
          },
        ),
        c = {
          name: "local-uniform-bit",
          vertex: {
            header:
              "\n\n            uniform mat3 uTransformMatrix;\n            uniform vec4 uColor;\n            uniform float uRound;\n        ",
            main: "\n            vColor *= uColor;\n            modelMatrix = uTransformMatrix;\n        ",
            end: "\n            if(uRound == 1.)\n            {\n                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n            }\n        ",
          },
        };
    },
    7447: function (e, t, r) {
      r.d(t, {
        d: function () {
          return g;
        },
      });
      var n = r(8338),
        o = r(8594),
        i = r(9418),
        a = r(5510);
      function u(e) {
        return (
          (u =
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
          u(e)
        );
      }
      var s = ["gpu", "gl"];
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                f(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function f(e, t, r) {
        return (
          (t = p(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, p(n.key), n));
        }
      }
      function p(e) {
        var t = (function (e, t) {
          if ("object" != u(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == u(t) ? t : t + "";
      }
      function v(e, t, r) {
        return (
          (t = h(t)),
          (function (e, t) {
            if (t && ("object" == u(t) || "function" == typeof t)) return t;
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
            y()
              ? Reflect.construct(t, r || [], h(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function y() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (y = function () {
          return !!e;
        })();
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function b(e, t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          b(e, t)
        );
      }
      var m = (function (e) {
        function t(e) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = v(this, t, [(e = l(l({}, t.defaultOptions), e))])).enabled =
              !0),
            (r._state = a.U.for2d()),
            (r.blendMode = e.blendMode),
            (r.padding = e.padding),
            "boolean" == typeof e.antialias
              ? (r.antialias = e.antialias ? "on" : "off")
              : (r.antialias = e.antialias),
            (r.resolution = e.resolution),
            (r.blendRequired = e.blendRequired),
            (r.clipToViewport = e.clipToViewport),
            r.addResource("uTexture", 0, 1),
            e.blendRequired && r.addResource("uBackTexture", 0, 3),
            r
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
              t && b(e, t));
          })(t, e),
          (r = t),
          (u = [
            {
              key: "from",
              value: function (e) {
                var r,
                  i,
                  a = e.gpu,
                  u = e.gl,
                  c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = (function (e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var n in e)
                          if ({}.hasOwnProperty.call(e, n)) {
                            if (-1 !== t.indexOf(n)) continue;
                            r[n] = e[n];
                          }
                        return r;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (n = 0; n < i.length; n++)
                        ((r = i[n]),
                          -1 === t.indexOf(r) &&
                            {}.propertyIsEnumerable.call(e, r) &&
                            (o[r] = e[r]));
                    }
                    return o;
                  })(e, s);
                return (
                  a && (r = o.B.from(a)),
                  u && (i = n.M.from(u)),
                  new t(l({ gpuProgram: r, glProgram: i }, c))
                );
              },
            },
          ]),
          (i = [
            {
              key: "apply",
              value: function (e, t, r, n) {
                e.applyFilter(this, t, r, n);
              },
            },
            {
              key: "blendMode",
              get: function () {
                return this._state.blendMode;
              },
              set: function (e) {
                this._state.blendMode = e;
              },
            },
          ]) && d(r.prototype, i),
          u && d(r, u),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, i, u;
      })(i.M);
      m.defaultOptions = {
        blendMode: "normal",
        resolution: 1,
        padding: 0,
        antialias: "off",
        blendRequired: !1,
        clipToViewport: !0,
      };
      var g = m;
    },
    7546: function (e, t, r) {
      r.d(t, {
        O: function () {
          return y;
        },
      });
      var n = r(2148),
        o = r(4822),
        i = r(3760);
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
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return s(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return s(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? s(e, t)
                    : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                f(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function f(e, t, r) {
        return (
          (t = p(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, p(n.key), n));
        }
      }
      function p(e) {
        var t = (function (e, t) {
          if ("object" != a(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == a(t) ? t : t + "";
      }
      var v = (function () {
        return (
          (e = function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (this.uid = (0, n.L)("renderTarget")),
              (this.colorTextures = []),
              (this.dirtyId = 0),
              (this.isRoot = !1),
              (this._size = new Float32Array(2)),
              (this._managedColorTextures = !1),
              (t = l(l({}, e.defaultOptions), t)),
              (this.stencil = t.stencil),
              (this.depth = t.depth),
              (this.isRoot = t.isRoot),
              "number" == typeof t.colorTextures)
            ) {
              this._managedColorTextures = !0;
              for (var r = 0; r < t.colorTextures; r++)
                this.colorTextures.push(
                  new o.v({
                    width: t.width,
                    height: t.height,
                    resolution: t.resolution,
                    antialias: t.antialias,
                  }),
                );
            } else {
              this.colorTextures = u(
                t.colorTextures.map(function (e) {
                  return e.source;
                }),
              );
              var a = this.colorTexture.source;
              this.resize(a.width, a.height, a._resolution);
            }
            (this.colorTexture.source.on("resize", this.onSourceResize, this),
              (t.depthStencilTexture || this.stencil) &&
                (t.depthStencilTexture instanceof i.g ||
                t.depthStencilTexture instanceof o.v
                  ? (this.depthStencilTexture = t.depthStencilTexture.source)
                  : this.ensureDepthStencilTexture()));
          }),
          (t = [
            {
              key: "size",
              get: function () {
                var e = this._size;
                return ((e[0] = this.pixelWidth), (e[1] = this.pixelHeight), e);
              },
            },
            {
              key: "width",
              get: function () {
                return this.colorTexture.source.width;
              },
            },
            {
              key: "height",
              get: function () {
                return this.colorTexture.source.height;
              },
            },
            {
              key: "pixelWidth",
              get: function () {
                return this.colorTexture.source.pixelWidth;
              },
            },
            {
              key: "pixelHeight",
              get: function () {
                return this.colorTexture.source.pixelHeight;
              },
            },
            {
              key: "resolution",
              get: function () {
                return this.colorTexture.source._resolution;
              },
            },
            {
              key: "colorTexture",
              get: function () {
                return this.colorTextures[0];
              },
            },
            {
              key: "onSourceResize",
              value: function (e) {
                this.resize(e.width, e.height, e._resolution, !0);
              },
            },
            {
              key: "ensureDepthStencilTexture",
              value: function () {
                this.depthStencilTexture ||
                  (this.depthStencilTexture = new o.v({
                    width: this.width,
                    height: this.height,
                    resolution: this.resolution,
                    format: "depth24plus-stencil8",
                    autoGenerateMipmaps: !1,
                    antialias: !1,
                    mipLevelCount: 1,
                  }));
              },
            },
            {
              key: "resize",
              value: function (e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : this.resolution,
                  n =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                (this.dirtyId++,
                  this.colorTextures.forEach(function (o, i) {
                    (n && 0 === i) || o.source.resize(e, t, r);
                  }),
                  this.depthStencilTexture &&
                    this.depthStencilTexture.source.resize(e, t, r));
              },
            },
            {
              key: "destroy",
              value: function () {
                (this.colorTexture.source.off(
                  "resize",
                  this.onSourceResize,
                  this,
                ),
                  this._managedColorTextures &&
                    this.colorTextures.forEach(function (e) {
                      e.destroy();
                    }),
                  this.depthStencilTexture &&
                    (this.depthStencilTexture.destroy(),
                    delete this.depthStencilTexture));
              },
            },
          ]),
          t && d(e.prototype, t),
          r && d(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      v.defaultOptions = {
        width: 0,
        height: 0,
        resolution: 1,
        colorTextures: 1,
        stencil: !1,
        depth: !1,
        antialias: !1,
        isRoot: !1,
      };
      var y = v;
    },
    8536: function (e, t, r) {
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var n = r(5179);
      function o(e, t, r, o) {
        for (
          var i = [
              "\n        var v = null;\n        var v2 = null;\n        var t = 0;\n        var index = 0;\n        var name = null;\n        var arrayOffset = null;\n    ",
            ],
            a = 0,
            u = 0;
          u < e.length;
          u++
        ) {
          for (
            var s = e[u], c = s.data.name, l = !1, f = 0, d = 0;
            d < n.$.length;
            d++
          ) {
            if (n.$[d].test(s.data)) {
              ((f = s.offset / 4),
                i.push(
                  'name = "'.concat(c, '";'),
                  "offset += ".concat(f - a, ";"),
                  n.$[d][t] || n.$[d].ubo,
                ),
                (l = !0));
              break;
            }
          }
          if (!l)
            if (s.data.size > 1) ((f = s.offset / 4), i.push(r(s, f - a)));
            else {
              var p = o[s.data.type];
              ((f = s.offset / 4),
                i.push(
                  "\n                    v = uv."
                    .concat(c, ";\n                    offset += ")
                    .concat(f - a, ";\n                    ")
                    .concat(p, ";\n                "),
                ));
            }
          a = f;
        }
        var v = i.join("\n");
        return new Function("uv", "data", "dataInt32", "offset", v);
      }
    },
    9464: function (e, t, r) {
      r.d(t, {
        d: function () {
          return d;
        },
      });
      var n = r(9586),
        o = r(2148);
      function i(e) {
        return (
          (i =
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
          i(e)
        );
      }
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, u(n.key), n));
        }
      }
      function u(e) {
        var t = (function (e, t) {
          if ("object" != i(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == i(t) ? t : t + "";
      }
      function s(e, t, r) {
        return (
          (t = l(t)),
          (function (e, t) {
            if (t && ("object" == i(t) || "function" == typeof t)) return t;
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
            c()
              ? Reflect.construct(t, r || [], l(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function c() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (c = function () {
          return !!e;
        })();
      }
      function l(e) {
        return (
          (l = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          l(e)
        );
      }
      function f(e, t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          f(e, t)
        );
      }
      var d = (function (e) {
        function t(e) {
          var r,
            n = e.buffer,
            i = e.offset,
            a = e.size;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = s(this, t)).uid = (0, o.L)("buffer")),
            (r._resourceType = "bufferResource"),
            (r._touched = 0),
            (r._resourceId = (0, o.L)("resource")),
            (r._bufferResource = !0),
            (r.destroyed = !1),
            (r.buffer = n),
            (r.offset = 0 | i),
            (r.size = a),
            r.buffer.on("change", r.onBufferChange, r),
            r
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
              t && f(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "onBufferChange",
              value: function () {
                ((this._resourceId = (0, o.L)("resource")),
                  this.emit("change", this));
              },
            },
            {
              key: "destroy",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                ((this.destroyed = !0),
                  e && this.buffer.destroy(),
                  this.emit("change", this),
                  (this.buffer = null),
                  this.removeAllListeners());
              },
            },
          ]),
          n && a(r.prototype, n),
          i && a(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, i;
      })(n.A);
    },
    9589: function (e, t, r) {
      r.d(t, {
        q: function () {
          return i;
        },
      });
      var n = r(9209),
        o = r(4595);
      function i(e, t) {
        for (var r in e.attributes) {
          var i,
            a,
            u,
            s = e.attributes[r],
            c = t[r];
          if (c)
            ((null !== (i = s.format) && void 0 !== i) || (s.format = c.format),
              (null !== (a = s.offset) && void 0 !== a) ||
                (s.offset = c.offset),
              (null !== (u = s.instance) && void 0 !== u) ||
                (s.instance = c.instance));
          else
            (0, n.R)(
              "Attribute ".concat(
                r,
                " is not present in the shader, but is present in the geometry. Unable to infer attribute details.",
              ),
            );
        }
        !(function (e) {
          var t = e.buffers,
            r = e.attributes,
            n = {},
            i = {};
          for (var a in t) {
            var u = t[a];
            ((n[u.uid] = 0), (i[u.uid] = 0));
          }
          for (var s in r) {
            var c = r[s];
            n[c.buffer.uid] += (0, o.m)(c.format).stride;
          }
          for (var l in r) {
            var f,
              d,
              p = r[l];
            ((null !== (f = p.stride) && void 0 !== f) ||
              (p.stride = n[p.buffer.uid]),
              (null !== (d = p.start) && void 0 !== d) ||
                (p.start = i[p.buffer.uid]),
              (i[p.buffer.uid] += (0, o.m)(p.format).stride));
          }
        })(e);
      }
    },
    9627: function (e, t, r) {
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, i(n.key), n));
        }
      }
      function i(e) {
        var t = (function (e, t) {
          if ("object" != n(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t || "default");
            if ("object" != n(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == n(t) ? t : t + "";
      }
      r.d(t, {
        K: function () {
          return a;
        },
      });
      var a = (function () {
        return (
          (e = function e() {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.batcherName = "default"),
              (this.topology = "triangle-list"),
              (this.attributeSize = 4),
              (this.indexSize = 6),
              (this.packAsQuad = !0),
              (this.roundPixels = 0),
              (this._attributeStart = 0),
              (this._batcher = null),
              (this._batch = null));
          }),
          (t = [
            {
              key: "blendMode",
              get: function () {
                return this.renderable.groupBlendMode;
              },
            },
            {
              key: "color",
              get: function () {
                return this.renderable.groupColorAlpha;
              },
            },
            {
              key: "reset",
              value: function () {
                ((this.renderable = null),
                  (this.texture = null),
                  (this._batcher = null),
                  (this._batch = null),
                  (this.bounds = null));
              },
            },
            { key: "destroy", value: function () {} },
          ]) && o(e.prototype, t),
          r && o(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
    },
    9860: function (e, t, r) {
      r.d(t, {
        W: function () {
          return c;
        },
      });
      var n = r(462),
        o = r(4480),
        i = r(7183);
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
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, s(n.key), n));
        }
      }
      function s(e) {
        var t = (function (e, t) {
          if ("object" != a(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == a(t) ? t : t + "";
      }
      var c = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._syncFunctionHash = Object.create(null)),
              (this._adaptor = t),
              this._systemCheck());
          }),
          (t = [
            {
              key: "_systemCheck",
              value: function () {
                if (!(0, n.f)())
                  throw new Error(
                    "Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.",
                  );
              },
            },
            {
              key: "ensureUniformGroup",
              value: function (e) {
                var t = this.getUniformGroupData(e);
                e.buffer ||
                  (e.buffer = new o.h({
                    data: new Float32Array(t.layout.size / 4),
                    usage: i.S.UNIFORM | i.S.COPY_DST,
                  }));
              },
            },
            {
              key: "getUniformGroupData",
              value: function (e) {
                return (
                  this._syncFunctionHash[e._signature] ||
                  this._initUniformGroup(e)
                );
              },
            },
            {
              key: "_initUniformGroup",
              value: function (e) {
                var t = e._signature,
                  r = this._syncFunctionHash[t];
                if (!r) {
                  var n = Object.keys(e.uniformStructures).map(function (t) {
                      return e.uniformStructures[t];
                    }),
                    o = this._adaptor.createUboElements(n),
                    i = this._generateUboSync(o.uboElements);
                  r = this._syncFunctionHash[t] = {
                    layout: o,
                    syncFunction: i,
                  };
                }
                return this._syncFunctionHash[t];
              },
            },
            {
              key: "_generateUboSync",
              value: function (e) {
                return this._adaptor.generateUboSync(e);
              },
            },
            {
              key: "syncUniformGroup",
              value: function (e, t, r) {
                var n = this.getUniformGroupData(e);
                e.buffer ||
                  (e.buffer = new o.h({
                    data: new Float32Array(n.layout.size / 4),
                    usage: i.S.UNIFORM | i.S.COPY_DST,
                  }));
                var a = null;
                return (
                  t || ((t = e.buffer.data), (a = e.buffer.dataInt32)),
                  r || (r = 0),
                  n.syncFunction(e.uniforms, t, a, r),
                  !0
                );
              },
            },
            {
              key: "updateUniformGroup",
              value: function (e) {
                if (e.isStatic && !e._dirtyId) return !1;
                e._dirtyId = 0;
                var t = this.syncUniformGroup(e);
                return (e.buffer.update(), t);
              },
            },
            {
              key: "destroy",
              value: function () {
                this._syncFunctionHash = null;
              },
            },
          ]) && u(e.prototype, t),
          r && u(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
    },
  },
]);
