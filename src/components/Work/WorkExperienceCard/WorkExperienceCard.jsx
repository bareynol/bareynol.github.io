import React from "react"
import {
  Card,
  Grid,
  CardContent,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core"
import Responsibilities from "src/components/Work/WorkExperienceCard/Responsibilities"
import WorkBio from "src/components/Work/WorkExperienceCard/WorkBio"

const useStyles = makeStyles(theme => ({
  cardMedia: {
    overflow: "hidden",
    backgroundPosition: "top",
    backgroundSize: "cover",
  },
  titleContent: {
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  workBioContent: {
    [theme.breakpoints.up("md")]: {
      // marginTop: theme.spacing(2),
    },
  },
}))

function WorkExperienceCard({
  job: {
    company: { name, mapImg, theme, background, details, location, website },
    role,
    responsibilities,
    dates,
    skillsRequired,
  },
}) {
  const classes = useStyles()
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <CardContent className={classes.titleContent}>
            <div>
              <Typography variant="h4" display="inline">
                {role}
              </Typography>
              <Typography variant="subtitle1" display="inline">
                {" at "}
              </Typography>
              <Typography variant="h5" display="inline" color="textPrimary">
                {name}
              </Typography>
            </div>
            <Typography variant="overline" color="textSecondary">
              {dates}
            </Typography>
          </CardContent>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {details}
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.workBioContent}>
            <WorkBio
              {...{
                skillsRequired,
                company: { name, location, mapImg, website },
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <Responsibilities responsibilities={responsibilities} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default WorkExperienceCard
