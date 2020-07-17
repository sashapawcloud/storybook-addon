"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.ThemeAvatar = exports.AvatarHolder = exports.Theme = exports.ListHolder = exports.Container = exports.Swatch = void 0;

var _theming = require("@storybook/theming");

var _addonDevkit = require("@storybook/addon-devkit");

var _themeSwatch = require("@react-theming/theme-swatch");

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 6px;\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  margin: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  ", "\n  border-radius: ", "px;\n  background-color: ", ";\n  margin: ", "px 0px;\n  padding: 0px;\n  width: 100%;\n  cursor: pointer;\n\n  :hover {\n    border: 1px solid ", ";\n  }\n\n  display: flex;\n  flex-direction: ", ";\n  justify-content: flex-start;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: 1px;\n  flex-grow: 1;\n  padding: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Swatch = (0, _themeSwatch.createSwatch)(_theming.styled);
exports.Swatch = Swatch;
var Container = (0, _theming.styled)(_addonDevkit.Block)(_templateObject());
exports.Container = Container;

var ListHolder = _theming.styled.div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.layoutMargin;
});

exports.ListHolder = ListHolder;

var Theme = _theming.styled.button(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.background.app;
}, function (_ref3) {
  var current = _ref3.current,
      theme = _ref3.theme;
  return current ? "border-color: ".concat(theme.color.secondary, ";") : null;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.appBorderRadius;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.background.app;
}, function (_ref6) {
  var theme = _ref6.theme;
  return Math.floor(theme.layoutMargin / 2);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.appBorderColor;
}, function (_ref8) {
  var single = _ref8.single;
  return single ? 'column' : 'row';
});

exports.Theme = Theme;

var AvatarHolder = _theming.styled.div(_templateObject4(), function (_ref9) {
  var single = _ref9.single;
  return single ? '120px' : '36px';
}, function (_ref10) {
  var single = _ref10.single;
  return single ? '120px' : '36px';
});

exports.AvatarHolder = AvatarHolder;

var ThemeAvatar = _theming.styled.div(_templateObject5());

exports.ThemeAvatar = ThemeAvatar;

var Title = _theming.styled.h4(_templateObject6(), function (_ref11) {
  var single = _ref11.single;
  return single ? '32px' : '16px';
}, function (_ref12) {
  var single = _ref12.single;
  return single ? 'bold' : 'normal';
});

exports.Title = Title;