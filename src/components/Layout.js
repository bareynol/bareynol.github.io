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
  IconButton,
} from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import theme from "src/theme"

const useStyles = makeStyles({
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  socialIcons: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
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
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Footer = () => {
  const classes = useStyles()
  return (
    <footer>
      <Container maxWidth="lg">
        <Paper variant="outlined" className={classes.footer}>
          <Typography
            variant="caption"
            style={{ color: "rgba(255,255,255,0.1)" }}
            align="center"
            component="div"
          >
            something here is afooter
          </Typography>
          <div className={classes.socialIcons}>
            <IconButton
              color="primary"
              href="https://www.linkedin.com/in/brian-reynolds-1a918278/"
              target="_blank"
              rel="noreferrer"
              aria-label="View LinkedIn for Brian Reynolds"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://github.com/bareynol"
              target="_blank"
              rel="noreferrer"
              aria-label="View Gitlab of Brian Reynolds"
            >
              <GitHubIcon />
            </IconButton>
          </div>
          <Typography variant="subtitle1" align="center" gutterBottom>
            © {new Date().getFullYear()} Brian Reynolds
          </Typography>
        </Paper>
      </Container>
    </footer>
  )
}
