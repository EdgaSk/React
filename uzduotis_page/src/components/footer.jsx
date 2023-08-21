import "./footer.css";
import React from 'react';
import Logo from "../assets/logo/whitelogo.png";

const Footer = () => {
    return(
        <footer className="fotterCointainer">
            <div className="firstCol">
                <img className="footerLogo"src={Logo}/>
            </div>
            <div className="bottomFooter">
                <p>©2022 NFT MarketPlace, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;