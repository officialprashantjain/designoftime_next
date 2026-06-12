/*! For license information please see 284.js.LICENSE.txt */
"use strict";
(self.webpackChunkHM_Starter = self.webpackChunkHM_Starter || []).push([
  [284],
  {
    449: function (e, t, r) {
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
          return u;
        },
      });
      var u = (function () {
        return (
          (e = function e() {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.batcherName = "default"),
              (this.packAsQuad = !1),
              (this.indexOffset = 0),
              (this.attributeOffset = 0),
              (this.roundPixels = 0),
              (this._batcher = null),
              (this._batch = null),
              (this._textureMatrixUpdateId = -1),
              (this._uvUpdateId = -1));
          }),
          (t = [
            {
              key: "blendMode",
              get: function () {
                return this.renderable.groupBlendMode;
              },
            },
            {
              key: "topology",
              get: function () {
                return this._topology || this.geometry.topology;
              },
              set: function (e) {
                this._topology = e;
              },
            },
            {
              key: "reset",
              value: function () {
                ((this.renderable = null),
                  (this.texture = null),
                  (this._batcher = null),
                  (this._batch = null),
                  (this.geometry = null),
                  (this._uvUpdateId = -1),
                  (this._textureMatrixUpdateId = -1));
              },
            },
            {
              key: "setTexture",
              value: function (e) {
                this.texture !== e &&
                  ((this.texture = e), (this._textureMatrixUpdateId = -1));
              },
            },
            {
              key: "uvs",
              get: function () {
                var e = this.geometry.getBuffer("aUV"),
                  t = e.data,
                  r = t,
                  n = this.texture.textureMatrix;
                return (
                  n.isSimple ||
                    ((r = this._transformedUvs),
                    (this._textureMatrixUpdateId === n._updateID &&
                      this._uvUpdateId === e._updateID) ||
                      ((!r || r.length < t.length) &&
                        (r = this._transformedUvs = new Float32Array(t.length)),
                      (this._textureMatrixUpdateId = n._updateID),
                      (this._uvUpdateId = e._updateID),
                      n.multiplyUvs(t, r))),
                  r
                );
              },
            },
            {
              key: "positions",
              get: function () {
                return this.geometry.positions;
              },
            },
            {
              key: "indices",
              get: function () {
                return this.geometry.indices;
              },
            },
            {
              key: "color",
              get: function () {
                return this.renderable.groupColorAlpha;
              },
            },
            {
              key: "groupTransform",
              get: function () {
                return this.renderable.groupTransform;
              },
            },
            {
              key: "attributeSize",
              get: function () {
                return this.geometry.positions.length / 2;
              },
            },
            {
              key: "indexSize",
              get: function () {
                return this.geometry.indices.length;
              },
            },
          ]) && o(e.prototype, t),
          r && o(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
    },
    629: function (e, t, r) {
      r.d(t, {
        u: function () {
          return m;
        },
      });
      var n = r(4480),
        o = r(7183),
        i = r(4936),
        u = r(2573);
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
                s(e, t, r[t]);
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
      function s(e, t, r) {
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
      function f(e, t) {
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
      function d(e, t, r) {
        return (
          (t = h(t)),
          (function (e, t) {
            if (t && ("object" == a(t) || "function" == typeof t)) return t;
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
      function v(e, t) {
        return (
          (v = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          v(e, t)
        );
      }
      var b = (function (e) {
        function t() {
          var e, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var i =
            null !== (e = arguments.length <= 0 ? void 0 : arguments[0]) &&
            void 0 !== e
              ? e
              : {};
          i instanceof Float32Array &&
            ((0, u.t6)(
              u.lj,
              "use new MeshGeometry({ positions, uvs, indices }) instead",
            ),
            (i = {
              positions: i,
              uvs: arguments.length <= 1 ? void 0 : arguments[1],
              indices: arguments.length <= 2 ? void 0 : arguments[2],
            }));
          var a =
              (i = l(l({}, t.defaultOptions), i)).positions ||
              new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
            c = i.uvs;
          c ||
            (c = i.positions
              ? new Float32Array(a.length)
              : new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]));
          var s = i.indices || new Uint32Array([0, 1, 2, 0, 2, 3]),
            f = i.shrinkBuffersToFit;
          return (
            ((r = d(this, t, [
              {
                attributes: {
                  aPosition: {
                    buffer: new n.h({
                      data: a,
                      label: "attribute-mesh-positions",
                      shrinkToFit: f,
                      usage: o.S.VERTEX | o.S.COPY_DST,
                    }),
                    format: "float32x2",
                    stride: 8,
                    offset: 0,
                  },
                  aUV: {
                    buffer: new n.h({
                      data: c,
                      label: "attribute-mesh-uvs",
                      shrinkToFit: f,
                      usage: o.S.VERTEX | o.S.COPY_DST,
                    }),
                    format: "float32x2",
                    stride: 8,
                    offset: 0,
                  },
                },
                indexBuffer: new n.h({
                  data: s,
                  label: "index-mesh-buffer",
                  shrinkToFit: f,
                  usage: o.S.INDEX | o.S.COPY_DST,
                }),
                topology: i.topology,
              },
            ])).batchMode = "auto"),
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
              t && v(e, t));
          })(t, e),
          (r = t),
          (i = [
            {
              key: "positions",
              get: function () {
                return this.attributes.aPosition.buffer.data;
              },
              set: function (e) {
                this.attributes.aPosition.buffer.data = e;
              },
            },
            {
              key: "uvs",
              get: function () {
                return this.attributes.aUV.buffer.data;
              },
              set: function (e) {
                this.attributes.aUV.buffer.data = e;
              },
            },
            {
              key: "indices",
              get: function () {
                return this.indexBuffer.data;
              },
              set: function (e) {
                this.indexBuffer.data = e;
              },
            },
          ]) && f(r.prototype, i),
          a && f(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, i, a;
      })(i.V);
      b.defaultOptions = { topology: "triangle-list", shrinkBuffersToFit: !1 };
      var m = b;
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
    869: function (e, t, r) {
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
            Object.defineProperty(e, u(n.key), n));
        }
      }
      function u(e) {
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
      var a = (function () {
          return (
            (e = function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
            }),
            (t = [
              {
                key: "execute",
                value: function (e, t) {
                  var r = e.state,
                    n = e.renderer,
                    o = t.shader || e.defaultShader;
                  ((o.resources.uTexture = t.texture._source),
                    (o.resources.uniforms = e.localUniforms));
                  var i = n.gl,
                    u = e.getBuffers(t);
                  (n.shader.bind(o),
                    n.state.set(r),
                    n.geometry.bind(u.geometry, o.glProgram));
                  var a =
                    2 === u.geometry.indexBuffer.data.BYTES_PER_ELEMENT
                      ? i.UNSIGNED_SHORT
                      : i.UNSIGNED_INT;
                  i.drawElements(
                    i.TRIANGLES,
                    6 * t.particleChildren.length,
                    a,
                    0,
                  );
                },
              },
            ]) && i(e.prototype, t),
            r && i(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })(),
        c = r(410),
        l = r(8309),
        s = r(202),
        f = r(5510),
        p = r(867),
        d = r(4480),
        y = r(7183),
        h = r(4936),
        v = r(4595),
        b = r(9543);
      function m(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          r = 6 * e;
        if (
          (r > 65535
            ? t || (t = new Uint32Array(r))
            : t || (t = new Uint16Array(r)),
          t.length !== r)
        )
          throw new Error(
            "Out buffer length is incorrect, got "
              .concat(t.length, " and expected ")
              .concat(r),
          );
        for (var n = 0, o = 0; n < r; n += 6, o += 4)
          ((t[n + 0] = o + 0),
            (t[n + 1] = o + 1),
            (t[n + 2] = o + 2),
            (t[n + 3] = o + 0),
            (t[n + 4] = o + 2),
            (t[n + 5] = o + 3));
        return t;
      }
      function g(e, t) {
        var r = [];
        r.push(
          "\n\n        var index = 0;\n\n        for (let i = 0; i < ps.length; ++i)\n        {\n            const p = ps[i];\n\n            ",
        );
        var n = 0;
        for (var o in e) {
          var i = e[o];
          if (t === i.dynamic)
            (r.push("offset = index + ".concat(n)),
              r.push(i.code),
              (n += (0, v.m)(i.format).stride / 4));
        }
        (r.push("\n            index += stride * 4;\n        }\n    "),
          r.unshift("\n        var stride = ".concat(n, ";\n    ")));
        var u = r.join("\n");
        return new Function("ps", "f32v", "u32v", u);
      }
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
      function x(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, w(n.key), n));
        }
      }
      function w(e) {
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
      var S = (function () {
        return (
          (e = function e(t) {
            var r;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._size = 0),
              (this._generateParticleUpdateCache = {}));
            var n = (this._size =
                null !== (r = t.size) && void 0 !== r ? r : 1e3),
              o = t.properties,
              i = 0,
              u = 0;
            for (var a in o) {
              var c = o[a],
                l = (0, v.m)(c.format);
              c.dynamic ? (u += l.stride) : (i += l.stride);
            }
            ((this._dynamicStride = u / 4),
              (this._staticStride = i / 4),
              (this.staticAttributeBuffer = new b.u(4 * n * i)),
              (this.dynamicAttributeBuffer = new b.u(4 * n * u)),
              (this.indexBuffer = m(n)));
            var s = new h.V(),
              f = 0,
              p = 0;
            for (var g in ((this._staticBuffer = new d.h({
              data: new Float32Array(1),
              label: "static-particle-buffer",
              shrinkToFit: !1,
              usage: y.S.VERTEX | y.S.COPY_DST,
            })),
            (this._dynamicBuffer = new d.h({
              data: new Float32Array(1),
              label: "dynamic-particle-buffer",
              shrinkToFit: !1,
              usage: y.S.VERTEX | y.S.COPY_DST,
            })),
            o)) {
              var _ = o[g],
                x = (0, v.m)(_.format);
              _.dynamic
                ? (s.addAttribute(_.attributeName, {
                    buffer: this._dynamicBuffer,
                    stride: 4 * this._dynamicStride,
                    offset: 4 * f,
                    format: _.format,
                  }),
                  (f += x.size))
                : (s.addAttribute(_.attributeName, {
                    buffer: this._staticBuffer,
                    stride: 4 * this._staticStride,
                    offset: 4 * p,
                    format: _.format,
                  }),
                  (p += x.size));
            }
            s.addIndex(this.indexBuffer);
            var w = this.getParticleUpdate(o);
            ((this._dynamicUpload = w.dynamicUpdate),
              (this._staticUpload = w.staticUpdate),
              (this.geometry = s));
          }),
          (t = [
            {
              key: "getParticleUpdate",
              value: function (e) {
                var t = (function (e) {
                  var t = [];
                  for (var r in e) {
                    var n = e[r];
                    t.push(r, n.code, n.dynamic ? "d" : "s");
                  }
                  return t.join("_");
                })(e);
                return (
                  this._generateParticleUpdateCache[t] ||
                    (this._generateParticleUpdateCache[t] =
                      this.generateParticleUpdate(e)),
                  this._generateParticleUpdateCache[t]
                );
              },
            },
            {
              key: "generateParticleUpdate",
              value: function (e) {
                return (function (e) {
                  return { dynamicUpdate: g(e, !0), staticUpdate: g(e, !1) };
                })(e);
              },
            },
            {
              key: "update",
              value: function (e, t) {
                e.length > this._size &&
                  ((t = !0),
                  (this._size = Math.max(e.length, (1.5 * this._size) | 0)),
                  (this.staticAttributeBuffer = new b.u(
                    this._size * this._staticStride * 4 * 4,
                  )),
                  (this.dynamicAttributeBuffer = new b.u(
                    this._size * this._dynamicStride * 4 * 4,
                  )),
                  (this.indexBuffer = m(this._size)),
                  this.geometry.indexBuffer.setDataWithSize(
                    this.indexBuffer,
                    this.indexBuffer.byteLength,
                    !0,
                  ));
                var r = this.dynamicAttributeBuffer;
                if (
                  (this._dynamicUpload(e, r.float32View, r.uint32View),
                  this._dynamicBuffer.setDataWithSize(
                    this.dynamicAttributeBuffer.float32View,
                    e.length * this._dynamicStride * 4,
                    !0,
                  ),
                  t)
                ) {
                  var n = this.staticAttributeBuffer;
                  (this._staticUpload(e, n.float32View, n.uint32View),
                    this._staticBuffer.setDataWithSize(
                      n.float32View,
                      e.length * this._staticStride * 4,
                      !0,
                    ));
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                (this._staticBuffer.destroy(),
                  this._dynamicBuffer.destroy(),
                  this.geometry.destroy());
              },
            },
          ]) && x(e.prototype, t),
          r && x(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      var P = r(3614),
        T = r(8338),
        O = r(8594),
        j = r(9418),
        k = r(3760),
        C = r(6437),
        R =
          "\nstruct ParticleUniforms {\n  uTranslationMatrix:mat3x3<f32>,\n  uColor:vec4<f32>,\n  uRound:f32,\n  uResolution:vec2<f32>,\n};\n\nfn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n{\n  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\n@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;\n\n@group(1) @binding(0) var uTexture: texture_2d<f32>;\n@group(1) @binding(1) var uSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) color : vec4<f32>,\n  };\n@vertex\nfn mainVertex(\n  @location(0) aVertex: vec2<f32>,\n  @location(1) aPosition: vec2<f32>,\n  @location(2) aUV: vec2<f32>,\n  @location(3) aColor: vec4<f32>,\n  @location(4) aRotation: f32,\n) -> VSOutput {\n  \n   let v = vec2(\n       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),\n       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)\n   ) + aPosition;\n\n   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n   if(uniforms.uRound == 1.0) {\n       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);\n   }\n\n    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;\n\n  return VSOutput(\n   position,\n   aUV,\n   vColor,\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) color: vec4<f32>,\n  @builtin(position) position: vec4<f32>,\n) -> @location(0) vec4<f32> {\n\n    var sample = textureSample(uTexture, uSampler, uv) * color;\n   \n    return sample;\n}";
      function E(e) {
        return (
          (E =
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
          E(e)
        );
      }
      function F(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, U(n.key), n));
        }
      }
      function U(e) {
        var t = (function (e, t) {
          if ("object" != E(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == E(t) ? t : t + "";
      }
      function M(e, t, r) {
        return (
          (t = A(t)),
          (function (e, t) {
            if (t && ("object" == E(t) || "function" == typeof t)) return t;
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
            B()
              ? Reflect.construct(t, r || [], A(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function B() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (B = function () {
          return !!e;
        })();
      }
      function A(e) {
        return (
          (A = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          A(e)
        );
      }
      function G(e, t) {
        return (
          (G = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          G(e, t)
        );
      }
      var D = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            M(this, t, [
              {
                glProgram: T.M.from({
                  vertex:
                    "attribute vec2 aVertex;\nattribute vec2 aUV;\nattribute vec4 aColor;\n\nattribute vec2 aPosition;\nattribute float aRotation;\n\nuniform mat3 uTranslationMatrix;\nuniform float uRound;\nuniform vec2 uResolution;\nuniform vec4 uColor;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\n\nvec2 roundPixels(vec2 position, vec2 targetSize)\n{       \n    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\nvoid main(void){\n    float cosRotation = cos(aRotation);\n    float sinRotation = sin(aRotation);\n    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;\n    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;\n\n    vec2 v = vec2(x, y);\n    v = v + aPosition;\n\n    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    if(uRound == 1.0)\n    {\n        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n    }\n\n    vUV = aUV;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;\n}\n",
                  fragment:
                    "varying vec2 vUV;\nvarying vec4 vColor;\n\nuniform sampler2D uTexture;\n\nvoid main(void){\n    vec4 color = texture2D(uTexture, vUV) * vColor;\n    gl_FragColor = color;\n}",
                }),
                gpuProgram: O.B.from({
                  fragment: { source: R, entryPoint: "mainFragment" },
                  vertex: { source: R, entryPoint: "mainVertex" },
                }),
                resources: {
                  uTexture: k.g.WHITE.source,
                  uSampler: new C.n({}),
                  uniforms: {
                    uTranslationMatrix: {
                      value: new c.u(),
                      type: "mat3x3<f32>",
                    },
                    uColor: { value: new P.Q(16777215), type: "vec4<f32>" },
                    uRound: { value: 1, type: "f32" },
                    uResolution: { value: [0, 0], type: "vec2<f32>" },
                  },
                },
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
              t && G(e, t));
          })(t, e),
          (r = t),
          n && F(r.prototype, n),
          o && F(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(j.M);
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
      function V(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, W(n.key), n));
        }
      }
      function W(e) {
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
      var I = (function () {
        return (
          (e = function e(t, r) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.state = f.U.for2d()),
              (this.localUniforms = new l.k({
                uTranslationMatrix: { value: new c.u(), type: "mat3x3<f32>" },
                uColor: { value: new Float32Array(4), type: "vec4<f32>" },
                uRound: { value: 1, type: "f32" },
                uResolution: { value: [0, 0], type: "vec2<f32>" },
              })),
              (this.renderer = t),
              (this.adaptor = r),
              (this.defaultShader = new D()),
              (this.state = f.U.for2d()));
          }),
          (t = [
            {
              key: "validateRenderable",
              value: function (e) {
                return !1;
              },
            },
            {
              key: "addRenderable",
              value: function (e, t) {
                (this.renderer.renderPipes.batch.break(t), t.add(e));
              },
            },
            {
              key: "getBuffers",
              value: function (e) {
                return e._gpuData[this.renderer.uid] || this._initBuffer(e);
              },
            },
            {
              key: "_initBuffer",
              value: function (e) {
                return (
                  (e._gpuData[this.renderer.uid] = new S({
                    size: e.particleChildren.length,
                    properties: e._properties,
                  })),
                  e._gpuData[this.renderer.uid]
                );
              },
            },
            { key: "updateRenderable", value: function (e) {} },
            {
              key: "execute",
              value: function (e) {
                var t = e.particleChildren;
                if (0 !== t.length) {
                  var r = this.renderer,
                    n = this.getBuffers(e);
                  e.texture || (e.texture = t[0].texture);
                  var o = this.state;
                  (n.update(t, e._childrenDirty),
                    (e._childrenDirty = !1),
                    (o.blendMode = (0, s.i)(e.blendMode, e.texture._source)));
                  var i = this.localUniforms.uniforms,
                    u = i.uTranslationMatrix;
                  (e.worldTransform.copyTo(u),
                    u.prepend(
                      r.globalUniforms.globalUniformData.projectionMatrix,
                    ),
                    (i.uResolution =
                      r.globalUniforms.globalUniformData.resolution),
                    (i.uRound = r._roundPixels | e._roundPixels),
                    (0, p.V)(e.groupColorAlpha, i.uColor, 0),
                    this.adaptor.execute(this, e));
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this.renderer = null),
                  this.defaultShader &&
                    (this.defaultShader.destroy(),
                    (this.defaultShader = null)));
              },
            },
          ]) && V(e.prototype, t),
          r && V(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function N(e) {
        return (
          (N =
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
          N(e)
        );
      }
      function X(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, L(n.key), n));
        }
      }
      function L(e) {
        var t = (function (e, t) {
          if ("object" != N(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != N(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == N(t) ? t : t + "";
      }
      function Y(e, t, r) {
        return (
          (t = K(t)),
          (function (e, t) {
            if (t && ("object" == N(t) || "function" == typeof t)) return t;
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
            H()
              ? Reflect.construct(t, r || [], K(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function H() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (H = function () {
          return !!e;
        })();
      }
      function K(e) {
        return (
          (K = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          K(e)
        );
      }
      function q(e, t) {
        return (
          (q = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          q(e, t)
        );
      }
      var Z = (function (e) {
        function t(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Y(this, t, [e, new a()])
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
              t && q(e, t));
          })(t, e),
          (r = t),
          n && X(r.prototype, n),
          o && X(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(I);
      function Q(e) {
        return (
          (Q =
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
          Q(e)
        );
      }
      function J(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, $(n.key), n));
        }
      }
      function $(e) {
        var t = (function (e, t) {
          if ("object" != Q(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Q(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Q(t) ? t : t + "";
      }
      Z.extension = { type: [n.Ag.WebGLPipes], name: "particle" };
      var ee = (function () {
        return (
          (e = function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (t = [
            {
              key: "execute",
              value: function (e, t) {
                var r = e.renderer,
                  n = t.shader || e.defaultShader;
                ((n.groups[0] = r.renderPipes.uniformBatch.getUniformBindGroup(
                  e.localUniforms,
                  !0,
                )),
                  (n.groups[1] = r.texture.getTextureBindGroup(t.texture)));
                var o = e.state,
                  i = e.getBuffers(t);
                r.encoder.draw({
                  geometry: i.geometry,
                  shader: t.shader || e.defaultShader,
                  state: o,
                  size: 6 * t.particleChildren.length,
                });
              },
            },
          ]) && J(e.prototype, t),
          r && J(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      function te(e) {
        return (
          (te =
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
          te(e)
        );
      }
      function re(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ne(n.key), n));
        }
      }
      function ne(e) {
        var t = (function (e, t) {
          if ("object" != te(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != te(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == te(t) ? t : t + "";
      }
      function oe(e, t, r) {
        return (
          (t = ue(t)),
          (function (e, t) {
            if (t && ("object" == te(t) || "function" == typeof t)) return t;
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
            ie()
              ? Reflect.construct(t, r || [], ue(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function ie() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (ie = function () {
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
      function ae(e, t) {
        return (
          (ae = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          ae(e, t)
        );
      }
      var ce = (function (e) {
        function t(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            oe(this, t, [e, new ee()])
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
              t && ae(e, t));
          })(t, e),
          (r = t),
          n && re(r.prototype, n),
          o && re(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(I);
      ((ce.extension = { type: [n.Ag.WebGPUPipes], name: "particle" }),
        n.XO.add(Z),
        n.XO.add(ce));
    },
    1066: function (e, t, r) {
      var n = r(6244),
        o = r(4457);
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
      function u(e, t) {
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
      function c(e, t, r) {
        return (
          (t = s(t)),
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
            l()
              ? Reflect.construct(t, r || [], s(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function l() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (l = function () {
          return !!e;
        })();
      }
      function s(e) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          s(e)
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
      var p = (function (e) {
        function t(e) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = c(this, t))._renderer = e),
            e.runners.resolutionChange.add(r),
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
              key: "resolutionChange",
              value: function () {
                var e = this.renderable;
                e._autoResolution && e.onViewUpdate();
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this._renderer.canvasText;
                (e.getReferenceCount(this.currentKey) > 0
                  ? e.decreaseReferenceCount(this.currentKey)
                  : this.texture && e.returnTexture(this.texture),
                  this._renderer.runners.resolutionChange.remove(this),
                  (this._renderer = null));
              },
            },
          ]) && u(r.prototype, n),
          o && u(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(r(9627).K);
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
      function y(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, h(n.key), n));
        }
      }
      function h(e) {
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
      var v = (function () {
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
              key: "validateRenderable",
              value: function (e) {
                var t = this._getGpuText(e),
                  r = e.styleKey;
                return t.currentKey !== r || e._didTextUpdate;
              },
            },
            {
              key: "addRenderable",
              value: function (e, t) {
                var r = this._getGpuText(e);
                if (e._didTextUpdate) {
                  var n = e._autoResolution
                    ? this._renderer.resolution
                    : e.resolution;
                  ((r.currentKey === e.styleKey && e.resolution === n) ||
                    this._updateGpuText(e),
                    (e._didTextUpdate = !1),
                    (0, o.s)(r, e));
                }
                this._renderer.renderPipes.batch.addToBatch(r, t);
              },
            },
            {
              key: "updateRenderable",
              value: function (e) {
                var t = this._getGpuText(e);
                t._batcher.updateElement(t);
              },
            },
            {
              key: "_updateGpuText",
              value: function (e) {
                var t = this._getGpuText(e);
                (t.texture &&
                  this._renderer.canvasText.decreaseReferenceCount(
                    t.currentKey,
                  ),
                  (e._resolution = e._autoResolution
                    ? this._renderer.resolution
                    : e.resolution),
                  (t.texture = this._renderer.canvasText.getManagedTexture(e)),
                  (t.currentKey = e.styleKey));
              },
            },
            {
              key: "_getGpuText",
              value: function (e) {
                return e._gpuData[this._renderer.uid] || this.initGpuText(e);
              },
            },
            {
              key: "initGpuText",
              value: function (e) {
                var t = new p(this._renderer);
                return (
                  (t.currentKey = "--"),
                  (t.renderable = e),
                  (t.transform = e.groupTransform),
                  (t.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
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
          ]) && y(e.prototype, t),
          r && y(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      v.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "text",
      };
      var b = r(8432),
        m = r(6437),
        g = r(2573),
        _ = r(6674),
        x = r(2315),
        w = r(3614),
        S = r(861),
        P = r(2155),
        T = r(8689),
        O = r(2532),
        j = null,
        k = null;
      function C(e, t, r) {
        for (var n = 0, o = 4 * r * t; n < t; ++n, o += 4)
          if (0 !== e[o + 3]) return !1;
        return !0;
      }
      function R(e, t, r, n, o) {
        for (var i = 4 * t, u = n, a = n * i + 4 * r; u <= o; ++u, a += i)
          if (0 !== e[a + 3]) return !1;
        return !0;
      }
      function E() {
        var e,
          t,
          r,
          n = arguments.length <= 0 ? void 0 : arguments[0];
        n.canvas ||
          (n = {
            canvas: arguments.length <= 0 ? void 0 : arguments[0],
            resolution: arguments.length <= 1 ? void 0 : arguments[1],
          });
        var o = n.canvas,
          i = Math.min(null !== (e = n.resolution) && void 0 !== e ? e : 1, 1),
          u = null !== (t = n.width) && void 0 !== t ? t : o.width,
          a = null !== (r = n.height) && void 0 !== r ? r : o.height,
          c = n.output;
        if (
          ((function (e, t) {
            (j ||
              ((j = T.e.get().createCanvas(256, 128)),
              ((k = j.getContext("2d", {
                willReadFrequently: !0,
              })).globalCompositeOperation = "copy"),
              (k.globalAlpha = 1)),
              (j.width < e || j.height < t) &&
                ((j.width = (0, O.U5)(e)), (j.height = (0, O.U5)(t))));
          })(u, a),
          !k)
        )
          throw new TypeError("Failed to get canvas 2D context");
        k.drawImage(o, 0, 0, u, a, 0, 0, u * i, a * i);
        for (
          var l = k.getImageData(0, 0, u, a).data,
            s = 0,
            f = 0,
            p = u - 1,
            d = a - 1;
          f < a && C(l, u, f);
        )
          ++f;
        if (f === a) return S.M.EMPTY;
        for (; C(l, u, d); ) --d;
        for (; R(l, u, s, f, d); ) ++s;
        for (; R(l, u, p, f, d); ) --p;
        return (
          ++p,
          ++d,
          (k.globalCompositeOperation = "source-over"),
          k.strokeRect(s, f, p - s, d - f),
          (k.globalCompositeOperation = "copy"),
          null != c || (c = new S.M()),
          c.set(s / i, f / i, (p - s) / i, (d - f) / i),
          c
        );
      }
      var F = r(3419),
        U = r(9977),
        M = r(5357);
      function B(e) {
        return (
          (B =
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
          B(e)
        );
      }
      function A(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, G(n.key), n));
        }
      }
      function G(e) {
        var t = (function (e, t) {
          if ("object" != B(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != B(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == B(t) ? t : t + "";
      }
      var D = new S.M(),
        z = (function () {
          return (
            (e = function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
            }),
            (t = [
              {
                key: "getCanvasAndContext",
                value: function (e) {
                  var t = e.text,
                    r = e.style,
                    n = e.resolution,
                    o = void 0 === n ? 1 : n,
                    i = r._getFinalPadding(),
                    u = F.P.measureText(t || " ", r),
                    a = Math.ceil(Math.ceil(Math.max(1, u.width) + 2 * i) * o),
                    c = Math.ceil(Math.ceil(Math.max(1, u.height) + 2 * i) * o),
                    l = P.N.getOptimalCanvasAndContext(a, c);
                  return (
                    this._renderTextToCanvas(t, r, i, o, l),
                    {
                      canvasAndContext: l,
                      frame: r.trim
                        ? E({
                            canvas: l.canvas,
                            width: a,
                            height: c,
                            resolution: 1,
                            output: D,
                          })
                        : D.set(0, 0, a, c),
                    }
                  );
                },
              },
              {
                key: "returnCanvasAndContext",
                value: function (e) {
                  P.N.returnCanvasAndContext(e);
                },
              },
              {
                key: "_renderTextToCanvas",
                value: function (e, t, r, n, o) {
                  var i,
                    u,
                    a,
                    c = o.canvas,
                    l = o.context,
                    s = (0, U.Z)(t),
                    f = F.P.measureText(e || " ", t),
                    p = f.lines,
                    d = f.lineHeight,
                    y = f.lineWidths,
                    h = f.maxLineWidth,
                    v = f.fontProperties,
                    b = c.height;
                  if (
                    (l.resetTransform(),
                    l.scale(n, n),
                    (l.textBaseline = t.textBaseline),
                    null !== (i = t._stroke) && void 0 !== i && i.width)
                  ) {
                    var m = t._stroke;
                    ((l.lineWidth = m.width),
                      (l.miterLimit = m.miterLimit),
                      (l.lineJoin = m.join),
                      (l.lineCap = m.cap));
                  }
                  l.font = s;
                  for (var g = t.dropShadow ? 2 : 1, _ = 0; _ < g; ++_) {
                    var x,
                      S,
                      P = t.dropShadow && 0 === _,
                      T = P ? Math.ceil(Math.max(1, b) + 2 * r) : 0,
                      O = T * n;
                    if (P) {
                      ((l.fillStyle = "black"), (l.strokeStyle = "black"));
                      var j = t.dropShadow,
                        k = j.color,
                        C = j.alpha;
                      l.shadowColor = w.Q.shared
                        .setValue(k)
                        .setAlpha(C)
                        .toRgbaString();
                      var R = j.blur * n,
                        E = j.distance * n;
                      ((l.shadowBlur = R),
                        (l.shadowOffsetX = Math.cos(j.angle) * E),
                        (l.shadowOffsetY = Math.sin(j.angle) * E + O));
                    } else {
                      var B;
                      if (
                        ((l.fillStyle = t._fill
                          ? (0, M.r)(t._fill, l, f, 2 * r)
                          : null),
                        null !== (B = t._stroke) && void 0 !== B && B.width)
                      ) {
                        var A = 0.5 * t._stroke.width + 2 * r;
                        l.strokeStyle = (0, M.r)(t._stroke, l, f, A);
                      }
                      l.shadowColor = "black";
                    }
                    var G = (d - v.fontSize) / 2;
                    d - v.fontSize < 0 && (G = 0);
                    for (
                      var D =
                          null !==
                            (x =
                              null === (S = t._stroke) || void 0 === S
                                ? void 0
                                : S.width) && void 0 !== x
                            ? x
                            : 0,
                        z = 0;
                      z < p.length;
                      z++
                    ) {
                      var V;
                      ((u = D / 2),
                        (a = D / 2 + z * d + v.ascent + G),
                        "right" === t.align
                          ? (u += h - y[z])
                          : "center" === t.align && (u += (h - y[z]) / 2),
                        null !== (V = t._stroke) &&
                          void 0 !== V &&
                          V.width &&
                          this._drawLetterSpacing(
                            p[z],
                            t,
                            o,
                            u + r,
                            a + r - T,
                            !0,
                          ),
                        void 0 !== t._fill &&
                          this._drawLetterSpacing(
                            p[z],
                            t,
                            o,
                            u + r,
                            a + r - T,
                          ));
                    }
                  }
                },
              },
              {
                key: "_drawLetterSpacing",
                value: function (e, t, r, n, o) {
                  var i =
                      arguments.length > 5 &&
                      void 0 !== arguments[5] &&
                      arguments[5],
                    u = r.context,
                    a = t.letterSpacing,
                    c = !1;
                  if (
                    (F.P.experimentalLetterSpacingSupported &&
                      (F.P.experimentalLetterSpacing
                        ? ((u.letterSpacing = "".concat(a, "px")),
                          (u.textLetterSpacing = "".concat(a, "px")),
                          (c = !0))
                        : ((u.letterSpacing = "0px"),
                          (u.textLetterSpacing = "0px"))),
                    0 === a || c)
                  )
                    i ? u.strokeText(e, n, o) : u.fillText(e, n, o);
                  else
                    for (
                      var l = n,
                        s = F.P.graphemeSegmenter(e),
                        f = u.measureText(e).width,
                        p = 0,
                        d = 0;
                      d < s.length;
                      ++d
                    ) {
                      var y = s[d];
                      i ? u.strokeText(y, l, o) : u.fillText(y, l, o);
                      for (var h = "", v = d + 1; v < s.length; ++v) h += s[v];
                      ((l += f - (p = u.measureText(h).width) + a), (f = p));
                    }
                },
              },
            ]),
            t && A(e.prototype, t),
            r && A(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })(),
        V = new z();
      function W(e) {
        return (
          (W =
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
          W(e)
        );
      }
      function I(e, t) {
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
          if ("object" != W(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != W(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == W(t) ? t : t + "";
      }
      var X = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._activeTextures = {}),
              (this._renderer = t));
          }),
          (t = [
            {
              key: "getTexture",
              value: function (e, t, r, n) {
                var o;
                ("string" == typeof e &&
                  ((0, g.t6)(
                    "8.0.0",
                    "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments",
                  ),
                  (e = { text: e, style: r, resolution: t })),
                  e.style instanceof _.x || (e.style = new _.x(e.style)),
                  e.textureStyle instanceof m.n ||
                    (e.textureStyle = new m.n(e.textureStyle)),
                  "string" != typeof e.text && (e.text = e.text.toString()));
                var i = e,
                  u = i.text,
                  a = i.style,
                  c = i.textureStyle,
                  l =
                    null !== (o = e.resolution) && void 0 !== o
                      ? o
                      : this._renderer.resolution,
                  s = V.getCanvasAndContext({
                    text: u,
                    style: a,
                    resolution: l,
                  }),
                  f = s.frame,
                  p = s.canvasAndContext,
                  d = (0, x.M)(p.canvas, f.width, f.height, l);
                if (
                  (c && (d.source.style = c),
                  a.trim &&
                    (f.pad(a.padding),
                    d.frame.copyFrom(f),
                    d.frame.scale(1 / l),
                    d.updateUvs()),
                  a.filters)
                ) {
                  var y = this._applyFilters(d, a.filters);
                  return (
                    this.returnTexture(d),
                    V.returnCanvasAndContext(p),
                    y
                  );
                }
                return (
                  this._renderer.texture.initSource(d._source),
                  V.returnCanvasAndContext(p),
                  d
                );
              },
            },
            {
              key: "returnTexture",
              value: function (e) {
                var t = e.source;
                ((t.resource = null),
                  (t.uploadMethodId = "unknown"),
                  (t.alphaMode = "no-premultiply-alpha"),
                  b.W.returnTexture(e, !0));
              },
            },
            {
              key: "renderTextToCanvas",
              value: function () {
                (0, g.t6)(
                  "8.10.0",
                  "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead",
                );
              },
            },
            {
              key: "getManagedTexture",
              value: function (e) {
                e._resolution = e._autoResolution
                  ? this._renderer.resolution
                  : e.resolution;
                var t = e.styleKey;
                if (this._activeTextures[t])
                  return (
                    this._increaseReferenceCount(t),
                    this._activeTextures[t].texture
                  );
                var r = this.getTexture({
                  text: e.text,
                  style: e.style,
                  resolution: e._resolution,
                  textureStyle: e.textureStyle,
                });
                return (
                  (this._activeTextures[t] = { texture: r, usageCount: 1 }),
                  r
                );
              },
            },
            {
              key: "decreaseReferenceCount",
              value: function (e) {
                var t = this._activeTextures[e];
                (t.usageCount--,
                  0 === t.usageCount &&
                    (this.returnTexture(t.texture),
                    (this._activeTextures[e] = null)));
              },
            },
            {
              key: "getReferenceCount",
              value: function (e) {
                var t, r;
                return null !==
                  (t =
                    null === (r = this._activeTextures[e]) || void 0 === r
                      ? void 0
                      : r.usageCount) && void 0 !== t
                  ? t
                  : 0;
              },
            },
            {
              key: "_increaseReferenceCount",
              value: function (e) {
                this._activeTextures[e].usageCount++;
              },
            },
            {
              key: "_applyFilters",
              value: function (e, t) {
                var r = this._renderer.renderTarget.renderTarget,
                  n = this._renderer.filter.generateFilteredTexture({
                    texture: e,
                    filters: t,
                  });
                return (this._renderer.renderTarget.bind(r, !1), n);
              },
            },
            {
              key: "destroy",
              value: function () {
                for (var e in ((this._renderer = null), this._activeTextures))
                  this._activeTextures[e] &&
                    this.returnTexture(this._activeTextures[e].texture);
                this._activeTextures = null;
              },
            },
          ]) && I(e.prototype, t),
          r && I(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      ((X.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "canvasText",
      }),
        n.XO.add(X),
        n.XO.add(v));
    },
    2310: function (e, t, r) {
      var n,
        o,
        i = r(6244),
        u = r(202),
        a = r(5510),
        c = r(2664),
        l = r(867),
        s = r(449),
        f = r(629),
        p = r(410),
        d = r(4641),
        y = r(7048),
        h = r(3664),
        v = r(9418),
        b = r(8309),
        m = r(3760),
        g = {
          name: "tiling-bit",
          vertex: {
            header:
              "\n            struct TilingUniforms {\n                uMapCoord:mat3x3<f32>,\n                uClampFrame:vec4<f32>,\n                uClampOffset:vec2<f32>,\n                uTextureTransform:mat3x3<f32>,\n                uSizeAnchor:vec4<f32>\n            };\n\n            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;\n            @group(2) @binding(1) var uTexture: texture_2d<f32>;\n            @group(2) @binding(2) var uSampler: sampler;\n        ",
            main: "\n            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;\n\n            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;\n        ",
          },
          fragment: {
            header:
              "\n            struct TilingUniforms {\n                uMapCoord:mat3x3<f32>,\n                uClampFrame:vec4<f32>,\n                uClampOffset:vec2<f32>,\n                uTextureTransform:mat3x3<f32>,\n                uSizeAnchor:vec4<f32>\n            };\n\n            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;\n            @group(2) @binding(1) var uTexture: texture_2d<f32>;\n            @group(2) @binding(2) var uSampler: sampler;\n        ",
            main: "\n\n            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);\n            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;\n            var unclamped = coord;\n            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);\n\n            var bias = 0.;\n\n            if(unclamped.x == coord.x && unclamped.y == coord.y)\n            {\n                bias = -32.;\n            }\n\n            outColor = textureSampleBias(uTexture, uSampler, coord, bias);\n        ",
          },
        },
        _ = {
          name: "tiling-bit",
          vertex: {
            header:
              "\n            uniform mat3 uTextureTransform;\n            uniform vec4 uSizeAnchor;\n\n        ",
            main: "\n            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;\n\n            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;\n        ",
          },
          fragment: {
            header:
              "\n            uniform sampler2D uTexture;\n            uniform mat3 uMapCoord;\n            uniform vec4 uClampFrame;\n            uniform vec2 uClampOffset;\n        ",
            main: "\n\n        vec2 coord = vUV + ceil(uClampOffset - vUV);\n        coord = (uMapCoord * vec3(coord, 1.0)).xy;\n        vec2 unclamped = coord;\n        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0\n\n        ",
          },
        };
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
      function w(e, t) {
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
      function P(e, t, r) {
        return (
          (t = O(t)),
          (function (e, t) {
            if (t && ("object" == x(t) || "function" == typeof t)) return t;
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
            T()
              ? Reflect.construct(t, r || [], O(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function T() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (T = function () {
          return !!e;
        })();
      }
      function O(e) {
        return (
          (O = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          O(e)
        );
      }
      function j(e, t) {
        return (
          (j = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          j(e, t)
        );
      }
      var k = (function (e) {
        function t() {
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            null != n ||
              (n = (0, d.v)({
                name: "tiling-sprite-shader",
                bits: [y.Ls, g, h.b],
              })),
            null != o ||
              (o = (0, d.I)({
                name: "tiling-sprite-shader",
                bits: [y.mA, _, h.m],
              })));
          var e = new b.k({
            uMapCoord: { value: new p.u(), type: "mat3x3<f32>" },
            uClampFrame: {
              value: new Float32Array([0, 0, 1, 1]),
              type: "vec4<f32>",
            },
            uClampOffset: {
              value: new Float32Array([0, 0]),
              type: "vec2<f32>",
            },
            uTextureTransform: { value: new p.u(), type: "mat3x3<f32>" },
            uSizeAnchor: {
              value: new Float32Array([100, 100, 0.5, 0.5]),
              type: "vec4<f32>",
            },
          });
          return P(this, t, [
            {
              glProgram: o,
              gpuProgram: n,
              resources: {
                localUniforms: new b.k({
                  uTransformMatrix: { value: new p.u(), type: "mat3x3<f32>" },
                  uColor: {
                    value: new Float32Array([1, 1, 1, 1]),
                    type: "vec4<f32>",
                  },
                  uRound: { value: 0, type: "f32" },
                }),
                tilingUniforms: e,
                uTexture: m.g.EMPTY.source,
                uSampler: m.g.EMPTY.source.style,
              },
            },
          ]);
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
              t && j(e, t));
          })(t, e),
          (r = t),
          (i = [
            {
              key: "updateUniforms",
              value: function (e, t, r, n, o, i) {
                var u = this.resources.tilingUniforms,
                  a = i.width,
                  c = i.height,
                  l = i.textureMatrix,
                  s = u.uniforms.uTextureTransform;
                (s.set(
                  (r.a * a) / e,
                  (r.b * a) / t,
                  (r.c * c) / e,
                  (r.d * c) / t,
                  r.tx / e,
                  r.ty / t,
                ),
                  s.invert(),
                  (u.uniforms.uMapCoord = l.mapCoord),
                  (u.uniforms.uClampFrame = l.uClampFrame),
                  (u.uniforms.uClampOffset = l.uClampOffset),
                  (u.uniforms.uTextureTransform = s),
                  (u.uniforms.uSizeAnchor[0] = e),
                  (u.uniforms.uSizeAnchor[1] = t),
                  (u.uniforms.uSizeAnchor[2] = n),
                  (u.uniforms.uSizeAnchor[3] = o),
                  i &&
                    ((this.resources.uTexture = i.source),
                    (this.resources.uSampler = i.source.style)));
              },
            },
          ]) && w(r.prototype, i),
          u && w(r, u),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, i, u;
      })(v.M);
      function C(e) {
        return (
          (C =
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
          C(e)
        );
      }
      function R(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, E(n.key), n));
        }
      }
      function E(e) {
        var t = (function (e, t) {
          if ("object" != C(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != C(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == C(t) ? t : t + "";
      }
      function F(e, t, r) {
        return (
          (t = M(t)),
          (function (e, t) {
            if (t && ("object" == C(t) || "function" == typeof t)) return t;
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
            U()
              ? Reflect.construct(t, r || [], M(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function U() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (U = function () {
          return !!e;
        })();
      }
      function M(e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          M(e)
        );
      }
      function B(e, t) {
        return (
          (B = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          B(e, t)
        );
      }
      function A(e) {
        return (
          (A =
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
          A(e)
        );
      }
      function G(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function D(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, V(n.key), n));
        }
      }
      function z(e, t, r) {
        return (
          t && D(e.prototype, t),
          r && D(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function V(e) {
        var t = (function (e, t) {
          if ("object" != A(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != A(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == A(t) ? t : t + "";
      }
      var W = new ((function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              F(this, t, [
                {
                  positions: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                  uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                  indices: new Uint32Array([0, 1, 2, 0, 2, 3]),
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
                t && B(e, t));
            })(t, e),
            (r = t),
            n && R(r.prototype, n),
            o && R(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n, o;
        })(f.u))(),
        I = (function () {
          return z(
            function e() {
              (G(this, e),
                (this.canBatch = !0),
                (this.geometry = new f.u({
                  indices: W.indices.slice(),
                  positions: W.positions.slice(),
                  uvs: W.uvs.slice(),
                })));
            },
            [
              {
                key: "destroy",
                value: function () {
                  var e;
                  (this.geometry.destroy(),
                    null === (e = this.shader) || void 0 === e || e.destroy());
                },
              },
            ],
          );
        })(),
        N = (function () {
          return z(
            function e(t) {
              (G(this, e), (this._state = a.U.default2d), (this._renderer = t));
            },
            [
              {
                key: "validateRenderable",
                value: function (e) {
                  var t = this._getTilingSpriteData(e),
                    r = t.canBatch;
                  this._updateCanBatch(e);
                  var n = t.canBatch;
                  if (n && n === r) {
                    var o = t.batchableMesh;
                    return !o._batcher.checkAndUpdateTexture(o, e.texture);
                  }
                  return r !== n;
                },
              },
              {
                key: "addRenderable",
                value: function (e, t) {
                  var r = this._renderer.renderPipes.batch;
                  this._updateCanBatch(e);
                  var n = this._getTilingSpriteData(e),
                    o = n.geometry;
                  if (n.canBatch) {
                    n.batchableMesh || (n.batchableMesh = new s.U());
                    var i = n.batchableMesh;
                    (e.didViewUpdate &&
                      (this._updateBatchableMesh(e),
                      (i.geometry = o),
                      (i.renderable = e),
                      (i.transform = e.groupTransform),
                      i.setTexture(e._texture)),
                      (i.roundPixels =
                        this._renderer._roundPixels | e._roundPixels),
                      r.addToBatch(i, t));
                  } else
                    (r.break(t),
                      n.shader || (n.shader = new k()),
                      this.updateRenderable(e),
                      t.add(e));
                },
              },
              {
                key: "execute",
                value: function (e) {
                  var t = this._getTilingSpriteData(e).shader;
                  t.groups[0] = this._renderer.globalUniforms.bindGroup;
                  var r = t.resources.localUniforms.uniforms;
                  ((r.uTransformMatrix = e.groupTransform),
                    (r.uRound = this._renderer._roundPixels | e._roundPixels),
                    (0, l.V)(e.groupColorAlpha, r.uColor, 0),
                    (this._state.blendMode = (0, u.i)(
                      e.groupBlendMode,
                      e.texture._source,
                    )),
                    this._renderer.encoder.draw({
                      geometry: W,
                      shader: t,
                      state: this._state,
                    }));
                },
              },
              {
                key: "updateRenderable",
                value: function (e) {
                  var t = this._getTilingSpriteData(e);
                  if (t.canBatch) {
                    var r = t.batchableMesh;
                    (e.didViewUpdate && this._updateBatchableMesh(e),
                      r._batcher.updateElement(r));
                  } else if (e.didViewUpdate) {
                    t.shader.updateUniforms(
                      e.width,
                      e.height,
                      e._tileTransform.matrix,
                      e.anchor.x,
                      e.anchor.y,
                      e.texture,
                    );
                  }
                },
              },
              {
                key: "_getTilingSpriteData",
                value: function (e) {
                  return (
                    e._gpuData[this._renderer.uid] ||
                    this._initTilingSpriteData(e)
                  );
                },
              },
              {
                key: "_initTilingSpriteData",
                value: function (e) {
                  var t = new I();
                  return (
                    (t.renderable = e),
                    (e._gpuData[this._renderer.uid] = t),
                    t
                  );
                },
              },
              {
                key: "_updateBatchableMesh",
                value: function (e) {
                  var t = this._getTilingSpriteData(e).geometry,
                    r = e.texture.source.style;
                  ("repeat" !== r.addressMode &&
                    ((r.addressMode = "repeat"), r.update()),
                    (function (e, t) {
                      var r = e.texture,
                        n = r.frame.width,
                        o = r.frame.height,
                        i = 0,
                        u = 0;
                      (e.applyAnchorToTexture &&
                        ((i = e.anchor.x), (u = e.anchor.y)),
                        (t[0] = t[6] = -i),
                        (t[2] = t[4] = 1 - i),
                        (t[1] = t[3] = -u),
                        (t[5] = t[7] = 1 - u));
                      var a = p.u.shared;
                      (a.copyFrom(e._tileTransform.matrix),
                        (a.tx /= e.width),
                        (a.ty /= e.height),
                        a.invert(),
                        a.scale(e.width / n, e.height / o),
                        (function (e, t, r, n) {
                          var o = 0,
                            i = e.length / (t || 2),
                            u = n.a,
                            a = n.b,
                            c = n.c,
                            l = n.d,
                            s = n.tx,
                            f = n.ty;
                          for (r *= t; o < i; ) {
                            var p = e[r],
                              d = e[r + 1];
                            ((e[r] = u * p + c * d + s),
                              (e[r + 1] = a * p + l * d + f),
                              (r += t),
                              o++);
                          }
                        })(t, 2, 0, a));
                    })(e, t.uvs),
                    (function (e, t) {
                      var r = e.anchor.x,
                        n = e.anchor.y;
                      ((t[0] = -r * e.width),
                        (t[1] = -n * e.height),
                        (t[2] = (1 - r) * e.width),
                        (t[3] = -n * e.height),
                        (t[4] = (1 - r) * e.width),
                        (t[5] = (1 - n) * e.height),
                        (t[6] = -r * e.width),
                        (t[7] = (1 - n) * e.height));
                    })(e, t.positions));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._renderer = null;
                },
              },
              {
                key: "_updateCanBatch",
                value: function (e) {
                  var t = this._getTilingSpriteData(e),
                    r = e.texture,
                    n = !0;
                  return (
                    this._renderer.type === c.W.WEBGL &&
                      (n = this._renderer.context.supports.nonPowOf2wrapping),
                    (t.canBatch =
                      r.textureMatrix.isSimple && (n || r.source.isPowerOfTwo)),
                    t.canBatch
                  );
                },
              },
            ],
          );
        })();
      ((N.extension = {
        type: [i.Ag.WebGLPipes, i.Ag.WebGPUPipes, i.Ag.CanvasPipes],
        name: "tilingSprite",
      }),
        i.XO.add(N));
    },
    2315: function (e, t, r) {
      r.d(t, {
        M: function () {
          return i;
        },
      });
      var n = r(8432),
        o = new (r(5595).c)();
      function i(e, t, r, i) {
        var u = o;
        ((u.minX = 0),
          (u.minY = 0),
          (u.maxX = (e.width / i) | 0),
          (u.maxY = (e.height / i) | 0));
        var a = n.W.getOptimalTexture(u.width, u.height, i, !1);
        return (
          (a.source.uploadMethodId = "image"),
          (a.source.resource = e),
          (a.source.alphaMode = "premultiply-alpha-on-upload"),
          (a.frame.width = t / i),
          (a.frame.height = r / i),
          a.source.emit("update", a.source),
          a.updateUvs(),
          a
        );
      }
    },
    2384: function (e, t, r) {
      var n = r(6244),
        o = r(449),
        i = r(2573);
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
      function a(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                l(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function l(e, t, r) {
        return (
          (t = f(t)) in e
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
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, f(n.key), n));
        }
      }
      function f(e) {
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
      function p(e, t, r) {
        return (
          (t = y(t)),
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
            d()
              ? Reflect.construct(t, r || [], y(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function d() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (d = function () {
          return !!e;
        })();
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          h(e, t)
        );
      }
      var v = (function (e) {
        function t() {
          var e, r;
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (r = p(this, t, [{}])));
          var n =
            null !== (e = arguments.length <= 0 ? void 0 : arguments[0]) &&
            void 0 !== e
              ? e
              : {};
          return (
            "number" == typeof n &&
              ((0, i.t6)(
                i.lj,
                "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead",
              ),
              (n = {
                width: n,
                height: arguments.length <= 1 ? void 0 : arguments[1],
                verticesX: arguments.length <= 2 ? void 0 : arguments[2],
                verticesY: arguments.length <= 3 ? void 0 : arguments[3],
              })),
            r.build(n),
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
              t && h(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "build",
              value: function (e) {
                var r, n, o, i;
                ((e = c(c({}, t.defaultOptions), e)),
                  (this.verticesX =
                    null !== (r = this.verticesX) && void 0 !== r
                      ? r
                      : e.verticesX),
                  (this.verticesY =
                    null !== (n = this.verticesY) && void 0 !== n
                      ? n
                      : e.verticesY),
                  (this.width =
                    null !== (o = this.width) && void 0 !== o ? o : e.width),
                  (this.height =
                    null !== (i = this.height) && void 0 !== i ? i : e.height));
                for (
                  var u = this.verticesX * this.verticesY,
                    a = [],
                    l = [],
                    s = [],
                    f = this.verticesX - 1,
                    p = this.verticesY - 1,
                    d = this.width / f,
                    y = this.height / p,
                    h = 0;
                  h < u;
                  h++
                ) {
                  var v = h % this.verticesX,
                    b = (h / this.verticesX) | 0;
                  (a.push(v * d, b * y), l.push(v / f, b / p));
                }
                for (var m = f * p, g = 0; g < m; g++) {
                  var _ = g % f,
                    x = (g / f) | 0,
                    w = x * this.verticesX + _,
                    S = x * this.verticesX + _ + 1,
                    P = (x + 1) * this.verticesX + _,
                    T = (x + 1) * this.verticesX + _ + 1;
                  s.push(w, S, P, S, T, P);
                }
                ((this.buffers[0].data = new Float32Array(a)),
                  (this.buffers[1].data = new Float32Array(l)),
                  (this.indexBuffer.data = new Uint32Array(s)),
                  this.buffers[0].update(),
                  this.buffers[1].update(),
                  this.indexBuffer.update());
              },
            },
          ]) && s(r.prototype, n),
          o && s(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(r(629).u);
      function b(e) {
        return (
          (b =
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
          b(e)
        );
      }
      function m(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                _(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function _(e, t, r) {
        return (
          (t = w(t)) in e
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
      function x(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, w(n.key), n));
        }
      }
      function w(e) {
        var t = (function (e, t) {
          if ("object" != b(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != b(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == b(t) ? t : t + "";
      }
      function S(e, t, r) {
        return (
          (t = T(t)),
          (function (e, t) {
            if (t && ("object" == b(t) || "function" == typeof t)) return t;
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
            P()
              ? Reflect.construct(t, r || [], T(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function P() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (P = function () {
          return !!e;
        })();
      }
      function T(e) {
        return (
          (T = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          T(e)
        );
      }
      function O(e, t) {
        return (
          (O = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          O(e, t)
        );
      }
      v.defaultOptions = {
        width: 100,
        height: 100,
        verticesX: 10,
        verticesY: 10,
      };
      var j = (function (e) {
        function t() {
          var e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (e = S(this, t, [
              {
                width: (r = g(g({}, t.defaultOptions), r)).width,
                height: r.height,
                verticesX: 4,
                verticesY: 4,
              },
            ])).update(r),
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
              t && O(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "update",
              value: function (e) {
                var t, r, n, o, i, u, a, c, l, s;
                ((this.width =
                  null !== (t = e.width) && void 0 !== t ? t : this.width),
                  (this.height =
                    null !== (r = e.height) && void 0 !== r ? r : this.height),
                  (this._originalWidth =
                    null !== (n = e.originalWidth) && void 0 !== n
                      ? n
                      : this._originalWidth),
                  (this._originalHeight =
                    null !== (o = e.originalHeight) && void 0 !== o
                      ? o
                      : this._originalHeight),
                  (this._leftWidth =
                    null !== (i = e.leftWidth) && void 0 !== i
                      ? i
                      : this._leftWidth),
                  (this._rightWidth =
                    null !== (u = e.rightWidth) && void 0 !== u
                      ? u
                      : this._rightWidth),
                  (this._topHeight =
                    null !== (a = e.topHeight) && void 0 !== a
                      ? a
                      : this._topHeight),
                  (this._bottomHeight =
                    null !== (c = e.bottomHeight) && void 0 !== c
                      ? c
                      : this._bottomHeight),
                  (this._anchorX =
                    null === (l = e.anchor) || void 0 === l ? void 0 : l.x),
                  (this._anchorY =
                    null === (s = e.anchor) || void 0 === s ? void 0 : s.y),
                  this.updateUvs(),
                  this.updatePositions());
              },
            },
            {
              key: "updatePositions",
              value: function () {
                var e = this.positions,
                  t = this.width,
                  r = this.height,
                  n = this._leftWidth,
                  o = this._rightWidth,
                  i = this._topHeight,
                  u = this._bottomHeight,
                  a = this._anchorX,
                  c = this._anchorY,
                  l = n + o,
                  s = t > l ? 1 : t / l,
                  f = i + u,
                  p = r > f ? 1 : r / f,
                  d = Math.min(s, p),
                  y = a * t,
                  h = c * r;
                ((e[0] = e[8] = e[16] = e[24] = -y),
                  (e[2] = e[10] = e[18] = e[26] = n * d - y),
                  (e[4] = e[12] = e[20] = e[28] = t - o * d - y),
                  (e[6] = e[14] = e[22] = e[30] = t - y),
                  (e[1] = e[3] = e[5] = e[7] = -h),
                  (e[9] = e[11] = e[13] = e[15] = i * d - h),
                  (e[17] = e[19] = e[21] = e[23] = r - u * d - h),
                  (e[25] = e[27] = e[29] = e[31] = r - h),
                  this.getBuffer("aPosition").update());
              },
            },
            {
              key: "updateUvs",
              value: function () {
                var e = this.uvs;
                ((e[0] = e[8] = e[16] = e[24] = 0),
                  (e[1] = e[3] = e[5] = e[7] = 0),
                  (e[6] = e[14] = e[22] = e[30] = 1),
                  (e[25] = e[27] = e[29] = e[31] = 1));
                var t = 1 / this._originalWidth,
                  r = 1 / this._originalHeight;
                ((e[2] = e[10] = e[18] = e[26] = t * this._leftWidth),
                  (e[9] = e[11] = e[13] = e[15] = r * this._topHeight),
                  (e[4] = e[12] = e[20] = e[28] = 1 - t * this._rightWidth),
                  (e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight),
                  this.getBuffer("aUV").update());
              },
            },
          ]) && x(r.prototype, n),
          o && x(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(v);
      j.defaultOptions = {
        width: 100,
        height: 100,
        leftWidth: 10,
        topHeight: 10,
        rightWidth: 10,
        bottomHeight: 10,
        originalWidth: 100,
        originalHeight: 100,
      };
      var k = j;
      function C(e) {
        return (
          (C =
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
          C(e)
        );
      }
      function R(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function E(e, t) {
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
          t && E(e.prototype, t),
          r && E(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function U(e) {
        var t = (function (e, t) {
          if ("object" != C(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != C(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == C(t) ? t : t + "";
      }
      function M(e, t, r) {
        return (
          (t = A(t)),
          (function (e, t) {
            if (t && ("object" == C(t) || "function" == typeof t)) return t;
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
            B()
              ? Reflect.construct(t, r || [], A(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function B() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (B = function () {
          return !!e;
        })();
      }
      function A(e) {
        return (
          (A = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          A(e)
        );
      }
      function G(e, t) {
        return (
          (G = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          G(e, t)
        );
      }
      var D = (function (e) {
          function t() {
            var e;
            return (R(this, t), ((e = M(this, t)).geometry = new k()), e);
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
                t && G(e, t));
            })(t, e),
            F(t, [
              {
                key: "destroy",
                value: function () {
                  this.geometry.destroy();
                },
              },
            ])
          );
        })(o.U),
        z = (function () {
          return F(
            function e(t) {
              (R(this, e), (this._renderer = t));
            },
            [
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
                  (t.geometry.update(e), t.setTexture(e._texture));
                },
              },
              {
                key: "_getGpuSprite",
                value: function (e) {
                  return (
                    e._gpuData[this._renderer.uid] || this._initGPUSprite(e)
                  );
                },
              },
              {
                key: "_initGPUSprite",
                value: function (e) {
                  var t = (e._gpuData[this._renderer.uid] = new D()),
                    r = t;
                  return (
                    (r.renderable = e),
                    (r.transform = e.groupTransform),
                    (r.texture = e._texture),
                    (r.roundPixels =
                      this._renderer._roundPixels | e._roundPixels),
                    e.didViewUpdate || this._updateBatchableSprite(e, r),
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
            ],
          );
        })();
      ((z.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "nineSliceSprite",
      }),
        n.XO.add(z));
    },
    2424: function (e, t, r) {
      var n,
        o,
        i = r(6244),
        u = r(8810),
        a = r(7209),
        c = r(3419),
        l = r(410),
        s = r(4641),
        f = r(6854),
        p = r(7771),
        d = r(3664),
        y = r(1969),
        h = r(9418),
        v = r(8309),
        b = {
          name: "local-uniform-msdf-bit",
          vertex: {
            header:
              "\n            struct LocalUniforms {\n                uColor:vec4<f32>,\n                uTransformMatrix:mat3x3<f32>,\n                uDistance: f32,\n                uRound:f32,\n            }\n\n            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ",
            main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ",
            end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        ",
          },
          fragment: {
            header:
              "\n            struct LocalUniforms {\n                uColor:vec4<f32>,\n                uTransformMatrix:mat3x3<f32>,\n                uDistance: f32\n            }\n\n            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;\n         ",
            main: "\n            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));\n        ",
          },
        },
        m = {
          name: "local-uniform-msdf-bit",
          vertex: {
            header:
              "\n            uniform mat3 uTransformMatrix;\n            uniform vec4 uColor;\n            uniform float uRound;\n        ",
            main: "\n            vColor *= uColor;\n            modelMatrix *= uTransformMatrix;\n        ",
            end: "\n            if(uRound == 1.)\n            {\n                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n            }\n        ",
          },
          fragment: {
            header: "\n            uniform float uDistance;\n         ",
            main: "\n            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));\n        ",
          },
        },
        g = {
          name: "msdf-bit",
          fragment: {
            header:
              "\n            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {\n\n                // MSDF\n                var median = msdfColor.r + msdfColor.g + msdfColor.b -\n                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -\n                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));\n\n                // SDF\n                median = min(median, msdfColor.a);\n\n                var screenPxDistance = distance * (median - 0.5);\n                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\n                if (median < 0.01) {\n                    alpha = 0.0;\n                } else if (median > 0.99) {\n                    alpha = 1.0;\n                }\n\n                // Gamma correction for coverage-like alpha\n                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));\n                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);\n                var coverage: f32 = pow(shapeColor.a * alpha, gamma);\n\n                return coverage;\n\n            }\n        ",
          },
        },
        _ = {
          name: "msdf-bit",
          fragment: {
            header:
              "\n            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {\n\n                // MSDF\n                float median = msdfColor.r + msdfColor.g + msdfColor.b -\n                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -\n                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));\n\n                // SDF\n                median = min(median, msdfColor.a);\n\n                float screenPxDistance = distance * (median - 0.5);\n                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\n\n                if (median < 0.01) {\n                    alpha = 0.0;\n                } else if (median > 0.99) {\n                    alpha = 1.0;\n                }\n\n                // Gamma correction for coverage-like alpha\n                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));\n                float gamma = mix(1.0, 1.0 / 2.2, luma);\n                float coverage = pow(shapeColor.a * alpha, gamma);\n\n                return coverage;\n            }\n        ",
          },
        };
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
      function w(e, t) {
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
      function P(e, t, r) {
        return (
          (t = O(t)),
          (function (e, t) {
            if (t && ("object" == x(t) || "function" == typeof t)) return t;
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
            T()
              ? Reflect.construct(t, r || [], O(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function T() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (T = function () {
          return !!e;
        })();
      }
      function O(e) {
        return (
          (O = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          O(e)
        );
      }
      function j(e, t) {
        return (
          (j = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          j(e, t)
        );
      }
      var k = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var r = new v.k({
              uColor: {
                value: new Float32Array([1, 1, 1, 1]),
                type: "vec4<f32>",
              },
              uTransformMatrix: { value: new l.u(), type: "mat3x3<f32>" },
              uDistance: { value: 4, type: "f32" },
              uRound: { value: 0, type: "f32" },
            });
            return (
              null != n ||
                (n = (0, s.v)({
                  name: "sdf-shader",
                  bits: [f.F, (0, p._)(e), b, g, d.b],
                })),
              null != o ||
                (o = (0, s.I)({
                  name: "sdf-shader",
                  bits: [f.a, (0, p.P)(e), m, _, d.m],
                })),
              P(this, t, [
                {
                  glProgram: o,
                  gpuProgram: n,
                  resources: { localUniforms: r, batchSamplers: (0, y.n)(e) },
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
                t && j(e, t));
            })(t, e),
            (r = t),
            i && w(r.prototype, i),
            u && w(r, u),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, i, u;
        })(h.M),
        C = r(194),
        R = r(1324);
      function E(e) {
        return (
          (E =
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
          E(e)
        );
      }
      function F(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function U(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, B(n.key), n));
        }
      }
      function M(e, t, r) {
        return (
          t && U(e.prototype, t),
          r && U(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function B(e) {
        var t = (function (e, t) {
          if ("object" != E(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == E(t) ? t : t + "";
      }
      function A(e, t, r) {
        return (
          (t = z(t)),
          (function (e, t) {
            if (t && ("object" == E(t) || "function" == typeof t)) return t;
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
            G()
              ? Reflect.construct(t, r || [], z(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function G() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (G = function () {
          return !!e;
        })();
      }
      function D() {
        return (
          (D =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, r) {
                  var n = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = z(e));
                    );
                    return e;
                  })(e, t);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : r)
                      : o.value;
                  }
                }),
          D.apply(null, arguments)
        );
      }
      function z(e) {
        return (
          (z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          z(e)
        );
      }
      function V(e, t) {
        return (
          (V = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          V(e, t)
        );
      }
      var W = (function (e) {
          function t() {
            return (F(this, t), A(this, t, arguments));
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
                t && V(e, t));
            })(t, e),
            M(t, [
              {
                key: "destroy",
                value: function () {
                  var e, r, n, o, i;
                  (this.context.customShader &&
                    this.context.customShader.destroy(),
                    ((e = t),
                    (r = "destroy"),
                    (n = this),
                    (i = D(z(1 & (o = 3) ? e.prototype : e), r, n)),
                    2 & o && "function" == typeof i
                      ? function (e) {
                          return i.apply(n, e);
                        }
                      : i)([]));
                },
              },
            ])
          );
        })(a.A),
        I = (function () {
          return M(
            function e(t) {
              (F(this, e), (this._renderer = t));
            },
            [
              {
                key: "validateRenderable",
                value: function (e) {
                  var t = this._getGpuBitmapText(e);
                  return this._renderer.renderPipes.graphics.validateRenderable(
                    t,
                  );
                },
              },
              {
                key: "addRenderable",
                value: function (e, t) {
                  var r = this._getGpuBitmapText(e);
                  (N(e, r),
                    e._didTextUpdate &&
                      ((e._didTextUpdate = !1), this._updateContext(e, r)),
                    this._renderer.renderPipes.graphics.addRenderable(r, t),
                    r.context.customShader && this._updateDistanceField(e));
                },
              },
              {
                key: "updateRenderable",
                value: function (e) {
                  var t = this._getGpuBitmapText(e);
                  (N(e, t),
                    this._renderer.renderPipes.graphics.updateRenderable(t),
                    t.context.customShader && this._updateDistanceField(e));
                },
              },
              {
                key: "_updateContext",
                value: function (e, t) {
                  var r = t.context,
                    n = C.c.getFont(e.text, e._style);
                  (r.clear(),
                    "none" !== n.distanceField.type &&
                      (r.customShader ||
                        (r.customShader = new k(
                          this._renderer.limits.maxBatchableTextures,
                        ))));
                  var o = c.P.graphemeSegmenter(e.text),
                    i = e._style,
                    u = n.baseLineOffset,
                    a = (0, R.Z)(o, i, n, !0),
                    l = i.padding,
                    s = a.scale,
                    f = a.width,
                    p = a.height + a.offsetY;
                  (i._stroke &&
                    ((f += i._stroke.width / s), (p += i._stroke.width / s)),
                    r
                      .translate(-e._anchor._x * f - l, -e._anchor._y * p - l)
                      .scale(s, s));
                  var d = n.applyFillAsTint ? i._fill.color : 16777215,
                    y = n.fontMetrics.fontSize,
                    h = n.lineHeight;
                  i.lineHeight &&
                    ((y = i.fontSize / s), (h = i.lineHeight / s));
                  var v = (h - y) / 2;
                  v - n.baseLineOffset < 0 && (v = 0);
                  for (var b = 0; b < a.lines.length; b++) {
                    for (
                      var m = a.lines[b], g = 0;
                      g < m.charPositions.length;
                      g++
                    ) {
                      var _ = m.chars[g],
                        x = n.chars[_];
                      if (null != x && x.texture) {
                        var w = x.texture;
                        r.texture(
                          w,
                          d || "black",
                          Math.round(m.charPositions[g] + x.xOffset),
                          Math.round(u + x.yOffset + v),
                          w.orig.width,
                          w.orig.height,
                        );
                      }
                    }
                    u += h;
                  }
                },
              },
              {
                key: "_getGpuBitmapText",
                value: function (e) {
                  return e._gpuData[this._renderer.uid] || this.initGpuText(e);
                },
              },
              {
                key: "initGpuText",
                value: function (e) {
                  var t = new W();
                  return (
                    (e._gpuData[this._renderer.uid] = t),
                    this._updateContext(e, t),
                    t
                  );
                },
              },
              {
                key: "_updateDistanceField",
                value: function (e) {
                  var t = this._getGpuBitmapText(e).context,
                    r = e._style.fontFamily,
                    n = u.l.get("".concat(r, "-bitmap")),
                    o = e.groupTransform,
                    i = o.a,
                    a = o.b,
                    c = o.c,
                    l = o.d,
                    s = Math.sqrt(i * i + a * a),
                    f = Math.sqrt(c * c + l * l),
                    p = (Math.abs(s) + Math.abs(f)) / 2,
                    d = n.baseRenderedFontSize / e._style.fontSize,
                    y = p * n.distanceField.range * (1 / d);
                  t.customShader.resources.localUniforms.uniforms.uDistance = y;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._renderer = null;
                },
              },
            ],
          );
        })();
      function N(e, t) {
        ((t.groupTransform = e.groupTransform),
          (t.groupColorAlpha = e.groupColorAlpha),
          (t.groupColor = e.groupColor),
          (t.groupBlendMode = e.groupBlendMode),
          (t.globalDisplayStatus = e.globalDisplayStatus),
          (t.groupTransform = e.groupTransform),
          (t.localDisplayStatus = e.localDisplayStatus),
          (t.groupAlpha = e.groupAlpha),
          (t._roundPixels = e._roundPixels));
      }
      ((I.extension = {
        type: [i.Ag.WebGLPipes, i.Ag.WebGPUPipes, i.Ag.CanvasPipes],
        name: "bitmapText",
      }),
        i.XO.add(I));
    },
    4418: function (e, t, r) {
      var n = r(6244),
        o = r(8851),
        i = r(5510),
        u = r(2005),
        a = r(867),
        c = r(665);
      function l(e) {
        return (
          (l =
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
          l(e)
        );
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, d(n.key), n));
        }
      }
      function p(e, t, r) {
        return (
          t && f(e.prototype, t),
          r && f(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function d(e) {
        var t = (function (e, t) {
          if ("object" != l(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != l(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == l(t) ? t : t + "";
      }
      var y = (function () {
          return p(
            function e() {
              (s(this, e), (this.batches = []), (this.batched = !1));
            },
            [
              {
                key: "destroy",
                value: function () {
                  (this.batches.forEach(function (e) {
                    u.Z.return(e);
                  }),
                    (this.batches.length = 0));
                },
              },
            ],
          );
        })(),
        h = (function () {
          return p(
            function e(t, r) {
              (s(this, e),
                (this.state = i.U.for2d()),
                (this.renderer = t),
                (this._adaptor = r),
                this.renderer.runners.contextChange.add(this));
            },
            [
              {
                key: "contextChange",
                value: function () {
                  this._adaptor.contextChange(this.renderer);
                },
              },
              {
                key: "validateRenderable",
                value: function (e) {
                  var t = e.context,
                    r = !!e._gpuData,
                    n = this.renderer.graphicsContext.updateGpuContext(t);
                  return !(!n.isBatchable && r === n.isBatchable);
                },
              },
              {
                key: "addRenderable",
                value: function (e, t) {
                  var r = this.renderer.graphicsContext.updateGpuContext(
                    e.context,
                  );
                  (e.didViewUpdate && this._rebuild(e),
                    r.isBatchable
                      ? this._addToBatcher(e, t)
                      : (this.renderer.renderPipes.batch.break(t), t.add(e)));
                },
              },
              {
                key: "updateRenderable",
                value: function (e) {
                  for (
                    var t = this._getGpuDataForRenderable(e).batches, r = 0;
                    r < t.length;
                    r++
                  ) {
                    var n = t[r];
                    n._batcher.updateElement(n);
                  }
                },
              },
              {
                key: "execute",
                value: function (e) {
                  if (e.isRenderable) {
                    var t = this.renderer,
                      r = e.context;
                    if (t.graphicsContext.getGpuContext(r).batches.length) {
                      var n = r.customShader || this._adaptor.shader;
                      this.state.blendMode = e.groupBlendMode;
                      var o = n.resources.localUniforms.uniforms;
                      ((o.uTransformMatrix = e.groupTransform),
                        (o.uRound = t._roundPixels | e._roundPixels),
                        (0, a.V)(e.groupColorAlpha, o.uColor, 0),
                        this._adaptor.execute(this, e));
                    }
                  }
                },
              },
              {
                key: "_rebuild",
                value: function (e) {
                  var t = this._getGpuDataForRenderable(e),
                    r = this.renderer.graphicsContext.updateGpuContext(
                      e.context,
                    );
                  (t.destroy(),
                    r.isBatchable && this._updateBatchesForRenderable(e, t));
                },
              },
              {
                key: "_addToBatcher",
                value: function (e, t) {
                  for (
                    var r = this.renderer.renderPipes.batch,
                      n = this._getGpuDataForRenderable(e).batches,
                      o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i = n[o];
                    r.addToBatch(i, t);
                  }
                },
              },
              {
                key: "_getGpuDataForRenderable",
                value: function (e) {
                  return (
                    e._gpuData[this.renderer.uid] ||
                    this._initGpuDataForRenderable(e)
                  );
                },
              },
              {
                key: "_initGpuDataForRenderable",
                value: function (e) {
                  var t = new y();
                  return ((e._gpuData[this.renderer.uid] = t), t);
                },
              },
              {
                key: "_updateBatchesForRenderable",
                value: function (e, t) {
                  var r = e.context,
                    n = this.renderer.graphicsContext.getGpuContext(r),
                    o = this.renderer._roundPixels | e._roundPixels;
                  t.batches = n.batches.map(function (t) {
                    var r = u.Z.get(c.G);
                    return (
                      t.copyTo(r),
                      (r.renderable = e),
                      (r.roundPixels = o),
                      r
                    );
                  });
                },
              },
              {
                key: "destroy",
                value: function () {
                  ((this.renderer = null),
                    this._adaptor.destroy(),
                    (this._adaptor = null),
                    (this.state = null));
                },
              },
            ],
          );
        })();
      ((h.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "graphics",
      }),
        n.XO.add(h),
        n.XO.add(o.GH));
    },
    4457: function (e, t, r) {
      r.d(t, {
        s: function () {
          return o;
        },
      });
      var n = r(9803);
      function o(e, t) {
        var r = e.texture,
          o = e.bounds,
          i = t._style._getFinalPadding();
        (0, n.y)(o, t._anchor, r);
        var u = t._anchor._x * i * 2,
          a = t._anchor._y * i * 2;
        ((o.minX -= i - u),
          (o.minY -= i - a),
          (o.maxX -= i - u),
          (o.maxY -= i - a));
      }
    },
    5189: function (e, t, r) {
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
            Object.defineProperty(e, u(n.key), n));
        }
      }
      function u(e) {
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
      var a = (function () {
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
              key: "push",
              value: function (e, t, r) {
                (this._renderer.renderPipes.batch.break(r),
                  r.add({
                    renderPipeId: "filter",
                    canBundle: !1,
                    action: "pushFilter",
                    container: t,
                    filterEffect: e,
                  }));
              },
            },
            {
              key: "pop",
              value: function (e, t, r) {
                (this._renderer.renderPipes.batch.break(r),
                  r.add({
                    renderPipeId: "filter",
                    action: "popFilter",
                    canBundle: !1,
                  }));
              },
            },
            {
              key: "execute",
              value: function (e) {
                "pushFilter" === e.action
                  ? this._renderer.filter.push(e)
                  : "popFilter" === e.action && this._renderer.filter.pop();
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
      a.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "filter",
      };
      var c = r(8338),
        l = r(8594),
        s = r(7447),
        f =
          "struct GlobalFilterUniforms {\n  uInputSize: vec4<f32>,\n  uInputPixel: vec4<f32>,\n  uInputClamp: vec4<f32>,\n  uOutputFrame: vec4<f32>,\n  uGlobalFrame: vec4<f32>,\n  uOutputTexture: vec4<f32>,\n};\n\n@group(0) @binding(0) var <uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler: sampler;\n\nstruct VSOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv: vec2<f32>\n};\n\nfn filterVertexPosition(aPosition: vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0 * gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord(aPosition: vec2<f32>) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition: vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n    return textureSample(uTexture, uSampler, uv);\n}\n";
      function p(e) {
        return (
          (p =
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
          p(e)
        );
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, y(n.key), n));
        }
      }
      function y(e) {
        var t = (function (e, t) {
          if ("object" != p(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != p(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == p(t) ? t : t + "";
      }
      function h(e, t, r) {
        return (
          (t = b(t)),
          (function (e, t) {
            if (t && ("object" == p(t) || "function" == typeof t)) return t;
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
            v()
              ? Reflect.construct(t, r || [], b(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function v() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (v = function () {
          return !!e;
        })();
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function m(e, t) {
        return (
          (m = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          m(e, t)
        );
      }
      var g = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              h(this, t, [
                {
                  gpuProgram: l.B.from({
                    vertex: { source: f, entryPoint: "mainVertex" },
                    fragment: { source: f, entryPoint: "mainFragment" },
                    name: "passthrough-filter",
                  }),
                  glProgram: c.M.from({
                    vertex:
                      "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
                    fragment:
                      "in vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nvoid main() {\n    finalColor = texture(uTexture, vTextureCoord);\n}\n",
                    name: "passthrough-filter",
                  }),
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
                t && m(e, t));
            })(t, e),
            (r = t),
            n && d(r.prototype, n),
            o && d(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n, o;
        })(s.d),
        _ = r(410),
        x = r(3820),
        w = r(4936),
        S = r(8309),
        P = r(3760),
        T = r(8432),
        O = r(2664),
        j = r(5595),
        k = new _.u();
      var C = r(9209);
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
      function E(e, t) {
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
          t && E(e.prototype, t),
          r && E(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function U(e) {
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
      function M(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var B = new w.V({
          attributes: {
            aPosition: {
              buffer: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
              format: "float32x2",
              stride: 8,
              offset: 0,
            },
          },
          indexBuffer: new Uint32Array([0, 1, 2, 0, 2, 3]),
        }),
        A = F(function e() {
          (M(this, e),
            (this.skip = !1),
            (this.inputTexture = null),
            (this.backTexture = null),
            (this.filters = null),
            (this.bounds = new j.c()),
            (this.container = null),
            (this.blendRequired = !1),
            (this.outputRenderSurface = null),
            (this.globalFrame = { x: 0, y: 0, width: 0, height: 0 }),
            (this.firstEnabledIndex = -1),
            (this.lastEnabledIndex = -1));
        }),
        G = (function () {
          return F(
            function e(t) {
              (M(this, e),
                (this._filterStackIndex = 0),
                (this._filterStack = []),
                (this._filterGlobalUniforms = new S.k({
                  uInputSize: { value: new Float32Array(4), type: "vec4<f32>" },
                  uInputPixel: {
                    value: new Float32Array(4),
                    type: "vec4<f32>",
                  },
                  uInputClamp: {
                    value: new Float32Array(4),
                    type: "vec4<f32>",
                  },
                  uOutputFrame: {
                    value: new Float32Array(4),
                    type: "vec4<f32>",
                  },
                  uGlobalFrame: {
                    value: new Float32Array(4),
                    type: "vec4<f32>",
                  },
                  uOutputTexture: {
                    value: new Float32Array(4),
                    type: "vec4<f32>",
                  },
                })),
                (this._globalFilterBindGroup = new x.T({})),
                (this.renderer = t));
            },
            [
              {
                key: "activeBackTexture",
                get: function () {
                  var e;
                  return null === (e = this._activeFilterData) || void 0 === e
                    ? void 0
                    : e.backTexture;
                },
              },
              {
                key: "push",
                value: function (e) {
                  var t = this.renderer,
                    r = e.filterEffect.filters,
                    n = this._pushFilterData();
                  ((n.skip = !1),
                    (n.filters = r),
                    (n.container = e.container),
                    (n.outputRenderSurface = t.renderTarget.renderSurface));
                  var o = t.renderTarget.renderTarget.colorTexture.source,
                    i = o.resolution,
                    u = o.antialias;
                  if (
                    r.every(function (e) {
                      return !e.enabled;
                    })
                  )
                    n.skip = !0;
                  else {
                    var a = n.bounds;
                    if (
                      (this._calculateFilterArea(e, a),
                      this._calculateFilterBounds(
                        n,
                        t.renderTarget.rootViewPort,
                        u,
                        i,
                        1,
                      ),
                      !n.skip)
                    ) {
                      var c = this._getPreviousFilterData(),
                        l = this._findFilterResolution(i),
                        s = 0,
                        f = 0;
                      (c && ((s = c.bounds.minX), (f = c.bounds.minY)),
                        this._calculateGlobalFrame(
                          n,
                          s,
                          f,
                          l,
                          o.width,
                          o.height,
                        ),
                        this._setupFilterTextures(n, a, t, c));
                    }
                  }
                },
              },
              {
                key: "generateFilteredTexture",
                value: function (e) {
                  var t = e.texture,
                    r = e.filters,
                    n = this._pushFilterData();
                  ((this._activeFilterData = n),
                    (n.skip = !1),
                    (n.filters = r));
                  var o = t.source,
                    i = o.resolution,
                    u = o.antialias;
                  if (
                    r.every(function (e) {
                      return !e.enabled;
                    })
                  )
                    return ((n.skip = !0), t);
                  var a = n.bounds;
                  if (
                    (a.addRect(t.frame),
                    this._calculateFilterBounds(n, a.rectangle, u, i, 0),
                    n.skip)
                  )
                    return t;
                  var c = i;
                  (this._calculateGlobalFrame(n, 0, 0, c, o.width, o.height),
                    (n.outputRenderSurface = T.W.getOptimalTexture(
                      a.width,
                      a.height,
                      n.resolution,
                      n.antialias,
                    )),
                    (n.backTexture = P.g.EMPTY),
                    (n.inputTexture = t),
                    this.renderer.renderTarget.finishRenderPass(),
                    this._applyFiltersToTexture(n, !0));
                  var l = n.outputRenderSurface;
                  return ((l.source.alphaMode = "premultiplied-alpha"), l);
                },
              },
              {
                key: "pop",
                value: function () {
                  var e = this.renderer,
                    t = this._popFilterData();
                  t.skip ||
                    (e.globalUniforms.pop(),
                    e.renderTarget.finishRenderPass(),
                    (this._activeFilterData = t),
                    this._applyFiltersToTexture(t, !1),
                    t.blendRequired && T.W.returnTexture(t.backTexture),
                    T.W.returnTexture(t.inputTexture));
                },
              },
              {
                key: "getBackTexture",
                value: function (e, t, r) {
                  var n = e.colorTexture.source._resolution,
                    o = T.W.getOptimalTexture(t.width, t.height, n, !1),
                    i = t.minX,
                    u = t.minY;
                  (r && ((i -= r.minX), (u -= r.minY)),
                    (i = Math.floor(i * n)),
                    (u = Math.floor(u * n)));
                  var a = Math.ceil(t.width * n),
                    c = Math.ceil(t.height * n);
                  return (
                    this.renderer.renderTarget.copyToTexture(
                      e,
                      o,
                      { x: i, y: u },
                      { width: a, height: c },
                      { x: 0, y: 0 },
                    ),
                    o
                  );
                },
              },
              {
                key: "applyFilter",
                value: function (e, t, r, n) {
                  var o = this.renderer,
                    i = this._activeFilterData,
                    u = i.outputRenderSurface === r,
                    a =
                      o.renderTarget.rootRenderTarget.colorTexture.source
                        ._resolution,
                    c = this._findFilterResolution(a),
                    l = 0,
                    s = 0;
                  if (u) {
                    var f = this._findPreviousFilterOffset();
                    ((l = f.x), (s = f.y));
                  }
                  this._updateFilterUniforms(t, r, i, l, s, c, u, n);
                  var p = e.enabled ? e : this._getPassthroughFilter();
                  this._setupBindGroupsAndRender(p, t, o);
                },
              },
              {
                key: "calculateSpriteMatrix",
                value: function (e, t) {
                  var r = this._activeFilterData,
                    n = e.set(
                      r.inputTexture._source.width,
                      0,
                      0,
                      r.inputTexture._source.height,
                      r.bounds.minX,
                      r.bounds.minY,
                    ),
                    o = t.worldTransform.copyTo(_.u.shared),
                    i = t.renderGroup || t.parentRenderGroup;
                  return (
                    i &&
                      i.cacheToLocalTransform &&
                      o.prepend(i.cacheToLocalTransform),
                    o.invert(),
                    n.prepend(o),
                    n.scale(
                      1 / t.texture.orig.width,
                      1 / t.texture.orig.height,
                    ),
                    n.translate(t.anchor.x, t.anchor.y),
                    n
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e;
                  (null === (e = this._passthroughFilter) ||
                    void 0 === e ||
                    e.destroy(!0),
                    (this._passthroughFilter = null));
                },
              },
              {
                key: "_getPassthroughFilter",
                value: function () {
                  var e;
                  return (
                    (null !== (e = this._passthroughFilter) && void 0 !== e) ||
                      (this._passthroughFilter = new g()),
                    this._passthroughFilter
                  );
                },
              },
              {
                key: "_setupBindGroupsAndRender",
                value: function (e, t, r) {
                  if (r.renderPipes.uniformBatch) {
                    var n = r.renderPipes.uniformBatch.getUboResource(
                      this._filterGlobalUniforms,
                    );
                    this._globalFilterBindGroup.setResource(n, 0);
                  } else
                    this._globalFilterBindGroup.setResource(
                      this._filterGlobalUniforms,
                      0,
                    );
                  (this._globalFilterBindGroup.setResource(t.source, 1),
                    this._globalFilterBindGroup.setResource(t.source.style, 2),
                    (e.groups[0] = this._globalFilterBindGroup),
                    r.encoder.draw({
                      geometry: B,
                      shader: e,
                      state: e._state,
                      topology: "triangle-list",
                    }),
                    r.type === O.W.WEBGL && r.renderTarget.finishRenderPass());
                },
              },
              {
                key: "_setupFilterTextures",
                value: function (e, t, r, n) {
                  if (
                    ((e.backTexture = P.g.EMPTY),
                    (e.inputTexture = T.W.getOptimalTexture(
                      t.width,
                      t.height,
                      e.resolution,
                      e.antialias,
                    )),
                    e.blendRequired)
                  ) {
                    r.renderTarget.finishRenderPass();
                    var o = r.renderTarget.getRenderTarget(
                      e.outputRenderSurface,
                    );
                    e.backTexture = this.getBackTexture(
                      o,
                      t,
                      null == n ? void 0 : n.bounds,
                    );
                  }
                  (r.renderTarget.bind(e.inputTexture, !0),
                    r.globalUniforms.push({ offset: t }));
                },
              },
              {
                key: "_calculateGlobalFrame",
                value: function (e, t, r, n, o, i) {
                  var u = e.globalFrame;
                  ((u.x = t * n),
                    (u.y = r * n),
                    (u.width = o * n),
                    (u.height = i * n));
                },
              },
              {
                key: "_updateFilterUniforms",
                value: function (e, t, r, n, o, i, u, a) {
                  var c = this._filterGlobalUniforms.uniforms,
                    l = c.uOutputFrame,
                    s = c.uInputSize,
                    f = c.uInputPixel,
                    p = c.uInputClamp,
                    d = c.uGlobalFrame,
                    y = c.uOutputTexture;
                  (u
                    ? ((l[0] = r.bounds.minX - n), (l[1] = r.bounds.minY - o))
                    : ((l[0] = 0), (l[1] = 0)),
                    (l[2] = e.frame.width),
                    (l[3] = e.frame.height),
                    (s[0] = e.source.width),
                    (s[1] = e.source.height),
                    (s[2] = 1 / s[0]),
                    (s[3] = 1 / s[1]),
                    (f[0] = e.source.pixelWidth),
                    (f[1] = e.source.pixelHeight),
                    (f[2] = 1 / f[0]),
                    (f[3] = 1 / f[1]),
                    (p[0] = 0.5 * f[2]),
                    (p[1] = 0.5 * f[3]),
                    (p[2] = e.frame.width * s[2] - 0.5 * f[2]),
                    (p[3] = e.frame.height * s[3] - 0.5 * f[3]));
                  var h =
                    this.renderer.renderTarget.rootRenderTarget.colorTexture;
                  ((d[0] = n * i),
                    (d[1] = o * i),
                    (d[2] = h.source.width * i),
                    (d[3] = h.source.height * i),
                    t instanceof P.g && (t.source.resource = null));
                  var v = this.renderer.renderTarget.getRenderTarget(t);
                  (this.renderer.renderTarget.bind(t, !!a),
                    t instanceof P.g
                      ? ((y[0] = t.frame.width), (y[1] = t.frame.height))
                      : ((y[0] = v.width), (y[1] = v.height)),
                    (y[2] = v.isRoot ? -1 : 1),
                    this._filterGlobalUniforms.update());
                },
              },
              {
                key: "_findFilterResolution",
                value: function (e) {
                  for (
                    var t = this._filterStackIndex - 1;
                    t > 0 && this._filterStack[t].skip;
                  )
                    --t;
                  return t > 0 && this._filterStack[t].inputTexture
                    ? this._filterStack[t].inputTexture.source._resolution
                    : e;
                },
              },
              {
                key: "_findPreviousFilterOffset",
                value: function () {
                  for (var e = 0, t = 0, r = this._filterStackIndex; r > 0; ) {
                    r--;
                    var n = this._filterStack[r];
                    if (!n.skip) {
                      ((e = n.bounds.minX), (t = n.bounds.minY));
                      break;
                    }
                  }
                  return { x: e, y: t };
                },
              },
              {
                key: "_calculateFilterArea",
                value: function (e, t) {
                  if (
                    (e.renderables
                      ? (function (e, t) {
                          t.clear();
                          for (var r = t.matrix, n = 0; n < e.length; n++) {
                            var o,
                              i = e[n];
                            if (!(i.globalDisplayStatus < 7)) {
                              var u =
                                null !== (o = i.renderGroup) && void 0 !== o
                                  ? o
                                  : i.parentRenderGroup;
                              (null != u && u.isCachedAsTexture
                                ? (t.matrix = k
                                    .copyFrom(u.textureOffsetInverseTransform)
                                    .append(i.worldTransform))
                                : null != u &&
                                    u._parentCacheAsTextureRenderGroup
                                  ? (t.matrix = k
                                      .copyFrom(
                                        u._parentCacheAsTextureRenderGroup
                                          .inverseWorldTransform,
                                      )
                                      .append(i.groupTransform))
                                  : (t.matrix = i.worldTransform),
                                t.addBounds(i.bounds));
                            }
                          }
                          t.matrix = r;
                        })(e.renderables, t)
                      : e.filterEffect.filterArea
                        ? (t.clear(),
                          t.addRect(e.filterEffect.filterArea),
                          t.applyMatrix(e.container.worldTransform))
                        : e.container.getFastGlobalBounds(!0, t),
                    e.container)
                  ) {
                    var r = (
                      e.container.renderGroup || e.container.parentRenderGroup
                    ).cacheToLocalTransform;
                    r && t.applyMatrix(r);
                  }
                },
              },
              {
                key: "_applyFiltersToTexture",
                value: function (e, t) {
                  var r = e.inputTexture,
                    n = e.bounds,
                    o = e.filters,
                    i = e.firstEnabledIndex,
                    u = e.lastEnabledIndex;
                  if (
                    (this._globalFilterBindGroup.setResource(r.source.style, 2),
                    this._globalFilterBindGroup.setResource(
                      e.backTexture.source,
                      3,
                    ),
                    i === u)
                  )
                    o[i].apply(this, r, e.outputRenderSurface, t);
                  else {
                    for (
                      var a = e.inputTexture,
                        c = T.W.getOptimalTexture(
                          n.width,
                          n.height,
                          a.source._resolution,
                          !1,
                        ),
                        l = c,
                        s = i;
                      s < u;
                      s++
                    ) {
                      var f = o[s];
                      if (f.enabled) {
                        f.apply(this, a, l, !0);
                        var p = a;
                        ((a = l), (l = p));
                      }
                    }
                    (o[u].apply(this, a, e.outputRenderSurface, t),
                      T.W.returnTexture(c));
                  }
                },
              },
              {
                key: "_calculateFilterBounds",
                value: function (e, t, r, n, o) {
                  for (
                    var i = this.renderer,
                      u = e.bounds,
                      a = e.filters,
                      c = 1 / 0,
                      l = 0,
                      s = !0,
                      f = !1,
                      p = !1,
                      d = !0,
                      y = -1,
                      h = -1,
                      v = 0;
                    v < a.length;
                    v++
                  ) {
                    var b,
                      m,
                      g = a[v];
                    if (g.enabled) {
                      if (
                        (-1 === y && (y = v),
                        (h = v),
                        (c = Math.min(
                          c,
                          "inherit" === g.resolution ? n : g.resolution,
                        )),
                        (l += g.padding),
                        "off" === g.antialias
                          ? (s = !1)
                          : "inherit" === g.antialias && s && (s = r),
                        g.clipToViewport || (d = !1),
                        !!!(g.compatibleRenderers & i.type))
                      ) {
                        p = !1;
                        break;
                      }
                      if (
                        g.blendRequired &&
                        null !==
                          (b =
                            null === (m = i.backBuffer) || void 0 === m
                              ? void 0
                              : m.useBackBuffer) &&
                        void 0 !== b &&
                        !b
                      ) {
                        ((0, C.R)(
                          "Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options.",
                        ),
                          (p = !1));
                        break;
                      }
                      ((p = !0), f || (f = g.blendRequired));
                    }
                  }
                  p
                    ? (d && u.fitBounds(0, t.width / n, 0, t.height / n),
                      u
                        .scale(c)
                        .ceil()
                        .scale(1 / c)
                        .pad((0 | l) * o),
                      u.isPositive
                        ? ((e.antialias = s),
                          (e.resolution = c),
                          (e.blendRequired = f),
                          (e.firstEnabledIndex = y),
                          (e.lastEnabledIndex = h))
                        : (e.skip = !0))
                    : (e.skip = !0);
                },
              },
              {
                key: "_popFilterData",
                value: function () {
                  return (
                    this._filterStackIndex--,
                    this._filterStack[this._filterStackIndex]
                  );
                },
              },
              {
                key: "_getPreviousFilterData",
                value: function () {
                  for (
                    var e, t = this._filterStackIndex - 1;
                    t > 0 && (t--, (e = this._filterStack[t]).skip);
                  );
                  return e;
                },
              },
              {
                key: "_pushFilterData",
                value: function () {
                  var e = this._filterStack[this._filterStackIndex];
                  return (
                    e ||
                      (e = this._filterStack[this._filterStackIndex] = new A()),
                    this._filterStackIndex++,
                    e
                  );
                },
              },
            ],
          );
        })();
      ((G.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem],
        name: "filter",
      }),
        n.XO.add(G),
        n.XO.add(a));
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
          return c;
        },
      });
      var u = {
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
        a = (function () {
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
                    (this._blendModeId = u[e] || 0));
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
      a.default2d = a.for2d();
      var c = a;
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
                u(e, t, r[t]);
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
      function u(e, t, r) {
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
          return a;
        },
        _Q: function () {
          return c;
        },
        mA: function () {
          return l;
        },
      });
      var a = {
          name: "local-uniform-bit",
          vertex: {
            header:
              "\n\n            struct LocalUniforms {\n                uTransformMatrix:mat3x3<f32>,\n                uColor:vec4<f32>,\n                uRound:f32,\n            }\n\n            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ",
            main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ",
            end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        ",
          },
        },
        c = i(
          i({}, a),
          {},
          {
            vertex: i(
              i({}, a.vertex),
              {},
              { header: a.vertex.header.replace("group(1)", "group(2)") },
            ),
          },
        ),
        l = {
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
        u = r(5510);
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
      var c = ["gpu", "gl"];
      function l(e, t) {
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
            ? l(Object(r), !0).forEach(function (t) {
                f(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
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
          (t = d(t)) in e
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
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, d(n.key), n));
        }
      }
      function d(e) {
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
      function y(e, t, r) {
        return (
          (t = v(t)),
          (function (e, t) {
            if (t && ("object" == a(t) || "function" == typeof t)) return t;
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
            h()
              ? Reflect.construct(t, r || [], v(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function h() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (h = function () {
          return !!e;
        })();
      }
      function v(e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          v(e)
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
            ((r = y(this, t, [(e = s(s({}, t.defaultOptions), e))])).enabled =
              !0),
            (r._state = u.U.for2d()),
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
          (a = [
            {
              key: "from",
              value: function (e) {
                var r,
                  i,
                  u = e.gpu,
                  a = e.gl,
                  l = (function (e, t) {
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
                  })(e, c);
                return (
                  u && (r = o.B.from(u)),
                  a && (i = n.M.from(a)),
                  new t(s({ gpuProgram: r, glProgram: i }, l))
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
          ]) && p(r.prototype, i),
          a && p(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, i, a;
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
    7602: function (e, t, r) {
      var n = r(6244),
        o = r(3760),
        i = r(4457);
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
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, c(n.key), n));
        }
      }
      function c(e) {
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
      function l(e, t, r) {
        return (
          (t = f(t)),
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
            s()
              ? Reflect.construct(t, r || [], f(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function s() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (s = function () {
          return !!e;
        })();
      }
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function p(e, t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          p(e, t)
        );
      }
      var d = (function (e) {
        function t(e) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = l(this, t)).generatingTexture = !1),
            (r.currentKey = "--"),
            (r._renderer = e),
            e.runners.resolutionChange.add(r),
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
              t && p(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "resolutionChange",
              value: function () {
                var e = this.renderable;
                e._autoResolution && e.onViewUpdate();
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this._renderer.htmlText;
                (null === e.getReferenceCount(this.currentKey)
                  ? e.returnTexturePromise(this.texturePromise)
                  : e.decreaseReferenceCount(this.currentKey),
                  this._renderer.runners.resolutionChange.remove(this),
                  (this.texturePromise = null),
                  (this._renderer = null));
              },
            },
          ]) && a(r.prototype, n),
          o && a(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(r(9627).K);
      function y(e) {
        return (
          (y =
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
          y(e)
        );
      }
      function h() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof a ? n : a,
            l = Object.create(c.prototype);
          return (
            v(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  c,
                  l = 0,
                  s = o || [],
                  f = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (a = 0), (c = e), (p.n = r), u);
                    },
                  };
                function d(r, n) {
                  for (
                    a = r, c = n, t = 0;
                    !f && l && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      d = p.p,
                      y = i[2];
                    r > 3
                      ? (o = y === n) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= d &&
                        ((o = r < 2 && d < i[1])
                          ? ((a = 0), (p.v = n), (p.n = i[1]))
                          : d < y &&
                            (o = r < 3 || i[0] > n || n > y) &&
                            ((i[4] = r), (i[5] = n), (p.n = y), (a = 0)));
                  }
                  if (o || r > 1) return u;
                  throw ((f = !0), n);
                }
                return function (o, s, y) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && d(s, y), a = s, c = y;
                    (t = a < 2 ? e : c) || !f;
                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), d(a, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((l = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), a < 2 && (a = 0));
                        } else
                          (1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (a = 1)));
                        i = e;
                      } else if ((t = (f = p.n < 0) ? c : r.call(n, p)) !== u)
                        break;
                    } catch (t) {
                      ((i = e), (a = 1), (c = t));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function a() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var s = [][n]
            ? t(t([][n]()))
            : (v((t = {}), n, function () {
                return this;
              }),
              t),
          f = (l.prototype = a.prototype = Object.create(s));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), v(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = l),
          v(f, "constructor", l),
          v(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          v(l, o, "GeneratorFunction"),
          v(f),
          v(f, o, "Generator"),
          v(f, n, function () {
            return this;
          }),
          v(f, "toString", function () {
            return "[object Generator]";
          }),
          (h = function () {
            return { w: i, m: p };
          })()
        );
      }
      function v(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((v = function (e, t, r, n) {
          function i(t, r) {
            v(e, t, function (e) {
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
          v(e, t, r, n));
      }
      function b(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, g(n.key), n));
        }
      }
      function g(e) {
        var t = (function (e, t) {
          if ("object" != y(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != y(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == y(t) ? t : t + "";
      }
      var _ = (function () {
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
              key: "validateRenderable",
              value: function (e) {
                var t = this._getGpuText(e),
                  r = e.styleKey;
                return t.currentKey !== r;
              },
            },
            {
              key: "addRenderable",
              value: function (e, t) {
                var r = this._getGpuText(e);
                if (e._didTextUpdate) {
                  var n = e._autoResolution
                    ? this._renderer.resolution
                    : e.resolution;
                  ((r.currentKey === e.styleKey && e.resolution === n) ||
                    this._updateGpuText(e).catch(function (e) {
                      console.error(e);
                    }),
                    (e._didTextUpdate = !1),
                    (0, i.s)(r, e));
                }
                this._renderer.renderPipes.batch.addToBatch(r, t);
              },
            },
            {
              key: "updateRenderable",
              value: function (e) {
                var t = this._getGpuText(e);
                t._batcher.updateElement(t);
              },
            },
            {
              key: "_updateGpuText",
              value:
                ((n = h().m(function e(t) {
                  var r,
                    n,
                    o,
                    u,
                    a = this;
                  return h().w(
                    function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if (
                              ((t._didTextUpdate = !1),
                              !(r = this._getGpuText(t)).generatingTexture)
                            ) {
                              e.n = 1;
                              break;
                            }
                            return e.a(2);
                          case 1:
                            return (
                              (n = r.texturePromise),
                              (r.texturePromise = null),
                              (r.generatingTexture = !0),
                              (t._resolution = t._autoResolution
                                ? this._renderer.resolution
                                : t.resolution),
                              (o =
                                this._renderer.htmlText.getTexturePromise(t)),
                              n &&
                                (o = o.finally(function () {
                                  (a._renderer.htmlText.decreaseReferenceCount(
                                    r.currentKey,
                                  ),
                                    a._renderer.htmlText.returnTexturePromise(
                                      n,
                                    ));
                                })),
                              (r.texturePromise = o),
                              (r.currentKey = t.styleKey),
                              (e.n = 2),
                              o
                            );
                          case 2:
                            ((r.texture = e.v),
                              (u = t.renderGroup || t.parentRenderGroup) &&
                                (u.structureDidChange = !0),
                              (r.generatingTexture = !1),
                              (0, i.s)(r, t));
                          case 3:
                            return e.a(2);
                        }
                    },
                    e,
                    this,
                  );
                })),
                (u = function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, o) {
                    var i = n.apply(e, t);
                    function u(e) {
                      b(i, r, o, u, a, "next", e);
                    }
                    function a(e) {
                      b(i, r, o, u, a, "throw", e);
                    }
                    u(void 0);
                  });
                }),
                function (e) {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: "_getGpuText",
              value: function (e) {
                return e._gpuData[this._renderer.uid] || this.initGpuText(e);
              },
            },
            {
              key: "initGpuText",
              value: function (e) {
                var t = new d(this._renderer);
                return (
                  (t.renderable = e),
                  (t.transform = e.groupTransform),
                  (t.texture = o.g.EMPTY),
                  (t.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
                  (t.roundPixels =
                    this._renderer._roundPixels | e._roundPixels),
                  (e._resolution = e._autoResolution
                    ? this._renderer.resolution
                    : e.resolution),
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
          ]),
          t && m(e.prototype, t),
          r && m(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r, n, u;
      })();
      _.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "htmlText",
      };
      var x = r(2155),
        w = r(8432),
        S = r(2664),
        P = r(8689);
      function T() {
        var e = P.e.get().getNavigator().userAgent;
        return /^((?!chrome|android).)*safari/i.test(e);
      }
      var O = r(9209),
        j = r(2005),
        k = r(2315);
      function C(e) {
        return (
          (C =
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
          C(e)
        );
      }
      function R(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, E(n.key), n));
        }
      }
      function E(e) {
        var t = (function (e, t) {
          if ("object" != C(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != C(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == C(t) ? t : t + "";
      }
      var F = "http://www.w3.org/2000/svg",
        U = "http://www.w3.org/1999/xhtml",
        M = (function () {
          return (
            (e = function e() {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.svgRoot = document.createElementNS(F, "svg")),
                (this.foreignObject = document.createElementNS(
                  F,
                  "foreignObject",
                )),
                (this.domElement = document.createElementNS(U, "div")),
                (this.styleElement = document.createElementNS(U, "style")));
              var t = this.foreignObject,
                r = this.svgRoot,
                n = this.styleElement,
                o = this.domElement;
              (t.setAttribute("width", "10000"),
                t.setAttribute("height", "10000"),
                (t.style.overflow = "hidden"),
                r.appendChild(t),
                t.appendChild(n),
                t.appendChild(o),
                (this.image = P.e.get().createImage()));
            }),
            (t = [
              {
                key: "destroy",
                value: function () {
                  (this.svgRoot.remove(),
                    this.foreignObject.remove(),
                    this.styleElement.remove(),
                    this.domElement.remove(),
                    (this.image.src = ""),
                    this.image.remove(),
                    (this.svgRoot = null),
                    (this.foreignObject = null),
                    (this.styleElement = null),
                    (this.domElement = null),
                    (this.image = null),
                    (this.canvasAndContext = null));
                },
              },
            ]) && R(e.prototype, t),
            r && R(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, r;
        })();
      function B(e, t) {
        var r = t.fontFamily,
          n = [],
          o = {},
          i = e.match(/font-family:([^;"\s]+)/g);
        function u(e) {
          o[e] || (n.push(e), (o[e] = !0));
        }
        if (Array.isArray(r)) for (var a = 0; a < r.length; a++) u(r[a]);
        else u(r);
        for (var c in (i &&
          i.forEach(function (e) {
            u(e.split(":")[1].trim());
          }),
        t.tagStyles)) {
          u(t.tagStyles[c].fontFamily);
        }
        return n;
      }
      var A = r(8810);
      function G() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof a ? n : a,
            l = Object.create(c.prototype);
          return (
            D(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  c,
                  l = 0,
                  s = o || [],
                  f = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (a = 0), (c = e), (p.n = r), u);
                    },
                  };
                function d(r, n) {
                  for (
                    a = r, c = n, t = 0;
                    !f && l && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      d = p.p,
                      y = i[2];
                    r > 3
                      ? (o = y === n) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= d &&
                        ((o = r < 2 && d < i[1])
                          ? ((a = 0), (p.v = n), (p.n = i[1]))
                          : d < y &&
                            (o = r < 3 || i[0] > n || n > y) &&
                            ((i[4] = r), (i[5] = n), (p.n = y), (a = 0)));
                  }
                  if (o || r > 1) return u;
                  throw ((f = !0), n);
                }
                return function (o, s, y) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && d(s, y), a = s, c = y;
                    (t = a < 2 ? e : c) || !f;
                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), d(a, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((l = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), a < 2 && (a = 0));
                        } else
                          (1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (a = 1)));
                        i = e;
                      } else if ((t = (f = p.n < 0) ? c : r.call(n, p)) !== u)
                        break;
                    } catch (t) {
                      ((i = e), (a = 1), (c = t));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function a() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var s = [][n]
            ? t(t([][n]()))
            : (D((t = {}), n, function () {
                return this;
              }),
              t),
          f = (l.prototype = a.prototype = Object.create(s));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), D(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = l),
          D(f, "constructor", l),
          D(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          D(l, o, "GeneratorFunction"),
          D(f),
          D(f, o, "Generator"),
          D(f, n, function () {
            return this;
          }),
          D(f, "toString", function () {
            return "[object Generator]";
          }),
          (G = function () {
            return { w: i, m: p };
          })()
        );
      }
      function D(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((D = function (e, t, r, n) {
          function i(t, r) {
            D(e, t, function (e) {
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
          D(e, t, r, n));
      }
      function z(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function V(e) {
        return W.apply(this, arguments);
      }
      function W() {
        var e;
        return (
          (e = G().m(function e(t) {
            var r, n, o, i;
            return G().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return ((e.n = 1), P.e.get().fetch(t));
                  case 1:
                    return ((r = e.v), (e.n = 2), r.blob());
                  case 2:
                    return (
                      (n = e.v),
                      (o = new FileReader()),
                      (e.n = 3),
                      new Promise(function (e, t) {
                        ((o.onloadend = function () {
                          return e(o.result);
                        }),
                          (o.onerror = t),
                          o.readAsDataURL(n));
                      })
                    );
                  case 3:
                    return ((i = e.v), e.a(2, i));
                }
            }, e);
          })),
          (W = function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function u(e) {
                z(i, n, o, u, a, "next", e);
              }
              function a(e) {
                z(i, n, o, u, a, "throw", e);
              }
              u(void 0);
            });
          }),
          W.apply(this, arguments)
        );
      }
      function I() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof a ? n : a,
            l = Object.create(c.prototype);
          return (
            N(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  c,
                  l = 0,
                  s = o || [],
                  f = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (a = 0), (c = e), (p.n = r), u);
                    },
                  };
                function d(r, n) {
                  for (
                    a = r, c = n, t = 0;
                    !f && l && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      d = p.p,
                      y = i[2];
                    r > 3
                      ? (o = y === n) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= d &&
                        ((o = r < 2 && d < i[1])
                          ? ((a = 0), (p.v = n), (p.n = i[1]))
                          : d < y &&
                            (o = r < 3 || i[0] > n || n > y) &&
                            ((i[4] = r), (i[5] = n), (p.n = y), (a = 0)));
                  }
                  if (o || r > 1) return u;
                  throw ((f = !0), n);
                }
                return function (o, s, y) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && d(s, y), a = s, c = y;
                    (t = a < 2 ? e : c) || !f;
                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), d(a, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((l = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), a < 2 && (a = 0));
                        } else
                          (1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (a = 1)));
                        i = e;
                      } else if ((t = (f = p.n < 0) ? c : r.call(n, p)) !== u)
                        break;
                    } catch (t) {
                      ((i = e), (a = 1), (c = t));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function a() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var s = [][n]
            ? t(t([][n]()))
            : (N((t = {}), n, function () {
                return this;
              }),
              t),
          f = (l.prototype = a.prototype = Object.create(s));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), N(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = l),
          N(f, "constructor", l),
          N(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          N(l, o, "GeneratorFunction"),
          N(f),
          N(f, o, "Generator"),
          N(f, n, function () {
            return this;
          }),
          N(f, "toString", function () {
            return "[object Generator]";
          }),
          (I = function () {
            return { w: i, m: p };
          })()
        );
      }
      function N(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((N = function (e, t, r, n) {
          function i(t, r) {
            N(e, t, function (e) {
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
          N(e, t, r, n));
      }
      function X(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function L(e, t) {
        return Y.apply(this, arguments);
      }
      function Y() {
        var e;
        return (
          (e = I().m(function e(t, r) {
            var n;
            return I().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return ((e.n = 1), V(r));
                  case 1:
                    return (
                      (n = e.v),
                      e.a(
                        2,
                        '@font-face {\n        font-family: "'
                          .concat(t.fontFamily, '";\n        font-weight: ')
                          .concat(t.fontWeight, ";\n        font-style: ")
                          .concat(t.fontStyle, ";\n        src: url('")
                          .concat(n, "');\n    }"),
                      )
                    );
                }
            }, e);
          })),
          (Y = function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function u(e) {
                X(i, n, o, u, a, "next", e);
              }
              function a(e) {
                X(i, n, o, u, a, "throw", e);
              }
              u(void 0);
            });
          }),
          Y.apply(this, arguments)
        );
      }
      function H() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof a ? n : a,
            l = Object.create(c.prototype);
          return (
            K(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  c,
                  l = 0,
                  s = o || [],
                  f = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (a = 0), (c = e), (p.n = r), u);
                    },
                  };
                function d(r, n) {
                  for (
                    a = r, c = n, t = 0;
                    !f && l && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      d = p.p,
                      y = i[2];
                    r > 3
                      ? (o = y === n) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= d &&
                        ((o = r < 2 && d < i[1])
                          ? ((a = 0), (p.v = n), (p.n = i[1]))
                          : d < y &&
                            (o = r < 3 || i[0] > n || n > y) &&
                            ((i[4] = r), (i[5] = n), (p.n = y), (a = 0)));
                  }
                  if (o || r > 1) return u;
                  throw ((f = !0), n);
                }
                return function (o, s, y) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && d(s, y), a = s, c = y;
                    (t = a < 2 ? e : c) || !f;
                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), d(a, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((l = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), a < 2 && (a = 0));
                        } else
                          (1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (a = 1)));
                        i = e;
                      } else if ((t = (f = p.n < 0) ? c : r.call(n, p)) !== u)
                        break;
                    } catch (t) {
                      ((i = e), (a = 1), (c = t));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function a() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var s = [][n]
            ? t(t([][n]()))
            : (K((t = {}), n, function () {
                return this;
              }),
              t),
          f = (l.prototype = a.prototype = Object.create(s));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), K(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = l),
          K(f, "constructor", l),
          K(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          K(l, o, "GeneratorFunction"),
          K(f),
          K(f, o, "Generator"),
          K(f, n, function () {
            return this;
          }),
          K(f, "toString", function () {
            return "[object Generator]";
          }),
          (H = function () {
            return { w: i, m: p };
          })()
        );
      }
      function K(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((K = function (e, t, r, n) {
          function i(t, r) {
            K(e, t, function (e) {
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
          K(e, t, r, n));
      }
      function q(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Z(e);
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
              if ("string" == typeof e) return Z(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Z(e, t)
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
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Q(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      var J,
        $ = new Map();
      function ee(e) {
        return te.apply(this, arguments);
      }
      function te() {
        var e;
        return (
          (e = H().m(function e(t) {
            var r;
            return H().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      (r = t
                        .filter(function (e) {
                          return A.l.has("".concat(e, "-and-url"));
                        })
                        .map(function (e) {
                          if (!$.has(e)) {
                            var t = A.l.get("".concat(e, "-and-url")).entries,
                              r = [];
                            (t.forEach(function (t) {
                              var n = t.url,
                                o = t.faces.map(function (e) {
                                  return { weight: e.weight, style: e.style };
                                });
                              r.push.apply(
                                r,
                                q(
                                  o.map(function (t) {
                                    return L(
                                      {
                                        fontWeight: t.weight,
                                        fontStyle: t.style,
                                        fontFamily: e,
                                      },
                                      n,
                                    );
                                  }),
                                ),
                              );
                            }),
                              $.set(
                                e,
                                Promise.all(r).then(function (e) {
                                  return e.join("\n");
                                }),
                              ));
                          }
                          return $.get(e);
                        })),
                      (e.n = 1),
                      Promise.all(r)
                    );
                  case 1:
                    return e.a(2, e.v.join("\n"));
                }
            }, e);
          })),
          (te = function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function u(e) {
                Q(i, n, o, u, a, "next", e);
              }
              function a(e) {
                Q(i, n, o, u, a, "throw", e);
              }
              u(void 0);
            });
          }),
          te.apply(this, arguments)
        );
      }
      function re(e, t, r, n, o) {
        var i = o.domElement,
          u = o.styleElement,
          a = o.svgRoot;
        ((i.innerHTML = "<style>"
          .concat(t.cssStyle, "</style><div style='padding:0;'>")
          .concat(e, "</div>")),
          i.setAttribute(
            "style",
            "transform: scale(".concat(
              r,
              ");transform-origin: top left; display: inline-block",
            ),
          ),
          (u.textContent = n));
        var c = o.image,
          l = c.width,
          s = c.height;
        return (
          a.setAttribute("width", l.toString()),
          a.setAttribute("height", s.toString()),
          new XMLSerializer().serializeToString(a)
        );
      }
      function ne(e, t) {
        var r = x.N.getOptimalCanvasAndContext(e.width, e.height, t),
          n = r.context;
        return (n.clearRect(0, 0, e.width, e.height), n.drawImage(e, 0, 0), r);
      }
      function oe() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof a ? n : a,
            l = Object.create(c.prototype);
          return (
            ie(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  c,
                  l = 0,
                  s = o || [],
                  f = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (a = 0), (c = e), (p.n = r), u);
                    },
                  };
                function d(r, n) {
                  for (
                    a = r, c = n, t = 0;
                    !f && l && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      d = p.p,
                      y = i[2];
                    r > 3
                      ? (o = y === n) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= d &&
                        ((o = r < 2 && d < i[1])
                          ? ((a = 0), (p.v = n), (p.n = i[1]))
                          : d < y &&
                            (o = r < 3 || i[0] > n || n > y) &&
                            ((i[4] = r), (i[5] = n), (p.n = y), (a = 0)));
                  }
                  if (o || r > 1) return u;
                  throw ((f = !0), n);
                }
                return function (o, s, y) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && d(s, y), a = s, c = y;
                    (t = a < 2 ? e : c) || !f;
                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), d(a, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((l = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), a < 2 && (a = 0));
                        } else
                          (1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (a = 1)));
                        i = e;
                      } else if ((t = (f = p.n < 0) ? c : r.call(n, p)) !== u)
                        break;
                    } catch (t) {
                      ((i = e), (a = 1), (c = t));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function a() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var s = [][n]
            ? t(t([][n]()))
            : (ie((t = {}), n, function () {
                return this;
              }),
              t),
          f = (l.prototype = a.prototype = Object.create(s));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), ie(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = l),
          ie(f, "constructor", l),
          ie(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          ie(l, o, "GeneratorFunction"),
          ie(f),
          ie(f, o, "Generator"),
          ie(f, n, function () {
            return this;
          }),
          ie(f, "toString", function () {
            return "[object Generator]";
          }),
          (oe = function () {
            return { w: i, m: p };
          })()
        );
      }
      function ie(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((ie = function (e, t, r, n) {
          function i(t, r) {
            ie(e, t, function (e) {
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
          ie(e, t, r, n));
      }
      function ue(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function ae(e, t, r) {
        return new Promise(
          (function () {
            var n,
              o =
                ((n = oe().m(function n(o) {
                  return oe().w(function (n) {
                    for (;;)
                      switch (n.n) {
                        case 0:
                          if (!r) {
                            n.n = 1;
                            break;
                          }
                          return (
                            (n.n = 1),
                            new Promise(function (e) {
                              return setTimeout(e, 100);
                            })
                          );
                        case 1:
                          ((e.onload = function () {
                            o();
                          }),
                            (e.src = "data:image/svg+xml;charset=utf8,".concat(
                              encodeURIComponent(t),
                            )),
                            (e.crossOrigin = "anonymous"));
                        case 2:
                          return n.a(2);
                      }
                  }, n);
                })),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, o) {
                    var i = n.apply(e, t);
                    function u(e) {
                      ue(i, r, o, u, a, "next", e);
                    }
                    function a(e) {
                      ue(i, r, o, u, a, "throw", e);
                    }
                    u(void 0);
                  });
                });
            return function (e) {
              return o.apply(this, arguments);
            };
          })(),
        );
      }
      function ce(e, t, r, n) {
        n || (n = J || (J = new M()));
        var o = n,
          i = o.domElement,
          u = o.styleElement,
          a = o.svgRoot;
        ((i.innerHTML = "<style>"
          .concat(t.cssStyle, ";</style><div style='padding:0'>")
          .concat(e, "</div>")),
          i.setAttribute(
            "style",
            "transform-origin: top left; display: inline-block",
          ),
          r && (u.textContent = r),
          document.body.appendChild(a));
        var c = i.getBoundingClientRect();
        a.remove();
        var l = 2 * t.padding;
        return { width: c.width - l, height: c.height - l };
      }
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
      function se() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof a ? n : a,
            l = Object.create(c.prototype);
          return (
            fe(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  c,
                  l = 0,
                  s = o || [],
                  f = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function (t, r) {
                      return ((i = t), (a = 0), (c = e), (p.n = r), u);
                    },
                  };
                function d(r, n) {
                  for (
                    a = r, c = n, t = 0;
                    !f && l && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      d = p.p,
                      y = i[2];
                    r > 3
                      ? (o = y === n) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= d &&
                        ((o = r < 2 && d < i[1])
                          ? ((a = 0), (p.v = n), (p.n = i[1]))
                          : d < y &&
                            (o = r < 3 || i[0] > n || n > y) &&
                            ((i[4] = r), (i[5] = n), (p.n = y), (a = 0)));
                  }
                  if (o || r > 1) return u;
                  throw ((f = !0), n);
                }
                return function (o, s, y) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && d(s, y), a = s, c = y;
                    (t = a < 2 ? e : c) || !f;
                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), d(a, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((l = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), a < 2 && (a = 0));
                        } else
                          (1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (a = 1)));
                        i = e;
                      } else if ((t = (f = p.n < 0) ? c : r.call(n, p)) !== u)
                        break;
                    } catch (t) {
                      ((i = e), (a = 1), (c = t));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(r, o, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function a() {}
        function c() {}
        function l() {}
        t = Object.getPrototypeOf;
        var s = [][n]
            ? t(t([][n]()))
            : (fe((t = {}), n, function () {
                return this;
              }),
              t),
          f = (l.prototype = a.prototype = Object.create(s));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), fe(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = l),
          fe(f, "constructor", l),
          fe(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          fe(l, o, "GeneratorFunction"),
          fe(f),
          fe(f, o, "Generator"),
          fe(f, n, function () {
            return this;
          }),
          fe(f, "toString", function () {
            return "[object Generator]";
          }),
          (se = function () {
            return { w: i, m: p };
          })()
        );
      }
      function fe(e, t, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ((fe = function (e, t, r, n) {
          function i(t, r) {
            fe(e, t, function (e) {
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
          fe(e, t, r, n));
      }
      function pe(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function de(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ye(n.key), n));
        }
      }
      function ye(e) {
        var t = (function (e, t) {
          if ("object" != le(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != le(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == le(t) ? t : t + "";
      }
      var he = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._activeTextures = {}),
              (this._renderer = t),
              (this._createCanvas = t.type === S.W.WEBGPU));
          }),
          (t = [
            {
              key: "getTexture",
              value: function (e) {
                return this.getTexturePromise(e);
              },
            },
            {
              key: "getManagedTexture",
              value: function (e) {
                var t = this,
                  r = e.styleKey;
                if (this._activeTextures[r])
                  return (
                    this._increaseReferenceCount(r),
                    this._activeTextures[r].promise
                  );
                var n = this._buildTexturePromise(e).then(function (e) {
                  return ((t._activeTextures[r].texture = e), e);
                });
                return (
                  (this._activeTextures[r] = {
                    texture: null,
                    promise: n,
                    usageCount: 1,
                  }),
                  n
                );
              },
            },
            {
              key: "getReferenceCount",
              value: function (e) {
                var t, r;
                return null !==
                  (t =
                    null === (r = this._activeTextures[e]) || void 0 === r
                      ? void 0
                      : r.usageCount) && void 0 !== t
                  ? t
                  : null;
              },
            },
            {
              key: "_increaseReferenceCount",
              value: function (e) {
                this._activeTextures[e].usageCount++;
              },
            },
            {
              key: "decreaseReferenceCount",
              value: function (e) {
                var t = this,
                  r = this._activeTextures[e];
                r &&
                  (r.usageCount--,
                  0 === r.usageCount &&
                    (r.texture
                      ? this._cleanUp(r.texture)
                      : r.promise
                          .then(function (e) {
                            ((r.texture = e), t._cleanUp(r.texture));
                          })
                          .catch(function () {
                            (0, O.R)("HTMLTextSystem: Failed to clean texture");
                          }),
                    (this._activeTextures[e] = null)));
              },
            },
            {
              key: "getTexturePromise",
              value: function (e) {
                return this._buildTexturePromise(e);
              },
            },
            {
              key: "_buildTexturePromise",
              value:
                ((n = se().m(function e(t) {
                  var r, n, o, i, u, a, c, l, s, f, p, d, y, h, v, b;
                  return se().w(
                    function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              (r = t.text),
                              (n = t.style),
                              (o = t.resolution),
                              (i = t.textureStyle),
                              (u = j.Z.get(M)),
                              (a = B(r, n)),
                              (e.n = 1),
                              ee(a)
                            );
                          case 1:
                            return (
                              (c = e.v),
                              (l = ce(r, n, c, u)),
                              (s = Math.ceil(
                                Math.ceil(
                                  Math.max(1, l.width) + 2 * n.padding,
                                ) * o,
                              )),
                              (f = Math.ceil(
                                Math.ceil(
                                  Math.max(1, l.height) + 2 * n.padding,
                                ) * o,
                              )),
                              (p = u.image),
                              (d = 2),
                              (p.width = (0 | s) + d),
                              (p.height = (0 | f) + d),
                              (y = re(r, n, o, c, u)),
                              (e.n = 2),
                              ae(p, y, T() && a.length > 0)
                            );
                          case 2:
                            return (
                              (h = p),
                              this._createCanvas && (v = ne(p, o)),
                              (b = (0, k.M)(
                                v ? v.canvas : h,
                                p.width - d,
                                p.height - d,
                                o,
                              )),
                              i && (b.source.style = i),
                              this._createCanvas &&
                                (this._renderer.texture.initSource(b.source),
                                x.N.returnCanvasAndContext(v)),
                              j.Z.return(u),
                              e.a(2, b)
                            );
                        }
                    },
                    e,
                    this,
                  );
                })),
                (o = function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, o) {
                    var i = n.apply(e, t);
                    function u(e) {
                      pe(i, r, o, u, a, "next", e);
                    }
                    function a(e) {
                      pe(i, r, o, u, a, "throw", e);
                    }
                    u(void 0);
                  });
                }),
                function (e) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "returnTexturePromise",
              value: function (e) {
                var t = this;
                e.then(function (e) {
                  t._cleanUp(e);
                }).catch(function () {
                  (0, O.R)("HTMLTextSystem: Failed to clean texture");
                });
              },
            },
            {
              key: "_cleanUp",
              value: function (e) {
                (w.W.returnTexture(e, !0),
                  (e.source.resource = null),
                  (e.source.uploadMethodId = "unknown"));
              },
            },
            {
              key: "destroy",
              value: function () {
                for (var e in ((this._renderer = null), this._activeTextures))
                  this._activeTextures[e] &&
                    this.returnTexturePromise(this._activeTextures[e].promise);
                this._activeTextures = null;
              },
            },
          ]),
          t && de(e.prototype, t),
          r && de(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r, n, o;
      })();
      ((he.extension = {
        type: [n.Ag.WebGLSystem, n.Ag.WebGPUSystem, n.Ag.CanvasSystem],
        name: "htmlText",
      }),
        n.XO.add(he),
        n.XO.add(_));
    },
    8119: function (e, t, r) {
      var n = r(6244),
        o = r(410),
        i = r(3820),
        u = r(8309),
        a = r(202),
        c = r(867),
        l = r(449);
      function s(e) {
        return (
          (s =
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
          s(e)
        );
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, y(n.key), n));
        }
      }
      function d(e, t, r) {
        return (
          t && p(e.prototype, t),
          r && p(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function y(e) {
        var t = (function (e, t) {
          if ("object" != s(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != s(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == s(t) ? t : t + "";
      }
      var h = (function () {
          return d(
            function e() {
              f(this, e);
            },
            [{ key: "destroy", value: function () {} }],
          );
        })(),
        v = (function () {
          return d(
            function e(t, r) {
              (f(this, e),
                (this.localUniforms = new u.k({
                  uTransformMatrix: { value: new o.u(), type: "mat3x3<f32>" },
                  uColor: {
                    value: new Float32Array([1, 1, 1, 1]),
                    type: "vec4<f32>",
                  },
                  uRound: { value: 0, type: "f32" },
                })),
                (this.localUniformsBindGroup = new i.T({
                  0: this.localUniforms,
                })),
                (this.renderer = t),
                (this._adaptor = r),
                this._adaptor.init());
            },
            [
              {
                key: "validateRenderable",
                value: function (e) {
                  var t = this._getMeshData(e),
                    r = t.batched,
                    n = e.batched;
                  if (((t.batched = n), r !== n)) return !0;
                  if (n) {
                    var o = e._geometry;
                    if (
                      o.indices.length !== t.indexSize ||
                      o.positions.length !== t.vertexSize
                    )
                      return (
                        (t.indexSize = o.indices.length),
                        (t.vertexSize = o.positions.length),
                        !0
                      );
                    var i = this._getBatchableMesh(e);
                    return (
                      i.texture.uid !== e._texture.uid &&
                        (i._textureMatrixUpdateId = -1),
                      !i._batcher.checkAndUpdateTexture(i, e._texture)
                    );
                  }
                  return !1;
                },
              },
              {
                key: "addRenderable",
                value: function (e, t) {
                  var r,
                    n,
                    o = this.renderer.renderPipes.batch,
                    i = this._getMeshData(e);
                  e.didViewUpdate &&
                    ((i.indexSize =
                      null === (r = e._geometry.indices) || void 0 === r
                        ? void 0
                        : r.length),
                    (i.vertexSize =
                      null === (n = e._geometry.positions) || void 0 === n
                        ? void 0
                        : n.length));
                  if (i.batched) {
                    var u = this._getBatchableMesh(e);
                    (u.setTexture(e._texture),
                      (u.geometry = e._geometry),
                      o.addToBatch(u, t));
                  } else (o.break(t), t.add(e));
                },
              },
              {
                key: "updateRenderable",
                value: function (e) {
                  if (e.batched) {
                    var t = this._getBatchableMesh(e);
                    (t.setTexture(e._texture),
                      (t.geometry = e._geometry),
                      t._batcher.updateElement(t));
                  }
                },
              },
              {
                key: "execute",
                value: function (e) {
                  if (e.isRenderable) {
                    e.state.blendMode = (0, a.i)(
                      e.groupBlendMode,
                      e.texture._source,
                    );
                    var t = this.localUniforms;
                    ((t.uniforms.uTransformMatrix = e.groupTransform),
                      (t.uniforms.uRound =
                        this.renderer._roundPixels | e._roundPixels),
                      t.update(),
                      (0, c.V)(e.groupColorAlpha, t.uniforms.uColor, 0),
                      this._adaptor.execute(this, e));
                  }
                },
              },
              {
                key: "_getMeshData",
                value: function (e) {
                  var t, r;
                  return (
                    (t = e._gpuData)[(r = this.renderer.uid)] ||
                      (t[r] = new h()),
                    e._gpuData[this.renderer.uid].meshData ||
                      this._initMeshData(e)
                  );
                },
              },
              {
                key: "_initMeshData",
                value: function (e) {
                  return (
                    (e._gpuData[this.renderer.uid].meshData = {
                      batched: e.batched,
                      indexSize: 0,
                      vertexSize: 0,
                    }),
                    e._gpuData[this.renderer.uid].meshData
                  );
                },
              },
              {
                key: "_getBatchableMesh",
                value: function (e) {
                  var t, r;
                  return (
                    (t = e._gpuData)[(r = this.renderer.uid)] ||
                      (t[r] = new h()),
                    e._gpuData[this.renderer.uid].batchableMesh ||
                      this._initBatchableMesh(e)
                  );
                },
              },
              {
                key: "_initBatchableMesh",
                value: function (e) {
                  var t = new l.U();
                  return (
                    (t.renderable = e),
                    t.setTexture(e._texture),
                    (t.transform = e.groupTransform),
                    (t.roundPixels =
                      this.renderer._roundPixels | e._roundPixels),
                    (e._gpuData[this.renderer.uid].batchableMesh = t),
                    t
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  ((this.localUniforms = null),
                    (this.localUniformsBindGroup = null),
                    this._adaptor.destroy(),
                    (this._adaptor = null),
                    (this.renderer = null));
                },
              },
            ],
          );
        })();
      ((v.extension = {
        type: [n.Ag.WebGLPipes, n.Ag.WebGPUPipes, n.Ag.CanvasPipes],
        name: "mesh",
      }),
        n.XO.add(v));
    },
    8456: function (e, t, r) {
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
            Object.defineProperty(e, u(n.key), n));
        }
      }
      function u(e) {
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
      var a = (function () {
        return (
          (e = function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (r = [
            {
              key: "init",
              value: function (e) {
                var t = this;
                (Object.defineProperty(this, "resizeTo", {
                  configurable: !0,
                  set: function (e) {
                    (globalThis.removeEventListener("resize", this.queueResize),
                      (this._resizeTo = e),
                      e &&
                        (globalThis.addEventListener(
                          "resize",
                          this.queueResize,
                        ),
                        this.resize()));
                  },
                  get: function () {
                    return this._resizeTo;
                  },
                }),
                  (this.queueResize = function () {
                    t._resizeTo &&
                      (t._cancelResize(),
                      (t._resizeId = requestAnimationFrame(function () {
                        return t.resize();
                      })));
                  }),
                  (this._cancelResize = function () {
                    t._resizeId &&
                      (cancelAnimationFrame(t._resizeId), (t._resizeId = null));
                  }),
                  (this.resize = function () {
                    if (t._resizeTo) {
                      var e, r;
                      if (
                        (t._cancelResize(), t._resizeTo === globalThis.window)
                      )
                        ((e = globalThis.innerWidth),
                          (r = globalThis.innerHeight));
                      else {
                        var n = t._resizeTo;
                        ((e = n.clientWidth), (r = n.clientHeight));
                      }
                      (t.renderer.resize(e, r), t.render());
                    }
                  }),
                  (this._resizeId = null),
                  (this._resizeTo = null),
                  (this.resizeTo = e.resizeTo || null));
              },
            },
            {
              key: "destroy",
              value: function () {
                (globalThis.removeEventListener("resize", this.queueResize),
                  this._cancelResize(),
                  (this._cancelResize = null),
                  (this.queueResize = null),
                  (this.resizeTo = null),
                  (this.resize = null));
              },
            },
          ]),
          (t = null) && i(e.prototype, t),
          r && i(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      a.extension = n.Ag.Application;
      var c = r(2555),
        l = r(2279);
      function s(e) {
        return (
          (s =
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
          s(e)
        );
      }
      function f(e, t) {
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
          if ("object" != s(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != s(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == s(t) ? t : t + "";
      }
      var d = (function () {
        return (
          (e = function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (r = [
            {
              key: "init",
              value: function (e) {
                var t = this;
                ((e = Object.assign({ autoStart: !0, sharedTicker: !1 }, e)),
                  Object.defineProperty(this, "ticker", {
                    configurable: !0,
                    set: function (e) {
                      (this._ticker && this._ticker.remove(this.render, this),
                        (this._ticker = e),
                        e && e.add(this.render, this, c.d.LOW));
                    },
                    get: function () {
                      return this._ticker;
                    },
                  }),
                  (this.stop = function () {
                    t._ticker.stop();
                  }),
                  (this.start = function () {
                    t._ticker.start();
                  }),
                  (this._ticker = null),
                  (this.ticker = e.sharedTicker ? l.R.shared : new l.R()),
                  e.autoStart && this.start());
              },
            },
            {
              key: "destroy",
              value: function () {
                if (this._ticker) {
                  var e = this._ticker;
                  ((this.ticker = null), e.destroy());
                }
              },
            },
          ]),
          (t = null) && f(e.prototype, t),
          r && f(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, r;
      })();
      ((d.extension = n.Ag.Application), n.XO.add(a), n.XO.add(d));
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
          return u;
        },
      });
      var u = (function () {
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
  },
]);
