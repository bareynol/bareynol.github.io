import React from "react"
import FrameworkList from "./FrameworkList"
import frameworks from "src/data/frameworks"

export default {
  component: FrameworkList,
  title: "Framework List",
  excludeStories: /.*Data$/,
  decorators: [storyFn => <div style={{ maxWidth: 345 }}>{storyFn()}</div>],
}

export const frameworkData = [
  frameworks.docker,
  frameworks.nodejs,
  frameworks.typescript,
  frameworks.materialui,
  frameworks.react,
]

export const Default = () => <FrameworkList frameworks={frameworkData} />
export const WithTitle = () => (
  <FrameworkList frameworks={frameworkData} title="Skills Required:" />
)
