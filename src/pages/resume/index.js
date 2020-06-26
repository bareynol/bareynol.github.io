import React from "react"

import Layout from "src/components/layout"

import SEO from "src/components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles, Grid, Button, Divider } from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/Save"
import * as workExperience from "src/data/workExperience"
import WorkExperienceCard from "src/components/Work/WorkExperienceCard/WorkExperienceCard"
import Education from "src/components/Education"
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

const ResumePage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Resume" />
      <Container>
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <Divider />
          <Grid
            container
            wrap="wrap"
            justify="space-between"
            alignItems="baseline"
            style={{ marginTop: 16, marginBottom: 16 }}
          >
            <Grid item style={{ flexGrow: 1 }}>
              <Typography>
                There are also a PDF and simplified version available
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
                style={{ marginRight: 8 }}
              >
                Download PDF
              </Button>
              <Button variant="contained" color="secondary">
                View Simplified
              </Button>
            </Grid>
          </Grid>
          <Divider />
        </div>

        <Typography variant="h4">Education</Typography>
        <Education />

        {/* Work Experience */}
        <Typography variant="h4">Work Experience</Typography>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <WorkExperienceCard job={workExperience.growratio} />
          </Grid>
          <Grid item>
            <WorkExperienceCard job={workExperience.zanbato} />
          </Grid>
          <Grid item>
            <WorkExperienceCard job={workExperience.ndimension} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ResumePage
