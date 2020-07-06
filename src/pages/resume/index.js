import React from "react"

import Layout from "src/components/Layout"

import SEO from "src/components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles, Grid, Button, Divider } from "@material-ui/core"
// import DownloadIcon from "@material-ui/icons/Save"
import * as workExperience from "src/data/workExperience"
import WorkExperienceCard from "src/components/Work/WorkExperienceCard/WorkExperienceCard"
import Education from "src/components/Education"
import { Link as GatsbyLink } from "gatsby"

const useStyles = makeStyles(theme => ({
  marginSpacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const ResumePage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Résumé" />
      <Container>
        <Typography variant="h3" style={{ marginTop: 32 }}>
          Résumé
        </Typography>
        <div className={classes.marginSpacing}>
          <Divider />
          <Grid
            container
            spacing={1}
            wrap="wrap"
            justify="space-between"
            alignItems="baseline"
            className={classes.marginSpacing}
          >
            <Grid item>
              {/* <Typography>
                There are also a PDF and simplified version available
              </Typography> */}
              <Typography>
                There is also a simplified version available
              </Typography>
            </Grid>
            <Grid item container spacing={1} style={{ width: "auto" }}>
              {/* <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<DownloadIcon />}
                  style={{ marginRight: 8 }}
                >
                  Download PDF
                </Button>
              </Grid> */}
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  component={GatsbyLink}
                  to="/resume/simple"
                >
                  View Simplified
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
        </div>

        <Typography variant="h4">Education</Typography>
        <Education />

        {/* Work Experience */}
        <Typography variant="h4" style={{ marginTop: 36 }}>
          Work Experience
        </Typography>
        <Grid container spacing={0} direction="column">
          <Grid item style={{ marginBottom: 32 }}>
            <WorkExperienceCard job={workExperience.growratio} />
          </Grid>
          <Grid item style={{ marginBottom: 32 }}>
            <WorkExperienceCard job={workExperience.zanbato} />
          </Grid>
          <Grid item style={{ marginBottom: 32 }}>
            <WorkExperienceCard job={workExperience.ndimension} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ResumePage
