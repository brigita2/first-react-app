import { useEffect, useState } from "react";
import { LOCAL_API_URL } from "../../config";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";

const UsersPage = () => {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(LOCAL_API_URL + '/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data);
        })
    }, [])
    

  return (
    <Container>
    <h1>Users:</h1>
    <ul>
      {users.map(user =>  (
        <li key={user.id}>
            <Link to={`/json/users/${user.id}`}>
                {user.name}
            </Link>
        </li>
      ))}
    </ul>
    </Container>
  )
}

export default UsersPage;