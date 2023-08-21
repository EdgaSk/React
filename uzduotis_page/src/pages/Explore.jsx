import Soon from "../assets/image/soon.png";
import "../components/general.css";
import React from 'react';

const Explore = () => {
    return (
        <>
            <div className="cointainerSoon">
                <h1>Explore</h1>
                <img className="soonImg" src={Soon} alt="" />
            </div>
        </>
    );
}

export default Explore;