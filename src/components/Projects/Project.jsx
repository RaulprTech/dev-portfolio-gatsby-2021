import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import GitHub from "../../imgs/otherSocialMedia/github.svg"
import Web from "../../imgs/otherSocialMedia/web.svg"
import Skill from "../../components/Profile/Skill"

export default ({ element, img }) => {
  const proyect = element
  const image = element.image

  return (
    <section className="grid grid-rows-2 w-auto h-auto lg:w-1/3 shadow bg-gray-100 m-4 rounded">
      {/*style={{backgroundImage: `url(${post.thumbnail})`}}*/}
      <header className="bg-cover bg-center max-h-full">
        {img.allImageSharp.edges.map((Edge, i) => {
          if (image === Edge.node.fixed.originalName) {
            return (
              <Img fixed={Edge.node.fixed} alt="Imagen de Proyecto" key={i} />
            )
          }
        })}
      </header>
      <article className="px-4 max-h-full">
        <h4 className="font-bold text-xl mb-2">
          <a href={proyect.git} target="_blank" rel="noopener noreferrer">
            {proyect.name}
          </a>
        </h4>
        <p className="text-gray-700 text-base overflow-hidden">
          {proyect.description}
        </p>
        <ul className="flex flex-wrap items-center justify-around py-3 overflow-x-scroll scroll">
          {proyect.tecnologys.map(tech => (
            <Skill title="" img={tech.url} size="h-6 w-8" id={tech} />
          ))}
        </ul>
      </article>
      <footer className="flex justify-around p-3">
        {proyect.git && (
          <Link
            to={proyect.git}
            className="btn-black flex items-center justify-between"
          >
            <img
              src={GitHub}
              alt="Logo de Github: gato blanco en fondo negro"
              className="h-4 w-4 mr-2"
            />
            GitHub
          </Link>
        )}
        {proyect.demo && (
          <Link
            to={proyect.demo}
            className="btn-blue flex items-center justify-between"
          >
            <img
              src={Web}
              alt="Planeta de lineas, representando a internet"
              className="h-4 w-4 mr-2"
            />
            Ver Sitio
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
