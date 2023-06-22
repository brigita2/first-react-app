import { useEffect, useState } from "react";
import { LOCAL_API_URL } from "../../../config";
import Container from "../../../Components/Container/Container";
import { Link } from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${LOCAL_API_URL}/posts`)
            .then(res => res.json())
            .then(postsData => {
                setPosts(postsData);
            })
    })

    const createPost = () => {
        
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'Labas',
              body: 'Aprašymas',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

  return (
    <Container>
        <button onClick={createPost}>Create</button>
    <div>
        <ul>
            {posts.map((post) => {
                return (<li key={post.id}>
                    <Link to={'/json/posts/' + post.id}>{post.title}</Link>
                </li>)
            })}
        </ul>
        
    </div>
    </Container>
  )
}

export default PostsPage;