import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({element, img}) => {
    const proyect = element;
    const image = element.image;

    const imgGridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, 200px)`
      };
    
    return(
            <div className="shadow bg-white mr-4 rounded flex-shrink-0" style={{width: "300px"}}>
                {/*style={{backgroundImage: `url(${post.thumbnail})`}}*/}
                <header className="h-40 bg-cover bg-center" style={imgGridStyle}>
                        {
                            img.allImageSharp.edges.map((Edge, i) => {
                                if(image === Edge.node.fixed.originalName){
                                    return <Img fixed={Edge.node.fixed} alt="Imagen de Proyecto" key={i}/>
                                } 
                            })
                        }
                </header>
                <div className="px-6 py-4">
                    <h4 className="font-bold text-xl mb-2">
                        <a href={proyect.git} target="_blank" rel="noopener noreferrer">{proyect.name}</a>
                    </h4>
                    <p className="text-gray-700 text-base">
                        {proyect.description}
                    </p>
                </div>
                <div className="px-6 py-4">
                    {
                        proyect.tecnologys.map( (tech) => (
                            <span 
                                key={tech}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {tech}
                            </span>
                        ))
                    }
                    <footer className="mt-8">
                        {
                            proyect.git && <Link to={proyect.git} className="btn inline-block mt-4">Repositorio</Link>
                        }
                        {
                            proyect.demo && <Link to={proyect.demo} className="btn inline-block mt-4 ml-4">Demo</Link>
                        }
                    </footer>
                </div>
            </div>
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
