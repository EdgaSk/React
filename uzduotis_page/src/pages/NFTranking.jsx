import Soon from "../assets/image/soon.png";
import "../components/general.css";
import React from 'react';

const NFTranking = () => {
    return (
        <>
            <div className="cointainerSoon">
                <h1>NFT Ranking</h1>
                <img className="soonImg" src={Soon} alt="" />
            </div>
        </>
    );
}

export default NFTranking;