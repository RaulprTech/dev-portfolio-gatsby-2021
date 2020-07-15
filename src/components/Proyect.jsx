import React from 'react';

export default ({element}) => {
    const proyect = element;
    return(
            <div className="shadow bg-white mr-4 rounded flex-shrink-0" style={{width: "300px"}}>
                {/*style={{backgroundImage: `url(${post.thumbnail})`}}*/}
                <header className="h-40 bg-cover bg-center" ></header>
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
                </div>
            </div>
    )
}