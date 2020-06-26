import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import ProjectCard from "src/components/ProjectCard"

function ProjectCardList({ projects }) {
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="space-between"
      alignItems="stretch"
    >
      {projects.map((proj, index) => (
        <Grid item key={index}>
          <ProjectCard project={proj} />
        </Grid>
      ))}
    </Grid>
  )
}

ProjectCardList.propTypes = {
  projects: PropTypes.arrayOf(ProjectCard.propTypes.project),
}

export default ProjectCardList
