import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import api from "../../api";

import "../../styles/home.module.css";
import "../../styles/global.css";


interface PostsProps {
    id: string;
    title: string;  
}

export default function Home() {
    const [userId, setUserId] = useState<PostsProps[]>([])

    useEffect(() => {
        api.get("posts")
            .then(response => setUserId(response.data));
    }, [])

    return (
        <>
         <h1>LOREM<strong>.</strong> </h1>
            {userId?.map((posts) => (
            <li key={posts.id}>
                <Link to={`/posts/${posts.id}`}>
                    <h2>{posts.title}</h2>
                </Link>
            </li>
            ))}

        </>
    )
}