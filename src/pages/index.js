import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles, Link, Divider, Grid } from "@material-ui/core"
import clsx from "clsx"
import Toast from "src/components/Toast"
import Highlighted from "src/components/Highlighted"
import briantvScreenshot from "src/images/briantv_screenshot.jpg"

import frameworks from "src/data/frameworks"
import ProjectCardList from "src/components/ProjectCardList"

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  typewriterMain: {
    overflow: "hidden",
    borderRight: ".15em solid",
    borderRightColor: "transparent",
    whiteSpace: "nowrap",
    margin: "0 auto",
  },
  typewriter1: {
    animation: "$typing 1.5s steps(13, end), $blinkCaret .75s step-end 2",
  },
  typewriter2: {
    animation:
      "$typing 1.25s steps(10, end) 1.5s backwards, $blinkCaret .75s step-end 1.15s infinite",
  },
  "@keyframes typing": {
    from: { width: 0 },
    to: { width: "100%" },
  },
  "@keyframes blinkCaret": {
    from: { borderRightColor: "transparent" },
    to: { borderRightColor: "transparent" },
    "50%": { borderRightColor: "#00ff00" },
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
    underConstruction: true,
  },
]

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <div className={classes.title}>
          <div>
            <Typography
              variant="h4"
              align="center"
              className={clsx(classes.typewriterMain, classes.typewriter1)}
            >
              Hello, World!
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className={clsx(classes.typewriterMain, classes.typewriter2)}
            >
              I am
              <Typography component="span" variant="h4" color="textPrimary">
                {" "}
                Brian
              </Typography>
            </Typography>
          </div>
        </div>

        <Typography paragraph>Thanks for checking me out!</Typography>
        <Typography paragraph>
          I am a Full-Stack Web Developer specializing in{" "}
          <Highlighted>React.js</Highlighted> frontends,{" "}
          <Highlighted>React-Native</Highlighted> mobile apps, and{" "}
          <Highlighted>Django</Highlighted> ||{" "}
          <Highlighted>Node.js</Highlighted> backends.
        </Typography>

        <Typography paragraph>
          Keep scrolling to see some of my projects or{" "}
          <Link component={GatsbyLink} to="/resume" color="secondary">
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
