import React from "react"
import WorkExperienceCard from "./WorkExperienceCard"
import growratioMap from "src/images/workplaces/growratio/map.png"
import growratioBg from "src/images/workplaces/growratio/oldbg.jpg"
import zanbatoMap from "src/images/workplaces/zanbato/map.png"
import ndimensionMap from "src/images/workplaces/ndimension/map.png"
import ndimensionBg from "src/images/workplaces/ndimension/background.png"

import GrowratioDetails from "src/components/Work/WorkExperienceCard/GrowratioDetails"
import { responsibilitiesData } from "src/components/Work/WorkExperienceCard/Responsibilities.stories"
import { workBioData } from "src/components/Work/WorkExperienceCard/WorkBio.stories"
import ZanbatoDetails from "src/components/Work/WorkExperienceCard/ZanbatoDetails"
import NdimensionDetails from "src/components/Work/WorkExperienceCard/NdimensionDetails"

export default {
  component: WorkExperienceCard,
  title: "Work Experience Card",
  excludeStories: /.*Data$/,
}

export const workData = {
  ...workBioData,
  company: {
    ...workBioData.company,
    name: "Test Company Inc.",
    background: growratioBg,
    mapImg: growratioMap,
    details: null,
    website: "https://example.com",
  },
  role: "Software Developer",
  responsibilities: [...responsibilitiesData],
  dates: "January 1970 - Present",
}

const workGrowratioData = {
  ...workData,
  company: {
    ...workData.company,
    name: "Growratio Inc.",
    details: <GrowratioDetails />,
  },
  role: "Lead Developer",
  dates: "Aug 2017 - Mar 2020",
}

const workZanbatoData = {
  ...workData,
  company: {
    ...workData.company,
    name: "Zanbato Inc.",
    mapImg: zanbatoMap,
    details: <ZanbatoDetails />,
    location: "Mountain View, CA, USA",
  },
  role: "Full-stack Developer (Co-op)",
  dates: "May 2016 - Dec 2016",
}

const workNdimensionData = {
  ...workData,
  company: {
    ...workData.company,
    name: "N-Dimension Solutions Inc.",
    details: <NdimensionDetails />,
    location: "Richmond Hill, ON, Canada",
    background: ndimensionBg,
    mapImg: ndimensionMap,
  },
  role: "Cybersecurity Developer",
  dates: "Jan 2015 - Aug 2015",
}

export const Growratio = () => <WorkExperienceCard job={workGrowratioData} />
export const Zanbato = () => <WorkExperienceCard job={workZanbatoData} />
export const Ndimension = () => <WorkExperienceCard job={workNdimensionData} />
