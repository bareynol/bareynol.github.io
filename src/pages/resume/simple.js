import React from "react"

import Layout from "src/components/layout"

import SEO from "src/components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles } from "@material-ui/core"
// import Toast from "src/components/Toast"

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const SimpleResumePage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Simple Resume" />
      <Container>
        <div className={classes.title}>
          <Typography variant="h4" align="center">
            Simple
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            I am
            <Typography component="span" variant="h4" color="textPrimary">
              {" "}
              Brian Reynolds
            </Typography>
          </Typography>
        </div>
      </Container>
    </Layout>
  )
}

export default SimpleResumePage
