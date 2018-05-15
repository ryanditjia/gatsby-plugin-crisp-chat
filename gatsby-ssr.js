import React from 'react'

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const crispConfig = `window.$crisp=[];window.CRISP_WEBSITE_ID="${pluginOptions.websiteId}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`

  return setHeadComponents([
    <script key="gatsby-plugin-crisp-chat" dangerouslySetInnerHTML={{ __html: crispConfig }} />,
  ])
}
