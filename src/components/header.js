import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Gitlab from "mdi-material-ui/Gitlab"
import { Hidden } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flex: 1,
    flexGrow: 1,
  },
  toolbarSecondary: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
}))

const sections = [
  { title: "Projects", url: "#" },
  { title: "Portfolio", url: "#" },
  { title: "Resume", url: "/resume" },
]

function Header(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Hidden smDown>
        <Toolbar className={classes.toolbar}>
          <Button size="small" color="primary" style={{ flex: 1 }}>
            Hire Me
          </Button>
          <Link className={classes.toolbarTitle} href="/">
            <Typography variant="h5" align="center" noWrap>
              Brian Reynolds
            </Typography>
            <Typography variant="h6" align="center">
              Software Developer
            </Typography>
          </Link>

          <Button
            color="primary"
            size="small"
            endIcon={<Gitlab fontSize="small" />}
            style={{ flex: 1 }}
            href="https://gitlab.com/users/bareynol/projects"
            target="_blank"
            rel="noreferrer"
          >
            View my Gitlab
          </Button>
        </Toolbar>
      </Hidden>
      <Hidden mdUp>
        <Toolbar className={classes.toolbar}>
          <Link className={classes.toolbarTitle} href="/">
            <Typography variant="h5" align="center" noWrap>
              Brian Reynolds
            </Typography>
            <Typography variant="h6" align="center">
              Software Developer
            </Typography>
          </Link>
        </Toolbar>
        <Toolbar className={classes.toolbar} disableGutters>
          <Button size="small" color="primary" style={{ flex: 1 }}>
            Hire Me
          </Button>

          <Button
            color="primary"
            size="small"
            style={{ flex: 1 }}
            href="https://gitlab.com/users/bareynol/projects"
            target="_blank"
            rel="noreferrer"
          >
            View my Gitlab
          </Button>
        </Toolbar>
      </Hidden>
      <Toolbar
        component="nav"
        variant="dense"
        className={`${classes.toolbar} ${classes.toolbarSecondary}`}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="button"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}

export default Header
