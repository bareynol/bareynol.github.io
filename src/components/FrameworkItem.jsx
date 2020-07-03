import React from "react"
import PropTypes from "prop-types"
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Link,
} from "@material-ui/core"
import frameworks from "src/data/frameworks"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  inlineItem: {
    width: "auto",
    display: "inline-flex",
    paddingRight: 8,
    paddingLeft: 8,
    top: 7,
  },
  inlineLinkItem: {
    top: -1,
  },
}))

function FrameworkItem({ variant, inline, link }) {
  const classes = useStyles()
  const item = frameworks[variant]
  const FrameworkLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link
          ref={ref}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          {...linkProps}
        />
      )),
    [item.link]
  )

  return inline ? (
    link ? (
      <FrameworkLink>{item.title}</FrameworkLink>
    ) : (
      item.title
    )
  ) : (
    <ListItem
      dense
      disableGutters
      button={link}
      component={link ? FrameworkLink : "div"}
      className={clsx({
        [classes.inlineItem]: inline,
        [classes.inlineLinkItem]: inline && link,
      })}
    >
      <ListItemIcon style={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  )
}

FrameworkItem.propTypes = {
  variant: PropTypes.oneOf(Object.keys(frameworks)).isRequired,
  inline: PropTypes.bool,
  link: PropTypes.bool,
}

FrameworkItem.defaultProps = {
  inline: false,
  link: false,
}

export default FrameworkItem
