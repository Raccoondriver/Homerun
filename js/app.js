(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      9662: (e, t, r) => {
        var i = r(614),
          n = r(6330),
          s = TypeError;
        e.exports = function (e) {
          if (i(e)) return e;
          throw s(n(e) + " is not a function");
        };
      },
      6077: (e, t, r) => {
        var i = r(614),
          n = String,
          s = TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || i(e)) return e;
          throw s("Can't set " + n(e) + " as a prototype");
        };
      },
      1223: (e, t, r) => {
        var i = r(5112),
          n = r(30),
          s = r(3070).f,
          o = i("unscopables"),
          a = Array.prototype;
        null == a[o] && s(a, o, { configurable: !0, value: n(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      1530: (e, t, r) => {
        "use strict";
        var i = r(8710).charAt;
        e.exports = function (e, t, r) {
          return t + (r ? i(e, t).length : 1);
        };
      },
      5787: (e, t, r) => {
        var i = r(7976),
          n = TypeError;
        e.exports = function (e, t) {
          if (i(t, e)) return e;
          throw n("Incorrect invocation");
        };
      },
      9670: (e, t, r) => {
        var i = r(111),
          n = String,
          s = TypeError;
        e.exports = function (e) {
          if (i(e)) return e;
          throw s(n(e) + " is not an object");
        };
      },
      7556: (e, t, r) => {
        var i = r(7293);
        e.exports = i(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      8533: (e, t, r) => {
        "use strict";
        var i = r(2092).forEach,
          n = r(9341)("forEach");
        e.exports = n
          ? [].forEach
          : function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      1318: (e, t, r) => {
        var i = r(5656),
          n = r(1400),
          s = r(6244),
          o = function (e) {
            return function (t, r, o) {
              var a,
                l = i(t),
                c = s(l),
                d = n(o, c);
              if (e && r != r) {
                for (; c > d; ) if ((a = l[d++]) != a) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === r) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      2092: (e, t, r) => {
        var i = r(9974),
          n = r(1702),
          s = r(8361),
          o = r(7908),
          a = r(6244),
          l = r(5417),
          c = n([].push),
          d = function (e) {
            var t = 1 == e,
              r = 2 == e,
              n = 3 == e,
              d = 4 == e,
              u = 6 == e,
              p = 7 == e,
              h = 5 == e || u;
            return function (f, v, g, m) {
              for (
                var b,
                  y,
                  x = o(f),
                  w = s(x),
                  E = i(v, g),
                  S = a(w),
                  C = 0,
                  T = m || l,
                  O = t ? T(f, S) : r || p ? T(f, 0) : void 0;
                S > C;
                C++
              )
                if ((h || C in w) && ((y = E((b = w[C]), C, x)), e))
                  if (t) O[C] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return C;
                      case 2:
                        c(O, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, b);
                    }
              return u ? -1 : n || d ? d : O;
            };
          };
        e.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6),
          filterReject: d(7),
        };
      },
      1194: (e, t, r) => {
        var i = r(7293),
          n = r(5112),
          s = r(7392),
          o = n("species");
        e.exports = function (e) {
          return (
            s >= 51 ||
            !i(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      9341: (e, t, r) => {
        "use strict";
        var i = r(7293);
        e.exports = function (e, t) {
          var r = [][e];
          return (
            !!r &&
            i(function () {
              r.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      3671: (e, t, r) => {
        var i = r(9662),
          n = r(7908),
          s = r(8361),
          o = r(6244),
          a = TypeError,
          l = function (e) {
            return function (t, r, l, c) {
              i(r);
              var d = n(t),
                u = s(d),
                p = o(d),
                h = e ? p - 1 : 0,
                f = e ? -1 : 1;
              if (l < 2)
                for (;;) {
                  if (h in u) {
                    (c = u[h]), (h += f);
                    break;
                  }
                  if (((h += f), e ? h < 0 : p <= h))
                    throw a("Reduce of empty array with no initial value");
                }
              for (; e ? h >= 0 : p > h; h += f)
                h in u && (c = r(c, u[h], h, d));
              return c;
            };
          };
        e.exports = { left: l(!1), right: l(!0) };
      },
      1589: (e, t, r) => {
        var i = r(1400),
          n = r(6244),
          s = r(6135),
          o = Array,
          a = Math.max;
        e.exports = function (e, t, r) {
          for (
            var l = n(e),
              c = i(t, l),
              d = i(void 0 === r ? l : r, l),
              u = o(a(d - c, 0)),
              p = 0;
            c < d;
            c++, p++
          )
            s(u, p, e[c]);
          return (u.length = p), u;
        };
      },
      7475: (e, t, r) => {
        var i = r(3157),
          n = r(4411),
          s = r(111),
          o = r(5112)("species"),
          a = Array;
        e.exports = function (e) {
          var t;
          return (
            i(e) &&
              ((t = e.constructor),
              ((n(t) && (t === a || i(t.prototype))) ||
                (s(t) && null === (t = t[o]))) &&
                (t = void 0)),
            void 0 === t ? a : t
          );
        };
      },
      5417: (e, t, r) => {
        var i = r(7475);
        e.exports = function (e, t) {
          return new (i(e))(0 === t ? 0 : t);
        };
      },
      7072: (e, t, r) => {
        var i = r(5112)("iterator"),
          n = !1;
        try {
          var s = 0,
            o = {
              next: function () {
                return { done: !!s++ };
              },
              return: function () {
                n = !0;
              },
            };
          (o[i] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !n) return !1;
          var r = !1;
          try {
            var s = {};
            (s[i] = function () {
              return {
                next: function () {
                  return { done: (r = !0) };
                },
              };
            }),
              e(s);
          } catch (e) {}
          return r;
        };
      },
      4326: (e, t, r) => {
        var i = r(1702),
          n = i({}.toString),
          s = i("".slice);
        e.exports = function (e) {
          return s(n(e), 8, -1);
        };
      },
      648: (e, t, r) => {
        var i = r(1694),
          n = r(614),
          s = r(4326),
          o = r(5112)("toStringTag"),
          a = Object,
          l =
            "Arguments" ==
            s(
              (function () {
                return arguments;
              })()
            );
        e.exports = i
          ? s
          : function (e) {
              var t, r, i;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (r = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = a(e)), o))
                ? r
                : l
                ? s(t)
                : "Object" == (i = s(t)) && n(t.callee)
                ? "Arguments"
                : i;
            };
      },
      9320: (e, t, r) => {
        "use strict";
        var i = r(1702),
          n = r(9190),
          s = r(2423).getWeakData,
          o = r(9670),
          a = r(111),
          l = r(5787),
          c = r(408),
          d = r(2092),
          u = r(2597),
          p = r(9909),
          h = p.set,
          f = p.getterFor,
          v = d.find,
          g = d.findIndex,
          m = i([].splice),
          b = 0,
          y = function (e) {
            return e.frozen || (e.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          w = function (e, t) {
            return v(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (x.prototype = {
          get: function (e) {
            var t = w(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!w(this, e);
          },
          set: function (e, t) {
            var r = w(this, e);
            r ? (r[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = g(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && m(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, r, i) {
              var d = e(function (e, n) {
                  l(e, p),
                    h(e, { type: t, id: b++, frozen: void 0 }),
                    null != n && c(n, e[i], { that: e, AS_ENTRIES: r });
                }),
                p = d.prototype,
                v = f(t),
                g = function (e, t, r) {
                  var i = v(e),
                    n = s(o(t), !0);
                  return !0 === n ? y(i).set(t, r) : (n[i.id] = r), e;
                };
              return (
                n(p, {
                  delete: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var r = s(e);
                    return !0 === r
                      ? y(t).delete(e)
                      : r && u(r, t.id) && delete r[t.id];
                  },
                  has: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var r = s(e);
                    return !0 === r ? y(t).has(e) : r && u(r, t.id);
                  },
                }),
                n(
                  p,
                  r
                    ? {
                        get: function (e) {
                          var t = v(this);
                          if (a(e)) {
                            var r = s(e);
                            return !0 === r
                              ? y(t).get(e)
                              : r
                              ? r[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return g(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return g(this, e, !0);
                        },
                      }
                ),
                d
              );
            },
          });
      },
      7710: (e, t, r) => {
        "use strict";
        var i = r(2109),
          n = r(7854),
          s = r(1702),
          o = r(4705),
          a = r(8052),
          l = r(2423),
          c = r(408),
          d = r(5787),
          u = r(614),
          p = r(111),
          h = r(7293),
          f = r(7072),
          v = r(8003),
          g = r(9587);
        e.exports = function (e, t, r) {
          var m = -1 !== e.indexOf("Map"),
            b = -1 !== e.indexOf("Weak"),
            y = m ? "set" : "add",
            x = n[e],
            w = x && x.prototype,
            E = x,
            S = {},
            C = function (e) {
              var t = s(w[e]);
              a(
                w,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return b && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, r) {
                      return t(this, 0 === e ? 0 : e, r), this;
                    }
              );
            };
          if (
            o(
              e,
              !u(x) ||
                !(
                  b ||
                  (w.forEach &&
                    !h(function () {
                      new x().entries().next();
                    }))
                )
            )
          )
            (E = r.getConstructor(t, e, m, y)), l.enable();
          else if (o(e, !0)) {
            var T = new E(),
              O = T[y](b ? {} : -0, 1) != T,
              k = h(function () {
                T.has(1);
              }),
              L = f(function (e) {
                new x(e);
              }),
              M =
                !b &&
                h(function () {
                  for (var e = new x(), t = 5; t--; ) e[y](t, t);
                  return !e.has(-0);
                });
            L ||
              (((E = t(function (e, t) {
                d(e, w);
                var r = g(new x(), e, E);
                return null != t && c(t, r[y], { that: r, AS_ENTRIES: m }), r;
              })).prototype = w),
              (w.constructor = E)),
              (k || M) && (C("delete"), C("has"), m && C("get")),
              (M || O) && C(y),
              b && w.clear && delete w.clear;
          }
          return (
            (S[e] = E),
            i({ global: !0, constructor: !0, forced: E != x }, S),
            v(E, e),
            b || r.setStrong(E, e, m),
            E
          );
        };
      },
      9920: (e, t, r) => {
        var i = r(2597),
          n = r(3887),
          s = r(1236),
          o = r(3070);
        e.exports = function (e, t, r) {
          for (var a = n(t), l = o.f, c = s.f, d = 0; d < a.length; d++) {
            var u = a[d];
            i(e, u) || (r && i(r, u)) || l(e, u, c(t, u));
          }
        };
      },
      8544: (e, t, r) => {
        var i = r(7293);
        e.exports = !i(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      4994: (e, t, r) => {
        "use strict";
        var i = r(3383).IteratorPrototype,
          n = r(30),
          s = r(9114),
          o = r(8003),
          a = r(7497),
          l = function () {
            return this;
          };
        e.exports = function (e, t, r, c) {
          var d = t + " Iterator";
          return (
            (e.prototype = n(i, { next: s(+!c, r) })),
            o(e, d, !1, !0),
            (a[d] = l),
            e
          );
        };
      },
      8880: (e, t, r) => {
        var i = r(9781),
          n = r(3070),
          s = r(9114);
        e.exports = i
          ? function (e, t, r) {
              return n.f(e, t, s(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      9114: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      6135: (e, t, r) => {
        "use strict";
        var i = r(4948),
          n = r(3070),
          s = r(9114);
        e.exports = function (e, t, r) {
          var o = i(t);
          o in e ? n.f(e, o, s(0, r)) : (e[o] = r);
        };
      },
      8052: (e, t, r) => {
        var i = r(614),
          n = r(3070),
          s = r(6339),
          o = r(3072);
        e.exports = function (e, t, r, a) {
          a || (a = {});
          var l = a.enumerable,
            c = void 0 !== a.name ? a.name : t;
          if ((i(r) && s(r, c, a), a.global)) l ? (e[t] = r) : o(t, r);
          else {
            try {
              a.unsafe ? e[t] && (l = !0) : delete e[t];
            } catch (e) {}
            l
              ? (e[t] = r)
              : n.f(e, t, {
                  value: r,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable,
                });
          }
          return e;
        };
      },
      9190: (e, t, r) => {
        var i = r(8052);
        e.exports = function (e, t, r) {
          for (var n in t) i(e, n, t[n], r);
          return e;
        };
      },
      3072: (e, t, r) => {
        var i = r(7854),
          n = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            n(i, e, { value: t, configurable: !0, writable: !0 });
          } catch (r) {
            i[e] = t;
          }
          return t;
        };
      },
      654: (e, t, r) => {
        "use strict";
        var i = r(2109),
          n = r(6916),
          s = r(1913),
          o = r(6530),
          a = r(614),
          l = r(4994),
          c = r(9518),
          d = r(7674),
          u = r(8003),
          p = r(8880),
          h = r(8052),
          f = r(5112),
          v = r(7497),
          g = r(3383),
          m = o.PROPER,
          b = o.CONFIGURABLE,
          y = g.IteratorPrototype,
          x = g.BUGGY_SAFARI_ITERATORS,
          w = f("iterator"),
          E = "keys",
          S = "values",
          C = "entries",
          T = function () {
            return this;
          };
        e.exports = function (e, t, r, o, f, g, O) {
          l(r, t, o);
          var k,
            L,
            M,
            A = function (e) {
              if (e === f && _) return _;
              if (!x && e in z) return z[e];
              switch (e) {
                case E:
                case S:
                case C:
                  return function () {
                    return new r(this, e);
                  };
              }
              return function () {
                return new r(this);
              };
            },
            P = t + " Iterator",
            $ = !1,
            z = e.prototype,
            I = z[w] || z["@@iterator"] || (f && z[f]),
            _ = (!x && I) || A(f),
            N = ("Array" == t && z.entries) || I;
          if (
            (N &&
              (k = c(N.call(new e()))) !== Object.prototype &&
              k.next &&
              (s || c(k) === y || (d ? d(k, y) : a(k[w]) || h(k, w, T)),
              u(k, P, !0, !0),
              s && (v[P] = T)),
            m &&
              f == S &&
              I &&
              I.name !== S &&
              (!s && b
                ? p(z, "name", S)
                : (($ = !0),
                  (_ = function () {
                    return n(I, this);
                  }))),
            f)
          )
            if (((L = { values: A(S), keys: g ? _ : A(E), entries: A(C) }), O))
              for (M in L) (x || $ || !(M in z)) && h(z, M, L[M]);
            else i({ target: t, proto: !0, forced: x || $ }, L);
          return (
            (s && !O) || z[w] === _ || h(z, w, _, { name: f }), (v[t] = _), L
          );
        };
      },
      9781: (e, t, r) => {
        var i = r(7293);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      317: (e, t, r) => {
        var i = r(7854),
          n = r(111),
          s = i.document,
          o = n(s) && n(s.createElement);
        e.exports = function (e) {
          return o ? s.createElement(e) : {};
        };
      },
      8324: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      8509: (e, t, r) => {
        var i = r(317)("span").classList,
          n = i && i.constructor && i.constructor.prototype;
        e.exports = n === Object.prototype ? void 0 : n;
      },
      5268: (e, t, r) => {
        var i = r(4326),
          n = r(7854);
        e.exports = "process" == i(n.process);
      },
      8113: (e, t, r) => {
        var i = r(5005);
        e.exports = i("navigator", "userAgent") || "";
      },
      7392: (e, t, r) => {
        var i,
          n,
          s = r(7854),
          o = r(8113),
          a = s.process,
          l = s.Deno,
          c = (a && a.versions) || (l && l.version),
          d = c && c.v8;
        d && (n = (i = d.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
          !n &&
            o &&
            (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
            (i = o.match(/Chrome\/(\d+)/)) &&
            (n = +i[1]),
          (e.exports = n);
      },
      748: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      2109: (e, t, r) => {
        var i = r(7854),
          n = r(1236).f,
          s = r(8880),
          o = r(8052),
          a = r(3072),
          l = r(9920),
          c = r(4705);
        e.exports = function (e, t) {
          var r,
            d,
            u,
            p,
            h,
            f = e.target,
            v = e.global,
            g = e.stat;
          if ((r = v ? i : g ? i[f] || a(f, {}) : (i[f] || {}).prototype))
            for (d in t) {
              if (
                ((p = t[d]),
                (u = e.dontCallGetSet ? (h = n(r, d)) && h.value : r[d]),
                !c(v ? d : f + (g ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof p == typeof u) continue;
                l(p, u);
              }
              (e.sham || (u && u.sham)) && s(p, "sham", !0), o(r, d, p, e);
            }
        };
      },
      7293: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      7007: (e, t, r) => {
        "use strict";
        r(4916);
        var i = r(1702),
          n = r(8052),
          s = r(2261),
          o = r(7293),
          a = r(5112),
          l = r(8880),
          c = a("species"),
          d = RegExp.prototype;
        e.exports = function (e, t, r, u) {
          var p = a(e),
            h = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              h &&
              !o(function () {
                var t = !1,
                  r = /a/;
                return (
                  "split" === e &&
                    (((r = {}).constructor = {}),
                    (r.constructor[c] = function () {
                      return r;
                    }),
                    (r.flags = ""),
                    (r[p] = /./[p])),
                  (r.exec = function () {
                    return (t = !0), null;
                  }),
                  r[p](""),
                  !t
                );
              });
          if (!h || !f || r) {
            var v = i(/./[p]),
              g = t(p, ""[e], function (e, t, r, n, o) {
                var a = i(e),
                  l = t.exec;
                return l === s || l === d.exec
                  ? h && !o
                    ? { done: !0, value: v(t, r, n) }
                    : { done: !0, value: a(r, t, n) }
                  : { done: !1 };
              });
            n(String.prototype, e, g[0]), n(d, p, g[1]);
          }
          u && l(d[p], "sham", !0);
        };
      },
      6677: (e, t, r) => {
        var i = r(7293);
        e.exports = !i(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      2104: (e, t, r) => {
        var i = r(4374),
          n = Function.prototype,
          s = n.apply,
          o = n.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (i
            ? o.bind(s)
            : function () {
                return o.apply(s, arguments);
              });
      },
      9974: (e, t, r) => {
        var i = r(1702),
          n = r(9662),
          s = r(4374),
          o = i(i.bind);
        e.exports = function (e, t) {
          return (
            n(e),
            void 0 === t
              ? e
              : s
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      4374: (e, t, r) => {
        var i = r(7293);
        e.exports = !i(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      6916: (e, t, r) => {
        var i = r(4374),
          n = Function.prototype.call;
        e.exports = i
          ? n.bind(n)
          : function () {
              return n.apply(n, arguments);
            };
      },
      6530: (e, t, r) => {
        var i = r(9781),
          n = r(2597),
          s = Function.prototype,
          o = i && Object.getOwnPropertyDescriptor,
          a = n(s, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!i || (i && o(s, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1702: (e, t, r) => {
        var i = r(4374),
          n = Function.prototype,
          s = n.bind,
          o = n.call,
          a = i && s.bind(o, o);
        e.exports = i
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      5005: (e, t, r) => {
        var i = r(7854),
          n = r(614),
          s = function (e) {
            return n(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? s(i[e]) : i[e] && i[e][t];
        };
      },
      1246: (e, t, r) => {
        var i = r(648),
          n = r(8173),
          s = r(7497),
          o = r(5112)("iterator");
        e.exports = function (e) {
          if (null != e) return n(e, o) || n(e, "@@iterator") || s[i(e)];
        };
      },
      8554: (e, t, r) => {
        var i = r(6916),
          n = r(9662),
          s = r(9670),
          o = r(6330),
          a = r(1246),
          l = TypeError;
        e.exports = function (e, t) {
          var r = arguments.length < 2 ? a(e) : t;
          if (n(r)) return s(i(r, e));
          throw l(o(e) + " is not iterable");
        };
      },
      8173: (e, t, r) => {
        var i = r(9662);
        e.exports = function (e, t) {
          var r = e[t];
          return null == r ? void 0 : i(r);
        };
      },
      647: (e, t, r) => {
        var i = r(1702),
          n = r(7908),
          s = Math.floor,
          o = i("".charAt),
          a = i("".replace),
          l = i("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          d = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, r, i, u, p) {
          var h = r + e.length,
            f = i.length,
            v = d;
          return (
            void 0 !== u && ((u = n(u)), (v = c)),
            a(p, v, function (n, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, r);
                case "'":
                  return l(t, h);
                case "<":
                  c = u[l(a, 1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 === d) return n;
                  if (d > f) {
                    var p = s(d / 10);
                    return 0 === p
                      ? n
                      : p <= f
                      ? void 0 === i[p - 1]
                        ? o(a, 1)
                        : i[p - 1] + o(a, 1)
                      : n;
                  }
                  c = i[d - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      7854: (e, t, r) => {
        var i = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof r.g && r.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2597: (e, t, r) => {
        var i = r(1702),
          n = r(7908),
          s = i({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return s(n(e), t);
          };
      },
      3501: (e) => {
        e.exports = {};
      },
      490: (e, t, r) => {
        var i = r(5005);
        e.exports = i("document", "documentElement");
      },
      4664: (e, t, r) => {
        var i = r(9781),
          n = r(7293),
          s = r(317);
        e.exports =
          !i &&
          !n(function () {
            return (
              7 !=
              Object.defineProperty(s("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      8361: (e, t, r) => {
        var i = r(1702),
          n = r(7293),
          s = r(4326),
          o = Object,
          a = i("".split);
        e.exports = n(function () {
          return !o("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == s(e) ? a(e, "") : o(e);
            }
          : o;
      },
      9587: (e, t, r) => {
        var i = r(614),
          n = r(111),
          s = r(7674);
        e.exports = function (e, t, r) {
          var o, a;
          return (
            s &&
              i((o = t.constructor)) &&
              o !== r &&
              n((a = o.prototype)) &&
              a !== r.prototype &&
              s(e, a),
            e
          );
        };
      },
      2788: (e, t, r) => {
        var i = r(1702),
          n = r(614),
          s = r(5465),
          o = i(Function.toString);
        n(s.inspectSource) ||
          (s.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = s.inspectSource);
      },
      2423: (e, t, r) => {
        var i = r(2109),
          n = r(1702),
          s = r(3501),
          o = r(111),
          a = r(2597),
          l = r(3070).f,
          c = r(8006),
          d = r(1156),
          u = r(2050),
          p = r(9711),
          h = r(6677),
          f = !1,
          v = p("meta"),
          g = 0,
          m = function (e) {
            l(e, v, { value: { objectID: "O" + g++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (f = !0);
              var e = c.f,
                t = n([].splice),
                r = {};
              (r[v] = 1),
                e(r).length &&
                  ((c.f = function (r) {
                    for (var i = e(r), n = 0, s = i.length; n < s; n++)
                      if (i[n] === v) {
                        t(i, n, 1);
                        break;
                      }
                    return i;
                  }),
                  i(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: d.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, v)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                m(e);
              }
              return e[v].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, v)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                m(e);
              }
              return e[v].weakData;
            },
            onFreeze: function (e) {
              return h && f && u(e) && !a(e, v) && m(e), e;
            },
          });
        s[v] = !0;
      },
      9909: (e, t, r) => {
        var i,
          n,
          s,
          o = r(8536),
          a = r(7854),
          l = r(1702),
          c = r(111),
          d = r(8880),
          u = r(2597),
          p = r(5465),
          h = r(6200),
          f = r(3501),
          v = "Object already initialized",
          g = a.TypeError,
          m = a.WeakMap;
        if (o || p.state) {
          var b = p.state || (p.state = new m()),
            y = l(b.get),
            x = l(b.has),
            w = l(b.set);
          (i = function (e, t) {
            if (x(b, e)) throw new g(v);
            return (t.facade = e), w(b, e, t), t;
          }),
            (n = function (e) {
              return y(b, e) || {};
            }),
            (s = function (e) {
              return x(b, e);
            });
        } else {
          var E = h("state");
          (f[E] = !0),
            (i = function (e, t) {
              if (u(e, E)) throw new g(v);
              return (t.facade = e), d(e, E, t), t;
            }),
            (n = function (e) {
              return u(e, E) ? e[E] : {};
            }),
            (s = function (e) {
              return u(e, E);
            });
        }
        e.exports = {
          set: i,
          get: n,
          has: s,
          enforce: function (e) {
            return s(e) ? n(e) : i(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!c(t) || (r = n(t)).type !== e)
                throw g("Incompatible receiver, " + e + " required");
              return r;
            };
          },
        };
      },
      7659: (e, t, r) => {
        var i = r(5112),
          n = r(7497),
          s = i("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (n.Array === e || o[s] === e);
        };
      },
      3157: (e, t, r) => {
        var i = r(4326);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == i(e);
          };
      },
      614: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      4411: (e, t, r) => {
        var i = r(1702),
          n = r(7293),
          s = r(614),
          o = r(648),
          a = r(5005),
          l = r(2788),
          c = function () {},
          d = [],
          u = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          h = i(p.exec),
          f = !p.exec(c),
          v = function (e) {
            if (!s(e)) return !1;
            try {
              return u(c, d, e), !0;
            } catch (e) {
              return !1;
            }
          },
          g = function (e) {
            if (!s(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!h(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (g.sham = !0),
          (e.exports =
            !u ||
            n(function () {
              var e;
              return (
                v(v.call) ||
                !v(Object) ||
                !v(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? g
              : v);
      },
      4705: (e, t, r) => {
        var i = r(7293),
          n = r(614),
          s = /#|\.prototype\./,
          o = function (e, t) {
            var r = l[a(e)];
            return r == d || (r != c && (n(t) ? i(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(s, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          d = (o.POLYFILL = "P");
        e.exports = o;
      },
      111: (e, t, r) => {
        var i = r(614);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : i(e);
        };
      },
      1913: (e) => {
        e.exports = !1;
      },
      2190: (e, t, r) => {
        var i = r(5005),
          n = r(614),
          s = r(7976),
          o = r(3307),
          a = Object;
        e.exports = o
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = i("Symbol");
              return n(t) && s(t.prototype, a(e));
            };
      },
      408: (e, t, r) => {
        var i = r(9974),
          n = r(6916),
          s = r(9670),
          o = r(6330),
          a = r(7659),
          l = r(6244),
          c = r(7976),
          d = r(8554),
          u = r(1246),
          p = r(9212),
          h = TypeError,
          f = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          v = f.prototype;
        e.exports = function (e, t, r) {
          var g,
            m,
            b,
            y,
            x,
            w,
            E,
            S = r && r.that,
            C = !(!r || !r.AS_ENTRIES),
            T = !(!r || !r.IS_RECORD),
            O = !(!r || !r.IS_ITERATOR),
            k = !(!r || !r.INTERRUPTED),
            L = i(t, S),
            M = function (e) {
              return g && p(g, "normal", e), new f(!0, e);
            },
            A = function (e) {
              return C
                ? (s(e), k ? L(e[0], e[1], M) : L(e[0], e[1]))
                : k
                ? L(e, M)
                : L(e);
            };
          if (T) g = e.iterator;
          else if (O) g = e;
          else {
            if (!(m = u(e))) throw h(o(e) + " is not iterable");
            if (a(m)) {
              for (b = 0, y = l(e); y > b; b++)
                if ((x = A(e[b])) && c(v, x)) return x;
              return new f(!1);
            }
            g = d(e, m);
          }
          for (w = T ? e.next : g.next; !(E = n(w, g)).done; ) {
            try {
              x = A(E.value);
            } catch (e) {
              p(g, "throw", e);
            }
            if ("object" == typeof x && x && c(v, x)) return x;
          }
          return new f(!1);
        };
      },
      9212: (e, t, r) => {
        var i = r(6916),
          n = r(9670),
          s = r(8173);
        e.exports = function (e, t, r) {
          var o, a;
          n(e);
          try {
            if (!(o = s(e, "return"))) {
              if ("throw" === t) throw r;
              return r;
            }
            o = i(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw r;
          if (a) throw o;
          return n(o), r;
        };
      },
      3383: (e, t, r) => {
        "use strict";
        var i,
          n,
          s,
          o = r(7293),
          a = r(614),
          l = r(30),
          c = r(9518),
          d = r(8052),
          u = r(5112),
          p = r(1913),
          h = u("iterator"),
          f = !1;
        [].keys &&
          ("next" in (s = [].keys())
            ? (n = c(c(s))) !== Object.prototype && (i = n)
            : (f = !0)),
          null == i ||
          o(function () {
            var e = {};
            return i[h].call(e) !== e;
          })
            ? (i = {})
            : p && (i = l(i)),
          a(i[h]) ||
            d(i, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f });
      },
      7497: (e) => {
        e.exports = {};
      },
      6244: (e, t, r) => {
        var i = r(7466);
        e.exports = function (e) {
          return i(e.length);
        };
      },
      6339: (e, t, r) => {
        var i = r(7293),
          n = r(614),
          s = r(2597),
          o = r(9781),
          a = r(6530).CONFIGURABLE,
          l = r(2788),
          c = r(9909),
          d = c.enforce,
          u = c.get,
          p = Object.defineProperty,
          h =
            o &&
            !i(function () {
              return 8 !== p(function () {}, "length", { value: 8 }).length;
            }),
          f = String(String).split("String"),
          v = (e.exports = function (e, t, r) {
            "Symbol(" === String(t).slice(0, 7) &&
              (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              r && r.getter && (t = "get " + t),
              r && r.setter && (t = "set " + t),
              (!s(e, "name") || (a && e.name !== t)) &&
                (o
                  ? p(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              h &&
                r &&
                s(r, "arity") &&
                e.length !== r.arity &&
                p(e, "length", { value: r.arity });
            try {
              r && s(r, "constructor") && r.constructor
                ? o && p(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var i = d(e);
            return (
              s(i, "source") ||
                (i.source = f.join("string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = v(function () {
          return (n(this) && u(this).source) || l(this);
        }, "toString");
      },
      4758: (e) => {
        var t = Math.ceil,
          r = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var i = +e;
            return (i > 0 ? r : t)(i);
          };
      },
      133: (e, t, r) => {
        var i = r(7392),
          n = r(7293);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && i && i < 41)
            );
          });
      },
      8536: (e, t, r) => {
        var i = r(7854),
          n = r(614),
          s = r(2788),
          o = i.WeakMap;
        e.exports = n(o) && /native code/.test(s(o));
      },
      3009: (e, t, r) => {
        var i = r(7854),
          n = r(7293),
          s = r(1702),
          o = r(1340),
          a = r(3111).trim,
          l = r(1361),
          c = i.parseInt,
          d = i.Symbol,
          u = d && d.iterator,
          p = /^[+-]?0x/i,
          h = s(p.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (u &&
              !n(function () {
                c(Object(u));
              }));
        e.exports = f
          ? function (e, t) {
              var r = a(o(e));
              return c(r, t >>> 0 || (h(p, r) ? 16 : 10));
            }
          : c;
      },
      1574: (e, t, r) => {
        "use strict";
        var i = r(9781),
          n = r(1702),
          s = r(6916),
          o = r(7293),
          a = r(1956),
          l = r(5181),
          c = r(5296),
          d = r(7908),
          u = r(8361),
          p = Object.assign,
          h = Object.defineProperty,
          f = n([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              i &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    h({}, "a", {
                      enumerable: !0,
                      get: function () {
                        h(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              r = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (e[r] = 7),
              n.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[r] || a(p({}, t)).join("") != n
            );
          })
            ? function (e, t) {
                for (
                  var r = d(e), n = arguments.length, o = 1, p = l.f, h = c.f;
                  n > o;

                )
                  for (
                    var v,
                      g = u(arguments[o++]),
                      m = p ? f(a(g), p(g)) : a(g),
                      b = m.length,
                      y = 0;
                    b > y;

                  )
                    (v = m[y++]), (i && !s(h, g, v)) || (r[v] = g[v]);
                return r;
              }
            : p;
      },
      30: (e, t, r) => {
        var i,
          n = r(9670),
          s = r(6048),
          o = r(748),
          a = r(3501),
          l = r(490),
          c = r(317),
          d = r(6200),
          u = d("IE_PROTO"),
          p = function () {},
          h = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(h("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          v = function () {
            try {
              i = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v =
              "undefined" != typeof document
                ? document.domain && i
                  ? f(i)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(h("document.F=Object")),
                    e.close(),
                    e.F)
                : f(i);
            for (var r = o.length; r--; ) delete v.prototype[o[r]];
            return v();
          };
        (a[u] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var r;
              return (
                null !== e
                  ? ((p.prototype = n(e)),
                    (r = new p()),
                    (p.prototype = null),
                    (r[u] = e))
                  : (r = v()),
                void 0 === t ? r : s.f(r, t)
              );
            });
      },
      6048: (e, t, r) => {
        var i = r(9781),
          n = r(3353),
          s = r(3070),
          o = r(9670),
          a = r(5656),
          l = r(1956);
        t.f =
          i && !n
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var r, i = a(t), n = l(t), c = n.length, d = 0; c > d; )
                  s.f(e, (r = n[d++]), i[r]);
                return e;
              };
      },
      3070: (e, t, r) => {
        var i = r(9781),
          n = r(4664),
          s = r(3353),
          o = r(9670),
          a = r(4948),
          l = TypeError,
          c = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          u = "enumerable",
          p = "configurable",
          h = "writable";
        t.f = i
          ? s
            ? function (e, t, r) {
                if (
                  (o(e),
                  (t = a(t)),
                  o(r),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in r &&
                    h in r &&
                    !r.writable)
                ) {
                  var i = d(e, t);
                  i &&
                    i.writable &&
                    ((e[t] = r.value),
                    (r = {
                      configurable: p in r ? r.configurable : i.configurable,
                      enumerable: u in r ? r.enumerable : i.enumerable,
                      writable: !1,
                    }));
                }
                return c(e, t, r);
              }
            : c
          : function (e, t, r) {
              if ((o(e), (t = a(t)), o(r), n))
                try {
                  return c(e, t, r);
                } catch (e) {}
              if ("get" in r || "set" in r) throw l("Accessors not supported");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      1236: (e, t, r) => {
        var i = r(9781),
          n = r(6916),
          s = r(5296),
          o = r(9114),
          a = r(5656),
          l = r(4948),
          c = r(2597),
          d = r(4664),
          u = Object.getOwnPropertyDescriptor;
        t.f = i
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!n(s.f, e, t), e[t]);
            };
      },
      1156: (e, t, r) => {
        var i = r(4326),
          n = r(5656),
          s = r(8006).f,
          o = r(1589),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == i(e)
            ? (function (e) {
                try {
                  return s(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : s(n(e));
        };
      },
      8006: (e, t, r) => {
        var i = r(6324),
          n = r(748).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, n);
          };
      },
      5181: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      9518: (e, t, r) => {
        var i = r(2597),
          n = r(614),
          s = r(7908),
          o = r(6200),
          a = r(8544),
          l = o("IE_PROTO"),
          c = Object,
          d = c.prototype;
        e.exports = a
          ? c.getPrototypeOf
          : function (e) {
              var t = s(e);
              if (i(t, l)) return t[l];
              var r = t.constructor;
              return n(r) && t instanceof r
                ? r.prototype
                : t instanceof c
                ? d
                : null;
            };
      },
      2050: (e, t, r) => {
        var i = r(7293),
          n = r(111),
          s = r(4326),
          o = r(7556),
          a = Object.isExtensible,
          l = i(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!n(e) && (!o || "ArrayBuffer" != s(e)) && (!a || a(e));
              }
            : a;
      },
      7976: (e, t, r) => {
        var i = r(1702);
        e.exports = i({}.isPrototypeOf);
      },
      6324: (e, t, r) => {
        var i = r(1702),
          n = r(2597),
          s = r(5656),
          o = r(1318).indexOf,
          a = r(3501),
          l = i([].push);
        e.exports = function (e, t) {
          var r,
            i = s(e),
            c = 0,
            d = [];
          for (r in i) !n(a, r) && n(i, r) && l(d, r);
          for (; t.length > c; ) n(i, (r = t[c++])) && (~o(d, r) || l(d, r));
          return d;
        };
      },
      1956: (e, t, r) => {
        var i = r(6324),
          n = r(748);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, n);
          };
      },
      5296: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          n = i && !r.call({ 1: 2 }, 1);
        t.f = n
          ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
            }
          : r;
      },
      7674: (e, t, r) => {
        var i = r(1702),
          n = r(9670),
          s = r(6077);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  r = {};
                try {
                  (e = i(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(r, []),
                    (t = r instanceof Array);
                } catch (e) {}
                return function (r, i) {
                  return n(r), s(i), t ? e(r, i) : (r.__proto__ = i), r;
                };
              })()
            : void 0);
      },
      288: (e, t, r) => {
        "use strict";
        var i = r(1694),
          n = r(648);
        e.exports = i
          ? {}.toString
          : function () {
              return "[object " + n(this) + "]";
            };
      },
      2140: (e, t, r) => {
        var i = r(6916),
          n = r(614),
          s = r(111),
          o = TypeError;
        e.exports = function (e, t) {
          var r, a;
          if ("string" === t && n((r = e.toString)) && !s((a = i(r, e))))
            return a;
          if (n((r = e.valueOf)) && !s((a = i(r, e)))) return a;
          if ("string" !== t && n((r = e.toString)) && !s((a = i(r, e))))
            return a;
          throw o("Can't convert object to primitive value");
        };
      },
      3887: (e, t, r) => {
        var i = r(5005),
          n = r(1702),
          s = r(8006),
          o = r(5181),
          a = r(9670),
          l = n([].concat);
        e.exports =
          i("Reflect", "ownKeys") ||
          function (e) {
            var t = s.f(a(e)),
              r = o.f;
            return r ? l(t, r(e)) : t;
          };
      },
      7651: (e, t, r) => {
        var i = r(6916),
          n = r(9670),
          s = r(614),
          o = r(4326),
          a = r(2261),
          l = TypeError;
        e.exports = function (e, t) {
          var r = e.exec;
          if (s(r)) {
            var c = i(r, e, t);
            return null !== c && n(c), c;
          }
          if ("RegExp" === o(e)) return i(a, e, t);
          throw l("RegExp#exec called on incompatible receiver");
        };
      },
      2261: (e, t, r) => {
        "use strict";
        var i,
          n,
          s = r(6916),
          o = r(1702),
          a = r(1340),
          l = r(7066),
          c = r(2999),
          d = r(2309),
          u = r(30),
          p = r(9909).get,
          h = r(9441),
          f = r(7168),
          v = d("native-string-replace", String.prototype.replace),
          g = RegExp.prototype.exec,
          m = g,
          b = o("".charAt),
          y = o("".indexOf),
          x = o("".replace),
          w = o("".slice),
          E =
            ((n = /b*/g),
            s(g, (i = /a/), "a"),
            s(g, n, "a"),
            0 !== i.lastIndex || 0 !== n.lastIndex),
          S = c.BROKEN_CARET,
          C = void 0 !== /()??/.exec("")[1];
        (E || C || S || h || f) &&
          (m = function (e) {
            var t,
              r,
              i,
              n,
              o,
              c,
              d,
              h = this,
              f = p(h),
              T = a(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = h.lastIndex),
                (t = s(m, O, T)),
                (h.lastIndex = O.lastIndex),
                t
              );
            var k = f.groups,
              L = S && h.sticky,
              M = s(l, h),
              A = h.source,
              P = 0,
              $ = T;
            if (
              (L &&
                ((M = x(M, "y", "")),
                -1 === y(M, "g") && (M += "g"),
                ($ = w(T, h.lastIndex)),
                h.lastIndex > 0 &&
                  (!h.multiline ||
                    (h.multiline && "\n" !== b(T, h.lastIndex - 1))) &&
                  ((A = "(?: " + A + ")"), ($ = " " + $), P++),
                (r = new RegExp("^(?:" + A + ")", M))),
              C && (r = new RegExp("^" + A + "$(?!\\s)", M)),
              E && (i = h.lastIndex),
              (n = s(g, L ? r : h, $)),
              L
                ? n
                  ? ((n.input = w(n.input, P)),
                    (n[0] = w(n[0], P)),
                    (n.index = h.lastIndex),
                    (h.lastIndex += n[0].length))
                  : (h.lastIndex = 0)
                : E &&
                  n &&
                  (h.lastIndex = h.global ? n.index + n[0].length : i),
              C &&
                n &&
                n.length > 1 &&
                s(v, n[0], r, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (n[o] = void 0);
                }),
              n && k)
            )
              for (n.groups = c = u(null), o = 0; o < k.length; o++)
                c[(d = k[o])[0]] = n[d[1]];
            return n;
          }),
          (e.exports = m);
      },
      7066: (e, t, r) => {
        "use strict";
        var i = r(9670);
        e.exports = function () {
          var e = i(this),
            t = "";
          return (
            e.hasIndices && (t += "d"),
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.unicodeSets && (t += "v"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      2999: (e, t, r) => {
        var i = r(7293),
          n = r(7854).RegExp,
          s = i(function () {
            var e = n("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            s ||
            i(function () {
              return !n("a", "y").sticky;
            }),
          a =
            s ||
            i(function () {
              var e = n("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: s };
      },
      9441: (e, t, r) => {
        var i = r(7293),
          n = r(7854).RegExp;
        e.exports = i(function () {
          var e = n(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      7168: (e, t, r) => {
        var i = r(7293),
          n = r(7854).RegExp;
        e.exports = i(function () {
          var e = n("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      4488: (e) => {
        var t = TypeError;
        e.exports = function (e) {
          if (null == e) throw t("Can't call method on " + e);
          return e;
        };
      },
      8003: (e, t, r) => {
        var i = r(3070).f,
          n = r(2597),
          s = r(5112)("toStringTag");
        e.exports = function (e, t, r) {
          e && !r && (e = e.prototype),
            e && !n(e, s) && i(e, s, { configurable: !0, value: t });
        };
      },
      6200: (e, t, r) => {
        var i = r(2309),
          n = r(9711),
          s = i("keys");
        e.exports = function (e) {
          return s[e] || (s[e] = n(e));
        };
      },
      5465: (e, t, r) => {
        var i = r(7854),
          n = r(3072),
          s = "__core-js_shared__",
          o = i[s] || n(s, {});
        e.exports = o;
      },
      2309: (e, t, r) => {
        var i = r(1913),
          n = r(5465);
        (e.exports = function (e, t) {
          return n[e] || (n[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.23.5",
          mode: i ? "pure" : "global",
          copyright: "?? 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      8710: (e, t, r) => {
        var i = r(1702),
          n = r(9303),
          s = r(1340),
          o = r(4488),
          a = i("".charAt),
          l = i("".charCodeAt),
          c = i("".slice),
          d = function (e) {
            return function (t, r) {
              var i,
                d,
                u = s(o(t)),
                p = n(r),
                h = u.length;
              return p < 0 || p >= h
                ? e
                  ? ""
                  : void 0
                : (i = l(u, p)) < 55296 ||
                  i > 56319 ||
                  p + 1 === h ||
                  (d = l(u, p + 1)) < 56320 ||
                  d > 57343
                ? e
                  ? a(u, p)
                  : i
                : e
                ? c(u, p, p + 2)
                : d - 56320 + ((i - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: d(!1), charAt: d(!0) };
      },
      3111: (e, t, r) => {
        var i = r(1702),
          n = r(4488),
          s = r(1340),
          o = r(1361),
          a = i("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          d = RegExp(l + l + "*$"),
          u = function (e) {
            return function (t) {
              var r = s(n(t));
              return 1 & e && (r = a(r, c, "")), 2 & e && (r = a(r, d, "")), r;
            };
          };
        e.exports = { start: u(1), end: u(2), trim: u(3) };
      },
      1400: (e, t, r) => {
        var i = r(9303),
          n = Math.max,
          s = Math.min;
        e.exports = function (e, t) {
          var r = i(e);
          return r < 0 ? n(r + t, 0) : s(r, t);
        };
      },
      5656: (e, t, r) => {
        var i = r(8361),
          n = r(4488);
        e.exports = function (e) {
          return i(n(e));
        };
      },
      9303: (e, t, r) => {
        var i = r(4758);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : i(t);
        };
      },
      7466: (e, t, r) => {
        var i = r(9303),
          n = Math.min;
        e.exports = function (e) {
          return e > 0 ? n(i(e), 9007199254740991) : 0;
        };
      },
      7908: (e, t, r) => {
        var i = r(4488),
          n = Object;
        e.exports = function (e) {
          return n(i(e));
        };
      },
      7593: (e, t, r) => {
        var i = r(6916),
          n = r(111),
          s = r(2190),
          o = r(8173),
          a = r(2140),
          l = r(5112),
          c = TypeError,
          d = l("toPrimitive");
        e.exports = function (e, t) {
          if (!n(e) || s(e)) return e;
          var r,
            l = o(e, d);
          if (l) {
            if (
              (void 0 === t && (t = "default"), (r = i(l, e, t)), !n(r) || s(r))
            )
              return r;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), a(e, t);
        };
      },
      4948: (e, t, r) => {
        var i = r(7593),
          n = r(2190);
        e.exports = function (e) {
          var t = i(e, "string");
          return n(t) ? t : t + "";
        };
      },
      1694: (e, t, r) => {
        var i = {};
        (i[r(5112)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(i));
      },
      1340: (e, t, r) => {
        var i = r(648),
          n = String;
        e.exports = function (e) {
          if ("Symbol" === i(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return n(e);
        };
      },
      6330: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9711: (e, t, r) => {
        var i = r(1702),
          n = 0,
          s = Math.random(),
          o = i((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + s, 36);
        };
      },
      3307: (e, t, r) => {
        var i = r(133);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      3353: (e, t, r) => {
        var i = r(9781),
          n = r(7293);
        e.exports =
          i &&
          n(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      5112: (e, t, r) => {
        var i = r(7854),
          n = r(2309),
          s = r(2597),
          o = r(9711),
          a = r(133),
          l = r(3307),
          c = n("wks"),
          d = i.Symbol,
          u = d && d.for,
          p = l ? d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          if (!s(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && s(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : p(t));
          }
          return c[e];
        };
      },
      1361: (e) => {
        e.exports = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff";
      },
      7327: (e, t, r) => {
        "use strict";
        var i = r(2109),
          n = r(2092).filter;
        i(
          { target: "Array", proto: !0, forced: !r(1194)("filter") },
          {
            filter: function (e) {
              return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6992: (e, t, r) => {
        "use strict";
        var i = r(5656),
          n = r(1223),
          s = r(7497),
          o = r(9909),
          a = r(3070).f,
          l = r(654),
          c = r(1913),
          d = r(9781),
          u = "Array Iterator",
          p = o.set,
          h = o.getterFor(u);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: u, target: i(e), index: 0, kind: t });
          },
          function () {
            var e = h(this),
              t = e.target,
              r = e.kind,
              i = e.index++;
            return !t || i >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == r
              ? { value: i, done: !1 }
              : "values" == r
              ? { value: t[i], done: !1 }
              : { value: [i, t[i]], done: !1 };
          },
          "values"
        );
        var f = (s.Arguments = s.Array);
        if (
          (n("keys"), n("values"), n("entries"), !c && d && "values" !== f.name)
        )
          try {
            a(f, "name", { value: "values" });
          } catch (e) {}
      },
      5827: (e, t, r) => {
        "use strict";
        var i = r(2109),
          n = r(3671).left,
          s = r(9341),
          o = r(7392),
          a = r(5268);
        i(
          {
            target: "Array",
            proto: !0,
            forced: !s("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return n(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      8309: (e, t, r) => {
        var i = r(9781),
          n = r(6530).EXISTS,
          s = r(1702),
          o = r(3070).f,
          a = Function.prototype,
          l = s(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          d = s(c.exec);
        i &&
          !n &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return d(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      9601: (e, t, r) => {
        var i = r(2109),
          n = r(1574);
        i(
          { target: "Object", stat: !0, arity: 2, forced: Object.assign !== n },
          { assign: n }
        );
      },
      1539: (e, t, r) => {
        var i = r(1694),
          n = r(8052),
          s = r(288);
        i || n(Object.prototype, "toString", s, { unsafe: !0 });
      },
      1058: (e, t, r) => {
        var i = r(2109),
          n = r(3009);
        i({ global: !0, forced: parseInt != n }, { parseInt: n });
      },
      4916: (e, t, r) => {
        "use strict";
        var i = r(2109),
          n = r(2261);
        i({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
      },
      8783: (e, t, r) => {
        "use strict";
        var i = r(8710).charAt,
          n = r(1340),
          s = r(9909),
          o = r(654),
          a = "String Iterator",
          l = s.set,
          c = s.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: n(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              r = t.string,
              n = t.index;
            return n >= r.length
              ? { value: void 0, done: !0 }
              : ((e = i(r, n)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      4723: (e, t, r) => {
        "use strict";
        var i = r(6916),
          n = r(7007),
          s = r(9670),
          o = r(7466),
          a = r(1340),
          l = r(4488),
          c = r(8173),
          d = r(1530),
          u = r(7651);
        n("match", function (e, t, r) {
          return [
            function (t) {
              var r = l(this),
                n = null == t ? void 0 : c(t, e);
              return n ? i(n, t, r) : new RegExp(t)[e](a(r));
            },
            function (e) {
              var i = s(this),
                n = a(e),
                l = r(t, i, n);
              if (l.done) return l.value;
              if (!i.global) return u(i, n);
              var c = i.unicode;
              i.lastIndex = 0;
              for (var p, h = [], f = 0; null !== (p = u(i, n)); ) {
                var v = a(p[0]);
                (h[f] = v),
                  "" === v && (i.lastIndex = d(n, o(i.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : h;
            },
          ];
        });
      },
      5306: (e, t, r) => {
        "use strict";
        var i = r(2104),
          n = r(6916),
          s = r(1702),
          o = r(7007),
          a = r(7293),
          l = r(9670),
          c = r(614),
          d = r(9303),
          u = r(7466),
          p = r(1340),
          h = r(4488),
          f = r(1530),
          v = r(8173),
          g = r(647),
          m = r(7651),
          b = r(5112)("replace"),
          y = Math.max,
          x = Math.min,
          w = s([].concat),
          E = s([].push),
          S = s("".indexOf),
          C = s("".slice),
          T = "$0" === "a".replace(/./, "$0"),
          O = !!/./[b] && "" === /./[b]("a", "$0");
        o(
          "replace",
          function (e, t, r) {
            var s = O ? "$" : "$0";
            return [
              function (e, r) {
                var i = h(this),
                  s = null == e ? void 0 : v(e, b);
                return s ? n(s, e, i, r) : n(t, p(i), e, r);
              },
              function (e, n) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof n &&
                  -1 === S(n, s) &&
                  -1 === S(n, "$<")
                ) {
                  var h = r(t, o, a, n);
                  if (h.done) return h.value;
                }
                var v = c(n);
                v || (n = p(n));
                var b = o.global;
                if (b) {
                  var T = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var k = m(o, a);
                  if (null === k) break;
                  if ((E(O, k), !b)) break;
                  "" === p(k[0]) && (o.lastIndex = f(a, u(o.lastIndex), T));
                }
                for (var L, M = "", A = 0, P = 0; P < O.length; P++) {
                  for (
                    var $ = p((k = O[P])[0]),
                      z = y(x(d(k.index), a.length), 0),
                      I = [],
                      _ = 1;
                    _ < k.length;
                    _++
                  )
                    E(I, void 0 === (L = k[_]) ? L : String(L));
                  var N = k.groups;
                  if (v) {
                    var R = w([$], I, z, a);
                    void 0 !== N && E(R, N);
                    var j = p(i(n, void 0, R));
                  } else j = g($, a, z, I, N, n);
                  z >= A && ((M += C(a, A, z) + j), (A = z + $.length));
                }
                return M + C(a, A);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !T ||
            O
        );
      },
      1202: (e, t, r) => {
        "use strict";
        var i,
          n = r(7854),
          s = r(1702),
          o = r(9190),
          a = r(2423),
          l = r(7710),
          c = r(9320),
          d = r(111),
          u = r(2050),
          p = r(9909).enforce,
          h = r(8536),
          f = !n.ActiveXObject && "ActiveXObject" in n,
          v = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          g = l("WeakMap", v, c);
        if (h && f) {
          (i = c.getConstructor(v, "WeakMap", !0)), a.enable();
          var m = g.prototype,
            b = s(m.delete),
            y = s(m.has),
            x = s(m.get),
            w = s(m.set);
          o(m, {
            delete: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) ? x(this, e) : t.frozen.get(e)
                );
              }
              return x(this, e);
            },
            set: function (e, t) {
              if (d(e) && !u(e)) {
                var r = p(this);
                r.frozen || (r.frozen = new i()),
                  y(this, e) ? w(this, e, t) : r.frozen.set(e, t);
              } else w(this, e, t);
              return this;
            },
          });
        }
      },
      4129: (e, t, r) => {
        r(1202);
      },
      4747: (e, t, r) => {
        var i = r(7854),
          n = r(8324),
          s = r(8509),
          o = r(8533),
          a = r(8880),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in n) n[c] && l(i[c] && i[c].prototype);
        l(s);
      },
      3948: (e, t, r) => {
        var i = r(7854),
          n = r(8324),
          s = r(8509),
          o = r(6992),
          a = r(8880),
          l = r(5112),
          c = l("iterator"),
          d = l("toStringTag"),
          u = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== u)
                try {
                  a(e, c, u);
                } catch (t) {
                  e[c] = u;
                }
              if ((e[d] || a(e, d, t), n[t]))
                for (var r in o)
                  if (e[r] !== o[r])
                    try {
                      a(e, r, o[r]);
                    } catch (t) {
                      e[r] = o[r];
                    }
            }
          };
        for (var h in n) p(i[h] && i[h].prototype, h);
        p(s, "DOMTokenList");
      },
      1296: (e, t, r) => {
        var i = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = l || c || Function("return this")(),
          u = Object.prototype.toString,
          p = Math.max,
          h = Math.min,
          f = function () {
            return d.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function g(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == u.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var r = s.test(e);
          return r || o.test(e)
            ? a(e.slice(2), r ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            c = 0,
            d = !1,
            u = !1,
            m = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var r = i,
              s = n;
            return (i = n = void 0), (c = t), (o = e.apply(s, r));
          }
          function y(e) {
            return (c = e), (a = setTimeout(w, t)), d ? b(e) : o;
          }
          function x(e) {
            var r = e - l;
            return void 0 === l || r >= t || r < 0 || (u && e - c >= s);
          }
          function w() {
            var e = f();
            if (x(e)) return E(e);
            a = setTimeout(
              w,
              (function (e) {
                var r = t - (e - l);
                return u ? h(r, s - (e - c)) : r;
              })(e)
            );
          }
          function E(e) {
            return (a = void 0), m && i ? b(e) : ((i = n = void 0), o);
          }
          function S() {
            var e = f(),
              r = x(e);
            if (((i = arguments), (n = this), (l = e), r)) {
              if (void 0 === a) return y(l);
              if (u) return (a = setTimeout(w, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(w, t)), o;
          }
          return (
            (t = g(t) || 0),
            v(r) &&
              ((d = !!r.leading),
              (s = (u = "maxWait" in r) ? p(g(r.maxWait) || 0, t) : s),
              (m = "trailing" in r ? !!r.trailing : m)),
            (S.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (i = l = n = a = void 0);
            }),
            (S.flush = function () {
              return void 0 === a ? o : E(f());
            }),
            S
          );
        };
      },
      773: (e, t, r) => {
        var i = "__lodash_hash_undefined__",
          n = "[object Function]",
          s = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var d,
          u = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          f = c["__core-js_shared__"],
          v = (d = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          g = p.toString,
          m = h.hasOwnProperty,
          b = h.toString,
          y = RegExp(
            "^" +
              g
                .call(m)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = u.splice,
          w = M(c, "Map"),
          E = M(Object, "create");
        function S(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function C(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function T(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function O(e, t) {
          for (var r, i, n = e.length; n--; )
            if ((r = e[n][0]) === (i = t) || (r != r && i != i)) return n;
          return -1;
        }
        function k(e) {
          if (!P(e) || ((t = e), v && v in t)) return !1;
          var t,
            r =
              (function (e) {
                var t = P(e) ? b.call(e) : "";
                return t == n || t == s;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return r.test(
            (function (e) {
              if (null != e) {
                try {
                  return g.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function L(e, t) {
          var r,
            i,
            n = e.__data__;
          return (
            "string" == (i = typeof (r = t)) ||
            "number" == i ||
            "symbol" == i ||
            "boolean" == i
              ? "__proto__" !== r
              : null === r
          )
            ? n["string" == typeof t ? "string" : "hash"]
            : n.map;
        }
        function M(e, t) {
          var r = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return k(r) ? r : void 0;
        }
        function A(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var r = function () {
            var i = arguments,
              n = t ? t.apply(this, i) : i[0],
              s = r.cache;
            if (s.has(n)) return s.get(n);
            var o = e.apply(this, i);
            return (r.cache = s.set(n, o)), o;
          };
          return (r.cache = new (A.Cache || T)()), r;
        }
        function P(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (S.prototype.clear = function () {
          this.__data__ = E ? E(null) : {};
        }),
          (S.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (S.prototype.get = function (e) {
            var t = this.__data__;
            if (E) {
              var r = t[e];
              return r === i ? void 0 : r;
            }
            return m.call(t, e) ? t[e] : void 0;
          }),
          (S.prototype.has = function (e) {
            var t = this.__data__;
            return E ? void 0 !== t[e] : m.call(t, e);
          }),
          (S.prototype.set = function (e, t) {
            return (this.__data__[e] = E && void 0 === t ? i : t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = [];
          }),
          (C.prototype.delete = function (e) {
            var t = this.__data__,
              r = O(t, e);
            return (
              !(r < 0) && (r == t.length - 1 ? t.pop() : x.call(t, r, 1), !0)
            );
          }),
          (C.prototype.get = function (e) {
            var t = this.__data__,
              r = O(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (C.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (C.prototype.set = function (e, t) {
            var r = this.__data__,
              i = O(r, e);
            return i < 0 ? r.push([e, t]) : (r[i][1] = t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = {
              hash: new S(),
              map: new (w || C)(),
              string: new S(),
            };
          }),
          (T.prototype.delete = function (e) {
            return L(this, e).delete(e);
          }),
          (T.prototype.get = function (e) {
            return L(this, e).get(e);
          }),
          (T.prototype.has = function (e) {
            return L(this, e).has(e);
          }),
          (T.prototype.set = function (e, t) {
            return L(this, e).set(e, t), this;
          }),
          (A.Cache = T),
          (e.exports = A);
      },
      3096: (e, t, r) => {
        var i = "Expected a function",
          n = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = c || d || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          f = Math.min,
          v = function () {
            return u.Date.now();
          };
        function g(e, t, r) {
          var n,
            s,
            o,
            a,
            l,
            c,
            d = 0,
            u = !1,
            p = !1,
            g = !0;
          if ("function" != typeof e) throw new TypeError(i);
          function y(t) {
            var r = n,
              i = s;
            return (n = s = void 0), (d = t), (a = e.apply(i, r));
          }
          function x(e) {
            return (d = e), (l = setTimeout(E, t)), u ? y(e) : a;
          }
          function w(e) {
            var r = e - c;
            return void 0 === c || r >= t || r < 0 || (p && e - d >= o);
          }
          function E() {
            var e = v();
            if (w(e)) return S(e);
            l = setTimeout(
              E,
              (function (e) {
                var r = t - (e - c);
                return p ? f(r, o - (e - d)) : r;
              })(e)
            );
          }
          function S(e) {
            return (l = void 0), g && n ? y(e) : ((n = s = void 0), a);
          }
          function C() {
            var e = v(),
              r = w(e);
            if (((n = arguments), (s = this), (c = e), r)) {
              if (void 0 === l) return x(c);
              if (p) return (l = setTimeout(E, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(E, t)), a;
          }
          return (
            (t = b(t) || 0),
            m(r) &&
              ((u = !!r.leading),
              (o = (p = "maxWait" in r) ? h(b(r.maxWait) || 0, t) : o),
              (g = "trailing" in r ? !!r.trailing : g)),
            (C.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (d = 0),
                (n = c = s = l = void 0);
            }),
            (C.flush = function () {
              return void 0 === l ? a : S(v());
            }),
            C
          );
        }
        function m(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (m(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = m(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(n, "");
          var r = o.test(e);
          return r || a.test(e)
            ? l(e.slice(2), r ? 2 : 8)
            : s.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var n = !0,
            s = !0;
          if ("function" != typeof e) throw new TypeError(i);
          return (
            m(r) &&
              ((n = "leading" in r ? !!r.leading : n),
              (s = "trailing" in r ? !!r.trailing : s)),
            g(e, t, { leading: n, maxWait: t, trailing: s })
          );
        };
      },
    },
    t = {};
  function r(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var s = (t[i] = { exports: {} });
    return e[i](s, s.exports, r), s.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var i in t)
        r.o(t, i) &&
          !r.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      let e = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
          );
        },
      };
      let t = !0,
        i = (e = 500) => {
          let r = document.querySelector("body");
          if (t) {
            let i = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < i.length; e++) {
                i[e].style.paddingRight = "0px";
              }
              (r.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (t = !1),
              setTimeout(function () {
                t = !0;
              }, e);
          }
        },
        n = (e = 500) => {
          let r = document.querySelector("body");
          if (t) {
            let i = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (r.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (t = !1),
              setTimeout(function () {
                t = !0;
              }, e);
          }
        };
      function s(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function o(e) {
        return e.filter(function (e, t, r) {
          return r.indexOf(e) === t;
        });
      }
      let a = (e, t = !1, r = 500, n = 0) => {
        const o = document.querySelector(e);
        if (o) {
          let a = "",
            l = 0;
          t &&
            ((a = "header.header"),
            (l = document.querySelector(a).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: r,
            header: a,
            offset: n,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (i(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(o, "", c);
          else {
            let e = o.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
          }
          s(`[gotoBlock]: ????????...???????? ?? ${e}`);
        } else s(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
      };
      function l(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function c(e = {}, t = {}) {
        Object.keys(t).forEach((r) => {
          void 0 === e[r]
            ? (e[r] = t[r])
            : l(t[r]) &&
              l(e[r]) &&
              Object.keys(t[r]).length > 0 &&
              c(e[r], t[r]);
        });
      }
      const d = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function u() {
        const e = "undefined" != typeof document ? document : {};
        return c(e, d), e;
      }
      const p = {
        document: d,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function h() {
        const e = "undefined" != typeof window ? window : {};
        return c(e, p), e;
      }
      class f extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function v(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...v(e)) : t.push(e);
          }),
          t
        );
      }
      function g(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function m(e, t) {
        const r = h(),
          i = u();
        let n = [];
        if (!t && e instanceof f) return e;
        if (!e) return new f(n);
        if ("string" == typeof e) {
          const r = e.trim();
          if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let e = "div";
            0 === r.indexOf("<li") && (e = "ul"),
              0 === r.indexOf("<tr") && (e = "tbody"),
              (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (e = "tr"),
              0 === r.indexOf("<tbody") && (e = "table"),
              0 === r.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = r;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const r = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) r.push(i[e]);
              return r;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === r || e === i) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof f) return e;
          n = e;
        }
        return new f(
          (function (e) {
            const t = [];
            for (let r = 0; r < e.length; r += 1)
              -1 === t.indexOf(e[r]) && t.push(e[r]);
            return t;
          })(n)
        );
      }
      m.fn = f.prototype;
      const b = "resize scroll".split(" ");
      function y(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              b.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : m(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      y("click"),
        y("blur"),
        y("focus"),
        y("focusin"),
        y("focusout"),
        y("keyup"),
        y("keydown"),
        y("keypress"),
        y("submit"),
        y("change"),
        y("mousedown"),
        y("mousemove"),
        y("mouseup"),
        y("mouseenter"),
        y("mouseleave"),
        y("mouseout"),
        y("mouseover"),
        y("touchstart"),
        y("touchend"),
        y("touchmove"),
        y("resize"),
        y("scroll");
      const x = {
        addClass: function (...e) {
          const t = v(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = v(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = v(e.map((e) => e.split(" ")));
          return (
            g(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = v(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let r = 0; r < this.length; r += 1)
            if (2 === arguments.length) this[r].setAttribute(e, t);
            else
              for (const t in e)
                (this[r][t] = e[t]), this[r].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, r, i, n] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), m(t).is(r))) i.apply(t, n);
            else {
              const e = m(t).parents();
              for (let t = 0; t < e.length; t += 1)
                m(e[t]).is(r) && i.apply(e[t], n);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, n] = e), (r = void 0)),
            n || (n = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (r)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  t.addEventListener(e, s, n);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, r, i, n] = e;
          "function" == typeof e[1] && (([t, i, n] = e), (r = void 0)),
            n || (n = !1);
          const s = t.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let o;
              if (
                (!r && s.dom7Listeners
                  ? (o = s.dom7Listeners[t])
                  : r && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const r = o[e];
                  (i && r.listener === i) ||
                  (i &&
                    r.listener &&
                    r.listener.dom7proxy &&
                    r.listener.dom7proxy === i)
                    ? (s.removeEventListener(t, r.proxyListener, n),
                      o.splice(e, 1))
                    : i ||
                      (s.removeEventListener(t, r.proxyListener, n),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = h(),
            r = e[0].split(" "),
            i = e[1];
          for (let n = 0; n < r.length; n += 1) {
            const s = r[n];
            for (let r = 0; r < this.length; r += 1) {
              const n = this[r];
              if (t.CustomEvent) {
                const r = new t.CustomEvent(s, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(r),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function r(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", r));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = h();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = h(),
              t = u(),
              r = this[0],
              i = r.getBoundingClientRect(),
              n = t.body,
              s = r.clientTop || n.clientTop || 0,
              o = r.clientLeft || n.clientLeft || 0,
              a = r === e ? e.scrollY : r.scrollTop,
              l = r === e ? e.scrollX : r.scrollLeft;
            return { top: i.top + a - s, left: i.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const r = h();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, r) => {
                e.apply(t, [t, r]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = h(),
            r = u(),
            i = this[0];
          let n, s;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (n = m(e), s = 0; s < n.length; s += 1)
              if (n[s] === i) return !0;
            return !1;
          }
          if (e === r) return i === r;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof f) {
            for (n = e.nodeType ? [e] : e, s = 0; s < n.length; s += 1)
              if (n[s] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return m([]);
          if (e < 0) {
            const r = t + e;
            return m(r < 0 ? [] : [this[r]]);
          }
          return m([this[e]]);
        },
        append: function (...e) {
          let t;
          const r = u();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = r.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof f)
                for (let r = 0; r < t.length; r += 1) this[e].appendChild(t[r]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = u();
          let r, i;
          for (r = 0; r < this.length; r += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[r].insertBefore(n.childNodes[i], this[r].childNodes[0]);
            } else if (e instanceof f)
              for (i = 0; i < e.length; i += 1)
                this[r].insertBefore(e[i], this[r].childNodes[0]);
            else this[r].insertBefore(e, this[r].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                m(this[0].nextElementSibling).is(e)
                ? m([this[0].nextElementSibling])
                : m([])
              : this[0].nextElementSibling
              ? m([this[0].nextElementSibling])
              : m([])
            : m([]);
        },
        nextAll: function (e) {
          const t = [];
          let r = this[0];
          if (!r) return m([]);
          for (; r.nextElementSibling; ) {
            const i = r.nextElementSibling;
            e ? m(i).is(e) && t.push(i) : t.push(i), (r = i);
          }
          return m(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && m(t.previousElementSibling).is(e)
                ? m([t.previousElementSibling])
                : m([])
              : t.previousElementSibling
              ? m([t.previousElementSibling])
              : m([]);
          }
          return m([]);
        },
        prevAll: function (e) {
          const t = [];
          let r = this[0];
          if (!r) return m([]);
          for (; r.previousElementSibling; ) {
            const i = r.previousElementSibling;
            e ? m(i).is(e) && t.push(i) : t.push(i), (r = i);
          }
          return m(t);
        },
        parent: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1)
            null !== this[r].parentNode &&
              (e
                ? m(this[r].parentNode).is(e) && t.push(this[r].parentNode)
                : t.push(this[r].parentNode));
          return m(t);
        },
        parents: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            let i = this[r].parentNode;
            for (; i; )
              e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return m(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? m([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            const i = this[r].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return m(t);
        },
        children: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            const i = this[r].children;
            for (let r = 0; r < i.length; r += 1)
              (e && !m(i[r]).is(e)) || t.push(i[r]);
          }
          return m(t);
        },
        filter: function (e) {
          return m(g(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(x).forEach((e) => {
        Object.defineProperty(m.fn, e, { value: x[e], writable: !0 });
      });
      const w = m;
      function E(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function S() {
        return Date.now();
      }
      function C(e, t) {
        void 0 === t && (t = "x");
        const r = h();
        let i, n, s;
        const o = (function (e) {
          const t = h();
          let r;
          return (
            t.getComputedStyle && (r = t.getComputedStyle(e, null)),
            !r && e.currentStyle && (r = e.currentStyle),
            r || (r = e.style),
            r
          );
        })(e);
        return (
          r.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new r.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = s.toString().split(","))),
          "x" === t &&
            (n = r.WebKitCSSMatrix
              ? s.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (n = r.WebKitCSSMatrix
              ? s.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          n || 0
        );
      }
      function T(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function O(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function k() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && !O(i)) {
            const r = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                s = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== s &&
                s.enumerable &&
                (T(e[n]) && T(i[n])
                  ? i[n].__swiper__
                    ? (e[n] = i[n])
                    : k(e[n], i[n])
                  : !T(e[n]) && T(i[n])
                  ? ((e[n] = {}),
                    i[n].__swiper__ ? (e[n] = i[n]) : k(e[n], i[n]))
                  : (e[n] = i[n]));
            }
          }
        }
        return e;
      }
      function L(e, t, r) {
        e.style.setProperty(t, r);
      }
      function M(e) {
        let { swiper: t, targetPosition: r, side: i } = e;
        const n = h(),
          s = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = s + c * (r - s);
            if ((d(p, r) && (p = r), t.wrapperEl.scrollTo({ [i]: p }), d(p, r)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: p });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(u);
          };
        u();
      }
      let A, P, $;
      function z() {
        return (
          A ||
            (A = (function () {
              const e = h(),
                t = u();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const r = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, r);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          A
        );
      }
      function I(e) {
        return (
          void 0 === e && (e = {}),
          P ||
            (P = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const r = z(),
                i = h(),
                n = i.navigator.platform,
                s = t || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = s.match(/(iPad).*OS\s([\d_]+)/);
              const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === n;
              let v = "MacIntel" === n;
              return (
                !d &&
                  v &&
                  r.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((d = s.match(/(Version)\/([\d.]+)/)),
                  d || (d = [0, 1, "13_0_0"]),
                  (v = !1)),
                c && !f && ((o.os = "android"), (o.android = !0)),
                (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          P
        );
      }
      function _() {
        return (
          $ ||
            ($ = (function () {
              const e = h();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          $
        );
      }
      const N = {
        on(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = r ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][n](t);
            }),
            i
          );
        },
        once(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
              s[o] = arguments[o];
            t.apply(i, s);
          }
          return (n.__emitterProxy = t), i.on(e, n, r);
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const i = t ? "unshift" : "push";
          return (
            r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed
            ? r
            : r.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (r.eventsListeners[e] = [])
                  : r.eventsListeners[e] &&
                    r.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        r.eventsListeners[e].splice(n, 1);
                    });
              }),
              r)
            : r;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, i;
          for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
            s[o] = arguments[o];
          "string" == typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (r = s.slice(1, s.length)), (i = e))
            : ((t = s[0].events), (r = s[0].data), (i = s[0].context || e)),
            r.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...r]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, r);
                  });
            }),
            e
          );
        },
      };
      const R = {
        updateSize: function () {
          const e = this;
          let t, r;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (r =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === r && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (r =
                r -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(r) && (r = 0),
              Object.assign(e, {
                width: t,
                height: r,
                size: e.isHorizontal() ? t : r,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function r(e, r) {
            return parseFloat(e.getPropertyValue(t(r)) || 0);
          }
          const i = e.params,
            { $wrapperEl: n, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = n.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let p = [];
          const h = [],
            f = [];
          let v = i.slidesOffsetBefore;
          "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
          let g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          const m = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = i.spaceBetween,
            x = -v,
            w = 0,
            E = 0;
          if (void 0 === s) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * s),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (L(e.wrapperEl, "--swiper-centered-offset-before", ""),
              L(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const S = i.grid && i.grid.rows > 1 && e.grid;
          let C;
          S && e.grid.initSlides(u);
          const T =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < u; n += 1) {
            C = 0;
            const o = d.eq(n);
            if (
              (S && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                T && (d[n].style[t("width")] = "");
                const s = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = r(s, "width"),
                    t = r(s, "padding-left"),
                    i = r(s, "padding-right"),
                    n = r(s, "margin-left"),
                    a = r(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + n + a;
                  else {
                    const { clientWidth: r, offsetWidth: s } = o[0];
                    C = e + t + i + n + a + (s - r);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  i.roundLengths && (C = Math.floor(C));
              } else
                (C = (s - (i.slidesPerView - 1) * y) / i.slidesPerView),
                  i.roundLengths && (C = Math.floor(C)),
                  d[n] && (d[n].style[t("width")] = `${C}px`);
              d[n] && (d[n].swiperSlideSize = C),
                f.push(C),
                i.centeredSlides
                  ? ((x = x + C / 2 + w / 2 + y),
                    0 === w && 0 !== n && (x = x - s / 2 - y),
                    0 === n && (x = x - s / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    i.roundLengths && (x = Math.floor(x)),
                    E % i.slidesPerGroup == 0 && p.push(x),
                    h.push(x))
                  : (i.roundLengths && (x = Math.floor(x)),
                    (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    h.push(x),
                    (x = x + C + y)),
                (e.virtualSize += C + y),
                (w = C),
                (E += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + g),
            o &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            S && e.grid.updateWrapperSize(C, p, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < p.length; r += 1) {
              let n = p[r];
              i.roundLengths && (n = Math.floor(n)),
                p[r] <= e.virtualSize - s && t.push(n);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
            const r = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
              [r]: `${y}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -v : e > t ? t + g : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, r) => {
                p[r] = e - t;
              }),
                h.forEach((e, r) => {
                  h[r] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            L(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              L(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + r));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            p.length !== m &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              r = e.$el.hasClass(t);
            u <= i.maxBackfaceHiddenSlides
              ? r || e.$el.addClass(t)
              : r && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            r = [],
            i = t.virtual && t.params.virtual.enabled;
          let n,
            s = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || w([])).each((e) => {
                r.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                r.push(o(e));
              }
          else r.push(o(t.activeIndex));
          for (n = 0; n < r.length; n += 1)
            if (void 0 !== r[n]) {
              const e = r[n].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset = e.isHorizontal()
              ? t[r].offsetLeft
              : t[r].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            r = t.params,
            { slides: i, rtlTranslate: n, snapGrid: s } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          n && (o = e),
            i.removeClass(r.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (o + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + r.spaceBetween),
              d =
                (o - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + r.spaceBetween),
              u = -(o - l),
              p = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (u <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(r.slideVisibleClass)),
              (a.progress = n ? -c : c),
              (a.originalProgress = n ? -d : d);
          }
          t.visibleSlides = w(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * r) || 0;
          }
          const r = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === i
            ? ((n = 0), (s = !0), (o = !0))
            : ((n = (e - t.minTranslate()) / i), (s = n <= 0), (o = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: s, isEnd: o }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: r,
              $wrapperEl: i,
              activeIndex: n,
              realIndex: s,
            } = e,
            o = e.virtual && r.virtual.enabled;
          let a;
          t.removeClass(
            `${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${r.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            a.addClass(r.slideActiveClass),
            r.loop &&
              (a.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(r.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${r.slideClass}`)
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(r.slideNextClass));
          let c = a
            .prevAll(`.${r.slideClass}`)
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(r.slidePrevClass)),
            r.loop &&
              (l.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${
                        r.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicateNextClass)
                : i
                    .children(
                      `.${r.slideClass}.${
                        r.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicateNextClass),
              c.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${
                        r.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${r.slideClass}.${
                        r.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: n,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (d = e)
                  : r >= i[e] && r < i[e + 1] && (d = e + 1)
                : r >= i[e] && (d = e);
            s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(r) >= 0) c = n.indexOf(r);
          else {
            const e = Math.min(s.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / s.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            r = t.params,
            i = w(e).closest(`.${r.slideClass}`)[0];
          let n,
            s = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (s = !0), (n = e);
                break;
              }
          if (!i || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  w(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            r.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const j = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: r,
            translate: i,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return r ? -i : i;
          if (t.cssMode) return i;
          let s = C(n[0], e);
          return r && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const r = this,
            {
              rtlTranslate: i,
              params: n,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = r;
          let l,
            c = 0,
            d = 0;
          r.isHorizontal() ? (c = i ? -e : e) : (d = e),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  r.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (r.previousTranslate = r.translate),
            (r.translate = r.isHorizontal() ? c : d);
          const u = r.maxTranslate() - r.minTranslate();
          (l = 0 === u ? 0 : (e - r.minTranslate()) / u),
            l !== a && r.updateProgress(e),
            r.emit("setTranslate", r.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, r, i, n) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            void 0 === i && (i = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let d;
          if (
            ((d = i && e > l ? l : i && e < c ? c : e),
            s.updateProgress(d),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!s.support.smoothScroll)
                return (
                  M({
                    swiper: s,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(d),
                r &&
                  (s.emit("beforeTransitionStart", t, n),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(d),
                r &&
                  (s.emit("beforeTransitionStart", t, n),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        r && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function W(e) {
        let { swiper: t, runCallbacks: r, direction: i, step: n } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${n}`),
          r && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`),
            "next" === a
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      const B = {
        slideTo: function (e, t, r, i, n) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!f && !i && !n)
          )
            return !1;
          const v = Math.min(s.params.slidesPerGroupSkip, o);
          let g = v + Math.floor((o - v) / s.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              r &&
              s.emit("beforeSlideChangeStart");
          const m = -l[g];
          if ((s.updateProgress(m), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * m),
                r = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= r && t < i - (i - r) / 2
                  ? (o = e)
                  : t >= r && t < i && (o = e + 1)
                : t >= r && (o = e);
            }
          if (s.initialized && o !== u) {
            if (!s.allowSlideNext && m < s.translate && m < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              m > s.translate &&
              m > s.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > u ? "next" : o < u ? "prev" : "reset"),
            (p && -m === s.translate) || (!p && m === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(m),
              "reset" !== b && (s.transitionStart(r, b), s.transitionEnd(r, b)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              r = p ? m : -m;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = r),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  M({ swiper: s, targetPosition: r, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(m),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(r, b),
            0 === t
              ? s.transitionEnd(r, b)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(r, b));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, r, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            "string" == typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let s = e;
          return n.params.loop && (s += n.loopedSlides), n.slideTo(s, t, r, i);
        },
        slideNext: function (e, t, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: n, enabled: s, params: o } = i;
          if (!s) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (n && o.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return o.rewind && i.isEnd
            ? i.slideTo(0, e, t, r)
            : i.slideTo(i.activeIndex + l, e, t, r);
        },
        slidePrev: function (e, t, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: n,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (n.loop) {
            if (s && n.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? i.translate : -i.translate),
            p = o.map((e) => d(e));
          let h = o[p.indexOf(u) - 1];
          if (void 0 === h && n.cssMode) {
            let e;
            o.forEach((t, r) => {
              u >= t && (e = r);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== h &&
              ((f = a.indexOf(h)),
              f < 0 && (f = i.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && i.isBeginning)
          ) {
            const n =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(n, e, t, r);
          }
          return i.slideTo(f, e, t, r);
        },
        slideReset: function (e, t, r) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, r)
          );
        },
        slideToClosest: function (e, t, r, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const n = this;
          let s = n.activeIndex;
          const o = Math.min(n.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            l - e > (n.snapGrid[a + 1] - e) * i &&
              (s += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            l - e <= (n.snapGrid[a] - e) * i && (s -= n.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, n.slidesGrid.length - 1)),
            n.slideTo(s, e, t, r)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: r } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              w(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - i / 2 ||
                  s > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (s = r
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    E(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - i
                ? (e.loopFix(),
                  (s = r
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      const D = {
        loopCreate: function () {
          const e = this,
            t = u(),
            { params: r, $wrapperEl: i } = e,
            n = i.children().length > 0 ? w(i.children()[0].parentNode) : i;
          n.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
          let s = n.children(`.${r.slideClass}`);
          if (r.loopFillGroupWithBlank) {
            const e = r.slidesPerGroup - (s.length % r.slidesPerGroup);
            if (e !== r.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = w(t.createElement("div")).addClass(
                  `${r.slideClass} ${r.slideBlankClass}`
                );
                n.append(e);
              }
              s = n.children(`.${r.slideClass}`);
            }
          }
          "auto" !== r.slidesPerView ||
            r.loopedSlides ||
            (r.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(r.loopedSlides || r.slidesPerView, 10)
            )),
            (e.loopedSlides += r.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          const o = [],
            a = [];
          s.each((t, r) => {
            const i = w(t);
            r < e.loopedSlides && a.push(t),
              r < s.length && r >= s.length - e.loopedSlides && o.push(t),
              i.attr("data-swiper-slide-index", r);
          });
          for (let e = 0; e < a.length; e += 1)
            n.append(w(a[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            n.prepend(w(o[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: r,
            loopedSlides: i,
            allowSlidePrev: n,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = r.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= r.length - i) {
            (l = -r.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: r } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function F(e) {
        const t = this,
          r = u(),
          i = h(),
          n = t.touchEventsData,
          { params: s, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = w(l.target);
        if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = w(e.path[0]));
        const d = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          p = !(!l.target || !l.target.shadowRoot);
        if (
          s.noSwiping &&
          (p
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(r) {
                    if (!r || r === u() || r === h()) return null;
                    r.assignedSlot && (r = r.assignedSlot);
                    const i = r.closest(e);
                    return i || r.getRootNode
                      ? i || t(r.getRootNode().host)
                      : null;
                  })(t)
                );
              })(d, c[0])
            : c.closest(d)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const f = o.currentX,
          v = o.currentY,
          g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (g && (f <= m || f >= i.innerWidth - m)) {
          if ("prevent" !== g) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = f),
          (o.startY = v),
          (n.touchStartTime = S()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
            r.activeElement &&
              w(r.activeElement).is(n.focusableElements) &&
              r.activeElement !== c[0] &&
              r.activeElement.blur();
          const i = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function G(e) {
        const t = u(),
          r = this,
          i = r.touchEventsData,
          { params: n, touches: s, rtlTranslate: o, enabled: a } = r;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            r.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          p = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = d), void (s.startY = p);
        if (!r.allowTouchMove)
          return (
            w(l.target).is(i.focusableElements) || (r.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(s, {
                startX: d,
                startY: p,
                currentX: d,
                currentY: p,
              }),
              (i.touchStartTime = S()))
            )
          );
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (r.isVertical()) {
            if (
              (p < s.startY && r.translate <= r.maxTranslate()) ||
              (p > s.startY && r.translate >= r.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < s.startX && r.translate <= r.maxTranslate()) ||
            (d > s.startX && r.translate >= r.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          w(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (r.allowClick = !1);
        if (
          (i.allowTouchCallbacks && r.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = d), (s.currentY = p);
        const h = s.currentX - s.startX,
          f = s.currentY - s.startY;
        if (
          r.params.threshold &&
          Math.sqrt(h ** 2 + f ** 2) < r.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (r.isHorizontal() && s.currentY === s.startY) ||
          (r.isVertical() && s.currentX === s.startX)
            ? (i.isScrolling = !1)
            : h * h + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
              (i.isScrolling = r.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (i.isScrolling && r.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (r.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          i.isMoved ||
            (n.loop && !n.cssMode && r.loopFix(),
            (i.startTranslate = r.getTranslate()),
            r.setTransition(0),
            r.animating &&
              r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
              r.setGrabCursor(!0),
            r.emit("sliderFirstMove", l)),
          r.emit("sliderMove", l),
          (i.isMoved = !0);
        let v = r.isHorizontal() ? h : f;
        (s.diff = v),
          (v *= n.touchRatio),
          o && (v = -v),
          (r.swipeDirection = v > 0 ? "prev" : "next"),
          (i.currentTranslate = v + i.startTranslate);
        let g = !0,
          m = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (m = 0),
          v > 0 && i.currentTranslate > r.minTranslate()
            ? ((g = !1),
              n.resistance &&
                (i.currentTranslate =
                  r.minTranslate() -
                  1 +
                  (-r.minTranslate() + i.startTranslate + v) ** m))
            : v < 0 &&
              i.currentTranslate < r.maxTranslate() &&
              ((g = !1),
              n.resistance &&
                (i.currentTranslate =
                  r.maxTranslate() +
                  1 -
                  (r.maxTranslate() - i.startTranslate - v) ** m)),
          g && (l.preventedByNestedSwiper = !0),
          !r.allowSlideNext &&
            "next" === r.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !r.allowSlidePrev &&
            "prev" === r.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          r.allowSlidePrev ||
            r.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (i.currentTranslate = i.startTranslate),
              void (s.diff = r.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && r.freeMode) ||
            n.watchSlidesProgress) &&
            (r.updateActiveIndex(), r.updateSlidesClasses()),
          r.params.freeMode &&
            n.freeMode.enabled &&
            r.freeMode &&
            r.freeMode.onTouchMove(),
          r.updateProgress(i.currentTranslate),
          r.setTranslate(i.currentTranslate));
      }
      function V(e) {
        const t = this,
          r = t.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          r.allowTouchCallbacks && t.emit("touchEnd", l),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        )
          return (
            r.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (r.isMoved = !1),
            void (r.startMoving = !1)
          );
        i.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = S(),
          d = c - r.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - r.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((r.lastClickTime = S()),
          E(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            r.currentTranslate === r.startTranslate)
        )
          return (
            (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1)
          );
        let u;
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (u = i.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -r.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
            : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          v = null;
        i.rewind &&
          (t.isBeginning
            ? (v =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const g = (u - o[p]) / h,
          m = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (g >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? f : p + m)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (g > 1 - i.longSwipesRatio
                ? t.slideTo(p + m)
                : null !== v && g < 0 && Math.abs(g) > i.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + m)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + m),
              "prev" === t.swipeDirection && t.slideTo(null !== v ? v : p));
        }
      }
      function H() {
        const e = this,
          { params: t, el: r } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: n, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function q(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function X() {
        const e = this,
          { wrapperEl: t, rtlTranslate: r, enabled: i } = e;
        if (!i) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          n !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Y = !1;
      function U() {}
      const K = (e, t) => {
        const r = u(),
          {
            params: i,
            touchEvents: n,
            el: s,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          p = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[d](n.start, e.onTouchStart, t),
            s[d](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            s[d](n.end, e.onTouchEnd, t),
            n.cancel && s[d](n.cancel, e.onTouchEnd, t);
        } else
          s[d](n.start, e.onTouchStart, !1),
            r[d](n.move, e.onTouchMove, c),
            r[d](n.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          s[d]("click", e.onClick, !0),
          i.cssMode && o[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[p](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                H,
                !0
              )
            : e[p]("observerUpdate", H, !0);
      };
      const J = {
          attachEvents: function () {
            const e = this,
              t = u(),
              { params: r, support: i } = e;
            (e.onTouchStart = F.bind(e)),
              (e.onTouchMove = G.bind(e)),
              (e.onTouchEnd = V.bind(e)),
              r.cssMode && (e.onScroll = X.bind(e)),
              (e.onClick = q.bind(e)),
              i.touch && !Y && (t.addEventListener("touchstart", U), (Y = !0)),
              K(e, "on");
          },
          detachEvents: function () {
            K(this, "off");
          },
        },
        Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const Q = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: r,
              loopedSlides: i = 0,
              params: n,
              $el: s,
            } = e,
            o = n.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = Z(e, n),
            d = Z(e, l),
            u = n.enabled;
          c && !d
            ? (s.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (s.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                s.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const r = n[t] && n[t].enabled,
                i = l[t] && l[t].enabled;
              r && !i && e[t].disable(), !r && i && e[t].enable();
            });
          const p = l.direction && l.direction !== n.direction,
            h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
          p && r && e.changeDirection(), k(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            h &&
              r &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, r) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !r)))
            return;
          let i = !1;
          const n = h(),
            s = "window" === t ? n.innerHeight : r.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: s, value: a } = o[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
              : a <= r.clientWidth && (i = s);
          }
          return i || "max";
        },
      };
      const ee = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: r,
              rtl: i,
              $el: n,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const r = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && r.push(t + i);
                      })
                    : "string" == typeof e && r.push(t + e);
                }),
                r
              );
            })(
              [
                "initialized",
                r.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && r.freeMode.enabled },
                { autoheight: r.autoHeight },
                { rtl: i },
                { grid: r.grid && r.grid.rows > 1 },
                {
                  "grid-column":
                    r.grid && r.grid.rows > 1 && "column" === r.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": r.cssMode },
                { centered: r.cssMode && r.centeredSlides },
                { "watch-progress": r.watchSlidesProgress },
              ],
              r.containerModifierClass
            );
          t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const te = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function re(e, t) {
        return function (r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            n = r[i];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in n
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  k(t, r))
                : k(t, r))
            : k(t, r);
        };
      }
      const ie = {
          eventsEmitter: N,
          update: R,
          translate: j,
          transition: {
            setTransition: function (e, t) {
              const r = this;
              r.params.cssMode || r.$wrapperEl.transition(e),
                r.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const r = this,
                { params: i } = r;
              i.cssMode ||
                (i.autoHeight && r.updateAutoHeight(),
                W({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const r = this,
                { params: i } = r;
              (r.animating = !1),
                i.cssMode ||
                  (r.setTransition(0),
                  W({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: B,
          loop: D,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const r =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (r.style.cursor = "move"),
                (r.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: J,
          breakpoints: Q,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: r } = e,
                { slidesOffsetBefore: i } = r;
              if (i) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > r;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: ee,
          images: {
            loadImage: function (e, t, r, i, n, s) {
              const o = h();
              let a;
              function l() {
                s && s();
              }
              w(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  r && (a.srcset = r),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let r = 0; r < e.imagesToLoad.length; r += 1) {
                const i = e.imagesToLoad[r];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        ne = {};
      class se {
        constructor() {
          let e, t;
          for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = k({}, t)),
            e && !t.el && (t.el = e),
            t.el && w(t.el).length > 1)
          ) {
            const e = [];
            return (
              w(t.el).each((r) => {
                const i = k({}, t, { el: r });
                e.push(new se(i));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = z()),
            (s.device = I({ userAgent: t.userAgent })),
            (s.browser = _()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: re(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = k({}, te, o);
          return (
            (s.params = k({}, a, ne, t)),
            (s.originalParams = k({}, s.params)),
            (s.passedParams = k({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = w),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: w(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: S(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = r.minTranslate(),
            n = (r.maxTranslate() - i) * e + i;
          r.translateTo(n, void 0 === t ? 0 : t),
            r.updateActiveIndex(),
            r.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((r) => {
            const i = e.getSlideClasses(r);
            t.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (r.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let r = a + 1; r < i.length; r += 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? n[e] + s[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: r } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          r.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || i()),
            r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            i = r.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (r.$el
                .removeClass(`${r.params.containerModifierClass}${i}`)
                .addClass(`${r.params.containerModifierClass}${e}`),
              r.emitContainerClasses(),
              (r.params.direction = e),
              r.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              r.emit("changeDirection"),
              t && r.update()),
            r
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const r = w(e || t.params.el);
          if (!(e = r[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = w(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => r.children(e)), t;
            }
            return r.children ? r.children(i()) : w(r).children(i());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = u().createElement("div");
            (n = w(e)),
              (e.className = t.params.wrapperClass),
              r.append(e),
              r.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: r,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            { params: i, $el: n, $wrapperEl: s, slides: o } = r;
          return (
            void 0 === r.params ||
              r.destroyed ||
              (r.emit("beforeDestroy"),
              (r.initialized = !1),
              r.detachEvents(),
              i.loop && r.loopDestroy(),
              t &&
                (r.removeClasses(),
                n.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e) => {
                r.off(e);
              }),
              !1 !== e &&
                ((r.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(r)),
              (r.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          k(ne, e);
        }
        static get extendedDefaults() {
          return ne;
        }
        static get defaults() {
          return te;
        }
        static installModule(e) {
          se.prototype.__modules__ || (se.prototype.__modules__ = []);
          const t = se.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => se.installModule(e)), se)
            : (se.installModule(e), se);
        }
      }
      Object.keys(ie).forEach((e) => {
        Object.keys(ie[e]).forEach((t) => {
          se.prototype[t] = ie[e][t];
        });
      }),
        se.use([
          function (e) {
            let { swiper: t, on: r, emit: i } = e;
            const n = h();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            r("init", () => {
              t.params.resizeObserver && void 0 !== n.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = n.requestAnimationFrame(() => {
                      const { width: r, height: i } = t;
                      let n = r,
                        s = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: r,
                          contentRect: i,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((n = i ? i.width : (r[0] || r).inlineSize),
                          (s = i ? i.height : (r[0] || r).blockSize));
                      }),
                        (n === r && s === i) || a();
                    });
                  })),
                  s.observe(t.el))
                : (n.addEventListener("resize", a),
                  n.addEventListener("orientationchange", l));
            }),
              r("destroy", () => {
                o && n.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  n.removeEventListener("resize", a),
                  n.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: r, on: i, emit: n } = e;
            const s = [],
              o = h(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const r = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  s.push(r);
              };
            r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      const oe = se;
      function ae(e, t, r, i) {
        const n = u();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((s) => {
              if (!r[s] && !0 === r.auto) {
                let o = e.$el.children(`.${i[s]}`)[0];
                o ||
                  ((o = n.createElement("div")),
                  (o.className = i[s]),
                  e.$el.append(o)),
                  (r[s] = o),
                  (t[s] = o);
              }
            }),
          r
        );
      }
      function le(e) {
        let { swiper: t, extendParams: r, on: i, emit: n } = e;
        function s(e) {
          let r;
          return (
            e &&
              ((r = w(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                r.length > 1 &&
                1 === t.$el.find(e).length &&
                (r = t.$el.find(e))),
            r
          );
        }
        function o(e, r) {
          const i = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[r ? "addClass" : "removeClass"](i.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = r),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
        }
        function a() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: r } = t.navigation;
          o(r, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), n("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), n("navigationNext"));
        }
        function d() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = ae(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const r = s(e.nextEl),
            i = s(e.prevEl);
          r && r.length > 0 && r.on("click", c),
            i && i.length > 0 && i.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: r,
              nextEl: r && r[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            t.enabled ||
              (r && r.addClass(e.lockClass), i && i.addClass(e.lockClass));
        }
        function u() {
          const { $nextEl: e, $prevEl: r } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            r &&
              r.length &&
              (r.off("click", l),
              r.removeClass(t.params.navigation.disabledClass));
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            !1 === t.params.navigation.enabled ? p() : (d(), a());
          }),
          i("toEdge fromEdge lock unlock", () => {
            a();
          }),
          i("destroy", () => {
            u();
          }),
          i("enable disable", () => {
            const { $nextEl: e, $prevEl: r } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              r &&
                r[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          i("click", (e, r) => {
            const { $nextEl: i, $prevEl: s } = t.navigation,
              o = r.target;
            if (t.params.navigation.hideOnClick && !w(o).is(s) && !w(o).is(i)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              i
                ? (e = i.hasClass(t.params.navigation.hiddenClass))
                : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                n(!0 === e ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                s && s.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        const p = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              d(),
              a();
          },
          disable: p,
          update: a,
          init: d,
          destroy: u,
        });
      }
      function ce(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function de(e) {
        let { swiper: t, extendParams: r, on: i, emit: n } = e;
        const s = "swiper-pagination";
        let o;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
            paginationDisabledClass: `${s}-disabled`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, r) {
          const { bulletActiveClass: i } = t.params.pagination;
          e[r]().addClass(`${i}-${r}`)[r]().addClass(`${i}-${r}-${r}`);
        }
        function d() {
          const e = t.rtl,
            r = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let d;
          const u = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((d = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
              : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === r.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const i = t.pagination.bullets;
            let n, l, u;
            if (
              (r.dynamicBullets &&
                ((o = i
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                s.css(
                  t.isHorizontal() ? "width" : "height",
                  o * (r.dynamicMainBullets + 4) + "px"
                ),
                r.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                  a > r.dynamicMainBullets - 1
                    ? (a = r.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (n = Math.max(d - a, 0)),
                (l = n + (Math.min(i.length, r.dynamicMainBullets) - 1)),
                (u = (l + n) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${r.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              s.length > 1)
            )
              i.each((e) => {
                const t = w(e),
                  i = t.index();
                i === d && t.addClass(r.bulletActiveClass),
                  r.dynamicBullets &&
                    (i >= n &&
                      i <= l &&
                      t.addClass(`${r.bulletActiveClass}-main`),
                    i === n && c(t, "prev"),
                    i === l && c(t, "next"));
              });
            else {
              const e = i.eq(d),
                s = e.index();
              if ((e.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                const e = i.eq(n),
                  o = i.eq(l);
                for (let e = n; e <= l; e += 1)
                  i.eq(e).addClass(`${r.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (s >= i.length) {
                    for (let e = r.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${r.bulletActiveClass}-main`
                      );
                    i.eq(i.length - r.dynamicMainBullets - 1).addClass(
                      `${r.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(o, "next");
                else c(e, "prev"), c(o, "next");
              }
            }
            if (r.dynamicBullets) {
              const n = Math.min(i.length, r.dynamicMainBullets + 4),
                s = (o * n - o) / 2 - u * o,
                a = e ? "right" : "left";
              i.css(t.isHorizontal() ? a : "top", `${s}px`);
            }
          }
          if (
            ("fraction" === r.type &&
              (s.find(ce(r.currentClass)).text(r.formatFractionCurrent(d + 1)),
              s.find(ce(r.totalClass)).text(r.formatFractionTotal(u))),
            "progressbar" === r.type)
          ) {
            let e;
            e = r.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (d + 1) / u;
            let n = 1,
              o = 1;
            "horizontal" === e ? (n = i) : (o = i),
              s
                .find(ce(r.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`)
                .transition(t.params.speed);
          }
          "custom" === r.type && r.renderCustom
            ? (s.html(r.renderCustom(t, d + 1, u)), n("paginationRender", s[0]))
            : n("paginationUpdate", s[0]),
            t.params.watchOverflow &&
              t.enabled &&
              s[t.isLocked ? "addClass" : "removeClass"](r.lockClass);
        }
        function u() {
          const e = t.params.pagination;
          if (l()) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            i = t.pagination.$el;
          let s = "";
          if ("bullets" === e.type) {
            let n = t.params.loop
              ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              n > r &&
              (n = r);
            for (let r = 0; r < n; r += 1)
              e.renderBullet
                ? (s += e.renderBullet.call(t, r, e.bulletClass))
                : (s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            i.html(s), (t.pagination.bullets = i.find(ce(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              i.html(s)),
            "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
        }
        function p() {
          t.params.pagination = ae(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let r = w(e.el);
          0 !== r.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              r.length > 1 &&
              ((r = t.$el.find(e.el)),
              r.length > 1 &&
                (r = r.filter((e) => w(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && r.addClass(e.clickableClass),
            r.addClass(e.modifierClass + e.type),
            r.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (r.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              r.addClass(e.progressbarOppositeClass),
            e.clickable &&
              r.on("click", ce(e.bulletClass), function (e) {
                e.preventDefault();
                let r = w(this).index() * t.params.slidesPerGroup;
                t.params.loop && (r += t.loopedSlides), t.slideTo(r);
              }),
            Object.assign(t.pagination, { $el: r, el: r[0] }),
            t.enabled || r.addClass(e.lockClass));
        }
        function h() {
          const e = t.params.pagination;
          if (l()) return;
          const r = t.pagination.$el;
          r.removeClass(e.hiddenClass),
            r.removeClass(e.modifierClass + e.type),
            r.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && r.off("click", ce(e.bulletClass));
        }
        i("init", () => {
          !1 === t.params.pagination.enabled ? f() : (p(), u(), d());
        }),
          i("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && d();
          }),
          i("snapIndexChange", () => {
            t.params.loop || d();
          }),
          i("slidesLengthChange", () => {
            t.params.loop && (u(), d());
          }),
          i("snapGridLengthChange", () => {
            t.params.loop || (u(), d());
          }),
          i("destroy", () => {
            h();
          }),
          i("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            d();
          }),
          i("click", (e, r) => {
            const i = r.target,
              { $el: s } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              s &&
              s.length > 0 &&
              !w(i).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = s.hasClass(t.params.pagination.hiddenClass);
              n(!0 === e ? "paginationShow" : "paginationHide"),
                s.toggleClass(t.params.pagination.hiddenClass);
            }
          });
        const f = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.addClass(
                t.params.pagination.paginationDisabledClass
              ),
            h();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el &&
                t.pagination.$el.removeClass(
                  t.params.pagination.paginationDisabledClass
                ),
              p(),
              u(),
              d();
          },
          disable: f,
          render: u,
          update: d,
          init: p,
          destroy: h,
        });
      }
      function ue(e) {
        let t,
          { swiper: r, extendParams: i, on: n, emit: s } = e;
        function o() {
          const e = r.slides.eq(r.activeIndex);
          let i = r.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (i = e.attr("data-swiper-autoplay") || r.params.autoplay.delay),
            clearTimeout(t),
            (t = E(() => {
              let e;
              r.params.autoplay.reverseDirection
                ? r.params.loop
                  ? (r.loopFix(),
                    (e = r.slidePrev(r.params.speed, !0, !0)),
                    s("autoplay"))
                  : r.isBeginning
                  ? r.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = r.slideTo(
                        r.slides.length - 1,
                        r.params.speed,
                        !0,
                        !0
                      )),
                      s("autoplay"))
                  : ((e = r.slidePrev(r.params.speed, !0, !0)), s("autoplay"))
                : r.params.loop
                ? (r.loopFix(),
                  (e = r.slideNext(r.params.speed, !0, !0)),
                  s("autoplay"))
                : r.isEnd
                ? r.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = r.slideTo(0, r.params.speed, !0, !0)), s("autoplay"))
                : ((e = r.slideNext(r.params.speed, !0, !0)), s("autoplay")),
                ((r.params.cssMode && r.autoplay.running) || !1 === e) && o();
            }, i));
        }
        function a() {
          return (
            void 0 === t &&
            !r.autoplay.running &&
            ((r.autoplay.running = !0), s("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!r.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (r.autoplay.running = !1),
            s("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          r.autoplay.running &&
            (r.autoplay.paused ||
              (t && clearTimeout(t),
              (r.autoplay.paused = !0),
              0 !== e && r.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    r.$wrapperEl[0].addEventListener(e, p);
                  })
                : ((r.autoplay.paused = !1), o())));
        }
        function d() {
          const e = u();
          "hidden" === e.visibilityState && r.autoplay.running && c(),
            "visible" === e.visibilityState &&
              r.autoplay.paused &&
              (o(), (r.autoplay.paused = !1));
        }
        function p(e) {
          r &&
            !r.destroyed &&
            r.$wrapperEl &&
            e.target === r.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              r.$wrapperEl[0].removeEventListener(e, p);
            }),
            (r.autoplay.paused = !1),
            r.autoplay.running ? o() : l());
        }
        function h() {
          r.params.autoplay.disableOnInteraction
            ? l()
            : (s("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              r.$wrapperEl[0].removeEventListener(e, p);
            });
        }
        function f() {
          r.params.autoplay.disableOnInteraction ||
            ((r.autoplay.paused = !1), s("autoplayResume"), o());
        }
        (r.autoplay = { running: !1, paused: !1 }),
          i({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          n("init", () => {
            if (r.params.autoplay.enabled) {
              a();
              u().addEventListener("visibilitychange", d),
                r.params.autoplay.pauseOnMouseEnter &&
                  (r.$el.on("mouseenter", h), r.$el.on("mouseleave", f));
            }
          }),
          n("beforeTransitionStart", (e, t, i) => {
            r.autoplay.running &&
              (i || !r.params.autoplay.disableOnInteraction
                ? r.autoplay.pause(t)
                : l());
          }),
          n("sliderFirstMove", () => {
            r.autoplay.running &&
              (r.params.autoplay.disableOnInteraction ? l() : c());
          }),
          n("touchEnd", () => {
            r.params.cssMode &&
              r.autoplay.paused &&
              !r.params.autoplay.disableOnInteraction &&
              o();
          }),
          n("destroy", () => {
            r.$el.off("mouseenter", h),
              r.$el.off("mouseleave", f),
              r.autoplay.running && l();
            u().removeEventListener("visibilitychange", d);
          }),
          Object.assign(r.autoplay, { pause: c, run: o, start: a, stop: l });
      }
      function pe() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        pe(),
          document.querySelector(".swiper") &&
            new oe(".swiper", {
              modules: [le, de, ue],
              effect: "fade",
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              pagination: { el: ".swiper-pagination", clickable: !0 },
              on: {},
            });
      });
      r(1539), r(4747);
      var he,
        fe = r(1807),
        ve = r.n(fe),
        ge =
          (r(1058),
          r(9601),
          r(7327),
          r(6992),
          r(8783),
          r(4129),
          r(3948),
          r(3096)),
        me = r.n(ge),
        be = r(1296),
        ye = r.n(be),
        xe = r(773),
        we = r.n(xe),
        Ee = [],
        Se = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(he || (he = {}));
      var Ce,
        Te = function (e) {
          return Object.freeze(e);
        },
        Oe = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), Te(this);
        },
        ke = (function () {
          function e(e, t, r, i) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = r),
              (this.height = i),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              Te(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        Le = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Me = function (e) {
          if (Le(e)) {
            var t = e.getBBox(),
              r = t.width,
              i = t.height;
            return !r && !i;
          }
          var n = e,
            s = n.offsetWidth,
            o = n.offsetHeight;
          return !(s || o || e.getClientRects().length);
        },
        Ae = function (e) {
          var t, r;
          if (e instanceof Element) return !0;
          var i =
            null ===
              (r =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === r
              ? void 0
              : r.defaultView;
          return !!(i && e instanceof i.Element);
        },
        Pe = "undefined" != typeof window ? window : {},
        $e = new WeakMap(),
        ze = /auto|scroll/,
        Ie = /^tb|vertical/,
        _e = /msie|trident/i.test(Pe.navigator && Pe.navigator.userAgent),
        Ne = function (e) {
          return parseFloat(e || "0");
        },
        Re = function (e, t, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new Oe((r ? t : e) || 0, (r ? e : t) || 0)
          );
        },
        je = Te({
          devicePixelContentBoxSize: Re(),
          borderBoxSize: Re(),
          contentBoxSize: Re(),
          contentRect: new ke(0, 0, 0, 0),
        }),
        We = function (e, t) {
          if ((void 0 === t && (t = !1), $e.has(e) && !t)) return $e.get(e);
          if (Me(e)) return $e.set(e, je), je;
          var r = getComputedStyle(e),
            i = Le(e) && e.ownerSVGElement && e.getBBox(),
            n = !_e && "border-box" === r.boxSizing,
            s = Ie.test(r.writingMode || ""),
            o = !i && ze.test(r.overflowY || ""),
            a = !i && ze.test(r.overflowX || ""),
            l = i ? 0 : Ne(r.paddingTop),
            c = i ? 0 : Ne(r.paddingRight),
            d = i ? 0 : Ne(r.paddingBottom),
            u = i ? 0 : Ne(r.paddingLeft),
            p = i ? 0 : Ne(r.borderTopWidth),
            h = i ? 0 : Ne(r.borderRightWidth),
            f = i ? 0 : Ne(r.borderBottomWidth),
            v = u + c,
            g = l + d,
            m = (i ? 0 : Ne(r.borderLeftWidth)) + h,
            b = p + f,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            x = o ? e.offsetWidth - m - e.clientWidth : 0,
            w = n ? v + m : 0,
            E = n ? g + b : 0,
            S = i ? i.width : Ne(r.width) - w - x,
            C = i ? i.height : Ne(r.height) - E - y,
            T = S + v + x + m,
            O = C + g + y + b,
            k = Te({
              devicePixelContentBoxSize: Re(
                Math.round(S * devicePixelRatio),
                Math.round(C * devicePixelRatio),
                s
              ),
              borderBoxSize: Re(T, O, s),
              contentBoxSize: Re(S, C, s),
              contentRect: new ke(u, l, S, C),
            });
          return $e.set(e, k), k;
        },
        Be = function (e, t, r) {
          var i = We(e, r),
            n = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
          switch (t) {
            case he.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case he.BORDER_BOX:
              return n;
            default:
              return s;
          }
        },
        De = function (e) {
          var t = We(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = Te([t.borderBoxSize])),
            (this.contentBoxSize = Te([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = Te([
              t.devicePixelContentBoxSize,
            ]));
        },
        Fe = function (e) {
          if (Me(e)) return 1 / 0;
          for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
          return t;
        },
        Ge = function () {
          var e = 1 / 0,
            t = [];
          Ee.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
              var i = [];
              r.activeTargets.forEach(function (t) {
                var r = new De(t.target),
                  n = Fe(t.target);
                i.push(r),
                  (t.lastReportedSize = Be(t.target, t.observedBox)),
                  n < e && (e = n);
              }),
                t.push(function () {
                  r.callback.call(r.observer, i, r.observer);
                }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }
          });
          for (var r = 0, i = t; r < i.length; r++) {
            (0, i[r])();
          }
          return e;
        },
        Ve = function (e) {
          Ee.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (r) {
                r.isActive() &&
                  (Fe(r.target) > e
                    ? t.activeTargets.push(r)
                    : t.skippedTargets.push(r));
              });
          });
        },
        He = function () {
          var e = 0;
          for (
            Ve(e);
            Ee.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = Ge()), Ve(e);
          return (
            Ee.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: Se }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = Se)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        qe = [],
        Xe = function (e) {
          if (!Ce) {
            var t = 0,
              r = document.createTextNode("");
            new MutationObserver(function () {
              return qe.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(r, { characterData: !0 }),
              (Ce = function () {
                r.textContent = "" + (t ? t-- : t++);
              });
          }
          qe.push(e), Ce();
        },
        Ye = 0,
        Ue = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        Ke = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        Je = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        Ze = !1,
        Qe = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !Ze)) {
                Ze = !0;
                var r,
                  i = Je(e);
                (r = function () {
                  var r = !1;
                  try {
                    r = He();
                  } finally {
                    if (((Ze = !1), (e = i - Je()), !Ye)) return;
                    r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  Xe(function () {
                    requestAnimationFrame(r);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Ue);
                };
              document.body ? t() : Pe.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                Ke.forEach(function (t) {
                  return Pe.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                Ke.forEach(function (t) {
                  return Pe.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        et = function (e) {
          !Ye && e > 0 && Qe.start(), !(Ye += e) && Qe.stop();
        },
        tt = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || he.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Be(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                Le(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        rt = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        it = new WeakMap(),
        nt = function (e, t) {
          for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
          return -1;
        },
        st = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var r = new rt(e, t);
              it.set(e, r);
            }),
            (e.observe = function (e, t, r) {
              var i = it.get(e),
                n = 0 === i.observationTargets.length;
              nt(i.observationTargets, t) < 0 &&
                (n && Ee.push(i),
                i.observationTargets.push(new tt(t, r && r.box)),
                et(1),
                Qe.schedule());
            }),
            (e.unobserve = function (e, t) {
              var r = it.get(e),
                i = nt(r.observationTargets, t),
                n = 1 === r.observationTargets.length;
              i >= 0 &&
                (n && Ee.splice(Ee.indexOf(r), 1),
                r.observationTargets.splice(i, 1),
                et(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                r = it.get(e);
              r.observationTargets.slice().forEach(function (r) {
                return t.unobserve(e, r.target);
              }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
          );
        })(),
        ot = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            st.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ae(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              st.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ae(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              st.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              st.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        at =
          (r(5827),
          r(4916),
          r(4723),
          r(8309),
          r(5306),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var r = t.name.match(/data-simplebar-(.+)/);
                if (r) {
                  var i = r[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[i] = !0;
                      break;
                    case "false":
                      e[i] = !1;
                      break;
                    case void 0:
                      e[i] = !0;
                      break;
                    default:
                      e[i] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function lt(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function ct(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var dt = null,
        ut = null;
      function pt(e) {
        if (null === dt) {
          var t = ct(e);
          if (void 0 === t) return (dt = 0);
          var r = t.body,
            i = t.createElement("div");
          i.classList.add("simplebar-hide-scrollbar"), r.appendChild(i);
          var n = i.getBoundingClientRect().right;
          r.removeChild(i), (dt = n);
        }
        return dt;
      }
      ve() &&
        window.addEventListener("resize", function () {
          ut !== window.devicePixelRatio &&
            ((ut = window.devicePixelRatio), (dt = null));
        });
      var ht = (function () {
        function e(t, r) {
          var i = this;
          (this.onScroll = function () {
            var e = lt(i.el);
            i.scrollXTicking ||
              (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
              i.scrollYTicking ||
                (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing &&
                (i.showScrollbar("x"), i.positionScrollbar("x")),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing &&
                (i.showScrollbar("y"), i.positionScrollbar("y")),
                (i.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              i.showScrollbar("x"), i.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                i.isWithinBounds(i.axis.y.track.rect) ||
                  (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.y.isVisible = !1)),
                i.isWithinBounds(i.axis.x.track.rect) ||
                  (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, r;
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (r = i.isWithinBounds(i.axis.y.track.rect)),
                (t || r) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    r &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var r = i.axis[i.draggedAxis].track,
                n = r.rect[i.axis[i.draggedAxis].sizeAttr],
                s = i.axis[i.draggedAxis].scrollbar,
                o = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === i.draggedAxis ? t.pageY : t.pageX) -
                  r.rect[i.axis[i.draggedAxis].offsetAttr] -
                  i.axis[i.draggedAxis].dragOffset) /
                  (n - s.size)) *
                (o - a);
              "x" === i.draggedAxis &&
                ((l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (n + s.size)
                    : l),
                (l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = ct(i.el),
                r = lt(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                i.el.classList.remove(i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = r.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, r)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = me()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = me()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = ye()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = ye()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = we()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var r = t.firstElementChild;
          document.body.appendChild(r);
          var i = r.firstElementChild;
          r.scrollLeft = 0;
          var n = e.getOffset(r),
            s = e.getOffset(i);
          r.scrollLeft = 999;
          var o = e.getOffset(i);
          return {
            isRtlScrollingInverted: n.left !== s.left && s.left - o.left != 0,
            isRtlScrollbarInverted: n.left !== s.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              r = ct(e),
              i = lt(e);
            return {
              top: t.top + (i.pageYOffset || r.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || r.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              ve() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                r = document.createElement("div");
              t.classList.add(this.classNames.track),
                r.classList.add(this.classNames.scrollbar),
                t.appendChild(r),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = lt(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var r = !1,
              i = t.ResizeObserver || ot;
            (this.resizeObserver = new i(function () {
              r && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                r = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = lt(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              r = this.heightAutoObserverEl.offsetWidth <= 1,
              i = this.contentEl.offsetWidth,
              n = this.contentWrapperEl.offsetWidth,
              s = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = r ? i + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > i),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== s && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > n - u),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - d),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              n = i / r;
            return (
              (t = Math.max(~~(n * i), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var r = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                s = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (r - n),
                l = ~~((i - s.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (i - s.size)
                  : l),
                (s.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              r = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (r.style.display = "block")
                : (r.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var r = ct(this.el),
              i = lt(this.el),
              n = this.axis[t].scrollbar,
              s = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = s - n.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              r.addEventListener("mousemove", this.drag, !0),
              r.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (r.addEventListener("click", this.preventClick, !0),
                  r.addEventListener("dblclick", this.preventClick, !0))
                : (i.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var r = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var i = lt(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var n = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                s = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - n : this.mouseX - n) < 0 ? -1 : 1,
                l = -1 === a ? o - s : o + s;
              !(function e() {
                var n, s;
                -1 === a
                  ? o > l &&
                    ((o -= r.options.clickOnTrackSpeed),
                    r.contentWrapperEl.scrollTo(
                      (((n = {})[r.axis[t].offsetAttr] = o), n)
                    ),
                    i.requestAnimationFrame(e))
                  : o < l &&
                    ((o += r.options.clickOnTrackSpeed),
                    r.contentWrapperEl.scrollTo(
                      (((s = {})[r.axis[t].offsetAttr] = o), s)
                    ),
                    i.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : pt(this.el);
            } catch (e) {
              return pt(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = lt(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var r =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return r.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (ht.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (ht.instances = new WeakMap()),
        (ht.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  ht.instances.has(e) ||
                  new ht(e, at(e.attributes));
              }
            );
        }),
        (ht.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (ht.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(ht.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (ht.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !ht.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new ht(e, at(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !ht.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new ht(e, at(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? ht.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      ht.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          ht.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            ht.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (ht.getOptions = at),
        ve() && ht.initHtmlApi();
      class ft {
        constructor(e) {
          (this.config = Object.assign({ logging: !0 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
            ),
              o(
                Array.from(e).map(function (e) {
                  return `${
                    e.dataset.watchRoot ? e.dataset.watchRoot : null
                  }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
                })
              ).forEach((t) => {
                let r = t.split("|"),
                  i = { root: r[0], margin: r[1], threshold: r[2] },
                  n = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      r = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      n = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === i.root &&
                      String(r) === i.margin &&
                      String(n) === i.threshold
                    )
                      return e;
                  }),
                  s = this.getScrollWatcherConfig(i);
                this.scrollWatcherInit(n, s);
              });
          } else
            this.scrollWatcherLogging(
              "????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging && s(`[??????????????????????]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const r = e.target;
          this.scrollWatcherIntersecting(e, r),
            r.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(r, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      }
      let vt = !1;
      setTimeout(() => {
        if (vt) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        e.any() && document.documentElement.classList.add("touch"),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              t &&
                (((e = 500) => {
                  document.documentElement.classList.contains("lock")
                    ? i(e)
                    : n(e);
                })(),
                document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        new ft({}),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const r = t.closest("[data-goto]"),
                  i = r.dataset.goto ? r.dataset.goto : "",
                  n = !!r.hasAttribute("data-goto-header"),
                  s = r.dataset.gotoSpeed ? r.dataset.gotoSpeed : "500";
                a(i, n, s), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                r = t.target;
              if ("navigator" === r.dataset.watch) {
                const e = r.id,
                  i =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? i && i.classList.add("_navigator-active")
                  : i && i.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })();
    })();
})();
