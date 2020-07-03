import React from "react"
import logo from "src/images/workplaces/zanbato/logo.png"
// import devices from "src/images/workplaces/growratio/devices.png"
import {
  Grid,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import block from "src/images/workplaces/zanbato/block.svg"
import block2 from "src/images/workplaces/zanbato/block2.svg"
import block3 from "src/images/workplaces/zanbato/block3.svg"

const useStyles = makeStyles(theme => ({
  text: { color: "#fff", padding: theme.spacing(2) },
  textGrid: {
    display: "flex",
    flexGrow: 1,
    textAlign: "center",
    alignItems: "center",
  },
}))

export default function ZanbatoDetails() {
  const theme = useTheme()
  const screenIsXs = useMediaQuery(theme.breakpoints.only("xs"))

  return screenIsXs ? <ZanbatoDetailsSmall /> : <ZanbatoDetailsLarge />
}

function ZanbatoDetailsLarge() {
  const classes = useStyles()
  return (
    <Grid container spacing={2} style={{ marginBottom: 0 }}>
      <Grid
        item
        xs={4}
        container
        justify="space-between"
        direction="column"
        style={{ backgroundColor: "#4a90e2", paddingBottom: 20 }}
      >
        <Grid item className={classes.textGrid}>
          <Typography variant="subtitle2" className={classes.text}>
            An end-to-end transaction platform empowering private capital market
            participants.
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={block}
            style={{ width: "100%" }}
            alt="Zanbato Block Icon 1"
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        container
        justify="space-between"
        direction="column"
        style={{ backgroundColor: "#78dfba", paddingBottom: 20 }}
      >
        <Grid item className={classes.textGrid}>
          <img
            src={logo}
            style={{
              margin: "8px auto",
              display: "block",
              maxWidth: "100%",
              marginBottom: 24,
            }}
            alt="Zanbato Logo"
          />
        </Grid>
        <Grid item>
          <img
            src={block2}
            style={{ width: "100%" }}
            alt="Zanbato Block Icon 2"
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        container
        justify="space-between"
        direction="column"
        style={{ backgroundColor: "#63336e", paddingBottom: 20 }}
      >
        <Grid item className={classes.textGrid}>
          <Typography variant="subtitle2" className={classes.text}>
            A secure portal offering an integrated solution for private
            placement origination, distribution, due diligence, execution, and
            compliance.
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={block3}
            style={{ width: "100%" }}
            alt="Zanbato Block Icon 3"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

function ZanbatoDetailsSmall() {
  const classes = useStyles()
  return (
    <div style={{ backgroundColor: "#4a90e2", paddingBottom: 20 }}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item className={classes.textGrid}>
          <img
            src={logo}
            style={{
              margin: "8px auto",
              display: "block",
              width: "100%",
              marginBottom: 24,
            }}
            alt="Zanbato Logo"
          />
        </Grid>
        <Grid item className={classes.textGrid}>
          <Typography
            variant="subtitle2"
            className={classes.text}
            style={{ maxWidth: 300 }}
          >
            An end-to-end transaction platform empowering private capital market
            participants.
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={block}
            style={{ width: 200, maxWidth: "100%" }}
            alt="Zanbato Block Icon 1"
          />
        </Grid>
      </Grid>
    </div>
  )
}
