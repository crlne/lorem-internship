import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import api from "../../api";

import styles from "./posts.module.css";

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
                <h1 className={styles.title}>{post.title}</h1>  
                <p>{post.body}</p>

                <Link to="/" className={styles.toHome}>Voltar</Link>
            </div>
        </main>
    );
}