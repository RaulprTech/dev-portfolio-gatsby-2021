import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Proyect from "./Project"
import Posts from "../Blog/Posts"

export default () => {
  const data = useStaticQuery(graphql`
    {
      topProyectsJson {
        proyects {
          demo
          description
          git
          name
          type
          image
          tecnologys {
            name
            url
          }
        }
      }
      allImageSharp {
        edges {
          node {
            id
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `)
  return (
    <section id="Projects">
      <div className="mt-24">
        <div className=" max-w-4xl mx-auto">
          <Posts
            data={data.topProyectsJson.proyects}
            img={data}
            title="Conoce algunos de mis proyectos"
            Card={Proyect}
          />
        </div>
      </div>
    </section>
  )
}

/*
export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
*/
/*
export const query = graphql`
    query($name : String){
        file(name: {eq: $name}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        topProyectsJson {
            proyects {
              demo
              description
              git
              name
              type
              tecnologys
            }
        }
    }
`
*/
