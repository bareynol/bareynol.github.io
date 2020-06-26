import React from "react"
import ProjectCardList from "./ProjectCardList"
import { projectData } from "./ProjectCard.stories"

export default {
  component: ProjectCardList,
  title: "Project Card List",
  excludeStories: /.*Data$/,
}

export const projectListData = [
  projectData,
  {
    ...projectData,
    title: "Test Project With Longer Name",
    description: `${projectData.description} Now with even longer text on this next run. How neat is that? Pretty neat.`,
    frameworks: [...projectData.frameworks].splice(0, 2),
  },
  {
    ...projectData,
    title: `${projectData.title} 2`,
    description: `${projectData.description} 2`,
    image: undefined,
  },
]

export const Default = () => <ProjectCardList projects={projectListData} />
