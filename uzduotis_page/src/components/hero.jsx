import "./hero.css";
import PropTypes from "prop-types";
import { LBtn, DBtn } from "./buttons";

const Hero = (props) => {
    return(
        <div className="heroCointainer">
            <div className="herotext"> 
                <h1>{props.heroTitle}</h1>
                <p>{props.herosubTitle}</p>
                <div className="btnCointainer">
                    <LBtn 
                        lbtnText="Get Started"
                    />
                    <DBtn 
                        dbtnText="Create"
                    />
                </div>
            </div>
            <div className="imageCointainer">
                <img className="heroImage" src={props.heroUrl} alt="" />
            </div>
        </div>
    )
}

Hero.PropTypes = {
    heroTitle: PropTypes.string,
    herosubTitle: PropTypes.string,
    heroUrl: PropTypes.string,
}

export default Hero;