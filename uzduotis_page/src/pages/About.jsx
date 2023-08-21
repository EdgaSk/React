import Soon from "../assets/image/soon.png";
import "../components/general.css";
import React from 'react';

const About = () => {
    return (
        <>
            <div className="cointainerSoon">
                <h1>About</h1>
                <img className="soonImg" src={Soon} alt="" />
            </div>
        </>
    );
}

export default About;