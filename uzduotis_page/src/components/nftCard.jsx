import "./nftcard.css";
import PropTypes from "prop-types";

const NFTcard = (props) => {
    return (
        <div className="nftCardBox">
            <img className="cardImg" src={props.nfturl}/>
            <div className="cardInfo">
                <p>{props.nftName}</p>
                <p>#{props.nftNumber}</p>
                <p>{props.price} ETH</p>
                <p>Last sale: {props.lastprice} ETH</p>
            </div>
        </div>
    );
}

NFTcard.PropTypes = {
    nfturl: PropTypes.string,
    nftName: PropTypes.string,
    nftNumber: PropTypes.number,
    price: PropTypes.number,
    lastprice: PropTypes.number,
}

export default NFTcard;