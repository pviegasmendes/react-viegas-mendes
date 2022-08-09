import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer() {
    const [loading, setLoading] = useState(false);
    const [showProduct, setShowProduct] = useState({});
    let id = 7;
    let productUrl = "https://fakestoreapi.com/products/"+id

    useEffect(() => {

        fetch(productUrl)
            .then((res) => res.json())
            .then((data) => {
                setShowProduct(data);
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {loading ? (<ItemDetail product={showProduct} />) : ( <p className="text-center mt-10">Loading Item Detail...</p>)}</>
    );
}
export default ItemDetailContainer;
