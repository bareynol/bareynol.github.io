import React from "react"
import {
  makeStyles,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core"
import FrameworkItem from "src/components/FrameworkItem"

const useStyles = makeStyles(theme => ({
  frameworksList: {
    columns: 2,
    paddingLeft: theme.spacing(2),
    height: 80,
  },
  tileWrapper: {
    // middle-aligns the items
    display: "flex",
  },
}))

function FrameworkList({ frameworks, title }) {
  const classes = useStyles()

  return (
    <>
      <Typography variant="subtitle2">{title || `Frameworks Used:`}</Typography>
      <GridList cellHeight="auto">
        {frameworks.map((f, index) => (
          <GridListTile key={index} classes={{ tile: classes.tileWrapper }}>
            <FrameworkItem item={f} />
          </GridListTile>
        ))}
      </GridList>
    </>
  )

  // return (
  //   <ul className={classes.frameworksList}>
  //     {frameworks.map((f, index) => (
  //       <FrameworkItem key={index} item={f} />
  //     ))}
  //   </ul>
  // )
}

export default FrameworkList
