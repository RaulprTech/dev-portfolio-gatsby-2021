import React from "react"
import Profile from "../components/Profile"
import Footer from "../components/Footer"
import Nav from "../components/Navigators/Nav"

export default function me() {
  return <Info />
}

const Info = () => {
  return (
    <main className="container mx-auto pt-5 md:pt-0 max-w-4xl">
      <Nav />
      <Profile />
      <Footer />
    </main>
  )
}


