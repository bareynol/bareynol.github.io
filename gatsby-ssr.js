/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="preload-roboto-font"
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    />,
    <link
      key="roboto-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    />,
  ])
}
