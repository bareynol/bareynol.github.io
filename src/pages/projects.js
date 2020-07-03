import React from "react"
import Layout from "src/components/Layout"
import SEO from "src/components/seo"
import { Container, Typography } from "@material-ui/core"
import ProjectCardList from "src/components/ProjectCardList"
import projectData from "src/data/projects"

const Projects = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Typography gutterBottom variant="h4" style={{ marginTop: 32 }}>
        Projects
      </Typography>

      <ProjectCardList projects={projectData} />
    </Container>
  </Layout>
)

export default Projects
