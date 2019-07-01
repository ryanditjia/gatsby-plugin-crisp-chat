exports.onInitialClientRender = (_, { enableImprovedAccessibility = true }) => {
  if (enableImprovedAccessibility) {
    const container = document.documentElement || document.body
    const config = { attributes: true, childList: true, subtree: true }

    let domObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          /* eslint-disable no-useless-computed-key */
          const { [0]: addedNodes } = mutation.addedNodes

          const crispContainerExists =
            addedNodes &&
            addedNodes.childNodes[0] &&
            addedNodes.childNodes[0].className === 'crisp-kquevr'

          if (crispContainerExists) {
            const crispBoxElements = document.getElementsByClassName(
              'crisp-kquevr',
            )
            let crispBox = crispBoxElements[0]
            crispBox.setAttribute('aria-label', 'crisp chat box')

            domObserver.disconnect()
          }
        }
      })
    })

    domObserver.observe(container, config)
  }
}
