import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import ProjectCard from "src/components/ProjectCard"

function ProjectCardList({ projects }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="space-evenly"
        style={{}}
      >
        {projects.map((proj, index) => (
          <Grid item key={index}>
            <ProjectCard project={proj} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

ProjectCardList.propTypes = {
  projects: PropTypes.arrayOf(ProjectCard.propTypes.project),
}

export default ProjectCardList
