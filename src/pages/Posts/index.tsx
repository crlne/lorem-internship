import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import api from "../../api";

import styles from "./posts.module.css";

interface PostsProps {
    id: string;
    title: string;
    body: string;
}

export default function Post() {
    const [post, setPost] = useState<PostsProps | null >(null);

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        api.get(`posts/${id}`)
            .then(response => setPost(response.data));
    }, [])

    if (!post) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <main>
            <div>
                <h1 className={styles.title}>{post.title}</h1>  
                <p>{post.body}</p>

                <Link to="/" className={styles.toHome}>Voltar</Link>
            </div>
        </main>
    );
}