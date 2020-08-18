import React from 'react';
import { graphql, Link } from 'gatsby';
import EduNav from "../components/Education-nav";
import Posts from '../components/Posts'


export default ({ data }) => {
    const pageData = data.proyectsJson;
    return( 
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-pnk-500">Regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <div className="container mx-auto">
            <ul>
                {
                 pageData.proyects.map((proyect, index) => (
                     <li className="bg-white shadow mt-4 flex" key={index}>
                        {/*<p className="vertical-text font-bold text-3xl text-center">{pageData.slug}</p>*/}
                        <p className="vertical-text"></p>
                        <div className="flex items-center flex-1 p-8">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-3">{proyect.name}</h3>
                                {
                                    proyect.description && <span className="inline-block p-2 radius bg-purple-100 text-purple-700 mb-3">{proyect.description}</span>
                                }
                                <div className="flex-1">
                                    {
                                        proyect.tecnologys.map( (tech) => (
                                            <span key={tech} className="inline-bock p-2 text-lg bg-blue-100 text-blue-700 mt-4 mr-5">{tech}</span>
                                        ))
                                    }
                                </div>
                                <div className="flex-1">
                                    {
                                        proyect.git && <a href={proyect.git} target="_blank" rel="noopener noreferrer" className="btn inline-block mt-5 mr-4">Ver en Git</a>
                                    }
                                    {
                                        proyect.demo && <a href={proyect.demo} target="_blank" rel="noopener noreferrer" className="btn inline-block mt-5 mr-4">Ver Online</a>
                                    }
                                </div>
                            </div>

                            <div className="inline-block">
                                <img 
                                    src="https://cdn.pixabay.com/photo/2017/12/22/08/01/paper-3033204_1280.jpg" 
                                    className="transform scale-50 ..."
                                />
                            </div>
                        </div>
                     </li>
                ))   
                }
            </ul>
            </div>
            <EduNav/>
        </div>
    )
}

export const query = graphql`
    query($slug : String){
        proyectsJson(slug: { eq: $slug}){
            title
            description
            slug
            proyects{
                name
                description
                tecnologys
                git
                demo
            }
        }
    }
`