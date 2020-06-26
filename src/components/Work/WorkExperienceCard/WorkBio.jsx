import React from "react"
import PropTypes from "prop-types"
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Grid,
  Divider,
} from "@material-ui/core"
import BusinessIcon from "@material-ui/icons/Business"
import LocationIcon from "@material-ui/icons/LocationOn"
import WebsiteIcon from "@material-ui/icons/Language"
import FrameworkItem from "src/components/FrameworkItem"
import FrameworkList from "src/components/FrameworkList"
import frameworks from "src/data/frameworks"

const useStyles = makeStyles(theme => ({
  root: {
    // border: "1px solid",
    // borderColor: theme.palette.divider,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  listIcon: {
    minWidth: 32,
  },
  skills: {
    padding: theme.spacing(2),
  },
}))

function WorkBio({
  skillsRequired,
  company: { name, location, mapImg, website },
}) {
  const classes = useStyles()
  return (
    <>
      <Grid container direction="row-reverse">
        <Grid item xs={4} md={12}>
          <img
            src={mapImg}
            style={{ width: "100%", height: "100%", objectFit: "none" }}
          />
        </Grid>
        <Grid item xs={8} md={12}>
          <List className={classes.root} dense>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <LocationIcon />
              </ListItemIcon>
              <ListItemText>{location}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <WebsiteIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href={website} target="_blank" rel="noreferrer">
                  {website}
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <div className={classes.skills}>
            <FrameworkList
              frameworks={skillsRequired}
              title="Skills Required"
            />
          </div>
        </Grid>
      </Grid>
      <Divider />
    </>
  )
}

WorkBio.propTypes = {
  skillsRequired: PropTypes.arrayOf(PropTypes.oneOf(Object.values(frameworks))),
  company: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
  }),
}

export default WorkBio
