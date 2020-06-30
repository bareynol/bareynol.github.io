import React from "react"
import PropTypes from "prop-types"
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
      <Typography variant="subtitle2">{title}</Typography>
      <GridList cellHeight="auto">
        {frameworks.map((f, index) => (
          <GridListTile key={index} classes={{ tile: classes.tileWrapper }}>
            <FrameworkItem item={f} />
          </GridListTile>
        ))}
      </GridList>
    </>
  )
}

FrameworkList.propTypes = {
  frameworks: PropTypes.arrayOf(FrameworkItem.propTypes.item).isRequired,
  title: PropTypes.string,
}

FrameworkList.defaultProps = {
  title: `Frameworks Used`,
}

export default FrameworkList
