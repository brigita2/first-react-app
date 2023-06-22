import { useParams } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";


const UserPage = () => {
    const params = useParams();
    const id = params.id;

    // const { id } = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
    }, [id]);

    if (!user) {
        return '';
    }

const addressText = <a href='/#'>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</a>
console.log(user)

  return (
    <Container>
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
    </Container>
  )
}

export default UserPage;