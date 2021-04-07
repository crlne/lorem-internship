import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import api from "../../api";

import "../../styles/home.module.css";

export default function Home() {
    const [userId, setUserId] = useState([])

    useEffect(() => {
        api.get("posts")
            .then(response => setUserId(response.data));
    }, [])

    return (
        <>
            <h1>
            LOREM<strong>.</strong>
            </h1>

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