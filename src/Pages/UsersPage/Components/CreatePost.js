import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import { LOCAL_API_URL } from "../../../config";
import axios from "axios";
import { Link } from "react-router-dom";

const CreatePost = () => {

    const [users, setUsers] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        axios.get(`${LOCAL_API_URL}/users`)
        .then(res => {
            setUser(res.data[0].id)
            setUsers(res.data);
        })
    }, []);

    const titleInputHandler = (e) => setTitle(e.target.value);
    const bodyInputHandler = (e) => setBody(e.target.value);
    const userInputHandler = (e) => setUser(e.target.value);

    const newPostHandler = (event) => {
        event.preventDefault();

        // fetch(`${LOCAL_API_URL}/posts`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       title: title,
        //       body: body,
        //       userId: Number(user),
        //     }),
        //     headers: {
        //       'Content-type': 'application/json; charset=UTF-8',
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((json) => setNewPost(json));
        axios.post(`${LOCAL_API_URL}/posts`, {
            title: title,
            body: body,
            userId: Number(user),
        }).then(res => setNewPost(res.data))

        // const newPost = {
        //     title: title,
        //     body: body,
        //     userId: Number(user)
        // };
        // axios.post(`${LOCAL_API_URL}/posts`, newPost)
        // .then(res => setNewPost(res.data));
    }
  return (
    <Container>
    <form onSubmit={newPostHandler}>
        <div className="form-control">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={titleInputHandler}></input>
        </div>

        <div className="form-control">
            <label htmlFor="body">Post:</label>
            <textarea id="body" name="body" rows="5" value={body} onChange={bodyInputHandler}></textarea>
        </div>

        <div className="form-control">
            <label htmlFor="user">User:</label>
            <select id="user" name="user" value={user} onChange={userInputHandler}>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
        </div>

        <input type="submit" value="Create new post"></input>
    </form>
        <div>
            {newPost && <h3>{newPost.title} post created</h3>}
            <Link to={'/json/posts/' + newPost.id}>Go to your post</Link>
        </div>
    </Container>
  )
}

export default CreatePost;