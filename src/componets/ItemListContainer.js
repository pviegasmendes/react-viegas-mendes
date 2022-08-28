import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
    const [listProducts, setListProducs] = useState([]);
    const [loading, setLoading] = useState(false);
    const r = useParams();
    let category = r.category;

    useEffect(() => {
        if (!category) {
            const productsCollection = collection(db, "protucts");
            //trae todos los documentos de la coleccion del parametro
            const consulta = getDocs(productsCollection);
            consulta
                .then((snapshot) => {
                    //console.log(snapshot.docs)
                    const dbProducts = snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        };
                    });
                    setListProducs(dbProducts);

                    setLoading(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            const productsCollection = collection(db, "protucts");
            const filtro = query(
                productsCollection,
                where("category", "==", category)
            );
            const consulta = getDocs(filtro);
            console.log(consulta);

            consulta
                .then((snapshot) => {
                    const dbProducts = snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        };
                    });
                    setListProducs(dbProducts);
                    setLoading(true);
                    console.log(dbProducts);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [category]);

    return (
        <>
            <div className="flex flex-col ">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl m-auto ">
                    {loading ? (
                        <ItemList listProducts={listProducts} />
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </div>
            </div>
        </>
    );
}
export default ItemListContainer;
