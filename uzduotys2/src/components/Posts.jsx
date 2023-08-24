import Post from "./Post";
import { useEffect, useState } from "react";
import "./styles/Posts.css"

const Posts = () => {
    const [postsData, setPostData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => resp.json())
            .then((response) => {
                setPostData(response);
            });
    },[]);

    return (
        <div className="postsCointainer">
            {postsData.map((postData)=>(
                <Post 
                    key={postData.id}
                    postTitle={postData.title}
                    postBody={postData.body}
                />
            ))}
        </div>
    )
}


export default Posts;