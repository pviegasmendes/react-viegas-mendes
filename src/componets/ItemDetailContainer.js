import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function ItemDetailContainer() {
    const [loading, setLoading] = useState(false);
    const [showProduct, setShowProduct] = useState({});
    const r = useParams();
    let id = r.id;

    useEffect(() => {
        const productsCollection = collection(db, "protucts"); 
        const referencia = doc(productsCollection, id);
        const consulta = getDoc(referencia);
        consulta
            .then((res) => {
                const tempProduct = res.data()
                tempProduct.id = id

                setShowProduct(tempProduct);
                setLoading(true);
            })
            .catch((error) => {
                toast.error(`Error! ${error}`);
            });
    }, [id]);

    return (
        <>
            {loading ? (
                <ItemDetail product={showProduct} />
            ) : (
                <p className="text-center mt-10">Loading Item Detail...</p>
            )}
        </>
    );
}
export default ItemDetailContainer;
