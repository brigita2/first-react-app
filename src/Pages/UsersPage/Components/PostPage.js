import { Link, useParams } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { LOCAL_API_URL } from "../../../config";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [postDeleted, setPostDeleted] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${LOCAL_API_URL}/posts/${id}?_expand=user`)
    .then(res => setPost(res.data));
  }, [id]);

  useEffect(() => {
    axios.get(`${LOCAL_API_URL}/posts/${id}?_embed=comments`)
    .then(res => setComments(res.data.comments));
  }, [id]);

  console.log(comments)
  if (!post) {
    return '';
  }

  const deleteHandler = () => {
    // fetch(`${LOCAL_API_URL}/posts/${id}`, {
    //   method: 'DELETE',
    // })
    // .then(res => res.json())
    // .then(data => setPostDeleted(true));
    axios.delete(`${LOCAL_API_URL}/posts/${id}`)
    .then(data => setPostDeleted(true))
  }

  return (
    <Container>
      {postDeleted ? (
        <>
          <h2>Post deleted</h2>
          <Link to='/json/posts'>Go back to posts list</Link>
        </>
        ) : (
          <>
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <span>User: {post.user.name}</span>
            </div>
            <div>
              <button onClick={deleteHandler}>Delete Post</button>
            </div>
          </>
      )}
      <div>
        <h2>Comments:</h2>
          {comments && comments.map(comment => {
            return (
            <>
              <h3>Title: {comment.name}</h3>
              <p>Comment: {comment.body}</p>
              <p>{comment.email}</p>

            </>
            )
          })}
      </div>
    </Container>
  )
}

export default PostPage;