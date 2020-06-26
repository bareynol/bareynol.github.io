import React from "react"
import ProjectCard from "./ProjectCard"
import { frameworkData } from "./FrameworkList.stories"

export default {
  component: ProjectCard,
  title: "Project Card",
  excludeStories: /.*Data$/,
}

export const projectData = {
  title: "Test Project",
  url: "#",
  description:
    "A test project that implements xyza. String of text to give this sample longer length",
  frameworks: [...frameworkData],
  image:
    "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
}

export const Default = () => <ProjectCard project={projectData} />
export const NoImage = () => (
  <ProjectCard project={{ ...projectData, image: undefined }} />
)
