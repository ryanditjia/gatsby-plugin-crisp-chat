"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var crispConfig = "window.$crisp=[];window.CRISP_WEBSITE_ID=\"" + pluginOptions.websiteId + "\";(function(){d=document;s=d.createElement(\"script\");s.src=\"https://client.crisp.chat/l.js\";s.async=1;d.getElementsByTagName(\"head\")[0].appendChild(s);})();";

  return setHeadComponents([_react2.default.createElement("script", { key: "gatsby-plugin-crisp-chat", dangerouslySetInnerHTML: { __html: crispConfig } })]);
};