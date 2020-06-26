import React from "react"
import {
  Typography,
  ListItem,
  List,
  ListSubheader,
  ListItemText,
  Card,
  makeStyles,
  CardContent,
  Paper,
} from "@material-ui/core"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
  },
  responsibilityTitle: {
    color: theme.palette.primary.light,
    marginTop: theme.spacing(3),
  },
  inverseListItem: {
    backgroundColor: theme.palette.background.default,
  },
  list: {
    border: "solid 1px",
    borderColor: theme.palette.divider,
  },
}))

function Responsibilities({ responsibilities }) {
  const classes = useStyles()

  return (
    <Card variant="outlined" square className={classes.card}>
      <CardContent>
        <Typography variant="h5">Responsibilities</Typography>

        {responsibilities.map(resp => (
          <div key={resp.title}>
            <Typography variant="h6" className={classes.responsibilityTitle}>
              {resp.title}
            </Typography>
            <Paper>
              <List className={classes.list} disablePadding>
                {resp.specifics.map((spec, index) => (
                  <ListItem
                    dense
                    key={index}
                    className={(index & 1) !== 0 ? classes.inverseListItem : ""}
                  >
                    <ListItemText>{spec}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

Responsibilities.propTypes = {
  responsibilities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      specifics: PropTypes.arrayOf(PropTypes.string),
    })
  ),
}
export default Responsibilities
