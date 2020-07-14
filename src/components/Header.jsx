import React from 'react';
import illustration from '../imgs/undraw_heatmap_uyye.svg';
import Form from './ContactForm';
import Nav from './Nav';

export default () => {
    return(
    <header className="bg-blue-300">
        <div className="container mx-auto p-12 max-w-4xl ">
            <Nav/>
            <div className="flex items-center justify-center">
                <div className="flex-1">
                    <h1 className="font-bold text-yellow text-4xl">¡Hola! Soy Raul</h1>
                    <p className="text-xl font-light">Creo aplicaciones web y enseño sobre tecnologia</p>
                </div>
                <div className="flex-1">
                    <img src={illustration} alt="hombre junto a wireframes" style={{ height: "300px"}}/>
                </div>
            </div>
            <div>
                <Form/>
            </div>
        </div>
    </header>
    )
}