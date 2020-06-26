import React from "react"
import logo from "src/images/workplaces/growratio/growratio-wordmark-herolight.png"
import devices from "src/images/workplaces/growratio/devices.png"
import background from "src/images/workplaces/growratio/oldbg.jpg"
import {
  Container,
  Grid,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core"

const grBlue = "#377e96"

const useStyles = makeStyles(theme => ({
  cardMedia: {
    overflow: "hidden",
    backgroundPosition: "top",
    backgroundSize: "cover",
  },
}))

export default function GrowratioDetails() {
  const classes = useStyles()
  return (
    <CardMedia
      className={classes.cardMedia}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(24,26,30,0.5)",
          padding: 24,
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              src={logo}
              style={{ width: "50%", margin: "auto", display: "block" }}
            />
          </Grid>
          <Grid item container>
            <Grid item xs={6}>
              <div
                style={{
                  borderTop: `3px solid ${grBlue}`,
                  borderBottom: `3px solid ${grBlue}`,
                  paddingTop: 16,
                  paddingBottom: 16,
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                <Typography variant="h3" style={{ fontWeight: 700 }}>
                  Controlled Environment Agriculture for the Digital Age
                </Typography>
                <Typography color="textSecondary" variant="h6">
                  Growratio’s collection of integrated products and services
                  form a complete solution to guarantee the success of your
                  operation. Controlled Environment Agriculture is difficult to
                  perfect without the right technology, team and tools.
                  Growratio is the solution.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <img
                src={devices}
                style={{ width: "75%", marginLeft: "auto", display: "block" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </CardMedia>
  )
}
