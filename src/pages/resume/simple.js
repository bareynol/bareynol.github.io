import React from "react"

import Layout from "src/components/layout"

import SEO from "src/components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles, Grid, Button, Divider } from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/Save"
import * as workExperience from "src/data/workExperience"

const useStyles = makeStyles(theme => ({
  marginSpacing: {
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
              <Typography>
                There are also a PDF and detailed version available
              </Typography>
            </Grid>
            <Grid item container spacing={1} style={{ width: "auto" }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<DownloadIcon />}
                  style={{ marginRight: 8 }}
                >
                  Download PDF
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" href="/resume">
                  View Detailed
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
        </div>

        <Typography variant="h4">Work Experience</Typography>

        {[
          workExperience.growratio,
          workExperience.zanbato,
          workExperience.ndimension,
        ].map(job => (
          <div style={{ marginTop: 16 }} key={job.company.name}>
            <div>
              <Typography display="inline" variant="h5">
                {`${job.company.name} `}
              </Typography>
              <Typography display="inline" variant="subtitle2">
                {`${job.company.location}`}
              </Typography>
            </div>
            <Typography
              variant="h6"
              color="textPrimary"
            >{`${job.role} `}</Typography>
            <Typography variant="overline" paragraph>
              {job.dates}
            </Typography>
            <Typography>Responsibilities:</Typography>
            <div style={{}}>
              {job.responsibilities.map(r => (
                <div key={r.title}>
                  <ul>
                    <li>{r.title}</li>
                    <ul style={{ lineHeight: "1.75" }}>
                      {r.specifics.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </ul>
                </div>
              ))}
            </div>
            <Divider />
          </div>
        ))}

        <Typography variant="h4" style={{ marginTop: 16 }}>
          Education
        </Typography>
        <Typography variant="h5" style={{ marginTop: 16 }}>
          University of Waterloo
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Bachelor of Computer Science (2017)
        </Typography>
      </Container>
    </Layout>
  )
}

export default SimpleResumePage
