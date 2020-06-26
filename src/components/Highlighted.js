import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  highlighted: {
    color: theme.palette.primary.main,
  },
}))

export default function Highlighted({ children }) {
  const classes = useStyles()
  return <span className={classes.highlighted}>{children}</span>
}
