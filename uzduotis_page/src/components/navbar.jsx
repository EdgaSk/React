import React from 'react';
import "./navbar.css";
import Logo from "../assets/logo/whitelogo.png";
import SearchIcon from "../assets/icon/searchicon.png"
import {Link} from "react-router-dom";


const Navbar = () =>{
    return(
        <nav className='navCointainer'>
            <img className='logoImg' src={Logo}/>
            <ul className='linksCointainer'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/nftranking">NFT Ranking</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            <div className='rightCointainer'>
                <div className='searchCointainer'>
                    <input type="text" placeholder="Search Here"/>
                    <button><img src={SearchIcon} alt="" /></button>
                </div>
                <button className='walletBtn'>Wallet connect</button>
            </div>
        </nav>
    )
}

export default Navbar;



