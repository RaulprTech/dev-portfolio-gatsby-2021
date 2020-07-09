import React, {useState, useEffect} from 'react';
import Repo from './Repo';

export default () => {
    
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    
    useEffect( () => {

        const data = sessionStorage.getItem("repos");
        let myRepos;

        if(data){
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(0, 4);
            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/RaulprTech/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            
            //Guarda los datos descargados en el navegador
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            myRepos = myRepos.slice(0, 4);
            setRepos(myRepos);
        }
    fetchRepos();
    },[]);
    
    return(
    <div className="max-w-4xl mx-auto mt-12">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Mi Github</h2>
            <p>¡Mira los asombrosos sitios que he creado!</p>
        </header>
        <div className="container m-6">
            <ul className="repos-list">
                {
                    repos.map(repo => {
                    return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a 
                    className="btn" 
                    href="https://github.com/RaulPachecoTi/" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    Ver mas en Github ({reposCount})
                </a>
            </div>
        </div>
    </div>
    )
}