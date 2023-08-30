import { Link, useNavigate } from "react-router-dom";
import HeroImg from "../assets/usersImg.png"
import "./styles/Hero.css"

const Hero = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/users");
    };

    return (
        <div className="heroCointainer">
            <img src={HeroImg} alt="" />
            <div className="textCointainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse placeat et qui, perferendis laboriosam hic, vel perspiciatis eius eum, dolorem cupiditate quisquam minus blanditiis unde. Unde debitis voluptates modi!</p>
                <button className="btnusers" onClick={handleRedirect}>Go to users</button>
            </div>
        </div>
    )
}

export default Hero;