import React from "react"

import growratioMap from "src/images/workplaces/growratio/map.webp"
import zanbatoMap from "src/images/workplaces/zanbato/map.webp"
import ndimensionMap from "src/images/workplaces/ndimension/map.webp"
import GrowratioDetails from "src/components/Work/WorkExperienceCard/GrowratioDetails"
import NdimensionDetails from "src/components/Work/WorkExperienceCard/NdimensionDetails"
import ZanbatoDetails from "src/components/Work/WorkExperienceCard/ZanbatoDetails"

export const growratio = {
  company: {
    name: "Growratio Inc.",
    location: "Toronto, ON, Canada",
    mapImg: growratioMap,
    details: <GrowratioDetails />,
    website: "https://growrat.io",
  },
  role: "Lead Developer",
  dates: "Aug 2017 - Mar 2020",
  responsibilities: [
    {
      title: "General",
      specifics: [
        "Analyze user requirements and develop technical specifications, implementation plans, and software",
        "Create, manage, and prioritize project development issues",
        "Collect feedback from R&D users and integrate reported bugs, requirements, and suggestions into the development cycle",
        "Utilize Gitlab CI/CD in deployment to handle automatic builds and tests",
      ],
    },
    {
      title: "Device Firmware",
      specifics: [
        "End-to-end development of firmware for single-board computers and system-on-a-chip microcontrollers to run smart lights, smart controllers, and environment sensors",
        "Securely synchronize data between cloud servers and devices, and handle tasks sent by central cloud",
        "Develop and maintain tests for automated control response systems",
      ],
    },
    {
      title: "Backend Development",
      specifics: [
        "Develop Django based central cloud server to communicate with devices",
        "Plan and implement data models, REST APIs, and user authentication strategies",
        "Maintain database with clean data migrations and appropriate indexes",
        // "Manage automated periodic tasks to process data, and send user notifications and emails",
      ],
    },
    {
      title: "Frontend Development",
      specifics: [
        "End-to-end development of React.js single page application website",
        "End-to-end development of React Native mobile application",
        "Handle frontend data management with Redux.js",
        "Design user interfaces to provide intuitive user access to desired data and controls",
        "Research and integrate npm packages and utilities",
        "Manage mobile application and releases in Google Play Console",
      ],
    },
  ],
  skillsRequired: [
    "react",
    "redux",
    "reactnative",
    "materialui",
    "docker",
    "python",
    "django",
    "firebase",
  ],
}

growratio.responsibilitiesShort = [
  {
    title: "General",
    specifics: [
      "Analyze user requirements and develop technical specifications, implementation plans, and software",
      "Create, manage, and prioritize project development issues",
      "Collect feedback from R&D users and integrate reported bugs, requirements, and suggestions into the development cycle",
      "Utilize Gitlab CI/CD in deployment to handle automatic builds and tests",
    ],
  },
  {
    title: "Device Firmware",
    specifics: [
      "End-to-end development of firmware for single-board computers and system-on-a-chip microcontrollers to run smart lights, smart controllers, and environment sensors",
      "Securely synchronize data between cloud servers and devices, and handle tasks sent by central cloud",
      "Develop and maintain tests for automated control response systems",
    ],
  },
  {
    title: "Backend Development",
    specifics: [
      "Develop Django based central cloud server to communicate with devices and provide API routes for frontend use",
      "Plan and implement data models, REST APIs, and user authentication strategies",
      // "Maintain database with clean data migrations and appropriate indexes",
      // "Manage automated periodic tasks to process data, and send user notifications and emails",
    ],
  },
  {
    title: "Frontend Development",
    specifics: [
      "End-to-end development of React.js + Redux.js single page application website",
      "End-to-end development of React Native mobile application",
      // "Handle frontend data management with Redux.js",
      "Design user interfaces to provide intuitive user access to desired data and controls",
      // "Research and integrate npm packages and utilities",
      "Manage mobile application and releases in Google Play Console",
    ],
  },
]

export const zanbato = {
  company: {
    name: "Zanbato Inc.",
    location: "Mountain View, CA, USA",
    mapImg: zanbatoMap,
    details: <ZanbatoDetails />,
    website: "https://zanbato.com",
  },
  role: "Full-stack Developer (Co-op)",
  dates: "May 2016 - Dec 2016",
  responsibilities: [
    {
      title: "General",
      specifics: [
        "Complete development tasks assigned by management and log status updates and time spent",
        "Participate in frequent technical meetings to resolve complex issues",
        "Collaborate with design team on UX",
      ],
    },
    {
      title: "Web Development",
      specifics: [
        "Develop Django models, views, templates, and REST APIs",
        "Develop React.js components with Flux data management",
        "Ensure contributed code is well documented and tested",
        "Participate in code review and approval of code submitted by colleagues",
      ],
    },
  ],
  skillsRequired: ["react", "flux", "python", "django"],
}

zanbato.responsibilitiesShort = zanbato.responsibilities

export const ndimension = {
  company: {
    name: "N-Dimension Solutions",
    location: "Richmond Hill, ON, Canada",
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
        "Develop tool to analyse Intrusion Detection System (IDS) log files and create human-readable reports (Python)",
        "Develop scheduling tool for the above to automatically generate reports for clients and handle concurrent processing of multiple large datasets (Python/Bash)",
      ],
    },
    {
      title: "Django Backend + Frontend Development",
      specifics: [
        "Develop interactive UI for client IDS reports",
        "Develop Django based customer portal to allow clients to view reports, their profile with N-Dimension, and manage access for their own users",
        "Develop Django based internal portal to manage N-Dimension clients",
      ],
    },
  ],
  skillsRequired: ["django", "python", "javascript"],
}

ndimension.responsibilitiesShort = ndimension.responsibilities
