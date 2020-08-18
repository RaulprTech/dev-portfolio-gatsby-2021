import React from 'react';
import { Link } from 'gatsby';
import illustration from '../images/logo/logo.png';

export default () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-300 mb-24">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={illustration} alt="hombre junto a wireframes" style={{ height: "30px"}}/>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div> 
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="lg:flex-grow">
                    <Link to="/#Proyects" className="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-white mr-4 font-bold">Proyectos</Link>
                    <Link to="/#Education" className="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-white mr-4 font-bold">Educacion</Link>
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-white mr-4 font-bold">Mas de mi</Link>
                </div>
            </div>
        </nav>
    )
}