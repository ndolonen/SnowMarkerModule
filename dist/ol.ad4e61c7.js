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
})({"lib/ol.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.ol = e() : t.ol = e();
}(window, function () {
  return function (t) {
    var e = {};

    function i(r) {
      if (e[r]) return e[r].exports;
      var n = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }

    return i.m = t, i.c = e, i.d = function (t, e, r) {
      i.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, i.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, i.t = function (t, e) {
      if (1 & e && (t = i(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (i.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var n in t) {
        i.d(r, n, function (e) {
          return t[e];
        }.bind(null, n));
      }
      return r;
    }, i.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return i.d(e, "a", e), e;
    }, i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "", i(i.s = 9);
  }([function (t, e, i) {
    "use strict";

    t.exports = n, t.exports.default = n;
    var r = i(5);

    function n(t, e) {
      if (!(this instanceof n)) return new n(t, e);
      this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), e && this._initFormat(e), this.clear();
    }

    function o(t, e, i) {
      if (!i) return e.indexOf(t);

      for (var r = 0; r < e.length; r++) {
        if (i(t, e[r])) return r;
      }

      return -1;
    }

    function s(t, e) {
      a(t, 0, t.children.length, e, t);
    }

    function a(t, e, i, r, n) {
      n || (n = y(null)), n.minX = 1 / 0, n.minY = 1 / 0, n.maxX = -1 / 0, n.maxY = -1 / 0;

      for (var o, s = e; s < i; s++) {
        o = t.children[s], h(n, t.leaf ? r(o) : o);
      }

      return n;
    }

    function h(t, e) {
      return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t;
    }

    function l(t, e) {
      return t.minX - e.minX;
    }

    function u(t, e) {
      return t.minY - e.minY;
    }

    function p(t) {
      return (t.maxX - t.minX) * (t.maxY - t.minY);
    }

    function c(t) {
      return t.maxX - t.minX + (t.maxY - t.minY);
    }

    function d(t, e) {
      return (Math.max(e.maxX, t.maxX) - Math.min(e.minX, t.minX)) * (Math.max(e.maxY, t.maxY) - Math.min(e.minY, t.minY));
    }

    function f(t, e) {
      var i = Math.max(t.minX, e.minX),
          r = Math.max(t.minY, e.minY),
          n = Math.min(t.maxX, e.maxX),
          o = Math.min(t.maxY, e.maxY);
      return Math.max(0, n - i) * Math.max(0, o - r);
    }

    function _(t, e) {
      return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY;
    }

    function g(t, e) {
      return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY;
    }

    function y(t) {
      return {
        children: t,
        height: 1,
        leaf: !0,
        minX: 1 / 0,
        minY: 1 / 0,
        maxX: -1 / 0,
        maxY: -1 / 0
      };
    }

    function v(t, e, i, n, o) {
      for (var s, a = [e, i]; a.length;) {
        (i = a.pop()) - (e = a.pop()) <= n || (s = e + Math.ceil((i - e) / n / 2) * n, r(t, s, e, i, o), a.push(e, s, s, i));
      }
    }

    n.prototype = {
      all: function all() {
        return this._all(this.data, []);
      },
      search: function search(t) {
        var e = this.data,
            i = [],
            r = this.toBBox;
        if (!g(t, e)) return i;

        for (var n, o, s, a, h = []; e;) {
          for (n = 0, o = e.children.length; n < o; n++) {
            s = e.children[n], g(t, a = e.leaf ? r(s) : s) && (e.leaf ? i.push(s) : _(t, a) ? this._all(s, i) : h.push(s));
          }

          e = h.pop();
        }

        return i;
      },
      collides: function collides(t) {
        var e = this.data,
            i = this.toBBox;
        if (!g(t, e)) return !1;

        for (var r, n, o, s, a = []; e;) {
          for (r = 0, n = e.children.length; r < n; r++) {
            if (o = e.children[r], g(t, s = e.leaf ? i(o) : o)) {
              if (e.leaf || _(t, s)) return !0;
              a.push(o);
            }
          }

          e = a.pop();
        }

        return !1;
      },
      load: function load(t) {
        if (!t || !t.length) return this;

        if (t.length < this._minEntries) {
          for (var e = 0, i = t.length; e < i; e++) {
            this.insert(t[e]);
          }

          return this;
        }

        var r = this._build(t.slice(), 0, t.length - 1, 0);

        if (this.data.children.length) {
          if (this.data.height === r.height) this._splitRoot(this.data, r);else {
            if (this.data.height < r.height) {
              var n = this.data;
              this.data = r, r = n;
            }

            this._insert(r, this.data.height - r.height - 1, !0);
          }
        } else this.data = r;
        return this;
      },
      insert: function insert(t) {
        return t && this._insert(t, this.data.height - 1), this;
      },
      clear: function clear() {
        return this.data = y([]), this;
      },
      remove: function remove(t, e) {
        if (!t) return this;

        for (var i, r, n, s, a = this.data, h = this.toBBox(t), l = [], u = []; a || l.length;) {
          if (a || (a = l.pop(), r = l[l.length - 1], i = u.pop(), s = !0), a.leaf && -1 !== (n = o(t, a.children, e))) return a.children.splice(n, 1), l.push(a), this._condense(l), this;
          s || a.leaf || !_(a, h) ? r ? (i++, a = r.children[i], s = !1) : a = null : (l.push(a), u.push(i), i = 0, r = a, a = a.children[0]);
        }

        return this;
      },
      toBBox: function toBBox(t) {
        return t;
      },
      compareMinX: l,
      compareMinY: u,
      toJSON: function toJSON() {
        return this.data;
      },
      fromJSON: function fromJSON(t) {
        return this.data = t, this;
      },
      _all: function _all(t, e) {
        for (var i = []; t;) {
          t.leaf ? e.push.apply(e, t.children) : i.push.apply(i, t.children), t = i.pop();
        }

        return e;
      },
      _build: function _build(t, e, i, r) {
        var n,
            o = i - e + 1,
            a = this._maxEntries;
        if (o <= a) return s(n = y(t.slice(e, i + 1)), this.toBBox), n;
        r || (r = Math.ceil(Math.log(o) / Math.log(a)), a = Math.ceil(o / Math.pow(a, r - 1))), (n = y([])).leaf = !1, n.height = r;
        var h,
            l,
            u,
            p,
            c = Math.ceil(o / a),
            d = c * Math.ceil(Math.sqrt(a));

        for (v(t, e, i, d, this.compareMinX), h = e; h <= i; h += d) {
          for (v(t, h, u = Math.min(h + d - 1, i), c, this.compareMinY), l = h; l <= u; l += c) {
            p = Math.min(l + c - 1, u), n.children.push(this._build(t, l, p, r - 1));
          }
        }

        return s(n, this.toBBox), n;
      },
      _chooseSubtree: function _chooseSubtree(t, e, i, r) {
        for (var n, o, s, a, h, l, u, c; r.push(e), !e.leaf && r.length - 1 !== i;) {
          for (u = c = 1 / 0, n = 0, o = e.children.length; n < o; n++) {
            h = p(s = e.children[n]), (l = d(t, s) - h) < c ? (c = l, u = h < u ? h : u, a = s) : l === c && h < u && (u = h, a = s);
          }

          e = a || e.children[0];
        }

        return e;
      },
      _insert: function _insert(t, e, i) {
        var r = this.toBBox,
            n = i ? t : r(t),
            o = [],
            s = this._chooseSubtree(n, this.data, e, o);

        for (s.children.push(t), h(s, n); e >= 0 && o[e].children.length > this._maxEntries;) {
          this._split(o, e), e--;
        }

        this._adjustParentBBoxes(n, o, e);
      },
      _split: function _split(t, e) {
        var i = t[e],
            r = i.children.length,
            n = this._minEntries;

        this._chooseSplitAxis(i, n, r);

        var o = this._chooseSplitIndex(i, n, r),
            a = y(i.children.splice(o, i.children.length - o));

        a.height = i.height, a.leaf = i.leaf, s(i, this.toBBox), s(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(i, a);
      },
      _splitRoot: function _splitRoot(t, e) {
        this.data = y([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, s(this.data, this.toBBox);
      },
      _chooseSplitIndex: function _chooseSplitIndex(t, e, i) {
        var r, n, o, s, h, l, u, c;

        for (l = u = 1 / 0, r = e; r <= i - e; r++) {
          s = f(n = a(t, 0, r, this.toBBox), o = a(t, r, i, this.toBBox)), h = p(n) + p(o), s < l ? (l = s, c = r, u = h < u ? h : u) : s === l && h < u && (u = h, c = r);
        }

        return c;
      },
      _chooseSplitAxis: function _chooseSplitAxis(t, e, i) {
        var r = t.leaf ? this.compareMinX : l,
            n = t.leaf ? this.compareMinY : u;
        this._allDistMargin(t, e, i, r) < this._allDistMargin(t, e, i, n) && t.children.sort(r);
      },
      _allDistMargin: function _allDistMargin(t, e, i, r) {
        t.children.sort(r);
        var n,
            o,
            s = this.toBBox,
            l = a(t, 0, e, s),
            u = a(t, i - e, i, s),
            p = c(l) + c(u);

        for (n = e; n < i - e; n++) {
          o = t.children[n], h(l, t.leaf ? s(o) : o), p += c(l);
        }

        for (n = i - e - 1; n >= e; n--) {
          o = t.children[n], h(u, t.leaf ? s(o) : o), p += c(u);
        }

        return p;
      },
      _adjustParentBBoxes: function _adjustParentBBoxes(t, e, i) {
        for (var r = i; r >= 0; r--) {
          h(e[r], t);
        }
      },
      _condense: function _condense(t) {
        for (var e, i = t.length - 1; i >= 0; i--) {
          0 === t[i].children.length ? i > 0 ? (e = t[i - 1].children).splice(e.indexOf(t[i]), 1) : this.clear() : s(t[i], this.toBBox);
        }
      },
      _initFormat: function _initFormat(t) {
        var e = ["return a", " - b", ";"];
        this.compareMinX = new Function("a", "b", e.join(t[0])), this.compareMinY = new Function("a", "b", e.join(t[1])), this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
      }
    };
  }, function (t, e, i) {
    "use strict";

    t.exports = n;
    var r = i(6);

    function n(t) {
      this.buf = ArrayBuffer.isView && ArrayBuffer.isView(t) ? t : new Uint8Array(t || 0), this.pos = 0, this.type = 0, this.length = this.buf.length;
    }

    n.Varint = 0, n.Fixed64 = 1, n.Bytes = 2, n.Fixed32 = 5;

    function o(t) {
      return t.type === n.Bytes ? t.readVarint() + t.pos : t.pos + 1;
    }

    function s(t, e, i) {
      return i ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0);
    }

    function a(t, e, i) {
      var r = e <= 16383 ? 1 : e <= 2097151 ? 2 : e <= 268435455 ? 3 : Math.ceil(Math.log(e) / (7 * Math.LN2));
      i.realloc(r);

      for (var n = i.pos - 1; n >= t; n--) {
        i.buf[n + r] = i.buf[n];
      }
    }

    function h(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeVarint(t[i]);
      }
    }

    function l(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeSVarint(t[i]);
      }
    }

    function u(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeFloat(t[i]);
      }
    }

    function p(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeDouble(t[i]);
      }
    }

    function c(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeBoolean(t[i]);
      }
    }

    function d(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeFixed32(t[i]);
      }
    }

    function f(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeSFixed32(t[i]);
      }
    }

    function _(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeFixed64(t[i]);
      }
    }

    function g(t, e) {
      for (var i = 0; i < t.length; i++) {
        e.writeSFixed64(t[i]);
      }
    }

    function y(t, e) {
      return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + 16777216 * t[e + 3];
    }

    function v(t, e, i) {
      t[i] = e, t[i + 1] = e >>> 8, t[i + 2] = e >>> 16, t[i + 3] = e >>> 24;
    }

    function m(t, e) {
      return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + (t[e + 3] << 24);
    }

    n.prototype = {
      destroy: function destroy() {
        this.buf = null;
      },
      readFields: function readFields(t, e, i) {
        for (i = i || this.length; this.pos < i;) {
          var r = this.readVarint(),
              n = r >> 3,
              o = this.pos;
          this.type = 7 & r, t(n, e, this), this.pos === o && this.skip(r);
        }

        return e;
      },
      readMessage: function readMessage(t, e) {
        return this.readFields(t, e, this.readVarint() + this.pos);
      },
      readFixed32: function readFixed32() {
        var t = y(this.buf, this.pos);
        return this.pos += 4, t;
      },
      readSFixed32: function readSFixed32() {
        var t = m(this.buf, this.pos);
        return this.pos += 4, t;
      },
      readFixed64: function readFixed64() {
        var t = y(this.buf, this.pos) + 4294967296 * y(this.buf, this.pos + 4);
        return this.pos += 8, t;
      },
      readSFixed64: function readSFixed64() {
        var t = y(this.buf, this.pos) + 4294967296 * m(this.buf, this.pos + 4);
        return this.pos += 8, t;
      },
      readFloat: function readFloat() {
        var t = r.read(this.buf, this.pos, !0, 23, 4);
        return this.pos += 4, t;
      },
      readDouble: function readDouble() {
        var t = r.read(this.buf, this.pos, !0, 52, 8);
        return this.pos += 8, t;
      },
      readVarint: function readVarint(t) {
        var e,
            i,
            r = this.buf;
        return e = 127 & (i = r[this.pos++]), i < 128 ? e : (e |= (127 & (i = r[this.pos++])) << 7, i < 128 ? e : (e |= (127 & (i = r[this.pos++])) << 14, i < 128 ? e : (e |= (127 & (i = r[this.pos++])) << 21, i < 128 ? e : function (t, e, i) {
          var r,
              n,
              o = i.buf;
          if (n = o[i.pos++], r = (112 & n) >> 4, n < 128) return s(t, r, e);
          if (n = o[i.pos++], r |= (127 & n) << 3, n < 128) return s(t, r, e);
          if (n = o[i.pos++], r |= (127 & n) << 10, n < 128) return s(t, r, e);
          if (n = o[i.pos++], r |= (127 & n) << 17, n < 128) return s(t, r, e);
          if (n = o[i.pos++], r |= (127 & n) << 24, n < 128) return s(t, r, e);
          if (n = o[i.pos++], r |= (1 & n) << 31, n < 128) return s(t, r, e);
          throw new Error("Expected varint not more than 10 bytes");
        }(e |= (15 & (i = r[this.pos])) << 28, t, this))));
      },
      readVarint64: function readVarint64() {
        return this.readVarint(!0);
      },
      readSVarint: function readSVarint() {
        var t = this.readVarint();
        return t % 2 == 1 ? (t + 1) / -2 : t / 2;
      },
      readBoolean: function readBoolean() {
        return Boolean(this.readVarint());
      },
      readString: function readString() {
        var t = this.readVarint() + this.pos,
            e = function (t, e, i) {
          var r = "",
              n = e;

          for (; n < i;) {
            var o,
                s,
                a,
                h = t[n],
                l = null,
                u = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
            if (n + u > i) break;
            1 === u ? h < 128 && (l = h) : 2 === u ? 128 == (192 & (o = t[n + 1])) && (l = (31 & h) << 6 | 63 & o) <= 127 && (l = null) : 3 === u ? (o = t[n + 1], s = t[n + 2], 128 == (192 & o) && 128 == (192 & s) && ((l = (15 & h) << 12 | (63 & o) << 6 | 63 & s) <= 2047 || l >= 55296 && l <= 57343) && (l = null)) : 4 === u && (o = t[n + 1], s = t[n + 2], a = t[n + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && ((l = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) <= 65535 || l >= 1114112) && (l = null)), null === l ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, r += String.fromCharCode(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r += String.fromCharCode(l), n += u;
          }

          return r;
        }(this.buf, this.pos, t);

        return this.pos = t, e;
      },
      readBytes: function readBytes() {
        var t = this.readVarint() + this.pos,
            e = this.buf.subarray(this.pos, t);
        return this.pos = t, e;
      },
      readPackedVarint: function readPackedVarint(t, e) {
        var i = o(this);

        for (t = t || []; this.pos < i;) {
          t.push(this.readVarint(e));
        }

        return t;
      },
      readPackedSVarint: function readPackedSVarint(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readSVarint());
        }

        return t;
      },
      readPackedBoolean: function readPackedBoolean(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readBoolean());
        }

        return t;
      },
      readPackedFloat: function readPackedFloat(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readFloat());
        }

        return t;
      },
      readPackedDouble: function readPackedDouble(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readDouble());
        }

        return t;
      },
      readPackedFixed32: function readPackedFixed32(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readFixed32());
        }

        return t;
      },
      readPackedSFixed32: function readPackedSFixed32(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readSFixed32());
        }

        return t;
      },
      readPackedFixed64: function readPackedFixed64(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readFixed64());
        }

        return t;
      },
      readPackedSFixed64: function readPackedSFixed64(t) {
        var e = o(this);

        for (t = t || []; this.pos < e;) {
          t.push(this.readSFixed64());
        }

        return t;
      },
      skip: function skip(t) {
        var e = 7 & t;
        if (e === n.Varint) for (; this.buf[this.pos++] > 127;) {
          ;
        } else if (e === n.Bytes) this.pos = this.readVarint() + this.pos;else if (e === n.Fixed32) this.pos += 4;else {
          if (e !== n.Fixed64) throw new Error("Unimplemented type: " + e);
          this.pos += 8;
        }
      },
      writeTag: function writeTag(t, e) {
        this.writeVarint(t << 3 | e);
      },
      realloc: function realloc(t) {
        for (var e = this.length || 16; e < this.pos + t;) {
          e *= 2;
        }

        if (e !== this.length) {
          var i = new Uint8Array(e);
          i.set(this.buf), this.buf = i, this.length = e;
        }
      },
      finish: function finish() {
        return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
      },
      writeFixed32: function writeFixed32(t) {
        this.realloc(4), v(this.buf, t, this.pos), this.pos += 4;
      },
      writeSFixed32: function writeSFixed32(t) {
        this.realloc(4), v(this.buf, t, this.pos), this.pos += 4;
      },
      writeFixed64: function writeFixed64(t) {
        this.realloc(8), v(this.buf, -1 & t, this.pos), v(this.buf, Math.floor(t * (1 / 4294967296)), this.pos + 4), this.pos += 8;
      },
      writeSFixed64: function writeSFixed64(t) {
        this.realloc(8), v(this.buf, -1 & t, this.pos), v(this.buf, Math.floor(t * (1 / 4294967296)), this.pos + 4), this.pos += 8;
      },
      writeVarint: function writeVarint(t) {
        (t = +t || 0) > 268435455 || t < 0 ? function (t, e) {
          var i, r;
          t >= 0 ? (i = t % 4294967296 | 0, r = t / 4294967296 | 0) : (r = ~(-t / 4294967296), 4294967295 ^ (i = ~(-t % 4294967296)) ? i = i + 1 | 0 : (i = 0, r = r + 1 | 0));
          if (t >= 0x10000000000000000 || t < -0x10000000000000000) throw new Error("Given varint doesn't fit into 10 bytes");
          e.realloc(10), function (t, e, i) {
            i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos] = 127 & t;
          }(i, 0, e), function (t, e) {
            var i = (7 & t) << 4;
            if (e.buf[e.pos++] |= i | ((t >>>= 3) ? 128 : 0), !t) return;
            if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
            if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
            if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
            if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
            e.buf[e.pos++] = 127 & t;
          }(r, e);
        }(t, this) : (this.realloc(4), this.buf[this.pos++] = 127 & t | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127))));
      },
      writeSVarint: function writeSVarint(t) {
        this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t);
      },
      writeBoolean: function writeBoolean(t) {
        this.writeVarint(Boolean(t));
      },
      writeString: function writeString(t) {
        t = String(t), this.realloc(4 * t.length), this.pos++;
        var e = this.pos;

        this.pos = function (t, e, i) {
          for (var r, n, o = 0; o < e.length; o++) {
            if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
              if (!n) {
                r > 56319 || o + 1 === e.length ? (t[i++] = 239, t[i++] = 191, t[i++] = 189) : n = r;
                continue;
              }

              if (r < 56320) {
                t[i++] = 239, t[i++] = 191, t[i++] = 189, n = r;
                continue;
              }

              r = n - 55296 << 10 | r - 56320 | 65536, n = null;
            } else n && (t[i++] = 239, t[i++] = 191, t[i++] = 189, n = null);

            r < 128 ? t[i++] = r : (r < 2048 ? t[i++] = r >> 6 | 192 : (r < 65536 ? t[i++] = r >> 12 | 224 : (t[i++] = r >> 18 | 240, t[i++] = r >> 12 & 63 | 128), t[i++] = r >> 6 & 63 | 128), t[i++] = 63 & r | 128);
          }

          return i;
        }(this.buf, t, this.pos);

        var i = this.pos - e;
        i >= 128 && a(e, i, this), this.pos = e - 1, this.writeVarint(i), this.pos += i;
      },
      writeFloat: function writeFloat(t) {
        this.realloc(4), r.write(this.buf, t, this.pos, !0, 23, 4), this.pos += 4;
      },
      writeDouble: function writeDouble(t) {
        this.realloc(8), r.write(this.buf, t, this.pos, !0, 52, 8), this.pos += 8;
      },
      writeBytes: function writeBytes(t) {
        var e = t.length;
        this.writeVarint(e), this.realloc(e);

        for (var i = 0; i < e; i++) {
          this.buf[this.pos++] = t[i];
        }
      },
      writeRawMessage: function writeRawMessage(t, e) {
        this.pos++;
        var i = this.pos;
        t(e, this);
        var r = this.pos - i;
        r >= 128 && a(i, r, this), this.pos = i - 1, this.writeVarint(r), this.pos += r;
      },
      writeMessage: function writeMessage(t, e, i) {
        this.writeTag(t, n.Bytes), this.writeRawMessage(e, i);
      },
      writePackedVarint: function writePackedVarint(t, e) {
        this.writeMessage(t, h, e);
      },
      writePackedSVarint: function writePackedSVarint(t, e) {
        this.writeMessage(t, l, e);
      },
      writePackedBoolean: function writePackedBoolean(t, e) {
        this.writeMessage(t, c, e);
      },
      writePackedFloat: function writePackedFloat(t, e) {
        this.writeMessage(t, u, e);
      },
      writePackedDouble: function writePackedDouble(t, e) {
        this.writeMessage(t, p, e);
      },
      writePackedFixed32: function writePackedFixed32(t, e) {
        this.writeMessage(t, d, e);
      },
      writePackedSFixed32: function writePackedSFixed32(t, e) {
        this.writeMessage(t, f, e);
      },
      writePackedFixed64: function writePackedFixed64(t, e) {
        this.writeMessage(t, _, e);
      },
      writePackedSFixed64: function writePackedSFixed64(t, e) {
        this.writeMessage(t, g, e);
      },
      writeBytesField: function writeBytesField(t, e) {
        this.writeTag(t, n.Bytes), this.writeBytes(e);
      },
      writeFixed32Field: function writeFixed32Field(t, e) {
        this.writeTag(t, n.Fixed32), this.writeFixed32(e);
      },
      writeSFixed32Field: function writeSFixed32Field(t, e) {
        this.writeTag(t, n.Fixed32), this.writeSFixed32(e);
      },
      writeFixed64Field: function writeFixed64Field(t, e) {
        this.writeTag(t, n.Fixed64), this.writeFixed64(e);
      },
      writeSFixed64Field: function writeSFixed64Field(t, e) {
        this.writeTag(t, n.Fixed64), this.writeSFixed64(e);
      },
      writeVarintField: function writeVarintField(t, e) {
        this.writeTag(t, n.Varint), this.writeVarint(e);
      },
      writeSVarintField: function writeSVarintField(t, e) {
        this.writeTag(t, n.Varint), this.writeSVarint(e);
      },
      writeStringField: function writeStringField(t, e) {
        this.writeTag(t, n.Bytes), this.writeString(e);
      },
      writeFloatField: function writeFloatField(t, e) {
        this.writeTag(t, n.Fixed32), this.writeFloat(e);
      },
      writeDoubleField: function writeDoubleField(t, e) {
        this.writeTag(t, n.Fixed64), this.writeDouble(e);
      },
      writeBooleanField: function writeBooleanField(t, e) {
        this.writeVarintField(t, Boolean(e));
      }
    };
  }, function (t, e, i) {
    var r = i(7);
    e.Processor = r;
  },,, function (t, e, i) {
    t.exports = function () {
      "use strict";

      function t(t, e, i) {
        var r = t[e];
        t[e] = t[i], t[i] = r;
      }

      function e(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }

      return function (i, r, n, o, s) {
        !function e(i, r, n, o, s) {
          for (; o > n;) {
            if (o - n > 600) {
              var a = o - n + 1,
                  h = r - n + 1,
                  l = Math.log(a),
                  u = .5 * Math.exp(2 * l / 3),
                  p = .5 * Math.sqrt(l * u * (a - u) / a) * (h - a / 2 < 0 ? -1 : 1),
                  c = Math.max(n, Math.floor(r - h * u / a + p)),
                  d = Math.min(o, Math.floor(r + (a - h) * u / a + p));
              e(i, r, c, d, s);
            }

            var f = i[r],
                _ = n,
                g = o;

            for (t(i, n, r), s(i[o], f) > 0 && t(i, n, o); _ < g;) {
              for (t(i, _, g), _++, g--; s(i[_], f) < 0;) {
                _++;
              }

              for (; s(i[g], f) > 0;) {
                g--;
              }
            }

            0 === s(i[n], f) ? t(i, n, g) : t(i, ++g, o), g <= r && (n = g + 1), r <= g && (o = g - 1);
          }
        }(i, r, n || 0, o || i.length - 1, s || e);
      };
    }();
  }, function (t, e) {
    e.read = function (t, e, i, r, n) {
      var o,
          s,
          a = 8 * n - r - 1,
          h = (1 << a) - 1,
          l = h >> 1,
          u = -7,
          p = i ? n - 1 : 0,
          c = i ? -1 : 1,
          d = t[e + p];

      for (p += c, o = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; o = 256 * o + t[e + p], p += c, u -= 8) {
        ;
      }

      for (s = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; s = 256 * s + t[e + p], p += c, u -= 8) {
        ;
      }

      if (0 === o) o = 1 - l;else {
        if (o === h) return s ? NaN : 1 / 0 * (d ? -1 : 1);
        s += Math.pow(2, r), o -= l;
      }
      return (d ? -1 : 1) * s * Math.pow(2, o - r);
    }, e.write = function (t, e, i, r, n, o) {
      var s,
          a,
          h,
          l = 8 * o - n - 1,
          u = (1 << l) - 1,
          p = u >> 1,
          c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : o - 1,
          f = r ? 1 : -1,
          _ = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -s)) < 1 && (s--, h *= 2), (e += s + p >= 1 ? c / h : c * Math.pow(2, 1 - p)) * h >= 2 && (s++, h /= 2), s + p >= u ? (a = 0, s = u) : s + p >= 1 ? (a = (e * h - 1) * Math.pow(2, n), s += p) : (a = e * Math.pow(2, p - 1) * Math.pow(2, n), s = 0)); n >= 8; t[i + d] = 255 & a, d += f, a /= 256, n -= 8) {
        ;
      }

      for (s = s << n | a, l += n; l > 0; t[i + d] = 255 & s, d += f, s /= 256, l -= 8) {
        ;
      }

      t[i + d - f] |= 128 * _;
    };
  }, function (t, e, i) {
    var r = i(8).newImageData;

    function n(t) {
      var e = !0;

      try {
        new ImageData(10, 10);
      } catch (t) {
        e = !1;
      }

      function i(t, i, r) {
        return e ? new ImageData(t, i, r) : {
          data: t,
          width: i,
          height: r
        };
      }

      return function (e) {
        var r,
            n,
            o = e.buffers,
            s = e.meta,
            a = e.imageOps,
            h = e.width,
            l = e.height,
            u = o.length,
            p = o[0].byteLength;

        if (a) {
          var c = new Array(u);

          for (n = 0; n < u; ++n) {
            c[n] = i(new Uint8ClampedArray(o[n]), h, l);
          }

          r = t(c, s).data;
        } else {
          r = new Uint8ClampedArray(p);
          var d = new Array(u),
              f = new Array(u);

          for (n = 0; n < u; ++n) {
            d[n] = new Uint8ClampedArray(o[n]), f[n] = [0, 0, 0, 0];
          }

          for (var _ = 0; _ < p; _ += 4) {
            for (var g = 0; g < u; ++g) {
              var y = d[g];
              f[g][0] = y[_], f[g][1] = y[_ + 1], f[g][2] = y[_ + 2], f[g][3] = y[_ + 3];
            }

            var v = t(f, s);
            r[_] = v[0], r[_ + 1] = v[1], r[_ + 2] = v[2], r[_ + 3] = v[3];
          }
        }

        return r.buffer;
      };
    }

    function o(t, e) {
      var i = Object.keys(t.lib || {}).map(function (e) {
        return "var " + e + " = " + t.lib[e].toString() + ";";
      }).concat(["var __minion__ = (" + n.toString() + ")(", t.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]),
          r = new Blob(i, {
        type: "text/javascript"
      }),
          o = URL.createObjectURL(r),
          s = new Worker(o);
      return s.addEventListener("message", e), s;
    }

    function s(t) {
      var e;
      this._imageOps = !!t.imageOps;
      var i = [];
      if (e = 0 === t.threads ? 0 : this._imageOps ? 1 : t.threads || 1) for (var r = 0; r < e; ++r) {
        i[r] = o(t, this._onWorkerMessage.bind(this, r));
      } else i[0] = function (t, e) {
        var i = n(t.operation);
        return {
          postMessage: function postMessage(t) {
            setTimeout(function () {
              e({
                data: {
                  buffer: i(t),
                  meta: t.meta
                }
              });
            }, 0);
          }
        };
      }(t, this._onWorkerMessage.bind(this, 0));
      this._workers = i, this._queue = [], this._maxQueueLength = t.queue || 1 / 0, this._running = 0, this._dataLookup = {}, this._job = null;
    }

    s.prototype.process = function (t, e, i) {
      this._enqueue({
        inputs: t,
        meta: e,
        callback: i
      }), this._dispatch();
    }, s.prototype.destroy = function () {
      for (var t in this) {
        this[t] = null;
      }

      this._destroyed = !0;
    }, s.prototype._enqueue = function (t) {
      for (this._queue.push(t); this._queue.length > this._maxQueueLength;) {
        this._queue.shift().callback(null, null);
      }
    }, s.prototype._dispatch = function () {
      if (0 === this._running && this._queue.length > 0) {
        var t = this._job = this._queue.shift(),
            e = t.inputs[0].width,
            i = t.inputs[0].height,
            r = t.inputs.map(function (t) {
          return t.data.buffer;
        }),
            n = this._workers.length;

        if (this._running = n, 1 === n) this._workers[0].postMessage({
          buffers: r,
          meta: t.meta,
          imageOps: this._imageOps,
          width: e,
          height: i
        }, r);else for (var o = t.inputs[0].data.length, s = 4 * Math.ceil(o / 4 / n), a = 0; a < n; ++a) {
          for (var h = a * s, l = [], u = 0, p = r.length; u < p; ++u) {
            l.push(r[a].slice(h, h + s));
          }

          this._workers[a].postMessage({
            buffers: l,
            meta: t.meta,
            imageOps: this._imageOps,
            width: e,
            height: i
          }, l);
        }
      }
    }, s.prototype._onWorkerMessage = function (t, e) {
      this._destroyed || (this._dataLookup[t] = e.data, --this._running, 0 === this._running && this._resolveJob());
    }, s.prototype._resolveJob = function () {
      var t,
          e,
          i = this._job,
          n = this._workers.length;
      if (1 === n) t = new Uint8ClampedArray(this._dataLookup[0].buffer), e = this._dataLookup[0].meta;else {
        var o = i.inputs[0].data.length;
        t = new Uint8ClampedArray(o), e = new Array(o);

        for (var s = 4 * Math.ceil(o / 4 / n), a = 0; a < n; ++a) {
          var h = this._dataLookup[a].buffer,
              l = a * s;
          t.set(new Uint8ClampedArray(h), l), e[a] = this._dataLookup[a].meta;
        }
      }
      this._job = null, this._dataLookup = {}, i.callback(null, r(t, i.inputs[0].width, i.inputs[0].height), e), this._dispatch();
    }, t.exports = s;
  }, function (t, e) {
    var i = !0;

    try {
      new ImageData(10, 10);
    } catch (t) {
      i = !1;
    }

    var r = document.createElement("canvas").getContext("2d");

    e.newImageData = function (t, e, n) {
      if (i) return new ImageData(t, e, n);
      var o = r.createImageData(e, n);
      return o.data.set(t), o;
    };
  }, function (t, e, i) {
    "use strict";

    function r() {
      return function () {
        throw new Error("Unimplemented abstract method.");
      }();
    }

    i.r(e);
    var n = 0;

    function o(t) {
      return t.ol_uid || (t.ol_uid = String(++n));
    }

    var s = "5.3.0",
        a = function (t) {
      function e(e) {
        var i = "Assertion failed. See https://openlayers.org/en/" + ("latest" === s ? s : "v" + s.split("-")[0]) + "/doc/errors/#" + e + " for details.";
        t.call(this, i), this.code = e, this.name = "AssertionError", this.message = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Error),
        h = {
      ADD: "add",
      REMOVE: "remove"
    },
        l = "propertychange",
        u = "function" == typeof Object.assign ? Object.assign : function (t, e) {
      var i = arguments;
      if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");

      for (var r = Object(t), n = 1, o = arguments.length; n < o; ++n) {
        var s = i[n];
        if (void 0 !== s && null !== s) for (var a in s) {
          s.hasOwnProperty(a) && (r[a] = s[a]);
        }
      }

      return r;
    };

    function p(t) {
      for (var e in t) {
        delete t[e];
      }
    }

    function c(t) {
      var e = [];

      for (var i in t) {
        e.push(t[i]);
      }

      return e;
    }

    function d(t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !e;
    }

    function f(t, e, i, r) {
      for (var n, o = 0, s = t.length; o < s; ++o) {
        if ((n = t[o]).listener === e && n.bindTo === i) return r && (n.deleteIndex = o), n;
      }
    }

    function _(t, e) {
      var i = g(t);
      return i ? i[e] : void 0;
    }

    function g(t, e) {
      var i = t.ol_lm;
      return !i && e && (i = t.ol_lm = {}), i;
    }

    function y(t, e) {
      var i = _(t, e);

      if (i) {
        for (var r = 0, n = i.length; r < n; ++r) {
          t.removeEventListener(e, i[r].boundListener), p(i[r]);
        }

        i.length = 0;
        var o = g(t);
        o && (delete o[e], 0 === Object.keys(o).length && function (t) {
          delete t.ol_lm;
        }(t));
      }
    }

    function v(t, e, i, r, n) {
      var o = g(t, !0),
          s = o[e];
      s || (s = o[e] = []);
      var a = f(s, i, r, !1);
      return a ? n || (a.callOnce = !1) : (a = {
        bindTo: r,
        callOnce: !!n,
        listener: i,
        target: t,
        type: e
      }, t.addEventListener(e, function (t) {
        var e = function e(_e2) {
          var i = t.listener,
              r = t.bindTo || t.target;
          return t.callOnce && E(t), i.call(r, _e2);
        };

        return t.boundListener = e, e;
      }(a)), s.push(a)), a;
    }

    function m(t, e, i, r) {
      return v(t, e, i, r, !0);
    }

    function x(t, e, i, r) {
      var n = _(t, e);

      if (n) {
        var o = f(n, i, r, !0);
        o && E(o);
      }
    }

    function E(t) {
      if (t && t.target) {
        t.target.removeEventListener(t.type, t.boundListener);

        var e = _(t.target, t.type);

        if (e) {
          var i = "deleteIndex" in t ? t.deleteIndex : e.indexOf(t);
          -1 !== i && e.splice(i, 1), 0 === e.length && y(t.target, t.type);
        }

        p(t);
      }
    }

    function S(t) {
      var e = g(t);
      if (e) for (var i in e) {
        y(t, i);
      }
    }

    var T = function T() {
      this.disposed_ = !1;
    };

    T.prototype.dispose = function () {
      this.disposed_ || (this.disposed_ = !0, this.disposeInternal());
    }, T.prototype.disposeInternal = function () {};
    var C = T;

    function R() {
      return !0;
    }

    function w() {
      return !1;
    }

    function I() {}

    var L = function L(t) {
      this.propagationStopped, this.type = t, this.target = null;
    };

    function O(t) {
      t.stopPropagation();
    }

    L.prototype.preventDefault = function () {
      this.propagationStopped = !0;
    }, L.prototype.stopPropagation = function () {
      this.propagationStopped = !0;
    };

    var P = L,
        b = function (t) {
      function e() {
        t.call(this), this.pendingRemovals_ = {}, this.dispatching_ = {}, this.listeners_ = {};
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addEventListener = function (t, e) {
        var i = this.listeners_[t];
        i || (i = this.listeners_[t] = []), -1 === i.indexOf(e) && i.push(e);
      }, e.prototype.dispatchEvent = function (t) {
        var e = "string" == typeof t ? new P(t) : t,
            i = e.type;
        e.target = this;
        var r,
            n = this.listeners_[i];

        if (n) {
          i in this.dispatching_ || (this.dispatching_[i] = 0, this.pendingRemovals_[i] = 0), ++this.dispatching_[i];

          for (var o = 0, s = n.length; o < s; ++o) {
            if (!1 === n[o].call(this, e) || e.propagationStopped) {
              r = !1;
              break;
            }
          }

          if (--this.dispatching_[i], 0 === this.dispatching_[i]) {
            var a = this.pendingRemovals_[i];

            for (delete this.pendingRemovals_[i]; a--;) {
              this.removeEventListener(i, I);
            }

            delete this.dispatching_[i];
          }

          return r;
        }
      }, e.prototype.disposeInternal = function () {
        S(this);
      }, e.prototype.getListeners = function (t) {
        return this.listeners_[t];
      }, e.prototype.hasListener = function (t) {
        return t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0;
      }, e.prototype.removeEventListener = function (t, e) {
        var i = this.listeners_[t];

        if (i) {
          var r = i.indexOf(e);
          t in this.pendingRemovals_ ? (i[r] = I, ++this.pendingRemovals_[t]) : (i.splice(r, 1), 0 === i.length && delete this.listeners_[t]);
        }
      }, e;
    }(C),
        M = {
      CHANGE: "change",
      CLEAR: "clear",
      CONTEXTMENU: "contextmenu",
      CLICK: "click",
      DBLCLICK: "dblclick",
      DRAGENTER: "dragenter",
      DRAGOVER: "dragover",
      DROP: "drop",
      ERROR: "error",
      KEYDOWN: "keydown",
      KEYPRESS: "keypress",
      LOAD: "load",
      MOUSEDOWN: "mousedown",
      MOUSEMOVE: "mousemove",
      MOUSEOUT: "mouseout",
      MOUSEUP: "mouseup",
      MOUSEWHEEL: "mousewheel",
      MSPOINTERDOWN: "MSPointerDown",
      RESIZE: "resize",
      TOUCHSTART: "touchstart",
      TOUCHMOVE: "touchmove",
      TOUCHEND: "touchend",
      WHEEL: "wheel"
    };

    var F = function (t) {
      function e() {
        t.call(this), this.revision_ = 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.changed = function () {
        ++this.revision_, this.dispatchEvent(M.CHANGE);
      }, e.prototype.getRevision = function () {
        return this.revision_;
      }, e.prototype.on = function (t, e) {
        if (Array.isArray(t)) {
          for (var i = t.length, r = new Array(i), n = 0; n < i; ++n) {
            r[n] = v(this, t[n], e);
          }

          return r;
        }

        return v(this, t, e);
      }, e.prototype.once = function (t, e) {
        if (Array.isArray(t)) {
          for (var i = t.length, r = new Array(i), n = 0; n < i; ++n) {
            r[n] = m(this, t[n], e);
          }

          return r;
        }

        return m(this, t, e);
      }, e.prototype.un = function (t, e) {
        if (Array.isArray(t)) for (var i = 0, r = t.length; i < r; ++i) {
          x(this, t[i], e);
        } else x(this, t, e);
      }, e;
    }(b),
        A = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.key = i, this.oldValue = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        N = {};

    function G(t) {
      return N.hasOwnProperty(t) ? N[t] : N[t] = "change:" + t;
    }

    var D = function (t) {
      function e(e) {
        t.call(this), o(this), this.values_ = {}, void 0 !== e && this.setProperties(e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function (t) {
        var e;
        return this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
      }, e.prototype.getKeys = function () {
        return Object.keys(this.values_);
      }, e.prototype.getProperties = function () {
        return u({}, this.values_);
      }, e.prototype.notify = function (t, e) {
        var i;
        i = G(t), this.dispatchEvent(new A(i, t, e)), i = l, this.dispatchEvent(new A(i, t, e));
      }, e.prototype.set = function (t, e, i) {
        if (i) this.values_[t] = e;else {
          var r = this.values_[t];
          this.values_[t] = e, r !== e && this.notify(t, r);
        }
      }, e.prototype.setProperties = function (t, e) {
        for (var i in t) {
          this.set(i, t[i], e);
        }
      }, e.prototype.unset = function (t, e) {
        if (t in this.values_) {
          var i = this.values_[t];
          delete this.values_[t], e || this.notify(t, i);
        }
      }, e;
    }(F),
        k = "length",
        j = function (t) {
      function e(e, i) {
        t.call(this, e), this.element = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        U = function (t) {
      function e(e, i) {
        t.call(this);
        var r = i || {};
        if (this.unique_ = !!r.unique, this.array_ = e || [], this.unique_) for (var n = 0, o = this.array_.length; n < o; ++n) {
          this.assertUnique_(this.array_[n], n);
        }
        this.updateLength_();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clear = function () {
        for (; this.getLength() > 0;) {
          this.pop();
        }
      }, e.prototype.extend = function (t) {
        for (var e = 0, i = t.length; e < i; ++e) {
          this.push(t[e]);
        }

        return this;
      }, e.prototype.forEach = function (t) {
        for (var e = this.array_, i = 0, r = e.length; i < r; ++i) {
          t(e[i], i, e);
        }
      }, e.prototype.getArray = function () {
        return this.array_;
      }, e.prototype.item = function (t) {
        return this.array_[t];
      }, e.prototype.getLength = function () {
        return this.get(k);
      }, e.prototype.insertAt = function (t, e) {
        this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(new j(h.ADD, e));
      }, e.prototype.pop = function () {
        return this.removeAt(this.getLength() - 1);
      }, e.prototype.push = function (t) {
        this.unique_ && this.assertUnique_(t);
        var e = this.getLength();
        return this.insertAt(e, t), this.getLength();
      }, e.prototype.remove = function (t) {
        for (var e = this.array_, i = 0, r = e.length; i < r; ++i) {
          if (e[i] === t) return this.removeAt(i);
        }
      }, e.prototype.removeAt = function (t) {
        var e = this.array_[t];
        return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new j(h.REMOVE, e)), e;
      }, e.prototype.setAt = function (t, e) {
        var i = this.getLength();

        if (t < i) {
          this.unique_ && this.assertUnique_(e, t);
          var r = this.array_[t];
          this.array_[t] = e, this.dispatchEvent(new j(h.REMOVE, r)), this.dispatchEvent(new j(h.ADD, e));
        } else {
          for (var n = i; n < t; ++n) {
            this.insertAt(n, void 0);
          }

          this.insertAt(t, e);
        }
      }, e.prototype.updateLength_ = function () {
        this.set(k, this.array_.length);
      }, e.prototype.assertUnique_ = function (t, e) {
        for (var i = 0, r = this.array_.length; i < r; ++i) {
          if (this.array_[i] === t && i !== e) throw new a(58);
        }
      }, e;
    }(D);

    function Y(t, e) {
      if (!t) throw new a(e);
    }

    var B = function (t) {
      function e(e) {
        if (t.call(this), this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, v(this, G(this.geometryName_), this.handleGeometryChanged_, this), e) if ("function" == typeof e.getSimplifiedGeometry) {
          var i = e;
          this.setGeometry(i);
        } else {
          var r = e;
          this.setProperties(r);
        }
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        var t = new e(this.getProperties());
        t.setGeometryName(this.getGeometryName());
        var i = this.getGeometry();
        i && t.setGeometry(i.clone());
        var r = this.getStyle();
        return r && t.setStyle(r), t;
      }, e.prototype.getGeometry = function () {
        return this.get(this.geometryName_);
      }, e.prototype.getId = function () {
        return this.id_;
      }, e.prototype.getGeometryName = function () {
        return this.geometryName_;
      }, e.prototype.getStyle = function () {
        return this.style_;
      }, e.prototype.getStyleFunction = function () {
        return this.styleFunction_;
      }, e.prototype.handleGeometryChange_ = function () {
        this.changed();
      }, e.prototype.handleGeometryChanged_ = function () {
        this.geometryChangeKey_ && (E(this.geometryChangeKey_), this.geometryChangeKey_ = null);
        var t = this.getGeometry();
        t && (this.geometryChangeKey_ = v(t, M.CHANGE, this.handleGeometryChange_, this)), this.changed();
      }, e.prototype.setGeometry = function (t) {
        this.set(this.geometryName_, t);
      }, e.prototype.setStyle = function (t) {
        this.style_ = t, this.styleFunction_ = t ? function (t) {
          if ("function" == typeof t) return t;
          var e;
          if (Array.isArray(t)) e = t;else {
            Y("function" == typeof t.getZIndex, 41);
            var i = t;
            e = [i];
          }
          return function () {
            return e;
          };
        }(t) : void 0, this.changed();
      }, e.prototype.setId = function (t) {
        this.id_ = t, this.changed();
      }, e.prototype.setGeometryName = function (t) {
        x(this, G(this.geometryName_), this.handleGeometryChanged_, this), this.geometryName_ = t, v(this, G(this.geometryName_), this.handleGeometryChanged_, this), this.handleGeometryChanged_();
      }, e;
    }(D);

    function V(t, e) {
      return t > e ? 1 : t < e ? -1 : 0;
    }

    function X(t, e) {
      return t.indexOf(e) >= 0;
    }

    function z(t, e, i) {
      var r,
          n = t.length;
      if (t[0] <= e) return 0;
      if (e <= t[n - 1]) return n - 1;

      if (i > 0) {
        for (r = 1; r < n; ++r) {
          if (t[r] < e) return r - 1;
        }
      } else if (i < 0) {
        for (r = 1; r < n; ++r) {
          if (t[r] <= e) return r;
        }
      } else for (r = 1; r < n; ++r) {
        if (t[r] == e) return r;
        if (t[r] < e) return t[r - 1] - e < e - t[r] ? r - 1 : r;
      }

      return n - 1;
    }

    function W(t, e, i) {
      for (; e < i;) {
        var r = t[e];
        t[e] = t[i], t[i] = r, ++e, --i;
      }
    }

    function K(t, e) {
      for (var i = Array.isArray(e) ? e : [e], r = i.length, n = 0; n < r; n++) {
        t[t.length] = i[n];
      }
    }

    function H(t, e) {
      for (var i, r = t.length >>> 0, n = 0; n < r; n++) {
        if (e(i = t[n], n, t)) return i;
      }

      return null;
    }

    function Z(t, e) {
      var i = t.length;
      if (i !== e.length) return !1;

      for (var r = 0; r < i; r++) {
        if (t[r] !== e[r]) return !1;
      }

      return !0;
    }

    function q(t, e) {
      var i,
          r = t.length,
          n = Array(t.length);

      for (i = 0; i < r; i++) {
        n[i] = {
          index: i,
          value: t[i]
        };
      }

      for (n.sort(function (t, i) {
        return e(t.value, i.value) || t.index - i.index;
      }), i = 0; i < t.length; i++) {
        t[i] = n[i].value;
      }
    }

    function J(t, e) {
      var i;
      return !t.every(function (r, n) {
        return i = n, !e(r, n, t);
      }) ? i : -1;
    }

    var Q = {
      BOTTOM_LEFT: "bottom-left",
      BOTTOM_RIGHT: "bottom-right",
      TOP_LEFT: "top-left",
      TOP_RIGHT: "top-right"
    },
        $ = {
      UNKNOWN: 0,
      INTERSECTING: 1,
      ABOVE: 2,
      RIGHT: 4,
      BELOW: 8,
      LEFT: 16
    };

    function tt(t) {
      for (var e = ht(), i = 0, r = t.length; i < r; ++i) {
        _t(e, t[i]);
      }

      return e;
    }

    function et(t, e, i) {
      return i ? (i[0] = t[0] - e, i[1] = t[1] - e, i[2] = t[2] + e, i[3] = t[3] + e, i) : [t[0] - e, t[1] - e, t[2] + e, t[3] + e];
    }

    function it(t, e) {
      return e ? (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e) : t.slice();
    }

    function rt(t, e, i) {
      var r, n;
      return (r = e < t[0] ? t[0] - e : t[2] < e ? e - t[2] : 0) * r + (n = i < t[1] ? t[1] - i : t[3] < i ? i - t[3] : 0) * n;
    }

    function nt(t, e) {
      return st(t, e[0], e[1]);
    }

    function ot(t, e) {
      return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3];
    }

    function st(t, e, i) {
      return t[0] <= e && e <= t[2] && t[1] <= i && i <= t[3];
    }

    function at(t, e) {
      var i = t[0],
          r = t[1],
          n = t[2],
          o = t[3],
          s = e[0],
          a = e[1],
          h = $.UNKNOWN;
      return s < i ? h |= $.LEFT : s > n && (h |= $.RIGHT), a < r ? h |= $.BELOW : a > o && (h |= $.ABOVE), h === $.UNKNOWN && (h = $.INTERSECTING), h;
    }

    function ht() {
      return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    }

    function lt(t, e, i, r, n) {
      return n ? (n[0] = t, n[1] = e, n[2] = i, n[3] = r, n) : [t, e, i, r];
    }

    function ut(t) {
      return lt(1 / 0, 1 / 0, -1 / 0, -1 / 0, t);
    }

    function pt(t, e) {
      var i = t[0],
          r = t[1];
      return lt(i, r, i, r, e);
    }

    function ct(t, e, i, r, n) {
      return yt(ut(n), t, e, i, r);
    }

    function dt(t, e) {
      return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3];
    }

    function ft(t, e) {
      return e[0] < t[0] && (t[0] = e[0]), e[2] > t[2] && (t[2] = e[2]), e[1] < t[1] && (t[1] = e[1]), e[3] > t[3] && (t[3] = e[3]), t;
    }

    function _t(t, e) {
      e[0] < t[0] && (t[0] = e[0]), e[0] > t[2] && (t[2] = e[0]), e[1] < t[1] && (t[1] = e[1]), e[1] > t[3] && (t[3] = e[1]);
    }

    function gt(t, e) {
      for (var i = 0, r = e.length; i < r; ++i) {
        _t(t, e[i]);
      }

      return t;
    }

    function yt(t, e, i, r, n) {
      for (; i < r; i += n) {
        vt(t, e[i], e[i + 1]);
      }

      return t;
    }

    function vt(t, e, i) {
      t[0] = Math.min(t[0], e), t[1] = Math.min(t[1], i), t[2] = Math.max(t[2], e), t[3] = Math.max(t[3], i);
    }

    function mt(t, e, i) {
      var r;
      return (r = e.call(i, Et(t))) ? r : (r = e.call(i, St(t))) ? r : (r = e.call(i, Lt(t))) ? r : (r = e.call(i, It(t))) || !1;
    }

    function xt(t) {
      var e = 0;
      return bt(t) || (e = Ot(t) * Rt(t)), e;
    }

    function Et(t) {
      return [t[0], t[1]];
    }

    function St(t) {
      return [t[2], t[1]];
    }

    function Tt(t) {
      return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2];
    }

    function Ct(t, e, i, r, n) {
      var o = e * r[0] / 2,
          s = e * r[1] / 2,
          a = Math.cos(i),
          h = Math.sin(i),
          l = o * a,
          u = o * h,
          p = s * a,
          c = s * h,
          d = t[0],
          f = t[1],
          _ = d - l + c,
          g = d - l - c,
          y = d + l - c,
          v = d + l + c,
          m = f - u - p,
          x = f - u + p,
          E = f + u + p,
          S = f + u - p;

      return lt(Math.min(_, g, y, v), Math.min(m, x, E, S), Math.max(_, g, y, v), Math.max(m, x, E, S), n);
    }

    function Rt(t) {
      return t[3] - t[1];
    }

    function wt(t, e, i) {
      var r = i || [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return Pt(t, e) ? (t[0] > e[0] ? r[0] = t[0] : r[0] = e[0], t[1] > e[1] ? r[1] = t[1] : r[1] = e[1], t[2] < e[2] ? r[2] = t[2] : r[2] = e[2], t[3] < e[3] ? r[3] = t[3] : r[3] = e[3]) : ut(r), r;
    }

    function It(t) {
      return [t[0], t[3]];
    }

    function Lt(t) {
      return [t[2], t[3]];
    }

    function Ot(t) {
      return t[2] - t[0];
    }

    function Pt(t, e) {
      return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
    }

    function bt(t) {
      return t[2] < t[0] || t[3] < t[1];
    }

    function Mt(t, e) {
      var i = (t[2] - t[0]) / 2 * (e - 1),
          r = (t[3] - t[1]) / 2 * (e - 1);
      t[0] -= i, t[2] += i, t[1] -= r, t[3] += r;
    }

    function Ft(t, e, i) {
      var r = [t[0], t[1], t[0], t[3], t[2], t[1], t[2], t[3]];
      return e(r, r, 2), function (t, e, i) {
        return lt(Math.min.apply(null, t), Math.min.apply(null, e), Math.max.apply(null, t), Math.max.apply(null, e), i);
      }([r[0], r[2], r[4], r[6]], [r[1], r[3], r[5], r[7]], i);
    }

    var At = {
      XY: "XY",
      XYZ: "XYZ",
      XYM: "XYM",
      XYZM: "XYZM"
    },
        Nt = {
      POINT: "Point",
      LINE_STRING: "LineString",
      LINEAR_RING: "LinearRing",
      POLYGON: "Polygon",
      MULTI_POINT: "MultiPoint",
      MULTI_LINE_STRING: "MultiLineString",
      MULTI_POLYGON: "MultiPolygon",
      GEOMETRY_COLLECTION: "GeometryCollection",
      CIRCLE: "Circle"
    };

    function Gt(t, e, i, r, n, o) {
      for (var s = o || [], a = 0, h = e; h < i; h += r) {
        var l = t[h],
            u = t[h + 1];
        s[a++] = n[0] * l + n[2] * u + n[4], s[a++] = n[1] * l + n[3] * u + n[5];
      }

      return o && s.length != a && (s.length = a), s;
    }

    function Dt(t, e, i, r, n, o, s) {
      for (var a = s || [], h = 0, l = e; l < i; l += r) {
        a[h++] = t[l] + n, a[h++] = t[l + 1] + o;

        for (var u = l + 2; u < l + r; ++u) {
          a[h++] = t[u];
        }
      }

      return s && a.length != h && (a.length = h), a;
    }

    function kt(t, e, i) {
      return Math.min(Math.max(t, e), i);
    }

    var jt = "cosh" in Math ? Math.cosh : function (t) {
      var e = Math.exp(t);
      return (e + 1 / e) / 2;
    };

    function Ut(t, e, i, r, n, o) {
      var s = n - i,
          a = o - r;

      if (0 !== s || 0 !== a) {
        var h = ((t - i) * s + (e - r) * a) / (s * s + a * a);
        h > 1 ? (i = n, r = o) : h > 0 && (i += s * h, r += a * h);
      }

      return Yt(t, e, i, r);
    }

    function Yt(t, e, i, r) {
      var n = i - t,
          o = r - e;
      return n * n + o * o;
    }

    function Bt(t) {
      return 180 * t / Math.PI;
    }

    function Vt(t) {
      return t * Math.PI / 180;
    }

    function Xt(t, e) {
      var i = t % e;
      return i * e < 0 ? i + e : i;
    }

    function zt(t, e, i) {
      return t + i * (e - t);
    }
    /**
     * @license
     * Latitude/longitude spherical geodesy formulae taken from
     * http://www.movable-type.co.uk/scripts/latlong.html
     * Licensed under CC-BY-3.0.
     */


    var Wt = 6371008.8;

    function Kt(t, e, i) {
      var r = i || Wt,
          n = Vt(t[1]),
          o = Vt(e[1]),
          s = (o - n) / 2,
          a = Vt(e[0] - t[0]) / 2,
          h = Math.sin(s) * Math.sin(s) + Math.sin(a) * Math.sin(a) * Math.cos(n) * Math.cos(o);
      return 2 * r * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
    }

    function Ht(t, e) {
      for (var i = 0, r = 0, n = t.length; r < n - 1; ++r) {
        i += Kt(t[r], t[r + 1], e);
      }

      return i;
    }

    function Zt(t, e) {
      for (var i = 0, r = t.length, n = t[r - 1][0], o = t[r - 1][1], s = 0; s < r; s++) {
        var a = t[s][0],
            h = t[s][1];
        i += Vt(a - n) * (2 + Math.sin(Vt(o)) + Math.sin(Vt(h))), n = a, o = h;
      }

      return i * e * e / 2;
    }

    function qt(t, e, i, r) {
      var n = r || Wt,
          o = Vt(t[1]),
          s = Vt(t[0]),
          a = e / n,
          h = Math.asin(Math.sin(o) * Math.cos(a) + Math.cos(o) * Math.sin(a) * Math.cos(i));
      return [Bt(s + Math.atan2(Math.sin(i) * Math.sin(a) * Math.cos(o), Math.cos(a) - Math.sin(o) * Math.sin(h))), Bt(h)];
    }

    var Jt = {
      DEGREES: "degrees",
      FEET: "ft",
      METERS: "m",
      PIXELS: "pixels",
      TILE_PIXELS: "tile-pixels",
      USFEET: "us-ft"
    },
        Qt = {};
    Qt[Jt.DEGREES] = 2 * Math.PI * 6370997 / 360, Qt[Jt.FEET] = .3048, Qt[Jt.METERS] = 1, Qt[Jt.USFEET] = 1200 / 3937;

    var $t = Jt,
        te = function te(t) {
      this.code_ = t.code, this.units_ = t.units, this.extent_ = void 0 !== t.extent ? t.extent : null, this.worldExtent_ = void 0 !== t.worldExtent ? t.worldExtent : null, this.axisOrientation_ = void 0 !== t.axisOrientation ? t.axisOrientation : "enu", this.global_ = void 0 !== t.global && t.global, this.canWrapX_ = !(!this.global_ || !this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit;
    };

    te.prototype.canWrapX = function () {
      return this.canWrapX_;
    }, te.prototype.getCode = function () {
      return this.code_;
    }, te.prototype.getExtent = function () {
      return this.extent_;
    }, te.prototype.getUnits = function () {
      return this.units_;
    }, te.prototype.getMetersPerUnit = function () {
      return this.metersPerUnit_ || Qt[this.units_];
    }, te.prototype.getWorldExtent = function () {
      return this.worldExtent_;
    }, te.prototype.getAxisOrientation = function () {
      return this.axisOrientation_;
    }, te.prototype.isGlobal = function () {
      return this.global_;
    }, te.prototype.setGlobal = function (t) {
      this.global_ = t, this.canWrapX_ = !(!t || !this.extent_);
    }, te.prototype.getDefaultTileGrid = function () {
      return this.defaultTileGrid_;
    }, te.prototype.setDefaultTileGrid = function (t) {
      this.defaultTileGrid_ = t;
    }, te.prototype.setExtent = function (t) {
      this.extent_ = t, this.canWrapX_ = !(!this.global_ || !t);
    }, te.prototype.setWorldExtent = function (t) {
      this.worldExtent_ = t;
    }, te.prototype.setGetPointResolution = function (t) {
      this.getPointResolutionFunc_ = t;
    }, te.prototype.getPointResolutionFunc = function () {
      return this.getPointResolutionFunc_;
    };

    var ee = te,
        ie = 6378137,
        re = Math.PI * ie,
        ne = [-re, -re, re, re],
        oe = [-180, -85, 180, 85],
        se = function (t) {
      function e(e) {
        t.call(this, {
          code: e,
          units: $t.METERS,
          extent: ne,
          global: !0,
          worldExtent: oe,
          getPointResolution: function getPointResolution(t, e) {
            return t / jt(e[1] / ie);
          }
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(ee),
        ae = [new se("EPSG:3857"), new se("EPSG:102100"), new se("EPSG:102113"), new se("EPSG:900913"), new se("urn:ogc:def:crs:EPSG:6.18:3:3857"), new se("urn:ogc:def:crs:EPSG::3857"), new se("http://www.opengis.net/gml/srs/epsg.xml#3857")];

    function he(t, e, i) {
      var r = t.length,
          n = i > 1 ? i : 2,
          o = e;
      void 0 === o && (o = n > 2 ? t.slice() : new Array(r));

      for (var s = re, a = 0; a < r; a += n) {
        o[a] = s * t[a] / 180;
        var h = ie * Math.log(Math.tan(Math.PI * (t[a + 1] + 90) / 360));
        h > s ? h = s : h < -s && (h = -s), o[a + 1] = h;
      }

      return o;
    }

    function le(t, e, i) {
      var r = t.length,
          n = i > 1 ? i : 2,
          o = e;
      void 0 === o && (o = n > 2 ? t.slice() : new Array(r));

      for (var s = 0; s < r; s += n) {
        o[s] = 180 * t[s] / re, o[s + 1] = 360 * Math.atan(Math.exp(t[s + 1] / ie)) / Math.PI - 90;
      }

      return o;
    }

    var ue = [-180, -90, 180, 90],
        pe = 6378137 * Math.PI / 180,
        ce = function (t) {
      function e(e, i) {
        t.call(this, {
          code: e,
          units: $t.DEGREES,
          extent: ue,
          axisOrientation: i,
          global: !0,
          metersPerUnit: pe,
          worldExtent: ue
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(ee),
        de = [new ce("CRS:84"), new ce("EPSG:4326", "neu"), new ce("urn:ogc:def:crs:EPSG::4326", "neu"), new ce("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new ce("urn:ogc:def:crs:OGC:1.3:CRS84"), new ce("urn:ogc:def:crs:OGC:2:84"), new ce("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new ce("urn:x-ogc:def:crs:EPSG:4326", "neu")],
        fe = {};

    var _e = {};

    function ge(t, e, i) {
      var r = t.getCode(),
          n = e.getCode();
      r in _e || (_e[r] = {}), _e[r][n] = i;
    }

    function ye(t, e) {
      var i;
      return t in _e && e in _e[t] && (i = _e[t][e]), i;
    }

    function ve(t, e, i) {
      var r;

      if (void 0 !== e) {
        for (var n = 0, o = t.length; n < o; ++n) {
          e[n] = t[n];
        }

        r = e;
      } else r = t.slice();

      return r;
    }

    function me(t, e, i) {
      if (void 0 !== e && t !== e) {
        for (var r = 0, n = t.length; r < n; ++r) {
          e[r] = t[r];
        }

        t = e;
      }

      return t;
    }

    function xe(t) {
      !function (t, e) {
        fe[t] = e;
      }(t.getCode(), t), ge(t, t, ve);
    }

    function Ee(t) {
      return "string" == typeof t ? function (t) {
        return fe[t] || null;
      }(t) : t || null;
    }

    function Se(t, e, i, r) {
      var n,
          o = (t = Ee(t)).getPointResolutionFunc();
      if (o) n = o(e, i);else if (t.getUnits() == $t.DEGREES && !r || r == $t.DEGREES) n = e;else {
        var s = Le(t, Ee("EPSG:4326")),
            a = [i[0] - e / 2, i[1], i[0] + e / 2, i[1], i[0], i[1] - e / 2, i[0], i[1] + e / 2];
        n = (Kt((a = s(a, a, 2)).slice(0, 2), a.slice(2, 4)) + Kt(a.slice(4, 6), a.slice(6, 8))) / 2;
        var h = r ? Qt[r] : t.getMetersPerUnit();
        void 0 !== h && (n /= h);
      }
      return n;
    }

    function Te(t) {
      !function (t) {
        t.forEach(xe);
      }(t), t.forEach(function (e) {
        t.forEach(function (t) {
          e !== t && ge(e, t, ve);
        });
      });
    }

    function Ce(t, e) {
      return t ? "string" == typeof t ? Ee(t) : t : Ee(e);
    }

    function Re(t) {
      return function (e, i, r) {
        for (var n = e.length, o = void 0 !== r ? r : 2, s = void 0 !== i ? i : new Array(n), a = 0; a < n; a += o) {
          var h = t([e[a], e[a + 1]]);
          s[a] = h[0], s[a + 1] = h[1];

          for (var l = o - 1; l >= 2; --l) {
            s[a + l] = e[a + l];
          }
        }

        return s;
      };
    }

    function we(t, e, i, r) {
      var n = Ee(t),
          o = Ee(e);
      ge(n, o, Re(i)), ge(o, n, Re(r));
    }

    function Ie(t, e) {
      if (t === e) return !0;
      var i = t.getUnits() === e.getUnits();
      return t.getCode() === e.getCode() ? i : Le(t, e) === ve && i;
    }

    function Le(t, e) {
      var i = ye(t.getCode(), e.getCode());
      return i || (i = me), i;
    }

    function Oe(t, e) {
      return Le(Ee(t), Ee(e));
    }

    function Pe(t, e, i) {
      return Oe(e, i)(t, void 0, t.length);
    }

    function be(t, e, i) {
      return Ft(t, Oe(e, i));
    }

    Te(ae), Te(de), function (t, e, i, r) {
      t.forEach(function (t) {
        e.forEach(function (e) {
          ge(t, e, i), ge(e, t, r);
        });
      });
    }(de, ae, he, le);
    var Me = new Array(6);

    function Fe(t) {
      return Ne(t, 1, 0, 0, 1, 0, 0);
    }

    function Ae(t, e) {
      var i = t[0],
          r = t[1],
          n = t[2],
          o = t[3],
          s = t[4],
          a = t[5],
          h = e[0],
          l = e[1],
          u = e[2],
          p = e[3],
          c = e[4],
          d = e[5];
      return t[0] = i * h + n * l, t[1] = r * h + o * l, t[2] = i * u + n * p, t[3] = r * u + o * p, t[4] = i * c + n * d + s, t[5] = r * c + o * d + a, t;
    }

    function Ne(t, e, i, r, n, o, s) {
      return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t;
    }

    function Ge(t, e) {
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
    }

    function De(t, e) {
      var i = e[0],
          r = e[1];
      return e[0] = t[0] * i + t[2] * r + t[4], e[1] = t[1] * i + t[3] * r + t[5], e;
    }

    function ke(t, e) {
      var i = Math.cos(e),
          r = Math.sin(e);
      return Ae(t, Ne(Me, i, r, -r, i, 0, 0));
    }

    function je(t, e, i) {
      return Ae(t, Ne(Me, e, 0, 0, i, 0, 0));
    }

    function Ue(t, e, i) {
      return Ae(t, Ne(Me, 1, 0, 0, 1, e, i));
    }

    function Ye(t, e, i, r, n, o, s, a) {
      var h = Math.sin(o),
          l = Math.cos(o);
      return t[0] = r * l, t[1] = n * h, t[2] = -r * h, t[3] = n * l, t[4] = s * r * l - a * r * h + e, t[5] = s * n * h + a * n * l + i, t;
    }

    function Be(t) {
      var e = function (t) {
        return t[0] * t[3] - t[1] * t[2];
      }(t);

      Y(0 !== e, 32);
      var i = t[0],
          r = t[1],
          n = t[2],
          o = t[3],
          s = t[4],
          a = t[5];
      return t[0] = o / e, t[1] = -r / e, t[2] = -n / e, t[3] = i / e, t[4] = (n * a - o * s) / e, t[5] = -(i * a - r * s) / e, t;
    }

    var Ve = [1, 0, 0, 1, 0, 0],
        Xe = function (t) {
      function e() {
        t.call(this), this.extent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.extentRevision_ = -1, this.simplifiedGeometryCache = {}, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        return r();
      }, e.prototype.closestPointXY = function (t, e, i, n) {
        return r();
      }, e.prototype.containsXY = function (t, e) {
        return !1;
      }, e.prototype.getClosestPoint = function (t, e) {
        var i = e || [NaN, NaN];
        return this.closestPointXY(t[0], t[1], i, 1 / 0), i;
      }, e.prototype.intersectsCoordinate = function (t) {
        return this.containsXY(t[0], t[1]);
      }, e.prototype.computeExtent = function (t) {
        return r();
      }, e.prototype.getExtent = function (t) {
        return this.extentRevision_ != this.getRevision() && (this.extent_ = this.computeExtent(this.extent_), this.extentRevision_ = this.getRevision()), function (t, e) {
          return e ? (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e) : t;
        }(this.extent_, t);
      }, e.prototype.rotate = function (t, e) {
        r();
      }, e.prototype.scale = function (t, e, i) {
        r();
      }, e.prototype.simplify = function (t) {
        return this.getSimplifiedGeometry(t * t);
      }, e.prototype.getSimplifiedGeometry = function (t) {
        return r();
      }, e.prototype.getType = function () {
        return r();
      }, e.prototype.applyTransform = function (t) {
        r();
      }, e.prototype.intersectsExtent = function (t) {
        return r();
      }, e.prototype.translate = function (t, e) {
        r();
      }, e.prototype.transform = function (t, e) {
        var i = Ee(t),
            r = i.getUnits() == $t.TILE_PIXELS ? function (t, r, n) {
          var o = i.getExtent(),
              s = i.getWorldExtent(),
              a = Rt(s) / Rt(o);
          return Ye(Ve, s[0], s[3], a, -a, 0, 0, 0), Gt(t, 0, t.length, n, Ve, r), Oe(i, e)(t, r, n);
        } : Oe(i, e);
        return this.applyTransform(r), this;
      }, e;
    }(D);

    function ze(t) {
      var e;
      return t == At.XY ? e = 2 : t == At.XYZ || t == At.XYM ? e = 3 : t == At.XYZM && (e = 4), e;
    }

    var We = function (t) {
      function e() {
        t.call(this), this.layout = At.XY, this.stride = 2, this.flatCoordinates = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.computeExtent = function (t) {
        return ct(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
      }, e.prototype.getCoordinates = function () {
        return r();
      }, e.prototype.getFirstCoordinate = function () {
        return this.flatCoordinates.slice(0, this.stride);
      }, e.prototype.getFlatCoordinates = function () {
        return this.flatCoordinates;
      }, e.prototype.getLastCoordinate = function () {
        return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
      }, e.prototype.getLayout = function () {
        return this.layout;
      }, e.prototype.getSimplifiedGeometry = function (t) {
        if (this.simplifiedGeometryRevision != this.getRevision() && (p(this.simplifiedGeometryCache), this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || 0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t <= this.simplifiedGeometryMaxMinSquaredTolerance) return this;
        var e = t.toString();
        if (this.simplifiedGeometryCache.hasOwnProperty(e)) return this.simplifiedGeometryCache[e];
        var i = this.getSimplifiedGeometryInternal(t);
        return i.getFlatCoordinates().length < this.flatCoordinates.length ? (this.simplifiedGeometryCache[e] = i, i) : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
      }, e.prototype.getSimplifiedGeometryInternal = function (t) {
        return this;
      }, e.prototype.getStride = function () {
        return this.stride;
      }, e.prototype.setFlatCoordinates = function (t, e) {
        this.stride = ze(t), this.layout = t, this.flatCoordinates = e;
      }, e.prototype.setCoordinates = function (t, e) {
        r();
      }, e.prototype.setLayout = function (t, e, i) {
        var r;
        if (t) r = ze(t);else {
          for (var n = 0; n < i; ++n) {
            if (0 === e.length) return this.layout = At.XY, void (this.stride = 2);
            e = e[0];
          }

          t = function (t) {
            var e;
            2 == t ? e = At.XY : 3 == t ? e = At.XYZ : 4 == t && (e = At.XYZM);
            return e;
          }(r = e.length);
        }
        this.layout = t, this.stride = r;
      }, e.prototype.applyTransform = function (t) {
        this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed());
      }, e.prototype.rotate = function (t, e) {
        var i = this.getFlatCoordinates();

        if (i) {
          var r = this.getStride();
          !function (t, e, i, r, n, o, s) {
            for (var a = s || [], h = Math.cos(n), l = Math.sin(n), u = o[0], p = o[1], c = 0, d = e; d < i; d += r) {
              var f = t[d] - u,
                  _ = t[d + 1] - p;

              a[c++] = u + f * h - _ * l, a[c++] = p + f * l + _ * h;

              for (var g = d + 2; g < d + r; ++g) {
                a[c++] = t[g];
              }
            }

            s && a.length != c && (a.length = c);
          }(i, 0, i.length, r, t, e, i), this.changed();
        }
      }, e.prototype.scale = function (t, e, i) {
        var r = e;
        void 0 === r && (r = t);
        var n = i;
        n || (n = Tt(this.getExtent()));
        var o = this.getFlatCoordinates();

        if (o) {
          var s = this.getStride();
          !function (t, e, i, r, n, o, s, a) {
            for (var h = a || [], l = s[0], u = s[1], p = 0, c = e; c < i; c += r) {
              var d = t[c] - l,
                  f = t[c + 1] - u;
              h[p++] = l + n * d, h[p++] = u + o * f;

              for (var _ = c + 2; _ < c + r; ++_) {
                h[p++] = t[_];
              }
            }

            a && h.length != p && (h.length = p);
          }(o, 0, o.length, s, t, r, n, o), this.changed();
        }
      }, e.prototype.translate = function (t, e) {
        var i = this.getFlatCoordinates();

        if (i) {
          var r = this.getStride();
          Dt(i, 0, i.length, r, t, e, i), this.changed();
        }
      }, e;
    }(Xe);

    function Ke(t, e, i, r) {
      for (var n = 0, o = t[i - r], s = t[i - r + 1]; e < i; e += r) {
        var a = t[e],
            h = t[e + 1];
        n += s * a - o * h, o = a, s = h;
      }

      return n / 2;
    }

    function He(t, e, i, r) {
      for (var n = 0, o = 0, s = i.length; o < s; ++o) {
        var a = i[o];
        n += Ke(t, e, a, r), e = a;
      }

      return n;
    }

    function Ze(t, e, i, r, n, o, s) {
      var a,
          h = t[e],
          l = t[e + 1],
          u = t[i] - h,
          p = t[i + 1] - l;
      if (0 === u && 0 === p) a = e;else {
        var c = ((n - h) * u + (o - l) * p) / (u * u + p * p);
        if (c > 1) a = i;else {
          if (c > 0) {
            for (var d = 0; d < r; ++d) {
              s[d] = zt(t[e + d], t[i + d], c);
            }

            return void (s.length = r);
          }

          a = e;
        }
      }

      for (var f = 0; f < r; ++f) {
        s[f] = t[a + f];
      }

      s.length = r;
    }

    function qe(t, e, i, r, n) {
      var o = t[e],
          s = t[e + 1];

      for (e += r; e < i; e += r) {
        var a = t[e],
            h = t[e + 1],
            l = Yt(o, s, a, h);
        l > n && (n = l), o = a, s = h;
      }

      return n;
    }

    function Je(t, e, i, r, n) {
      for (var o = 0, s = i.length; o < s; ++o) {
        var a = i[o];
        n = qe(t, e, a, r, n), e = a;
      }

      return n;
    }

    function Qe(t, e, i, r, n, o, s, a, h, l, u) {
      if (e == i) return l;
      var p, c;

      if (0 === n) {
        if ((c = Yt(s, a, t[e], t[e + 1])) < l) {
          for (p = 0; p < r; ++p) {
            h[p] = t[e + p];
          }

          return h.length = r, c;
        }

        return l;
      }

      for (var d = u || [NaN, NaN], f = e + r; f < i;) {
        if (Ze(t, f - r, f, r, s, a, d), (c = Yt(s, a, d[0], d[1])) < l) {
          for (l = c, p = 0; p < r; ++p) {
            h[p] = d[p];
          }

          h.length = r, f += r;
        } else f += r * Math.max((Math.sqrt(c) - Math.sqrt(l)) / n | 0, 1);
      }

      if (o && (Ze(t, i - r, e, r, s, a, d), (c = Yt(s, a, d[0], d[1])) < l)) {
        for (l = c, p = 0; p < r; ++p) {
          h[p] = d[p];
        }

        h.length = r;
      }

      return l;
    }

    function $e(t, e, i, r, n, o, s, a, h, l, u) {
      for (var p = u || [NaN, NaN], c = 0, d = i.length; c < d; ++c) {
        var f = i[c];
        l = Qe(t, e, f, r, n, o, s, a, h, l, p), e = f;
      }

      return l;
    }

    function ti(t, e, i, r) {
      for (var n = 0, o = i.length; n < o; ++n) {
        t[e++] = i[n];
      }

      return e;
    }

    function ei(t, e, i, r) {
      for (var n = 0, o = i.length; n < o; ++n) {
        for (var s = i[n], a = 0; a < r; ++a) {
          t[e++] = s[a];
        }
      }

      return e;
    }

    function ii(t, e, i, r, n) {
      for (var o = n || [], s = 0, a = 0, h = i.length; a < h; ++a) {
        var l = ei(t, e, i[a], r);
        o[s++] = l, e = l;
      }

      return o.length = s, o;
    }

    function ri(t, e, i, r, n) {
      for (var o = void 0 !== n ? n : [], s = 0, a = e; a < i; a += r) {
        o[s++] = t.slice(a, a + r);
      }

      return o.length = s, o;
    }

    function ni(t, e, i, r, n) {
      for (var o = void 0 !== n ? n : [], s = 0, a = 0, h = i.length; a < h; ++a) {
        var l = i[a];
        o[s++] = ri(t, e, l, r, o[s]), e = l;
      }

      return o.length = s, o;
    }

    function oi(t, e, i, r, n) {
      for (var o = void 0 !== n ? n : [], s = 0, a = 0, h = i.length; a < h; ++a) {
        var l = i[a];
        o[s++] = ni(t, e, l, r, o[s]), e = l[l.length - 1];
      }

      return o.length = s, o;
    }

    function si(t, e, i, r, n, o, s) {
      var a = (i - e) / r;

      if (a < 3) {
        for (; e < i; e += r) {
          o[s++] = t[e], o[s++] = t[e + 1];
        }

        return s;
      }

      var h = new Array(a);
      h[0] = 1, h[a - 1] = 1;

      for (var l = [e, i - r], u = 0; l.length > 0;) {
        for (var p = l.pop(), c = l.pop(), d = 0, f = t[c], _ = t[c + 1], g = t[p], y = t[p + 1], v = c + r; v < p; v += r) {
          var m = Ut(t[v], t[v + 1], f, _, g, y);
          m > d && (u = v, d = m);
        }

        d > n && (h[(u - e) / r] = 1, c + r < u && l.push(c, u), u + r < p && l.push(u, p));
      }

      for (var x = 0; x < a; ++x) {
        h[x] && (o[s++] = t[e + x * r], o[s++] = t[e + x * r + 1]);
      }

      return s;
    }

    function ai(t, e, i, r, n, o, s, a) {
      for (var h = 0, l = i.length; h < l; ++h) {
        var u = i[h];
        s = si(t, e, u, r, n, o, s), a.push(s), e = u;
      }

      return s;
    }

    function hi(t, e) {
      return e * Math.round(t / e);
    }

    function li(t, e, i, r, n, o, s) {
      if (e == i) return s;
      var a,
          h,
          l = hi(t[e], n),
          u = hi(t[e + 1], n);
      e += r, o[s++] = l, o[s++] = u;

      do {
        if (a = hi(t[e], n), h = hi(t[e + 1], n), (e += r) == i) return o[s++] = a, o[s++] = h, s;
      } while (a == l && h == u);

      for (; e < i;) {
        var p = hi(t[e], n),
            c = hi(t[e + 1], n);

        if (e += r, p != a || c != h) {
          var d = a - l,
              f = h - u,
              _ = p - l,
              g = c - u;

          d * g == f * _ && (d < 0 && _ < d || d == _ || d > 0 && _ > d) && (f < 0 && g < f || f == g || f > 0 && g > f) ? (a = p, h = c) : (o[s++] = a, o[s++] = h, l = a, u = h, a = p, h = c);
        }
      }

      return o[s++] = a, o[s++] = h, s;
    }

    function ui(t, e, i, r, n, o, s, a) {
      for (var h = 0, l = i.length; h < l; ++h) {
        var u = i[h];
        s = li(t, e, u, r, n, o, s), a.push(s), e = u;
      }

      return s;
    }

    var pi = function (t) {
      function e(e, i) {
        t.call(this), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, void 0 === i || Array.isArray(e[0]) ? this.setCoordinates(e, i) : this.setFlatCoordinates(i, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout);
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        return r < rt(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(qe(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), Qe(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, i, r));
      }, e.prototype.getArea = function () {
        return Ke(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
      }, e.prototype.getCoordinates = function () {
        return ri(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
      }, e.prototype.getSimplifiedGeometryInternal = function (t) {
        var i = [];
        return i.length = si(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, i, 0), new e(i, At.XY);
      }, e.prototype.getType = function () {
        return Nt.LINEAR_RING;
      }, e.prototype.intersectsExtent = function (t) {
        return !1;
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ei(this.flatCoordinates, 0, t, this.stride), this.changed();
      }, e;
    }(We),
        ci = function (t) {
      function e(e, i) {
        t.call(this), this.setCoordinates(e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout);
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        var n = this.flatCoordinates,
            o = Yt(t, e, n[0], n[1]);

        if (o < r) {
          for (var s = this.stride, a = 0; a < s; ++a) {
            i[a] = n[a];
          }

          return i.length = s, o;
        }

        return r;
      }, e.prototype.getCoordinates = function () {
        return this.flatCoordinates ? this.flatCoordinates.slice() : [];
      }, e.prototype.computeExtent = function (t) {
        return pt(this.flatCoordinates, t);
      }, e.prototype.getType = function () {
        return Nt.POINT;
      }, e.prototype.intersectsExtent = function (t) {
        return st(t, this.flatCoordinates[0], this.flatCoordinates[1]);
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ti(this.flatCoordinates, 0, t, this.stride), this.changed();
      }, e;
    }(We);

    function di(t, e, i, r, n) {
      return !mt(n, function (n) {
        return !fi(t, e, i, r, n[0], n[1]);
      });
    }

    function fi(t, e, i, r, n, o) {
      for (var s = 0, a = t[i - r], h = t[i - r + 1]; e < i; e += r) {
        var l = t[e],
            u = t[e + 1];
        h <= o ? u > o && (l - a) * (o - h) - (n - a) * (u - h) > 0 && s++ : u <= o && (l - a) * (o - h) - (n - a) * (u - h) < 0 && s--, a = l, h = u;
      }

      return 0 !== s;
    }

    function _i(t, e, i, r, n, o) {
      if (0 === i.length) return !1;
      if (!fi(t, e, i[0], r, n, o)) return !1;

      for (var s = 1, a = i.length; s < a; ++s) {
        if (fi(t, i[s - 1], i[s], r, n, o)) return !1;
      }

      return !0;
    }

    function gi(t, e, i, r, n, o, s) {
      for (var a, h, l, u, p, c, d, f = n[o + 1], _ = [], g = 0, y = i.length; g < y; ++g) {
        var v = i[g];

        for (u = t[v - r], c = t[v - r + 1], a = e; a < v; a += r) {
          p = t[a], d = t[a + 1], (f <= c && d <= f || c <= f && f <= d) && (l = (f - c) / (d - c) * (p - u) + u, _.push(l)), u = p, c = d;
        }
      }

      var m = NaN,
          x = -1 / 0;

      for (_.sort(V), u = _[0], a = 1, h = _.length; a < h; ++a) {
        p = _[a];
        var E = Math.abs(p - u);
        E > x && _i(t, e, i, r, l = (u + p) / 2, f) && (m = l, x = E), u = p;
      }

      return isNaN(m) && (m = n[o]), s ? (s.push(m, f, x), s) : [m, f, x];
    }

    function yi(t, e, i, r, n) {
      for (var o = [], s = 0, a = i.length; s < a; ++s) {
        var h = i[s];
        o = gi(t, e, h, r, n, 2 * s, o), e = h[h.length - 1];
      }

      return o;
    }

    function vi(t, e, i, r, n, o) {
      for (var s, a = [t[e], t[e + 1]], h = []; e + r < i; e += r) {
        if (h[0] = t[e + r], h[1] = t[e + r + 1], s = n.call(o, a, h)) return s;
        a[0] = h[0], a[1] = h[1];
      }

      return !1;
    }

    function mi(t, e, i, r, n) {
      var o = yt([1 / 0, 1 / 0, -1 / 0, -1 / 0], t, e, i, r);
      return !!Pt(n, o) && (!!ot(n, o) || o[0] >= n[0] && o[2] <= n[2] || o[1] >= n[1] && o[3] <= n[3] || vi(t, e, i, r, function (t, e) {
        return function (t, e, i) {
          var r = !1,
              n = at(t, e),
              o = at(t, i);
          if (n === $.INTERSECTING || o === $.INTERSECTING) r = !0;else {
            var s,
                a,
                h = t[0],
                l = t[1],
                u = t[2],
                p = t[3],
                c = e[0],
                d = e[1],
                f = i[0],
                _ = i[1],
                g = (_ - d) / (f - c);
            o & $.ABOVE && !(n & $.ABOVE) && (r = (s = f - (_ - p) / g) >= h && s <= u), r || !(o & $.RIGHT) || n & $.RIGHT || (r = (a = _ - (f - u) * g) >= l && a <= p), r || !(o & $.BELOW) || n & $.BELOW || (r = (s = f - (_ - l) / g) >= h && s <= u), r || !(o & $.LEFT) || n & $.LEFT || (r = (a = _ - (f - h) * g) >= l && a <= p);
          }
          return r;
        }(n, t, e);
      }));
    }

    function xi(t, e, i, r, n) {
      if (!function (t, e, i, r, n) {
        return !!(mi(t, e, i, r, n) || fi(t, e, i, r, n[0], n[1]) || fi(t, e, i, r, n[0], n[3]) || fi(t, e, i, r, n[2], n[1]) || fi(t, e, i, r, n[2], n[3]));
      }(t, e, i[0], r, n)) return !1;
      if (1 === i.length) return !0;

      for (var o = 1, s = i.length; o < s; ++o) {
        if (di(t, i[o - 1], i[o], r, n) && !mi(t, i[o - 1], i[o], r, n)) return !1;
      }

      return !0;
    }

    function Ei(t, e, i, r) {
      for (; e < i - r;) {
        for (var n = 0; n < r; ++n) {
          var o = t[e + n];
          t[e + n] = t[i - r + n], t[i - r + n] = o;
        }

        e += r, i -= r;
      }
    }

    function Si(t, e, i, r) {
      for (var n = 0, o = t[i - r], s = t[i - r + 1]; e < i; e += r) {
        var a = t[e],
            h = t[e + 1];
        n += (a - o) * (h + s), o = a, s = h;
      }

      return n > 0;
    }

    function Ti(t, e, i, r, n) {
      for (var o = void 0 !== n && n, s = 0, a = i.length; s < a; ++s) {
        var h = i[s],
            l = Si(t, e, h, r);

        if (0 === s) {
          if (o && l || !o && !l) return !1;
        } else if (o && !l || !o && l) return !1;

        e = h;
      }

      return !0;
    }

    function Ci(t, e, i, r, n) {
      for (var o = void 0 !== n && n, s = 0, a = i.length; s < a; ++s) {
        var h = i[s],
            l = Si(t, e, h, r);
        (0 === s ? o && l || !o && !l : o && !l || !o && l) && Ei(t, e, h, r), e = h;
      }

      return e;
    }

    function Ri(t, e, i, r, n) {
      for (var o = 0, s = i.length; o < s; ++o) {
        e = Ci(t, e, i[o], r, n);
      }

      return e;
    }

    var wi = function (t) {
      function e(e, i, r) {
        t.call(this), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, void 0 !== i && r ? (this.setFlatCoordinates(i, e), this.ends_ = r) : this.setCoordinates(e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.appendLinearRing = function (t) {
        this.flatCoordinates ? K(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
      }, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        return r < rt(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(Je(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), $e(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, i, r));
      }, e.prototype.containsXY = function (t, e) {
        return _i(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e);
      }, e.prototype.getArea = function () {
        return He(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
      }, e.prototype.getCoordinates = function (t) {
        var e;
        return void 0 !== t ? Ci(e = this.getOrientedFlatCoordinates().slice(), 0, this.ends_, this.stride, t) : e = this.flatCoordinates, ni(e, 0, this.ends_, this.stride);
      }, e.prototype.getEnds = function () {
        return this.ends_;
      }, e.prototype.getFlatInteriorPoint = function () {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
          var t = Tt(this.getExtent());
          this.flatInteriorPoint_ = gi(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0), this.flatInteriorPointRevision_ = this.getRevision();
        }

        return this.flatInteriorPoint_;
      }, e.prototype.getInteriorPoint = function () {
        return new ci(this.getFlatInteriorPoint(), At.XYM);
      }, e.prototype.getLinearRingCount = function () {
        return this.ends_.length;
      }, e.prototype.getLinearRing = function (t) {
        return t < 0 || this.ends_.length <= t ? null : new pi(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout);
      }, e.prototype.getLinearRings = function () {
        for (var t = this.layout, e = this.flatCoordinates, i = this.ends_, r = [], n = 0, o = 0, s = i.length; o < s; ++o) {
          var a = i[o],
              h = new pi(e.slice(n, a), t);
          r.push(h), n = a;
        }

        return r;
      }, e.prototype.getOrientedFlatCoordinates = function () {
        if (this.orientedRevision_ != this.getRevision()) {
          var t = this.flatCoordinates;
          Ti(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = Ci(this.orientedFlatCoordinates_, 0, this.ends_, this.stride)), this.orientedRevision_ = this.getRevision();
        }

        return this.orientedFlatCoordinates_;
      }, e.prototype.getSimplifiedGeometryInternal = function (t) {
        var i = [],
            r = [];
        return i.length = ui(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), i, 0, r), new e(i, At.XY, r);
      }, e.prototype.getType = function () {
        return Nt.POLYGON;
      }, e.prototype.intersectsExtent = function (t) {
        return xi(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t);
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
        var i = ii(this.flatCoordinates, 0, t, this.stride, this.ends_);
        this.flatCoordinates.length = 0 === i.length ? 0 : i[i.length - 1], this.changed();
      }, e;
    }(We),
        Ii = wi;

    function Li(t, e, i, r) {
      for (var n = i || 32, o = [], s = 0; s < n; ++s) {
        K(o, qt(t, e, 2 * Math.PI * s / n, r));
      }

      return o.push(o[0], o[1]), new wi(o, At.XY, [o.length]);
    }

    function Oi(t) {
      var e = t[0],
          i = t[1],
          r = t[2],
          n = t[3],
          o = [e, i, e, n, r, n, r, i, e, i];
      return new wi(o, At.XY, [o.length]);
    }

    function Pi(t, e, i) {
      for (var r = e || 32, n = t.getStride(), o = t.getLayout(), s = t.getCenter(), a = n * (r + 1), h = new Array(a), l = 0; l < a; l += n) {
        h[l] = 0, h[l + 1] = 0;

        for (var u = 2; u < n; u++) {
          h[l + u] = s[u];
        }
      }

      var p = [h.length],
          c = new wi(h, o, p);
      return bi(c, s, t.getRadius(), i), c;
    }

    function bi(t, e, i, r) {
      for (var n = t.getFlatCoordinates(), o = t.getStride(), s = n.length / o - 1, a = r || 0, h = 0; h <= s; ++h) {
        var l = h * o,
            u = a + 2 * Xt(h, s) * Math.PI / s;
        n[l] = e[0] + i * Math.cos(u), n[l + 1] = e[1] + i * Math.sin(u);
      }

      t.changed();
    }

    var Mi = "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : "",
        Fi = -1 !== Mi.indexOf("firefox"),
        Ai = -1 !== Mi.indexOf("safari") && -1 == Mi.indexOf("chrom"),
        Ni = -1 !== Mi.indexOf("webkit") && -1 == Mi.indexOf("edge"),
        Gi = -1 !== Mi.indexOf("macintosh"),
        Di = window.devicePixelRatio || 1,
        ki = function () {
      var t = !1;

      try {
        t = !!document.createElement("canvas").getContext("2d").setLineDash;
      } catch (t) {}

      return t;
    }(),
        ji = "geolocation" in navigator,
        Ui = "ontouchstart" in window,
        Yi = "PointerEvent" in window,
        Bi = !!navigator.msPointerEnabled,
        Vi = {
      ACCURACY: "accuracy",
      ACCURACY_GEOMETRY: "accuracyGeometry",
      ALTITUDE: "altitude",
      ALTITUDE_ACCURACY: "altitudeAccuracy",
      HEADING: "heading",
      POSITION: "position",
      PROJECTION: "projection",
      SPEED: "speed",
      TRACKING: "tracking",
      TRACKING_OPTIONS: "trackingOptions"
    },
        Xi = function (t) {
      function e(e) {
        t.call(this, M.ERROR), this.code = e.code, this.message = e.message;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        zi = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.position_ = null, this.transform_ = me, this.watchId_ = void 0, v(this, G(Vi.PROJECTION), this.handleProjectionChanged_, this), v(this, G(Vi.TRACKING), this.handleTrackingChanged_, this), void 0 !== i.projection && this.setProjection(i.projection), void 0 !== i.trackingOptions && this.setTrackingOptions(i.trackingOptions), this.setTracking(void 0 !== i.tracking && i.tracking);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.setTracking(!1), t.prototype.disposeInternal.call(this);
      }, e.prototype.handleProjectionChanged_ = function () {
        var t = this.getProjection();
        t && (this.transform_ = Le(Ee("EPSG:4326"), t), this.position_ && this.set(Vi.POSITION, this.transform_(this.position_)));
      }, e.prototype.handleTrackingChanged_ = function () {
        if (ji) {
          var t = this.getTracking();
          t && void 0 === this.watchId_ ? this.watchId_ = navigator.geolocation.watchPosition(this.positionChange_.bind(this), this.positionError_.bind(this), this.getTrackingOptions()) : t || void 0 === this.watchId_ || (navigator.geolocation.clearWatch(this.watchId_), this.watchId_ = void 0);
        }
      }, e.prototype.positionChange_ = function (t) {
        var e = t.coords;
        this.set(Vi.ACCURACY, e.accuracy), this.set(Vi.ALTITUDE, null === e.altitude ? void 0 : e.altitude), this.set(Vi.ALTITUDE_ACCURACY, null === e.altitudeAccuracy ? void 0 : e.altitudeAccuracy), this.set(Vi.HEADING, null === e.heading ? void 0 : Vt(e.heading)), this.position_ ? (this.position_[0] = e.longitude, this.position_[1] = e.latitude) : this.position_ = [e.longitude, e.latitude];
        var i = this.transform_(this.position_);
        this.set(Vi.POSITION, i), this.set(Vi.SPEED, null === e.speed ? void 0 : e.speed);
        var r = Li(this.position_, e.accuracy);
        r.applyTransform(this.transform_), this.set(Vi.ACCURACY_GEOMETRY, r), this.changed();
      }, e.prototype.positionError_ = function (t) {
        this.setTracking(!1), this.dispatchEvent(new Xi(t));
      }, e.prototype.getAccuracy = function () {
        return this.get(Vi.ACCURACY);
      }, e.prototype.getAccuracyGeometry = function () {
        return this.get(Vi.ACCURACY_GEOMETRY) || null;
      }, e.prototype.getAltitude = function () {
        return this.get(Vi.ALTITUDE);
      }, e.prototype.getAltitudeAccuracy = function () {
        return this.get(Vi.ALTITUDE_ACCURACY);
      }, e.prototype.getHeading = function () {
        return this.get(Vi.HEADING);
      }, e.prototype.getPosition = function () {
        return this.get(Vi.POSITION);
      }, e.prototype.getProjection = function () {
        return this.get(Vi.PROJECTION);
      }, e.prototype.getSpeed = function () {
        return this.get(Vi.SPEED);
      }, e.prototype.getTracking = function () {
        return this.get(Vi.TRACKING);
      }, e.prototype.getTrackingOptions = function () {
        return this.get(Vi.TRACKING_OPTIONS);
      }, e.prototype.setProjection = function (t) {
        this.set(Vi.PROJECTION, Ee(t));
      }, e.prototype.setTracking = function (t) {
        this.set(Vi.TRACKING, t);
      }, e.prototype.setTrackingOptions = function (t) {
        this.set(Vi.TRACKING_OPTIONS, t);
      }, e;
    }(D);

    function Wi(t, e, i) {
      var r = void 0 !== i ? t.toFixed(i) : "" + t,
          n = r.indexOf(".");
      return (n = -1 === n ? r.length : n) > e ? r : new Array(1 + e - n).join("0") + r;
    }

    function Ki(t, e) {
      for (var i = ("" + t).split("."), r = ("" + e).split("."), n = 0; n < Math.max(i.length, r.length); n++) {
        var o = parseInt(i[n] || "0", 10),
            s = parseInt(r[n] || "0", 10);
        if (o > s) return 1;
        if (s > o) return -1;
      }

      return 0;
    }

    function Hi(t, e) {
      return t[0] += e[0], t[1] += e[1], t;
    }

    function Zi(t, e) {
      var i,
          r,
          n = t[0],
          o = t[1],
          s = e[0],
          a = e[1],
          h = s[0],
          l = s[1],
          u = a[0],
          p = a[1],
          c = u - h,
          d = p - l,
          f = 0 === c && 0 === d ? 0 : (c * (n - h) + d * (o - l)) / (c * c + d * d || 0);
      return f <= 0 ? (i = h, r = l) : f >= 1 ? (i = u, r = p) : (i = h + f * c, r = l + f * d), [i, r];
    }

    function qi(t, e, i) {
      var r = Xt(e + 180, 360) - 180,
          n = Math.abs(3600 * r),
          o = i || 0,
          s = Math.pow(10, o),
          a = Math.floor(n / 3600),
          h = Math.floor((n - 3600 * a) / 60),
          l = n - 3600 * a - 60 * h;
      return (l = Math.ceil(l * s) / s) >= 60 && (l = 0, h += 1), h >= 60 && (h = 0, a += 1), a + "° " + Wi(h, 2) + "′ " + Wi(l, 2, o) + "″" + (0 == r ? "" : " " + t.charAt(r < 0 ? 1 : 0));
    }

    function Ji(t, e, i) {
      return t ? e.replace("{x}", t[0].toFixed(i)).replace("{y}", t[1].toFixed(i)) : "";
    }

    function Qi(t, e) {
      for (var i = !0, r = t.length - 1; r >= 0; --r) {
        if (t[r] != e[r]) {
          i = !1;
          break;
        }
      }

      return i;
    }

    function $i(t, e) {
      var i = Math.cos(e),
          r = Math.sin(e),
          n = t[0] * i - t[1] * r,
          o = t[1] * i + t[0] * r;
      return t[0] = n, t[1] = o, t;
    }

    function tr(t, e) {
      return t[0] *= e, t[1] *= e, t;
    }

    function er(t, e) {
      var i = t[0] - e[0],
          r = t[1] - e[1];
      return i * i + r * r;
    }

    function ir(t, e) {
      return Math.sqrt(er(t, e));
    }

    function rr(t, e) {
      return er(t, Zi(t, e));
    }

    function nr(t, e) {
      return Ji(t, "{x}, {y}", e);
    }

    function or(t, e, i, r, n, o) {
      var s = NaN,
          a = NaN,
          h = (i - e) / r;
      if (1 === h) s = t[e], a = t[e + 1];else if (2 == h) s = (1 - n) * t[e] + n * t[e + r], a = (1 - n) * t[e + 1] + n * t[e + r + 1];else if (0 !== h) {
        for (var l = t[e], u = t[e + 1], p = 0, c = [0], d = e + r; d < i; d += r) {
          var f = t[d],
              _ = t[d + 1];
          p += Math.sqrt((f - l) * (f - l) + (_ - u) * (_ - u)), c.push(p), l = f, u = _;
        }

        var g = n * p,
            y = function (t, e, i) {
          for (var r, n, o = i || V, s = 0, a = t.length, h = !1; s < a;) {
            (n = +o(t[r = s + (a - s >> 1)], e)) < 0 ? s = r + 1 : (a = r, h = !n);
          }

          return h ? s : ~s;
        }(c, g);

        if (y < 0) {
          var v = (g - c[-y - 2]) / (c[-y - 1] - c[-y - 2]),
              m = e + (-y - 2) * r;
          s = zt(t[m], t[m + r], v), a = zt(t[m + 1], t[m + r + 1], v);
        } else s = t[e + y * r], a = t[e + y * r + 1];
      }
      return o ? (o[0] = s, o[1] = a, o) : [s, a];
    }

    function sr(t, e, i, r, n, o) {
      if (i == e) return null;
      var s;
      if (n < t[e + r - 1]) return o ? ((s = t.slice(e, e + r))[r - 1] = n, s) : null;
      if (t[i - 1] < n) return o ? ((s = t.slice(i - r, i))[r - 1] = n, s) : null;
      if (n == t[e + r - 1]) return t.slice(e, e + r);

      for (var a = e / r, h = i / r; a < h;) {
        var l = a + h >> 1;
        n < t[(l + 1) * r - 1] ? h = l : a = l + 1;
      }

      var u = t[a * r - 1];
      if (n == u) return t.slice((a - 1) * r, (a - 1) * r + r);
      var p = (n - u) / (t[(a + 1) * r - 1] - u);
      s = [];

      for (var c = 0; c < r - 1; ++c) {
        s.push(zt(t[(a - 1) * r + c], t[a * r + c], p));
      }

      return s.push(n), s;
    }

    function ar(t, e, i, r) {
      for (var n = t[e], o = t[e + 1], s = 0, a = e + r; a < i; a += r) {
        var h = t[a],
            l = t[a + 1];
        s += Math.sqrt((h - n) * (h - n) + (l - o) * (l - o)), n = h, o = l;
      }

      return s;
    }

    var hr = function (t) {
      function e(e, i) {
        t.call(this), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, void 0 === i || Array.isArray(e[0]) ? this.setCoordinates(e, i) : this.setFlatCoordinates(i, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.appendCoordinate = function (t) {
        this.flatCoordinates ? K(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed();
      }, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout);
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        return r < rt(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(qe(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), Qe(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, i, r));
      }, e.prototype.forEachSegment = function (t) {
        return vi(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
      }, e.prototype.getCoordinateAtM = function (t, e) {
        if (this.layout != At.XYM && this.layout != At.XYZM) return null;
        var i = void 0 !== e && e;
        return sr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, i);
      }, e.prototype.getCoordinates = function () {
        return ri(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
      }, e.prototype.getCoordinateAt = function (t, e) {
        return or(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e);
      }, e.prototype.getLength = function () {
        return ar(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
      }, e.prototype.getFlatMidpoint = function () {
        return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(.5, this.flatMidpoint_), this.flatMidpointRevision_ = this.getRevision()), this.flatMidpoint_;
      }, e.prototype.getSimplifiedGeometryInternal = function (t) {
        var i = [];
        return i.length = si(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, i, 0), new e(i, At.XY);
      }, e.prototype.getType = function () {
        return Nt.LINE_STRING;
      }, e.prototype.intersectsExtent = function (t) {
        return mi(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ei(this.flatCoordinates, 0, t, this.stride), this.changed();
      }, e;
    }(We);

    function lr(t, e, i) {
      for (var r, n, o, s, a, h, l = [], u = t(0), p = t(1), c = e(u), d = e(p), f = [p, u], _ = [d, c], g = [1, 0], y = {}, v = 1e5; --v > 0 && g.length > 0;) {
        o = g.pop(), u = f.pop(), c = _.pop(), (h = o.toString()) in y || (l.push(c[0], c[1]), y[h] = !0), s = g.pop(), p = f.pop(), d = _.pop(), Ut((n = e(r = t(a = (o + s) / 2)))[0], n[1], c[0], c[1], d[0], d[1]) < i ? (l.push(d[0], d[1]), y[h = s.toString()] = !0) : (g.push(s, a, a, o), _.push(d, n, n, c), f.push(p, r, r, u));
      }

      return l;
    }

    var ur = {
      POSTCOMPOSE: "postcompose",
      PRECOMPOSE: "precompose",
      RENDER: "render",
      RENDERCOMPLETE: "rendercomplete"
    },
        pr = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
        cr = /^([a-z]*)$/i;

    function dr(t) {
      return "string" == typeof t ? t : yr(t);
    }

    var fr = function () {
      var t = {},
          e = 0;
      return function (i) {
        var r;
        if (t.hasOwnProperty(i)) r = t[i];else {
          if (e >= 1024) {
            var n = 0;

            for (var o in t) {
              0 == (3 & n++) && (delete t[o], --e);
            }
          }

          r = function (t) {
            var e, i, r, n, o;
            cr.exec(t) && (t = function (t) {
              var e = document.createElement("div");

              if (e.style.color = t, "" !== e.style.color) {
                document.body.appendChild(e);
                var i = getComputedStyle(e).color;
                return document.body.removeChild(e), i;
              }

              return "";
            }(t));

            if (pr.exec(t)) {
              var s,
                  a = t.length - 1;
              s = a <= 4 ? 1 : 2;
              var h = 4 === a || 8 === a;
              e = parseInt(t.substr(1 + 0 * s, s), 16), i = parseInt(t.substr(1 + 1 * s, s), 16), r = parseInt(t.substr(1 + 2 * s, s), 16), n = h ? parseInt(t.substr(1 + 3 * s, s), 16) : 255, 1 == s && (e = (e << 4) + e, i = (i << 4) + i, r = (r << 4) + r, h && (n = (n << 4) + n)), o = [e, i, r, n / 255];
            } else 0 == t.indexOf("rgba(") ? gr(o = t.slice(5, -1).split(",").map(Number)) : 0 == t.indexOf("rgb(") ? ((o = t.slice(4, -1).split(",").map(Number)).push(1), gr(o)) : Y(!1, 14);

            return o;
          }(i), t[i] = r, ++e;
        }
        return r;
      };
    }();

    function _r(t) {
      return Array.isArray(t) ? t : fr(t);
    }

    function gr(t) {
      return t[0] = kt(t[0] + .5 | 0, 0, 255), t[1] = kt(t[1] + .5 | 0, 0, 255), t[2] = kt(t[2] + .5 | 0, 0, 255), t[3] = kt(t[3], 0, 1), t;
    }

    function yr(t) {
      var e = t[0];
      e != (0 | e) && (e = e + .5 | 0);
      var i = t[1];
      i != (0 | i) && (i = i + .5 | 0);
      var r = t[2];
      return r != (0 | r) && (r = r + .5 | 0), "rgba(" + e + "," + i + "," + r + "," + (void 0 === t[3] ? 1 : t[3]) + ")";
    }

    var vr = function vr(t) {
      var e = t || {};
      this.color_ = void 0 !== e.color ? e.color : null, this.checksum_ = void 0;
    };

    vr.prototype.clone = function () {
      var t = this.getColor();
      return new vr({
        color: Array.isArray(t) ? t.slice() : t || void 0
      });
    }, vr.prototype.getColor = function () {
      return this.color_;
    }, vr.prototype.setColor = function (t) {
      this.color_ = t, this.checksum_ = void 0;
    }, vr.prototype.getChecksum = function () {
      if (void 0 === this.checksum_) {
        var t = this.color_;
        t ? Array.isArray(t) || "string" == typeof t ? this.checksum_ = "f" + dr(t) : this.checksum_ = o(this.color_) : this.checksum_ = "f-";
      }

      return this.checksum_;
    };

    var mr = vr,
        xr = function xr(t) {
      var e = t || {};
      this.color_ = void 0 !== e.color ? e.color : null, this.lineCap_ = e.lineCap, this.lineDash_ = void 0 !== e.lineDash ? e.lineDash : null, this.lineDashOffset_ = e.lineDashOffset, this.lineJoin_ = e.lineJoin, this.miterLimit_ = e.miterLimit, this.width_ = e.width, this.checksum_ = void 0;
    };

    xr.prototype.clone = function () {
      var t = this.getColor();
      return new xr({
        color: Array.isArray(t) ? t.slice() : t || void 0,
        lineCap: this.getLineCap(),
        lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
        lineDashOffset: this.getLineDashOffset(),
        lineJoin: this.getLineJoin(),
        miterLimit: this.getMiterLimit(),
        width: this.getWidth()
      });
    }, xr.prototype.getColor = function () {
      return this.color_;
    }, xr.prototype.getLineCap = function () {
      return this.lineCap_;
    }, xr.prototype.getLineDash = function () {
      return this.lineDash_;
    }, xr.prototype.getLineDashOffset = function () {
      return this.lineDashOffset_;
    }, xr.prototype.getLineJoin = function () {
      return this.lineJoin_;
    }, xr.prototype.getMiterLimit = function () {
      return this.miterLimit_;
    }, xr.prototype.getWidth = function () {
      return this.width_;
    }, xr.prototype.setColor = function (t) {
      this.color_ = t, this.checksum_ = void 0;
    }, xr.prototype.setLineCap = function (t) {
      this.lineCap_ = t, this.checksum_ = void 0;
    }, xr.prototype.setLineDash = function (t) {
      this.lineDash_ = t, this.checksum_ = void 0;
    }, xr.prototype.setLineDashOffset = function (t) {
      this.lineDashOffset_ = t, this.checksum_ = void 0;
    }, xr.prototype.setLineJoin = function (t) {
      this.lineJoin_ = t, this.checksum_ = void 0;
    }, xr.prototype.setMiterLimit = function (t) {
      this.miterLimit_ = t, this.checksum_ = void 0;
    }, xr.prototype.setWidth = function (t) {
      this.width_ = t, this.checksum_ = void 0;
    }, xr.prototype.getChecksum = function () {
      return void 0 === this.checksum_ && (this.checksum_ = "s", this.color_ ? "string" == typeof this.color_ ? this.checksum_ += this.color_ : this.checksum_ += o(this.color_) : this.checksum_ += "-", this.checksum_ += "," + (void 0 !== this.lineCap_ ? this.lineCap_.toString() : "-") + "," + (this.lineDash_ ? this.lineDash_.toString() : "-") + "," + (void 0 !== this.lineDashOffset_ ? this.lineDashOffset_ : "-") + "," + (void 0 !== this.lineJoin_ ? this.lineJoin_ : "-") + "," + (void 0 !== this.miterLimit_ ? this.miterLimit_.toString() : "-") + "," + (void 0 !== this.width_ ? this.width_.toString() : "-")), this.checksum_;
    };

    var Er = xr,
        Sr = "point",
        Tr = "line",
        Cr = function Cr(t) {
      var e = t || {};
      this.font_ = e.font, this.rotation_ = e.rotation, this.rotateWithView_ = e.rotateWithView, this.scale_ = e.scale, this.text_ = e.text, this.textAlign_ = e.textAlign, this.textBaseline_ = e.textBaseline, this.fill_ = void 0 !== e.fill ? e.fill : new mr({
        color: "#333"
      }), this.maxAngle_ = void 0 !== e.maxAngle ? e.maxAngle : Math.PI / 4, this.placement_ = void 0 !== e.placement ? e.placement : Sr, this.overflow_ = !!e.overflow, this.stroke_ = void 0 !== e.stroke ? e.stroke : null, this.offsetX_ = void 0 !== e.offsetX ? e.offsetX : 0, this.offsetY_ = void 0 !== e.offsetY ? e.offsetY : 0, this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null, this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null, this.padding_ = void 0 === e.padding ? null : e.padding;
    };

    Cr.prototype.clone = function () {
      return new Cr({
        font: this.getFont(),
        placement: this.getPlacement(),
        maxAngle: this.getMaxAngle(),
        overflow: this.getOverflow(),
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: this.getScale(),
        text: this.getText(),
        textAlign: this.getTextAlign(),
        textBaseline: this.getTextBaseline(),
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        offsetX: this.getOffsetX(),
        offsetY: this.getOffsetY(),
        backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
        backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0
      });
    }, Cr.prototype.getOverflow = function () {
      return this.overflow_;
    }, Cr.prototype.getFont = function () {
      return this.font_;
    }, Cr.prototype.getMaxAngle = function () {
      return this.maxAngle_;
    }, Cr.prototype.getPlacement = function () {
      return this.placement_;
    }, Cr.prototype.getOffsetX = function () {
      return this.offsetX_;
    }, Cr.prototype.getOffsetY = function () {
      return this.offsetY_;
    }, Cr.prototype.getFill = function () {
      return this.fill_;
    }, Cr.prototype.getRotateWithView = function () {
      return this.rotateWithView_;
    }, Cr.prototype.getRotation = function () {
      return this.rotation_;
    }, Cr.prototype.getScale = function () {
      return this.scale_;
    }, Cr.prototype.getStroke = function () {
      return this.stroke_;
    }, Cr.prototype.getText = function () {
      return this.text_;
    }, Cr.prototype.getTextAlign = function () {
      return this.textAlign_;
    }, Cr.prototype.getTextBaseline = function () {
      return this.textBaseline_;
    }, Cr.prototype.getBackgroundFill = function () {
      return this.backgroundFill_;
    }, Cr.prototype.getBackgroundStroke = function () {
      return this.backgroundStroke_;
    }, Cr.prototype.getPadding = function () {
      return this.padding_;
    }, Cr.prototype.setOverflow = function (t) {
      this.overflow_ = t;
    }, Cr.prototype.setFont = function (t) {
      this.font_ = t;
    }, Cr.prototype.setMaxAngle = function (t) {
      this.maxAngle_ = t;
    }, Cr.prototype.setOffsetX = function (t) {
      this.offsetX_ = t;
    }, Cr.prototype.setOffsetY = function (t) {
      this.offsetY_ = t;
    }, Cr.prototype.setPlacement = function (t) {
      this.placement_ = t;
    }, Cr.prototype.setFill = function (t) {
      this.fill_ = t;
    }, Cr.prototype.setRotation = function (t) {
      this.rotation_ = t;
    }, Cr.prototype.setScale = function (t) {
      this.scale_ = t;
    }, Cr.prototype.setStroke = function (t) {
      this.stroke_ = t;
    }, Cr.prototype.setText = function (t) {
      this.text_ = t;
    }, Cr.prototype.setTextAlign = function (t) {
      this.textAlign_ = t;
    }, Cr.prototype.setTextBaseline = function (t) {
      this.textBaseline_ = t;
    }, Cr.prototype.setBackgroundFill = function (t) {
      this.backgroundFill_ = t;
    }, Cr.prototype.setBackgroundStroke = function (t) {
      this.backgroundStroke_ = t;
    }, Cr.prototype.setPadding = function (t) {
      this.padding_ = t;
    };

    var Rr = Cr,
        wr = new Er({
      color: "rgba(0,0,0,0.2)"
    }),
        Ir = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001],
        Lr = function Lr(t) {
      var e = t || {};
      this.map_ = null, this.postcomposeListenerKey_ = null, this.projection_ = null, this.maxLat_ = 1 / 0, this.maxLon_ = 1 / 0, this.minLat_ = -1 / 0, this.minLon_ = -1 / 0, this.maxLatP_ = 1 / 0, this.maxLonP_ = 1 / 0, this.minLatP_ = -1 / 0, this.minLonP_ = -1 / 0, this.targetSize_ = void 0 !== e.targetSize ? e.targetSize : 100, this.maxLines_ = void 0 !== e.maxLines ? e.maxLines : 100, this.meridians_ = [], this.parallels_ = [], this.strokeStyle_ = void 0 !== e.strokeStyle ? e.strokeStyle : wr, this.fromLonLatTransform_ = void 0, this.toLonLatTransform_ = void 0, this.projectionCenterLonLat_ = null, this.meridiansLabels_ = null, this.parallelsLabels_ = null, 1 == e.showLabels && (this.lonLabelFormatter_ = void 0 == e.lonLabelFormatter ? qi.bind(this, "EW") : e.lonLabelFormatter, this.latLabelFormatter_ = void 0 == e.latLabelFormatter ? qi.bind(this, "NS") : e.latLabelFormatter, this.lonLabelPosition_ = void 0 == e.lonLabelPosition ? 0 : e.lonLabelPosition, this.latLabelPosition_ = void 0 == e.latLabelPosition ? 1 : e.latLabelPosition, this.lonLabelStyle_ = void 0 !== e.lonLabelStyle ? e.lonLabelStyle : new Rr({
        font: "12px Calibri,sans-serif",
        textBaseline: "bottom",
        fill: new mr({
          color: "rgba(0,0,0,1)"
        }),
        stroke: new Er({
          color: "rgba(255,255,255,1)",
          width: 3
        })
      }), this.latLabelStyle_ = void 0 !== e.latLabelStyle ? e.latLabelStyle : new Rr({
        font: "12px Calibri,sans-serif",
        textAlign: "end",
        fill: new mr({
          color: "rgba(0,0,0,1)"
        }),
        stroke: new Er({
          color: "rgba(255,255,255,1)",
          width: 3
        })
      }), this.meridiansLabels_ = [], this.parallelsLabels_ = []), this.intervals_ = void 0 !== e.intervals ? e.intervals : Ir, this.setMap(void 0 !== e.map ? e.map : null);
    };

    Lr.prototype.addMeridian_ = function (t, e, i, r, n, o) {
      var s = this.getMeridian_(t, e, i, r, o);

      if (Pt(s.getExtent(), n)) {
        if (this.meridiansLabels_) {
          var a = this.getMeridianPoint_(s, n, o);
          this.meridiansLabels_[o] = {
            geom: a,
            text: this.lonLabelFormatter_(t)
          };
        }

        this.meridians_[o++] = s;
      }

      return o;
    }, Lr.prototype.getMeridianPoint_ = function (t, e, i) {
      var r,
          n = t.getFlatCoordinates(),
          o = Math.max(e[1], n[1]),
          s = Math.min(e[3], n[n.length - 1]),
          a = kt(e[1] + Math.abs(e[1] - e[3]) * this.lonLabelPosition_, o, s),
          h = [n[0], a];
      return i in this.meridiansLabels_ ? (r = this.meridiansLabels_[i].geom).setCoordinates(h) : r = new ci(h), r;
    }, Lr.prototype.addParallel_ = function (t, e, i, r, n, o) {
      var s = this.getParallel_(t, e, i, r, o);

      if (Pt(s.getExtent(), n)) {
        if (this.parallelsLabels_) {
          var a = this.getParallelPoint_(s, n, o);
          this.parallelsLabels_[o] = {
            geom: a,
            text: this.latLabelFormatter_(t)
          };
        }

        this.parallels_[o++] = s;
      }

      return o;
    }, Lr.prototype.getParallelPoint_ = function (t, e, i) {
      var r,
          n = t.getFlatCoordinates(),
          o = Math.max(e[0], n[0]),
          s = Math.min(e[2], n[n.length - 2]),
          a = [kt(e[0] + Math.abs(e[0] - e[2]) * this.latLabelPosition_, o, s), n[1]];
      return i in this.parallelsLabels_ ? (r = this.parallelsLabels_[i].geom).setCoordinates(a) : r = new ci(a), r;
    }, Lr.prototype.createGraticule_ = function (t, e, i, r) {
      var n = this.getInterval_(i);
      if (-1 == n) return this.meridians_.length = this.parallels_.length = 0, this.meridiansLabels_ && (this.meridiansLabels_.length = 0), void (this.parallelsLabels_ && (this.parallelsLabels_.length = 0));
      var o,
          s,
          a,
          h,
          l = this.toLonLatTransform_(e),
          u = l[0],
          p = l[1],
          c = this.maxLines_,
          d = [Math.max(t[0], this.minLonP_), Math.max(t[1], this.minLatP_), Math.min(t[2], this.maxLonP_), Math.min(t[3], this.maxLatP_)],
          f = (d = be(d, this.projection_, "EPSG:4326"))[3],
          _ = d[2],
          g = d[1],
          y = d[0];

      for (h = kt(u = Math.floor(u / n) * n, this.minLon_, this.maxLon_), s = this.addMeridian_(h, g, f, r, t, 0), o = 0; h != this.minLon_ && o++ < c;) {
        h = Math.max(h - n, this.minLon_), s = this.addMeridian_(h, g, f, r, t, s);
      }

      for (h = kt(u, this.minLon_, this.maxLon_), o = 0; h != this.maxLon_ && o++ < c;) {
        h = Math.min(h + n, this.maxLon_), s = this.addMeridian_(h, g, f, r, t, s);
      }

      for (this.meridians_.length = s, this.meridiansLabels_ && (this.meridiansLabels_.length = s), a = kt(p = Math.floor(p / n) * n, this.minLat_, this.maxLat_), s = this.addParallel_(a, y, _, r, t, 0), o = 0; a != this.minLat_ && o++ < c;) {
        a = Math.max(a - n, this.minLat_), s = this.addParallel_(a, y, _, r, t, s);
      }

      for (a = kt(p, this.minLat_, this.maxLat_), o = 0; a != this.maxLat_ && o++ < c;) {
        a = Math.min(a + n, this.maxLat_), s = this.addParallel_(a, y, _, r, t, s);
      }

      this.parallels_.length = s, this.parallelsLabels_ && (this.parallelsLabels_.length = s);
    }, Lr.prototype.getInterval_ = function (t) {
      for (var e = this.projectionCenterLonLat_[0], i = this.projectionCenterLonLat_[1], r = -1, n = Math.pow(this.targetSize_ * t, 2), o = [], s = [], a = 0, h = this.intervals_.length; a < h; ++a) {
        var l = this.intervals_[a] / 2;
        if (o[0] = e - l, o[1] = i - l, s[0] = e + l, s[1] = i + l, this.fromLonLatTransform_(o, o), this.fromLonLatTransform_(s, s), Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2) <= n) break;
        r = this.intervals_[a];
      }

      return r;
    }, Lr.prototype.getMap = function () {
      return this.map_;
    }, Lr.prototype.getMeridian_ = function (t, e, i, r, n) {
      var o = function (t, e, i, r, n) {
        return lr(function (r) {
          return [t, e + (i - e) * r];
        }, Oe(Ee("EPSG:4326"), r), n);
      }(t, e, i, this.projection_, r),
          s = this.meridians_[n];

      return s ? (s.setFlatCoordinates(At.XY, o), s.changed()) : s = this.meridians_[n] = new hr(o, At.XY), s;
    }, Lr.prototype.getMeridians = function () {
      return this.meridians_;
    }, Lr.prototype.getParallel_ = function (t, e, i, r, n) {
      var o = function (t, e, i, r, n) {
        return lr(function (r) {
          return [e + (i - e) * r, t];
        }, Oe(Ee("EPSG:4326"), r), n);
      }(t, e, i, this.projection_, r),
          s = this.parallels_[n];

      return s ? (s.setFlatCoordinates(At.XY, o), s.changed()) : s = new hr(o, At.XY), s;
    }, Lr.prototype.getParallels = function () {
      return this.parallels_;
    }, Lr.prototype.handlePostCompose_ = function (t) {
      var e,
          i,
          r,
          n,
          o = t.vectorContext,
          s = t.frameState,
          a = s.extent,
          h = s.viewState,
          l = h.center,
          u = h.projection,
          p = h.resolution,
          c = s.pixelRatio,
          d = p * p / (4 * c * c);

      for ((!this.projection_ || !Ie(this.projection_, u)) && this.updateProjectionInfo_(u), this.createGraticule_(a, l, p, d), o.setFillStrokeStyle(null, this.strokeStyle_), e = 0, i = this.meridians_.length; e < i; ++e) {
        r = this.meridians_[e], o.drawGeometry(r);
      }

      for (e = 0, i = this.parallels_.length; e < i; ++e) {
        r = this.parallels_[e], o.drawGeometry(r);
      }

      if (this.meridiansLabels_) for (e = 0, i = this.meridiansLabels_.length; e < i; ++e) {
        n = this.meridiansLabels_[e], this.lonLabelStyle_.setText(n.text), o.setTextStyle(this.lonLabelStyle_), o.drawGeometry(n.geom);
      }
      if (this.parallelsLabels_) for (e = 0, i = this.parallelsLabels_.length; e < i; ++e) {
        n = this.parallelsLabels_[e], this.latLabelStyle_.setText(n.text), o.setTextStyle(this.latLabelStyle_), o.drawGeometry(n.geom);
      }
    }, Lr.prototype.updateProjectionInfo_ = function (t) {
      var e = Ee("EPSG:4326"),
          i = t.getWorldExtent(),
          r = be(i, e, t);
      this.maxLat_ = i[3], this.maxLon_ = i[2], this.minLat_ = i[1], this.minLon_ = i[0], this.maxLatP_ = r[3], this.maxLonP_ = r[2], this.minLatP_ = r[1], this.minLonP_ = r[0], this.fromLonLatTransform_ = Oe(e, t), this.toLonLatTransform_ = Oe(t, e), this.projectionCenterLonLat_ = this.toLonLatTransform_(Tt(t.getExtent())), this.projection_ = t;
    }, Lr.prototype.setMap = function (t) {
      this.map_ && (E(this.postcomposeListenerKey_), this.postcomposeListenerKey_ = null, this.map_.render()), t && (this.postcomposeListenerKey_ = v(t, ur.POSTCOMPOSE, this.handlePostCompose_, this), t.render()), this.map_ = t;
    };

    var Or = Lr,
        Pr = function Pr(t, e, i) {
      this.decay_ = t, this.minVelocity_ = e, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
    };

    Pr.prototype.begin = function () {
      this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
    }, Pr.prototype.update = function (t, e) {
      this.points_.push(t, e, Date.now());
    }, Pr.prototype.end = function () {
      if (this.points_.length < 6) return !1;
      var t = Date.now() - this.delay_,
          e = this.points_.length - 3;
      if (this.points_[e + 2] < t) return !1;

      for (var i = e - 3; i > 0 && this.points_[i + 2] > t;) {
        i -= 3;
      }

      var r = this.points_[e + 2] - this.points_[i + 2];
      if (r < 1e3 / 60) return !1;
      var n = this.points_[e] - this.points_[i],
          o = this.points_[e + 1] - this.points_[i + 1];
      return this.angle_ = Math.atan2(o, n), this.initialVelocity_ = Math.sqrt(n * n + o * o) / r, this.initialVelocity_ > this.minVelocity_;
    }, Pr.prototype.getDistance = function () {
      return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    }, Pr.prototype.getAngle = function () {
      return this.angle_;
    };

    var br = Pr,
        Mr = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.map = i, this.frameState = void 0 !== r ? r : null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        Fr = function (t) {
      function e(e, i, r, n, o) {
        t.call(this, e, i, o), this.originalEvent = r, this.pixel = i.getEventPixel(r), this.coordinate = i.getCoordinateFromPixel(this.pixel), this.dragging = void 0 !== n && n;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.preventDefault = function () {
        t.prototype.preventDefault.call(this), this.originalEvent.preventDefault();
      }, e.prototype.stopPropagation = function () {
        t.prototype.stopPropagation.call(this), this.originalEvent.stopPropagation();
      }, e;
    }(Mr),
        Ar = {
      SINGLECLICK: "singleclick",
      CLICK: M.CLICK,
      DBLCLICK: M.DBLCLICK,
      POINTERDRAG: "pointerdrag",
      POINTERMOVE: "pointermove",
      POINTERDOWN: "pointerdown",
      POINTERUP: "pointerup",
      POINTEROVER: "pointerover",
      POINTEROUT: "pointerout",
      POINTERENTER: "pointerenter",
      POINTERLEAVE: "pointerleave",
      POINTERCANCEL: "pointercancel"
    },
        Nr = function (t) {
      function e(e, i, r, n, o) {
        t.call(this, e, i, r.originalEvent, n, o), this.pointerEvent = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Fr),
        Gr = {
      POINTERMOVE: "pointermove",
      POINTERDOWN: "pointerdown",
      POINTERUP: "pointerup",
      POINTEROVER: "pointerover",
      POINTEROUT: "pointerout",
      POINTERENTER: "pointerenter",
      POINTERLEAVE: "pointerleave",
      POINTERCANCEL: "pointercancel"
    },
        Dr = function Dr(t, e) {
      this.dispatcher = t, this.mapping_ = e;
    };

    Dr.prototype.getEvents = function () {
      return Object.keys(this.mapping_);
    }, Dr.prototype.getHandlerForEvent = function (t) {
      return this.mapping_[t];
    };
    var kr = Dr,
        jr = 1,
        Ur = "mouse";

    function Yr(t) {
      if (!this.isEventSimulatedFromTouch_(t)) {
        jr.toString() in this.pointerMap && this.cancel(t);
        var e = Wr(t, this.dispatcher);
        this.pointerMap[jr.toString()] = t, this.dispatcher.down(e, t);
      }
    }

    function Br(t) {
      if (!this.isEventSimulatedFromTouch_(t)) {
        var e = Wr(t, this.dispatcher);
        this.dispatcher.move(e, t);
      }
    }

    function Vr(t) {
      if (!this.isEventSimulatedFromTouch_(t)) {
        var e = this.pointerMap[jr.toString()];

        if (e && e.button === t.button) {
          var i = Wr(t, this.dispatcher);
          this.dispatcher.up(i, t), this.cleanupMouse();
        }
      }
    }

    function Xr(t) {
      if (!this.isEventSimulatedFromTouch_(t)) {
        var e = Wr(t, this.dispatcher);
        this.dispatcher.enterOver(e, t);
      }
    }

    function zr(t) {
      if (!this.isEventSimulatedFromTouch_(t)) {
        var e = Wr(t, this.dispatcher);
        this.dispatcher.leaveOut(e, t);
      }
    }

    function Wr(t, e) {
      var i = e.cloneEvent(t, t),
          r = i.preventDefault;
      return i.preventDefault = function () {
        t.preventDefault(), r();
      }, i.pointerId = jr, i.isPrimary = !0, i.pointerType = Ur, i;
    }

    var Kr = function (t) {
      function e(e) {
        var i = {
          mousedown: Yr,
          mousemove: Br,
          mouseup: Vr,
          mouseover: Xr,
          mouseout: zr
        };
        t.call(this, e, i), this.pointerMap = e.pointerMap, this.lastTouches = [];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isEventSimulatedFromTouch_ = function (t) {
        for (var e = this.lastTouches, i = t.clientX, r = t.clientY, n = 0, o = e.length, s = void 0; n < o && (s = e[n]); n++) {
          var a = Math.abs(i - s[0]),
              h = Math.abs(r - s[1]);
          if (a <= 25 && h <= 25) return !0;
        }

        return !1;
      }, e.prototype.cancel = function (t) {
        var e = Wr(t, this.dispatcher);
        this.dispatcher.cancel(e, t), this.cleanupMouse();
      }, e.prototype.cleanupMouse = function () {
        delete this.pointerMap[jr.toString()];
      }, e;
    }(kr),
        Hr = ["", "unavailable", "touch", "pen", "mouse"];

    function Zr(t) {
      this.pointerMap[t.pointerId.toString()] = t;
      var e = this.prepareEvent_(t);
      this.dispatcher.down(e, t);
    }

    function qr(t) {
      var e = this.prepareEvent_(t);
      this.dispatcher.move(e, t);
    }

    function Jr(t) {
      var e = this.prepareEvent_(t);
      this.dispatcher.up(e, t), this.cleanup(t.pointerId);
    }

    function Qr(t) {
      var e = this.prepareEvent_(t);
      this.dispatcher.leaveOut(e, t);
    }

    function $r(t) {
      var e = this.prepareEvent_(t);
      this.dispatcher.enterOver(e, t);
    }

    function tn(t) {
      var e = this.prepareEvent_(t);
      this.dispatcher.cancel(e, t), this.cleanup(t.pointerId);
    }

    function en(t) {
      var e = this.dispatcher.makeEvent("lostpointercapture", t, t);
      this.dispatcher.dispatchEvent(e);
    }

    function rn(t) {
      var e = this.dispatcher.makeEvent("gotpointercapture", t, t);
      this.dispatcher.dispatchEvent(e);
    }

    var nn = function (t) {
      function e(e) {
        var i = {
          MSPointerDown: Zr,
          MSPointerMove: qr,
          MSPointerUp: Jr,
          MSPointerOut: Qr,
          MSPointerOver: $r,
          MSPointerCancel: tn,
          MSGotPointerCapture: rn,
          MSLostPointerCapture: en
        };
        t.call(this, e, i), this.pointerMap = e.pointerMap;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.prepareEvent_ = function (t) {
        var e = t;
        return "number" == typeof t.pointerType && ((e = this.dispatcher.cloneEvent(t, t)).pointerType = Hr[t.pointerType]), e;
      }, e.prototype.cleanup = function (t) {
        delete this.pointerMap[t.toString()];
      }, e;
    }(kr);

    function on(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function sn(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function an(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function hn(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function ln(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function un(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function pn(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    function cn(t) {
      this.dispatcher.fireNativeEvent(t);
    }

    var dn = function (t) {
      function e(e) {
        var i = {
          pointerdown: on,
          pointermove: sn,
          pointerup: an,
          pointerout: hn,
          pointerover: ln,
          pointercancel: un,
          gotpointercapture: cn,
          lostpointercapture: pn
        };
        t.call(this, e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(kr),
        fn = !1,
        _n = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.originalEvent = i;
        var n = r || {};
        this.buttons = function (t) {
          var e;
          if (t.buttons || fn) e = t.buttons;else switch (t.which) {
            case 1:
              e = 1;
              break;

            case 2:
              e = 4;
              break;

            case 3:
              e = 2;
              break;

            default:
              e = 0;
          }
          return e;
        }(n), this.pressure = function (t, e) {
          var i = 0;
          i = t.pressure ? t.pressure : e ? .5 : 0;
          return i;
        }(n, this.buttons), this.bubbles = "bubbles" in n && n.bubbles, this.cancelable = "cancelable" in n && n.cancelable, this.view = "view" in n ? n.view : null, this.detail = "detail" in n ? n.detail : null, this.screenX = "screenX" in n ? n.screenX : 0, this.screenY = "screenY" in n ? n.screenY : 0, this.clientX = "clientX" in n ? n.clientX : 0, this.clientY = "clientY" in n ? n.clientY : 0, this.ctrlKey = "ctrlKey" in n && n.ctrlKey, this.altKey = "altKey" in n && n.altKey, this.shiftKey = "shiftKey" in n && n.shiftKey, this.metaKey = "metaKey" in n && n.metaKey, this.button = "button" in n ? n.button : 0, this.relatedTarget = "relatedTarget" in n ? n.relatedTarget : null, this.pointerId = "pointerId" in n ? n.pointerId : 0, this.width = "width" in n ? n.width : 0, this.height = "height" in n ? n.height : 0, this.tiltX = "tiltX" in n ? n.tiltX : 0, this.tiltY = "tiltY" in n ? n.tiltY : 0, this.pointerType = "pointerType" in n ? n.pointerType : "", this.hwTimestamp = "hwTimestamp" in n ? n.hwTimestamp : 0, this.isPrimary = "isPrimary" in n && n.isPrimary, i.preventDefault && (this.preventDefault = function () {
          i.preventDefault();
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    !function () {
      try {
        var t = new MouseEvent("click", {
          buttons: 1
        });
        fn = 1 === t.buttons;
      } catch (t) {}
    }();
    var gn = _n;

    function yn(t) {
      this.vacuumTouches_(t), this.setPrimaryTouch_(t.changedTouches[0]), this.dedupSynthMouse_(t), this.clickCount_++, this.processTouches_(t, this.overDown_);
    }

    function vn(t) {
      this.processTouches_(t, this.moveOverOut_);
    }

    function mn(t) {
      this.dedupSynthMouse_(t), this.processTouches_(t, this.upOut_);
    }

    function xn(t) {
      this.processTouches_(t, this.cancelOut_);
    }

    var En = function (t) {
      function e(e, i) {
        var r = {
          touchstart: yn,
          touchmove: vn,
          touchend: mn,
          touchcancel: xn
        };
        t.call(this, e, r), this.pointerMap = e.pointerMap, this.mouseSource = i, this.firstTouchId_ = void 0, this.clickCount_ = 0, this.resetId_, this.dedupTimeout_ = 2500;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isPrimaryTouch_ = function (t) {
        return this.firstTouchId_ === t.identifier;
      }, e.prototype.setPrimaryTouch_ = function (t) {
        var e = Object.keys(this.pointerMap).length;
        (0 === e || 1 === e && jr.toString() in this.pointerMap) && (this.firstTouchId_ = t.identifier, this.cancelResetClickCount_());
      }, e.prototype.removePrimaryPointer_ = function (t) {
        t.isPrimary && (this.firstTouchId_ = void 0, this.resetClickCount_());
      }, e.prototype.resetClickCount_ = function () {
        this.resetId_ = setTimeout(this.resetClickCountHandler_.bind(this), 200);
      }, e.prototype.resetClickCountHandler_ = function () {
        this.clickCount_ = 0, this.resetId_ = void 0;
      }, e.prototype.cancelResetClickCount_ = function () {
        void 0 !== this.resetId_ && clearTimeout(this.resetId_);
      }, e.prototype.touchToPointer_ = function (t, e) {
        var i = this.dispatcher.cloneEvent(t, e);
        return i.pointerId = e.identifier + 2, i.bubbles = !0, i.cancelable = !0, i.detail = this.clickCount_, i.button = 0, i.buttons = 1, i.width = e.radiusX || 0, i.height = e.radiusY || 0, i.pressure = e.force || .5, i.isPrimary = this.isPrimaryTouch_(e), i.pointerType = "touch", i.clientX = e.clientX, i.clientY = e.clientY, i.screenX = e.screenX, i.screenY = e.screenY, i;
      }, e.prototype.processTouches_ = function (t, e) {
        var i = Array.prototype.slice.call(t.changedTouches),
            r = i.length;

        function n() {
          t.preventDefault();
        }

        for (var o = 0; o < r; ++o) {
          var s = this.touchToPointer_(t, i[o]);
          s.preventDefault = n, e.call(this, t, s);
        }
      }, e.prototype.findTouch_ = function (t, e) {
        for (var i = t.length, r = 0; r < i; r++) {
          if (t[r].identifier === e) return !0;
        }

        return !1;
      }, e.prototype.vacuumTouches_ = function (t) {
        var e = t.touches,
            i = Object.keys(this.pointerMap),
            r = i.length;

        if (r >= e.length) {
          for (var n = [], o = 0; o < r; ++o) {
            var s = Number(i[o]),
                a = this.pointerMap[s];
            s == jr || this.findTouch_(e, s - 2) || n.push(a.out);
          }

          for (var h = 0; h < n.length; ++h) {
            this.cancelOut_(t, n[h]);
          }
        }
      }, e.prototype.overDown_ = function (t, e) {
        this.pointerMap[e.pointerId] = {
          target: e.target,
          out: e,
          outTarget: e.target
        }, this.dispatcher.over(e, t), this.dispatcher.enter(e, t), this.dispatcher.down(e, t);
      }, e.prototype.moveOverOut_ = function (t, e) {
        var i = e,
            r = this.pointerMap[i.pointerId];

        if (r) {
          var n = r.out,
              o = r.outTarget;
          this.dispatcher.move(i, t), n && o !== i.target && (n.relatedTarget = i.target, i.relatedTarget = o, n.target = o, i.target ? (this.dispatcher.leaveOut(n, t), this.dispatcher.enterOver(i, t)) : (i.target = o, i.relatedTarget = null, this.cancelOut_(t, i))), r.out = i, r.outTarget = i.target;
        }
      }, e.prototype.upOut_ = function (t, e) {
        this.dispatcher.up(e, t), this.dispatcher.out(e, t), this.dispatcher.leave(e, t), this.cleanUpPointer_(e);
      }, e.prototype.cancelOut_ = function (t, e) {
        this.dispatcher.cancel(e, t), this.dispatcher.out(e, t), this.dispatcher.leave(e, t), this.cleanUpPointer_(e);
      }, e.prototype.cleanUpPointer_ = function (t) {
        delete this.pointerMap[t.pointerId], this.removePrimaryPointer_(t);
      }, e.prototype.dedupSynthMouse_ = function (t) {
        var e = this.mouseSource.lastTouches,
            i = t.changedTouches[0];

        if (this.isPrimaryTouch_(i)) {
          var r = [i.clientX, i.clientY];
          e.push(r), setTimeout(function () {
            !function (t, e) {
              var i = t.indexOf(e),
                  r = i > -1;
              r && t.splice(i, 1);
            }(e, r);
          }, this.dedupTimeout_);
        }
      }, e;
    }(kr),
        Sn = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]],
        Tn = function (t) {
      function e(e) {
        t.call(this), this.element_ = e, this.pointerMap = {}, this.eventMap_ = {}, this.eventSourceList_ = [], this.registerSources();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.registerSources = function () {
        if (Yi) this.registerSource("native", new dn(this));else if (Bi) this.registerSource("ms", new nn(this));else {
          var t = new Kr(this);
          this.registerSource("mouse", t), Ui && this.registerSource("touch", new En(this, t));
        }
        this.register_();
      }, e.prototype.registerSource = function (t, e) {
        var i = e,
            r = i.getEvents();
        r && (r.forEach(function (t) {
          var e = i.getHandlerForEvent(t);
          e && (this.eventMap_[t] = e.bind(i));
        }.bind(this)), this.eventSourceList_.push(i));
      }, e.prototype.register_ = function () {
        for (var t = this.eventSourceList_.length, e = 0; e < t; e++) {
          var i = this.eventSourceList_[e];
          this.addEvents_(i.getEvents());
        }
      }, e.prototype.unregister_ = function () {
        for (var t = this.eventSourceList_.length, e = 0; e < t; e++) {
          var i = this.eventSourceList_[e];
          this.removeEvents_(i.getEvents());
        }
      }, e.prototype.eventHandler_ = function (t) {
        var e = t.type,
            i = this.eventMap_[e];
        i && i(t);
      }, e.prototype.addEvents_ = function (t) {
        t.forEach(function (t) {
          v(this.element_, t, this.eventHandler_, this);
        }.bind(this));
      }, e.prototype.removeEvents_ = function (t) {
        t.forEach(function (t) {
          x(this.element_, t, this.eventHandler_, this);
        }.bind(this));
      }, e.prototype.cloneEvent = function (t, e) {
        for (var i = {}, r = 0, n = Sn.length; r < n; r++) {
          var o = Sn[r][0];
          i[o] = t[o] || e[o] || Sn[r][1];
        }

        return i;
      }, e.prototype.down = function (t, e) {
        this.fireEvent(Gr.POINTERDOWN, t, e);
      }, e.prototype.move = function (t, e) {
        this.fireEvent(Gr.POINTERMOVE, t, e);
      }, e.prototype.up = function (t, e) {
        this.fireEvent(Gr.POINTERUP, t, e);
      }, e.prototype.enter = function (t, e) {
        t.bubbles = !1, this.fireEvent(Gr.POINTERENTER, t, e);
      }, e.prototype.leave = function (t, e) {
        t.bubbles = !1, this.fireEvent(Gr.POINTERLEAVE, t, e);
      }, e.prototype.over = function (t, e) {
        t.bubbles = !0, this.fireEvent(Gr.POINTEROVER, t, e);
      }, e.prototype.out = function (t, e) {
        t.bubbles = !0, this.fireEvent(Gr.POINTEROUT, t, e);
      }, e.prototype.cancel = function (t, e) {
        this.fireEvent(Gr.POINTERCANCEL, t, e);
      }, e.prototype.leaveOut = function (t, e) {
        this.out(t, e), this.contains_(t.target, t.relatedTarget) || this.leave(t, e);
      }, e.prototype.enterOver = function (t, e) {
        this.over(t, e), this.contains_(t.target, t.relatedTarget) || this.enter(t, e);
      }, e.prototype.contains_ = function (t, e) {
        return !(!t || !e) && t.contains(e);
      }, e.prototype.makeEvent = function (t, e, i) {
        return new gn(t, i, e);
      }, e.prototype.fireEvent = function (t, e, i) {
        var r = this.makeEvent(t, e, i);
        this.dispatchEvent(r);
      }, e.prototype.fireNativeEvent = function (t) {
        var e = this.makeEvent(t.type, t, t);
        this.dispatchEvent(e);
      }, e.prototype.wrapMouseEvent = function (t, e) {
        return this.makeEvent(t, Wr(e, this), e);
      }, e.prototype.disposeInternal = function () {
        this.unregister_(), t.prototype.disposeInternal.call(this);
      }, e;
    }(b),
        Cn = function (t) {
      function e(e, i) {
        t.call(this), this.map_ = e, this.clickTimeoutId_, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = i ? i * Di : Di, this.down_ = null;
        var r = this.map_.getViewport();
        this.activePointers_ = 0, this.trackedTouches_ = {}, this.pointerEventHandler_ = new Tn(r), this.documentPointerEventHandler_ = null, this.pointerdownListenerKey_ = v(this.pointerEventHandler_, Gr.POINTERDOWN, this.handlePointerDown_, this), this.relayedListenerKey_ = v(this.pointerEventHandler_, Gr.POINTERMOVE, this.relayEvent_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.emulateClick_ = function (t) {
        var e = new Nr(Ar.CLICK, this.map_, t);
        this.dispatchEvent(e), void 0 !== this.clickTimeoutId_ ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new Nr(Ar.DBLCLICK, this.map_, t), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout(function () {
          this.clickTimeoutId_ = void 0;
          var e = new Nr(Ar.SINGLECLICK, this.map_, t);
          this.dispatchEvent(e);
        }.bind(this), 250);
      }, e.prototype.updateActivePointers_ = function (t) {
        var e = t;
        e.type == Ar.POINTERUP || e.type == Ar.POINTERCANCEL ? delete this.trackedTouches_[e.pointerId] : e.type == Ar.POINTERDOWN && (this.trackedTouches_[e.pointerId] = !0), this.activePointers_ = Object.keys(this.trackedTouches_).length;
      }, e.prototype.handlePointerUp_ = function (t) {
        this.updateActivePointers_(t);
        var e = new Nr(Ar.POINTERUP, this.map_, t);
        this.dispatchEvent(e), e.propagationStopped || this.dragging_ || !this.isMouseActionButton_(t) || this.emulateClick_(this.down_), 0 === this.activePointers_ && (this.dragListenerKeys_.forEach(E), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null, this.documentPointerEventHandler_.dispose(), this.documentPointerEventHandler_ = null);
      }, e.prototype.isMouseActionButton_ = function (t) {
        return 0 === t.button;
      }, e.prototype.handlePointerDown_ = function (t) {
        this.updateActivePointers_(t);
        var e = new Nr(Ar.POINTERDOWN, this.map_, t);
        this.dispatchEvent(e), this.down_ = t, 0 === this.dragListenerKeys_.length && (this.documentPointerEventHandler_ = new Tn(document), this.dragListenerKeys_.push(v(this.documentPointerEventHandler_, Ar.POINTERMOVE, this.handlePointerMove_, this), v(this.documentPointerEventHandler_, Ar.POINTERUP, this.handlePointerUp_, this), v(this.pointerEventHandler_, Ar.POINTERCANCEL, this.handlePointerUp_, this)));
      }, e.prototype.handlePointerMove_ = function (t) {
        if (this.isMoving_(t)) {
          this.dragging_ = !0;
          var e = new Nr(Ar.POINTERDRAG, this.map_, t, this.dragging_);
          this.dispatchEvent(e);
        }

        t.preventDefault();
      }, e.prototype.relayEvent_ = function (t) {
        var e = !(!this.down_ || !this.isMoving_(t));
        this.dispatchEvent(new Nr(t.type, this.map_, t, e));
      }, e.prototype.isMoving_ = function (t) {
        return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_;
      }, e.prototype.disposeInternal = function () {
        this.relayedListenerKey_ && (E(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.pointerdownListenerKey_ && (E(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(E), this.dragListenerKeys_.length = 0, this.documentPointerEventHandler_ && (this.documentPointerEventHandler_.dispose(), this.documentPointerEventHandler_ = null), this.pointerEventHandler_ && (this.pointerEventHandler_.dispose(), this.pointerEventHandler_ = null), t.prototype.disposeInternal.call(this);
      }, e;
    }(b),
        Rn = "postrender",
        wn = "movestart",
        In = "moveend",
        Ln = {
      LAYERGROUP: "layergroup",
      SIZE: "size",
      TARGET: "target",
      VIEW: "view"
    },
        On = {
      IDLE: 0,
      LOADING: 1,
      LOADED: 2,
      ERROR: 3,
      EMPTY: 4,
      ABORT: 5
    },
        Pn = function Pn(t, e) {
      this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
    };

    Pn.prototype.clear = function () {
      this.elements_.length = 0, this.priorities_.length = 0, p(this.queuedElements_);
    }, Pn.prototype.dequeue = function () {
      var t = this.elements_,
          e = this.priorities_,
          i = t[0];
      1 == t.length ? (t.length = 0, e.length = 0) : (t[0] = t.pop(), e[0] = e.pop(), this.siftUp_(0));
      var r = this.keyFunction_(i);
      return delete this.queuedElements_[r], i;
    }, Pn.prototype.enqueue = function (t) {
      Y(!(this.keyFunction_(t) in this.queuedElements_), 31);
      var e = this.priorityFunction_(t);
      return e != 1 / 0 && (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0);
    }, Pn.prototype.getCount = function () {
      return this.elements_.length;
    }, Pn.prototype.getLeftChildIndex_ = function (t) {
      return 2 * t + 1;
    }, Pn.prototype.getRightChildIndex_ = function (t) {
      return 2 * t + 2;
    }, Pn.prototype.getParentIndex_ = function (t) {
      return t - 1 >> 1;
    }, Pn.prototype.heapify_ = function () {
      var t;

      for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) {
        this.siftUp_(t);
      }
    }, Pn.prototype.isEmpty = function () {
      return 0 === this.elements_.length;
    }, Pn.prototype.isKeyQueued = function (t) {
      return t in this.queuedElements_;
    }, Pn.prototype.isQueued = function (t) {
      return this.isKeyQueued(this.keyFunction_(t));
    }, Pn.prototype.siftUp_ = function (t) {
      for (var e = this.elements_, i = this.priorities_, r = e.length, n = e[t], o = i[t], s = t; t < r >> 1;) {
        var a = this.getLeftChildIndex_(t),
            h = this.getRightChildIndex_(t),
            l = h < r && i[h] < i[a] ? h : a;
        e[t] = e[l], i[t] = i[l], t = l;
      }

      e[t] = n, i[t] = o, this.siftDown_(s, t);
    }, Pn.prototype.siftDown_ = function (t, e) {
      for (var i = this.elements_, r = this.priorities_, n = i[e], o = r[e]; e > t;) {
        var s = this.getParentIndex_(e);
        if (!(r[s] > o)) break;
        i[e] = i[s], r[e] = r[s], e = s;
      }

      i[e] = n, r[e] = o;
    }, Pn.prototype.reprioritize = function () {
      var t,
          e,
          i,
          r = this.priorityFunction_,
          n = this.elements_,
          o = this.priorities_,
          s = 0,
          a = n.length;

      for (e = 0; e < a; ++e) {
        (i = r(t = n[e])) == 1 / 0 ? delete this.queuedElements_[this.keyFunction_(t)] : (o[s] = i, n[s++] = t);
      }

      n.length = s, o.length = s, this.heapify_();
    };

    var bn = Pn,
        Mn = function (t) {
      function e(e, i) {
        t.call(this, function (t) {
          return e.apply(null, t);
        }, function (t) {
          return t[0].getKey();
        }), this.tileChangeCallback_ = i, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.enqueue = function (e) {
        var i = t.prototype.enqueue.call(this, e);
        i && v(e[0], M.CHANGE, this.handleTileChange, this);
        return i;
      }, e.prototype.getTilesLoading = function () {
        return this.tilesLoading_;
      }, e.prototype.handleTileChange = function (t) {
        var e = t.target,
            i = e.getState();

        if (i === On.LOADED || i === On.ERROR || i === On.EMPTY || i === On.ABORT) {
          x(e, M.CHANGE, this.handleTileChange, this);
          var r = e.getKey();
          r in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[r], --this.tilesLoading_), this.tileChangeCallback_();
        }
      }, e.prototype.loadMoreTiles = function (t, e) {
        for (var i, r, n, o = 0, s = !1; this.tilesLoading_ < t && o < e && this.getCount() > 0;) {
          n = (r = this.dequeue()[0]).getKey(), (i = r.getState()) === On.ABORT ? s = !0 : i !== On.IDLE || n in this.tilesLoadingKeys_ || (this.tilesLoadingKeys_[n] = !0, ++this.tilesLoading_, ++o, r.load());
        }

        0 === o && s && this.tileChangeCallback_();
      }, e;
    }(bn),
        Fn = 42,
        An = 256;

    function Nn(t) {
      return t;
    }

    function Gn(t, e) {
      return void 0 !== t ? 0 : void 0;
    }

    function Dn(t, e) {
      return void 0 !== t ? t + e : void 0;
    }

    var kn = 0,
        jn = 1,
        Un = "center",
        Yn = "resolution",
        Bn = "rotation";

    function Vn(t) {
      return Math.pow(t, 3);
    }

    function Xn(t) {
      return 1 - Vn(1 - t);
    }

    function zn(t) {
      return 3 * t * t - 2 * t * t * t;
    }

    function Wn(t) {
      return t;
    }

    var Kn = 0;

    function Hn(t, e) {
      setTimeout(function () {
        t(e);
      }, 0);
    }

    function Zn(t) {
      return !(t.sourceCenter && t.targetCenter && !Qi(t.sourceCenter, t.targetCenter)) && t.sourceResolution === t.targetResolution && t.sourceRotation === t.targetRotation;
    }

    var qn = function (t) {
      function e(e) {
        t.call(this);
        var i = u({}, e);
        this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.updateAnimations_ = this.updateAnimations_.bind(this), this.projection_ = Ce(i.projection, "EPSG:3857"), this.applyOptions_(i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.applyOptions_ = function (t) {
        var e = {};
        e[Un] = void 0 !== t.center ? t.center : null;

        var i = function (t) {
          var e,
              i,
              r,
              n = void 0 !== t.minZoom ? t.minZoom : Kn,
              o = void 0 !== t.maxZoom ? t.maxZoom : 28,
              s = void 0 !== t.zoomFactor ? t.zoomFactor : 2;

          if (void 0 !== t.resolutions) {
            var a = t.resolutions;
            i = a[n], r = void 0 !== a[o] ? a[o] : a[a.length - 1], e = function (t) {
              return function (e, i, r) {
                if (void 0 !== e) {
                  var n = z(t, e, r);
                  n = kt(n + i, 0, t.length - 1);
                  var o = Math.floor(n);

                  if (n != o && o < t.length - 1) {
                    var s = t[o] / t[o + 1];
                    return t[o] / Math.pow(s, n - o);
                  }

                  return t[o];
                }
              };
            }(a);
          } else {
            var h = Ce(t.projection, "EPSG:3857"),
                l = h.getExtent(),
                u = l ? Math.max(Ot(l), Rt(l)) : 360 * Qt[$t.DEGREES] / h.getMetersPerUnit(),
                p = u / An / Math.pow(2, Kn),
                c = p / Math.pow(2, 28 - Kn);
            void 0 !== (i = t.maxResolution) ? n = 0 : i = p / Math.pow(s, n), void 0 === (r = t.minResolution) && (r = void 0 !== t.maxZoom ? void 0 !== t.maxResolution ? i / Math.pow(s, o) : p / Math.pow(s, o) : c), o = n + Math.floor(Math.log(i / r) / Math.log(s)), r = i / Math.pow(s, o - n), e = function (t, e, i) {
              return function (r, n, o) {
                if (void 0 !== r) {
                  var s = -o / 2 + .5,
                      a = Math.floor(Math.log(e / r) / Math.log(t) + s),
                      h = Math.max(a + n, 0);
                  return void 0 !== i && (h = Math.min(h, i)), e / Math.pow(t, h);
                }
              };
            }(s, i, o - n);
          }

          return {
            constraint: e,
            maxResolution: i,
            minResolution: r,
            minZoom: n,
            zoomFactor: s
          };
        }(t);

        this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = t.resolutions, this.minZoom_ = i.minZoom;

        var r = function (t) {
          return void 0 !== t.extent ? function (t) {
            return function (e) {
              return e ? [kt(e[0], t[0], t[2]), kt(e[1], t[1], t[3])] : void 0;
            };
          }(t.extent) : Nn;
        }(t),
            n = i.constraint,
            o = function (t) {
          if (void 0 === t.enableRotation || t.enableRotation) {
            var e = t.constrainRotation;
            return void 0 === e || !0 === e ? function (t) {
              var e = t || Vt(5);
              return function (t, i) {
                return void 0 !== t ? Math.abs(t + i) <= e ? 0 : t + i : void 0;
              };
            }() : !1 === e ? Dn : "number" == typeof e ? function (t) {
              var e = 2 * Math.PI / t;
              return function (t, i) {
                return void 0 !== t ? t = Math.floor((t + i) / e + .5) * e : void 0;
              };
            }(e) : Dn;
          }

          return Gn;
        }(t);

        this.constraints_ = {
          center: r,
          resolution: n,
          rotation: o
        }, void 0 !== t.resolution ? e[Yn] = t.resolution : void 0 !== t.zoom && (e[Yn] = this.constrainResolution(this.maxResolution_, t.zoom - this.minZoom_), this.resolutions_ && (e[Yn] = kt(Number(this.getResolution() || e[Yn]), this.minResolution_, this.maxResolution_))), e[Bn] = void 0 !== t.rotation ? t.rotation : 0, this.setProperties(e), this.options_ = t;
      }, e.prototype.getUpdatedOptions_ = function (t) {
        var e = u({}, this.options_);
        return void 0 !== e.resolution ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenter(), e.rotation = this.getRotation(), u({}, e, t);
      }, e.prototype.animate = function (t) {
        var e,
            i = arguments,
            r = arguments.length;

        if (r > 1 && "function" == typeof arguments[r - 1] && (e = arguments[r - 1], --r), !this.isDef()) {
          var n = arguments[r - 1];
          return n.center && this.setCenter(n.center), void 0 !== n.zoom && this.setZoom(n.zoom), void 0 !== n.rotation && this.setRotation(n.rotation), void (e && Hn(e, !0));
        }

        for (var o = Date.now(), s = this.getCenter().slice(), a = this.getResolution(), h = this.getRotation(), l = [], u = 0; u < r; ++u) {
          var p = i[u],
              c = {
            start: o,
            complete: !1,
            anchor: p.anchor,
            duration: void 0 !== p.duration ? p.duration : 1e3,
            easing: p.easing || zn
          };

          if (p.center && (c.sourceCenter = s, c.targetCenter = p.center, s = c.targetCenter), void 0 !== p.zoom ? (c.sourceResolution = a, c.targetResolution = this.constrainResolution(this.maxResolution_, p.zoom - this.minZoom_, 0), a = c.targetResolution) : p.resolution && (c.sourceResolution = a, c.targetResolution = p.resolution, a = c.targetResolution), void 0 !== p.rotation) {
            c.sourceRotation = h;
            var d = Xt(p.rotation - h + Math.PI, 2 * Math.PI) - Math.PI;
            c.targetRotation = h + d, h = c.targetRotation;
          }

          c.callback = e, Zn(c) ? c.complete = !0 : o += c.duration, l.push(c);
        }

        this.animations_.push(l), this.setHint(kn, 1), this.updateAnimations_();
      }, e.prototype.getAnimating = function () {
        return this.hints_[kn] > 0;
      }, e.prototype.getInteracting = function () {
        return this.hints_[jn] > 0;
      }, e.prototype.cancelAnimations = function () {
        this.setHint(kn, -this.hints_[kn]);

        for (var t = 0, e = this.animations_.length; t < e; ++t) {
          var i = this.animations_[t];
          i[0].callback && Hn(i[0].callback, !1);
        }

        this.animations_.length = 0;
      }, e.prototype.updateAnimations_ = function () {
        if (void 0 !== this.updateAnimationKey_ && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), this.getAnimating()) {
          for (var t = Date.now(), e = !1, i = this.animations_.length - 1; i >= 0; --i) {
            for (var r = this.animations_[i], n = !0, o = 0, s = r.length; o < s; ++o) {
              var a = r[o];

              if (!a.complete) {
                var h = t - a.start,
                    l = a.duration > 0 ? h / a.duration : 1;
                l >= 1 ? (a.complete = !0, l = 1) : n = !1;
                var u = a.easing(l);

                if (a.sourceCenter) {
                  var p = a.sourceCenter[0],
                      c = a.sourceCenter[1],
                      d = p + u * (a.targetCenter[0] - p),
                      f = c + u * (a.targetCenter[1] - c);
                  this.set(Un, [d, f]);
                }

                if (a.sourceResolution && a.targetResolution) {
                  var _ = 1 === u ? a.targetResolution : a.sourceResolution + u * (a.targetResolution - a.sourceResolution);

                  a.anchor && this.set(Un, this.calculateCenterZoom(_, a.anchor)), this.set(Yn, _);
                }

                if (void 0 !== a.sourceRotation && void 0 !== a.targetRotation) {
                  var g = 1 === u ? Xt(a.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : a.sourceRotation + u * (a.targetRotation - a.sourceRotation);
                  a.anchor && this.set(Un, this.calculateCenterRotate(g, a.anchor)), this.set(Bn, g);
                }

                if (e = !0, !a.complete) break;
              }
            }

            if (n) {
              this.animations_[i] = null, this.setHint(kn, -1);
              var y = r[0].callback;
              y && Hn(y, !0);
            }
          }

          this.animations_ = this.animations_.filter(Boolean), e && void 0 === this.updateAnimationKey_ && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_));
        }
      }, e.prototype.calculateCenterRotate = function (t, e) {
        var i,
            r = this.getCenter();
        return void 0 !== r && ($i(i = [r[0] - e[0], r[1] - e[1]], t - this.getRotation()), Hi(i, e)), i;
      }, e.prototype.calculateCenterZoom = function (t, e) {
        var i,
            r = this.getCenter(),
            n = this.getResolution();
        void 0 !== r && void 0 !== n && (i = [e[0] - t * (e[0] - r[0]) / n, e[1] - t * (e[1] - r[1]) / n]);
        return i;
      }, e.prototype.getSizeFromViewport_ = function () {
        var t = [100, 100],
            e = '.ol-viewport[data-view="' + o(this) + '"]',
            i = document.querySelector(e);

        if (i) {
          var r = getComputedStyle(i);
          t[0] = parseInt(r.width, 10), t[1] = parseInt(r.height, 10);
        }

        return t;
      }, e.prototype.constrainCenter = function (t) {
        return this.constraints_.center(t);
      }, e.prototype.constrainResolution = function (t, e, i) {
        var r = e || 0,
            n = i || 0;
        return this.constraints_.resolution(t, r, n);
      }, e.prototype.constrainRotation = function (t, e) {
        var i = e || 0;
        return this.constraints_.rotation(t, i);
      }, e.prototype.getCenter = function () {
        return this.get(Un);
      }, e.prototype.getConstraints = function () {
        return this.constraints_;
      }, e.prototype.getHints = function (t) {
        return void 0 !== t ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice();
      }, e.prototype.calculateExtent = function (t) {
        var e = t || this.getSizeFromViewport_(),
            i = this.getCenter();
        Y(i, 1);
        var r = this.getResolution();
        Y(void 0 !== r, 2);
        var n = this.getRotation();
        return Y(void 0 !== n, 3), Ct(i, r, n, e);
      }, e.prototype.getMaxResolution = function () {
        return this.maxResolution_;
      }, e.prototype.getMinResolution = function () {
        return this.minResolution_;
      }, e.prototype.getMaxZoom = function () {
        return this.getZoomForResolution(this.minResolution_);
      }, e.prototype.setMaxZoom = function (t) {
        this.applyOptions_(this.getUpdatedOptions_({
          maxZoom: t
        }));
      }, e.prototype.getMinZoom = function () {
        return this.getZoomForResolution(this.maxResolution_);
      }, e.prototype.setMinZoom = function (t) {
        this.applyOptions_(this.getUpdatedOptions_({
          minZoom: t
        }));
      }, e.prototype.getProjection = function () {
        return this.projection_;
      }, e.prototype.getResolution = function () {
        return this.get(Yn);
      }, e.prototype.getResolutions = function () {
        return this.resolutions_;
      }, e.prototype.getResolutionForExtent = function (t, e) {
        var i = e || this.getSizeFromViewport_(),
            r = Ot(t) / i[0],
            n = Rt(t) / i[1];
        return Math.max(r, n);
      }, e.prototype.getResolutionForValueFunction = function (t) {
        var e = t || 2,
            i = this.maxResolution_,
            r = this.minResolution_,
            n = Math.log(i / r) / Math.log(e);
        return function (t) {
          return i / Math.pow(e, t * n);
        };
      }, e.prototype.getRotation = function () {
        return this.get(Bn);
      }, e.prototype.getValueForResolutionFunction = function (t) {
        var e = t || 2,
            i = this.maxResolution_,
            r = this.minResolution_,
            n = Math.log(i / r) / Math.log(e);
        return function (t) {
          return Math.log(i / t) / Math.log(e) / n;
        };
      }, e.prototype.getState = function (t) {
        var e = this.getCenter(),
            i = this.getProjection(),
            r = this.getResolution(),
            n = r / t,
            o = this.getRotation();
        return {
          center: [Math.round(e[0] / n) * n, Math.round(e[1] / n) * n],
          projection: void 0 !== i ? i : null,
          resolution: r,
          rotation: o,
          zoom: this.getZoom()
        };
      }, e.prototype.getZoom = function () {
        var t,
            e = this.getResolution();
        return void 0 !== e && (t = this.getZoomForResolution(e)), t;
      }, e.prototype.getZoomForResolution = function (t) {
        var e,
            i,
            r = this.minZoom_ || 0;

        if (this.resolutions_) {
          var n = z(this.resolutions_, t, 1);
          r = n, e = this.resolutions_[n], i = n == this.resolutions_.length - 1 ? 2 : e / this.resolutions_[n + 1];
        } else e = this.maxResolution_, i = this.zoomFactor_;

        return r + Math.log(e / t) / Math.log(i);
      }, e.prototype.getResolutionForZoom = function (t) {
        return this.constrainResolution(this.maxResolution_, t - this.minZoom_, 0);
      }, e.prototype.fit = function (t, e) {
        var i,
            r = e || {},
            n = r.size;
        n || (n = this.getSizeFromViewport_()), Y(Array.isArray(t) || "function" == typeof t.getSimplifiedGeometry, 24), Array.isArray(t) ? (Y(!bt(t), 25), i = Oi(t)) : t.getType() === Nt.CIRCLE ? (i = Oi(t = t.getExtent())).rotate(this.getRotation(), Tt(t)) : i = t;
        var o,
            s = void 0 !== r.padding ? r.padding : [0, 0, 0, 0],
            a = void 0 === r.constrainResolution || r.constrainResolution,
            h = void 0 !== r.nearest && r.nearest;
        o = void 0 !== r.minResolution ? r.minResolution : void 0 !== r.maxZoom ? this.constrainResolution(this.maxResolution_, r.maxZoom - this.minZoom_, 0) : 0;

        for (var l = i.getFlatCoordinates(), u = this.getRotation(), p = Math.cos(-u), c = Math.sin(-u), d = 1 / 0, f = 1 / 0, _ = -1 / 0, g = -1 / 0, y = i.getStride(), v = 0, m = l.length; v < m; v += y) {
          var x = l[v] * p - l[v + 1] * c,
              E = l[v] * c + l[v + 1] * p;
          d = Math.min(d, x), f = Math.min(f, E), _ = Math.max(_, x), g = Math.max(g, E);
        }

        var S = this.getResolutionForExtent([d, f, _, g], [n[0] - s[1] - s[3], n[1] - s[0] - s[2]]);

        if (S = isNaN(S) ? o : Math.max(S, o), a) {
          var T = this.constrainResolution(S, 0, 0);
          !h && T < S && (T = this.constrainResolution(T, -1, 0)), S = T;
        }

        c = -c;
        var C = (d + _) / 2,
            R = (f + g) / 2,
            w = [(C += (s[1] - s[3]) / 2 * S) * p - (R += (s[0] - s[2]) / 2 * S) * c, R * p + C * c],
            L = r.callback ? r.callback : I;
        void 0 !== r.duration ? this.animate({
          resolution: S,
          center: w,
          duration: r.duration,
          easing: r.easing
        }, L) : (this.setResolution(S), this.setCenter(w), Hn(L, !0));
      }, e.prototype.centerOn = function (t, e, i) {
        var r = this.getRotation(),
            n = Math.cos(-r),
            o = Math.sin(-r),
            s = t[0] * n - t[1] * o,
            a = t[1] * n + t[0] * o,
            h = this.getResolution(),
            l = (s += (e[0] / 2 - i[0]) * h) * n - (a += (i[1] - e[1] / 2) * h) * (o = -o),
            u = a * n + s * o;
        this.setCenter([l, u]);
      }, e.prototype.isDef = function () {
        return !!this.getCenter() && void 0 !== this.getResolution();
      }, e.prototype.rotate = function (t, e) {
        if (void 0 !== e) {
          var i = this.calculateCenterRotate(t, e);
          this.setCenter(i);
        }

        this.setRotation(t);
      }, e.prototype.setCenter = function (t) {
        this.set(Un, t), this.getAnimating() && this.cancelAnimations();
      }, e.prototype.setHint = function (t, e) {
        return this.hints_[t] += e, this.changed(), this.hints_[t];
      }, e.prototype.setResolution = function (t) {
        this.set(Yn, t), this.getAnimating() && this.cancelAnimations();
      }, e.prototype.setRotation = function (t) {
        this.set(Bn, t), this.getAnimating() && this.cancelAnimations();
      }, e.prototype.setZoom = function (t) {
        this.setResolution(this.getResolutionForZoom(t));
      }, e;
    }(D);

    function Jn(t, e) {
      var i = document.createElement("canvas");
      return t && (i.width = t), e && (i.height = e), i.getContext("2d");
    }

    function Qn(t, e) {
      var i = e.parentNode;
      i && i.replaceChild(t, e);
    }

    function $n(t) {
      return t && t.parentNode ? t.parentNode.removeChild(t) : null;
    }

    function to(t) {
      for (; t.lastChild;) {
        t.removeChild(t.lastChild);
      }
    }

    var eo = {
      OPACITY: "opacity",
      VISIBLE: "visible",
      EXTENT: "extent",
      Z_INDEX: "zIndex",
      MAX_RESOLUTION: "maxResolution",
      MIN_RESOLUTION: "minResolution",
      SOURCE: "source"
    },
        io = function (t) {
      function e(e) {
        t.call(this);
        var i = u({}, e);
        i[eo.OPACITY] = void 0 !== e.opacity ? e.opacity : 1, i[eo.VISIBLE] = void 0 === e.visible || e.visible, i[eo.Z_INDEX] = e.zIndex, i[eo.MAX_RESOLUTION] = void 0 !== e.maxResolution ? e.maxResolution : 1 / 0, i[eo.MIN_RESOLUTION] = void 0 !== e.minResolution ? e.minResolution : 0, this.setProperties(i), this.state_ = null, this.type;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getType = function () {
        return this.type;
      }, e.prototype.getLayerState = function () {
        var t = this.state_ || {
          layer: this,
          managed: !0
        };
        return t.opacity = kt(this.getOpacity(), 0, 1), t.sourceState = this.getSourceState(), t.visible = this.getVisible(), t.extent = this.getExtent(), t.zIndex = this.getZIndex() || 0, t.maxResolution = this.getMaxResolution(), t.minResolution = Math.max(this.getMinResolution(), 0), this.state_ = t, t;
      }, e.prototype.getLayersArray = function (t) {
        return r();
      }, e.prototype.getLayerStatesArray = function (t) {
        return r();
      }, e.prototype.getExtent = function () {
        return this.get(eo.EXTENT);
      }, e.prototype.getMaxResolution = function () {
        return this.get(eo.MAX_RESOLUTION);
      }, e.prototype.getMinResolution = function () {
        return this.get(eo.MIN_RESOLUTION);
      }, e.prototype.getOpacity = function () {
        return this.get(eo.OPACITY);
      }, e.prototype.getSourceState = function () {
        return r();
      }, e.prototype.getVisible = function () {
        return this.get(eo.VISIBLE);
      }, e.prototype.getZIndex = function () {
        return this.get(eo.Z_INDEX);
      }, e.prototype.setExtent = function (t) {
        this.set(eo.EXTENT, t);
      }, e.prototype.setMaxResolution = function (t) {
        this.set(eo.MAX_RESOLUTION, t);
      }, e.prototype.setMinResolution = function (t) {
        this.set(eo.MIN_RESOLUTION, t);
      }, e.prototype.setOpacity = function (t) {
        this.set(eo.OPACITY, t);
      }, e.prototype.setVisible = function (t) {
        this.set(eo.VISIBLE, t);
      }, e.prototype.setZIndex = function (t) {
        this.set(eo.Z_INDEX, t);
      }, e;
    }(D),
        ro = {
      UNDEFINED: "undefined",
      LOADING: "loading",
      READY: "ready",
      ERROR: "error"
    },
        no = {
      LAYERS: "layers"
    },
        oo = function (t) {
      function e(e) {
        var i = e || {},
            r = u({}, i);
        delete r.layers;
        var n = i.layers;
        t.call(this, r), this.layersListenerKeys_ = [], this.listenerKeys_ = {}, v(this, G(no.LAYERS), this.handleLayersChanged_, this), n ? Array.isArray(n) ? n = new U(n.slice(), {
          unique: !0
        }) : Y("function" == typeof n.getArray, 43) : n = new U(void 0, {
          unique: !0
        }), this.setLayers(n);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleLayerChange_ = function () {
        this.changed();
      }, e.prototype.handleLayersChanged_ = function () {
        this.layersListenerKeys_.forEach(E), this.layersListenerKeys_.length = 0;
        var t = this.getLayers();

        for (var e in this.layersListenerKeys_.push(v(t, h.ADD, this.handleLayersAdd_, this), v(t, h.REMOVE, this.handleLayersRemove_, this)), this.listenerKeys_) {
          this.listenerKeys_[e].forEach(E);
        }

        p(this.listenerKeys_);

        for (var i = t.getArray(), r = 0, n = i.length; r < n; r++) {
          var s = i[r];
          this.listenerKeys_[o(s)] = [v(s, l, this.handleLayerChange_, this), v(s, M.CHANGE, this.handleLayerChange_, this)];
        }

        this.changed();
      }, e.prototype.handleLayersAdd_ = function (t) {
        var e = t.element;
        this.listenerKeys_[o(e)] = [v(e, l, this.handleLayerChange_, this), v(e, M.CHANGE, this.handleLayerChange_, this)], this.changed();
      }, e.prototype.handleLayersRemove_ = function (t) {
        var e = o(t.element);
        this.listenerKeys_[e].forEach(E), delete this.listenerKeys_[e], this.changed();
      }, e.prototype.getLayers = function () {
        return this.get(no.LAYERS);
      }, e.prototype.setLayers = function (t) {
        this.set(no.LAYERS, t);
      }, e.prototype.getLayersArray = function (t) {
        var e = void 0 !== t ? t : [];
        return this.getLayers().forEach(function (t) {
          t.getLayersArray(e);
        }), e;
      }, e.prototype.getLayerStatesArray = function (t) {
        var e = void 0 !== t ? t : [],
            i = e.length;
        this.getLayers().forEach(function (t) {
          t.getLayerStatesArray(e);
        });

        for (var r = this.getLayerState(), n = i, o = e.length; n < o; n++) {
          var s = e[n];
          s.opacity *= r.opacity, s.visible = s.visible && r.visible, s.maxResolution = Math.min(s.maxResolution, r.maxResolution), s.minResolution = Math.max(s.minResolution, r.minResolution), void 0 !== r.extent && (void 0 !== s.extent ? s.extent = wt(s.extent, r.extent) : s.extent = r.extent);
        }

        return e;
      }, e.prototype.getSourceState = function () {
        return ro.READY;
      }, e;
    }(io);

    function so(t, e, i) {
      return void 0 === i && (i = [0, 0]), i[0] = t[0] + 2 * e, i[1] = t[1] + 2 * e, i;
    }

    function ao(t, e, i) {
      return void 0 === i && (i = [0, 0]), i[0] = t[0] * e + .5 | 0, i[1] = t[1] * e + .5 | 0, i;
    }

    function ho(t, e) {
      return Array.isArray(t) ? t : (void 0 === e ? e = [t, t] : e[0] = e[1] = t, e);
    }

    var lo = function (t) {
      function e(e) {
        t.call(this);

        var i = function (t) {
          var e = null;
          void 0 !== t.keyboardEventTarget && (e = "string" == typeof t.keyboardEventTarget ? document.getElementById(t.keyboardEventTarget) : t.keyboardEventTarget);
          var i,
              r,
              n,
              o = {},
              s = t.layers && "function" == typeof t.layers.getLayers ? t.layers : new oo({
            layers: t.layers
          });
          o[Ln.LAYERGROUP] = s, o[Ln.TARGET] = t.target, o[Ln.VIEW] = void 0 !== t.view ? t.view : new qn(), void 0 !== t.controls && (Array.isArray(t.controls) ? i = new U(t.controls.slice()) : (Y("function" == typeof t.controls.getArray, 47), i = t.controls));
          void 0 !== t.interactions && (Array.isArray(t.interactions) ? r = new U(t.interactions.slice()) : (Y("function" == typeof t.interactions.getArray, 48), r = t.interactions));
          void 0 !== t.overlays ? Array.isArray(t.overlays) ? n = new U(t.overlays.slice()) : (Y("function" == typeof t.overlays.getArray, 49), n = t.overlays) : n = new U();
          return {
            controls: i,
            interactions: r,
            keyboardEventTarget: e,
            overlays: n,
            values: o
          };
        }(e);

        this.maxTilesLoading_ = void 0 !== e.maxTilesLoading ? e.maxTilesLoading : 16, this.loadTilesWhileAnimating_ = void 0 !== e.loadTilesWhileAnimating && e.loadTilesWhileAnimating, this.loadTilesWhileInteracting_ = void 0 !== e.loadTilesWhileInteracting && e.loadTilesWhileInteracting, this.pixelRatio_ = void 0 !== e.pixelRatio ? e.pixelRatio : Di, this.animationDelayKey_, this.animationDelay_ = function () {
          this.animationDelayKey_ = void 0, this.renderFrame_.call(this, Date.now());
        }.bind(this), this.coordinateToPixelTransform_ = [1, 0, 0, 1, 0, 0], this.pixelToCoordinateTransform_ = [1, 0, 0, 1, 0, 0], this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + (Ui ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.viewport_.style.msTouchAction = "none", this.viewport_.style.touchAction = "none", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent";

        for (var r = [M.CLICK, M.DBLCLICK, M.MOUSEDOWN, M.TOUCHSTART, M.MSPOINTERDOWN, Ar.POINTERDOWN, M.MOUSEWHEEL, M.WHEEL], n = 0, o = r.length; n < o; ++n) {
          v(this.overlayContainerStopEvent_, r[n], O);
        }

        for (var s in this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = new Cn(this, e.moveTolerance), Ar) {
          v(this.mapBrowserEventHandler_, Ar[s], this.handleMapBrowserEvent, this);
        }

        this.keyboardEventTarget_ = i.keyboardEventTarget, this.keyHandlerKeys_ = null, v(this.viewport_, M.CONTEXTMENU, this.handleBrowserEvent, this), v(this.viewport_, M.WHEEL, this.handleBrowserEvent, this), v(this.viewport_, M.MOUSEWHEEL, this.handleBrowserEvent, this), this.controls = i.controls || new U(), this.interactions = i.interactions || new U(), this.overlays_ = i.overlays, this.overlayIdIndex_ = {}, this.renderer_ = this.createRenderer(), this.handleResize_, this.focus_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new Mn(this.getTilePriority.bind(this), this.handleTileChange_.bind(this)), this.skippedFeatureUids_ = {}, v(this, G(Ln.LAYERGROUP), this.handleLayerGroupChanged_, this), v(this, G(Ln.VIEW), this.handleViewChanged_, this), v(this, G(Ln.SIZE), this.handleSizeChanged_, this), v(this, G(Ln.TARGET), this.handleTargetChanged_, this), this.setProperties(i.values), this.controls.forEach(function (t) {
          t.setMap(this);
        }.bind(this)), v(this.controls, h.ADD, function (t) {
          t.element.setMap(this);
        }, this), v(this.controls, h.REMOVE, function (t) {
          t.element.setMap(null);
        }, this), this.interactions.forEach(function (t) {
          t.setMap(this);
        }.bind(this)), v(this.interactions, h.ADD, function (t) {
          t.element.setMap(this);
        }, this), v(this.interactions, h.REMOVE, function (t) {
          t.element.setMap(null);
        }, this), this.overlays_.forEach(this.addOverlayInternal_.bind(this)), v(this.overlays_, h.ADD, function (t) {
          this.addOverlayInternal_(t.element);
        }, this), v(this.overlays_, h.REMOVE, function (t) {
          var e = t.element.getId();
          void 0 !== e && delete this.overlayIdIndex_[e.toString()], t.element.setMap(null);
        }, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createRenderer = function () {
        throw new Error("Use a map type that has a createRenderer method");
      }, e.prototype.addControl = function (t) {
        this.getControls().push(t);
      }, e.prototype.addInteraction = function (t) {
        this.getInteractions().push(t);
      }, e.prototype.addLayer = function (t) {
        this.getLayerGroup().getLayers().push(t);
      }, e.prototype.addOverlay = function (t) {
        this.getOverlays().push(t);
      }, e.prototype.addOverlayInternal_ = function (t) {
        var e = t.getId();
        void 0 !== e && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this);
      }, e.prototype.disposeInternal = function () {
        this.mapBrowserEventHandler_.dispose(), x(this.viewport_, M.CONTEXTMENU, this.handleBrowserEvent, this), x(this.viewport_, M.WHEEL, this.handleBrowserEvent, this), x(this.viewport_, M.MOUSEWHEEL, this.handleBrowserEvent, this), void 0 !== this.handleResize_ && (removeEventListener(M.RESIZE, this.handleResize_, !1), this.handleResize_ = void 0), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0), this.setTarget(null), t.prototype.disposeInternal.call(this);
      }, e.prototype.forEachFeatureAtPixel = function (t, e, i) {
        if (this.frameState_) {
          var r = this.getCoordinateFromPixel(t),
              n = void 0 !== (i = void 0 !== i ? i : {}).hitTolerance ? i.hitTolerance * this.frameState_.pixelRatio : 0,
              o = void 0 !== i.layerFilter ? i.layerFilter : R;
          return this.renderer_.forEachFeatureAtCoordinate(r, this.frameState_, n, e, null, o, null);
        }
      }, e.prototype.getFeaturesAtPixel = function (t, e) {
        var i = null;
        return this.forEachFeatureAtPixel(t, function (t) {
          i || (i = []), i.push(t);
        }, e), i;
      }, e.prototype.forEachLayerAtPixel = function (t, e, i) {
        if (this.frameState_) {
          var r = i || {},
              n = void 0 !== r.hitTolerance ? i.hitTolerance * this.frameState_.pixelRatio : 0,
              o = r.layerFilter || R;
          return this.renderer_.forEachLayerAtPixel(t, this.frameState_, n, e, null, o, null);
        }
      }, e.prototype.hasFeatureAtPixel = function (t, e) {
        if (!this.frameState_) return !1;
        var i = this.getCoordinateFromPixel(t),
            r = void 0 !== (e = void 0 !== e ? e : {}).layerFilter ? e.layerFilter : R,
            n = void 0 !== e.hitTolerance ? e.hitTolerance * this.frameState_.pixelRatio : 0;
        return this.renderer_.hasFeatureAtCoordinate(i, this.frameState_, n, r, null);
      }, e.prototype.getEventCoordinate = function (t) {
        return this.getCoordinateFromPixel(this.getEventPixel(t));
      }, e.prototype.getEventPixel = function (t) {
        var e = this.viewport_.getBoundingClientRect(),
            i = "changedTouches" in t ? t.changedTouches[0] : t;
        return [i.clientX - e.left, i.clientY - e.top];
      }, e.prototype.getTarget = function () {
        return this.get(Ln.TARGET);
      }, e.prototype.getTargetElement = function () {
        var t = this.getTarget();
        return void 0 !== t ? "string" == typeof t ? document.getElementById(t) : t : null;
      }, e.prototype.getCoordinateFromPixel = function (t) {
        var e = this.frameState_;
        return e ? De(e.pixelToCoordinateTransform, t.slice()) : null;
      }, e.prototype.getControls = function () {
        return this.controls;
      }, e.prototype.getOverlays = function () {
        return this.overlays_;
      }, e.prototype.getOverlayById = function (t) {
        var e = this.overlayIdIndex_[t.toString()];
        return void 0 !== e ? e : null;
      }, e.prototype.getInteractions = function () {
        return this.interactions;
      }, e.prototype.getLayerGroup = function () {
        return this.get(Ln.LAYERGROUP);
      }, e.prototype.getLayers = function () {
        return this.getLayerGroup().getLayers();
      }, e.prototype.getPixelFromCoordinate = function (t) {
        var e = this.frameState_;
        return e ? De(e.coordinateToPixelTransform, t.slice(0, 2)) : null;
      }, e.prototype.getRenderer = function () {
        return this.renderer_;
      }, e.prototype.getSize = function () {
        return this.get(Ln.SIZE);
      }, e.prototype.getView = function () {
        return this.get(Ln.VIEW);
      }, e.prototype.getViewport = function () {
        return this.viewport_;
      }, e.prototype.getOverlayContainer = function () {
        return this.overlayContainer_;
      }, e.prototype.getOverlayContainerStopEvent = function () {
        return this.overlayContainerStopEvent_;
      }, e.prototype.getTilePriority = function (t, e, i, r) {
        var n = this.frameState_;
        if (!(n && e in n.wantedTiles)) return 1 / 0;
        if (!n.wantedTiles[e][t.getKey()]) return 1 / 0;
        var o = i[0] - n.focus[0],
            s = i[1] - n.focus[1];
        return 65536 * Math.log(r) + Math.sqrt(o * o + s * s) / r;
      }, e.prototype.handleBrowserEvent = function (t, e) {
        var i = e || t.type,
            r = new Fr(i, this, t);
        this.handleMapBrowserEvent(r);
      }, e.prototype.handleMapBrowserEvent = function (t) {
        if (this.frameState_) {
          this.focus_ = t.coordinate, t.frameState = this.frameState_;
          var e = this.getInteractions().getArray();
          if (!1 !== this.dispatchEvent(t)) for (var i = e.length - 1; i >= 0; i--) {
            var r = e[i];
            if (r.getActive()) if (!r.handleEvent(t)) break;
          }
        }
      }, e.prototype.handlePostRender = function () {
        var t = this.frameState_,
            e = this.tileQueue_;

        if (!e.isEmpty()) {
          var i = this.maxTilesLoading_,
              r = i;

          if (t) {
            var n = t.viewHints;
            n[kn] && (i = this.loadTilesWhileAnimating_ ? 8 : 0, r = 2), n[jn] && (i = this.loadTilesWhileInteracting_ ? 8 : 0, r = 2);
          }

          e.getTilesLoading() < i && (e.reprioritize(), e.loadMoreTiles(i, r));
        }

        !t || !this.hasListener(ur.RENDERCOMPLETE) || t.animate || this.tileQueue_.getTilesLoading() || function t(e) {
          for (var i = 0, r = e.length; i < r; ++i) {
            var n = e[i];
            if ("function" == typeof n.getLayers) return t(n.getLayers().getArray());
            var o = n.getSource();
            if (o && o.loading) return !0;
          }

          return !1;
        }(this.getLayers().getArray()) || this.renderer_.dispatchRenderEvent(ur.RENDERCOMPLETE, t);

        for (var o = this.postRenderFunctions_, s = 0, a = o.length; s < a; ++s) {
          o[s](this, t);
        }

        o.length = 0;
      }, e.prototype.handleSizeChanged_ = function () {
        this.render();
      }, e.prototype.handleTargetChanged_ = function () {
        var t;

        if (this.getTarget() && (t = this.getTargetElement()), this.keyHandlerKeys_) {
          for (var e = 0, i = this.keyHandlerKeys_.length; e < i; ++e) {
            E(this.keyHandlerKeys_[e]);
          }

          this.keyHandlerKeys_ = null;
        }

        if (t) {
          t.appendChild(this.viewport_);
          var r = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : t;
          this.keyHandlerKeys_ = [v(r, M.KEYDOWN, this.handleBrowserEvent, this), v(r, M.KEYPRESS, this.handleBrowserEvent, this)], this.handleResize_ || (this.handleResize_ = this.updateSize.bind(this), addEventListener(M.RESIZE, this.handleResize_, !1));
        } else this.renderer_.removeLayerRenderers(), $n(this.viewport_), void 0 !== this.handleResize_ && (removeEventListener(M.RESIZE, this.handleResize_, !1), this.handleResize_ = void 0);

        this.updateSize();
      }, e.prototype.handleTileChange_ = function () {
        this.render();
      }, e.prototype.handleViewPropertyChanged_ = function () {
        this.render();
      }, e.prototype.handleViewChanged_ = function () {
        this.viewPropertyListenerKey_ && (E(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (E(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
        var t = this.getView();
        t && (this.viewport_.setAttribute("data-view", o(t)), this.viewPropertyListenerKey_ = v(t, l, this.handleViewPropertyChanged_, this), this.viewChangeListenerKey_ = v(t, M.CHANGE, this.handleViewPropertyChanged_, this)), this.render();
      }, e.prototype.handleLayerGroupChanged_ = function () {
        this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(E), this.layerGroupPropertyListenerKeys_ = null);
        var t = this.getLayerGroup();
        t && (this.layerGroupPropertyListenerKeys_ = [v(t, l, this.render, this), v(t, M.CHANGE, this.render, this)]), this.render();
      }, e.prototype.isRendered = function () {
        return !!this.frameState_;
      }, e.prototype.renderSync = function () {
        this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
      }, e.prototype.render = function () {
        void 0 === this.animationDelayKey_ && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
      }, e.prototype.removeControl = function (t) {
        return this.getControls().remove(t);
      }, e.prototype.removeInteraction = function (t) {
        return this.getInteractions().remove(t);
      }, e.prototype.removeLayer = function (t) {
        return this.getLayerGroup().getLayers().remove(t);
      }, e.prototype.removeOverlay = function (t) {
        return this.getOverlays().remove(t);
      }, e.prototype.renderFrame_ = function (t) {
        var e,
            i = this.getSize(),
            r = this.getView(),
            n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
            s = this.frameState_,
            a = null;

        if (void 0 !== i && function (t) {
          return t[0] > 0 && t[1] > 0;
        }(i) && r && r.isDef()) {
          for (var h = r.getHints(this.frameState_ ? this.frameState_.viewHints : void 0), l = this.getLayerGroup().getLayerStatesArray(), u = {}, p = 0, c = l.length; p < c; ++p) {
            u[o(l[p].layer)] = l[p];
          }

          e = r.getState(this.pixelRatio_), a = {
            animate: !1,
            coordinateToPixelTransform: this.coordinateToPixelTransform_,
            extent: n,
            focus: this.focus_ ? this.focus_ : e.center,
            index: this.frameIndex_++,
            layerStates: u,
            layerStatesArray: l,
            pixelRatio: this.pixelRatio_,
            pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
            postRenderFunctions: [],
            size: i,
            skippedFeatureUids: this.skippedFeatureUids_,
            tileQueue: this.tileQueue_,
            time: t,
            usedTiles: {},
            viewState: e,
            viewHints: h,
            wantedTiles: {}
          };
        }

        if (a && (a.extent = Ct(e.center, e.resolution, e.rotation, a.size, n)), this.frameState_ = a, this.renderer_.renderFrame(a), a) {
          if (a.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, a.postRenderFunctions), s) (!this.previousExtent_ || !bt(this.previousExtent_) && !dt(a.extent, this.previousExtent_)) && (this.dispatchEvent(new Mr(wn, this, s)), this.previousExtent_ = ut(this.previousExtent_));
          this.previousExtent_ && !a.viewHints[kn] && !a.viewHints[jn] && !dt(a.extent, this.previousExtent_) && (this.dispatchEvent(new Mr(In, this, a)), it(a.extent, this.previousExtent_));
        }

        this.dispatchEvent(new Mr(Rn, this, a)), setTimeout(this.handlePostRender.bind(this), 0);
      }, e.prototype.setLayerGroup = function (t) {
        this.set(Ln.LAYERGROUP, t);
      }, e.prototype.setSize = function (t) {
        this.set(Ln.SIZE, t);
      }, e.prototype.setTarget = function (t) {
        this.set(Ln.TARGET, t);
      }, e.prototype.setView = function (t) {
        this.set(Ln.VIEW, t);
      }, e.prototype.skipFeature = function (t) {
        this.skippedFeatureUids_[o(t)] = !0, this.render();
      }, e.prototype.updateSize = function () {
        var t = this.getTargetElement();

        if (t) {
          var e = getComputedStyle(t);
          this.setSize([t.offsetWidth - parseFloat(e.borderLeftWidth) - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight) - parseFloat(e.borderRightWidth), t.offsetHeight - parseFloat(e.borderTopWidth) - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom) - parseFloat(e.borderBottomWidth)]);
        } else this.setSize(void 0);
      }, e.prototype.unskipFeature = function (t) {
        delete this.skippedFeatureUids_[o(t)], this.render();
      }, e;
    }(D);

    var uo = function (t) {
      function e(e) {
        t.call(this), this.element = e.element ? e.element : null, this.target_ = null, this.map_ = null, this.listenerKeys = [], this.render = e.render ? e.render : I, e.target && this.setTarget(e.target);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        $n(this.element), t.prototype.disposeInternal.call(this);
      }, e.prototype.getMap = function () {
        return this.map_;
      }, e.prototype.setMap = function (t) {
        this.map_ && $n(this.element);

        for (var e = 0, i = this.listenerKeys.length; e < i; ++e) {
          E(this.listenerKeys[e]);
        }

        (this.listenerKeys.length = 0, this.map_ = t, this.map_) && ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== I && this.listenerKeys.push(v(t, Rn, this.render, this)), t.render());
      }, e.prototype.setTarget = function (t) {
        this.target_ = "string" == typeof t ? document.getElementById(t) : t;
      }, e;
    }(D),
        po = "ol-hidden",
        co = "ol-selectable",
        fo = "ol-unselectable",
        _o = "ol-unsupported",
        go = "ol-control",
        yo = "ol-collapsed",
        vo = function () {
      var t,
          e = {};
      return function (i) {
        if (t || (t = document.createElement("div").style), !(i in e)) {
          t.font = i;
          var r = t.fontFamily;
          if (t.font = "", !r) return null;
          e[i] = r.split(/,\s?/);
        }

        return e[i];
      };
    }();

    function mo(t, e) {
      return t.visible && e >= t.minResolution && e < t.maxResolution;
    }

    var xo = function (t) {
      function e(e) {
        var i = u({}, e);
        delete i.source, t.call(this, i), this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, e.map && this.setMap(e.map), v(this, G(eo.SOURCE), this.handleSourcePropertyChange_, this);
        var r = e.source ? e.source : null;
        this.setSource(r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getLayersArray = function (t) {
        var e = t || [];
        return e.push(this), e;
      }, e.prototype.getLayerStatesArray = function (t) {
        var e = t || [];
        return e.push(this.getLayerState()), e;
      }, e.prototype.getSource = function () {
        return this.get(eo.SOURCE) || null;
      }, e.prototype.getSourceState = function () {
        var t = this.getSource();
        return t ? t.getState() : ro.UNDEFINED;
      }, e.prototype.handleSourceChange_ = function () {
        this.changed();
      }, e.prototype.handleSourcePropertyChange_ = function () {
        this.sourceChangeKey_ && (E(this.sourceChangeKey_), this.sourceChangeKey_ = null);
        var t = this.getSource();
        t && (this.sourceChangeKey_ = v(t, M.CHANGE, this.handleSourceChange_, this)), this.changed();
      }, e.prototype.setMap = function (t) {
        this.mapPrecomposeKey_ && (E(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (E(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = v(t, ur.PRECOMPOSE, function (t) {
          var e = t,
              i = this.getLayerState();
          i.managed = !1, void 0 === this.getZIndex() && (i.zIndex = 1 / 0), e.frameState.layerStatesArray.push(i), e.frameState.layerStates[o(this)] = i;
        }, this), this.mapRenderKey_ = v(this, M.CHANGE, t.render, t), this.changed());
      }, e.prototype.setSource = function (t) {
        this.set(eo.SOURCE, t);
      }, e;
    }(io);

    function Eo(t) {
      this.updateElement_(t.frameState);
    }

    var So = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          render: i.render || Eo,
          target: i.target
        }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = void 0 === i.collapsed || i.collapsed, this.overrideCollapsible_ = void 0 !== i.collapsible, this.collapsible_ = void 0 === i.collapsible || i.collapsible, this.collapsible_ || (this.collapsed_ = !1);
        var r = void 0 !== i.className ? i.className : "ol-attribution",
            n = void 0 !== i.tipLabel ? i.tipLabel : "Attributions",
            o = void 0 !== i.collapseLabel ? i.collapseLabel : "»";
        "string" == typeof o ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = o) : this.collapseLabel_ = o;
        var s = void 0 !== i.label ? i.label : "i";
        "string" == typeof s ? (this.label_ = document.createElement("span"), this.label_.textContent = s) : this.label_ = s;
        var a = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_,
            h = document.createElement("button");
        h.setAttribute("type", "button"), h.title = n, h.appendChild(a), v(h, M.CLICK, this.handleClick_, this);
        var l = r + " " + fo + " " + go + (this.collapsed_ && this.collapsible_ ? " " + yo : "") + (this.collapsible_ ? "" : " ol-uncollapsible"),
            u = this.element;
        u.className = l, u.appendChild(this.ulElement_), u.appendChild(h), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.collectSourceAttributions_ = function (t) {
        for (var e = {}, i = [], r = t.layerStatesArray, n = t.viewState.resolution, o = 0, s = r.length; o < s; ++o) {
          var a = r[o];

          if (mo(a, n)) {
            var h = a.layer.getSource();

            if (h) {
              var l = h.getAttributions();

              if (l) {
                var u = l(t);
                if (u) if (this.overrideCollapsible_ || !1 !== h.getAttributionsCollapsible() || this.setCollapsible(!1), Array.isArray(u)) for (var p = 0, c = u.length; p < c; ++p) {
                  u[p] in e || (i.push(u[p]), e[u[p]] = !0);
                } else u in e || (i.push(u), e[u] = !0);
              }
            }
          }
        }

        return i;
      }, e.prototype.updateElement_ = function (t) {
        if (t) {
          var e = this.collectSourceAttributions_(t),
              i = e.length > 0;

          if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !Z(e, this.renderedAttributions_)) {
            to(this.ulElement_);

            for (var r = 0, n = e.length; r < n; ++r) {
              var o = document.createElement("li");
              o.innerHTML = e[r], this.ulElement_.appendChild(o);
            }

            this.renderedAttributions_ = e;
          }
        } else this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
      }, e.prototype.handleClick_ = function (t) {
        t.preventDefault(), this.handleToggle_();
      }, e.prototype.handleToggle_ = function () {
        this.element.classList.toggle(yo), this.collapsed_ ? Qn(this.collapseLabel_, this.label_) : Qn(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_;
      }, e.prototype.getCollapsible = function () {
        return this.collapsible_;
      }, e.prototype.setCollapsible = function (t) {
        this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), !t && this.collapsed_ && this.handleToggle_());
      }, e.prototype.setCollapsed = function (t) {
        this.collapsible_ && this.collapsed_ !== t && this.handleToggle_();
      }, e.prototype.getCollapsed = function () {
        return this.collapsed_;
      }, e;
    }(uo);

    function To(t) {
      var e = t.frameState;

      if (e) {
        var i = e.viewState.rotation;

        if (i != this.rotation_) {
          var r = "rotate(" + i + "rad)";

          if (this.autoHide_) {
            var n = this.element.classList.contains(po);
            n || 0 !== i ? n && 0 !== i && this.element.classList.remove(po) : this.element.classList.add(po);
          }

          this.label_.style.msTransform = r, this.label_.style.webkitTransform = r, this.label_.style.transform = r;
        }

        this.rotation_ = i;
      }
    }

    var Co = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          render: i.render || To,
          target: i.target
        });
        var r = void 0 !== i.className ? i.className : "ol-rotate",
            n = void 0 !== i.label ? i.label : "⇧";
        this.label_ = null, "string" == typeof n ? (this.label_ = document.createElement("span"), this.label_.className = "ol-compass", this.label_.textContent = n) : (this.label_ = n, this.label_.classList.add("ol-compass"));
        var o = i.tipLabel ? i.tipLabel : "Reset rotation",
            s = document.createElement("button");
        s.className = r + "-reset", s.setAttribute("type", "button"), s.title = o, s.appendChild(this.label_), v(s, M.CLICK, this.handleClick_, this);
        var a = r + " " + fo + " " + go,
            h = this.element;
        h.className = a, h.appendChild(s), this.callResetNorth_ = i.resetNorth ? i.resetNorth : void 0, this.duration_ = void 0 !== i.duration ? i.duration : 250, this.autoHide_ = void 0 === i.autoHide || i.autoHide, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(po);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleClick_ = function (t) {
        t.preventDefault(), void 0 !== this.callResetNorth_ ? this.callResetNorth_() : this.resetNorth_();
      }, e.prototype.resetNorth_ = function () {
        var t = this.getMap().getView();
        t && void 0 !== t.getRotation() && (this.duration_ > 0 ? t.animate({
          rotation: 0,
          duration: this.duration_,
          easing: Xn
        }) : t.setRotation(0));
      }, e;
    }(uo),
        Ro = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          target: i.target
        });
        var r = void 0 !== i.className ? i.className : "ol-zoom",
            n = void 0 !== i.delta ? i.delta : 1,
            o = void 0 !== i.zoomInLabel ? i.zoomInLabel : "+",
            s = void 0 !== i.zoomOutLabel ? i.zoomOutLabel : "−",
            a = void 0 !== i.zoomInTipLabel ? i.zoomInTipLabel : "Zoom in",
            h = void 0 !== i.zoomOutTipLabel ? i.zoomOutTipLabel : "Zoom out",
            l = document.createElement("button");
        l.className = r + "-in", l.setAttribute("type", "button"), l.title = a, l.appendChild("string" == typeof o ? document.createTextNode(o) : o), v(l, M.CLICK, this.handleClick_.bind(this, n));
        var u = document.createElement("button");
        u.className = r + "-out", u.setAttribute("type", "button"), u.title = h, u.appendChild("string" == typeof s ? document.createTextNode(s) : s), v(u, M.CLICK, this.handleClick_.bind(this, -n));
        var p = r + " " + fo + " " + go,
            c = this.element;
        c.className = p, c.appendChild(l), c.appendChild(u), this.duration_ = void 0 !== i.duration ? i.duration : 250;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleClick_ = function (t, e) {
        e.preventDefault(), this.zoomByDelta_(t);
      }, e.prototype.zoomByDelta_ = function (t) {
        var e = this.getMap().getView();

        if (e) {
          var i = e.getResolution();

          if (i) {
            var r = e.constrainResolution(i, t);
            this.duration_ > 0 ? (e.getAnimating() && e.cancelAnimations(), e.animate({
              resolution: r,
              duration: this.duration_,
              easing: Xn
            })) : e.setResolution(r);
          }
        }
      }, e;
    }(uo);

    function wo(t) {
      var e = t || {},
          i = new U();
      return (void 0 === e.zoom || e.zoom) && i.push(new Ro(e.zoomOptions)), (void 0 === e.rotate || e.rotate) && i.push(new Co(e.rotateOptions)), (void 0 === e.attribution || e.attribution) && i.push(new So(e.attributionOptions)), i;
    }

    var Io = {
      ACTIVE: "active"
    };

    function Lo(t, e, i, r) {
      Oo(t, e = t.constrainRotation(e, 0), i, r);
    }

    function Oo(t, e, i, r) {
      if (void 0 !== e) {
        var n = t.getRotation(),
            o = t.getCenter();
        void 0 !== n && o && r > 0 ? t.animate({
          rotation: e,
          anchor: i,
          duration: r,
          easing: Xn
        }) : t.rotate(e, i);
      }
    }

    function Po(t, e, i, r, n) {
      Mo(t, e = t.constrainResolution(e, 0, n), i, r);
    }

    function bo(t, e, i, r) {
      var n = t.getResolution(),
          o = t.constrainResolution(n, e, 0);

      if (void 0 !== o) {
        var s = t.getResolutions();
        o = kt(o, t.getMinResolution() || s[s.length - 1], t.getMaxResolution() || s[0]);
      }

      if (i && void 0 !== o && o !== n) {
        var a = t.getCenter(),
            h = t.calculateCenterZoom(o, i);
        h = t.constrainCenter(h), i = [(o * a[0] - n * h[0]) / (o - n), (o * a[1] - n * h[1]) / (o - n)];
      }

      Mo(t, o, i, r);
    }

    function Mo(t, e, i, r) {
      if (e) {
        var n = t.getResolution(),
            o = t.getCenter();
        if (void 0 !== n && o && e !== n && r) t.animate({
          resolution: e,
          anchor: i,
          duration: r,
          easing: Xn
        });else {
          if (i) {
            var s = t.calculateCenterZoom(e, i);
            t.setCenter(s);
          }

          t.setResolution(e);
        }
      }
    }

    var Fo = function (t) {
      function e(e) {
        t.call(this), e.handleEvent && (this.handleEvent = e.handleEvent), this.map_ = null, this.setActive(!0);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getActive = function () {
        return this.get(Io.ACTIVE);
      }, e.prototype.getMap = function () {
        return this.map_;
      }, e.prototype.handleEvent = function (t) {
        return !0;
      }, e.prototype.setActive = function (t) {
        this.set(Io.ACTIVE, t);
      }, e.prototype.setMap = function (t) {
        this.map_ = t;
      }, e;
    }(D);

    function Ao(t) {
      var e = !1;

      if (t.type == Ar.DBLCLICK) {
        var i = t.originalEvent,
            r = t.map,
            n = t.coordinate,
            o = i.shiftKey ? -this.delta_ : this.delta_;
        bo(r.getView(), o, n, this.duration_), t.preventDefault(), e = !0;
      }

      return !e;
    }

    var No = function (t) {
      function e(e) {
        t.call(this, {
          handleEvent: Ao
        });
        var i = e || {};
        this.delta_ = i.delta ? i.delta : 1, this.duration_ = void 0 !== i.duration ? i.duration : 250;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Fo),
        Go = function Go(t) {
      var e = t.originalEvent;
      return e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
    },
        Do = function Do(t) {
      var e = t.originalEvent;
      return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
    },
        ko = function ko(t) {
      return t.target.getTargetElement() === document.activeElement;
    },
        jo = R,
        Uo = function Uo(t) {
      var e = t.originalEvent;
      return 0 == e.button && !(Ni && Gi && e.ctrlKey);
    },
        Yo = w,
        Bo = function Bo(t) {
      return "pointermove" == t.type;
    },
        Vo = function Vo(t) {
      return t.type == Ar.SINGLECLICK;
    },
        Xo = function Xo(t) {
      var e = t.originalEvent;
      return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
    },
        zo = function zo(t) {
      var e = t.originalEvent;
      return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
    },
        Wo = function Wo(t) {
      var e = t.originalEvent.target.tagName;
      return "INPUT" !== e && "SELECT" !== e && "TEXTAREA" !== e;
    },
        Ko = function Ko(t) {
      var e = t.pointerEvent;
      return Y(void 0 !== e, 56), "mouse" == e.pointerType;
    },
        Ho = function Ho(t) {
      var e = t.pointerEvent;
      return Y(void 0 !== e, 56), e.isPrimary && 0 === e.button;
    };

    function Zo(t) {
      for (var e = t.length, i = 0, r = 0, n = 0; n < e; n++) {
        i += t[n].clientX, r += t[n].clientY;
      }

      return [i / e, r / e];
    }

    var qo = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), i.handleDownEvent && (this.handleDownEvent = i.handleDownEvent), i.handleDragEvent && (this.handleDragEvent = i.handleDragEvent), i.handleMoveEvent && (this.handleMoveEvent = i.handleMoveEvent), i.handleUpEvent && (this.handleUpEvent = i.handleUpEvent), i.stopDown && (this.stopDown = i.stopDown), this.handlingDownUpSequence = !1, this.trackedPointers_ = {}, this.targetPointers = [];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDownEvent = function (t) {
        return !1;
      }, e.prototype.handleDragEvent = function (t) {}, e.prototype.handleEvent = function (t) {
        if (!t.pointerEvent) return !0;
        var e = !1;

        if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) {
          if (t.type == Ar.POINTERDRAG) this.handleDragEvent(t);else if (t.type == Ar.POINTERUP) {
            var i = this.handleUpEvent(t);
            this.handlingDownUpSequence = i && this.targetPointers.length > 0;
          }
        } else if (t.type == Ar.POINTERDOWN) {
          var r = this.handleDownEvent(t);
          r && t.preventDefault(), this.handlingDownUpSequence = r, e = this.stopDown(r);
        } else t.type == Ar.POINTERMOVE && this.handleMoveEvent(t);

        return !e;
      }, e.prototype.handleMoveEvent = function (t) {}, e.prototype.handleUpEvent = function (t) {
        return !1;
      }, e.prototype.stopDown = function (t) {
        return t;
      }, e.prototype.updateTrackedPointers_ = function (t) {
        if (function (t) {
          var e = t.type;
          return e === Ar.POINTERDOWN || e === Ar.POINTERDRAG || e === Ar.POINTERUP;
        }(t)) {
          var e = t.pointerEvent,
              i = e.pointerId.toString();
          t.type == Ar.POINTERUP ? delete this.trackedPointers_[i] : t.type == Ar.POINTERDOWN ? this.trackedPointers_[i] = e : i in this.trackedPointers_ && (this.trackedPointers_[i] = e), this.targetPointers = c(this.trackedPointers_);
        }
      }, e;
    }(Fo),
        Jo = function (t) {
      function e(e) {
        t.call(this, {
          stopDown: w
        });
        var i = e || {};
        this.kinetic_ = i.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1, this.condition_ = i.condition ? i.condition : Xo, this.noKinetic_ = !1;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDragEvent = function (t) {
        this.panning_ || (this.panning_ = !0, this.getMap().getView().setHint(jn, 1));
        var e = this.targetPointers,
            i = Zo(e);

        if (e.length == this.lastPointersCount_) {
          if (this.kinetic_ && this.kinetic_.update(i[0], i[1]), this.lastCentroid) {
            var r = this.lastCentroid[0] - i[0],
                n = i[1] - this.lastCentroid[1],
                o = t.map.getView(),
                s = [r, n];
            tr(s, o.getResolution()), $i(s, o.getRotation()), Hi(s, o.getCenter()), s = o.constrainCenter(s), o.setCenter(s);
          }
        } else this.kinetic_ && this.kinetic_.begin();

        this.lastCentroid = i, this.lastPointersCount_ = e.length;
      }, e.prototype.handleUpEvent = function (t) {
        var e = t.map,
            i = e.getView();

        if (0 === this.targetPointers.length) {
          if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
            var r = this.kinetic_.getDistance(),
                n = this.kinetic_.getAngle(),
                o = i.getCenter(),
                s = e.getPixelFromCoordinate(o),
                a = e.getCoordinateFromPixel([s[0] - r * Math.cos(n), s[1] - r * Math.sin(n)]);
            i.animate({
              center: i.constrainCenter(a),
              duration: 500,
              easing: Xn
            });
          }

          return this.panning_ && (this.panning_ = !1, i.setHint(jn, -1)), !1;
        }

        return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0;
      }, e.prototype.handleDownEvent = function (t) {
        if (this.targetPointers.length > 0 && this.condition_(t)) {
          var e = t.map.getView();
          return this.lastCentroid = null, e.getAnimating() && e.setCenter(t.frameState.viewState.center), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
        }

        return !1;
      }, e;
    }(qo),
        Qo = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          stopDown: w
        }), this.condition_ = i.condition ? i.condition : Do, this.lastAngle_ = void 0, this.duration_ = void 0 !== i.duration ? i.duration : 250;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDragEvent = function (t) {
        if (Ko(t)) {
          var e = t.map,
              i = e.getView();

          if (i.getConstraints().rotation !== Gn) {
            var r = e.getSize(),
                n = t.pixel,
                o = Math.atan2(r[1] / 2 - n[1], n[0] - r[0] / 2);

            if (void 0 !== this.lastAngle_) {
              var s = o - this.lastAngle_;
              Oo(i, i.getRotation() - s);
            }

            this.lastAngle_ = o;
          }
        }
      }, e.prototype.handleUpEvent = function (t) {
        if (!Ko(t)) return !0;
        var e = t.map.getView();
        return e.setHint(jn, -1), Lo(e, e.getRotation(), void 0, this.duration_), !1;
      }, e.prototype.handleDownEvent = function (t) {
        return !!Ko(t) && !(!Uo(t) || !this.condition_(t)) && (t.map.getView().setHint(jn, 1), this.lastAngle_ = void 0, !0);
      }, e;
    }(qo),
        $o = function (t) {
      function e(e) {
        t.call(this), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.className = "ol-box " + e, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.setMap(null);
      }, e.prototype.render_ = function () {
        var t = this.startPixel_,
            e = this.endPixel_,
            i = this.element_.style;
        i.left = Math.min(t[0], e[0]) + "px", i.top = Math.min(t[1], e[1]) + "px", i.width = Math.abs(e[0] - t[0]) + "px", i.height = Math.abs(e[1] - t[1]) + "px";
      }, e.prototype.setMap = function (t) {
        if (this.map_) {
          this.map_.getOverlayContainer().removeChild(this.element_);
          var e = this.element_.style;
          e.left = e.top = e.width = e.height = "inherit";
        }

        this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
      }, e.prototype.setPixels = function (t, e) {
        this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_();
      }, e.prototype.createOrUpdateGeometry = function () {
        var t = this.startPixel_,
            e = this.endPixel_,
            i = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixel, this.map_);
        i[4] = i[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([i]) : this.geometry_ = new Ii([i]);
      }, e.prototype.getGeometry = function () {
        return this.geometry_;
      }, e;
    }(C),
        ts = "boxstart",
        es = "boxdrag",
        is = "boxend",
        rs = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.coordinate = i, this.mapBrowserEvent = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        ns = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.box_ = new $o(i.className || "ol-dragbox"), this.minArea_ = void 0 !== i.minArea ? i.minArea : 64, this.onBoxEnd_ = i.onBoxEnd ? i.onBoxEnd : I, this.startPixel_ = null, this.condition_ = i.condition ? i.condition : jo, this.boxEndCondition_ = i.boxEndCondition ? i.boxEndCondition : this.defaultBoxEndCondition;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.defaultBoxEndCondition = function (t, e, i) {
        var r = i[0] - e[0],
            n = i[1] - e[1];
        return r * r + n * n >= this.minArea_;
      }, e.prototype.getGeometry = function () {
        return this.box_.getGeometry();
      }, e.prototype.handleDragEvent = function (t) {
        Ko(t) && (this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new rs(es, t.coordinate, t)));
      }, e.prototype.handleUpEvent = function (t) {
        return !Ko(t) || (this.box_.setMap(null), this.boxEndCondition_(t, this.startPixel_, t.pixel) && (this.onBoxEnd_(t), this.dispatchEvent(new rs(is, t.coordinate, t))), !1);
      }, e.prototype.handleDownEvent = function (t) {
        return !!Ko(t) && !(!Uo(t) || !this.condition_(t)) && (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new rs(ts, t.coordinate, t)), !0);
      }, e;
    }(qo);

    function os() {
      var t = this.getMap(),
          e = t.getView(),
          i = t.getSize(),
          r = this.getGeometry().getExtent();

      if (this.out_) {
        var n = e.calculateExtent(i),
            o = function (t, e) {
          return gt(ut(e), t);
        }([t.getPixelFromCoordinate(Et(r)), t.getPixelFromCoordinate(Lt(r))]);

        Mt(n, 1 / e.getResolutionForExtent(o, i)), r = n;
      }

      var s = e.constrainResolution(e.getResolutionForExtent(r, i)),
          a = Tt(r);
      a = e.constrainCenter(a), e.animate({
        resolution: s,
        center: a,
        duration: this.duration_,
        easing: Xn
      });
    }

    var ss = function (t) {
      function e(e) {
        var i = e || {},
            r = i.condition ? i.condition : zo;
        t.call(this, {
          condition: r,
          className: i.className || "ol-dragzoom",
          onBoxEnd: os
        }), this.duration_ = void 0 !== i.duration ? i.duration : 200, this.out_ = void 0 !== i.out && i.out;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(ns),
        as = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };

    function hs(t) {
      var e = !1;

      if (t.type == M.KEYDOWN) {
        var i = t.originalEvent.keyCode;

        if (this.condition_(t) && (i == as.DOWN || i == as.LEFT || i == as.RIGHT || i == as.UP)) {
          var r = t.map.getView(),
              n = r.getResolution() * this.pixelDelta_,
              o = 0,
              s = 0;
          i == as.DOWN ? s = -n : i == as.LEFT ? o = -n : i == as.RIGHT ? o = n : s = n;
          var a = [o, s];
          $i(a, r.getRotation()), function (t, e, i) {
            var r = t.getCenter();

            if (r) {
              var n = t.constrainCenter([r[0] + e[0], r[1] + e[1]]);
              i ? t.animate({
                duration: i,
                easing: Wn,
                center: n
              }) : t.setCenter(n);
            }
          }(r, a, this.duration_), t.preventDefault(), e = !0;
        }
      }

      return !e;
    }

    var ls = function (t) {
      function e(e) {
        t.call(this, {
          handleEvent: hs
        });
        var i = e || {};
        this.defaultCondition_ = function (t) {
          return Xo(t) && Wo(t);
        }, this.condition_ = void 0 !== i.condition ? i.condition : this.defaultCondition_, this.duration_ = void 0 !== i.duration ? i.duration : 100, this.pixelDelta_ = void 0 !== i.pixelDelta ? i.pixelDelta : 128;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Fo);

    function us(t) {
      var e = !1;

      if (t.type == M.KEYDOWN || t.type == M.KEYPRESS) {
        var i = t.originalEvent.charCode;

        if (this.condition_(t) && (i == "+".charCodeAt(0) || i == "-".charCodeAt(0))) {
          var r = t.map,
              n = i == "+".charCodeAt(0) ? this.delta_ : -this.delta_;
          bo(r.getView(), n, void 0, this.duration_), t.preventDefault(), e = !0;
        }
      }

      return !e;
    }

    var ps = function (t) {
      function e(e) {
        t.call(this, {
          handleEvent: us
        });
        var i = e || {};
        this.condition_ = i.condition ? i.condition : Wo, this.delta_ = i.delta ? i.delta : 1, this.duration_ = void 0 !== i.duration ? i.duration : 100;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Fo),
        cs = "trackpad",
        ds = "wheel",
        fs = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.delta_ = 0, this.duration_ = void 0 !== i.duration ? i.duration : 250, this.timeout_ = void 0 !== i.timeout ? i.timeout : 80, this.useAnchor_ = void 0 === i.useAnchor || i.useAnchor, this.constrainResolution_ = i.constrainResolution || !1, this.condition_ = i.condition ? i.condition : jo, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.trackpadDeltaPerZoom_ = 300, this.trackpadZoomBuffer_ = 1.5;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.decrementInteractingHint_ = function () {
        this.trackpadTimeoutId_ = void 0, this.getMap().getView().setHint(jn, -1);
      }, e.prototype.handleEvent = function (t) {
        if (!this.condition_(t)) return !0;
        var e = t.type;
        if (e !== M.WHEEL && e !== M.MOUSEWHEEL) return !0;
        t.preventDefault();
        var i,
            r = t.map,
            n = t.originalEvent;
        if (this.useAnchor_ && (this.lastAnchor_ = t.coordinate), t.type == M.WHEEL ? (i = n.deltaY, Fi && n.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (i /= Di), n.deltaMode === WheelEvent.DOM_DELTA_LINE && (i *= 40)) : t.type == M.MOUSEWHEEL && (i = -n.wheelDeltaY, Ai && (i /= 3)), 0 === i) return !1;
        var o = Date.now();

        if (void 0 === this.startTime_ && (this.startTime_ = o), (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(i) < 4 ? cs : ds), this.mode_ === cs) {
          var s = r.getView();
          this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : s.setHint(jn, 1), this.trackpadTimeoutId_ = setTimeout(this.decrementInteractingHint_.bind(this), this.trackpadEventGap_);
          var a = s.getResolution() * Math.pow(2, i / this.trackpadDeltaPerZoom_),
              h = s.getMinResolution(),
              l = s.getMaxResolution(),
              u = 0;

          if (a < h ? (a = Math.max(a, h / this.trackpadZoomBuffer_), u = 1) : a > l && (a = Math.min(a, l * this.trackpadZoomBuffer_), u = -1), this.lastAnchor_) {
            var p = s.calculateCenterZoom(a, this.lastAnchor_);
            s.setCenter(s.constrainCenter(p));
          }

          return s.setResolution(a), 0 === u && this.constrainResolution_ && s.animate({
            resolution: s.constrainResolution(a, i > 0 ? -1 : 1),
            easing: Xn,
            anchor: this.lastAnchor_,
            duration: this.duration_
          }), u > 0 ? s.animate({
            resolution: h,
            easing: Xn,
            anchor: this.lastAnchor_,
            duration: 500
          }) : u < 0 && s.animate({
            resolution: l,
            easing: Xn,
            anchor: this.lastAnchor_,
            duration: 500
          }), this.startTime_ = o, !1;
        }

        this.delta_ += i;
        var c = Math.max(this.timeout_ - (o - this.startTime_), 0);
        return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, r), c), !1;
      }, e.prototype.handleWheelZoom_ = function (t) {
        var e = t.getView();
        e.getAnimating() && e.cancelAnimations();
        bo(e, -kt(this.delta_, -1, 1), this.lastAnchor_, this.duration_), this.mode_ = void 0, this.delta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
      }, e.prototype.setMouseAnchor = function (t) {
        this.useAnchor_ = t, t || (this.lastAnchor_ = null);
      }, e;
    }(Fo),
        _s = function (t) {
      function e(e) {
        var i = e || {},
            r = i;
        r.stopDown || (r.stopDown = w), t.call(this, r), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = void 0 !== i.threshold ? i.threshold : .3, this.duration_ = void 0 !== i.duration ? i.duration : 250;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDragEvent = function (t) {
        var e = 0,
            i = this.targetPointers[0],
            r = this.targetPointers[1],
            n = Math.atan2(r.clientY - i.clientY, r.clientX - i.clientX);

        if (void 0 !== this.lastAngle_) {
          var o = n - this.lastAngle_;
          this.rotationDelta_ += o, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = o;
        }

        this.lastAngle_ = n;
        var s = t.map,
            a = s.getView();

        if (a.getConstraints().rotation !== Gn) {
          var h = s.getViewport().getBoundingClientRect(),
              l = Zo(this.targetPointers);

          if (l[0] -= h.left, l[1] -= h.top, this.anchor_ = s.getCoordinateFromPixel(l), this.rotating_) {
            var u = a.getRotation();
            s.render(), Oo(a, u + e, this.anchor_);
          }
        }
      }, e.prototype.handleUpEvent = function (t) {
        if (this.targetPointers.length < 2) {
          var e = t.map.getView();
          if (e.setHint(jn, -1), this.rotating_) Lo(e, e.getRotation(), this.anchor_, this.duration_);
          return !1;
        }

        return !0;
      }, e.prototype.handleDownEvent = function (t) {
        if (this.targetPointers.length >= 2) {
          var e = t.map;
          return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().setHint(jn, 1), !0;
        }

        return !1;
      }, e;
    }(qo),
        gs = function (t) {
      function e(e) {
        var i = e || {},
            r = i;
        r.stopDown || (r.stopDown = w), t.call(this, r), this.constrainResolution_ = i.constrainResolution || !1, this.anchor_ = null, this.duration_ = void 0 !== i.duration ? i.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDragEvent = function (t) {
        var e = 1,
            i = this.targetPointers[0],
            r = this.targetPointers[1],
            n = i.clientX - r.clientX,
            o = i.clientY - r.clientY,
            s = Math.sqrt(n * n + o * o);
        void 0 !== this.lastDistance_ && (e = this.lastDistance_ / s), this.lastDistance_ = s;
        var a = t.map,
            h = a.getView(),
            l = h.getResolution(),
            u = h.getMaxResolution(),
            p = h.getMinResolution(),
            c = l * e;
        c > u ? (e = u / l, c = u) : c < p && (e = p / l, c = p), 1 != e && (this.lastScaleDelta_ = e);
        var d = a.getViewport().getBoundingClientRect(),
            f = Zo(this.targetPointers);
        f[0] -= d.left, f[1] -= d.top, this.anchor_ = a.getCoordinateFromPixel(f), a.render(), Mo(h, c, this.anchor_);
      }, e.prototype.handleUpEvent = function (t) {
        if (this.targetPointers.length < 2) {
          var e = t.map.getView();
          e.setHint(jn, -1);
          var i = e.getResolution();

          if (this.constrainResolution_ || i < e.getMinResolution() || i > e.getMaxResolution()) {
            var r = this.lastScaleDelta_ - 1;
            Po(e, i, this.anchor_, this.duration_, r);
          }

          return !1;
        }

        return !0;
      }, e.prototype.handleDownEvent = function (t) {
        if (this.targetPointers.length >= 2) {
          var e = t.map;
          return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().setHint(jn, 1), !0;
        }

        return !1;
      }, e;
    }(qo);

    function ys(t) {
      var e = t || {},
          i = new U(),
          r = new br(-.005, .05, 100);
      return (void 0 === e.altShiftDragRotate || e.altShiftDragRotate) && i.push(new Qo()), (void 0 === e.doubleClickZoom || e.doubleClickZoom) && i.push(new No({
        delta: e.zoomDelta,
        duration: e.zoomDuration
      })), (void 0 === e.dragPan || e.dragPan) && i.push(new Jo({
        condition: e.onFocusOnly ? ko : void 0,
        kinetic: r
      })), (void 0 === e.pinchRotate || e.pinchRotate) && i.push(new _s()), (void 0 === e.pinchZoom || e.pinchZoom) && i.push(new gs({
        constrainResolution: e.constrainResolution,
        duration: e.zoomDuration
      })), (void 0 === e.keyboard || e.keyboard) && (i.push(new ls()), i.push(new ps({
        delta: e.zoomDelta,
        duration: e.zoomDuration
      }))), (void 0 === e.mouseWheelZoom || e.mouseWheelZoom) && i.push(new fs({
        condition: e.onFocusOnly ? ko : void 0,
        constrainResolution: e.constrainResolution,
        duration: e.zoomDuration
      })), (void 0 === e.shiftDragZoom || e.shiftDragZoom) && i.push(new ss({
        duration: e.zoomDuration
      })), i;
    }

    var vs = .5,
        ms = function (t) {
      function e(e, i, r, n) {
        t.call(this), this.extent = e, this.pixelRatio_ = r, this.resolution = i, this.state = n;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.changed = function () {
        this.dispatchEvent(M.CHANGE);
      }, e.prototype.getExtent = function () {
        return this.extent;
      }, e.prototype.getImage = function () {
        return r();
      }, e.prototype.getPixelRatio = function () {
        return this.pixelRatio_;
      }, e.prototype.getResolution = function () {
        return this.resolution;
      }, e.prototype.getState = function () {
        return this.state;
      }, e.prototype.load = function () {
        r();
      }, e;
    }(b),
        xs = {
      IDLE: 0,
      LOADING: 1,
      LOADED: 2,
      ERROR: 3
    },
        Es = function (t) {
      function e(e, i, r, n, o) {
        var s = void 0 !== o ? xs.IDLE : xs.LOADED;
        t.call(this, e, i, r, s), this.loader_ = void 0 !== o ? o : null, this.canvas_ = n, this.error_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getError = function () {
        return this.error_;
      }, e.prototype.handleLoad_ = function (t) {
        t ? (this.error_ = t, this.state = xs.ERROR) : this.state = xs.LOADED, this.changed();
      }, e.prototype.load = function () {
        this.state == xs.IDLE && (this.state = xs.LOADING, this.changed(), this.loader_(this.handleLoad_.bind(this)));
      }, e.prototype.getImage = function () {
        return this.canvas_;
      }, e;
    }(ms),
        Ss = {
      IMAGE: "IMAGE",
      TILE: "TILE",
      VECTOR_TILE: "VECTOR_TILE",
      VECTOR: "VECTOR"
    },
        Ts = {
      IMAGE: "image",
      VECTOR: "vector"
    },
        Cs = function (t) {
      function e(e, i, r, n, o) {
        t.call(this, e), this.vectorContext = i, this.frameState = r, this.context = n, this.glContext = o;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        Rs = function (t) {
      function e(e) {
        t.call(this), this.highWaterMark = void 0 !== e ? e : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.canExpireCache = function () {
        return this.getCount() > this.highWaterMark;
      }, e.prototype.clear = function () {
        this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null, this.dispatchEvent(M.CLEAR);
      }, e.prototype.containsKey = function (t) {
        return this.entries_.hasOwnProperty(t);
      }, e.prototype.forEach = function (t, e) {
        for (var i = this.oldest_; i;) {
          t.call(e, i.value_, i.key_, this), i = i.newer;
        }
      }, e.prototype.get = function (t) {
        var e = this.entries_[t];
        return Y(void 0 !== e, 15), e === this.newest_ ? e.value_ : (e === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (e.newer.older = e.older, e.older.newer = e.newer), e.newer = null, e.older = this.newest_, this.newest_.newer = e, this.newest_ = e, e.value_);
      }, e.prototype.remove = function (t) {
        var e = this.entries_[t];
        return Y(void 0 !== e, 15), e === this.newest_ ? (this.newest_ = e.older, this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? (this.oldest_ = e.newer, this.oldest_ && (this.oldest_.older = null)) : (e.newer.older = e.older, e.older.newer = e.newer), delete this.entries_[t], --this.count_, e.value_;
      }, e.prototype.getCount = function () {
        return this.count_;
      }, e.prototype.getKeys = function () {
        var t,
            e = new Array(this.count_),
            i = 0;

        for (t = this.newest_; t; t = t.older) {
          e[i++] = t.key_;
        }

        return e;
      }, e.prototype.getValues = function () {
        var t,
            e = new Array(this.count_),
            i = 0;

        for (t = this.newest_; t; t = t.older) {
          e[i++] = t.value_;
        }

        return e;
      }, e.prototype.peekLast = function () {
        return this.oldest_.value_;
      }, e.prototype.peekLastKey = function () {
        return this.oldest_.key_;
      }, e.prototype.peekFirstKey = function () {
        return this.newest_.key_;
      }, e.prototype.pop = function () {
        var t = this.oldest_;
        return delete this.entries_[t.key_], t.newer && (t.newer.older = null), this.oldest_ = t.newer, this.oldest_ || (this.newest_ = null), --this.count_, t.value_;
      }, e.prototype.replace = function (t, e) {
        this.get(t), this.entries_[t].value_ = e;
      }, e.prototype.set = function (t, e) {
        Y(!(t in this.entries_), 16);
        var i = {
          key_: t,
          newer: null,
          older: this.newest_,
          value_: e
        };
        this.newest_ ? this.newest_.newer = i : this.oldest_ = i, this.newest_ = i, this.entries_[t] = i, ++this.count_;
      }, e.prototype.setSize = function (t) {
        this.highWaterMark = t;
      }, e.prototype.prune = function () {
        for (; this.canExpireCache();) {
          this.pop();
        }
      }, e;
    }(b),
        ws = [0, 0, 0, 1],
        Is = [],
        Ls = [0, 0, 0, 1],
        Os = [0, 0, 0, 0],
        Ps = new Rs(),
        bs = {},
        Ms = null,
        Fs = {},
        As = function () {
      var t,
          e,
          i = 60,
          r = bs,
          n = "32px ",
          o = ["monospace", "serif"],
          s = o.length,
          a = "wmytzilWMYTZIL@#/&?$%10";

      function h(t) {
        for (var i = Ns(), r = 100; r <= 700; r += 300) {
          for (var h = r + " ", l = !0, u = 0; u < s; ++u) {
            var p = o[u];

            if (i.font = h + n + p, e = i.measureText(a).width, t != p) {
              i.font = h + n + t + "," + p;
              var c = i.measureText(a).width;
              l = l && c != e;
            }
          }

          if (l) return !0;
        }

        return !1;
      }

      function l() {
        var e = !0;

        for (var n in r) {
          r[n] < i && (h(n) ? (r[n] = i, p(Fs), Ms = null, Ps.clear()) : (++r[n], e = !1));
        }

        e && (clearInterval(t), t = void 0);
      }

      return function (e) {
        var n = vo(e);
        if (n) for (var o = 0, s = n.length; o < s; ++o) {
          var a = n[o];
          a in r || (r[a] = i, h(a) || (r[a] = 0, void 0 === t && (t = setInterval(l, 32))));
        }
      };
    }();

    function Ns() {
      return Ms || (Ms = Jn(1, 1)), Ms;
    }

    var Gs = function () {
      var t,
          e = Fs;
      return function (i) {
        var r = e[i];
        return void 0 == r && (t || ((t = document.createElement("span")).textContent = "M", t.style.margin = t.style.padding = "0 !important", t.style.position = "absolute !important", t.style.left = "-99999px !important"), t.style.font = i, document.body.appendChild(t), r = e[i] = t.offsetHeight, document.body.removeChild(t)), r;
      };
    }();

    function Ds(t, e) {
      var i = Ns();
      return t != i.font && (i.font = t), i.measureText(e).width;
    }

    function ks(t, e, i, r) {
      0 !== e && (t.translate(i, r), t.rotate(e), t.translate(-i, -r));
    }

    var js = [1, 0, 0, 1, 0, 0];

    function Us(t, e, i, r, n, o, s, a, h, l, u) {
      var p;
      1 != i && (p = t.globalAlpha, t.globalAlpha = p * i), e && t.setTransform.apply(t, e), t.drawImage(r, n, o, s, a, h, l, s * u, a * u), p && (t.globalAlpha = p), e && t.setTransform.apply(t, js);
    }

    function Ys(t) {
      return Array.isArray(t) ? yr(t) : t;
    }

    var Bs = function Bs() {};

    Bs.prototype.drawCustom = function (t, e, i) {}, Bs.prototype.drawGeometry = function (t) {}, Bs.prototype.setStyle = function (t) {}, Bs.prototype.drawCircle = function (t, e) {}, Bs.prototype.drawFeature = function (t, e) {}, Bs.prototype.drawGeometryCollection = function (t, e) {}, Bs.prototype.drawLineString = function (t, e) {}, Bs.prototype.drawMultiLineString = function (t, e) {}, Bs.prototype.drawMultiPoint = function (t, e) {}, Bs.prototype.drawMultiPolygon = function (t, e) {}, Bs.prototype.drawPoint = function (t, e) {}, Bs.prototype.drawPolygon = function (t, e) {}, Bs.prototype.drawText = function (t, e) {}, Bs.prototype.setFillStrokeStyle = function (t, e) {}, Bs.prototype.setImageStyle = function (t, e) {}, Bs.prototype.setTextStyle = function (t, e) {};

    var Vs = Bs,
        Xs = function (t) {
      function e(e, i, r, n, o) {
        t.call(this), this.context_ = e, this.pixelRatio_ = i, this.extent_ = r, this.transform_ = n, this.viewRotation_ = o, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = 0, this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = 0, this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = [1, 0, 0, 1, 0, 0];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawImages_ = function (t, e, i, r) {
        if (this.image_) {
          var n = Gt(t, e, i, 2, this.transform_, this.pixelCoordinates_),
              o = this.context_,
              s = this.tmpLocalTransform_,
              a = o.globalAlpha;
          1 != this.imageOpacity_ && (o.globalAlpha = a * this.imageOpacity_);
          var h = this.imageRotation_;
          this.imageRotateWithView_ && (h += this.viewRotation_);

          for (var l = 0, u = n.length; l < u; l += 2) {
            var p = n[l] - this.imageAnchorX_,
                c = n[l + 1] - this.imageAnchorY_;

            if (0 !== h || 1 != this.imageScale_) {
              var d = p + this.imageAnchorX_,
                  f = c + this.imageAnchorY_;
              Ye(s, d, f, this.imageScale_, this.imageScale_, h, -d, -f), o.setTransform.apply(o, s);
            }

            o.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, p, c, this.imageWidth_, this.imageHeight_);
          }

          0 === h && 1 == this.imageScale_ || o.setTransform(1, 0, 0, 1, 0, 0), 1 != this.imageOpacity_ && (o.globalAlpha = a);
        }
      }, e.prototype.drawText_ = function (t, e, i, r) {
        if (this.textState_ && "" !== this.text_) {
          this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
          var n = Gt(t, e, i, r, this.transform_, this.pixelCoordinates_),
              o = this.context_,
              s = this.textRotation_;

          for (this.textRotateWithView_ && (s += this.viewRotation_); e < i; e += r) {
            var a = n[e] + this.textOffsetX_,
                h = n[e + 1] + this.textOffsetY_;

            if (0 !== s || 1 != this.textScale_) {
              var l = Ye(this.tmpLocalTransform_, a, h, this.textScale_, this.textScale_, s, -a, -h);
              o.setTransform.apply(o, l);
            }

            this.textStrokeState_ && o.strokeText(this.text_, a, h), this.textFillState_ && o.fillText(this.text_, a, h);
          }

          0 === s && 1 == this.textScale_ || o.setTransform(1, 0, 0, 1, 0, 0);
        }
      }, e.prototype.moveToLineTo_ = function (t, e, i, r, n) {
        var o = this.context_,
            s = Gt(t, e, i, r, this.transform_, this.pixelCoordinates_);
        o.moveTo(s[0], s[1]);
        var a = s.length;
        n && (a -= 2);

        for (var h = 2; h < a; h += 2) {
          o.lineTo(s[h], s[h + 1]);
        }

        return n && o.closePath(), i;
      }, e.prototype.drawRings_ = function (t, e, i, r) {
        for (var n = 0, o = i.length; n < o; ++n) {
          e = this.moveToLineTo_(t, e, i[n], r, !0);
        }

        return e;
      }, e.prototype.drawCircle = function (t) {
        if (Pt(this.extent_, t.getExtent())) {
          if (this.fillState_ || this.strokeState_) {
            this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);

            var e = function (t, e, i) {
              var r = t.getFlatCoordinates();

              if (r) {
                var n = t.getStride();
                return Gt(r, 0, r.length, n, e, i);
              }

              return null;
            }(t, this.transform_, this.pixelCoordinates_),
                i = e[2] - e[0],
                r = e[3] - e[1],
                n = Math.sqrt(i * i + r * r),
                o = this.context_;

            o.beginPath(), o.arc(e[0], e[1], n, 0, 2 * Math.PI), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
          }

          "" !== this.text_ && this.drawText_(t.getCenter(), 0, 2, 2);
        }
      }, e.prototype.setStyle = function (t) {
        this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
      }, e.prototype.drawGeometry = function (t) {
        switch (t.getType()) {
          case Nt.POINT:
            this.drawPoint(t);
            break;

          case Nt.LINE_STRING:
            this.drawLineString(t);
            break;

          case Nt.POLYGON:
            this.drawPolygon(t);
            break;

          case Nt.MULTI_POINT:
            this.drawMultiPoint(t);
            break;

          case Nt.MULTI_LINE_STRING:
            this.drawMultiLineString(t);
            break;

          case Nt.MULTI_POLYGON:
            this.drawMultiPolygon(t);
            break;

          case Nt.GEOMETRY_COLLECTION:
            this.drawGeometryCollection(t);
            break;

          case Nt.CIRCLE:
            this.drawCircle(t);
        }
      }, e.prototype.drawFeature = function (t, e) {
        var i = e.getGeometryFunction()(t);
        i && Pt(this.extent_, i.getExtent()) && (this.setStyle(e), this.drawGeometry(i));
      }, e.prototype.drawGeometryCollection = function (t) {
        for (var e = t.getGeometriesArray(), i = 0, r = e.length; i < r; ++i) {
          this.drawGeometry(e[i]);
        }
      }, e.prototype.drawPoint = function (t) {
        var e = t.getFlatCoordinates(),
            i = t.getStride();
        this.image_ && this.drawImages_(e, 0, e.length, i), "" !== this.text_ && this.drawText_(e, 0, e.length, i);
      }, e.prototype.drawMultiPoint = function (t) {
        var e = t.getFlatCoordinates(),
            i = t.getStride();
        this.image_ && this.drawImages_(e, 0, e.length, i), "" !== this.text_ && this.drawText_(e, 0, e.length, i);
      }, e.prototype.drawLineString = function (t) {
        if (Pt(this.extent_, t.getExtent())) {
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
            var e = this.context_,
                i = t.getFlatCoordinates();
            e.beginPath(), this.moveToLineTo_(i, 0, i.length, t.getStride(), !1), e.stroke();
          }

          if ("" !== this.text_) {
            var r = t.getFlatMidpoint();
            this.drawText_(r, 0, 2, 2);
          }
        }
      }, e.prototype.drawMultiLineString = function (t) {
        var e = t.getExtent();

        if (Pt(this.extent_, e)) {
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
            var i = this.context_,
                r = t.getFlatCoordinates(),
                n = 0,
                o = t.getEnds(),
                s = t.getStride();
            i.beginPath();

            for (var a = 0, h = o.length; a < h; ++a) {
              n = this.moveToLineTo_(r, n, o[a], s, !1);
            }

            i.stroke();
          }

          if ("" !== this.text_) {
            var l = t.getFlatMidpoints();
            this.drawText_(l, 0, l.length, 2);
          }
        }
      }, e.prototype.drawPolygon = function (t) {
        if (Pt(this.extent_, t.getExtent())) {
          if (this.strokeState_ || this.fillState_) {
            this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
            var e = this.context_;
            e.beginPath(), this.drawRings_(t.getOrientedFlatCoordinates(), 0, t.getEnds(), t.getStride()), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
          }

          if ("" !== this.text_) {
            var i = t.getFlatInteriorPoint();
            this.drawText_(i, 0, 2, 2);
          }
        }
      }, e.prototype.drawMultiPolygon = function (t) {
        if (Pt(this.extent_, t.getExtent())) {
          if (this.strokeState_ || this.fillState_) {
            this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
            var e = this.context_,
                i = t.getOrientedFlatCoordinates(),
                r = 0,
                n = t.getEndss(),
                o = t.getStride();
            e.beginPath();

            for (var s = 0, a = n.length; s < a; ++s) {
              var h = n[s];
              r = this.drawRings_(i, r, h, o);
            }

            this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
          }

          if ("" !== this.text_) {
            var l = t.getFlatInteriorPoints();
            this.drawText_(l, 0, l.length, 2);
          }
        }
      }, e.prototype.setContextFillState_ = function (t) {
        var e = this.context_,
            i = this.contextFillState_;
        i ? i.fillStyle != t.fillStyle && (i.fillStyle = e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = {
          fillStyle: t.fillStyle
        });
      }, e.prototype.setContextStrokeState_ = function (t) {
        var e = this.context_,
            i = this.contextStrokeState_;
        i ? (i.lineCap != t.lineCap && (i.lineCap = e.lineCap = t.lineCap), ki && (Z(i.lineDash, t.lineDash) || e.setLineDash(i.lineDash = t.lineDash), i.lineDashOffset != t.lineDashOffset && (i.lineDashOffset = e.lineDashOffset = t.lineDashOffset)), i.lineJoin != t.lineJoin && (i.lineJoin = e.lineJoin = t.lineJoin), i.lineWidth != t.lineWidth && (i.lineWidth = e.lineWidth = t.lineWidth), i.miterLimit != t.miterLimit && (i.miterLimit = e.miterLimit = t.miterLimit), i.strokeStyle != t.strokeStyle && (i.strokeStyle = e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, ki && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = {
          lineCap: t.lineCap,
          lineDash: t.lineDash,
          lineDashOffset: t.lineDashOffset,
          lineJoin: t.lineJoin,
          lineWidth: t.lineWidth,
          miterLimit: t.miterLimit,
          strokeStyle: t.strokeStyle
        });
      }, e.prototype.setContextTextState_ = function (t) {
        var e = this.context_,
            i = this.contextTextState_,
            r = t.textAlign ? t.textAlign : "center";
        i ? (i.font != t.font && (i.font = e.font = t.font), i.textAlign != r && (i.textAlign = e.textAlign = r), i.textBaseline != t.textBaseline && (i.textBaseline = e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = r, e.textBaseline = t.textBaseline, this.contextTextState_ = {
          font: t.font,
          textAlign: r,
          textBaseline: t.textBaseline
        });
      }, e.prototype.setFillStrokeStyle = function (t, e) {
        if (t) {
          var i = t.getColor();
          this.fillState_ = {
            fillStyle: Ys(i || ws)
          };
        } else this.fillState_ = null;

        if (e) {
          var r = e.getColor(),
              n = e.getLineCap(),
              o = e.getLineDash(),
              s = e.getLineDashOffset(),
              a = e.getLineJoin(),
              h = e.getWidth(),
              l = e.getMiterLimit();
          this.strokeState_ = {
            lineCap: void 0 !== n ? n : "round",
            lineDash: o || Is,
            lineDashOffset: s || 0,
            lineJoin: void 0 !== a ? a : "round",
            lineWidth: this.pixelRatio_ * (void 0 !== h ? h : 1),
            miterLimit: void 0 !== l ? l : 10,
            strokeStyle: Ys(r || Ls)
          };
        } else this.strokeState_ = null;
      }, e.prototype.setImageStyle = function (t) {
        if (t) {
          var e = t.getAnchor(),
              i = t.getImage(1),
              r = t.getOrigin(),
              n = t.getSize();
          this.imageAnchorX_ = e[0], this.imageAnchorY_ = e[1], this.imageHeight_ = n[1], this.image_ = i, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation(), this.imageScale_ = t.getScale() * this.pixelRatio_, this.imageWidth_ = n[0];
        } else this.image_ = null;
      }, e.prototype.setTextStyle = function (t) {
        if (t) {
          var e = t.getFill();

          if (e) {
            var i = e.getColor();
            this.textFillState_ = {
              fillStyle: Ys(i || ws)
            };
          } else this.textFillState_ = null;

          var r = t.getStroke();

          if (r) {
            var n = r.getColor(),
                o = r.getLineCap(),
                s = r.getLineDash(),
                a = r.getLineDashOffset(),
                h = r.getLineJoin(),
                l = r.getWidth(),
                u = r.getMiterLimit();
            this.textStrokeState_ = {
              lineCap: void 0 !== o ? o : "round",
              lineDash: s || Is,
              lineDashOffset: a || 0,
              lineJoin: void 0 !== h ? h : "round",
              lineWidth: void 0 !== l ? l : 1,
              miterLimit: void 0 !== u ? u : 10,
              strokeStyle: Ys(n || Ls)
            };
          } else this.textStrokeState_ = null;

          var p = t.getFont(),
              c = t.getOffsetX(),
              d = t.getOffsetY(),
              f = t.getRotateWithView(),
              _ = t.getRotation(),
              g = t.getScale(),
              y = t.getText(),
              v = t.getTextAlign(),
              m = t.getTextBaseline();

          this.textState_ = {
            font: void 0 !== p ? p : "10px sans-serif",
            textAlign: void 0 !== v ? v : "center",
            textBaseline: void 0 !== m ? m : "middle"
          }, this.text_ = void 0 !== y ? y : "", this.textOffsetX_ = void 0 !== c ? this.pixelRatio_ * c : 0, this.textOffsetY_ = void 0 !== d ? this.pixelRatio_ * d : 0, this.textRotateWithView_ = void 0 !== f && f, this.textRotation_ = void 0 !== _ ? _ : 0, this.textScale_ = this.pixelRatio_ * (void 0 !== g ? g : 1);
        } else this.text_ = "";
      }, e;
    }(Vs),
        zs = function zs() {
      this.cache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32;
    };

    function Ws(t, e, i) {
      return e + ":" + t + ":" + (i ? dr(i) : "null");
    }

    zs.prototype.clear = function () {
      this.cache_ = {}, this.cacheSize_ = 0;
    }, zs.prototype.expire = function () {
      if (this.cacheSize_ > this.maxCacheSize_) {
        var t = 0;

        for (var e in this.cache_) {
          var i = this.cache_[e];
          0 != (3 & t++) || i.hasListener() || (delete this.cache_[e], --this.cacheSize_);
        }
      }
    }, zs.prototype.get = function (t, e, i) {
      var r = Ws(t, e, i);
      return r in this.cache_ ? this.cache_[r] : null;
    }, zs.prototype.set = function (t, e, i, r) {
      var n = Ws(t, e, i);
      this.cache_[n] = r, ++this.cacheSize_;
    }, zs.prototype.setSize = function (t) {
      this.maxCacheSize_ = t, this.expire();
    };
    var Ks = new zs();

    function Hs(t, e) {
      Ks.expire();
    }

    function Zs(t, e) {
      return t.zIndex - e.zIndex;
    }

    var qs = function (t) {
      function e(e) {
        t.call(this), this.map_ = e, this.layerRenderers_ = {}, this.layerRendererListeners_ = {}, this.layerRendererConstructors_ = [];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.dispatchRenderEvent = function (t, e) {
        r();
      }, e.prototype.registerLayerRenderers = function (t) {
        this.layerRendererConstructors_.push.apply(this.layerRendererConstructors_, t);
      }, e.prototype.calculateMatrices2D = function (t) {
        var e = t.viewState,
            i = t.coordinateToPixelTransform,
            r = t.pixelToCoordinateTransform;
        Ye(i, t.size[0] / 2, t.size[1] / 2, 1 / e.resolution, -1 / e.resolution, -e.rotation, -e.center[0], -e.center[1]), Be(Ge(r, i));
      }, e.prototype.removeLayerRenderers = function () {
        for (var t in this.layerRenderers_) {
          this.removeLayerRendererByKey_(t).dispose();
        }
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n, s, a) {
        var h,
            l = e.viewState,
            u = l.resolution;

        function p(t, i) {
          var s = e.layerStates[o(i)].managed;
          if (!(o(t) in e.skippedFeatureUids) || s) return r.call(n, t, s ? i : null);
        }

        var c = l.projection,
            d = t;

        if (c.canWrapX()) {
          var f = c.getExtent(),
              _ = Ot(f),
              g = t[0];

          if (g < f[0] || g > f[2]) d = [g + _ * Math.ceil((f[0] - g) / _), t[1]];
        }

        var y,
            v = e.layerStatesArray;

        for (y = v.length - 1; y >= 0; --y) {
          var m = v[y],
              x = m.layer;

          if (mo(m, u) && s.call(a, x)) {
            var E = this.getLayerRenderer(x),
                S = x.getSource();
            if (S && (h = E.forEachFeatureAtCoordinate(S.getWrapX() ? d : t, e, i, p)), h) return h;
          }
        }
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, n, o, s, a) {
        return r();
      }, e.prototype.hasFeatureAtCoordinate = function (t, e, i, r, n) {
        return void 0 !== this.forEachFeatureAtCoordinate(t, e, i, R, this, r, n);
      }, e.prototype.getLayerRenderer = function (t) {
        var e = o(t);
        if (e in this.layerRenderers_) return this.layerRenderers_[e];

        for (var i, r = 0, n = this.layerRendererConstructors_.length; r < n; ++r) {
          var s = this.layerRendererConstructors_[r];

          if (s.handles(t)) {
            i = s.create(this, t);
            break;
          }
        }

        if (!i) throw new Error("Unable to create renderer for layer: " + t.getType());
        return this.layerRenderers_[e] = i, this.layerRendererListeners_[e] = v(i, M.CHANGE, this.handleLayerRendererChange_, this), i;
      }, e.prototype.getLayerRendererByKey = function (t) {
        return this.layerRenderers_[t];
      }, e.prototype.getLayerRenderers = function () {
        return this.layerRenderers_;
      }, e.prototype.getMap = function () {
        return this.map_;
      }, e.prototype.handleLayerRendererChange_ = function () {
        this.map_.render();
      }, e.prototype.removeLayerRendererByKey_ = function (t) {
        var e = this.layerRenderers_[t];
        return delete this.layerRenderers_[t], E(this.layerRendererListeners_[t]), delete this.layerRendererListeners_[t], e;
      }, e.prototype.removeUnusedLayerRenderers_ = function (t, e) {
        for (var i in this.layerRenderers_) {
          e && i in e.layerStates || this.removeLayerRendererByKey_(i).dispose();
        }
      }, e.prototype.renderFrame = function (t) {
        r();
      }, e.prototype.scheduleExpireIconCache = function (t) {
        t.postRenderFunctions.push(Hs);
      }, e.prototype.scheduleRemoveUnusedLayerRenderers = function (t) {
        for (var e in this.layerRenderers_) {
          if (!(e in t.layerStates)) return void t.postRenderFunctions.push(this.removeUnusedLayerRenderers_.bind(this));
        }
      }, e;
    }(C),
        Js = [],
        Qs = function (t) {
      function e(e) {
        t.call(this, e);
        var i = e.getViewport();
        this.context_ = Jn(), this.canvas_ = this.context_.canvas, this.canvas_.style.width = "100%", this.canvas_.style.height = "100%", this.canvas_.style.display = "block", this.canvas_.className = fo, i.insertBefore(this.canvas_, i.childNodes[0] || null), this.renderedVisible_ = !0, this.transform_ = [1, 0, 0, 1, 0, 0];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.dispatchRenderEvent = function (t, e) {
        var i = this.getMap(),
            r = this.context_;

        if (i.hasListener(t)) {
          var n = e.extent,
              o = e.pixelRatio,
              s = e.viewState.rotation,
              a = this.getTransform(e),
              h = new Xs(r, o, n, a, s),
              l = new Cs(t, h, e, r, null);
          i.dispatchEvent(l);
        }
      }, e.prototype.getTransform = function (t) {
        var e = t.viewState,
            i = this.canvas_.width / 2,
            r = this.canvas_.height / 2,
            n = t.pixelRatio / e.resolution,
            o = -n,
            s = -e.rotation,
            a = -e.center[0],
            h = -e.center[1];
        return Ye(this.transform_, i, r, n, o, s, a, h);
      }, e.prototype.renderFrame = function (t) {
        if (t) {
          var e = this.context_,
              i = t.pixelRatio,
              r = Math.round(t.size[0] * i),
              n = Math.round(t.size[1] * i);
          this.canvas_.width != r || this.canvas_.height != n ? (this.canvas_.width = r, this.canvas_.height = n) : e.clearRect(0, 0, r, n);
          var o = t.viewState.rotation;
          this.calculateMatrices2D(t), this.dispatchRenderEvent(ur.PRECOMPOSE, t);
          var s = t.layerStatesArray;
          q(s, Zs), o && (e.save(), ks(e, o, r / 2, n / 2));
          var a,
              h,
              l = t.viewState.resolution;

          for (a = 0, h = s.length; a < h; ++a) {
            var u = s[a],
                p = u.layer,
                c = this.getLayerRenderer(p);
            mo(u, l) && u.sourceState == ro.READY && c.prepareFrame(t, u) && c.composeFrame(t, u, e);
          }

          o && e.restore(), this.dispatchRenderEvent(ur.POSTCOMPOSE, t), this.renderedVisible_ || (this.canvas_.style.display = "", this.renderedVisible_ = !0), this.scheduleRemoveUnusedLayerRenderers(t), this.scheduleExpireIconCache(t);
        } else this.renderedVisible_ && (this.canvas_.style.display = "none", this.renderedVisible_ = !1);
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, r, n, o, s) {
        var a,
            h,
            l = e.viewState.resolution,
            u = e.layerStatesArray,
            p = u.length,
            c = De(e.pixelToCoordinateTransform, t.slice());

        for (h = p - 1; h >= 0; --h) {
          var d = u[h],
              f = d.layer;
          if (mo(d, l) && o.call(s, f)) if (a = this.getLayerRenderer(f).forEachLayerAtCoordinate(c, e, i, r, n)) return a;
        }
      }, e.prototype.registerLayerRenderers = function (e) {
        t.prototype.registerLayerRenderers.call(this, e);

        for (var i = 0, r = e.length; i < r; ++i) {
          var n = e[i];
          X(Js, n) || Js.push(n);
        }
      }, e;
    }(qs),
        $s = function (t) {
      function e(e) {
        t.call(this), this.layer_ = e;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createLoadedTileFinder = function (t, e, i) {
        return function (r, n) {
          return t.forEachLoadedTile(e, r, n, function (t) {
            i[r] || (i[r] = {}), i[r][t.tileCoord.toString()] = t;
          });
        };
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r) {}, e.prototype.getLayer = function () {
        return this.layer_;
      }, e.prototype.handleImageChange_ = function (t) {
        t.target.getState() === xs.LOADED && this.renderIfReadyAndVisible();
      }, e.prototype.hasFeatureAtCoordinate = function (t, e) {
        return !1;
      }, e.prototype.loadImage = function (t) {
        var e = t.getState();
        return e != xs.LOADED && e != xs.ERROR && v(t, M.CHANGE, this.handleImageChange_, this), e == xs.IDLE && (t.load(), e = t.getState()), e == xs.LOADED;
      }, e.prototype.renderIfReadyAndVisible = function () {
        var t = this.getLayer();
        t.getVisible() && t.getSourceState() == ro.READY && this.changed();
      }, e.prototype.scheduleExpireCache = function (t, e) {
        if (e.canExpireCache()) {
          var i = function (t, e, i) {
            var r = o(t);
            r in i.usedTiles && t.expireCache(i.viewState.projection, i.usedTiles[r]);
          }.bind(null, e);

          t.postRenderFunctions.push(i);
        }
      }, e.prototype.updateUsedTiles = function (t, e, i, r) {
        var n = o(e),
            s = i.toString();
        n in t ? s in t[n] ? t[n][s].extend(r) : t[n][s] = r : (t[n] = {}, t[n][s] = r);
      }, e.prototype.manageTilePyramid = function (t, e, i, r, n, s, a, h, l, u) {
        var p = o(e);
        p in t.wantedTiles || (t.wantedTiles[p] = {});

        var c,
            d,
            f,
            _,
            g,
            y,
            v = t.wantedTiles[p],
            m = t.tileQueue;

        for (y = i.getMinZoom(); y <= a; ++y) {
          for (d = i.getTileRangeForExtentAndZ(s, y, d), f = i.getResolution(y), _ = d.minX; _ <= d.maxX; ++_) {
            for (g = d.minY; g <= d.maxY; ++g) {
              a - y <= h ? ((c = e.getTile(y, _, g, r, n)).getState() == On.IDLE && (v[c.getKey()] = !0, m.isKeyQueued(c.getKey()) || m.enqueue([c, p, i.getTileCoordCenter(c.tileCoord), f])), void 0 !== l && l.call(u, c)) : e.useTile(y, _, g, n);
            }
          }
        }
      }, e;
    }(F),
        ta = function (t) {
      function e(e) {
        t.call(this, e), this.renderedResolution, this.transform_ = [1, 0, 0, 1, 0, 0];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clip = function (t, e, i) {
        var r = e.pixelRatio,
            n = e.size[0] * r,
            o = e.size[1] * r,
            s = e.viewState.rotation,
            a = It(i),
            h = Lt(i),
            l = St(i),
            u = Et(i);
        De(e.coordinateToPixelTransform, a), De(e.coordinateToPixelTransform, h), De(e.coordinateToPixelTransform, l), De(e.coordinateToPixelTransform, u), t.save(), ks(t, -s, n / 2, o / 2), t.beginPath(), t.moveTo(a[0] * r, a[1] * r), t.lineTo(h[0] * r, h[1] * r), t.lineTo(l[0] * r, l[1] * r), t.lineTo(u[0] * r, u[1] * r), t.clip(), ks(t, s, n / 2, o / 2);
      }, e.prototype.dispatchComposeEvent_ = function (t, e, i, r) {
        var n = this.getLayer();

        if (n.hasListener(t)) {
          var o = i.size[0] * i.pixelRatio,
              s = i.size[1] * i.pixelRatio,
              a = i.viewState.rotation;
          ks(e, -a, o / 2, s / 2);
          var h = void 0 !== r ? r : this.getTransform(i, 0),
              l = new Xs(e, i.pixelRatio, i.extent, h, i.viewState.rotation),
              u = new Cs(t, l, i, e, null);
          n.dispatchEvent(u), ks(e, a, o / 2, s / 2);
        }
      }, e.prototype.forEachLayerAtCoordinate = function (t, e, i, r, n) {
        return this.forEachFeatureAtCoordinate(t, e, i, R) ? r.call(n, this.getLayer(), null) : void 0;
      }, e.prototype.postCompose = function (t, e, i, r) {
        this.dispatchComposeEvent_(ur.POSTCOMPOSE, t, e, r);
      }, e.prototype.preCompose = function (t, e, i) {
        this.dispatchComposeEvent_(ur.PRECOMPOSE, t, e, i);
      }, e.prototype.dispatchRenderEvent = function (t, e, i) {
        this.dispatchComposeEvent_(ur.RENDER, t, e, i);
      }, e.prototype.getTransform = function (t, e) {
        var i = t.viewState,
            r = t.pixelRatio,
            n = r * t.size[0] / 2,
            o = r * t.size[1] / 2,
            s = r / i.resolution,
            a = -s,
            h = -i.rotation,
            l = -i.center[0] + e,
            u = -i.center[1];
        return Ye(this.transform_, n, o, s, a, h, l, u);
      }, e.prototype.composeFrame = function (t, e, i) {
        r();
      }, e.prototype.prepareFrame = function (t, e) {
        return r();
      }, e;
    }($s),
        ea = function (t) {
      function e(e) {
        t.call(this, e), this.coordinateToCanvasPixelTransform = [1, 0, 0, 1, 0, 0], this.hitCanvasContext_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.composeFrame = function (t, e, i) {
        this.preCompose(i, t);
        var r = this.getImage();

        if (r) {
          var n = e.extent,
              o = void 0 !== n && !ot(n, t.extent) && Pt(n, t.extent);
          o && this.clip(i, t, n);
          var s = this.getImageTransform(),
              a = i.globalAlpha;
          i.globalAlpha = e.opacity;
          var h = s[4],
              l = s[5],
              u = r.width * s[0],
              p = r.height * s[3];
          u >= .5 && p >= .5 && i.drawImage(r, 0, 0, +r.width, +r.height, Math.round(h), Math.round(l), Math.round(u), Math.round(p)), i.globalAlpha = a, o && i.restore();
        }

        this.postCompose(i, t, e);
      }, e.prototype.getImage = function () {
        return r();
      }, e.prototype.getImageTransform = function () {
        return r();
      }, e.prototype.forEachLayerAtCoordinate = function (t, e, i, r, n) {
        if (this.getImage()) {
          var o = De(this.coordinateToCanvasPixelTransform, t.slice());
          tr(o, e.viewState.resolution / this.renderedResolution), this.hitCanvasContext_ || (this.hitCanvasContext_ = Jn(1, 1)), this.hitCanvasContext_.clearRect(0, 0, 1, 1), this.hitCanvasContext_.drawImage(this.getImage(), o[0], o[1], 1, 1, 0, 0, 1, 1);
          var s = this.hitCanvasContext_.getImageData(0, 0, 1, 1).data;
          return s[3] > 0 ? r.call(n, this.getLayer(), s) : void 0;
        }
      }, e;
    }(ta),
        ia = function (t) {
      function e(i) {
        if (t.call(this, i), this.image_ = null, this.imageTransform_ = [1, 0, 0, 1, 0, 0], this.skippedFeatures_ = [], this.vectorRenderer_ = null, i.getType() === Ss.VECTOR) for (var r = 0, n = Js.length; r < n; ++r) {
          var o = Js[r];

          if (o !== e && o.handles(i)) {
            this.vectorRenderer_ = new o(i);
            break;
          }
        }
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.vectorRenderer_ && this.vectorRenderer_.dispose(), t.prototype.disposeInternal.call(this);
      }, e.prototype.getImage = function () {
        return this.image_ ? this.image_.getImage() : null;
      }, e.prototype.getImageTransform = function () {
        return this.imageTransform_;
      }, e.prototype.prepareFrame = function (t, e) {
        var i,
            r = t.pixelRatio,
            n = t.size,
            o = t.viewState,
            s = o.center,
            a = o.resolution,
            h = this.getLayer().getSource(),
            l = t.viewHints,
            p = this.vectorRenderer_,
            c = t.extent;

        if (p || void 0 === e.extent || (c = wt(c, e.extent)), !l[kn] && !l[jn] && !bt(c)) {
          var d = o.projection,
              f = this.skippedFeatures_;

          if (p) {
            var _ = p.context,
                g = u({}, t, {
              size: [Ot(c) / a, Rt(c) / a],
              viewState: u({}, t.viewState, {
                rotation: 0
              })
            }),
                y = Object.keys(g.skippedFeatureUids).sort();
            i = new Es(c, a, r, _.canvas, function (t) {
              !p.prepareFrame(g, e) || !p.replayGroupChanged && Z(f, y) || (_.canvas.width = g.size[0] * r, _.canvas.height = g.size[1] * r, p.compose(_, g, e), f = y, t());
            });
          } else i = h.getImage(c, a, r, d);

          i && this.loadImage(i) && (this.image_ = i, this.skippedFeatures_ = f);
        }

        if (this.image_) {
          var v = (i = this.image_).getExtent(),
              m = i.getResolution(),
              x = i.getPixelRatio(),
              E = r * m / (a * x),
              S = Ye(this.imageTransform_, r * n[0] / 2, r * n[1] / 2, E, E, 0, x * (v[0] - s[0]) / m, x * (s[1] - v[3]) / m);
          Ye(this.coordinateToCanvasPixelTransform, r * n[0] / 2 - S[4], r * n[1] / 2 - S[5], r / a, -r / a, 0, -s[0], -s[1]), this.renderedResolution = m * r / x;
        }

        return !!this.image_;
      }, e.prototype.forEachFeatureAtCoordinate = function (e, i, r, n) {
        return this.vectorRenderer_ ? this.vectorRenderer_.forEachFeatureAtCoordinate(e, i, r, n) : t.prototype.forEachFeatureAtCoordinate.call(this, e, i, r, n);
      }, e;
    }(ea);

    ia.handles = function (t) {
      return t.getType() === Ss.IMAGE || t.getType() === Ss.VECTOR && t.getRenderMode() === Ts.IMAGE;
    }, ia.create = function (t, e) {
      return new ia(e);
    };

    var ra = ia,
        na = function na(t, e, i, r) {
      this.minX = t, this.maxX = e, this.minY = i, this.maxY = r;
    };

    function oa(t, e, i, r, n) {
      return void 0 !== n ? (n.minX = t, n.maxX = e, n.minY = i, n.maxY = r, n) : new na(t, e, i, r);
    }

    na.prototype.contains = function (t) {
      return this.containsXY(t[1], t[2]);
    }, na.prototype.containsTileRange = function (t) {
      return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY;
    }, na.prototype.containsXY = function (t, e) {
      return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY;
    }, na.prototype.equals = function (t) {
      return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY;
    }, na.prototype.extend = function (t) {
      t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY);
    }, na.prototype.getHeight = function () {
      return this.maxY - this.minY + 1;
    }, na.prototype.getSize = function () {
      return [this.getWidth(), this.getHeight()];
    }, na.prototype.getWidth = function () {
      return this.maxX - this.minX + 1;
    }, na.prototype.intersects = function (t) {
      return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY;
    };

    var sa = na,
        aa = function (t) {
      function e(e, i) {
        t.call(this, e), this.context = i ? null : Jn(), this.oversampling_, this.renderedExtent_ = null, this.renderedRevision, this.renderedTiles = [], this.newTiles_ = !1, this.tmpExtent = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.tmpTileRange_ = new sa(0, 0, 0, 0), this.imageTransform_ = [1, 0, 0, 1, 0, 0], this.zDirection = 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isDrawableTile_ = function (t) {
        var e = this.getLayer(),
            i = t.getState(),
            r = e.getUseInterimTilesOnError();
        return i == On.LOADED || i == On.EMPTY || i == On.ERROR && !r;
      }, e.prototype.getTile = function (t, e, i, r, n) {
        var o = this.getLayer(),
            s = o.getSource().getTile(t, e, i, r, n);
        return s.getState() == On.ERROR && (o.getUseInterimTilesOnError() ? o.getPreload() > 0 && (this.newTiles_ = !0) : s.setState(On.LOADED)), this.isDrawableTile_(s) || (s = s.getInterimTile()), s;
      }, e.prototype.prepareFrame = function (t, e) {
        var i = t.pixelRatio,
            r = t.size,
            n = t.viewState,
            s = n.projection,
            a = n.resolution,
            h = n.center,
            l = this.getLayer(),
            u = l.getSource(),
            p = u.getRevision(),
            c = u.getTileGridForProjection(s),
            d = c.getZForResolution(a, this.zDirection),
            f = c.getResolution(d),
            _ = Math.round(a / f) || 1,
            g = t.extent;

        if (void 0 !== e.extent && (g = wt(g, e.extent)), bt(g)) return !1;
        var y = c.getTileRangeForExtentAndZ(g, d),
            v = c.getTileRangeExtent(d, y),
            m = u.getTilePixelRatio(i),
            x = {};
        x[d] = {};
        var E,
            S,
            T,
            C = this.createLoadedTileFinder(u, s, x),
            R = t.viewHints,
            w = R[kn] || R[jn],
            I = this.tmpExtent,
            L = this.tmpTileRange_;

        for (this.newTiles_ = !1, S = y.minX; S <= y.maxX; ++S) {
          for (T = y.minY; T <= y.maxY; ++T) {
            if (!(Date.now() - t.time > 16 && w)) {
              if (E = this.getTile(d, S, T, i, s), this.isDrawableTile_(E)) {
                var O = o(this);

                if (E.getState() == On.LOADED) {
                  x[d][E.tileCoord.toString()] = E;
                  var P = E.inTransition(O);
                  this.newTiles_ || !P && -1 !== this.renderedTiles.indexOf(E) || (this.newTiles_ = !0);
                }

                if (1 === E.getAlpha(O, t.time)) continue;
              }

              var b = c.getTileCoordChildTileRange(E.tileCoord, L, I),
                  M = !1;
              b && (M = C(d + 1, b)), M || c.forEachTileCoordParentTileRange(E.tileCoord, C, null, L, I);
            }
          }
        }

        var F = f * i / m * _;

        if (!(this.renderedResolution && Date.now() - t.time > 16 && w) && (this.newTiles_ || !this.renderedExtent_ || !ot(this.renderedExtent_, g) || this.renderedRevision != p || _ != this.oversampling_ || !w && F != this.renderedResolution)) {
          var A = this.context;

          if (A) {
            var N = u.getTilePixelSize(d, i, s),
                G = Math.round(y.getWidth() * N[0] / _),
                D = Math.round(y.getHeight() * N[1] / _),
                k = A.canvas;
            k.width != G || k.height != D ? (this.oversampling_ = _, k.width = G, k.height = D) : (this.renderedExtent_ && !dt(v, this.renderedExtent_) && A.clearRect(0, 0, G, D), _ = this.oversampling_);
          }

          this.renderedTiles.length = 0;
          var j,
              U,
              Y,
              B,
              V,
              X,
              z,
              W,
              K,
              H,
              Z = Object.keys(x).map(Number);

          for (Z.sort(function (t, e) {
            return t === d ? 1 : e === d ? -1 : t > e ? 1 : t < e ? -1 : 0;
          }), B = 0, V = Z.length; B < V; ++B) {
            for (var q in Y = Z[B], U = u.getTilePixelSize(Y, i, s), j = c.getResolution(Y) / f, z = m * u.getGutterForProjection(s), W = x[Y]) {
              E = W[q], S = ((X = c.getTileCoordExtent(E.getTileCoord(), I))[0] - v[0]) / f * m / _, T = (v[3] - X[3]) / f * m / _, K = U[0] * j / _, H = U[1] * j / _, this.drawTileImage(E, t, e, S, T, K, H, z, d === Y), this.renderedTiles.push(E);
            }
          }

          this.renderedRevision = p, this.renderedResolution = f * i / m * _, this.renderedExtent_ = v;
        }

        var J = this.renderedResolution / a,
            Q = Ye(this.imageTransform_, i * r[0] / 2, i * r[1] / 2, J, J, 0, (this.renderedExtent_[0] - h[0]) / this.renderedResolution * i, (h[1] - this.renderedExtent_[3]) / this.renderedResolution * i);
        return Ye(this.coordinateToCanvasPixelTransform, i * r[0] / 2 - Q[4], i * r[1] / 2 - Q[5], i / a, -i / a, 0, -h[0], -h[1]), this.updateUsedTiles(t.usedTiles, u, d, y), this.manageTilePyramid(t, u, c, i, s, g, d, l.getPreload()), this.scheduleExpireCache(t, u), this.renderedTiles.length > 0;
      }, e.prototype.drawTileImage = function (t, e, i, r, n, s, a, h, l) {
        var u = this.getTileImage(t);

        if (u) {
          var p = o(this),
              c = l ? t.getAlpha(p, e.time) : 1,
              d = this.getLayer().getSource();
          1 !== c || d.getOpaque(e.viewState.projection) || this.context.clearRect(r, n, s, a);
          var f = c !== this.context.globalAlpha;
          f && (this.context.save(), this.context.globalAlpha = c), this.context.drawImage(u, h, h, u.width - 2 * h, u.height - 2 * h, r, n, s, a), f && this.context.restore(), 1 !== c ? e.animate = !0 : l && t.endTransition(p);
        }
      }, e.prototype.getImage = function () {
        var t = this.context;
        return t ? t.canvas : null;
      }, e.prototype.getImageTransform = function () {
        return this.imageTransform_;
      }, e.prototype.getTileImage = function (t) {
        return t.getImage();
      }, e;
    }(ea);

    aa.handles = function (t) {
      return t.getType() === Ss.TILE;
    }, aa.create = function (t, e) {
      return new aa(e);
    }, aa.prototype.getLayer;

    var ha = aa,
        la = i(0),
        ua = i.n(la),
        pa = function pa() {};

    pa.prototype.getReplay = function (t, e) {
      return r();
    }, pa.prototype.isEmpty = function () {
      return r();
    }, pa.prototype.addDeclutter = function (t) {
      return r();
    };
    var ca = pa,
        da = {
      CIRCLE: "Circle",
      DEFAULT: "Default",
      IMAGE: "Image",
      LINE_STRING: "LineString",
      POLYGON: "Polygon",
      TEXT: "Text"
    };

    function fa(t, e, i, r, n, o, s, a) {
      for (var h, l, u, p = [], c = t[e] > t[i - r], d = n.length, f = t[e], _ = t[e + 1], g = t[e += r], y = t[e + 1], v = 0, m = Math.sqrt(Math.pow(g - f, 2) + Math.pow(y - _, 2)), x = "", E = 0, S = 0; S < d; ++S) {
        l = c ? d - S - 1 : S;
        var T = n.charAt(l),
            C = o(x = c ? T + x : x + T) - E;
        E += C;

        for (var R = s + C / 2; e < i - r && v + m < R;) {
          f = g, _ = y, g = t[e += r], y = t[e + 1], v += m, m = Math.sqrt(Math.pow(g - f, 2) + Math.pow(y - _, 2));
        }

        var w = R - v,
            I = Math.atan2(y - _, g - f);

        if (c && (I += I > 0 ? -Math.PI : Math.PI), void 0 !== u) {
          var L = I - u;
          if (L += L > Math.PI ? -2 * Math.PI : L < -Math.PI ? 2 * Math.PI : 0, Math.abs(L) > a) return null;
        }

        var O = w / m,
            P = zt(f, g, O),
            b = zt(_, y, O);
        u == I ? (c && (h[0] = P, h[1] = b, h[2] = C / 2), h[4] = x) : (E = C, h = [P, b, C / 2, I, x = T], c ? p.unshift(h) : p.push(h), u = I), s += C;
      }

      return p;
    }

    var _a = {
      BEGIN_GEOMETRY: 0,
      BEGIN_PATH: 1,
      CIRCLE: 2,
      CLOSE_PATH: 3,
      CUSTOM: 4,
      DRAW_CHARS: 5,
      DRAW_IMAGE: 6,
      END_GEOMETRY: 7,
      FILL: 8,
      MOVE_TO_LINE_TO: 9,
      SET_FILL_STYLE: 10,
      SET_STROKE_STYLE: 11,
      STROKE: 12
    },
        ga = [_a.FILL],
        ya = [_a.STROKE],
        va = [_a.BEGIN_PATH],
        ma = [_a.CLOSE_PATH],
        xa = _a,
        Ea = [da.POLYGON, da.CIRCLE, da.LINE_STRING, da.IMAGE, da.TEXT, da.DEFAULT],
        Sa = {
      left: 0,
      end: 0,
      center: .5,
      right: 1,
      start: 1,
      top: 0,
      middle: .5,
      hanging: .2,
      alphabetic: .8,
      ideographic: .8,
      bottom: 1
    },
        Ta = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
        Ca = [1, 0, 0, 1, 0, 0],
        Ra = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this), this.declutterTree = s, this.tolerance = e, this.maxExtent = i, this.overlaps = o, this.pixelRatio = n, this.maxLineWidth = 0, this.resolution = r, this.alignFill_, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.coordinateCache_ = {}, this.renderedTransform_ = [1, 0, 0, 1, 0, 0], this.hitDetectionInstructions = [], this.pixelCoordinates_ = null, this.state = {}, this.viewRotation_ = 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.replayTextBackground_ = function (t, e, i, r, n, o, s) {
        t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, i), t.lineTo.apply(t, r), t.lineTo.apply(t, n), t.lineTo.apply(t, e), o && (this.alignFill_ = o[2], this.fill_(t)), s && (this.setStrokeStyle_(t, s), t.stroke());
      }, e.prototype.replayImage_ = function (t, e, i, r, n, o, s, a, h, l, u, p, c, d, f, _, g, y) {
        var v = g || y;
        e -= n *= c, i -= o *= c;
        var m,
            x,
            E,
            S,
            T = f + l > r.width ? r.width - l : f,
            C = a + u > r.height ? r.height - u : a,
            R = _[3] + T * c + _[1],
            w = _[0] + C * c + _[2],
            I = e - _[3],
            L = i - _[0];
        (v || 0 !== p) && (m = [I, L], x = [I + R, L], E = [I + R, L + w], S = [I, L + w]);
        var O = null;

        if (0 !== p) {
          var P = e + n,
              b = i + o;
          O = Ye(Ca, P, b, 1, 1, p, -P, -b), ut(Ta), _t(Ta, De(Ca, m)), _t(Ta, De(Ca, x)), _t(Ta, De(Ca, E)), _t(Ta, De(Ca, S));
        } else lt(I, L, I + R, L + w, Ta);

        var M = t.canvas,
            F = y ? y[2] * c / 2 : 0,
            A = Ta[0] - F <= M.width && Ta[2] + F >= 0 && Ta[1] - F <= M.height && Ta[3] + F >= 0;

        if (d && (e = Math.round(e), i = Math.round(i)), s) {
          if (!A && 1 == s[4]) return;
          ft(s, Ta);
          var N = A ? [t, O ? O.slice(0) : null, h, r, l, u, T, C, e, i, c] : null;
          N && v && N.push(g, y, m, x, E, S), s.push(N);
        } else A && (v && this.replayTextBackground_(t, m, x, E, S, g, y), Us(t, O, h, r, l, u, T, C, e, i, c));
      }, e.prototype.applyPixelRatio = function (t) {
        var e = this.pixelRatio;
        return 1 == e ? t : t.map(function (t) {
          return t * e;
        });
      }, e.prototype.appendFlatCoordinates = function (t, e, i, r, n, o) {
        var s = this.coordinates.length,
            a = this.getBufferedMaxExtent();
        o && (e += r);
        var h,
            l,
            u,
            p = [t[e], t[e + 1]],
            c = [NaN, NaN],
            d = !0;

        for (h = e + r; h < i; h += r) {
          c[0] = t[h], c[1] = t[h + 1], (u = at(a, c)) !== l ? (d && (this.coordinates[s++] = p[0], this.coordinates[s++] = p[1]), this.coordinates[s++] = c[0], this.coordinates[s++] = c[1], d = !1) : u === $.INTERSECTING ? (this.coordinates[s++] = c[0], this.coordinates[s++] = c[1], d = !1) : d = !0, p[0] = c[0], p[1] = c[1], l = u;
        }

        return (n && d || h === e + r) && (this.coordinates[s++] = p[0], this.coordinates[s++] = p[1]), s;
      }, e.prototype.drawCustomCoordinates_ = function (t, e, i, r, n) {
        for (var o = 0, s = i.length; o < s; ++o) {
          var a = i[o],
              h = this.appendFlatCoordinates(t, e, a, r, !1, !1);
          n.push(h), e = a;
        }

        return e;
      }, e.prototype.drawCustom = function (t, e, i) {
        this.beginGeometry(t, e);
        var r,
            n,
            o,
            s,
            a,
            h = t.getType(),
            l = t.getStride(),
            u = this.coordinates.length;

        if (h == Nt.MULTI_POLYGON) {
          r = (t = t).getOrientedFlatCoordinates(), s = [];
          var p = t.getEndss();
          a = 0;

          for (var c = 0, d = p.length; c < d; ++c) {
            var f = [];
            a = this.drawCustomCoordinates_(r, a, p[c], l, f), s.push(f);
          }

          this.instructions.push([xa.CUSTOM, u, s, t, i, oi]);
        } else h == Nt.POLYGON || h == Nt.MULTI_LINE_STRING ? (o = [], r = h == Nt.POLYGON ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates(), a = this.drawCustomCoordinates_(r, 0, t.getEnds(), l, o), this.instructions.push([xa.CUSTOM, u, o, t, i, ni])) : h == Nt.LINE_STRING || h == Nt.MULTI_POINT ? (r = t.getFlatCoordinates(), n = this.appendFlatCoordinates(r, 0, r.length, l, !1, !1), this.instructions.push([xa.CUSTOM, u, n, t, i, ri])) : h == Nt.POINT && (r = t.getFlatCoordinates(), this.coordinates.push(r[0], r[1]), n = this.coordinates.length, this.instructions.push([xa.CUSTOM, u, n, t, i]));

        this.endGeometry(t, e);
      }, e.prototype.beginGeometry = function (t, e) {
        this.beginGeometryInstruction1_ = [xa.BEGIN_GEOMETRY, e, 0], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [xa.BEGIN_GEOMETRY, e, 0], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
      }, e.prototype.finish = function () {}, e.prototype.fill_ = function (t) {
        if (this.alignFill_) {
          var e = De(this.renderedTransform_, [0, 0]),
              i = 512 * this.pixelRatio;
          t.translate(e[0] % i, e[1] % i), t.rotate(this.viewRotation_);
        }

        t.fill(), this.alignFill_ && t.setTransform.apply(t, js);
      }, e.prototype.setStrokeStyle_ = function (t, e) {
        t.strokeStyle = e[1], t.lineWidth = e[2], t.lineCap = e[3], t.lineJoin = e[4], t.miterLimit = e[5], ki && (t.lineDashOffset = e[7], t.setLineDash(e[6]));
      }, e.prototype.renderDeclutter_ = function (t, e) {
        if (t && t.length > 5) {
          var i = t[4];

          if (1 == i || i == t.length - 5) {
            var r = {
              minX: t[0],
              minY: t[1],
              maxX: t[2],
              maxY: t[3],
              value: e
            };

            if (!this.declutterTree.collides(r)) {
              this.declutterTree.insert(r);

              for (var n = 5, o = t.length; n < o; ++n) {
                var s = t[n];
                s && (s.length > 11 && this.replayTextBackground_(s[0], s[13], s[14], s[15], s[16], s[11], s[12]), Us.apply(void 0, s));
              }
            }

            t.length = 5, ut(t);
          }
        }
      }, e.prototype.replay_ = function (t, e, i, r, n, s, a) {
        var h;
        this.pixelCoordinates_ && Z(e, this.renderedTransform_) ? h = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), h = Gt(this.coordinates, 0, this.coordinates.length, 2, e, this.pixelCoordinates_), Ge(this.renderedTransform_, e));

        for (var l, u, p, c, f, _, g, y, v, m, x, E, S = !d(i), T = 0, C = r.length, R = 0, w = 0, I = 0, L = null, O = null, P = this.coordinateCache_, b = this.viewRotation_, M = {
          context: t,
          pixelRatio: this.pixelRatio,
          resolution: this.resolution,
          rotation: b
        }, F = this.instructions != r || this.overlaps ? 0 : 200; T < C;) {
          var A = r[T];

          switch (A[0]) {
            case xa.BEGIN_GEOMETRY:
              m = A[1], S && i[o(m)] || !m.getGeometry() ? T = A[2] : void 0 === a || Pt(a, m.getGeometry().getExtent()) ? ++T : T = A[2] + 1;
              break;

            case xa.BEGIN_PATH:
              w > F && (this.fill_(t), w = 0), I > F && (t.stroke(), I = 0), w || I || (t.beginPath(), c = f = NaN), ++T;
              break;

            case xa.CIRCLE:
              var N = h[R = A[1]],
                  G = h[R + 1],
                  D = h[R + 2] - N,
                  k = h[R + 3] - G,
                  j = Math.sqrt(D * D + k * k);
              t.moveTo(N + j, G), t.arc(N, G, j, 0, 2 * Math.PI, !0), ++T;
              break;

            case xa.CLOSE_PATH:
              t.closePath(), ++T;
              break;

            case xa.CUSTOM:
              R = A[1], l = A[2];
              var U = A[3],
                  Y = A[4],
                  B = 6 == A.length ? A[5] : void 0;
              M.geometry = U, M.feature = m, T in P || (P[T] = []);
              var V = P[T];
              B ? B(h, R, l, 2, V) : (V[0] = h[R], V[1] = h[R + 1], V.length = 2), Y(V, M), ++T;
              break;

            case xa.DRAW_IMAGE:
              R = A[1], l = A[2], v = A[3], u = A[4], p = A[5], y = s ? null : A[6];
              var X = A[7],
                  z = A[8],
                  W = A[9],
                  K = A[10],
                  H = A[11],
                  q = A[12],
                  J = A[13],
                  Q = A[14],
                  $ = void 0,
                  tt = void 0,
                  et = void 0;

              for (A.length > 16 ? ($ = A[15], tt = A[16], et = A[17]) : ($ = Os, tt = et = !1), H && (q += b); R < l; R += 2) {
                this.replayImage_(t, h[R], h[R + 1], v, u, p, y, X, z, W, K, q, J, n, Q, $, tt ? L : null, et ? O : null);
              }

              this.renderDeclutter_(y, m), ++T;
              break;

            case xa.DRAW_CHARS:
              var it = A[1],
                  rt = A[2],
                  nt = A[3];
              y = s ? null : A[4];

              var ot = A[5],
                  st = A[6],
                  at = A[7],
                  ht = A[8],
                  lt = A[9],
                  ut = A[10],
                  pt = A[11],
                  ct = A[12],
                  dt = A[13],
                  ft = A[14],
                  _t = ar(h, it, rt, 2),
                  gt = ht(ct);

              if (ot || gt <= _t) {
                var yt = this,
                    vt = yt.textStates[dt].textAlign,
                    mt = fa(h, it, rt, 2, ct, ht, (_t - gt) * Sa[vt], at);

                if (mt) {
                  var xt = void 0,
                      Et = void 0,
                      St = void 0,
                      Tt = void 0,
                      Ct = void 0;
                  if (ut) for (xt = 0, Et = mt.length; xt < Et; ++xt) {
                    St = (Ct = mt[xt])[4], Tt = yt.getImage(St, dt, "", ut), u = Ct[2] + pt, p = nt * Tt.height + 2 * (.5 - nt) * pt - lt, this.replayImage_(t, Ct[0], Ct[1], Tt, u, p, y, Tt.height, 1, 0, 0, Ct[3], ft, !1, Tt.width, Os, null, null);
                  }
                  if (st) for (xt = 0, Et = mt.length; xt < Et; ++xt) {
                    St = (Ct = mt[xt])[4], Tt = yt.getImage(St, dt, st, ""), u = Ct[2], p = nt * Tt.height - lt, this.replayImage_(t, Ct[0], Ct[1], Tt, u, p, y, Tt.height, 1, 0, 0, Ct[3], ft, !1, Tt.width, Os, null, null);
                  }
                }
              }

              this.renderDeclutter_(y, m), ++T;
              break;

            case xa.END_GEOMETRY:
              if (void 0 !== s) {
                var Rt = s(m = A[1]);
                if (Rt) return Rt;
              }

              ++T;
              break;

            case xa.FILL:
              F ? w++ : this.fill_(t), ++T;
              break;

            case xa.MOVE_TO_LINE_TO:
              for (R = A[1], l = A[2], x = h[R], g = (E = h[R + 1]) + .5 | 0, (_ = x + .5 | 0) === c && g === f || (t.moveTo(x, E), c = _, f = g), R += 2; R < l; R += 2) {
                _ = (x = h[R]) + .5 | 0, g = (E = h[R + 1]) + .5 | 0, R != l - 2 && _ === c && g === f || (t.lineTo(x, E), c = _, f = g);
              }

              ++T;
              break;

            case xa.SET_FILL_STYLE:
              L = A, this.alignFill_ = A[2], w && (this.fill_(t), w = 0, I && (t.stroke(), I = 0)), t.fillStyle = A[1], ++T;
              break;

            case xa.SET_STROKE_STYLE:
              O = A, I && (t.stroke(), I = 0), this.setStrokeStyle_(t, A), ++T;
              break;

            case xa.STROKE:
              F ? I++ : t.stroke(), ++T;
              break;

            default:
              ++T;
          }
        }

        w && this.fill_(t), I && t.stroke();
      }, e.prototype.replay = function (t, e, i, r, n) {
        this.viewRotation_ = i, this.replay_(t, e, r, this.instructions, n, void 0, void 0);
      }, e.prototype.replayHitDetection = function (t, e, i, r, n, o) {
        return this.viewRotation_ = i, this.replay_(t, e, r, this.hitDetectionInstructions, !0, n, o);
      }, e.prototype.reverseHitDetectionInstructions = function () {
        var t,
            e = this.hitDetectionInstructions;
        e.reverse();
        var i,
            r,
            n = e.length,
            o = -1;

        for (t = 0; t < n; ++t) {
          (r = (i = e[t])[0]) == xa.END_GEOMETRY ? o = t : r == xa.BEGIN_GEOMETRY && (i[2] = t, W(this.hitDetectionInstructions, o, t), o = -1);
        }
      }, e.prototype.setFillStrokeStyle = function (t, e) {
        var i = this.state;

        if (t) {
          var r = t.getColor();
          i.fillStyle = Ys(r || ws);
        } else i.fillStyle = void 0;

        if (e) {
          var n = e.getColor();
          i.strokeStyle = Ys(n || Ls);
          var o = e.getLineCap();
          i.lineCap = void 0 !== o ? o : "round";
          var s = e.getLineDash();
          i.lineDash = s ? s.slice() : Is;
          var a = e.getLineDashOffset();
          i.lineDashOffset = a || 0;
          var h = e.getLineJoin();
          i.lineJoin = void 0 !== h ? h : "round";
          var l = e.getWidth();
          i.lineWidth = void 0 !== l ? l : 1;
          var u = e.getMiterLimit();
          i.miterLimit = void 0 !== u ? u : 10, i.lineWidth > this.maxLineWidth && (this.maxLineWidth = i.lineWidth, this.bufferedMaxExtent_ = null);
        } else i.strokeStyle = void 0, i.lineCap = void 0, i.lineDash = null, i.lineDashOffset = void 0, i.lineJoin = void 0, i.lineWidth = void 0, i.miterLimit = void 0;
      }, e.prototype.createFill = function (t, e) {
        var i = t.fillStyle,
            r = [xa.SET_FILL_STYLE, i];
        return "string" != typeof i && r.push(!0), r;
      }, e.prototype.applyStroke = function (t) {
        this.instructions.push(this.createStroke(t));
      }, e.prototype.createStroke = function (t) {
        return [xa.SET_STROKE_STYLE, t.strokeStyle, t.lineWidth * this.pixelRatio, t.lineCap, t.lineJoin, t.miterLimit, this.applyPixelRatio(t.lineDash), t.lineDashOffset * this.pixelRatio];
      }, e.prototype.updateFillStyle = function (t, e, i) {
        var r = t.fillStyle;
        "string" == typeof r && t.currentFillStyle == r || (void 0 !== r && this.instructions.push(e.call(this, t, i)), t.currentFillStyle = r);
      }, e.prototype.updateStrokeStyle = function (t, e) {
        var i = t.strokeStyle,
            r = t.lineCap,
            n = t.lineDash,
            o = t.lineDashOffset,
            s = t.lineJoin,
            a = t.lineWidth,
            h = t.miterLimit;
        (t.currentStrokeStyle != i || t.currentLineCap != r || n != t.currentLineDash && !Z(t.currentLineDash, n) || t.currentLineDashOffset != o || t.currentLineJoin != s || t.currentLineWidth != a || t.currentMiterLimit != h) && (void 0 !== i && e.call(this, t), t.currentStrokeStyle = i, t.currentLineCap = r, t.currentLineDash = n, t.currentLineDashOffset = o, t.currentLineJoin = s, t.currentLineWidth = a, t.currentMiterLimit = h);
      }, e.prototype.endGeometry = function (t, e) {
        this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
        var i = [xa.END_GEOMETRY, e];
        this.instructions.push(i), this.hitDetectionInstructions.push(i);
      }, e.prototype.getBufferedMaxExtent = function () {
        if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = it(this.maxExtent), this.maxLineWidth > 0)) {
          var t = this.resolution * (this.maxLineWidth + 1) / 2;
          et(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
        }

        return this.bufferedMaxExtent_;
      }, e;
    }(Vs),
        wa = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i, r, n, o, s), this.declutterGroup_ = null, this.hitDetectionImage_ = null, this.image_ = null, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawCoordinates_ = function (t, e, i, r) {
        return this.appendFlatCoordinates(t, e, i, r, !1, !1);
      }, e.prototype.drawPoint = function (t, e) {
        if (this.image_) {
          this.beginGeometry(t, e);
          var i = t.getFlatCoordinates(),
              r = t.getStride(),
              n = this.coordinates.length,
              o = this.drawCoordinates_(i, 0, i.length, r);
          this.instructions.push([xa.DRAW_IMAGE, n, o, this.image_, this.anchorX_, this.anchorY_, this.declutterGroup_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_ * this.pixelRatio, this.width_]), this.hitDetectionInstructions.push([xa.DRAW_IMAGE, n, o, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.declutterGroup_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_]), this.endGeometry(t, e);
        }
      }, e.prototype.drawMultiPoint = function (t, e) {
        if (this.image_) {
          this.beginGeometry(t, e);
          var i = t.getFlatCoordinates(),
              r = t.getStride(),
              n = this.coordinates.length,
              o = this.drawCoordinates_(i, 0, i.length, r);
          this.instructions.push([xa.DRAW_IMAGE, n, o, this.image_, this.anchorX_, this.anchorY_, this.declutterGroup_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_ * this.pixelRatio, this.width_]), this.hitDetectionInstructions.push([xa.DRAW_IMAGE, n, o, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.declutterGroup_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_]), this.endGeometry(t, e);
        }
      }, e.prototype.finish = function () {
        this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0;
      }, e.prototype.setImageStyle = function (t, e) {
        var i = t.getAnchor(),
            r = t.getSize(),
            n = t.getHitDetectionImage(1),
            o = t.getImage(1),
            s = t.getOrigin();
        this.anchorX_ = i[0], this.anchorY_ = i[1], this.declutterGroup_ = e, this.hitDetectionImage_ = n, this.image_ = o, this.height_ = r[1], this.opacity_ = t.getOpacity(), this.originX_ = s[0], this.originY_ = s[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScale(), this.width_ = r[0];
      }, e;
    }(Ra),
        Ia = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i, r, n, o, s);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawFlatCoordinates_ = function (t, e, i, r) {
        var n = this.coordinates.length,
            o = this.appendFlatCoordinates(t, e, i, r, !1, !1),
            s = [xa.MOVE_TO_LINE_TO, n, o];
        return this.instructions.push(s), this.hitDetectionInstructions.push(s), i;
      }, e.prototype.drawLineString = function (t, e) {
        var i = this.state,
            r = i.strokeStyle,
            n = i.lineWidth;

        if (void 0 !== r && void 0 !== n) {
          this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push([xa.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, i.lineDash, i.lineDashOffset], va);
          var o = t.getFlatCoordinates(),
              s = t.getStride();
          this.drawFlatCoordinates_(o, 0, o.length, s), this.hitDetectionInstructions.push(ya), this.endGeometry(t, e);
        }
      }, e.prototype.drawMultiLineString = function (t, e) {
        var i = this.state,
            r = i.strokeStyle,
            n = i.lineWidth;

        if (void 0 !== r && void 0 !== n) {
          this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push([xa.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, i.lineDash, i.lineDashOffset], va);

          for (var o = t.getEnds(), s = t.getFlatCoordinates(), a = t.getStride(), h = 0, l = 0, u = o.length; l < u; ++l) {
            h = this.drawFlatCoordinates_(s, h, o[l], a);
          }

          this.hitDetectionInstructions.push(ya), this.endGeometry(t, e);
        }
      }, e.prototype.finish = function () {
        var t = this.state;
        void 0 != t.lastStroke && t.lastStroke != this.coordinates.length && this.instructions.push(ya), this.reverseHitDetectionInstructions(), this.state = null;
      }, e.prototype.applyStroke = function (e) {
        void 0 != e.lastStroke && e.lastStroke != this.coordinates.length && (this.instructions.push(ya), e.lastStroke = this.coordinates.length), e.lastStroke = 0, t.prototype.applyStroke.call(this, e), this.instructions.push(va);
      }, e;
    }(Ra),
        La = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i, r, n, o, s);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawFlatCoordinatess_ = function (t, e, i, r) {
        var n = this.state,
            o = void 0 !== n.fillStyle,
            s = void 0 != n.strokeStyle,
            a = i.length;
        this.instructions.push(va), this.hitDetectionInstructions.push(va);

        for (var h = 0; h < a; ++h) {
          var l = i[h],
              u = this.coordinates.length,
              p = this.appendFlatCoordinates(t, e, l, r, !0, !s),
              c = [xa.MOVE_TO_LINE_TO, u, p];
          this.instructions.push(c), this.hitDetectionInstructions.push(c), s && (this.instructions.push(ma), this.hitDetectionInstructions.push(ma)), e = l;
        }

        return o && (this.instructions.push(ga), this.hitDetectionInstructions.push(ga)), s && (this.instructions.push(ya), this.hitDetectionInstructions.push(ya)), e;
      }, e.prototype.drawCircle = function (t, e) {
        var i = this.state,
            r = i.fillStyle,
            n = i.strokeStyle;

        if (void 0 !== r || void 0 !== n) {
          this.setFillStrokeStyles_(t), this.beginGeometry(t, e), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([xa.SET_FILL_STYLE, dr(ws)]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([xa.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, i.lineDash, i.lineDashOffset]);
          var o = t.getFlatCoordinates(),
              s = t.getStride(),
              a = this.coordinates.length;
          this.appendFlatCoordinates(o, 0, o.length, s, !1, !1);
          var h = [xa.CIRCLE, a];
          this.instructions.push(va, h), this.hitDetectionInstructions.push(va, h), this.hitDetectionInstructions.push(ga), void 0 !== i.fillStyle && this.instructions.push(ga), void 0 !== i.strokeStyle && (this.instructions.push(ya), this.hitDetectionInstructions.push(ya)), this.endGeometry(t, e);
        }
      }, e.prototype.drawPolygon = function (t, e) {
        var i = this.state,
            r = i.fillStyle,
            n = i.strokeStyle;

        if (void 0 !== r || void 0 !== n) {
          this.setFillStrokeStyles_(t), this.beginGeometry(t, e), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([xa.SET_FILL_STYLE, dr(ws)]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([xa.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, i.lineDash, i.lineDashOffset]);
          var o = t.getEnds(),
              s = t.getOrientedFlatCoordinates(),
              a = t.getStride();
          this.drawFlatCoordinatess_(s, 0, o, a), this.endGeometry(t, e);
        }
      }, e.prototype.drawMultiPolygon = function (t, e) {
        var i = this.state,
            r = i.fillStyle,
            n = i.strokeStyle;

        if (void 0 !== r || void 0 !== n) {
          this.setFillStrokeStyles_(t), this.beginGeometry(t, e), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([xa.SET_FILL_STYLE, dr(ws)]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([xa.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, i.lineDash, i.lineDashOffset]);

          for (var o = t.getEndss(), s = t.getOrientedFlatCoordinates(), a = t.getStride(), h = 0, l = 0, u = o.length; l < u; ++l) {
            h = this.drawFlatCoordinatess_(s, h, o[l], a);
          }

          this.endGeometry(t, e);
        }
      }, e.prototype.finish = function () {
        this.reverseHitDetectionInstructions(), this.state = null;
        var t = this.tolerance;
        if (0 !== t) for (var e = this.coordinates, i = 0, r = e.length; i < r; ++i) {
          e[i] = hi(e[i], t);
        }
      }, e.prototype.setFillStrokeStyles_ = function (t) {
        var e = this.state;
        void 0 !== e.fillStyle && this.updateFillStyle(e, this.createFill, t), void 0 !== e.strokeStyle && this.updateStrokeStyle(e, this.applyStroke);
      }, e;
    }(Ra);

    function Oa(t, e, i, r, n) {
      var o,
          s,
          a,
          h,
          l,
          u,
          p,
          c,
          d,
          f = i,
          _ = i,
          g = 0,
          y = 0,
          v = i;

      for (o = i; o < r; o += n) {
        var m = e[o],
            x = e[o + 1];
        void 0 !== h && (c = m - h, d = x - l, a = Math.sqrt(c * c + d * d), void 0 !== u && (y += s, Math.acos((u * c + p * d) / (s * a)) > t && (y > g && (g = y, f = v, _ = o), y = 0, v = o - n)), s = a, u = c, p = d), h = m, l = x;
      }

      return (y += a) > g ? [v, o] : [f, _];
    }

    var Pa = {
      Circle: La,
      Default: Ra,
      Image: wa,
      LineString: Ia,
      Polygon: La,
      Text: function (t) {
        function e(e, i, r, n, o, s) {
          t.call(this, e, i, r, n, o, s), this.declutterGroup_, this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.widths_ = {}, Ps.prune();
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawText = function (t, e) {
          var i = this.textFillState_,
              r = this.textStrokeState_,
              n = this.textState_;

          if ("" !== this.text_ && n && (i || r)) {
            var o,
                s,
                a = this.coordinates.length,
                h = t.getType(),
                l = null,
                u = 2,
                p = 2;

            if (n.placement === Tr) {
              if (!Pt(this.getBufferedMaxExtent(), t.getExtent())) return;
              var c;
              if (l = t.getFlatCoordinates(), p = t.getStride(), h == Nt.LINE_STRING) c = [l.length];else if (h == Nt.MULTI_LINE_STRING) c = t.getEnds();else if (h == Nt.POLYGON) c = t.getEnds().slice(0, 1);else if (h == Nt.MULTI_POLYGON) {
                var d = t.getEndss();

                for (c = [], o = 0, s = d.length; o < s; ++o) {
                  c.push(d[o][0]);
                }
              }
              this.beginGeometry(t, e);

              for (var f, _ = n.textAlign, g = 0, y = 0, v = c.length; y < v; ++y) {
                if (void 0 == _) {
                  var m = Oa(n.maxAngle, l, g, c[y], p);
                  g = m[0], f = m[1];
                } else f = c[y];

                for (o = g; o < f; o += p) {
                  this.coordinates.push(l[o], l[o + 1]);
                }

                u = this.coordinates.length, g = c[y], this.drawChars_(a, u, this.declutterGroup_), a = u;
              }

              this.endGeometry(t, e);
            } else {
              var x = this.getImage(this.text_, this.textKey_, this.fillKey_, this.strokeKey_),
                  E = x.width / this.pixelRatio;

              switch (h) {
                case Nt.POINT:
                case Nt.MULTI_POINT:
                  u = (l = t.getFlatCoordinates()).length;
                  break;

                case Nt.LINE_STRING:
                  l = t.getFlatMidpoint();
                  break;

                case Nt.CIRCLE:
                  l = t.getCenter();
                  break;

                case Nt.MULTI_LINE_STRING:
                  u = (l = t.getFlatMidpoints()).length;
                  break;

                case Nt.POLYGON:
                  if (l = t.getFlatInteriorPoint(), !n.overflow && l[2] / this.resolution < E) return;
                  p = 3;
                  break;

                case Nt.MULTI_POLYGON:
                  var S = t.getFlatInteriorPoints();

                  for (l = [], o = 0, s = S.length; o < s; o += 3) {
                    (n.overflow || S[o + 2] / this.resolution >= E) && l.push(S[o], S[o + 1]);
                  }

                  if (0 == (u = l.length)) return;
              }

              u = this.appendFlatCoordinates(l, 0, u, p, !1, !1), (n.backgroundFill || n.backgroundStroke) && (this.setFillStrokeStyle(n.backgroundFill, n.backgroundStroke), n.backgroundFill && (this.updateFillStyle(this.state, this.createFill, t), this.hitDetectionInstructions.push(this.createFill(this.state, t))), n.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e), this.drawTextImage_(x, a, u), this.endGeometry(t, e);
            }
          }
        }, e.prototype.getImage = function (t, e, i, r) {
          var n,
              o = r + e + t + i + this.pixelRatio;

          if (!Ps.containsKey(o)) {
            var s = r ? this.strokeStates[r] || this.textStrokeState_ : null,
                a = i ? this.fillStates[i] || this.textFillState_ : null,
                h = this.textStates[e] || this.textState_,
                l = this.pixelRatio,
                u = h.scale * l,
                p = Sa[h.textAlign || "center"],
                c = r && s.lineWidth ? s.lineWidth : 0,
                d = t.split("\n"),
                f = d.length,
                _ = [],
                g = function (t, e, i) {
              for (var r = e.length, n = 0, o = 0; o < r; ++o) {
                var s = Ds(t, e[o]);
                n = Math.max(n, s), i.push(s);
              }

              return n;
            }(h.font, d, _),
                y = Gs(h.font),
                v = y * f,
                m = g + c,
                x = Jn(Math.ceil(m * u), Math.ceil((v + c) * u));

            n = x.canvas, Ps.set(o, n), 1 != u && x.scale(u, u), x.font = h.font, r && (x.strokeStyle = s.strokeStyle, x.lineWidth = c, x.lineCap = s.lineCap, x.lineJoin = s.lineJoin, x.miterLimit = s.miterLimit, ki && s.lineDash.length && (x.setLineDash(s.lineDash), x.lineDashOffset = s.lineDashOffset)), i && (x.fillStyle = a.fillStyle), x.textBaseline = "middle", x.textAlign = "center";
            var E,
                S = .5 - p,
                T = p * n.width / u + S * c;
            if (r) for (E = 0; E < f; ++E) {
              x.strokeText(d[E], T + S * _[E], .5 * (c + y) + E * y);
            }
            if (i) for (E = 0; E < f; ++E) {
              x.fillText(d[E], T + S * _[E], .5 * (c + y) + E * y);
            }
          }

          return Ps.get(o);
        }, e.prototype.drawTextImage_ = function (t, e, i) {
          var r = this.textState_,
              n = this.textStrokeState_,
              o = this.pixelRatio,
              s = Sa[r.textAlign || "center"],
              a = Sa[r.textBaseline],
              h = n && n.lineWidth ? n.lineWidth : 0,
              l = s * t.width / o + 2 * (.5 - s) * h,
              u = a * t.height / o + 2 * (.5 - a) * h;
          this.instructions.push([xa.DRAW_IMAGE, e, i, t, (l - this.textOffsetX_) * o, (u - this.textOffsetY_) * o, this.declutterGroup_, t.height, 1, 0, 0, this.textRotateWithView_, this.textRotation_, 1, t.width, r.padding == Os ? Os : r.padding.map(function (t) {
            return t * o;
          }), !!r.backgroundFill, !!r.backgroundStroke]), this.hitDetectionInstructions.push([xa.DRAW_IMAGE, e, i, t, (l - this.textOffsetX_) * o, (u - this.textOffsetY_) * o, this.declutterGroup_, t.height, 1, 0, 0, this.textRotateWithView_, this.textRotation_, 1 / o, t.width, r.padding, !!r.backgroundFill, !!r.backgroundStroke]);
        }, e.prototype.drawChars_ = function (t, e, i) {
          var r = this.textStrokeState_,
              n = this.textState_,
              o = this.textFillState_,
              s = this.strokeKey_;
          r && (s in this.strokeStates || (this.strokeStates[s] = {
            strokeStyle: r.strokeStyle,
            lineCap: r.lineCap,
            lineDashOffset: r.lineDashOffset,
            lineWidth: r.lineWidth,
            lineJoin: r.lineJoin,
            miterLimit: r.miterLimit,
            lineDash: r.lineDash
          }));
          var a = this.textKey_;
          this.textKey_ in this.textStates || (this.textStates[this.textKey_] = {
            font: n.font,
            textAlign: n.textAlign || "center",
            scale: n.scale
          });
          var h = this.fillKey_;
          o && (h in this.fillStates || (this.fillStates[h] = {
            fillStyle: o.fillStyle
          }));

          var l = this.pixelRatio,
              u = Sa[n.textBaseline],
              p = this.textOffsetY_ * l,
              c = this.text_,
              d = n.font,
              f = n.scale,
              _ = r ? r.lineWidth * f / 2 : 0,
              g = this.widths_[d];

          g || (this.widths_[d] = g = {}), this.instructions.push([xa.DRAW_CHARS, t, e, u, i, n.overflow, h, n.maxAngle, function (t) {
            var e = g[t];
            return e || (e = g[t] = Ds(d, t)), e * f * l;
          }, p, s, _ * l, c, a, 1]), this.hitDetectionInstructions.push([xa.DRAW_CHARS, t, e, u, i, n.overflow, h, n.maxAngle, function (t) {
            var e = g[t];
            return e || (e = g[t] = Ds(d, t)), e * f;
          }, p, s, _, c, a, 1 / l]);
        }, e.prototype.setTextStyle = function (t, e) {
          var i, r, n;

          if (t) {
            this.declutterGroup_ = e;
            var s = t.getFill();
            s ? ((r = this.textFillState_) || (r = this.textFillState_ = {}), r.fillStyle = Ys(s.getColor() || ws)) : r = this.textFillState_ = null;
            var a = t.getStroke();

            if (a) {
              (n = this.textStrokeState_) || (n = this.textStrokeState_ = {});
              var h = a.getLineDash(),
                  l = a.getLineDashOffset(),
                  u = a.getWidth(),
                  p = a.getMiterLimit();
              n.lineCap = a.getLineCap() || "round", n.lineDash = h ? h.slice() : Is, n.lineDashOffset = void 0 === l ? 0 : l, n.lineJoin = a.getLineJoin() || "round", n.lineWidth = void 0 === u ? 1 : u, n.miterLimit = void 0 === p ? 10 : p, n.strokeStyle = Ys(a.getColor() || Ls);
            } else n = this.textStrokeState_ = null;

            i = this.textState_;
            var c = t.getFont() || "10px sans-serif";
            As(c);
            var d = t.getScale();
            i.overflow = t.getOverflow(), i.font = c, i.maxAngle = t.getMaxAngle(), i.placement = t.getPlacement(), i.textAlign = t.getTextAlign(), i.textBaseline = t.getTextBaseline() || "middle", i.backgroundFill = t.getBackgroundFill(), i.backgroundStroke = t.getBackgroundStroke(), i.padding = t.getPadding() || Os, i.scale = void 0 === d ? 1 : d;

            var f = t.getOffsetX(),
                _ = t.getOffsetY(),
                g = t.getRotateWithView(),
                y = t.getRotation();

            this.text_ = t.getText() || "", this.textOffsetX_ = void 0 === f ? 0 : f, this.textOffsetY_ = void 0 === _ ? 0 : _, this.textRotateWithView_ = void 0 !== g && g, this.textRotation_ = void 0 === y ? 0 : y, this.strokeKey_ = n ? ("string" == typeof n.strokeStyle ? n.strokeStyle : o(n.strokeStyle)) + n.lineCap + n.lineDashOffset + "|" + n.lineWidth + n.lineJoin + n.miterLimit + "[" + n.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?"), this.fillKey_ = r ? "string" == typeof r.fillStyle ? r.fillStyle : "|" + o(r.fillStyle) : "";
          } else this.text_ = "";
        }, e;
      }(Ra)
    },
        ba = function (t) {
      function e(e, i, r, n, o, s, a) {
        t.call(this), this.declutterTree_ = s, this.declutterGroup_ = null, this.tolerance_ = e, this.maxExtent_ = i, this.overlaps_ = o, this.pixelRatio_ = n, this.resolution_ = r, this.renderBuffer_ = a, this.replaysByZIndex_ = {}, this.hitDetectionContext_ = Jn(1, 1), this.hitDetectionTransform_ = [1, 0, 0, 1, 0, 0];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addDeclutter = function (t) {
        var e = null;
        return this.declutterTree_ && (t ? (e = this.declutterGroup_)[4]++ : (e = this.declutterGroup_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0]).push(1)), e;
      }, e.prototype.clip = function (t, e) {
        var i = this.getClipCoords(e);
        t.beginPath(), t.moveTo(i[0], i[1]), t.lineTo(i[2], i[3]), t.lineTo(i[4], i[5]), t.lineTo(i[6], i[7]), t.clip();
      }, e.prototype.hasReplays = function (t) {
        for (var e in this.replaysByZIndex_) {
          for (var i = this.replaysByZIndex_[e], r = 0, n = t.length; r < n; ++r) {
            if (t[r] in i) return !0;
          }
        }

        return !1;
      }, e.prototype.finish = function () {
        for (var t in this.replaysByZIndex_) {
          var e = this.replaysByZIndex_[t];

          for (var i in e) {
            e[i].finish();
          }
        }
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n, o, s) {
        var a,
            h = 2 * (r = Math.round(r)) + 1,
            l = Ye(this.hitDetectionTransform_, r + .5, r + .5, 1 / e, -1 / e, -i, -t[0], -t[1]),
            u = this.hitDetectionContext_;
        u.canvas.width !== h || u.canvas.height !== h ? (u.canvas.width = h, u.canvas.height = h) : u.clearRect(0, 0, h, h), void 0 !== this.renderBuffer_ && (_t(a = [1 / 0, 1 / 0, -1 / 0, -1 / 0], t), et(a, e * (this.renderBuffer_ + r), a));

        var p,
            c,
            d = function (t) {
          if (void 0 !== Ma[t]) return Ma[t];

          for (var e = 2 * t + 1, i = new Array(e), r = 0; r < e; r++) {
            i[r] = new Array(e);
          }

          var n = t,
              o = 0,
              s = 0;

          for (; n >= o;) {
            Fa(i, t + n, t + o), Fa(i, t + o, t + n), Fa(i, t - o, t + n), Fa(i, t - n, t + o), Fa(i, t - n, t - o), Fa(i, t - o, t - n), Fa(i, t + o, t - n), Fa(i, t + n, t - o), 2 * ((s += 1 + 2 * ++o) - n) + 1 > 0 && (s += 1 - 2 * (n -= 1));
          }

          return Ma[t] = i, i;
        }(r);

        function f(t) {
          for (var e = u.getImageData(0, 0, h, h).data, i = 0; i < h; i++) {
            for (var r = 0; r < h; r++) {
              if (d[i][r] && e[4 * (r * h + i) + 3] > 0) {
                var n = void 0;
                return (!p || c != da.IMAGE && c != da.TEXT || -1 !== p.indexOf(t)) && (n = o(t)), n || void u.clearRect(0, 0, h, h);
              }
            }
          }
        }

        this.declutterTree_ && (p = this.declutterTree_.all().map(function (t) {
          return t.value;
        }));

        var _,
            g,
            y,
            v,
            m,
            x = Object.keys(this.replaysByZIndex_).map(Number);

        for (x.sort(V), _ = x.length - 1; _ >= 0; --_) {
          var E = x[_].toString();

          for (y = this.replaysByZIndex_[E], g = Ea.length - 1; g >= 0; --g) {
            if (void 0 !== (v = y[c = Ea[g]])) if (!s || c != da.IMAGE && c != da.TEXT) {
              if (m = v.replayHitDetection(u, l, i, n, f, a)) return m;
            } else {
              var S = s[E];
              S ? S.push(v, l.slice(0)) : s[E] = [v, l.slice(0)];
            }
          }
        }
      }, e.prototype.getClipCoords = function (t) {
        var e = this.maxExtent_,
            i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = [i, r, i, o, n, o, n, r];
        return Gt(s, 0, 8, 2, t, s), s;
      }, e.prototype.getReplay = function (t, e) {
        var i = void 0 !== t ? t.toString() : "0",
            r = this.replaysByZIndex_[i];
        void 0 === r && (r = {}, this.replaysByZIndex_[i] = r);
        var n = r[e];
        void 0 === n && (n = new (0, Pa[e])(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_, this.overlaps_, this.declutterTree_), r[e] = n);
        return n;
      }, e.prototype.getReplays = function () {
        return this.replaysByZIndex_;
      }, e.prototype.isEmpty = function () {
        return d(this.replaysByZIndex_);
      }, e.prototype.replay = function (t, e, i, r, n, o, s) {
        var a = Object.keys(this.replaysByZIndex_).map(Number);
        a.sort(V), t.save(), this.clip(t, e);
        var h,
            l,
            u,
            p,
            c,
            d,
            f = o || Ea;

        for (h = 0, l = a.length; h < l; ++h) {
          var _ = a[h].toString();

          for (c = this.replaysByZIndex_[_], u = 0, p = f.length; u < p; ++u) {
            var g = f[u];
            if (d = c[g], void 0 !== d) if (!s || g != da.IMAGE && g != da.TEXT) d.replay(t, e, i, r, n);else {
              var y = s[_];
              y ? y.push(d, e.slice(0)) : s[_] = [d, e.slice(0)];
            }
          }
        }

        t.restore();
      }, e;
    }(ca),
        Ma = {
      0: [[!0]]
    };

    function Fa(t, e, i) {
      var r,
          n = Math.floor(t.length / 2);
      if (e >= n) for (r = n; r < e; r++) {
        t[r][i] = !0;
      } else if (e < n) for (r = e + 1; r < n; r++) {
        t[r][i] = !0;
      }
    }

    var Aa = ba,
        Na = .5,
        Ga = {
      Point: function Point(t, e, i, r) {
        var n = i.getImage();

        if (n) {
          if (n.getImageState() != xs.LOADED) return;
          var o = t.getReplay(i.getZIndex(), da.IMAGE);
          o.setImageStyle(n, t.addDeclutter(!1)), o.drawPoint(e, r);
        }

        var s = i.getText();

        if (s) {
          var a = t.getReplay(i.getZIndex(), da.TEXT);
          a.setTextStyle(s, t.addDeclutter(!!n)), a.drawText(e, r);
        }
      },
      LineString: function LineString(t, e, i, r) {
        var n = i.getStroke();

        if (n) {
          var o = t.getReplay(i.getZIndex(), da.LINE_STRING);
          o.setFillStrokeStyle(null, n), o.drawLineString(e, r);
        }

        var s = i.getText();

        if (s) {
          var a = t.getReplay(i.getZIndex(), da.TEXT);
          a.setTextStyle(s, t.addDeclutter(!1)), a.drawText(e, r);
        }
      },
      Polygon: function Polygon(t, e, i, r) {
        var n = i.getFill(),
            o = i.getStroke();

        if (n || o) {
          var s = t.getReplay(i.getZIndex(), da.POLYGON);
          s.setFillStrokeStyle(n, o), s.drawPolygon(e, r);
        }

        var a = i.getText();

        if (a) {
          var h = t.getReplay(i.getZIndex(), da.TEXT);
          h.setTextStyle(a, t.addDeclutter(!1)), h.drawText(e, r);
        }
      },
      MultiPoint: function MultiPoint(t, e, i, r) {
        var n = i.getImage();

        if (n) {
          if (n.getImageState() != xs.LOADED) return;
          var o = t.getReplay(i.getZIndex(), da.IMAGE);
          o.setImageStyle(n, t.addDeclutter(!1)), o.drawMultiPoint(e, r);
        }

        var s = i.getText();

        if (s) {
          var a = t.getReplay(i.getZIndex(), da.TEXT);
          a.setTextStyle(s, t.addDeclutter(!!n)), a.drawText(e, r);
        }
      },
      MultiLineString: function MultiLineString(t, e, i, r) {
        var n = i.getStroke();

        if (n) {
          var o = t.getReplay(i.getZIndex(), da.LINE_STRING);
          o.setFillStrokeStyle(null, n), o.drawMultiLineString(e, r);
        }

        var s = i.getText();

        if (s) {
          var a = t.getReplay(i.getZIndex(), da.TEXT);
          a.setTextStyle(s, t.addDeclutter(!1)), a.drawText(e, r);
        }
      },
      MultiPolygon: function MultiPolygon(t, e, i, r) {
        var n = i.getFill(),
            o = i.getStroke();

        if (o || n) {
          var s = t.getReplay(i.getZIndex(), da.POLYGON);
          s.setFillStrokeStyle(n, o), s.drawMultiPolygon(e, r);
        }

        var a = i.getText();

        if (a) {
          var h = t.getReplay(i.getZIndex(), da.TEXT);
          h.setTextStyle(a, t.addDeclutter(!1)), h.drawText(e, r);
        }
      },
      GeometryCollection: function GeometryCollection(t, e, i, r) {
        var n,
            o,
            s = e.getGeometriesArray();

        for (n = 0, o = s.length; n < o; ++n) {
          var a = Ga[s[n].getType()];
          a(t, s[n], i, r);
        }
      },
      Circle: function Circle(t, e, i, r) {
        var n = i.getFill(),
            o = i.getStroke();

        if (n || o) {
          var s = t.getReplay(i.getZIndex(), da.CIRCLE);
          s.setFillStrokeStyle(n, o), s.drawCircle(e, r);
        }

        var a = i.getText();

        if (a) {
          var h = t.getReplay(i.getZIndex(), da.TEXT);
          h.setTextStyle(a, t.addDeclutter(!1)), h.drawText(e, r);
        }
      }
    };

    function Da(t, e) {
      return parseInt(o(t), 10) - parseInt(o(e), 10);
    }

    function ka(t, e) {
      var i = ja(t, e);
      return i * i;
    }

    function ja(t, e) {
      return Na * t / e;
    }

    function Ua(t, e, i, r, n, o) {
      var s = !1,
          a = i.getImage();

      if (a) {
        var h = a.getImageState();
        h == xs.LOADED || h == xs.ERROR ? a.unlistenImageChange(n, o) : (h == xs.IDLE && a.load(), h = a.getImageState(), a.listenImageChange(n, o), s = !0);
      }

      return function (t, e, i, r) {
        var n = i.getGeometryFunction()(e);
        if (!n) return;
        var o = n.getSimplifiedGeometry(r);
        if (i.getRenderer()) !function t(e, i, r, n) {
          if (i.getType() == Nt.GEOMETRY_COLLECTION) {
            for (var o = i.getGeometries(), s = 0, a = o.length; s < a; ++s) {
              t(e, o[s], r, n);
            }

            return;
          }

          var h = e.getReplay(r.getZIndex(), da.DEFAULT);
          h.drawCustom(i, n, r.getRenderer());
        }(t, o, i, e);else {
          var s = Ga[o.getType()];
          s(t, o, i, e);
        }
      }(t, e, i, r), s;
    }

    var Ya = function (t) {
      function e(e) {
        t.call(this, e), this.declutterTree_ = e.getDeclutter() ? ua()(9, void 0) : null, this.dirty_ = !1, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.context = Jn(), v(Ps, M.CLEAR, this.handleFontsChanged_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        x(Ps, M.CLEAR, this.handleFontsChanged_, this), t.prototype.disposeInternal.call(this);
      }, e.prototype.compose = function (t, e, i) {
        var r = e.extent,
            n = e.pixelRatio,
            o = i.managed ? e.skippedFeatureUids : {},
            s = e.viewState,
            a = s.projection,
            h = s.rotation,
            l = a.getExtent(),
            u = this.getLayer().getSource(),
            p = this.getTransform(e, 0),
            c = i.extent,
            d = void 0 !== c;
        d && this.clip(t, e, c);
        var f = this.replayGroup_;

        if (f && !f.isEmpty()) {
          this.declutterTree_ && this.declutterTree_.clear();

          var _,
              g = this.getLayer(),
              y = 0,
              v = 0,
              m = 1 !== i.opacity,
              x = g.hasListener(ur.RENDER);

          if (m || x) {
            var E = t.canvas.width,
                S = t.canvas.height;

            if (h) {
              var T = Math.round(Math.sqrt(E * E + S * S));
              y = (T - E) / 2, v = (T - S) / 2, E = S = T;
            }

            this.context.canvas.width = E, this.context.canvas.height = S, _ = this.context;
          } else _ = t;

          var C = _.globalAlpha;
          m || (_.globalAlpha = i.opacity), _ != t && _.translate(y, v);
          var R = e.viewHints,
              w = !(R[kn] || R[jn]),
              I = e.size[0] * n,
              L = e.size[1] * n;

          if (ks(_, -h, I / 2, L / 2), f.replay(_, p, h, o, w), u.getWrapX() && a.canWrapX() && !ot(l, r)) {
            for (var O, P = r[0], b = Ot(l), M = 0; P < l[0];) {
              O = b * --M, p = this.getTransform(e, O), f.replay(_, p, h, o, w), P += b;
            }

            for (M = 0, P = r[2]; P > l[2];) {
              O = b * ++M, p = this.getTransform(e, O), f.replay(_, p, h, o, w), P -= b;
            }
          }

          if (ks(_, h, I / 2, L / 2), x && this.dispatchRenderEvent(_, e, p), _ != t) {
            if (m) {
              var F = t.globalAlpha;
              t.globalAlpha = i.opacity, t.drawImage(_.canvas, -y, -v), t.globalAlpha = F;
            } else t.drawImage(_.canvas, -y, -v);

            _.translate(-y, -v);
          }

          m || (_.globalAlpha = C);
        }

        d && t.restore();
      }, e.prototype.composeFrame = function (t, e, i) {
        var r = this.getTransform(t, 0);
        this.preCompose(i, t, r), this.compose(i, t, e), this.postCompose(i, t, e, r);
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n) {
        if (this.replayGroup_) {
          var s = e.viewState.resolution,
              a = e.viewState.rotation,
              h = this.getLayer(),
              l = {};
          return this.replayGroup_.forEachFeatureAtCoordinate(t, s, a, i, {}, function (t) {
            var e = o(t);
            if (!(e in l)) return l[e] = !0, r.call(n, t, h);
          }, null);
        }
      }, e.prototype.handleFontsChanged_ = function (t) {
        var e = this.getLayer();
        e.getVisible() && this.replayGroup_ && e.changed();
      }, e.prototype.handleStyleImageChange_ = function (t) {
        this.renderIfReadyAndVisible();
      }, e.prototype.prepareFrame = function (t, e) {
        var i = this.getLayer(),
            r = i.getSource(),
            n = t.viewHints[kn],
            o = t.viewHints[jn],
            s = i.getUpdateWhileAnimating(),
            a = i.getUpdateWhileInteracting();
        if (!this.dirty_ && !s && n || !a && o) return !0;

        var h = t.extent,
            l = t.viewState,
            u = l.projection,
            p = l.resolution,
            c = t.pixelRatio,
            d = i.getRevision(),
            f = i.getRenderBuffer(),
            _ = i.getRenderOrder();

        void 0 === _ && (_ = Da);
        var g = et(h, f * p),
            y = l.projection.getExtent();

        if (r.getWrapX() && l.projection.canWrapX() && !ot(y, t.extent)) {
          var v = Ot(y),
              m = Math.max(Ot(g) / 2, v);
          g[0] = y[0] - m, g[2] = y[2] + m;
        }

        if (!this.dirty_ && this.renderedResolution_ == p && this.renderedRevision_ == d && this.renderedRenderOrder_ == _ && ot(this.renderedExtent_, g)) return this.replayGroupChanged = !1, !0;
        this.replayGroup_ = null, this.dirty_ = !1;
        var x = new Aa(ja(p, c), g, p, c, r.getOverlaps(), this.declutterTree_, i.getRenderBuffer());
        r.loadFeatures(g, p, u);

        var E = function (t) {
          var e,
              r = t.getStyleFunction() || i.getStyleFunction();

          if (r && (e = r(t, p)), e) {
            var n = this.renderFeature(t, p, c, e, x);
            this.dirty_ = this.dirty_ || n;
          }
        }.bind(this);

        if (_) {
          var S = [];
          r.forEachFeatureInExtent(g, function (t) {
            S.push(t);
          }), S.sort(_);

          for (var T = 0, C = S.length; T < C; ++T) {
            E(S[T]);
          }
        } else r.forEachFeatureInExtent(g, E);

        return x.finish(), this.renderedResolution_ = p, this.renderedRevision_ = d, this.renderedRenderOrder_ = _, this.renderedExtent_ = g, this.replayGroup_ = x, this.replayGroupChanged = !0, !0;
      }, e.prototype.renderFeature = function (t, e, i, r, n) {
        if (!r) return !1;
        var o = !1;
        if (Array.isArray(r)) for (var s = 0, a = r.length; s < a; ++s) {
          o = Ua(n, t, r[s], ka(e, i), this.handleStyleImageChange_, this) || o;
        } else o = Ua(n, t, r, ka(e, i), this.handleStyleImageChange_, this);
        return o;
      }, e;
    }(ta);

    Ya.handles = function (t) {
      return t.getType() === Ss.VECTOR;
    }, Ya.create = function (t, e) {
      return new Ya(e);
    };

    var Ba = Ya,
        Va = {
      IMAGE: "image",
      HYBRID: "hybrid",
      VECTOR: "vector"
    },
        Xa = {
      image: [da.POLYGON, da.CIRCLE, da.LINE_STRING, da.IMAGE, da.TEXT],
      hybrid: [da.POLYGON, da.LINE_STRING]
    },
        za = {
      image: [da.DEFAULT],
      hybrid: [da.IMAGE, da.TEXT, da.DEFAULT],
      vector: Ea
    },
        Wa = function (t) {
      function e(e) {
        t.call(this, e, !0), this.declutterTree_ = e.getDeclutter() ? ua()(9, void 0) : null, this.dirty_ = !1, this.renderedLayerRevision_, this.tmpTransform_ = [1, 0, 0, 1, 0, 0];
        var i = e.getRenderMode();
        this.zDirection = i === Va.VECTOR ? 1 : 0, i !== Va.VECTOR && (this.context = Jn()), v(Ps, M.CLEAR, this.handleFontsChanged_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        x(Ps, M.CLEAR, this.handleFontsChanged_, this), t.prototype.disposeInternal.call(this);
      }, e.prototype.getTile = function (e, i, r, n, o) {
        var s = t.prototype.getTile.call(this, e, i, r, n, o);
        return s.getState() === On.LOADED && (this.createReplayGroup_(s, n, o), this.context && this.renderTileImage_(s, n, o)), s;
      }, e.prototype.getTileImage = function (t) {
        var e = this.getLayer();
        return t.getImage(e);
      }, e.prototype.prepareFrame = function (e, i) {
        var r = this.getLayer().getRevision();
        return this.renderedLayerRevision_ != r && (this.renderedTiles.length = 0), this.renderedLayerRevision_ = r, t.prototype.prepareFrame.call(this, e, i);
      }, e.prototype.createReplayGroup_ = function (t, e, i) {
        var r = this,
            n = this.getLayer(),
            o = n.getRevision(),
            s = n.getRenderOrder() || null,
            a = t.getReplayState(n);

        if (a.dirty || a.renderedRevision != o || a.renderedRenderOrder != s) {
          for (var h = n.getSource(), l = h.getTileGrid(), u = h.getTileGridForProjection(i).getResolution(t.tileCoord[0]), p = t.extent, c = function c(o, _c2) {
            var d = t.getTile(t.tileKeys[o]);

            if (d.getState() == On.LOADED) {
              var f = d.tileCoord,
                  _ = l.getTileCoordExtent(f),
                  g = wt(p, _),
                  y = dt(_, g) ? null : et(g, n.getRenderBuffer() * u, r.tmpExtent),
                  v = d.getProjection(),
                  m = !1;

              Ie(i, v) || (m = !0, d.setProjection(i)), a.dirty = !1;

              var x = new Aa(0, g, u, e, h.getOverlaps(), r.declutterTree_, n.getRenderBuffer()),
                  E = ka(u, e),
                  S = function S(t) {
                var e,
                    i = t.getStyleFunction() || n.getStyleFunction();

                if (i && (e = i(t, u)), e) {
                  var r = this.renderFeature(t, E, e, x);
                  this.dirty_ = this.dirty_ || r, a.dirty = a.dirty || r;
                }
              },
                  T = d.getFeatures();

              s && s !== a.renderedRenderOrder && T.sort(s);

              for (var C = 0, R = T.length; C < R; ++C) {
                var w = T[C];
                m && (v.getUnits() == $t.TILE_PIXELS && (v.setWorldExtent(_), v.setExtent(d.getExtent())), w.getGeometry().transform(v, i)), y && !Pt(y, w.getGeometry().getExtent()) || S.call(r, w);
              }

              x.finish(), d.setReplayGroup(n, t.tileCoord.toString(), x);
            }
          }, d = 0, f = t.tileKeys.length; d < f; ++d) {
            c(d);
          }

          a.renderedRevision = o, a.renderedRenderOrder = s;
        }
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n) {
        var s = e.viewState.resolution,
            a = e.viewState.rotation;
        i = void 0 == i ? 0 : i;
        var h,
            l,
            u,
            p,
            c = this.getLayer(),
            d = {},
            f = this.renderedTiles;

        for (u = 0, p = f.length; u < p; ++u) {
          var _ = f[u];
          if (nt(h = et(_.extent, i * s, h), t)) for (var g = 0, y = _.tileKeys.length; g < y; ++g) {
            var v = _.getTile(_.tileKeys[g]);

            if (v.getState() == On.LOADED) {
              var m = v.getReplayGroup(c, _.tileCoord.toString());
              l = l || m.forEachFeatureAtCoordinate(t, s, a, i, {}, function (t) {
                var e = o(t);
                if (!(e in d)) return d[e] = !0, r.call(n, t, c);
              }, null);
            }
          }
        }

        return l;
      }, e.prototype.getReplayTransform_ = function (t, e) {
        var i = this.getLayer().getSource().getTileGrid(),
            r = t.tileCoord,
            n = i.getResolution(r[0]),
            o = e.viewState,
            s = e.pixelRatio,
            a = o.resolution / s,
            h = i.getTileCoordExtent(r, this.tmpExtent),
            l = o.center,
            u = It(h),
            p = e.size,
            c = Math.round(s * p[0] / 2),
            d = Math.round(s * p[1] / 2);
        return Ye(this.tmpTransform_, c, d, n / a, n / a, o.rotation, (u[0] - l[0]) / n, (l[1] - u[1]) / n);
      }, e.prototype.handleFontsChanged_ = function (t) {
        var e = this.getLayer();
        e.getVisible() && void 0 !== this.renderedLayerRevision_ && e.changed();
      }, e.prototype.handleStyleImageChange_ = function (t) {
        this.renderIfReadyAndVisible();
      }, e.prototype.postCompose = function (e, i, r) {
        var n = this.getLayer(),
            o = n.getRenderMode();

        if (o != Va.IMAGE) {
          var s,
              a,
              h = n.getDeclutter() ? {} : null,
              l = n.getSource(),
              u = za[o],
              p = i.pixelRatio,
              c = i.viewState.rotation,
              d = i.size;
          c && ks(e, -c, s = Math.round(p * d[0] / 2), a = Math.round(p * d[1] / 2)), h && this.declutterTree_.clear();

          for (var f = i.viewHints, _ = !(f[kn] || f[jn]), g = this.renderedTiles, y = l.getTileGridForProjection(i.viewState.projection), v = [], m = [], x = g.length - 1; x >= 0; --x) {
            var E = g[x];
            if (E.getState() != On.ABORT) for (var S = E.tileCoord, T = y.getTileCoordExtent(S, this.tmpExtent)[0] - E.extent[0], C = void 0, R = 0, w = E.tileKeys.length; R < w; ++R) {
              var I = E.getTile(E.tileKeys[R]);

              if (I.getState() == On.LOADED) {
                var L = I.getReplayGroup(n, S.toString());

                if (L && L.hasReplays(u)) {
                  C || (C = this.getTransform(i, T));
                  var O = I.tileCoord[0],
                      P = L.getClipCoords(C);
                  e.save(), e.globalAlpha = r.opacity;

                  for (var b = 0, M = v.length; b < M; ++b) {
                    var F = v[b];
                    O < m[b] && (e.beginPath(), e.moveTo(P[0], P[1]), e.lineTo(P[2], P[3]), e.lineTo(P[4], P[5]), e.lineTo(P[6], P[7]), e.moveTo(F[6], F[7]), e.lineTo(F[4], F[5]), e.lineTo(F[2], F[3]), e.lineTo(F[0], F[1]), e.clip());
                  }

                  L.replay(e, C, c, {}, _, u, h), e.restore(), v.push(P), m.push(O);
                }
              }
            }
          }

          h && function (t, e, i, r) {
            for (var n = Object.keys(t).map(Number).sort(V), o = {}, s = 0, a = n.length; s < a; ++s) {
              for (var h = t[n[s].toString()], l = 0, u = h.length; l < u;) {
                var p = h[l++],
                    c = h[l++];
                p.replay(e, c, i, o, r);
              }
            }
          }(h, e, c, _), c && ks(e, c, s, a);
        }

        t.prototype.postCompose.call(this, e, i, r);
      }, e.prototype.renderFeature = function (t, e, i, r) {
        if (!i) return !1;
        var n = !1;
        if (Array.isArray(i)) for (var o = 0, s = i.length; o < s; ++o) {
          n = Ua(r, t, i[o], e, this.handleStyleImageChange_, this) || n;
        } else n = Ua(r, t, i, e, this.handleStyleImageChange_, this);
        return n;
      }, e.prototype.renderTileImage_ = function (t, e, i) {
        var r = this.getLayer(),
            n = t.getReplayState(r),
            o = r.getRevision(),
            s = Xa[r.getRenderMode()];

        if (s && n.renderedTileRevision !== o) {
          n.renderedTileRevision = o;
          var a = t.wrappedTileCoord,
              h = a[0],
              l = r.getSource(),
              u = l.getTileGridForProjection(i),
              p = u.getResolution(h),
              c = t.getContext(r),
              d = l.getTilePixelSize(h, e, i);
          c.canvas.width = d[0], c.canvas.height = d[1];

          for (var f = u.getTileCoordExtent(a, this.tmpExtent), _ = 0, g = t.tileKeys.length; _ < g; ++_) {
            var y = t.getTile(t.tileKeys[_]);

            if (y.getState() == On.LOADED) {
              var v = e / p,
                  m = Fe(this.tmpTransform_);
              je(m, v, -v), Ue(m, -f[0], -f[3]), y.getReplayGroup(r, t.tileCoord.toString()).replay(c, m, 0, {}, !0, s);
            }
          }
        }
      }, e;
    }(ha);

    Wa.handles = function (t) {
      return t.getType() === Ss.VECTOR_TILE;
    }, Wa.create = function (t, e) {
      return new Wa(e);
    };

    var Ka = Wa,
        Ha = function (t) {
      function e(e) {
        (e = u({}, e)).controls || (e.controls = wo()), e.interactions || (e.interactions = ys()), t.call(this, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createRenderer = function () {
        var t = new Qs(this);
        return t.registerLayerRenderers([ra, ha, Ba, Ka]), t;
      }, e;
    }(lo),
        Za = {
      BOTTOM_LEFT: "bottom-left",
      BOTTOM_CENTER: "bottom-center",
      BOTTOM_RIGHT: "bottom-right",
      CENTER_LEFT: "center-left",
      CENTER_CENTER: "center-center",
      CENTER_RIGHT: "center-right",
      TOP_LEFT: "top-left",
      TOP_CENTER: "top-center",
      TOP_RIGHT: "top-right"
    },
        qa = {
      ELEMENT: "element",
      MAP: "map",
      OFFSET: "offset",
      POSITION: "position",
      POSITIONING: "positioning"
    },
        Ja = function (t) {
      function e(e) {
        t.call(this), this.options = e, this.id = e.id, this.insertFirst = void 0 === e.insertFirst || e.insertFirst, this.stopEvent = void 0 === e.stopEvent || e.stopEvent, this.element = document.createElement("div"), this.element.className = void 0 !== e.className ? e.className : "ol-overlay-container " + co, this.element.style.position = "absolute", this.autoPan = void 0 !== e.autoPan && e.autoPan, this.autoPanAnimation = e.autoPanAnimation || {}, this.autoPanMargin = void 0 !== e.autoPanMargin ? e.autoPanMargin : 20, this.rendered = {
          bottom_: "",
          left_: "",
          right_: "",
          top_: "",
          visible: !0
        }, this.mapPostrenderListenerKey = null, v(this, G(qa.ELEMENT), this.handleElementChanged, this), v(this, G(qa.MAP), this.handleMapChanged, this), v(this, G(qa.OFFSET), this.handleOffsetChanged, this), v(this, G(qa.POSITION), this.handlePositionChanged, this), v(this, G(qa.POSITIONING), this.handlePositioningChanged, this), void 0 !== e.element && this.setElement(e.element), this.setOffset(void 0 !== e.offset ? e.offset : [0, 0]), this.setPositioning(void 0 !== e.positioning ? e.positioning : Za.TOP_LEFT), void 0 !== e.position && this.setPosition(e.position);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getElement = function () {
        return this.get(qa.ELEMENT);
      }, e.prototype.getId = function () {
        return this.id;
      }, e.prototype.getMap = function () {
        return this.get(qa.MAP);
      }, e.prototype.getOffset = function () {
        return this.get(qa.OFFSET);
      }, e.prototype.getPosition = function () {
        return this.get(qa.POSITION);
      }, e.prototype.getPositioning = function () {
        return this.get(qa.POSITIONING);
      }, e.prototype.handleElementChanged = function () {
        to(this.element);
        var t = this.getElement();
        t && this.element.appendChild(t);
      }, e.prototype.handleMapChanged = function () {
        this.mapPostrenderListenerKey && ($n(this.element), E(this.mapPostrenderListenerKey), this.mapPostrenderListenerKey = null);
        var t = this.getMap();

        if (t) {
          this.mapPostrenderListenerKey = v(t, Rn, this.render, this), this.updatePixelPosition();
          var e = this.stopEvent ? t.getOverlayContainerStopEvent() : t.getOverlayContainer();
          this.insertFirst ? e.insertBefore(this.element, e.childNodes[0] || null) : e.appendChild(this.element);
        }
      }, e.prototype.render = function () {
        this.updatePixelPosition();
      }, e.prototype.handleOffsetChanged = function () {
        this.updatePixelPosition();
      }, e.prototype.handlePositionChanged = function () {
        this.updatePixelPosition(), this.get(qa.POSITION) && this.autoPan && this.panIntoView();
      }, e.prototype.handlePositioningChanged = function () {
        this.updatePixelPosition();
      }, e.prototype.setElement = function (t) {
        this.set(qa.ELEMENT, t);
      }, e.prototype.setMap = function (t) {
        this.set(qa.MAP, t);
      }, e.prototype.setOffset = function (t) {
        this.set(qa.OFFSET, t);
      }, e.prototype.setPosition = function (t) {
        this.set(qa.POSITION, t);
      }, e.prototype.panIntoView = function () {
        var t = this.getMap();

        if (t && t.getTargetElement()) {
          var e = this.getRect(t.getTargetElement(), t.getSize()),
              i = this.getElement(),
              r = this.getRect(i, [function (t) {
            var e = t.offsetWidth,
                i = getComputedStyle(t);
            return e += parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10);
          }(i), function (t) {
            var e = t.offsetHeight,
                i = getComputedStyle(t);
            return e += parseInt(i.marginTop, 10) + parseInt(i.marginBottom, 10);
          }(i)]),
              n = this.autoPanMargin;

          if (!ot(e, r)) {
            var o = r[0] - e[0],
                s = e[2] - r[2],
                a = r[1] - e[1],
                h = e[3] - r[3],
                l = [0, 0];

            if (o < 0 ? l[0] = o - n : s < 0 && (l[0] = Math.abs(s) + n), a < 0 ? l[1] = a - n : h < 0 && (l[1] = Math.abs(h) + n), 0 !== l[0] || 0 !== l[1]) {
              var u = t.getView().getCenter(),
                  p = t.getPixelFromCoordinate(u),
                  c = [p[0] + l[0], p[1] + l[1]];
              t.getView().animate({
                center: t.getCoordinateFromPixel(c),
                duration: this.autoPanAnimation.duration,
                easing: this.autoPanAnimation.easing
              });
            }
          }
        }
      }, e.prototype.getRect = function (t, e) {
        var i = t.getBoundingClientRect(),
            r = i.left + window.pageXOffset,
            n = i.top + window.pageYOffset;
        return [r, n, r + e[0], n + e[1]];
      }, e.prototype.setPositioning = function (t) {
        this.set(qa.POSITIONING, t);
      }, e.prototype.setVisible = function (t) {
        this.rendered.visible !== t && (this.element.style.display = t ? "" : "none", this.rendered.visible = t);
      }, e.prototype.updatePixelPosition = function () {
        var t = this.getMap(),
            e = this.getPosition();

        if (t && t.isRendered() && e) {
          var i = t.getPixelFromCoordinate(e),
              r = t.getSize();
          this.updateRenderedPosition(i, r);
        } else this.setVisible(!1);
      }, e.prototype.updateRenderedPosition = function (t, e) {
        var i = this.element.style,
            r = this.getOffset(),
            n = this.getPositioning();
        this.setVisible(!0);
        var o = r[0],
            s = r[1];

        if (n == Za.BOTTOM_RIGHT || n == Za.CENTER_RIGHT || n == Za.TOP_RIGHT) {
          "" !== this.rendered.left_ && (this.rendered.left_ = i.left = "");
          var a = Math.round(e[0] - t[0] - o) + "px";
          this.rendered.right_ != a && (this.rendered.right_ = i.right = a);
        } else {
          "" !== this.rendered.right_ && (this.rendered.right_ = i.right = ""), n != Za.BOTTOM_CENTER && n != Za.CENTER_CENTER && n != Za.TOP_CENTER || (o -= this.element.offsetWidth / 2);
          var h = Math.round(t[0] + o) + "px";
          this.rendered.left_ != h && (this.rendered.left_ = i.left = h);
        }

        if (n == Za.BOTTOM_LEFT || n == Za.BOTTOM_CENTER || n == Za.BOTTOM_RIGHT) {
          "" !== this.rendered.top_ && (this.rendered.top_ = i.top = "");
          var l = Math.round(e[1] - t[1] - s) + "px";
          this.rendered.bottom_ != l && (this.rendered.bottom_ = i.bottom = l);
        } else {
          "" !== this.rendered.bottom_ && (this.rendered.bottom_ = i.bottom = ""), n != Za.CENTER_LEFT && n != Za.CENTER_CENTER && n != Za.CENTER_RIGHT || (s -= this.element.offsetHeight / 2);
          var u = Math.round(t[1] + s) + "px";
          this.rendered.top_ != u && (this.rendered.top_ = i.top = u);
        }
      }, e.prototype.getOptions = function () {
        return this.options;
      }, e;
    }(D),
        Qa = 9729,
        $a = 10242,
        th = 10243,
        eh = 3553,
        ih = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function rh(t, e) {
      for (var i = ih.length, r = 0; r < i; ++r) {
        try {
          var n = t.getContext(ih[r], e);
          if (n) return n;
        } catch (t) {}
      }

      return null;
    }

    var nh, oh;
    if ("undefined" != typeof window && "WebGLRenderingContext" in window) try {
      var sh = rh(document.createElement("canvas"), {
        failIfMajorPerformanceCaveat: !0
      });
      sh && (!0, nh = sh.getParameter(sh.MAX_TEXTURE_SIZE), oh = sh.getSupportedExtensions());
    } catch (t) {}

    var ah = function ah(t) {
      this.source_ = t;
    };

    ah.prototype.isAnimated = function () {
      return !1;
    }, ah.prototype.getType = function () {
      return r();
    }, ah.prototype.getSource = function () {
      return this.source_;
    };

    var hh = ah,
        lh = function (t) {
      function e(e) {
        t.call(this, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getType = function () {
        return 35632;
      }, e;
    }(hh),
        uh = function (t) {
      function e(e) {
        t.call(this, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getType = function () {
        return 35633;
      }, e;
    }(hh),
        ph = new lh("precision mediump float;\nvarying vec2 v_center;\nvarying vec2 v_offset;\nvarying float v_halfWidth;\nvarying float v_pixelRatio;\n\n\n\nuniform float u_opacity;\nuniform vec4 u_fillColor;\nuniform vec4 u_strokeColor;\nuniform vec2 u_size;\n\nvoid main(void) {\n  vec2 windowCenter = vec2((v_center.x + 1.0) / 2.0 * u_size.x * v_pixelRatio,\n      (v_center.y + 1.0) / 2.0 * u_size.y * v_pixelRatio);\n  vec2 windowOffset = vec2((v_offset.x + 1.0) / 2.0 * u_size.x * v_pixelRatio,\n      (v_offset.y + 1.0) / 2.0 * u_size.y * v_pixelRatio);\n  float radius = length(windowCenter - windowOffset);\n  float dist = length(windowCenter - gl_FragCoord.xy);\n  if (dist > radius + v_halfWidth) {\n    if (u_strokeColor.a == 0.0) {\n      gl_FragColor = u_fillColor;\n    } else {\n      gl_FragColor = u_strokeColor;\n    }\n    gl_FragColor.a = gl_FragColor.a - (dist - (radius + v_halfWidth));\n  } else if (u_fillColor.a == 0.0) {\n    // Hooray, no fill, just stroke. We can use real antialiasing.\n    gl_FragColor = u_strokeColor;\n    if (dist < radius - v_halfWidth) {\n      gl_FragColor.a = gl_FragColor.a - (radius - v_halfWidth - dist);\n    }\n  } else {\n    gl_FragColor = u_fillColor;\n    float strokeDist = radius - v_halfWidth;\n    float antialias = 2.0 * v_pixelRatio;\n    if (dist > strokeDist) {\n      gl_FragColor = u_strokeColor;\n    } else if (dist >= strokeDist - antialias) {\n      float step = smoothstep(strokeDist - antialias, strokeDist, dist);\n      gl_FragColor = mix(u_fillColor, u_strokeColor, step);\n    }\n  }\n  gl_FragColor.a = gl_FragColor.a * u_opacity;\n  if (gl_FragColor.a <= 0.0) {\n    discard;\n  }\n}\n"),
        ch = new uh("varying vec2 v_center;\nvarying vec2 v_offset;\nvarying float v_halfWidth;\nvarying float v_pixelRatio;\n\n\nattribute vec2 a_position;\nattribute float a_instruction;\nattribute float a_radius;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\nuniform float u_lineWidth;\nuniform float u_pixelRatio;\n\nvoid main(void) {\n  mat4 offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  v_center = vec4(u_projectionMatrix * vec4(a_position, 0.0, 1.0)).xy;\n  v_pixelRatio = u_pixelRatio;\n  float lineWidth = u_lineWidth * u_pixelRatio;\n  v_halfWidth = lineWidth / 2.0;\n  if (lineWidth == 0.0) {\n    lineWidth = 2.0 * u_pixelRatio;\n  }\n  vec2 offset;\n  // Radius with anitaliasing (roughly).\n  float radius = a_radius + 3.0 * u_pixelRatio;\n  // Until we get gl_VertexID in WebGL, we store an instruction.\n  if (a_instruction == 0.0) {\n    // Offsetting the edges of the triangle by lineWidth / 2 is necessary, however\n    // we should also leave some space for the antialiasing, thus we offset by lineWidth.\n    offset = vec2(-1.0, 1.0);\n  } else if (a_instruction == 1.0) {\n    offset = vec2(-1.0, -1.0);\n  } else if (a_instruction == 2.0) {\n    offset = vec2(1.0, -1.0);\n  } else {\n    offset = vec2(1.0, 1.0);\n  }\n\n  gl_Position = u_projectionMatrix * vec4(a_position + offset * radius, 0.0, 1.0) +\n      offsetMatrix * vec4(offset * lineWidth, 0.0, 0.0);\n  v_offset = vec4(u_projectionMatrix * vec4(a_position.x + a_radius, a_position.y,\n      0.0, 1.0)).xy;\n\n  if (distance(v_center, v_offset) > 20000.0) {\n    gl_Position = vec4(v_center, 0.0, 1.0);\n  }\n}\n\n\n"),
        dh = function dh(t, e) {
      this.u_projectionMatrix = t.getUniformLocation(e, "u_projectionMatrix"), this.u_offsetScaleMatrix = t.getUniformLocation(e, "u_offsetScaleMatrix"), this.u_offsetRotateMatrix = t.getUniformLocation(e, "u_offsetRotateMatrix"), this.u_lineWidth = t.getUniformLocation(e, "u_lineWidth"), this.u_pixelRatio = t.getUniformLocation(e, "u_pixelRatio"), this.u_opacity = t.getUniformLocation(e, "u_opacity"), this.u_fillColor = t.getUniformLocation(e, "u_fillColor"), this.u_strokeColor = t.getUniformLocation(e, "u_strokeColor"), this.u_size = t.getUniformLocation(e, "u_size"), this.a_position = t.getAttribLocation(e, "a_position"), this.a_instruction = t.getAttribLocation(e, "a_instruction"), this.a_radius = t.getAttribLocation(e, "a_radius");
    };

    function fh(t, e) {
      return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t;
    }

    var _h = function (t) {
      function e(e, i) {
        t.call(this), this.tolerance = e, this.maxExtent = i, this.origin = Tt(i), this.projectionMatrix_ = [1, 0, 0, 1, 0, 0], this.offsetRotateMatrix_ = [1, 0, 0, 1, 0, 0], this.offsetScaleMatrix_ = [1, 0, 0, 1, 0, 0], this.tmpMat4_ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.indices = [], this.indicesBuffer = null, this.startIndices = [], this.startIndicesFeature = [], this.vertices = [], this.verticesBuffer = null, this.lineStringReplay = void 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getDeleteResourcesFunction = function (t) {
        return r();
      }, e.prototype.finish = function (t) {
        r();
      }, e.prototype.setUpProgram = function (t, e, i, n) {
        return r();
      }, e.prototype.shutDownProgram = function (t, e) {
        r();
      }, e.prototype.drawReplay = function (t, e, i, n) {
        r();
      }, e.prototype.drawHitDetectionReplayOneByOne = function (t, e, i, n, o) {
        return r();
      }, e.prototype.drawHitDetectionReplay = function (t, e, i, r, n, o) {
        return n ? this.drawHitDetectionReplayOneByOne(t, e, i, r, o) : this.drawHitDetectionReplayAll(t, e, i, r);
      }, e.prototype.drawHitDetectionReplayAll = function (t, e, i, r) {
        t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.drawReplay(t, e, i, !0);
        var n = r(null);
        return n || void 0;
      }, e.prototype.replay = function (t, e, i, r, n, o, s, a, h, l, u) {
        var p,
            c,
            d,
            f,
            _,
            g,
            y,
            v,
            m = t.getGL();

        this.lineStringReplay && (p = m.isEnabled(m.STENCIL_TEST), c = m.getParameter(m.STENCIL_FUNC), d = m.getParameter(m.STENCIL_VALUE_MASK), f = m.getParameter(m.STENCIL_REF), _ = m.getParameter(m.STENCIL_WRITEMASK), g = m.getParameter(m.STENCIL_FAIL), y = m.getParameter(m.STENCIL_PASS_DEPTH_PASS), v = m.getParameter(m.STENCIL_PASS_DEPTH_FAIL), m.enable(m.STENCIL_TEST), m.clear(m.STENCIL_BUFFER_BIT), m.stencilMask(255), m.stencilFunc(m.ALWAYS, 1, 255), m.stencilOp(m.KEEP, m.KEEP, m.REPLACE), this.lineStringReplay.replay(t, e, i, r, n, o, s, a, h, l, u), m.stencilMask(0), m.stencilFunc(m.NOTEQUAL, 1, 255)), t.bindBuffer(34962, this.verticesBuffer), t.bindBuffer(34963, this.indicesBuffer);
        var x = this.setUpProgram(m, t, n, o),
            E = Fe(this.projectionMatrix_);
        je(E, 2 / (i * n[0]), 2 / (i * n[1])), ke(E, -r), Ue(E, -(e[0] - this.origin[0]), -(e[1] - this.origin[1]));
        var S = Fe(this.offsetScaleMatrix_);
        je(S, 2 / n[0], 2 / n[1]);
        var T,
            C = Fe(this.offsetRotateMatrix_);
        return 0 !== r && ke(C, -r), m.uniformMatrix4fv(x.u_projectionMatrix, !1, fh(this.tmpMat4_, E)), m.uniformMatrix4fv(x.u_offsetScaleMatrix, !1, fh(this.tmpMat4_, S)), m.uniformMatrix4fv(x.u_offsetRotateMatrix, !1, fh(this.tmpMat4_, C)), m.uniform1f(x.u_opacity, s), void 0 === h ? this.drawReplay(m, t, a, !1) : T = this.drawHitDetectionReplay(m, t, a, h, l, u), this.shutDownProgram(m, x), this.lineStringReplay && (p || m.disable(m.STENCIL_TEST), m.clear(m.STENCIL_BUFFER_BIT), m.stencilFunc(c, f, d), m.stencilMask(_), m.stencilOp(g, v, y)), T;
      }, e.prototype.drawElements = function (t, e, i, r) {
        var n = e.hasOESElementIndexUint ? 5125 : 5123,
            o = r - i,
            s = i * (e.hasOESElementIndexUint ? 4 : 2);
        t.drawElements(4, o, n, s);
      }, e;
    }(Vs),
        gh = [0, 0, 0, 1],
        yh = [],
        vh = [0, 0, 0, 1],
        mh = Number.EPSILON || 2.220446049250313e-16,
        xh = function xh(t, e, i, r, n, o) {
      var s = (i - t) * (o - e) - (n - t) * (r - e);
      return s <= mh && s >= -mh ? void 0 : s > 0;
    },
        Eh = 35044,
        Sh = function Sh(t, e) {
      this.arr_ = void 0 !== t ? t : [], this.usage_ = void 0 !== e ? e : Eh;
    };

    Sh.prototype.getArray = function () {
      return this.arr_;
    }, Sh.prototype.getUsage = function () {
      return this.usage_;
    };

    var Th = Sh,
        Ch = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.defaultLocations_ = null, this.styles_ = [], this.styleIndices_ = [], this.radius_ = 0, this.state_ = {
          fillColor: null,
          strokeColor: null,
          lineDash: null,
          lineDashOffset: void 0,
          lineWidth: void 0,
          changed: !1
        };
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawCoordinates_ = function (t, e, i, r) {
        var n,
            o,
            s = this.vertices.length,
            a = this.indices.length,
            h = s / 4;

        for (n = e, o = i; n < o; n += r) {
          this.vertices[s++] = t[n], this.vertices[s++] = t[n + 1], this.vertices[s++] = 0, this.vertices[s++] = this.radius_, this.vertices[s++] = t[n], this.vertices[s++] = t[n + 1], this.vertices[s++] = 1, this.vertices[s++] = this.radius_, this.vertices[s++] = t[n], this.vertices[s++] = t[n + 1], this.vertices[s++] = 2, this.vertices[s++] = this.radius_, this.vertices[s++] = t[n], this.vertices[s++] = t[n + 1], this.vertices[s++] = 3, this.vertices[s++] = this.radius_, this.indices[a++] = h, this.indices[a++] = h + 1, this.indices[a++] = h + 2, this.indices[a++] = h + 2, this.indices[a++] = h + 3, this.indices[a++] = h, h += 4;
        }
      }, e.prototype.drawCircle = function (t, e) {
        var i = t.getRadius(),
            r = t.getStride();

        if (i) {
          this.startIndices.push(this.indices.length), this.startIndicesFeature.push(e), this.state_.changed && (this.styleIndices_.push(this.indices.length), this.state_.changed = !1), this.radius_ = i;
          var n = t.getFlatCoordinates();
          n = Dt(n, 0, 2, r, -this.origin[0], -this.origin[1]), this.drawCoordinates_(n, 0, 2, r);
        } else if (this.state_.changed && (this.styles_.pop(), this.styles_.length)) {
          var o = this.styles_[this.styles_.length - 1];
          this.state_.fillColor = o[0], this.state_.strokeColor = o[1], this.state_.lineWidth = o[2], this.state_.changed = !1;
        }
      }, e.prototype.finish = function (t) {
        this.verticesBuffer = new Th(this.vertices), this.indicesBuffer = new Th(this.indices), this.startIndices.push(this.indices.length), 0 === this.styleIndices_.length && this.styles_.length > 0 && (this.styles_ = []), this.vertices = null, this.indices = null;
      }, e.prototype.getDeleteResourcesFunction = function (t) {
        var e = this.verticesBuffer,
            i = this.indicesBuffer;
        return function () {
          t.deleteBuffer(e), t.deleteBuffer(i);
        };
      }, e.prototype.setUpProgram = function (t, e, i, r) {
        var n,
            o = e.getProgram(ph, ch);
        return this.defaultLocations_ ? n = this.defaultLocations_ : (n = new dh(t, o), this.defaultLocations_ = n), e.useProgram(o), t.enableVertexAttribArray(n.a_position), t.vertexAttribPointer(n.a_position, 2, 5126, !1, 16, 0), t.enableVertexAttribArray(n.a_instruction), t.vertexAttribPointer(n.a_instruction, 1, 5126, !1, 16, 8), t.enableVertexAttribArray(n.a_radius), t.vertexAttribPointer(n.a_radius, 1, 5126, !1, 16, 12), t.uniform2fv(n.u_size, i), t.uniform1f(n.u_pixelRatio, r), n;
      }, e.prototype.shutDownProgram = function (t, e) {
        t.disableVertexAttribArray(e.a_position), t.disableVertexAttribArray(e.a_instruction), t.disableVertexAttribArray(e.a_radius);
      }, e.prototype.drawReplay = function (t, e, i, r) {
        var n, o, s, a;
        if (d(i)) for (s = this.startIndices[this.startIndices.length - 1], n = this.styleIndices_.length - 1; n >= 0; --n) {
          o = this.styleIndices_[n], a = this.styles_[n], this.setFillStyle_(t, a[0]), this.setStrokeStyle_(t, a[1], a[2]), this.drawElements(t, e, o, s), s = o;
        } else this.drawReplaySkipping_(t, e, i);
      }, e.prototype.drawHitDetectionReplayOneByOne = function (t, e, i, r, n) {
        var s, a, h, l, u, p, c;

        for (c = this.startIndices.length - 2, h = this.startIndices[c + 1], s = this.styleIndices_.length - 1; s >= 0; --s) {
          for (l = this.styles_[s], this.setFillStyle_(t, l[0]), this.setStrokeStyle_(t, l[1], l[2]), u = this.styleIndices_[s]; c >= 0 && this.startIndices[c] >= u;) {
            if (a = this.startIndices[c], void 0 === i[o(p = this.startIndicesFeature[c])] && p.getGeometry() && (void 0 === n || Pt(n, p.getGeometry().getExtent()))) {
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.drawElements(t, e, a, h);
              var d = r(p);
              if (d) return d;
            }

            c--, h = a;
          }
        }
      }, e.prototype.drawReplaySkipping_ = function (t, e, i) {
        var r, n, s, a, h, l, u;

        for (l = this.startIndices.length - 2, s = n = this.startIndices[l + 1], r = this.styleIndices_.length - 1; r >= 0; --r) {
          for (a = this.styles_[r], this.setFillStyle_(t, a[0]), this.setStrokeStyle_(t, a[1], a[2]), h = this.styleIndices_[r]; l >= 0 && this.startIndices[l] >= h;) {
            u = this.startIndices[l], i[o(this.startIndicesFeature[l])] && (n !== s && this.drawElements(t, e, n, s), s = u), l--, n = u;
          }

          n !== s && this.drawElements(t, e, n, s), n = s = h;
        }
      }, e.prototype.setFillStyle_ = function (t, e) {
        t.uniform4fv(this.defaultLocations_.u_fillColor, e);
      }, e.prototype.setStrokeStyle_ = function (t, e, i) {
        t.uniform4fv(this.defaultLocations_.u_strokeColor, e), t.uniform1f(this.defaultLocations_.u_lineWidth, i);
      }, e.prototype.setFillStrokeStyle = function (t, e) {
        var i, r;

        if (e) {
          var n = e.getLineDash();
          this.state_.lineDash = n || yh;
          var o = e.getLineDashOffset();
          this.state_.lineDashOffset = o || 0, i = (i = e.getColor()) instanceof CanvasGradient || i instanceof CanvasPattern ? vh : _r(i).map(function (t, e) {
            return 3 != e ? t / 255 : t;
          }) || vh, r = void 0 !== (r = e.getWidth()) ? r : 1;
        } else i = [0, 0, 0, 0], r = 0;

        var s = t ? t.getColor() : [0, 0, 0, 0];
        s = s instanceof CanvasGradient || s instanceof CanvasPattern ? gh : _r(s).map(function (t, e) {
          return 3 != e ? t / 255 : t;
        }) || gh, this.state_.strokeColor && Z(this.state_.strokeColor, i) && this.state_.fillColor && Z(this.state_.fillColor, s) && this.state_.lineWidth === r || (this.state_.changed = !0, this.state_.fillColor = s, this.state_.strokeColor = i, this.state_.lineWidth = r, this.styles_.push([s, i, r]));
      }, e;
    }(_h),
        Rh = new lh("precision mediump float;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\n\nuniform float u_opacity;\nuniform sampler2D u_image;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  gl_FragColor.rgb = texColor.rgb;\n  float alpha = texColor.a * v_opacity * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n"),
        wh = new uh("varying vec2 v_texCoord;\nvarying float v_opacity;\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nattribute vec2 a_offsets;\nattribute float a_opacity;\nattribute float a_rotateWithView;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  mat4 offsetMatrix = u_offsetScaleMatrix;\n  if (a_rotateWithView == 1.0) {\n    offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  }\n  vec4 offsets = offsetMatrix * vec4(a_offsets, 0.0, 0.0);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n  v_texCoord = a_texCoord;\n  v_opacity = a_opacity;\n}\n\n\n"),
        Ih = function Ih(t, e) {
      this.u_projectionMatrix = t.getUniformLocation(e, "u_projectionMatrix"), this.u_offsetScaleMatrix = t.getUniformLocation(e, "u_offsetScaleMatrix"), this.u_offsetRotateMatrix = t.getUniformLocation(e, "u_offsetRotateMatrix"), this.u_opacity = t.getUniformLocation(e, "u_opacity"), this.u_image = t.getUniformLocation(e, "u_image"), this.a_position = t.getAttribLocation(e, "a_position"), this.a_texCoord = t.getAttribLocation(e, "a_texCoord"), this.a_offsets = t.getAttribLocation(e, "a_offsets"), this.a_opacity = t.getAttribLocation(e, "a_opacity"), this.a_rotateWithView = t.getAttribLocation(e, "a_rotateWithView");
    },
        Lh = {
      LOST: "webglcontextlost",
      RESTORED: "webglcontextrestored"
    };

    function Oh(t, e, i) {
      var r = t.createTexture();
      return t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), void 0 !== e && t.texParameteri(eh, $a, e), void 0 !== i && t.texParameteri(eh, th, i), r;
    }

    function Ph(t, e, i, r, n) {
      var o = Oh(t, r, n);
      return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, i, 0, t.RGBA, t.UNSIGNED_BYTE, null), o;
    }

    function bh(t, e, i, r) {
      var n = Oh(t, i, r);
      return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), n;
    }

    var Mh = function (t) {
      function e(e, i) {
        t.call(this), this.canvas_ = e, this.gl_ = i, this.bufferCache_ = {}, this.shaderCache_ = {}, this.programCache_ = {}, this.currentProgram_ = null, this.hitDetectionFramebuffer_ = null, this.hitDetectionTexture_ = null, this.hitDetectionRenderbuffer_ = null, this.hasOESElementIndexUint = X(oh, "OES_element_index_uint"), this.hasOESElementIndexUint && i.getExtension("OES_element_index_uint"), v(this.canvas_, Lh.LOST, this.handleWebGLContextLost, this), v(this.canvas_, Lh.RESTORED, this.handleWebGLContextRestored, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bindBuffer = function (t, e) {
        var i = this.getGL(),
            r = e.getArray(),
            n = o(e);

        if (n in this.bufferCache_) {
          var s = this.bufferCache_[n];
          i.bindBuffer(t, s.buffer);
        } else {
          var a,
              h = i.createBuffer();
          i.bindBuffer(t, h), 34962 == t ? a = new Float32Array(r) : 34963 == t && (a = this.hasOESElementIndexUint ? new Uint32Array(r) : new Uint16Array(r)), i.bufferData(t, a, e.getUsage()), this.bufferCache_[n] = {
            buf: e,
            buffer: h
          };
        }
      }, e.prototype.deleteBuffer = function (t) {
        var e = this.getGL(),
            i = o(t),
            r = this.bufferCache_[i];
        e.isContextLost() || e.deleteBuffer(r.buffer), delete this.bufferCache_[i];
      }, e.prototype.disposeInternal = function () {
        S(this.canvas_);
        var t = this.getGL();

        if (!t.isContextLost()) {
          for (var e in this.bufferCache_) {
            t.deleteBuffer(this.bufferCache_[e].buffer);
          }

          for (var i in this.programCache_) {
            t.deleteProgram(this.programCache_[i]);
          }

          for (var r in this.shaderCache_) {
            t.deleteShader(this.shaderCache_[r]);
          }

          t.deleteFramebuffer(this.hitDetectionFramebuffer_), t.deleteRenderbuffer(this.hitDetectionRenderbuffer_), t.deleteTexture(this.hitDetectionTexture_);
        }
      }, e.prototype.getCanvas = function () {
        return this.canvas_;
      }, e.prototype.getGL = function () {
        return this.gl_;
      }, e.prototype.getHitDetectionFramebuffer = function () {
        return this.hitDetectionFramebuffer_ || this.initHitDetectionFramebuffer_(), this.hitDetectionFramebuffer_;
      }, e.prototype.getShader = function (t) {
        var e = o(t);
        if (e in this.shaderCache_) return this.shaderCache_[e];
        var i = this.getGL(),
            r = i.createShader(t.getType());
        return i.shaderSource(r, t.getSource()), i.compileShader(r), this.shaderCache_[e] = r, r;
      }, e.prototype.getProgram = function (t, e) {
        var i = o(t) + "/" + o(e);
        if (i in this.programCache_) return this.programCache_[i];
        var r = this.getGL(),
            n = r.createProgram();
        return r.attachShader(n, this.getShader(t)), r.attachShader(n, this.getShader(e)), r.linkProgram(n), this.programCache_[i] = n, n;
      }, e.prototype.handleWebGLContextLost = function () {
        p(this.bufferCache_), p(this.shaderCache_), p(this.programCache_), this.currentProgram_ = null, this.hitDetectionFramebuffer_ = null, this.hitDetectionTexture_ = null, this.hitDetectionRenderbuffer_ = null;
      }, e.prototype.handleWebGLContextRestored = function () {}, e.prototype.initHitDetectionFramebuffer_ = function () {
        var t = this.gl_,
            e = t.createFramebuffer();
        t.bindFramebuffer(t.FRAMEBUFFER, e);
        var i = Ph(t, 1, 1),
            r = t.createRenderbuffer();
        t.bindRenderbuffer(t.RENDERBUFFER, r), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, 1, 1), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, r), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null), this.hitDetectionFramebuffer_ = e, this.hitDetectionTexture_ = i, this.hitDetectionRenderbuffer_ = r;
      }, e.prototype.useProgram = function (t) {
        return t != this.currentProgram_ && (this.getGL().useProgram(t), this.currentProgram_ = t, !0);
      }, e;
    }(C),
        Fh = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.anchorX = void 0, this.anchorY = void 0, this.groupIndices = [], this.hitDetectionGroupIndices = [], this.height = void 0, this.imageHeight = void 0, this.imageWidth = void 0, this.defaultLocations = null, this.opacity = void 0, this.originX = void 0, this.originY = void 0, this.rotateWithView = void 0, this.rotation = void 0, this.scale = void 0, this.width = void 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getDeleteResourcesFunction = function (t) {
        var e = this.verticesBuffer,
            i = this.indicesBuffer,
            r = this.getTextures(!0),
            n = t.getGL();
        return function () {
          var o, s;
          if (!n.isContextLost()) for (o = 0, s = r.length; o < s; ++o) {
            n.deleteTexture(r[o]);
          }
          t.deleteBuffer(e), t.deleteBuffer(i);
        };
      }, e.prototype.drawCoordinates = function (t, e, i, r) {
        var n,
            o,
            s,
            a,
            h,
            l,
            u = this.anchorX,
            p = this.anchorY,
            c = this.height,
            d = this.imageHeight,
            f = this.imageWidth,
            _ = this.opacity,
            g = this.originX,
            y = this.originY,
            v = this.rotateWithView ? 1 : 0,
            m = -this.rotation,
            x = this.scale,
            E = this.width,
            S = Math.cos(m),
            T = Math.sin(m),
            C = this.indices.length,
            R = this.vertices.length;

        for (n = e; n < i; n += r) {
          h = t[n] - this.origin[0], l = t[n + 1] - this.origin[1], o = R / 8, s = -x * u, a = -x * (c - p), this.vertices[R++] = h, this.vertices[R++] = l, this.vertices[R++] = s * S - a * T, this.vertices[R++] = s * T + a * S, this.vertices[R++] = g / f, this.vertices[R++] = (y + c) / d, this.vertices[R++] = _, this.vertices[R++] = v, s = x * (E - u), a = -x * (c - p), this.vertices[R++] = h, this.vertices[R++] = l, this.vertices[R++] = s * S - a * T, this.vertices[R++] = s * T + a * S, this.vertices[R++] = (g + E) / f, this.vertices[R++] = (y + c) / d, this.vertices[R++] = _, this.vertices[R++] = v, s = x * (E - u), a = x * p, this.vertices[R++] = h, this.vertices[R++] = l, this.vertices[R++] = s * S - a * T, this.vertices[R++] = s * T + a * S, this.vertices[R++] = (g + E) / f, this.vertices[R++] = y / d, this.vertices[R++] = _, this.vertices[R++] = v, s = -x * u, a = x * p, this.vertices[R++] = h, this.vertices[R++] = l, this.vertices[R++] = s * S - a * T, this.vertices[R++] = s * T + a * S, this.vertices[R++] = g / f, this.vertices[R++] = y / d, this.vertices[R++] = _, this.vertices[R++] = v, this.indices[C++] = o, this.indices[C++] = o + 1, this.indices[C++] = o + 2, this.indices[C++] = o, this.indices[C++] = o + 2, this.indices[C++] = o + 3;
        }

        return R;
      }, e.prototype.createTextures = function (t, e, i, r) {
        var n,
            s,
            a,
            h,
            l = e.length;

        for (h = 0; h < l; ++h) {
          (a = o(s = e[h])) in i ? n = i[a] : (n = bh(r, s, 33071, 33071), i[a] = n), t[h] = n;
        }
      }, e.prototype.setUpProgram = function (t, e, i, r) {
        var n,
            o = e.getProgram(Rh, wh);
        return this.defaultLocations ? n = this.defaultLocations : (n = new Ih(t, o), this.defaultLocations = n), e.useProgram(o), t.enableVertexAttribArray(n.a_position), t.vertexAttribPointer(n.a_position, 2, 5126, !1, 32, 0), t.enableVertexAttribArray(n.a_offsets), t.vertexAttribPointer(n.a_offsets, 2, 5126, !1, 32, 8), t.enableVertexAttribArray(n.a_texCoord), t.vertexAttribPointer(n.a_texCoord, 2, 5126, !1, 32, 16), t.enableVertexAttribArray(n.a_opacity), t.vertexAttribPointer(n.a_opacity, 1, 5126, !1, 32, 24), t.enableVertexAttribArray(n.a_rotateWithView), t.vertexAttribPointer(n.a_rotateWithView, 1, 5126, !1, 32, 28), n;
      }, e.prototype.shutDownProgram = function (t, e) {
        t.disableVertexAttribArray(e.a_position), t.disableVertexAttribArray(e.a_offsets), t.disableVertexAttribArray(e.a_texCoord), t.disableVertexAttribArray(e.a_opacity), t.disableVertexAttribArray(e.a_rotateWithView);
      }, e.prototype.drawReplay = function (t, e, i, r) {
        var n,
            o,
            s,
            a = r ? this.getHitDetectionTextures() : this.getTextures(),
            h = r ? this.hitDetectionGroupIndices : this.groupIndices;
        if (d(i)) for (n = 0, o = a.length, s = 0; n < o; ++n) {
          t.bindTexture(eh, a[n]);
          var l = h[n];
          this.drawElements(t, e, s, l), s = l;
        } else this.drawReplaySkipping(t, e, i, a, h);
      }, e.prototype.drawReplaySkipping = function (t, e, i, r, n) {
        var s,
            a,
            h = 0;

        for (s = 0, a = r.length; s < a; ++s) {
          t.bindTexture(eh, r[s]);

          for (var l = s > 0 ? n[s - 1] : 0, u = n[s], p = l, c = l; h < this.startIndices.length && this.startIndices[h] <= u;) {
            void 0 !== i[o(this.startIndicesFeature[h])] ? (p !== c && this.drawElements(t, e, p, c), c = p = h === this.startIndices.length - 1 ? u : this.startIndices[h + 1]) : c = h === this.startIndices.length - 1 ? u : this.startIndices[h + 1], h++;
          }

          p !== c && this.drawElements(t, e, p, c);
        }
      }, e.prototype.drawHitDetectionReplayOneByOne = function (t, e, i, r, n) {
        var s,
            a,
            h,
            l,
            u,
            p = this.startIndices.length - 1,
            c = this.getHitDetectionTextures();

        for (s = c.length - 1; s >= 0; --s) {
          for (t.bindTexture(eh, c[s]), a = s > 0 ? this.hitDetectionGroupIndices[s - 1] : 0, l = this.hitDetectionGroupIndices[s]; p >= 0 && this.startIndices[p] >= a;) {
            if (h = this.startIndices[p], void 0 === i[o(u = this.startIndicesFeature[p])] && u.getGeometry() && (void 0 === n || Pt(n, u.getGeometry().getExtent()))) {
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.drawElements(t, e, h, l);
              var d = r(u);
              if (d) return d;
            }

            l = h, p--;
          }
        }
      }, e.prototype.finish = function (t) {
        this.anchorX = void 0, this.anchorY = void 0, this.height = void 0, this.imageHeight = void 0, this.imageWidth = void 0, this.indices = null, this.opacity = void 0, this.originX = void 0, this.originY = void 0, this.rotateWithView = void 0, this.rotation = void 0, this.scale = void 0, this.vertices = null, this.width = void 0;
      }, e.prototype.getTextures = function (t) {
        return r();
      }, e.prototype.getHitDetectionTextures = function () {
        return r();
      }, e;
    }(_h),
        Ah = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.images_ = [], this.hitDetectionImages_ = [], this.textures_ = [], this.hitDetectionTextures_ = [];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawMultiPoint = function (t, e) {
        this.startIndices.push(this.indices.length), this.startIndicesFeature.push(e);
        var i = t.getFlatCoordinates(),
            r = t.getStride();
        this.drawCoordinates(i, 0, i.length, r);
      }, e.prototype.drawPoint = function (t, e) {
        this.startIndices.push(this.indices.length), this.startIndicesFeature.push(e);
        var i = t.getFlatCoordinates(),
            r = t.getStride();
        this.drawCoordinates(i, 0, i.length, r);
      }, e.prototype.finish = function (e) {
        var i = e.getGL();
        this.groupIndices.push(this.indices.length), this.hitDetectionGroupIndices.push(this.indices.length), this.verticesBuffer = new Th(this.vertices);
        var r = this.indices;
        this.indicesBuffer = new Th(r);
        var n = {};
        this.createTextures(this.textures_, this.images_, n, i), this.createTextures(this.hitDetectionTextures_, this.hitDetectionImages_, n, i), this.images_ = null, this.hitDetectionImages_ = null, t.prototype.finish.call(this, e);
      }, e.prototype.setImageStyle = function (t) {
        var e = t.getAnchor(),
            i = t.getImage(1),
            r = t.getImageSize(),
            n = t.getHitDetectionImage(1),
            s = t.getOpacity(),
            a = t.getOrigin(),
            h = t.getRotateWithView(),
            l = t.getRotation(),
            u = t.getSize(),
            p = t.getScale();
        0 === this.images_.length ? this.images_.push(i) : o(this.images_[this.images_.length - 1]) != o(i) && (this.groupIndices.push(this.indices.length), this.images_.push(i)), 0 === this.hitDetectionImages_.length ? this.hitDetectionImages_.push(n) : o(this.hitDetectionImages_[this.hitDetectionImages_.length - 1]) != o(n) && (this.hitDetectionGroupIndices.push(this.indices.length), this.hitDetectionImages_.push(n)), this.anchorX = e[0], this.anchorY = e[1], this.height = u[1], this.imageHeight = r[1], this.imageWidth = r[0], this.opacity = s, this.originX = a[0], this.originY = a[1], this.rotation = l, this.rotateWithView = h, this.scale = p, this.width = u[0];
      }, e.prototype.getTextures = function (t) {
        return t ? this.textures_.concat(this.hitDetectionTextures_) : this.textures_;
      }, e.prototype.getHitDetectionTextures = function () {
        return this.hitDetectionTextures_;
      }, e;
    }(Fh);

    function Nh(t, e, i, r) {
      var n = i - r;
      return t[e] === t[n] && t[e + 1] === t[n + 1] && (i - e) / r > 3 && !!Ke(t, e, i, r);
    }

    var Gh = new lh("precision mediump float;\nvarying float v_round;\nvarying vec2 v_roundVertex;\nvarying float v_halfWidth;\n\n\n\nuniform float u_opacity;\nuniform vec4 u_color;\nuniform vec2 u_size;\nuniform float u_pixelRatio;\n\nvoid main(void) {\n  if (v_round > 0.0) {\n    vec2 windowCoords = vec2((v_roundVertex.x + 1.0) / 2.0 * u_size.x * u_pixelRatio,\n        (v_roundVertex.y + 1.0) / 2.0 * u_size.y * u_pixelRatio);\n    if (length(windowCoords - gl_FragCoord.xy) > v_halfWidth * u_pixelRatio) {\n      discard;\n    }\n  }\n  gl_FragColor = u_color;\n  float alpha = u_color.a * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n"),
        Dh = new uh("varying float v_round;\nvarying vec2 v_roundVertex;\nvarying float v_halfWidth;\n\n\nattribute vec2 a_lastPos;\nattribute vec2 a_position;\nattribute vec2 a_nextPos;\nattribute float a_direction;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\nuniform float u_lineWidth;\nuniform float u_miterLimit;\n\nbool nearlyEquals(in float value, in float ref) {\n  float epsilon = 0.000000000001;\n  return value >= ref - epsilon && value <= ref + epsilon;\n}\n\nvoid alongNormal(out vec2 offset, in vec2 nextP, in float turnDir, in float direction) {\n  vec2 dirVect = nextP - a_position;\n  vec2 normal = normalize(vec2(-turnDir * dirVect.y, turnDir * dirVect.x));\n  offset = u_lineWidth / 2.0 * normal * direction;\n}\n\nvoid miterUp(out vec2 offset, out float round, in bool isRound, in float direction) {\n  float halfWidth = u_lineWidth / 2.0;\n  vec2 tangent = normalize(normalize(a_nextPos - a_position) + normalize(a_position - a_lastPos));\n  vec2 normal = vec2(-tangent.y, tangent.x);\n  vec2 dirVect = a_nextPos - a_position;\n  vec2 tmpNormal = normalize(vec2(-dirVect.y, dirVect.x));\n  float miterLength = abs(halfWidth / dot(normal, tmpNormal));\n  offset = normal * direction * miterLength;\n  round = 0.0;\n  if (isRound) {\n    round = 1.0;\n  } else if (miterLength > u_miterLimit + u_lineWidth) {\n    offset = halfWidth * tmpNormal * direction;\n  }\n}\n\nbool miterDown(out vec2 offset, in vec4 projPos, in mat4 offsetMatrix, in float direction) {\n  bool degenerate = false;\n  vec2 tangent = normalize(normalize(a_nextPos - a_position) + normalize(a_position - a_lastPos));\n  vec2 normal = vec2(-tangent.y, tangent.x);\n  vec2 dirVect = a_lastPos - a_position;\n  vec2 tmpNormal = normalize(vec2(-dirVect.y, dirVect.x));\n  vec2 longOffset, shortOffset, longVertex;\n  vec4 shortProjVertex;\n  float halfWidth = u_lineWidth / 2.0;\n  if (length(a_nextPos - a_position) > length(a_lastPos - a_position)) {\n    longOffset = tmpNormal * direction * halfWidth;\n    shortOffset = normalize(vec2(dirVect.y, -dirVect.x)) * direction * halfWidth;\n    longVertex = a_nextPos;\n    shortProjVertex = u_projectionMatrix * vec4(a_lastPos, 0.0, 1.0);\n  } else {\n    shortOffset = tmpNormal * direction * halfWidth;\n    longOffset = normalize(vec2(dirVect.y, -dirVect.x)) * direction * halfWidth;\n    longVertex = a_lastPos;\n    shortProjVertex = u_projectionMatrix * vec4(a_nextPos, 0.0, 1.0);\n  }\n  //Intersection algorithm based on theory by Paul Bourke (http://paulbourke.net/geometry/pointlineplane/).\n  vec4 p1 = u_projectionMatrix * vec4(longVertex, 0.0, 1.0) + offsetMatrix * vec4(longOffset, 0.0, 0.0);\n  vec4 p2 = projPos + offsetMatrix * vec4(longOffset, 0.0, 0.0);\n  vec4 p3 = shortProjVertex + offsetMatrix * vec4(-shortOffset, 0.0, 0.0);\n  vec4 p4 = shortProjVertex + offsetMatrix * vec4(shortOffset, 0.0, 0.0);\n  float denom = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);\n  float firstU = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;\n  float secondU = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denom;\n  float epsilon = 0.000000000001;\n  if (firstU > epsilon && firstU < 1.0 - epsilon && secondU > epsilon && secondU < 1.0 - epsilon) {\n    shortProjVertex.x = p1.x + firstU * (p2.x - p1.x);\n    shortProjVertex.y = p1.y + firstU * (p2.y - p1.y);\n    offset = shortProjVertex.xy;\n    degenerate = true;\n  } else {\n    float miterLength = abs(halfWidth / dot(normal, tmpNormal));\n    offset = normal * direction * miterLength;\n  }\n  return degenerate;\n}\n\nvoid squareCap(out vec2 offset, out float round, in bool isRound, in vec2 nextP,\n    in float turnDir, in float direction) {\n  round = 0.0;\n  vec2 dirVect = a_position - nextP;\n  vec2 firstNormal = normalize(dirVect);\n  vec2 secondNormal = vec2(turnDir * firstNormal.y * direction, -turnDir * firstNormal.x * direction);\n  vec2 hypotenuse = normalize(firstNormal - secondNormal);\n  vec2 normal = vec2(turnDir * hypotenuse.y * direction, -turnDir * hypotenuse.x * direction);\n  float length = sqrt(v_halfWidth * v_halfWidth * 2.0);\n  offset = normal * length;\n  if (isRound) {\n    round = 1.0;\n  }\n}\n\nvoid main(void) {\n  bool degenerate = false;\n  float direction = float(sign(a_direction));\n  mat4 offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  vec2 offset;\n  vec4 projPos = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n  bool round = nearlyEquals(mod(a_direction, 2.0), 0.0);\n\n  v_round = 0.0;\n  v_halfWidth = u_lineWidth / 2.0;\n  v_roundVertex = projPos.xy;\n\n  if (nearlyEquals(mod(a_direction, 3.0), 0.0) || nearlyEquals(mod(a_direction, 17.0), 0.0)) {\n    alongNormal(offset, a_nextPos, 1.0, direction);\n  } else if (nearlyEquals(mod(a_direction, 5.0), 0.0) || nearlyEquals(mod(a_direction, 13.0), 0.0)) {\n    alongNormal(offset, a_lastPos, -1.0, direction);\n  } else if (nearlyEquals(mod(a_direction, 23.0), 0.0)) {\n    miterUp(offset, v_round, round, direction);\n  } else if (nearlyEquals(mod(a_direction, 19.0), 0.0)) {\n    degenerate = miterDown(offset, projPos, offsetMatrix, direction);\n  } else if (nearlyEquals(mod(a_direction, 7.0), 0.0)) {\n    squareCap(offset, v_round, round, a_nextPos, 1.0, direction);\n  } else if (nearlyEquals(mod(a_direction, 11.0), 0.0)) {\n    squareCap(offset, v_round, round, a_lastPos, -1.0, direction);\n  }\n  if (!degenerate) {\n    vec4 offsets = offsetMatrix * vec4(offset, 0.0, 0.0);\n    gl_Position = projPos + offsets;\n  } else {\n    gl_Position = vec4(offset, 0.0, 1.0);\n  }\n}\n\n\n"),
        kh = function kh(t, e) {
      this.u_projectionMatrix = t.getUniformLocation(e, "u_projectionMatrix"), this.u_offsetScaleMatrix = t.getUniformLocation(e, "u_offsetScaleMatrix"), this.u_offsetRotateMatrix = t.getUniformLocation(e, "u_offsetRotateMatrix"), this.u_lineWidth = t.getUniformLocation(e, "u_lineWidth"), this.u_miterLimit = t.getUniformLocation(e, "u_miterLimit"), this.u_opacity = t.getUniformLocation(e, "u_opacity"), this.u_color = t.getUniformLocation(e, "u_color"), this.u_size = t.getUniformLocation(e, "u_size"), this.u_pixelRatio = t.getUniformLocation(e, "u_pixelRatio"), this.a_lastPos = t.getAttribLocation(e, "a_lastPos"), this.a_position = t.getAttribLocation(e, "a_position"), this.a_nextPos = t.getAttribLocation(e, "a_nextPos"), this.a_direction = t.getAttribLocation(e, "a_direction");
    },
        jh = 3,
        Uh = 5,
        Yh = 7,
        Bh = 11,
        Vh = 13,
        Xh = 17,
        zh = 19,
        Wh = 23,
        Kh = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.defaultLocations_ = null, this.styles_ = [], this.styleIndices_ = [], this.state_ = {
          strokeColor: null,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: void 0,
          miterLimit: void 0,
          changed: !1
        };
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawCoordinates_ = function (t, e, i, r) {
        var n,
            o,
            s,
            a,
            h,
            l,
            u,
            p,
            c = this.vertices.length,
            d = this.indices.length,
            f = "bevel" === this.state_.lineJoin ? 0 : "miter" === this.state_.lineJoin ? 1 : 2,
            _ = "butt" === this.state_.lineCap ? 0 : "square" === this.state_.lineCap ? 1 : 2,
            g = Nh(t, e, i, r),
            y = d,
            v = 1;

        for (n = e, o = i; n < o; n += r) {
          if (h = c / 7, l = u, u = p || [t[n], t[n + 1]], n === e) {
            if (p = [t[n + r], t[n + r + 1]], i - e == 2 * r && Z(u, p)) break;

            if (!g) {
              _ && (c = this.addVertices_([0, 0], u, p, v * Yh * _, c), c = this.addVertices_([0, 0], u, p, -v * Yh * _, c), this.indices[d++] = h + 2, this.indices[d++] = h, this.indices[d++] = h + 1, this.indices[d++] = h + 1, this.indices[d++] = h + 3, this.indices[d++] = h + 2), c = this.addVertices_([0, 0], u, p, v * jh * (_ || 1), c), y = (c = this.addVertices_([0, 0], u, p, -v * jh * (_ || 1), c)) / 7 - 1;
              continue;
            }

            l = [t[i - 2 * r], t[i - 2 * r + 1]], s = p;
          } else {
            if (n === i - r) {
              if (g) {
                p = s;
                break;
              }

              l = l || [0, 0], c = this.addVertices_(l, u, [0, 0], v * Uh * (_ || 1), c), c = this.addVertices_(l, u, [0, 0], -v * Uh * (_ || 1), c), this.indices[d++] = h, this.indices[d++] = y - 1, this.indices[d++] = y, this.indices[d++] = y, this.indices[d++] = h + 1, this.indices[d++] = h, _ && (c = this.addVertices_(l, u, [0, 0], v * Bh * _, c), c = this.addVertices_(l, u, [0, 0], -v * Bh * _, c), this.indices[d++] = h + 2, this.indices[d++] = h, this.indices[d++] = h + 1, this.indices[d++] = h + 1, this.indices[d++] = h + 3, this.indices[d++] = h + 2);
              break;
            }

            p = [t[n + r], t[n + r + 1]];
          }

          a = xh(l[0], l[1], u[0], u[1], p[0], p[1]) ? -1 : 1, c = this.addVertices_(l, u, p, a * Vh * (f || 1), c), c = this.addVertices_(l, u, p, a * Xh * (f || 1), c), c = this.addVertices_(l, u, p, -a * zh * (f || 1), c), n > e && (this.indices[d++] = h, this.indices[d++] = y - 1, this.indices[d++] = y, this.indices[d++] = h + 2, this.indices[d++] = h, this.indices[d++] = v * a > 0 ? y : y - 1), this.indices[d++] = h, this.indices[d++] = h + 2, this.indices[d++] = h + 1, y = h + 2, v = a, f && (c = this.addVertices_(l, u, p, a * Wh * f, c), this.indices[d++] = h + 1, this.indices[d++] = h + 3, this.indices[d++] = h);
        }

        g && (h = h || c / 7, a = Si([l[0], l[1], u[0], u[1], p[0], p[1]], 0, 6, 2) ? 1 : -1, c = this.addVertices_(l, u, p, a * Vh * (f || 1), c), c = this.addVertices_(l, u, p, -a * zh * (f || 1), c), this.indices[d++] = h, this.indices[d++] = y - 1, this.indices[d++] = y, this.indices[d++] = h + 1, this.indices[d++] = h, this.indices[d++] = v * a > 0 ? y : y - 1);
      }, e.prototype.addVertices_ = function (t, e, i, r, n) {
        return this.vertices[n++] = t[0], this.vertices[n++] = t[1], this.vertices[n++] = e[0], this.vertices[n++] = e[1], this.vertices[n++] = i[0], this.vertices[n++] = i[1], this.vertices[n++] = r, n;
      }, e.prototype.isValid_ = function (t, e, i, r) {
        var n = i - e;
        return !(n < 2 * r) && (n !== 2 * r || !Z([t[e], t[e + 1]], [t[e + r], t[e + r + 1]]));
      }, e.prototype.drawLineString = function (t, e) {
        var i = t.getFlatCoordinates(),
            r = t.getStride();
        this.isValid_(i, 0, i.length, r) && (i = Dt(i, 0, i.length, r, -this.origin[0], -this.origin[1]), this.state_.changed && (this.styleIndices_.push(this.indices.length), this.state_.changed = !1), this.startIndices.push(this.indices.length), this.startIndicesFeature.push(e), this.drawCoordinates_(i, 0, i.length, r));
      }, e.prototype.drawMultiLineString = function (t, e) {
        var i = this.indices.length,
            r = t.getEnds();
        r.unshift(0);
        var n,
            o,
            s = t.getFlatCoordinates(),
            a = t.getStride();
        if (r.length > 1) for (n = 1, o = r.length; n < o; ++n) {
          if (this.isValid_(s, r[n - 1], r[n], a)) {
            var h = Dt(s, r[n - 1], r[n], a, -this.origin[0], -this.origin[1]);
            this.drawCoordinates_(h, 0, h.length, a);
          }
        }
        this.indices.length > i && (this.startIndices.push(i), this.startIndicesFeature.push(e), this.state_.changed && (this.styleIndices_.push(i), this.state_.changed = !1));
      }, e.prototype.drawPolygonCoordinates = function (t, e, i) {
        var r, n;
        if (Nh(t, 0, t.length, i) || (t.push(t[0]), t.push(t[1])), this.drawCoordinates_(t, 0, t.length, i), e.length) for (r = 0, n = e.length; r < n; ++r) {
          Nh(e[r], 0, e[r].length, i) || (e[r].push(e[r][0]), e[r].push(e[r][1])), this.drawCoordinates_(e[r], 0, e[r].length, i);
        }
      }, e.prototype.setPolygonStyle = function (t, e) {
        var i = void 0 === e ? this.indices.length : e;
        this.startIndices.push(i), this.startIndicesFeature.push(t), this.state_.changed && (this.styleIndices_.push(i), this.state_.changed = !1);
      }, e.prototype.getCurrentIndex = function () {
        return this.indices.length;
      }, e.prototype.finish = function (t) {
        this.verticesBuffer = new Th(this.vertices), this.indicesBuffer = new Th(this.indices), this.startIndices.push(this.indices.length), 0 === this.styleIndices_.length && this.styles_.length > 0 && (this.styles_ = []), this.vertices = null, this.indices = null;
      }, e.prototype.getDeleteResourcesFunction = function (t) {
        var e = this.verticesBuffer,
            i = this.indicesBuffer;
        return function () {
          t.deleteBuffer(e), t.deleteBuffer(i);
        };
      }, e.prototype.setUpProgram = function (t, e, i, r) {
        var n,
            o = e.getProgram(Gh, Dh);
        return this.defaultLocations_ ? n = this.defaultLocations_ : (n = new kh(t, o), this.defaultLocations_ = n), e.useProgram(o), t.enableVertexAttribArray(n.a_lastPos), t.vertexAttribPointer(n.a_lastPos, 2, 5126, !1, 28, 0), t.enableVertexAttribArray(n.a_position), t.vertexAttribPointer(n.a_position, 2, 5126, !1, 28, 8), t.enableVertexAttribArray(n.a_nextPos), t.vertexAttribPointer(n.a_nextPos, 2, 5126, !1, 28, 16), t.enableVertexAttribArray(n.a_direction), t.vertexAttribPointer(n.a_direction, 1, 5126, !1, 28, 24), t.uniform2fv(n.u_size, i), t.uniform1f(n.u_pixelRatio, r), n;
      }, e.prototype.shutDownProgram = function (t, e) {
        t.disableVertexAttribArray(e.a_lastPos), t.disableVertexAttribArray(e.a_position), t.disableVertexAttribArray(e.a_nextPos), t.disableVertexAttribArray(e.a_direction);
      }, e.prototype.drawReplay = function (t, e, i, r) {
        var n,
            o,
            s,
            a,
            h = t.getParameter(t.DEPTH_FUNC),
            l = t.getParameter(t.DEPTH_WRITEMASK);
        if (r || (t.enable(t.DEPTH_TEST), t.depthMask(!0), t.depthFunc(t.NOTEQUAL)), d(i)) for (s = this.startIndices[this.startIndices.length - 1], n = this.styleIndices_.length - 1; n >= 0; --n) {
          o = this.styleIndices_[n], a = this.styles_[n], this.setStrokeStyle_(t, a[0], a[1], a[2]), this.drawElements(t, e, o, s), t.clear(t.DEPTH_BUFFER_BIT), s = o;
        } else this.drawReplaySkipping_(t, e, i);
        r || (t.disable(t.DEPTH_TEST), t.clear(t.DEPTH_BUFFER_BIT), t.depthMask(l), t.depthFunc(h));
      }, e.prototype.drawReplaySkipping_ = function (t, e, i) {
        var r, n, s, a, h, l, u;

        for (l = this.startIndices.length - 2, s = n = this.startIndices[l + 1], r = this.styleIndices_.length - 1; r >= 0; --r) {
          for (a = this.styles_[r], this.setStrokeStyle_(t, a[0], a[1], a[2]), h = this.styleIndices_[r]; l >= 0 && this.startIndices[l] >= h;) {
            u = this.startIndices[l], i[o(this.startIndicesFeature[l])] && (n !== s && (this.drawElements(t, e, n, s), t.clear(t.DEPTH_BUFFER_BIT)), s = u), l--, n = u;
          }

          n !== s && (this.drawElements(t, e, n, s), t.clear(t.DEPTH_BUFFER_BIT)), n = s = h;
        }
      }, e.prototype.drawHitDetectionReplayOneByOne = function (t, e, i, r, n) {
        var s, a, h, l, u, p, c;

        for (c = this.startIndices.length - 2, h = this.startIndices[c + 1], s = this.styleIndices_.length - 1; s >= 0; --s) {
          for (l = this.styles_[s], this.setStrokeStyle_(t, l[0], l[1], l[2]), u = this.styleIndices_[s]; c >= 0 && this.startIndices[c] >= u;) {
            if (a = this.startIndices[c], void 0 === i[o(p = this.startIndicesFeature[c])] && p.getGeometry() && (void 0 === n || Pt(n, p.getGeometry().getExtent()))) {
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.drawElements(t, e, a, h);
              var d = r(p);
              if (d) return d;
            }

            c--, h = a;
          }
        }
      }, e.prototype.setStrokeStyle_ = function (t, e, i, r) {
        t.uniform4fv(this.defaultLocations_.u_color, e), t.uniform1f(this.defaultLocations_.u_lineWidth, i), t.uniform1f(this.defaultLocations_.u_miterLimit, r);
      }, e.prototype.setFillStrokeStyle = function (t, e) {
        var i = e.getLineCap();
        this.state_.lineCap = void 0 !== i ? i : "round";
        var r = e.getLineDash();
        this.state_.lineDash = r || yh;
        var n = e.getLineDashOffset();
        this.state_.lineDashOffset = n || 0;
        var o = e.getLineJoin();
        this.state_.lineJoin = void 0 !== o ? o : "round";
        var s = e.getColor();
        s = s instanceof CanvasGradient || s instanceof CanvasPattern ? vh : _r(s).map(function (t, e) {
          return 3 != e ? t / 255 : t;
        }) || vh;
        var a = e.getWidth();
        a = void 0 !== a ? a : 1;
        var h = e.getMiterLimit();
        h = void 0 !== h ? h : 10, this.state_.strokeColor && Z(this.state_.strokeColor, s) && this.state_.lineWidth === a && this.state_.miterLimit === h || (this.state_.changed = !0, this.state_.strokeColor = s, this.state_.lineWidth = a, this.state_.miterLimit = h, this.styles_.push([s, a, h]));
      }, e;
    }(_h),
        Hh = new lh("precision mediump float;\n\n\n\nuniform vec4 u_color;\nuniform float u_opacity;\n\nvoid main(void) {\n  gl_FragColor = u_color;\n  float alpha = u_color.a * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n"),
        Zh = new uh("\n\nattribute vec2 a_position;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n}\n\n\n"),
        qh = function qh(t, e) {
      this.u_projectionMatrix = t.getUniformLocation(e, "u_projectionMatrix"), this.u_offsetScaleMatrix = t.getUniformLocation(e, "u_offsetScaleMatrix"), this.u_offsetRotateMatrix = t.getUniformLocation(e, "u_offsetRotateMatrix"), this.u_color = t.getUniformLocation(e, "u_color"), this.u_opacity = t.getUniformLocation(e, "u_opacity"), this.a_position = t.getAttribLocation(e, "a_position");
    },
        Jh = function Jh(t) {
      this.first_, this.last_, this.head_, this.circular_ = void 0 === t || t, this.length_ = 0;
    };

    Jh.prototype.insertItem = function (t) {
      var e = {
        prev: void 0,
        next: void 0,
        data: t
      },
          i = this.head_;

      if (i) {
        var r = i.next;
        e.prev = i, e.next = r, i.next = e, r && (r.prev = e), i === this.last_ && (this.last_ = e);
      } else this.first_ = e, this.last_ = e, this.circular_ && (e.next = e, e.prev = e);

      this.head_ = e, this.length_++;
    }, Jh.prototype.removeItem = function () {
      var t = this.head_;

      if (t) {
        var e = t.next,
            i = t.prev;
        e && (e.prev = i), i && (i.next = e), this.head_ = e || i, this.first_ === this.last_ ? (this.head_ = void 0, this.first_ = void 0, this.last_ = void 0) : this.first_ === t ? this.first_ = this.head_ : this.last_ === t && (this.last_ = i ? this.head_.prev : this.head_), this.length_--;
      }
    }, Jh.prototype.firstItem = function () {
      if (this.head_ = this.first_, this.head_) return this.head_.data;
    }, Jh.prototype.lastItem = function () {
      if (this.head_ = this.last_, this.head_) return this.head_.data;
    }, Jh.prototype.nextItem = function () {
      if (this.head_ && this.head_.next) return this.head_ = this.head_.next, this.head_.data;
    }, Jh.prototype.getNextItem = function () {
      if (this.head_ && this.head_.next) return this.head_.next.data;
    }, Jh.prototype.prevItem = function () {
      if (this.head_ && this.head_.prev) return this.head_ = this.head_.prev, this.head_.data;
    }, Jh.prototype.getPrevItem = function () {
      if (this.head_ && this.head_.prev) return this.head_.prev.data;
    }, Jh.prototype.getCurrItem = function () {
      if (this.head_) return this.head_.data;
    }, Jh.prototype.setFirstItem = function () {
      this.circular_ && this.head_ && (this.first_ = this.head_, this.last_ = this.head_.prev);
    }, Jh.prototype.concat = function (t) {
      if (t.head_) {
        if (this.head_) {
          var e = this.head_.next;
          this.head_.next = t.first_, t.first_.prev = this.head_, e.prev = t.last_, t.last_.next = e, this.length_ += t.length_;
        } else this.head_ = t.head_, this.first_ = t.first_, this.last_ = t.last_, this.length_ = t.length_;

        t.head_ = void 0, t.first_ = void 0, t.last_ = void 0, t.length_ = 0;
      }
    }, Jh.prototype.getLength = function () {
      return this.length_;
    };

    var Qh = Jh,
        $h = function $h(t) {
      this.rbush_ = ua()(t, void 0), this.items_ = {};
    };

    $h.prototype.insert = function (t, e) {
      var i = {
        minX: t[0],
        minY: t[1],
        maxX: t[2],
        maxY: t[3],
        value: e
      };
      this.rbush_.insert(i), this.items_[o(e)] = i;
    }, $h.prototype.load = function (t, e) {
      for (var i = new Array(e.length), r = 0, n = e.length; r < n; r++) {
        var s = t[r],
            a = e[r],
            h = {
          minX: s[0],
          minY: s[1],
          maxX: s[2],
          maxY: s[3],
          value: a
        };
        i[r] = h, this.items_[o(a)] = h;
      }

      this.rbush_.load(i);
    }, $h.prototype.remove = function (t) {
      var e = o(t),
          i = this.items_[e];
      return delete this.items_[e], null !== this.rbush_.remove(i);
    }, $h.prototype.update = function (t, e) {
      var i = this.items_[o(e)];
      dt([i.minX, i.minY, i.maxX, i.maxY], t) || (this.remove(e), this.insert(t, e));
    }, $h.prototype.getAll = function () {
      return this.rbush_.all().map(function (t) {
        return t.value;
      });
    }, $h.prototype.getInExtent = function (t) {
      var e = {
        minX: t[0],
        minY: t[1],
        maxX: t[2],
        maxY: t[3]
      };
      return this.rbush_.search(e).map(function (t) {
        return t.value;
      });
    }, $h.prototype.forEach = function (t, e) {
      return this.forEach_(this.getAll(), t, e);
    }, $h.prototype.forEachInExtent = function (t, e, i) {
      return this.forEach_(this.getInExtent(t), e, i);
    }, $h.prototype.forEach_ = function (t, e, i) {
      for (var r, n = 0, o = t.length; n < o; n++) {
        if (r = e.call(i, t[n])) return r;
      }

      return r;
    }, $h.prototype.isEmpty = function () {
      return d(this.items_);
    }, $h.prototype.clear = function () {
      this.rbush_.clear(), this.items_ = {};
    }, $h.prototype.getExtent = function (t) {
      var e = this.rbush_.toJSON();
      return lt(e.minX, e.minY, e.maxX, e.maxY, t);
    }, $h.prototype.concat = function (t) {
      for (var e in this.rbush_.load(t.rbush_.all()), t.items_) {
        this.items_[e] = t.items_[e];
      }
    };

    var tl = $h,
        el = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.lineStringReplay = new Kh(e, i), this.defaultLocations_ = null, this.styles_ = [], this.styleIndices_ = [], this.state_ = {
          fillColor: null,
          changed: !1
        };
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawCoordinates_ = function (t, e, i) {
        var r = new Qh(),
            n = new tl();
        this.processFlatCoordinates_(t, i, r, n, !0);
        var o = this.getMaxCoords_(r);

        if (e.length) {
          var s,
              a,
              h = [];

          for (s = 0, a = e.length; s < a; ++s) {
            var l = {
              list: new Qh(),
              maxCoords: void 0,
              rtree: new tl()
            };
            h.push(l), this.processFlatCoordinates_(e[s], i, l.list, l.rtree, !1), this.classifyPoints_(l.list, l.rtree, !0), l.maxCoords = this.getMaxCoords_(l.list);
          }

          for (h.sort(function (t, e) {
            return e.maxCoords[0] === t.maxCoords[0] ? t.maxCoords[1] - e.maxCoords[1] : e.maxCoords[0] - t.maxCoords[0];
          }), s = 0; s < h.length; ++s) {
            var u = h[s].list,
                p = u.firstItem(),
                c = p,
                d = void 0;

            do {
              if (this.getIntersections_(c, n).length) {
                d = !0;
                break;
              }

              c = u.nextItem();
            } while (p !== c);

            d || this.bridgeHole_(u, h[s].maxCoords[0], r, o[0], n) && (n.concat(h[s].rtree), this.classifyPoints_(r, n, !1));
          }
        } else this.classifyPoints_(r, n, !1);

        this.triangulate_(r, n);
      }, e.prototype.processFlatCoordinates_ = function (t, e, i, r, n) {
        var o,
            s,
            a,
            h,
            l,
            u = Si(t, 0, t.length, e),
            p = this.vertices.length / 2,
            c = [],
            d = [];

        if (n === u) {
          for (h = a = this.createPoint_(t[0], t[1], p++), o = e, s = t.length; o < s; o += e) {
            l = this.createPoint_(t[o], t[o + 1], p++), d.push(this.insertItem_(h, l, i)), c.push([Math.min(h.x, l.x), Math.min(h.y, l.y), Math.max(h.x, l.x), Math.max(h.y, l.y)]), h = l;
          }

          d.push(this.insertItem_(l, a, i)), c.push([Math.min(h.x, l.x), Math.min(h.y, l.y), Math.max(h.x, l.x), Math.max(h.y, l.y)]);
        } else {
          var f = t.length - e;

          for (h = a = this.createPoint_(t[f], t[f + 1], p++), o = f - e, s = 0; o >= s; o -= e) {
            l = this.createPoint_(t[o], t[o + 1], p++), d.push(this.insertItem_(h, l, i)), c.push([Math.min(h.x, l.x), Math.min(h.y, l.y), Math.max(h.x, l.x), Math.max(h.y, l.y)]), h = l;
          }

          d.push(this.insertItem_(l, a, i)), c.push([Math.min(h.x, l.x), Math.min(h.y, l.y), Math.max(h.x, l.x), Math.max(h.y, l.y)]);
        }

        r.load(c, d);
      }, e.prototype.getMaxCoords_ = function (t) {
        var e = t.firstItem(),
            i = e,
            r = [i.p0.x, i.p0.y];

        do {
          (i = t.nextItem()).p0.x > r[0] && (r = [i.p0.x, i.p0.y]);
        } while (i !== e);

        return r;
      }, e.prototype.classifyPoints_ = function (t, e, i) {
        var r = t.firstItem(),
            n = r,
            o = t.nextItem(),
            s = !1;

        do {
          var a = i ? xh(o.p1.x, o.p1.y, n.p1.x, n.p1.y, n.p0.x, n.p0.y) : xh(n.p0.x, n.p0.y, n.p1.x, n.p1.y, o.p1.x, o.p1.y);
          void 0 === a ? (this.removeItem_(n, o, t, e), s = !0, o === r && (r = t.getNextItem()), o = n, t.prevItem()) : n.p1.reflex !== a && (n.p1.reflex = a, s = !0), n = o, o = t.nextItem();
        } while (n !== r);

        return s;
      }, e.prototype.bridgeHole_ = function (t, e, i, r, n) {
        for (var o = t.firstItem(); o.p1.x !== e;) {
          o = t.nextItem();
        }

        var s,
            a,
            h,
            l,
            u = o.p1,
            p = {
          x: r,
          y: u.y,
          i: -1
        },
            c = 1 / 0,
            d = this.getIntersections_({
          p0: u,
          p1: p
        }, n, !0);

        for (s = 0, a = d.length; s < a; ++s) {
          var f = d[s],
              _ = this.calculateIntersection_(u, p, f.p0, f.p1, !0),
              g = Math.abs(u.x - _[0]);

          g < c && void 0 !== xh(u.x, u.y, f.p0.x, f.p0.y, f.p1.x, f.p1.y) && (c = g, l = {
            x: _[0],
            y: _[1],
            i: -1
          }, o = f);
        }

        if (c === 1 / 0) return !1;

        if (h = o.p1, c > 0) {
          var y = this.getPointsInTriangle_(u, l, o.p1, n);

          if (y.length) {
            var v = 1 / 0;

            for (s = 0, a = y.length; s < a; ++s) {
              var m = y[s],
                  x = Math.atan2(u.y - m.y, p.x - m.x);
              (x < v || x === v && m.x < h.x) && (v = x, h = m);
            }
          }
        }

        for (o = i.firstItem(); o.p1.x !== h.x || o.p1.y !== h.y;) {
          o = i.nextItem();
        }

        var E = {
          x: u.x,
          y: u.y,
          i: u.i,
          reflex: void 0
        },
            S = {
          x: o.p1.x,
          y: o.p1.y,
          i: o.p1.i,
          reflex: void 0
        };
        return t.getNextItem().p0 = E, this.insertItem_(u, o.p1, t, n), this.insertItem_(S, E, t, n), o.p1 = S, t.setFirstItem(), i.concat(t), !0;
      }, e.prototype.triangulate_ = function (t, e) {
        for (var i = !1, r = this.isSimple_(t, e); t.getLength() > 3;) {
          if (r) {
            if (!this.clipEars_(t, e, r, i) && !this.classifyPoints_(t, e, i) && !this.resolveSelfIntersections_(t, e, !0)) break;
          } else if (!this.clipEars_(t, e, r, i) && !this.classifyPoints_(t, e, i) && !this.resolveSelfIntersections_(t, e)) {
            if (!(r = this.isSimple_(t, e))) {
              this.splitPolygon_(t, e);
              break;
            }

            i = !this.isClockwise_(t), this.classifyPoints_(t, e, i);
          }
        }

        if (3 === t.getLength()) {
          var n = this.indices.length;
          this.indices[n++] = t.getPrevItem().p0.i, this.indices[n++] = t.getCurrItem().p0.i, this.indices[n++] = t.getNextItem().p0.i;
        }
      }, e.prototype.clipEars_ = function (t, e, i, r) {
        var n,
            o,
            s,
            a = this.indices.length,
            h = t.firstItem(),
            l = t.getPrevItem(),
            u = h,
            p = t.nextItem(),
            c = t.getNextItem(),
            d = !1;

        do {
          if (n = u.p0, o = u.p1, s = p.p1, !1 === o.reflex) {
            var f = void 0;
            f = i ? 0 === this.getPointsInTriangle_(n, o, s, e, !0).length : r ? this.diagonalIsInside_(c.p1, s, o, n, l.p0) : this.diagonalIsInside_(l.p0, n, o, s, c.p1), (i || 0 === this.getIntersections_({
              p0: n,
              p1: s
            }, e).length) && f && (i || !1 === n.reflex || !1 === s.reflex || Si([l.p0.x, l.p0.y, n.x, n.y, o.x, o.y, s.x, s.y, c.p1.x, c.p1.y], 0, 10, 2) === !r) && (this.indices[a++] = n.i, this.indices[a++] = o.i, this.indices[a++] = s.i, this.removeItem_(u, p, t, e), p === h && (h = c), d = !0);
          }

          l = t.getPrevItem(), u = t.getCurrItem(), p = t.nextItem(), c = t.getNextItem();
        } while (u !== h && t.getLength() > 3);

        return d;
      }, e.prototype.resolveSelfIntersections_ = function (t, e, i) {
        var r = t.firstItem();
        t.nextItem();
        var n = r,
            o = t.nextItem(),
            s = !1;

        do {
          var a = this.calculateIntersection_(n.p0, n.p1, o.p0, o.p1, i);

          if (a) {
            var h = !1,
                l = this.vertices.length,
                u = this.indices.length,
                p = l / 2,
                c = t.prevItem();
            t.removeItem(), e.remove(c), h = c === r;
            var d = void 0;
            if (i ? (a[0] === n.p0.x && a[1] === n.p0.y ? (t.prevItem(), d = n.p0, o.p0 = d, e.remove(n), h = h || n === r) : (d = o.p1, n.p1 = d, e.remove(o), h = h || o === r), t.removeItem()) : (d = this.createPoint_(a[0], a[1], p), n.p1 = d, o.p0 = d, e.update([Math.min(n.p0.x, n.p1.x), Math.min(n.p0.y, n.p1.y), Math.max(n.p0.x, n.p1.x), Math.max(n.p0.y, n.p1.y)], n), e.update([Math.min(o.p0.x, o.p1.x), Math.min(o.p0.y, o.p1.y), Math.max(o.p0.x, o.p1.x), Math.max(o.p0.y, o.p1.y)], o)), this.indices[u++] = c.p0.i, this.indices[u++] = c.p1.i, this.indices[u++] = d.i, s = !0, h) break;
          }

          n = t.getPrevItem(), o = t.nextItem();
        } while (n !== r);

        return s;
      }, e.prototype.isSimple_ = function (t, e) {
        var i = t.firstItem(),
            r = i;

        do {
          if (this.getIntersections_(r, e).length) return !1;
          r = t.nextItem();
        } while (r !== i);

        return !0;
      }, e.prototype.isClockwise_ = function (t) {
        var e = 2 * t.getLength(),
            i = new Array(e),
            r = t.firstItem(),
            n = r,
            o = 0;

        do {
          i[o++] = n.p0.x, i[o++] = n.p0.y, n = t.nextItem();
        } while (n !== r);

        return Si(i, 0, e, 2);
      }, e.prototype.splitPolygon_ = function (t, e) {
        var i = t.firstItem(),
            r = i;

        do {
          var n = this.getIntersections_(r, e);

          if (n.length) {
            var o = n[0],
                s = this.vertices.length / 2,
                a = this.calculateIntersection_(r.p0, r.p1, o.p0, o.p1),
                h = this.createPoint_(a[0], a[1], s),
                l = new Qh(),
                u = new tl();
            this.insertItem_(h, r.p1, l, u), r.p1 = h, e.update([Math.min(r.p0.x, h.x), Math.min(r.p0.y, h.y), Math.max(r.p0.x, h.x), Math.max(r.p0.y, h.y)], r);

            for (var p = t.nextItem(); p !== o;) {
              this.insertItem_(p.p0, p.p1, l, u), e.remove(p), t.removeItem(), p = t.getCurrItem();
            }

            this.insertItem_(o.p0, h, l, u), o.p0 = h, e.update([Math.min(o.p1.x, h.x), Math.min(o.p1.y, h.y), Math.max(o.p1.x, h.x), Math.max(o.p1.y, h.y)], o), this.classifyPoints_(t, e, !1), this.triangulate_(t, e), this.classifyPoints_(l, u, !1), this.triangulate_(l, u);
            break;
          }

          r = t.nextItem();
        } while (r !== i);
      }, e.prototype.createPoint_ = function (t, e, i) {
        var r = this.vertices.length;
        return this.vertices[r++] = t, this.vertices[r++] = e, {
          x: t,
          y: e,
          i: i,
          reflex: void 0
        };
      }, e.prototype.insertItem_ = function (t, e, i, r) {
        var n = {
          p0: t,
          p1: e
        };
        return i.insertItem(n), r && r.insert([Math.min(t.x, e.x), Math.min(t.y, e.y), Math.max(t.x, e.x), Math.max(t.y, e.y)], n), n;
      }, e.prototype.removeItem_ = function (t, e, i, r) {
        i.getCurrItem() === e && (i.removeItem(), t.p1 = e.p1, r.remove(e), r.update([Math.min(t.p0.x, t.p1.x), Math.min(t.p0.y, t.p1.y), Math.max(t.p0.x, t.p1.x), Math.max(t.p0.y, t.p1.y)], t));
      }, e.prototype.getPointsInTriangle_ = function (t, e, i, r, n) {
        for (var o = [], s = r.getInExtent([Math.min(t.x, e.x, i.x), Math.min(t.y, e.y, i.y), Math.max(t.x, e.x, i.x), Math.max(t.y, e.y, i.y)]), a = 0, h = s.length; a < h; ++a) {
          for (var l in s[a]) {
            var u = s[a][l];
            "object" != _typeof(u) || n && !u.reflex || u.x === t.x && u.y === t.y || u.x === e.x && u.y === e.y || u.x === i.x && u.y === i.y || -1 !== o.indexOf(u) || !fi([t.x, t.y, e.x, e.y, i.x, i.y], 0, 6, 2, u.x, u.y) || o.push(u);
          }
        }

        return o;
      }, e.prototype.getIntersections_ = function (t, e, i) {
        for (var r = t.p0, n = t.p1, o = e.getInExtent([Math.min(r.x, n.x), Math.min(r.y, n.y), Math.max(r.x, n.x), Math.max(r.y, n.y)]), s = [], a = 0, h = o.length; a < h; ++a) {
          var l = o[a];
          t !== l && (i || l.p0 !== n || l.p1 !== r) && this.calculateIntersection_(r, n, l.p0, l.p1, i) && s.push(l);
        }

        return s;
      }, e.prototype.calculateIntersection_ = function (t, e, i, r, n) {
        var o = (r.y - i.y) * (e.x - t.x) - (r.x - i.x) * (e.y - t.y);

        if (0 !== o) {
          var s = ((r.x - i.x) * (t.y - i.y) - (r.y - i.y) * (t.x - i.x)) / o,
              a = ((e.x - t.x) * (t.y - i.y) - (e.y - t.y) * (t.x - i.x)) / o;
          if (!n && s > mh && s < 1 - mh && a > mh && a < 1 - mh || n && s >= 0 && s <= 1 && a >= 0 && a <= 1) return [t.x + s * (e.x - t.x), t.y + s * (e.y - t.y)];
        }
      }, e.prototype.diagonalIsInside_ = function (t, e, i, r, n) {
        if (void 0 === e.reflex || void 0 === r.reflex) return !1;
        var o = (i.x - r.x) * (e.y - r.y) > (i.y - r.y) * (e.x - r.x),
            s = (n.x - r.x) * (e.y - r.y) < (n.y - r.y) * (e.x - r.x),
            a = (t.x - e.x) * (r.y - e.y) > (t.y - e.y) * (r.x - e.x),
            h = (i.x - e.x) * (r.y - e.y) < (i.y - e.y) * (r.x - e.x),
            l = r.reflex ? s || o : s && o,
            u = e.reflex ? h || a : h && a;
        return l && u;
      }, e.prototype.drawMultiPolygon = function (t, e) {
        var i,
            r,
            n,
            o,
            s = t.getEndss(),
            a = t.getStride(),
            h = this.indices.length,
            l = this.lineStringReplay.getCurrentIndex(),
            u = t.getFlatCoordinates(),
            p = 0;

        for (i = 0, r = s.length; i < r; ++i) {
          var c = s[i];

          if (c.length > 0) {
            var d = Dt(u, p, c[0], a, -this.origin[0], -this.origin[1]);

            if (d.length) {
              var f = [],
                  _ = void 0;

              for (n = 1, o = c.length; n < o; ++n) {
                c[n] !== c[n - 1] && (_ = Dt(u, c[n - 1], c[n], a, -this.origin[0], -this.origin[1]), f.push(_));
              }

              this.lineStringReplay.drawPolygonCoordinates(d, f, a), this.drawCoordinates_(d, f, a);
            }
          }

          p = c[c.length - 1];
        }

        this.indices.length > h && (this.startIndices.push(h), this.startIndicesFeature.push(e), this.state_.changed && (this.styleIndices_.push(h), this.state_.changed = !1)), this.lineStringReplay.getCurrentIndex() > l && this.lineStringReplay.setPolygonStyle(e, l);
      }, e.prototype.drawPolygon = function (t, e) {
        var i = t.getEnds(),
            r = t.getStride();

        if (i.length > 0) {
          var n = t.getFlatCoordinates().map(Number),
              o = Dt(n, 0, i[0], r, -this.origin[0], -this.origin[1]);

          if (o.length) {
            var s,
                a,
                h,
                l = [];

            for (s = 1, a = i.length; s < a; ++s) {
              i[s] !== i[s - 1] && (h = Dt(n, i[s - 1], i[s], r, -this.origin[0], -this.origin[1]), l.push(h));
            }

            this.startIndices.push(this.indices.length), this.startIndicesFeature.push(e), this.state_.changed && (this.styleIndices_.push(this.indices.length), this.state_.changed = !1), this.lineStringReplay.setPolygonStyle(e), this.lineStringReplay.drawPolygonCoordinates(o, l, r), this.drawCoordinates_(o, l, r);
          }
        }
      }, e.prototype.finish = function (t) {
        this.verticesBuffer = new Th(this.vertices), this.indicesBuffer = new Th(this.indices), this.startIndices.push(this.indices.length), this.lineStringReplay.finish(t), 0 === this.styleIndices_.length && this.styles_.length > 0 && (this.styles_ = []), this.vertices = null, this.indices = null;
      }, e.prototype.getDeleteResourcesFunction = function (t) {
        var e = this.verticesBuffer,
            i = this.indicesBuffer,
            r = this.lineStringReplay.getDeleteResourcesFunction(t);
        return function () {
          t.deleteBuffer(e), t.deleteBuffer(i), r();
        };
      }, e.prototype.setUpProgram = function (t, e, i, r) {
        var n,
            o = e.getProgram(Hh, Zh);
        return this.defaultLocations_ ? n = this.defaultLocations_ : (n = new qh(t, o), this.defaultLocations_ = n), e.useProgram(o), t.enableVertexAttribArray(n.a_position), t.vertexAttribPointer(n.a_position, 2, 5126, !1, 8, 0), n;
      }, e.prototype.shutDownProgram = function (t, e) {
        t.disableVertexAttribArray(e.a_position);
      }, e.prototype.drawReplay = function (t, e, i, r) {
        var n,
            o,
            s,
            a,
            h = t.getParameter(t.DEPTH_FUNC),
            l = t.getParameter(t.DEPTH_WRITEMASK);
        if (r || (t.enable(t.DEPTH_TEST), t.depthMask(!0), t.depthFunc(t.NOTEQUAL)), d(i)) for (s = this.startIndices[this.startIndices.length - 1], n = this.styleIndices_.length - 1; n >= 0; --n) {
          o = this.styleIndices_[n], a = this.styles_[n], this.setFillStyle_(t, a), this.drawElements(t, e, o, s), s = o;
        } else this.drawReplaySkipping_(t, e, i);
        r || (t.disable(t.DEPTH_TEST), t.clear(t.DEPTH_BUFFER_BIT), t.depthMask(l), t.depthFunc(h));
      }, e.prototype.drawHitDetectionReplayOneByOne = function (t, e, i, r, n) {
        var s, a, h, l, u, p, c;

        for (c = this.startIndices.length - 2, h = this.startIndices[c + 1], s = this.styleIndices_.length - 1; s >= 0; --s) {
          for (l = this.styles_[s], this.setFillStyle_(t, l), u = this.styleIndices_[s]; c >= 0 && this.startIndices[c] >= u;) {
            if (a = this.startIndices[c], void 0 === i[o(p = this.startIndicesFeature[c])] && p.getGeometry() && (void 0 === n || Pt(n, p.getGeometry().getExtent()))) {
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.drawElements(t, e, a, h);
              var d = r(p);
              if (d) return d;
            }

            c--, h = a;
          }
        }
      }, e.prototype.drawReplaySkipping_ = function (t, e, i) {
        var r, n, s, a, h, l, u;

        for (l = this.startIndices.length - 2, s = n = this.startIndices[l + 1], r = this.styleIndices_.length - 1; r >= 0; --r) {
          for (a = this.styles_[r], this.setFillStyle_(t, a), h = this.styleIndices_[r]; l >= 0 && this.startIndices[l] >= h;) {
            u = this.startIndices[l], i[o(this.startIndicesFeature[l])] && (n !== s && (this.drawElements(t, e, n, s), t.clear(t.DEPTH_BUFFER_BIT)), s = u), l--, n = u;
          }

          n !== s && (this.drawElements(t, e, n, s), t.clear(t.DEPTH_BUFFER_BIT)), n = s = h;
        }
      }, e.prototype.setFillStyle_ = function (t, e) {
        t.uniform4fv(this.defaultLocations_.u_color, e);
      }, e.prototype.setFillStrokeStyle = function (t, e) {
        var i = t ? t.getColor() : [0, 0, 0, 0];
        if (i = i instanceof CanvasGradient || i instanceof CanvasPattern ? gh : _r(i).map(function (t, e) {
          return 3 != e ? t / 255 : t;
        }) || gh, this.state_.fillColor && Z(i, this.state_.fillColor) || (this.state_.fillColor = i, this.state_.changed = !0, this.styles_.push(i)), e) this.lineStringReplay.setFillStrokeStyle(null, e);else {
          var r = new Er({
            color: [0, 0, 0, 0],
            width: 0
          });
          this.lineStringReplay.setFillStrokeStyle(null, r);
        }
      }, e;
    }(_h),
        il = function il(t, e) {
      this.space_ = e, this.emptyBlocks_ = [{
        x: 0,
        y: 0,
        width: t,
        height: t
      }], this.entries_ = {}, this.context_ = Jn(t, t), this.canvas_ = this.context_.canvas;
    };

    il.prototype.get = function (t) {
      return this.entries_[t] || null;
    }, il.prototype.add = function (t, e, i, r, n) {
      for (var o = 0, s = this.emptyBlocks_.length; o < s; ++o) {
        var a = this.emptyBlocks_[o];

        if (a.width >= e + this.space_ && a.height >= i + this.space_) {
          var h = {
            offsetX: a.x + this.space_,
            offsetY: a.y + this.space_,
            image: this.canvas_
          };
          return this.entries_[t] = h, r.call(n, this.context_, a.x + this.space_, a.y + this.space_), this.split_(o, a, e + this.space_, i + this.space_), h;
        }
      }

      return null;
    }, il.prototype.split_ = function (t, e, i, r) {
      var n, o;
      e.width - i > e.height - r ? (n = {
        x: e.x + i,
        y: e.y,
        width: e.width - i,
        height: e.height
      }, o = {
        x: e.x,
        y: e.y + r,
        width: i,
        height: e.height - r
      }, this.updateBlocks_(t, n, o)) : (n = {
        x: e.x + i,
        y: e.y,
        width: e.width - i,
        height: r
      }, o = {
        x: e.x,
        y: e.y + r,
        width: e.width,
        height: e.height - r
      }, this.updateBlocks_(t, n, o));
    }, il.prototype.updateBlocks_ = function (t, e, i) {
      var r = [t, 1];
      e.width > 0 && e.height > 0 && r.push(e), i.width > 0 && i.height > 0 && r.push(i), this.emptyBlocks_.splice.apply(this.emptyBlocks_, r);
    };

    var rl = il,
        nl = function nl(t) {
      var e = t || {};
      this.currentSize_ = void 0 !== e.initialSize ? e.initialSize : 256, this.maxSize_ = void 0 !== e.maxSize ? e.maxSize : void 0 !== nh ? nh : 2048, this.space_ = void 0 !== e.space ? e.space : 1, this.atlases_ = [new rl(this.currentSize_, this.space_)], this.currentHitSize_ = this.currentSize_, this.hitAtlases_ = [new rl(this.currentHitSize_, this.space_)];
    };

    nl.prototype.getInfo = function (t) {
      var e = this.getInfo_(this.atlases_, t);
      if (!e) return null;
      var i = this.getInfo_(this.hitAtlases_, t);
      return this.mergeInfos_(e, i);
    }, nl.prototype.getInfo_ = function (t, e) {
      for (var i = 0, r = t.length; i < r; ++i) {
        var n = t[i].get(e);
        if (n) return n;
      }

      return null;
    }, nl.prototype.mergeInfos_ = function (t, e) {
      return {
        offsetX: t.offsetX,
        offsetY: t.offsetY,
        image: t.image,
        hitImage: e.image
      };
    }, nl.prototype.add = function (t, e, i, r, n, o) {
      if (e + this.space_ > this.maxSize_ || i + this.space_ > this.maxSize_) return null;
      var s = this.add_(!1, t, e, i, r, o);
      if (!s) return null;
      var a = void 0 !== n ? n : I,
          h = this.add_(!0, t, e, i, a, o);
      return this.mergeInfos_(s, h);
    }, nl.prototype.add_ = function (t, e, i, r, n, o) {
      var s,
          a,
          h,
          l,
          u = t ? this.hitAtlases_ : this.atlases_;

      for (h = 0, l = u.length; h < l; ++h) {
        if (a = (s = u[h]).add(e, i, r, n, o)) return a;

        if (!a && h === l - 1) {
          var p = void 0;
          t ? (p = Math.min(2 * this.currentHitSize_, this.maxSize_), this.currentHitSize_ = p) : (p = Math.min(2 * this.currentSize_, this.maxSize_), this.currentSize_ = p), s = new rl(p, this.space_), u.push(s), ++l;
        }
      }

      return null;
    };

    var ol = nl,
        sl = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.images_ = [], this.textures_ = [], this.measureCanvas_ = Jn(0, 0).canvas, this.state_ = {
          strokeColor: null,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: 0,
          miterLimit: void 0,
          fillColor: null,
          font: void 0,
          scale: void 0
        }, this.text_ = "", this.textAlign_ = void 0, this.textBaseline_ = void 0, this.offsetX_ = void 0, this.offsetY_ = void 0, this.atlases_ = {}, this.currAtlas_ = void 0, this.scale = 1, this.opacity = 1;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawText = function (t, e) {
        if (this.text_) {
          var i = null,
              r = 2,
              n = 2;

          switch (t.getType()) {
            case Nt.POINT:
            case Nt.MULTI_POINT:
              r = (i = t.getFlatCoordinates()).length, n = t.getStride();
              break;

            case Nt.CIRCLE:
              i = t.getCenter();
              break;

            case Nt.LINE_STRING:
              i = t.getFlatMidpoint();
              break;

            case Nt.MULTI_LINE_STRING:
              r = (i = t.getFlatMidpoints()).length;
              break;

            case Nt.POLYGON:
              i = t.getFlatInteriorPoint();
              break;

            case Nt.MULTI_POLYGON:
              r = (i = t.getFlatInteriorPoints()).length;
          }

          this.startIndices.push(this.indices.length), this.startIndicesFeature.push(e);

          var s,
              a,
              h,
              l,
              u,
              p,
              c,
              d,
              f = this.currAtlas_,
              _ = this.text_.split("\n"),
              g = this.getTextSize_(_),
              y = Math.round(g[0] * this.textAlign_ - this.offsetX_),
              v = Math.round(g[1] * this.textBaseline_ - this.offsetY_),
              m = this.state_.lineWidth / 2 * this.state_.scale;

          for (s = 0, a = _.length; s < a; ++s) {
            for (u = 0, p = f.height * s, h = 0, l = (c = _[s].split("")).length; h < l; ++h) {
              if (d = f.atlas.getInfo(c[h])) {
                var x = d.image;
                if (this.anchorX = y - u, this.anchorY = v - p, this.originX = 0 === h ? d.offsetX - m : d.offsetX, this.originY = d.offsetY, this.height = f.height, this.width = 0 === h || h === c.length - 1 ? f.width[c[h]] + m : f.width[c[h]], this.imageHeight = x.height, this.imageWidth = x.width, 0 === this.images_.length) this.images_.push(x);else o(this.images_[this.images_.length - 1]) != o(x) && (this.groupIndices.push(this.indices.length), this.images_.push(x));
                this.drawText_(i, 0, r, n);
              }

              u += this.width;
            }
          }
        }
      }, e.prototype.getTextSize_ = function (t) {
        var e = this,
            i = this.currAtlas_,
            r = t.length * i.height;
        return [t.map(function (t) {
          for (var r = 0, n = 0, o = t.length; n < o; ++n) {
            var s = t[n];
            i.width[s] || e.addCharToAtlas_(s), r += i.width[s] ? i.width[s] : 0;
          }

          return r;
        }).reduce(function (t, e) {
          return Math.max(t, e);
        }), r];
      }, e.prototype.drawText_ = function (t, e, i, r) {
        for (var n = e, o = i; n < o; n += r) {
          this.drawCoordinates(t, e, i, r);
        }
      }, e.prototype.addCharToAtlas_ = function (t) {
        if (1 === t.length) {
          var e = this.currAtlas_,
              i = this.state_,
              r = this.measureCanvas_.getContext("2d");
          r.font = i.font;
          var n = Math.ceil(r.measureText(t).width * i.scale);
          e.atlas.add(t, n, e.height, function (e, r, n) {
            e.font = i.font, e.fillStyle = i.fillColor, e.strokeStyle = i.strokeColor, e.lineWidth = i.lineWidth, e.lineCap = i.lineCap, e.lineJoin = i.lineJoin, e.miterLimit = i.miterLimit, e.textAlign = "left", e.textBaseline = "top", ki && i.lineDash && (e.setLineDash(i.lineDash), e.lineDashOffset = i.lineDashOffset), 1 !== i.scale && e.setTransform(i.scale, 0, 0, i.scale, 0, 0), i.strokeColor && e.strokeText(t, r, n), i.fillColor && e.fillText(t, r, n);
          }) && (e.width[t] = n);
        }
      }, e.prototype.finish = function (e) {
        var i = e.getGL();
        this.groupIndices.push(this.indices.length), this.hitDetectionGroupIndices = this.groupIndices, this.verticesBuffer = new Th(this.vertices), this.indicesBuffer = new Th(this.indices);
        this.createTextures(this.textures_, this.images_, {}, i), this.state_ = {
          strokeColor: null,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: 0,
          miterLimit: void 0,
          fillColor: null,
          font: void 0,
          scale: void 0
        }, this.text_ = "", this.textAlign_ = void 0, this.textBaseline_ = void 0, this.offsetX_ = void 0, this.offsetY_ = void 0, this.images_ = null, this.atlases_ = {}, this.currAtlas_ = void 0, t.prototype.finish.call(this, e);
      }, e.prototype.setTextStyle = function (t) {
        var e = this.state_,
            i = t.getFill(),
            r = t.getStroke();

        if (t && t.getText() && (i || r)) {
          if (i) {
            var n = i.getColor();
            e.fillColor = Ys(n || gh);
          } else e.fillColor = null;

          if (r) {
            var o = r.getColor();
            e.strokeColor = Ys(o || vh), e.lineWidth = r.getWidth() || 1, e.lineCap = r.getLineCap() || "round", e.lineDashOffset = r.getLineDashOffset() || 0, e.lineJoin = r.getLineJoin() || "round", e.miterLimit = r.getMiterLimit() || 10;
            var s = r.getLineDash();
            e.lineDash = s ? s.slice() : yh;
          } else e.strokeColor = null, e.lineWidth = 0;

          e.font = t.getFont() || "10px sans-serif", e.scale = t.getScale() || 1, this.text_ = t.getText();
          var a = Sa[t.getTextAlign()],
              h = Sa[t.getTextBaseline()];
          this.textAlign_ = void 0 === a ? .5 : a, this.textBaseline_ = void 0 === h ? .5 : h, this.offsetX_ = t.getOffsetX() || 0, this.offsetY_ = t.getOffsetY() || 0, this.rotateWithView = !!t.getRotateWithView(), this.rotation = t.getRotation() || 0, this.currAtlas_ = this.getAtlas_(e);
        } else this.text_ = "";
      }, e.prototype.getAtlas_ = function (t) {
        var e = [];

        for (var i in t) {
          (t[i] || 0 === t[i]) && (Array.isArray(t[i]) ? e = e.concat(t[i]) : e.push(t[i]));
        }

        var r = this.calculateHash_(e);

        if (!this.atlases_[r]) {
          var n = this.measureCanvas_.getContext("2d");
          n.font = t.font;
          var o = Math.ceil((1.5 * n.measureText("M").width + t.lineWidth / 2) * t.scale);
          this.atlases_[r] = {
            atlas: new ol({
              space: t.lineWidth + 1
            }),
            width: {},
            height: o
          };
        }

        return this.atlases_[r];
      }, e.prototype.calculateHash_ = function (t) {
        for (var e = "", i = 0, r = t.length; i < r; ++i) {
          e += t[i];
        }

        return e;
      }, e.prototype.getTextures = function (t) {
        return this.textures_;
      }, e.prototype.getHitDetectionTextures = function () {
        return this.textures_;
      }, e;
    }(Fh),
        al = [1, 1],
        hl = {
      Circle: Ch,
      Image: Ah,
      LineString: Kh,
      Polygon: el,
      Text: sl
    },
        ll = function (t) {
      function e(e, i, r) {
        t.call(this), this.maxExtent_ = i, this.tolerance_ = e, this.renderBuffer_ = r, this.replaysByZIndex_ = {};
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addDeclutter = function (t) {
        return [];
      }, e.prototype.getDeleteResourcesFunction = function (t) {
        var e,
            i = [];

        for (e in this.replaysByZIndex_) {
          var r = this.replaysByZIndex_[e];

          for (var n in r) {
            i.push(r[n].getDeleteResourcesFunction(t));
          }
        }

        return function () {
          for (var t, e = arguments, r = i.length, n = 0; n < r; n++) {
            t = i[n].apply(this, e);
          }

          return t;
        };
      }, e.prototype.finish = function (t) {
        var e;

        for (e in this.replaysByZIndex_) {
          var i = this.replaysByZIndex_[e];

          for (var r in i) {
            i[r].finish(t);
          }
        }
      }, e.prototype.getReplay = function (t, e) {
        var i = void 0 !== t ? t.toString() : "0",
            r = this.replaysByZIndex_[i];
        void 0 === r && (r = {}, this.replaysByZIndex_[i] = r);
        var n = r[e];
        void 0 === n && (n = new (0, hl[e])(this.tolerance_, this.maxExtent_), r[e] = n);
        return n;
      }, e.prototype.isEmpty = function () {
        return d(this.replaysByZIndex_);
      }, e.prototype.replay = function (t, e, i, r, n, o, s, a) {
        var h,
            l,
            u,
            p,
            c,
            d,
            f = Object.keys(this.replaysByZIndex_).map(Number);

        for (f.sort(V), h = 0, l = f.length; h < l; ++h) {
          for (c = this.replaysByZIndex_[f[h].toString()], u = 0, p = Ea.length; u < p; ++u) {
            d = c[Ea[u]], void 0 !== d && d.replay(t, e, i, r, n, o, s, a, void 0, !1);
          }
        }
      }, e.prototype.replayHitDetection_ = function (t, e, i, r, n, o, s, a, h, l, u) {
        var p,
            c,
            d,
            f,
            _,
            g,
            y = Object.keys(this.replaysByZIndex_).map(Number);

        for (y.sort(function (t, e) {
          return e - t;
        }), p = 0, c = y.length; p < c; ++p) {
          for (f = this.replaysByZIndex_[y[p].toString()], d = Ea.length - 1; d >= 0; --d) {
            if (void 0 !== (_ = f[Ea[d]]) && (g = _.replay(t, e, i, r, n, o, s, a, h, l, u))) return g;
          }
        }
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n, o, s, a, h, l) {
        var u,
            p = e.getGL();
        return p.bindFramebuffer(p.FRAMEBUFFER, e.getHitDetectionFramebuffer()), void 0 !== this.renderBuffer_ && (u = et(pt(t), r * this.renderBuffer_)), this.replayHitDetection_(e, t, r, n, al, s, a, h, function (t) {
          var e = new Uint8Array(4);

          if (p.readPixels(0, 0, 1, 1, p.RGBA, p.UNSIGNED_BYTE, e), e[3] > 0) {
            var i = l(t);
            if (i) return i;
          }
        }, !0, u);
      }, e.prototype.hasFeatureAtCoordinate = function (t, e, i, r, n, o, s, a, h) {
        var l = e.getGL();
        return l.bindFramebuffer(l.FRAMEBUFFER, e.getHitDetectionFramebuffer()), void 0 !== this.replayHitDetection_(e, t, r, n, al, s, a, h, function (t) {
          var e = new Uint8Array(4);
          return l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, e), e[3] > 0;
        }, !1);
      }, e;
    }(ca),
        ul = function (t) {
      function e(e, i, r, n, o, s, a) {
        t.call(this), this.context_ = e, this.center_ = i, this.extent_ = s, this.pixelRatio_ = a, this.size_ = o, this.rotation_ = n, this.resolution_ = r, this.imageStyle_ = null, this.fillStyle_ = null, this.strokeStyle_ = null, this.textStyle_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.drawText_ = function (t, e) {
        var i = this.context_,
            r = t.getReplay(0, da.TEXT);
        r.setTextStyle(this.textStyle_), r.drawText(e, null), r.finish(i);
        r.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), r.getDeleteResourcesFunction(i)();
      }, e.prototype.setStyle = function (t) {
        this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
      }, e.prototype.drawGeometry = function (t) {
        switch (t.getType()) {
          case Nt.POINT:
            this.drawPoint(t, null);
            break;

          case Nt.LINE_STRING:
            this.drawLineString(t, null);
            break;

          case Nt.POLYGON:
            this.drawPolygon(t, null);
            break;

          case Nt.MULTI_POINT:
            this.drawMultiPoint(t, null);
            break;

          case Nt.MULTI_LINE_STRING:
            this.drawMultiLineString(t, null);
            break;

          case Nt.MULTI_POLYGON:
            this.drawMultiPolygon(t, null);
            break;

          case Nt.GEOMETRY_COLLECTION:
            this.drawGeometryCollection(t, null);
            break;

          case Nt.CIRCLE:
            this.drawCircle(t, null);
        }
      }, e.prototype.drawFeature = function (t, e) {
        var i = e.getGeometryFunction()(t);
        i && Pt(this.extent_, i.getExtent()) && (this.setStyle(e), this.drawGeometry(i));
      }, e.prototype.drawGeometryCollection = function (t, e) {
        var i,
            r,
            n = t.getGeometriesArray();

        for (i = 0, r = n.length; i < r; ++i) {
          this.drawGeometry(n[i]);
        }
      }, e.prototype.drawPoint = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.IMAGE);
        n.setImageStyle(this.imageStyle_), n.drawPoint(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.drawMultiPoint = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.IMAGE);
        n.setImageStyle(this.imageStyle_), n.drawMultiPoint(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.drawLineString = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.LINE_STRING);
        n.setFillStrokeStyle(null, this.strokeStyle_), n.drawLineString(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.drawMultiLineString = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.LINE_STRING);
        n.setFillStrokeStyle(null, this.strokeStyle_), n.drawMultiLineString(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.drawPolygon = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.POLYGON);
        n.setFillStrokeStyle(this.fillStyle_, this.strokeStyle_), n.drawPolygon(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.drawMultiPolygon = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.POLYGON);
        n.setFillStrokeStyle(this.fillStyle_, this.strokeStyle_), n.drawMultiPolygon(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.drawCircle = function (t, e) {
        var i = this.context_,
            r = new ll(1, this.extent_),
            n = r.getReplay(0, da.CIRCLE);
        n.setFillStrokeStyle(this.fillStyle_, this.strokeStyle_), n.drawCircle(t, e), n.finish(i);
        n.replay(this.context_, this.center_, this.resolution_, this.rotation_, this.size_, this.pixelRatio_, 1, {}, void 0, !1), n.getDeleteResourcesFunction(i)(), this.textStyle_ && this.drawText_(r, t);
      }, e.prototype.setImageStyle = function (t) {
        this.imageStyle_ = t;
      }, e.prototype.setFillStrokeStyle = function (t, e) {
        this.fillStyle_ = t, this.strokeStyle_ = e;
      }, e.prototype.setTextStyle = function (t) {
        this.textStyle_ = t;
      }, e;
    }(Vs),
        pl = new lh("precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform float u_opacity;\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_texture, v_texCoord);\n  gl_FragColor.rgb = texColor.rgb;\n  gl_FragColor.a = texColor.a * u_opacity;\n}\n"),
        cl = new uh("varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\n\nuniform mat4 u_texCoordMatrix;\nuniform mat4 u_projectionMatrix;\n\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.);\n  v_texCoord = (u_texCoordMatrix * vec4(a_texCoord, 0., 1.)).st;\n}\n\n\n"),
        dl = function dl(t, e) {
      this.u_texCoordMatrix = t.getUniformLocation(e, "u_texCoordMatrix"), this.u_projectionMatrix = t.getUniformLocation(e, "u_projectionMatrix"), this.u_opacity = t.getUniformLocation(e, "u_opacity"), this.u_texture = t.getUniformLocation(e, "u_texture"), this.a_position = t.getAttribLocation(e, "a_position"), this.a_texCoord = t.getAttribLocation(e, "a_texCoord");
    },
        fl = function (t) {
      function e(e, i) {
        t.call(this, i), this.mapRenderer = e, this.arrayBuffer_ = new Th([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]), this.texture = null, this.framebuffer = null, this.framebufferDimension = void 0, this.texCoordMatrix = [1, 0, 0, 1, 0, 0], this.projectionMatrix = [1, 0, 0, 1, 0, 0], this.tmpMat4_ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.defaultLocations_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bindFramebuffer = function (t, e) {
        var i = this.mapRenderer.getGL();

        if (void 0 === this.framebufferDimension || this.framebufferDimension != e) {
          var r = function (t, e, i) {
            t.isContextLost() || (t.deleteFramebuffer(e), t.deleteTexture(i));
          }.bind(null, i, this.framebuffer, this.texture);

          t.postRenderFunctions.push(r);
          var n = Ph(i, e, e),
              o = i.createFramebuffer();
          i.bindFramebuffer(36160, o), i.framebufferTexture2D(36160, 36064, eh, n, 0), this.texture = n, this.framebuffer = o, this.framebufferDimension = e;
        } else i.bindFramebuffer(36160, this.framebuffer);
      }, e.prototype.composeFrame = function (t, e, i) {
        this.dispatchComposeEvent_(ur.PRECOMPOSE, i, t), i.bindBuffer(34962, this.arrayBuffer_);
        var r,
            n = i.getGL(),
            o = i.getProgram(pl, cl);
        this.defaultLocations_ ? r = this.defaultLocations_ : (r = new dl(n, o), this.defaultLocations_ = r), i.useProgram(o) && (n.enableVertexAttribArray(r.a_position), n.vertexAttribPointer(r.a_position, 2, 5126, !1, 16, 0), n.enableVertexAttribArray(r.a_texCoord), n.vertexAttribPointer(r.a_texCoord, 2, 5126, !1, 16, 8), n.uniform1i(r.u_texture, 0)), n.uniformMatrix4fv(r.u_texCoordMatrix, !1, fh(this.tmpMat4_, this.getTexCoordMatrix())), n.uniformMatrix4fv(r.u_projectionMatrix, !1, fh(this.tmpMat4_, this.getProjectionMatrix())), n.uniform1f(r.u_opacity, e.opacity), n.bindTexture(eh, this.getTexture()), n.drawArrays(5, 0, 4), this.dispatchComposeEvent_(ur.POSTCOMPOSE, i, t);
      }, e.prototype.dispatchComposeEvent_ = function (t, e, i) {
        var r = this.getLayer();

        if (r.hasListener(t)) {
          var n = i.viewState,
              o = n.resolution,
              s = i.pixelRatio,
              a = i.extent,
              h = n.center,
              l = n.rotation,
              u = i.size,
              p = new ul(e, h, o, l, u, a, s),
              c = new Cs(t, p, i, null, e);
          r.dispatchEvent(c);
        }
      }, e.prototype.getTexCoordMatrix = function () {
        return this.texCoordMatrix;
      }, e.prototype.getTexture = function () {
        return this.texture;
      }, e.prototype.getProjectionMatrix = function () {
        return this.projectionMatrix;
      }, e.prototype.handleWebGLContextLost = function () {
        this.texture = null, this.framebuffer = null, this.framebufferDimension = void 0;
      }, e.prototype.prepareFrame = function (t, e, i) {
        return r();
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, n) {
        return r();
      }, e;
    }($s),
        _l = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.image_ = null, this.hitCanvasContext_ = null, this.hitTransformationMatrix_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createTexture_ = function (t) {
        var e = t.getImage();
        return bh(this.mapRenderer.getGL(), e, 33071, 33071);
      }, e.prototype.prepareFrame = function (t, e, i) {
        var r = this.mapRenderer.getGL(),
            n = t.pixelRatio,
            o = t.viewState,
            s = o.center,
            a = o.resolution,
            h = o.rotation,
            l = this.image_,
            u = this.texture,
            p = this.getLayer().getSource(),
            c = t.viewHints,
            d = t.extent;

        if (void 0 !== e.extent && (d = wt(d, e.extent)), !c[kn] && !c[jn] && !bt(d)) {
          var f = o.projection,
              _ = p.getImage(d, a, n, f);

          if (_) if (this.loadImage(_) && (l = _, u = this.createTexture_(_), this.texture)) {
            var g = function (t, e) {
              t.isContextLost() || t.deleteTexture(e);
            }.bind(null, r, this.texture);

            t.postRenderFunctions.push(g);
          }
        }

        if (l) {
          var y = this.mapRenderer.getContext().getCanvas();
          this.updateProjectionMatrix_(y.width, y.height, n, s, a, h, l.getExtent()), this.hitTransformationMatrix_ = null;
          var v = this.texCoordMatrix;
          Fe(v), je(v, 1, -1), Ue(v, 0, -1), this.image_ = l, this.texture = u;
        }

        return !!l;
      }, e.prototype.updateProjectionMatrix_ = function (t, e, i, r, n, o, s) {
        var a = t * n,
            h = e * n,
            l = this.projectionMatrix;
        Fe(l), je(l, 2 * i / a, 2 * i / h), ke(l, -o), Ue(l, s[0] - r[0], s[1] - r[1]), je(l, (s[2] - s[0]) / 2, (s[3] - s[1]) / 2), Ue(l, 1, 1);
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, r) {
        if (this.image_ && this.image_.getImage()) {
          var n = [this.image_.getImage().width, this.image_.getImage().height];
          this.hitTransformationMatrix_ || (this.hitTransformationMatrix_ = this.getHitTransformationMatrix_(e.size, n));
          var o = De(this.hitTransformationMatrix_, t.slice());

          if (!(o[0] < 0 || o[0] > n[0] || o[1] < 0 || o[1] > n[1])) {
            this.hitCanvasContext_ || (this.hitCanvasContext_ = Jn(1, 1)), this.hitCanvasContext_.clearRect(0, 0, 1, 1), this.hitCanvasContext_.drawImage(this.image_.getImage(), o[0], o[1], 1, 1, 0, 0, 1, 1);
            var s = this.hitCanvasContext_.getImageData(0, 0, 1, 1).data;
            return s[3] > 0 ? i.call(r, this.getLayer(), s) : void 0;
          }
        }
      }, e.prototype.getHitTransformationMatrix_ = function (t, e) {
        var i = [1, 0, 0, 1, 0, 0];
        Ue(i, -1, -1), je(i, 2 / t[0], 2 / t[1]), Ue(i, 0, t[1]), je(i, 1, -1);
        var r = Be(this.projectionMatrix.slice()),
            n = [1, 0, 0, 1, 0, 0];
        return Ue(n, 0, e[1]), je(n, 1, -1), je(n, e[0] / 2, e[1] / 2), Ue(n, 1, 1), Ae(n, r), Ae(n, i), n;
      }, e;
    }(fl);

    _l.handles = function (t) {
      return t.getType() === Ss.IMAGE;
    }, _l.create = function (t, e) {
      return new _l(t, e);
    };

    var gl = _l,
        yl = function (t) {
      function e(e) {
        t.call(this, e);
        var i = e.getViewport();
        this.canvas_ = document.createElement("canvas"), this.canvas_.style.width = "100%", this.canvas_.style.height = "100%", this.canvas_.style.display = "block", this.canvas_.className = fo, i.insertBefore(this.canvas_, i.childNodes[0] || null), this.clipTileCanvasWidth_ = 0, this.clipTileCanvasHeight_ = 0, this.clipTileContext_ = Jn(), this.renderedVisible_ = !0, this.gl_ = rh(this.canvas_, {
          antialias: !0,
          depth: !0,
          failIfMajorPerformanceCaveat: !0,
          preserveDrawingBuffer: !1,
          stencil: !0
        }), this.context_ = new Mh(this.canvas_, this.gl_), v(this.canvas_, Lh.LOST, this.handleWebGLContextLost, this), v(this.canvas_, Lh.RESTORED, this.handleWebGLContextRestored, this), this.textureCache_ = new Rs(), this.focus_ = null, this.tileTextureQueue_ = new bn(function (t) {
          var e = t[1],
              i = t[2],
              r = e[0] - this.focus_[0],
              n = e[1] - this.focus_[1];
          return 65536 * Math.log(i) + Math.sqrt(r * r + n * n) / i;
        }.bind(this), function (t) {
          return t[0].getKey();
        }), this.loadNextTileTexture_ = function (t, e) {
          if (!this.tileTextureQueue_.isEmpty()) {
            this.tileTextureQueue_.reprioritize();
            var i = this.tileTextureQueue_.dequeue(),
                r = i[0],
                n = i[3],
                o = i[4];
            this.bindTileTexture(r, n, o, Qa, Qa);
          }

          return !1;
        }.bind(this), this.textureCacheFrameMarkerCount_ = 0, this.initializeGL_();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bindTileTexture = function (t, e, i, r, n) {
        var o = this.getGL(),
            s = t.getKey();

        if (this.textureCache_.containsKey(s)) {
          var a = this.textureCache_.get(s);
          o.bindTexture(eh, a.texture), a.magFilter != r && (o.texParameteri(eh, 10240, r), a.magFilter = r), a.minFilter != n && (o.texParameteri(eh, 10241, n), a.minFilter = n);
        } else {
          var h = o.createTexture(),
              l = t;

          if (o.bindTexture(eh, h), i > 0) {
            var u = this.clipTileContext_.canvas,
                p = this.clipTileContext_;
            this.clipTileCanvasWidth_ !== e[0] || this.clipTileCanvasHeight_ !== e[1] ? (u.width = e[0], u.height = e[1], this.clipTileCanvasWidth_ = e[0], this.clipTileCanvasHeight_ = e[1]) : p.clearRect(0, 0, e[0], e[1]), p.drawImage(l.getImage(), i, i, e[0], e[1], 0, 0, e[0], e[1]), o.texImage2D(eh, 0, 6408, 6408, 5121, u);
          } else o.texImage2D(eh, 0, 6408, 6408, 5121, l.getImage());

          o.texParameteri(eh, 10240, r), o.texParameteri(eh, 10241, n), o.texParameteri(eh, $a, 33071), o.texParameteri(eh, th, 33071), this.textureCache_.set(s, {
            texture: h,
            magFilter: r,
            minFilter: n
          });
        }
      }, e.prototype.dispatchRenderEvent = function (t, e) {
        var i = this.getMap();

        if (i.hasListener(t)) {
          var r = this.context_,
              n = e.extent,
              o = e.size,
              s = e.viewState,
              a = e.pixelRatio,
              h = s.resolution,
              l = s.center,
              u = s.rotation,
              p = new ul(r, l, h, u, o, n, a),
              c = new Cs(t, p, e, null, r);
          i.dispatchEvent(c);
        }
      }, e.prototype.disposeInternal = function () {
        var e = this.getGL();
        e.isContextLost() || this.textureCache_.forEach(function (t) {
          t && e.deleteTexture(t.texture);
        }), this.context_.dispose(), t.prototype.disposeInternal.call(this);
      }, e.prototype.expireCache_ = function (t, e) {
        for (var i, r = this.getGL(); this.textureCache_.getCount() - this.textureCacheFrameMarkerCount_ > 1024;) {
          if (i = this.textureCache_.peekLast()) r.deleteTexture(i.texture);else {
            if (+this.textureCache_.peekLastKey() == e.index) break;
            --this.textureCacheFrameMarkerCount_;
          }
          this.textureCache_.pop();
        }
      }, e.prototype.getContext = function () {
        return this.context_;
      }, e.prototype.getGL = function () {
        return this.gl_;
      }, e.prototype.getTileTextureQueue = function () {
        return this.tileTextureQueue_;
      }, e.prototype.handleWebGLContextLost = function (t) {
        t.preventDefault(), this.textureCache_.clear(), this.textureCacheFrameMarkerCount_ = 0;
        var e = this.getLayerRenderers();

        for (var i in e) {
          e[i].handleWebGLContextLost();
        }
      }, e.prototype.handleWebGLContextRestored = function () {
        this.initializeGL_(), this.getMap().render();
      }, e.prototype.initializeGL_ = function () {
        var t = this.gl_;
        t.activeTexture(33984), t.blendFuncSeparate(770, 771, 1, 771), t.disable(2884), t.disable(2929), t.disable(3089), t.disable(2960);
      }, e.prototype.isTileTextureLoaded = function (t) {
        return this.textureCache_.containsKey(t.getKey());
      }, e.prototype.renderFrame = function (t) {
        var e = this.getContext(),
            i = this.getGL();
        if (i.isContextLost()) return !1;
        if (!t) return this.renderedVisible_ && (this.canvas_.style.display = "none", this.renderedVisible_ = !1), !1;
        this.focus_ = t.focus, this.textureCache_.set((-t.index).toString(), null), ++this.textureCacheFrameMarkerCount_, this.dispatchRenderEvent(ur.PRECOMPOSE, t);
        var r = [],
            n = t.layerStatesArray;
        q(n, Zs);
        var o,
            s,
            a = t.viewState.resolution;

        for (o = 0, s = n.length; o < s; ++o) {
          var h = n[o];
          if (mo(h, a) && h.sourceState == ro.READY) this.getLayerRenderer(h.layer).prepareFrame(t, h, e) && r.push(h);
        }

        var l = t.size[0] * t.pixelRatio,
            u = t.size[1] * t.pixelRatio;

        for (this.canvas_.width == l && this.canvas_.height == u || (this.canvas_.width = l, this.canvas_.height = u), i.bindFramebuffer(36160, null), i.clearColor(0, 0, 0, 0), i.clear(16384), i.enable(3042), i.viewport(0, 0, this.canvas_.width, this.canvas_.height), o = 0, s = r.length; o < s; ++o) {
          var p = r[o];
          this.getLayerRenderer(p.layer).composeFrame(t, p, e);
        }

        this.renderedVisible_ || (this.canvas_.style.display = "", this.renderedVisible_ = !0), this.calculateMatrices2D(t), this.textureCache_.getCount() - this.textureCacheFrameMarkerCount_ > 1024 && t.postRenderFunctions.push(this.expireCache_.bind(this)), this.tileTextureQueue_.isEmpty() || (t.postRenderFunctions.push(this.loadNextTileTexture_), t.animate = !0), this.dispatchRenderEvent(ur.POSTCOMPOSE, t), this.scheduleRemoveUnusedLayerRenderers(t), this.scheduleExpireIconCache(t);
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n, o, s) {
        var a;
        if (this.getGL().isContextLost()) return !1;
        var h,
            l = e.viewState,
            u = e.layerStatesArray;

        for (h = u.length - 1; h >= 0; --h) {
          var p = u[h],
              c = p.layer;
          if (mo(p, l.resolution) && o.call(s, c)) if (a = this.getLayerRenderer(c).forEachFeatureAtCoordinate(t, e, i, r)) return a;
        }
      }, e.prototype.hasFeatureAtCoordinate = function (t, e, i, r, n) {
        var o = !1;
        if (this.getGL().isContextLost()) return !1;
        var s,
            a = e.viewState,
            h = e.layerStatesArray;

        for (s = h.length - 1; s >= 0; --s) {
          var l = h[s],
              u = l.layer;
          if (mo(l, a.resolution) && r.call(n, u)) if (o = this.getLayerRenderer(u).hasFeatureAtCoordinate(t, e)) return !0;
        }

        return o;
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, r, n, o, s) {
        if (this.getGL().isContextLost()) return !1;
        var a,
            h,
            l = e.viewState,
            u = e.layerStatesArray;

        for (h = u.length - 1; h >= 0; --h) {
          var p = u[h],
              c = p.layer;
          if (mo(p, l.resolution) && o.call(n, c)) if (a = this.getLayerRenderer(c).forEachLayerAtPixel(t, e, r, n)) return a;
        }
      }, e;
    }(qs),
        vl = function (t) {
      function e(e, i, r) {
        t.call(this);
        var n = r || {};
        this.tileCoord = e, this.state = i, this.interimTile = null, this.key = "", this.transition_ = void 0 === n.transition ? 250 : n.transition, this.transitionStarts_ = {};
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.changed = function () {
        this.dispatchEvent(M.CHANGE);
      }, e.prototype.getKey = function () {
        return this.key + "/" + this.tileCoord;
      }, e.prototype.getInterimTile = function () {
        if (!this.interimTile) return this;
        var t = this.interimTile;

        do {
          if (t.getState() == On.LOADED) return t;
          t = t.interimTile;
        } while (t);

        return this;
      }, e.prototype.refreshInterimChain = function () {
        if (this.interimTile) {
          var t = this.interimTile,
              e = this;

          do {
            if (t.getState() == On.LOADED) {
              t.interimTile = null;
              break;
            }

            t.getState() == On.LOADING ? e = t : t.getState() == On.IDLE ? e.interimTile = t.interimTile : e = t, t = e.interimTile;
          } while (t);
        }
      }, e.prototype.getTileCoord = function () {
        return this.tileCoord;
      }, e.prototype.getState = function () {
        return this.state;
      }, e.prototype.setState = function (t) {
        this.state = t, this.changed();
      }, e.prototype.load = function () {}, e.prototype.getAlpha = function (t, e) {
        if (!this.transition_) return 1;
        var i = this.transitionStarts_[t];

        if (i) {
          if (-1 === i) return 1;
        } else i = e, this.transitionStarts_[t] = i;

        var r = e - i + 1e3 / 60;
        return r >= this.transition_ ? 1 : Vn(r / this.transition_);
      }, e.prototype.inTransition = function (t) {
        return !!this.transition_ && -1 !== this.transitionStarts_[t];
      }, e.prototype.endTransition = function (t) {
        this.transition_ && (this.transitionStarts_[t] = -1);
      }, e;
    }(b);

    function ml() {
      var t = Jn(1, 1);
      return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), t.canvas;
    }

    var xl = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i, s), this.crossOrigin_ = n, this.src_ = r, this.image_ = new Image(), null !== n && (this.image_.crossOrigin = n), this.imageListenerKeys_ = null, this.tileLoadFunction_ = o;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.state == On.LOADING && (this.unlistenImage_(), this.image_ = ml()), this.interimTile && this.interimTile.dispose(), this.state = On.ABORT, this.changed(), t.prototype.disposeInternal.call(this);
      }, e.prototype.getImage = function () {
        return this.image_;
      }, e.prototype.getKey = function () {
        return this.src_;
      }, e.prototype.handleImageError_ = function () {
        this.state = On.ERROR, this.unlistenImage_(), this.image_ = ml(), this.changed();
      }, e.prototype.handleImageLoad_ = function () {
        var t = this.image_;
        t.naturalWidth && t.naturalHeight ? this.state = On.LOADED : this.state = On.EMPTY, this.unlistenImage_(), this.changed();
      }, e.prototype.load = function () {
        this.state == On.ERROR && (this.state = On.IDLE, this.image_ = new Image(), null !== this.crossOrigin_ && (this.image_.crossOrigin = this.crossOrigin_)), this.state == On.IDLE && (this.state = On.LOADING, this.changed(), this.imageListenerKeys_ = [m(this.image_, M.ERROR, this.handleImageError_, this), m(this.image_, M.LOAD, this.handleImageLoad_, this)], this.tileLoadFunction_(this, this.src_));
      }, e.prototype.unlistenImage_ = function () {
        this.imageListenerKeys_.forEach(E), this.imageListenerKeys_ = null;
      }, e;
    }(vl);

    function El(t, e, i, r) {
      return void 0 !== r ? (r[0] = t, r[1] = e, r[2] = i, r) : [t, e, i];
    }

    function Sl(t, e, i) {
      return t + "/" + e + "/" + i;
    }

    function Tl(t) {
      return Sl(t[0], t[1], t[2]);
    }

    function Cl(t) {
      return (t[1] << t[0]) + t[2];
    }

    var Rl = function (t) {
      function e(e) {
        t.call(this, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.expireCache = function (t) {
        for (; this.canExpireCache();) {
          var e = this.peekLast(),
              i = e.tileCoord[0].toString();
          if (i in t && t[i].contains(e.tileCoord)) break;
          this.pop().dispose();
        }
      }, e.prototype.pruneExceptNewestZ = function () {
        if (0 !== this.getCount()) {
          var t = function (t) {
            return t.split("/").map(Number);
          }(this.peekFirstKey())[0];

          this.forEach(function (e) {
            e.tileCoord[0] !== t && (this.remove(Tl(e.tileCoord)), e.dispose());
          }, this);
        }
      }, e;
    }(Rs);

    function wl(t) {
      return t ? Array.isArray(t) ? function (e) {
        return t;
      } : "function" == typeof t ? t : function (e) {
        return [t];
      } : null;
    }

    var Il = function (t) {
      function e(e) {
        t.call(this), this.projection_ = Ee(e.projection), this.attributions_ = wl(e.attributions), this.attributionsCollapsible_ = void 0 === e.attributionsCollapsible || e.attributionsCollapsible, this.loading = !1, this.state_ = void 0 !== e.state ? e.state : ro.READY, this.wrapX_ = void 0 !== e.wrapX && e.wrapX;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getAttributions = function () {
        return this.attributions_;
      }, e.prototype.getAttributionsCollapsible = function () {
        return this.attributionsCollapsible_;
      }, e.prototype.getProjection = function () {
        return this.projection_;
      }, e.prototype.getResolutions = function () {
        return r();
      }, e.prototype.getState = function () {
        return this.state_;
      }, e.prototype.getWrapX = function () {
        return this.wrapX_;
      }, e.prototype.refresh = function () {
        this.changed();
      }, e.prototype.setAttributions = function (t) {
        this.attributions_ = wl(t), this.changed();
      }, e.prototype.setState = function (t) {
        this.state_ = t, this.changed();
      }, e;
    }(D),
        Ll = [0, 0, 0],
        Ol = function Ol(t) {
      var e;
      if (this.minZoom = void 0 !== t.minZoom ? t.minZoom : 0, this.resolutions_ = t.resolutions, Y(function (t, e, i) {
        var r = e || V;
        return t.every(function (e, n) {
          if (0 === n) return !0;
          var o = r(t[n - 1], e);
          return !(o > 0 || i && 0 === o);
        });
      }(this.resolutions_, function (t, e) {
        return e - t;
      }, !0), 17), !t.origins) for (var i = 0, r = this.resolutions_.length - 1; i < r; ++i) {
        if (e) {
          if (this.resolutions_[i] / this.resolutions_[i + 1] !== e) {
            e = void 0;
            break;
          }
        } else e = this.resolutions_[i] / this.resolutions_[i + 1];
      }
      this.zoomFactor_ = e, this.maxZoom = this.resolutions_.length - 1, this.origin_ = void 0 !== t.origin ? t.origin : null, this.origins_ = null, void 0 !== t.origins && (this.origins_ = t.origins, Y(this.origins_.length == this.resolutions_.length, 20));
      var n = t.extent;
      void 0 === n || this.origin_ || this.origins_ || (this.origin_ = It(n)), Y(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, 18), this.tileSizes_ = null, void 0 !== t.tileSizes && (this.tileSizes_ = t.tileSizes, Y(this.tileSizes_.length == this.resolutions_.length, 19)), this.tileSize_ = void 0 !== t.tileSize ? t.tileSize : this.tileSizes_ ? null : An, Y(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, 22), this.extent_ = void 0 !== n ? n : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], void 0 !== t.sizes ? this.fullTileRanges_ = t.sizes.map(function (t, e) {
        return new sa(Math.min(0, t[0]), Math.max(t[0] - 1, -1), Math.min(0, t[1]), Math.max(t[1] - 1, -1));
      }, this) : n && this.calculateTileRanges_(n);
    };

    Ol.prototype.forEachTileCoord = function (t, e, i) {
      for (var r = this.getTileRangeForExtentAndZ(t, e), n = r.minX, o = r.maxX; n <= o; ++n) {
        for (var s = r.minY, a = r.maxY; s <= a; ++s) {
          i([e, n, s]);
        }
      }
    }, Ol.prototype.forEachTileCoordParentTileRange = function (t, e, i, r, n) {
      var o,
          s,
          a,
          h = null,
          l = t[0] - 1;

      for (2 === this.zoomFactor_ ? (s = t[1], a = t[2]) : h = this.getTileCoordExtent(t, n); l >= this.minZoom;) {
        if (o = 2 === this.zoomFactor_ ? oa(s = Math.floor(s / 2), s, a = Math.floor(a / 2), a, r) : this.getTileRangeForExtentAndZ(h, l, r), e.call(i, l, o)) return !0;
        --l;
      }

      return !1;
    }, Ol.prototype.getExtent = function () {
      return this.extent_;
    }, Ol.prototype.getMaxZoom = function () {
      return this.maxZoom;
    }, Ol.prototype.getMinZoom = function () {
      return this.minZoom;
    }, Ol.prototype.getOrigin = function (t) {
      return this.origin_ ? this.origin_ : this.origins_[t];
    }, Ol.prototype.getResolution = function (t) {
      return this.resolutions_[t];
    }, Ol.prototype.getResolutions = function () {
      return this.resolutions_;
    }, Ol.prototype.getTileCoordChildTileRange = function (t, e, i) {
      if (t[0] < this.maxZoom) {
        if (2 === this.zoomFactor_) {
          var r = 2 * t[1],
              n = 2 * t[2];
          return oa(r, r + 1, n, n + 1, e);
        }

        var o = this.getTileCoordExtent(t, i);
        return this.getTileRangeForExtentAndZ(o, t[0] + 1, e);
      }

      return null;
    }, Ol.prototype.getTileRangeExtent = function (t, e, i) {
      var r = this.getOrigin(t),
          n = this.getResolution(t),
          o = ho(this.getTileSize(t), this.tmpSize_),
          s = r[0] + e.minX * o[0] * n,
          a = r[0] + (e.maxX + 1) * o[0] * n;
      return lt(s, r[1] + e.minY * o[1] * n, a, r[1] + (e.maxY + 1) * o[1] * n, i);
    }, Ol.prototype.getTileRangeForExtentAndZ = function (t, e, i) {
      var r = Ll;
      this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, r);
      var n = r[1],
          o = r[2];
      return this.getTileCoordForXYAndZ_(t[2], t[3], e, !0, r), oa(n, r[1], o, r[2], i);
    }, Ol.prototype.getTileCoordCenter = function (t) {
      var e = this.getOrigin(t[0]),
          i = this.getResolution(t[0]),
          r = ho(this.getTileSize(t[0]), this.tmpSize_);
      return [e[0] + (t[1] + .5) * r[0] * i, e[1] + (t[2] + .5) * r[1] * i];
    }, Ol.prototype.getTileCoordExtent = function (t, e) {
      var i = this.getOrigin(t[0]),
          r = this.getResolution(t[0]),
          n = ho(this.getTileSize(t[0]), this.tmpSize_),
          o = i[0] + t[1] * n[0] * r,
          s = i[1] + t[2] * n[1] * r;
      return lt(o, s, o + n[0] * r, s + n[1] * r, e);
    }, Ol.prototype.getTileCoordForCoordAndResolution = function (t, e, i) {
      return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, i);
    }, Ol.prototype.getTileCoordForXYAndResolution_ = function (t, e, i, r, n) {
      var o = this.getZForResolution(i),
          s = i / this.getResolution(o),
          a = this.getOrigin(o),
          h = ho(this.getTileSize(o), this.tmpSize_),
          l = r ? .5 : 0,
          u = r ? 0 : .5,
          p = Math.floor((t - a[0]) / i + l),
          c = Math.floor((e - a[1]) / i + u),
          d = s * p / h[0],
          f = s * c / h[1];
      return r ? (d = Math.ceil(d) - 1, f = Math.ceil(f) - 1) : (d = Math.floor(d), f = Math.floor(f)), El(o, d, f, n);
    }, Ol.prototype.getTileCoordForXYAndZ_ = function (t, e, i, r, n) {
      var o = this.getOrigin(i),
          s = this.getResolution(i),
          a = ho(this.getTileSize(i), this.tmpSize_),
          h = r ? .5 : 0,
          l = r ? 0 : .5,
          u = Math.floor((t - o[0]) / s + h),
          p = Math.floor((e - o[1]) / s + l),
          c = u / a[0],
          d = p / a[1];
      return r ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d)), El(i, c, d, n);
    }, Ol.prototype.getTileCoordForCoordAndZ = function (t, e, i) {
      return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, i);
    }, Ol.prototype.getTileCoordResolution = function (t) {
      return this.resolutions_[t[0]];
    }, Ol.prototype.getTileSize = function (t) {
      return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
    }, Ol.prototype.getFullTileRange = function (t) {
      return this.fullTileRanges_ ? this.fullTileRanges_[t] : null;
    }, Ol.prototype.getZForResolution = function (t, e) {
      return kt(z(this.resolutions_, t, e || 0), this.minZoom, this.maxZoom);
    }, Ol.prototype.calculateTileRanges_ = function (t) {
      for (var e = this.resolutions_.length, i = new Array(e), r = this.minZoom; r < e; ++r) {
        i[r] = this.getTileRangeForExtentAndZ(t, r);
      }

      this.fullTileRanges_ = i;
    };
    var Pl = Ol;

    function bl(t) {
      var e = t.getDefaultTileGrid();
      return e || (e = Nl(t), t.setDefaultTileGrid(e)), e;
    }

    function Ml(t, e, i, r) {
      var n = void 0 !== r ? r : Q.TOP_LEFT,
          o = Al(t, e, i);
      return new Pl({
        extent: t,
        origin: function (t, e) {
          var i;
          return e === Q.BOTTOM_LEFT ? i = Et(t) : e === Q.BOTTOM_RIGHT ? i = St(t) : e === Q.TOP_LEFT ? i = It(t) : e === Q.TOP_RIGHT ? i = Lt(t) : Y(!1, 13), i;
        }(t, n),
        resolutions: o,
        tileSize: i
      });
    }

    function Fl(t) {
      var e = t || {},
          i = e.extent || Ee("EPSG:3857").getExtent(),
          r = {
        extent: i,
        minZoom: e.minZoom,
        tileSize: e.tileSize,
        resolutions: Al(i, e.maxZoom, e.tileSize)
      };
      return new Pl(r);
    }

    function Al(t, e, i) {
      for (var r = void 0 !== e ? e : Fn, n = Rt(t), o = Ot(t), s = ho(void 0 !== i ? i : An), a = Math.max(o / s[0], n / s[1]), h = r + 1, l = new Array(h), u = 0; u < h; ++u) {
        l[u] = a / Math.pow(2, u);
      }

      return l;
    }

    function Nl(t, e, i, r) {
      return Ml(Gl(t), e, i, r);
    }

    function Gl(t) {
      var e = (t = Ee(t)).getExtent();

      if (!e) {
        var i = 180 * Qt[$t.DEGREES] / t.getMetersPerUnit();
        e = lt(-i, -i, i, i);
      }

      return e;
    }

    var Dl = function (t) {
      function e(e) {
        t.call(this, {
          attributions: e.attributions,
          attributionsCollapsible: e.attributionsCollapsible,
          projection: e.projection,
          state: e.state,
          wrapX: e.wrapX
        }), this.opaque_ = void 0 !== e.opaque && e.opaque, this.tilePixelRatio_ = void 0 !== e.tilePixelRatio ? e.tilePixelRatio : 1, this.tileGrid = void 0 !== e.tileGrid ? e.tileGrid : null, this.tileCache = new Rl(e.cacheSize), this.tmpSize = [0, 0], this.key_ = e.key || "", this.tileOptions = {
          transition: e.transition
        };
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.canExpireCache = function () {
        return this.tileCache.canExpireCache();
      }, e.prototype.expireCache = function (t, e) {
        var i = this.getTileCacheForProjection(t);
        i && i.expireCache(e);
      }, e.prototype.forEachLoadedTile = function (t, e, i, r) {
        var n = this.getTileCacheForProjection(t);
        if (!n) return !1;

        for (var o, s, a, h = !0, l = i.minX; l <= i.maxX; ++l) {
          for (var u = i.minY; u <= i.maxY; ++u) {
            s = Sl(e, l, u), a = !1, n.containsKey(s) && (a = (o = n.get(s)).getState() === On.LOADED) && (a = !1 !== r(o)), a || (h = !1);
          }
        }

        return h;
      }, e.prototype.getGutterForProjection = function (t) {
        return 0;
      }, e.prototype.getKey = function () {
        return this.key_;
      }, e.prototype.setKey = function (t) {
        this.key_ !== t && (this.key_ = t, this.changed());
      }, e.prototype.getOpaque = function (t) {
        return this.opaque_;
      }, e.prototype.getResolutions = function () {
        return this.tileGrid.getResolutions();
      }, e.prototype.getTile = function (t, e, i, n, o) {
        return r();
      }, e.prototype.getTileGrid = function () {
        return this.tileGrid;
      }, e.prototype.getTileGridForProjection = function (t) {
        return this.tileGrid ? this.tileGrid : bl(t);
      }, e.prototype.getTileCacheForProjection = function (t) {
        var e = this.getProjection();
        return e && !Ie(e, t) ? null : this.tileCache;
      }, e.prototype.getTilePixelRatio = function (t) {
        return this.tilePixelRatio_;
      }, e.prototype.getTilePixelSize = function (t, e, i) {
        var r = this.getTileGridForProjection(i),
            n = this.getTilePixelRatio(e),
            o = ho(r.getTileSize(t), this.tmpSize);
        return 1 == n ? o : ao(o, n, this.tmpSize);
      }, e.prototype.getTileCoordForTileUrlFunction = function (t, e) {
        var i = void 0 !== e ? e : this.getProjection(),
            r = this.getTileGridForProjection(i);
        return this.getWrapX() && i.isGlobal() && (t = function (t, e, i) {
          var r = e[0],
              n = t.getTileCoordCenter(e),
              o = Gl(i);
          if (nt(o, n)) return e;
          var s = Ot(o),
              a = Math.ceil((o[0] - n[0]) / s);
          return n[0] += s * a, t.getTileCoordForCoordAndZ(n, r);
        }(r, t, i)), function (t, e) {
          var i = t[0],
              r = t[1],
              n = t[2];
          if (e.getMinZoom() > i || i > e.getMaxZoom()) return !1;
          var o,
              s = e.getExtent();
          return !(o = s ? e.getTileRangeForExtentAndZ(s, i) : e.getFullTileRange(i)) || o.containsXY(r, n);
        }(t, r) ? t : null;
      }, e.prototype.refresh = function () {
        this.tileCache.clear(), this.changed();
      }, e.prototype.useTile = function (t, e, i, r) {}, e;
    }(Il),
        kl = function (t) {
      function e(e, i) {
        t.call(this, e), this.tile = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        jl = Dl,
        Ul = new lh("precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  gl_FragColor = texture2D(u_texture, v_texCoord);\n}\n"),
        Yl = new uh("varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform vec4 u_tileOffset;\n\nvoid main(void) {\n  gl_Position = vec4(a_position * u_tileOffset.xy + u_tileOffset.zw, 0., 1.);\n  v_texCoord = a_texCoord;\n}\n\n\n"),
        Bl = function Bl(t, e) {
      this.u_tileOffset = t.getUniformLocation(e, "u_tileOffset"), this.u_texture = t.getUniformLocation(e, "u_texture"), this.a_position = t.getAttribLocation(e, "a_position"), this.a_texCoord = t.getAttribLocation(e, "a_texCoord");
    },
        Vl = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.fragmentShader_ = Ul, this.vertexShader_ = Yl, this.locations_ = null, this.renderArrayBuffer_ = new Th([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]), this.renderedTileRange_ = null, this.renderedFramebufferExtent_ = null, this.renderedRevision_ = -1, this.tmpSize_ = [0, 0];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.mapRenderer.getContext().deleteBuffer(this.renderArrayBuffer_), t.prototype.disposeInternal.call(this);
      }, e.prototype.createLoadedTileFinder = function (t, e, i) {
        var r = this.mapRenderer;
        return function (n, o) {
          return t.forEachLoadedTile(e, n, o, function (t) {
            var e = r.isTileTextureLoaded(t);
            return e && (i[n] || (i[n] = {}), i[n][t.tileCoord.toString()] = t), e;
          });
        };
      }, e.prototype.handleWebGLContextLost = function () {
        t.prototype.handleWebGLContextLost.call(this), this.locations_ = null;
      }, e.prototype.prepareFrame = function (t, e, i) {
        var r = this.mapRenderer,
            n = i.getGL(),
            o = t.viewState,
            s = o.projection,
            a = this.getLayer(),
            h = a.getSource();
        if (!(h instanceof jl)) return !0;

        var l,
            u = h.getTileGridForProjection(s),
            p = u.getZForResolution(o.resolution),
            c = u.getResolution(p),
            d = h.getTilePixelSize(p, t.pixelRatio, s),
            f = d[0] / ho(u.getTileSize(p), this.tmpSize_)[0],
            _ = c / f,
            g = h.getTilePixelRatio(f) * h.getGutterForProjection(s),
            y = o.center,
            v = t.extent,
            m = u.getTileRangeForExtentAndZ(v, p);

        if (this.renderedTileRange_ && this.renderedTileRange_.equals(m) && this.renderedRevision_ == h.getRevision()) l = this.renderedFramebufferExtent_;else {
          var x = m.getSize(),
              E = function (t) {
            return Y(0 < t, 29), Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
          }(Math.max(x[0] * d[0], x[1] * d[1])),
              S = _ * E,
              T = u.getOrigin(p),
              C = T[0] + m.minX * d[0] * _,
              R = T[1] + m.minY * d[1] * _;

          l = [C, R, C + S, R + S], this.bindFramebuffer(t, E), n.viewport(0, 0, E, E), n.clearColor(0, 0, 0, 0), n.clear(16384), n.disable(3042);
          var w = i.getProgram(this.fragmentShader_, this.vertexShader_);
          i.useProgram(w), this.locations_ || (this.locations_ = new Bl(n, w)), i.bindBuffer(34962, this.renderArrayBuffer_), n.enableVertexAttribArray(this.locations_.a_position), n.vertexAttribPointer(this.locations_.a_position, 2, 5126, !1, 16, 0), n.enableVertexAttribArray(this.locations_.a_texCoord), n.vertexAttribPointer(this.locations_.a_texCoord, 2, 5126, !1, 16, 8), n.uniform1i(this.locations_.u_texture, 0);
          var I = {};
          I[p] = {};
          var L,
              O,
              P,
              b,
              M,
              F,
              A = this.createLoadedTileFinder(h, s, I),
              N = a.getUseInterimTilesOnError(),
              G = !0,
              D = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
              k = new sa(0, 0, 0, 0);

          for (b = m.minX; b <= m.maxX; ++b) {
            for (M = m.minY; M <= m.maxY; ++M) {
              if (O = h.getTile(p, b, M, f, s), void 0 === e.extent || Pt(F = u.getTileCoordExtent(O.tileCoord, D), e.extent)) {
                if ((P = O.getState()) == On.LOADED || P == On.EMPTY || P == On.ERROR && !N || (O = O.getInterimTile()), (P = O.getState()) == On.LOADED) {
                  if (r.isTileTextureLoaded(O)) {
                    I[p][O.tileCoord.toString()] = O;
                    continue;
                  }
                } else if (P == On.EMPTY || P == On.ERROR && !N) continue;

                G = !1, u.forEachTileCoordParentTileRange(O.tileCoord, A, null, k, D) || (L = u.getTileCoordChildTileRange(O.tileCoord, k, D)) && A(p + 1, L);
              }
            }
          }

          var j = Object.keys(I).map(Number);
          j.sort(V);

          for (var U = new Float32Array(4), B = 0, X = j.length; B < X; ++B) {
            var z = I[j[B]];

            for (var W in z) {
              (O = z[W]) instanceof xl && (F = u.getTileCoordExtent(O.tileCoord, D), U[0] = 2 * (F[2] - F[0]) / S, U[1] = 2 * (F[3] - F[1]) / S, U[2] = 2 * (F[0] - l[0]) / S - 1, U[3] = 2 * (F[1] - l[1]) / S - 1, n.uniform4fv(this.locations_.u_tileOffset, U), r.bindTileTexture(O, d, g * f, Qa, Qa), n.drawArrays(5, 0, 4));
            }
          }

          G ? (this.renderedTileRange_ = m, this.renderedFramebufferExtent_ = l, this.renderedRevision_ = h.getRevision()) : (this.renderedTileRange_ = null, this.renderedFramebufferExtent_ = null, this.renderedRevision_ = -1, t.animate = !0);
        }
        this.updateUsedTiles(t.usedTiles, h, p, m);
        var K = r.getTileTextureQueue();
        this.manageTilePyramid(t, h, u, f, s, v, p, a.getPreload(), function (t) {
          t.getState() != On.LOADED || r.isTileTextureLoaded(t) || K.isKeyQueued(t.getKey()) || K.enqueue([t, u.getTileCoordCenter(t.tileCoord), u.getResolution(t.tileCoord[0]), d, g * f]);
        }, this), this.scheduleExpireCache(t, h);
        var H = this.texCoordMatrix;
        return Fe(H), Ue(H, (Math.round(y[0] / c) * c - l[0]) / (l[2] - l[0]), (Math.round(y[1] / c) * c - l[1]) / (l[3] - l[1])), 0 !== o.rotation && ke(H, o.rotation), je(H, t.size[0] * o.resolution / (l[2] - l[0]), t.size[1] * o.resolution / (l[3] - l[1])), Ue(H, -.5, -.5), !0;
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, r) {
        if (this.framebuffer) {
          var n = [t[0] / e.size[0], (e.size[1] - t[1]) / e.size[1]],
              o = De(this.texCoordMatrix, n.slice()),
              s = [o[0] * this.framebufferDimension, o[1] * this.framebufferDimension],
              a = this.mapRenderer.getContext().getGL();
          a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer);
          var h = new Uint8Array(4);
          return a.readPixels(s[0], s[1], 1, 1, a.RGBA, a.UNSIGNED_BYTE, h), h[3] > 0 ? i.call(r, this.getLayer(), h) : void 0;
        }
      }, e;
    }(fl);

    Vl.handles = function (t) {
      return t.getType() === Ss.TILE;
    }, Vl.create = function (t, e) {
      return new Vl(t, e);
    };

    var Xl = Vl,
        zl = function (t) {
      function e(e, i) {
        t.call(this, e, i), this.dirty_ = !1, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.layerState_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.composeFrame = function (t, e, i) {
        this.layerState_ = e;
        var r = t.viewState,
            n = this.replayGroup_,
            o = t.size,
            s = t.pixelRatio,
            a = this.mapRenderer.getGL();
        n && !n.isEmpty() && (a.enable(a.SCISSOR_TEST), a.scissor(0, 0, o[0] * s, o[1] * s), n.replay(i, r.center, r.resolution, r.rotation, o, s, e.opacity, e.managed ? t.skippedFeatureUids : {}), a.disable(a.SCISSOR_TEST));
      }, e.prototype.disposeInternal = function () {
        var e = this.replayGroup_;

        if (e) {
          var i = this.mapRenderer.getContext();
          e.getDeleteResourcesFunction(i)(), this.replayGroup_ = null;
        }

        t.prototype.disposeInternal.call(this);
      }, e.prototype.forEachFeatureAtCoordinate = function (t, e, i, r, n) {
        if (this.replayGroup_ && this.layerState_) {
          var s = this.mapRenderer.getContext(),
              a = e.viewState,
              h = this.getLayer(),
              l = this.layerState_,
              u = {};
          return this.replayGroup_.forEachFeatureAtCoordinate(t, s, a.center, a.resolution, a.rotation, e.size, e.pixelRatio, l.opacity, {}, function (t) {
            var e = o(t);
            if (!(e in u)) return u[e] = !0, r.call(n, t, h);
          });
        }
      }, e.prototype.hasFeatureAtCoordinate = function (t, e) {
        if (this.replayGroup_ && this.layerState_) {
          var i = this.mapRenderer.getContext(),
              r = e.viewState,
              n = this.layerState_;
          return this.replayGroup_.hasFeatureAtCoordinate(t, i, r.center, r.resolution, r.rotation, e.size, e.pixelRatio, n.opacity, e.skippedFeatureUids);
        }

        return !1;
      }, e.prototype.forEachLayerAtPixel = function (t, e, i, r) {
        var n = De(e.pixelToCoordinateTransform, t.slice());
        return this.hasFeatureAtCoordinate(n, e) ? i.call(r, this.getLayer(), null) : void 0;
      }, e.prototype.handleStyleImageChange_ = function (t) {
        this.renderIfReadyAndVisible();
      }, e.prototype.prepareFrame = function (t, e, i) {
        var r = this.getLayer(),
            n = r.getSource(),
            o = t.viewHints[kn],
            s = t.viewHints[jn],
            a = r.getUpdateWhileAnimating(),
            h = r.getUpdateWhileInteracting();
        if (!this.dirty_ && !a && o || !h && s) return !0;

        var l = t.extent,
            u = t.viewState,
            p = u.projection,
            c = u.resolution,
            d = t.pixelRatio,
            f = r.getRevision(),
            _ = r.getRenderBuffer(),
            g = r.getRenderOrder();

        void 0 === g && (g = Da);
        var y = et(l, _ * c);
        if (!this.dirty_ && this.renderedResolution_ == c && this.renderedRevision_ == f && this.renderedRenderOrder_ == g && ot(this.renderedExtent_, y)) return !0;
        this.replayGroup_ && t.postRenderFunctions.push(this.replayGroup_.getDeleteResourcesFunction(i)), this.dirty_ = !1;
        var v = new ll(ja(c, d), y, r.getRenderBuffer());
        n.loadFeatures(y, c, p);

        var m = function (t) {
          var e,
              i = t.getStyleFunction() || r.getStyleFunction();

          if (i && (e = i(t, c)), e) {
            var n = this.renderFeature(t, c, d, e, v);
            this.dirty_ = this.dirty_ || n;
          }
        }.bind(this);

        if (g) {
          var x = [];
          n.forEachFeatureInExtent(y, function (t) {
            x.push(t);
          }), x.sort(g), x.forEach(m.bind(this));
        } else n.forEachFeatureInExtent(y, m);

        return v.finish(i), this.renderedResolution_ = c, this.renderedRevision_ = f, this.renderedRenderOrder_ = g, this.renderedExtent_ = y, this.replayGroup_ = v, !0;
      }, e.prototype.renderFeature = function (t, e, i, r, n) {
        if (!r) return !1;
        var o = !1;
        if (Array.isArray(r)) for (var s = r.length - 1; s >= 0; --s) {
          o = Ua(n, t, r[s], ka(e, i), this.handleStyleImageChange_, this) || o;
        } else o = Ua(n, t, r, ka(e, i), this.handleStyleImageChange_, this) || o;
        return o;
      }, e;
    }(fl);

    zl.handles = function (t) {
      return t.getType() === Ss.VECTOR;
    }, zl.create = function (t, e) {
      return new zl(t, e);
    };

    var Wl = zl,
        Kl = function (t) {
      function e(e) {
        (e = u({}, e)).controls || (e.controls = wo()), e.interactions || (e.interactions = ys()), t.call(this, e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createRenderer = function () {
        var t = new yl(this);
        return t.registerLayerRenderers([gl, Xl, Wl]), t;
      }, e;
    }(lo),
        Hl = {
      ARRAY_BUFFER: "arraybuffer",
      JSON: "json",
      TEXT: "text",
      XML: "xml"
    };

    function Zl(t, e, i, r) {
      return function (n, o, s) {
        var a = new XMLHttpRequest();
        a.open("GET", "function" == typeof t ? t(n, o, s) : t, !0), e.getType() == Hl.ARRAY_BUFFER && (a.responseType = "arraybuffer"), a.onload = function (t) {
          if (!a.status || a.status >= 200 && a.status < 300) {
            var n,
                o = e.getType();
            o == Hl.JSON || o == Hl.TEXT ? n = a.responseText : o == Hl.XML ? (n = a.responseXML) || (n = new DOMParser().parseFromString(a.responseText, "application/xml")) : o == Hl.ARRAY_BUFFER && (n = a.response), n ? i.call(this, e.readFeatures(n, {
              featureProjection: s
            }), e.readProjection(n), e.getLastExtent()) : r.call(this);
          } else r.call(this);
        }.bind(this), a.onerror = function () {
          r.call(this);
        }.bind(this), a.send();
      };
    }

    function ql(t, e) {
      return Zl(t, e, function (t, e) {
        "function" == typeof this.addFeatures && this.addFeatures(t);
      }, I);
    }

    function Jl(t, e) {
      return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
    }

    var Ql = document.implementation.createDocument("", "", null),
        $l = "http://www.w3.org/2001/XMLSchema-instance";

    function tu(t, e) {
      return Ql.createElementNS(t, e);
    }

    function eu(t, e) {
      return function t(e, i, r) {
        if (e.nodeType == Node.CDATA_SECTION_NODE || e.nodeType == Node.TEXT_NODE) i ? r.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : r.push(e.nodeValue);else {
          var n;

          for (n = e.firstChild; n; n = n.nextSibling) {
            t(n, i, r);
          }
        }
        return r;
      }(t, e, []).join("");
    }

    function iu(t) {
      return "documentElement" in t;
    }

    function ru(t) {
      return new DOMParser().parseFromString(t, "application/xml");
    }

    function nu(t, e) {
      return function (i, r) {
        var n = t.call(void 0 !== e ? e : this, i, r);
        void 0 !== n && K(r[r.length - 1], n);
      };
    }

    function ou(t, e) {
      return function (i, r) {
        var n = t.call(void 0 !== e ? e : this, i, r);
        void 0 !== n && r[r.length - 1].push(n);
      };
    }

    function su(t, e) {
      return function (i, r) {
        var n = t.call(void 0 !== e ? e : this, i, r);
        void 0 !== n && (r[r.length - 1] = n);
      };
    }

    function au(t, e, i) {
      return function (r, n) {
        var o = t.call(void 0 !== i ? i : this, r, n);

        if (void 0 !== o) {
          var s = n[n.length - 1],
              a = void 0 !== e ? e : r.localName;
          (a in s ? s[a] : s[a] = []).push(o);
        }
      };
    }

    function hu(t, e, i) {
      return function (r, n) {
        var o = t.call(void 0 !== i ? i : this, r, n);
        void 0 !== o && (n[n.length - 1][void 0 !== e ? e : r.localName] = o);
      };
    }

    function lu(t, e) {
      return function (i, r, n) {
        t.call(void 0 !== e ? e : this, i, r, n), n[n.length - 1].node.appendChild(i);
      };
    }

    function uu(t, e) {
      var i, r;
      return function (e, n, o) {
        if (void 0 === i) {
          i = {};
          var s = {};
          s[e.localName] = t, i[e.namespaceURI] = s, r = pu(e.localName);
        }

        yu(i, r, n, o);
      };
    }

    function pu(t, e) {
      var i = t;
      return function (t, r, n) {
        var o = r[r.length - 1].node,
            s = i;
        return void 0 === s && (s = n), tu(void 0 !== e ? e : o.namespaceURI, s);
      };
    }

    var cu = pu();

    function du(t, e) {
      for (var i = e.length, r = new Array(i), n = 0; n < i; ++n) {
        r[n] = t[e[n]];
      }

      return r;
    }

    function fu(t, e, i) {
      var r,
          n,
          o = void 0 !== i ? i : {};

      for (r = 0, n = t.length; r < n; ++r) {
        o[t[r]] = e;
      }

      return o;
    }

    function _u(t, e, i, r) {
      var n;

      for (n = e.firstElementChild; n; n = n.nextElementSibling) {
        var o = t[n.namespaceURI];

        if (void 0 !== o) {
          var s = o[n.localName];
          void 0 !== s && s.call(r, n, i);
        }
      }
    }

    function gu(t, e, i, r, n) {
      return r.push(t), _u(e, i, r, n), r.pop();
    }

    function yu(t, e, i, r, n, o) {
      for (var s, a, h = (void 0 !== n ? n : i).length, l = 0; l < h; ++l) {
        void 0 !== (s = i[l]) && void 0 !== (a = e.call(void 0 !== o ? o : this, s, r, void 0 !== n ? n[l] : void 0)) && t[a.namespaceURI][a.localName].call(o, a, s, r);
      }
    }

    function vu(t, e, i, r, n, o, s) {
      return n.push(t), yu(e, i, r, n, o, s), n.pop();
    }

    var mu = function (t) {
      function e(e) {
        t.call(this, {
          extent: e.extent,
          origin: e.origin,
          origins: e.origins,
          resolutions: e.resolutions,
          tileSize: e.tileSize,
          tileSizes: e.tileSizes,
          sizes: e.sizes
        }), this.matrixIds_ = e.matrixIds;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getMatrixId = function (t) {
        return this.matrixIds_[t];
      }, e.prototype.getMatrixIds = function () {
        return this.matrixIds_;
      }, e;
    }(Pl),
        xu = mu;

    function Eu(t, e, i) {
      var r = [],
          n = [],
          o = [],
          s = [],
          a = [],
          h = void 0 !== i ? i : [],
          l = t.SupportedCRS,
          u = Ee(l.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || Ee(l),
          p = u.getMetersPerUnit(),
          c = "ne" == u.getAxisOrientation().substr(0, 2);
      return t.TileMatrix.sort(function (t, e) {
        return e.ScaleDenominator - t.ScaleDenominator;
      }), t.TileMatrix.forEach(function (e) {
        if (!(h.length > 0) || H(h, function (i) {
          return e.Identifier == i.TileMatrix || -1 === e.Identifier.indexOf(":") && t.Identifier + ":" + e.Identifier === i.TileMatrix;
        })) {
          n.push(e.Identifier);
          var i = 28e-5 * e.ScaleDenominator / p,
              l = e.TileWidth,
              u = e.TileHeight;
          c ? o.push([e.TopLeftCorner[1], e.TopLeftCorner[0]]) : o.push(e.TopLeftCorner), r.push(i), s.push(l == u ? l : [l, u]), a.push([e.MatrixWidth, -e.MatrixHeight]);
        }
      }), new mu({
        extent: e,
        origins: o,
        resolutions: r,
        matrixIds: n,
        tileSizes: s,
        sizes: a
      });
    }

    var Su = function Su(t) {
      this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale;
    };

    Su.prototype.clone = function () {
      return new Su({
        opacity: this.getOpacity(),
        scale: this.getScale(),
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView()
      });
    }, Su.prototype.getOpacity = function () {
      return this.opacity_;
    }, Su.prototype.getRotateWithView = function () {
      return this.rotateWithView_;
    }, Su.prototype.getRotation = function () {
      return this.rotation_;
    }, Su.prototype.getScale = function () {
      return this.scale_;
    }, Su.prototype.getSnapToPixel = function () {
      return !1;
    }, Su.prototype.getAnchor = function () {
      return r();
    }, Su.prototype.getImage = function (t) {
      return r();
    }, Su.prototype.getHitDetectionImage = function (t) {
      return r();
    }, Su.prototype.getImageState = function () {
      return r();
    }, Su.prototype.getImageSize = function () {
      return r();
    }, Su.prototype.getHitDetectionImageSize = function () {
      return r();
    }, Su.prototype.getOrigin = function () {
      return r();
    }, Su.prototype.getSize = function () {
      return r();
    }, Su.prototype.setOpacity = function (t) {
      this.opacity_ = t;
    }, Su.prototype.setRotateWithView = function (t) {
      this.rotateWithView_ = t;
    }, Su.prototype.setRotation = function (t) {
      this.rotation_ = t;
    }, Su.prototype.setScale = function (t) {
      this.scale_ = t;
    }, Su.prototype.setSnapToPixel = function (t) {}, Su.prototype.listenImageChange = function (t, e) {
      return r();
    }, Su.prototype.load = function () {
      r();
    }, Su.prototype.unlistenImageChange = function (t, e) {
      r();
    };

    var Tu = Su,
        Cu = function (t) {
      function e(e) {
        var i = void 0 !== e.rotateWithView && e.rotateWithView;
        t.call(this, {
          opacity: 1,
          rotateWithView: i,
          rotation: void 0 !== e.rotation ? e.rotation : 0,
          scale: 1
        }), this.checksums_ = null, this.canvas_ = null, this.hitDetectionCanvas_ = null, this.fill_ = void 0 !== e.fill ? e.fill : null, this.origin_ = [0, 0], this.points_ = e.points, this.radius_ = void 0 !== e.radius ? e.radius : e.radius1, this.radius2_ = e.radius2, this.angle_ = void 0 !== e.angle ? e.angle : 0, this.stroke_ = void 0 !== e.stroke ? e.stroke : null, this.anchor_ = null, this.size_ = null, this.imageSize_ = null, this.hitDetectionImageSize_ = null, this.atlasManager_ = e.atlasManager, this.render_(this.atlasManager_);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        var t = new e({
          fill: this.getFill() ? this.getFill().clone() : void 0,
          points: this.getPoints(),
          radius: this.getRadius(),
          radius2: this.getRadius2(),
          angle: this.getAngle(),
          stroke: this.getStroke() ? this.getStroke().clone() : void 0,
          rotation: this.getRotation(),
          rotateWithView: this.getRotateWithView(),
          atlasManager: this.atlasManager_
        });
        return t.setOpacity(this.getOpacity()), t.setScale(this.getScale()), t;
      }, e.prototype.getAnchor = function () {
        return this.anchor_;
      }, e.prototype.getAngle = function () {
        return this.angle_;
      }, e.prototype.getFill = function () {
        return this.fill_;
      }, e.prototype.getHitDetectionImage = function (t) {
        return this.hitDetectionCanvas_;
      }, e.prototype.getImage = function (t) {
        return this.canvas_;
      }, e.prototype.getImageSize = function () {
        return this.imageSize_;
      }, e.prototype.getHitDetectionImageSize = function () {
        return this.hitDetectionImageSize_;
      }, e.prototype.getImageState = function () {
        return xs.LOADED;
      }, e.prototype.getOrigin = function () {
        return this.origin_;
      }, e.prototype.getPoints = function () {
        return this.points_;
      }, e.prototype.getRadius = function () {
        return this.radius_;
      }, e.prototype.getRadius2 = function () {
        return this.radius2_;
      }, e.prototype.getSize = function () {
        return this.size_;
      }, e.prototype.getStroke = function () {
        return this.stroke_;
      }, e.prototype.listenImageChange = function (t, e) {}, e.prototype.load = function () {}, e.prototype.unlistenImageChange = function (t, e) {}, e.prototype.render_ = function (t) {
        var e,
            i,
            r = "",
            n = "",
            o = 0,
            s = null,
            a = 0,
            h = 0;
        this.stroke_ && (null === (i = this.stroke_.getColor()) && (i = Ls), i = Ys(i), void 0 === (h = this.stroke_.getWidth()) && (h = 1), s = this.stroke_.getLineDash(), a = this.stroke_.getLineDashOffset(), ki || (s = null, a = 0), void 0 === (n = this.stroke_.getLineJoin()) && (n = "round"), void 0 === (r = this.stroke_.getLineCap()) && (r = "round"), void 0 === (o = this.stroke_.getMiterLimit()) && (o = 10));
        var l = 2 * (this.radius_ + h) + 1,
            u = {
          strokeStyle: i,
          strokeWidth: h,
          size: l,
          lineCap: r,
          lineDash: s,
          lineDashOffset: a,
          lineJoin: n,
          miterLimit: o
        };

        if (void 0 === t) {
          var p = Jn(l, l);
          this.canvas_ = p.canvas, e = l = this.canvas_.width, this.draw_(u, p, 0, 0), this.createHitDetectionCanvas_(u);
        } else {
          l = Math.round(l);
          var c,
              d = !this.fill_;
          d && (c = this.drawHitDetectionCanvas_.bind(this, u));

          var f = this.getChecksum(),
              _ = t.add(f, l, l, this.draw_.bind(this, u), c);

          this.canvas_ = _.image, this.origin_ = [_.offsetX, _.offsetY], e = _.image.width, d ? (this.hitDetectionCanvas_ = _.hitImage, this.hitDetectionImageSize_ = [_.hitImage.width, _.hitImage.height]) : (this.hitDetectionCanvas_ = this.canvas_, this.hitDetectionImageSize_ = [e, e]);
        }

        this.anchor_ = [l / 2, l / 2], this.size_ = [l, l], this.imageSize_ = [e, e];
      }, e.prototype.draw_ = function (t, e, i, r) {
        var n, o, s;
        e.setTransform(1, 0, 0, 1, 0, 0), e.translate(i, r), e.beginPath();
        var a = this.points_;
        if (a === 1 / 0) e.arc(t.size / 2, t.size / 2, this.radius_, 0, 2 * Math.PI, !0);else {
          var h = void 0 !== this.radius2_ ? this.radius2_ : this.radius_;

          for (h !== this.radius_ && (a *= 2), n = 0; n <= a; n++) {
            o = 2 * n * Math.PI / a - Math.PI / 2 + this.angle_, s = n % 2 == 0 ? this.radius_ : h, e.lineTo(t.size / 2 + s * Math.cos(o), t.size / 2 + s * Math.sin(o));
          }
        }

        if (this.fill_) {
          var l = this.fill_.getColor();
          null === l && (l = ws), e.fillStyle = Ys(l), e.fill();
        }

        this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke()), e.closePath();
      }, e.prototype.createHitDetectionCanvas_ = function (t) {
        if (this.hitDetectionImageSize_ = [t.size, t.size], this.fill_) this.hitDetectionCanvas_ = this.canvas_;else {
          var e = Jn(t.size, t.size);
          this.hitDetectionCanvas_ = e.canvas, this.drawHitDetectionCanvas_(t, e, 0, 0);
        }
      }, e.prototype.drawHitDetectionCanvas_ = function (t, e, i, r) {
        e.setTransform(1, 0, 0, 1, 0, 0), e.translate(i, r), e.beginPath();
        var n = this.points_;
        if (n === 1 / 0) e.arc(t.size / 2, t.size / 2, this.radius_, 0, 2 * Math.PI, !0);else {
          var o,
              s,
              a,
              h = void 0 !== this.radius2_ ? this.radius2_ : this.radius_;

          for (h !== this.radius_ && (n *= 2), o = 0; o <= n; o++) {
            a = 2 * o * Math.PI / n - Math.PI / 2 + this.angle_, s = o % 2 == 0 ? this.radius_ : h, e.lineTo(t.size / 2 + s * Math.cos(a), t.size / 2 + s * Math.sin(a));
          }
        }
        e.fillStyle = dr(ws), e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.stroke()), e.closePath();
      }, e.prototype.getChecksum = function () {
        var t = this.stroke_ ? this.stroke_.getChecksum() : "-",
            e = this.fill_ ? this.fill_.getChecksum() : "-";

        if (!this.checksums_ || t != this.checksums_[1] || e != this.checksums_[2] || this.radius_ != this.checksums_[3] || this.radius2_ != this.checksums_[4] || this.angle_ != this.checksums_[5] || this.points_ != this.checksums_[6]) {
          var i = "r" + t + e + (void 0 !== this.radius_ ? this.radius_.toString() : "-") + (void 0 !== this.radius2_ ? this.radius2_.toString() : "-") + (void 0 !== this.angle_ ? this.angle_.toString() : "-") + (void 0 !== this.points_ ? this.points_.toString() : "-");
          this.checksums_ = [i, t, e, this.radius_, this.radius2_, this.angle_, this.points_];
        }

        return this.checksums_[0];
      }, e;
    }(Tu),
        Ru = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          points: 1 / 0,
          fill: i.fill,
          radius: i.radius,
          stroke: i.stroke,
          atlasManager: i.atlasManager
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        var t = new e({
          fill: this.getFill() ? this.getFill().clone() : void 0,
          stroke: this.getStroke() ? this.getStroke().clone() : void 0,
          radius: this.getRadius(),
          atlasManager: this.atlasManager_
        });
        return t.setOpacity(this.getOpacity()), t.setScale(this.getScale()), t;
      }, e.prototype.setRadius = function (t) {
        this.radius_ = t, this.render_(this.atlasManager_);
      }, e;
    }(Cu),
        wu = {
      FRACTION: "fraction",
      PIXELS: "pixels"
    },
        Iu = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this), this.hitDetectionImage_ = null, this.image_ = e || new Image(), null !== n && (this.image_.crossOrigin = n), this.canvas_ = s ? document.createElement("canvas") : null, this.color_ = s, this.imageListenerKeys_ = null, this.imageState_ = o, this.size_ = r, this.src_ = i, this.tainted_;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isTainted_ = function () {
        if (void 0 === this.tainted_ && this.imageState_ === xs.LOADED) {
          this.tainted_ = !1;
          var t = Jn(1, 1);

          try {
            t.drawImage(this.image_, 0, 0), t.getImageData(0, 0, 1, 1);
          } catch (t) {
            this.tainted_ = !0;
          }
        }

        return !0 === this.tainted_;
      }, e.prototype.dispatchChangeEvent_ = function () {
        this.dispatchEvent(M.CHANGE);
      }, e.prototype.handleImageError_ = function () {
        this.imageState_ = xs.ERROR, this.unlistenImage_(), this.dispatchChangeEvent_();
      }, e.prototype.handleImageLoad_ = function () {
        this.imageState_ = xs.LOADED, this.size_ && (this.image_.width = this.size_[0], this.image_.height = this.size_[1]), this.size_ = [this.image_.width, this.image_.height], this.unlistenImage_(), this.replaceColor_(), this.dispatchChangeEvent_();
      }, e.prototype.getImage = function (t) {
        return this.canvas_ ? this.canvas_ : this.image_;
      }, e.prototype.getImageState = function () {
        return this.imageState_;
      }, e.prototype.getHitDetectionImage = function (t) {
        if (!this.hitDetectionImage_) if (this.isTainted_()) {
          var e = this.size_[0],
              i = this.size_[1],
              r = Jn(e, i);
          r.fillRect(0, 0, e, i), this.hitDetectionImage_ = r.canvas;
        } else this.hitDetectionImage_ = this.image_;
        return this.hitDetectionImage_;
      }, e.prototype.getSize = function () {
        return this.size_;
      }, e.prototype.getSrc = function () {
        return this.src_;
      }, e.prototype.load = function () {
        if (this.imageState_ == xs.IDLE) {
          this.imageState_ = xs.LOADING, this.imageListenerKeys_ = [m(this.image_, M.ERROR, this.handleImageError_, this), m(this.image_, M.LOAD, this.handleImageLoad_, this)];

          try {
            this.image_.src = this.src_;
          } catch (t) {
            this.handleImageError_();
          }
        }
      }, e.prototype.replaceColor_ = function () {
        if (this.color_ && !this.isTainted_()) {
          this.canvas_.width = this.image_.width, this.canvas_.height = this.image_.height;
          var t = this.canvas_.getContext("2d");
          t.drawImage(this.image_, 0, 0);

          for (var e = t.getImageData(0, 0, this.image_.width, this.image_.height), i = e.data, r = this.color_[0] / 255, n = this.color_[1] / 255, o = this.color_[2] / 255, s = 0, a = i.length; s < a; s += 4) {
            i[s] *= r, i[s + 1] *= n, i[s + 2] *= o;
          }

          t.putImageData(e, 0, 0);
        }
      }, e.prototype.unlistenImage_ = function () {
        this.imageListenerKeys_.forEach(E), this.imageListenerKeys_ = null;
      }, e;
    }(b);

    var Lu = {
      BOTTOM_LEFT: "bottom-left",
      BOTTOM_RIGHT: "bottom-right",
      TOP_LEFT: "top-left",
      TOP_RIGHT: "top-right"
    },
        Ou = function (t) {
      function e(e) {
        var i = e || {},
            r = void 0 !== i.opacity ? i.opacity : 1,
            n = void 0 !== i.rotation ? i.rotation : 0,
            s = void 0 !== i.scale ? i.scale : 1,
            a = void 0 !== i.rotateWithView && i.rotateWithView;
        t.call(this, {
          opacity: r,
          rotation: n,
          scale: s,
          rotateWithView: a
        }), this.anchor_ = void 0 !== i.anchor ? i.anchor : [.5, .5], this.normalizedAnchor_ = null, this.anchorOrigin_ = void 0 !== i.anchorOrigin ? i.anchorOrigin : Lu.TOP_LEFT, this.anchorXUnits_ = void 0 !== i.anchorXUnits ? i.anchorXUnits : wu.FRACTION, this.anchorYUnits_ = void 0 !== i.anchorYUnits ? i.anchorYUnits : wu.FRACTION, this.crossOrigin_ = void 0 !== i.crossOrigin ? i.crossOrigin : null;
        var h = void 0 !== i.img ? i.img : null,
            l = void 0 !== i.imgSize ? i.imgSize : null,
            u = i.src;
        Y(!(void 0 !== u && h), 4), Y(!h || h && l, 5), void 0 !== u && 0 !== u.length || !h || (u = h.src || o(h)), Y(void 0 !== u && u.length > 0, 6);
        var p = void 0 !== i.src ? xs.IDLE : xs.LOADED;
        this.color_ = void 0 !== i.color ? _r(i.color) : null, this.iconImage_ = function (t, e, i, r, n, o) {
          var s = Ks.get(e, r, o);
          return s || (s = new Iu(t, e, i, r, n, o), Ks.set(e, r, o, s)), s;
        }(h, u, l, this.crossOrigin_, p, this.color_), this.offset_ = void 0 !== i.offset ? i.offset : [0, 0], this.offsetOrigin_ = void 0 !== i.offsetOrigin ? i.offsetOrigin : Lu.TOP_LEFT, this.origin_ = null, this.size_ = void 0 !== i.size ? i.size : null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        return new e({
          anchor: this.anchor_.slice(),
          anchorOrigin: this.anchorOrigin_,
          anchorXUnits: this.anchorXUnits_,
          anchorYUnits: this.anchorYUnits_,
          crossOrigin: this.crossOrigin_,
          color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
          src: this.getSrc(),
          offset: this.offset_.slice(),
          offsetOrigin: this.offsetOrigin_,
          size: null !== this.size_ ? this.size_.slice() : void 0,
          opacity: this.getOpacity(),
          scale: this.getScale(),
          rotation: this.getRotation(),
          rotateWithView: this.getRotateWithView()
        });
      }, e.prototype.getAnchor = function () {
        if (this.normalizedAnchor_) return this.normalizedAnchor_;
        var t = this.anchor_,
            e = this.getSize();

        if (this.anchorXUnits_ == wu.FRACTION || this.anchorYUnits_ == wu.FRACTION) {
          if (!e) return null;
          t = this.anchor_.slice(), this.anchorXUnits_ == wu.FRACTION && (t[0] *= e[0]), this.anchorYUnits_ == wu.FRACTION && (t[1] *= e[1]);
        }

        if (this.anchorOrigin_ != Lu.TOP_LEFT) {
          if (!e) return null;
          t === this.anchor_ && (t = this.anchor_.slice()), this.anchorOrigin_ != Lu.TOP_RIGHT && this.anchorOrigin_ != Lu.BOTTOM_RIGHT || (t[0] = -t[0] + e[0]), this.anchorOrigin_ != Lu.BOTTOM_LEFT && this.anchorOrigin_ != Lu.BOTTOM_RIGHT || (t[1] = -t[1] + e[1]);
        }

        return this.normalizedAnchor_ = t, this.normalizedAnchor_;
      }, e.prototype.setAnchor = function (t) {
        this.anchor_ = t, this.normalizedAnchor_ = null;
      }, e.prototype.getColor = function () {
        return this.color_;
      }, e.prototype.getImage = function (t) {
        return this.iconImage_.getImage(t);
      }, e.prototype.getImageSize = function () {
        return this.iconImage_.getSize();
      }, e.prototype.getHitDetectionImageSize = function () {
        return this.getImageSize();
      }, e.prototype.getImageState = function () {
        return this.iconImage_.getImageState();
      }, e.prototype.getHitDetectionImage = function (t) {
        return this.iconImage_.getHitDetectionImage(t);
      }, e.prototype.getOrigin = function () {
        if (this.origin_) return this.origin_;
        var t = this.offset_;

        if (this.offsetOrigin_ != Lu.TOP_LEFT) {
          var e = this.getSize(),
              i = this.iconImage_.getSize();
          if (!e || !i) return null;
          t = t.slice(), this.offsetOrigin_ != Lu.TOP_RIGHT && this.offsetOrigin_ != Lu.BOTTOM_RIGHT || (t[0] = i[0] - e[0] - t[0]), this.offsetOrigin_ != Lu.BOTTOM_LEFT && this.offsetOrigin_ != Lu.BOTTOM_RIGHT || (t[1] = i[1] - e[1] - t[1]);
        }

        return this.origin_ = t, this.origin_;
      }, e.prototype.getSrc = function () {
        return this.iconImage_.getSrc();
      }, e.prototype.getSize = function () {
        return this.size_ ? this.size_ : this.iconImage_.getSize();
      }, e.prototype.listenImageChange = function (t, e) {
        return v(this.iconImage_, M.CHANGE, t, e);
      }, e.prototype.load = function () {
        this.iconImage_.load();
      }, e.prototype.unlistenImageChange = function (t, e) {
        x(this.iconImage_, M.CHANGE, t, e);
      }, e;
    }(Tu),
        Pu = function Pu(t) {
      var e = t || {};
      this.geometry_ = null, this.geometryFunction_ = Au, void 0 !== e.geometry && this.setGeometry(e.geometry), this.fill_ = void 0 !== e.fill ? e.fill : null, this.image_ = void 0 !== e.image ? e.image : null, this.renderer_ = void 0 !== e.renderer ? e.renderer : null, this.stroke_ = void 0 !== e.stroke ? e.stroke : null, this.text_ = void 0 !== e.text ? e.text : null, this.zIndex_ = e.zIndex;
    };

    Pu.prototype.clone = function () {
      var t = this.getGeometry();
      return t && "object" == _typeof(t) && (t = t.clone()), new Pu({
        geometry: t,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex()
      });
    }, Pu.prototype.getRenderer = function () {
      return this.renderer_;
    }, Pu.prototype.setRenderer = function (t) {
      this.renderer_ = t;
    }, Pu.prototype.getGeometry = function () {
      return this.geometry_;
    }, Pu.prototype.getGeometryFunction = function () {
      return this.geometryFunction_;
    }, Pu.prototype.getFill = function () {
      return this.fill_;
    }, Pu.prototype.setFill = function (t) {
      this.fill_ = t;
    }, Pu.prototype.getImage = function () {
      return this.image_;
    }, Pu.prototype.setImage = function (t) {
      this.image_ = t;
    }, Pu.prototype.getStroke = function () {
      return this.stroke_;
    }, Pu.prototype.setStroke = function (t) {
      this.stroke_ = t;
    }, Pu.prototype.getText = function () {
      return this.text_;
    }, Pu.prototype.setText = function (t) {
      this.text_ = t;
    }, Pu.prototype.getZIndex = function () {
      return this.zIndex_;
    }, Pu.prototype.setGeometry = function (t) {
      "function" == typeof t ? this.geometryFunction_ = t : "string" == typeof t ? this.geometryFunction_ = function (e) {
        return e.get(t);
      } : t ? void 0 !== t && (this.geometryFunction_ = function () {
        return t;
      }) : this.geometryFunction_ = Au, this.geometry_ = t;
    }, Pu.prototype.setZIndex = function (t) {
      this.zIndex_ = t;
    };
    var bu = null;

    function Mu(t, e) {
      if (!bu) {
        var i = new mr({
          color: "rgba(255,255,255,0.4)"
        }),
            r = new Er({
          color: "#3399CC",
          width: 1.25
        });
        bu = [new Pu({
          image: new Ru({
            fill: i,
            stroke: r,
            radius: 5
          }),
          fill: i,
          stroke: r
        })];
      }

      return bu;
    }

    function Fu() {
      var t = {},
          e = [255, 255, 255, 1],
          i = [0, 153, 255, 1];
      return t[Nt.POLYGON] = [new Pu({
        fill: new mr({
          color: [255, 255, 255, .5]
        })
      })], t[Nt.MULTI_POLYGON] = t[Nt.POLYGON], t[Nt.LINE_STRING] = [new Pu({
        stroke: new Er({
          color: e,
          width: 5
        })
      }), new Pu({
        stroke: new Er({
          color: i,
          width: 3
        })
      })], t[Nt.MULTI_LINE_STRING] = t[Nt.LINE_STRING], t[Nt.CIRCLE] = t[Nt.POLYGON].concat(t[Nt.LINE_STRING]), t[Nt.POINT] = [new Pu({
        image: new Ru({
          radius: 6,
          fill: new mr({
            color: i
          }),
          stroke: new Er({
            color: e,
            width: 1.5
          })
        }),
        zIndex: 1 / 0
      })], t[Nt.MULTI_POINT] = t[Nt.POINT], t[Nt.GEOMETRY_COLLECTION] = t[Nt.POLYGON].concat(t[Nt.LINE_STRING], t[Nt.POINT]), t;
    }

    function Au(t) {
      return t.getGeometry();
    }

    var Nu = Pu;

    function Gu(t, e) {
      var i = /\{z\}/g,
          r = /\{x\}/g,
          n = /\{y\}/g,
          o = /\{-y\}/g;
      return function (s, a, h) {
        return s ? t.replace(i, s[0].toString()).replace(r, s[1].toString()).replace(n, function () {
          return (-s[2] - 1).toString();
        }).replace(o, function () {
          var t = s[0],
              i = e.getFullTileRange(t);
          return Y(i, 55), (i.getHeight() + s[2]).toString();
        }) : void 0;
      };
    }

    function Du(t, e) {
      for (var i = t.length, r = new Array(i), n = 0; n < i; ++n) {
        r[n] = Gu(t[n], e);
      }

      return ku(r);
    }

    function ku(t) {
      return 1 === t.length ? t[0] : function (e, i, r) {
        if (e) {
          var n = Xt(Cl(e), t.length);
          return t[n](e, i, r);
        }
      };
    }

    function ju(t, e, i) {}

    function Uu(t) {
      var e = [],
          i = /\{([a-z])-([a-z])\}/.exec(t);

      if (i) {
        var r,
            n = i[1].charCodeAt(0),
            o = i[2].charCodeAt(0);

        for (r = n; r <= o; ++r) {
          e.push(t.replace(i[0], String.fromCharCode(r)));
        }

        return e;
      }

      if (i = i = /\{(\d+)-(\d+)\}/.exec(t)) {
        for (var s = parseInt(i[2], 10), a = parseInt(i[1], 10); a <= s; a++) {
          e.push(t.replace(i[0], a.toString()));
        }

        return e;
      }

      return e.push(t), e;
    }

    function Yu(t, e, i, r) {
      var n = document.createElement("script"),
          s = "olc_" + o(e);

      function a() {
        delete window[s], n.parentNode.removeChild(n);
      }

      n.async = !0, n.src = t + (-1 == t.indexOf("?") ? "?" : "&") + (r || "callback") + "=" + s;
      var h = setTimeout(function () {
        a(), i && i();
      }, 1e4);
      window[s] = function (t) {
        clearTimeout(h), a(), e(t);
      }, document.getElementsByTagName("head")[0].appendChild(n);
    }

    function Bu(t, e, i, r) {
      var n = Pe(i, e, t),
          o = Se(e, r, i),
          s = e.getMetersPerUnit();
      void 0 !== s && (o *= s);
      var a = t.getMetersPerUnit();
      void 0 !== a && (o /= a);
      var h = t.getExtent();

      if (!h || nt(h, n)) {
        var l = Se(t, o, n) / o;
        isFinite(l) && l > 0 && (o /= l);
      }

      return o;
    }

    function Vu(t, e, i, r) {
      var n = i - t,
          o = r - e,
          s = Math.sqrt(n * n + o * o);
      return [Math.round(i + n / s), Math.round(r + o / s)];
    }

    function Xu(t, e, i, r, n, o, s, a, h, l, u) {
      var p = Jn(Math.round(i * t), Math.round(i * e));
      if (0 === h.length) return p.canvas;
      p.scale(i, i);
      var c = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      h.forEach(function (t, e, i) {
        ft(c, t.extent);
      });

      var d = Ot(c),
          f = Rt(c),
          _ = Jn(Math.round(i * d / r), Math.round(i * f / r)),
          g = i / r;

      h.forEach(function (t, e, i) {
        var r = t.extent[0] - c[0],
            n = -(t.extent[3] - c[3]),
            o = Ot(t.extent),
            s = Rt(t.extent);

        _.drawImage(t.image, l, l, t.image.width - 2 * l, t.image.height - 2 * l, r * g, n * g, o * g, s * g);
      });
      var y = It(s);
      return a.getTriangles().forEach(function (t, e, n) {
        var s = t.source,
            a = t.target,
            h = s[0][0],
            l = s[0][1],
            u = s[1][0],
            d = s[1][1],
            f = s[2][0],
            g = s[2][1],
            v = (a[0][0] - y[0]) / o,
            m = -(a[0][1] - y[1]) / o,
            x = (a[1][0] - y[0]) / o,
            E = -(a[1][1] - y[1]) / o,
            S = (a[2][0] - y[0]) / o,
            T = -(a[2][1] - y[1]) / o,
            C = h,
            R = l;
        h = 0, l = 0;

        var w = function (t) {
          for (var e = t.length, i = 0; i < e; i++) {
            for (var r = i, n = Math.abs(t[i][i]), o = i + 1; o < e; o++) {
              var s = Math.abs(t[o][i]);
              s > n && (n = s, r = o);
            }

            if (0 === n) return null;
            var a = t[r];
            t[r] = t[i], t[i] = a;

            for (var h = i + 1; h < e; h++) {
              for (var l = -t[h][i] / t[i][i], u = i; u < e + 1; u++) {
                i == u ? t[h][u] = 0 : t[h][u] += l * t[i][u];
              }
            }
          }

          for (var p = new Array(e), c = e - 1; c >= 0; c--) {
            p[c] = t[c][e] / t[c][c];

            for (var d = c - 1; d >= 0; d--) {
              t[d][e] -= t[d][c] * p[c];
            }
          }

          return p;
        }([[u -= C, d -= R, 0, 0, x - v], [f -= C, g -= R, 0, 0, S - v], [0, 0, u, d, E - m], [0, 0, f, g, T - m]]);

        if (w) {
          p.save(), p.beginPath();
          var I = (v + x + S) / 3,
              L = (m + E + T) / 3,
              O = Vu(I, L, v, m),
              P = Vu(I, L, x, E),
              b = Vu(I, L, S, T);
          p.moveTo(P[0], P[1]), p.lineTo(O[0], O[1]), p.lineTo(b[0], b[1]), p.clip(), p.transform(w[0], w[2], w[1], w[3], v, m), p.translate(c[0] - C, c[3] - R), p.scale(r / i, -r / i), p.drawImage(_.canvas, 0, 0), p.restore();
        }
      }), u && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, a.getTriangles().forEach(function (t, e, i) {
        var r = t.target,
            n = (r[0][0] - y[0]) / o,
            s = -(r[0][1] - y[1]) / o,
            a = (r[1][0] - y[0]) / o,
            h = -(r[1][1] - y[1]) / o,
            l = (r[2][0] - y[0]) / o,
            u = -(r[2][1] - y[1]) / o;
        p.beginPath(), p.moveTo(a, h), p.lineTo(n, s), p.lineTo(l, u), p.closePath(), p.stroke();
      }), p.restore()), p.canvas;
    }

    var zu = function zu(t, e, i, r, n) {
      this.sourceProj_ = t, this.targetProj_ = e;
      var o = {},
          s = Oe(this.targetProj_, this.sourceProj_);
      this.transformInv_ = function (t) {
        var e = t[0] + "/" + t[1];
        return o[e] || (o[e] = s(t)), o[e];
      }, this.maxSourceExtent_ = r, this.errorThresholdSquared_ = n * n, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!r && !!this.sourceProj_.getExtent() && Ot(r) == Ot(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? Ot(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? Ot(this.targetProj_.getExtent()) : null;
      var a = It(i),
          h = Lt(i),
          l = St(i),
          u = Et(i),
          p = this.transformInv_(a),
          c = this.transformInv_(h),
          d = this.transformInv_(l),
          f = this.transformInv_(u);

      if (this.addQuad_(a, h, l, u, p, c, d, f, 10), this.wrapsXInSource_) {
        var _ = 1 / 0;

        this.triangles_.forEach(function (t, e, i) {
          _ = Math.min(_, t.source[0][0], t.source[1][0], t.source[2][0]);
        }), this.triangles_.forEach(function (t) {
          if (Math.max(t.source[0][0], t.source[1][0], t.source[2][0]) - _ > this.sourceWorldWidth_ / 2) {
            var e = [[t.source[0][0], t.source[0][1]], [t.source[1][0], t.source[1][1]], [t.source[2][0], t.source[2][1]]];
            e[0][0] - _ > this.sourceWorldWidth_ / 2 && (e[0][0] -= this.sourceWorldWidth_), e[1][0] - _ > this.sourceWorldWidth_ / 2 && (e[1][0] -= this.sourceWorldWidth_), e[2][0] - _ > this.sourceWorldWidth_ / 2 && (e[2][0] -= this.sourceWorldWidth_);
            var i = Math.min(e[0][0], e[1][0], e[2][0]);
            Math.max(e[0][0], e[1][0], e[2][0]) - i < this.sourceWorldWidth_ / 2 && (t.source = e);
          }
        }.bind(this));
      }

      o = {};
    };

    zu.prototype.addTriangle_ = function (t, e, i, r, n, o) {
      this.triangles_.push({
        source: [r, n, o],
        target: [t, e, i]
      });
    }, zu.prototype.addQuad_ = function (t, e, i, r, n, o, s, a, h) {
      var l = tt([n, o, s, a]),
          u = this.sourceWorldWidth_ ? Ot(l) / this.sourceWorldWidth_ : null,
          p = this.sourceWorldWidth_,
          c = this.sourceProj_.canWrapX() && u > .5 && u < 1,
          d = !1;

      if (h > 0) {
        if (this.targetProj_.isGlobal() && this.targetWorldWidth_) d = Ot(tt([t, e, i, r])) / this.targetWorldWidth_ > .25 || d;
        !c && this.sourceProj_.isGlobal() && u && (d = u > .25 || d);
      }

      if (d || !this.maxSourceExtent_ || Pt(l, this.maxSourceExtent_)) {
        if (!(d || isFinite(n[0]) && isFinite(n[1]) && isFinite(o[0]) && isFinite(o[1]) && isFinite(s[0]) && isFinite(s[1]) && isFinite(a[0]) && isFinite(a[1]))) {
          if (!(h > 0)) return;
          d = !0;
        }

        if (h > 0) {
          if (!d) {
            var f,
                _ = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
                g = this.transformInv_(_);
            if (c) f = (Xt(n[0], p) + Xt(s[0], p)) / 2 - Xt(g[0], p);else f = (n[0] + s[0]) / 2 - g[0];
            var y = (n[1] + s[1]) / 2 - g[1];
            d = f * f + y * y > this.errorThresholdSquared_;
          }

          if (d) {
            if (Math.abs(t[0] - i[0]) <= Math.abs(t[1] - i[1])) {
              var v = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
                  m = this.transformInv_(v),
                  x = [(r[0] + t[0]) / 2, (r[1] + t[1]) / 2],
                  E = this.transformInv_(x);
              this.addQuad_(t, e, v, x, n, o, m, E, h - 1), this.addQuad_(x, v, i, r, E, m, s, a, h - 1);
            } else {
              var S = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
                  T = this.transformInv_(S),
                  C = [(i[0] + r[0]) / 2, (i[1] + r[1]) / 2],
                  R = this.transformInv_(C);
              this.addQuad_(t, S, C, r, n, T, R, a, h - 1), this.addQuad_(S, e, i, C, T, o, s, R, h - 1);
            }

            return;
          }
        }

        if (c) {
          if (!this.canWrapXInSource_) return;
          this.wrapsXInSource_ = !0;
        }

        this.addTriangle_(t, i, r, n, s, a), this.addTriangle_(t, e, i, n, o, s);
      }
    }, zu.prototype.calculateSourceExtent = function () {
      var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return this.triangles_.forEach(function (e, i, r) {
        var n = e.source;
        _t(t, n[0]), _t(t, n[1]), _t(t, n[2]);
      }), t;
    }, zu.prototype.getTriangles = function () {
      return this.triangles_;
    };

    var Wu = zu,
        Ku = function (t) {
      function e(e, i, r, n, o, s, a, h, l, u, p) {
        t.call(this, o, On.IDLE), this.renderEdges_ = void 0 !== p && p, this.pixelRatio_ = a, this.gutter_ = h, this.canvas_ = null, this.sourceTileGrid_ = i, this.targetTileGrid_ = n, this.wrappedTileCoord_ = s || o, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0;

        var c = n.getTileCoordExtent(this.wrappedTileCoord_),
            d = this.targetTileGrid_.getExtent(),
            f = this.sourceTileGrid_.getExtent(),
            _ = d ? wt(c, d) : c;

        if (0 !== xt(_)) {
          var g = e.getExtent();
          g && (f = f ? wt(f, g) : g);
          var y = n.getResolution(this.wrappedTileCoord_[0]),
              v = Bu(e, r, Tt(_), y);
          if (!isFinite(v) || v <= 0) this.state = On.EMPTY;else {
            var m = void 0 !== u ? u : vs;

            if (this.triangulation_ = new Wu(e, r, _, f, v * m), 0 !== this.triangulation_.getTriangles().length) {
              this.sourceZ_ = i.getZForResolution(v);
              var x = this.triangulation_.calculateSourceExtent();

              if (f && (e.canWrapX() ? (x[1] = kt(x[1], f[1], f[3]), x[3] = kt(x[3], f[1], f[3])) : x = wt(x, f)), xt(x)) {
                for (var E = i.getTileRangeForExtentAndZ(x, this.sourceZ_), S = E.minX; S <= E.maxX; S++) {
                  for (var T = E.minY; T <= E.maxY; T++) {
                    var C = l(this.sourceZ_, S, T, a);
                    C && this.sourceTiles_.push(C);
                  }
                }

                0 === this.sourceTiles_.length && (this.state = On.EMPTY);
              } else this.state = On.EMPTY;
            } else this.state = On.EMPTY;
          }
        } else this.state = On.EMPTY;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.state == On.LOADING && this.unlistenSources_(), t.prototype.disposeInternal.call(this);
      }, e.prototype.getImage = function () {
        return this.canvas_;
      }, e.prototype.reproject_ = function () {
        var t = [];
        if (this.sourceTiles_.forEach(function (e, i, r) {
          e && e.getState() == On.LOADED && t.push({
            extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),
            image: e.getImage()
          });
        }.bind(this)), this.sourceTiles_.length = 0, 0 === t.length) this.state = On.ERROR;else {
          var e = this.wrappedTileCoord_[0],
              i = this.targetTileGrid_.getTileSize(e),
              r = "number" == typeof i ? i : i[0],
              n = "number" == typeof i ? i : i[1],
              o = this.targetTileGrid_.getResolution(e),
              s = this.sourceTileGrid_.getResolution(this.sourceZ_),
              a = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
          this.canvas_ = Xu(r, n, this.pixelRatio_, s, this.sourceTileGrid_.getExtent(), o, a, this.triangulation_, t, this.gutter_, this.renderEdges_), this.state = On.LOADED;
        }
        this.changed();
      }, e.prototype.load = function () {
        if (this.state == On.IDLE) {
          this.state = On.LOADING, this.changed();
          var t = 0;
          this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(function (e, i, r) {
            var n = e.getState();

            if (n == On.IDLE || n == On.LOADING) {
              t++;
              var o = v(e, M.CHANGE, function (i) {
                var r = e.getState();
                r != On.LOADED && r != On.ERROR && r != On.EMPTY || (E(o), 0 === --t && (this.unlistenSources_(), this.reproject_()));
              }, this);
              this.sourcesListenerKeys_.push(o);
            }
          }.bind(this)), this.sourceTiles_.forEach(function (t, e, i) {
            t.getState() == On.IDLE && t.load();
          }), 0 === t && setTimeout(this.reproject_.bind(this), 0);
        }
      }, e.prototype.unlistenSources_ = function () {
        this.sourcesListenerKeys_.forEach(E), this.sourcesListenerKeys_ = null;
      }, e;
    }(vl),
        Hu = "tileloadstart",
        Zu = "tileloadend",
        qu = "tileloaderror",
        Ju = function (t) {
      function e(e) {
        t.call(this, {
          attributions: e.attributions,
          cacheSize: e.cacheSize,
          opaque: e.opaque,
          projection: e.projection,
          state: e.state,
          tileGrid: e.tileGrid,
          tilePixelRatio: e.tilePixelRatio,
          wrapX: e.wrapX,
          transition: e.transition,
          key: e.key,
          attributionsCollapsible: e.attributionsCollapsible
        }), this.generateTileUrlFunction_ = !e.tileUrlFunction, this.tileLoadFunction = e.tileLoadFunction, this.tileUrlFunction = e.tileUrlFunction ? e.tileUrlFunction.bind(this) : ju, this.urls = null, e.urls ? this.setUrls(e.urls) : e.url && this.setUrl(e.url), e.tileUrlFunction && this.setTileUrlFunction(e.tileUrlFunction, this.key_), this.tileLoadingKeys_ = {};
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getTileLoadFunction = function () {
        return this.tileLoadFunction;
      }, e.prototype.getTileUrlFunction = function () {
        return this.tileUrlFunction;
      }, e.prototype.getUrls = function () {
        return this.urls;
      }, e.prototype.handleTileChange = function (t) {
        var e,
            i = t.target,
            r = o(i),
            n = i.getState();
        n == On.LOADING ? (this.tileLoadingKeys_[r] = !0, e = Hu) : r in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[r], e = n == On.ERROR ? qu : n == On.LOADED || n == On.ABORT ? Zu : void 0), void 0 != e && this.dispatchEvent(new kl(e, i));
      }, e.prototype.setTileLoadFunction = function (t) {
        this.tileCache.clear(), this.tileLoadFunction = t, this.changed();
      }, e.prototype.setTileUrlFunction = function (t, e) {
        this.tileUrlFunction = t, this.tileCache.pruneExceptNewestZ(), void 0 !== e ? this.setKey(e) : this.changed();
      }, e.prototype.setUrl = function (t) {
        var e = this.urls = Uu(t);
        this.setUrls(e);
      }, e.prototype.setUrls = function (t) {
        this.urls = t;
        var e = t.join("\n");
        this.generateTileUrlFunction_ ? this.setTileUrlFunction(Du(t, this.tileGrid), e) : this.setKey(e);
      }, e.prototype.useTile = function (t, e, i) {
        var r = Sl(t, e, i);
        this.tileCache.containsKey(r) && this.tileCache.get(r);
      }, e;
    }(jl);

    function Qu(t, e) {
      t.getImage().src = e;
    }

    var $u = function (t) {
      function e(e) {
        t.call(this, {
          attributions: e.attributions,
          cacheSize: e.cacheSize,
          opaque: e.opaque,
          projection: e.projection,
          state: e.state,
          tileGrid: e.tileGrid,
          tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : Qu,
          tilePixelRatio: e.tilePixelRatio,
          tileUrlFunction: e.tileUrlFunction,
          url: e.url,
          urls: e.urls,
          wrapX: e.wrapX,
          transition: e.transition,
          key: e.key,
          attributionsCollapsible: e.attributionsCollapsible
        }), this.crossOrigin = void 0 !== e.crossOrigin ? e.crossOrigin : null, this.tileClass = void 0 !== e.tileClass ? e.tileClass : xl, this.tileCacheForProjection = {}, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.canExpireCache = function () {
        if (this.tileCache.canExpireCache()) return !0;

        for (var t in this.tileCacheForProjection) {
          if (this.tileCacheForProjection[t].canExpireCache()) return !0;
        }

        return !1;
      }, e.prototype.expireCache = function (t, e) {
        var i = this.getTileCacheForProjection(t);

        for (var r in this.tileCache.expireCache(this.tileCache == i ? e : {}), this.tileCacheForProjection) {
          var n = this.tileCacheForProjection[r];
          n.expireCache(n == i ? e : {});
        }
      }, e.prototype.getGutterForProjection = function (t) {
        return this.getProjection() && t && !Ie(this.getProjection(), t) ? 0 : this.getGutter();
      }, e.prototype.getGutter = function () {
        return 0;
      }, e.prototype.getOpaque = function (e) {
        return !(this.getProjection() && e && !Ie(this.getProjection(), e)) && t.prototype.getOpaque.call(this, e);
      }, e.prototype.getTileGridForProjection = function (t) {
        var e = this.getProjection();

        if (!this.tileGrid || e && !Ie(e, t)) {
          var i = o(t);
          return i in this.tileGridForProjection || (this.tileGridForProjection[i] = bl(t)), this.tileGridForProjection[i];
        }

        return this.tileGrid;
      }, e.prototype.getTileCacheForProjection = function (t) {
        var e = this.getProjection();
        if (!e || Ie(e, t)) return this.tileCache;
        var i = o(t);
        return i in this.tileCacheForProjection || (this.tileCacheForProjection[i] = new Rl(this.tileCache.highWaterMark)), this.tileCacheForProjection[i];
      }, e.prototype.createTile_ = function (t, e, i, r, n, o) {
        var s = [t, e, i],
            a = this.getTileCoordForTileUrlFunction(s, n),
            h = a ? this.tileUrlFunction(a, r, n) : void 0,
            l = new this.tileClass(s, void 0 !== h ? On.IDLE : On.EMPTY, void 0 !== h ? h : "", this.crossOrigin, this.tileLoadFunction, this.tileOptions);
        return l.key = o, v(l, M.CHANGE, this.handleTileChange, this), l;
      }, e.prototype.getTile = function (t, e, i, r, n) {
        var o = this.getProjection();

        if (o && n && !Ie(o, n)) {
          var s,
              a = this.getTileCacheForProjection(n),
              h = [t, e, i],
              l = Tl(h);
          a.containsKey(l) && (s = a.get(l));
          var u = this.getKey();
          if (s && s.key == u) return s;
          var p = this.getTileGridForProjection(o),
              c = this.getTileGridForProjection(n),
              d = this.getTileCoordForTileUrlFunction(h, n),
              f = new Ku(o, p, n, c, h, d, this.getTilePixelRatio(r), this.getGutter(), function (t, e, i, r) {
            return this.getTileInternal(t, e, i, r, o);
          }.bind(this), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_);
          return f.key = u, s ? (f.interimTile = s, f.refreshInterimChain(), a.replace(l, f)) : a.set(l, f), f;
        }

        return this.getTileInternal(t, e, i, r, o || n);
      }, e.prototype.getTileInternal = function (t, e, i, r, n) {
        var o = null,
            s = Sl(t, e, i),
            a = this.getKey();

        if (this.tileCache.containsKey(s)) {
          if ((o = this.tileCache.get(s)).key != a) {
            var h = o;
            o = this.createTile_(t, e, i, r, n, a), h.getState() == On.IDLE ? o.interimTile = h.interimTile : o.interimTile = h, o.refreshInterimChain(), this.tileCache.replace(s, o);
          }
        } else o = this.createTile_(t, e, i, r, n, a), this.tileCache.set(s, o);

        return o;
      }, e.prototype.setRenderReprojectionEdges = function (t) {
        if (this.renderReprojectionEdges_ != t) {
          for (var e in this.renderReprojectionEdges_ = t, this.tileCacheForProjection) {
            this.tileCacheForProjection[e].clear();
          }

          this.changed();
        }
      }, e.prototype.setTileGridForProjection = function (t, e) {
        var i = Ee(t);

        if (i) {
          var r = o(i);
          r in this.tileGridForProjection || (this.tileGridForProjection[r] = e);
        }
      }, e;
    }(Ju),
        tp = function (t) {
      function e(e) {
        var i = void 0 !== e.hidpi && e.hidpi;
        t.call(this, {
          cacheSize: e.cacheSize,
          crossOrigin: "anonymous",
          opaque: !0,
          projection: Ee("EPSG:3857"),
          reprojectionErrorThreshold: e.reprojectionErrorThreshold,
          state: ro.LOADING,
          tileLoadFunction: e.tileLoadFunction,
          tilePixelRatio: i ? 2 : 1,
          wrapX: void 0 === e.wrapX || e.wrapX,
          transition: e.transition
        }), this.hidpi_ = i, this.culture_ = void 0 !== e.culture ? e.culture : "en-us", this.maxZoom_ = void 0 !== e.maxZoom ? e.maxZoom : -1, this.apiKey_ = e.key, this.imagerySet_ = e.imagerySet, Yu("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.imagerySet_ + "?uriScheme=https&include=ImageryProviders&key=" + this.apiKey_ + "&c=" + this.culture_, this.handleImageryMetadataResponse.bind(this), void 0, "jsonp");
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getApiKey = function () {
        return this.apiKey_;
      }, e.prototype.getImagerySet = function () {
        return this.imagerySet_;
      }, e.prototype.handleImageryMetadataResponse = function (t) {
        if (200 == t.statusCode && "OK" == t.statusDescription && "ValidCredentials" == t.authenticationResultCode && 1 == t.resourceSets.length && 1 == t.resourceSets[0].resources.length) {
          var e = t.resourceSets[0].resources[0],
              i = -1 == this.maxZoom_ ? e.zoomMax : this.maxZoom_,
              r = Gl(this.getProjection()),
              n = this.hidpi_ ? 2 : 1,
              o = e.imageWidth == e.imageHeight ? e.imageWidth / n : [e.imageWidth / n, e.imageHeight / n],
              s = Fl({
            extent: r,
            minZoom: e.zoomMin,
            maxZoom: i,
            tileSize: o
          });
          this.tileGrid = s;
          var a = this.culture_,
              h = this.hidpi_;

          if (this.tileUrlFunction = ku(e.imageUrlSubdomains.map(function (t) {
            var i = [0, 0, 0],
                r = e.imageUrl.replace("{subdomain}", t).replace("{culture}", a);
            return function (t, e, n) {
              if (t) {
                El(t[0], t[1], -t[2] - 1, i);
                var o = r;
                return h && (o += "&dpi=d1&device=mobile"), o.replace("{quadkey}", function (t) {
                  var e,
                      i,
                      r = t[0],
                      n = new Array(r),
                      o = 1 << r - 1;

                  for (e = 0; e < r; ++e) {
                    i = 48, t[1] & o && (i += 1), t[2] & o && (i += 2), n[e] = String.fromCharCode(i), o >>= 1;
                  }

                  return n.join("");
                }(i));
              }
            };
          })), e.imageryProviders) {
            var l = Le(Ee("EPSG:4326"), this.getProjection());
            this.setAttributions(function (t) {
              var i = [],
                  r = t.viewState,
                  n = this.getTileGrid().getTileCoordForCoordAndResolution(r.center, r.resolution)[0];
              return e.imageryProviders.map(function (e) {
                for (var r = !1, o = e.coverageAreas, s = 0, a = o.length; s < a; ++s) {
                  var h = o[s];

                  if (n >= h.zoomMin && n <= h.zoomMax) {
                    var u = h.bbox;

                    if (Pt(Ft([u[1], u[0], u[3], u[2]], l), t.extent)) {
                      r = !0;
                      break;
                    }
                  }
                }

                r && i.push(e.attribution);
              }), i.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'), i;
            }.bind(this));
          }

          this.setState(ro.READY);
        } else this.setState(ro.ERROR);
      }, e;
    }($u),
        ep = function (t) {
      function e(e) {
        var i = e || {},
            r = void 0 !== i.projection ? i.projection : "EPSG:3857",
            n = void 0 !== i.tileGrid ? i.tileGrid : Fl({
          extent: Gl(r),
          maxZoom: i.maxZoom,
          minZoom: i.minZoom,
          tileSize: i.tileSize
        });
        t.call(this, {
          attributions: i.attributions,
          cacheSize: i.cacheSize,
          crossOrigin: i.crossOrigin,
          opaque: i.opaque,
          projection: r,
          reprojectionErrorThreshold: i.reprojectionErrorThreshold,
          tileGrid: n,
          tileLoadFunction: i.tileLoadFunction,
          tilePixelRatio: i.tilePixelRatio,
          tileUrlFunction: i.tileUrlFunction,
          url: i.url,
          urls: i.urls,
          wrapX: void 0 === i.wrapX || i.wrapX,
          transition: i.transition,
          attributionsCollapsible: i.attributionsCollapsible
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }($u),
        ip = function (t) {
      function e(e) {
        t.call(this, {
          attributions: e.attributions,
          cacheSize: e.cacheSize,
          crossOrigin: e.crossOrigin,
          maxZoom: void 0 !== e.maxZoom ? e.maxZoom : 18,
          minZoom: e.minZoom,
          projection: e.projection,
          wrapX: e.wrapX
        }), this.account_ = e.account, this.mapId_ = e.map || "", this.config_ = e.config || {}, this.templateCache_ = {}, this.initializeMap_();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getConfig = function () {
        return this.config_;
      }, e.prototype.updateConfig = function (t) {
        u(this.config_, t), this.initializeMap_();
      }, e.prototype.setConfig = function (t) {
        this.config_ = t || {}, this.initializeMap_();
      }, e.prototype.initializeMap_ = function () {
        var t = JSON.stringify(this.config_);
        if (this.templateCache_[t]) this.applyTemplate_(this.templateCache_[t]);else {
          var e = "https://" + this.account_ + ".carto.com/api/v1/map";
          this.mapId_ && (e += "/named/" + this.mapId_);
          var i = new XMLHttpRequest();
          i.addEventListener("load", this.handleInitResponse_.bind(this, t)), i.addEventListener("error", this.handleInitError_.bind(this)), i.open("POST", e), i.setRequestHeader("Content-type", "application/json"), i.send(JSON.stringify(this.config_));
        }
      }, e.prototype.handleInitResponse_ = function (t, e) {
        var i = e.target;

        if (!i.status || i.status >= 200 && i.status < 300) {
          var r;

          try {
            r = JSON.parse(i.responseText);
          } catch (t) {
            return void this.setState(ro.ERROR);
          }

          this.applyTemplate_(r), this.templateCache_[t] = r, this.setState(ro.READY);
        } else this.setState(ro.ERROR);
      }, e.prototype.handleInitError_ = function (t) {
        this.setState(ro.ERROR);
      }, e.prototype.applyTemplate_ = function (t) {
        var e = "https://" + t.cdn_url.https + "/" + this.account_ + "/api/v1/map/" + t.layergroupid + "/{z}/{x}/{y}.png";
        this.setUrl(e);
      }, e;
    }(ep),
        rp = {
      ADDFEATURE: "addfeature",
      CHANGEFEATURE: "changefeature",
      CLEAR: "clear",
      REMOVEFEATURE: "removefeature"
    },
        np = function (t) {
      function e(e, i) {
        t.call(this, e), this.feature = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        op = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          attributions: i.attributions,
          projection: void 0,
          state: ro.READY,
          wrapX: void 0 === i.wrapX || i.wrapX
        }), this.loader_ = I, this.format_ = i.format, this.overlaps_ = void 0 == i.overlaps || i.overlaps, this.url_ = i.url, void 0 !== i.loader ? this.loader_ = i.loader : void 0 !== this.url_ && (Y(this.format_, 7), this.loader_ = ql(this.url_, this.format_)), this.strategy_ = void 0 !== i.strategy ? i.strategy : Jl;
        var r,
            n,
            o = void 0 === i.useSpatialIndex || i.useSpatialIndex;
        this.featuresRtree_ = o ? new tl() : null, this.loadedExtentsRtree_ = new tl(), this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.undefIdIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null, Array.isArray(i.features) ? n = i.features : i.features && (n = (r = i.features).getArray()), o || void 0 !== r || (r = new U(n)), void 0 !== n && this.addFeaturesInternal(n), void 0 !== r && this.bindFeaturesCollection_(r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addFeature = function (t) {
        this.addFeatureInternal(t), this.changed();
      }, e.prototype.addFeatureInternal = function (t) {
        var e = o(t);

        if (this.addToIndex_(e, t)) {
          this.setupChangeEvents_(e, t);
          var i = t.getGeometry();

          if (i) {
            var r = i.getExtent();
            this.featuresRtree_ && this.featuresRtree_.insert(r, t);
          } else this.nullGeometryFeatures_[e] = t;

          this.dispatchEvent(new np(rp.ADDFEATURE, t));
        }
      }, e.prototype.setupChangeEvents_ = function (t, e) {
        this.featureChangeKeys_[t] = [v(e, M.CHANGE, this.handleFeatureChange_, this), v(e, l, this.handleFeatureChange_, this)];
      }, e.prototype.addToIndex_ = function (t, e) {
        var i = !0,
            r = e.getId();
        return void 0 !== r ? r.toString() in this.idIndex_ ? i = !1 : this.idIndex_[r.toString()] = e : (Y(!(t in this.undefIdIndex_), 30), this.undefIdIndex_[t] = e), i;
      }, e.prototype.addFeatures = function (t) {
        this.addFeaturesInternal(t), this.changed();
      }, e.prototype.addFeaturesInternal = function (t) {
        for (var e = [], i = [], r = [], n = 0, s = t.length; n < s; n++) {
          var a = t[n],
              h = o(a);
          this.addToIndex_(h, a) && i.push(a);
        }

        for (var l = 0, u = i.length; l < u; l++) {
          var p = i[l],
              c = o(p);
          this.setupChangeEvents_(c, p);
          var d = p.getGeometry();

          if (d) {
            var f = d.getExtent();
            e.push(f), r.push(p);
          } else this.nullGeometryFeatures_[c] = p;
        }

        this.featuresRtree_ && this.featuresRtree_.load(e, r);

        for (var _ = 0, g = i.length; _ < g; _++) {
          this.dispatchEvent(new np(rp.ADDFEATURE, i[_]));
        }
      }, e.prototype.bindFeaturesCollection_ = function (t) {
        var e = !1;
        v(this, rp.ADDFEATURE, function (i) {
          e || (e = !0, t.push(i.feature), e = !1);
        }), v(this, rp.REMOVEFEATURE, function (i) {
          e || (e = !0, t.remove(i.feature), e = !1);
        }), v(t, h.ADD, function (t) {
          e || (e = !0, this.addFeature(t.element), e = !1);
        }, this), v(t, h.REMOVE, function (t) {
          e || (e = !0, this.removeFeature(t.element), e = !1);
        }, this), this.featuresCollection_ = t;
      }, e.prototype.clear = function (t) {
        if (t) {
          for (var e in this.featureChangeKeys_) {
            this.featureChangeKeys_[e].forEach(E);
          }

          this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.undefIdIndex_ = {});
        } else if (this.featuresRtree_) for (var i in this.featuresRtree_.forEach(this.removeFeatureInternal, this), this.nullGeometryFeatures_) {
          this.removeFeatureInternal(this.nullGeometryFeatures_[i]);
        }

        this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.loadedExtentsRtree_.clear(), this.nullGeometryFeatures_ = {};
        var r = new np(rp.CLEAR);
        this.dispatchEvent(r), this.changed();
      }, e.prototype.forEachFeature = function (t) {
        if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
        this.featuresCollection_ && this.featuresCollection_.forEach(t);
      }, e.prototype.forEachFeatureAtCoordinateDirect = function (t, e) {
        var i = [t[0], t[1], t[0], t[1]];
        return this.forEachFeatureInExtent(i, function (i) {
          return i.getGeometry().intersectsCoordinate(t) ? e(i) : void 0;
        });
      }, e.prototype.forEachFeatureInExtent = function (t, e) {
        if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e);
        this.featuresCollection_ && this.featuresCollection_.forEach(e);
      }, e.prototype.forEachFeatureIntersectingExtent = function (t, e) {
        return this.forEachFeatureInExtent(t, function (i) {
          if (i.getGeometry().intersectsExtent(t)) {
            var r = e(i);
            if (r) return r;
          }
        });
      }, e.prototype.getFeaturesCollection = function () {
        return this.featuresCollection_;
      }, e.prototype.getFeatures = function () {
        var t;
        return this.featuresCollection_ ? t = this.featuresCollection_.getArray() : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), d(this.nullGeometryFeatures_) || K(t, c(this.nullGeometryFeatures_))), t;
      }, e.prototype.getFeaturesAtCoordinate = function (t) {
        var e = [];
        return this.forEachFeatureAtCoordinateDirect(t, function (t) {
          e.push(t);
        }), e;
      }, e.prototype.getFeaturesInExtent = function (t) {
        return this.featuresRtree_.getInExtent(t);
      }, e.prototype.getClosestFeatureToCoordinate = function (t, e) {
        var i = t[0],
            r = t[1],
            n = null,
            o = [NaN, NaN],
            s = 1 / 0,
            a = [-1 / 0, -1 / 0, 1 / 0, 1 / 0],
            h = e || R;
        return this.featuresRtree_.forEachInExtent(a, function (t) {
          if (h(t)) {
            var e = t.getGeometry(),
                l = s;

            if ((s = e.closestPointXY(i, r, o, s)) < l) {
              n = t;
              var u = Math.sqrt(s);
              a[0] = i - u, a[1] = r - u, a[2] = i + u, a[3] = r + u;
            }
          }
        }), n;
      }, e.prototype.getExtent = function (t) {
        return this.featuresRtree_.getExtent(t);
      }, e.prototype.getFeatureById = function (t) {
        var e = this.idIndex_[t.toString()];
        return void 0 !== e ? e : null;
      }, e.prototype.getFormat = function () {
        return this.format_;
      }, e.prototype.getOverlaps = function () {
        return this.overlaps_;
      }, e.prototype.getUrl = function () {
        return this.url_;
      }, e.prototype.handleFeatureChange_ = function (t) {
        var e = t.target,
            i = o(e),
            r = e.getGeometry();

        if (r) {
          var n = r.getExtent();
          i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(n, e)) : this.featuresRtree_ && this.featuresRtree_.update(n, e);
        } else i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[i] = e);

        var s = e.getId();

        if (void 0 !== s) {
          var a = s.toString();
          i in this.undefIdIndex_ ? (delete this.undefIdIndex_[i], this.idIndex_[a] = e) : this.idIndex_[a] !== e && (this.removeFromIdIndex_(e), this.idIndex_[a] = e);
        } else i in this.undefIdIndex_ || (this.removeFromIdIndex_(e), this.undefIdIndex_[i] = e);

        this.changed(), this.dispatchEvent(new np(rp.CHANGEFEATURE, e));
      }, e.prototype.hasFeature = function (t) {
        var e = t.getId();
        return void 0 !== e ? e in this.idIndex_ : o(t) in this.undefIdIndex_;
      }, e.prototype.isEmpty = function () {
        return this.featuresRtree_.isEmpty() && d(this.nullGeometryFeatures_);
      }, e.prototype.loadFeatures = function (t, e, i) {
        var r = this,
            n = this.loadedExtentsRtree_,
            o = this.strategy_(t, e);
        this.loading = !1;

        for (var s = function s(t, _s2) {
          var a = o[t];
          n.forEachInExtent(a, function (t) {
            return ot(t.extent, a);
          }) || (r.loader_.call(r, a, e, i), n.insert(a, {
            extent: a.slice()
          }), r.loading = r.loader_ !== I);
        }, a = 0, h = o.length; a < h; ++a) {
          s(a);
        }
      }, e.prototype.removeLoadedExtent = function (t) {
        var e,
            i = this.loadedExtentsRtree_;
        i.forEachInExtent(t, function (i) {
          if (dt(i.extent, t)) return e = i, !0;
        }), e && i.remove(e);
      }, e.prototype.removeFeature = function (t) {
        var e = o(t);
        e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t), this.removeFeatureInternal(t), this.changed();
      }, e.prototype.removeFeatureInternal = function (t) {
        var e = o(t);
        this.featureChangeKeys_[e].forEach(E), delete this.featureChangeKeys_[e];
        var i = t.getId();
        void 0 !== i ? delete this.idIndex_[i.toString()] : delete this.undefIdIndex_[e], this.dispatchEvent(new np(rp.REMOVEFEATURE, t));
      }, e.prototype.removeFromIdIndex_ = function (t) {
        var e = !1;

        for (var i in this.idIndex_) {
          if (this.idIndex_[i] === t) {
            delete this.idIndex_[i], e = !0;
            break;
          }
        }

        return e;
      }, e.prototype.setLoader = function (t) {
        this.loader_ = t;
      }, e;
    }(Il),
        sp = function (t) {
      function e(e) {
        t.call(this, {
          attributions: e.attributions,
          wrapX: e.wrapX
        }), this.resolution = void 0, this.distance = void 0 !== e.distance ? e.distance : 20, this.features = [], this.geometryFunction = e.geometryFunction || function (t) {
          var e = t.getGeometry();
          return Y(e.getType() == Nt.POINT, 10), e;
        }, this.source = e.source, v(this.source, M.CHANGE, this.refresh, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getDistance = function () {
        return this.distance;
      }, e.prototype.getSource = function () {
        return this.source;
      }, e.prototype.loadFeatures = function (t, e, i) {
        this.source.loadFeatures(t, e, i), e !== this.resolution && (this.clear(), this.resolution = e, this.cluster(), this.addFeatures(this.features));
      }, e.prototype.setDistance = function (t) {
        this.distance = t, this.refresh();
      }, e.prototype.refresh = function () {
        this.clear(), this.cluster(), this.addFeatures(this.features), t.prototype.refresh.call(this);
      }, e.prototype.cluster = function () {
        if (void 0 !== this.resolution) {
          this.features.length = 0;

          for (var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0], e = this.distance * this.resolution, i = this.source.getFeatures(), r = {}, n = 0, s = i.length; n < s; n++) {
            var a = i[n];

            if (!(o(a) in r)) {
              var h = this.geometryFunction(a);

              if (h) {
                pt(h.getCoordinates(), t), et(t, e, t);
                var l = this.source.getFeaturesInExtent(t);
                l = l.filter(function (t) {
                  var e = o(t);
                  return !(e in r) && (r[e] = !0, !0);
                }), this.features.push(this.createCluster(l));
              }
            }
          }
        }
      }, e.prototype.createCluster = function (t) {
        for (var e = [0, 0], i = t.length - 1; i >= 0; --i) {
          var r = this.geometryFunction(t[i]);
          r ? Hi(e, r.getCoordinates()) : t.splice(i, 1);
        }

        tr(e, 1 / t.length);
        var n = new B(new ci(e));
        return n.set("features", t), n;
      }, e;
    }(op),
        ap = function (t) {
      function e(e, i, r, n, o, s) {
        var a = e.getExtent(),
            h = i.getExtent(),
            l = h ? wt(r, h) : r,
            u = Bu(e, i, Tt(l), n),
            p = new Wu(e, i, l, a, u * vs),
            c = s(p.calculateSourceExtent(), u, o),
            d = xs.LOADED;
        c && (d = xs.IDLE);
        var f = c ? c.getPixelRatio() : 1;
        t.call(this, r, n, f, d), this.targetProj_ = i, this.maxSourceExtent_ = a, this.triangulation_ = p, this.targetResolution_ = n, this.targetExtent_ = r, this.sourceImage_ = c, this.sourcePixelRatio_ = f, this.canvas_ = null, this.sourceListenerKey_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.state == xs.LOADING && this.unlistenSource_(), t.prototype.disposeInternal.call(this);
      }, e.prototype.getImage = function () {
        return this.canvas_;
      }, e.prototype.getProjection = function () {
        return this.targetProj_;
      }, e.prototype.reproject_ = function () {
        var t = this.sourceImage_.getState();

        if (t == xs.LOADED) {
          var e = Ot(this.targetExtent_) / this.targetResolution_,
              i = Rt(this.targetExtent_) / this.targetResolution_;
          this.canvas_ = Xu(e, i, this.sourcePixelRatio_, this.sourceImage_.getResolution(), this.maxSourceExtent_, this.targetResolution_, this.targetExtent_, this.triangulation_, [{
            extent: this.sourceImage_.getExtent(),
            image: this.sourceImage_.getImage()
          }], 0);
        }

        this.state = t, this.changed();
      }, e.prototype.load = function () {
        if (this.state == xs.IDLE) {
          this.state = xs.LOADING, this.changed();
          var t = this.sourceImage_.getState();
          t == xs.LOADED || t == xs.ERROR ? this.reproject_() : (this.sourceListenerKey_ = v(this.sourceImage_, M.CHANGE, function (t) {
            var e = this.sourceImage_.getState();
            e != xs.LOADED && e != xs.ERROR || (this.unlistenSource_(), this.reproject_());
          }, this), this.sourceImage_.load());
        }
      }, e.prototype.unlistenSource_ = function () {
        E(this.sourceListenerKey_), this.sourceListenerKey_ = null;
      }, e;
    }(ms),
        hp = "imageloadstart",
        lp = "imageloadend",
        up = "imageloaderror",
        pp = function (t) {
      function e(e, i) {
        t.call(this, e), this.image = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    function cp(t, e) {
      t.getImage().src = e;
    }

    var dp = function (t) {
      function e(e) {
        t.call(this, {
          attributions: e.attributions,
          projection: e.projection,
          state: e.state
        }), this.resolutions_ = void 0 !== e.resolutions ? e.resolutions : null, this.reprojectedImage_ = null, this.reprojectedRevision_ = 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getResolutions = function () {
        return this.resolutions_;
      }, e.prototype.findNearestResolution = function (t) {
        if (this.resolutions_) {
          var e = z(this.resolutions_, t, 0);
          t = this.resolutions_[e];
        }

        return t;
      }, e.prototype.getImage = function (t, e, i, r) {
        var n = this.getProjection();

        if (n && r && !Ie(n, r)) {
          if (this.reprojectedImage_) {
            if (this.reprojectedRevision_ == this.getRevision() && Ie(this.reprojectedImage_.getProjection(), r) && this.reprojectedImage_.getResolution() == e && dt(this.reprojectedImage_.getExtent(), t)) return this.reprojectedImage_;
            this.reprojectedImage_.dispose(), this.reprojectedImage_ = null;
          }

          return this.reprojectedImage_ = new ap(n, r, t, e, i, function (t, e, i) {
            return this.getImageInternal(t, e, i, n);
          }.bind(this)), this.reprojectedRevision_ = this.getRevision(), this.reprojectedImage_;
        }

        return n && (r = n), this.getImageInternal(t, e, i, r);
      }, e.prototype.getImageInternal = function (t, e, i, n) {
        return r();
      }, e.prototype.handleImageChange = function (t) {
        var e = t.target;

        switch (e.getState()) {
          case xs.LOADING:
            this.loading = !0, this.dispatchEvent(new pp(hp, e));
            break;

          case xs.LOADED:
            this.loading = !1, this.dispatchEvent(new pp(lp, e));
            break;

          case xs.ERROR:
            this.loading = !1, this.dispatchEvent(new pp(up, e));
        }
      }, e;
    }(Il),
        fp = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i, r, xs.IDLE), this.src_ = n, this.image_ = new Image(), null !== o && (this.image_.crossOrigin = o), this.imageListenerKeys_ = null, this.state = xs.IDLE, this.imageLoadFunction_ = s;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getImage = function () {
        return this.image_;
      }, e.prototype.handleImageError_ = function () {
        this.state = xs.ERROR, this.unlistenImage_(), this.changed();
      }, e.prototype.handleImageLoad_ = function () {
        void 0 === this.resolution && (this.resolution = Rt(this.extent) / this.image_.height), this.state = xs.LOADED, this.unlistenImage_(), this.changed();
      }, e.prototype.load = function () {
        this.state != xs.IDLE && this.state != xs.ERROR || (this.state = xs.LOADING, this.changed(), this.imageListenerKeys_ = [m(this.image_, M.ERROR, this.handleImageError_, this), m(this.image_, M.LOAD, this.handleImageLoad_, this)], this.imageLoadFunction_(this, this.src_));
      }, e.prototype.setImage = function (t) {
        this.image_ = t;
      }, e.prototype.unlistenImage_ = function () {
        this.imageListenerKeys_.forEach(E), this.imageListenerKeys_ = null;
      }, e;
    }(ms);

    function _p(t, e) {
      var i = [];
      Object.keys(e).forEach(function (t) {
        null !== e[t] && void 0 !== e[t] && i.push(t + "=" + encodeURIComponent(e[t]));
      });
      var r = i.join("&");
      return (t = -1 === (t = t.replace(/[?&]$/, "")).indexOf("?") ? t + "?" : t + "&") + r;
    }

    var gp = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          attributions: i.attributions,
          projection: i.projection,
          resolutions: i.resolutions
        }), this.crossOrigin_ = void 0 !== i.crossOrigin ? i.crossOrigin : null, this.hidpi_ = void 0 === i.hidpi || i.hidpi, this.url_ = i.url, this.imageLoadFunction_ = void 0 !== i.imageLoadFunction ? i.imageLoadFunction : cp, this.params_ = i.params || {}, this.image_ = null, this.imageSize_ = [0, 0], this.renderedRevision_ = 0, this.ratio_ = void 0 !== i.ratio ? i.ratio : 1.5;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getParams = function () {
        return this.params_;
      }, e.prototype.getImageInternal = function (t, e, i, r) {
        if (void 0 === this.url_) return null;
        e = this.findNearestResolution(e), i = this.hidpi_ ? i : 1;
        var n = this.image_;
        if (n && this.renderedRevision_ == this.getRevision() && n.getResolution() == e && n.getPixelRatio() == i && ot(n.getExtent(), t)) return n;
        var o = {
          F: "image",
          FORMAT: "PNG32",
          TRANSPARENT: !0
        };
        u(o, this.params_);
        var s = ((t = t.slice())[0] + t[2]) / 2,
            a = (t[1] + t[3]) / 2;

        if (1 != this.ratio_) {
          var h = this.ratio_ * Ot(t) / 2,
              l = this.ratio_ * Rt(t) / 2;
          t[0] = s - h, t[1] = a - l, t[2] = s + h, t[3] = a + l;
        }

        var p = e / i,
            c = Math.ceil(Ot(t) / p),
            d = Math.ceil(Rt(t) / p);
        t[0] = s - p * c / 2, t[2] = s + p * c / 2, t[1] = a - p * d / 2, t[3] = a + p * d / 2, this.imageSize_[0] = c, this.imageSize_[1] = d;
        var f = this.getRequestUrl_(t, this.imageSize_, i, r, o);
        return this.image_ = new fp(t, e, i, f, this.crossOrigin_, this.imageLoadFunction_), this.renderedRevision_ = this.getRevision(), v(this.image_, M.CHANGE, this.handleImageChange, this), this.image_;
      }, e.prototype.getImageLoadFunction = function () {
        return this.imageLoadFunction_;
      }, e.prototype.getRequestUrl_ = function (t, e, i, r, n) {
        var o = r.getCode().split(":").pop();
        n.SIZE = e[0] + "," + e[1], n.BBOX = t.join(","), n.BBOXSR = o, n.IMAGESR = o, n.DPI = Math.round(90 * i);
        var s = this.url_,
            a = s.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        return a == s && Y(!1, 50), _p(a, n);
      }, e.prototype.getUrl = function () {
        return this.url_;
      }, e.prototype.setImageLoadFunction = function (t) {
        this.image_ = null, this.imageLoadFunction_ = t, this.changed();
      }, e.prototype.setUrl = function (t) {
        t != this.url_ && (this.url_ = t, this.image_ = null, this.changed());
      }, e.prototype.updateParams = function (t) {
        u(this.params_, t), this.image_ = null, this.changed();
      }, e;
    }(dp),
        yp = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          attributions: i.attributions,
          projection: i.projection,
          resolutions: i.resolutions,
          state: i.state
        }), this.canvasFunction_ = i.canvasFunction, this.canvas_ = null, this.renderedRevision_ = 0, this.ratio_ = void 0 !== i.ratio ? i.ratio : 1.5;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getImageInternal = function (t, e, i, r) {
        e = this.findNearestResolution(e);
        var n = this.canvas_;
        if (n && this.renderedRevision_ == this.getRevision() && n.getResolution() == e && n.getPixelRatio() == i && ot(n.getExtent(), t)) return n;
        Mt(t = t.slice(), this.ratio_);
        var o = [Ot(t) / e * i, Rt(t) / e * i],
            s = this.canvasFunction_.call(this, t, e, i, o, r);
        return s && (n = new Es(t, e, i, s)), this.canvas_ = n, this.renderedRevision_ = this.getRevision(), n;
      }, e;
    }(dp);

    var vp = function (t) {
      function e(e) {
        t.call(this, {
          projection: e.projection,
          resolutions: e.resolutions
        }), this.crossOrigin_ = void 0 !== e.crossOrigin ? e.crossOrigin : null, this.displayDpi_ = void 0 !== e.displayDpi ? e.displayDpi : 96, this.params_ = e.params || {}, this.url_ = e.url, this.imageLoadFunction_ = void 0 !== e.imageLoadFunction ? e.imageLoadFunction : cp, this.hidpi_ = void 0 === e.hidpi || e.hidpi, this.metersPerUnit_ = void 0 !== e.metersPerUnit ? e.metersPerUnit : 1, this.ratio_ = void 0 !== e.ratio ? e.ratio : 1, this.useOverlay_ = void 0 !== e.useOverlay && e.useOverlay, this.image_ = null, this.renderedRevision_ = 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getParams = function () {
        return this.params_;
      }, e.prototype.getImageInternal = function (t, e, i, r) {
        e = this.findNearestResolution(e), i = this.hidpi_ ? i : 1;
        var n = this.image_;
        if (n && this.renderedRevision_ == this.getRevision() && n.getResolution() == e && n.getPixelRatio() == i && ot(n.getExtent(), t)) return n;
        1 != this.ratio_ && Mt(t = t.slice(), this.ratio_);
        var o = [Ot(t) / e * i, Rt(t) / e * i];

        if (void 0 !== this.url_) {
          var s = this.getUrl(this.url_, this.params_, t, o, r);
          v(n = new fp(t, e, i, s, this.crossOrigin_, this.imageLoadFunction_), M.CHANGE, this.handleImageChange, this);
        } else n = null;

        return this.image_ = n, this.renderedRevision_ = this.getRevision(), n;
      }, e.prototype.getImageLoadFunction = function () {
        return this.imageLoadFunction_;
      }, e.prototype.updateParams = function (t) {
        u(this.params_, t), this.changed();
      }, e.prototype.getUrl = function (t, e, i, r, n) {
        var o = function (t, e, i, r) {
          var n = Ot(t),
              o = Rt(t),
              s = e[0],
              a = e[1],
              h = .0254 / r;
          return a * n > s * o ? n * i / (s * h) : o * i / (a * h);
        }(i, r, this.metersPerUnit_, this.displayDpi_),
            s = Tt(i),
            a = {
          OPERATION: this.useOverlay_ ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
          VERSION: "2.0.0",
          LOCALE: "en",
          CLIENTAGENT: "ol/source/ImageMapGuide source",
          CLIP: "1",
          SETDISPLAYDPI: this.displayDpi_,
          SETDISPLAYWIDTH: Math.round(r[0]),
          SETDISPLAYHEIGHT: Math.round(r[1]),
          SETVIEWSCALE: o,
          SETVIEWCENTERX: s[0],
          SETVIEWCENTERY: s[1]
        };

        return u(a, e), _p(t, a);
      }, e.prototype.setImageLoadFunction = function (t) {
        this.image_ = null, this.imageLoadFunction_ = t, this.changed();
      }, e;
    }(dp),
        mp = function (t) {
      function e(e) {
        var i = void 0 !== e.crossOrigin ? e.crossOrigin : null,
            r = void 0 !== e.imageLoadFunction ? e.imageLoadFunction : cp;
        t.call(this, {
          attributions: e.attributions,
          projection: Ee(e.projection)
        }), this.url_ = e.url, this.imageExtent_ = e.imageExtent, this.image_ = new fp(this.imageExtent_, void 0, 1, this.url_, i, r), this.imageSize_ = e.imageSize ? e.imageSize : null, v(this.image_, M.CHANGE, this.handleImageChange, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getImageExtent = function () {
        return this.imageExtent_;
      }, e.prototype.getImageInternal = function (t, e, i, r) {
        return Pt(t, this.image_.getExtent()) ? this.image_ : null;
      }, e.prototype.getUrl = function () {
        return this.url_;
      }, e.prototype.handleImageChange = function (e) {
        if (this.image_.getState() == xs.LOADED) {
          var i,
              r,
              n = this.image_.getExtent(),
              o = this.image_.getImage();
          this.imageSize_ ? (i = this.imageSize_[0], r = this.imageSize_[1]) : (i = o.width, r = o.height);
          var s = Rt(n) / r,
              a = Math.ceil(Ot(n) / s);

          if (a != i) {
            var h = Jn(a, r),
                l = h.canvas;
            h.drawImage(o, 0, 0, i, r, 0, 0, l.width, l.height), this.image_.setImage(l);
          }
        }

        t.prototype.handleImageChange.call(this, e);
      }, e;
    }(dp),
        xp = "1.3.0",
        Ep = "carmentaserver",
        Sp = "geoserver",
        Tp = "mapserver",
        Cp = "qgis",
        Rp = [101, 101],
        wp = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          attributions: i.attributions,
          projection: i.projection,
          resolutions: i.resolutions
        }), this.crossOrigin_ = void 0 !== i.crossOrigin ? i.crossOrigin : null, this.url_ = i.url, this.imageLoadFunction_ = void 0 !== i.imageLoadFunction ? i.imageLoadFunction : cp, this.params_ = i.params || {}, this.v13_ = !0, this.updateV13_(), this.serverType_ = i.serverType, this.hidpi_ = void 0 === i.hidpi || i.hidpi, this.image_ = null, this.imageSize_ = [0, 0], this.renderedRevision_ = 0, this.ratio_ = void 0 !== i.ratio ? i.ratio : 1.5;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getGetFeatureInfoUrl = function (t, e, i, r) {
        if (void 0 !== this.url_) {
          var n = Ee(i),
              o = this.getProjection();
          o && o !== n && (e = Bu(o, n, t, e), t = Pe(t, n, o));
          var s = Ct(t, e, 0, Rp),
              a = {
            SERVICE: "WMS",
            VERSION: xp,
            REQUEST: "GetFeatureInfo",
            FORMAT: "image/png",
            TRANSPARENT: !0,
            QUERY_LAYERS: this.params_.LAYERS
          };
          u(a, this.params_, r);
          var h = Math.floor((t[0] - s[0]) / e),
              l = Math.floor((s[3] - t[1]) / e);
          return a[this.v13_ ? "I" : "X"] = h, a[this.v13_ ? "J" : "Y"] = l, this.getRequestUrl_(s, Rp, 1, o || n, a);
        }
      }, e.prototype.getParams = function () {
        return this.params_;
      }, e.prototype.getImageInternal = function (t, e, i, r) {
        if (void 0 === this.url_) return null;
        e = this.findNearestResolution(e), 1 == i || this.hidpi_ && void 0 !== this.serverType_ || (i = 1);
        var n = e / i,
            o = Tt(t),
            s = Ct(o, n, 0, [Math.ceil(Ot(t) / n), Math.ceil(Rt(t) / n)]),
            a = Ct(o, n, 0, [Math.ceil(this.ratio_ * Ot(t) / n), Math.ceil(this.ratio_ * Rt(t) / n)]),
            h = this.image_;
        if (h && this.renderedRevision_ == this.getRevision() && h.getResolution() == e && h.getPixelRatio() == i && ot(h.getExtent(), s)) return h;
        var l = {
          SERVICE: "WMS",
          VERSION: xp,
          REQUEST: "GetMap",
          FORMAT: "image/png",
          TRANSPARENT: !0
        };
        u(l, this.params_), this.imageSize_[0] = Math.round(Ot(a) / n), this.imageSize_[1] = Math.round(Rt(a) / n);
        var p = this.getRequestUrl_(a, this.imageSize_, i, r, l);
        return this.image_ = new fp(a, e, i, p, this.crossOrigin_, this.imageLoadFunction_), this.renderedRevision_ = this.getRevision(), v(this.image_, M.CHANGE, this.handleImageChange, this), this.image_;
      }, e.prototype.getImageLoadFunction = function () {
        return this.imageLoadFunction_;
      }, e.prototype.getRequestUrl_ = function (t, e, i, r, n) {
        if (Y(void 0 !== this.url_, 9), n[this.v13_ ? "CRS" : "SRS"] = r.getCode(), "STYLES" in this.params_ || (n.STYLES = ""), 1 != i) switch (this.serverType_) {
          case Sp:
            var o = 90 * i + .5 | 0;
            "FORMAT_OPTIONS" in n ? n.FORMAT_OPTIONS += ";dpi:" + o : n.FORMAT_OPTIONS = "dpi:" + o;
            break;

          case Tp:
            n.MAP_RESOLUTION = 90 * i;
            break;

          case Ep:
          case Cp:
            n.DPI = 90 * i;
            break;

          default:
            Y(!1, 8);
        }
        n.WIDTH = e[0], n.HEIGHT = e[1];
        var s,
            a = r.getAxisOrientation();
        return s = this.v13_ && "ne" == a.substr(0, 2) ? [t[1], t[0], t[3], t[2]] : t, n.BBOX = s.join(","), _p(this.url_, n);
      }, e.prototype.getUrl = function () {
        return this.url_;
      }, e.prototype.setImageLoadFunction = function (t) {
        this.image_ = null, this.imageLoadFunction_ = t, this.changed();
      }, e.prototype.setUrl = function (t) {
        t != this.url_ && (this.url_ = t, this.image_ = null, this.changed());
      }, e.prototype.updateParams = function (t) {
        u(this.params_, t), this.updateV13_(), this.image_ = null, this.changed();
      }, e.prototype.updateV13_ = function () {
        var t = this.params_.VERSION || xp;
        this.v13_ = Ki(t, "1.3") >= 0;
      }, e;
    }(dp),
        Ip = '&#169; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
        Lp = function (t) {
      function e(e) {
        var i,
            r = e || {};
        i = void 0 !== r.attributions ? r.attributions : [Ip];
        var n = void 0 !== r.crossOrigin ? r.crossOrigin : "anonymous",
            o = void 0 !== r.url ? r.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        t.call(this, {
          attributions: i,
          cacheSize: r.cacheSize,
          crossOrigin: n,
          opaque: void 0 === r.opaque || r.opaque,
          maxZoom: void 0 !== r.maxZoom ? r.maxZoom : 19,
          reprojectionErrorThreshold: r.reprojectionErrorThreshold,
          tileLoadFunction: r.tileLoadFunction,
          url: o,
          wrapX: r.wrapX,
          attributionsCollapsible: !1
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(ep),
        Op = i(2),
        Pp = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.type = Ss.IMAGE;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(xo);

    Pp.prototype.getSource;

    var bp = Pp,
        Mp = "preload",
        Fp = "useInterimTilesOnError",
        Ap = function (t) {
      function e(e) {
        var i = e || {},
            r = u({}, i);
        delete r.preload, delete r.useInterimTilesOnError, t.call(this, r), this.setPreload(void 0 !== i.preload ? i.preload : 0), this.setUseInterimTilesOnError(void 0 === i.useInterimTilesOnError || i.useInterimTilesOnError), this.type = Ss.TILE;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getPreload = function () {
        return this.get(Mp);
      }, e.prototype.setPreload = function (t) {
        this.set(Mp, t);
      }, e.prototype.getUseInterimTilesOnError = function () {
        return this.get(Fp);
      }, e.prototype.setUseInterimTilesOnError = function (t) {
        this.set(Fp, t);
      }, e;
    }(xo);

    Ap.prototype.getSource;

    var Np = Ap,
        Gp = "beforeoperations",
        Dp = "afteroperations",
        kp = {
      PIXEL: "pixel",
      IMAGE: "image"
    },
        jp = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.extent = i.extent, this.resolution = i.viewState.resolution / i.pixelRatio, this.data = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        Up = null;

    function Yp(t, e, i) {
      if (!t.prepareFrame(e, i)) return null;
      var r = e.size[0],
          n = e.size[1];

      if (Up) {
        var o = Up.canvas;
        o.width !== r || o.height !== n ? Up = Jn(r, n) : Up.clearRect(0, 0, r, n);
      } else Up = Jn(r, n);

      return t.composeFrame(e, i, Up), Up.getImageData(0, 0, r, n);
    }

    function Bp(t) {
      var e = t,
          i = t,
          r = t,
          n = null;
      return "function" == typeof e.getTile ? n = function (t) {
        var e = new Np({
          source: t
        });
        return new ha(e);
      }(e) : "function" == typeof i.getImage ? n = function (t) {
        var e = new bp({
          source: t
        });
        return new ra(e);
      }(i) : r.getType() === Ss.TILE ? n = new ha(r) : r.getType() != Ss.IMAGE && r.getType() != Ss.VECTOR || (n = new ra(r)), n;
    }

    var Vp = function (t) {
      function e(e) {
        t.call(this, {
          projection: null
        }), this.worker_ = null, this.operationType_ = void 0 !== e.operationType ? e.operationType : kp.PIXEL, this.threads_ = void 0 !== e.threads ? e.threads : 1, this.renderers_ = function (t) {
          for (var e = t.length, i = new Array(e), r = 0; r < e; ++r) {
            i[r] = Bp(t[r]);
          }

          return i;
        }(e.sources);

        for (var i = 0, r = this.renderers_.length; i < r; ++i) {
          v(this.renderers_[i], M.CHANGE, this.changed, this);
        }

        this.tileQueue_ = new Mn(function () {
          return 1;
        }, this.changed.bind(this));

        for (var n = function (t) {
          return t.map(function (t) {
            return t.getLayer().getLayerState();
          });
        }(this.renderers_), s = {}, a = 0, h = n.length; a < h; ++a) {
          s[o(n[a].layer)] = n[a];
        }

        this.requestedFrameState_, this.renderedImageCanvas_ = null, this.renderedRevision_, this.frameState_ = {
          animate: !1,
          coordinateToPixelTransform: [1, 0, 0, 1, 0, 0],
          extent: null,
          focus: null,
          index: 0,
          layerStates: s,
          layerStatesArray: n,
          pixelRatio: 1,
          pixelToCoordinateTransform: [1, 0, 0, 1, 0, 0],
          postRenderFunctions: [],
          size: [0, 0],
          skippedFeatureUids: {},
          tileQueue: this.tileQueue_,
          time: Date.now(),
          usedTiles: {},
          viewState: {
            rotation: 0
          },
          viewHints: [],
          wantedTiles: {}
        }, void 0 !== e.operation && this.setOperation(e.operation, e.lib);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setOperation = function (t, e) {
        this.worker_ = new Op.Processor({
          operation: t,
          imageOps: this.operationType_ === kp.IMAGE,
          queue: 1,
          lib: e,
          threads: this.threads_
        }), this.changed();
      }, e.prototype.updateFrameState_ = function (t, e, i) {
        var r = u({}, this.frameState_);
        r.viewState = u({}, r.viewState);
        var n = Tt(t);
        r.extent = t.slice(), r.focus = n, r.size[0] = Math.round(Ot(t) / e), r.size[1] = Math.round(Rt(t) / e), r.time = Date.now(), r.animate = !1;
        var o = r.viewState;
        return o.center = n, o.projection = i, o.resolution = e, r;
      }, e.prototype.allSourcesReady_ = function () {
        for (var t = !0, e = 0, i = this.renderers_.length; e < i; ++e) {
          if (this.renderers_[e].getLayer().getSource().getState() !== ro.READY) {
            t = !1;
            break;
          }
        }

        return t;
      }, e.prototype.getImage = function (t, e, i, r) {
        if (!this.allSourcesReady_()) return null;
        var n = this.updateFrameState_(t, e, r);

        if (this.requestedFrameState_ = n, this.renderedImageCanvas_) {
          var o = this.renderedImageCanvas_.getResolution(),
              s = this.renderedImageCanvas_.getExtent();
          e === o && dt(t, s) || (this.renderedImageCanvas_ = null);
        }

        return this.renderedImageCanvas_ && this.getRevision() === this.renderedRevision_ || this.processSources_(), n.tileQueue.loadMoreTiles(16, 16), n.animate && requestAnimationFrame(this.changed.bind(this)), this.renderedImageCanvas_;
      }, e.prototype.processSources_ = function () {
        for (var t = this.requestedFrameState_, e = this.renderers_.length, i = new Array(e), r = 0; r < e; ++r) {
          var n = Yp(this.renderers_[r], t, t.layerStatesArray[r]);
          if (!n) return;
          i[r] = n;
        }

        var o = {};
        this.dispatchEvent(new jp(Gp, t, o)), this.worker_.process(i, o, this.onWorkerComplete_.bind(this, t));
      }, e.prototype.onWorkerComplete_ = function (t, e, i, r) {
        if (!e && i) {
          var n = t.extent,
              o = t.viewState.resolution;

          if (o === this.requestedFrameState_.viewState.resolution && dt(n, this.requestedFrameState_.extent)) {
            var s;
            if (this.renderedImageCanvas_) s = this.renderedImageCanvas_.getImage().getContext("2d");else s = Jn(Math.round(Ot(n) / o), Math.round(Rt(n) / o)), this.renderedImageCanvas_ = new Es(n, o, 1, s.canvas);
            s.putImageData(i, 0, 0), this.changed(), this.renderedRevision_ = this.getRevision(), this.dispatchEvent(new jp(Dp, t, r));
          }
        }
      }, e.prototype.getImageInternal = function () {
        return null;
      }, e;
    }(dp),
        Xp = ['Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.', Ip],
        zp = {
      terrain: {
        extension: "jpg",
        opaque: !0
      },
      "terrain-background": {
        extension: "jpg",
        opaque: !0
      },
      "terrain-labels": {
        extension: "png",
        opaque: !1
      },
      "terrain-lines": {
        extension: "png",
        opaque: !1
      },
      "toner-background": {
        extension: "png",
        opaque: !0
      },
      toner: {
        extension: "png",
        opaque: !0
      },
      "toner-hybrid": {
        extension: "png",
        opaque: !1
      },
      "toner-labels": {
        extension: "png",
        opaque: !1
      },
      "toner-lines": {
        extension: "png",
        opaque: !1
      },
      "toner-lite": {
        extension: "png",
        opaque: !0
      },
      watercolor: {
        extension: "jpg",
        opaque: !0
      }
    },
        Wp = {
      terrain: {
        minZoom: 4,
        maxZoom: 18
      },
      toner: {
        minZoom: 0,
        maxZoom: 20
      },
      watercolor: {
        minZoom: 1,
        maxZoom: 16
      }
    },
        Kp = function (t) {
      function e(e) {
        var i = e.layer.indexOf("-"),
            r = -1 == i ? e.layer : e.layer.slice(0, i),
            n = Wp[r],
            o = zp[e.layer],
            s = void 0 !== e.url ? e.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + e.layer + "/{z}/{x}/{y}." + o.extension;
        t.call(this, {
          attributions: Xp,
          cacheSize: e.cacheSize,
          crossOrigin: "anonymous",
          maxZoom: void 0 != e.maxZoom ? e.maxZoom : n.maxZoom,
          minZoom: void 0 != e.minZoom ? e.minZoom : n.minZoom,
          opaque: o.opaque,
          reprojectionErrorThreshold: e.reprojectionErrorThreshold,
          tileLoadFunction: e.tileLoadFunction,
          url: s,
          wrapX: e.wrapX
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(ep);

    function Hp(t, e, i) {
      var r = this.getTileGrid();

      if (r || (r = this.getTileGridForProjection(i)), !(r.getResolutions().length <= t[0])) {
        var n = r.getTileCoordExtent(t, this.tmpExtent_),
            o = ho(r.getTileSize(t[0]), this.tmpSize);
        1 != e && (o = ao(o, e, this.tmpSize));
        var s = {
          F: "image",
          FORMAT: "PNG32",
          TRANSPARENT: !0
        };
        return u(s, this.params_), this.getRequestUrl_(t, o, n, e, i, s);
      }
    }

    var Zp = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          attributions: i.attributions,
          cacheSize: i.cacheSize,
          crossOrigin: i.crossOrigin,
          projection: i.projection,
          reprojectionErrorThreshold: i.reprojectionErrorThreshold,
          tileGrid: i.tileGrid,
          tileLoadFunction: i.tileLoadFunction,
          tileUrlFunction: Hp,
          url: i.url,
          urls: i.urls,
          wrapX: void 0 === i.wrapX || i.wrapX,
          transition: i.transition
        }), this.params_ = i.params || {}, this.tmpExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.setKey(this.getKeyForParams_());
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getKeyForParams_ = function () {
        var t = 0,
            e = [];

        for (var i in this.params_) {
          e[t++] = i + "-" + this.params_[i];
        }

        return e.join("/");
      }, e.prototype.getParams = function () {
        return this.params_;
      }, e.prototype.getRequestUrl_ = function (t, e, i, r, n, o) {
        var s = this.urls;

        if (s) {
          var a,
              h = n.getCode().split(":").pop();
          if (o.SIZE = e[0] + "," + e[1], o.BBOX = i.join(","), o.BBOXSR = h, o.IMAGESR = h, o.DPI = Math.round(o.DPI ? o.DPI * r : 90 * r), 1 == s.length) a = s[0];else a = s[Xt(Cl(t), s.length)];
          return _p(a.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"), o);
        }
      }, e.prototype.getTilePixelRatio = function (t) {
        return t;
      }, e.prototype.updateParams = function (t) {
        u(this.params_, t), this.setKey(this.getKeyForParams_());
      }, e;
    }($u),
        qp = function (t) {
      function e(e, i, r) {
        t.call(this, e, On.LOADED), this.tileSize_ = i, this.text_ = r, this.canvas_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getImage = function () {
        if (this.canvas_) return this.canvas_;
        var t = this.tileSize_,
            e = Jn(t[0], t[1]);
        return e.strokeStyle = "black", e.strokeRect(.5, .5, t[0] + .5, t[1] + .5), e.fillStyle = "black", e.textAlign = "center", e.textBaseline = "middle", e.font = "24px sans-serif", e.fillText(this.text_, t[0] / 2, t[1] / 2), this.canvas_ = e.canvas, e.canvas;
      }, e.prototype.load = function () {}, e;
    }(vl),
        Jp = function (t) {
      function e(e) {
        t.call(this, {
          opaque: !1,
          projection: e.projection,
          tileGrid: e.tileGrid,
          wrapX: void 0 === e.wrapX || e.wrapX
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getTile = function (t, e, i) {
        var r = Sl(t, e, i);
        if (this.tileCache.containsKey(r)) return this.tileCache.get(r);
        var n = ho(this.tileGrid.getTileSize(t)),
            o = [t, e, i],
            s = this.getTileCoordForTileUrlFunction(o),
            a = s ? this.getTileCoordForTileUrlFunction(s).toString() : "",
            h = new qp(o, n, a);
        return this.tileCache.set(r, h), h;
      }, e;
    }(jl),
        Qp = function (t) {
      function e(e) {
        if (t.call(this, {
          attributions: e.attributions,
          cacheSize: e.cacheSize,
          crossOrigin: e.crossOrigin,
          projection: Ee("EPSG:3857"),
          reprojectionErrorThreshold: e.reprojectionErrorThreshold,
          state: ro.LOADING,
          tileLoadFunction: e.tileLoadFunction,
          wrapX: void 0 === e.wrapX || e.wrapX,
          transition: e.transition
        }), this.tileJSON_ = null, e.url) {
          if (e.jsonp) Yu(e.url, this.handleTileJSONResponse.bind(this), this.handleTileJSONError.bind(this));else {
            var i = new XMLHttpRequest();
            i.addEventListener("load", this.onXHRLoad_.bind(this)), i.addEventListener("error", this.onXHRError_.bind(this)), i.open("GET", e.url), i.send();
          }
        } else e.tileJSON ? this.handleTileJSONResponse(e.tileJSON) : Y(!1, 51);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onXHRLoad_ = function (t) {
        var e = t.target;

        if (!e.status || e.status >= 200 && e.status < 300) {
          var i;

          try {
            i = JSON.parse(e.responseText);
          } catch (t) {
            return void this.handleTileJSONError();
          }

          this.handleTileJSONResponse(i);
        } else this.handleTileJSONError();
      }, e.prototype.onXHRError_ = function (t) {
        this.handleTileJSONError();
      }, e.prototype.getTileJSON = function () {
        return this.tileJSON_;
      }, e.prototype.handleTileJSONResponse = function (t) {
        var e,
            i = Ee("EPSG:4326"),
            r = this.getProjection();

        if (void 0 !== t.bounds) {
          var n = Le(i, r);
          e = Ft(t.bounds, n);
        }

        var o = t.minzoom || 0,
            s = t.maxzoom || 22,
            a = Fl({
          extent: Gl(r),
          maxZoom: s,
          minZoom: o
        });

        if (this.tileGrid = a, this.tileUrlFunction = Du(t.tiles, a), void 0 !== t.attribution && !this.getAttributions()) {
          var h = void 0 !== e ? e : i.getExtent();
          this.setAttributions(function (e) {
            return Pt(h, e.extent) ? [t.attribution] : null;
          });
        }

        this.tileJSON_ = t, this.setState(ro.READY);
      }, e.prototype.handleTileJSONError = function () {
        this.setState(ro.ERROR);
      }, e;
    }($u);

    function $p(t, e, i) {
      var r = this.getTileGrid();

      if (r || (r = this.getTileGridForProjection(i)), !(r.getResolutions().length <= t[0])) {
        1 == e || this.hidpi_ && void 0 !== this.serverType_ || (e = 1);
        var n = r.getResolution(t[0]),
            o = r.getTileCoordExtent(t, this.tmpExtent_),
            s = ho(r.getTileSize(t[0]), this.tmpSize),
            a = this.gutter_;
        0 !== a && (s = so(s, a, this.tmpSize), o = et(o, n * a, o)), 1 != e && (s = ao(s, e, this.tmpSize));
        var h = {
          SERVICE: "WMS",
          VERSION: xp,
          REQUEST: "GetMap",
          FORMAT: "image/png",
          TRANSPARENT: !0
        };
        return u(h, this.params_), this.getRequestUrl_(t, s, o, e, i, h);
      }
    }

    var tc = function (t) {
      function e(e) {
        var i = e || {},
            r = i.params || {},
            n = !("TRANSPARENT" in r) || r.TRANSPARENT;
        t.call(this, {
          attributions: i.attributions,
          cacheSize: i.cacheSize,
          crossOrigin: i.crossOrigin,
          opaque: !n,
          projection: i.projection,
          reprojectionErrorThreshold: i.reprojectionErrorThreshold,
          tileClass: i.tileClass,
          tileGrid: i.tileGrid,
          tileLoadFunction: i.tileLoadFunction,
          tileUrlFunction: $p,
          url: i.url,
          urls: i.urls,
          wrapX: void 0 === i.wrapX || i.wrapX,
          transition: i.transition
        }), this.gutter_ = void 0 !== i.gutter ? i.gutter : 0, this.params_ = r, this.v13_ = !0, this.serverType_ = i.serverType, this.hidpi_ = void 0 === i.hidpi || i.hidpi, this.tmpExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.updateV13_(), this.setKey(this.getKeyForParams_());
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getGetFeatureInfoUrl = function (t, e, i, r) {
        var n = Ee(i),
            o = this.getProjection(),
            s = this.getTileGrid();
        s || (s = this.getTileGridForProjection(n));
        var a = s.getTileCoordForCoordAndResolution(t, e);

        if (!(s.getResolutions().length <= a[0])) {
          var h = s.getResolution(a[0]),
              l = s.getTileCoordExtent(a, this.tmpExtent_),
              p = ho(s.getTileSize(a[0]), this.tmpSize),
              c = this.gutter_;
          0 !== c && (p = so(p, c, this.tmpSize), l = et(l, h * c, l)), o && o !== n && (h = Bu(o, n, t, h), l = be(l, n, o), t = Pe(t, n, o));
          var d = {
            SERVICE: "WMS",
            VERSION: xp,
            REQUEST: "GetFeatureInfo",
            FORMAT: "image/png",
            TRANSPARENT: !0,
            QUERY_LAYERS: this.params_.LAYERS
          };
          u(d, this.params_, r);

          var f = Math.floor((t[0] - l[0]) / h),
              _ = Math.floor((l[3] - t[1]) / h);

          return d[this.v13_ ? "I" : "X"] = f, d[this.v13_ ? "J" : "Y"] = _, this.getRequestUrl_(a, p, l, 1, o || n, d);
        }
      }, e.prototype.getGutter = function () {
        return this.gutter_;
      }, e.prototype.getParams = function () {
        return this.params_;
      }, e.prototype.getRequestUrl_ = function (t, e, i, r, n, o) {
        var s = this.urls;

        if (s) {
          if (o.WIDTH = e[0], o.HEIGHT = e[1], o[this.v13_ ? "CRS" : "SRS"] = n.getCode(), "STYLES" in this.params_ || (o.STYLES = ""), 1 != r) switch (this.serverType_) {
            case Sp:
              var a = 90 * r + .5 | 0;
              "FORMAT_OPTIONS" in o ? o.FORMAT_OPTIONS += ";dpi:" + a : o.FORMAT_OPTIONS = "dpi:" + a;
              break;

            case Tp:
              o.MAP_RESOLUTION = 90 * r;
              break;

            case Ep:
            case Cp:
              o.DPI = 90 * r;
              break;

            default:
              Y(!1, 52);
          }
          var h,
              l,
              u = n.getAxisOrientation(),
              p = i;
          if (this.v13_ && "ne" == u.substr(0, 2)) h = i[0], p[0] = i[1], p[1] = h, h = i[2], p[2] = i[3], p[3] = h;
          if (o.BBOX = p.join(","), 1 == s.length) l = s[0];else l = s[Xt(Cl(t), s.length)];
          return _p(l, o);
        }
      }, e.prototype.getTilePixelRatio = function (t) {
        return this.hidpi_ && void 0 !== this.serverType_ ? t : 1;
      }, e.prototype.getKeyForParams_ = function () {
        var t = 0,
            e = [];

        for (var i in this.params_) {
          e[t++] = i + "-" + this.params_[i];
        }

        return e.join("/");
      }, e.prototype.updateParams = function (t) {
        u(this.params_, t), this.updateV13_(), this.setKey(this.getKeyForParams_());
      }, e.prototype.updateV13_ = function () {
        var t = this.params_.VERSION || xp;
        this.v13_ = Ki(t, "1.3") >= 0;
      }, e;
    }($u),
        ec = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i), this.src_ = r, this.extent_ = n, this.preemptive_ = o, this.grid_ = null, this.keys_ = null, this.data_ = null, this.jsonp_ = s;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getImage = function () {
        return null;
      }, e.prototype.getData = function (t) {
        if (!this.grid_ || !this.keys_) return null;
        var e = (t[0] - this.extent_[0]) / (this.extent_[2] - this.extent_[0]),
            i = (t[1] - this.extent_[1]) / (this.extent_[3] - this.extent_[1]),
            r = this.grid_[Math.floor((1 - i) * this.grid_.length)];
        if ("string" != typeof r) return null;
        var n = r.charCodeAt(Math.floor(e * r.length));
        n >= 93 && n--, n >= 35 && n--;
        var o = null;

        if ((n -= 32) in this.keys_) {
          var s = this.keys_[n];
          o = this.data_ && s in this.data_ ? this.data_[s] : s;
        }

        return o;
      }, e.prototype.forDataAtCoordinate = function (t, e, i, r) {
        this.state == On.IDLE && !0 === r ? (m(this, M.CHANGE, function (r) {
          e.call(i, this.getData(t));
        }, this), this.loadInternal_()) : !0 === r ? setTimeout(function () {
          e.call(i, this.getData(t));
        }.bind(this), 0) : e.call(i, this.getData(t));
      }, e.prototype.getKey = function () {
        return this.src_;
      }, e.prototype.handleError_ = function () {
        this.state = On.ERROR, this.changed();
      }, e.prototype.handleLoad_ = function (t) {
        this.grid_ = t.grid, this.keys_ = t.keys, this.data_ = t.data, this.state = On.EMPTY, this.changed();
      }, e.prototype.loadInternal_ = function () {
        if (this.state == On.IDLE) if (this.state = On.LOADING, this.jsonp_) Yu(this.src_, this.handleLoad_.bind(this), this.handleError_.bind(this));else {
          var t = new XMLHttpRequest();
          t.addEventListener("load", this.onXHRLoad_.bind(this)), t.addEventListener("error", this.onXHRError_.bind(this)), t.open("GET", this.src_), t.send();
        }
      }, e.prototype.onXHRLoad_ = function (t) {
        var e = t.target;

        if (!e.status || e.status >= 200 && e.status < 300) {
          var i;

          try {
            i = JSON.parse(e.responseText);
          } catch (t) {
            return void this.handleError_();
          }

          this.handleLoad_(i);
        } else this.handleError_();
      }, e.prototype.onXHRError_ = function (t) {
        this.handleError_();
      }, e.prototype.load = function () {
        this.preemptive_ && this.loadInternal_();
      }, e;
    }(vl),
        ic = function (t) {
      function e(e) {
        if (t.call(this, {
          projection: Ee("EPSG:3857"),
          state: ro.LOADING
        }), this.preemptive_ = void 0 === e.preemptive || e.preemptive, this.tileUrlFunction_ = ju, this.template_ = void 0, this.jsonp_ = e.jsonp || !1, e.url) {
          if (this.jsonp_) Yu(e.url, this.handleTileJSONResponse.bind(this), this.handleTileJSONError.bind(this));else {
            var i = new XMLHttpRequest();
            i.addEventListener("load", this.onXHRLoad_.bind(this)), i.addEventListener("error", this.onXHRError_.bind(this)), i.open("GET", e.url), i.send();
          }
        } else e.tileJSON ? this.handleTileJSONResponse(e.tileJSON) : Y(!1, 51);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onXHRLoad_ = function (t) {
        var e = t.target;

        if (!e.status || e.status >= 200 && e.status < 300) {
          var i;

          try {
            i = JSON.parse(e.responseText);
          } catch (t) {
            return void this.handleTileJSONError();
          }

          this.handleTileJSONResponse(i);
        } else this.handleTileJSONError();
      }, e.prototype.onXHRError_ = function (t) {
        this.handleTileJSONError();
      }, e.prototype.getTemplate = function () {
        return this.template_;
      }, e.prototype.forDataAtCoordinateAndResolution = function (t, e, i, r) {
        if (this.tileGrid) {
          var n = this.tileGrid.getTileCoordForCoordAndResolution(t, e);
          this.getTile(n[0], n[1], n[2], 1, this.getProjection()).forDataAtCoordinate(t, i, null, r);
        } else !0 === r ? setTimeout(function () {
          i(null);
        }, 0) : i(null);
      }, e.prototype.handleTileJSONError = function () {
        this.setState(ro.ERROR);
      }, e.prototype.handleTileJSONResponse = function (t) {
        var e,
            i = Ee("EPSG:4326"),
            r = this.getProjection();

        if (void 0 !== t.bounds) {
          var n = Le(i, r);
          e = Ft(t.bounds, n);
        }

        var o = t.minzoom || 0,
            s = t.maxzoom || 22,
            a = Fl({
          extent: Gl(r),
          maxZoom: s,
          minZoom: o
        });
        this.tileGrid = a, this.template_ = t.template;
        var h = t.grids;

        if (h) {
          if (this.tileUrlFunction_ = Du(h, a), void 0 !== t.attribution) {
            var l = void 0 !== e ? e : i.getExtent();
            this.setAttributions(function (e) {
              return Pt(l, e.extent) ? [t.attribution] : null;
            });
          }

          this.setState(ro.READY);
        } else this.setState(ro.ERROR);
      }, e.prototype.getTile = function (t, e, i, r, n) {
        var o = Sl(t, e, i);
        if (this.tileCache.containsKey(o)) return this.tileCache.get(o);
        var s = [t, e, i],
            a = this.getTileCoordForTileUrlFunction(s, n),
            h = this.tileUrlFunction_(a, r, n),
            l = new ec(s, void 0 !== h ? On.IDLE : On.EMPTY, void 0 !== h ? h : "", this.tileGrid.getTileCoordExtent(s), this.preemptive_, this.jsonp_);
        return this.tileCache.set(o, l), l;
      }, e.prototype.useTile = function (t, e, i) {
        var r = Sl(t, e, i);
        this.tileCache.containsKey(r) && this.tileCache.get(r);
      }, e;
    }(jl),
        rc = function (t) {
      function e(i, r, n, o, s, a, h, l, u, p, c, d, f, _, g) {
        if (t.call(this, i, r, {
          transition: 0
        }), this.context_ = {}, this.loader_, this.replayState_ = {}, this.sourceTiles_ = p, this.tileKeys = [], this.extent = null, this.sourceRevision_ = n, this.wrappedTileCoord = a, this.loadListenerKeys_ = [], this.sourceTileListenerKeys_ = [], a) {
          var y = this.extent = u.getTileCoordExtent(a),
              m = u.getResolution(g),
              x = l.getZForResolution(m),
              E = g != i[0],
              S = 0;
          if (l.forEachTileCoord(y, x, function (t) {
            var e = wt(y, l.getTileCoordExtent(t)),
                i = l.getExtent();

            if (i && (e = wt(e, i, e)), Ot(e) / m >= .5 && Rt(e) / m >= .5) {
              ++S;
              var r = t.toString(),
                  n = p[r];

              if (!n && !E) {
                var a = h(t, c, d);
                n = p[r] = new f(t, void 0 == a ? On.EMPTY : On.IDLE, void 0 == a ? "" : a, o, s), this.sourceTileListenerKeys_.push(v(n, M.CHANGE, _));
              }

              !n || E && n.getState() != On.LOADED || (n.consumers++, this.tileKeys.push(r));
            }
          }.bind(this)), E && S == this.tileKeys.length && this.finishLoading_(), g <= i[0] && this.state != On.LOADED) for (; g > u.getMinZoom();) {
            var T = new e(i, r, n, o, s, a, h, l, u, p, c, d, f, I, --g);

            if (T.state == On.LOADED) {
              this.interimTile = T;
              break;
            }
          }
        }
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.state = On.ABORT, this.changed(), this.interimTile && this.interimTile.dispose();

        for (var e = 0, i = this.tileKeys.length; e < i; ++e) {
          var r = this.tileKeys[e],
              n = this.getTile(r);
          n.consumers--, 0 == n.consumers && (delete this.sourceTiles_[r], n.dispose());
        }

        this.tileKeys.length = 0, this.sourceTiles_ = null, this.loadListenerKeys_.forEach(E), this.loadListenerKeys_.length = 0, this.sourceTileListenerKeys_.forEach(E), this.sourceTileListenerKeys_.length = 0, t.prototype.disposeInternal.call(this);
      }, e.prototype.getContext = function (t) {
        var e = o(t);
        return e in this.context_ || (this.context_[e] = Jn()), this.context_[e];
      }, e.prototype.getImage = function (t) {
        return -1 == this.getReplayState(t).renderedTileRevision ? null : this.getContext(t).canvas;
      }, e.prototype.getReplayState = function (t) {
        var e = o(t);
        return e in this.replayState_ || (this.replayState_[e] = {
          dirty: !1,
          renderedRenderOrder: null,
          renderedRevision: -1,
          renderedTileRevision: -1
        }), this.replayState_[e];
      }, e.prototype.getKey = function () {
        return this.tileKeys.join("/") + "-" + this.sourceRevision_;
      }, e.prototype.getTile = function (t) {
        return this.sourceTiles_[t];
      }, e.prototype.load = function () {
        var t = 0,
            e = {};
        this.state == On.IDLE && this.setState(On.LOADING), this.state == On.LOADING && this.tileKeys.forEach(function (i) {
          var r = this.getTile(i);

          if (r.state == On.IDLE && (r.setLoader(this.loader_), r.load()), r.state == On.LOADING) {
            var n = v(r, M.CHANGE, function (i) {
              var n = r.getState();

              if (n == On.LOADED || n == On.ERROR) {
                var s = o(r);
                n == On.ERROR ? e[s] = !0 : (--t, delete e[s]), t - Object.keys(e).length == 0 && this.finishLoading_();
              }
            }.bind(this));
            this.loadListenerKeys_.push(n), ++t;
          }
        }.bind(this)), t - Object.keys(e).length == 0 && setTimeout(this.finishLoading_.bind(this), 0);
      }, e.prototype.finishLoading_ = function () {
        for (var t = this.tileKeys.length, e = 0, i = t - 1; i >= 0; --i) {
          var r = this.getTile(this.tileKeys[i]).getState();
          r != On.LOADED && --t, r == On.EMPTY && ++e;
        }

        t == this.tileKeys.length ? (this.loadListenerKeys_.forEach(E), this.loadListenerKeys_.length = 0, this.setState(On.LOADED)) : this.setState(e == this.tileKeys.length ? On.EMPTY : On.ERROR);
      }, e;
    }(vl);

    function nc(t, e) {
      var i = Zl(e, t.getFormat(), t.onLoad.bind(t), t.onError.bind(t));
      t.setLoader(i);
    }

    var oc = [0, 0, 4096, 4096],
        sc = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, e, i, s), this.consumers = 0, this.extent_ = null, this.format_ = n, this.features_ = null, this.loader_, this.projection_ = null, this.replayGroups_ = {}, this.tileLoadFunction_ = o, this.url_ = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.features_ = null, this.replayGroups_ = {}, this.state = On.ABORT, this.changed(), t.prototype.disposeInternal.call(this);
      }, e.prototype.getExtent = function () {
        return this.extent_ || oc;
      }, e.prototype.getFormat = function () {
        return this.format_;
      }, e.prototype.getFeatures = function () {
        return this.features_;
      }, e.prototype.getKey = function () {
        return this.url_;
      }, e.prototype.getProjection = function () {
        return this.projection_;
      }, e.prototype.getReplayGroup = function (t, e) {
        return this.replayGroups_[o(t) + "," + e];
      }, e.prototype.load = function () {
        this.state == On.IDLE && (this.setState(On.LOADING), this.tileLoadFunction_(this, this.url_), this.loader_(null, NaN, null));
      }, e.prototype.onLoad = function (t, e, i) {
        this.setProjection(e), this.setFeatures(t), this.setExtent(i);
      }, e.prototype.onError = function () {
        this.setState(On.ERROR);
      }, e.prototype.setExtent = function (t) {
        this.extent_ = t;
      }, e.prototype.setFeatures = function (t) {
        this.features_ = t, this.setState(On.LOADED);
      }, e.prototype.setProjection = function (t) {
        this.projection_ = t;
      }, e.prototype.setReplayGroup = function (t, e, i) {
        this.replayGroups_[o(t) + "," + e] = i;
      }, e.prototype.setLoader = function (t) {
        this.loader_ = t;
      }, e;
    }(vl),
        ac = function (t) {
      function e(e) {
        var i = e.projection || "EPSG:3857",
            r = e.extent || Gl(i),
            n = e.tileGrid || Fl({
          extent: r,
          maxZoom: e.maxZoom || 22,
          minZoom: e.minZoom,
          tileSize: e.tileSize || 512
        });
        t.call(this, {
          attributions: e.attributions,
          cacheSize: void 0 !== e.cacheSize ? e.cacheSize : 128,
          opaque: !1,
          projection: i,
          state: e.state,
          tileGrid: n,
          tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : nc,
          tileUrlFunction: e.tileUrlFunction,
          url: e.url,
          urls: e.urls,
          wrapX: void 0 === e.wrapX || e.wrapX,
          transition: e.transition
        }), this.format_ = e.format ? e.format : null, this.sourceTiles_ = {}, this.overlaps_ = void 0 == e.overlaps || e.overlaps, this.tileClass = e.tileClass ? e.tileClass : sc, this.tileGrids_ = {};
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getOverlaps = function () {
        return this.overlaps_;
      }, e.prototype.clear = function () {
        this.tileCache.clear(), this.sourceTiles_ = {};
      }, e.prototype.getTile = function (t, e, i, r, n) {
        var o = Sl(t, e, i);
        if (this.tileCache.containsKey(o)) return this.tileCache.get(o);
        var s = [t, e, i],
            a = this.getTileCoordForTileUrlFunction(s, n),
            h = new rc(s, null !== a ? On.IDLE : On.EMPTY, this.getRevision(), this.format_, this.tileLoadFunction, a, this.tileUrlFunction, this.tileGrid, this.getTileGridForProjection(n), this.sourceTiles_, r, n, this.tileClass, this.handleTileChange.bind(this), s[0]);
        return this.tileCache.set(o, h), h;
      }, e.prototype.getTileGridForProjection = function (t) {
        var e = t.getCode(),
            i = this.tileGrids_[e];

        if (!i) {
          var r = this.tileGrid;
          i = this.tileGrids_[e] = Nl(t, void 0, r ? r.getTileSize(r.getMinZoom()) : void 0);
        }

        return i;
      }, e.prototype.getTilePixelRatio = function (t) {
        return t;
      }, e.prototype.getTilePixelSize = function (t, e, i) {
        var r = ho(this.getTileGridForProjection(i).getTileSize(t), this.tmpSize);
        return [Math.round(r[0] * e), Math.round(r[1] * e)];
      }, e;
    }(Ju),
        hc = {
      KVP: "KVP",
      REST: "REST"
    },
        lc = function (t) {
      function e(e) {
        var i = void 0 !== e.requestEncoding ? e.requestEncoding : hc.KVP,
            r = e.tileGrid,
            n = e.urls;
        void 0 === n && void 0 !== e.url && (n = Uu(e.url)), t.call(this, {
          attributions: e.attributions,
          cacheSize: e.cacheSize,
          crossOrigin: e.crossOrigin,
          projection: e.projection,
          reprojectionErrorThreshold: e.reprojectionErrorThreshold,
          tileClass: e.tileClass,
          tileGrid: r,
          tileLoadFunction: e.tileLoadFunction,
          tilePixelRatio: e.tilePixelRatio,
          tileUrlFunction: ju,
          urls: n,
          wrapX: void 0 !== e.wrapX && e.wrapX,
          transition: e.transition
        }), this.version_ = void 0 !== e.version ? e.version : "1.0.0", this.format_ = void 0 !== e.format ? e.format : "image/jpeg", this.dimensions_ = void 0 !== e.dimensions ? e.dimensions : {}, this.layer_ = e.layer, this.matrixSet_ = e.matrixSet, this.style_ = e.style, this.requestEncoding_ = i, this.setKey(this.getKeyForDimensions_()), n && n.length > 0 && (this.tileUrlFunction = ku(n.map(uc.bind(this))));
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setUrls = function (t) {
        this.urls = t;
        var e = t.join("\n");
        this.setTileUrlFunction(ku(t.map(uc.bind(this))), e);
      }, e.prototype.getDimensions = function () {
        return this.dimensions_;
      }, e.prototype.getFormat = function () {
        return this.format_;
      }, e.prototype.getLayer = function () {
        return this.layer_;
      }, e.prototype.getMatrixSet = function () {
        return this.matrixSet_;
      }, e.prototype.getRequestEncoding = function () {
        return this.requestEncoding_;
      }, e.prototype.getStyle = function () {
        return this.style_;
      }, e.prototype.getVersion = function () {
        return this.version_;
      }, e.prototype.getKeyForDimensions_ = function () {
        var t = 0,
            e = [];

        for (var i in this.dimensions_) {
          e[t++] = i + "-" + this.dimensions_[i];
        }

        return e.join("/");
      }, e.prototype.updateDimensions = function (t) {
        u(this.dimensions_, t), this.setKey(this.getKeyForDimensions_());
      }, e;
    }($u);

    function uc(t) {
      var e = this.requestEncoding_,
          i = {
        layer: this.layer_,
        style: this.style_,
        tilematrixset: this.matrixSet_
      };
      e == hc.KVP && u(i, {
        Service: "WMTS",
        Request: "GetTile",
        Version: this.version_,
        Format: this.format_
      }), t = e == hc.KVP ? _p(t, i) : t.replace(/\{(\w+?)\}/g, function (t, e) {
        return e.toLowerCase() in i ? i[e.toLowerCase()] : t;
      });
      var r = this.tileGrid,
          n = this.dimensions_;
      return function (i, o, s) {
        if (i) {
          var a = {
            TileMatrix: r.getMatrixId(i[0]),
            TileCol: i[1],
            TileRow: -i[2] - 1
          };
          u(a, n);
          var h = t;
          return h = e == hc.KVP ? _p(h, a) : h.replace(/\{(\w+?)\}/g, function (t, e) {
            return a[e];
          });
        }
      };
    }

    var pc = {
      DEFAULT: "default",
      TRUNCATED: "truncated"
    },
        cc = function (t) {
      function e(e, i, r, n, o, s, a) {
        t.call(this, i, r, n, o, s, a), this.zoomifyImage_ = null, this.tileSize_ = ho(e.getTileSize(i[0]));
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getImage = function () {
        if (this.zoomifyImage_) return this.zoomifyImage_;
        var e = t.prototype.getImage.call(this);

        if (this.state == On.LOADED) {
          var i = this.tileSize_;
          if (e.width == i[0] && e.height == i[1]) return this.zoomifyImage_ = e, e;
          var r = Jn(i[0], i[1]);
          return r.drawImage(e, 0, 0), this.zoomifyImage_ = r.canvas, r.canvas;
        }

        return e;
      }, e;
    }(xl),
        dc = function (t) {
      function e(e) {
        var i = e || {},
            r = i.size,
            n = void 0 !== i.tierSizeCalculation ? i.tierSizeCalculation : pc.DEFAULT,
            o = r[0],
            s = r[1],
            a = i.extent || [0, -r[1], r[0], 0],
            h = [],
            l = i.tileSize || An,
            u = l;

        switch (n) {
          case pc.DEFAULT:
            for (; o > u || s > u;) {
              h.push([Math.ceil(o / u), Math.ceil(s / u)]), u += u;
            }

            break;

          case pc.TRUNCATED:
            for (var p = o, c = s; p > u || c > u;) {
              h.push([Math.ceil(p / u), Math.ceil(c / u)]), p >>= 1, c >>= 1;
            }

            break;

          default:
            Y(!1, 53);
        }

        h.push([1, 1]), h.reverse();

        for (var d = [1], f = [0], _ = 1, g = h.length; _ < g; _++) {
          d.push(1 << _), f.push(h[_ - 1][0] * h[_ - 1][1] + f[_ - 1]);
        }

        d.reverse();
        var y = new Pl({
          tileSize: l,
          extent: a,
          origin: It(a),
          resolutions: d
        }),
            v = i.url;
        v && -1 == v.indexOf("{TileGroup}") && -1 == v.indexOf("{tileIndex}") && (v += "{TileGroup}/{z}-{x}-{y}.jpg");
        var m = ku(Uu(v).map(function (t) {
          return function (e, i, r) {
            if (e) {
              var n = e[0],
                  o = e[1],
                  s = -e[2] - 1,
                  a = o + s * h[n][0],
                  l = y.getTileSize(n),
                  u = Array.isArray(l) ? l[0] : l,
                  p = {
                z: n,
                x: o,
                y: s,
                tileIndex: a,
                TileGroup: "TileGroup" + ((a + f[n]) / u | 0)
              };
              return t.replace(/\{(\w+?)\}/g, function (t, e) {
                return p[e];
              });
            }
          };
        })),
            x = cc.bind(null, y);
        t.call(this, {
          attributions: i.attributions,
          cacheSize: i.cacheSize,
          crossOrigin: i.crossOrigin,
          projection: i.projection,
          reprojectionErrorThreshold: i.reprojectionErrorThreshold,
          tileClass: x,
          tileGrid: y,
          tileUrlFunction: m,
          transition: i.transition
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }($u);

    var fc = "renderOrder",
        _c = function (t) {
      function e(e) {
        var i = e || {},
            r = u({}, i);
        delete r.style, delete r.renderBuffer, delete r.updateWhileAnimating, delete r.updateWhileInteracting, t.call(this, r), this.declutter_ = void 0 !== i.declutter && i.declutter, this.renderBuffer_ = void 0 !== i.renderBuffer ? i.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(i.style), this.updateWhileAnimating_ = void 0 !== i.updateWhileAnimating && i.updateWhileAnimating, this.updateWhileInteracting_ = void 0 !== i.updateWhileInteracting && i.updateWhileInteracting, this.renderMode_ = i.renderMode || Ts.VECTOR, this.type = Ss.VECTOR;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getDeclutter = function () {
        return this.declutter_;
      }, e.prototype.setDeclutter = function (t) {
        this.declutter_ = t;
      }, e.prototype.getRenderBuffer = function () {
        return this.renderBuffer_;
      }, e.prototype.getRenderOrder = function () {
        return this.get(fc);
      }, e.prototype.getStyle = function () {
        return this.style_;
      }, e.prototype.getStyleFunction = function () {
        return this.styleFunction_;
      }, e.prototype.getUpdateWhileAnimating = function () {
        return this.updateWhileAnimating_;
      }, e.prototype.getUpdateWhileInteracting = function () {
        return this.updateWhileInteracting_;
      }, e.prototype.setRenderOrder = function (t) {
        this.set(fc, t);
      }, e.prototype.setStyle = function (t) {
        this.style_ = void 0 !== t ? t : Mu, this.styleFunction_ = null === t ? void 0 : function (t) {
          var e;
          if ("function" == typeof t) e = t;else {
            var i;
            Array.isArray(t) ? i = t : (Y("function" == typeof t.getZIndex, 41), i = [t]), e = function e() {
              return i;
            };
          }
          return e;
        }(this.style_), this.changed();
      }, e.prototype.getRenderMode = function () {
        return this.renderMode_;
      }, e;
    }(xo);

    _c.prototype.getSource;
    var gc = _c,
        yc = {
      BLUR: "blur",
      GRADIENT: "gradient",
      RADIUS: "radius"
    },
        vc = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];

    var mc = function (t) {
      function e(e) {
        var i = e || {},
            r = u({}, i);
        delete r.gradient, delete r.radius, delete r.blur, delete r.shadow, delete r.weight, t.call(this, r), this.gradient_ = null, this.shadow_ = void 0 !== i.shadow ? i.shadow : 250, this.circleImage_ = void 0, this.styleCache_ = null, v(this, G(yc.GRADIENT), this.handleGradientChanged_, this), this.setGradient(i.gradient ? i.gradient : vc), this.setBlur(void 0 !== i.blur ? i.blur : 15), this.setRadius(void 0 !== i.radius ? i.radius : 8), v(this, G(yc.BLUR), this.handleStyleChanged_, this), v(this, G(yc.RADIUS), this.handleStyleChanged_, this), this.handleStyleChanged_();
        var n,
            o = i.weight ? i.weight : "weight";
        n = "string" == typeof o ? function (t) {
          return t.get(o);
        } : o, this.setStyle(function (t, e) {
          var i = n(t),
              r = void 0 !== i ? kt(i, 0, 1) : 1,
              o = 255 * r | 0,
              s = this.styleCache_[o];
          return s || (s = [new Nu({
            image: new Ou({
              opacity: r,
              src: this.circleImage_
            })
          })], this.styleCache_[o] = s), s;
        }.bind(this)), this.setRenderOrder(null), v(this, ur.RENDER, this.handleRender_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createCircle_ = function () {
        var t = this.getRadius(),
            e = this.getBlur(),
            i = t + e + 1,
            r = 2 * i,
            n = Jn(r, r);
        n.shadowOffsetX = n.shadowOffsetY = this.shadow_, n.shadowBlur = e, n.shadowColor = "#000", n.beginPath();
        var o = i - this.shadow_;
        return n.arc(o, o, t, 0, 2 * Math.PI, !0), n.fill(), n.canvas.toDataURL();
      }, e.prototype.getBlur = function () {
        return this.get(yc.BLUR);
      }, e.prototype.getGradient = function () {
        return this.get(yc.GRADIENT);
      }, e.prototype.getRadius = function () {
        return this.get(yc.RADIUS);
      }, e.prototype.handleGradientChanged_ = function () {
        this.gradient_ = function (t) {
          for (var e = Jn(1, 256), i = e.createLinearGradient(0, 0, 1, 256), r = 1 / (t.length - 1), n = 0, o = t.length; n < o; ++n) {
            i.addColorStop(n * r, t[n]);
          }

          return e.fillStyle = i, e.fillRect(0, 0, 1, 256), e.getImageData(0, 0, 1, 256).data;
        }(this.getGradient());
      }, e.prototype.handleStyleChanged_ = function () {
        this.circleImage_ = this.createCircle_(), this.styleCache_ = new Array(256), this.changed();
      }, e.prototype.handleRender_ = function (t) {
        for (var e = t.context, i = e.canvas, r = e.getImageData(0, 0, i.width, i.height), n = r.data, o = 0, s = n.length; o < s; o += 4) {
          var a = 4 * n[o + 3];
          a && (n[o] = this.gradient_[a], n[o + 1] = this.gradient_[a + 1], n[o + 2] = this.gradient_[a + 2]);
        }

        e.putImageData(r, 0, 0);
      }, e.prototype.setBlur = function (t) {
        this.set(yc.BLUR, t);
      }, e.prototype.setGradient = function (t) {
        this.set(yc.GRADIENT, t);
      }, e.prototype.setRadius = function (t) {
        this.set(yc.RADIUS, t);
      }, e;
    }(gc),
        xc = function (t) {
      function e(e) {
        var i = e || {},
            r = i.renderMode || Va.HYBRID;
        Y(void 0 == r || r == Va.IMAGE || r == Va.HYBRID || r == Va.VECTOR, 28), i.declutter && r == Va.IMAGE && (r = Va.HYBRID), i.renderMode = r;
        var n = u({}, i);
        delete n.preload, delete n.useInterimTilesOnError, t.call(this, n), this.setPreload(i.preload ? i.preload : 0), this.setUseInterimTilesOnError(void 0 === i.useInterimTilesOnError || i.useInterimTilesOnError), this.type = Ss.VECTOR_TILE;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getPreload = function () {
        return this.get(Mp);
      }, e.prototype.getUseInterimTilesOnError = function () {
        return this.get(Fp);
      }, e.prototype.setPreload = function (t) {
        this.set(Mp, t);
      }, e.prototype.setUseInterimTilesOnError = function (t) {
        this.set(Fp, t);
      }, e;
    }(gc);

    xc.prototype.getSource;

    var Ec = xc,
        Sc = "addfeatures",
        Tc = function (t) {
      function e(e, i, r, n) {
        t.call(this, e), this.features = r, this.file = i, this.projection = n;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    function Cc(t) {
      for (var e = t.dataTransfer.files, i = 0, r = e.length; i < r; ++i) {
        var n = e.item(i),
            o = new FileReader();
        o.addEventListener(M.LOAD, this.handleResult_.bind(this, n)), o.readAsText(n);
      }
    }

    function Rc(t) {
      t.stopPropagation(), t.preventDefault(), t.dataTransfer.dropEffect = "copy";
    }

    var wc = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          handleEvent: R
        }), this.formatConstructors_ = i.formatConstructors ? i.formatConstructors : [], this.projection_ = i.projection ? Ee(i.projection) : null, this.dropListenKeys_ = null, this.source_ = i.source || null, this.target = i.target ? i.target : null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleResult_ = function (t, e) {
        var i = e.target.result,
            r = this.getMap(),
            n = this.projection_;
        n || (n = r.getView().getProjection());

        for (var o = this.formatConstructors_, s = [], a = 0, h = o.length; a < h; ++a) {
          var l = new o[a]();
          if ((s = this.tryReadFeatures_(l, i, {
            featureProjection: n
          })) && s.length > 0) break;
        }

        this.source_ && (this.source_.clear(), this.source_.addFeatures(s)), this.dispatchEvent(new Tc(Sc, t, s, n));
      }, e.prototype.registerListeners_ = function () {
        var t = this.getMap();

        if (t) {
          var e = this.target ? this.target : t.getViewport();
          this.dropListenKeys_ = [v(e, M.DROP, Cc, this), v(e, M.DRAGENTER, Rc, this), v(e, M.DRAGOVER, Rc, this), v(e, M.DROP, Rc, this)];
        }
      }, e.prototype.setActive = function (e) {
        t.prototype.setActive.call(this, e), e ? this.registerListeners_() : this.unregisterListeners_();
      }, e.prototype.setMap = function (e) {
        this.unregisterListeners_(), t.prototype.setMap.call(this, e), this.getActive() && this.registerListeners_();
      }, e.prototype.tryReadFeatures_ = function (t, e, i) {
        try {
          return t.readFeatures(e, i);
        } catch (t) {
          return null;
        }
      }, e.prototype.unregisterListeners_ = function () {
        this.dropListenKeys_ && (this.dropListenKeys_.forEach(E), this.dropListenKeys_ = null);
      }, e;
    }(Fo),
        Ic = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.condition_ = i.condition ? i.condition : zo, this.lastAngle_ = void 0, this.lastMagnitude_ = void 0, this.lastScaleDelta_ = 0, this.duration_ = void 0 !== i.duration ? i.duration : 400;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDragEvent = function (t) {
        if (Ko(t)) {
          var e = t.map,
              i = e.getSize(),
              r = t.pixel,
              n = r[0] - i[0] / 2,
              o = i[1] / 2 - r[1],
              s = Math.atan2(o, n),
              a = Math.sqrt(n * n + o * o),
              h = e.getView();

          if (h.getConstraints().rotation !== Gn && void 0 !== this.lastAngle_) {
            var l = s - this.lastAngle_;
            Oo(h, h.getRotation() - l);
          }

          if (this.lastAngle_ = s, void 0 !== this.lastMagnitude_) Mo(h, this.lastMagnitude_ * (h.getResolution() / a));
          void 0 !== this.lastMagnitude_ && (this.lastScaleDelta_ = this.lastMagnitude_ / a), this.lastMagnitude_ = a;
        }
      }, e.prototype.handleUpEvent = function (t) {
        if (!Ko(t)) return !0;
        var e = t.map.getView();
        e.setHint(jn, -1);
        var i = this.lastScaleDelta_ - 1;
        return Lo(e, e.getRotation()), Po(e, e.getResolution(), void 0, this.duration_, i), this.lastScaleDelta_ = 0, !1;
      }, e.prototype.handleDownEvent = function (t) {
        return !!Ko(t) && !!this.condition_(t) && (t.map.getView().setHint(jn, 1), this.lastAngle_ = void 0, this.lastMagnitude_ = void 0, !0);
      }, e;
    }(qo),
        Lc = function (t) {
      function e(e, i, r) {
        if (t.call(this), void 0 !== r && void 0 === i) this.setFlatCoordinates(r, e);else {
          var n = i || 0;
          this.setCenterAndRadius(e, n, r);
        }
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), void 0, this.layout);
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        var n = this.flatCoordinates,
            o = t - n[0],
            s = e - n[1],
            a = o * o + s * s;

        if (a < r) {
          if (0 === a) for (var h = 0; h < this.stride; ++h) {
            i[h] = n[h];
          } else {
            var l = this.getRadius() / Math.sqrt(a);
            i[0] = n[0] + l * o, i[1] = n[1] + l * s;

            for (var u = 2; u < this.stride; ++u) {
              i[u] = n[u];
            }
          }
          return i.length = this.stride, a;
        }

        return r;
      }, e.prototype.containsXY = function (t, e) {
        var i = this.flatCoordinates,
            r = t - i[0],
            n = e - i[1];
        return r * r + n * n <= this.getRadiusSquared_();
      }, e.prototype.getCenter = function () {
        return this.flatCoordinates.slice(0, this.stride);
      }, e.prototype.computeExtent = function (t) {
        var e = this.flatCoordinates,
            i = e[this.stride] - e[0];
        return lt(e[0] - i, e[1] - i, e[0] + i, e[1] + i, t);
      }, e.prototype.getRadius = function () {
        return Math.sqrt(this.getRadiusSquared_());
      }, e.prototype.getRadiusSquared_ = function () {
        var t = this.flatCoordinates[this.stride] - this.flatCoordinates[0],
            e = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1];
        return t * t + e * e;
      }, e.prototype.getType = function () {
        return Nt.CIRCLE;
      }, e.prototype.intersectsExtent = function (t) {
        if (Pt(t, this.getExtent())) {
          var e = this.getCenter();
          return t[0] <= e[0] && t[2] >= e[0] || t[1] <= e[1] && t[3] >= e[1] || mt(t, this.intersectsCoordinate, this);
        }

        return !1;
      }, e.prototype.setCenter = function (t) {
        var e = this.stride,
            i = this.flatCoordinates[e] - this.flatCoordinates[0],
            r = t.slice();
        r[e] = r[0] + i;

        for (var n = 1; n < e; ++n) {
          r[e + n] = t[n];
        }

        this.setFlatCoordinates(this.layout, r), this.changed();
      }, e.prototype.setCenterAndRadius = function (t, e, i) {
        this.setLayout(i, t, 0), this.flatCoordinates || (this.flatCoordinates = []);
        var r = this.flatCoordinates,
            n = ti(r, 0, t, this.stride);
        r[n++] = r[0] + e;

        for (var o = 1, s = this.stride; o < s; ++o) {
          r[n++] = r[o];
        }

        r.length = n, this.changed();
      }, e.prototype.getCoordinates = function () {
        return null;
      }, e.prototype.setCoordinates = function (t, e) {}, e.prototype.setRadius = function (t) {
        this.flatCoordinates[this.stride] = this.flatCoordinates[0] + t, this.changed();
      }, e;
    }(We);

    Lc.prototype.transform;

    var Oc = Lc,
        Pc = function (t) {
      function e(e, i, r) {
        if (t.call(this), this.ends_ = [], this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, Array.isArray(e[0])) this.setCoordinates(e, i);else if (void 0 !== i && r) this.setFlatCoordinates(i, e), this.ends_ = r;else {
          for (var n = this.getLayout(), o = e, s = [], a = [], h = 0, l = o.length; h < l; ++h) {
            var u = o[h];
            0 === h && (n = u.getLayout()), K(s, u.getFlatCoordinates()), a.push(s.length);
          }

          this.setFlatCoordinates(n, s), this.ends_ = a;
        }
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.appendLineString = function (t) {
        this.flatCoordinates ? K(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
      }, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        return r < rt(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(Je(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), $e(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, i, r));
      }, e.prototype.getCoordinateAtM = function (t, e, i) {
        if (this.layout != At.XYM && this.layout != At.XYZM || 0 === this.flatCoordinates.length) return null;
        var r = void 0 !== e && e,
            n = void 0 !== i && i;
        return function (t, e, i, r, n, o, s) {
          if (s) return sr(t, e, i[i.length - 1], r, n, o);
          var a;
          if (n < t[r - 1]) return o ? ((a = t.slice(0, r))[r - 1] = n, a) : null;
          if (t[t.length - 1] < n) return o ? ((a = t.slice(t.length - r))[r - 1] = n, a) : null;

          for (var h = 0, l = i.length; h < l; ++h) {
            var u = i[h];

            if (e != u) {
              if (n < t[e + r - 1]) return null;
              if (n <= t[u - 1]) return sr(t, e, u, r, n, !1);
              e = u;
            }
          }

          return null;
        }(this.flatCoordinates, 0, this.ends_, this.stride, t, r, n);
      }, e.prototype.getCoordinates = function () {
        return ni(this.flatCoordinates, 0, this.ends_, this.stride);
      }, e.prototype.getEnds = function () {
        return this.ends_;
      }, e.prototype.getLineString = function (t) {
        return t < 0 || this.ends_.length <= t ? null : new hr(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout);
      }, e.prototype.getLineStrings = function () {
        for (var t = this.flatCoordinates, e = this.ends_, i = this.layout, r = [], n = 0, o = 0, s = e.length; o < s; ++o) {
          var a = e[o],
              h = new hr(t.slice(n, a), i);
          r.push(h), n = a;
        }

        return r;
      }, e.prototype.getFlatMidpoints = function () {
        for (var t = [], e = this.flatCoordinates, i = 0, r = this.ends_, n = this.stride, o = 0, s = r.length; o < s; ++o) {
          var a = r[o];
          K(t, or(e, i, a, n, .5)), i = a;
        }

        return t;
      }, e.prototype.getSimplifiedGeometryInternal = function (t) {
        var i = [],
            r = [];
        return i.length = ai(this.flatCoordinates, 0, this.ends_, this.stride, t, i, 0, r), new e(i, At.XY, r);
      }, e.prototype.getType = function () {
        return Nt.MULTI_LINE_STRING;
      }, e.prototype.intersectsExtent = function (t) {
        return function (t, e, i, r, n) {
          for (var o = 0, s = i.length; o < s; ++o) {
            if (mi(t, e, i[o], r, n)) return !0;
            e = i[o];
          }

          return !1;
        }(this.flatCoordinates, 0, this.ends_, this.stride, t);
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
        var i = ii(this.flatCoordinates, 0, t, this.stride, this.ends_);
        this.flatCoordinates.length = 0 === i.length ? 0 : i[i.length - 1], this.changed();
      }, e;
    }(We),
        bc = function (t) {
      function e(e, i) {
        t.call(this), i && !Array.isArray(e[0]) ? this.setFlatCoordinates(i, e) : this.setCoordinates(e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.appendPoint = function (t) {
        this.flatCoordinates ? K(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed();
      }, e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout);
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        if (r < rt(this.getExtent(), t, e)) return r;

        for (var n = this.flatCoordinates, o = this.stride, s = 0, a = n.length; s < a; s += o) {
          var h = Yt(t, e, n[s], n[s + 1]);

          if (h < r) {
            r = h;

            for (var l = 0; l < o; ++l) {
              i[l] = n[s + l];
            }

            i.length = o;
          }
        }

        return r;
      }, e.prototype.getCoordinates = function () {
        return ri(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
      }, e.prototype.getPoint = function (t) {
        var e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0;
        return t < 0 || e <= t ? null : new ci(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout);
      }, e.prototype.getPoints = function () {
        for (var t = this.flatCoordinates, e = this.layout, i = this.stride, r = [], n = 0, o = t.length; n < o; n += i) {
          var s = new ci(t.slice(n, n + i), e);
          r.push(s);
        }

        return r;
      }, e.prototype.getType = function () {
        return Nt.MULTI_POINT;
      }, e.prototype.intersectsExtent = function (t) {
        for (var e = this.flatCoordinates, i = this.stride, r = 0, n = e.length; r < n; r += i) {
          if (st(t, e[r], e[r + 1])) return !0;
        }

        return !1;
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ei(this.flatCoordinates, 0, t, this.stride), this.changed();
      }, e;
    }(We);

    function Mc(t, e, i, r) {
      for (var n = [], o = [1 / 0, 1 / 0, -1 / 0, -1 / 0], s = 0, a = i.length; s < a; ++s) {
        var h = i[s];
        o = ct(t, e, h[0], r), n.push((o[0] + o[2]) / 2, (o[1] + o[3]) / 2), e = h[h.length - 1];
      }

      return n;
    }

    var Fc = function (t) {
      function e(e, i, r) {
        if (t.call(this), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !r && !Array.isArray(e[0])) {
          for (var n = this.getLayout(), o = e, s = [], a = [], h = 0, l = o.length; h < l; ++h) {
            var u = o[h];
            0 === h && (n = u.getLayout());

            for (var p = s.length, c = u.getEnds(), d = 0, f = c.length; d < f; ++d) {
              c[d] += p;
            }

            K(s, u.getFlatCoordinates()), a.push(c);
          }

          i = n, e = s, r = a;
        }

        void 0 !== i && r ? (this.setFlatCoordinates(i, e), this.endss_ = r) : this.setCoordinates(e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.appendPolygon = function (t) {
        var e;

        if (this.flatCoordinates) {
          var i = this.flatCoordinates.length;
          K(this.flatCoordinates, t.getFlatCoordinates());

          for (var r = 0, n = (e = t.getEnds().slice()).length; r < n; ++r) {
            e[r] += i;
          }
        } else this.flatCoordinates = t.getFlatCoordinates().slice(), e = t.getEnds().slice(), this.endss_.push();

        this.endss_.push(e), this.changed();
      }, e.prototype.clone = function () {
        for (var t = this.endss_.length, i = new Array(t), r = 0; r < t; ++r) {
          i[r] = this.endss_[r].slice();
        }

        return new e(this.flatCoordinates.slice(), this.layout, i);
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        return r < rt(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(function (t, e, i, r, n) {
          for (var o = 0, s = i.length; o < s; ++o) {
            var a = i[o];
            n = Je(t, e, a, r, n), e = a[a.length - 1];
          }

          return n;
        }(this.flatCoordinates, 0, this.endss_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), function (t, e, i, r, n, o, s, a, h, l, u) {
          for (var p = u || [NaN, NaN], c = 0, d = i.length; c < d; ++c) {
            var f = i[c];
            l = $e(t, e, f, r, n, o, s, a, h, l, p), e = f[f.length - 1];
          }

          return l;
        }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, i, r));
      }, e.prototype.containsXY = function (t, e) {
        return function (t, e, i, r, n, o) {
          if (0 === i.length) return !1;

          for (var s = 0, a = i.length; s < a; ++s) {
            var h = i[s];
            if (_i(t, e, h, r, n, o)) return !0;
            e = h[h.length - 1];
          }

          return !1;
        }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e);
      }, e.prototype.getArea = function () {
        return function (t, e, i, r) {
          for (var n = 0, o = 0, s = i.length; o < s; ++o) {
            var a = i[o];
            n += He(t, e, a, r), e = a[a.length - 1];
          }

          return n;
        }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
      }, e.prototype.getCoordinates = function (t) {
        var e;
        return void 0 !== t ? Ri(e = this.getOrientedFlatCoordinates().slice(), 0, this.endss_, this.stride, t) : e = this.flatCoordinates, oi(e, 0, this.endss_, this.stride);
      }, e.prototype.getEndss = function () {
        return this.endss_;
      }, e.prototype.getFlatInteriorPoints = function () {
        if (this.flatInteriorPointsRevision_ != this.getRevision()) {
          var t = Mc(this.flatCoordinates, 0, this.endss_, this.stride);
          this.flatInteriorPoints_ = yi(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t), this.flatInteriorPointsRevision_ = this.getRevision();
        }

        return this.flatInteriorPoints_;
      }, e.prototype.getInteriorPoints = function () {
        return new bc(this.getFlatInteriorPoints().slice(), At.XYM);
      }, e.prototype.getOrientedFlatCoordinates = function () {
        if (this.orientedRevision_ != this.getRevision()) {
          var t = this.flatCoordinates;
          !function (t, e, i, r, n) {
            for (var o = 0, s = i.length; o < s; ++o) {
              if (!Ti(t, e, i[o], r, n)) return !1;
            }

            return !0;
          }(t, 0, this.endss_, this.stride) ? (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = Ri(this.orientedFlatCoordinates_, 0, this.endss_, this.stride)) : this.orientedFlatCoordinates_ = t, this.orientedRevision_ = this.getRevision();
        }

        return this.orientedFlatCoordinates_;
      }, e.prototype.getSimplifiedGeometryInternal = function (t) {
        var i = [],
            r = [];
        return i.length = function (t, e, i, r, n, o, s, a) {
          for (var h = 0, l = i.length; h < l; ++h) {
            var u = i[h],
                p = [];
            s = ui(t, e, u, r, n, o, s, p), a.push(p), e = u[u.length - 1];
          }

          return s;
        }(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), i, 0, r), new e(i, At.XY, r);
      }, e.prototype.getPolygon = function (t) {
        if (t < 0 || this.endss_.length <= t) return null;
        var e;
        if (0 === t) e = 0;else {
          var i = this.endss_[t - 1];
          e = i[i.length - 1];
        }
        var r = this.endss_[t].slice(),
            n = r[r.length - 1];
        if (0 !== e) for (var o = 0, s = r.length; o < s; ++o) {
          r[o] -= e;
        }
        return new Ii(this.flatCoordinates.slice(e, n), this.layout, r);
      }, e.prototype.getPolygons = function () {
        for (var t = this.layout, e = this.flatCoordinates, i = this.endss_, r = [], n = 0, o = 0, s = i.length; o < s; ++o) {
          var a = i[o].slice(),
              h = a[a.length - 1];
          if (0 !== n) for (var l = 0, u = a.length; l < u; ++l) {
            a[l] -= n;
          }
          var p = new Ii(e.slice(n, h), t, a);
          r.push(p), n = h;
        }

        return r;
      }, e.prototype.getType = function () {
        return Nt.MULTI_POLYGON;
      }, e.prototype.intersectsExtent = function (t) {
        return function (t, e, i, r, n) {
          for (var o = 0, s = i.length; o < s; ++o) {
            var a = i[o];
            if (xi(t, e, a, r, n)) return !0;
            e = a[a.length - 1];
          }

          return !1;
        }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t);
      }, e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []);

        var i = function (t, e, i, r, n) {
          for (var o = n || [], s = 0, a = 0, h = i.length; a < h; ++a) {
            var l = ii(t, e, i[a], r, o[s]);
            o[s++] = l, e = l[l.length - 1];
          }

          return o.length = s, o;
        }(this.flatCoordinates, 0, t, this.stride, this.endss_);

        if (0 === i.length) this.flatCoordinates.length = 0;else {
          var r = i[i.length - 1];
          this.flatCoordinates.length = 0 === r.length ? 0 : r[r.length - 1];
        }
        this.changed();
      }, e;
    }(We),
        Ac = {
      POINT: "Point",
      LINE_STRING: "LineString",
      POLYGON: "Polygon",
      CIRCLE: "Circle"
    },
        Nc = "drawstart",
        Gc = "drawend",
        Dc = function (t) {
      function e(e, i) {
        t.call(this, e), this.feature = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    var kc = function (t) {
      function e(e) {
        var i = e;
        i.stopDown || (i.stopDown = w), t.call(this, i), this.shouldHandle_ = !1, this.downPx_ = null, this.downTimeout_, this.lastDragTime_, this.freehand_ = !1, this.source_ = e.source ? e.source : null, this.features_ = e.features ? e.features : null, this.snapTolerance_ = e.snapTolerance ? e.snapTolerance : 12, this.type_ = e.type, this.mode_ = function (t) {
          var e;
          t === Nt.POINT || t === Nt.MULTI_POINT ? e = Ac.POINT : t === Nt.LINE_STRING || t === Nt.MULTI_LINE_STRING ? e = Ac.LINE_STRING : t === Nt.POLYGON || t === Nt.MULTI_POLYGON ? e = Ac.POLYGON : t === Nt.CIRCLE && (e = Ac.CIRCLE);
          return e;
        }(this.type_), this.stopClick_ = !!e.stopClick, this.minPoints_ = e.minPoints ? e.minPoints : this.mode_ === Ac.POLYGON ? 3 : 2, this.maxPoints_ = e.maxPoints ? e.maxPoints : 1 / 0, this.finishCondition_ = e.finishCondition ? e.finishCondition : R;
        var r = e.geometryFunction;
        if (!r) if (this.type_ === Nt.CIRCLE) r = function r(t, e) {
          var i = e || new Oc([NaN, NaN]),
              r = er(t[0], t[1]);
          return i.setCenterAndRadius(t[0], Math.sqrt(r)), i;
        };else {
          var n,
              o = this.mode_;
          o === Ac.POINT ? n = ci : o === Ac.LINE_STRING ? n = hr : o === Ac.POLYGON && (n = Ii), r = function r(t, e) {
            var i = e;
            return i ? o === Ac.POLYGON ? t[0].length ? i.setCoordinates([t[0].concat([t[0][0]])]) : i.setCoordinates([]) : i.setCoordinates(t) : i = new n(t), i;
          };
        }
        this.geometryFunction_ = r, this.dragVertexDelay_ = void 0 !== e.dragVertexDelay ? e.dragVertexDelay : 500, this.finishCoordinate_ = null, this.sketchFeature_ = null, this.sketchPoint_ = null, this.sketchCoords_ = null, this.sketchLine_ = null, this.sketchLineCoords_ = null, this.squaredClickTolerance_ = e.clickTolerance ? e.clickTolerance * e.clickTolerance : 36, this.overlay_ = new gc({
          source: new op({
            useSpatialIndex: !1,
            wrapX: !!e.wrapX && e.wrapX
          }),
          style: e.style ? e.style : function () {
            var t = Fu();
            return function (e, i) {
              return t[e.getGeometry().getType()];
            };
          }(),
          updateWhileInteracting: !0
        }), this.geometryName_ = e.geometryName, this.condition_ = e.condition ? e.condition : Xo, this.freehandCondition_, e.freehand ? this.freehandCondition_ = jo : this.freehandCondition_ = e.freehandCondition ? e.freehandCondition : zo, v(this, G(Io.ACTIVE), this.updateState_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setMap = function (e) {
        t.prototype.setMap.call(this, e), this.updateState_();
      }, e.prototype.getOverlay = function () {
        return this.overlay_;
      }, e.prototype.handleEvent = function (e) {
        e.originalEvent.type === M.CONTEXTMENU && e.preventDefault(), this.freehand_ = this.mode_ !== Ac.POINT && this.freehandCondition_(e);
        var i = e.type === Ar.POINTERMOVE,
            r = !0;
        !this.freehand_ && this.lastDragTime_ && e.type === Ar.POINTERDRAG && (Date.now() - this.lastDragTime_ >= this.dragVertexDelay_ ? (this.downPx_ = e.pixel, this.shouldHandle_ = !this.freehand_, i = !0) : this.lastDragTime_ = void 0, this.shouldHandle_ && void 0 !== this.downTimeout_ && (clearTimeout(this.downTimeout_), this.downTimeout_ = void 0));
        return this.freehand_ && e.type === Ar.POINTERDRAG && null !== this.sketchFeature_ ? (this.addToDrawing_(e), r = !1) : this.freehand_ && e.type === Ar.POINTERDOWN ? r = !1 : i ? (r = e.type === Ar.POINTERMOVE) && this.freehand_ ? r = this.handlePointerMove_(e) : (e.pointerEvent.pointerType == Ur || e.type === Ar.POINTERDRAG && void 0 === this.downTimeout_) && this.handlePointerMove_(e) : e.type === Ar.DBLCLICK && (r = !1), t.prototype.handleEvent.call(this, e) && r;
      }, e.prototype.handleDownEvent = function (t) {
        return this.shouldHandle_ = !this.freehand_, this.freehand_ ? (this.downPx_ = t.pixel, this.finishCoordinate_ || this.startDrawing_(t), !0) : !!this.condition_(t) && (this.lastDragTime_ = Date.now(), this.downTimeout_ = setTimeout(function () {
          this.handlePointerMove_(new Nr(Ar.POINTERMOVE, t.map, t.pointerEvent, !1, t.frameState));
        }.bind(this), this.dragVertexDelay_), this.downPx_ = t.pixel, !0);
      }, e.prototype.handleUpEvent = function (t) {
        var e = !0;
        this.downTimeout_ && (clearTimeout(this.downTimeout_), this.downTimeout_ = void 0), this.handlePointerMove_(t);
        var i = this.mode_ === Ac.CIRCLE;
        return this.shouldHandle_ ? (this.finishCoordinate_ ? this.freehand_ || i ? this.finishDrawing() : this.atFinish_(t) ? this.finishCondition_(t) && this.finishDrawing() : this.addToDrawing_(t) : (this.startDrawing_(t), this.mode_ === Ac.POINT && this.finishDrawing()), e = !1) : this.freehand_ && (this.finishCoordinate_ = null, this.abortDrawing_()), !e && this.stopClick_ && t.stopPropagation(), e;
      }, e.prototype.handlePointerMove_ = function (t) {
        if (this.downPx_ && (!this.freehand_ && this.shouldHandle_ || this.freehand_ && !this.shouldHandle_)) {
          var e = this.downPx_,
              i = t.pixel,
              r = e[0] - i[0],
              n = e[1] - i[1],
              o = r * r + n * n;
          if (this.shouldHandle_ = this.freehand_ ? o > this.squaredClickTolerance_ : o <= this.squaredClickTolerance_, !this.shouldHandle_) return !0;
        }

        return this.finishCoordinate_ ? this.modifyDrawing_(t) : this.createOrUpdateSketchPoint_(t), !0;
      }, e.prototype.atFinish_ = function (t) {
        var e = !1;

        if (this.sketchFeature_) {
          var i = !1,
              r = [this.finishCoordinate_];
          if (this.mode_ === Ac.LINE_STRING) i = this.sketchCoords_.length > this.minPoints_;else if (this.mode_ === Ac.POLYGON) {
            var n = this.sketchCoords_;
            i = n[0].length > this.minPoints_, r = [n[0][0], n[0][n[0].length - 2]];
          }
          if (i) for (var o = t.map, s = 0, a = r.length; s < a; s++) {
            var h = r[s],
                l = o.getPixelFromCoordinate(h),
                u = t.pixel,
                p = u[0] - l[0],
                c = u[1] - l[1],
                d = this.freehand_ ? 1 : this.snapTolerance_;

            if (e = Math.sqrt(p * p + c * c) <= d) {
              this.finishCoordinate_ = h;
              break;
            }
          }
        }

        return e;
      }, e.prototype.createOrUpdateSketchPoint_ = function (t) {
        var e = t.coordinate.slice();
        this.sketchPoint_ ? this.sketchPoint_.getGeometry().setCoordinates(e) : (this.sketchPoint_ = new B(new ci(e)), this.updateSketchFeatures_());
      }, e.prototype.startDrawing_ = function (t) {
        var e = t.coordinate;
        this.finishCoordinate_ = e, this.mode_ === Ac.POINT ? this.sketchCoords_ = e.slice() : this.mode_ === Ac.POLYGON ? (this.sketchCoords_ = [[e.slice(), e.slice()]], this.sketchLineCoords_ = this.sketchCoords_[0]) : this.sketchCoords_ = [e.slice(), e.slice()], this.sketchLineCoords_ && (this.sketchLine_ = new B(new hr(this.sketchLineCoords_)));
        var i = this.geometryFunction_(this.sketchCoords_);
        this.sketchFeature_ = new B(), this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_), this.sketchFeature_.setGeometry(i), this.updateSketchFeatures_(), this.dispatchEvent(new Dc(Nc, this.sketchFeature_));
      }, e.prototype.modifyDrawing_ = function (t) {
        var e,
            i,
            r,
            n = t.coordinate,
            o = this.sketchFeature_.getGeometry();
        (this.mode_ === Ac.POINT ? i = this.sketchCoords_ : this.mode_ === Ac.POLYGON ? (i = (e = this.sketchCoords_[0])[e.length - 1], this.atFinish_(t) && (n = this.finishCoordinate_.slice())) : i = (e = this.sketchCoords_)[e.length - 1], i[0] = n[0], i[1] = n[1], this.geometryFunction_(this.sketchCoords_, o), this.sketchPoint_) && this.sketchPoint_.getGeometry().setCoordinates(n);

        if (o.getType() == Nt.POLYGON && this.mode_ !== Ac.POLYGON) {
          this.sketchLine_ || (this.sketchLine_ = new B());
          var s = o.getLinearRing(0);
          (r = this.sketchLine_.getGeometry()) ? (r.setFlatCoordinates(s.getLayout(), s.getFlatCoordinates()), r.changed()) : (r = new hr(s.getFlatCoordinates(), s.getLayout()), this.sketchLine_.setGeometry(r));
        } else this.sketchLineCoords_ && (r = this.sketchLine_.getGeometry()).setCoordinates(this.sketchLineCoords_);

        this.updateSketchFeatures_();
      }, e.prototype.addToDrawing_ = function (t) {
        var e,
            i,
            r = t.coordinate,
            n = this.sketchFeature_.getGeometry();
        this.mode_ === Ac.LINE_STRING ? (this.finishCoordinate_ = r.slice(), (i = this.sketchCoords_).length >= this.maxPoints_ && (this.freehand_ ? i.pop() : e = !0), i.push(r.slice()), this.geometryFunction_(i, n)) : this.mode_ === Ac.POLYGON && ((i = this.sketchCoords_[0]).length >= this.maxPoints_ && (this.freehand_ ? i.pop() : e = !0), i.push(r.slice()), e && (this.finishCoordinate_ = i[0]), this.geometryFunction_(this.sketchCoords_, n)), this.updateSketchFeatures_(), e && this.finishDrawing();
      }, e.prototype.removeLastPoint = function () {
        if (this.sketchFeature_) {
          var t,
              e = this.sketchFeature_.getGeometry();
          this.mode_ === Ac.LINE_STRING ? ((t = this.sketchCoords_).splice(-2, 1), this.geometryFunction_(t, e), t.length >= 2 && (this.finishCoordinate_ = t[t.length - 2].slice())) : this.mode_ === Ac.POLYGON && ((t = this.sketchCoords_[0]).splice(-2, 1), this.sketchLine_.getGeometry().setCoordinates(t), this.geometryFunction_(this.sketchCoords_, e)), 0 === t.length && (this.finishCoordinate_ = null), this.updateSketchFeatures_();
        }
      }, e.prototype.finishDrawing = function () {
        var t = this.abortDrawing_();

        if (t) {
          var e = this.sketchCoords_,
              i = t.getGeometry();
          this.mode_ === Ac.LINE_STRING ? (e.pop(), this.geometryFunction_(e, i)) : this.mode_ === Ac.POLYGON && (e[0].pop(), this.geometryFunction_(e, i), e = i.getCoordinates()), this.type_ === Nt.MULTI_POINT ? t.setGeometry(new bc([e])) : this.type_ === Nt.MULTI_LINE_STRING ? t.setGeometry(new Pc([e])) : this.type_ === Nt.MULTI_POLYGON && t.setGeometry(new Fc([e])), this.dispatchEvent(new Dc(Gc, t)), this.features_ && this.features_.push(t), this.source_ && this.source_.addFeature(t);
        }
      }, e.prototype.abortDrawing_ = function () {
        this.finishCoordinate_ = null;
        var t = this.sketchFeature_;
        return t && (this.sketchFeature_ = null, this.sketchPoint_ = null, this.sketchLine_ = null, this.overlay_.getSource().clear(!0)), t;
      }, e.prototype.extend = function (t) {
        var e = t.getGeometry();
        this.sketchFeature_ = t, this.sketchCoords_ = e.getCoordinates();
        var i = this.sketchCoords_[this.sketchCoords_.length - 1];
        this.finishCoordinate_ = i.slice(), this.sketchCoords_.push(i.slice()), this.updateSketchFeatures_(), this.dispatchEvent(new Dc(Nc, this.sketchFeature_));
      }, e.prototype.updateSketchFeatures_ = function () {
        var t = [];
        this.sketchFeature_ && t.push(this.sketchFeature_), this.sketchLine_ && t.push(this.sketchLine_), this.sketchPoint_ && t.push(this.sketchPoint_);
        var e = this.overlay_.getSource();
        e.clear(!0), e.addFeatures(t);
      }, e.prototype.updateState_ = function () {
        var t = this.getMap(),
            e = this.getActive();
        t && e || this.abortDrawing_(), this.overlay_.setMap(e ? t : null);
      }, e;
    }(qo),
        jc = {
      EXTENTCHANGED: "extentchanged"
    },
        Uc = function (t) {
      function e(e) {
        t.call(this, jc.EXTENTCHANGED), this.extent = e;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    function Yc(t) {
      return function (e) {
        return tt([t, e]);
      };
    }

    function Bc(t, e) {
      return t[0] == e[0] ? function (i) {
        return tt([t, [i[0], e[1]]]);
      } : t[1] == e[1] ? function (i) {
        return tt([t, [e[0], i[1]]]);
      } : null;
    }

    var Vc = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.extent_ = null, this.pointerHandler_ = null, this.pixelTolerance_ = void 0 !== i.pixelTolerance ? i.pixelTolerance : 10, this.snappedToVertex_ = !1, this.extentFeature_ = null, this.vertexFeature_ = null, e || (e = {}), this.extentOverlay_ = new gc({
          source: new op({
            useSpatialIndex: !1,
            wrapX: !!e.wrapX
          }),
          style: e.boxStyle ? e.boxStyle : function () {
            var t = Fu();
            return function (e, i) {
              return t[Nt.POLYGON];
            };
          }(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
        }), this.vertexOverlay_ = new gc({
          source: new op({
            useSpatialIndex: !1,
            wrapX: !!e.wrapX
          }),
          style: e.pointerStyle ? e.pointerStyle : function () {
            var t = Fu();
            return function (e, i) {
              return t[Nt.POINT];
            };
          }(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
        }), e.extent && this.setExtent(e.extent);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.snapToVertex_ = function (t, e) {
        var i = e.getCoordinateFromPixel(t),
            r = this.getExtent();

        if (r) {
          var n = function (t) {
            return [[[t[0], t[1]], [t[0], t[3]]], [[t[0], t[3]], [t[2], t[3]]], [[t[2], t[3]], [t[2], t[1]]], [[t[2], t[1]], [t[0], t[1]]]];
          }(r);

          n.sort(function (t, e) {
            return rr(i, t) - rr(i, e);
          });
          var o = n[0],
              s = Zi(i, o),
              a = e.getPixelFromCoordinate(s);

          if (ir(t, a) <= this.pixelTolerance_) {
            var h = e.getPixelFromCoordinate(o[0]),
                l = e.getPixelFromCoordinate(o[1]),
                u = er(a, h),
                p = er(a, l),
                c = Math.sqrt(Math.min(u, p));
            return this.snappedToVertex_ = c <= this.pixelTolerance_, this.snappedToVertex_ && (s = u > p ? o[1] : o[0]), s;
          }
        }

        return null;
      }, e.prototype.handlePointerMove_ = function (t) {
        var e = t.pixel,
            i = t.map,
            r = this.snapToVertex_(e, i);
        r || (r = i.getCoordinateFromPixel(e)), this.createOrUpdatePointerFeature_(r);
      }, e.prototype.createOrUpdateExtentFeature_ = function (t) {
        var e = this.extentFeature_;
        return e ? t ? e.setGeometry(Oi(t)) : e.setGeometry(void 0) : (e = new B(t ? Oi(t) : {}), this.extentFeature_ = e, this.extentOverlay_.getSource().addFeature(e)), e;
      }, e.prototype.createOrUpdatePointerFeature_ = function (t) {
        var e = this.vertexFeature_;
        e ? e.getGeometry().setCoordinates(t) : (e = new B(new ci(t)), this.vertexFeature_ = e, this.vertexOverlay_.getSource().addFeature(e));
        return e;
      }, e.prototype.handleEvent = function (e) {
        return !e.pointerEvent || (e.type != Ar.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(e), t.prototype.handleEvent.call(this, e), !1);
      }, e.prototype.handleDownEvent = function (t) {
        var e = t.pixel,
            i = t.map,
            r = this.getExtent(),
            n = this.snapToVertex_(e, i),
            o = function o(t) {
          var e = null,
              i = null;
          return t[0] == r[0] ? e = r[2] : t[0] == r[2] && (e = r[0]), t[1] == r[1] ? i = r[3] : t[1] == r[3] && (i = r[1]), null !== e && null !== i ? [e, i] : null;
        };

        if (n && r) {
          var s = n[0] == r[0] || n[0] == r[2] ? n[0] : null,
              a = n[1] == r[1] || n[1] == r[3] ? n[1] : null;
          null !== s && null !== a ? this.pointerHandler_ = Yc(o(n)) : null !== s ? this.pointerHandler_ = Bc(o([s, r[1]]), o([s, r[3]])) : null !== a && (this.pointerHandler_ = Bc(o([r[0], a]), o([r[2], a])));
        } else n = i.getCoordinateFromPixel(e), this.setExtent([n[0], n[1], n[0], n[1]]), this.pointerHandler_ = Yc(n);

        return !0;
      }, e.prototype.handleDragEvent = function (t) {
        if (this.pointerHandler_) {
          var e = t.coordinate;
          this.setExtent(this.pointerHandler_(e)), this.createOrUpdatePointerFeature_(e);
        }

        return !0;
      }, e.prototype.handleUpEvent = function (t) {
        this.pointerHandler_ = null;
        var e = this.getExtent();
        return e && 0 !== xt(e) || this.setExtent(null), !1;
      }, e.prototype.setMap = function (e) {
        this.extentOverlay_.setMap(e), this.vertexOverlay_.setMap(e), t.prototype.setMap.call(this, e);
      }, e.prototype.getExtent = function () {
        return this.extent_;
      }, e.prototype.setExtent = function (t) {
        this.extent_ = t || null, this.createOrUpdateExtentFeature_(t), this.dispatchEvent(new Uc(this.extent_));
      }, e;
    }(qo),
        Xc = 1,
        zc = "modifystart",
        Wc = "modifyend",
        Kc = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.features = i, this.mapBrowserEvent = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    function Hc(t, e) {
      return t.index - e.index;
    }

    function Zc(t, e) {
      var i = e.geometry;

      if (i.getType() === Nt.CIRCLE) {
        var r = i;

        if (e.index === Xc) {
          var n = er(r.getCenter(), t),
              o = Math.sqrt(n) - r.getRadius();
          return o * o;
        }
      }

      return rr(t, e.segment);
    }

    function qc(t, e) {
      var i = e.geometry;
      return i.getType() === Nt.CIRCLE && e.index === Xc ? i.getClosestPoint(t) : Zi(t, e.segment);
    }

    var Jc = function (t) {
      function e(e) {
        var i;
        if (t.call(this, e), this.condition_ = e.condition ? e.condition : Ho, this.defaultDeleteCondition_ = function (t) {
          return Go(t) && Vo(t);
        }, this.deleteCondition_ = e.deleteCondition ? e.deleteCondition : this.defaultDeleteCondition_, this.insertVertexCondition_ = e.insertVertexCondition ? e.insertVertexCondition : jo, this.vertexFeature_ = null, this.vertexSegments_ = null, this.lastPixel_ = [0, 0], this.ignoreNextSingleClick_ = !1, this.modified_ = !1, this.rBush_ = new tl(), this.pixelTolerance_ = void 0 !== e.pixelTolerance ? e.pixelTolerance : 10, this.snappedToVertex_ = !1, this.changingFeature_ = !1, this.dragSegments_ = [], this.overlay_ = new gc({
          source: new op({
            useSpatialIndex: !1,
            wrapX: !!e.wrapX
          }),
          style: e.style ? e.style : function () {
            var t = Fu();
            return function (e, i) {
              return t[Nt.POINT];
            };
          }(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
        }), this.SEGMENT_WRITERS_ = {
          Point: this.writePointGeometry_,
          LineString: this.writeLineStringGeometry_,
          LinearRing: this.writeLineStringGeometry_,
          Polygon: this.writePolygonGeometry_,
          MultiPoint: this.writeMultiPointGeometry_,
          MultiLineString: this.writeMultiLineStringGeometry_,
          MultiPolygon: this.writeMultiPolygonGeometry_,
          Circle: this.writeCircleGeometry_,
          GeometryCollection: this.writeGeometryCollectionGeometry_
        }, this.source_ = null, e.source ? (this.source_ = e.source, i = new U(this.source_.getFeatures()), v(this.source_, rp.ADDFEATURE, this.handleSourceAdd_, this), v(this.source_, rp.REMOVEFEATURE, this.handleSourceRemove_, this)) : i = e.features, !i) throw new Error("The modify interaction requires features or a source");
        this.features_ = i, this.features_.forEach(this.addFeature_.bind(this)), v(this.features_, h.ADD, this.handleFeatureAdd_, this), v(this.features_, h.REMOVE, this.handleFeatureRemove_, this), this.lastPointerEvent_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addFeature_ = function (t) {
        var e = t.getGeometry();
        e && e.getType() in this.SEGMENT_WRITERS_ && this.SEGMENT_WRITERS_[e.getType()].call(this, t, e);
        var i = this.getMap();
        i && i.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, i), v(t, M.CHANGE, this.handleFeatureChange_, this);
      }, e.prototype.willModifyFeatures_ = function (t) {
        this.modified_ || (this.modified_ = !0, this.dispatchEvent(new Kc(zc, this.features_, t)));
      }, e.prototype.removeFeature_ = function (t) {
        this.removeFeatureSegmentData_(t), this.vertexFeature_ && 0 === this.features_.getLength() && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), x(t, M.CHANGE, this.handleFeatureChange_, this);
      }, e.prototype.removeFeatureSegmentData_ = function (t) {
        var e = this.rBush_,
            i = [];
        e.forEach(function (e) {
          t === e.feature && i.push(e);
        });

        for (var r = i.length - 1; r >= 0; --r) {
          e.remove(i[r]);
        }
      }, e.prototype.setActive = function (e) {
        this.vertexFeature_ && !e && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), t.prototype.setActive.call(this, e);
      }, e.prototype.setMap = function (e) {
        this.overlay_.setMap(e), t.prototype.setMap.call(this, e);
      }, e.prototype.getOverlay = function () {
        return this.overlay_;
      }, e.prototype.handleSourceAdd_ = function (t) {
        t.feature && this.features_.push(t.feature);
      }, e.prototype.handleSourceRemove_ = function (t) {
        t.feature && this.features_.remove(t.feature);
      }, e.prototype.handleFeatureAdd_ = function (t) {
        this.addFeature_(t.element);
      }, e.prototype.handleFeatureChange_ = function (t) {
        if (!this.changingFeature_) {
          var e = t.target;
          this.removeFeature_(e), this.addFeature_(e);
        }
      }, e.prototype.handleFeatureRemove_ = function (t) {
        var e = t.element;
        this.removeFeature_(e);
      }, e.prototype.writePointGeometry_ = function (t, e) {
        var i = e.getCoordinates(),
            r = {
          feature: t,
          geometry: e,
          segment: [i, i]
        };
        this.rBush_.insert(e.getExtent(), r);
      }, e.prototype.writeMultiPointGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          var o = i[r],
              s = {
            feature: t,
            geometry: e,
            depth: [r],
            index: r,
            segment: [o, o]
          };
          this.rBush_.insert(e.getExtent(), s);
        }
      }, e.prototype.writeLineStringGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length - 1; r < n; ++r) {
          var o = i.slice(r, r + 2),
              s = {
            feature: t,
            geometry: e,
            index: r,
            segment: o
          };
          this.rBush_.insert(tt(o), s);
        }
      }, e.prototype.writeMultiLineStringGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          for (var o = i[r], s = 0, a = o.length - 1; s < a; ++s) {
            var h = o.slice(s, s + 2),
                l = {
              feature: t,
              geometry: e,
              depth: [r],
              index: s,
              segment: h
            };
            this.rBush_.insert(tt(h), l);
          }
        }
      }, e.prototype.writePolygonGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          for (var o = i[r], s = 0, a = o.length - 1; s < a; ++s) {
            var h = o.slice(s, s + 2),
                l = {
              feature: t,
              geometry: e,
              depth: [r],
              index: s,
              segment: h
            };
            this.rBush_.insert(tt(h), l);
          }
        }
      }, e.prototype.writeMultiPolygonGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          for (var o = i[r], s = 0, a = o.length; s < a; ++s) {
            for (var h = o[s], l = 0, u = h.length - 1; l < u; ++l) {
              var p = h.slice(l, l + 2),
                  c = {
                feature: t,
                geometry: e,
                depth: [s, r],
                index: l,
                segment: p
              };
              this.rBush_.insert(tt(p), c);
            }
          }
        }
      }, e.prototype.writeCircleGeometry_ = function (t, e) {
        var i = e.getCenter(),
            r = {
          feature: t,
          geometry: e,
          index: 0,
          segment: [i, i]
        },
            n = {
          feature: t,
          geometry: e,
          index: Xc,
          segment: [i, i]
        },
            o = [r, n];
        r.featureSegments = n.featureSegments = o, this.rBush_.insert(pt(i), r), this.rBush_.insert(e.getExtent(), n);
      }, e.prototype.writeGeometryCollectionGeometry_ = function (t, e) {
        for (var i = e.getGeometriesArray(), r = 0; r < i.length; ++r) {
          this.SEGMENT_WRITERS_[i[r].getType()].call(this, t, i[r]);
        }
      }, e.prototype.createOrUpdateVertexFeature_ = function (t) {
        var e = this.vertexFeature_;
        e ? e.getGeometry().setCoordinates(t) : (e = new B(new ci(t)), this.vertexFeature_ = e, this.overlay_.getSource().addFeature(e));
        return e;
      }, e.prototype.handleEvent = function (e) {
        return !e.pointerEvent || (this.lastPointerEvent_ = e, e.map.getView().getInteracting() || e.type != Ar.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(e), this.vertexFeature_ && this.deleteCondition_(e) && (i = !(e.type != Ar.SINGLECLICK || !this.ignoreNextSingleClick_) || this.removePoint()), e.type == Ar.SINGLECLICK && (this.ignoreNextSingleClick_ = !1), t.prototype.handleEvent.call(this, e) && !i);
        var i;
      }, e.prototype.handleDragEvent = function (t) {
        this.ignoreNextSingleClick_ = !1, this.willModifyFeatures_(t);

        for (var e = t.coordinate, i = 0, r = this.dragSegments_.length; i < r; ++i) {
          for (var n = this.dragSegments_[i], o = n[0], s = o.depth, a = o.geometry, h = void 0, l = o.segment, u = n[1]; e.length < a.getStride();) {
            e.push(l[u][e.length]);
          }

          switch (a.getType()) {
            case Nt.POINT:
              h = e, l[0] = l[1] = e;
              break;

            case Nt.MULTI_POINT:
              (h = a.getCoordinates())[o.index] = e, l[0] = l[1] = e;
              break;

            case Nt.LINE_STRING:
              (h = a.getCoordinates())[o.index + u] = e, l[u] = e;
              break;

            case Nt.MULTI_LINE_STRING:
            case Nt.POLYGON:
              (h = a.getCoordinates())[s[0]][o.index + u] = e, l[u] = e;
              break;

            case Nt.MULTI_POLYGON:
              (h = a.getCoordinates())[s[1]][s[0]][o.index + u] = e, l[u] = e;
              break;

            case Nt.CIRCLE:
              l[0] = l[1] = e, 0 === o.index ? (this.changingFeature_ = !0, a.setCenter(e), this.changingFeature_ = !1) : (this.changingFeature_ = !0, a.setRadius(ir(a.getCenter(), e)), this.changingFeature_ = !1);
          }

          h && this.setGeometryCoordinates_(a, h);
        }

        this.createOrUpdateVertexFeature_(e);
      }, e.prototype.handleDownEvent = function (t) {
        if (!this.condition_(t)) return !1;
        this.handlePointerAtPixel_(t.pixel, t.map);
        var e = t.map.getCoordinateFromPixel(t.pixel);
        this.dragSegments_.length = 0, this.modified_ = !1;
        var i = this.vertexFeature_;

        if (i) {
          var r = [],
              n = i.getGeometry().getCoordinates(),
              s = tt([n]),
              a = this.rBush_.getInExtent(s),
              h = {};
          a.sort(Hc);

          for (var l = 0, u = a.length; l < u; ++l) {
            var p = a[l],
                c = p.segment,
                d = o(p.feature),
                f = p.depth;
            if (f && (d += "-" + f.join("-")), h[d] || (h[d] = new Array(2)), p.geometry.getType() === Nt.CIRCLE && p.index === Xc) Qi(qc(e, p), n) && !h[d][0] && (this.dragSegments_.push([p, 0]), h[d][0] = p);else if (Qi(c[0], n) && !h[d][0]) this.dragSegments_.push([p, 0]), h[d][0] = p;else if (Qi(c[1], n) && !h[d][1]) {
              if ((p.geometry.getType() === Nt.LINE_STRING || p.geometry.getType() === Nt.MULTI_LINE_STRING) && h[d][0] && 0 === h[d][0].index) continue;
              this.dragSegments_.push([p, 1]), h[d][1] = p;
            } else this.insertVertexCondition_(t) && o(c) in this.vertexSegments_ && !h[d][0] && !h[d][1] && r.push([p, n]);
          }

          r.length && this.willModifyFeatures_(t);

          for (var _ = r.length - 1; _ >= 0; --_) {
            this.insertVertex_.apply(this, r[_]);
          }
        }

        return !!this.vertexFeature_;
      }, e.prototype.handleUpEvent = function (t) {
        for (var e = this.dragSegments_.length - 1; e >= 0; --e) {
          var i = this.dragSegments_[e][0],
              r = i.geometry;

          if (r.getType() === Nt.CIRCLE) {
            var n = r.getCenter(),
                o = i.featureSegments[0],
                s = i.featureSegments[1];
            o.segment[0] = o.segment[1] = n, s.segment[0] = s.segment[1] = n, this.rBush_.update(pt(n), o), this.rBush_.update(r.getExtent(), s);
          } else this.rBush_.update(tt(i.segment), i);
        }

        return this.modified_ && (this.dispatchEvent(new Kc(Wc, this.features_, t)), this.modified_ = !1), !1;
      }, e.prototype.handlePointerMove_ = function (t) {
        this.lastPixel_ = t.pixel, this.handlePointerAtPixel_(t.pixel, t.map);
      }, e.prototype.handlePointerAtPixel_ = function (t, e) {
        var i = e.getCoordinateFromPixel(t),
            r = et(pt(i), e.getView().getResolution() * this.pixelTolerance_),
            n = this.rBush_.getInExtent(r);

        if (n.length > 0) {
          n.sort(function (t, e) {
            return Zc(i, t) - Zc(i, e);
          });
          var s = n[0],
              a = s.segment,
              h = qc(i, s),
              l = e.getPixelFromCoordinate(h),
              u = ir(t, l);

          if (u <= this.pixelTolerance_) {
            var p = {};
            if (s.geometry.getType() === Nt.CIRCLE && s.index === Xc) this.snappedToVertex_ = !0, this.createOrUpdateVertexFeature_(h);else {
              var c = e.getPixelFromCoordinate(a[0]),
                  d = e.getPixelFromCoordinate(a[1]),
                  f = er(l, c),
                  _ = er(l, d);

              u = Math.sqrt(Math.min(f, _)), this.snappedToVertex_ = u <= this.pixelTolerance_, this.snappedToVertex_ && (h = f > _ ? a[1] : a[0]), this.createOrUpdateVertexFeature_(h);

              for (var g = 1, y = n.length; g < y; ++g) {
                var v = n[g].segment;
                if (!(Qi(a[0], v[0]) && Qi(a[1], v[1]) || Qi(a[0], v[1]) && Qi(a[1], v[0]))) break;
                p[o(v)] = !0;
              }
            }
            return p[o(a)] = !0, void (this.vertexSegments_ = p);
          }
        }

        this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null);
      }, e.prototype.insertVertex_ = function (t, e) {
        for (var i, r = t.segment, n = t.feature, o = t.geometry, s = t.depth, a = t.index; e.length < o.getStride();) {
          e.push(0);
        }

        switch (o.getType()) {
          case Nt.MULTI_LINE_STRING:
          case Nt.POLYGON:
            (i = o.getCoordinates())[s[0]].splice(a + 1, 0, e);
            break;

          case Nt.MULTI_POLYGON:
            (i = o.getCoordinates())[s[1]][s[0]].splice(a + 1, 0, e);
            break;

          case Nt.LINE_STRING:
            (i = o.getCoordinates()).splice(a + 1, 0, e);
            break;

          default:
            return;
        }

        this.setGeometryCoordinates_(o, i);
        var h = this.rBush_;
        h.remove(t), this.updateSegmentIndices_(o, a, s, 1);
        var l = {
          segment: [r[0], e],
          feature: n,
          geometry: o,
          depth: s,
          index: a
        };
        h.insert(tt(l.segment), l), this.dragSegments_.push([l, 1]);
        var u = {
          segment: [e, r[1]],
          feature: n,
          geometry: o,
          depth: s,
          index: a + 1
        };
        h.insert(tt(u.segment), u), this.dragSegments_.push([u, 0]), this.ignoreNextSingleClick_ = !0;
      }, e.prototype.removePoint = function () {
        if (this.lastPointerEvent_ && this.lastPointerEvent_.type != Ar.POINTERDRAG) {
          var t = this.lastPointerEvent_;
          return this.willModifyFeatures_(t), this.removeVertex_(), this.dispatchEvent(new Kc(Wc, this.features_, t)), this.modified_ = !1, !0;
        }

        return !1;
      }, e.prototype.removeVertex_ = function () {
        var t,
            e,
            i,
            r,
            n,
            s,
            a,
            h,
            l,
            u,
            p,
            c = this.dragSegments_,
            d = {},
            f = !1;

        for (n = c.length - 1; n >= 0; --n) {
          p = o((u = (i = c[n])[0]).feature), u.depth && (p += "-" + u.depth.join("-")), p in d || (d[p] = {}), 0 === i[1] ? (d[p].right = u, d[p].index = u.index) : 1 == i[1] && (d[p].left = u, d[p].index = u.index + 1);
        }

        for (p in d) {
          switch (l = d[p].right, a = d[p].left, h = (s = d[p].index) - 1, u = void 0 !== a ? a : l, h < 0 && (h = 0), t = e = (r = u.geometry).getCoordinates(), f = !1, r.getType()) {
            case Nt.MULTI_LINE_STRING:
              e[u.depth[0]].length > 2 && (e[u.depth[0]].splice(s, 1), f = !0);
              break;

            case Nt.LINE_STRING:
              e.length > 2 && (e.splice(s, 1), f = !0);
              break;

            case Nt.MULTI_POLYGON:
              t = t[u.depth[1]];

            case Nt.POLYGON:
              (t = t[u.depth[0]]).length > 4 && (s == t.length - 1 && (s = 0), t.splice(s, 1), f = !0, 0 === s && (t.pop(), t.push(t[0]), h = t.length - 1));
          }

          if (f) {
            this.setGeometryCoordinates_(r, e);
            var _ = [];

            if (void 0 !== a && (this.rBush_.remove(a), _.push(a.segment[0])), void 0 !== l && (this.rBush_.remove(l), _.push(l.segment[1])), void 0 !== a && void 0 !== l) {
              var g = {
                depth: u.depth,
                feature: u.feature,
                geometry: u.geometry,
                index: h,
                segment: _
              };
              this.rBush_.insert(tt(g.segment), g);
            }

            this.updateSegmentIndices_(r, s, u.depth, -1), this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), c.length = 0;
          }
        }

        return f;
      }, e.prototype.setGeometryCoordinates_ = function (t, e) {
        this.changingFeature_ = !0, t.setCoordinates(e), this.changingFeature_ = !1;
      }, e.prototype.updateSegmentIndices_ = function (t, e, i, r) {
        this.rBush_.forEachInExtent(t.getExtent(), function (n) {
          n.geometry === t && (void 0 === i || void 0 === n.depth || Z(n.depth, i)) && n.index > e && (n.index += r);
        });
      }, e;
    }(qo),
        Qc = {
      SELECT: "select"
    },
        $c = function (t) {
      function e(e, i, r, n) {
        t.call(this, e), this.selected = i, this.deselected = r, this.mapBrowserEvent = n;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P);

    function td(t) {
      if (!this.condition_(t)) return !0;
      var e = this.addCondition_(t),
          i = this.removeCondition_(t),
          r = this.toggleCondition_(t),
          n = !e && !i && !r,
          o = t.map,
          s = this.getFeatures(),
          a = [],
          h = [];

      if (n) {
        p(this.featureLayerAssociation_), o.forEachFeatureAtPixel(t.pixel, function (t, e) {
          if (this.filter_(t, e)) return h.push(t), this.addFeatureLayerAssociation_(t, e), !this.multi_;
        }.bind(this), {
          layerFilter: this.layerFilter_,
          hitTolerance: this.hitTolerance_
        });

        for (var l = s.getLength() - 1; l >= 0; --l) {
          var u = s.item(l),
              c = h.indexOf(u);
          c > -1 ? h.splice(c, 1) : (s.remove(u), a.push(u));
        }

        0 !== h.length && s.extend(h);
      } else {
        o.forEachFeatureAtPixel(t.pixel, function (t, n) {
          if (this.filter_(t, n)) return !e && !r || X(s.getArray(), t) ? (i || r) && X(s.getArray(), t) && (a.push(t), this.removeFeatureLayerAssociation_(t)) : (h.push(t), this.addFeatureLayerAssociation_(t, n)), !this.multi_;
        }.bind(this), {
          layerFilter: this.layerFilter_,
          hitTolerance: this.hitTolerance_
        });

        for (var d = a.length - 1; d >= 0; --d) {
          s.remove(a[d]);
        }

        s.extend(h);
      }

      return (h.length > 0 || a.length > 0) && this.dispatchEvent(new $c(Qc.SELECT, h, a, t)), Bo(t);
    }

    var ed = function (t) {
      function e(e) {
        t.call(this, {
          handleEvent: td
        });
        var i = e || {};
        this.condition_ = i.condition ? i.condition : Vo, this.addCondition_ = i.addCondition ? i.addCondition : Yo, this.removeCondition_ = i.removeCondition ? i.removeCondition : Yo, this.toggleCondition_ = i.toggleCondition ? i.toggleCondition : zo, this.multi_ = !!i.multi && i.multi, this.filter_ = i.filter ? i.filter : R, this.hitTolerance_ = i.hitTolerance ? i.hitTolerance : 0;
        var r,
            n = new gc({
          source: new op({
            useSpatialIndex: !1,
            features: i.features,
            wrapX: i.wrapX
          }),
          style: i.style ? i.style : function () {
            var t = Fu();
            return K(t[Nt.POLYGON], t[Nt.LINE_STRING]), K(t[Nt.GEOMETRY_COLLECTION], t[Nt.LINE_STRING]), function (e, i) {
              return e.getGeometry() ? t[e.getGeometry().getType()] : null;
            };
          }(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
        });
        if (this.featureOverlay_ = n, i.layers) {
          if ("function" == typeof i.layers) r = i.layers;else {
            var o = i.layers;

            r = function r(t) {
              return X(o, t);
            };
          }
        } else r = R;
        this.layerFilter_ = r, this.featureLayerAssociation_ = {};
        var s = this.getFeatures();
        v(s, h.ADD, this.addFeature_, this), v(s, h.REMOVE, this.removeFeature_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addFeatureLayerAssociation_ = function (t, e) {
        this.featureLayerAssociation_[o(t)] = e;
      }, e.prototype.getFeatures = function () {
        return this.featureOverlay_.getSource().getFeaturesCollection();
      }, e.prototype.getHitTolerance = function () {
        return this.hitTolerance_;
      }, e.prototype.getLayer = function (t) {
        return this.featureLayerAssociation_[o(t)];
      }, e.prototype.getOverlay = function () {
        return this.featureOverlay_;
      }, e.prototype.setHitTolerance = function (t) {
        this.hitTolerance_ = t;
      }, e.prototype.setMap = function (e) {
        var i = this.getMap(),
            r = this.getFeatures();
        i && r.forEach(i.unskipFeature.bind(i)), t.prototype.setMap.call(this, e), this.featureOverlay_.setMap(e), e && r.forEach(e.skipFeature.bind(e));
      }, e.prototype.addFeature_ = function (t) {
        var e = this.getMap();
        e && e.skipFeature(t.element);
      }, e.prototype.removeFeature_ = function (t) {
        var e = this.getMap();
        e && e.unskipFeature(t.element);
      }, e.prototype.removeFeatureLayerAssociation_ = function (t) {
        delete this.featureLayerAssociation_[o(t)];
      }, e;
    }(Fo);

    function id(t) {
      return t.feature ? t.feature : t.element ? t.element : void 0;
    }

    var rd = function (t) {
      function e(e) {
        var i = e || {},
            r = i;
        r.handleDownEvent || (r.handleDownEvent = R), r.stopDown || (r.stopDown = w), t.call(this, r), this.source_ = i.source ? i.source : null, this.vertex_ = void 0 === i.vertex || i.vertex, this.edge_ = void 0 === i.edge || i.edge, this.features_ = i.features ? i.features : null, this.featuresListenerKeys_ = [], this.featureChangeListenerKeys_ = {}, this.indexedFeaturesExtents_ = {}, this.pendingFeatures_ = {}, this.pixelCoordinate_ = null, this.pixelTolerance_ = void 0 !== i.pixelTolerance ? i.pixelTolerance : 10, this.sortByDistance_ = function (t, e) {
          var i = rr(this.pixelCoordinate_, t.segment),
              r = rr(this.pixelCoordinate_, e.segment);
          return i - r;
        }.bind(this), this.rBush_ = new tl(), this.SEGMENT_WRITERS_ = {
          Point: this.writePointGeometry_,
          LineString: this.writeLineStringGeometry_,
          LinearRing: this.writeLineStringGeometry_,
          Polygon: this.writePolygonGeometry_,
          MultiPoint: this.writeMultiPointGeometry_,
          MultiLineString: this.writeMultiLineStringGeometry_,
          MultiPolygon: this.writeMultiPolygonGeometry_,
          GeometryCollection: this.writeGeometryCollectionGeometry_,
          Circle: this.writeCircleGeometry_
        };
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addFeature = function (t, e) {
        var i = void 0 === e || e,
            r = o(t),
            n = t.getGeometry();

        if (n) {
          var s = this.SEGMENT_WRITERS_[n.getType()];
          s && (this.indexedFeaturesExtents_[r] = n.getExtent([1 / 0, 1 / 0, -1 / 0, -1 / 0]), s.call(this, t, n));
        }

        i && (this.featureChangeListenerKeys_[r] = v(t, M.CHANGE, this.handleFeatureChange_, this));
      }, e.prototype.forEachFeatureAdd_ = function (t) {
        this.addFeature(t);
      }, e.prototype.forEachFeatureRemove_ = function (t) {
        this.removeFeature(t);
      }, e.prototype.getFeatures_ = function () {
        var t;
        return this.features_ ? t = this.features_ : this.source_ && (t = this.source_.getFeatures()), t;
      }, e.prototype.handleEvent = function (e) {
        var i = this.snapTo(e.pixel, e.coordinate, e.map);
        return i.snapped && (e.coordinate = i.vertex.slice(0, 2), e.pixel = i.vertexPixel), t.prototype.handleEvent.call(this, e);
      }, e.prototype.handleFeatureAdd_ = function (t) {
        var e = id(t);
        this.addFeature(e);
      }, e.prototype.handleFeatureRemove_ = function (t) {
        var e = id(t);
        this.removeFeature(e);
      }, e.prototype.handleFeatureChange_ = function (t) {
        var e = t.target;

        if (this.handlingDownUpSequence) {
          var i = o(e);
          i in this.pendingFeatures_ || (this.pendingFeatures_[i] = e);
        } else this.updateFeature_(e);
      }, e.prototype.handleUpEvent = function (t) {
        var e = c(this.pendingFeatures_);
        return e.length && (e.forEach(this.updateFeature_.bind(this)), this.pendingFeatures_ = {}), !1;
      }, e.prototype.removeFeature = function (t, e) {
        var i = void 0 === e || e,
            r = o(t),
            n = this.indexedFeaturesExtents_[r];

        if (n) {
          var s = this.rBush_,
              a = [];
          s.forEachInExtent(n, function (e) {
            t === e.feature && a.push(e);
          });

          for (var h = a.length - 1; h >= 0; --h) {
            s.remove(a[h]);
          }
        }

        i && (E(this.featureChangeListenerKeys_[r]), delete this.featureChangeListenerKeys_[r]);
      }, e.prototype.setMap = function (e) {
        var i = this.getMap(),
            r = this.featuresListenerKeys_,
            n = this.getFeatures_();
        i && (r.forEach(E), r.length = 0, n.forEach(this.forEachFeatureRemove_.bind(this))), t.prototype.setMap.call(this, e), e && (this.features_ ? r.push(v(this.features_, h.ADD, this.handleFeatureAdd_, this), v(this.features_, h.REMOVE, this.handleFeatureRemove_, this)) : this.source_ && r.push(v(this.source_, rp.ADDFEATURE, this.handleFeatureAdd_, this), v(this.source_, rp.REMOVEFEATURE, this.handleFeatureRemove_, this)), n.forEach(this.forEachFeatureAdd_.bind(this)));
      }, e.prototype.snapTo = function (t, e, i) {
        var r = tt([i.getCoordinateFromPixel([t[0] - this.pixelTolerance_, t[1] + this.pixelTolerance_]), i.getCoordinateFromPixel([t[0] + this.pixelTolerance_, t[1] - this.pixelTolerance_])]),
            n = this.rBush_.getInExtent(r);
        this.vertex_ && !this.edge_ && (n = n.filter(function (t) {
          return t.feature.getGeometry().getType() !== Nt.CIRCLE;
        }));
        var o,
            s,
            a,
            h,
            l = !1,
            u = null,
            p = null;

        if (n.length > 0) {
          this.pixelCoordinate_ = e, n.sort(this.sortByDistance_);
          var c = n[0].segment,
              d = n[0].feature.getGeometry().getType() === Nt.CIRCLE;
          this.vertex_ && !this.edge_ ? (o = i.getPixelFromCoordinate(c[0]), s = i.getPixelFromCoordinate(c[1]), a = er(t, o), h = er(t, s), Math.sqrt(Math.min(a, h)) <= this.pixelTolerance_ && (l = !0, u = a > h ? c[1] : c[0], p = i.getPixelFromCoordinate(u))) : this.edge_ && (u = d ? function (t, e) {
            var i = e.getRadius(),
                r = e.getCenter(),
                n = r[0],
                o = r[1],
                s = t[0] - n,
                a = t[1] - o;
            0 === s && 0 === a && (s = 1);
            var h = Math.sqrt(s * s + a * a);
            return [n + i * s / h, o + i * a / h];
          }(e, n[0].feature.getGeometry()) : Zi(e, c), ir(t, p = i.getPixelFromCoordinate(u)) <= this.pixelTolerance_ && (l = !0, this.vertex_ && !d && (o = i.getPixelFromCoordinate(c[0]), s = i.getPixelFromCoordinate(c[1]), a = er(p, o), h = er(p, s), Math.sqrt(Math.min(a, h)) <= this.pixelTolerance_ && (u = a > h ? c[1] : c[0], p = i.getPixelFromCoordinate(u))))), l && (p = [Math.round(p[0]), Math.round(p[1])]);
        }

        return {
          snapped: l,
          vertex: u,
          vertexPixel: p
        };
      }, e.prototype.updateFeature_ = function (t) {
        this.removeFeature(t, !1), this.addFeature(t, !1);
      }, e.prototype.writeCircleGeometry_ = function (t, e) {
        for (var i = Pi(e).getCoordinates()[0], r = 0, n = i.length - 1; r < n; ++r) {
          var o = i.slice(r, r + 2),
              s = {
            feature: t,
            segment: o
          };
          this.rBush_.insert(tt(o), s);
        }
      }, e.prototype.writeGeometryCollectionGeometry_ = function (t, e) {
        for (var i = e.getGeometriesArray(), r = 0; r < i.length; ++r) {
          var n = this.SEGMENT_WRITERS_[i[r].getType()];
          n && n.call(this, t, i[r]);
        }
      }, e.prototype.writeLineStringGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length - 1; r < n; ++r) {
          var o = i.slice(r, r + 2),
              s = {
            feature: t,
            segment: o
          };
          this.rBush_.insert(tt(o), s);
        }
      }, e.prototype.writeMultiLineStringGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          for (var o = i[r], s = 0, a = o.length - 1; s < a; ++s) {
            var h = o.slice(s, s + 2),
                l = {
              feature: t,
              segment: h
            };
            this.rBush_.insert(tt(h), l);
          }
        }
      }, e.prototype.writeMultiPointGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          var o = i[r],
              s = {
            feature: t,
            segment: [o, o]
          };
          this.rBush_.insert(e.getExtent(), s);
        }
      }, e.prototype.writeMultiPolygonGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          for (var o = i[r], s = 0, a = o.length; s < a; ++s) {
            for (var h = o[s], l = 0, u = h.length - 1; l < u; ++l) {
              var p = h.slice(l, l + 2),
                  c = {
                feature: t,
                segment: p
              };
              this.rBush_.insert(tt(p), c);
            }
          }
        }
      }, e.prototype.writePointGeometry_ = function (t, e) {
        var i = e.getCoordinates(),
            r = {
          feature: t,
          segment: [i, i]
        };
        this.rBush_.insert(e.getExtent(), r);
      }, e.prototype.writePolygonGeometry_ = function (t, e) {
        for (var i = e.getCoordinates(), r = 0, n = i.length; r < n; ++r) {
          for (var o = i[r], s = 0, a = o.length - 1; s < a; ++s) {
            var h = o.slice(s, s + 2),
                l = {
              feature: t,
              segment: h
            };
            this.rBush_.insert(tt(h), l);
          }
        }
      }, e;
    }(qo),
        nd = "translatestart",
        od = "translating",
        sd = "translateend",
        ad = function (t) {
      function e(e, i, r) {
        t.call(this, e), this.features = i, this.coordinate = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(P),
        hd = function (t) {
      function e(e) {
        var i,
            r = e || {};
        if (t.call(this, r), this.lastCoordinate_ = null, this.features_ = void 0 !== r.features ? r.features : null, r.layers) {
          if ("function" == typeof r.layers) i = r.layers;else {
            var n = r.layers;

            i = function i(t) {
              return X(n, t);
            };
          }
        } else i = R;
        this.layerFilter_ = i, this.hitTolerance_ = r.hitTolerance ? r.hitTolerance : 0, this.lastFeature_ = null, v(this, G(Io.ACTIVE), this.handleActiveChanged_, this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleDownEvent = function (t) {
        if (this.lastFeature_ = this.featuresAtPixel_(t.pixel, t.map), !this.lastCoordinate_ && this.lastFeature_) {
          this.lastCoordinate_ = t.coordinate, this.handleMoveEvent(t);
          var e = this.features_ || new U([this.lastFeature_]);
          return this.dispatchEvent(new ad(nd, e, t.coordinate)), !0;
        }

        return !1;
      }, e.prototype.handleUpEvent = function (t) {
        if (this.lastCoordinate_) {
          this.lastCoordinate_ = null, this.handleMoveEvent(t);
          var e = this.features_ || new U([this.lastFeature_]);
          return this.dispatchEvent(new ad(sd, e, t.coordinate)), !0;
        }

        return !1;
      }, e.prototype.handleDragEvent = function (t) {
        if (this.lastCoordinate_) {
          var e = t.coordinate,
              i = e[0] - this.lastCoordinate_[0],
              r = e[1] - this.lastCoordinate_[1],
              n = this.features_ || new U([this.lastFeature_]);
          n.forEach(function (t) {
            var e = t.getGeometry();
            e.translate(i, r), t.setGeometry(e);
          }), this.lastCoordinate_ = e, this.dispatchEvent(new ad(od, n, e));
        }
      }, e.prototype.handleMoveEvent = function (t) {
        var e = t.map.getViewport();
        this.featuresAtPixel_(t.pixel, t.map) ? (e.classList.remove(this.lastCoordinate_ ? "ol-grab" : "ol-grabbing"), e.classList.add(this.lastCoordinate_ ? "ol-grabbing" : "ol-grab")) : e.classList.remove("ol-grab", "ol-grabbing");
      }, e.prototype.featuresAtPixel_ = function (t, e) {
        return e.forEachFeatureAtPixel(t, function (t) {
          if (!this.features_ || X(this.features_.getArray(), t)) return t;
        }.bind(this), {
          layerFilter: this.layerFilter_,
          hitTolerance: this.hitTolerance_
        });
      }, e.prototype.getHitTolerance = function () {
        return this.hitTolerance_;
      }, e.prototype.setHitTolerance = function (t) {
        this.hitTolerance_ = t;
      }, e.prototype.setMap = function (e) {
        var i = this.getMap();
        t.prototype.setMap.call(this, e), this.updateState_(i);
      }, e.prototype.handleActiveChanged_ = function () {
        this.updateState_(null);
      }, e.prototype.updateState_ = function (t) {
        var e = this.getMap(),
            i = this.getActive();
        e && i || (e = e || t) && e.getViewport().classList.remove("ol-grab", "ol-grabbing");
      }, e;
    }(qo);

    function ld(t) {
      for (var e = [], i = 0, r = t.length; i < r; ++i) {
        e.push(t[i].clone());
      }

      return e;
    }

    var ud = function (t) {
      function e(e) {
        t.call(this), this.geometries_ = e || null, this.listenGeometriesChange_();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.unlistenGeometriesChange_ = function () {
        if (this.geometries_) for (var t = 0, e = this.geometries_.length; t < e; ++t) {
          x(this.geometries_[t], M.CHANGE, this.changed, this);
        }
      }, e.prototype.listenGeometriesChange_ = function () {
        if (this.geometries_) for (var t = 0, e = this.geometries_.length; t < e; ++t) {
          v(this.geometries_[t], M.CHANGE, this.changed, this);
        }
      }, e.prototype.clone = function () {
        var t = new e(null);
        return t.setGeometries(this.geometries_), t;
      }, e.prototype.closestPointXY = function (t, e, i, r) {
        if (r < rt(this.getExtent(), t, e)) return r;

        for (var n = this.geometries_, o = 0, s = n.length; o < s; ++o) {
          r = n[o].closestPointXY(t, e, i, r);
        }

        return r;
      }, e.prototype.containsXY = function (t, e) {
        for (var i = this.geometries_, r = 0, n = i.length; r < n; ++r) {
          if (i[r].containsXY(t, e)) return !0;
        }

        return !1;
      }, e.prototype.computeExtent = function (t) {
        ut(t);

        for (var e = this.geometries_, i = 0, r = e.length; i < r; ++i) {
          ft(t, e[i].getExtent());
        }

        return t;
      }, e.prototype.getGeometries = function () {
        return ld(this.geometries_);
      }, e.prototype.getGeometriesArray = function () {
        return this.geometries_;
      }, e.prototype.getSimplifiedGeometry = function (t) {
        if (this.simplifiedGeometryRevision != this.getRevision() && (p(this.simplifiedGeometryCache), this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || 0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t < this.simplifiedGeometryMaxMinSquaredTolerance) return this;
        var i = t.toString();
        if (this.simplifiedGeometryCache.hasOwnProperty(i)) return this.simplifiedGeometryCache[i];

        for (var r = [], n = this.geometries_, o = !1, s = 0, a = n.length; s < a; ++s) {
          var h = n[s],
              l = h.getSimplifiedGeometry(t);
          r.push(l), l !== h && (o = !0);
        }

        if (o) {
          var u = new e(null);
          return u.setGeometriesArray(r), this.simplifiedGeometryCache[i] = u, u;
        }

        return this.simplifiedGeometryMaxMinSquaredTolerance = t, this;
      }, e.prototype.getType = function () {
        return Nt.GEOMETRY_COLLECTION;
      }, e.prototype.intersectsExtent = function (t) {
        for (var e = this.geometries_, i = 0, r = e.length; i < r; ++i) {
          if (e[i].intersectsExtent(t)) return !0;
        }

        return !1;
      }, e.prototype.isEmpty = function () {
        return 0 === this.geometries_.length;
      }, e.prototype.rotate = function (t, e) {
        for (var i = this.geometries_, r = 0, n = i.length; r < n; ++r) {
          i[r].rotate(t, e);
        }

        this.changed();
      }, e.prototype.scale = function (t, e, i) {
        var r = i;
        r || (r = Tt(this.getExtent()));

        for (var n = this.geometries_, o = 0, s = n.length; o < s; ++o) {
          n[o].scale(t, e, r);
        }

        this.changed();
      }, e.prototype.setGeometries = function (t) {
        this.setGeometriesArray(ld(t));
      }, e.prototype.setGeometriesArray = function (t) {
        this.unlistenGeometriesChange_(), this.geometries_ = t, this.listenGeometriesChange_(), this.changed();
      }, e.prototype.applyTransform = function (t) {
        for (var e = this.geometries_, i = 0, r = e.length; i < r; ++i) {
          e[i].applyTransform(t);
        }

        this.changed();
      }, e.prototype.translate = function (t, e) {
        for (var i = this.geometries_, r = 0, n = i.length; r < n; ++r) {
          i[r].translate(t, e);
        }

        this.changed();
      }, e.prototype.disposeInternal = function () {
        this.unlistenGeometriesChange_(), t.prototype.disposeInternal.call(this);
      }, e;
    }(Xe),
        pd = function pd() {
      this.dataProjection = null, this.defaultFeatureProjection = null;
    };

    pd.prototype.getReadOptions = function (t, e) {
      var i;
      return e && (i = {
        dataProjection: e.dataProjection ? e.dataProjection : this.readProjection(t),
        featureProjection: e.featureProjection
      }), this.adaptOptions(i);
    }, pd.prototype.adaptOptions = function (t) {
      return u({
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection
      }, t);
    }, pd.prototype.getLastExtent = function () {
      return null;
    }, pd.prototype.getType = function () {
      return r();
    }, pd.prototype.readFeature = function (t, e) {
      return r();
    }, pd.prototype.readFeatures = function (t, e) {
      return r();
    }, pd.prototype.readGeometry = function (t, e) {
      return r();
    }, pd.prototype.readProjection = function (t) {
      return r();
    }, pd.prototype.writeFeature = function (t, e) {
      return r();
    }, pd.prototype.writeFeatures = function (t, e) {
      return r();
    }, pd.prototype.writeGeometry = function (t, e) {
      return r();
    };
    var cd = pd;

    function dd(t, e, i) {
      var r,
          n = i ? Ee(i.featureProjection) : null,
          o = i ? Ee(i.dataProjection) : null;

      if (r = n && o && !Ie(n, o) ? Array.isArray(t) ? be(t, o, n) : (e ? t.clone() : t).transform(e ? n : o, e ? o : n) : t, e && i && void 0 !== i.decimals && !Array.isArray(r)) {
        var s = Math.pow(10, i.decimals);
        r === t && (r = t.clone()), r.applyTransform(function (t) {
          for (var e = 0, i = t.length; e < i; ++e) {
            t[e] = Math.round(t[e] * s) / s;
          }

          return t;
        });
      }

      return r;
    }

    function fd(t) {
      if ("string" == typeof t) {
        var e = JSON.parse(t);
        return e || null;
      }

      return null !== t ? t : null;
    }

    var _d = function (t) {
      function e() {
        t.call(this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getType = function () {
        return Hl.JSON;
      }, e.prototype.readFeature = function (t, e) {
        return this.readFeatureFromObject(fd(t), this.getReadOptions(t, e));
      }, e.prototype.readFeatures = function (t, e) {
        return this.readFeaturesFromObject(fd(t), this.getReadOptions(t, e));
      }, e.prototype.readFeatureFromObject = function (t, e) {
        return r();
      }, e.prototype.readFeaturesFromObject = function (t, e) {
        return r();
      }, e.prototype.readGeometry = function (t, e) {
        return this.readGeometryFromObject(fd(t), this.getReadOptions(t, e));
      }, e.prototype.readGeometryFromObject = function (t, e) {
        return r();
      }, e.prototype.readProjection = function (t) {
        return this.readProjectionFromObject(fd(t));
      }, e.prototype.readProjectionFromObject = function (t) {
        return r();
      }, e.prototype.writeFeature = function (t, e) {
        return JSON.stringify(this.writeFeatureObject(t, e));
      }, e.prototype.writeFeatureObject = function (t, e) {
        return r();
      }, e.prototype.writeFeatures = function (t, e) {
        return JSON.stringify(this.writeFeaturesObject(t, e));
      }, e.prototype.writeFeaturesObject = function (t, e) {
        return r();
      }, e.prototype.writeGeometry = function (t, e) {
        return JSON.stringify(this.writeGeometryObject(t, e));
      }, e.prototype.writeGeometryObject = function (t, e) {
        return r();
      }, e;
    }(cd),
        gd = {};

    gd[Nt.POINT] = function (t) {
      var e;
      e = void 0 !== t.m && void 0 !== t.z ? new ci([t.x, t.y, t.z, t.m], At.XYZM) : void 0 !== t.z ? new ci([t.x, t.y, t.z], At.XYZ) : void 0 !== t.m ? new ci([t.x, t.y, t.m], At.XYM) : new ci([t.x, t.y]);
      return e;
    }, gd[Nt.LINE_STRING] = function (t) {
      var e = md(t);
      return new hr(t.paths[0], e);
    }, gd[Nt.POLYGON] = function (t) {
      var e = md(t);
      return new Ii(t.rings, e);
    }, gd[Nt.MULTI_POINT] = function (t) {
      var e = md(t);
      return new bc(t.points, e);
    }, gd[Nt.MULTI_LINE_STRING] = function (t) {
      var e = md(t);
      return new Pc(t.paths, e);
    }, gd[Nt.MULTI_POLYGON] = function (t) {
      var e = md(t);
      return new Fc(t.rings, e);
    };
    var yd = {};

    function vd(t, e) {
      if (!t) return null;
      var i;
      if ("number" == typeof t.x && "number" == typeof t.y) i = Nt.POINT;else if (t.points) i = Nt.MULTI_POINT;else if (t.paths) {
        i = 1 === t.paths.length ? Nt.LINE_STRING : Nt.MULTI_LINE_STRING;
      } else if (t.rings) {
        var r = t,
            n = md(r),
            o = function (t, e) {
          var i,
              r,
              n = [],
              o = [],
              s = [];

          for (i = 0, r = t.length; i < r; ++i) {
            n.length = 0, ei(n, 0, t[i], e.length);
            var a = Si(n, 0, n.length, e.length);
            a ? o.push([t[i]]) : s.push(t[i]);
          }

          for (; s.length;) {
            var h = s.shift(),
                l = !1;

            for (i = o.length - 1; i >= 0; i--) {
              var u = o[i][0],
                  p = ot(new pi(u).getExtent(), new pi(h).getExtent());

              if (p) {
                o[i].push(h), l = !0;
                break;
              }
            }

            l || o.push([h.reverse()]);
          }

          return o;
        }(r.rings, n);

        1 === o.length ? (i = Nt.POLYGON, t.rings = o[0]) : (i = Nt.MULTI_POLYGON, t.rings = o);
      }
      return dd((0, gd[i])(t), !1, e);
    }

    function md(t) {
      var e = At.XY;
      return !0 === t.hasZ && !0 === t.hasM ? e = At.XYZM : !0 === t.hasZ ? e = At.XYZ : !0 === t.hasM && (e = At.XYM), e;
    }

    function xd(t) {
      var e = t.getLayout();
      return {
        hasZ: e === At.XYZ || e === At.XYZM,
        hasM: e === At.XYM || e === At.XYZM
      };
    }

    function Ed(t, e) {
      return (0, yd[t.getType()])(dd(t, !0, e), e);
    }

    yd[Nt.POINT] = function (t, e) {
      var i,
          r = t.getCoordinates(),
          n = t.getLayout();
      n === At.XYZ ? i = {
        x: r[0],
        y: r[1],
        z: r[2]
      } : n === At.XYM ? i = {
        x: r[0],
        y: r[1],
        m: r[2]
      } : n === At.XYZM ? i = {
        x: r[0],
        y: r[1],
        z: r[2],
        m: r[3]
      } : n === At.XY ? i = {
        x: r[0],
        y: r[1]
      } : Y(!1, 34);
      return i;
    }, yd[Nt.LINE_STRING] = function (t, e) {
      var i = t,
          r = xd(i);
      return {
        hasZ: r.hasZ,
        hasM: r.hasM,
        paths: [i.getCoordinates()]
      };
    }, yd[Nt.POLYGON] = function (t, e) {
      var i = t,
          r = xd(i);
      return {
        hasZ: r.hasZ,
        hasM: r.hasM,
        rings: i.getCoordinates(!1)
      };
    }, yd[Nt.MULTI_POINT] = function (t, e) {
      var i = t,
          r = xd(i);
      return {
        hasZ: r.hasZ,
        hasM: r.hasM,
        points: i.getCoordinates()
      };
    }, yd[Nt.MULTI_LINE_STRING] = function (t, e) {
      var i = t,
          r = xd(i);
      return {
        hasZ: r.hasZ,
        hasM: r.hasM,
        paths: i.getCoordinates()
      };
    }, yd[Nt.MULTI_POLYGON] = function (t, e) {
      for (var i = xd(t), r = t.getCoordinates(!1), n = [], o = 0; o < r.length; o++) {
        for (var s = r[o].length - 1; s >= 0; s--) {
          n.push(r[o][s]);
        }
      }

      return {
        hasZ: i.hasZ,
        hasM: i.hasM,
        rings: n
      };
    };

    var Sd = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this), this.geometryName_ = i.geometryName;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeatureFromObject = function (t, e) {
        var i = t,
            r = vd(i.geometry, e),
            n = new B();
        return this.geometryName_ && n.setGeometryName(this.geometryName_), n.setGeometry(r), e && e.idField && i.attributes[e.idField] && n.setId(i.attributes[e.idField]), i.attributes && n.setProperties(i.attributes), n;
      }, e.prototype.readFeaturesFromObject = function (t, e) {
        var i = e || {};

        if (t.features) {
          var r = [],
              n = t.features;
          i.idField = t.objectIdFieldName;

          for (var o = 0, s = n.length; o < s; ++o) {
            r.push(this.readFeatureFromObject(n[o], i));
          }

          return r;
        }

        return [this.readFeatureFromObject(t, i)];
      }, e.prototype.readGeometryFromObject = function (t, e) {
        return vd(t, e);
      }, e.prototype.readProjectionFromObject = function (t) {
        return t.spatialReference && void 0 !== t.spatialReference.wkid ? Ee("EPSG:" + t.spatialReference.wkid) : null;
      }, e.prototype.writeGeometryObject = function (t, e) {
        return Ed(t, this.adaptOptions(e));
      }, e.prototype.writeFeatureObject = function (t, e) {
        e = this.adaptOptions(e);
        var i = {},
            r = t.getGeometry();
        r && (i.geometry = Ed(r, e), e && e.featureProjection && (i.geometry.spatialReference = {
          wkid: Number(Ee(e.featureProjection).getCode().split(":").pop())
        }));
        var n = t.getProperties();
        return delete n[t.getGeometryName()], d(n) ? i.attributes = {} : i.attributes = n, i;
      }, e.prototype.writeFeaturesObject = function (t, e) {
        e = this.adaptOptions(e);

        for (var i = [], r = 0, n = t.length; r < n; ++r) {
          i.push(this.writeFeatureObject(t[r], e));
        }

        return {
          features: i
        };
      }, e;
    }(_d),
        Td = function (t) {
      function e() {
        t.call(this), this.xmlSerializer_ = new XMLSerializer();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getType = function () {
        return Hl.XML;
      }, e.prototype.readFeature = function (t, e) {
        if (t) {
          if ("string" == typeof t) {
            var i = ru(t);
            return this.readFeatureFromDocument(i, e);
          }

          return iu(t) ? this.readFeatureFromDocument(t, e) : this.readFeatureFromNode(t, e);
        }

        return null;
      }, e.prototype.readFeatureFromDocument = function (t, e) {
        var i = this.readFeaturesFromDocument(t, e);
        return i.length > 0 ? i[0] : null;
      }, e.prototype.readFeatureFromNode = function (t, e) {
        return null;
      }, e.prototype.readFeatures = function (t, e) {
        if (t) {
          if ("string" == typeof t) {
            var i = ru(t);
            return this.readFeaturesFromDocument(i, e);
          }

          return iu(t) ? this.readFeaturesFromDocument(t, e) : this.readFeaturesFromNode(t, e);
        }

        return [];
      }, e.prototype.readFeaturesFromDocument = function (t, e) {
        for (var i = [], r = t.firstChild; r; r = r.nextSibling) {
          r.nodeType == Node.ELEMENT_NODE && K(i, this.readFeaturesFromNode(r, e));
        }

        return i;
      }, e.prototype.readFeaturesFromNode = function (t, e) {
        return r();
      }, e.prototype.readGeometry = function (t, e) {
        if (t) {
          if ("string" == typeof t) {
            var i = ru(t);
            return this.readGeometryFromDocument(i, e);
          }

          return iu(t) ? this.readGeometryFromDocument(t, e) : this.readGeometryFromNode(t, e);
        }

        return null;
      }, e.prototype.readGeometryFromDocument = function (t, e) {
        return null;
      }, e.prototype.readGeometryFromNode = function (t, e) {
        return null;
      }, e.prototype.readProjection = function (t) {
        if (t) {
          if ("string" == typeof t) {
            var e = ru(t);
            return this.readProjectionFromDocument(e);
          }

          return iu(t) ? this.readProjectionFromDocument(t) : this.readProjectionFromNode(t);
        }

        return null;
      }, e.prototype.readProjectionFromDocument = function (t) {
        return this.dataProjection;
      }, e.prototype.readProjectionFromNode = function (t) {
        return this.dataProjection;
      }, e.prototype.writeFeature = function (t, e) {
        var i = this.writeFeatureNode(t, e);
        return this.xmlSerializer_.serializeToString(i);
      }, e.prototype.writeFeatureNode = function (t, e) {
        return null;
      }, e.prototype.writeFeatures = function (t, e) {
        var i = this.writeFeaturesNode(t, e);
        return this.xmlSerializer_.serializeToString(i);
      }, e.prototype.writeFeaturesNode = function (t, e) {
        return null;
      }, e.prototype.writeGeometry = function (t, e) {
        var i = this.writeGeometryNode(t, e);
        return this.xmlSerializer_.serializeToString(i);
      }, e.prototype.writeGeometryNode = function (t, e) {
        return null;
      }, e;
    }(cd),
        Cd = "http://www.opengis.net/gml",
        Rd = /^[\s\xa0]*$/,
        wd = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.featureType = i.featureType, this.featureNS = i.featureNS, this.srsName = i.srsName, this.schemaLocation = "", this.FEATURE_COLLECTION_PARSERS = {}, this.FEATURE_COLLECTION_PARSERS[this.namespace] = {
          featureMember: ou(this.readFeaturesInternal),
          featureMembers: su(this.readFeaturesInternal)
        };
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeaturesInternal = function (t, e) {
        var i = t.localName,
            r = null;
        if ("FeatureCollection" == i) r = gu([], this.FEATURE_COLLECTION_PARSERS, t, e, this);else if ("featureMembers" == i || "featureMember" == i) {
          var n = e[0],
              o = n.featureType,
              s = n.featureNS;

          if (!o && t.childNodes) {
            o = [], s = {};

            for (var a = 0, h = t.childNodes.length; a < h; ++a) {
              var l = t.childNodes[a];

              if (1 === l.nodeType) {
                var u = l.nodeName.split(":").pop();

                if (-1 === o.indexOf(u)) {
                  var p = "",
                      c = 0,
                      d = l.namespaceURI;

                  for (var f in s) {
                    if (s[f] === d) {
                      p = f;
                      break;
                    }

                    ++c;
                  }

                  p || (s[p = "p" + c] = d), o.push(p + ":" + u);
                }
              }
            }

            "featureMember" != i && (n.featureType = o, n.featureNS = s);
          }

          if ("string" == typeof s) {
            var _ = s;
            (s = {}).p0 = _;
          }

          var g = {},
              y = Array.isArray(o) ? o : [o];

          for (var v in s) {
            for (var m = {}, x = 0, E = y.length; x < E; ++x) {
              (-1 === y[x].indexOf(":") ? "p0" : y[x].split(":")[0]) === v && (m[y[x].split(":").pop()] = "featureMembers" == i ? ou(this.readFeatureElement, this) : su(this.readFeatureElement, this));
            }

            g[s[v]] = m;
          }

          r = gu("featureMember" == i ? void 0 : [], g, t, e);
        }
        return null === r && (r = []), r;
      }, e.prototype.readGeometryElement = function (t, e) {
        var i = e[0];
        i.srsName = t.firstElementChild.getAttribute("srsName"), i.srsDimension = t.firstElementChild.getAttribute("srsDimension");
        var r = gu(null, this.GEOMETRY_PARSERS, t, e, this);
        return r ? dd(r, !1, i) : void 0;
      }, e.prototype.readFeatureElementInternal = function (t, e, i) {
        for (var r, n = {}, o = t.firstElementChild; o; o = o.nextElementSibling) {
          var s = void 0,
              a = o.localName;
          0 === o.childNodes.length || 1 === o.childNodes.length && (3 === o.firstChild.nodeType || 4 === o.firstChild.nodeType) ? (s = eu(o, !1), Rd.test(s) && (s = void 0)) : (i && (s = this.readGeometryElement(o, e)), s ? "boundedBy" !== a && (r = a) : s = this.readFeatureElementInternal(o, e, !1)), n[a] ? (n[a] instanceof Array || (n[a] = [n[a]]), n[a].push(s)) : n[a] = s;
          var h = o.attributes.length;

          if (h > 0) {
            n[a] = {
              _content_: n[a]
            };

            for (var l = 0; l < h; l++) {
              var u = o.attributes[l].name;
              n[a][u] = o.attributes[l].value;
            }
          }
        }

        if (i) {
          var p = new B(n);
          r && p.setGeometryName(r);

          var c = t.getAttribute("fid") || function (t, e, i) {
            return t.getAttributeNS(e, i) || "";
          }(t, this.namespace, "id");

          return c && p.setId(c), p;
        }

        return n;
      }, e.prototype.readFeatureElement = function (t, e) {
        return this.readFeatureElementInternal(t, e, !0);
      }, e.prototype.readPoint = function (t, e) {
        var i = this.readFlatCoordinatesFromNode_(t, e);
        if (i) return new ci(i, At.XYZ);
      }, e.prototype.readMultiPoint = function (t, e) {
        var i = gu([], this.MULTIPOINT_PARSERS_, t, e, this);
        return i ? new bc(i) : void 0;
      }, e.prototype.readMultiLineString = function (t, e) {
        var i = gu([], this.MULTILINESTRING_PARSERS_, t, e, this);
        if (i) return new Pc(i);
      }, e.prototype.readMultiPolygon = function (t, e) {
        var i = gu([], this.MULTIPOLYGON_PARSERS_, t, e, this);
        if (i) return new Fc(i);
      }, e.prototype.pointMemberParser_ = function (t, e) {
        _u(this.POINTMEMBER_PARSERS_, t, e, this);
      }, e.prototype.lineStringMemberParser_ = function (t, e) {
        _u(this.LINESTRINGMEMBER_PARSERS_, t, e, this);
      }, e.prototype.polygonMemberParser_ = function (t, e) {
        _u(this.POLYGONMEMBER_PARSERS_, t, e, this);
      }, e.prototype.readLineString = function (t, e) {
        var i = this.readFlatCoordinatesFromNode_(t, e);
        return i ? new hr(i, At.XYZ) : void 0;
      }, e.prototype.readFlatLinearRing_ = function (t, e) {
        var i = gu(null, this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this);
        return i || void 0;
      }, e.prototype.readLinearRing = function (t, e) {
        var i = this.readFlatCoordinatesFromNode_(t, e);
        if (i) return new pi(i, At.XYZ);
      }, e.prototype.readPolygon = function (t, e) {
        var i = gu([null], this.FLAT_LINEAR_RINGS_PARSERS, t, e, this);

        if (i && i[0]) {
          var r,
              n,
              o = i[0],
              s = [o.length];

          for (r = 1, n = i.length; r < n; ++r) {
            K(o, i[r]), s.push(o.length);
          }

          return new Ii(o, At.XYZ, s);
        }
      }, e.prototype.readFlatCoordinatesFromNode_ = function (t, e) {
        return gu(null, this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this);
      }, e.prototype.readGeometryFromNode = function (t, e) {
        var i = this.readGeometryElement(t, [this.getReadOptions(t, e || {})]);
        return i || null;
      }, e.prototype.readFeaturesFromNode = function (t, e) {
        var i = {
          featureType: this.featureType,
          featureNS: this.featureNS
        };
        return e && u(i, this.getReadOptions(t, e)), this.readFeaturesInternal(t, [i]) || [];
      }, e.prototype.readProjectionFromNode = function (t) {
        return Ee(this.srsName ? this.srsName : t.firstElementChild.getAttribute("srsName"));
      }, e;
    }(Td);

    wd.prototype.namespace = Cd, wd.prototype.FLAT_LINEAR_RINGS_PARSERS = {
      "http://www.opengis.net/gml": {}
    }, wd.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = {
      "http://www.opengis.net/gml": {}
    }, wd.prototype.GEOMETRY_PARSERS = {
      "http://www.opengis.net/gml": {}
    }, wd.prototype.MULTIPOINT_PARSERS_ = {
      "http://www.opengis.net/gml": {
        pointMember: ou(wd.prototype.pointMemberParser_),
        pointMembers: ou(wd.prototype.pointMemberParser_)
      }
    }, wd.prototype.MULTILINESTRING_PARSERS_ = {
      "http://www.opengis.net/gml": {
        lineStringMember: ou(wd.prototype.lineStringMemberParser_),
        lineStringMembers: ou(wd.prototype.lineStringMemberParser_)
      }
    }, wd.prototype.MULTIPOLYGON_PARSERS_ = {
      "http://www.opengis.net/gml": {
        polygonMember: ou(wd.prototype.polygonMemberParser_),
        polygonMembers: ou(wd.prototype.polygonMemberParser_)
      }
    }, wd.prototype.POINTMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml": {
        Point: ou(wd.prototype.readFlatCoordinatesFromNode_)
      }
    }, wd.prototype.LINESTRINGMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml": {
        LineString: ou(wd.prototype.readLineString)
      }
    }, wd.prototype.POLYGONMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml": {
        Polygon: ou(wd.prototype.readPolygon)
      }
    }, wd.prototype.RING_PARSERS = {
      "http://www.opengis.net/gml": {
        LinearRing: su(wd.prototype.readFlatLinearRing_)
      }
    };
    var Id = wd;

    function Ld(t) {
      return Od(eu(t, !1));
    }

    function Od(t) {
      var e = /^\s*(true|1)|(false|0)\s*$/.exec(t);
      return e ? void 0 !== e[1] || !1 : void 0;
    }

    function Pd(t) {
      var e = eu(t, !1),
          i = Date.parse(e);
      return isNaN(i) ? void 0 : i / 1e3;
    }

    function bd(t) {
      return Md(eu(t, !1));
    }

    function Md(t) {
      var e = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);
      return e ? parseFloat(e[1]) : void 0;
    }

    function Fd(t) {
      return Ad(eu(t, !1));
    }

    function Ad(t) {
      var e = /^\s*(\d+)\s*$/.exec(t);
      return e ? parseInt(e[1], 10) : void 0;
    }

    function Nd(t) {
      return eu(t, !1).trim();
    }

    function Gd(t, e) {
      jd(t, e ? "1" : "0");
    }

    function Dd(t, e) {
      var i = e.toPrecision();
      t.appendChild(Ql.createTextNode(i));
    }

    function kd(t, e) {
      var i = e.toString();
      t.appendChild(Ql.createTextNode(i));
    }

    function jd(t, e) {
      t.appendChild(Ql.createTextNode(e));
    }

    var Ud = Cd + " http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",
        Yd = {
      MultiLineString: "lineStringMember",
      MultiCurve: "curveMember",
      MultiPolygon: "polygonMember",
      MultiSurface: "surfaceMember"
    },
        Bd = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.surface_ = void 0 !== i.surface && i.surface, this.curve_ = void 0 !== i.curve && i.curve, this.multiCurve_ = void 0 === i.multiCurve || i.multiCurve, this.multiSurface_ = void 0 === i.multiSurface || i.multiSurface, this.schemaLocation = i.schemaLocation ? i.schemaLocation : Ud, this.hasZ = void 0 !== i.hasZ && i.hasZ;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readMultiCurve_ = function (t, e) {
        var i = gu([], this.MULTICURVE_PARSERS_, t, e, this);
        return i ? new Pc(i) : void 0;
      }, e.prototype.readMultiSurface_ = function (t, e) {
        var i = gu([], this.MULTISURFACE_PARSERS_, t, e, this);
        if (i) return new Fc(i);
      }, e.prototype.curveMemberParser_ = function (t, e) {
        _u(this.CURVEMEMBER_PARSERS_, t, e, this);
      }, e.prototype.surfaceMemberParser_ = function (t, e) {
        _u(this.SURFACEMEMBER_PARSERS_, t, e, this);
      }, e.prototype.readPatch_ = function (t, e) {
        return gu([null], this.PATCHES_PARSERS_, t, e, this);
      }, e.prototype.readSegment_ = function (t, e) {
        return gu([null], this.SEGMENTS_PARSERS_, t, e, this);
      }, e.prototype.readPolygonPatch_ = function (t, e) {
        return gu([null], this.FLAT_LINEAR_RINGS_PARSERS, t, e, this);
      }, e.prototype.readLineStringSegment_ = function (t, e) {
        return gu([null], this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this);
      }, e.prototype.interiorParser_ = function (t, e) {
        var i = gu(void 0, this.RING_PARSERS, t, e, this);
        i && e[e.length - 1].push(i);
      }, e.prototype.exteriorParser_ = function (t, e) {
        var i = gu(void 0, this.RING_PARSERS, t, e, this);
        i && (e[e.length - 1][0] = i);
      }, e.prototype.readSurface_ = function (t, e) {
        var i = gu([null], this.SURFACE_PARSERS_, t, e, this);

        if (i && i[0]) {
          var r,
              n,
              o = i[0],
              s = [o.length];

          for (r = 1, n = i.length; r < n; ++r) {
            K(o, i[r]), s.push(o.length);
          }

          return new Ii(o, At.XYZ, s);
        }
      }, e.prototype.readCurve_ = function (t, e) {
        var i = gu([null], this.CURVE_PARSERS_, t, e, this);
        return i ? new hr(i, At.XYZ) : void 0;
      }, e.prototype.readEnvelope_ = function (t, e) {
        var i = gu([null], this.ENVELOPE_PARSERS_, t, e, this);
        return lt(i[1][0], i[1][1], i[2][0], i[2][1]);
      }, e.prototype.readFlatPos_ = function (t, e) {
        for (var i, r = eu(t, !1), n = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, o = []; i = n.exec(r);) {
          o.push(parseFloat(i[1])), r = r.substr(i[0].length);
        }

        if ("" === r) {
          var s,
              a,
              h = e[0].srsName,
              l = "enu";
          if (h) l = Ee(h).getAxisOrientation();
          if ("neu" === l) for (s = 0, a = o.length; s < a; s += 3) {
            var u = o[s],
                p = o[s + 1];
            o[s] = p, o[s + 1] = u;
          }
          var c = o.length;
          if (2 == c && o.push(0), 0 !== c) return o;
        }
      }, e.prototype.readFlatPosList_ = function (t, e) {
        var i = eu(t, !1).replace(/^\s*|\s*$/g, ""),
            r = e[0],
            n = r.srsName,
            o = r.srsDimension,
            s = "enu";
        n && (s = Ee(n).getAxisOrientation());
        var a,
            h,
            l,
            u = i.split(/\s+/),
            p = 2;
        t.getAttribute("srsDimension") ? p = Ad(t.getAttribute("srsDimension")) : t.getAttribute("dimension") ? p = Ad(t.getAttribute("dimension")) : t.parentNode.getAttribute("srsDimension") ? p = Ad(t.parentNode.getAttribute("srsDimension")) : o && (p = Ad(o));

        for (var c = [], d = 0, f = u.length; d < f; d += p) {
          a = parseFloat(u[d]), h = parseFloat(u[d + 1]), l = 3 === p ? parseFloat(u[d + 2]) : 0, "en" === s.substr(0, 2) ? c.push(a, h, l) : c.push(h, a, l);
        }

        return c;
      }, e.prototype.writePos_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = n ? "3" : "2";
        t.setAttribute("srsDimension", o);
        var s = r.srsName,
            a = "enu";
        s && (a = Ee(s).getAxisOrientation());
        var h,
            l = e.getCoordinates();
        (h = "en" === a.substr(0, 2) ? l[0] + " " + l[1] : l[1] + " " + l[0], n) && (h += " " + (l[2] || 0));
        jd(t, h);
      }, e.prototype.getCoords_ = function (t, e, i) {
        var r = "enu";
        e && (r = Ee(e).getAxisOrientation());
        var n = "en" === r.substr(0, 2) ? t[0] + " " + t[1] : t[1] + " " + t[0];
        i && (n += " " + (t[2] || 0));
        return n;
      }, e.prototype.writePosList_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = n ? "3" : "2";
        t.setAttribute("srsDimension", o);

        for (var s, a = r.srsName, h = e.getCoordinates(), l = h.length, u = new Array(l), p = 0; p < l; ++p) {
          s = h[p], u[p] = this.getCoords_(s, a, n);
        }

        jd(t, u.join(" "));
      }, e.prototype.writePoint_ = function (t, e, i) {
        var r = i[i.length - 1].srsName;
        r && t.setAttribute("srsName", r);
        var n = tu(t.namespaceURI, "pos");
        t.appendChild(n), this.writePos_(n, e, i);
      }, e.prototype.writeEnvelope = function (t, e, i) {
        var r = i[i.length - 1].srsName;
        r && t.setAttribute("srsName", r);
        var n = [e[0] + " " + e[1], e[2] + " " + e[3]];
        vu({
          node: t
        }, this.ENVELOPE_SERIALIZERS_, cu, n, i, ["lowerCorner", "upperCorner"], this);
      }, e.prototype.writeLinearRing_ = function (t, e, i) {
        var r = i[i.length - 1].srsName;
        r && t.setAttribute("srsName", r);
        var n = tu(t.namespaceURI, "posList");
        t.appendChild(n), this.writePosList_(n, e, i);
      }, e.prototype.RING_NODE_FACTORY_ = function (t, e, i) {
        var r = e[e.length - 1],
            n = r.node,
            o = r.exteriorWritten;
        return void 0 === o && (r.exteriorWritten = !0), tu(n.namespaceURI, void 0 !== o ? "interior" : "exterior");
      }, e.prototype.writeSurfaceOrPolygon_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName;

        if ("PolygonPatch" !== t.nodeName && o && t.setAttribute("srsName", o), "Polygon" === t.nodeName || "PolygonPatch" === t.nodeName) {
          var s = e.getLinearRings();
          vu({
            node: t,
            hasZ: n,
            srsName: o
          }, this.RING_SERIALIZERS_, this.RING_NODE_FACTORY_, s, i, void 0, this);
        } else if ("Surface" === t.nodeName) {
          var a = tu(t.namespaceURI, "patches");
          t.appendChild(a), this.writeSurfacePatches_(a, e, i);
        }
      }, e.prototype.writeCurveOrLineString_ = function (t, e, i) {
        var r = i[i.length - 1].srsName;

        if ("LineStringSegment" !== t.nodeName && r && t.setAttribute("srsName", r), "LineString" === t.nodeName || "LineStringSegment" === t.nodeName) {
          var n = tu(t.namespaceURI, "posList");
          t.appendChild(n), this.writePosList_(n, e, i);
        } else if ("Curve" === t.nodeName) {
          var o = tu(t.namespaceURI, "segments");
          t.appendChild(o), this.writeCurveSegments_(o, e, i);
        }
      }, e.prototype.writeMultiSurfaceOrPolygon_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName,
            s = r.surface;
        o && t.setAttribute("srsName", o);
        var a = e.getPolygons();
        vu({
          node: t,
          hasZ: n,
          srsName: o,
          surface: s
        }, this.SURFACEORPOLYGONMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, a, i, void 0, this);
      }, e.prototype.writeMultiPoint_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.srsName,
            o = r.hasZ;
        n && t.setAttribute("srsName", n);
        var s = e.getPoints();
        vu({
          node: t,
          hasZ: o,
          srsName: n
        }, this.POINTMEMBER_SERIALIZERS_, pu("pointMember"), s, i, void 0, this);
      }, e.prototype.writeMultiCurveOrLineString_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName,
            s = r.curve;
        o && t.setAttribute("srsName", o);
        var a = e.getLineStrings();
        vu({
          node: t,
          hasZ: n,
          srsName: o,
          curve: s
        }, this.LINESTRINGORCURVEMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, a, i, void 0, this);
      }, e.prototype.writeRing_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "LinearRing");
        t.appendChild(r), this.writeLinearRing_(r, e, i);
      }, e.prototype.writeSurfaceOrPolygonMember_ = function (t, e, i) {
        var r = this.GEOMETRY_NODE_FACTORY_(e, i);
        r && (t.appendChild(r), this.writeSurfaceOrPolygon_(r, e, i));
      }, e.prototype.writePointMember_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "Point");
        t.appendChild(r), this.writePoint_(r, e, i);
      }, e.prototype.writeLineStringOrCurveMember_ = function (t, e, i) {
        var r = this.GEOMETRY_NODE_FACTORY_(e, i);
        r && (t.appendChild(r), this.writeCurveOrLineString_(r, e, i));
      }, e.prototype.writeSurfacePatches_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "PolygonPatch");
        t.appendChild(r), this.writeSurfaceOrPolygon_(r, e, i);
      }, e.prototype.writeCurveSegments_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "LineStringSegment");
        t.appendChild(r), this.writeCurveOrLineString_(r, e, i);
      }, e.prototype.writeGeometryElement = function (t, e, i) {
        var r,
            n = i[i.length - 1],
            o = u({}, n);
        o.node = t, r = Array.isArray(e) ? n.dataProjection ? be(e, n.featureProjection, n.dataProjection) : e : dd(e, !0, n), vu(o, this.GEOMETRY_SERIALIZERS_, this.GEOMETRY_NODE_FACTORY_, [r], i, void 0, this);
      }, e.prototype.writeFeatureElement = function (t, e, i) {
        var r = e.getId();
        r && t.setAttribute("fid", r);
        var n = i[i.length - 1],
            o = n.featureNS,
            s = e.getGeometryName();
        n.serializers || (n.serializers = {}, n.serializers[o] = {});
        var a = e.getProperties(),
            h = [],
            l = [];

        for (var p in a) {
          var c = a[p];
          null !== c && (h.push(p), l.push(c), p == s || "function" == typeof c.getSimplifiedGeometry ? p in n.serializers[o] || (n.serializers[o][p] = lu(this.writeGeometryElement, this)) : p in n.serializers[o] || (n.serializers[o][p] = lu(jd)));
        }

        var d = u({}, n);
        d.node = t, vu(d, n.serializers, pu(void 0, o), l, i, h);
      }, e.prototype.writeFeatureMembers_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.featureType,
            o = r.featureNS,
            s = {};
        s[o] = {}, s[o][n] = lu(this.writeFeatureElement, this);
        var a = u({}, r);
        a.node = t, vu(a, s, pu(n, o), e, i);
      }, e.prototype.MULTIGEOMETRY_MEMBER_NODE_FACTORY_ = function (t, e, i) {
        var r = e[e.length - 1].node;
        return tu(this.namespace, Yd[r.nodeName]);
      }, e.prototype.GEOMETRY_NODE_FACTORY_ = function (t, e, i) {
        var r,
            n = e[e.length - 1],
            o = n.multiSurface,
            s = n.surface,
            a = n.curve,
            h = n.multiCurve;
        return Array.isArray(t) ? r = "Envelope" : "MultiPolygon" === (r = t.getType()) && !0 === o ? r = "MultiSurface" : "Polygon" === r && !0 === s ? r = "Surface" : "LineString" === r && !0 === a ? r = "Curve" : "MultiLineString" === r && !0 === h && (r = "MultiCurve"), tu(this.namespace, r);
      }, e.prototype.writeGeometryNode = function (t, e) {
        e = this.adaptOptions(e);
        var i = tu(this.namespace, "geom"),
            r = {
          node: i,
          hasZ: this.hasZ,
          srsName: this.srsName,
          curve: this.curve_,
          surface: this.surface_,
          multiSurface: this.multiSurface_,
          multiCurve: this.multiCurve_
        };
        return e && u(r, e), this.writeGeometryElement(i, t, [r]), i;
      }, e.prototype.writeFeaturesNode = function (t, e) {
        e = this.adaptOptions(e);
        var i = tu(this.namespace, "featureMembers");
        i.setAttributeNS($l, "xsi:schemaLocation", this.schemaLocation);
        var r = {
          srsName: this.srsName,
          hasZ: this.hasZ,
          curve: this.curve_,
          surface: this.surface_,
          multiSurface: this.multiSurface_,
          multiCurve: this.multiCurve_,
          featureNS: this.featureNS,
          featureType: this.featureType
        };
        return e && u(r, e), this.writeFeatureMembers_(i, t, [r]), i;
      }, e;
    }(Id);

    Bd.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = {
      "http://www.opengis.net/gml": {
        pos: su(Bd.prototype.readFlatPos_),
        posList: su(Bd.prototype.readFlatPosList_)
      }
    }, Bd.prototype.FLAT_LINEAR_RINGS_PARSERS = {
      "http://www.opengis.net/gml": {
        interior: Bd.prototype.interiorParser_,
        exterior: Bd.prototype.exteriorParser_
      }
    }, Bd.prototype.GEOMETRY_PARSERS = {
      "http://www.opengis.net/gml": {
        Point: su(Id.prototype.readPoint),
        MultiPoint: su(Id.prototype.readMultiPoint),
        LineString: su(Id.prototype.readLineString),
        MultiLineString: su(Id.prototype.readMultiLineString),
        LinearRing: su(Id.prototype.readLinearRing),
        Polygon: su(Id.prototype.readPolygon),
        MultiPolygon: su(Id.prototype.readMultiPolygon),
        Surface: su(Bd.prototype.readSurface_),
        MultiSurface: su(Bd.prototype.readMultiSurface_),
        Curve: su(Bd.prototype.readCurve_),
        MultiCurve: su(Bd.prototype.readMultiCurve_),
        Envelope: su(Bd.prototype.readEnvelope_)
      }
    }, Bd.prototype.MULTICURVE_PARSERS_ = {
      "http://www.opengis.net/gml": {
        curveMember: ou(Bd.prototype.curveMemberParser_),
        curveMembers: ou(Bd.prototype.curveMemberParser_)
      }
    }, Bd.prototype.MULTISURFACE_PARSERS_ = {
      "http://www.opengis.net/gml": {
        surfaceMember: ou(Bd.prototype.surfaceMemberParser_),
        surfaceMembers: ou(Bd.prototype.surfaceMemberParser_)
      }
    }, Bd.prototype.CURVEMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml": {
        LineString: ou(Id.prototype.readLineString),
        Curve: ou(Bd.prototype.readCurve_)
      }
    }, Bd.prototype.SURFACEMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml": {
        Polygon: ou(Id.prototype.readPolygon),
        Surface: ou(Bd.prototype.readSurface_)
      }
    }, Bd.prototype.SURFACE_PARSERS_ = {
      "http://www.opengis.net/gml": {
        patches: su(Bd.prototype.readPatch_)
      }
    }, Bd.prototype.CURVE_PARSERS_ = {
      "http://www.opengis.net/gml": {
        segments: su(Bd.prototype.readSegment_)
      }
    }, Bd.prototype.ENVELOPE_PARSERS_ = {
      "http://www.opengis.net/gml": {
        lowerCorner: ou(Bd.prototype.readFlatPosList_),
        upperCorner: ou(Bd.prototype.readFlatPosList_)
      }
    }, Bd.prototype.PATCHES_PARSERS_ = {
      "http://www.opengis.net/gml": {
        PolygonPatch: su(Bd.prototype.readPolygonPatch_)
      }
    }, Bd.prototype.SEGMENTS_PARSERS_ = {
      "http://www.opengis.net/gml": {
        LineStringSegment: su(Bd.prototype.readLineStringSegment_)
      }
    }, Bd.prototype.writeFeatures, Bd.prototype.RING_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        exterior: lu(Bd.prototype.writeRing_),
        interior: lu(Bd.prototype.writeRing_)
      }
    }, Bd.prototype.ENVELOPE_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        lowerCorner: lu(jd),
        upperCorner: lu(jd)
      }
    }, Bd.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        surfaceMember: lu(Bd.prototype.writeSurfaceOrPolygonMember_),
        polygonMember: lu(Bd.prototype.writeSurfaceOrPolygonMember_)
      }
    }, Bd.prototype.POINTMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        pointMember: lu(Bd.prototype.writePointMember_)
      }
    }, Bd.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        lineStringMember: lu(Bd.prototype.writeLineStringOrCurveMember_),
        curveMember: lu(Bd.prototype.writeLineStringOrCurveMember_)
      }
    }, Bd.prototype.GEOMETRY_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        Curve: lu(Bd.prototype.writeCurveOrLineString_),
        MultiCurve: lu(Bd.prototype.writeMultiCurveOrLineString_),
        Point: lu(Bd.prototype.writePoint_),
        MultiPoint: lu(Bd.prototype.writeMultiPoint_),
        LineString: lu(Bd.prototype.writeCurveOrLineString_),
        MultiLineString: lu(Bd.prototype.writeMultiCurveOrLineString_),
        LinearRing: lu(Bd.prototype.writeLinearRing_),
        Polygon: lu(Bd.prototype.writeSurfaceOrPolygon_),
        MultiPolygon: lu(Bd.prototype.writeMultiSurfaceOrPolygon_),
        Surface: lu(Bd.prototype.writeSurfaceOrPolygon_),
        MultiSurface: lu(Bd.prototype.writeMultiSurfaceOrPolygon_),
        Envelope: lu(Bd.prototype.writeEnvelope)
      }
    };
    var Vd = Bd,
        Xd = Vd;
    Xd.prototype.writeFeatures, Xd.prototype.writeFeaturesNode;

    var zd = Xd,
        Wd = Cd + " http://schemas.opengis.net/gml/2.1.2/feature.xsd",
        Kd = {
      MultiLineString: "lineStringMember",
      MultiCurve: "curveMember",
      MultiPolygon: "polygonMember",
      MultiSurface: "surfaceMember"
    },
        Hd = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.FEATURE_COLLECTION_PARSERS[Cd].featureMember = ou(this.readFeaturesInternal), this.schemaLocation = i.schemaLocation ? i.schemaLocation : Wd;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFlatCoordinates_ = function (t, e) {
        var i = eu(t, !1).replace(/^\s*|\s*$/g, ""),
            r = e[0].srsName,
            n = "enu";

        if (r) {
          var o = Ee(r);
          o && (n = o.getAxisOrientation());
        }

        for (var s = i.trim().split(/\s+/), a = [], h = 0, l = s.length; h < l; h++) {
          var u = s[h].split(/,+/),
              p = parseFloat(u[0]),
              c = parseFloat(u[1]),
              d = 3 === u.length ? parseFloat(u[2]) : 0;
          "en" === n.substr(0, 2) ? a.push(p, c, d) : a.push(c, p, d);
        }

        return a;
      }, e.prototype.readBox_ = function (t, e) {
        var i = gu([null], this.BOX_PARSERS_, t, e, this);
        return lt(i[1][0], i[1][1], i[1][3], i[1][4]);
      }, e.prototype.innerBoundaryIsParser_ = function (t, e) {
        var i = gu(void 0, this.RING_PARSERS, t, e, this);
        i && e[e.length - 1].push(i);
      }, e.prototype.outerBoundaryIsParser_ = function (t, e) {
        var i = gu(void 0, this.RING_PARSERS, t, e, this);
        i && (e[e.length - 1][0] = i);
      }, e.prototype.GEOMETRY_NODE_FACTORY_ = function (t, e, i) {
        var r,
            n = e[e.length - 1],
            o = n.multiSurface,
            s = n.surface,
            a = n.multiCurve;
        return Array.isArray(t) ? r = "Envelope" : "MultiPolygon" === (r = t.getType()) && !0 === o ? r = "MultiSurface" : "Polygon" === r && !0 === s ? r = "Surface" : "MultiLineString" === r && !0 === a && (r = "MultiCurve"), tu("http://www.opengis.net/gml", r);
      }, e.prototype.writeFeatureElement = function (t, e, i) {
        var r = e.getId();
        r && t.setAttribute("fid", r);
        var n = i[i.length - 1],
            o = n.featureNS,
            s = e.getGeometryName();
        n.serializers || (n.serializers = {}, n.serializers[o] = {});
        var a = e.getProperties(),
            h = [],
            l = [];

        for (var p in a) {
          var c = a[p];
          null !== c && (h.push(p), l.push(c), p == s || "function" == typeof c.getSimplifiedGeometry ? p in n.serializers[o] || (n.serializers[o][p] = lu(this.writeGeometryElement, this)) : p in n.serializers[o] || (n.serializers[o][p] = lu(jd)));
        }

        var d = u({}, n);
        d.node = t, vu(d, n.serializers, pu(void 0, o), l, i, h);
      }, e.prototype.writeCurveOrLineString_ = function (t, e, i) {
        var r = i[i.length - 1].srsName;

        if ("LineStringSegment" !== t.nodeName && r && t.setAttribute("srsName", r), "LineString" === t.nodeName || "LineStringSegment" === t.nodeName) {
          var n = this.createCoordinatesNode_(t.namespaceURI);
          t.appendChild(n), this.writeCoordinates_(n, e, i);
        } else if ("Curve" === t.nodeName) {
          var o = tu(t.namespaceURI, "segments");
          t.appendChild(o), this.writeCurveSegments_(o, e, i);
        }
      }, e.prototype.writeLineStringOrCurveMember_ = function (t, e, i) {
        var r = this.GEOMETRY_NODE_FACTORY_(e, i);
        r && (t.appendChild(r), this.writeCurveOrLineString_(r, e, i));
      }, e.prototype.writeMultiCurveOrLineString_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName,
            s = r.curve;
        o && t.setAttribute("srsName", o);
        var a = e.getLineStrings();
        vu({
          node: t,
          hasZ: n,
          srsName: o,
          curve: s
        }, this.LINESTRINGORCURVEMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, a, i, void 0, this);
      }, e.prototype.writeGeometryElement = function (t, e, i) {
        var r,
            n = i[i.length - 1],
            o = u({}, n);
        o.node = t, r = Array.isArray(e) ? n.dataProjection ? be(e, n.featureProjection, n.dataProjection) : e : dd(e, !0, n), vu(o, this.GEOMETRY_SERIALIZERS_, this.GEOMETRY_NODE_FACTORY_, [r], i, void 0, this);
      }, e.prototype.createCoordinatesNode_ = function (t) {
        var e = tu(t, "coordinates");
        return e.setAttribute("decimal", "."), e.setAttribute("cs", ","), e.setAttribute("ts", " "), e;
      }, e.prototype.writeCoordinates_ = function (t, e, i) {
        for (var r = i[i.length - 1], n = r.hasZ, o = r.srsName, s = e.getCoordinates(), a = s.length, h = new Array(a), l = 0; l < a; ++l) {
          var u = s[l];
          h[l] = this.getCoords_(u, o, n);
        }

        jd(t, h.join(" "));
      }, e.prototype.writeCurveSegments_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "LineStringSegment");
        t.appendChild(r), this.writeCurveOrLineString_(r, e, i);
      }, e.prototype.writeSurfaceOrPolygon_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName;

        if ("PolygonPatch" !== t.nodeName && o && t.setAttribute("srsName", o), "Polygon" === t.nodeName || "PolygonPatch" === t.nodeName) {
          var s = e.getLinearRings();
          vu({
            node: t,
            hasZ: n,
            srsName: o
          }, this.RING_SERIALIZERS_, this.RING_NODE_FACTORY_, s, i, void 0, this);
        } else if ("Surface" === t.nodeName) {
          var a = tu(t.namespaceURI, "patches");
          t.appendChild(a), this.writeSurfacePatches_(a, e, i);
        }
      }, e.prototype.RING_NODE_FACTORY_ = function (t, e, i) {
        var r = e[e.length - 1],
            n = r.node,
            o = r.exteriorWritten;
        return void 0 === o && (r.exteriorWritten = !0), tu(n.namespaceURI, void 0 !== o ? "innerBoundaryIs" : "outerBoundaryIs");
      }, e.prototype.writeSurfacePatches_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "PolygonPatch");
        t.appendChild(r), this.writeSurfaceOrPolygon_(r, e, i);
      }, e.prototype.writeRing_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "LinearRing");
        t.appendChild(r), this.writeLinearRing_(r, e, i);
      }, e.prototype.getCoords_ = function (t, e, i) {
        var r = "enu";
        e && (r = Ee(e).getAxisOrientation());
        var n = "en" === r.substr(0, 2) ? t[0] + "," + t[1] : t[1] + "," + t[0];
        i && (n += "," + (t[2] || 0));
        return n;
      }, e.prototype.writePoint_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName;
        o && t.setAttribute("srsName", o);
        var s = this.createCoordinatesNode_(t.namespaceURI);
        t.appendChild(s);
        var a = e.getCoordinates();
        jd(s, this.getCoords_(a, o, n));
      }, e.prototype.writeMultiPoint_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName;
        o && t.setAttribute("srsName", o);
        var s = e.getPoints();
        vu({
          node: t,
          hasZ: n,
          srsName: o
        }, this.POINTMEMBER_SERIALIZERS_, pu("pointMember"), s, i, void 0, this);
      }, e.prototype.writePointMember_ = function (t, e, i) {
        var r = tu(t.namespaceURI, "Point");
        t.appendChild(r), this.writePoint_(r, e, i);
      }, e.prototype.writeLinearRing_ = function (t, e, i) {
        var r = i[i.length - 1].srsName;
        r && t.setAttribute("srsName", r);
        var n = this.createCoordinatesNode_(t.namespaceURI);
        t.appendChild(n), this.writeCoordinates_(n, e, i);
      }, e.prototype.writeMultiSurfaceOrPolygon_ = function (t, e, i) {
        var r = i[i.length - 1],
            n = r.hasZ,
            o = r.srsName,
            s = r.surface;
        o && t.setAttribute("srsName", o);
        var a = e.getPolygons();
        vu({
          node: t,
          hasZ: n,
          srsName: o,
          surface: s
        }, this.SURFACEORPOLYGONMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, a, i, void 0, this);
      }, e.prototype.writeSurfaceOrPolygonMember_ = function (t, e, i) {
        var r = this.GEOMETRY_NODE_FACTORY_(e, i);
        r && (t.appendChild(r), this.writeSurfaceOrPolygon_(r, e, i));
      }, e.prototype.writeEnvelope = function (t, e, i) {
        var r = i[i.length - 1].srsName;
        r && t.setAttribute("srsName", r);
        var n = [e[0] + " " + e[1], e[2] + " " + e[3]];
        vu({
          node: t
        }, this.ENVELOPE_SERIALIZERS_, cu, n, i, ["lowerCorner", "upperCorner"], this);
      }, e.prototype.MULTIGEOMETRY_MEMBER_NODE_FACTORY_ = function (t, e, i) {
        var r = e[e.length - 1].node;
        return tu("http://www.opengis.net/gml", Kd[r.nodeName]);
      }, e;
    }(Id);

    Hd.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = {
      "http://www.opengis.net/gml": {
        coordinates: su(Hd.prototype.readFlatCoordinates_)
      }
    }, Hd.prototype.FLAT_LINEAR_RINGS_PARSERS = {
      "http://www.opengis.net/gml": {
        innerBoundaryIs: Hd.prototype.innerBoundaryIsParser_,
        outerBoundaryIs: Hd.prototype.outerBoundaryIsParser_
      }
    }, Hd.prototype.BOX_PARSERS_ = {
      "http://www.opengis.net/gml": {
        coordinates: ou(Hd.prototype.readFlatCoordinates_)
      }
    }, Hd.prototype.GEOMETRY_PARSERS = {
      "http://www.opengis.net/gml": {
        Point: su(Id.prototype.readPoint),
        MultiPoint: su(Id.prototype.readMultiPoint),
        LineString: su(Id.prototype.readLineString),
        MultiLineString: su(Id.prototype.readMultiLineString),
        LinearRing: su(Id.prototype.readLinearRing),
        Polygon: su(Id.prototype.readPolygon),
        MultiPolygon: su(Id.prototype.readMultiPolygon),
        Box: su(Hd.prototype.readBox_)
      }
    }, Hd.prototype.GEOMETRY_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        Curve: lu(Hd.prototype.writeCurveOrLineString_),
        MultiCurve: lu(Hd.prototype.writeMultiCurveOrLineString_),
        Point: lu(Hd.prototype.writePoint_),
        MultiPoint: lu(Hd.prototype.writeMultiPoint_),
        LineString: lu(Hd.prototype.writeCurveOrLineString_),
        MultiLineString: lu(Hd.prototype.writeMultiCurveOrLineString_),
        LinearRing: lu(Hd.prototype.writeLinearRing_),
        Polygon: lu(Hd.prototype.writeSurfaceOrPolygon_),
        MultiPolygon: lu(Hd.prototype.writeMultiSurfaceOrPolygon_),
        Surface: lu(Hd.prototype.writeSurfaceOrPolygon_),
        MultiSurface: lu(Hd.prototype.writeMultiSurfaceOrPolygon_),
        Envelope: lu(Hd.prototype.writeEnvelope)
      }
    }, Hd.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        lineStringMember: lu(Hd.prototype.writeLineStringOrCurveMember_),
        curveMember: lu(Hd.prototype.writeLineStringOrCurveMember_)
      }
    }, Hd.prototype.RING_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        outerBoundaryIs: lu(Hd.prototype.writeRing_),
        innerBoundaryIs: lu(Hd.prototype.writeRing_)
      }
    }, Hd.prototype.POINTMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        pointMember: lu(Hd.prototype.writePointMember_)
      }
    }, Hd.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        surfaceMember: lu(Hd.prototype.writeSurfaceOrPolygonMember_),
        polygonMember: lu(Hd.prototype.writeSurfaceOrPolygonMember_)
      }
    }, Hd.prototype.ENVELOPE_SERIALIZERS_ = {
      "http://www.opengis.net/gml": {
        lowerCorner: lu(jd),
        upperCorner: lu(jd)
      }
    };

    var Zd = Hd,
        qd = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, i), this.schemaLocation = i.schemaLocation ? i.schemaLocation : this.namespace + " http://schemas.opengis.net/gml/3.2.1/gml.xsd";
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Vd);

    qd.prototype.namespace = "http://www.opengis.net/gml/3.2", qd.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = {
      "http://www.opengis.net/gml/3.2": {
        pos: su(Vd.prototype.readFlatPos_),
        posList: su(Vd.prototype.readFlatPosList_)
      }
    }, qd.prototype.FLAT_LINEAR_RINGS_PARSERS = {
      "http://www.opengis.net/gml/3.2": {
        interior: Vd.prototype.interiorParser_,
        exterior: Vd.prototype.exteriorParser_
      }
    }, qd.prototype.GEOMETRY_PARSERS = {
      "http://www.opengis.net/gml/3.2": {
        Point: su(Id.prototype.readPoint),
        MultiPoint: su(Id.prototype.readMultiPoint),
        LineString: su(Id.prototype.readLineString),
        MultiLineString: su(Id.prototype.readMultiLineString),
        LinearRing: su(Id.prototype.readLinearRing),
        Polygon: su(Id.prototype.readPolygon),
        MultiPolygon: su(Id.prototype.readMultiPolygon),
        Surface: su(qd.prototype.readSurface_),
        MultiSurface: su(Vd.prototype.readMultiSurface_),
        Curve: su(qd.prototype.readCurve_),
        MultiCurve: su(Vd.prototype.readMultiCurve_),
        Envelope: su(qd.prototype.readEnvelope_)
      }
    }, qd.prototype.MULTICURVE_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        curveMember: ou(Vd.prototype.curveMemberParser_),
        curveMembers: ou(Vd.prototype.curveMemberParser_)
      }
    }, qd.prototype.MULTISURFACE_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        surfaceMember: ou(Vd.prototype.surfaceMemberParser_),
        surfaceMembers: ou(Vd.prototype.surfaceMemberParser_)
      }
    }, qd.prototype.CURVEMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        LineString: ou(Id.prototype.readLineString),
        Curve: ou(Vd.prototype.readCurve_)
      }
    }, qd.prototype.SURFACEMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        Polygon: ou(Id.prototype.readPolygon),
        Surface: ou(Vd.prototype.readSurface_)
      }
    }, qd.prototype.SURFACE_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        patches: su(Vd.prototype.readPatch_)
      }
    }, qd.prototype.CURVE_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        segments: su(Vd.prototype.readSegment_)
      }
    }, qd.prototype.ENVELOPE_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        lowerCorner: ou(Vd.prototype.readFlatPosList_),
        upperCorner: ou(Vd.prototype.readFlatPosList_)
      }
    }, qd.prototype.PATCHES_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        PolygonPatch: su(Vd.prototype.readPolygonPatch_)
      }
    }, qd.prototype.SEGMENTS_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        LineStringSegment: su(Vd.prototype.readLineStringSegment_)
      }
    }, qd.prototype.MULTIPOINT_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        pointMember: ou(Id.prototype.pointMemberParser_),
        pointMembers: ou(Id.prototype.pointMemberParser_)
      }
    }, qd.prototype.MULTILINESTRING_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        lineStringMember: ou(Id.prototype.lineStringMemberParser_),
        lineStringMembers: ou(Id.prototype.lineStringMemberParser_)
      }
    }, qd.prototype.MULTIPOLYGON_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        polygonMember: ou(Id.prototype.polygonMemberParser_),
        polygonMembers: ou(Id.prototype.polygonMemberParser_)
      }
    }, qd.prototype.POINTMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        Point: ou(Id.prototype.readFlatCoordinatesFromNode_)
      }
    }, qd.prototype.LINESTRINGMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        LineString: ou(Id.prototype.readLineString)
      }
    }, qd.prototype.POLYGONMEMBER_PARSERS_ = {
      "http://www.opengis.net/gml/3.2": {
        Polygon: ou(Id.prototype.readPolygon)
      }
    }, qd.prototype.RING_PARSERS = {
      "http://www.opengis.net/gml/3.2": {
        LinearRing: su(Id.prototype.readFlatLinearRing_)
      }
    }, qd.prototype.RING_SERIALIZERS_ = {
      "http://www.opengis.net/gml/3.2": {
        exterior: lu(Vd.prototype.writeRing_),
        interior: lu(Vd.prototype.writeRing_)
      }
    }, qd.prototype.ENVELOPE_SERIALIZERS_ = {
      "http://www.opengis.net/gml/3.2": {
        lowerCorner: lu(jd),
        upperCorner: lu(jd)
      }
    }, qd.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml/3.2": {
        surfaceMember: lu(Vd.prototype.writeSurfaceOrPolygonMember_),
        polygonMember: lu(Vd.prototype.writeSurfaceOrPolygonMember_)
      }
    }, qd.prototype.POINTMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml/3.2": {
        pointMember: lu(Vd.prototype.writePointMember_)
      }
    }, qd.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_ = {
      "http://www.opengis.net/gml/3.2": {
        lineStringMember: lu(Vd.prototype.writeLineStringOrCurveMember_),
        curveMember: lu(Vd.prototype.writeLineStringOrCurveMember_)
      }
    }, qd.prototype.GEOMETRY_SERIALIZERS_ = {
      "http://www.opengis.net/gml/3.2": {
        Curve: lu(Vd.prototype.writeCurveOrLineString_),
        MultiCurve: lu(Vd.prototype.writeMultiCurveOrLineString_),
        Point: lu(qd.prototype.writePoint_),
        MultiPoint: lu(Vd.prototype.writeMultiPoint_),
        LineString: lu(Vd.prototype.writeCurveOrLineString_),
        MultiLineString: lu(Vd.prototype.writeMultiCurveOrLineString_),
        LinearRing: lu(Vd.prototype.writeLinearRing_),
        Polygon: lu(Vd.prototype.writeSurfaceOrPolygon_),
        MultiPolygon: lu(Vd.prototype.writeMultiSurfaceOrPolygon_),
        Surface: lu(Vd.prototype.writeSurfaceOrPolygon_),
        MultiSurface: lu(Vd.prototype.writeMultiSurfaceOrPolygon_),
        Envelope: lu(Vd.prototype.writeEnvelope)
      }
    };

    var Jd = qd,
        Qd = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"],
        $d = {
      rte: Lf,
      trk: Of,
      wpt: Pf
    },
        tf = fu(Qd, {
      rte: ou(Lf),
      trk: ou(Of),
      wpt: ou(Pf)
    }),
        ef = fu(Qd, {
      text: hu(Nd, "linkText"),
      type: hu(Nd, "linkType")
    }),
        rf = fu(Qd, {
      rte: lu(function (t, e, i) {
        var r = i[0],
            n = e.getProperties(),
            o = {
          node: t
        };
        o.properties = n;
        var s = e.getGeometry();

        if (s.getType() == Nt.LINE_STRING) {
          var a = dd(s, !0, r);
          o.geometryLayout = a.getLayout(), n.rtept = a.getCoordinates();
        }

        var h = i[i.length - 1].node,
            l = df[h.namespaceURI],
            u = du(n, l);
        vu(o, ff, cu, u, i, l);
      }),
      trk: lu(function (t, e, i) {
        var r = i[0],
            n = e.getProperties(),
            o = {
          node: t
        };
        o.properties = n;
        var s = e.getGeometry();

        if (s.getType() == Nt.MULTI_LINE_STRING) {
          var a = dd(s, !0, r);
          n.trkseg = a.getLineStrings();
        }

        var h = i[i.length - 1].node,
            l = gf[h.namespaceURI],
            u = du(n, l);
        vu(o, yf, cu, u, i, l);
      }),
      wpt: lu(function (t, e, i) {
        var r = i[0],
            n = i[i.length - 1];
        n.properties = e.getProperties();
        var o = e.getGeometry();

        if (o.getType() == Nt.POINT) {
          var s = dd(o, !0, r);
          n.geometryLayout = s.getLayout(), Mf(t, s.getCoordinates(), i);
        }
      })
    }),
        nf = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.dataProjection = Ee("EPSG:4326"), this.readExtensions_ = i.readExtensions;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleReadExtensions_ = function (t) {
        t || (t = []);

        for (var e = 0, i = t.length; e < i; ++e) {
          var r = t[e];

          if (this.readExtensions_) {
            var n = r.get("extensionsNode_") || null;
            this.readExtensions_(r, n);
          }

          r.set("extensionsNode_", void 0);
        }
      }, e.prototype.readFeatureFromNode = function (t, e) {
        if (!X(Qd, t.namespaceURI)) return null;
        var i = $d[t.localName];
        if (!i) return null;
        var r = i(t, [this.getReadOptions(t, e)]);
        return r ? (this.handleReadExtensions_([r]), r) : null;
      }, e.prototype.readFeaturesFromNode = function (t, e) {
        if (!X(Qd, t.namespaceURI)) return [];

        if ("gpx" == t.localName) {
          var i = gu([], tf, t, [this.getReadOptions(t, e)]);
          return i ? (this.handleReadExtensions_(i), i) : [];
        }

        return [];
      }, e.prototype.writeFeaturesNode = function (t, e) {
        e = this.adaptOptions(e);
        var i = tu("http://www.topografix.com/GPX/1/1", "gpx");
        return i.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", $l), i.setAttributeNS($l, "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"), i.setAttribute("version", "1.1"), i.setAttribute("creator", "OpenLayers"), vu({
          node: i
        }, rf, Tf, t, [e]), i;
      }, e;
    }(Td),
        of = fu(Qd, {
      name: hu(Nd),
      cmt: hu(Nd),
      desc: hu(Nd),
      src: hu(Nd),
      link: wf,
      number: hu(Fd),
      extensions: If,
      type: hu(Nd),
      rtept: function rtept(t, e) {
        var i = gu({}, sf, t, e);

        if (i) {
          var r = e[e.length - 1],
              n = r.flatCoordinates,
              o = r.layoutOptions;
          Cf(n, o, t, i);
        }
      }
    }),
        sf = fu(Qd, {
      ele: hu(bd),
      time: hu(Pd)
    }),
        af = fu(Qd, {
      name: hu(Nd),
      cmt: hu(Nd),
      desc: hu(Nd),
      src: hu(Nd),
      link: wf,
      number: hu(Fd),
      type: hu(Nd),
      extensions: If,
      trkseg: function trkseg(t, e) {
        var i = e[e.length - 1];

        _u(hf, t, e);

        var r = i.flatCoordinates;
        i.ends.push(r.length);
      }
    }),
        hf = fu(Qd, {
      trkpt: function trkpt(t, e) {
        var i = gu({}, lf, t, e);

        if (i) {
          var r = e[e.length - 1],
              n = r.flatCoordinates,
              o = r.layoutOptions;
          Cf(n, o, t, i);
        }
      }
    }),
        lf = fu(Qd, {
      ele: hu(bd),
      time: hu(Pd)
    }),
        uf = fu(Qd, {
      ele: hu(bd),
      time: hu(Pd),
      magvar: hu(bd),
      geoidheight: hu(bd),
      name: hu(Nd),
      cmt: hu(Nd),
      desc: hu(Nd),
      src: hu(Nd),
      link: wf,
      sym: hu(Nd),
      type: hu(Nd),
      fix: hu(Nd),
      sat: hu(Fd),
      hdop: hu(bd),
      vdop: hu(bd),
      pdop: hu(bd),
      ageofdgpsdata: hu(bd),
      dgpsid: hu(Fd),
      extensions: If
    }),
        pf = ["text", "type"],
        cf = fu(Qd, {
      text: lu(jd),
      type: lu(jd)
    }),
        df = fu(Qd, ["name", "cmt", "desc", "src", "link", "number", "type", "rtept"]),
        ff = fu(Qd, {
      name: lu(jd),
      cmt: lu(jd),
      desc: lu(jd),
      src: lu(jd),
      link: lu(bf),
      number: lu(kd),
      type: lu(jd),
      rtept: uu(lu(Mf))
    }),
        _f = fu(Qd, ["ele", "time"]),
        gf = fu(Qd, ["name", "cmt", "desc", "src", "link", "number", "type", "trkseg"]),
        yf = fu(Qd, {
      name: lu(jd),
      cmt: lu(jd),
      desc: lu(jd),
      src: lu(jd),
      link: lu(bf),
      number: lu(kd),
      type: lu(jd),
      trkseg: uu(lu(function (t, e, i) {
        var r = {
          node: t
        };
        r.geometryLayout = e.getLayout(), r.properties = {}, vu(r, mf, vf, e.getCoordinates(), i);
      }))
    }),
        vf = pu("trkpt"),
        mf = fu(Qd, {
      trkpt: lu(Mf)
    }),
        xf = fu(Qd, ["ele", "time", "magvar", "geoidheight", "name", "cmt", "desc", "src", "link", "sym", "type", "fix", "sat", "hdop", "vdop", "pdop", "ageofdgpsdata", "dgpsid"]),
        Ef = fu(Qd, {
      ele: lu(Dd),
      time: lu(function (t, e) {
        var i = new Date(1e3 * e),
            r = i.getUTCFullYear() + "-" + Wi(i.getUTCMonth() + 1, 2) + "-" + Wi(i.getUTCDate(), 2) + "T" + Wi(i.getUTCHours(), 2) + ":" + Wi(i.getUTCMinutes(), 2) + ":" + Wi(i.getUTCSeconds(), 2) + "Z";
        t.appendChild(Ql.createTextNode(r));
      }),
      magvar: lu(Dd),
      geoidheight: lu(Dd),
      name: lu(jd),
      cmt: lu(jd),
      desc: lu(jd),
      src: lu(jd),
      link: lu(bf),
      sym: lu(jd),
      type: lu(jd),
      fix: lu(jd),
      sat: lu(kd),
      hdop: lu(Dd),
      vdop: lu(Dd),
      pdop: lu(Dd),
      ageofdgpsdata: lu(Dd),
      dgpsid: lu(kd)
    }),
        Sf = {
      Point: "wpt",
      LineString: "rte",
      MultiLineString: "trk"
    };

    function Tf(t, e, i) {
      var r = t.getGeometry();

      if (r) {
        var n = Sf[r.getType()];
        if (n) return tu(e[e.length - 1].node.namespaceURI, n);
      }
    }

    function Cf(t, e, i, r) {
      return t.push(parseFloat(i.getAttribute("lon")), parseFloat(i.getAttribute("lat"))), "ele" in r ? (t.push(r.ele), delete r.ele, e.hasZ = !0) : t.push(0), "time" in r ? (t.push(r.time), delete r.time, e.hasM = !0) : t.push(0), t;
    }

    function Rf(t, e, i) {
      var r = At.XY,
          n = 2;

      if (t.hasZ && t.hasM ? (r = At.XYZM, n = 4) : t.hasZ ? (r = At.XYZ, n = 3) : t.hasM && (r = At.XYM, n = 3), 4 !== n) {
        for (var o = 0, s = e.length / 4; o < s; o++) {
          e[o * n] = e[4 * o], e[o * n + 1] = e[4 * o + 1], t.hasZ && (e[o * n + 2] = e[4 * o + 2]), t.hasM && (e[o * n + 2] = e[4 * o + 3]);
        }

        if (e.length = e.length / 4 * n, i) for (var a = 0, h = i.length; a < h; a++) {
          i[a] = i[a] / 4 * n;
        }
      }

      return r;
    }

    function wf(t, e) {
      var i = e[e.length - 1],
          r = t.getAttribute("href");
      null !== r && (i.link = r), _u(ef, t, e);
    }

    function If(t, e) {
      e[e.length - 1].extensionsNode_ = t;
    }

    function Lf(t, e) {
      var i = e[0],
          r = gu({
        flatCoordinates: [],
        layoutOptions: {}
      }, of, t, e);

      if (r) {
        var n = r.flatCoordinates;
        delete r.flatCoordinates;
        var o = r.layoutOptions;
        delete r.layoutOptions;
        var s = Rf(o, n),
            a = new hr(n, s);
        dd(a, !1, i);
        var h = new B(a);
        return h.setProperties(r), h;
      }
    }

    function Of(t, e) {
      var i = e[0],
          r = gu({
        flatCoordinates: [],
        ends: [],
        layoutOptions: {}
      }, af, t, e);

      if (r) {
        var n = r.flatCoordinates;
        delete r.flatCoordinates;
        var o = r.ends;
        delete r.ends;
        var s = r.layoutOptions;
        delete r.layoutOptions;
        var a = Rf(s, n, o),
            h = new Pc(n, a, o);
        dd(h, !1, i);
        var l = new B(h);
        return l.setProperties(r), l;
      }
    }

    function Pf(t, e) {
      var i = e[0],
          r = gu({}, uf, t, e);

      if (r) {
        var n = {},
            o = Cf([], n, t, r),
            s = Rf(n, o),
            a = new ci(o, s);
        dd(a, !1, i);
        var h = new B(a);
        return h.setProperties(r), h;
      }
    }

    function bf(t, e, i) {
      t.setAttribute("href", e);
      var r = i[i.length - 1].properties,
          n = [r.linkText, r.linkType];
      vu({
        node: t
      }, cf, cu, n, i, pf);
    }

    function Mf(t, e, i) {
      var r = i[i.length - 1],
          n = r.node.namespaceURI,
          o = r.properties;

      switch (t.setAttributeNS(null, "lat", String(e[1])), t.setAttributeNS(null, "lon", String(e[0])), r.geometryLayout) {
        case At.XYZM:
          0 !== e[3] && (o.time = e[3]);

        case At.XYZ:
          0 !== e[2] && (o.ele = e[2]);
          break;

        case At.XYM:
          0 !== e[2] && (o.time = e[2]);
      }

      var s = "rtept" == t.nodeName ? _f[n] : xf[n],
          a = du(o, s);
      vu({
        node: t,
        properties: o
      }, Ef, cu, a, i, s);
    }

    var Ff = nf;

    function Af(t, e) {
      if (!t) return null;
      var i;

      switch (t.type) {
        case Nt.POINT:
          i = function (t) {
            return new ci(t.coordinates);
          }(t);

          break;

        case Nt.LINE_STRING:
          i = function (t) {
            return new hr(t.coordinates);
          }(t);

          break;

        case Nt.POLYGON:
          i = function (t) {
            return new Ii(t.coordinates);
          }(t);

          break;

        case Nt.MULTI_POINT:
          i = function (t) {
            return new bc(t.coordinates);
          }(t);

          break;

        case Nt.MULTI_LINE_STRING:
          i = function (t) {
            return new Pc(t.coordinates);
          }(t);

          break;

        case Nt.MULTI_POLYGON:
          i = function (t) {
            return new Fc(t.coordinates);
          }(t);

          break;

        case Nt.GEOMETRY_COLLECTION:
          i = function (t, e) {
            var i = t.geometries.map(function (t) {
              return Af(t, e);
            });
            return new ud(i);
          }(t);

          break;

        default:
          throw new Error("Unsupported GeoJSON type: " + t.type);
      }

      return dd(i, !1, e);
    }

    function Nf(t, e) {
      var i,
          r = (t = dd(t, !0, e)).getType();

      switch (r) {
        case Nt.POINT:
          i = function (t, e) {
            return {
              type: "Point",
              coordinates: t.getCoordinates()
            };
          }(t);

          break;

        case Nt.LINE_STRING:
          i = function (t, e) {
            return {
              type: "LineString",
              coordinates: t.getCoordinates()
            };
          }(t);

          break;

        case Nt.POLYGON:
          i = function (t, e) {
            var i;
            e && (i = e.rightHanded);
            return {
              type: "Polygon",
              coordinates: t.getCoordinates(i)
            };
          }(t, e);

          break;

        case Nt.MULTI_POINT:
          i = function (t, e) {
            return {
              type: "MultiPoint",
              coordinates: t.getCoordinates()
            };
          }(t);

          break;

        case Nt.MULTI_LINE_STRING:
          i = function (t, e) {
            return {
              type: "MultiLineString",
              coordinates: t.getCoordinates()
            };
          }(t);

          break;

        case Nt.MULTI_POLYGON:
          i = function (t, e) {
            var i;
            e && (i = e.rightHanded);
            return {
              type: "MultiPolygon",
              coordinates: t.getCoordinates(i)
            };
          }(t, e);

          break;

        case Nt.GEOMETRY_COLLECTION:
          i = function (t, e) {
            return {
              type: "GeometryCollection",
              geometries: t.getGeometriesArray().map(function (t) {
                var i = u({}, e);
                return delete i.featureProjection, Nf(t, i);
              })
            };
          }(t, e);

          break;

        case Nt.CIRCLE:
          i = {
            type: "GeometryCollection",
            geometries: []
          };
          break;

        default:
          throw new Error("Unsupported geometry type: " + r);
      }

      return i;
    }

    var Gf = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this), this.dataProjection = Ee(i.dataProjection ? i.dataProjection : "EPSG:4326"), i.featureProjection && (this.defaultFeatureProjection = Ee(i.featureProjection)), this.geometryName_ = i.geometryName, this.extractGeometryName_ = i.extractGeometryName;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeatureFromObject = function (t, e) {
        var i = null,
            r = Af((i = "Feature" === t.type ? t : {
          type: "Feature",
          geometry: t,
          properties: null
        }).geometry, e),
            n = new B();
        return this.geometryName_ ? n.setGeometryName(this.geometryName_) : this.extractGeometryName_ && "geometry_name" in i !== void 0 && n.setGeometryName(i.geometry_name), n.setGeometry(r), "id" in i && n.setId(i.id), i.properties && n.setProperties(i.properties), n;
      }, e.prototype.readFeaturesFromObject = function (t, e) {
        var i = null;

        if ("FeatureCollection" === t.type) {
          i = [];

          for (var r = t.features, n = 0, o = r.length; n < o; ++n) {
            i.push(this.readFeatureFromObject(r[n], e));
          }
        } else i = [this.readFeatureFromObject(t, e)];

        return i;
      }, e.prototype.readGeometryFromObject = function (t, e) {
        return Af(t, e);
      }, e.prototype.readProjectionFromObject = function (t) {
        var e,
            i = t.crs;
        return i ? "name" == i.type ? e = Ee(i.properties.name) : Y(!1, 36) : e = this.dataProjection, e;
      }, e.prototype.writeFeatureObject = function (t, e) {
        e = this.adaptOptions(e);
        var i = {
          type: "Feature",
          geometry: null,
          properties: null
        },
            r = t.getId();
        void 0 !== r && (i.id = r);
        var n = t.getGeometry();
        n && (i.geometry = Nf(n, e));
        var o = t.getProperties();
        return delete o[t.getGeometryName()], d(o) || (i.properties = o), i;
      }, e.prototype.writeFeaturesObject = function (t, e) {
        e = this.adaptOptions(e);

        for (var i = [], r = 0, n = t.length; r < n; ++r) {
          i.push(this.writeFeatureObject(t[r], e));
        }

        return {
          type: "FeatureCollection",
          features: i
        };
      }, e.prototype.writeGeometryObject = function (t, e) {
        return Nf(t, this.adaptOptions(e));
      }, e;
    }(_d);

    function Df(t) {
      return "string" == typeof t ? t : "";
    }

    var kf,
        jf,
        Uf,
        Yf,
        Bf,
        Vf,
        Xf,
        zf = function (t) {
      function e() {
        t.call(this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getType = function () {
        return Hl.TEXT;
      }, e.prototype.readFeature = function (t, e) {
        return this.readFeatureFromText(Df(t), this.adaptOptions(e));
      }, e.prototype.readFeatureFromText = function (t, e) {
        return r();
      }, e.prototype.readFeatures = function (t, e) {
        return this.readFeaturesFromText(Df(t), this.adaptOptions(e));
      }, e.prototype.readFeaturesFromText = function (t, e) {
        return r();
      }, e.prototype.readGeometry = function (t, e) {
        return this.readGeometryFromText(Df(t), this.adaptOptions(e));
      }, e.prototype.readGeometryFromText = function (t, e) {
        return r();
      }, e.prototype.readProjection = function (t) {
        return this.readProjectionFromText(Df(t));
      }, e.prototype.readProjectionFromText = function (t) {
        return this.dataProjection;
      }, e.prototype.writeFeature = function (t, e) {
        return this.writeFeatureText(t, this.adaptOptions(e));
      }, e.prototype.writeFeatureText = function (t, e) {
        return r();
      }, e.prototype.writeFeatures = function (t, e) {
        return this.writeFeaturesText(t, this.adaptOptions(e));
      }, e.prototype.writeFeaturesText = function (t, e) {
        return r();
      }, e.prototype.writeGeometry = function (t, e) {
        return this.writeGeometryText(t, this.adaptOptions(e));
      }, e.prototype.writeGeometryText = function (t, e) {
        return r();
      }, e;
    }(cd),
        Wf = {
      BAROMETRIC: "barometric",
      GPS: "gps",
      NONE: "none"
    },
        Kf = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        Hf = /^H.([A-Z]{3}).*?:(.*)/,
        Zf = /^HFDTE(\d{2})(\d{2})(\d{2})/,
        qf = /\r\n|\r|\n/,
        Jf = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.dataProjection = Ee("EPSG:4326"), this.altitudeMode_ = i.altitudeMode ? i.altitudeMode : Wf.NONE;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeatureFromText = function (t, e) {
        var i,
            r,
            n = this.altitudeMode_,
            o = t.split(qf),
            s = {},
            a = [],
            h = 2e3,
            l = 0,
            u = 1,
            p = -1;

        for (i = 0, r = o.length; i < r; ++i) {
          var c = o[i],
              d = void 0;

          if ("B" == c.charAt(0)) {
            if (d = Kf.exec(c)) {
              var f = parseInt(d[1], 10),
                  _ = parseInt(d[2], 10),
                  g = parseInt(d[3], 10),
                  y = parseInt(d[4], 10) + parseInt(d[5], 10) / 6e4;

              "S" == d[6] && (y = -y);
              var v = parseInt(d[7], 10) + parseInt(d[8], 10) / 6e4;

              if ("W" == d[9] && (v = -v), a.push(v, y), n != Wf.NONE) {
                var m = void 0;
                m = n == Wf.GPS ? parseInt(d[11], 10) : n == Wf.BAROMETRIC ? parseInt(d[12], 10) : 0, a.push(m);
              }

              var x = Date.UTC(h, l, u, f, _, g);
              x < p && (x = Date.UTC(h, l, u + 1, f, _, g)), a.push(x / 1e3), p = x;
            }
          } else "H" == c.charAt(0) && ((d = Zf.exec(c)) ? (u = parseInt(d[1], 10), l = parseInt(d[2], 10) - 1, h = 2e3 + parseInt(d[3], 10)) : (d = Hf.exec(c)) && (s[d[1]] = d[2].trim()));
        }

        if (0 === a.length) return null;
        var E = n == Wf.NONE ? At.XYM : At.XYZM,
            S = new hr(a, E),
            T = new B(dd(S, !1, e));
        return T.setProperties(s), T;
      }, e.prototype.readFeaturesFromText = function (t, e) {
        var i = this.readFeatureFromText(t, e);
        return i ? [i] : [];
      }, e;
    }(zf),
        Qf = ["http://www.google.com/kml/ext/2.2"],
        $f = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        t_ = {
      fraction: wu.FRACTION,
      pixels: wu.PIXELS,
      insetPixels: wu.PIXELS
    },
        e_ = fu($f, {
      ExtendedData: H_,
      Region: Z_,
      MultiGeometry: hu(j_, "geometry"),
      LineString: hu(G_, "geometry"),
      LinearRing: hu(D_, "geometry"),
      Point: hu(U_, "geometry"),
      Polygon: hu(B_, "geometry"),
      Style: hu(X_),
      StyleMap: function StyleMap(t, e) {
        var i = S_(t, e);
        if (!i) return;
        var r = e[e.length - 1];
        Array.isArray(i) ? r.Style = i : "string" == typeof i ? r.styleUrl = i : Y(!1, 38);
      },
      address: hu(Nd),
      description: hu(Nd),
      name: hu(Nd),
      open: hu(Ld),
      phoneNumber: hu(Nd),
      styleUrl: hu(m_),
      visibility: hu(Ld)
    }, fu(Qf, {
      MultiTrack: hu(function (t, e) {
        var i = gu([], O_, t, e);
        if (!i) return;
        return new Pc(i);
      }, "geometry"),
      Track: hu(b_, "geometry")
    })),
        i_ = fu($f, {
      ExtendedData: H_,
      Region: Z_,
      Link: function Link(t, e) {
        _u(r_, t, e);
      },
      address: hu(Nd),
      description: hu(Nd),
      name: hu(Nd),
      open: hu(Ld),
      phoneNumber: hu(Nd),
      visibility: hu(Ld)
    }),
        r_ = fu($f, {
      href: hu(m_)
    }),
        n_ = fu($f, {
      LatLonAltBox: function LatLonAltBox(t, e) {
        var i = gu({}, Q_, t, e);
        if (!i) return;
        var r = e[e.length - 1],
            n = [parseFloat(i.west), parseFloat(i.south), parseFloat(i.east), parseFloat(i.north)];
        r.extent = n, r.altitudeMode = i.altitudeMode, r.minAltitude = parseFloat(i.minAltitude), r.maxAltitude = parseFloat(i.maxAltitude);
      },
      Lod: function Lod(t, e) {
        var i = gu({}, $_, t, e);
        if (!i) return;
        var r = e[e.length - 1];
        r.minLodPixels = parseFloat(i.minLodPixels), r.maxLodPixels = parseFloat(i.maxLodPixels), r.minFadeExtent = parseFloat(i.minFadeExtent), r.maxFadeExtent = parseFloat(i.maxFadeExtent);
      }
    }),
        o_ = fu($f, ["Document", "Placemark"]),
        s_ = fu($f, {
      Document: lu(function (t, e, i) {
        vu({
          node: t
        }, ng, og, e, i, void 0, this);
      }),
      Placemark: lu(Og)
    }),
        a_ = null;

    var h_,
        l_ = null;
    var u_,
        p_ = null;
    var c_ = null;
    var d_ = null;
    var f_ = null;

    var __ = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        f_ || (a_ = new mr({
          color: kf = [255, 255, 255, 1]
        }), jf = [20, 2], Uf = wu.PIXELS, Yf = wu.PIXELS, Bf = [64, 64], Vf = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", Xf = .5, l_ = new Ou({
          anchor: jf,
          anchorOrigin: Lu.BOTTOM_LEFT,
          anchorXUnits: Uf,
          anchorYUnits: Yf,
          crossOrigin: "anonymous",
          rotation: 0,
          scale: Xf,
          size: Bf,
          src: Vf
        }), h_ = "NO_IMAGE", p_ = new Er({
          color: kf,
          width: 1
        }), u_ = new Er({
          color: [51, 51, 51, 1],
          width: 2
        }), c_ = new Rr({
          font: "bold 16px Helvetica",
          fill: a_,
          stroke: u_,
          scale: .8
        }), d_ = new Nu({
          fill: a_,
          image: l_,
          text: c_,
          stroke: p_,
          zIndex: 0
        }), f_ = [d_]), this.dataProjection = Ee("EPSG:4326"), this.defaultStyle_ = i.defaultStyle ? i.defaultStyle : f_, this.extractStyles_ = void 0 === i.extractStyles || i.extractStyles, this.writeStyles_ = void 0 === i.writeStyles || i.writeStyles, this.sharedStyles_ = {}, this.showPointNames_ = void 0 === i.showPointNames || i.showPointNames;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readDocumentOrFolder_ = function (t, e) {
        var i = gu([], fu($f, {
          Document: nu(this.readDocumentOrFolder_, this),
          Folder: nu(this.readDocumentOrFolder_, this),
          Placemark: ou(this.readPlacemark_, this),
          Style: this.readSharedStyle_.bind(this),
          StyleMap: this.readSharedStyleMap_.bind(this)
        }), t, e, this);
        return i || void 0;
      }, e.prototype.readPlacemark_ = function (t, e) {
        var i = gu({
          geometry: null
        }, e_, t, e);

        if (i) {
          var r = new B(),
              n = t.getAttribute("id");
          null !== n && r.setId(n);
          var o = e[0],
              s = i.geometry;

          if (s && dd(s, !1, o), r.setGeometry(s), delete i.geometry, this.extractStyles_) {
            var a = function (t, e, i, r, n) {
              return function (o, s) {
                var a,
                    h = n,
                    l = "";

                if (h) {
                  var u = o.getGeometry();
                  u && (h = u.getType() === Nt.POINT);
                }

                if (h && (l = o.get("name"), h = h && !!l), t) return h ? (a = g_(t[0], l), t.concat(a)) : t;

                if (e) {
                  var p = function t(e, i, r) {
                    return Array.isArray(e) ? e : "string" == typeof e ? (!(e in r) && "#" + e in r && (e = "#" + e), t(r[e], i, r)) : i;
                  }(e, i, r);

                  return h ? (a = g_(p[0], l), p.concat(a)) : p;
                }

                return h ? (a = g_(i[0], l), i.concat(a)) : i;
              };
            }(i.Style, i.styleUrl, this.defaultStyle_, this.sharedStyles_, this.showPointNames_);

            r.setStyle(a);
          }

          return delete i.Style, r.setProperties(i), r;
        }
      }, e.prototype.readSharedStyle_ = function (t, e) {
        var i = t.getAttribute("id");

        if (null !== i) {
          var r = X_(t, e);

          if (r) {
            var n,
                o = t.baseURI;
            if (o && "about:blank" != o || (o = window.location.href), o) n = new URL("#" + i, o).href;else n = "#" + i;
            this.sharedStyles_[n] = r;
          }
        }
      }, e.prototype.readSharedStyleMap_ = function (t, e) {
        var i = t.getAttribute("id");

        if (null !== i) {
          var r = S_(t, e);

          if (r) {
            var n,
                o = t.baseURI;
            if (o && "about:blank" != o || (o = window.location.href), o) n = new URL("#" + i, o).href;else n = "#" + i;
            this.sharedStyles_[n] = r;
          }
        }
      }, e.prototype.readFeatureFromNode = function (t, e) {
        if (!X($f, t.namespaceURI)) return null;
        var i = this.readPlacemark_(t, [this.getReadOptions(t, e)]);
        return i || null;
      }, e.prototype.readFeaturesFromNode = function (t, e) {
        var i;
        if (!X($f, t.namespaceURI)) return [];
        var r = t.localName;
        if ("Document" == r || "Folder" == r) return (i = this.readDocumentOrFolder_(t, [this.getReadOptions(t, e)])) || [];

        if ("Placemark" == r) {
          var n = this.readPlacemark_(t, [this.getReadOptions(t, e)]);
          return n ? [n] : [];
        }

        if ("kml" == r) {
          i = [];

          for (var o = t.firstElementChild; o; o = o.nextElementSibling) {
            var s = this.readFeaturesFromNode(o, e);
            s && K(i, s);
          }

          return i;
        }

        return [];
      }, e.prototype.readName = function (t) {
        if (t) {
          if ("string" == typeof t) {
            var e = ru(t);
            return this.readNameFromDocument(e);
          }

          return iu(t) ? this.readNameFromDocument(t) : this.readNameFromNode(t);
        }
      }, e.prototype.readNameFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) {
            var i = this.readNameFromNode(e);
            if (i) return i;
          }
        }
      }, e.prototype.readNameFromNode = function (t) {
        for (var e = t.firstElementChild; e; e = e.nextElementSibling) {
          if (X($f, e.namespaceURI) && "name" == e.localName) return Nd(e);
        }

        for (var i = t.firstElementChild; i; i = i.nextElementSibling) {
          var r = i.localName;

          if (X($f, i.namespaceURI) && ("Document" == r || "Folder" == r || "Placemark" == r || "kml" == r)) {
            var n = this.readNameFromNode(i);
            if (n) return n;
          }
        }
      }, e.prototype.readNetworkLinks = function (t) {
        var e = [];

        if ("string" == typeof t) {
          var i = ru(t);
          K(e, this.readNetworkLinksFromDocument(i));
        } else iu(t) ? K(e, this.readNetworkLinksFromDocument(t)) : K(e, this.readNetworkLinksFromNode(t));

        return e;
      }, e.prototype.readNetworkLinksFromDocument = function (t) {
        for (var e = [], i = t.firstChild; i; i = i.nextSibling) {
          i.nodeType == Node.ELEMENT_NODE && K(e, this.readNetworkLinksFromNode(i));
        }

        return e;
      }, e.prototype.readNetworkLinksFromNode = function (t) {
        for (var e = [], i = t.firstElementChild; i; i = i.nextElementSibling) {
          if (X($f, i.namespaceURI) && "NetworkLink" == i.localName) {
            var r = gu({}, i_, i, []);
            e.push(r);
          }
        }

        for (var n = t.firstElementChild; n; n = n.nextElementSibling) {
          var o = n.localName;
          !X($f, n.namespaceURI) || "Document" != o && "Folder" != o && "kml" != o || K(e, this.readNetworkLinksFromNode(n));
        }

        return e;
      }, e.prototype.readRegion = function (t) {
        var e = [];

        if ("string" == typeof t) {
          var i = ru(t);
          K(e, this.readRegionFromDocument(i));
        } else iu(t) ? K(e, this.readRegionFromDocument(t)) : K(e, this.readRegionFromNode(t));

        return e;
      }, e.prototype.readRegionFromDocument = function (t) {
        for (var e = [], i = t.firstChild; i; i = i.nextSibling) {
          i.nodeType == Node.ELEMENT_NODE && K(e, this.readRegionFromNode(i));
        }

        return e;
      }, e.prototype.readRegionFromNode = function (t) {
        for (var e = [], i = t.firstElementChild; i; i = i.nextElementSibling) {
          if (X($f, i.namespaceURI) && "Region" == i.localName) {
            var r = gu({}, n_, i, []);
            e.push(r);
          }
        }

        for (var n = t.firstElementChild; n; n = n.nextElementSibling) {
          var o = n.localName;
          !X($f, n.namespaceURI) || "Document" != o && "Folder" != o && "kml" != o || K(e, this.readRegionFromNode(n));
        }

        return e;
      }, e.prototype.writeFeaturesNode = function (t, e) {
        e = this.adaptOptions(e);
        var i = tu($f[4], "kml"),
            r = "http://www.w3.org/2000/xmlns/";
        i.setAttributeNS(r, "xmlns:gx", Qf[0]), i.setAttributeNS(r, "xmlns:xsi", $l), i.setAttributeNS($l, "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var n = {
          node: i
        },
            o = {};
        t.length > 1 ? o.Document = t : 1 == t.length && (o.Placemark = t[0]);
        var s = o_[i.namespaceURI],
            a = du(o, s);
        return vu(n, s_, cu, a, [e], s, this), i;
      }, e;
    }(Td);

    function g_(t, e) {
      var i = null,
          r = [0, 0],
          n = "start";

      if (t.getImage()) {
        var o = t.getImage().getImageSize();

        if (null === o && (o = Bf), 2 == o.length) {
          var s = t.getImage().getScale();
          r[0] = s * o[0] / 2, r[1] = -s * o[1] / 2, n = "left";
        }
      }

      if (null !== t.getText()) {
        var a = t.getText();
        (i = a.clone()).setFont(a.getFont() || c_.getFont()), i.setScale(a.getScale() || c_.getScale()), i.setFill(a.getFill() || c_.getFill()), i.setStroke(a.getStroke() || u_);
      } else i = c_.clone();

      return i.setText(e), i.setOffsetX(r[0]), i.setOffsetY(r[1]), i.setTextAlign(n), new Nu({
        text: i
      });
    }

    function y_(t) {
      var e = eu(t, !1),
          i = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(e);

      if (i) {
        var r = i[1];
        return [parseInt(r.substr(6, 2), 16), parseInt(r.substr(4, 2), 16), parseInt(r.substr(2, 2), 16), parseInt(r.substr(0, 2), 16) / 255];
      }
    }

    function v_(t) {
      for (var e, i = eu(t, !1), r = [], n = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i; e = n.exec(i);) {
        var o = parseFloat(e[1]),
            s = parseFloat(e[2]),
            a = e[3] ? parseFloat(e[3]) : 0;
        r.push(o, s, a), i = i.substr(e[0].length);
      }

      if ("" === i) return r;
    }

    function m_(t) {
      var e = eu(t, !1).trim(),
          i = t.baseURI;
      return i && "about:blank" != i || (i = window.location.href), i ? new URL(e, i).href : e;
    }

    function x_(t) {
      return bd(t);
    }

    var E_ = fu($f, {
      Pair: function Pair(t, e) {
        var i = gu({}, q_, t, e);
        if (!i) return;
        var r = i.key;

        if (r && "normal" == r) {
          var n = i.styleUrl;
          n && (e[e.length - 1] = n);
          var o = i.Style;
          o && (e[e.length - 1] = o);
        }
      }
    });

    function S_(t, e) {
      return gu(void 0, E_, t, e);
    }

    var T_ = fu($f, {
      Icon: hu(function (t, e) {
        var i = gu({}, M_, t, e);
        return i || null;
      }),
      heading: hu(bd),
      hotSpot: hu(function (t) {
        var e,
            i = t.getAttribute("xunits"),
            r = t.getAttribute("yunits");
        return e = "insetPixels" !== i ? "insetPixels" !== r ? Lu.BOTTOM_LEFT : Lu.TOP_LEFT : "insetPixels" !== r ? Lu.BOTTOM_RIGHT : Lu.TOP_RIGHT, {
          x: parseFloat(t.getAttribute("x")),
          xunits: t_[i],
          y: parseFloat(t.getAttribute("y")),
          yunits: t_[r],
          origin: e
        };
      }),
      scale: hu(x_)
    });
    var C_ = fu($f, {
      color: hu(y_),
      scale: hu(x_)
    });
    var R_ = fu($f, {
      color: hu(y_),
      width: hu(bd)
    });
    var w_ = fu($f, {
      color: hu(y_),
      fill: hu(Ld),
      outline: hu(Ld)
    });
    var I_ = fu($f, {
      coordinates: su(v_)
    });

    function L_(t, e) {
      return gu(null, I_, t, e);
    }

    var O_ = fu(Qf, {
      Track: ou(b_)
    });
    var P_ = fu($f, {
      when: function when(t, e) {
        var i = e[e.length - 1].whens,
            r = eu(t, !1),
            n = Date.parse(r);
        i.push(isNaN(n) ? 0 : n);
      }
    }, fu(Qf, {
      coord: function coord(t, e) {
        var i = e[e.length - 1].flatCoordinates,
            r = eu(t, !1),
            n = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(r);

        if (n) {
          var o = parseFloat(n[1]),
              s = parseFloat(n[2]),
              a = parseFloat(n[3]);
          i.push(o, s, a, 0);
        } else i.push(0, 0, 0, 0);
      }
    }));

    function b_(t, e) {
      var i = gu({
        flatCoordinates: [],
        whens: []
      }, P_, t, e);

      if (i) {
        for (var r = i.flatCoordinates, n = i.whens, o = 0, s = Math.min(r.length, n.length); o < s; ++o) {
          r[4 * o + 3] = n[o];
        }

        return new hr(r, At.XYZM);
      }
    }

    var M_ = fu($f, {
      href: hu(m_)
    }, fu(Qf, {
      x: hu(bd),
      y: hu(bd),
      w: hu(bd),
      h: hu(bd)
    }));
    var F_ = fu($f, {
      coordinates: su(v_)
    });

    function A_(t, e) {
      return gu(null, F_, t, e);
    }

    var N_ = fu($f, {
      extrude: hu(Ld),
      tessellate: hu(Ld),
      altitudeMode: hu(Nd)
    });

    function G_(t, e) {
      var i = gu({}, N_, t, e),
          r = A_(t, e);

      if (r) {
        var n = new hr(r, At.XYZ);
        return n.setProperties(i), n;
      }
    }

    function D_(t, e) {
      var i = gu({}, N_, t, e),
          r = A_(t, e);

      if (r) {
        var n = new Ii(r, At.XYZ, [r.length]);
        return n.setProperties(i), n;
      }
    }

    var k_ = fu($f, {
      LineString: ou(G_),
      LinearRing: ou(D_),
      MultiGeometry: ou(j_),
      Point: ou(U_),
      Polygon: ou(B_)
    });

    function j_(t, e) {
      var i,
          r = gu([], k_, t, e);
      if (!r) return null;
      if (0 === r.length) return new ud(r);

      for (var n, o, s = !0, a = r[0].getType(), h = 1, l = r.length; h < l; ++h) {
        if (r[h].getType() != a) {
          s = !1;
          break;
        }
      }

      if (s) {
        if (a == Nt.POINT) {
          var u = r[0];
          n = u.getLayout(), o = u.getFlatCoordinates();

          for (var p = 1, c = r.length; p < c; ++p) {
            K(o, r[p].getFlatCoordinates());
          }

          z_(i = new bc(o, n), r);
        } else a == Nt.LINE_STRING ? z_(i = new Pc(r), r) : a == Nt.POLYGON ? z_(i = new Fc(r), r) : a == Nt.GEOMETRY_COLLECTION ? i = new ud(r) : Y(!1, 37);
      } else i = new ud(r);
      return i;
    }

    function U_(t, e) {
      var i = gu({}, N_, t, e),
          r = A_(t, e);

      if (r) {
        var n = new ci(r, At.XYZ);
        return n.setProperties(i), n;
      }
    }

    var Y_ = fu($f, {
      innerBoundaryIs: function innerBoundaryIs(t, e) {
        var i = gu(void 0, tg, t, e);

        if (i) {
          var r = e[e.length - 1];
          r.push(i);
        }
      },
      outerBoundaryIs: function outerBoundaryIs(t, e) {
        var i = gu(void 0, eg, t, e);

        if (i) {
          var r = e[e.length - 1];
          r[0] = i;
        }
      }
    });

    function B_(t, e) {
      var i = gu({}, N_, t, e),
          r = gu([null], Y_, t, e);

      if (r && r[0]) {
        for (var n = r[0], o = [n.length], s = 1, a = r.length; s < a; ++s) {
          K(n, r[s]), o.push(n.length);
        }

        var h = new Ii(n, At.XYZ, o);
        return h.setProperties(i), h;
      }
    }

    var V_ = fu($f, {
      IconStyle: function IconStyle(t, e) {
        var i = gu({}, T_, t, e);

        if (i) {
          var r,
              n,
              o,
              s,
              a = e[e.length - 1],
              h = "Icon" in i ? i.Icon : {},
              l = !("Icon" in i) || Object.keys(h).length > 0,
              u = h.href;
          u ? r = u : l && (r = Vf);
          var p,
              c = Lu.BOTTOM_LEFT,
              d = i.hotSpot;
          d ? (n = [d.x, d.y], o = d.xunits, s = d.yunits, c = d.origin) : r === Vf ? (n = jf, o = Uf, s = Yf) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(r) && (n = [.5, 0], o = wu.FRACTION, s = wu.FRACTION);
          var f,
              _ = h.x,
              g = h.y;
          void 0 !== _ && void 0 !== g && (p = [_, g]);
          var y,
              v = h.w,
              m = h.h;
          void 0 !== v && void 0 !== m && (f = [v, m]);
          var x = i.heading;
          void 0 !== x && (y = Vt(x));
          var E = i.scale;

          if (l) {
            r == Vf && (f = Bf, void 0 === E && (E = Xf));
            var S = new Ou({
              anchor: n,
              anchorOrigin: c,
              anchorXUnits: o,
              anchorYUnits: s,
              crossOrigin: "anonymous",
              offset: p,
              offsetOrigin: Lu.BOTTOM_LEFT,
              rotation: y,
              scale: E,
              size: f,
              src: r
            });
            a.imageStyle = S;
          } else a.imageStyle = h_;
        }
      },
      LabelStyle: function LabelStyle(t, e) {
        var i = gu({}, C_, t, e);

        if (i) {
          var r = e[e.length - 1],
              n = new Rr({
            fill: new mr({
              color: "color" in i ? i.color : kf
            }),
            scale: i.scale
          });
          r.textStyle = n;
        }
      },
      LineStyle: function LineStyle(t, e) {
        var i = gu({}, R_, t, e);

        if (i) {
          var r = e[e.length - 1],
              n = new Er({
            color: "color" in i ? i.color : kf,
            width: "width" in i ? i.width : 1
          });
          r.strokeStyle = n;
        }
      },
      PolyStyle: function PolyStyle(t, e) {
        var i = gu({}, w_, t, e);

        if (i) {
          var r = e[e.length - 1],
              n = new mr({
            color: "color" in i ? i.color : kf
          });
          r.fillStyle = n;
          var o = i.fill;
          void 0 !== o && (r.fill = o);
          var s = i.outline;
          void 0 !== s && (r.outline = s);
        }
      }
    });

    function X_(t, e) {
      var i = gu({}, V_, t, e);
      if (!i) return null;
      var r,
          n = "fillStyle" in i ? i.fillStyle : a_,
          o = i.fill;
      void 0 === o || o || (n = null), "imageStyle" in i ? i.imageStyle != h_ && (r = i.imageStyle) : r = l_;
      var s = "textStyle" in i ? i.textStyle : c_,
          a = "strokeStyle" in i ? i.strokeStyle : p_,
          h = i.outline;
      return void 0 === h || h || (a = null), [new Nu({
        fill: n,
        image: r,
        stroke: a,
        text: s,
        zIndex: void 0
      })];
    }

    function z_(t, e) {
      var i,
          r,
          n,
          o = e.length,
          s = new Array(e.length),
          a = new Array(e.length),
          h = new Array(e.length);
      i = r = n = !1;

      for (var l = 0; l < o; ++l) {
        var u = e[l];
        s[l] = u.get("extrude"), a[l] = u.get("tessellate"), h[l] = u.get("altitudeMode"), i = i || void 0 !== s[l], r = r || void 0 !== a[l], n = n || h[l];
      }

      i && t.set("extrude", s), r && t.set("tessellate", a), n && t.set("altitudeMode", h);
    }

    var W_ = fu($f, {
      displayName: hu(Nd),
      value: hu(Nd)
    });
    var K_ = fu($f, {
      Data: function Data(t, e) {
        var i = t.getAttribute("name");

        _u(W_, t, e);

        var r = e[e.length - 1];
        null !== i ? r[i] = r.value : null !== r.displayName && (r[r.displayName] = r.value), delete r.value;
      },
      SchemaData: function SchemaData(t, e) {
        _u(J_, t, e);
      }
    });

    function H_(t, e) {
      _u(K_, t, e);
    }

    function Z_(t, e) {
      _u(n_, t, e);
    }

    var q_ = fu($f, {
      Style: hu(X_),
      key: hu(Nd),
      styleUrl: hu(m_)
    });
    var J_ = fu($f, {
      SimpleData: function SimpleData(t, e) {
        var i = t.getAttribute("name");

        if (null !== i) {
          var r = Nd(t),
              n = e[e.length - 1];
          n[i] = r;
        }
      }
    });
    var Q_ = fu($f, {
      altitudeMode: hu(Nd),
      minAltitude: hu(bd),
      maxAltitude: hu(bd),
      north: hu(bd),
      south: hu(bd),
      east: hu(bd),
      west: hu(bd)
    });
    var $_ = fu($f, {
      minLodPixels: hu(bd),
      maxLodPixels: hu(bd),
      minFadeExtent: hu(bd),
      maxFadeExtent: hu(bd)
    });
    var tg = fu($f, {
      LinearRing: su(L_)
    });
    var eg = fu($f, {
      LinearRing: su(L_)
    });

    function ig(t, e) {
      for (var i = _r(e), r = [255 * (4 == i.length ? i[3] : 1), i[2], i[1], i[0]], n = 0; n < 4; ++n) {
        var o = Math.floor(r[n]).toString(16);
        r[n] = 1 == o.length ? "0" + o : o;
      }

      jd(t, r.join(""));
    }

    var rg = fu($f, {
      Data: lu(function (t, e, i) {
        t.setAttribute("name", e.name);
        var r = {
          node: t
        },
            n = e.value;
        "object" == _typeof(n) ? (null !== n && n.displayName && vu(r, rg, cu, [n.displayName], i, ["displayName"]), null !== n && n.value && vu(r, rg, cu, [n.value], i, ["value"])) : vu(r, rg, cu, [n], i, ["value"]);
      }),
      value: lu(function (t, e) {
        jd(t, e);
      }),
      displayName: lu(function (t, e) {
        !function (t, e) {
          t.appendChild(Ql.createCDATASection(e));
        }(t, e);
      })
    });

    var ng = fu($f, {
      Placemark: lu(Og)
    }),
        og = function og(t, e, i) {
      return tu(e[e.length - 1].node.namespaceURI, "Placemark");
    };

    var sg = pu("Data");

    var ag = fu($f, ["href"], fu(Qf, ["x", "y", "w", "h"])),
        hg = fu($f, {
      href: lu(jd)
    }, fu(Qf, {
      x: lu(Dd),
      y: lu(Dd),
      w: lu(Dd),
      h: lu(Dd)
    })),
        lg = function lg(t, e, i) {
      return tu(Qf[0], "gx:" + i);
    };

    var ug = fu($f, ["scale", "heading", "Icon", "hotSpot"]),
        pg = fu($f, {
      Icon: lu(function (t, e, i) {
        var r = {
          node: t
        },
            n = i[i.length - 1].node,
            o = ag[n.namespaceURI],
            s = du(e, o);
        vu(r, hg, cu, s, i, o), s = du(e, o = ag[Qf[0]]), vu(r, hg, lg, s, i, o);
      }),
      heading: lu(Dd),
      hotSpot: lu(function (t, e) {
        t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("xunits", e.xunits), t.setAttribute("yunits", e.yunits);
      }),
      scale: lu(jg)
    });
    var cg = fu($f, ["color", "scale"]),
        dg = fu($f, {
      color: lu(ig),
      scale: lu(jg)
    });

    var fg = fu($f, ["color", "width"]),
        _g = fu($f, {
      color: lu(ig),
      width: lu(Dd)
    });

    var gg = {
      Point: "Point",
      LineString: "LineString",
      LinearRing: "LinearRing",
      Polygon: "Polygon",
      MultiPoint: "MultiGeometry",
      MultiLineString: "MultiGeometry",
      MultiPolygon: "MultiGeometry",
      GeometryCollection: "MultiGeometry"
    },
        yg = function yg(t, e, i) {
      if (t) return tu(e[e.length - 1].node.namespaceURI, gg[t.getType()]);
    },
        vg = pu("Point"),
        mg = pu("LineString"),
        xg = pu("LinearRing"),
        Eg = pu("Polygon"),
        Sg = fu($f, {
      LineString: lu(Mg),
      Point: lu(Mg),
      Polygon: lu(Gg),
      GeometryCollection: lu(Tg)
    });

    function Tg(t, e, i) {
      var r,
          n,
          o = {
        node: t
      },
          s = e.getType();
      s == Nt.GEOMETRY_COLLECTION ? (r = e.getGeometries(), n = yg) : s == Nt.MULTI_POINT ? (r = e.getPoints(), n = vg) : s == Nt.MULTI_LINE_STRING ? (r = e.getLineStrings(), n = mg) : s == Nt.MULTI_POLYGON ? (r = e.getPolygons(), n = Eg) : Y(!1, 39), vu(o, Sg, n, r, i);
    }

    var Cg = fu($f, {
      LinearRing: lu(Mg)
    });

    function Rg(t, e, i) {
      vu({
        node: t
      }, Cg, xg, [e], i);
    }

    var wg = fu($f, {
      ExtendedData: lu(function (t, e, i) {
        for (var r = {
          node: t
        }, n = e.names, o = e.values, s = n.length, a = 0; a < s; a++) {
          vu(r, rg, sg, [{
            name: n[a],
            value: o[a]
          }], i);
        }
      }),
      MultiGeometry: lu(Tg),
      LineString: lu(Mg),
      LinearRing: lu(Mg),
      Point: lu(Mg),
      Polygon: lu(Gg),
      Style: lu(function (t, e, i) {
        var r = {
          node: t
        },
            n = {},
            o = e.getFill(),
            s = e.getStroke(),
            a = e.getImage(),
            h = e.getText();
        a && "function" == typeof a.getSrc && (n.IconStyle = a);
        h && (n.LabelStyle = h);
        s && (n.LineStyle = s);
        o && (n.PolyStyle = o);
        var l = i[i.length - 1].node,
            u = Ug[l.namespaceURI],
            p = du(n, u);
        vu(r, Yg, cu, p, i, u);
      }),
      address: lu(jd),
      description: lu(jd),
      name: lu(jd),
      open: lu(Gd),
      phoneNumber: lu(jd),
      styleUrl: lu(jd),
      visibility: lu(Gd)
    }),
        Ig = fu($f, ["name", "open", "visibility", "address", "phoneNumber", "description", "styleUrl", "Style"]),
        Lg = pu("ExtendedData");

    function Og(t, e, i) {
      var r = {
        node: t
      };
      e.getId() && t.setAttribute("id", e.getId());
      var n = e.getProperties(),
          o = {
        address: 1,
        description: 1,
        name: 1,
        open: 1,
        phoneNumber: 1,
        styleUrl: 1,
        visibility: 1
      };
      o[e.getGeometryName()] = 1;
      var s = Object.keys(n || {}).sort().filter(function (t) {
        return !o[t];
      });

      if (s.length > 0) {
        var a = du(n, s);
        vu(r, wg, Lg, [{
          names: s,
          values: a
        }], i);
      }

      var h = e.getStyleFunction();

      if (h) {
        var l = h(e, 0);

        if (l) {
          var u = Array.isArray(l) ? l[0] : l;
          this.writeStyles_ && (n.Style = u);
          var p = u.getText();
          p && (n.name = p.getText());
        }
      }

      var c = i[i.length - 1].node,
          d = Ig[c.namespaceURI],
          f = du(n, d);
      vu(r, wg, cu, f, i, d);
      var _ = i[0],
          g = e.getGeometry();
      g && (g = dd(g, !0, _)), vu(r, wg, yg, [g], i);
    }

    var Pg = fu($f, ["extrude", "tessellate", "altitudeMode", "coordinates"]),
        bg = fu($f, {
      extrude: lu(Gd),
      tessellate: lu(Gd),
      altitudeMode: lu(jd),
      coordinates: lu(function (t, e, i) {
        var r,
            n = i[i.length - 1],
            o = n.layout,
            s = n.stride;
        o == At.XY || o == At.XYM ? r = 2 : o == At.XYZ || o == At.XYZM ? r = 3 : Y(!1, 34);
        var a = e.length,
            h = "";

        if (a > 0) {
          h += e[0];

          for (var l = 1; l < r; ++l) {
            h += "," + e[l];
          }

          for (var u = s; u < a; u += s) {
            h += " " + e[u];

            for (var p = 1; p < r; ++p) {
              h += "," + e[u + p];
            }
          }
        }

        jd(t, h);
      })
    });

    function Mg(t, e, i) {
      var r = e.getFlatCoordinates(),
          n = {
        node: t
      };
      n.layout = e.getLayout(), n.stride = e.getStride();
      var o = e.getProperties();
      o.coordinates = r;
      var s = i[i.length - 1].node,
          a = Pg[s.namespaceURI],
          h = du(o, a);
      vu(n, bg, cu, h, i, a);
    }

    var Fg = fu($f, {
      outerBoundaryIs: lu(Rg),
      innerBoundaryIs: lu(Rg)
    }),
        Ag = pu("innerBoundaryIs"),
        Ng = pu("outerBoundaryIs");

    function Gg(t, e, i) {
      var r = e.getLinearRings(),
          n = r.shift(),
          o = {
        node: t
      };
      vu(o, Fg, Ag, r, i), vu(o, Fg, Ng, [n], i);
    }

    var Dg = fu($f, {
      color: lu(ig)
    }),
        kg = pu("color");

    function jg(t, e) {
      Dd(t, Math.round(1e6 * e) / 1e6);
    }

    var Ug = fu($f, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
        Yg = fu($f, {
      IconStyle: lu(function (t, e, i) {
        var r = {
          node: t
        },
            n = {},
            o = e.getSrc(),
            s = e.getSize(),
            a = e.getImageSize(),
            h = {
          href: o
        };

        if (s) {
          h.w = s[0], h.h = s[1];
          var l = e.getAnchor(),
              u = e.getOrigin();

          if (u && a && 0 !== u[0] && u[1] !== s[1] && (h.x = u[0], h.y = a[1] - (u[1] + s[1])), l && (l[0] !== s[0] / 2 || l[1] !== s[1] / 2)) {
            var p = {
              x: l[0],
              xunits: wu.PIXELS,
              y: s[1] - l[1],
              yunits: wu.PIXELS
            };
            n.hotSpot = p;
          }
        }

        n.Icon = h;
        var c = e.getScale();
        1 !== c && (n.scale = c);
        var d = e.getRotation();
        0 !== d && (n.heading = d);
        var f = i[i.length - 1].node,
            _ = ug[f.namespaceURI],
            g = du(n, _);
        vu(r, pg, cu, g, i, _);
      }),
      LabelStyle: lu(function (t, e, i) {
        var r = {
          node: t
        },
            n = {},
            o = e.getFill();
        o && (n.color = o.getColor());
        var s = e.getScale();
        s && 1 !== s && (n.scale = s);
        var a = i[i.length - 1].node,
            h = cg[a.namespaceURI],
            l = du(n, h);
        vu(r, dg, cu, l, i, h);
      }),
      LineStyle: lu(function (t, e, i) {
        var r = {
          node: t
        },
            n = {
          color: e.getColor(),
          width: e.getWidth()
        },
            o = i[i.length - 1].node,
            s = fg[o.namespaceURI],
            a = du(n, s);
        vu(r, _g, cu, a, i, s);
      }),
      PolyStyle: lu(function (t, e, i) {
        vu({
          node: t
        }, Dg, kg, [e.getColor()], i);
      })
    });

    var Bg = __,
        Vg = i(1),
        Xg = i.n(Vg),
        zg = [1, 0, 0, 1, 0, 0],
        Wg = function Wg(t, e, i, r, n) {
      this.extent_, this.id_ = n, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i, this.properties_ = r;
    };

    Wg.prototype.get = function (t) {
      return this.properties_[t];
    }, Wg.prototype.getExtent = function () {
      return this.extent_ || (this.extent_ = this.type_ === Nt.POINT ? pt(this.flatCoordinates_) : ct(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)), this.extent_;
    }, Wg.prototype.getFlatInteriorPoint = function () {
      if (!this.flatInteriorPoints_) {
        var t = Tt(this.getExtent());
        this.flatInteriorPoints_ = gi(this.flatCoordinates_, 0, this.ends_, 2, t, 0);
      }

      return this.flatInteriorPoints_;
    }, Wg.prototype.getFlatInteriorPoints = function () {
      if (!this.flatInteriorPoints_) {
        var t = Mc(this.flatCoordinates_, 0, this.ends_, 2);
        this.flatInteriorPoints_ = yi(this.flatCoordinates_, 0, this.ends_, 2, t);
      }

      return this.flatInteriorPoints_;
    }, Wg.prototype.getFlatMidpoint = function () {
      return this.flatMidpoints_ || (this.flatMidpoints_ = or(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, .5)), this.flatMidpoints_;
    }, Wg.prototype.getFlatMidpoints = function () {
      if (!this.flatMidpoints_) {
        this.flatMidpoints_ = [];

        for (var t = this.flatCoordinates_, e = 0, i = this.ends_, r = 0, n = i.length; r < n; ++r) {
          var o = i[r],
              s = or(t, e, o, 2, .5);
          K(this.flatMidpoints_, s), e = o;
        }
      }

      return this.flatMidpoints_;
    }, Wg.prototype.getId = function () {
      return this.id_;
    }, Wg.prototype.getOrientedFlatCoordinates = function () {
      return this.flatCoordinates_;
    }, Wg.prototype.getGeometry = function () {
      return this;
    }, Wg.prototype.getSimplifiedGeometry = function (t) {
      return this;
    }, Wg.prototype.getProperties = function () {
      return this.properties_;
    }, Wg.prototype.getStride = function () {
      return 2;
    }, Wg.prototype.getStyleFunction = function () {}, Wg.prototype.getType = function () {
      return this.type_;
    }, Wg.prototype.transform = function (t, e) {
      var i = (t = Ee(t)).getExtent(),
          r = t.getWorldExtent(),
          n = Rt(r) / Rt(i);
      Ye(zg, r[0], r[3], n, -n, 0, 0, 0), Gt(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, zg, this.flatCoordinates_);
    }, Wg.prototype.getEnds = Wg.prototype.getEndss = function () {
      return this.ends_;
    }, Wg.prototype.getFlatCoordinates = Wg.prototype.getOrientedFlatCoordinates;
    var Kg = Wg;

    function Hg(t, e, i) {
      if (3 === t) {
        var r = {
          keys: [],
          values: [],
          features: []
        },
            n = i.readVarint() + i.pos;
        i.readFields(Zg, r, n), r.length = r.features.length, r.length && (e[r.name] = r);
      }
    }

    function Zg(t, e, i) {
      if (15 === t) e.version = i.readVarint();else if (1 === t) e.name = i.readString();else if (5 === t) e.extent = i.readVarint();else if (2 === t) e.features.push(i.pos);else if (3 === t) e.keys.push(i.readString());else if (4 === t) {
        for (var r = null, n = i.readVarint() + i.pos; i.pos < n;) {
          r = 1 === (t = i.readVarint() >> 3) ? i.readString() : 2 === t ? i.readFloat() : 3 === t ? i.readDouble() : 4 === t ? i.readVarint64() : 5 === t ? i.readVarint() : 6 === t ? i.readSVarint() : 7 === t ? i.readBoolean() : null;
        }

        e.values.push(r);
      }
    }

    function qg(t, e, i) {
      if (1 == t) e.id = i.readVarint();else if (2 == t) for (var r = i.readVarint() + i.pos; i.pos < r;) {
        var n = e.layer.keys[i.readVarint()],
            o = e.layer.values[i.readVarint()];
        e.properties[n] = o;
      } else 3 == t ? e.type = i.readVarint() : 4 == t && (e.geometry = i.pos);
    }

    function Jg(t, e, i) {
      t.pos = e.features[i];
      var r = t.readVarint() + t.pos,
          n = {
        layer: e,
        type: 0,
        properties: {}
      };
      return t.readFields(qg, n, r), n;
    }

    var Qg = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.dataProjection = new ee({
          code: "",
          units: $t.TILE_PIXELS
        }), this.featureClass_ = i.featureClass ? i.featureClass : Kg, this.geometryName_ = i.geometryName, this.layerName_ = i.layerName ? i.layerName : "layer", this.layers_ = i.layers ? i.layers : null, this.extent_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readRawGeometry_ = function (t, e, i, r) {
        t.pos = e.geometry;

        for (var n = t.readVarint() + t.pos, o = 1, s = 0, a = 0, h = 0, l = 0, u = 0; t.pos < n;) {
          if (!s) {
            var p = t.readVarint();
            o = 7 & p, s = p >> 3;
          }

          s--, 1 === o || 2 === o ? (a += t.readSVarint(), h += t.readSVarint(), 1 === o && l > u && (r.push(l), u = l), i.push(a, h), l += 2) : 7 === o ? l > u && (i.push(i[u], i[u + 1]), l += 2) : Y(!1, 59);
        }

        l > u && (r.push(l), u = l);
      }, e.prototype.createFeature_ = function (t, e, i) {
        var r,
            n = e.type;
        if (0 === n) return null;
        var o = e.id,
            s = e.properties;
        s[this.layerName_] = e.layer.name;
        var a = [],
            h = [];
        this.readRawGeometry_(t, e, a, h);

        var l = function (t, e) {
          var i;
          1 === t ? i = 1 === e ? Nt.POINT : Nt.MULTI_POINT : 2 === t ? i = 1 === e ? Nt.LINE_STRING : Nt.MULTI_LINE_STRING : 3 === t && (i = Nt.POLYGON);
          return i;
        }(n, h.length);

        if (this.featureClass_ === Kg) r = new this.featureClass_(l, a, h, s, o);else {
          var u;

          if (l == Nt.POLYGON) {
            for (var p = [], c = 0, d = 0, f = 0, _ = h.length; f < _; ++f) {
              var g = h[f];
              Si(a, c, g, 2) || (p.push(h.slice(d, f)), d = f), c = g;
            }

            u = p.length > 1 ? new Fc(a, At.XY, p) : new Ii(a, At.XY, h);
          } else u = l === Nt.POINT ? new ci(a, At.XY) : l === Nt.LINE_STRING ? new hr(a, At.XY) : l === Nt.POLYGON ? new Ii(a, At.XY, h) : l === Nt.MULTI_POINT ? new bc(a, At.XY) : l === Nt.MULTI_LINE_STRING ? new Pc(a, At.XY, h) : null;

          r = new (0, this.featureClass_)(), this.geometryName_ && r.setGeometryName(this.geometryName_);
          var y = dd(u, !1, this.adaptOptions(i));
          r.setGeometry(y), r.setId(o), r.setProperties(s);
        }
        return r;
      }, e.prototype.getLastExtent = function () {
        return this.extent_;
      }, e.prototype.getType = function () {
        return Hl.ARRAY_BUFFER;
      }, e.prototype.readFeatures = function (t, e) {
        var i = this.layers_,
            r = new Xg.a(t),
            n = r.readFields(Hg, {}),
            o = [];

        for (var s in n) {
          if (!i || -1 != i.indexOf(s)) {
            for (var a = n[s], h = 0, l = a.length; h < l; ++h) {
              var u = Jg(r, a, h);
              o.push(this.createFeature_(r, u));
            }

            this.extent_ = a ? [0, 0, a.extent, a.extent] : null;
          }
        }

        return o;
      }, e.prototype.readProjection = function (t) {
        return this.dataProjection;
      }, e.prototype.setLayers = function (t) {
        this.layers_ = t;
      }, e;
    }(cd),
        $g = [null],
        ty = fu($g, {
      nd: function nd(t, e) {
        e[e.length - 1].ndrefs.push(t.getAttribute("ref"));
      },
      tag: ny
    }),
        ey = fu($g, {
      node: function node(t, e) {
        var i = e[0],
            r = e[e.length - 1],
            n = t.getAttribute("id"),
            o = [parseFloat(t.getAttribute("lon")), parseFloat(t.getAttribute("lat"))];
        r.nodes[n] = o;
        var s = gu({
          tags: {}
        }, ry, t, e);

        if (!d(s.tags)) {
          var a = new ci(o);
          dd(a, !1, i);
          var h = new B(a);
          h.setId(n), h.setProperties(s.tags), r.features.push(h);
        }
      },
      way: function way(t, e) {
        var i = gu({
          id: t.getAttribute("id"),
          ndrefs: [],
          tags: {}
        }, ty, t, e);
        e[e.length - 1].ways.push(i);
      }
    }),
        iy = function (t) {
      function e() {
        t.call(this), this.dataProjection = Ee("EPSG:4326");
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeaturesFromNode = function (t, e) {
        var i = this.getReadOptions(t, e);

        if ("osm" == t.localName) {
          for (var r = gu({
            nodes: {},
            ways: [],
            features: []
          }, ey, t, [i]), n = 0; n < r.ways.length; n++) {
            for (var o = r.ways[n], s = [], a = 0, h = o.ndrefs.length; a < h; a++) {
              K(s, r.nodes[o.ndrefs[a]]);
            }

            var l = void 0;
            dd(l = o.ndrefs[0] == o.ndrefs[o.ndrefs.length - 1] ? new Ii(s, At.XY, [s.length]) : new hr(s, At.XY), !1, i);
            var u = new B(l);
            u.setId(o.id), u.setProperties(o.tags), r.features.push(u);
          }

          if (r.features) return r.features;
        }

        return [];
      }, e;
    }(Td),
        ry = fu($g, {
      tag: ny
    });

    function ny(t, e) {
      e[e.length - 1].tags[t.getAttribute("k")] = t.getAttribute("v");
    }

    var oy = iy;

    function sy(t, e, i, r, n, o) {
      var s, a;
      void 0 !== n ? (s = n, a = void 0 !== o ? o : 0) : (s = [], a = 0);

      for (var h = e; h < i;) {
        var l = t[h++];
        s[a++] = t[h++], s[a++] = l;

        for (var u = 2; u < r; ++u) {
          s[a++] = t[h++];
        }
      }

      return s.length = a, s;
    }

    function ay(t, e, i) {
      var r,
          n = i || 1e5,
          o = new Array(e);

      for (r = 0; r < e; ++r) {
        o[r] = 0;
      }

      for (var s = 0, a = t.length; s < a;) {
        for (r = 0; r < e; ++r, ++s) {
          var h = t[s],
              l = h - o[r];
          o[r] = h, t[s] = l;
        }
      }

      return ly(t, n);
    }

    function hy(t, e, i) {
      var r,
          n = i || 1e5,
          o = new Array(e);

      for (r = 0; r < e; ++r) {
        o[r] = 0;
      }

      for (var s = uy(t, n), a = 0, h = s.length; a < h;) {
        for (r = 0; r < e; ++r, ++a) {
          o[r] += s[a], s[a] = o[r];
        }
      }

      return s;
    }

    function ly(t, e) {
      for (var i = e || 1e5, r = 0, n = t.length; r < n; ++r) {
        t[r] = Math.round(t[r] * i);
      }

      return function (t) {
        for (var e = 0, i = t.length; e < i; ++e) {
          var r = t[e];
          t[e] = r < 0 ? ~(r << 1) : r << 1;
        }

        return function (t) {
          for (var e = "", i = 0, r = t.length; i < r; ++i) {
            e += py(t[i]);
          }

          return e;
        }(t);
      }(t);
    }

    function uy(t, e) {
      for (var i = e || 1e5, r = function (t) {
        for (var e = function (t) {
          for (var e = [], i = 0, r = 0, n = 0, o = t.length; n < o; ++n) {
            var s = t.charCodeAt(n) - 63;
            i |= (31 & s) << r, s < 32 ? (e.push(i), i = 0, r = 0) : r += 5;
          }

          return e;
        }(t), i = 0, r = e.length; i < r; ++i) {
          var n = e[i];
          e[i] = 1 & n ? ~(n >> 1) : n >> 1;
        }

        return e;
      }(t), n = 0, o = r.length; n < o; ++n) {
        r[n] /= i;
      }

      return r;
    }

    function py(t) {
      for (var e, i = ""; t >= 32;) {
        e = 63 + (32 | 31 & t), i += String.fromCharCode(e), t >>= 5;
      }

      return e = t + 63, i += String.fromCharCode(e);
    }

    var cy = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.dataProjection = Ee("EPSG:4326"), this.factor_ = i.factor ? i.factor : 1e5, this.geometryLayout_ = i.geometryLayout ? i.geometryLayout : At.XY;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeatureFromText = function (t, e) {
        var i = this.readGeometryFromText(t, e);
        return new B(i);
      }, e.prototype.readFeaturesFromText = function (t, e) {
        return [this.readFeatureFromText(t, e)];
      }, e.prototype.readGeometryFromText = function (t, e) {
        var i = ze(this.geometryLayout_),
            r = hy(t, i, this.factor_);
        sy(r, 0, r.length, i, r);
        var n = ri(r, 0, r.length, i);
        return dd(new hr(n, this.geometryLayout_), !1, this.adaptOptions(e));
      }, e.prototype.writeFeatureText = function (t, e) {
        var i = t.getGeometry();
        return i ? this.writeGeometryText(i, e) : (Y(!1, 40), "");
      }, e.prototype.writeFeaturesText = function (t, e) {
        return this.writeFeatureText(t[0], e);
      }, e.prototype.writeGeometryText = function (t, e) {
        var i = (t = dd(t, !0, this.adaptOptions(e))).getFlatCoordinates(),
            r = t.getStride();
        return sy(i, 0, i.length, r, i), ay(i, r, this.factor_);
      }, e;
    }(zf),
        dy = {
      Point: function Point(t, e, i) {
        var r = t.coordinates;
        e && i && vy(r, e, i);
        return new ci(r);
      },
      LineString: function LineString(t, e) {
        var i = fy(t.arcs, e);
        return new hr(i);
      },
      Polygon: function Polygon(t, e) {
        for (var i = [], r = 0, n = t.arcs.length; r < n; ++r) {
          i[r] = fy(t.arcs[r], e);
        }

        return new Ii(i);
      },
      MultiPoint: function MultiPoint(t, e, i) {
        var r = t.coordinates;
        if (e && i) for (var n = 0, o = r.length; n < o; ++n) {
          vy(r[n], e, i);
        }
        return new bc(r);
      },
      MultiLineString: function MultiLineString(t, e) {
        for (var i = [], r = 0, n = t.arcs.length; r < n; ++r) {
          i[r] = fy(t.arcs[r], e);
        }

        return new Pc(i);
      },
      MultiPolygon: function MultiPolygon(t, e) {
        for (var i = [], r = 0, n = t.arcs.length; r < n; ++r) {
          for (var o = t.arcs[r], s = [], a = 0, h = o.length; a < h; ++a) {
            s[a] = fy(o[a], e);
          }

          i[r] = s;
        }

        return new Fc(i);
      }
    };

    function fy(t, e) {
      for (var i, r, n = [], o = 0, s = t.length; o < s; ++o) {
        i = t[o], o > 0 && n.pop(), r = i >= 0 ? e[i] : e[~i].slice().reverse(), n.push.apply(n, r);
      }

      for (var a = 0, h = n.length; a < h; ++a) {
        n[a] = n[a].slice();
      }

      return n;
    }

    function _y(t, e, i, r, n, o, s) {
      for (var a = t.geometries, h = [], l = 0, u = a.length; l < u; ++l) {
        h[l] = gy(a[l], e, i, r, n, o, s);
      }

      return h;
    }

    function gy(t, e, i, r, n, o, s) {
      var a,
          h = t.type,
          l = dy[h];
      a = "Point" === h || "MultiPoint" === h ? l(t, i, r) : l(t, e);
      var u = new B();
      u.setGeometry(dd(a, !1, s)), void 0 !== t.id && u.setId(t.id);
      var p = t.properties;
      return n && (p || (p = {}), p[n] = o), p && u.setProperties(p), u;
    }

    function yy(t, e, i) {
      for (var r = 0, n = 0, o = 0, s = t.length; o < s; ++o) {
        var a = t[o];
        r += a[0], n += a[1], a[0] = r, a[1] = n, vy(a, e, i);
      }
    }

    function vy(t, e, i) {
      t[0] = t[0] * e[0] + i[0], t[1] = t[1] * e[1] + i[1];
    }

    var my = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.layerName_ = i.layerName, this.layers_ = i.layers ? i.layers : null, this.dataProjection = Ee(i.dataProjection ? i.dataProjection : "EPSG:4326");
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFeaturesFromObject = function (t, e) {
        if ("Topology" == t.type) {
          var i,
              r = t,
              n = null,
              o = null;
          r.transform && (n = (i = r.transform).scale, o = i.translate);
          var s = r.arcs;
          i && function (t, e, i) {
            for (var r = 0, n = t.length; r < n; ++r) {
              yy(t[r], e, i);
            }
          }(s, n, o);
          var a,
              h = [],
              l = r.objects,
              u = this.layerName_;

          for (var p in l) {
            this.layers_ && -1 == this.layers_.indexOf(p) || ("GeometryCollection" === l[p].type ? (a = l[p], h.push.apply(h, _y(a, s, n, o, u, p, e))) : (a = l[p], h.push(gy(a, s, n, o, u, p, e))));
          }

          return h;
        }

        return [];
      }, e.prototype.readProjectionFromObject = function (t) {
        return this.dataProjection;
      }, e;
    }(_d),
        xy = function xy(t) {
      this.tagName_ = t;
    };

    xy.prototype.getTagName = function () {
      return this.tagName_;
    };

    var Ey = xy,
        Sy = function (t) {
      function e(e, i) {
        t.call(this, e), this.conditions = i, Y(this.conditions.length >= 2, 57);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ey),
        Ty = function (t) {
      function e(e) {
        t.call(this, "And", Array.prototype.slice.call(arguments));
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Sy),
        Cy = function (t) {
      function e(e, i, r) {
        t.call(this, "BBOX"), this.geometryName = e, this.extent = i, this.srsName = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ey),
        Ry = function (t) {
      function e(e, i, r, n) {
        t.call(this, e), this.geometryName = i || "the_geom", this.geometry = r, this.srsName = n;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ey),
        wy = function (t) {
      function e(e, i, r) {
        t.call(this, "Contains", e, i, r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ry),
        Iy = function (t) {
      function e(e, i) {
        t.call(this, e), this.propertyName = i;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ey),
        Ly = function (t) {
      function e(e, i, r) {
        t.call(this, "During", e), this.begin = i, this.end = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Iy),
        Oy = function (t) {
      function e(e, i, r, n) {
        t.call(this, e, i), this.expression = r, this.matchCase = n;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Iy),
        Py = function (t) {
      function e(e, i, r) {
        t.call(this, "PropertyIsEqualTo", e, i, r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Oy),
        by = function (t) {
      function e(e, i) {
        t.call(this, "PropertyIsGreaterThan", e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Oy),
        My = function (t) {
      function e(e, i) {
        t.call(this, "PropertyIsGreaterThanOrEqualTo", e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Oy),
        Fy = function (t) {
      function e(e, i, r) {
        t.call(this, "Intersects", e, i, r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ry),
        Ay = function (t) {
      function e(e, i, r) {
        t.call(this, "PropertyIsBetween", e), this.lowerBoundary = i, this.upperBoundary = r;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Iy),
        Ny = function (t) {
      function e(e, i, r, n, o, s) {
        t.call(this, "PropertyIsLike", e), this.pattern = i, this.wildCard = void 0 !== r ? r : "*", this.singleChar = void 0 !== n ? n : ".", this.escapeChar = void 0 !== o ? o : "!", this.matchCase = s;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Iy),
        Gy = function (t) {
      function e(e) {
        t.call(this, "PropertyIsNull", e);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Iy),
        Dy = function (t) {
      function e(e, i) {
        t.call(this, "PropertyIsLessThan", e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Oy),
        ky = function (t) {
      function e(e, i) {
        t.call(this, "PropertyIsLessThanOrEqualTo", e, i);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Oy),
        jy = function (t) {
      function e(e) {
        t.call(this, "Not"), this.condition = e;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ey),
        Uy = function (t) {
      function e(e, i, r) {
        t.call(this, "PropertyIsNotEqualTo", e, i, r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Oy),
        Yy = function (t) {
      function e(e) {
        t.call(this, "Or", Array.prototype.slice.call(arguments));
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Sy),
        By = function (t) {
      function e(e, i, r) {
        t.call(this, "Within", e, i, r);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
    }(Ry);

    function Vy(t) {
      var e = [null].concat(Array.prototype.slice.call(arguments));
      return new (Function.prototype.bind.apply(Ty, e))();
    }

    function Xy(t, e, i) {
      return new Cy(t, e, i);
    }

    var zy = {
      "http://www.opengis.net/gml": {
        boundedBy: hu(Id.prototype.readGeometryElement, "bounds")
      }
    },
        Wy = {
      "http://www.opengis.net/wfs": {
        totalInserted: hu(Fd),
        totalUpdated: hu(Fd),
        totalDeleted: hu(Fd)
      }
    },
        Ky = {
      "http://www.opengis.net/wfs": {
        TransactionSummary: hu(function (t, e) {
          return gu({}, Wy, t, e);
        }, "transactionSummary"),
        InsertResults: hu(function (t, e) {
          return gu([], ov, t, e);
        }, "insertIds")
      }
    },
        Hy = {
      "http://www.opengis.net/wfs": {
        PropertyName: lu(jd)
      }
    },
        Zy = {
      "http://www.opengis.net/wfs": {
        Insert: lu(function (t, e, i) {
          var r = i[i.length - 1],
              n = r.featureType,
              o = r.featureNS,
              s = r.gmlVersion,
              a = tu(o, n);
          t.appendChild(a), 2 === s ? Zd.prototype.writeFeatureElement(a, e, i) : Vd.prototype.writeFeatureElement(a, e, i);
        }),
        Update: lu(function (t, e, i) {
          var r = i[i.length - 1];
          Y(void 0 !== e.getId(), 27);
          var n = r.featureType,
              o = r.featurePrefix,
              s = r.featureNS,
              a = av(o, n),
              h = e.getGeometryName();
          t.setAttribute("typeName", a), t.setAttributeNS(Jy, "xmlns:" + o, s);
          var l = e.getId();

          if (void 0 !== l) {
            for (var u = e.getKeys(), p = [], c = 0, d = u.length; c < d; c++) {
              var f = e.get(u[c]);

              if (void 0 !== f) {
                var _ = u[c];
                f && "function" == typeof f.getSimplifiedGeometry && (_ = h), p.push({
                  name: _,
                  value: f
                });
              }
            }

            vu({
              gmlVersion: r.gmlVersion,
              node: t,
              hasZ: r.hasZ,
              srsName: r.srsName
            }, Zy, pu("Property"), p, i), sv(t, l, i);
          }
        }),
        Delete: lu(function (t, e, i) {
          var r = i[i.length - 1];
          Y(void 0 !== e.getId(), 26);
          var n = r.featureType,
              o = r.featurePrefix,
              s = r.featureNS,
              a = av(o, n);
          t.setAttribute("typeName", a), t.setAttributeNS(Jy, "xmlns:" + o, s);
          var h = e.getId();
          void 0 !== h && sv(t, h, i);
        }),
        Property: lu(function (t, e, i) {
          var r = tu($y, "Name"),
              n = i[i.length - 1].gmlVersion;

          if (t.appendChild(r), jd(r, e.name), void 0 !== e.value && null !== e.value) {
            var o = tu($y, "Value");
            t.appendChild(o), e.value && "function" == typeof e.value.getSimplifiedGeometry ? 2 === n ? Zd.prototype.writeGeometryElement(o, e.value, i) : Vd.prototype.writeGeometryElement(o, e.value, i) : jd(o, e.value);
          }
        }),
        Native: lu(function (t, e, i) {
          e.vendorId && t.setAttribute("vendorId", e.vendorId);
          void 0 !== e.safeToIgnore && t.setAttribute("safeToIgnore", String(e.safeToIgnore));
          void 0 !== e.value && jd(t, e.value);
        })
      }
    },
        qy = "feature",
        Jy = "http://www.w3.org/2000/xmlns/",
        Qy = "http://www.opengis.net/ogc",
        $y = "http://www.opengis.net/wfs",
        tv = "http://www.opengis.net/fes",
        ev = {
      "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd",
      "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"
    },
        iv = "1.1.0",
        rv = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.featureType_ = i.featureType, this.featureNS_ = i.featureNS, this.gmlFormat_ = i.gmlFormat ? i.gmlFormat : new Vd(), this.schemaLocation_ = i.schemaLocation ? i.schemaLocation : ev[iv];
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getFeatureType = function () {
        return this.featureType_;
      }, e.prototype.setFeatureType = function (t) {
        this.featureType_ = t;
      }, e.prototype.readFeaturesFromNode = function (t, e) {
        var i = {
          node: t
        };
        u(i, {
          featureType: this.featureType_,
          featureNS: this.featureNS_
        }), u(i, this.getReadOptions(t, e || {}));
        var r = [i];
        this.gmlFormat_.FEATURE_COLLECTION_PARSERS[Cd].featureMember = ou(Id.prototype.readFeaturesInternal);
        var n = gu([], this.gmlFormat_.FEATURE_COLLECTION_PARSERS, t, r, this.gmlFormat_);
        return n || (n = []), n;
      }, e.prototype.readTransactionResponse = function (t) {
        if (t) {
          if ("string" == typeof t) {
            var e = ru(t);
            return this.readTransactionResponseFromDocument(e);
          }

          return iu(t) ? this.readTransactionResponseFromDocument(t) : this.readTransactionResponseFromNode(t);
        }
      }, e.prototype.readFeatureCollectionMetadata = function (t) {
        if (t) {
          if ("string" == typeof t) {
            var e = ru(t);
            return this.readFeatureCollectionMetadataFromDocument(e);
          }

          return iu(t) ? this.readFeatureCollectionMetadataFromDocument(t) : this.readFeatureCollectionMetadataFromNode(t);
        }
      }, e.prototype.readFeatureCollectionMetadataFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) return this.readFeatureCollectionMetadataFromNode(e);
        }
      }, e.prototype.readFeatureCollectionMetadataFromNode = function (t) {
        var e = {},
            i = Ad(t.getAttribute("numberOfFeatures"));
        return e.numberOfFeatures = i, gu(e, zy, t, [], this.gmlFormat_);
      }, e.prototype.readTransactionResponseFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) return this.readTransactionResponseFromNode(e);
        }
      }, e.prototype.readTransactionResponseFromNode = function (t) {
        return gu({}, Ky, t, []);
      }, e.prototype.writeGetFeature = function (t) {
        var e,
            i = tu($y, "GetFeature");

        if (i.setAttribute("service", "WFS"), i.setAttribute("version", "1.1.0"), t && (t.handle && i.setAttribute("handle", t.handle), t.outputFormat && i.setAttribute("outputFormat", t.outputFormat), void 0 !== t.maxFeatures && i.setAttribute("maxFeatures", String(t.maxFeatures)), t.resultType && i.setAttribute("resultType", t.resultType), void 0 !== t.startIndex && i.setAttribute("startIndex", String(t.startIndex)), void 0 !== t.count && i.setAttribute("count", String(t.count)), void 0 !== t.viewParams && i.setAttribute("viewParams ", t.viewParams), e = t.filter, t.bbox)) {
          Y(t.geometryName, 12);
          var r = Xy(t.geometryName, t.bbox, t.srsName);
          e = e ? Vy(e, r) : r;
        }

        i.setAttributeNS($l, "xsi:schemaLocation", this.schemaLocation_);
        var n = {
          node: i
        };
        return u(n, {
          srsName: t.srsName,
          featureNS: t.featureNS ? t.featureNS : this.featureNS_,
          featurePrefix: t.featurePrefix,
          geometryName: t.geometryName,
          filter: e,
          propertyNames: t.propertyNames ? t.propertyNames : []
        }), Y(Array.isArray(t.featureTypes), 11), function (t, e, i) {
          var r = i[i.length - 1],
              n = u({}, r);
          n.node = t, vu(n, hv, pu("Query"), e, i);
        }(i, t.featureTypes, [n]), i;
      }, e.prototype.writeTransaction = function (t, e, i, r) {
        var n,
            o,
            s = [],
            a = tu($y, "Transaction"),
            h = r.version ? r.version : iv,
            l = "1.0.0" === h ? 2 : 3;
        a.setAttribute("service", "WFS"), a.setAttribute("version", h), r && (n = r.gmlOptions ? r.gmlOptions : {}, r.handle && a.setAttribute("handle", r.handle));
        var p = ev[h];
        a.setAttributeNS($l, "xsi:schemaLocation", p);
        var c = r.featurePrefix ? r.featurePrefix : qy;
        return t && (o = u({
          node: a
        }, {
          featureNS: r.featureNS,
          featureType: r.featureType,
          featurePrefix: c,
          gmlVersion: l,
          hasZ: r.hasZ,
          srsName: r.srsName
        }), u(o, n), vu(o, Zy, pu("Insert"), t, s)), e && (o = u({
          node: a
        }, {
          featureNS: r.featureNS,
          featureType: r.featureType,
          featurePrefix: c,
          gmlVersion: l,
          hasZ: r.hasZ,
          srsName: r.srsName
        }), u(o, n), vu(o, Zy, pu("Update"), e, s)), i && vu({
          node: a,
          featureNS: r.featureNS,
          featureType: r.featureType,
          featurePrefix: c,
          gmlVersion: l,
          srsName: r.srsName
        }, Zy, pu("Delete"), i, s), r.nativeElements && vu({
          node: a,
          featureNS: r.featureNS,
          featureType: r.featureType,
          featurePrefix: c,
          gmlVersion: l,
          srsName: r.srsName
        }, Zy, pu("Native"), r.nativeElements, s), a;
      }, e.prototype.readProjectionFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) return this.readProjectionFromNode(e);
        }

        return null;
      }, e.prototype.readProjectionFromNode = function (t) {
        if (t.firstElementChild && t.firstElementChild.firstElementChild) for (var e = (t = t.firstElementChild.firstElementChild).firstElementChild; e; e = e.nextElementSibling) {
          if (0 !== e.childNodes.length && (1 !== e.childNodes.length || 3 !== e.firstChild.nodeType)) {
            var i = [{}];
            return this.gmlFormat_.readGeometryElement(e, i), Ee(i.pop().srsName);
          }
        }
        return null;
      }, e;
    }(Td);

    var nv = {
      "http://www.opengis.net/ogc": {
        FeatureId: ou(function (t, e) {
          return t.getAttribute("fid");
        })
      }
    };
    var ov = {
      "http://www.opengis.net/wfs": {
        Feature: function Feature(t, e) {
          _u(nv, t, e);
        }
      }
    };

    function sv(t, e, i) {
      var r = tu(Qy, "Filter"),
          n = tu(Qy, "FeatureId");
      r.appendChild(n), n.setAttribute("fid", e), t.appendChild(r);
    }

    function av(t, e) {
      var i = (t = t || qy) + ":";
      return 0 === e.indexOf(i) ? e : i + e;
    }

    var hv = {
      "http://www.opengis.net/wfs": {
        Query: lu(function (t, e, i) {
          var r,
              n = i[i.length - 1],
              o = n.featurePrefix,
              s = n.featureNS,
              a = n.propertyNames,
              h = n.srsName;
          r = o ? av(o, e) : e;
          t.setAttribute("typeName", r), h && t.setAttribute("srsName", h);
          s && t.setAttributeNS(Jy, "xmlns:" + o, s);
          var l = u({}, n);
          l.node = t, vu(l, Hy, pu("PropertyName"), a, i);
          var p = n.filter;

          if (p) {
            var c = tu(Qy, "Filter");
            t.appendChild(c), lv(c, p, i);
          }
        })
      },
      "http://www.opengis.net/ogc": {
        During: lu(function (t, e, i) {
          var r = tu(tv, "ValueReference");
          jd(r, e.propertyName), t.appendChild(r);
          var n = tu(Cd, "TimePeriod");
          t.appendChild(n);
          var o = tu(Cd, "begin");
          n.appendChild(o), _v(o, e.begin);
          var s = tu(Cd, "end");
          n.appendChild(s), _v(s, e.end);
        }),
        And: lu(uv),
        Or: lu(uv),
        Not: lu(function (t, e, i) {
          var r = {
            node: t
          },
              n = e.condition;
          vu(r, hv, pu(n.getTagName()), [n], i);
        }),
        BBOX: lu(function (t, e, i) {
          i[i.length - 1].srsName = e.srsName, dv(t, e.geometryName), Vd.prototype.writeGeometryElement(t, e.extent, i);
        }),
        Contains: lu(function (t, e, i) {
          i[i.length - 1].srsName = e.srsName, dv(t, e.geometryName), Vd.prototype.writeGeometryElement(t, e.geometry, i);
        }),
        Intersects: lu(function (t, e, i) {
          i[i.length - 1].srsName = e.srsName, dv(t, e.geometryName), Vd.prototype.writeGeometryElement(t, e.geometry, i);
        }),
        Within: lu(function (t, e, i) {
          i[i.length - 1].srsName = e.srsName, dv(t, e.geometryName), Vd.prototype.writeGeometryElement(t, e.geometry, i);
        }),
        PropertyIsEqualTo: lu(pv),
        PropertyIsNotEqualTo: lu(pv),
        PropertyIsLessThan: lu(pv),
        PropertyIsLessThanOrEqualTo: lu(pv),
        PropertyIsGreaterThan: lu(pv),
        PropertyIsGreaterThanOrEqualTo: lu(pv),
        PropertyIsNull: lu(function (t, e, i) {
          dv(t, e.propertyName);
        }),
        PropertyIsBetween: lu(function (t, e, i) {
          dv(t, e.propertyName);
          var r = tu(Qy, "LowerBoundary");
          t.appendChild(r), fv(r, "" + e.lowerBoundary);
          var n = tu(Qy, "UpperBoundary");
          t.appendChild(n), fv(n, "" + e.upperBoundary);
        }),
        PropertyIsLike: lu(function (t, e, i) {
          t.setAttribute("wildCard", e.wildCard), t.setAttribute("singleChar", e.singleChar), t.setAttribute("escapeChar", e.escapeChar), void 0 !== e.matchCase && t.setAttribute("matchCase", e.matchCase.toString());
          dv(t, e.propertyName), fv(t, "" + e.pattern);
        })
      }
    };

    function lv(t, e, i) {
      vu({
        node: t
      }, hv, pu(e.getTagName()), [e], i);
    }

    function uv(t, e, i) {
      for (var r = {
        node: t
      }, n = e.conditions, o = 0, s = n.length; o < s; ++o) {
        var a = n[o];
        vu(r, hv, pu(a.getTagName()), [a], i);
      }
    }

    function pv(t, e, i) {
      void 0 !== e.matchCase && t.setAttribute("matchCase", e.matchCase.toString()), dv(t, e.propertyName), fv(t, "" + e.expression);
    }

    function cv(t, e, i) {
      var r = tu(Qy, t);
      jd(r, i), e.appendChild(r);
    }

    function dv(t, e) {
      cv("PropertyName", t, e);
    }

    function fv(t, e) {
      cv("Literal", t, e);
    }

    function _v(t, e) {
      var i = tu(Cd, "TimeInstant");
      t.appendChild(i);
      var r = tu(Cd, "timePosition");
      i.appendChild(r), jd(r, e);
    }

    var gv = rv,
        yv = {
      POINT: ci,
      LINESTRING: hr,
      POLYGON: Ii,
      MULTIPOINT: bc,
      MULTILINESTRING: Pc,
      MULTIPOLYGON: Fc
    },
        vv = "EMPTY",
        mv = "Z",
        xv = "M",
        Ev = 1,
        Sv = 2,
        Tv = 3,
        Cv = 4,
        Rv = 5,
        wv = 6,
        Iv = {};

    for (var Lv in Nt) {
      Iv[Lv] = Nt[Lv].toUpperCase();
    }

    var Ov = function Ov(t) {
      this.wkt = t, this.index_ = -1;
    };

    Ov.prototype.isAlpha_ = function (t) {
      return t >= "a" && t <= "z" || t >= "A" && t <= "Z";
    }, Ov.prototype.isNumeric_ = function (t, e) {
      return t >= "0" && t <= "9" || "." == t && !(void 0 !== e && e);
    }, Ov.prototype.isWhiteSpace_ = function (t) {
      return " " == t || "\t" == t || "\r" == t || "\n" == t;
    }, Ov.prototype.nextChar_ = function () {
      return this.wkt.charAt(++this.index_);
    }, Ov.prototype.nextToken = function () {
      var t,
          e = this.nextChar_(),
          i = this.index_,
          r = e;
      if ("(" == e) t = Sv;else if ("," == e) t = Rv;else if (")" == e) t = Tv;else if (this.isNumeric_(e) || "-" == e) t = Cv, r = this.readNumber_();else if (this.isAlpha_(e)) t = Ev, r = this.readText_();else {
        if (this.isWhiteSpace_(e)) return this.nextToken();
        if ("" !== e) throw new Error("Unexpected character: " + e);
        t = wv;
      }
      return {
        position: i,
        value: r,
        type: t
      };
    }, Ov.prototype.readNumber_ = function () {
      var t,
          e = this.index_,
          i = !1,
          r = !1;

      do {
        "." == t ? i = !0 : "e" != t && "E" != t || (r = !0), t = this.nextChar_();
      } while (this.isNumeric_(t, i) || !r && ("e" == t || "E" == t) || r && ("-" == t || "+" == t));

      return parseFloat(this.wkt.substring(e, this.index_--));
    }, Ov.prototype.readText_ = function () {
      var t,
          e = this.index_;

      do {
        t = this.nextChar_();
      } while (this.isAlpha_(t));

      return this.wkt.substring(e, this.index_--).toUpperCase();
    };

    var Pv = function Pv(t) {
      this.lexer_ = t, this.token_, this.layout_ = At.XY;
    };

    function bv(t) {
      var e = t.getCoordinates();
      return 0 === e.length ? "" : e.join(" ");
    }

    function Mv(t) {
      for (var e = t.getCoordinates(), i = [], r = 0, n = e.length; r < n; ++r) {
        i.push(e[r].join(" "));
      }

      return i.join(",");
    }

    function Fv(t) {
      for (var e = [], i = t.getLinearRings(), r = 0, n = i.length; r < n; ++r) {
        e.push("(" + Mv(i[r]) + ")");
      }

      return e.join(",");
    }

    Pv.prototype.consume_ = function () {
      this.token_ = this.lexer_.nextToken();
    }, Pv.prototype.isTokenType = function (t) {
      return this.token_.type == t;
    }, Pv.prototype.match = function (t) {
      var e = this.isTokenType(t);
      return e && this.consume_(), e;
    }, Pv.prototype.parse = function () {
      return this.consume_(), this.parseGeometry_();
    }, Pv.prototype.parseGeometryLayout_ = function () {
      var t = At.XY,
          e = this.token_;

      if (this.isTokenType(Ev)) {
        var i = e.value;
        i === mv ? t = At.XYZ : i === xv ? t = At.XYM : "ZM" === i && (t = At.XYZM), t !== At.XY && this.consume_();
      }

      return t;
    }, Pv.prototype.parseGeometryCollectionText_ = function () {
      if (this.match(Sv)) {
        var t = [];

        do {
          t.push(this.parseGeometry_());
        } while (this.match(Rv));

        if (this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return [];

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parsePointText_ = function () {
      if (this.match(Sv)) {
        var t = this.parsePoint_();
        if (this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return null;

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parseLineStringText_ = function () {
      if (this.match(Sv)) {
        var t = this.parsePointList_();
        if (this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return [];

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parsePolygonText_ = function () {
      if (this.match(Sv)) {
        var t = this.parseLineStringTextList_();
        if (this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return [];

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parseMultiPointText_ = function () {
      var t;

      if (this.match(Sv)) {
        if (t = this.token_.type == Sv ? this.parsePointTextList_() : this.parsePointList_(), this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return [];

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parseMultiLineStringText_ = function () {
      if (this.match(Sv)) {
        var t = this.parseLineStringTextList_();
        if (this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return [];

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parseMultiPolygonText_ = function () {
      if (this.match(Sv)) {
        var t = this.parsePolygonTextList_();
        if (this.match(Tv)) return t;
      } else if (this.isEmptyGeometry_()) return [];

      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parsePoint_ = function () {
      for (var t = [], e = this.layout_.length, i = 0; i < e; ++i) {
        var r = this.token_;
        if (!this.match(Cv)) break;
        t.push(r.value);
      }

      if (t.length == e) return t;
      throw new Error(this.formatErrorMessage_());
    }, Pv.prototype.parsePointList_ = function () {
      for (var t = [this.parsePoint_()]; this.match(Rv);) {
        t.push(this.parsePoint_());
      }

      return t;
    }, Pv.prototype.parsePointTextList_ = function () {
      for (var t = [this.parsePointText_()]; this.match(Rv);) {
        t.push(this.parsePointText_());
      }

      return t;
    }, Pv.prototype.parseLineStringTextList_ = function () {
      for (var t = [this.parseLineStringText_()]; this.match(Rv);) {
        t.push(this.parseLineStringText_());
      }

      return t;
    }, Pv.prototype.parsePolygonTextList_ = function () {
      for (var t = [this.parsePolygonText_()]; this.match(Rv);) {
        t.push(this.parsePolygonText_());
      }

      return t;
    }, Pv.prototype.isEmptyGeometry_ = function () {
      var t = this.isTokenType(Ev) && this.token_.value == vv;
      return t && this.consume_(), t;
    }, Pv.prototype.formatErrorMessage_ = function () {
      return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
    }, Pv.prototype.parseGeometry_ = function () {
      var t = this.token_;

      if (this.match(Ev)) {
        var e = t.value;

        if (this.layout_ = this.parseGeometryLayout_(), "GEOMETRYCOLLECTION" == e) {
          var i = this.parseGeometryCollectionText_();
          return new ud(i);
        }

        var r,
            n = yv[e];
        if (!n) throw new Error("Invalid geometry type: " + e);

        switch (e) {
          case "POINT":
            r = this.parsePointText_();
            break;

          case "LINESTRING":
            r = this.parseLineStringText_();
            break;

          case "POLYGON":
            r = this.parsePolygonText_();
            break;

          case "MULTIPOINT":
            r = this.parseMultiPointText_();
            break;

          case "MULTILINESTRING":
            r = this.parseMultiLineStringText_();
            break;

          case "MULTIPOLYGON":
            r = this.parseMultiPolygonText_();
            break;

          default:
            throw new Error("Invalid geometry type: " + e);
        }

        return r || (r = n === yv.POINT ? [NaN, NaN] : []), new n(r, this.layout_);
      }

      throw new Error(this.formatErrorMessage_());
    };
    var Av = {
      Point: bv,
      LineString: Mv,
      Polygon: Fv,
      MultiPoint: function MultiPoint(t) {
        for (var e = [], i = t.getPoints(), r = 0, n = i.length; r < n; ++r) {
          e.push("(" + bv(i[r]) + ")");
        }

        return e.join(",");
      },
      MultiLineString: function MultiLineString(t) {
        for (var e = [], i = t.getLineStrings(), r = 0, n = i.length; r < n; ++r) {
          e.push("(" + Mv(i[r]) + ")");
        }

        return e.join(",");
      },
      MultiPolygon: function MultiPolygon(t) {
        for (var e = [], i = t.getPolygons(), r = 0, n = i.length; r < n; ++r) {
          e.push("(" + Fv(i[r]) + ")");
        }

        return e.join(",");
      },
      GeometryCollection: function GeometryCollection(t) {
        for (var e = [], i = t.getGeometries(), r = 0, n = i.length; r < n; ++r) {
          e.push(Nv(i[r]));
        }

        return e.join(",");
      }
    };

    function Nv(t) {
      var e = t.getType(),
          i = (0, Av[e])(t);

      if (e = e.toUpperCase(), "function" == typeof t.getFlatCoordinates) {
        var r = function (t) {
          var e = t.getLayout(),
              i = "";
          return e !== At.XYZ && e !== At.XYZM || (i += mv), e !== At.XYM && e !== At.XYZM || (i += xv), i;
        }(t);

        r.length > 0 && (e += " " + r);
      }

      return 0 === i.length ? e + " " + vv : e + "(" + i + ")";
    }

    var Gv = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.splitCollection_ = void 0 !== i.splitCollection && i.splitCollection;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.parse_ = function (t) {
        var e = new Ov(t);
        return new Pv(e).parse();
      }, e.prototype.readFeatureFromText = function (t, e) {
        var i = this.readGeometryFromText(t, e);

        if (i) {
          var r = new B();
          return r.setGeometry(i), r;
        }

        return null;
      }, e.prototype.readFeaturesFromText = function (t, e) {
        for (var i = [], r = this.readGeometryFromText(t, e), n = [], o = 0, s = (i = this.splitCollection_ && r.getType() == Nt.GEOMETRY_COLLECTION ? r.getGeometriesArray() : [r]).length; o < s; ++o) {
          var a = new B();
          a.setGeometry(i[o]), n.push(a);
        }

        return n;
      }, e.prototype.readGeometryFromText = function (t, e) {
        var i = this.parse_(t);
        return i ? dd(i, !1, e) : null;
      }, e.prototype.writeFeatureText = function (t, e) {
        var i = t.getGeometry();
        return i ? this.writeGeometryText(i, e) : "";
      }, e.prototype.writeFeaturesText = function (t, e) {
        if (1 == t.length) return this.writeFeatureText(t[0], e);

        for (var i = [], r = 0, n = t.length; r < n; ++r) {
          i.push(t[r].getGeometry());
        }

        var o = new ud(i);
        return this.writeGeometryText(o, e);
      }, e.prototype.writeGeometryText = function (t, e) {
        return Nv(dd(t, !0, e));
      }, e;
    }(zf),
        Dv = "http://www.w3.org/1999/xlink";

    function kv(t) {
      return t.getAttributeNS(Dv, "href");
    }

    var jv = function jv() {};

    jv.prototype.read = function (t) {
      if (t) {
        if ("string" == typeof t) {
          var e = ru(t);
          return this.readFromDocument(e);
        }

        return iu(t) ? this.readFromDocument(t) : this.readFromNode(t);
      }

      return null;
    }, jv.prototype.readFromDocument = function (t) {}, jv.prototype.readFromNode = function (t) {};

    var Uv = jv,
        Yv = [null, "http://www.opengis.net/wms"],
        Bv = fu(Yv, {
      Service: hu(function (t, e) {
        return gu({}, zv, t, e);
      }),
      Capability: hu(function (t, e) {
        return gu({}, Vv, t, e);
      })
    }),
        Vv = fu(Yv, {
      Request: hu(function (t, e) {
        return gu({}, $v, t, e);
      }),
      Exception: hu(function (t, e) {
        return gu([], Zv, t, e);
      }),
      Layer: hu(function (t, e) {
        return gu({}, qv, t, e);
      })
    }),
        Xv = function (t) {
      function e() {
        t.call(this), this.version = void 0;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) return this.readFromNode(e);
        }

        return null;
      }, e.prototype.readFromNode = function (t) {
        this.version = t.getAttribute("version").trim();
        var e = gu({
          version: this.version
        }, Bv, t, []);
        return e || null;
      }, e;
    }(Uv),
        zv = fu(Yv, {
      Name: hu(Nd),
      Title: hu(Nd),
      Abstract: hu(Nd),
      KeywordList: hu(lm),
      OnlineResource: hu(kv),
      ContactInformation: hu(function (t, e) {
        return gu({}, Wv, t, e);
      }),
      Fees: hu(Nd),
      AccessConstraints: hu(Nd),
      LayerLimit: hu(Fd),
      MaxWidth: hu(Fd),
      MaxHeight: hu(Fd)
    }),
        Wv = fu(Yv, {
      ContactPersonPrimary: hu(function (t, e) {
        return gu({}, Kv, t, e);
      }),
      ContactPosition: hu(Nd),
      ContactAddress: hu(function (t, e) {
        return gu({}, Hv, t, e);
      }),
      ContactVoiceTelephone: hu(Nd),
      ContactFacsimileTelephone: hu(Nd),
      ContactElectronicMailAddress: hu(Nd)
    }),
        Kv = fu(Yv, {
      ContactPerson: hu(Nd),
      ContactOrganization: hu(Nd)
    }),
        Hv = fu(Yv, {
      AddressType: hu(Nd),
      Address: hu(Nd),
      City: hu(Nd),
      StateOrProvince: hu(Nd),
      PostCode: hu(Nd),
      Country: hu(Nd)
    }),
        Zv = fu(Yv, {
      Format: ou(Nd)
    }),
        qv = fu(Yv, {
      Name: hu(Nd),
      Title: hu(Nd),
      Abstract: hu(Nd),
      KeywordList: hu(lm),
      CRS: au(Nd),
      EX_GeographicBoundingBox: hu(function (t, e) {
        var i = gu({}, Qv, t, e);
        if (!i) return;
        var r = i.westBoundLongitude,
            n = i.southBoundLatitude,
            o = i.eastBoundLongitude,
            s = i.northBoundLatitude;
        if (void 0 === r || void 0 === n || void 0 === o || void 0 === s) return;
        return [r, n, o, s];
      }),
      BoundingBox: au(function (t, e) {
        var i = [Md(t.getAttribute("minx")), Md(t.getAttribute("miny")), Md(t.getAttribute("maxx")), Md(t.getAttribute("maxy"))],
            r = [Md(t.getAttribute("resx")), Md(t.getAttribute("resy"))];
        return {
          crs: t.getAttribute("CRS"),
          extent: i,
          res: r
        };
      }),
      Dimension: au(function (t, e) {
        return {
          name: t.getAttribute("name"),
          units: t.getAttribute("units"),
          unitSymbol: t.getAttribute("unitSymbol"),
          default: t.getAttribute("default"),
          multipleValues: Od(t.getAttribute("multipleValues")),
          nearestValue: Od(t.getAttribute("nearestValue")),
          current: Od(t.getAttribute("current")),
          values: Nd(t)
        };
      }),
      Attribution: hu(function (t, e) {
        return gu({}, Jv, t, e);
      }),
      AuthorityURL: au(function (t, e) {
        var i = sm(t, e);
        if (i) return i.name = t.getAttribute("name"), i;
        return;
      }),
      Identifier: au(Nd),
      MetadataURL: au(function (t, e) {
        var i = sm(t, e);
        if (i) return i.type = t.getAttribute("type"), i;
        return;
      }),
      DataURL: au(sm),
      FeatureListURL: au(sm),
      Style: au(function (t, e) {
        return gu({}, rm, t, e);
      }),
      MinScaleDenominator: hu(bd),
      MaxScaleDenominator: hu(bd),
      Layer: au(function (t, e) {
        var i = e[e.length - 1],
            r = gu({}, qv, t, e);
        if (!r) return;
        var n = Od(t.getAttribute("queryable"));
        void 0 === n && (n = i.queryable);
        r.queryable = void 0 !== n && n;
        var o = Ad(t.getAttribute("cascaded"));
        void 0 === o && (o = i.cascaded);
        r.cascaded = o;
        var s = Od(t.getAttribute("opaque"));
        void 0 === s && (s = i.opaque);
        r.opaque = void 0 !== s && s;
        var a = Od(t.getAttribute("noSubsets"));
        void 0 === a && (a = i.noSubsets);
        r.noSubsets = void 0 !== a && a;
        var h = Md(t.getAttribute("fixedWidth"));
        h || (h = i.fixedWidth);
        r.fixedWidth = h;
        var l = Md(t.getAttribute("fixedHeight"));
        l || (l = i.fixedHeight);
        r.fixedHeight = l, ["Style", "CRS", "AuthorityURL"].forEach(function (t) {
          if (t in i) {
            var e = r[t] || [];
            r[t] = e.concat(i[t]);
          }
        });
        return ["EX_GeographicBoundingBox", "BoundingBox", "Dimension", "Attribution", "MinScaleDenominator", "MaxScaleDenominator"].forEach(function (t) {
          if (!(t in r)) {
            var e = i[t];
            r[t] = e;
          }
        }), r;
      })
    }),
        Jv = fu(Yv, {
      Title: hu(Nd),
      OnlineResource: hu(kv),
      LogoURL: hu(hm)
    }),
        Qv = fu(Yv, {
      westBoundLongitude: hu(bd),
      eastBoundLongitude: hu(bd),
      southBoundLatitude: hu(bd),
      northBoundLatitude: hu(bd)
    }),
        $v = fu(Yv, {
      GetCapabilities: hu(am),
      GetMap: hu(am),
      GetFeatureInfo: hu(am)
    }),
        tm = fu(Yv, {
      Format: au(Nd),
      DCPType: au(function (t, e) {
        return gu({}, em, t, e);
      })
    }),
        em = fu(Yv, {
      HTTP: hu(function (t, e) {
        return gu({}, im, t, e);
      })
    }),
        im = fu(Yv, {
      Get: hu(sm),
      Post: hu(sm)
    }),
        rm = fu(Yv, {
      Name: hu(Nd),
      Title: hu(Nd),
      Abstract: hu(Nd),
      LegendURL: au(hm),
      StyleSheetURL: hu(sm),
      StyleURL: hu(sm)
    }),
        nm = fu(Yv, {
      Format: hu(Nd),
      OnlineResource: hu(kv)
    }),
        om = fu(Yv, {
      Keyword: ou(Nd)
    });

    function sm(t, e) {
      return gu({}, nm, t, e);
    }

    function am(t, e) {
      return gu({}, tm, t, e);
    }

    function hm(t, e) {
      var i = sm(t, e);

      if (i) {
        var r = [Ad(t.getAttribute("width")), Ad(t.getAttribute("height"))];
        return i.size = r, i;
      }
    }

    function lm(t, e) {
      return gu([], om, t, e);
    }

    var um = Xv,
        pm = function (t) {
      function e(e) {
        t.call(this);
        var i = e || {};
        this.featureNS_ = "http://mapserver.gis.umn.edu/mapserver", this.gmlFormat_ = new Zd(), this.layers_ = i.layers ? i.layers : null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getLayers = function () {
        return this.layers_;
      }, e.prototype.setLayers = function (t) {
        this.layers_ = t;
      }, e.prototype.readFeatures_ = function (t, e) {
        t.setAttribute("namespaceURI", this.featureNS_);
        var i = t.localName,
            r = [];
        if (0 === t.childNodes.length) return r;
        if ("msGMLOutput" == i) for (var n = 0, o = t.childNodes.length; n < o; n++) {
          var s = t.childNodes[n];

          if (s.nodeType === Node.ELEMENT_NODE) {
            var a = s,
                h = e[0],
                l = a.localName.replace("_layer", "");

            if (!this.layers_ || X(this.layers_, l)) {
              var u = l + "_feature";
              h.featureType = u, h.featureNS = this.featureNS_;
              var p = {};
              p[u] = ou(this.gmlFormat_.readFeatureElement, this.gmlFormat_);
              var c = fu([h.featureNS, null], p);
              a.setAttribute("namespaceURI", this.featureNS_);
              var d = gu([], c, a, e, this.gmlFormat_);
              d && K(r, d);
            }
          }
        }

        if ("FeatureCollection" == i) {
          var f = gu([], this.gmlFormat_.FEATURE_COLLECTION_PARSERS, t, [{}], this.gmlFormat_);
          f && (r = f);
        }

        return r;
      }, e.prototype.readFeaturesFromNode = function (t, e) {
        var i = {};
        return e && u(i, this.getReadOptions(t, e)), this.readFeatures_(t, [i]);
      }, e;
    }(Td),
        cm = [null, "http://www.opengis.net/ows/1.1"],
        dm = fu(cm, {
      ServiceIdentification: hu(function (t, e) {
        return gu({}, wm, t, e);
      }),
      ServiceProvider: hu(function (t, e) {
        return gu({}, Im, t, e);
      }),
      OperationsMetadata: hu(function (t, e) {
        return gu({}, Sm, t, e);
      })
    }),
        fm = function (t) {
      function e() {
        t.call(this);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) return this.readFromNode(e);
        }

        return null;
      }, e.prototype.readFromNode = function (t) {
        var e = gu({}, dm, t, []);
        return e || null;
      }, e;
    }(Uv),
        _m = fu(cm, {
      DeliveryPoint: hu(Nd),
      City: hu(Nd),
      AdministrativeArea: hu(Nd),
      PostalCode: hu(Nd),
      Country: hu(Nd),
      ElectronicMailAddress: hu(Nd)
    }),
        gm = fu(cm, {
      Value: au(function (t, e) {
        return Nd(t);
      })
    }),
        ym = fu(cm, {
      AllowedValues: hu(function (t, e) {
        return gu({}, gm, t, e);
      })
    }),
        vm = fu(cm, {
      Phone: hu(function (t, e) {
        return gu({}, Tm, t, e);
      }),
      Address: hu(function (t, e) {
        return gu({}, _m, t, e);
      })
    }),
        mm = fu(cm, {
      HTTP: hu(function (t, e) {
        return gu({}, xm, t, e);
      })
    }),
        xm = fu(cm, {
      Get: au(function (t, e) {
        var i = kv(t);
        if (!i) return;
        return gu({
          href: i
        }, Cm, t, e);
      }),
      Post: void 0
    }),
        Em = fu(cm, {
      DCP: hu(function (t, e) {
        return gu({}, mm, t, e);
      })
    }),
        Sm = fu(cm, {
      Operation: function Operation(t, e) {
        var i = t.getAttribute("name"),
            r = gu({}, Em, t, e);
        if (!r) return;
        e[e.length - 1][i] = r;
      }
    }),
        Tm = fu(cm, {
      Voice: hu(Nd),
      Facsimile: hu(Nd)
    }),
        Cm = fu(cm, {
      Constraint: au(function (t, e) {
        var i = t.getAttribute("name");
        if (!i) return;
        return gu({
          name: i
        }, ym, t, e);
      })
    }),
        Rm = fu(cm, {
      IndividualName: hu(Nd),
      PositionName: hu(Nd),
      ContactInfo: hu(function (t, e) {
        return gu({}, vm, t, e);
      })
    }),
        wm = fu(cm, {
      Abstract: hu(Nd),
      AccessConstraints: hu(Nd),
      Fees: hu(Nd),
      Title: hu(Nd),
      ServiceTypeVersion: hu(Nd),
      ServiceType: hu(Nd)
    }),
        Im = fu(cm, {
      ProviderName: hu(Nd),
      ProviderSite: hu(kv),
      ServiceContact: hu(function (t, e) {
        return gu({}, Rm, t, e);
      })
    });

    var Lm = fm,
        Om = [null, "http://www.opengis.net/wmts/1.0"],
        Pm = [null, "http://www.opengis.net/ows/1.1"],
        bm = fu(Om, {
      Contents: hu(function (t, e) {
        return gu({}, Fm, t, e);
      })
    }),
        Mm = function (t) {
      function e() {
        t.call(this), this.owsParser_ = new Lm();
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.readFromDocument = function (t) {
        for (var e = t.firstChild; e; e = e.nextSibling) {
          if (e.nodeType == Node.ELEMENT_NODE) return this.readFromNode(e);
        }

        return null;
      }, e.prototype.readFromNode = function (t) {
        var e = t.getAttribute("version").trim(),
            i = this.owsParser_.readFromNode(t);
        return i ? (i.version = e, (i = gu(i, bm, t, [])) || null) : null;
      }, e;
    }(Uv),
        Fm = fu(Om, {
      Layer: au(function (t, e) {
        return gu({}, Am, t, e);
      }),
      TileMatrixSet: au(function (t, e) {
        return gu({}, Ym, t, e);
      })
    }),
        Am = fu(Om, {
      Style: au(function (t, e) {
        var i = gu({}, Nm, t, e);
        if (!i) return;
        var r = "true" === t.getAttribute("isDefault");
        return i.isDefault = r, i;
      }),
      Format: au(Nd),
      TileMatrixSetLink: au(function (t, e) {
        return gu({}, Gm, t, e);
      }),
      Dimension: au(function (t, e) {
        return gu({}, jm, t, e);
      }),
      ResourceURL: au(function (t, e) {
        var i = t.getAttribute("format"),
            r = t.getAttribute("template"),
            n = t.getAttribute("resourceType"),
            o = {};
        i && (o.format = i);
        r && (o.template = r);
        n && (o.resourceType = n);
        return o;
      })
    }, fu(Pm, {
      Title: hu(Nd),
      Abstract: hu(Nd),
      WGS84BoundingBox: hu(function (t, e) {
        var i = gu([], Um, t, e);
        if (2 != i.length) return;
        return tt(i);
      }),
      Identifier: hu(Nd)
    })),
        Nm = fu(Om, {
      LegendURL: au(function (t, e) {
        var i = {};
        return i.format = t.getAttribute("format"), i.href = kv(t), i;
      })
    }, fu(Pm, {
      Title: hu(Nd),
      Identifier: hu(Nd)
    })),
        Gm = fu(Om, {
      TileMatrixSet: hu(Nd),
      TileMatrixSetLimits: hu(function (t, e) {
        return gu([], Dm, t, e);
      })
    }),
        Dm = fu(Om, {
      TileMatrixLimits: ou(function (t, e) {
        return gu({}, km, t, e);
      })
    }),
        km = fu(Om, {
      TileMatrix: hu(Nd),
      MinTileRow: hu(Fd),
      MaxTileRow: hu(Fd),
      MinTileCol: hu(Fd),
      MaxTileCol: hu(Fd)
    }),
        jm = fu(Om, {
      Default: hu(Nd),
      Value: au(Nd)
    }, fu(Pm, {
      Identifier: hu(Nd)
    })),
        Um = fu(Pm, {
      LowerCorner: ou(Vm),
      UpperCorner: ou(Vm)
    }),
        Ym = fu(Om, {
      WellKnownScaleSet: hu(Nd),
      TileMatrix: au(function (t, e) {
        return gu({}, Bm, t, e);
      })
    }, fu(Pm, {
      SupportedCRS: hu(Nd),
      Identifier: hu(Nd)
    })),
        Bm = fu(Om, {
      TopLeftCorner: hu(Vm),
      ScaleDenominator: hu(bd),
      TileWidth: hu(Fd),
      TileHeight: hu(Fd),
      MatrixWidth: hu(Fd),
      MatrixHeight: hu(Fd)
    }, fu(Pm, {
      Identifier: hu(Nd)
    }));

    function Vm(t, e) {
      var i = Nd(t).split(/\s+/);

      if (i && 2 == i.length) {
        var r = +i[0],
            n = +i[1];
        if (!isNaN(r) && !isNaN(n)) return [r, n];
      }
    }

    var Xm = Mm,
        zm = function () {
      var t;
      return function () {
        if (!t) {
          var e = document.body;
          e.webkitRequestFullscreen ? t = "webkitfullscreenchange" : e.mozRequestFullScreen ? t = "mozfullscreenchange" : e.msRequestFullscreen ? t = "MSFullscreenChange" : e.requestFullscreen && (t = "fullscreenchange");
        }

        return t;
      };
    }();

    function Wm() {
      var t = document.body;
      return !!(t.webkitRequestFullscreen || t.mozRequestFullScreen && document.mozFullScreenEnabled || t.msRequestFullscreen && document.msFullscreenEnabled || t.requestFullscreen && document.fullscreenEnabled);
    }

    function Km() {
      return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }

    function Hm(t) {
      t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen();
    }

    var Zm = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          target: i.target
        }), this.cssClassName_ = void 0 !== i.className ? i.className : "ol-full-screen";
        var r = void 0 !== i.label ? i.label : "⤢";
        this.labelNode_ = "string" == typeof r ? document.createTextNode(r) : r;
        var n = void 0 !== i.labelActive ? i.labelActive : "×";
        this.labelActiveNode_ = "string" == typeof n ? document.createTextNode(n) : n, this.button_ = document.createElement("button");
        var o = i.tipLabel ? i.tipLabel : "Toggle full-screen";
        this.setClassName_(this.button_, Km()), this.button_.setAttribute("type", "button"), this.button_.title = o, this.button_.appendChild(this.labelNode_), v(this.button_, M.CLICK, this.handleClick_, this);
        var s = this.cssClassName_ + " " + fo + " " + go + " " + (Wm() ? "" : _o),
            a = this.element;
        a.className = s, a.appendChild(this.button_), this.keys_ = void 0 !== i.keys && i.keys, this.source_ = i.source;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleClick_ = function (t) {
        t.preventDefault(), this.handleFullScreen_();
      }, e.prototype.handleFullScreen_ = function () {
        if (Wm()) {
          var t,
              e = this.getMap();
          if (e) if (Km()) document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();else t = this.source_ ? "string" == typeof this.source_ ? document.getElementById(this.source_) : this.source_ : e.getTargetElement(), this.keys_ ? function (t) {
            t.mozRequestFullScreenWithKeys ? t.mozRequestFullScreenWithKeys() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : Hm(t);
          }(t) : Hm(t);
        }
      }, e.prototype.handleFullScreenChange_ = function () {
        var t = this.getMap();
        Km() ? (this.setClassName_(this.button_, !0), Qn(this.labelActiveNode_, this.labelNode_)) : (this.setClassName_(this.button_, !1), Qn(this.labelNode_, this.labelActiveNode_)), t && t.updateSize();
      }, e.prototype.setClassName_ = function (t, e) {
        var i = this.cssClassName_ + "-true",
            r = this.cssClassName_ + "-false",
            n = e ? i : r;
        t.classList.remove(i), t.classList.remove(r), t.classList.add(n);
      }, e.prototype.setMap = function (e) {
        t.prototype.setMap.call(this, e), e && this.listenerKeys.push(v(document, zm(), this.handleFullScreenChange_, this));
      }, e;
    }(uo),
        qm = "projection";

    function Jm(t) {
      var e = t.frameState;
      e ? this.mapProjection_ != e.viewState.projection && (this.mapProjection_ = e.viewState.projection, this.transform_ = null) : this.mapProjection_ = null;
    }

    var Qm = function (t) {
      function e(e) {
        var i = e || {},
            r = document.createElement("div");
        r.className = void 0 !== i.className ? i.className : "ol-mouse-position", t.call(this, {
          element: r,
          render: i.render || Jm,
          target: i.target
        }), v(this, G(qm), this.handleProjectionChanged_, this), i.coordinateFormat && this.setCoordinateFormat(i.coordinateFormat), i.projection && this.setProjection(i.projection), this.undefinedHTML_ = void 0 !== i.undefinedHTML ? i.undefinedHTML : "&#160;", this.renderOnMouseOut_ = !!this.undefinedHTML_, this.renderedHTML_ = r.innerHTML, this.mapProjection_ = null, this.transform_ = null, this.lastMouseMovePixel_ = null;
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleProjectionChanged_ = function () {
        this.transform_ = null;
      }, e.prototype.getCoordinateFormat = function () {
        return this.get("coordinateFormat");
      }, e.prototype.getProjection = function () {
        return this.get(qm);
      }, e.prototype.handleMouseMove = function (t) {
        var e = this.getMap();
        this.lastMouseMovePixel_ = e.getEventPixel(t), this.updateHTML_(this.lastMouseMovePixel_);
      }, e.prototype.handleMouseOut = function (t) {
        this.updateHTML_(null), this.lastMouseMovePixel_ = null;
      }, e.prototype.setMap = function (e) {
        if (t.prototype.setMap.call(this, e), e) {
          var i = e.getViewport();
          this.listenerKeys.push(v(i, M.MOUSEMOVE, this.handleMouseMove, this), v(i, M.TOUCHSTART, this.handleMouseMove, this)), this.renderOnMouseOut_ && this.listenerKeys.push(v(i, M.MOUSEOUT, this.handleMouseOut, this), v(i, M.TOUCHEND, this.handleMouseOut, this));
        }
      }, e.prototype.setCoordinateFormat = function (t) {
        this.set("coordinateFormat", t);
      }, e.prototype.setProjection = function (t) {
        this.set(qm, Ee(t));
      }, e.prototype.updateHTML_ = function (t) {
        var e = this.undefinedHTML_;

        if (t && this.mapProjection_) {
          if (!this.transform_) {
            var i = this.getProjection();
            this.transform_ = i ? Le(this.mapProjection_, i) : me;
          }

          var r = this.getMap().getCoordinateFromPixel(t);

          if (r) {
            this.transform_(r, r);
            var n = this.getCoordinateFormat();
            e = n ? n(r) : r.toString();
          }
        }

        this.renderedHTML_ && e === this.renderedHTML_ || (this.element.innerHTML = e, this.renderedHTML_ = e);
      }, e;
    }(uo);

    function $m(t) {
      this.validateExtent_(), this.updateBox_();
    }

    var tx = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          render: i.render || $m,
          target: i.target
        }), this.collapsed_ = void 0 === i.collapsed || i.collapsed, this.collapsible_ = void 0 === i.collapsible || i.collapsible, this.collapsible_ || (this.collapsed_ = !1);
        var r = void 0 !== i.className ? i.className : "ol-overviewmap",
            n = void 0 !== i.tipLabel ? i.tipLabel : "Overview map",
            o = void 0 !== i.collapseLabel ? i.collapseLabel : "«";
        "string" == typeof o ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = o) : this.collapseLabel_ = o;
        var s = void 0 !== i.label ? i.label : "»";
        "string" == typeof s ? (this.label_ = document.createElement("span"), this.label_.textContent = s) : this.label_ = s;
        var a = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_,
            h = document.createElement("button");
        h.setAttribute("type", "button"), h.title = n, h.appendChild(a), v(h, M.CLICK, this.handleClick_, this), this.ovmapDiv_ = document.createElement("div"), this.ovmapDiv_.className = "ol-overviewmap-map", this.ovmap_ = new Ha({
          controls: new U(),
          interactions: new U(),
          view: i.view
        });
        var l = this.ovmap_;
        i.layers && i.layers.forEach(function (t) {
          l.addLayer(t);
        }.bind(this));
        var u = document.createElement("div");
        u.className = "ol-overviewmap-box", u.style.boxSizing = "border-box", this.boxOverlay_ = new Ja({
          position: [0, 0],
          positioning: Za.BOTTOM_LEFT,
          element: u
        }), this.ovmap_.addOverlay(this.boxOverlay_);
        var p = r + " " + fo + " " + go + (this.collapsed_ && this.collapsible_ ? " " + yo : "") + (this.collapsible_ ? "" : " ol-uncollapsible"),
            c = this.element;
        c.className = p, c.appendChild(this.ovmapDiv_), c.appendChild(h);

        var d = this,
            f = this.boxOverlay_,
            _ = this.boxOverlay_.getElement(),
            g = function g(t) {
          var e = function (t) {
            return {
              clientX: t.clientX - _.offsetWidth / 2,
              clientY: t.clientY + _.offsetHeight / 2
            };
          }(t),
              i = l.getEventCoordinate(e);

          f.setPosition(i);
        },
            y = function y(t) {
          var e = l.getEventCoordinate(t);
          d.getMap().getView().setCenter(e), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", y);
        };

        _.addEventListener("mousedown", function () {
          window.addEventListener("mousemove", g), window.addEventListener("mouseup", y);
        });
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setMap = function (e) {
        var i = this.getMap();

        if (e !== i) {
          if (i) {
            var r = i.getView();
            r && this.unbindView_(r), this.ovmap_.setTarget(null);
          }

          if (t.prototype.setMap.call(this, e), e) {
            this.ovmap_.setTarget(this.ovmapDiv_), this.listenerKeys.push(v(e, l, this.handleMapPropertyChange_, this)), 0 === this.ovmap_.getLayers().getLength() && this.ovmap_.setLayerGroup(e.getLayerGroup());
            var n = e.getView();
            n && (this.bindView_(n), n.isDef() && (this.ovmap_.updateSize(), this.resetExtent_()));
          }
        }
      }, e.prototype.handleMapPropertyChange_ = function (t) {
        if (t.key === Ln.VIEW) {
          var e = t.oldValue;
          e && this.unbindView_(e);
          var i = this.getMap().getView();
          this.bindView_(i);
        }
      }, e.prototype.bindView_ = function (t) {
        v(t, G(Bn), this.handleRotationChanged_, this);
      }, e.prototype.unbindView_ = function (t) {
        x(t, G(Bn), this.handleRotationChanged_, this);
      }, e.prototype.handleRotationChanged_ = function () {
        this.ovmap_.getView().setRotation(this.getMap().getView().getRotation());
      }, e.prototype.validateExtent_ = function () {
        var t = this.getMap(),
            e = this.ovmap_;

        if (t.isRendered() && e.isRendered()) {
          var i = t.getSize(),
              r = t.getView().calculateExtent(i),
              n = e.getSize(),
              o = e.getView().calculateExtent(n),
              s = e.getPixelFromCoordinate(It(r)),
              a = e.getPixelFromCoordinate(St(r)),
              h = Math.abs(s[0] - a[0]),
              l = Math.abs(s[1] - a[1]),
              u = n[0],
              p = n[1];
          h < .1 * u || l < .1 * p || h > .75 * u || l > .75 * p ? this.resetExtent_() : ot(o, r) || this.recenter_();
        }
      }, e.prototype.resetExtent_ = function () {
        var t = this.getMap(),
            e = this.ovmap_,
            i = t.getSize(),
            r = t.getView().calculateExtent(i),
            n = e.getView(),
            o = Math.log(7.5) / Math.LN2;
        Mt(r, 1 / (.1 * Math.pow(2, o / 2))), n.fit(r);
      }, e.prototype.recenter_ = function () {
        var t = this.getMap(),
            e = this.ovmap_,
            i = t.getView();
        e.getView().setCenter(i.getCenter());
      }, e.prototype.updateBox_ = function () {
        var t = this.getMap(),
            e = this.ovmap_;

        if (t.isRendered() && e.isRendered()) {
          var i = t.getSize(),
              r = t.getView(),
              n = e.getView(),
              o = r.getRotation(),
              s = this.boxOverlay_,
              a = this.boxOverlay_.getElement(),
              h = r.calculateExtent(i),
              l = n.getResolution(),
              u = Et(h),
              p = Lt(h),
              c = this.calculateCoordinateRotate_(o, u);
          s.setPosition(c), a && (a.style.width = Math.abs((u[0] - p[0]) / l) + "px", a.style.height = Math.abs((p[1] - u[1]) / l) + "px");
        }
      }, e.prototype.calculateCoordinateRotate_ = function (t, e) {
        var i,
            r = this.getMap().getView().getCenter();
        return r && ($i(i = [e[0] - r[0], e[1] - r[1]], t), Hi(i, r)), i;
      }, e.prototype.handleClick_ = function (t) {
        t.preventDefault(), this.handleToggle_();
      }, e.prototype.handleToggle_ = function () {
        this.element.classList.toggle(yo), this.collapsed_ ? Qn(this.collapseLabel_, this.label_) : Qn(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_;
        var t = this.ovmap_;
        this.collapsed_ || t.isRendered() || (t.updateSize(), this.resetExtent_(), m(t, Rn, function (t) {
          this.updateBox_();
        }, this));
      }, e.prototype.getCollapsible = function () {
        return this.collapsible_;
      }, e.prototype.setCollapsible = function (t) {
        this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), !t && this.collapsed_ && this.handleToggle_());
      }, e.prototype.setCollapsed = function (t) {
        this.collapsible_ && this.collapsed_ !== t && this.handleToggle_();
      }, e.prototype.getCollapsed = function () {
        return this.collapsed_;
      }, e.prototype.getOverviewMap = function () {
        return this.ovmap_;
      }, e;
    }(uo),
        ex = "units",
        ix = {
      DEGREES: "degrees",
      IMPERIAL: "imperial",
      NAUTICAL: "nautical",
      METRIC: "metric",
      US: "us"
    },
        rx = [1, 2, 5];

    function nx(t) {
      var e = t.frameState;
      this.viewState_ = e ? e.viewState : null, this.updateElement_();
    }

    var ox = function (t) {
      function e(e) {
        var i = e || {},
            r = void 0 !== i.className ? i.className : "ol-scale-line";
        t.call(this, {
          element: document.createElement("div"),
          render: i.render || nx,
          target: i.target
        }), this.innerElement_ = document.createElement("div"), this.innerElement_.className = r + "-inner", this.element.className = r + " " + fo, this.element.appendChild(this.innerElement_), this.viewState_ = null, this.minWidth_ = void 0 !== i.minWidth ? i.minWidth : 64, this.renderedVisible_ = !1, this.renderedWidth_ = void 0, this.renderedHTML_ = "", v(this, G(ex), this.handleUnitsChanged_, this), this.setUnits(i.units || ix.METRIC);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getUnits = function () {
        return this.get(ex);
      }, e.prototype.handleUnitsChanged_ = function () {
        this.updateElement_();
      }, e.prototype.setUnits = function (t) {
        this.set(ex, t);
      }, e.prototype.updateElement_ = function () {
        var t = this.viewState_;

        if (t) {
          var e = t.center,
              i = t.projection,
              r = this.getUnits(),
              n = r == ix.DEGREES ? $t.DEGREES : $t.METERS,
              o = Se(i, t.resolution, e, n);
          i.getUnits() != $t.DEGREES && i.getMetersPerUnit() && n == $t.METERS && (o *= i.getMetersPerUnit());
          var s = this.minWidth_ * o,
              a = "";

          if (r == ix.DEGREES) {
            var h = Qt[$t.DEGREES];
            i.getUnits() == $t.DEGREES ? s *= h : o /= h, s < h / 60 ? (a = "″", o *= 3600) : s < h ? (a = "′", o *= 60) : a = "°";
          } else r == ix.IMPERIAL ? s < .9144 ? (a = "in", o /= .0254) : s < 1609.344 ? (a = "ft", o /= .3048) : (a = "mi", o /= 1609.344) : r == ix.NAUTICAL ? (o /= 1852, a = "nm") : r == ix.METRIC ? s < .001 ? (a = "μm", o *= 1e6) : s < 1 ? (a = "mm", o *= 1e3) : s < 1e3 ? a = "m" : (a = "km", o /= 1e3) : r == ix.US ? s < .9144 ? (a = "in", o *= 39.37) : s < 1609.344 ? (a = "ft", o /= .30480061) : (a = "mi", o /= 1609.3472) : Y(!1, 33);

          for (var l, u, p = 3 * Math.floor(Math.log(this.minWidth_ * o) / Math.log(10));;) {
            if (l = rx[(p % 3 + 3) % 3] * Math.pow(10, Math.floor(p / 3)), u = Math.round(l / o), isNaN(u)) return this.element.style.display = "none", void (this.renderedVisible_ = !1);
            if (u >= this.minWidth_) break;
            ++p;
          }

          var c = l + " " + a;
          this.renderedHTML_ != c && (this.innerElement_.innerHTML = c, this.renderedHTML_ = c), this.renderedWidth_ != u && (this.innerElement_.style.width = u + "px", this.renderedWidth_ = u), this.renderedVisible_ || (this.element.style.display = "", this.renderedVisible_ = !0);
        } else this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
      }, e;
    }(uo),
        sx = {
      VERTICAL: 0,
      HORIZONTAL: 1
    };

    function ax(t) {
      if (t.frameState) {
        this.sliderInitialized_ || this.initSlider_();
        var e = t.frameState.viewState.resolution;
        e !== this.currentResolution_ && (this.currentResolution_ = e, this.setThumbPosition_(e));
      }
    }

    var hx = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          render: i.render || ax
        }), this.dragListenerKeys_ = [], this.currentResolution_ = void 0, this.direction_ = sx.VERTICAL, this.dragging_, this.heightLimit_ = 0, this.widthLimit_ = 0, this.previousX_, this.previousY_, this.thumbSize_ = null, this.sliderInitialized_ = !1, this.duration_ = void 0 !== i.duration ? i.duration : 200;
        var r = void 0 !== i.className ? i.className : "ol-zoomslider",
            n = document.createElement("button");
        n.setAttribute("type", "button"), n.className = r + "-thumb " + fo;
        var o = this.element;
        o.className = r + " " + fo + " " + go, o.appendChild(n), this.dragger_ = new Tn(o), v(this.dragger_, Gr.POINTERDOWN, this.handleDraggerStart_, this), v(this.dragger_, Gr.POINTERMOVE, this.handleDraggerDrag_, this), v(this.dragger_, Gr.POINTERUP, this.handleDraggerEnd_, this), v(o, M.CLICK, this.handleContainerClick_, this), v(n, M.CLICK, O);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.disposeInternal = function () {
        this.dragger_.dispose(), t.prototype.disposeInternal.call(this);
      }, e.prototype.setMap = function (e) {
        t.prototype.setMap.call(this, e), e && e.render();
      }, e.prototype.initSlider_ = function () {
        var t = this.element,
            e = t.offsetWidth,
            i = t.offsetHeight,
            r = t.firstElementChild,
            n = getComputedStyle(r),
            o = r.offsetWidth + parseFloat(n.marginRight) + parseFloat(n.marginLeft),
            s = r.offsetHeight + parseFloat(n.marginTop) + parseFloat(n.marginBottom);
        this.thumbSize_ = [o, s], e > i ? (this.direction_ = sx.HORIZONTAL, this.widthLimit_ = e - o) : (this.direction_ = sx.VERTICAL, this.heightLimit_ = i - s), this.sliderInitialized_ = !0;
      }, e.prototype.handleContainerClick_ = function (t) {
        var e = this.getMap().getView(),
            i = this.getRelativePosition_(t.offsetX - this.thumbSize_[0] / 2, t.offsetY - this.thumbSize_[1] / 2),
            r = this.getResolutionForPosition_(i);
        e.animate({
          resolution: e.constrainResolution(r),
          duration: this.duration_,
          easing: Xn
        });
      }, e.prototype.handleDraggerStart_ = function (t) {
        if (!this.dragging_ && t.originalEvent.target === this.element.firstElementChild && (this.getMap().getView().setHint(jn, 1), this.previousX_ = t.clientX, this.previousY_ = t.clientY, this.dragging_ = !0, 0 === this.dragListenerKeys_.length)) {
          var e = this.handleDraggerDrag_,
              i = this.handleDraggerEnd_;
          this.dragListenerKeys_.push(v(document, M.MOUSEMOVE, e, this), v(document, Gr.POINTERMOVE, e, this), v(document, M.MOUSEUP, i, this), v(document, Gr.POINTERUP, i, this));
        }
      }, e.prototype.handleDraggerDrag_ = function (t) {
        if (this.dragging_) {
          var e = this.element.firstElementChild,
              i = t.clientX - this.previousX_ + parseFloat(e.style.left),
              r = t.clientY - this.previousY_ + parseFloat(e.style.top),
              n = this.getRelativePosition_(i, r);
          this.currentResolution_ = this.getResolutionForPosition_(n), this.getMap().getView().setResolution(this.currentResolution_), this.setThumbPosition_(this.currentResolution_), this.previousX_ = t.clientX, this.previousY_ = t.clientY;
        }
      }, e.prototype.handleDraggerEnd_ = function (t) {
        if (this.dragging_) {
          var e = this.getMap().getView();
          e.setHint(jn, -1), e.animate({
            resolution: e.constrainResolution(this.currentResolution_),
            duration: this.duration_,
            easing: Xn
          }), this.dragging_ = !1, this.previousX_ = void 0, this.previousY_ = void 0, this.dragListenerKeys_.forEach(E), this.dragListenerKeys_.length = 0;
        }
      }, e.prototype.setThumbPosition_ = function (t) {
        var e = this.getPositionForResolution_(t),
            i = this.element.firstElementChild;
        this.direction_ == sx.HORIZONTAL ? i.style.left = this.widthLimit_ * e + "px" : i.style.top = this.heightLimit_ * e + "px";
      }, e.prototype.getRelativePosition_ = function (t, e) {
        return kt(this.direction_ === sx.HORIZONTAL ? t / this.widthLimit_ : e / this.heightLimit_, 0, 1);
      }, e.prototype.getResolutionForPosition_ = function (t) {
        return this.getMap().getView().getResolutionForValueFunction()(1 - t);
      }, e.prototype.getPositionForResolution_ = function (t) {
        return 1 - this.getMap().getView().getValueForResolutionFunction()(t);
      }, e;
    }(uo),
        lx = function (t) {
      function e(e) {
        var i = e || {};
        t.call(this, {
          element: document.createElement("div"),
          target: i.target
        }), this.extent = i.extent ? i.extent : null;
        var r = void 0 !== i.className ? i.className : "ol-zoom-extent",
            n = void 0 !== i.label ? i.label : "E",
            o = void 0 !== i.tipLabel ? i.tipLabel : "Fit to extent",
            s = document.createElement("button");
        s.setAttribute("type", "button"), s.title = o, s.appendChild("string" == typeof n ? document.createTextNode(n) : n), v(s, M.CLICK, this.handleClick_, this);
        var a = r + " " + fo + " " + go,
            h = this.element;
        h.className = a, h.appendChild(s);
      }

      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.handleClick_ = function (t) {
        t.preventDefault(), this.handleZoomToExtent();
      }, e.prototype.handleZoomToExtent = function () {
        var t = this.getMap().getView(),
            e = this.extent ? this.extent : t.getProjection().getExtent();
        t.fit(e);
      }, e;
    }(uo),
        ux = {
      array: {},
      color: {},
      colorlike: {},
      control: {},
      coordinate: {},
      easing: {},
      events: {}
    };

    ux.events.condition = {}, ux.extent = {}, ux.featureloader = {}, ux.format = {}, ux.format.filter = {}, ux.geom = {}, ux.has = {}, ux.interaction = {}, ux.layer = {}, ux.loadingstrategy = {}, ux.proj = {}, ux.proj.Units = {}, ux.proj.proj4 = {}, ux.render = {}, ux.render.canvas = {}, ux.renderer = {}, ux.renderer.canvas = {}, ux.renderer.webgl = {}, ux.size = {}, ux.source = {}, ux.sphere = {}, ux.style = {}, ux.style.IconImageCache = {}, ux.tilegrid = {}, ux.xml = {}, ux.Collection = U, ux.Feature = B, ux.Geolocation = zi, ux.Graticule = Or, ux.Kinetic = br, ux.Map = Ha, ux.Object = D, ux.Observable = F, ux.Observable.unByKey = function (t) {
      if (Array.isArray(t)) for (var e = 0, i = t.length; e < i; ++e) {
        E(t[e]);
      } else E(t);
    }, ux.Overlay = Ja, ux.PluggableMap = lo, ux.View = qn, ux.WebGLMap = Kl, ux.array.stableSort = q, ux.color.asArray = _r, ux.color.asString = dr, ux.colorlike.asColorLike = Ys, ux.control.Attribution = So, ux.control.Attribution.render = Eo, ux.control.Control = uo, ux.control.FullScreen = Zm, ux.control.MousePosition = Qm, ux.control.MousePosition.render = Jm, ux.control.OverviewMap = tx, ux.control.OverviewMap.render = $m, ux.control.Rotate = Co, ux.control.Rotate.render = To, ux.control.ScaleLine = ox, ux.control.ScaleLine.render = nx, ux.control.Zoom = Ro, ux.control.ZoomSlider = hx, ux.control.ZoomSlider.render = ax, ux.control.ZoomToExtent = lx, ux.control.defaults = wo, ux.coordinate.add = Hi, ux.coordinate.createStringXY = function (t) {
      return function (e) {
        return nr(e, t);
      };
    }, ux.coordinate.format = Ji, ux.coordinate.rotate = $i, ux.coordinate.toStringHDMS = function (t, e) {
      return t ? qi("NS", t[1], e) + " " + qi("EW", t[0], e) : "";
    }, ux.coordinate.toStringXY = nr, ux.easing.easeIn = Vn, ux.easing.easeOut = Xn, ux.easing.inAndOut = zn, ux.easing.linear = Wn, ux.easing.upAndDown = function (t) {
      return t < .5 ? zn(2 * t) : 1 - zn(2 * (t - .5));
    }, ux.events.condition.altKeyOnly = Go, ux.events.condition.altShiftKeysOnly = Do, ux.events.condition.always = jo, ux.events.condition.click = function (t) {
      return t.type == Ar.CLICK;
    }, ux.events.condition.doubleClick = function (t) {
      return t.type == Ar.DBLCLICK;
    }, ux.events.condition.focus = ko, ux.events.condition.mouseOnly = Ko, ux.events.condition.never = Yo, ux.events.condition.noModifierKeys = Xo, ux.events.condition.platformModifierKeyOnly = function (t) {
      var e = t.originalEvent;
      return !e.altKey && (Gi ? e.metaKey : e.ctrlKey) && !e.shiftKey;
    }, ux.events.condition.pointerMove = Bo, ux.events.condition.primaryAction = Ho, ux.events.condition.shiftKeyOnly = zo, ux.events.condition.singleClick = Vo, ux.events.condition.targetNotEditable = Wo, ux.extent.applyTransform = Ft, ux.extent.boundingExtent = tt, ux.extent.buffer = et, ux.extent.containsCoordinate = nt, ux.extent.containsExtent = ot, ux.extent.containsXY = st, ux.extent.createEmpty = ht, ux.extent.equals = dt, ux.extent.extend = ft, ux.extent.getArea = xt, ux.extent.getBottomLeft = Et, ux.extent.getBottomRight = St, ux.extent.getCenter = Tt, ux.extent.getHeight = Rt, ux.extent.getIntersection = wt, ux.extent.getSize = function (t) {
      return [t[2] - t[0], t[3] - t[1]];
    }, ux.extent.getTopLeft = It, ux.extent.getTopRight = Lt, ux.extent.getWidth = Ot, ux.extent.intersects = Pt, ux.extent.isEmpty = bt, ux.featureloader.xhr = ql, ux.format.EsriJSON = Sd, ux.format.Feature = cd, ux.format.GML = zd, ux.format.GML2 = Zd, ux.format.GML3 = Vd, ux.format.GML32 = Jd, ux.format.GPX = Ff, ux.format.GeoJSON = Gf, ux.format.IGC = Jf, ux.format.KML = Bg, ux.format.MVT = Qg, ux.format.OSMXML = oy, ux.format.Polyline = cy, ux.format.Polyline.decodeDeltas = hy, ux.format.Polyline.decodeFloats = uy, ux.format.Polyline.encodeDeltas = ay, ux.format.Polyline.encodeFloats = ly, ux.format.TopoJSON = my, ux.format.WFS = gv, ux.format.WFS.writeFilter = function (t) {
      var e = tu(Qy, "Filter");
      return lv(e, t, []), e;
    }, ux.format.WKT = Gv, ux.format.WMSCapabilities = um, ux.format.WMSGetFeatureInfo = pm, ux.format.WMTSCapabilities = Xm, ux.format.filter.Bbox = Cy, ux.format.filter.Contains = wy, ux.format.filter.During = Ly, ux.format.filter.EqualTo = Py, ux.format.filter.GreaterThan = by, ux.format.filter.GreaterThanOrEqualTo = My, ux.format.filter.Intersects = Fy, ux.format.filter.IsBetween = Ay, ux.format.filter.IsLike = Ny, ux.format.filter.IsNull = Gy, ux.format.filter.LessThan = Dy, ux.format.filter.LessThanOrEqualTo = ky, ux.format.filter.Not = jy, ux.format.filter.NotEqualTo = Uy, ux.format.filter.Or = Yy, ux.format.filter.Within = By, ux.format.filter.and = Vy, ux.format.filter.bbox = Xy, ux.format.filter.between = function (t, e, i) {
      return new Ay(t, e, i);
    }, ux.format.filter.contains = function (t, e, i) {
      return new wy(t, e, i);
    }, ux.format.filter.during = function (t, e, i) {
      return new Ly(t, e, i);
    }, ux.format.filter.equalTo = function (t, e, i) {
      return new Py(t, e, i);
    }, ux.format.filter.greaterThan = function (t, e) {
      return new by(t, e);
    }, ux.format.filter.greaterThanOrEqualTo = function (t, e) {
      return new My(t, e);
    }, ux.format.filter.intersects = function (t, e, i) {
      return new Fy(t, e, i);
    }, ux.format.filter.isNull = function (t) {
      return new Gy(t);
    }, ux.format.filter.lessThan = function (t, e) {
      return new Dy(t, e);
    }, ux.format.filter.lessThanOrEqualTo = function (t, e) {
      return new ky(t, e);
    }, ux.format.filter.like = function (t, e, i, r, n, o) {
      return new Ny(t, e, i, r, n, o);
    }, ux.format.filter.not = function (t) {
      return new jy(t);
    }, ux.format.filter.notEqualTo = function (t, e, i) {
      return new Uy(t, e, i);
    }, ux.format.filter.or = function (t) {
      var e = [null].concat(Array.prototype.slice.call(arguments));
      return new (Function.prototype.bind.apply(Yy, e))();
    }, ux.format.filter.within = function (t, e, i) {
      return new By(t, e, i);
    }, ux.geom.Circle = Oc, ux.geom.Geometry = Xe, ux.geom.GeometryCollection = ud, ux.geom.LineString = hr, ux.geom.LinearRing = pi, ux.geom.MultiLineString = Pc, ux.geom.MultiPoint = bc, ux.geom.MultiPolygon = Fc, ux.geom.Point = ci, ux.geom.Polygon = Ii, ux.geom.Polygon.circular = Li, ux.geom.Polygon.fromCircle = Pi, ux.geom.Polygon.fromExtent = Oi, ux.geom.SimpleGeometry = We, ux.getUid = o, ux.has.DEVICE_PIXEL_RATIO = Di, ux.has.GEOLOCATION = ji, ux.has.TOUCH = Ui, ux.inherits = function (t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
    }, ux.interaction.DoubleClickZoom = No, ux.interaction.DragAndDrop = wc, ux.interaction.DragBox = ns, ux.interaction.DragPan = Jo, ux.interaction.DragRotate = Qo, ux.interaction.DragRotateAndZoom = Ic, ux.interaction.DragZoom = ss, ux.interaction.Draw = kc, ux.interaction.Draw.createBox = function () {
      return function (t, e) {
        var i = tt(t),
            r = [[Et(i), St(i), Lt(i), It(i), Et(i)]],
            n = e;
        return n ? n.setCoordinates(r) : n = new Ii(r), n;
      };
    }, ux.interaction.Draw.createRegularPolygon = function (t, e) {
      return function (i, r) {
        var n = i[0],
            o = i[1],
            s = Math.sqrt(er(n, o)),
            a = r || Pi(new Oc(n), t),
            h = e;

        if (!e) {
          var l = o[0] - n[0],
              u = o[1] - n[1];
          h = Math.atan(u / l) - (l < 0 ? Math.PI : 0);
        }

        return bi(a, n, s, h), a;
      };
    }, ux.interaction.Extent = Vc, ux.interaction.Interaction = Fo, ux.interaction.KeyboardPan = ls, ux.interaction.KeyboardZoom = ps, ux.interaction.Modify = Jc, ux.interaction.MouseWheelZoom = fs, ux.interaction.PinchRotate = _s, ux.interaction.PinchZoom = gs, ux.interaction.Pointer = qo, ux.interaction.Select = ed, ux.interaction.Snap = rd, ux.interaction.Translate = hd, ux.interaction.defaults = ys, ux.layer.Base = io, ux.layer.Group = oo, ux.layer.Heatmap = mc, ux.layer.Image = bp, ux.layer.Tile = Np, ux.layer.Vector = gc, ux.layer.VectorTile = Ec, ux.loadingstrategy.all = Jl, ux.loadingstrategy.bbox = function (t, e) {
      return [t];
    }, ux.loadingstrategy.tile = function (t) {
      return function (e, i) {
        var r = t.getZForResolution(i),
            n = t.getTileRangeForExtentAndZ(e, r),
            o = [],
            s = [r, 0, 0];

        for (s[1] = n.minX; s[1] <= n.maxX; ++s[1]) {
          for (s[2] = n.minY; s[2] <= n.maxY; ++s[2]) {
            o.push(t.getTileCoordExtent(s));
          }
        }

        return o;
      };
    }, ux.proj.Projection = ee, ux.proj.Units.METERS_PER_UNIT = Qt, ux.proj.addCoordinateTransforms = we, ux.proj.addEquivalentProjections = Te, ux.proj.addProjection = xe, ux.proj.equivalent = Ie, ux.proj.fromLonLat = function (t, e) {
      return Pe(t, "EPSG:4326", void 0 !== e ? e : "EPSG:3857");
    }, ux.proj.get = Ee, ux.proj.getPointResolution = Se, ux.proj.getTransform = Oe, ux.proj.proj4.register = function (t) {
      var e,
          i,
          r = Object.keys(t.defs),
          n = r.length;

      for (e = 0; e < n; ++e) {
        var o = r[e];

        if (!Ee(o)) {
          var s = t.defs(o);
          xe(new ee({
            code: o,
            axisOrientation: s.axis,
            metersPerUnit: s.to_meter,
            units: s.units
          }));
        }
      }

      for (e = 0; e < n; ++e) {
        var a = r[e],
            h = Ee(a);

        for (i = 0; i < n; ++i) {
          var l = r[i],
              u = Ee(l);
          if (!ye(a, l)) if (t.defs[a] === t.defs[l]) Te([h, u]);else {
            var p = t(a, l);
            we(h, u, p.forward, p.inverse);
          }
        }
      }
    }, ux.proj.toLonLat = function (t, e) {
      var i = Pe(t, void 0 !== e ? e : "EPSG:3857", "EPSG:4326"),
          r = i[0];
      return (r < -180 || r > 180) && (i[0] = Xt(r + 180, 360) - 180), i;
    }, ux.proj.transform = Pe, ux.proj.transformExtent = be, ux.render.VectorContext = Vs, ux.render.canvas.labelCache = Ps, ux.render.toContext = function (t, e) {
      var i = t.canvas,
          r = e || {},
          n = r.pixelRatio || Di,
          o = r.size;
      o && (i.width = o[0] * n, i.height = o[1] * n, i.style.width = o[0] + "px", i.style.height = o[1] + "px");
      var s = [0, 0, i.width, i.height],
          a = je([1, 0, 0, 1, 0, 0], n, n);
      return new Xs(t, n, s, a, 0);
    }, ux.renderer.canvas.ImageLayer = ra, ux.renderer.canvas.Map = Qs, ux.renderer.canvas.TileLayer = ha, ux.renderer.canvas.VectorLayer = Ba, ux.renderer.canvas.VectorTileLayer = Ka, ux.renderer.webgl.ImageLayer = gl, ux.renderer.webgl.Map = yl, ux.renderer.webgl.TileLayer = Xl, ux.renderer.webgl.VectorLayer = Wl, ux.size.toSize = ho, ux.source.BingMaps = tp, ux.source.CartoDB = ip, ux.source.Cluster = sp, ux.source.Image = dp, ux.source.ImageArcGISRest = gp, ux.source.ImageCanvas = yp, ux.source.ImageMapGuide = vp, ux.source.ImageStatic = mp, ux.source.ImageWMS = wp, ux.source.OSM = Lp, ux.source.OSM.ATTRIBUTION = Ip, ux.source.Raster = Vp, ux.source.Source = Il, ux.source.Stamen = Kp, ux.source.Tile = jl, ux.source.TileArcGISRest = Zp, ux.source.TileDebug = Jp, ux.source.TileImage = $u, ux.source.TileJSON = Qp, ux.source.TileWMS = tc, ux.source.UTFGrid = ic, ux.source.Vector = op, ux.source.VectorTile = ac, ux.source.WMTS = lc, ux.source.WMTS.optionsFromCapabilities = function (t, e) {
      var i = H(t.Contents.Layer, function (t, i, r) {
        return t.Identifier == e.layer;
      });
      if (null === i) return null;
      var r,
          n = t.Contents.TileMatrixSet;
      (r = i.TileMatrixSetLink.length > 1 ? J(i.TileMatrixSetLink, "projection" in e ? function (t, i, r) {
        var o = H(n, function (e) {
          return e.Identifier == t.TileMatrixSet;
        }).SupportedCRS,
            s = Ee(o.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || Ee(o),
            a = Ee(e.projection);
        return s && a ? Ie(s, a) : o == e.projection;
      } : function (t, i, r) {
        return t.TileMatrixSet == e.matrixSet;
      }) : 0) < 0 && (r = 0);
      var o = i.TileMatrixSetLink[r].TileMatrixSet,
          s = i.TileMatrixSetLink[r].TileMatrixSetLimits,
          a = i.Format[0];
      "format" in e && (a = e.format), (r = J(i.Style, function (t, i, r) {
        return "style" in e ? t.Title == e.style : t.isDefault;
      })) < 0 && (r = 0);
      var h = i.Style[r].Identifier,
          l = {};
      "Dimension" in i && i.Dimension.forEach(function (t, e, i) {
        var r = t.Identifier,
            n = t.Default;
        void 0 === n && (n = t.Value[0]), l[r] = n;
      });
      var u,
          p = H(t.Contents.TileMatrixSet, function (t, e, i) {
        return t.Identifier == o;
      }),
          c = p.SupportedCRS;

      if (c && (u = Ee(c.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || Ee(c)), "projection" in e) {
        var d = Ee(e.projection);
        d && (u && !Ie(d, u) || (u = d));
      }

      var f,
          _,
          g = i.WGS84BoundingBox;

      if (void 0 !== g) {
        var y = Ee("EPSG:4326").getExtent();
        _ = g[0] == y[0] && g[2] == y[2], f = be(g, "EPSG:4326", u);
        var v = u.getExtent();
        v && (ot(v, f) || (f = void 0));
      }

      var m = Eu(p, f, s),
          x = [],
          E = e.requestEncoding;
      if (E = void 0 !== E ? E : "", "OperationsMetadata" in t && "GetTile" in t.OperationsMetadata) for (var S = t.OperationsMetadata.GetTile.DCP.HTTP.Get, T = 0, C = S.length; T < C; ++T) {
        if (S[T].Constraint) {
          var R = H(S[T].Constraint, function (t) {
            return "GetEncoding" == t.name;
          }).AllowedValues.Value;
          if ("" === E && (E = R[0]), E !== hc.KVP) break;
          X(R, hc.KVP) && x.push(S[T].href);
        } else S[T].href && (E = hc.KVP, x.push(S[T].href));
      }
      return 0 === x.length && (E = hc.REST, i.ResourceURL.forEach(function (t) {
        "tile" === t.resourceType && (a = t.format, x.push(t.template));
      })), {
        urls: x,
        layer: e.layer,
        matrixSet: o,
        format: a,
        projection: u,
        requestEncoding: E,
        tileGrid: m,
        style: h,
        dimensions: l,
        wrapX: _,
        crossOrigin: e.crossOrigin
      };
    }, ux.source.XYZ = ep, ux.source.Zoomify = dc, ux.sphere.getArea = function t(e, i) {
      var r = i || {},
          n = r.radius || Wt,
          o = r.projection || "EPSG:3857",
          s = e.getType();
      s !== Nt.GEOMETRY_COLLECTION && (e = e.clone().transform(o, "EPSG:4326"));
      var a,
          h,
          l,
          u,
          p,
          c,
          d = 0;

      switch (s) {
        case Nt.POINT:
        case Nt.MULTI_POINT:
        case Nt.LINE_STRING:
        case Nt.MULTI_LINE_STRING:
        case Nt.LINEAR_RING:
          break;

        case Nt.POLYGON:
          for (a = e.getCoordinates(), d = Math.abs(Zt(a[0], n)), l = 1, u = a.length; l < u; ++l) {
            d -= Math.abs(Zt(a[l], n));
          }

          break;

        case Nt.MULTI_POLYGON:
          for (l = 0, u = (a = e.getCoordinates()).length; l < u; ++l) {
            for (h = a[l], d += Math.abs(Zt(h[0], n)), p = 1, c = h.length; p < c; ++p) {
              d -= Math.abs(Zt(h[p], n));
            }
          }

          break;

        case Nt.GEOMETRY_COLLECTION:
          var f = e.getGeometries();

          for (l = 0, u = f.length; l < u; ++l) {
            d += t(f[l], i);
          }

          break;

        default:
          throw new Error("Unsupported geometry type: " + s);
      }

      return d;
    }, ux.sphere.getDistance = Kt, ux.sphere.getLength = function t(e, i) {
      var r = i || {},
          n = r.radius || Wt,
          o = r.projection || "EPSG:3857",
          s = e.getType();
      s !== Nt.GEOMETRY_COLLECTION && (e = e.clone().transform(o, "EPSG:4326"));
      var a,
          h,
          l,
          u,
          p,
          c,
          d = 0;

      switch (s) {
        case Nt.POINT:
        case Nt.MULTI_POINT:
          break;

        case Nt.LINE_STRING:
        case Nt.LINEAR_RING:
          d = Ht(a = e.getCoordinates(), n);
          break;

        case Nt.MULTI_LINE_STRING:
        case Nt.POLYGON:
          for (l = 0, u = (a = e.getCoordinates()).length; l < u; ++l) {
            d += Ht(a[l], n);
          }

          break;

        case Nt.MULTI_POLYGON:
          for (l = 0, u = (a = e.getCoordinates()).length; l < u; ++l) {
            for (p = 0, c = (h = a[l]).length; p < c; ++p) {
              d += Ht(h[p], n);
            }
          }

          break;

        case Nt.GEOMETRY_COLLECTION:
          var f = e.getGeometries();

          for (l = 0, u = f.length; l < u; ++l) {
            d += t(f[l], i);
          }

          break;

        default:
          throw new Error("Unsupported geometry type: " + s);
      }

      return d;
    }, ux.style.AtlasManager = ol, ux.style.Circle = Ru, ux.style.Fill = mr, ux.style.Icon = Ou, ux.style.IconImageCache.shared = Ks, ux.style.Image = Tu, ux.style.RegularShape = Cu, ux.style.Stroke = Er, ux.style.Style = Nu, ux.style.Text = Rr, ux.tilegrid.TileGrid = Pl, ux.tilegrid.WMTS = xu, ux.tilegrid.WMTS.createFromCapabilitiesMatrixSet = Eu, ux.tilegrid.createXYZ = Fl, ux.xml.getAllTextContent = eu, ux.xml.parse = ru;
    e.default = ux;
  }]).default;
});
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59382" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","lib/ol.js"], null)
//# sourceMappingURL=/ol.ad4e61c7.js.map