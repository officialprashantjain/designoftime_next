"use strict";
(self.webpackChunkHM_Starter = self.webpackChunkHM_Starter || []).push([
  [649],
  {
    9649: function (e, t, r) {
      (r.r(t),
        r.d(t, {
          WebGLRenderer: function () {
            return jr;
          },
        }));
      var n = r(6244),
        o = r(410),
        i = r(4641),
        a = r(6854),
        u = r(7771),
        s = r(7048),
        c = r(3664),
        l = r(1969),
        f = r(9418),
        h = r(8309);
      function _(e) {
        return (
          (_ =
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
          _(e)
        );
      }
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, m(n.key), n));
        }
      }
      function m(e) {
        var t = (function (e, t) {
          if ("object" != _(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != _(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == _(t) ? t : t + "";
      }
      var b = (function () {
        return (
          (e = function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (t = [
            {
              key: "contextChange",
              value: function (e) {
                var t = new h.k({
                    uColor: {
                      value: new Float32Array([1, 1, 1, 1]),
                      type: "vec4<f32>",
                    },
                    uTransformMatrix: { value: new o.u(), type: "mat3x3<f32>" },
                    uRound: { value: 0, type: "f32" },
                  }),
                  r = e.limits.maxBatchableTextures,
                  n = (0, i.I)({
                    name: "graphics",
                    bits: [a.a, (0, u.P)(r), s.mA, c.m],
                  });
                this.shader = new f.M({
                  glProgram: n,
                  resources: { localUniforms: t, batchSamplers: (0, l.n)(r) },
                });
              },
            },
            {
              key: "execute",
              value: function (e, t) {
                var r = t.context,
                  n = r.customShader || this.shader,
                  o = e.renderer,
                  i = o.graphicsContext.getContextRenderData(r),
                  a = i.batcher,
                  u = i.instructions;
                ((n.groups[0] = o.globalUniforms.bindGroup),
                  o.state.set(e.state),
                  o.shader.bind(n),
                  o.geometry.bind(a.geometry, n.glProgram));
                for (
                  var s = u.instructions, c = 0;
                  c < u.instructionSize;
                  c++
                ) {
                  var l = s[c];
                  if (l.size) {
                    for (var f = 0; f < l.textures.count; f++)
                      o.texture.bind(l.textures.textures[f], f);
                    o.geometry.draw(l.topology, l.size, l.start);
                  }
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                (this.shader.destroy(!0), (this.shader = null));
              },
            },
          ]) && v(e.prototype, t),
          r && v(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      b.extension = { type: [n.Ag.WebGLPipesAdaptor], name: "graphics" };
      var d = r(150),
        p = r(3760),
        y = r(9209);
      function g(e) {
        return (
          (g =
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
          g(e)
        );
      }
      function E(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, S(n.key), n));
        }
      }
      function S(e) {
        var t = (function (e, t) {
          if ("object" != g(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == g(t) ? t : t + "";
      }
      var T = (function () {
        return (
          (e = function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (t = [
            {
              key: "init",
              value: function () {
                var e = (0, i.I)({ name: "mesh", bits: [s.mA, d.m, c.m] });
                this._shader = new f.M({
                  glProgram: e,
                  resources: {
                    uTexture: p.g.EMPTY.source,
                    textureUniforms: {
                      uTextureMatrix: { type: "mat3x3<f32>", value: new o.u() },
                    },
                  },
                });
              },
            },
            {
              key: "execute",
              value: function (e, t) {
                var r = e.renderer,
                  n = t._shader;
                if (n) {
                  if (!n.glProgram)
                    return void (0, y.R)(
                      "Mesh shader has no glProgram",
                      t.shader,
                    );
                } else {
                  n = this._shader;
                  var o = t.texture,
                    i = o.source;
                  ((n.resources.uTexture = i),
                    (n.resources.uSampler = i.style),
                    (n.resources.textureUniforms.uniforms.uTextureMatrix =
                      o.textureMatrix.mapCoord));
                }
                ((n.groups[100] = r.globalUniforms.bindGroup),
                  (n.groups[101] = e.localUniformsBindGroup),
                  r.encoder.draw({
                    geometry: t._geometry,
                    shader: n,
                    state: t.state,
                  }));
              },
            },
            {
              key: "destroy",
              value: function () {
                (this._shader.destroy(!0), (this._shader = null));
              },
            },
          ]) && E(e.prototype, t),
          r && E(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      T.extension = { type: [n.Ag.WebGLPipesAdaptor], name: "mesh" };
      var R = r(5510);
      function x(e) {
        return (
          (x =
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
          x(e)
        );
      }
      function A(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, O(n.key), n));
        }
      }
      function O(e) {
        var t = (function (e, t) {
          if ("object" != x(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != x(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == x(t) ? t : t + "";
      }
      var B = (function () {
        return (
          (e = function e() {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._tempState = R.U.for2d()),
              (this._didUploadHash = {}));
          }),
          (t = [
            {
              key: "init",
              value: function (e) {
                e.renderer.runners.contextChange.add(this);
              },
            },
            {
              key: "contextChange",
              value: function () {
                this._didUploadHash = {};
              },
            },
            {
              key: "start",
              value: function (e, t, r) {
                var n = e.renderer,
                  o = this._didUploadHash[r.uid];
                (n.shader.bind(r, o),
                  o || (this._didUploadHash[r.uid] = !0),
                  n.shader.updateUniformGroup(n.globalUniforms.uniformGroup),
                  n.geometry.bind(t, r.glProgram));
              },
            },
            {
              key: "execute",
              value: function (e, t) {
                var r = e.renderer;
                ((this._tempState.blendMode = t.blendMode),
                  r.state.set(this._tempState));
                for (
                  var n = t.textures.textures, o = 0;
                  o < t.textures.count;
                  o++
                )
                  r.texture.bind(n[o], o);
                r.geometry.draw(t.topology, t.size, t.start);
              },
            },
          ]) && A(e.prototype, t),
          r && A(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      B.extension = { type: [n.Ag.WebGLPipesAdaptor], name: "batch" };
      var P = r(7453),
        N = r(3863),
        C = r(2664),
        G = r(7183),
        w = (function (e) {
          return (
            (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER"),
            (e[(e.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
            (e[(e.UNIFORM_BUFFER = 35345)] = "UNIFORM_BUFFER"),
            e
          );
        })(w || {});
      function D(e) {
        return (
          (D =
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
          D(e)
        );
      }
      function I(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, U(n.key), n));
        }
      }
      function F(e, t, r) {
        return (
          t && I(e.prototype, t),
          r && I(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function U(e) {
        var t = (function (e, t) {
          if ("object" != D(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != D(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == D(t) ? t : t + "";
      }
      var L = F(function e(t, r) {
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._lastBindBaseLocation = -1),
          (this._lastBindCallId = -1),
          (this.buffer = t || null),
          (this.updateID = -1),
          (this.byteLength = -1),
          (this.type = r));
      });
      function k(e) {
        return (
          (k =
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
          k(e)
        );
      }
      function M(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, j(n.key), n));
        }
      }
      function j(e) {
        var t = (function (e, t) {
          if ("object" != k(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != k(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == k(t) ? t : t + "";
      }
      var H = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._gpuBuffers = Object.create(null)),
              (this._boundBufferBases = Object.create(null)),
              (this._minBaseLocation = 0),
              (this._nextBindBaseIndex = this._minBaseLocation),
              (this._bindCallId = 0),
              (this._renderer = t),
              this._renderer.renderableGC.addManagedHash(this, "_gpuBuffers"));
          }),
          (t = [
            {
              key: "destroy",
              value: function () {
                (this.destroyAll(),
                  (this._renderer = null),
                  (this._gl = null),
                  (this._gpuBuffers = {}),
                  (this._boundBufferBases = {}));
              },
            },
            {
              key: "contextChange",
              value: function () {
                ((this._gl = this._renderer.gl),
                  (this._gpuBuffers = Object.create(null)),
                  (this._maxBindings =
                    this._renderer.limits.maxUniformBindings));
              },
            },
            {
              key: "getGlBuffer",
              value: function (e) {
                return this._gpuBuffers[e.uid] || this.createGLBuffer(e);
              },
            },
            {
              key: "bind",
              value: function (e) {
                var t = this._gl,
                  r = this.getGlBuffer(e);
                t.bindBuffer(r.type, r.buffer);
              },
            },
            {
              key: "bindBufferBase",
              value: function (e, t) {
                var r = this._gl;
                this._boundBufferBases[t] !== e &&
                  ((this._boundBufferBases[t] = e),
                  (e._lastBindBaseLocation = t),
                  r.bindBufferBase(r.UNIFORM_BUFFER, t, e.buffer));
              },
            },
            {
              key: "nextBindBase",
              value: function (e) {
                (this._bindCallId++,
                  (this._minBaseLocation = 0),
                  e &&
                    ((this._boundBufferBases[0] = null),
                    (this._minBaseLocation = 1),
                    this._nextBindBaseIndex < 1 &&
                      (this._nextBindBaseIndex = 1)));
              },
            },
            {
              key: "freeLocationForBufferBase",
              value: function (e) {
                var t = this.getLastBindBaseLocation(e);
                if (t >= this._minBaseLocation)
                  return ((e._lastBindCallId = this._bindCallId), t);
                for (var r = 0, n = this._nextBindBaseIndex; r < 2; ) {
                  n >= this._maxBindings && ((n = this._minBaseLocation), r++);
                  var o = this._boundBufferBases[n];
                  if (!o || o._lastBindCallId !== this._bindCallId) break;
                  n++;
                }
                return (
                  (t = n),
                  (this._nextBindBaseIndex = n + 1),
                  r >= 2
                    ? -1
                    : ((e._lastBindCallId = this._bindCallId),
                      (this._boundBufferBases[t] = null),
                      t)
                );
              },
            },
            {
              key: "getLastBindBaseLocation",
              value: function (e) {
                var t = e._lastBindBaseLocation;
                return this._boundBufferBases[t] === e ? t : -1;
              },
            },
            {
              key: "bindBufferRange",
              value: function (e, t, r, n) {
                var o = this._gl;
                (r || (r = 0),
                  t || (t = 0),
                  (this._boundBufferBases[t] = null),
                  o.bindBufferRange(
                    o.UNIFORM_BUFFER,
                    t || 0,
                    e.buffer,
                    256 * r,
                    n || 256,
                  ));
              },
            },
            {
              key: "updateBuffer",
              value: function (e) {
                var t = this._gl,
                  r = this.getGlBuffer(e);
                if (e._updateID === r.updateID) return r;
                ((r.updateID = e._updateID), t.bindBuffer(r.type, r.buffer));
                var n = e.data,
                  o =
                    e.descriptor.usage & G.S.STATIC
                      ? t.STATIC_DRAW
                      : t.DYNAMIC_DRAW;
                return (
                  n
                    ? r.byteLength >= n.byteLength
                      ? t.bufferSubData(
                          r.type,
                          0,
                          n,
                          0,
                          e._updateSize / n.BYTES_PER_ELEMENT,
                        )
                      : ((r.byteLength = n.byteLength),
                        t.bufferData(r.type, n, o))
                    : ((r.byteLength = e.descriptor.size),
                      t.bufferData(r.type, r.byteLength, o)),
                  r
                );
              },
            },
            {
              key: "destroyAll",
              value: function () {
                var e = this._gl;
                for (var t in this._gpuBuffers)
                  this._gpuBuffers[t] &&
                    e.deleteBuffer(this._gpuBuffers[t].buffer);
                this._gpuBuffers = Object.create(null);
              },
            },
            {
              key: "onBufferDestroy",
              value: function (e, t) {
                if (this._gpuBuffers[e.uid]) {
                  var r = this._gpuBuffers[e.uid],
                    n = this._gl;
                  (t || n.deleteBuffer(r.buffer),
                    e.off("destroy", this.onBufferDestroy, this),
                    (this._gpuBuffers[e.uid] = null));
                }
              },
            },
            {
              key: "createGLBuffer",
              value: function (e) {
                var t = this._gl,
                  r = w.ARRAY_BUFFER;
                e.descriptor.usage & G.S.INDEX
                  ? (r = w.ELEMENT_ARRAY_BUFFER)
                  : e.descriptor.usage & G.S.UNIFORM && (r = w.UNIFORM_BUFFER);
                var n = new L(t.createBuffer(), r);
                return (
                  (this._gpuBuffers[e.uid] = n),
                  e.on("destroy", this.onBufferDestroy, this),
                  n
                );
              },
            },
            {
              key: "resetState",
              value: function () {
                this._boundBufferBases = Object.create(null);
              },
            },
          ]) && M(e.prototype, t),
          r && M(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      H.extension = { type: [n.Ag.WebGLSystem], name: "buffer" };
      var V = r(8689);
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
      function W(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                K(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : W(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function K(e, t, r) {
        return (
          (t = q(t)) in e
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
      function z(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, q(n.key), n));
        }
      }
      function q(e) {
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
      var $ = (function () {
        function e(t) {
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.supports = {
              uint32Indices: !0,
              uniformBufferObject: !0,
              vertexArrayObject: !0,
              srgbTextures: !0,
              nonPowOf2wrapping: !0,
              msaa: !0,
              nonPowOf2mipmaps: !0,
            }),
            (this._renderer = t),
            (this.extensions = Object.create(null)),
            (this.handleContextLost = this.handleContextLost.bind(this)),
            (this.handleContextRestored =
              this.handleContextRestored.bind(this)));
        }
        return (
          (t = e),
          (r = [
            {
              key: "isLost",
              get: function () {
                return !this.gl || this.gl.isContextLost();
              },
            },
            {
              key: "contextChange",
              value: function (e) {
                ((this.gl = e), (this._renderer.gl = e));
              },
            },
            {
              key: "init",
              value: function (t) {
                t = Y(Y({}, e.defaultOptions), t);
                var r = (this.multiView = t.multiView);
                if (
                  (t.context &&
                    r &&
                    ((0, y.R)(
                      "Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together.",
                    ),
                    (r = !1)),
                  (this.canvas = r
                    ? V.e
                        .get()
                        .createCanvas(
                          this._renderer.canvas.width,
                          this._renderer.canvas.height,
                        )
                    : this._renderer.view.canvas),
                  t.context)
                )
                  this.initFromContext(t.context);
                else {
                  var n,
                    o,
                    i = this._renderer.background.alpha < 1,
                    a =
                      null === (n = t.premultipliedAlpha) || void 0 === n || n,
                    u = t.antialias && !this._renderer.backBuffer.useBackBuffer;
                  this.createContext(t.preferWebGLVersion, {
                    alpha: i,
                    premultipliedAlpha: a,
                    antialias: u,
                    stencil: !0,
                    preserveDrawingBuffer: t.preserveDrawingBuffer,
                    powerPreference:
                      null !== (o = t.powerPreference) && void 0 !== o
                        ? o
                        : "default",
                  });
                }
              },
            },
            {
              key: "ensureCanvasSize",
              value: function (e) {
                if (this.multiView) {
                  var t = this.canvas;
                  (t.width < e.width || t.height < e.height) &&
                    ((t.width = Math.max(e.width, e.width)),
                    (t.height = Math.max(e.height, e.height)));
                } else
                  e !== this.canvas &&
                    (0, y.R)(
                      "multiView is disabled, but targetCanvas is not the main canvas",
                    );
              },
            },
            {
              key: "initFromContext",
              value: function (e) {
                ((this.gl = e),
                  (this.webGLVersion =
                    e instanceof V.e.get().getWebGLRenderingContext() ? 1 : 2),
                  this.getExtensions(),
                  this.validateContext(e),
                  this._renderer.runners.contextChange.emit(e));
                var t = this._renderer.view.canvas;
                (t.addEventListener(
                  "webglcontextlost",
                  this.handleContextLost,
                  !1,
                ),
                  t.addEventListener(
                    "webglcontextrestored",
                    this.handleContextRestored,
                    !1,
                  ));
              },
            },
            {
              key: "createContext",
              value: function (e, t) {
                var r,
                  n = this.canvas;
                if (
                  (2 === e && (r = n.getContext("webgl2", t)),
                  !r && !(r = n.getContext("webgl", t)))
                )
                  throw new Error(
                    "This browser does not support WebGL. Try using the canvas renderer",
                  );
                ((this.gl = r), this.initFromContext(this.gl));
              },
            },
            {
              key: "getExtensions",
              value: function () {
                var e = this.gl,
                  t = {
                    anisotropicFiltering: e.getExtension(
                      "EXT_texture_filter_anisotropic",
                    ),
                    floatTextureLinear: e.getExtension(
                      "OES_texture_float_linear",
                    ),
                    s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: e.getExtension(
                      "WEBGL_compressed_texture_s3tc_srgb",
                    ),
                    etc: e.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc:
                      e.getExtension("WEBGL_compressed_texture_pvrtc") ||
                      e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: e.getExtension("WEBGL_compressed_texture_atc"),
                    astc: e.getExtension("WEBGL_compressed_texture_astc"),
                    bptc: e.getExtension("EXT_texture_compression_bptc"),
                    rgtc: e.getExtension("EXT_texture_compression_rgtc"),
                    loseContext: e.getExtension("WEBGL_lose_context"),
                  };
                if (1 === this.webGLVersion)
                  this.extensions = Y(
                    Y({}, t),
                    {},
                    {
                      drawBuffers: e.getExtension("WEBGL_draw_buffers"),
                      depthTexture: e.getExtension("WEBGL_depth_texture"),
                      vertexArrayObject:
                        e.getExtension("OES_vertex_array_object") ||
                        e.getExtension("MOZ_OES_vertex_array_object") ||
                        e.getExtension("WEBKIT_OES_vertex_array_object"),
                      uint32ElementIndex: e.getExtension(
                        "OES_element_index_uint",
                      ),
                      floatTexture: e.getExtension("OES_texture_float"),
                      floatTextureLinear: e.getExtension(
                        "OES_texture_float_linear",
                      ),
                      textureHalfFloat: e.getExtension(
                        "OES_texture_half_float",
                      ),
                      textureHalfFloatLinear: e.getExtension(
                        "OES_texture_half_float_linear",
                      ),
                      vertexAttribDivisorANGLE: e.getExtension(
                        "ANGLE_instanced_arrays",
                      ),
                      srgb: e.getExtension("EXT_sRGB"),
                    },
                  );
                else {
                  this.extensions = Y(
                    Y({}, t),
                    {},
                    {
                      colorBufferFloat: e.getExtension(
                        "EXT_color_buffer_float",
                      ),
                    },
                  );
                  var r = e.getExtension("WEBGL_provoking_vertex");
                  r && r.provokingVertexWEBGL(r.FIRST_VERTEX_CONVENTION_WEBGL);
                }
              },
            },
            {
              key: "handleContextLost",
              value: function (e) {
                var t = this;
                (e.preventDefault(),
                  this._contextLossForced &&
                    ((this._contextLossForced = !1),
                    setTimeout(function () {
                      var e;
                      t.gl.isContextLost() &&
                        (null === (e = t.extensions.loseContext) ||
                          void 0 === e ||
                          e.restoreContext());
                    }, 0)));
              },
            },
            {
              key: "handleContextRestored",
              value: function () {
                (this.getExtensions(),
                  this._renderer.runners.contextChange.emit(this.gl));
              },
            },
            {
              key: "destroy",
              value: function () {
                var e,
                  t = this._renderer.view.canvas;
                ((this._renderer = null),
                  t.removeEventListener(
                    "webglcontextlost",
                    this.handleContextLost,
                  ),
                  t.removeEventListener(
                    "webglcontextrestored",
                    this.handleContextRestored,
                  ),
                  this.gl.useProgram(null),
                  null === (e = this.extensions.loseContext) ||
                    void 0 === e ||
                    e.loseContext());
              },
            },
            {
              key: "forceContextLoss",
              value: function () {
                var e;
                (null === (e = this.extensions.loseContext) ||
                  void 0 === e ||
                  e.loseContext(),
                  (this._contextLossForced = !0));
              },
            },
            {
              key: "validateContext",
              value: function (e) {
                var t = e.getContextAttributes();
                t &&
                  !t.stencil &&
                  (0, y.R)(
                    "Provided WebGL context does not have a stencil buffer, masks may not render correctly",
                  );
                var r = this.supports,
                  n = 2 === this.webGLVersion,
                  o = this.extensions;
                ((r.uint32Indices = n || !!o.uint32ElementIndex),
                  (r.uniformBufferObject = n),
                  (r.vertexArrayObject = n || !!o.vertexArrayObject),
                  (r.srgbTextures = n || !!o.srgb),
                  (r.nonPowOf2wrapping = n),
                  (r.nonPowOf2mipmaps = n),
                  (r.msaa = n),
                  r.uint32Indices ||
                    (0, y.R)(
                      "Provided WebGL context does not support 32 index buffer, large scenes may not render correctly",
                    ));
              },
            },
          ]) && z(t.prototype, r),
          n && z(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, r, n;
      })();
      (($.extension = { type: [n.Ag.WebGLSystem], name: "context" }),
        ($.defaultOptions = {
          context: null,
          premultipliedAlpha: !0,
          preserveDrawingBuffer: !1,
          powerPreference: void 0,
          preferWebGLVersion: 2,
          multiView: !1,
        }));
      var Z = $,
        Q = r(4595),
        J = r(9589),
        ee = (function (e) {
          return (
            (e[(e.RGBA = 6408)] = "RGBA"),
            (e[(e.RGB = 6407)] = "RGB"),
            (e[(e.RG = 33319)] = "RG"),
            (e[(e.RED = 6403)] = "RED"),
            (e[(e.RGBA_INTEGER = 36249)] = "RGBA_INTEGER"),
            (e[(e.RGB_INTEGER = 36248)] = "RGB_INTEGER"),
            (e[(e.RG_INTEGER = 33320)] = "RG_INTEGER"),
            (e[(e.RED_INTEGER = 36244)] = "RED_INTEGER"),
            (e[(e.ALPHA = 6406)] = "ALPHA"),
            (e[(e.LUMINANCE = 6409)] = "LUMINANCE"),
            (e[(e.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
            (e[(e.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
            (e[(e.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"),
            e
          );
        })(ee || {}),
        te = (function (e) {
          return (
            (e[(e.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
            (e[(e.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
            (e[(e.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              "TEXTURE_CUBE_MAP_POSITIVE_X"),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_X"),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Y"),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Z"),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Z"),
            e
          );
        })(te || {}),
        re = (function (e) {
          return (
            (e[(e.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
            (e[(e.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
            (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
            (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
            (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
            (e[(e.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
            (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              "UNSIGNED_INT_10F_11F_11F_REV"),
            (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              "UNSIGNED_INT_2_10_10_10_REV"),
            (e[(e.UNSIGNED_INT_24_8 = 34042)] = "UNSIGNED_INT_24_8"),
            (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              "UNSIGNED_INT_5_9_9_9_REV"),
            (e[(e.BYTE = 5120)] = "BYTE"),
            (e[(e.SHORT = 5122)] = "SHORT"),
            (e[(e.INT = 5124)] = "INT"),
            (e[(e.FLOAT = 5126)] = "FLOAT"),
            (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              "FLOAT_32_UNSIGNED_INT_24_8_REV"),
            (e[(e.HALF_FLOAT = 36193)] = "HALF_FLOAT"),
            e
          );
        })(re || {}),
        ne = {
          uint8x2: re.UNSIGNED_BYTE,
          uint8x4: re.UNSIGNED_BYTE,
          sint8x2: re.BYTE,
          sint8x4: re.BYTE,
          unorm8x2: re.UNSIGNED_BYTE,
          unorm8x4: re.UNSIGNED_BYTE,
          snorm8x2: re.BYTE,
          snorm8x4: re.BYTE,
          uint16x2: re.UNSIGNED_SHORT,
          uint16x4: re.UNSIGNED_SHORT,
          sint16x2: re.SHORT,
          sint16x4: re.SHORT,
          unorm16x2: re.UNSIGNED_SHORT,
          unorm16x4: re.UNSIGNED_SHORT,
          snorm16x2: re.SHORT,
          snorm16x4: re.SHORT,
          float16x2: re.HALF_FLOAT,
          float16x4: re.HALF_FLOAT,
          float32: re.FLOAT,
          float32x2: re.FLOAT,
          float32x3: re.FLOAT,
          float32x4: re.FLOAT,
          uint32: re.UNSIGNED_INT,
          uint32x2: re.UNSIGNED_INT,
          uint32x3: re.UNSIGNED_INT,
          uint32x4: re.UNSIGNED_INT,
          sint32: re.INT,
          sint32x2: re.INT,
          sint32x3: re.INT,
          sint32x4: re.INT,
        };
      function oe(e) {
        var t;
        return null !== (t = ne[e]) && void 0 !== t ? t : ne.float32;
      }
      function ie(e) {
        return (
          (ie =
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
          ie(e)
        );
      }
      function ae(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ue(n.key), n));
        }
      }
      function ue(e) {
        var t = (function (e, t) {
          if ("object" != ie(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != ie(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ie(t) ? t : t + "";
      }
      var se = {
          "point-list": 0,
          "line-list": 1,
          "line-strip": 3,
          "triangle-list": 4,
          "triangle-strip": 5,
        },
        ce = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._geometryVaoHash = Object.create(null)),
                (this._renderer = t),
                (this._activeGeometry = null),
                (this._activeVao = null),
                (this.hasVao = !0),
                (this.hasInstance = !0),
                this._renderer.renderableGC.addManagedHash(
                  this,
                  "_geometryVaoHash",
                ));
            }),
            (t = [
              {
                key: "contextChange",
                value: function () {
                  var e = (this.gl = this._renderer.gl);
                  if (!this._renderer.context.supports.vertexArrayObject)
                    throw new Error(
                      "[PixiJS] Vertex Array Objects are not supported on this device",
                    );
                  var t = this._renderer.context.extensions.vertexArrayObject;
                  t &&
                    ((e.createVertexArray = function () {
                      return t.createVertexArrayOES();
                    }),
                    (e.bindVertexArray = function (e) {
                      return t.bindVertexArrayOES(e);
                    }),
                    (e.deleteVertexArray = function (e) {
                      return t.deleteVertexArrayOES(e);
                    }));
                  var r =
                    this._renderer.context.extensions.vertexAttribDivisorANGLE;
                  (r &&
                    ((e.drawArraysInstanced = function (e, t, n, o) {
                      r.drawArraysInstancedANGLE(e, t, n, o);
                    }),
                    (e.drawElementsInstanced = function (e, t, n, o, i) {
                      r.drawElementsInstancedANGLE(e, t, n, o, i);
                    }),
                    (e.vertexAttribDivisor = function (e, t) {
                      return r.vertexAttribDivisorANGLE(e, t);
                    })),
                    (this._activeGeometry = null),
                    (this._activeVao = null),
                    (this._geometryVaoHash = Object.create(null)));
                },
              },
              {
                key: "bind",
                value: function (e, t) {
                  var r = this.gl;
                  this._activeGeometry = e;
                  var n = this.getVao(e, t);
                  (this._activeVao !== n &&
                    ((this._activeVao = n), r.bindVertexArray(n)),
                    this.updateBuffers());
                },
              },
              {
                key: "resetState",
                value: function () {
                  this.unbind();
                },
              },
              {
                key: "updateBuffers",
                value: function () {
                  for (
                    var e = this._activeGeometry,
                      t = this._renderer.buffer,
                      r = 0;
                    r < e.buffers.length;
                    r++
                  ) {
                    var n = e.buffers[r];
                    t.updateBuffer(n);
                  }
                },
              },
              {
                key: "checkCompatibility",
                value: function (e, t) {
                  var r = e.attributes,
                    n = t._attributeData;
                  for (var o in n)
                    if (!r[o])
                      throw new Error(
                        'shader and geometry incompatible, geometry missing the "'.concat(
                          o,
                          '" attribute',
                        ),
                      );
                },
              },
              {
                key: "getSignature",
                value: function (e, t) {
                  var r = e.attributes,
                    n = t._attributeData,
                    o = ["g", e.uid];
                  for (var i in r) n[i] && o.push(i, n[i].location);
                  return o.join("-");
                },
              },
              {
                key: "getVao",
                value: function (e, t) {
                  var r;
                  return (
                    (null === (r = this._geometryVaoHash[e.uid]) || void 0 === r
                      ? void 0
                      : r[t._key]) || this.initGeometryVao(e, t)
                  );
                },
              },
              {
                key: "initGeometryVao",
                value: function (e, t) {
                  var r = this._renderer.gl,
                    n = this._renderer.buffer;
                  (this._renderer.shader._getProgramData(t),
                    this.checkCompatibility(e, t));
                  var o = this.getSignature(e, t);
                  this._geometryVaoHash[e.uid] ||
                    ((this._geometryVaoHash[e.uid] = Object.create(null)),
                    e.on("destroy", this.onGeometryDestroy, this));
                  var i = this._geometryVaoHash[e.uid],
                    a = i[o];
                  if (a) return ((i[t._key] = a), a);
                  (0, J.q)(e, t._attributeData);
                  var u = e.buffers;
                  ((a = r.createVertexArray()), r.bindVertexArray(a));
                  for (var s = 0; s < u.length; s++) {
                    var c = u[s];
                    n.bind(c);
                  }
                  return (
                    this.activateVao(e, t),
                    (i[t._key] = a),
                    (i[o] = a),
                    r.bindVertexArray(null),
                    a
                  );
                },
              },
              {
                key: "onGeometryDestroy",
                value: function (e, t) {
                  var r = this._geometryVaoHash[e.uid],
                    n = this.gl;
                  if (r) {
                    if (t)
                      for (var o in r)
                        (this._activeVao !== r[o] && this.unbind(),
                          n.deleteVertexArray(r[o]));
                    this._geometryVaoHash[e.uid] = null;
                  }
                },
              },
              {
                key: "destroyAll",
                value: function () {
                  var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    t = this.gl;
                  for (var r in this._geometryVaoHash) {
                    if (e)
                      for (var n in this._geometryVaoHash[r]) {
                        var o = this._geometryVaoHash[r];
                        (this._activeVao !== o && this.unbind(),
                          t.deleteVertexArray(o[n]));
                      }
                    this._geometryVaoHash[r] = null;
                  }
                },
              },
              {
                key: "activateVao",
                value: function (e, t) {
                  var r = this._renderer.gl,
                    n = this._renderer.buffer,
                    o = e.attributes;
                  e.indexBuffer && n.bind(e.indexBuffer);
                  var i = null;
                  for (var a in o) {
                    var u = o[a],
                      s = u.buffer,
                      c = n.getGlBuffer(s),
                      l = t._attributeData[a];
                    if (l) {
                      var f;
                      i !== c && (n.bind(s), (i = c));
                      var h = l.location;
                      r.enableVertexAttribArray(h);
                      var _ = (0, Q.m)(u.format),
                        v = oe(u.format);
                      if (
                        ("int" ===
                        (null === (f = l.format) || void 0 === f
                          ? void 0
                          : f.substring(1, 4))
                          ? r.vertexAttribIPointer(
                              h,
                              _.size,
                              v,
                              u.stride,
                              u.offset,
                            )
                          : r.vertexAttribPointer(
                              h,
                              _.size,
                              v,
                              _.normalised,
                              u.stride,
                              u.offset,
                            ),
                        u.instance)
                      ) {
                        if (!this.hasInstance)
                          throw new Error(
                            "geometry error, GPU Instancing is not supported on this device",
                          );
                        var m,
                          b = null !== (m = u.divisor) && void 0 !== m ? m : 1;
                        r.vertexAttribDivisor(h, b);
                      }
                    }
                  }
                },
              },
              {
                key: "draw",
                value: function (e, t, r, n) {
                  var o = this._renderer.gl,
                    i = this._activeGeometry,
                    a = se[e || i.topology];
                  if ((null != n || (n = i.instanceCount), i.indexBuffer)) {
                    var u = i.indexBuffer.data.BYTES_PER_ELEMENT,
                      s = 2 === u ? o.UNSIGNED_SHORT : o.UNSIGNED_INT;
                    1 !== n
                      ? o.drawElementsInstanced(
                          a,
                          t || i.indexBuffer.data.length,
                          s,
                          (r || 0) * u,
                          n,
                        )
                      : o.drawElements(
                          a,
                          t || i.indexBuffer.data.length,
                          s,
                          (r || 0) * u,
                        );
                  } else
                    1 !== n
                      ? o.drawArraysInstanced(a, r || 0, t || i.getSize(), n)
                      : o.drawArrays(a, r || 0, t || i.getSize());
                  return this;
                },
              },
              {
                key: "unbind",
                value: function () {
                  (this.gl.bindVertexArray(null),
                    (this._activeVao = null),
                    (this._activeGeometry = null));
                },
              },
              {
                key: "destroy",
                value: function () {
                  ((this._renderer = null),
                    (this.gl = null),
                    (this._activeVao = null),
                    (this._activeGeometry = null),
                    (this._geometryVaoHash = {}));
                },
              },
            ]),
            t && ae(e.prototype, t),
            r && ae(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      ce.extension = { type: [n.Ag.WebGLSystem], name: "geometry" };
      var le = r(4936),
        fe = r(4822),
        he = r(8338);
      function _e(e) {
        return (
          (_e =
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
          _e(e)
        );
      }
      function ve(e, t) {
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
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(r), !0).forEach(function (t) {
                be(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ve(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function be(e, t, r) {
        return (
          (t = pe(t)) in e
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
      function de(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, pe(n.key), n));
        }
      }
      function pe(e) {
        var t = (function (e, t) {
          if ("object" != _e(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != _e(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == _e(t) ? t : t + "";
      }
      var ye = new le.V({ attributes: { aPosition: [-1, -1, 3, -1, -1, 3] } }),
        ge = (function () {
          function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.useBackBuffer = !1),
              (this._useBackBufferThisRender = !1),
              (this._renderer = t));
          }
          return (
            (t = e),
            (r = [
              {
                key: "init",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = me(me({}, e.defaultOptions), t),
                    n = r.useBackBuffer,
                    o = r.antialias;
                  ((this.useBackBuffer = n),
                    (this._antialias = o),
                    this._renderer.context.supports.msaa ||
                      ((0, y.R)(
                        "antialiasing, is not supported on when using the back buffer",
                      ),
                      (this._antialias = !1)),
                    (this._state = R.U.for2d()));
                  var i = new he.M({
                    vertex:
                      "\n                attribute vec2 aPosition;\n                out vec2 vUv;\n\n                void main() {\n                    gl_Position = vec4(aPosition, 0.0, 1.0);\n\n                    vUv = (aPosition + 1.0) / 2.0;\n\n                    // flip dem UVs\n                    vUv.y = 1.0 - vUv.y;\n                }",
                    fragment:
                      "\n                in vec2 vUv;\n                out vec4 finalColor;\n\n                uniform sampler2D uTexture;\n\n                void main() {\n                    finalColor = texture(uTexture, vUv);\n                }",
                    name: "big-triangle",
                  });
                  this._bigTriangleShader = new f.M({
                    glProgram: i,
                    resources: { uTexture: p.g.WHITE.source },
                  });
                },
              },
              {
                key: "renderStart",
                value: function (e) {
                  var t = this._renderer.renderTarget.getRenderTarget(e.target);
                  if (
                    ((this._useBackBufferThisRender =
                      this.useBackBuffer && !!t.isRoot),
                    this._useBackBufferThisRender)
                  ) {
                    var r = this._renderer.renderTarget.getRenderTarget(
                      e.target,
                    );
                    ((this._targetTexture = r.colorTexture),
                      (e.target = this._getBackBufferTexture(r.colorTexture)));
                  }
                },
              },
              {
                key: "renderEnd",
                value: function () {
                  this._presentBackBuffer();
                },
              },
              {
                key: "_presentBackBuffer",
                value: function () {
                  var e = this._renderer;
                  (e.renderTarget.finishRenderPass(),
                    this._useBackBufferThisRender &&
                      (e.renderTarget.bind(this._targetTexture, !1),
                      (this._bigTriangleShader.resources.uTexture =
                        this._backBufferTexture.source),
                      e.encoder.draw({
                        geometry: ye,
                        shader: this._bigTriangleShader,
                        state: this._state,
                      })));
                },
              },
              {
                key: "_getBackBufferTexture",
                value: function (e) {
                  return (
                    (this._backBufferTexture =
                      this._backBufferTexture ||
                      new p.g({
                        source: new fe.v({
                          width: e.width,
                          height: e.height,
                          resolution: e._resolution,
                          antialias: this._antialias,
                        }),
                      })),
                    this._backBufferTexture.source.resize(
                      e.width,
                      e.height,
                      e._resolution,
                    ),
                    this._backBufferTexture
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._backBufferTexture &&
                    (this._backBufferTexture.destroy(),
                    (this._backBufferTexture = null));
                },
              },
            ]),
            r && de(t.prototype, r),
            n && de(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, r, n;
        })();
      ((ge.extension = {
        type: [n.Ag.WebGLSystem],
        name: "backBuffer",
        priority: 1,
      }),
        (ge.defaultOptions = { useBackBuffer: !1 }));
      var Ee = ge;
      function Se(e) {
        return (
          (Se =
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
          Se(e)
        );
      }
      function Te(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Re(n.key), n));
        }
      }
      function Re(e) {
        var t = (function (e, t) {
          if ("object" != Se(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Se(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Se(t) ? t : t + "";
      }
      var xe = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._colorMaskCache = 15),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "setMask",
              value: function (e) {
                this._colorMaskCache !== e &&
                  ((this._colorMaskCache = e),
                  this._renderer.gl.colorMask(
                    !!(8 & e),
                    !!(4 & e),
                    !!(2 & e),
                    !!(1 & e),
                  ));
              },
            },
          ]) && Te(e.prototype, t),
          r && Te(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function Ae(e) {
        return (
          (Ae =
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
          Ae(e)
        );
      }
      function Oe(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Be(n.key), n));
        }
      }
      function Be(e) {
        var t = (function (e, t) {
          if ("object" != Ae(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ae(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ae(t) ? t : t + "";
      }
      xe.extension = { type: [n.Ag.WebGLSystem], name: "colorMask" };
      var Pe = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.commandFinished = Promise.resolve()),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "setGeometry",
              value: function (e, t) {
                this._renderer.geometry.bind(e, t.glProgram);
              },
            },
            { key: "finishRenderPass", value: function () {} },
            {
              key: "draw",
              value: function (e) {
                var t = this._renderer,
                  r = e.geometry,
                  n = e.shader,
                  o = e.state,
                  i = e.skipSync,
                  a = e.topology,
                  u = e.size,
                  s = e.start,
                  c = e.instanceCount;
                (t.shader.bind(n, i),
                  t.geometry.bind(r, t.shader._activeProgram),
                  o && t.state.set(o),
                  t.geometry.draw(a, u, s, null != c ? c : r.instanceCount));
              },
            },
            {
              key: "destroy",
              value: function () {
                this._renderer = null;
              },
            },
          ]) && Oe(e.prototype, t),
          r && Oe(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      Pe.extension = { type: [n.Ag.WebGLSystem], name: "encoder" };
      var Ne = r(723);
      function Ce(e) {
        return (
          (Ce =
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
          Ce(e)
        );
      }
      function Ge(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, we(n.key), n));
        }
      }
      function we(e) {
        var t = (function (e, t) {
          if ("object" != Ce(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ce(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ce(t) ? t : t + "";
      }
      var De = (function () {
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
              key: "contextChange",
              value: function () {
                var e = this._renderer.gl;
                ((this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
                  (this.maxBatchableTextures = (0, Ne.u)(this.maxTextures, e)));
                var t = 2 === this._renderer.context.webGLVersion;
                this.maxUniformBindings = t
                  ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS)
                  : 0;
              },
            },
            { key: "destroy", value: function () {} },
          ]) && Ge(e.prototype, t),
          r && Ge(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      De.extension = { type: [n.Ag.WebGLSystem], name: "limits" };
      var Ie = r(5768),
        Fe = r(7856);
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
      function Le(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ke(n.key), n));
        }
      }
      function ke(e) {
        var t = (function (e, t) {
          if ("object" != Ue(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ue(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ue(t) ? t : t + "";
      }
      var Me = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._stencilCache = {
                enabled: !1,
                stencilReference: 0,
                stencilMode: Fe.K.NONE,
              }),
              (this._renderTargetStencilState = Object.create(null)),
              t.renderTarget.onRenderTargetChange.add(this));
          }),
          (t = [
            {
              key: "contextChange",
              value: function (e) {
                ((this._gl = e),
                  (this._comparisonFuncMapping = {
                    always: e.ALWAYS,
                    never: e.NEVER,
                    equal: e.EQUAL,
                    "not-equal": e.NOTEQUAL,
                    less: e.LESS,
                    "less-equal": e.LEQUAL,
                    greater: e.GREATER,
                    "greater-equal": e.GEQUAL,
                  }),
                  (this._stencilOpsMapping = {
                    keep: e.KEEP,
                    zero: e.ZERO,
                    replace: e.REPLACE,
                    invert: e.INVERT,
                    "increment-clamp": e.INCR,
                    "decrement-clamp": e.DECR,
                    "increment-wrap": e.INCR_WRAP,
                    "decrement-wrap": e.DECR_WRAP,
                  }),
                  this.resetState());
              },
            },
            {
              key: "onRenderTargetChange",
              value: function (e) {
                if (this._activeRenderTarget !== e) {
                  this._activeRenderTarget = e;
                  var t = this._renderTargetStencilState[e.uid];
                  (t ||
                    (t = this._renderTargetStencilState[e.uid] =
                      { stencilMode: Fe.K.DISABLED, stencilReference: 0 }),
                    this.setStencilMode(t.stencilMode, t.stencilReference));
                }
              },
            },
            {
              key: "resetState",
              value: function () {
                ((this._stencilCache.enabled = !1),
                  (this._stencilCache.stencilMode = Fe.K.NONE),
                  (this._stencilCache.stencilReference = 0));
              },
            },
            {
              key: "setStencilMode",
              value: function (e, t) {
                var r =
                    this._renderTargetStencilState[
                      this._activeRenderTarget.uid
                    ],
                  n = this._gl,
                  o = Ie.g[e],
                  i = this._stencilCache;
                ((r.stencilMode = e),
                  (r.stencilReference = t),
                  e !== Fe.K.DISABLED
                    ? (this._stencilCache.enabled ||
                        ((this._stencilCache.enabled = !0),
                        n.enable(n.STENCIL_TEST)),
                      (e === i.stencilMode && i.stencilReference === t) ||
                        ((i.stencilMode = e),
                        (i.stencilReference = t),
                        n.stencilFunc(
                          this._comparisonFuncMapping[o.stencilBack.compare],
                          t,
                          255,
                        ),
                        n.stencilOp(
                          n.KEEP,
                          n.KEEP,
                          this._stencilOpsMapping[o.stencilBack.passOp],
                        )))
                    : this._stencilCache.enabled &&
                      ((this._stencilCache.enabled = !1),
                      n.disable(n.STENCIL_TEST)));
              },
            },
          ]) && Le(e.prototype, t),
          r && Le(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      Me.extension = { type: [n.Ag.WebGLSystem], name: "stencil" };
      var je = r(9860),
        He = {
          f32: 4,
          i32: 4,
          "vec2<f32>": 8,
          "vec3<f32>": 12,
          "vec4<f32>": 16,
          "vec2<i32>": 8,
          "vec3<i32>": 12,
          "vec4<i32>": 16,
          "mat2x2<f32>": 32,
          "mat3x3<f32>": 48,
          "mat4x4<f32>": 64,
        };
      function Ve(e) {
        for (
          var t = e.map(function (e) {
              return { data: e, offset: 0, size: 0 };
            }),
            r = 0,
            n = 0,
            o = 0;
          o < t.length;
          o++
        ) {
          var i = t[o];
          if (!(r = He[i.data.type]))
            throw new Error("Unknown type ".concat(i.data.type));
          i.data.size > 1 && (r = Math.max(r, 16) * i.data.size);
          var a = 12 === r ? 16 : r;
          i.size = r;
          var u = n % 16;
          ((n += u > 0 && 16 - u < a ? (16 - u) % 16 : (r - (u % r)) % r),
            (i.offset = n),
            (n += r));
        }
        return { uboElements: t, size: (n = 16 * Math.ceil(n / 16)) };
      }
      var Xe = r(8536),
        We = r(6263);
      function Ye(e, t) {
        var r = Math.max(He[e.data.type] / 16, 1),
          n = e.data.value.length / e.data.size,
          o = (4 - (n % 4)) % 4,
          i = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
        return "\n        v = uv."
          .concat(e.data.name, ";\n        offset += ")
          .concat(
            t,
            ";\n\n        arrayOffset = offset;\n\n        t = 0;\n\n        for(var i=0; i < ",
          )
          .concat(
            e.data.size * r,
            "; i++)\n        {\n            for(var j = 0; j < ",
          )
          .concat(n, "; j++)\n            {\n                ")
          .concat(i, "[arrayOffset++] = v[t++];\n            }\n            ")
          .concat(
            0 !== o ? "arrayOffset += ".concat(o, ";") : "",
            "\n        }\n    ",
          );
      }
      function Ke(e) {
        return (0, Xe.E)(e, "uboStd40", Ye, We.g);
      }
      function ze(e) {
        return (
          (ze =
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
          ze(e)
        );
      }
      function qe(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, $e(n.key), n));
        }
      }
      function $e(e) {
        var t = (function (e, t) {
          if ("object" != ze(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != ze(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ze(t) ? t : t + "";
      }
      function Ze(e, t, r) {
        return (
          (t = Je(t)),
          (function (e, t) {
            if (t && ("object" == ze(t) || "function" == typeof t)) return t;
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
            Qe()
              ? Reflect.construct(t, r || [], Je(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function Qe() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Qe = function () {
          return !!e;
        })();
      }
      function Je(e) {
        return (
          (Je = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Je(e)
        );
      }
      function et(e, t) {
        return (
          (et = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          et(e, t)
        );
      }
      var tt = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Ze(this, t, [{ createUboElements: Ve, generateUboSync: Ke }])
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
              t && et(e, t));
          })(t, e),
          (r = t),
          n && qe(r.prototype, n),
          o && qe(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(je.W);
      tt.extension = { type: [n.Ag.WebGLSystem], name: "ubo" };
      var rt = r(2082),
        nt = r(861),
        ot = r(7967),
        it = r(6932);
      function at(e) {
        return (
          (at =
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
          at(e)
        );
      }
      function ut(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ct(n.key), n));
        }
      }
      function st(e, t, r) {
        return (
          t && ut(e.prototype, t),
          r && ut(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function ct(e) {
        var t = (function (e, t) {
          if ("object" != at(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != at(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == at(t) ? t : t + "";
      }
      var lt = st(function e() {
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.width = -1),
          (this.height = -1),
          (this.msaa = !1),
          (this.msaaRenderBuffer = []));
      });
      function ft(e) {
        return (
          (ft =
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
          ft(e)
        );
      }
      function ht(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, _t(n.key), n));
        }
      }
      function _t(e) {
        var t = (function (e, t) {
          if ("object" != ft(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != ft(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ft(t) ? t : t + "";
      }
      var vt = (function () {
        return (
          (e = function e() {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._clearColorCache = [0, 0, 0, 0]),
              (this._viewPortCache = new nt.M()));
          }),
          (t = [
            {
              key: "init",
              value: function (e, t) {
                ((this._renderer = e),
                  (this._renderTargetSystem = t),
                  e.runners.contextChange.add(this));
              },
            },
            {
              key: "contextChange",
              value: function () {
                ((this._clearColorCache = [0, 0, 0, 0]),
                  (this._viewPortCache = new nt.M()));
              },
            },
            {
              key: "copyToTexture",
              value: function (e, t, r, n, o) {
                var i = this._renderTargetSystem,
                  a = this._renderer,
                  u = i.getGpuRenderTarget(e),
                  s = a.gl;
                return (
                  this.finishRenderPass(e),
                  s.bindFramebuffer(s.FRAMEBUFFER, u.resolveTargetFramebuffer),
                  a.texture.bind(t, 0),
                  s.copyTexSubImage2D(
                    s.TEXTURE_2D,
                    0,
                    o.x,
                    o.y,
                    r.x,
                    r.y,
                    n.width,
                    n.height,
                  ),
                  t
                );
              },
            },
            {
              key: "startRenderPass",
              value: function (e) {
                var t = this,
                  r =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  o = arguments.length > 3 ? arguments[3] : void 0,
                  i = this._renderTargetSystem,
                  a = e.colorTexture,
                  u = i.getGpuRenderTarget(e),
                  s = o.y;
                (e.isRoot && (s = a.pixelHeight - o.height),
                  e.colorTextures.forEach(function (e) {
                    t._renderer.texture.unbind(e);
                  }));
                var c = this._renderer.gl;
                c.bindFramebuffer(c.FRAMEBUFFER, u.framebuffer);
                var l = this._viewPortCache;
                ((l.x === o.x &&
                  l.y === s &&
                  l.width === o.width &&
                  l.height === o.height) ||
                  ((l.x = o.x),
                  (l.y = s),
                  (l.width = o.width),
                  (l.height = o.height),
                  c.viewport(o.x, s, o.width, o.height)),
                  u.depthStencilRenderBuffer ||
                    (!e.stencil && !e.depth) ||
                    this._initStencil(u),
                  this.clear(e, r, n));
              },
            },
            {
              key: "finishRenderPass",
              value: function (e) {
                var t = this._renderTargetSystem.getGpuRenderTarget(e);
                if (t.msaa) {
                  var r = this._renderer.gl;
                  (r.bindFramebuffer(r.FRAMEBUFFER, t.resolveTargetFramebuffer),
                    r.bindFramebuffer(r.READ_FRAMEBUFFER, t.framebuffer),
                    r.blitFramebuffer(
                      0,
                      0,
                      t.width,
                      t.height,
                      0,
                      0,
                      t.width,
                      t.height,
                      r.COLOR_BUFFER_BIT,
                      r.NEAREST,
                    ),
                    r.bindFramebuffer(r.FRAMEBUFFER, t.framebuffer));
                }
              },
            },
            {
              key: "initGpuRenderTarget",
              value: function (e) {
                var t = this._renderer.gl,
                  r = new lt();
                return e.colorTexture instanceof ot.q
                  ? (this._renderer.context.ensureCanvasSize(
                      e.colorTexture.resource,
                    ),
                    (r.framebuffer = null),
                    r)
                  : (this._initColor(e, r),
                    t.bindFramebuffer(t.FRAMEBUFFER, null),
                    r);
              },
            },
            {
              key: "destroyGpuRenderTarget",
              value: function (e) {
                var t = this._renderer.gl;
                (e.framebuffer &&
                  (t.deleteFramebuffer(e.framebuffer), (e.framebuffer = null)),
                  e.resolveTargetFramebuffer &&
                    (t.deleteFramebuffer(e.resolveTargetFramebuffer),
                    (e.resolveTargetFramebuffer = null)),
                  e.depthStencilRenderBuffer &&
                    (t.deleteRenderbuffer(e.depthStencilRenderBuffer),
                    (e.depthStencilRenderBuffer = null)),
                  e.msaaRenderBuffer.forEach(function (e) {
                    t.deleteRenderbuffer(e);
                  }),
                  (e.msaaRenderBuffer = null));
              },
            },
            {
              key: "clear",
              value: function (e, t, r) {
                if (t) {
                  var n = this._renderTargetSystem;
                  "boolean" == typeof t && (t = t ? it.u.ALL : it.u.NONE);
                  var o = this._renderer.gl;
                  if (t & it.u.COLOR) {
                    null != r || (r = n.defaultClearColor);
                    var i = this._clearColorCache,
                      a = r;
                    (i[0] === a[0] &&
                      i[1] === a[1] &&
                      i[2] === a[2] &&
                      i[3] === a[3]) ||
                      ((i[0] = a[0]),
                      (i[1] = a[1]),
                      (i[2] = a[2]),
                      (i[3] = a[3]),
                      o.clearColor(a[0], a[1], a[2], a[3]));
                  }
                  o.clear(t);
                }
              },
            },
            {
              key: "resizeGpuRenderTarget",
              value: function (e) {
                if (!e.isRoot) {
                  var t = this._renderTargetSystem.getGpuRenderTarget(e);
                  (this._resizeColor(e, t),
                    (e.stencil || e.depth) && this._resizeStencil(t));
                }
              },
            },
            {
              key: "_initColor",
              value: function (e, t) {
                var r = this._renderer,
                  n = r.gl,
                  o = n.createFramebuffer();
                if (
                  ((t.resolveTargetFramebuffer = o),
                  n.bindFramebuffer(n.FRAMEBUFFER, o),
                  (t.width = e.colorTexture.source.pixelWidth),
                  (t.height = e.colorTexture.source.pixelHeight),
                  e.colorTextures.forEach(function (e, o) {
                    var i = e.source;
                    (i.antialias &&
                      (r.context.supports.msaa
                        ? (t.msaa = !0)
                        : (0, y.R)(
                            "[RenderTexture] Antialiasing on textures is not supported in WebGL1",
                          )),
                      r.texture.bindSource(i, 0));
                    var a = r.texture.getGlSource(i).texture;
                    n.framebufferTexture2D(
                      n.FRAMEBUFFER,
                      n.COLOR_ATTACHMENT0 + o,
                      3553,
                      a,
                      0,
                    );
                  }),
                  t.msaa)
                ) {
                  var i = n.createFramebuffer();
                  ((t.framebuffer = i),
                    n.bindFramebuffer(n.FRAMEBUFFER, i),
                    e.colorTextures.forEach(function (e, r) {
                      var o = n.createRenderbuffer();
                      t.msaaRenderBuffer[r] = o;
                    }));
                } else t.framebuffer = o;
                this._resizeColor(e, t);
              },
            },
            {
              key: "_resizeColor",
              value: function (e, t) {
                var r = e.colorTexture.source;
                if (
                  ((t.width = r.pixelWidth),
                  (t.height = r.pixelHeight),
                  e.colorTextures.forEach(function (e, t) {
                    0 !== t &&
                      e.source.resize(r.width, r.height, r._resolution);
                  }),
                  t.msaa)
                ) {
                  var n = this._renderer,
                    o = n.gl,
                    i = t.framebuffer;
                  (o.bindFramebuffer(o.FRAMEBUFFER, i),
                    e.colorTextures.forEach(function (e, r) {
                      var i = e.source;
                      n.texture.bindSource(i, 0);
                      var a = n.texture.getGlSource(i).internalFormat,
                        u = t.msaaRenderBuffer[r];
                      (o.bindRenderbuffer(o.RENDERBUFFER, u),
                        o.renderbufferStorageMultisample(
                          o.RENDERBUFFER,
                          4,
                          a,
                          i.pixelWidth,
                          i.pixelHeight,
                        ),
                        o.framebufferRenderbuffer(
                          o.FRAMEBUFFER,
                          o.COLOR_ATTACHMENT0 + r,
                          o.RENDERBUFFER,
                          u,
                        ));
                    }));
                }
              },
            },
            {
              key: "_initStencil",
              value: function (e) {
                if (null !== e.framebuffer) {
                  var t = this._renderer.gl,
                    r = t.createRenderbuffer();
                  ((e.depthStencilRenderBuffer = r),
                    t.bindRenderbuffer(t.RENDERBUFFER, r),
                    t.framebufferRenderbuffer(
                      t.FRAMEBUFFER,
                      t.DEPTH_STENCIL_ATTACHMENT,
                      t.RENDERBUFFER,
                      r,
                    ),
                    this._resizeStencil(e));
                }
              },
            },
            {
              key: "_resizeStencil",
              value: function (e) {
                var t = this._renderer.gl;
                (t.bindRenderbuffer(t.RENDERBUFFER, e.depthStencilRenderBuffer),
                  e.msaa
                    ? t.renderbufferStorageMultisample(
                        t.RENDERBUFFER,
                        4,
                        t.DEPTH24_STENCIL8,
                        e.width,
                        e.height,
                      )
                    : t.renderbufferStorage(
                        t.RENDERBUFFER,
                        2 === this._renderer.context.webGLVersion
                          ? t.DEPTH24_STENCIL8
                          : t.DEPTH_STENCIL,
                        e.width,
                        e.height,
                      ));
              },
            },
            {
              key: "prerender",
              value: function (e) {
                var t = e.colorTexture.resource;
                this._renderer.context.multiView &&
                  ot.q.test(t) &&
                  this._renderer.context.ensureCanvasSize(t);
              },
            },
            {
              key: "postrender",
              value: function (e) {
                if (
                  this._renderer.context.multiView &&
                  ot.q.test(e.colorTexture.resource)
                ) {
                  var t = this._renderer.context.canvas,
                    r = e.colorTexture;
                  r.context2D.drawImage(t, 0, r.pixelHeight - t.height);
                }
              },
            },
          ]),
          t && ht(e.prototype, t),
          r && ht(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function mt(e) {
        return (
          (mt =
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
          mt(e)
        );
      }
      function bt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, dt(n.key), n));
        }
      }
      function dt(e) {
        var t = (function (e, t) {
          if ("object" != mt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != mt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == mt(t) ? t : t + "";
      }
      function pt(e, t, r) {
        return (
          (t = gt(t)),
          (function (e, t) {
            if (t && ("object" == mt(t) || "function" == typeof t)) return t;
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
            yt()
              ? Reflect.construct(t, r || [], gt(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function yt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (yt = function () {
          return !!e;
        })();
      }
      function gt(e) {
        return (
          (gt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          gt(e)
        );
      }
      function Et(e, t) {
        return (
          (Et = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Et(e, t)
        );
      }
      var St = (function (e) {
        function t(e) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = pt(this, t, [e])).adaptor = new vt()),
            r.adaptor.init(e, r),
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
              t && Et(e, t));
          })(t, e),
          (r = t),
          n && bt(r.prototype, n),
          o && bt(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(rt.l);
      St.extension = { type: [n.Ag.WebGLSystem], name: "renderTarget" };
      var Tt = r(9464);
      function Rt(e) {
        return (
          (Rt =
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
          Rt(e)
        );
      }
      function xt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Ot(n.key), n));
        }
      }
      function At(e, t, r) {
        return (
          t && xt(e.prototype, t),
          r && xt(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Ot(e) {
        var t = (function (e, t) {
          if ("object" != Rt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Rt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Rt(t) ? t : t + "";
      }
      function Bt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var Pt = (function () {
        return At(
          function e(t, r) {
            (Bt(this, e),
              (this.program = t),
              (this.uniformData = r),
              (this.uniformGroups = {}),
              (this.uniformDirtyGroups = {}),
              (this.uniformBlockBindings = {}));
          },
          [
            {
              key: "destroy",
              value: function () {
                ((this.uniformData = null),
                  (this.uniformGroups = null),
                  (this.uniformDirtyGroups = null),
                  (this.uniformBlockBindings = null),
                  (this.program = null));
              },
            },
          ],
        );
      })();
      function Nt(e, t, r) {
        var n = e.createShader(t);
        return (e.shaderSource(n, r), e.compileShader(n), n);
      }
      function Ct(e) {
        for (var t = new Array(e), r = 0; r < t.length; r++) t[r] = !1;
        return t;
      }
      function Gt(e, t) {
        switch (e) {
          case "float":
          case "int":
          case "uint":
          case "sampler2D":
          case "sampler2DArray":
            return 0;
          case "vec2":
            return new Float32Array(2 * t);
          case "vec3":
            return new Float32Array(3 * t);
          case "vec4":
            return new Float32Array(4 * t);
          case "ivec2":
            return new Int32Array(2 * t);
          case "ivec3":
            return new Int32Array(3 * t);
          case "ivec4":
            return new Int32Array(4 * t);
          case "uvec2":
            return new Uint32Array(2 * t);
          case "uvec3":
            return new Uint32Array(3 * t);
          case "uvec4":
            return new Uint32Array(4 * t);
          case "bool":
            return !1;
          case "bvec2":
            return Ct(2 * t);
          case "bvec3":
            return Ct(3 * t);
          case "bvec4":
            return Ct(4 * t);
          case "mat2":
            return new Float32Array([1, 0, 0, 1]);
          case "mat3":
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          case "mat4":
            return new Float32Array([
              1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            ]);
        }
        return null;
      }
      var wt = null,
        Dt = {
          FLOAT: "float",
          FLOAT_VEC2: "vec2",
          FLOAT_VEC3: "vec3",
          FLOAT_VEC4: "vec4",
          INT: "int",
          INT_VEC2: "ivec2",
          INT_VEC3: "ivec3",
          INT_VEC4: "ivec4",
          UNSIGNED_INT: "uint",
          UNSIGNED_INT_VEC2: "uvec2",
          UNSIGNED_INT_VEC3: "uvec3",
          UNSIGNED_INT_VEC4: "uvec4",
          BOOL: "bool",
          BOOL_VEC2: "bvec2",
          BOOL_VEC3: "bvec3",
          BOOL_VEC4: "bvec4",
          FLOAT_MAT2: "mat2",
          FLOAT_MAT3: "mat3",
          FLOAT_MAT4: "mat4",
          SAMPLER_2D: "sampler2D",
          INT_SAMPLER_2D: "sampler2D",
          UNSIGNED_INT_SAMPLER_2D: "sampler2D",
          SAMPLER_CUBE: "samplerCube",
          INT_SAMPLER_CUBE: "samplerCube",
          UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
          SAMPLER_2D_ARRAY: "sampler2DArray",
          INT_SAMPLER_2D_ARRAY: "sampler2DArray",
          UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
        },
        It = {
          float: "float32",
          vec2: "float32x2",
          vec3: "float32x3",
          vec4: "float32x4",
          int: "sint32",
          ivec2: "sint32x2",
          ivec3: "sint32x3",
          ivec4: "sint32x4",
          uint: "uint32",
          uvec2: "uint32x2",
          uvec3: "uint32x3",
          uvec4: "uint32x4",
          bool: "uint32",
          bvec2: "uint32x2",
          bvec3: "uint32x3",
          bvec4: "uint32x4",
        };
      function Ft(e, t) {
        if (!wt) {
          var r = Object.keys(Dt);
          wt = {};
          for (var n = 0; n < r.length; ++n) {
            var o = r[n];
            wt[e[o]] = Dt[o];
          }
        }
        return wt[t];
      }
      function Ut(e, t) {
        var r = Ft(e, t);
        return It[r] || "float32";
      }
      function Lt(e, t) {
        var r,
          n = e
            .getShaderSource(t)
            .split("\n")
            .map(function (e, t) {
              return "".concat(t, ": ").concat(e);
            }),
          o = e.getShaderInfoLog(t),
          i = o.split("\n"),
          a = {},
          u = i
            .map(function (e) {
              return parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"));
            })
            .filter(function (e) {
              return !(!e || a[e]) && ((a[e] = !0), !0);
            }),
          s = [""];
        u.forEach(function (e) {
          ((n[e - 1] = "%c".concat(n[e - 1], "%c")),
            s.push(
              "background: #FF0000; color:#FFFFFF; font-size: 10px",
              "font-size: 10px",
            ));
        });
        var c = n.join("\n");
        ((s[0] = c),
          console.error(o),
          console.groupCollapsed("click to view full shader code"),
          (r = console).warn.apply(r, s),
          console.groupEnd());
      }
      function kt(e, t) {
        var r = Nt(e, e.VERTEX_SHADER, t.vertex),
          n = Nt(e, e.FRAGMENT_SHADER, t.fragment),
          o = e.createProgram();
        (e.attachShader(o, r), e.attachShader(o, n));
        var i = t.transformFeedbackVaryings;
        (i &&
          ("function" != typeof e.transformFeedbackVaryings
            ? (0, y.R)(
                "TransformFeedback is not supported but TransformFeedbackVaryings are given.",
              )
            : e.transformFeedbackVaryings(
                o,
                i.names,
                "separate" === i.bufferMode
                  ? e.SEPARATE_ATTRIBS
                  : e.INTERLEAVED_ATTRIBS,
              )),
          e.linkProgram(o),
          e.getProgramParameter(o, e.LINK_STATUS) ||
            (function (e, t, r, n) {
              e.getProgramParameter(t, e.LINK_STATUS) ||
                (e.getShaderParameter(r, e.COMPILE_STATUS) || Lt(e, r),
                e.getShaderParameter(n, e.COMPILE_STATUS) || Lt(e, n),
                console.error("PixiJS Error: Could not initialize shader."),
                "" !== e.getProgramInfoLog(t) &&
                  console.warn(
                    "PixiJS Warning: gl.getProgramInfoLog()",
                    e.getProgramInfoLog(t),
                  ));
            })(e, o, r, n),
          (t._attributeData = (function (e, t) {
            for (
              var r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                n = {},
                o = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES),
                i = 0;
              i < o;
              i++
            ) {
              var a = t.getActiveAttrib(e, i);
              if (!a.name.startsWith("gl_")) {
                var u = Ut(t, a.type);
                n[a.name] = {
                  location: 0,
                  format: u,
                  stride: (0, Q.m)(u).stride,
                  offset: 0,
                  instance: !1,
                  start: 0,
                };
              }
            }
            var s = Object.keys(n);
            if (r) {
              s.sort(function (e, t) {
                return e > t ? 1 : -1;
              });
              for (var c = 0; c < s.length; c++)
                ((n[s[c]].location = c), t.bindAttribLocation(e, c, s[c]));
              t.linkProgram(e);
            } else
              for (var l = 0; l < s.length; l++)
                n[s[l]].location = t.getAttribLocation(e, s[l]);
            return n;
          })(
            o,
            e,
            !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex),
          )),
          (t._uniformData = (function (e, t) {
            for (
              var r = {},
                n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS),
                o = 0;
              o < n;
              o++
            ) {
              var i = t.getActiveUniform(e, o),
                a = i.name.replace(/\[.*?\]$/, ""),
                u = !!i.name.match(/\[.*?\]$/),
                s = Ft(t, i.type);
              r[a] = {
                name: a,
                index: o,
                type: s,
                size: i.size,
                isArray: u,
                value: Gt(s, i.size),
              };
            }
            return r;
          })(o, e)),
          (t._uniformBlockData = (function (e, t) {
            if (!t.ACTIVE_UNIFORM_BLOCKS) return {};
            for (
              var r = {},
                n = t.getProgramParameter(e, t.ACTIVE_UNIFORM_BLOCKS),
                o = 0;
              o < n;
              o++
            ) {
              var i = t.getActiveUniformBlockName(e, o),
                a = t.getUniformBlockIndex(e, i),
                u = t.getActiveUniformBlockParameter(
                  e,
                  o,
                  t.UNIFORM_BLOCK_DATA_SIZE,
                );
              r[i] = { name: i, index: a, size: u };
            }
            return r;
          })(o, e)),
          e.deleteShader(r),
          e.deleteShader(n));
        var a = {};
        for (var u in t._uniformData) {
          var s = t._uniformData[u];
          a[u] = {
            location: e.getUniformLocation(o, u),
            value: Gt(s.type, s.size),
          };
        }
        return new Pt(o, a);
      }
      function Mt(e) {
        return (
          (Mt =
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
          Mt(e)
        );
      }
      function jt(e, t) {
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
          if ("object" != Mt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Mt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Mt(t) ? t : t + "";
      }
      var Vt = { textureCount: 0, blockIndex: 0 },
        Xt = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._activeProgram = null),
                (this._programDataHash = Object.create(null)),
                (this._shaderSyncFunctions = Object.create(null)),
                (this._renderer = t),
                this._renderer.renderableGC.addManagedHash(
                  this,
                  "_programDataHash",
                ));
            }),
            (t = [
              {
                key: "contextChange",
                value: function (e) {
                  ((this._gl = e),
                    (this._programDataHash = Object.create(null)),
                    (this._shaderSyncFunctions = Object.create(null)),
                    (this._activeProgram = null));
                },
              },
              {
                key: "bind",
                value: function (e, t) {
                  if ((this._setProgram(e.glProgram), !t)) {
                    ((Vt.textureCount = 0), (Vt.blockIndex = 0));
                    var r = this._shaderSyncFunctions[e.glProgram._key];
                    (r ||
                      (r = this._shaderSyncFunctions[e.glProgram._key] =
                        this._generateShaderSync(e, this)),
                      this._renderer.buffer.nextBindBase(
                        !!e.glProgram.transformFeedbackVaryings,
                      ),
                      r(this._renderer, e, Vt));
                  }
                },
              },
              {
                key: "updateUniformGroup",
                value: function (e) {
                  this._renderer.uniformGroup.updateUniformGroup(
                    e,
                    this._activeProgram,
                    Vt,
                  );
                },
              },
              {
                key: "bindUniformBlock",
                value: function (e, t) {
                  var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    n = this._renderer.buffer,
                    o = this._getProgramData(this._activeProgram),
                    i = e._bufferResource;
                  i || this._renderer.ubo.updateUniformGroup(e);
                  var a = e.buffer,
                    u = n.updateBuffer(a),
                    s = n.freeLocationForBufferBase(u);
                  if (i) {
                    var c = e.offset,
                      l = e.size;
                    0 === c && l === a.data.byteLength
                      ? n.bindBufferBase(u, s)
                      : n.bindBufferRange(u, s, c);
                  } else
                    n.getLastBindBaseLocation(u) !== s &&
                      n.bindBufferBase(u, s);
                  var f = this._activeProgram._uniformBlockData[t].index;
                  o.uniformBlockBindings[r] !== s &&
                    ((o.uniformBlockBindings[r] = s),
                    this._renderer.gl.uniformBlockBinding(o.program, f, s));
                },
              },
              {
                key: "_setProgram",
                value: function (e) {
                  if (this._activeProgram !== e) {
                    this._activeProgram = e;
                    var t = this._getProgramData(e);
                    this._gl.useProgram(t.program);
                  }
                },
              },
              {
                key: "_getProgramData",
                value: function (e) {
                  return (
                    this._programDataHash[e._key] || this._createProgramData(e)
                  );
                },
              },
              {
                key: "_createProgramData",
                value: function (e) {
                  var t = e._key;
                  return (
                    (this._programDataHash[t] = kt(this._gl, e)),
                    this._programDataHash[t]
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  for (
                    var e = 0, t = Object.keys(this._programDataHash);
                    e < t.length;
                    e++
                  ) {
                    var r = t[e];
                    (this._programDataHash[r].destroy(),
                      (this._programDataHash[r] = null));
                  }
                  ((this._programDataHash = null),
                    (this._shaderSyncFunctions = null),
                    (this._activeProgram = null),
                    (this._renderer = null),
                    (this._gl = null));
                },
              },
              {
                key: "_generateShaderSync",
                value: function (e, t) {
                  return (function (e, t) {
                    var r = [],
                      n = [
                        "\n        var g = s.groups;\n        var sS = r.shader;\n        var p = s.glProgram;\n        var ugS = r.uniformGroup;\n        var resources;\n    ",
                      ],
                      o = !1,
                      i = 0,
                      a = t._getProgramData(e.glProgram);
                    for (var u in e.groups) {
                      var s = e.groups[u];
                      for (var c in (r.push(
                        "\n            resources = g[".concat(
                          u,
                          "].resources;\n        ",
                        ),
                      ),
                      s.resources)) {
                        var l = s.resources[c];
                        if (l instanceof h.k)
                          if (l.ubo) {
                            var f = e._uniformBindMap[u][Number(c)];
                            r.push(
                              "\n                        sS.bindUniformBlock(\n                            resources["
                                .concat(c, "],\n                            '")
                                .concat(f, "',\n                            ")
                                .concat(
                                  e.glProgram._uniformBlockData[f].index,
                                  "\n                        );\n                    ",
                                ),
                            );
                          } else
                            r.push(
                              "\n                        ugS.updateUniformGroup(resources[".concat(
                                c,
                                "], p, sD);\n                    ",
                              ),
                            );
                        else if (l instanceof Tt.d) {
                          var _ = e._uniformBindMap[u][Number(c)];
                          r.push(
                            "\n                    sS.bindUniformBlock(\n                        resources["
                              .concat(c, "],\n                        '")
                              .concat(_, "',\n                        ")
                              .concat(
                                e.glProgram._uniformBlockData[_].index,
                                "\n                    );\n                ",
                              ),
                          );
                        } else if (l instanceof fe.v) {
                          var v = e._uniformBindMap[u][c],
                            m = a.uniformData[v];
                          m &&
                            (o ||
                              ((o = !0),
                              n.push(
                                "\n                        var tS = r.texture;\n                        ",
                              )),
                            t._gl.uniform1i(m.location, i),
                            r.push(
                              "\n                        tS.bind(resources["
                                .concat(c, "], ")
                                .concat(i, ");\n                    "),
                            ),
                            i++);
                        }
                      }
                    }
                    var b = [].concat(n, r).join("\n");
                    return new Function("r", "s", "sD", b);
                  })(e, t);
                },
              },
              {
                key: "resetState",
                value: function () {
                  this._activeProgram = null;
                },
              },
            ]),
            t && jt(e.prototype, t),
            r && jt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      Xt.extension = { type: [n.Ag.WebGLSystem], name: "shader" };
      var Wt = r(5179),
        Yt = {
          f32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1f(location, v);\n        }",
          "vec2<f32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2f(location, v[0], v[1]);\n        }",
          "vec3<f32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3f(location, v[0], v[1], v[2]);\n        }",
          "vec4<f32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n        }",
          i32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }",
          "vec2<i32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }",
          "vec3<i32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }",
          "vec4<i32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }",
          u32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1ui(location, v);\n        }",
          "vec2<u32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2ui(location, v[0], v[1]);\n        }",
          "vec3<u32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3ui(location, v[0], v[1], v[2]);\n        }",
          "vec4<u32>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n        }",
          bool: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }",
          "vec2<bool>":
            "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }",
          "vec3<bool>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }",
          "vec4<bool>":
            "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }",
          "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
          "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
          "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
        },
        Kt = {
          f32: "gl.uniform1fv(location, v);",
          "vec2<f32>": "gl.uniform2fv(location, v);",
          "vec3<f32>": "gl.uniform3fv(location, v);",
          "vec4<f32>": "gl.uniform4fv(location, v);",
          "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
          "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
          "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
          i32: "gl.uniform1iv(location, v);",
          "vec2<i32>": "gl.uniform2iv(location, v);",
          "vec3<i32>": "gl.uniform3iv(location, v);",
          "vec4<i32>": "gl.uniform4iv(location, v);",
          u32: "gl.uniform1iv(location, v);",
          "vec2<u32>": "gl.uniform2iv(location, v);",
          "vec3<u32>": "gl.uniform3iv(location, v);",
          "vec4<u32>": "gl.uniform4iv(location, v);",
          bool: "gl.uniform1iv(location, v);",
          "vec2<bool>": "gl.uniform2iv(location, v);",
          "vec3<bool>": "gl.uniform3iv(location, v);",
          "vec4<bool>": "gl.uniform4iv(location, v);",
        };
      function zt(e) {
        return (
          (zt =
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
          zt(e)
        );
      }
      function qt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, $t(n.key), n));
        }
      }
      function $t(e) {
        var t = (function (e, t) {
          if ("object" != zt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != zt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == zt(t) ? t : t + "";
      }
      var Zt = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._cache = {}),
              (this._uniformGroupSyncHash = {}),
              (this._renderer = t),
              (this.gl = null),
              (this._cache = {}));
          }),
          (t = [
            {
              key: "contextChange",
              value: function (e) {
                this.gl = e;
              },
            },
            {
              key: "updateUniformGroup",
              value: function (e, t, r) {
                var n = this._renderer.shader._getProgramData(t);
                (e.isStatic && e._dirtyId === n.uniformDirtyGroups[e.uid]) ||
                  ((n.uniformDirtyGroups[e.uid] = e._dirtyId),
                  this._getUniformSyncFunction(e, t)(
                    n.uniformData,
                    e.uniforms,
                    this._renderer,
                    r,
                  ));
              },
            },
            {
              key: "_getUniformSyncFunction",
              value: function (e, t) {
                var r;
                return (
                  (null === (r = this._uniformGroupSyncHash[e._signature]) ||
                  void 0 === r
                    ? void 0
                    : r[t._key]) || this._createUniformSyncFunction(e, t)
                );
              },
            },
            {
              key: "_createUniformSyncFunction",
              value: function (e, t) {
                var r =
                    this._uniformGroupSyncHash[e._signature] ||
                    (this._uniformGroupSyncHash[e._signature] = {}),
                  n = this._getSignature(e, t._uniformData, "u");
                return (
                  this._cache[n] ||
                    (this._cache[n] = this._generateUniformsSync(
                      e,
                      t._uniformData,
                    )),
                  (r[t._key] = this._cache[n]),
                  r[t._key]
                );
              },
            },
            {
              key: "_generateUniformsSync",
              value: function (e, t) {
                return (function (e, t) {
                  var r = [
                    "\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n        var name = null;\n    ",
                  ];
                  for (var n in e.uniforms)
                    if (t[n]) {
                      for (
                        var o = e.uniformStructures[n], i = !1, a = 0;
                        a < Wt.$.length;
                        a++
                      ) {
                        var u = Wt.$[a];
                        if (o.type === u.type && u.test(o)) {
                          (r.push('name = "'.concat(n, '";'), Wt.$[a].uniform),
                            (i = !0));
                          break;
                        }
                      }
                      if (!i) {
                        var s = (1 === o.size ? Yt : Kt)[o.type].replace(
                          "location",
                          'ud["'.concat(n, '"].location'),
                        );
                        r.push(
                          '\n            cu = ud["'
                            .concat(
                              n,
                              '"];\n            cv = cu.value;\n            v = uv["',
                            )
                            .concat(n, '"];\n            ')
                            .concat(s, ";"),
                        );
                      }
                    } else
                      e.uniforms[n] instanceof h.k
                        ? e.uniforms[n].ubo
                          ? r.push(
                              "\n                        renderer.shader.bindUniformBlock(uv."
                                .concat(n, ', "')
                                .concat(n, '");\n                    '),
                            )
                          : r.push(
                              "\n                        renderer.shader.updateUniformGroup(uv.".concat(
                                n,
                                ");\n                    ",
                              ),
                            )
                        : e.uniforms[n] instanceof Tt.d &&
                          r.push(
                            "\n                        renderer.shader.bindBufferResource(uv."
                              .concat(n, ', "')
                              .concat(n, '");\n                    '),
                          );
                  return new Function(
                    "ud",
                    "uv",
                    "renderer",
                    "syncData",
                    r.join("\n"),
                  );
                })(e, t);
              },
            },
            {
              key: "_getSignature",
              value: function (e, t, r) {
                var n = e.uniforms,
                  o = ["".concat(r, "-")];
                for (var i in n) (o.push(i), t[i] && o.push(t[i].type));
                return o.join("-");
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this._renderer = null), (this._cache = null));
              },
            },
          ]) && qt(e.prototype, t),
          r && qt(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function Qt(e) {
        return (
          (Qt =
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
          Qt(e)
        );
      }
      function Jt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, er(n.key), n));
        }
      }
      function er(e) {
        var t = (function (e, t) {
          if ("object" != Qt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Qt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Qt(t) ? t : t + "";
      }
      Zt.extension = { type: [n.Ag.WebGLSystem], name: "uniformGroup" };
      var tr = (function () {
        function e(t) {
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._invertFrontFace = !1),
            (this.gl = null),
            (this.stateId = 0),
            (this.polygonOffset = 0),
            (this.blendMode = "none"),
            (this._blendEq = !1),
            (this.map = []),
            (this.map[0] = this.setBlend),
            (this.map[1] = this.setOffset),
            (this.map[2] = this.setCullFace),
            (this.map[3] = this.setDepthTest),
            (this.map[4] = this.setFrontFace),
            (this.map[5] = this.setDepthMask),
            (this.checks = []),
            (this.defaultState = R.U.for2d()),
            t.renderTarget.onRenderTargetChange.add(this));
        }
        return (
          (t = e),
          (n = [
            {
              key: "_checkBlendMode",
              value: function (e, t) {
                e.setBlendMode(t.blendMode);
              },
            },
            {
              key: "_checkPolygonOffset",
              value: function (e, t) {
                e.setPolygonOffset(1, t.polygonOffset);
              },
            },
          ]),
          (r = [
            {
              key: "onRenderTargetChange",
              value: function (e) {
                ((this._invertFrontFace = !e.isRoot),
                  this._cullFace
                    ? this.setFrontFace(this._frontFace)
                    : (this._frontFaceDirty = !0));
              },
            },
            {
              key: "contextChange",
              value: function (e) {
                ((this.gl = e),
                  (this.blendModesMap = (function (e) {
                    var t = {};
                    if (
                      ((t.normal = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                      (t.add = [e.ONE, e.ONE]),
                      (t.multiply = [
                        e.DST_COLOR,
                        e.ONE_MINUS_SRC_ALPHA,
                        e.ONE,
                        e.ONE_MINUS_SRC_ALPHA,
                      ]),
                      (t.screen = [
                        e.ONE,
                        e.ONE_MINUS_SRC_COLOR,
                        e.ONE,
                        e.ONE_MINUS_SRC_ALPHA,
                      ]),
                      (t.none = [0, 0]),
                      (t["normal-npm"] = [
                        e.SRC_ALPHA,
                        e.ONE_MINUS_SRC_ALPHA,
                        e.ONE,
                        e.ONE_MINUS_SRC_ALPHA,
                      ]),
                      (t["add-npm"] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE]),
                      (t["screen-npm"] = [
                        e.SRC_ALPHA,
                        e.ONE_MINUS_SRC_COLOR,
                        e.ONE,
                        e.ONE_MINUS_SRC_ALPHA,
                      ]),
                      (t.erase = [e.ZERO, e.ONE_MINUS_SRC_ALPHA]),
                      e instanceof V.e.get().getWebGLRenderingContext())
                    ) {
                      var r = e.getExtension("EXT_blend_minmax");
                      r &&
                        ((t.min = [
                          e.ONE,
                          e.ONE,
                          e.ONE,
                          e.ONE,
                          r.MIN_EXT,
                          r.MIN_EXT,
                        ]),
                        (t.max = [
                          e.ONE,
                          e.ONE,
                          e.ONE,
                          e.ONE,
                          r.MAX_EXT,
                          r.MAX_EXT,
                        ]));
                    } else
                      ((t.min = [e.ONE, e.ONE, e.ONE, e.ONE, e.MIN, e.MIN]),
                        (t.max = [e.ONE, e.ONE, e.ONE, e.ONE, e.MAX, e.MAX]));
                    return t;
                  })(e)),
                  this.resetState());
              },
            },
            {
              key: "set",
              value: function (e) {
                if ((e || (e = this.defaultState), this.stateId !== e.data)) {
                  for (var t = this.stateId ^ e.data, r = 0; t; )
                    (1 & t && this.map[r].call(this, !!(e.data & (1 << r))),
                      (t >>= 1),
                      r++);
                  this.stateId = e.data;
                }
                for (var n = 0; n < this.checks.length; n++)
                  this.checks[n](this, e);
              },
            },
            {
              key: "forceState",
              value: function (e) {
                e || (e = this.defaultState);
                for (var t = 0; t < this.map.length; t++)
                  this.map[t].call(this, !!(e.data & (1 << t)));
                for (var r = 0; r < this.checks.length; r++)
                  this.checks[r](this, e);
                this.stateId = e.data;
              },
            },
            {
              key: "setBlend",
              value: function (t) {
                (this._updateCheck(e._checkBlendMode, t),
                  this.gl[t ? "enable" : "disable"](this.gl.BLEND));
              },
            },
            {
              key: "setOffset",
              value: function (t) {
                (this._updateCheck(e._checkPolygonOffset, t),
                  this.gl[t ? "enable" : "disable"](
                    this.gl.POLYGON_OFFSET_FILL,
                  ));
              },
            },
            {
              key: "setDepthTest",
              value: function (e) {
                this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
              },
            },
            {
              key: "setDepthMask",
              value: function (e) {
                this.gl.depthMask(e);
              },
            },
            {
              key: "setCullFace",
              value: function (e) {
                ((this._cullFace = e),
                  this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE),
                  this._cullFace &&
                    this._frontFaceDirty &&
                    this.setFrontFace(this._frontFace));
              },
            },
            {
              key: "setFrontFace",
              value: function (e) {
                ((this._frontFace = e), (this._frontFaceDirty = !1));
                var t = this._invertFrontFace ? !e : e;
                this._glFrontFace !== t &&
                  ((this._glFrontFace = t),
                  this.gl.frontFace(this.gl[t ? "CW" : "CCW"]));
              },
            },
            {
              key: "setBlendMode",
              value: function (e) {
                if (
                  (this.blendModesMap[e] || (e = "normal"),
                  e !== this.blendMode)
                ) {
                  this.blendMode = e;
                  var t = this.blendModesMap[e],
                    r = this.gl;
                  (2 === t.length
                    ? r.blendFunc(t[0], t[1])
                    : r.blendFuncSeparate(t[0], t[1], t[2], t[3]),
                    6 === t.length
                      ? ((this._blendEq = !0),
                        r.blendEquationSeparate(t[4], t[5]))
                      : this._blendEq &&
                        ((this._blendEq = !1),
                        r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD)));
                }
              },
            },
            {
              key: "setPolygonOffset",
              value: function (e, t) {
                this.gl.polygonOffset(e, t);
              },
            },
            {
              key: "resetState",
              value: function () {
                ((this._glFrontFace = !1),
                  (this._frontFace = !1),
                  (this._cullFace = !1),
                  (this._frontFaceDirty = !1),
                  (this._invertFrontFace = !1),
                  this.gl.frontFace(this.gl.CCW),
                  this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
                  this.forceState(this.defaultState),
                  (this._blendEq = !0),
                  (this.blendMode = ""),
                  this.setBlendMode("normal"));
              },
            },
            {
              key: "_updateCheck",
              value: function (e, t) {
                var r = this.checks.indexOf(e);
                t && -1 === r
                  ? this.checks.push(e)
                  : t || -1 === r || this.checks.splice(r, 1);
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this.gl = null), (this.checks.length = 0));
              },
            },
          ]) && Jt(t.prototype, r),
          n && Jt(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, r, n;
      })();
      tr.extension = { type: [n.Ag.WebGLSystem], name: "state" };
      var rr = tr;
      function nr(e) {
        return (
          (nr =
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
          nr(e)
        );
      }
      function or(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ar(n.key), n));
        }
      }
      function ir(e, t, r) {
        return (
          t && or(e.prototype, t),
          r && or(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function ar(e) {
        var t = (function (e, t) {
          if ("object" != nr(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != nr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == nr(t) ? t : t + "";
      }
      var ur = ir(function e(t) {
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.target = te.TEXTURE_2D),
            (this.texture = t),
            (this.width = -1),
            (this.height = -1),
            (this.type = re.UNSIGNED_BYTE),
            (this.internalFormat = ee.RGBA),
            (this.format = ee.RGBA),
            (this.samplerType = 0));
        }),
        sr = {
          id: "buffer",
          upload: function (e, t, r) {
            (t.width === e.width || t.height === e.height
              ? r.texSubImage2D(
                  r.TEXTURE_2D,
                  0,
                  0,
                  0,
                  e.width,
                  e.height,
                  t.format,
                  t.type,
                  e.resource,
                )
              : r.texImage2D(
                  t.target,
                  0,
                  t.internalFormat,
                  e.width,
                  e.height,
                  0,
                  t.format,
                  t.type,
                  e.resource,
                ),
              (t.width = e.width),
              (t.height = e.height));
          },
        },
        cr = {
          "bc1-rgba-unorm": !0,
          "bc1-rgba-unorm-srgb": !0,
          "bc2-rgba-unorm": !0,
          "bc2-rgba-unorm-srgb": !0,
          "bc3-rgba-unorm": !0,
          "bc3-rgba-unorm-srgb": !0,
          "bc4-r-unorm": !0,
          "bc4-r-snorm": !0,
          "bc5-rg-unorm": !0,
          "bc5-rg-snorm": !0,
          "bc6h-rgb-ufloat": !0,
          "bc6h-rgb-float": !0,
          "bc7-rgba-unorm": !0,
          "bc7-rgba-unorm-srgb": !0,
          "etc2-rgb8unorm": !0,
          "etc2-rgb8unorm-srgb": !0,
          "etc2-rgb8a1unorm": !0,
          "etc2-rgb8a1unorm-srgb": !0,
          "etc2-rgba8unorm": !0,
          "etc2-rgba8unorm-srgb": !0,
          "eac-r11unorm": !0,
          "eac-r11snorm": !0,
          "eac-rg11unorm": !0,
          "eac-rg11snorm": !0,
          "astc-4x4-unorm": !0,
          "astc-4x4-unorm-srgb": !0,
          "astc-5x4-unorm": !0,
          "astc-5x4-unorm-srgb": !0,
          "astc-5x5-unorm": !0,
          "astc-5x5-unorm-srgb": !0,
          "astc-6x5-unorm": !0,
          "astc-6x5-unorm-srgb": !0,
          "astc-6x6-unorm": !0,
          "astc-6x6-unorm-srgb": !0,
          "astc-8x5-unorm": !0,
          "astc-8x5-unorm-srgb": !0,
          "astc-8x6-unorm": !0,
          "astc-8x6-unorm-srgb": !0,
          "astc-8x8-unorm": !0,
          "astc-8x8-unorm-srgb": !0,
          "astc-10x5-unorm": !0,
          "astc-10x5-unorm-srgb": !0,
          "astc-10x6-unorm": !0,
          "astc-10x6-unorm-srgb": !0,
          "astc-10x8-unorm": !0,
          "astc-10x8-unorm-srgb": !0,
          "astc-10x10-unorm": !0,
          "astc-10x10-unorm-srgb": !0,
          "astc-12x10-unorm": !0,
          "astc-12x10-unorm-srgb": !0,
          "astc-12x12-unorm": !0,
          "astc-12x12-unorm-srgb": !0,
        },
        lr = {
          id: "compressed",
          upload: function (e, t, r) {
            r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
            for (
              var n = e.pixelWidth,
                o = e.pixelHeight,
                i = !!cr[e.format],
                a = 0;
              a < e.resource.length;
              a++
            ) {
              var u = e.resource[a];
              (i
                ? r.compressedTexImage2D(
                    r.TEXTURE_2D,
                    a,
                    t.internalFormat,
                    n,
                    o,
                    0,
                    u,
                  )
                : r.texImage2D(
                    r.TEXTURE_2D,
                    a,
                    t.internalFormat,
                    n,
                    o,
                    0,
                    t.format,
                    t.type,
                    u,
                  ),
                (n = Math.max(n >> 1, 1)),
                (o = Math.max(o >> 1, 1)));
            }
          },
        },
        fr = {
          id: "image",
          upload: function (e, t, r, n) {
            var o = t.width,
              i = t.height,
              a = e.pixelWidth,
              u = e.pixelHeight,
              s = e.resourceWidth,
              c = e.resourceHeight;
            (s < a || c < u
              ? ((o === a && i === u) ||
                  r.texImage2D(
                    t.target,
                    0,
                    t.internalFormat,
                    a,
                    u,
                    0,
                    t.format,
                    t.type,
                    null,
                  ),
                2 === n
                  ? r.texSubImage2D(
                      r.TEXTURE_2D,
                      0,
                      0,
                      0,
                      s,
                      c,
                      t.format,
                      t.type,
                      e.resource,
                    )
                  : r.texSubImage2D(
                      r.TEXTURE_2D,
                      0,
                      0,
                      0,
                      t.format,
                      t.type,
                      e.resource,
                    ))
              : o === a && i === u
                ? r.texSubImage2D(
                    r.TEXTURE_2D,
                    0,
                    0,
                    0,
                    t.format,
                    t.type,
                    e.resource,
                  )
                : 2 === n
                  ? r.texImage2D(
                      t.target,
                      0,
                      t.internalFormat,
                      a,
                      u,
                      0,
                      t.format,
                      t.type,
                      e.resource,
                    )
                  : r.texImage2D(
                      t.target,
                      0,
                      t.internalFormat,
                      t.format,
                      t.type,
                      e.resource,
                    ),
              (t.width = a),
              (t.height = u));
          },
        },
        hr = {
          id: "video",
          upload: function (e, t, r, n) {
            e.isValid
              ? fr.upload(e, t, r, n)
              : r.texImage2D(
                  t.target,
                  0,
                  t.internalFormat,
                  1,
                  1,
                  0,
                  t.format,
                  t.type,
                  null,
                );
          },
        },
        _r = { linear: 9729, nearest: 9728 },
        vr = {
          linear: { linear: 9987, nearest: 9985 },
          nearest: { linear: 9986, nearest: 9984 },
        },
        mr = { "clamp-to-edge": 33071, repeat: 10497, "mirror-repeat": 33648 },
        br = {
          never: 512,
          less: 513,
          equal: 514,
          "less-equal": 515,
          greater: 516,
          "not-equal": 517,
          "greater-equal": 518,
          always: 519,
        };
      function dr(e, t, r, n, o, i, a, u) {
        var s = i;
        if (
          !u ||
          "repeat" !== e.addressModeU ||
          "repeat" !== e.addressModeV ||
          "repeat" !== e.addressModeW
        ) {
          var c = mr[a ? "clamp-to-edge" : e.addressModeU],
            l = mr[a ? "clamp-to-edge" : e.addressModeV],
            f = mr[a ? "clamp-to-edge" : e.addressModeW];
          (t[o](s, t.TEXTURE_WRAP_S, c),
            t[o](s, t.TEXTURE_WRAP_T, l),
            t.TEXTURE_WRAP_R && t[o](s, t.TEXTURE_WRAP_R, f));
        }
        if (
          ((u && "linear" === e.magFilter) ||
            t[o](s, t.TEXTURE_MAG_FILTER, _r[e.magFilter]),
          r)
        ) {
          if (!u || "linear" !== e.mipmapFilter) {
            var h = vr[e.minFilter][e.mipmapFilter];
            t[o](s, t.TEXTURE_MIN_FILTER, h);
          }
        } else t[o](s, t.TEXTURE_MIN_FILTER, _r[e.minFilter]);
        if (n && e.maxAnisotropy > 1) {
          var _ = Math.min(
            e.maxAnisotropy,
            t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
          );
          t[o](s, n.TEXTURE_MAX_ANISOTROPY_EXT, _);
        }
        e.compare && t[o](s, t.TEXTURE_COMPARE_FUNC, br[e.compare]);
      }
      function pr(e) {
        return (
          (pr =
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
          pr(e)
        );
      }
      function yr(e, t) {
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
      function gr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? yr(Object(r), !0).forEach(function (t) {
                Er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : yr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Er(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != pr(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != pr(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == pr(t) ? t : t + "";
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
      function Sr(e) {
        return (
          (Sr =
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
          Sr(e)
        );
      }
      function Tr(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Rr(n.key), n));
        }
      }
      function Rr(e) {
        var t = (function (e, t) {
          if ("object" != Sr(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Sr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Sr(t) ? t : t + "";
      }
      var xr = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.managedTextures = []),
              (this._glTextures = Object.create(null)),
              (this._glSamplers = Object.create(null)),
              (this._boundTextures = []),
              (this._activeTextureLocation = -1),
              (this._boundSamplers = Object.create(null)),
              (this._uploads = {
                image: fr,
                buffer: sr,
                video: hr,
                compressed: lr,
              }),
              (this._premultiplyAlpha = !1),
              (this._useSeparateSamplers = !1),
              (this._renderer = t),
              this._renderer.renderableGC.addManagedHash(this, "_glTextures"),
              this._renderer.renderableGC.addManagedHash(this, "_glSamplers"));
          }),
          (t = [
            {
              key: "contextChange",
              value: function (e) {
                ((this._gl = e),
                  this._mapFormatToInternalFormat ||
                    ((this._mapFormatToInternalFormat = (function (e, t) {
                      var r = {},
                        n = e.RGBA;
                      return (
                        e instanceof V.e.get().getWebGLRenderingContext()
                          ? t.srgb &&
                            (r = {
                              "rgba8unorm-srgb": t.srgb.SRGB8_ALPHA8_EXT,
                              "bgra8unorm-srgb": t.srgb.SRGB8_ALPHA8_EXT,
                            })
                          : ((r = {
                              "rgba8unorm-srgb": e.SRGB8_ALPHA8,
                              "bgra8unorm-srgb": e.SRGB8_ALPHA8,
                            }),
                            (n = e.RGBA8)),
                        gr(
                          gr(
                            gr(
                              gr(
                                gr(
                                  gr(
                                    gr(
                                      {
                                        r8unorm: e.R8,
                                        r8snorm: e.R8_SNORM,
                                        r8uint: e.R8UI,
                                        r8sint: e.R8I,
                                        r16uint: e.R16UI,
                                        r16sint: e.R16I,
                                        r16float: e.R16F,
                                        rg8unorm: e.RG8,
                                        rg8snorm: e.RG8_SNORM,
                                        rg8uint: e.RG8UI,
                                        rg8sint: e.RG8I,
                                        r32uint: e.R32UI,
                                        r32sint: e.R32I,
                                        r32float: e.R32F,
                                        rg16uint: e.RG16UI,
                                        rg16sint: e.RG16I,
                                        rg16float: e.RG16F,
                                        rgba8unorm: e.RGBA,
                                      },
                                      r,
                                    ),
                                    {},
                                    {
                                      rgba8snorm: e.RGBA8_SNORM,
                                      rgba8uint: e.RGBA8UI,
                                      rgba8sint: e.RGBA8I,
                                      bgra8unorm: n,
                                      rgb9e5ufloat: e.RGB9_E5,
                                      rgb10a2unorm: e.RGB10_A2,
                                      rg11b10ufloat: e.R11F_G11F_B10F,
                                      rg32uint: e.RG32UI,
                                      rg32sint: e.RG32I,
                                      rg32float: e.RG32F,
                                      rgba16uint: e.RGBA16UI,
                                      rgba16sint: e.RGBA16I,
                                      rgba16float: e.RGBA16F,
                                      rgba32uint: e.RGBA32UI,
                                      rgba32sint: e.RGBA32I,
                                      rgba32float: e.RGBA32F,
                                      stencil8: e.STENCIL_INDEX8,
                                      depth16unorm: e.DEPTH_COMPONENT16,
                                      depth24plus: e.DEPTH_COMPONENT24,
                                      "depth24plus-stencil8":
                                        e.DEPTH24_STENCIL8,
                                      depth32float: e.DEPTH_COMPONENT32F,
                                      "depth32float-stencil8":
                                        e.DEPTH32F_STENCIL8,
                                    },
                                    t.s3tc
                                      ? {
                                          "bc1-rgba-unorm":
                                            t.s3tc
                                              .COMPRESSED_RGBA_S3TC_DXT1_EXT,
                                          "bc2-rgba-unorm":
                                            t.s3tc
                                              .COMPRESSED_RGBA_S3TC_DXT3_EXT,
                                          "bc3-rgba-unorm":
                                            t.s3tc
                                              .COMPRESSED_RGBA_S3TC_DXT5_EXT,
                                        }
                                      : {},
                                  ),
                                  t.s3tc_sRGB
                                    ? {
                                        "bc1-rgba-unorm-srgb":
                                          t.s3tc_sRGB
                                            .COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
                                        "bc2-rgba-unorm-srgb":
                                          t.s3tc_sRGB
                                            .COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
                                        "bc3-rgba-unorm-srgb":
                                          t.s3tc_sRGB
                                            .COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
                                      }
                                    : {},
                                ),
                                t.rgtc
                                  ? {
                                      "bc4-r-unorm":
                                        t.rgtc.COMPRESSED_RED_RGTC1_EXT,
                                      "bc4-r-snorm":
                                        t.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,
                                      "bc5-rg-unorm":
                                        t.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,
                                      "bc5-rg-snorm":
                                        t.rgtc
                                          .COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT,
                                    }
                                  : {},
                              ),
                              t.bptc
                                ? {
                                    "bc6h-rgb-float":
                                      t.bptc
                                        .COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
                                    "bc6h-rgb-ufloat":
                                      t.bptc
                                        .COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
                                    "bc7-rgba-unorm":
                                      t.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
                                    "bc7-rgba-unorm-srgb":
                                      t.bptc
                                        .COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT,
                                  }
                                : {},
                            ),
                            t.etc
                              ? {
                                  "etc2-rgb8unorm": t.etc.COMPRESSED_RGB8_ETC2,
                                  "etc2-rgb8unorm-srgb":
                                    t.etc.COMPRESSED_SRGB8_ETC2,
                                  "etc2-rgb8a1unorm":
                                    t.etc
                                      .COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
                                  "etc2-rgb8a1unorm-srgb":
                                    t.etc
                                      .COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
                                  "etc2-rgba8unorm":
                                    t.etc.COMPRESSED_RGBA8_ETC2_EAC,
                                  "etc2-rgba8unorm-srgb":
                                    t.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
                                  "eac-r11unorm": t.etc.COMPRESSED_R11_EAC,
                                  "eac-rg11unorm":
                                    t.etc.COMPRESSED_SIGNED_RG11_EAC,
                                }
                              : {},
                          ),
                          t.astc
                            ? {
                                "astc-4x4-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
                                "astc-4x4-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
                                "astc-5x4-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,
                                "astc-5x4-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,
                                "astc-5x5-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
                                "astc-5x5-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
                                "astc-6x5-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
                                "astc-6x5-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
                                "astc-6x6-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
                                "astc-6x6-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
                                "astc-8x5-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
                                "astc-8x5-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
                                "astc-8x6-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
                                "astc-8x6-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
                                "astc-8x8-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
                                "astc-8x8-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
                                "astc-10x5-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
                                "astc-10x5-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
                                "astc-10x6-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
                                "astc-10x6-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
                                "astc-10x8-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
                                "astc-10x8-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
                                "astc-10x10-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
                                "astc-10x10-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
                                "astc-12x10-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
                                "astc-12x10-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
                                "astc-12x12-unorm":
                                  t.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
                                "astc-12x12-unorm-srgb":
                                  t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR,
                              }
                            : {},
                        )
                      );
                    })(e, this._renderer.context.extensions)),
                    (this._mapFormatToType = (function (e) {
                      return {
                        r8unorm: e.UNSIGNED_BYTE,
                        r8snorm: e.BYTE,
                        r8uint: e.UNSIGNED_BYTE,
                        r8sint: e.BYTE,
                        r16uint: e.UNSIGNED_SHORT,
                        r16sint: e.SHORT,
                        r16float: e.HALF_FLOAT,
                        rg8unorm: e.UNSIGNED_BYTE,
                        rg8snorm: e.BYTE,
                        rg8uint: e.UNSIGNED_BYTE,
                        rg8sint: e.BYTE,
                        r32uint: e.UNSIGNED_INT,
                        r32sint: e.INT,
                        r32float: e.FLOAT,
                        rg16uint: e.UNSIGNED_SHORT,
                        rg16sint: e.SHORT,
                        rg16float: e.HALF_FLOAT,
                        rgba8unorm: e.UNSIGNED_BYTE,
                        "rgba8unorm-srgb": e.UNSIGNED_BYTE,
                        rgba8snorm: e.BYTE,
                        rgba8uint: e.UNSIGNED_BYTE,
                        rgba8sint: e.BYTE,
                        bgra8unorm: e.UNSIGNED_BYTE,
                        "bgra8unorm-srgb": e.UNSIGNED_BYTE,
                        rgb9e5ufloat: e.UNSIGNED_INT_5_9_9_9_REV,
                        rgb10a2unorm: e.UNSIGNED_INT_2_10_10_10_REV,
                        rg11b10ufloat: e.UNSIGNED_INT_10F_11F_11F_REV,
                        rg32uint: e.UNSIGNED_INT,
                        rg32sint: e.INT,
                        rg32float: e.FLOAT,
                        rgba16uint: e.UNSIGNED_SHORT,
                        rgba16sint: e.SHORT,
                        rgba16float: e.HALF_FLOAT,
                        rgba32uint: e.UNSIGNED_INT,
                        rgba32sint: e.INT,
                        rgba32float: e.FLOAT,
                        stencil8: e.UNSIGNED_BYTE,
                        depth16unorm: e.UNSIGNED_SHORT,
                        depth24plus: e.UNSIGNED_INT,
                        "depth24plus-stencil8": e.UNSIGNED_INT_24_8,
                        depth32float: e.FLOAT,
                        "depth32float-stencil8":
                          e.FLOAT_32_UNSIGNED_INT_24_8_REV,
                      };
                    })(e)),
                    (this._mapFormatToFormat = (function (e) {
                      return {
                        r8unorm: e.RED,
                        r8snorm: e.RED,
                        r8uint: e.RED,
                        r8sint: e.RED,
                        r16uint: e.RED,
                        r16sint: e.RED,
                        r16float: e.RED,
                        rg8unorm: e.RG,
                        rg8snorm: e.RG,
                        rg8uint: e.RG,
                        rg8sint: e.RG,
                        r32uint: e.RED,
                        r32sint: e.RED,
                        r32float: e.RED,
                        rg16uint: e.RG,
                        rg16sint: e.RG,
                        rg16float: e.RG,
                        rgba8unorm: e.RGBA,
                        "rgba8unorm-srgb": e.RGBA,
                        rgba8snorm: e.RGBA,
                        rgba8uint: e.RGBA,
                        rgba8sint: e.RGBA,
                        bgra8unorm: e.RGBA,
                        "bgra8unorm-srgb": e.RGBA,
                        rgb9e5ufloat: e.RGB,
                        rgb10a2unorm: e.RGBA,
                        rg11b10ufloat: e.RGB,
                        rg32uint: e.RG,
                        rg32sint: e.RG,
                        rg32float: e.RG,
                        rgba16uint: e.RGBA,
                        rgba16sint: e.RGBA,
                        rgba16float: e.RGBA,
                        rgba32uint: e.RGBA,
                        rgba32sint: e.RGBA,
                        rgba32float: e.RGBA,
                        stencil8: e.STENCIL_INDEX8,
                        depth16unorm: e.DEPTH_COMPONENT,
                        depth24plus: e.DEPTH_COMPONENT,
                        "depth24plus-stencil8": e.DEPTH_STENCIL,
                        depth32float: e.DEPTH_COMPONENT,
                        "depth32float-stencil8": e.DEPTH_STENCIL,
                      };
                    })(e))),
                  (this._glTextures = Object.create(null)),
                  (this._glSamplers = Object.create(null)),
                  (this._boundSamplers = Object.create(null)),
                  (this._premultiplyAlpha = !1));
                for (var t = 0; t < 16; t++) this.bind(p.g.EMPTY, t);
              },
            },
            {
              key: "initSource",
              value: function (e) {
                this.bind(e);
              },
            },
            {
              key: "bind",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r = e.source;
                e
                  ? (this.bindSource(r, t),
                    this._useSeparateSamplers && this._bindSampler(r.style, t))
                  : (this.bindSource(null, t),
                    this._useSeparateSamplers && this._bindSampler(null, t));
              },
            },
            {
              key: "bindSource",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r = this._gl;
                if (
                  ((e._touched = this._renderer.textureGC.count),
                  this._boundTextures[t] !== e)
                ) {
                  ((this._boundTextures[t] = e),
                    this._activateLocation(t),
                    e || (e = p.g.EMPTY.source));
                  var n = this.getGlSource(e);
                  r.bindTexture(n.target, n.texture);
                }
              },
            },
            {
              key: "_bindSampler",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r = this._gl;
                if (!e)
                  return (
                    (this._boundSamplers[t] = null),
                    void r.bindSampler(t, null)
                  );
                var n = this._getGlSampler(e);
                this._boundSamplers[t] !== n &&
                  ((this._boundSamplers[t] = n), r.bindSampler(t, n));
              },
            },
            {
              key: "unbind",
              value: function (e) {
                for (
                  var t = e.source,
                    r = this._boundTextures,
                    n = this._gl,
                    o = 0;
                  o < r.length;
                  o++
                )
                  if (r[o] === t) {
                    this._activateLocation(o);
                    var i = this.getGlSource(t);
                    (n.bindTexture(i.target, null), (r[o] = null));
                  }
              },
            },
            {
              key: "_activateLocation",
              value: function (e) {
                this._activeTextureLocation !== e &&
                  ((this._activeTextureLocation = e),
                  this._gl.activeTexture(this._gl.TEXTURE0 + e));
              },
            },
            {
              key: "_initSource",
              value: function (e) {
                var t = this._gl,
                  r = new ur(t.createTexture());
                if (
                  ((r.type = this._mapFormatToType[e.format]),
                  (r.internalFormat =
                    this._mapFormatToInternalFormat[e.format]),
                  (r.format = this._mapFormatToFormat[e.format]),
                  e.autoGenerateMipmaps &&
                    (this._renderer.context.supports.nonPowOf2mipmaps ||
                      e.isPowerOfTwo))
                ) {
                  var n = Math.max(e.width, e.height);
                  e.mipLevelCount = Math.floor(Math.log2(n)) + 1;
                }
                return (
                  (this._glTextures[e.uid] = r),
                  this.managedTextures.includes(e) ||
                    (e.on("update", this.onSourceUpdate, this),
                    e.on("resize", this.onSourceUpdate, this),
                    e.on("styleChange", this.onStyleChange, this),
                    e.on("destroy", this.onSourceDestroy, this),
                    e.on("unload", this.onSourceUnload, this),
                    e.on("updateMipmaps", this.onUpdateMipmaps, this),
                    this.managedTextures.push(e)),
                  this.onSourceUpdate(e),
                  this.updateStyle(e, !1),
                  r
                );
              },
            },
            {
              key: "onStyleChange",
              value: function (e) {
                this.updateStyle(e, !1);
              },
            },
            {
              key: "updateStyle",
              value: function (e, t) {
                var r = this._gl,
                  n = this.getGlSource(e);
                (r.bindTexture(r.TEXTURE_2D, n.texture),
                  (this._boundTextures[this._activeTextureLocation] = e),
                  dr(
                    e.style,
                    r,
                    e.mipLevelCount > 1,
                    this._renderer.context.extensions.anisotropicFiltering,
                    "texParameteri",
                    r.TEXTURE_2D,
                    !this._renderer.context.supports.nonPowOf2wrapping &&
                      !e.isPowerOfTwo,
                    t,
                  ));
              },
            },
            {
              key: "onSourceUnload",
              value: function (e) {
                var t = this._glTextures[e.uid];
                t &&
                  (this.unbind(e),
                  (this._glTextures[e.uid] = null),
                  this._gl.deleteTexture(t.texture));
              },
            },
            {
              key: "onSourceUpdate",
              value: function (e) {
                var t = this._gl,
                  r = this.getGlSource(e);
                (t.bindTexture(t.TEXTURE_2D, r.texture),
                  (this._boundTextures[this._activeTextureLocation] = e));
                var n = "premultiply-alpha-on-upload" === e.alphaMode;
                (this._premultiplyAlpha !== n &&
                  ((this._premultiplyAlpha = n),
                  t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n)),
                  this._uploads[e.uploadMethodId]
                    ? this._uploads[e.uploadMethodId].upload(
                        e,
                        r,
                        t,
                        this._renderer.context.webGLVersion,
                      )
                    : t.texImage2D(
                        t.TEXTURE_2D,
                        0,
                        t.RGBA,
                        e.pixelWidth,
                        e.pixelHeight,
                        0,
                        t.RGBA,
                        t.UNSIGNED_BYTE,
                        null,
                      ),
                  e.autoGenerateMipmaps &&
                    e.mipLevelCount > 1 &&
                    this.onUpdateMipmaps(e, !1));
              },
            },
            {
              key: "onUpdateMipmaps",
              value: function (e) {
                (!(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1]) &&
                  this.bindSource(e, 0);
                var t = this.getGlSource(e);
                this._gl.generateMipmap(t.target);
              },
            },
            {
              key: "onSourceDestroy",
              value: function (e) {
                (e.off("destroy", this.onSourceDestroy, this),
                  e.off("update", this.onSourceUpdate, this),
                  e.off("resize", this.onSourceUpdate, this),
                  e.off("unload", this.onSourceUnload, this),
                  e.off("styleChange", this.onStyleChange, this),
                  e.off("updateMipmaps", this.onUpdateMipmaps, this),
                  this.managedTextures.splice(
                    this.managedTextures.indexOf(e),
                    1,
                  ),
                  this.onSourceUnload(e));
              },
            },
            {
              key: "_initSampler",
              value: function (e) {
                var t = this._gl,
                  r = this._gl.createSampler();
                return (
                  (this._glSamplers[e._resourceId] = r),
                  dr(
                    e,
                    t,
                    this._boundTextures[this._activeTextureLocation]
                      .mipLevelCount > 1,
                    this._renderer.context.extensions.anisotropicFiltering,
                    "samplerParameteri",
                    r,
                    !1,
                    !0,
                  ),
                  this._glSamplers[e._resourceId]
                );
              },
            },
            {
              key: "_getGlSampler",
              value: function (e) {
                return this._glSamplers[e._resourceId] || this._initSampler(e);
              },
            },
            {
              key: "getGlSource",
              value: function (e) {
                return this._glTextures[e.uid] || this._initSource(e);
              },
            },
            {
              key: "generateCanvas",
              value: function (e) {
                var t = this.getPixels(e),
                  r = t.pixels,
                  n = t.width,
                  o = t.height,
                  i = V.e.get().createCanvas();
                ((i.width = n), (i.height = o));
                var a = i.getContext("2d");
                if (a) {
                  var u = a.createImageData(n, o);
                  (u.data.set(r), a.putImageData(u, 0, 0));
                }
                return i;
              },
            },
            {
              key: "getPixels",
              value: function (e) {
                var t = e.source.resolution,
                  r = e.frame,
                  n = Math.max(Math.round(r.width * t), 1),
                  o = Math.max(Math.round(r.height * t), 1),
                  i = new Uint8Array(4 * n * o),
                  a = this._renderer,
                  u = a.renderTarget.getRenderTarget(e),
                  s = a.renderTarget.getGpuRenderTarget(u),
                  c = a.gl;
                return (
                  c.bindFramebuffer(c.FRAMEBUFFER, s.resolveTargetFramebuffer),
                  c.readPixels(
                    Math.round(r.x * t),
                    Math.round(r.y * t),
                    n,
                    o,
                    c.RGBA,
                    c.UNSIGNED_BYTE,
                    i,
                  ),
                  {
                    pixels: new Uint8ClampedArray(i.buffer),
                    width: n,
                    height: o,
                  }
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this;
                (this.managedTextures.slice().forEach(function (t) {
                  return e.onSourceDestroy(t);
                }),
                  (this.managedTextures = null),
                  (this._glTextures = null),
                  (this._glSamplers = null),
                  (this._boundTextures = null),
                  (this._boundSamplers = null),
                  (this._mapFormatToInternalFormat = null),
                  (this._mapFormatToType = null),
                  (this._mapFormatToFormat = null),
                  (this._uploads = null),
                  (this._renderer = null));
              },
            },
            {
              key: "resetState",
              value: function () {
                ((this._activeTextureLocation = -1),
                  this._boundTextures.fill(p.g.EMPTY.source),
                  (this._boundSamplers = Object.create(null)));
                var e = this._gl;
                ((this._premultiplyAlpha = !1),
                  e.pixelStorei(
                    e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    this._premultiplyAlpha,
                  ));
              },
            },
          ]),
          t && Tr(e.prototype, t),
          r && Tr(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function Ar(e) {
        return (
          (Ar =
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
          Ar(e)
        );
      }
      function Or(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Br(n.key), n));
        }
      }
      function Br(e) {
        var t = (function (e, t) {
          if ("object" != Ar(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ar(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Ar(t) ? t : t + "";
      }
      function Pr(e, t, r) {
        return (
          (t = Cr(t)),
          (function (e, t) {
            if (t && ("object" == Ar(t) || "function" == typeof t)) return t;
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
            Nr()
              ? Reflect.construct(t, r || [], Cr(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function Nr() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Nr = function () {
          return !!e;
        })();
      }
      function Cr(e) {
        return (
          (Cr = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Cr(e)
        );
      }
      function Gr(e, t) {
        return (
          (Gr = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Gr(e, t)
        );
      }
      function wr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Dr(e);
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
              if ("string" == typeof e) return Dr(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Dr(e, t)
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
      function Dr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      xr.extension = { type: [n.Ag.WebGLSystem], name: "texture" };
      var Ir = [].concat(wr(N.i), [
          tt,
          Ee,
          Z,
          De,
          H,
          xr,
          St,
          ce,
          Zt,
          Xt,
          Pe,
          rr,
          Me,
          xe,
        ]),
        Fr = wr(N.f),
        Ur = [B, T, b],
        Lr = [],
        kr = [],
        Mr = [];
      (n.XO.handleByNamedList(n.Ag.WebGLSystem, Lr),
        n.XO.handleByNamedList(n.Ag.WebGLPipes, kr),
        n.XO.handleByNamedList(n.Ag.WebGLPipesAdaptor, Mr),
        n.XO.add.apply(n.XO, wr(Ir).concat(wr(Fr), Ur)));
      var jr = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Pr(this, t, [
              {
                name: "webgl",
                type: C.W.WEBGL,
                systems: Lr,
                renderPipes: kr,
                renderPipeAdaptors: Mr,
              },
            ])
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
              t && Gr(e, t));
          })(t, e),
          (r = t),
          n && Or(r.prototype, n),
          o && Or(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(P.k);
    },
  },
]);
