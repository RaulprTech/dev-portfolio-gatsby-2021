import React from 'react';
import { graphql, Link } from 'gatsby';
import EduNav from "../components/Education-nav";


export default ({ data }) => {
    const pageData = data.educationJson;
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
                 pageData.items.map((item, index) => (
                     <li className="bg-white shadow mt-4 flex" key={index}>
                        <p className="vertical-text">{pageData.slug}</p>
                        <div className="flex items-center flex-1 p-8">
                            <div className="flex-1">
                                <h3>{item.name}</h3>
                                {
                                    item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
                                }
                                {
                                    item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-block">Ver mas</a>
                                }
                            </div>
                            <div className="inline-block">
                                <span className="inline-bock p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
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
        educationJson(slug: { eq: $slug}){
            title
            description
            slug
            items{
                name
                degree
                score
                url
            }
        }
    }
`