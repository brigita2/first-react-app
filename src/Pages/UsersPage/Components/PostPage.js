import { useParams } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { LOCAL_API_URL } from "../../../config";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${LOCAL_API_URL}/posts/${id}?_expand=user`)
    .then(res => setPost(res.data));
  }, [id]);

  
  if (!post) {
    return '';
  }
  return (
    <Container>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <span>User: {post.user.name}</span>
    </Container>
  )
}

export default PostPage;