import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Proyect from './Proyect';
import Posts from './Posts';


export default (props) => {
    const data = useStaticQuery(graphql`
        {
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
    `)
    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts 
                        data={data.topProyectsJson.proyects} 
                        title="Conoce algunos de mis proyectos"
                        Card={Proyect}/>
                </div>
            </div>
        </section>
    )
}