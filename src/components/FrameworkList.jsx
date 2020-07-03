import React from "react"
import PropTypes from "prop-types"
import {
  makeStyles,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core"
import FrameworkItem from "src/components/FrameworkItem"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    maxWidth: 345,
  },
  indentedGrid: {
    paddingLeft: theme.spacing(2),
  },
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

function FrameworkList({ frameworks, title, link, indent }) {
  const classes = useStyles()

  return (
    <div className={classes.gridContainer}>
      <Typography variant="subtitle2">{title}</Typography>
      <GridList
        cellHeight="auto"
        className={clsx({ [classes.indentedGrid]: indent })}
      >
        {frameworks.map((f, index) => (
          <GridListTile key={index} classes={{ tile: classes.tileWrapper }}>
            <FrameworkItem variant={f} link={link} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

FrameworkList.propTypes = {
  frameworks: PropTypes.arrayOf(FrameworkItem.propTypes.variant).isRequired,
  title: PropTypes.string,
  link: PropTypes.bool,
  indent: PropTypes.bool,
}

FrameworkList.defaultProps = {
  title: `Frameworks Used`,
  link: false,
  indent: false,
}

export default FrameworkList
