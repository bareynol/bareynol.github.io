import React from "react"
import PropTypes from "prop-types"

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import frameworks from "src/data/frameworks"

function FrameworkItem({ item }) {
  return (
    <ListItem dense disableGutters component="div">
      <ListItemIcon style={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  )
}

export default FrameworkItem
