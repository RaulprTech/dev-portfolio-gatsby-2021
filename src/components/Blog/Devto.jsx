import React, { useState, useEffect } from "react"
import Posts from "./Posts"
import Story from "./Article"

export default () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const data = sessionStorage.getItem("posts")

    if (data) {
      setPosts(JSON.parse(data))
    }

    let myPosts

    async function getDevPosts() {
      const response = await fetch(
        "https://dev.to/api/articles?username=raulprtech"
      )
      myPosts = await response.json()
      sessionStorage.setItem("posts", JSON.stringify(myPosts))

      setPosts(myPosts)
    }

    getDevPosts()
  }, [])

  return (
    <section>
      <div className="mt-24">
        <div className="scroll">
          <Posts data={posts} title="Mis Publicaciones" Card={Story} />
        </div>
      </div>
    </section>
  )
}
