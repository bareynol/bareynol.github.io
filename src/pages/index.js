import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { Container, makeStyles, Link, Divider, Grid } from "@material-ui/core"
import clsx from "clsx"
import Toast from "src/components/Toast"
import projectData from "src/data/projects"

import ProjectCardList from "src/components/ProjectCardList"
import FrameworkItem from "src/components/FrameworkItem"

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

const Highlighted = ({ children }) => (
  <Typography display="inline" color="primary">
    {children}
  </Typography>
)

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
          {`I am a Full-Stack Web Developer specializing in `}
          <FrameworkItem variant="react" inline link />
          {` frontends, `}
          <FrameworkItem variant="reactnative" inline link />
          {` mobile apps, and `}
          <FrameworkItem variant="django" inline link />
          {` || `}
          <FrameworkItem variant="nodejs" inline link />
          {` backends.`}
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

        <ProjectCardList projects={projectData} />

        {/* <Toast
          message="Want to skip to the boring old PDF resume? Click here"
          delay={3000}
        /> */}
      </Container>
    </Layout>
  )
}

export default IndexPage
