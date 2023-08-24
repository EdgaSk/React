import PropTypes from "prop-types";
import "./styles/Post.css"

const Post = (props) => {
    return (
        <div>
            <h1>{props.postTitle}</h1>
            <p>{props.postBody}</p>
        </div>
    )
}

Post.propTypes = {
    postTitle: PropTypes.string,
    postBody: PropTypes.string,
}

export default Post;