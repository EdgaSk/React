import "./styles/Products.css";
import { useEffect, useState } from "react";

const Products = () => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://sophisticated-humane-dandelion.glitch.me/")
        .then((resp) => resp.json())
        .then((response) => {
            setProductsData(response);
            setIsLoading(false);
        });
    },[]);

    const deleteProduct = (productId) => {
        const updatedProducts = productsData.filter(
            (product) => product.id !== productId
        );
        setProductsData(updatedProducts);
    }

    return (
        <div className="productsCointainer">
            {isLoading ? (
                <h1 className="loadingTitle">Loading...</h1>
            ) : (
                productsData.map((productData)=> (
                    <div key={productData.id}>
                        <img src={productData.image}/>
                        <p>{productData.title}</p>
                        <p>{productData.price}&nbsp;&euro;</p>
                        <button 
                            className="deleteProducts" 
                            onClick={() => deleteProduct(productData.id)}>Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Products;