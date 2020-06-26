import React from "react"
import {
  growratioTheme,
  zanbatoTheme,
  ndimensionTheme,
} from "src/data/companyThemes"
import growratioMap from "src/images/workplaces/growratio/map.png"
import zanbatoMap from "src/images/workplaces/zanbato/map.png"
import ndimensionMap from "src/images/workplaces/ndimension/map.png"
import GrowratioDetails from "src/components/Work/WorkExperienceCard/GrowratioDetails"
import NdimensionDetails from "src/components/Work/WorkExperienceCard/NdimensionDetails"
import ZanbatoDetails from "src/components/Work/WorkExperienceCard/ZanbatoDetails"
import frameworks from "src/data/frameworks"
import { responsibilitiesData } from "src/components/Work/WorkExperienceCard/Responsibilities.stories"

export const growratio = {
  company: {
    name: "Growratio Inc.",
    location: "Toronto, ON, Canada",
    theme: growratioTheme,
    mapImg: growratioMap,
    details: <GrowratioDetails />,
    website: "https://growrat.io",
  },
  role: "Lead Developer",
  dates: "Aug 2017 - Mar 2020",
  responsibilities: [
    {
      title: "Device Firmware",
      specifics: [
        "Development of software to run smart lights, smart controllers, and environment sensors",
        "Development of software to communicate data and commands to and from the back-end cloud system",
        "Software to integrate with attached hardware via GPIO, PWM, and I2C",
        "Software to automatically control room environment via attached hardware",
        "Built-in user facing web server to handle setup / configuration",
        "Integration with onboard WiFi / Bluetooth",
      ],
    },
    {
      title: "Web Development",
      specifics: [
        "Django / Python backend to securely communicate with remote devices",
        "React.js and Material-UI frontend with Redux data management",
        "Deployment via Gitlab CI/CD and Rancher",
        "Development of features to allow management of many devices across different zones and locations",
        "Analysis and display of environment data",
        "Scheduling software to handle user configuration of automatic environment control",
        "Alerting system for anomalous environment readings",
        "Development of database / tools to allow users to manage and track crops through their stages of growth",
        "Integration with Firebase APIs to handle sending notifications to users",
      ],
    },
    {
      title: "Mobile Development",
      specifics: [
        "Development React-Native app for both Android and iOS",
        "App data management using Redux.js",
        "Handling authentication / communication with backend cloud APIs as well as with APIs provided by devices on any local networks",
        "Handling automatically connecting to sets of nearby devices and running initial configurations (such as connecting them to a user's WiFi)",
        "Handling Firebase notifications sent by the backend cloud",
      ],
    },
  ],
  skillsRequired: [
    frameworks.react,
    frameworks.redux,
    frameworks.reactnative,
    frameworks.materialui,
    frameworks.docker,
    frameworks.python,
    frameworks.django,
    frameworks.firebase,
  ],
}

export const zanbato = {
  company: {
    name: "Zanbato Inc.",
    location: "Mountain View, CA, USA",
    theme: zanbatoTheme,
    mapImg: zanbatoMap,
    details: <ZanbatoDetails />,
    website: "https://zanbato.com",
  },
  role: "Full-stack Developer (Co-op)",
  dates: "May 2016 - Dec 2016",
  responsibilities: [
    {
      title: "Frontend Web Development",
      specifics: [
        "Development of React.js components",
        "Flux front-end data management",
        "Frontend tests with jest and Jasmine",
        "Collaboration with design team on UX",
      ],
    },
    {
      title: "Backend Web Development",
      specifics: [
        "Development of data models, views, and templates in Django",
        "Development of APIs with Django REST Framework",
        "Creation of tests",
      ],
    },
  ],
  skillsRequired: [
    frameworks.react,
    frameworks.flux,
    frameworks.python,
    frameworks.django,
  ],
}

export const ndimension = {
  company: {
    name: "N-Dimension Solutions Inc.",
    location: "Richmond Hill, ON, Canada",
    theme: ndimensionTheme,
    mapImg: ndimensionMap,
    details: <NdimensionDetails />,
    website: "https://n-dimension.com",
  },
  role: "Cybersecurity Developer",
  dates: "Jan 2015 - Aug 2015",
  responsibilities: [
    {
      title: "Analysis",
      specifics: [
        "Created tool to analyse Intrusion Detection System (IDS) log files and create human-readable reports (Python)",
        "Scheduling tool for the above to automatically generate reports for clients and handle concurrent processing of multiple large datasets (Python/Bash)",
      ],
    },
    {
      title: "Django Backend + Frontend Development",
      specifics: [
        "Development of Interactive UI for client IDS reports",
        "Customer portal to allow clients to view reports, their profile with N-Dimension, and manage access for their own users",
        "Internal portal to management N-Dimension clients",
      ],
    },
  ],
  skillsRequired: [frameworks.django, frameworks.python, frameworks.javascript],
}
