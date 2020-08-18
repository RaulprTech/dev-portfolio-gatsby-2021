import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default (props) => {
    const data = useStaticQuery(graphql`
        {
            allProyectsJson {
                edges {
                  node {
                    slug
                    title
                    description
                  }
                }
            }
        }
    `)
    return(
        <div id="Proyects" className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center">¿Que tipo de proyectos realizo?</h2>
            <p className="text-center">Estas son las areas en las que usualmente realizo proyectos</p>
            <nav className="flex justificy-center mt-8">
                {
                    data.allProyectsJson.edges.map((element, index) => {
                        const { node } = element;
                        return(
                            <article className="flex-1 bg-white shadow m-4 max-w-sm p-4">
                                <header>
                                    <h3 className="text-xl font-bold leading-loose">{node.title}</h3>
                                    <div className="mt-8">
                                        <p className="font-light">{node.description}</p>
                                        <Link to={`/${node.slug}`} className="btn inline-block mt-4">Ir</Link>
                                    </div>
                                </header>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    )
}