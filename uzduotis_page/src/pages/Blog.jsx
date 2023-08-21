import Soon from "../assets/image/soon.png";
import "../components/general.css";
import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="cointainerSoon">
                <h1>Blog</h1>
                <img className="soonImg" src={Soon} alt="" />
            </div>
        </>
    );
}

export default Blog;