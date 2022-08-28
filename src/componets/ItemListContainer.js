import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { TailSpin } from "react-loader-spinner";
// 1  traigo la base
import { db } from "../firebase";
// 2 genero referencia a coleccion
import { collection } from "firebase/firestore";

// 3 teniendo la coleccion me traigo los productos
import { getDoc, getDocs } from "firebase/firestore";

function ItemListContainer() {
    const [listProducts, setListProducs] = useState([]);
    const [loading, setLoading] = useState(false);
    const r = useParams();
    let category = r.category;


    useEffect(() => {
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

    }, [category]);

    return (
        <>
            <div className="flex flex-col ">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl m-auto ">
                    {loading ? (
                        <ItemList listProducts={category ? listProducts.filter(item => item.category == category) : listProducts} />
                    ) : (
                        <>
                            <div className="p-8">
                                <TailSpin
                                    height="80"
                                    width="80"
                                    color="#f4f4f4"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </div>
                            <div className="p-8">
                                <TailSpin
                                    height="80"
                                    width="80"
                                    color="#f4f4f4"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </div>
                            <div className="p-8">
                                <TailSpin
                                    height="80"
                                    width="80"
                                    color="#f4f4f4"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
export default ItemListContainer;
