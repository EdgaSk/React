import "./buttons.css";
import PropTypes from "prop-types";

export const LBtn = (props) => {
    return (
        <button className="lbtn">{props.lbtnText}</button>
    )
}

export const DBtn = (props) => {
    return (
        <button className="dbtn">{props.dbtnText}</button>
    )
}

LBtn.PropTypes = {
    lbtnText: PropTypes.string,
};

DBtn.PropTypes = {
    dbtnText: PropTypes.string,
};

