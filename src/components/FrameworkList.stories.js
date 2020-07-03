import React from "react"
import FrameworkList from "./FrameworkList"

export default {
  component: FrameworkList,
  title: "Framework List",
  excludeStories: /.*Data$/,
  decorators: [storyFn => <div style={{ maxWidth: 345 }}>{storyFn()}</div>],
}

export const frameworkData = [
  "docker",
  "nodejs",
  "typescript",
  "materialui",
  "react",
]

export const Default = () => <FrameworkList frameworks={frameworkData} />
export const WithTitle = () => (
  <FrameworkList frameworks={frameworkData} title="Skills Required:" />
)
