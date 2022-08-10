import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [loading, setLoading] = useState(false);
    const [showProduct, setShowProduct] = useState({});
    const r = useParams ()
    let id = r.id;
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
