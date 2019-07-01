"use strict";

exports.onInitialClientRender = (_, {
  accessible = true
}) => {
  if (accessible) {
    const container = document.documentElement || document.body;
    const config = {
      attributes: true,
      childList: true,
      subtree: true
    };
    let domObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "childList") {
          const addedNodes = mutation.addedNodes[0];
          const crispContainerExists = addedNodes && addedNodes.childNodes[0] && addedNodes.childNodes[0].className === "crisp-kquevr";

          if (crispContainerExists) {
            const crispBoxElements = document.getElementsByClassName("crisp-kquevr");
            let crispBox = crispBoxElements[0];
            crispBox.setAttribute("aria-label", "crisp chat box");
            domObserver.disconnect();
          }
        }
      });
    });
    domObserver.observe(container, config);
  }
};