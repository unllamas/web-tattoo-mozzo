// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/circletype.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * circletype 2.3.2
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
!function (t, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.CircleType = n() : t.CircleType = n();
}(window, function () {
  return function (t) {
    var n = {};

    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }

    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        enumerable: !0,
        get: r
      });
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, e.t = function (t, n) {
      if (1 & n && (t = e(t)), 8 & n) return t;
      if (4 & n && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t) for (var i in t) {
        e.d(r, i, function (n) {
          return t[n];
        }.bind(null, i));
      }
      return r;
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }, e.p = "", e(e.s = 28);
  }([function (t, n, e) {
    var r = e(13)("wks"),
        i = e(12),
        o = e(1).Symbol,
        u = "function" == typeof o;
    (t.exports = function (t) {
      return r[t] || (r[t] = u && o[t] || (u ? o : i)("Symbol." + t));
    }).store = r;
  }, function (t, n) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e);
  }, function (t, n) {
    var e = t.exports = {
      version: "2.6.11"
    };
    "number" == typeof __e && (__e = e);
  }, function (t, n, e) {
    var r = e(4),
        i = e(11);
    t.exports = e(6) ? function (t, n, e) {
      return r.f(t, n, i(1, e));
    } : function (t, n, e) {
      return t[n] = e, t;
    };
  }, function (t, n, e) {
    var r = e(5),
        i = e(33),
        o = e(34),
        u = Object.defineProperty;
    n.f = e(6) ? Object.defineProperty : function (t, n, e) {
      if (r(t), n = o(n, !0), r(e), i) try {
        return u(t, n, e);
      } catch (t) {}
      if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
      return "value" in e && (t[n] = e.value), t;
    };
  }, function (t, n, e) {
    var r = e(10);

    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, n, e) {
    t.exports = !e(18)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, n) {
    var e = {}.hasOwnProperty;

    t.exports = function (t, n) {
      return e.call(t, n);
    };
  }, function (t, n) {
    var e = Math.ceil,
        r = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t);
    };
  }, function (t, n) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, n) {
    t.exports = function (t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    };
  }, function (t, n) {
    t.exports = function (t, n) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n
      };
    };
  }, function (t, n) {
    var e = 0,
        r = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
    };
  }, function (t, n, e) {
    var r = e(2),
        i = e(1),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, n) {
      return o[t] || (o[t] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: r.version,
      mode: e(16) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, n) {
    t.exports = {};
  }, function (t, n, e) {
    var r = e(13)("keys"),
        i = e(12);

    t.exports = function (t) {
      return r[t] || (r[t] = i(t));
    };
  }, function (t, n) {
    t.exports = !1;
  }, function (t, n, e) {
    var r = e(1),
        i = e(2),
        o = e(3),
        u = e(20),
        c = e(21),
        a = function a(t, n, e) {
      var f,
          s,
          l,
          p,
          h = t & a.F,
          v = t & a.G,
          d = t & a.S,
          y = t & a.P,
          m = t & a.B,
          g = v ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
          _ = v ? i : i[n] || (i[n] = {}),
          x = _.prototype || (_.prototype = {});

      for (f in v && (e = n), e) {
        l = ((s = !h && g && void 0 !== g[f]) ? g : e)[f], p = m && s ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, f, l, t & a.U), _[f] != l && o(_, f, p), y && x[f] != l && (x[f] = l);
      }
    };

    r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, n, e) {
    var r = e(10),
        i = e(1).document,
        o = r(i) && r(i.createElement);

    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  }, function (t, n, e) {
    var r = e(1),
        i = e(3),
        o = e(7),
        u = e(12)("src"),
        c = e(35),
        a = ("" + c).split("toString");
    e(2).inspectSource = function (t) {
      return c.call(t);
    }, (t.exports = function (t, n, e, c) {
      var f = "function" == typeof e;
      f && (o(e, "name") || i(e, "name", n)), t[n] !== e && (f && (o(e, u) || i(e, u, t[n] ? "" + t[n] : a.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : i(t, n, e) : (delete t[n], i(t, n, e)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[u] || c.call(this);
    });
  }, function (t, n, e) {
    var r = e(36);

    t.exports = function (t, n, e) {
      if (r(t), void 0 === n) return t;

      switch (e) {
        case 1:
          return function (e) {
            return t.call(n, e);
          };

        case 2:
          return function (e, r) {
            return t.call(n, e, r);
          };

        case 3:
          return function (e, r, i) {
            return t.call(n, e, r, i);
          };
      }

      return function () {
        return t.apply(n, arguments);
      };
    };
  }, function (t, n, e) {
    var r = e(42),
        i = e(9);

    t.exports = function (t) {
      return r(i(t));
    };
  }, function (t, n) {
    var e = {}.toString;

    t.exports = function (t) {
      return e.call(t).slice(8, -1);
    };
  }, function (t, n, e) {
    var r = e(8),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  }, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, n, e) {
    var r = e(4).f,
        i = e(7),
        o = e(0)("toStringTag");

    t.exports = function (t, n, e) {
      t && !i(t = e ? t : t.prototype, o) && r(t, o, {
        configurable: !0,
        value: n
      });
    };
  }, function (t, n, e) {
    var r = e(9);

    t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, n, e) {
    e(29);
    var r = e(54).default;
    t.exports = r;
  }, function (t, n, e) {
    e(30), e(47), t.exports = e(2).Array.from;
  }, function (t, n, e) {
    "use strict";

    var r = e(31)(!0);
    e(32)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          n = this._t,
          e = this._i;
      return e >= n.length ? {
        value: void 0,
        done: !0
      } : (t = r(n, e), this._i += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, n, e) {
    var r = e(8),
        i = e(9);

    t.exports = function (t) {
      return function (n, e) {
        var o,
            u,
            c = String(i(n)),
            a = r(e),
            f = c.length;
        return a < 0 || a >= f ? t ? "" : void 0 : (o = c.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : o : t ? c.slice(a, a + 2) : u - 56320 + (o - 55296 << 10) + 65536;
      };
    };
  }, function (t, n, e) {
    "use strict";

    var r = e(16),
        i = e(17),
        o = e(20),
        u = e(3),
        c = e(14),
        a = e(37),
        f = e(26),
        s = e(46),
        l = e(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function h() {
      return this;
    };

    t.exports = function (t, n, e, v, d, y, m) {
      a(e, n, v);

      var g,
          _,
          x,
          b = function b(t) {
        if (!p && t in S) return S[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new e(this, t);
            };
        }

        return function () {
          return new e(this, t);
        };
      },
          w = n + " Iterator",
          O = "values" == d,
          j = !1,
          S = t.prototype,
          M = S[l] || S["@@iterator"] || d && S[d],
          T = M || b(d),
          P = d ? O ? b("entries") : T : void 0,
          A = "Array" == n && S.entries || M;

      if (A && (x = s(A.call(new t()))) !== Object.prototype && x.next && (f(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)), O && M && "values" !== M.name && (j = !0, T = function T() {
        return M.call(this);
      }), r && !m || !p && !j && S[l] || u(S, l, T), c[n] = T, c[w] = h, d) if (g = {
        values: O ? T : b("values"),
        keys: y ? T : b("keys"),
        entries: P
      }, m) for (_ in g) {
        _ in S || o(S, _, g[_]);
      } else i(i.P + i.F * (p || j), n, g);
      return g;
    };
  }, function (t, n, e) {
    t.exports = !e(6) && !e(18)(function () {
      return 7 != Object.defineProperty(e(19)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, n, e) {
    var r = e(10);

    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, i;
      if (n && "function" == typeof (e = t.toString) && !r(i = e.call(t))) return i;
      if ("function" == typeof (e = t.valueOf) && !r(i = e.call(t))) return i;
      if (!n && "function" == typeof (e = t.toString) && !r(i = e.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, n, e) {
    t.exports = e(13)("native-function-to-string", Function.toString);
  }, function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, n, e) {
    "use strict";

    var r = e(38),
        i = e(11),
        o = e(26),
        u = {};
    e(3)(u, e(0)("iterator"), function () {
      return this;
    }), t.exports = function (t, n, e) {
      t.prototype = r(u, {
        next: i(1, e)
      }), o(t, n + " Iterator");
    };
  }, function (t, n, e) {
    var r = e(5),
        i = e(39),
        o = e(25),
        u = e(15)("IE_PROTO"),
        c = function c() {},
        _a = function a() {
      var t,
          n = e(19)("iframe"),
          r = o.length;

      for (n.style.display = "none", e(45).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _a = t.F; r--;) {
        delete _a.prototype[o[r]];
      }

      return _a();
    };

    t.exports = Object.create || function (t, n) {
      var e;
      return null !== t ? (c.prototype = r(t), e = new c(), c.prototype = null, e[u] = t) : e = _a(), void 0 === n ? e : i(e, n);
    };
  }, function (t, n, e) {
    var r = e(4),
        i = e(5),
        o = e(40);
    t.exports = e(6) ? Object.defineProperties : function (t, n) {
      i(t);

      for (var e, u = o(n), c = u.length, a = 0; c > a;) {
        r.f(t, e = u[a++], n[e]);
      }

      return t;
    };
  }, function (t, n, e) {
    var r = e(41),
        i = e(25);

    t.exports = Object.keys || function (t) {
      return r(t, i);
    };
  }, function (t, n, e) {
    var r = e(7),
        i = e(22),
        o = e(43)(!1),
        u = e(15)("IE_PROTO");

    t.exports = function (t, n) {
      var e,
          c = i(t),
          a = 0,
          f = [];

      for (e in c) {
        e != u && r(c, e) && f.push(e);
      }

      for (; n.length > a;) {
        r(c, e = n[a++]) && (~o(f, e) || f.push(e));
      }

      return f;
    };
  }, function (t, n, e) {
    var r = e(23);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function (t, n, e) {
    var r = e(22),
        i = e(24),
        o = e(44);

    t.exports = function (t) {
      return function (n, e, u) {
        var c,
            a = r(n),
            f = i(a.length),
            s = o(u, f);

        if (t && e != e) {
          for (; f > s;) {
            if ((c = a[s++]) != c) return !0;
          }
        } else for (; f > s; s++) {
          if ((t || s in a) && a[s] === e) return t || s || 0;
        }

        return !t && -1;
      };
    };
  }, function (t, n, e) {
    var r = e(8),
        i = Math.max,
        o = Math.min;

    t.exports = function (t, n) {
      return (t = r(t)) < 0 ? i(t + n, 0) : o(t, n);
    };
  }, function (t, n, e) {
    var r = e(1).document;
    t.exports = r && r.documentElement;
  }, function (t, n, e) {
    var r = e(7),
        i = e(27),
        o = e(15)("IE_PROTO"),
        u = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
    };
  }, function (t, n, e) {
    "use strict";

    var r = e(21),
        i = e(17),
        o = e(27),
        u = e(48),
        c = e(49),
        a = e(24),
        f = e(50),
        s = e(51);
    i(i.S + i.F * !e(53)(function (t) {
      Array.from(t);
    }), "Array", {
      from: function from(t) {
        var n,
            e,
            i,
            l,
            p = o(t),
            h = "function" == typeof this ? this : Array,
            v = arguments.length,
            d = v > 1 ? arguments[1] : void 0,
            y = void 0 !== d,
            m = 0,
            g = s(p);
        if (y && (d = r(d, v > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && c(g)) for (e = new h(n = a(p.length)); n > m; m++) {
          f(e, m, y ? d(p[m], m) : p[m]);
        } else for (l = g.call(p), e = new h(); !(i = l.next()).done; m++) {
          f(e, m, y ? u(l, d, [i.value, m], !0) : i.value);
        }
        return e.length = m, e;
      }
    });
  }, function (t, n, e) {
    var r = e(5);

    t.exports = function (t, n, e, i) {
      try {
        return i ? n(r(e)[0], e[1]) : n(e);
      } catch (n) {
        var o = t.return;
        throw void 0 !== o && r(o.call(t)), n;
      }
    };
  }, function (t, n, e) {
    var r = e(14),
        i = e(0)("iterator"),
        o = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  }, function (t, n, e) {
    "use strict";

    var r = e(4),
        i = e(11);

    t.exports = function (t, n, e) {
      n in t ? r.f(t, n, i(0, e)) : t[n] = e;
    };
  }, function (t, n, e) {
    var r = e(52),
        i = e(0)("iterator"),
        o = e(14);

    t.exports = e(2).getIteratorMethod = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  }, function (t, n, e) {
    var r = e(23),
        i = e(0)("toStringTag"),
        o = "Arguments" == r(function () {
      return arguments;
    }());

    t.exports = function (t) {
      var n, e, u;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
        try {
          return t[n];
        } catch (t) {}
      }(n = Object(t), i)) ? e : o ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u;
    };
  }, function (t, n, e) {
    var r = e(0)("iterator"),
        i = !1;

    try {
      var o = [7][r]();
      o.return = function () {
        i = !0;
      }, Array.from(o, function () {
        throw 2;
      });
    } catch (t) {}

    t.exports = function (t, n) {
      if (!n && !i) return !1;
      var e = !1;

      try {
        var o = [7],
            u = o[r]();
        u.next = function () {
          return {
            done: e = !0
          };
        }, o[r] = function () {
          return u;
        }, t(o);
      } catch (t) {}

      return e;
    };
  }, function (t, n, e) {
    "use strict";

    e.r(n);

    var r = function r(t) {
      var n = t.getBoundingClientRect();
      return {
        height: n.height,
        left: n.left + window.pageXOffset,
        top: n.top + window.pageYOffset,
        width: n.width
      };
    };

    function i(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++) {
            e[n] = t[n];
          }

          return e;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    var o = Math.PI / 180,
        u = function u(t) {
      return t * o;
    },
        c = function c(t, n) {
      return t * (1 - Math.cos(u(n / 2)));
    },
        a = 180 / Math.PI,
        f = function f(t, n) {
      return t.reduce(function (t, e) {
        var r = e.width,
            i = r / n * a;
        return {
          "θ": t.θ + i,
          rotations: t.rotations.concat([t.θ + i / 2])
        };
      }, {
        "θ": 0,
        rotations: []
      });
    };

    function s(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    var l = Math.PI,
        p = Math.max,
        h = Math.min,
        v = function () {
      function t(n, e) {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.element = n, this.originalHTML = this.element.innerHTML;
        var o = document.createElement("div"),
            u = document.createDocumentFragment();
        o.setAttribute("aria-label", n.innerText), o.style.position = "relative", this.container = o, this._letters = function (t, n) {
          var e = document.createElement("span");
          e.style.display = "inline-block";
          var r = t.innerText.trim();
          return (n ? n(r) : i(r)).map(function (t) {
            var n = e.cloneNode();
            return n.insertAdjacentHTML("afterbegin", " " === t ? "&nbsp;" : t), n;
          });
        }(n, e), this._letters.forEach(function (t) {
          return u.appendChild(t);
        }), o.appendChild(u), this.element.innerHTML = "", this.element.appendChild(o);
        var c = window.getComputedStyle(this.element),
            a = c.fontSize,
            f = c.lineHeight;
        this._fontSize = parseFloat(a), this._lineHeight = parseFloat(f) || this._fontSize, this._metrics = this._letters.map(r);

        var s = this._metrics.reduce(function (t, n) {
          return t + n.width;
        }, 0);

        this._minRadius = s / l / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate();
      }

      var n, e, o;
      return n = t, (e = [{
        key: "radius",
        value: function value(t) {
          return void 0 !== t ? (this._radius = p(this._minRadius, t), this._invalidate(), this) : this._radius;
        }
      }, {
        key: "dir",
        value: function value(t) {
          return void 0 !== t ? (this._dir = t, this._invalidate(), this) : this._dir;
        }
      }, {
        key: "forceWidth",
        value: function value(t) {
          return void 0 !== t ? (this._forceWidth = t, this._invalidate(), this) : this._forceWidth;
        }
      }, {
        key: "forceHeight",
        value: function value(t) {
          return void 0 !== t ? (this._forceHeight = t, this._invalidate(), this) : this._forceHeight;
        }
      }, {
        key: "refresh",
        value: function value() {
          return this._invalidate();
        }
      }, {
        key: "destroy",
        value: function value() {
          return this.element.innerHTML = this.originalHTML, this;
        }
      }, {
        key: "_invalidate",
        value: function value() {
          var t = this;
          return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(function () {
            t._layout();
          }), this;
        }
      }, {
        key: "_layout",
        value: function value() {
          var t = this,
              n = this._radius,
              e = this._dir,
              r = -1 === e ? -n + this._lineHeight : n,
              i = "center ".concat(r / this._fontSize, "em"),
              o = n - this._lineHeight,
              a = f(this._metrics, o),
              s = a.rotations,
              l = a.θ;

          if (this._letters.forEach(function (n, r) {
            var o = n.style,
                u = (-.5 * l + s[r]) * e,
                c = -.5 * t._metrics[r].width / t._fontSize,
                a = "translateX(".concat(c, "em) rotate(").concat(u, "deg)");
            o.position = "absolute", o.bottom = -1 === e ? 0 : "auto", o.left = "50%", o.transform = a, o.transformOrigin = i, o.webkitTransform = a, o.webkitTransformOrigin = i;
          }), this._forceHeight) {
            var p = l > 180 ? c(n, l) : c(o, l) + this._lineHeight;
            this.container.style.height = "".concat(p / this._fontSize, "em");
          }

          if (this._forceWidth) {
            var v = function (t, n) {
              return 2 * t * Math.sin(u(n / 2));
            }(n, h(180, l));

            this.container.style.width = "".concat(v / this._fontSize, "em");
          }

          return this;
        }
      }]) && s(n.prototype, e), o && s(n, o), t;
    }();

    n.default = v;
  }]);
});
},{}],"../../../../Users/joni_/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61895" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/joni_/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/circletype.min.js"], null)
//# sourceMappingURL=/circletype.min.122dc854.js.map