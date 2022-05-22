import React from "react"
import Presentation from "../components/Presentation"
import Repos from "../components/Github/Repos"
import Medium from "../components/Blog/Medium"
import Devto from "../components/Blog/Devto"
import Projects from "../components/Projects"
import TopProjects from "../components/Projects/TopProjects"
import Nav from "../components/Navigators/Nav"
import Skills from "../components/Profile/Skills"
import Footer from "../components/Footer"

export default function Home() {
  const technologies = [
    {
      "name": "Javascript",
      "url": "https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg",
    },
    {
      "name" : "React",
      "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    },
    {
      "name" : "Gatsby",
      "url" : "https://iconape.com/wp-content/files/mc/370910/svg/370910.svg",
    },
    {
      "name" : "Next",
      "url" : "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
    },
    {
      "name": "Tailwind",
      "url": "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
    },
    {
      "name" : "Node",
      "url" : "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
    },
    {
      "name": "Firebase",
      "url": "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
    },
    {
      "name": "Bootstrap",
      "url": "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
    }
  ]
  return (
    <div className="bg-blue-400 dark:bg-blue-900">
      <Presentation />
      <Skills size="h-16 w-20" languages={technologies} />
      <TopProjects />
      <Devto />
      <Footer/>
    </div>
  )
}
