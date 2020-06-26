import React from "react"
import { Typography, Card, CardHeader } from "@material-ui/core"

export default function TestPage(props) {
  return (
    <>
      <Typography variant="h1">Test Header</Typography>
      <Typography variant="h2">Test Header</Typography>
      <Typography variant="h3">Test Header</Typography>
      <Typography variant="h4">Test Header</Typography>
      <Typography variant="h5">Test Header</Typography>
      <Card>
        <CardHeader title="Test Card Header" />
      </Card>
    </>
  )
}
