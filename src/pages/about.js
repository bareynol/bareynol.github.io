import React from "react"
import Layout from "src/components/Layout"
import SEO from "src/components/seo"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  Avatar,
} from "@material-ui/core"
import FrameworkList from "src/components/FrameworkList"
import profilePicture from "src/images/me.webp"

const content = [
  // {
  //   title: "Who I am",
  //   id: "Who_I_am",
  //   body: (
  //     <div>
  //       <Avatar style={{ width: 128, height: 128 }} src={profilePicture} />
  //       <Typography paragraph style={{ marginTop: 8 }}>
  //         I am Brian, a programmer from Ontario, Canada
  //       </Typography>
  //     </div>
  //   ),
  // },
  {
    title: "What I do",
    id: "What_I_do",
    body: (
      <>
        <Typography paragraph>
          {`I am a software developer, usually working on web applications,
            with some dabbling in IoT, networking, and hardware.`}
        </Typography>
        <Typography paragraph>
          {`My most recent work experience is as lead developer on
          an IoT web application that collected and analyzed environment
          sensor data, and provided automatic and scheduled control
          capabilities to both large-scale commercial clients
          (2,500+ sq. ft) and small-scale at-home clients (<10 sq. ft).
          I was responsible for writing the overarching cloud web
          application as well as underlying device firmware on both
          single-board computers and system-on-a-chip microcontrollers.`}
        </Typography>
        <Typography paragraph>
          {`The firmware that I wrote handled data reporting to the
          cloud, running scheduled tasks, and activating climate control
          systems to keep various climate variables in a scheduled range
          defined by the user.  The firmware also exposed a secure API
          to interact with the mobile application, which allowed it to
          automatically handle setting up new devices on the user’s network.`}
        </Typography>
      </>
    ),
  },
  {
    title: "My dev stack",
    id: "My_dev_stack",
    body: (
      <>
        <Typography paragraph>
          {`Everyone's got a dev stack they're most experienced with
          or prefer to work in right? I always enjoy finding new ways
          of building things, but here are my most experienced stacks
          and favourite goto's`}
        </Typography>

        <Typography variant="subtitle1">Developer Environment</Typography>
        <div style={{ paddingLeft: 16, marginBottom: 32 }}>
          <FrameworkList title="IDE" frameworks={["vscode"]} link indent />
          <FrameworkList
            title="UI Development"
            frameworks={["storybook"]}
            link
            indent
          />
          <Typography variant="body2" style={{ marginTop: 16 }} paragraph>
            {`I could probably talk forever about how much I love VS Code,
            but I bet I would be preaching to the choir. I use the features
            of VS Code extensively, and I love extensions that stop
            me from having to do repetitive pointless tasks like fixing
            indentation, or fix the format to adhere to the lint rules.
            You can check out `}
            <Link
              href="https://gitlab.com/bareynol/vscode_settings"
              color="secondary"
              target="_blank"
              rel="noreferrer"
            >{`my VS Code extensions and settings`}</Link>
            {` here if you want to. `}
          </Typography>
          <Typography variant="body2" paragraph>
            {`For frontends, I use Storybook to help with component driven development.
            Storybook is great for developing UI components in isolation while visually testing various
            possible inputs for the component, and helps with setting up automated frontend tests`}
          </Typography>
        </div>

        <Typography variant="subtitle1">Web Frontend</Typography>
        <div style={{ paddingLeft: 16, marginBottom: 32 }}>
          <FrameworkList
            title="Base"
            frameworks={["react", "typescript", "gatsby"]}
            link
            indent
          />
          <FrameworkList
            title="Data Management"
            frameworks={["redux"]}
            link
            indent
          />
          <FrameworkList
            title="Layout"
            frameworks={["materialui"]}
            link
            indent
          />
          <Typography variant="body2" style={{ marginTop: 16 }} paragraph>
            {`I typically develop frontends as a single page app using a
            React base, static typing with Typescript.
            I'm a huge fan of the Redux pattern of unidirectional data flow.
            It introduces its own headaches and overhead, but I find it solves
            more problems than it creates.`}
          </Typography>
          <Typography variant="body2" paragraph>
            {`For layouts and components, I've found that Material-UI is one of the best
            libraries out there as far as supported components, customizability, and end performance.
            I've done my fair share of working with Bootstrap and custom CSS
            (most preferably with LESS), so I'm not scared of CSS selectors and media queries,
            but I find Material-UI usually offers a great starting
            point that gets a project quickly kicked off.`}
          </Typography>
          <Typography variant="body2" paragraph>
            {`Gatsby is a fantastic little framework that works great for static websites. This website is using it`}
          </Typography>
        </div>

        <Typography variant="subtitle1">Web Backend</Typography>
        <div style={{ paddingLeft: 16, marginBottom: 32 }}>
          <FrameworkList
            title="Base"
            frameworks={["django", "nodejs"]}
            link
            indent
          />
          <FrameworkList
            title="Data Management"
            frameworks={["postgresql", "mongodb"]}
            link
            indent
          />
          <Typography variant="body2" style={{ marginTop: 16 }} paragraph>
            {`I have been using Django and associated tools (Django ORM,
              Django REST Framework, etc.) with PostgreSQL professionally
              for several years now. While slightly clunky at times, it's reliable,
              and easy to get rolling with a new project.`}
          </Typography>
          <Typography variant="body2" paragraph>
            {`More recently I've been using Node.JS with MongoDB as a backend for
            single page apps that I write. A lot of Django's power comes from
            utilities for working with forms, views, and templates.
            When I just need something to server an API and do background tasks,
            I've lately found Node.JS with Express to be a great replacement
            that allows rapid development.`}
          </Typography>
        </div>

        <Typography variant="subtitle1">Mobile Applications</Typography>
        <div style={{ paddingLeft: 16, marginBottom: 32 }}>
          <FrameworkList
            title="Base"
            frameworks={["reactnative", "typescript"]}
            link
            indent
          />
          <FrameworkList
            title="Data Management"
            frameworks={["redux"]}
            link
            indent
          />
          <FrameworkList
            title="Layout"
            frameworks={["reactnativepaper", "nativebase"]}
            link
            indent
          />
          <Typography variant="body2" style={{ marginTop: 16 }} paragraph>
            {`I `}
            <span style={{ textDecoration: "line-through" }}>hate</span>
            {` love React Native. It's able to satisfy the requirements of
            the majority of UI focused apps, and who doesn't like having a unified
            code base for iOS and Android? It certainly has some issues, but with
            Redux managing app data and storage, and the right component libraries,
            you can almost forget that you're not writing code for web. Kinda.`}
          </Typography>
        </div>
      </>
    ),
  },
  // {
  //   title: "My interests",
  //   id: "My_interests",
  // },
  // {
  //   title: "Currently learning",
  //   id: "Currently_learning",
  // },
]

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <Container>
      <Typography variant="h3" style={{ marginTop: 32 }}>
        About Me
      </Typography>

      <ContactDetails />

      {/** Table of contents **/}
      <div>
        <Typography variant="h5">Content</Typography>
        <ul style={{ listStyle: "none" }}>
          {content.map((c, index) => (
            <li key={c.id}>
              <Typography variant="subtitle1" color="textPrimary">
                {`${index + 1}. `}
                <Link href={`#${c.id}`} color="primary">
                  {c.title}
                </Link>
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {content.map(c => (
          <div key={c.id} style={{ marginTop: 64 }}>
            <Typography variant="h4" id={c.id}>
              {c.title}
            </Typography>
            {c.body}
          </div>
        ))}
      </div>
    </Container>
  </Layout>
)

const ContactDetails = () => (
  <Card
    variant="outlined"
    elevation={0}
    style={{ backgroundColor: "#111111", marginBottom: 32 }}
  >
    <CardContent>
      <Grid container direction="column" alignItems="center">
        <Avatar
          style={{ width: 128, height: 128 }}
          src={profilePicture}
          alt="Brian Reynolds"
        />
        <Typography align="center" style={{ marginTop: 8 }}>
          I am Brian Reynolds, a programmer from Ontario, Canada
        </Typography>
        <Typography variant="body2">
          Reach me here:{" "}
          <Link color="secondary" href="mailto:brireyn@gmail.com">
            brireyn@gmail.com
          </Link>{" "}
        </Typography>
      </Grid>
    </CardContent>
  </Card>
)

export default About

// < Typography variant = "subtitle2" > Base</Typography >
//   <div style={{ paddingLeft: 16 }}>
//     <Typography paragraph>
//       {`I typically develop frontends as a single page app using a `}
//       {/* React */}
//       <FrameworkItem variant="react" inline link />
//       {` base. I prefer working with static types, so I also like including `}
//       {/* Typescript */}
//       <FrameworkItem variant="typescript" inline link />
//       {` when I can.`}
//     </Typography>
//   </div>

//   <Typography variant="subtitle2">Data Management</Typography>
//   <div style={{ paddingLeft: 16 }}>
//     <Typography paragraph>
//       {`I'm a huge fan of the `}
//       {/* Redux */}
//       <FrameworkItem variant="redux" inline link />
//       {` pattern of unidirectional data flow. It introduces
//             its own headaches and overhead, but I find it solves
//             more problems than it creates.`}
//     </Typography>
//   </div>

//   <Typography variant="subtitle2">Layout</Typography>
//   <FrameworkItem variant="materialui" />
//   <Typography></Typography>

//   <Typography></Typography>
