"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _theming = require("@storybook/theming");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin: 0 4px;\n  font-weight: 600;\n  text-transform: capitalize;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _theming.styled.h3(_templateObject());

exports.Heading = Heading;