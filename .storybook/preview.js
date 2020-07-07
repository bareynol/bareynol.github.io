// import "fontsource-roboto"
// import "typeface-open-sans"
// import "typeface-roboto-mono"
import React from "react"
import { addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { CssBaseline, Container, withWidth } from "@material-ui/core"
import { MuiThemeProvider } from "@material-ui/core/styles"

import theme from "../src/theme"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = ""
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

const ScreenSize = withWidth()(({ width }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        backgroundColor: "white",
        color: "black",
        padding: 10,
        opacity: 0.7,
        pointerEvents: "none",
      }}
    >
      Current Width: {width}
    </div>
  )
})

addDecorator(storyFn => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Container>{storyFn()}</Container>
    <ScreenSize />
  </MuiThemeProvider>
))
