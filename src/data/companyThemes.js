import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

export const growratioTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: "#377e96" },
      background: {
        paper: "#212121",
      },
    },
    typography: {
      fontFamily: '"Open Sans"',
    },
  })
)

export const zanbatoTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: "#4a90e2" },
      background: { default: "#f4f4f4" },
    },
    typography: {
      subtitle2: { fontFamily: '"Roboto Mono"' },
    },
  })
)

export const ndimensionTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: "#0d47a1" },
      background: { default: "#f4f4f4" },
    },
    typography: {
      fontFamily: '"Open Sans"',
    },
  })
)
