exports.onInitialClientRender = (
  {},
  { accessible = true }
) => {
  console.log(`ReactDOM.render has executed access: ${accessible}`)
}