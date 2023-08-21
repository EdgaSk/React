import Soon from "../assets/image/soon.png";
import "../components/general.css";
import React from 'react';

const Contacts = () => {
    return (
        <>
            <div className="cointainerSoon">
                <h1>Contacts</h1>
                <img className="soonImg" src={Soon} alt="" />
            </div>
        </>
    );
}

export default Contacts;