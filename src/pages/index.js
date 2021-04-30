import React from "react"
import Presentation from "../components/Presentation"
import Repos from "../components/Github/Repos"
import Medium from "../components/Blog/Medium"
import Devto from "../components/Blog/Devto"
import Projects from "../components/Projects"
import TopProjects from "../components/Projects/TopProjects"
import Nav from "../components/Navigators/Nav"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-purple-100">
      <Presentation />
      <TopProjects />
      <Devto />
      <Footer/>
    </div>
  )
}
