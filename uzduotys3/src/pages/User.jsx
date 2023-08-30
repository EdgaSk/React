import { useEffect, useState } from "react";
import "./styles/User.css";
import { useParams } from "react-router-dom";
import UsersAvatar from "../assets/usersAvatar.png"

const User = () => {
    const [user, setUser] = useState(undefined);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((resp) => resp.json())
            .then ((response) => {
                setUser(response);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [id]);

    if (!user) {
        return <div className="loadingBox">Loading....</div>
    }

    return (
        <main className="userMainCointainer">
            <div className="userCointainer">
                <div className="avatarImgBox">
                    <img className="userAvatarImg" src={UsersAvatar} alt="" />
                </div>
                <div className="userInfoBox">
                    <h1>{user.name}</h1>
                    <li>UserName:&nbsp;<span>{user.username}</span></li>
                    <li>Email:&nbsp;<span>{user.email}</span></li>
                    <li>Website:&nbsp;<span>{user.website}</span></li>
                    <li>Phone:&nbsp;<span>{user.phone}</span></li>
                    <li>Company:&nbsp;<span>{user.company.name}</span></li>
                </div>
            </div>
        </main>
    )
}

export default User;