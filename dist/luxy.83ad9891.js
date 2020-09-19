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
})({"js/luxy.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * luxy.js v0.1.0: Inertia scroll and parallax effect plugin in Vanilla.js
 * (c) 2018 Mineo Okuda
 * MIT License
 * git+ssh://git@github.com:min30327/luxy.js.git
 */

/**
 * Written by Mineo Okuda on 01/03/18.
 *
 * Mineo Okuda - development + design
 * https://willstyle.co.jp
 * https://github.com/min30327
 *
 * MIT license.
 */
(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // COMMONJS
    module.exports = factory();
  } else {
    // BROWSER
    root.luxy = factory();
  }
})(this, function () {
  'use strict';

  var defaults = {
    wrapper: '#luxy',
    targets: '.luxy-el',
    wrapperSpeed: 0.08,
    targetSpeed: 0.02,
    targetPercentage: 0.1
  };
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  /**
   * Merge two or more objects. Returns a new object.
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */

  var extend = function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length; // Merge the object into the extended object

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          extended[prop] = obj[prop];
        }
      }
    }; // Loop through each object and conduct a merge


    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  var Luxy = function Luxy() {
    this.Targets = [];
    this.TargetsLength = 0;
    this.wrapper = '';
    this.windowHeight = 0;
    this.wapperOffset = 0;
  };

  Luxy.prototype = {
    isAnimate: false,
    isResize: false,
    scrollId: "",
    resizeId: "",
    init: function init(options) {
      this.settings = extend(defaults, options || {});
      this.wrapper = document.querySelector(this.settings.wrapper);

      if (this.wrapper === "undefined") {
        return false;
      }

      this.targets = document.querySelectorAll(this.settings.targets);
      document.body.style.height = this.wrapper.clientHeight + 'px';
      this.windowHeight = window.clientHeight;
      this.attachEvent();
      this.apply(this.targets, this.wrapper);
      this.animate();
      this.resize();
    },
    apply: function apply(targets, wrapper) {
      this.wrapperInit();
      this.targetsLength = targets.length;

      for (var i = 0; i < this.targetsLength; i++) {
        var attr = {
          offset: targets[i].getAttribute('data-offset'),
          speedX: targets[i].getAttribute('data-speed-x'),
          speedY: targets[i].getAttribute('data-speed-Y'),
          percentage: targets[i].getAttribute('data-percentage'),
          horizontal: targets[i].getAttribute('data-horizontal')
        };
        this.targetsInit(targets[i], attr);
      }
    },
    wrapperInit: function wrapperInit() {
      this.wrapper.style.width = '100%';
      this.wrapper.style.position = 'fixed';
    },
    targetsInit: function targetsInit(elm, attr) {
      this.Targets.push({
        elm: elm,
        offset: attr.offset ? attr.offset : 0,
        horizontal: attr.horizontal ? attr.horizontal : 0,
        top: 0,
        left: 0,
        speedX: attr.speedX ? attr.speedX : 1,
        speedY: attr.speedY ? attr.speedY : 1,
        percentage: attr.percentage ? attr.percentage : 0
      });
    },
    scroll: function scroll() {
      var scrollTopTmp = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var offsetBottom = this.scrollTop + this.windowHeight;
      this.wrapperUpdate(this.scrollTop);

      for (var i = 0; i < this.Targets.length; i++) {
        this.targetsUpdate(this.Targets[i]);
      }
    },
    animate: function animate() {
      this.scroll();
      this.scrollId = requestAnimationFrame(this.animate.bind(this));
    },
    wrapperUpdate: function wrapperUpdate() {
      this.wapperOffset += (this.scrollTop - this.wapperOffset) * this.settings.wrapperSpeed;
      this.wrapper.style.transform = 'translate3d(' + 0 + ',' + Math.round(-this.wapperOffset * 100) / 100 + 'px ,' + 0 + ')';
    },
    targetsUpdate: function targetsUpdate(target) {
      target.top += (this.scrollTop * Number(this.settings.targetSpeed) * Number(target.speedY) - target.top) * this.settings.targetPercentage;
      target.left += (this.scrollTop * Number(this.settings.targetSpeed) * Number(target.speedX) - target.left) * this.settings.targetPercentage;
      var targetOffsetTop = parseInt(target.percentage) - target.top - parseInt(target.offset);
      var offsetY = Math.round(targetOffsetTop * -100) / 100;
      var offsetX = 0;

      if (target.horizontal) {
        var targetOffsetLeft = parseInt(target.percentage) - target.left - parseInt(target.offset);
        offsetX = Math.round(targetOffsetLeft * -100) / 100;
      }

      target.elm.style.transform = 'translate3d(' + offsetX + 'px ,' + offsetY + 'px ,' + 0 + ')';
    },
    resize: function resize() {
      var self = this;
      self.windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;

      if (parseInt(self.wrapper.clientHeight) != parseInt(document.body.style.height)) {
        document.body.style.height = self.wrapper.clientHeight + 'px';
      }

      self.resizeId = requestAnimationFrame(self.resize.bind(self));
    },
    attachEvent: function attachEvent() {
      var self = this;
      window.addEventListener('resize', function () {
        if (!self.isResize) {
          cancelAnimationFrame(self.resizeId);
          cancelAnimationFrame(self.scrollId);
          self.isResize = true;
          setTimeout(function () {
            self.isResize = false;
            self.resizeId = requestAnimationFrame(self.resize.bind(self));
            self.scrollId = requestAnimationFrame(self.animate.bind(self));
          }, 200);
        }
      });
    }
  };
  var luxy = new Luxy();
  return luxy;
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63183" + '/');

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
},{}]},{},["../../../../Users/joni_/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/luxy.js"], null)
//# sourceMappingURL=/luxy.83ad9891.js.map