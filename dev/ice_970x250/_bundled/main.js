(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = bannerSize.w;
var h = bannerSize.h;

function init(_ref) {
	var total = _ref.total;
	var w = _ref.w;
	var h = _ref.h;

	w = w / 2;
	h = h / 2;

	var obj = { duration: 1, rotationX: -180, ease: "back.out" };

	var tl = new TimelineMax({});

	tl.add("all", "+=2.2");

	for (var i = 0; i < total; i++) {
		var wrap = "#wrap" + (i + 1);

		TweenLite.set(".card", { transformOrigin: "0 " + h / 2 + "px" });
		TweenLite.set([wrap, ".cardFace"], { width: w, height: h });

		var time = i * .15;
		tl.to("#wrap" + (i + 1) + " .card", _extends({}, obj), "all+=" + time);
	}
}

exports.init = init;
exports.bannerSize = bannerSize;

},{"./helpers/helpers.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.init)({ total: 2, w: 1028, h: 90 });

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
