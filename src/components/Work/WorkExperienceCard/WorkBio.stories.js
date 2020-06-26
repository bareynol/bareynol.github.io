import React from "react"
import WorkBio from "./WorkBio"
import frameworks from "src/data/frameworks"

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
  },
}

export const Growratio = () => <WorkBio {...workBioData} />
