/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

import {
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  ThemeProvider,
  Paper,
} from "@material-ui/core"
import theme from "src/theme"

const useStyles = makeStyles({
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <Container maxWidth="lg">
            <Paper variant="outlined" className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                © {new Date().getFullYear()}
              </Typography>
              <Typography variant="subtitle1" align="center">
                Something here is afooter
              </Typography>
            </Paper>
          </Container>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
