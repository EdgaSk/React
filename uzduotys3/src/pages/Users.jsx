import { useEffect, useState } from "react";
import "./styles/Users.css";
import { useNavigate } from "react-router-dom";
import UsersAvatar from "../assets/usersAvatar.png"

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((response) => {
                setUsers(response);
            }).catch((error) => {
                console.error(error);
            })
    }, [])

    const handleRedirect = (userId) => {
        navigate(`/users/${userId}`);
    };

    return (
        <main>
            <div className="usersCointainer">
                {users.map((user) => (
                    <div onClick={() => handleRedirect(user.id)} key={user.id} className="usersCard">
                        <img className="usersImg" src={UsersAvatar} alt="" />
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Users;