import React from "react"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"

import uwaterlooLogo from "src/images/uwaterloo_logo.png"

export default function Education() {
  return (
    <Card style={{ marginBottom: 16 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <img src={uwaterlooLogo} style={{ height: 56, width: 56 }} />
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
