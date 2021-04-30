import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ element, img }) => {
  const proyect = element
  const image = element.image

  const imgGridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, 200px)`,
  }

  return (
    <section
      className="shadow bg-white mr-4 rounded flex-shrink-0 flex-col justify-between"
      style={{ width: "320px" }}
    >
      {/*style={{backgroundImage: `url(${post.thumbnail})`}}*/}
      <header className="h-40 bg-cover bg-center" style={imgGridStyle}>
        {img.allImageSharp.edges.map((Edge, i) => {
          if (image === Edge.node.fixed.originalName) {
            return (
              <Img fixed={Edge.node.fixed} alt="Imagen de Proyecto" key={i} />
            )
          }
        })}
      </header>
      <article className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2">
          <a href={proyect.git} target="_blank" rel="noopener noreferrer">
            {proyect.name}
          </a>
        </h4>
        <p className="text-gray-700 text-base">{proyect.description}</p>
      </article>
      <article className="px-6 py-4">
        {proyect.tecnologys.map(tech => (
          <span
            key={tech}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </article>
      <footer className="flex justify-around bottom-0 p-3">
        {proyect.git && (
          <Link
            to={proyect.git}
            className="btn-black inline-block  hover:border-gray-700 hover:bg-gray-600"
          >
            Github
          </Link>
        )}
        {proyect.demo && (
          <Link
            to={proyect.demo}
            className="btn-blue inline-block hover:border-blue-600 hover:bg-blue-400"
          >
            Demo
          </Link>
        )}
      </footer>
    </section>
  )
}

/*
export const query = graphql`
    query($img: String){
        file(name: {eq: $img}){
            childImageSharp{
                fluid(maxWidth: 320){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`
*/
