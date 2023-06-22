import { Link, useParams } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useEffect, useState } from "react";
import { LOCAL_API_URL } from "../../../config";
import axios from "axios";


const UserPage = () => {
    const params = useParams();
    const id = params.id;

    // const { id } = useParams();

    const [user, setUser] = useState(null);
    const [userDeleted, setUserDeleted] = useState(false);

    useEffect(() => {
        fetch(`${LOCAL_API_URL}/users/${id}?_embed=posts`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
    }, [id]);

        // useEffect(() => {
    //   axios.get(`${LOCAL_API_URL}/users/${users.id}?_embed=posts`)
    //   .then(res => setPosts(res.data));
    // }, [users.id]);

    const deleteUserHandler = () => {
        axios.delete((`${LOCAL_API_URL}/users/${id}`))
        .then(data => setUserDeleted(true));
    }


    if (!user) {
        return '';
    }


const addressText = <a href='/#'>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</a>

  return (
    <Container>
        {userDeleted ? (
        <>
            <h2>User deleted</h2>
            <Link to='/json/users'>Go back to users list</Link>
        </>
        ) : (
            <>
            {user.name ? (
                <h1>{user.name} info:</h1>
            ) : ('Go to Users Page')}
            <ul>
                <li> Email: <a href={`mailto:${user.email}`}>{user.email}</a></li>
                <li> Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></li>
                <li> Website: <a href={`https:${user.website}`}>{user.website}</a></li>
                <li> Company: {user.company.name}</li>
                <li> Website: <a href={`https:${user.website}`}>{user.website}</a></li>
                <li> Address: {addressText}</li>
            </ul>
    
            <button onClick={deleteUserHandler}>Delete User</button>
            <ul> Posts:
            {user.posts.map(post => <li key={post.id}><Link to={'/json/posts/' + post.id}>{post.title}</Link></li>)}
            </ul>
            </>
        )}
       
    </Container>
  )
}

export default UserPage;