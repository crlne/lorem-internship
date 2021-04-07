import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import api from "../../api";

export default function Post() {
    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {
        api.get(`posts/${id}`)
            .then(response => setPost(response.data));
    }, [])

    return (
        <main>
            <div>
                <h1>{post.title}</h1>  
                <p>{post.body}</p>
            </div>
        </main>
    );
}