import React from "react"
import {
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core"

import uwaterlooLogo from "src/images/uwaterloo_logo.webp"

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
}))

export default function Education() {
  const classes = useStyles()
  return (
    <Card style={{ marginBottom: 16 }}>
      <CardContent>
        <Grid container spacing={2} className={classes.container}>
          <Grid item>
            <img
              src={uwaterlooLogo}
              style={{ height: 56, width: 56 }}
              alt="University of Waterloo Logo"
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">University of Waterloo</Typography>
            <Typography>Bachelor of Computer Science (2017)</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
