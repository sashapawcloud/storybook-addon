"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickerHolder = exports.Container = void 0;

var _theming = require("@storybook/theming");

var _addonDevkit = require("@storybook/addon-devkit");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsla(0, 0%, 50%, 0.35);\n  height: 1px;\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  overflow: auto;\n  label: Container;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _theming.styled)(_addonDevkit.Block)(_templateObject());
exports.Container = Container;

var PickerHolder = _theming.styled.div(_templateObject2());

exports.PickerHolder = PickerHolder;