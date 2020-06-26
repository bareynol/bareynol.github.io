import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles, Link, Divider, Grid } from "@material-ui/core"
import Toast from "src/components/Toast"
import Highlighted from "src/components/Highlighted"
import briantvScreenshot from "src/images/briantv_screenshot.jpg"
import ProjectCard from "src/components/ProjectCard"

import frameworks from "src/data/frameworks"
import ProjectCardList from "src/components/ProjectCardList"

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const projects = [
  {
    title: "BrianTV",
    url: "https://gitlab.com/bareynol/briantv-app",
    description:
      "React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",
    image: briantvScreenshot,
    frameworks: [
      frameworks.reactnative,
      frameworks.redux,
      frameworks.typescript,
    ],
  },
  {
    title: "Home Media Server Stack",
    url: "https://gitlab.com/bareynol/home-media-server",
    description:
      "Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",
    image: null,
    frameworks: [frameworks.nodejs, frameworks.docker],
  },
  {
    title: "RecipeBook",
    url: "#",
    description: "Web server that stores personalised recipes",
    frameworks: [
      frameworks.nodejs,
      frameworks.react,
      frameworks.typescript,
      frameworks.materialui,
      frameworks.redux,
    ],
  },
]

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <div className={classes.title}>
          <Typography variant="h4" align="center">
            Hello, World!
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            I am
            <Typography component="span" variant="h4" color="textPrimary">
              {" "}
              Brian Reynolds
            </Typography>
          </Typography>
        </div>

        <Typography paragraph>Thanks for checking me out!</Typography>
        <Typography paragraph>
          I am a Full-Stack Web Developer specializing in{" "}
          <Highlighted>React.js</Highlighted> frontends,{" "}
          <Highlighted>React-Native</Highlighted> mobile apps, and{" "}
          <Highlighted>Node.js</Highlighted> | <Highlighted>Django</Highlighted>{" "}
          backends.
        </Typography>

        <Typography paragraph>
          Keep scrolling to see some of my projects or{" "}
          <Link component={GatsbyLink} to="/resume">
            checkout my resume here
          </Link>
        </Typography>

        <Divider className={classes.divider} />

        <Typography gutterBottom variant="h5">
          Projects
        </Typography>

        <ProjectCardList projects={projects} />

        <Toast
          message="Want to skip to the boring old PDF resume? Click here"
          delay={3000}
        />
      </Container>
    </Layout>
  )
}

export default IndexPage
