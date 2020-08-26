import React from "react"
import {
  makeStyles,
  CssBaseline,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core"
import SEO from "src/components/seo"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import LocationIcon from "@material-ui/icons/LocationOn"
import WebsiteIcon from "@material-ui/icons/Language"
import FrameworkItem from "src/components/FrameworkItem"
import * as workExperience from "src/data/workExperience"

const consoleFontFamily =
  '"Consolas", "Monaco", "Lucidia Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New"'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: consoleFontFamily,
      fontSize: "2.5rem",
    },
    h2: { fontFamily: consoleFontFamily, fontSize: "1.5rem" },
    h3: {
      fontFamily: consoleFontFamily,
      fontSize: "0.9rem",
      textTransform: "uppercase",
      borderBottom: "2px solid",
      letterSpacing: "0.1rem",
      fontWeight: 700,
      marginTop: 16,
      marginBottom: 8,
    },
    subtitle1: {
      fontWeight: 700,
      lineHeight: "normal",
    },
    overline: {
      lineHeight: "normal",
    },
    body2: {
      fontSize: "0.8rem",
    },
    // h2: { ...consoleFontFamily },
    // h3: { ...consoleFontFamily },
    // h4: { ...consoleFontFamily },
    // h5: { ...consoleFontFamily },
    // h6: { ...consoleFontFamily },
    // subtitle1: { ...consoleFontFamily },
    // subtitle2: { ...consoleFontFamily },
    // button: { ...consoleFontFamily },
  },
})

const useStyles = makeStyles({})

const skills = [
  "python",
  "django",
  "javascript",
  "typescript",
  "react",
  "reactnative",
  "redux",
]

const PrintResume = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Printable Résumé" />
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h1" align="center">
          Brian Reynolds
        </Typography>
        <Typography variant="h2" align="center" paragraph>
          Software / Web Developer
        </Typography>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h3">Info</Typography>
            <List style={{ paddingTop: 0 }}>
              <ListItem dense disableGutters>
                <ListItemIcon style={{ minWidth: 32 }}>
                  <WebsiteIcon />
                </ListItemIcon>
                <ListItemText>
                  <a
                    href="https://bareynol.github.io/"
                    style={{ color: "#00aa00", textDecoration: "none" }}
                  >{`bareynol.github.io`}</a>
                </ListItemText>
              </ListItem>
              <ListItem dense disableGutters>
                <ListItemIcon style={{ minWidth: 32 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText>{`(519)-807-9096`}</ListItemText>
              </ListItem>
              <ListItem dense disableGutters>
                <ListItemIcon style={{ minWidth: 32 }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText>{`brireyn@gmail.com`}</ListItemText>
              </ListItem>
              <ListItem dense disableGutters>
                <ListItemIcon style={{ minWidth: 32 }}>
                  <LocationIcon />
                </ListItemIcon>
                <ListItemText>{`Ontario, Canada`}</ListItemText>
              </ListItem>
            </List>
            <Typography variant="h3">Skills / Languages</Typography>
            <List style={{ paddingTop: 0 }}>
              {skills.map(s => (
                <FrameworkItem key={s} variant={s} />
              ))}
            </List>
          </Grid>
          <Grid item xs={9} style={{ paddingLeft: theme.spacing(5) }}>
            <Typography variant="h3">Experience</Typography>
            {[
              workExperience.growratio,
              workExperience.zanbato,
              workExperience.ndimension,
            ].map(job => (
              <div key={job.company.name}>
                <Grid container justify="space-between" alignItems="baseline">
                  <Grid item>
                    <Typography variant="subtitle1" display="inline">
                      {job.role}
                      {", "}
                    </Typography>
                    <Typography variant="subtitle2" display="inline">
                      {job.company.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="overline" color="textSecondary">
                      {job.company.location}
                    </Typography>
                  </Grid>
                </Grid>
                {/* <Typography variant="subtitle2">{job.company.name}</Typography> */}
                <Typography variant="caption" color="textSecondary">
                  {job.dates}
                </Typography>
                <div>
                  <ul style={{ marginTop: 4 }}>
                    {job.responsibilitiesShort.map(r =>
                      r.specifics.map((spec, index) => (
                        <li key={`${r.title}-${index}`}>
                          <Typography variant="body2">{spec}</Typography>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            ))}
            <Typography variant="h3">Education</Typography>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="subtitle1">{`Bachelor of Computer Science`}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="overline" color="textSecondary">
                  {`Waterloo`}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle2">{`University of Waterloo`}</Typography>
            <Typography variant="caption" color="textSecondary">
              {`August 2017`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default PrintResume
