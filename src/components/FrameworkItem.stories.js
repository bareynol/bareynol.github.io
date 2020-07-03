import React from "react"
import FrameworkItem from "./FrameworkItem"
import { Typography } from "@material-ui/core"

export default {
  component: FrameworkItem,
  title: "Framework List Item",
  excludeStories: /.*Data$/,
}

export const Inline = () => (
  <div>
    <Typography>
      inline framework <FrameworkItem variant="docker" inline /> end text
    </Typography>
  </div>
)
export const InlineLink = () => (
  <div>
    <Typography>
      inline framework as a link <FrameworkItem variant="docker" inline link />{" "}
      end text
    </Typography>
  </div>
)
export const AsLink = () => <FrameworkItem variant="docker" link />
export const Docker = () => <FrameworkItem variant="docker" />
export const NodeJs = () => <FrameworkItem variant="nodejs" />
export const Typescript = () => <FrameworkItem variant="typescript" />
export const ReactFramework = () => <FrameworkItem variant="react" />
export const MaterialUi = () => <FrameworkItem variant="materialui" />
export const Redux = () => <FrameworkItem variant="redux" />
export const Flux = () => <FrameworkItem variant="flux" />
export const MongoDB = () => <FrameworkItem variant="mongodb" />
