// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40RaulprTech

import React, {useState, useEffect} from 'react';
import Posts from './Posts';
import Story from './Story';

export default () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const data = sessionStorage.getItem('posts');
        
        if(data){
            setPosts(JSON.parse(data));
        }

        let myPosts;

        async function getMediumPosts(){
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40RaulprTech");
            myPosts = await response.json();
            sessionStorage.setItem('posts', JSON.stringify(myPosts.items));

            setPosts(myPosts.items);
        }

        getMediumPosts();

    }, []);

    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto overflow-x-scroll">
                    <Posts
                    data={posts}
                    title="Mis Publicaciones en Medium"
                    Card={Story} />
                </div>
            </div>
        </section>
    )
}