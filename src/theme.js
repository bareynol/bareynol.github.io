import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

const consoleFontFamily = {
  fontFamily:
    '"Consolas", "Monaco", "Lucidia Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New"',
}

const primaryColor = "#0f0"

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: primaryColor },
      background: {
        default: "#111",
        paper: "#212121",
      },
    },
    overrides: {
      MuiTypography: {
        h1: { color: primaryColor },
        h2: { color: primaryColor },
        h3: { color: primaryColor },
        h4: { color: primaryColor },
        h5: { color: primaryColor },
        h6: { color: primaryColor },
        subtitle1: { color: primaryColor },
        subtitle2: { color: primaryColor },
        button: { color: primaryColor },
      },
    },
    typography: {
      h1: { ...consoleFontFamily },
      h2: { ...consoleFontFamily },
      h3: { ...consoleFontFamily },
      h4: { ...consoleFontFamily },
      h5: { ...consoleFontFamily },
      h6: { ...consoleFontFamily },
      subtitle1: { ...consoleFontFamily },
      subtitle2: { ...consoleFontFamily },
      button: { ...consoleFontFamily },
    },
  })
)
