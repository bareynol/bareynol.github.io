import React from "react"
import FrameworkItem from "./FrameworkItem"
import frameworks from "src/data/frameworks"

export default {
  component: FrameworkItem,
  title: "Framework List Item",
  excludeStories: /.*Data$/,
}

export const Docker = () => <FrameworkItem item={frameworks.docker} />
export const NodeJs = () => <FrameworkItem item={frameworks.nodejs} />
export const Typescript = () => <FrameworkItem item={frameworks.typescript} />
export const ReactFramework = () => <FrameworkItem item={frameworks.react} />
export const MaterialUi = () => <FrameworkItem item={frameworks.materialui} />
export const Redux = () => <FrameworkItem item={frameworks.redux} />
export const Flux = () => <FrameworkItem item={frameworks.flux} />
export const MongoDB = () => <FrameworkItem item={frameworks.mongodb} />
