/* eslint-disable import/no-unresolved */
import React from 'react'

exports.onRenderBody = (
  { setPostBodyComponents },
  { websiteId, enableDuringDevelop = true },
) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'gatsby-plugin-crisp-chat configured not to load in development server.',
    )
    return null
  }

  if (!websiteId) {
    console.log(
      'You have not provided websiteId, gatsby-plugin-crisp-chat will not take effect.',
    )
    return null
  }

  const scriptInnerHTML = `window.$crisp=[];window.CRISP_WEBSITE_ID="${websiteId}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`

  return setPostBodyComponents([
    <script
      key="gatsby-plugin-crisp-chat"
      dangerouslySetInnerHTML={{ __html: scriptInnerHTML }}
    />,
  ])
}
