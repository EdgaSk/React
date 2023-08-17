import PropTypes from "prop-types";
import "./styles/styles.css";

const Avatar = (props) => {
    return(
        <div className="avatarCointainer">
            <div>{props.name[0]}{props.surname[0]}</div>
        </div>
    );
};

Avatar.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
}

export default Avatar;