import React from "react"
import WorkBio from "./WorkBio"
import frameworks from "src/data/frameworks"
import growratioMap from "src/images/workplaces/growratio/map.png"
import { Grid } from "@material-ui/core"

export default {
  component: WorkBio,
  title: "WorkBio",
  excludeStories: /.*Data$/,
}

export const workBioData = {
  skillsRequired: [
    frameworks.react,
    frameworks.redux,
    frameworks.reactnative,
    frameworks.materialui,
    frameworks.docker,
  ],
  company: {
    name: "Test Company Inc.",
    location: "Toronto, ON, Canada",
    mapImg: growratioMap,
    website: "https://growrat.io",
  },
}

export const Growratio = () => (
  <Grid container>
    <Grid item xs={12} md={3}>
      <WorkBio {...workBioData} />
    </Grid>
    <Grid xs={12} md={9}></Grid>
  </Grid>
)
