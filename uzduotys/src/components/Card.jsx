import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
    return(
        <div className="cardCointainer">
            <img src={props.url} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.cardText}</p>
        </div>
    );
};

Card.PropTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    cardText: PropTypes.string,
};

export default Card;