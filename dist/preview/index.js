"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThemes = exports.toThemes = exports.withThemes = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonDevkit = require("@storybook/addon-devkit");

require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DecoratorUI = function DecoratorUI(ThemeProvider) {
  return function (_ref) {
    var context = _ref.context,
        getStory = _ref.getStory,
        theme = _ref.theme;
    return /*#__PURE__*/_react.default.createElement(ThemeProvider, {
      theme: theme
    }, getStory(context));
  };
};

var withData = function withData(ThemeProvider, _ref2) {
  var providerFn = _ref2.providerFn;
  var CurrentThemeProvider = ThemeProvider;

  if (providerFn) {
    CurrentThemeProvider = function CurrentThemeProvider(_ref3) {
      var theme = _ref3.theme,
          children = _ref3.children;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, providerFn({
        theme: theme,
        children: children
      }));
    };
  }

  return (0, _addonDevkit.createDecorator)({
    theme: function theme(store) {
      return store.themesList[store.currentTheme];
    }
  })(DecoratorUI(CurrentThemeProvider), {
    isGlobal: true
  });
};

var withThemes = function withThemes(ThemeProvider, themesList) {
  var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      providerFn = _ref4.providerFn;

  return withData(ThemeProvider, {
    providerFn: providerFn
  })({
    themesList: themesList,
    currentTheme: 0
  });
};

exports.withThemes = withThemes;
var toThemes = (0, _addonDevkit.setParameters)();
exports.toThemes = toThemes;

var useThemes = function useThemes() {
  (0, _react2.addDecorator)(withThemes.apply(void 0, arguments));
  return toThemes;
};

exports.useThemes = useThemes;