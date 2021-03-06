"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _theming = require("@storybook/theming");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n\n  padding: ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _theming.styled.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      footer = _ref.footer;
  return footer ? '#f3f3f3' : theme.background.app;
}, function (_ref2) {
  var footer = _ref2.footer;
  return footer ? '6px 8px' : '4px 8px';
});

exports.Container = Container;