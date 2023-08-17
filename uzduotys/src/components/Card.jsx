import PropTypes from "prop-types";
import "./styles/styles.css";

const Card = (props) => {
    return(
        <div className="cardCointainer">
            <img src={props.url}/>
            <h1>{props.title}</h1>
            <p>{props.cardText}</p>
        </div>
    );
};

Card.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    cardText: PropTypes.string,
};

export default Card;