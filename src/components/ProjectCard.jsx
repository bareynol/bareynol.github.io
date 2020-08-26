import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core"
import FrameworkList from "src/components/FrameworkList"
import BuildIcon from "@material-ui/icons/Build"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  frameworksList: {
    columns: 2,
    paddingLeft: theme.spacing(2),
    height: 80,
  },
  description: {
    height: 100,
  },
  cardMedia: {
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
  missingImage: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 345,
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
}))

function ProjectCard({
  project: {
    title,
    url,
    demo,
    description,
    frameworks,
    image,
    underConstruction,
  },
}) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        style={{ height: "100%" }}
      >
        <Grid item>
          {underConstruction ? (
            <CardMedia className={classes.missingImage}>
              <Typography variant="h4" align="center">
                Under Construction
              </Typography>
              <BuildIcon color="primary" style={{ fontSize: 100 }} />
            </CardMedia>
          ) : image ? (
            <CardMedia
              component="img"
              image={image}
              height="345"
              title={`${title} screenshots`}
              className={classes.cardMedia}
            />
          ) : (
            <CardMedia className={classes.missingImage}>
              <Typography variant="h4" align="center">
                Missing Image
              </Typography>
              <Typography variant="h1" align="center">
                {":("}
              </Typography>
            </CardMedia>
          )}
        </Grid>
        <Grid item zeroMinWidth>
          <CardContent>
            <Typography gutterBottom variant="h6" noWrap>
              {title}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              className={classes.description}
            >
              {description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <CardContent>
            <FrameworkList frameworks={frameworks} />
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions
            style={{
              flexGrow: 1,
              alignItems: "flex-end",
              justifyContent: demo ? "space-between" : "flex-end",
            }}
          >
            {demo && (
              <Button
                size="small"
                color="primary"
                href={demo}
                target="_blank"
                rel="noreferrer"
              >
                View Demo
              </Button>
            )}

            <Button
              size="small"
              color="secondary"
              href={url}
              target="_blank"
              rel="noreferrer"
              disabled={url == null}
            >
              View Source
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    frameworks: FrameworkList.propTypes.frameworks,
    image: PropTypes.any,
    underConstruction: PropTypes.bool,
  }),
}

export default ProjectCard
