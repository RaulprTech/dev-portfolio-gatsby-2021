import React from 'react';
import { useStaticQuery, grap, graphql } from 'gatsby';
import Posts from './Posts';
import Certificate from './Certificate';
import Course from './Course';

export default () => {
    const data = useStaticQuery(graphql`{
    codigofacilitoJson {
        data {
          certificates {
            title
            score
            code
          }
          finished_courses {
            title
            url
          }
        }
      }
    }`)
    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts 
                        data={data.codigofacilitoJson.data.certificates} 
                        title="Mis Certificados"
                        Card={Certificate}/>
                    <Posts 
                        data={data.codigofacilitoJson.data.finished_courses} 
                        title="Mis Cursos"
                        Card={Course}/>
                </div>
            </div>
        </section>
    )
}