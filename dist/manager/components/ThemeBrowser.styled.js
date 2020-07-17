"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedCard = exports.Copy = exports.ThemeHolder = exports.Container = void 0;

var _theming = require("@storybook/theming");

var _addonDevkit = require("@storybook/addon-devkit");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: #f6f9fc;\n  padding: 12px;\n  margin-top: 4px;\n  font-size: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: unset;\n  border: none;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 35px;\n  height: 20px;\n  cursor: pointer;\n  opacity: 0.6;\n  :hover {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  overflow: auto;\n  flex-grow: 1;\n  label: ThemeHolder;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  label: Container;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _theming.styled)(_addonDevkit.Block)(_templateObject());
exports.Container = Container;

var ThemeHolder = _theming.styled.div(_templateObject2());

exports.ThemeHolder = ThemeHolder;
var copyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0eiIvPjwvc3ZnPg=';

var Copy = _theming.styled.button(_templateObject3(), copyIcon);

exports.Copy = Copy;

var SelectedCard = _theming.styled.div(_templateObject4());

exports.SelectedCard = SelectedCard;