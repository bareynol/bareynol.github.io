import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Gitlab from "mdi-material-ui/Gitlab"

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
  hideLarge: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  hideSmall: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const sections = [
  { title: "Projects", url: "#" },
  { title: "", url: null }, // for spacing
  { title: "Resume", url: "/resume" },
]

function Header(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Titlebar />
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

function Titlebar(props) {
  /** Title bar that shows my name and two buttons
   *  The name is in between the buttons on larger views,
   *  and below the name on a separate line in smaller views
   */
  const classes = useStyles()

  return (
    <>
      {/* Show this title on separate toolbar for small screen sizes */}
      <Toolbar className={`${classes.toolbar} ${classes.hideLarge}`}>
        <Link className={classes.toolbarTitle} href="/">
          <Typography variant="h5" align="center" noWrap>
            Brian Reynolds
          </Typography>
          <Typography variant="h6" align="center">
            Software Developer
          </Typography>
        </Link>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <Button size="small" color="primary" href="/about" style={{ flex: 1 }}>
          About Me
        </Button>

        {/* Hide the title in this tool bar for small screen sizes */}
        <Link
          className={`${classes.toolbarTitle} ${classes.hideSmall}`}
          href="/"
        >
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
          endIcon={<Gitlab fontSize="small" className={classes.hideSmall} />}
          style={{ flex: 1 }}
          href="https://gitlab.com/users/bareynol/projects"
          target="_blank"
          rel="noreferrer"
        >
          <span className={classes.hideSmall}>{`View`}&nbsp; </span>
          {`My Gitlab`}
        </Button>
      </Toolbar>
    </>
  )
}

export default Header
