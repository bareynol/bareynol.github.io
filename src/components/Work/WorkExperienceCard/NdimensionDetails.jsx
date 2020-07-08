import React from "react"
import logo from "src/images/workplaces/ndimension/logo.png"
import background from "src/images/workplaces/ndimension/background.webp"
import { CardMedia, Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  logo: {
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
  cardMedia: {
    overflow: "hidden",
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
}))

export default function NdimensionDetails() {
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
          backgroundColor: "rgba(24,26,30,0.4)",
          padding: 24,
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.logo}>
            <img
              src={logo}
              style={{
                width: 300,
                maxWidth: "100%",
                margin: "auto",
                display: "block",
              }}
              alt="N-Dimension logo"
            />
          </Grid>
          <Grid item container>
            <Grid item xs={12} md={6}>
              <div>
                <Typography
                  variant="h3"
                  style={{ fontWeight: 700, color: "white" }}
                >
                  CYBERSECURITY FOR INDUSTRY
                </Typography>
                <Typography variant="h6" paragraph style={{ color: "white" }}>
                  Active and passive threat detection, with intrusion detection,
                  vulnerability scanning, and network asset management.
                </Typography>
                <Typography variant="h6" paragraph style={{ color: "white" }}>
                  Customized alerting, powerful analysis software, ICS and SCADA
                  monitoring
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </div>
    </CardMedia>
  )
}
