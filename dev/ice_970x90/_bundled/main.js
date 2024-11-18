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

function init() {
	var end = arguments.length <= 0 || arguments[0] === undefined ? 1.3 : arguments[0];

	TweenLite.set(".frame1", { opacity: 1 });
	var tl = new TimelineMax({});

	var SCALE = 20 / 250;
	var Y = Math.max(SCALE * h, 8);

	var obj = { duration: .35, opacity: 0 };

	tl.add("change", "+=1");

	tl.to(".f1", _extends({}, obj), "+=2");
	tl.from(".f2", _extends({}, obj));

	return tl;
}

// function init(end=1.3){	
// 	TweenLite.set(".frame1", {opacity:1})
// 	const tl = new TimelineMax({delay:2})

// 	const SCALE = 20/250
// 	const Y = Math.max(SCALE * h, 8)

// 	const obj = {duration:.35, opacity:0, y:`+=${Y}`}

// 	tl.from(".t1a", {...obj}, "+=.3")
// 	tl.from(".t1b", {...obj})
// 	tl.from(".t1c", {...obj})

// 	tl.from(".t2", {duration:.5, opacity:0}, end)

// 	return tl
// }

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

(0, _commonJsCommonJs.init)();

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
