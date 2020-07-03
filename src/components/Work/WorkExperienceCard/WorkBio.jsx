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
import FrameworkList from "src/components/FrameworkList"

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
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: theme.palette.background.default,
      borderLeftColor: theme.palette.divider,
      borderLeft: "1px solid",
      borderRight: "1px solid",
      borderRightColor: theme.palette.divider,
    },
  },
  mapImg: {
    width: "100%",
    height: "100%",
    objectFit: "none",
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
    },
  },
}))

function WorkBio({
  skillsRequired,
  company: { name, location, mapImg, website },
}) {
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Grid item container direction="row-reverse">
        <Grid item xs={4} sm={3} md={12}>
          <img src={mapImg} className={classes.mapImg} />
        </Grid>
        <Grid item xs={8} sm={9} md={12}>
          <List className={classes.root} dense>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </ListItem>
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
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.skills}>
            <FrameworkList
              frameworks={skillsRequired}
              title="Skills Required"
            />
          </div>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  )
}

WorkBio.propTypes = {
  skillsRequired: FrameworkList.propTypes.frameworks,
  company: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
  }),
}

export default WorkBio
