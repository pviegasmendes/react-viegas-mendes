import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { TailSpin } from "react-loader-spinner";

function ItemListContainer() {
    const [listProducts, setListProducs] = useState([]);
    const [loading, setLoading] = useState(false);
    const r = useParams();
    let id = r.id;
    let categorytUrl = "";

    useEffect(() => {
        if (id == undefined) {
            categorytUrl = "https://fakestoreapi.com/products";
        } else {
            categorytUrl = "https://fakestoreapi.com/products/category/" + id;
        }

        fetch(categorytUrl)
            .then((res) => res.json())
            .then((data) => {
                setListProducs(data);
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
            <div className="flex flex-col ">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl m-auto ">
                    {loading ? (
                        <ItemList listProducts={listProducts} />
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
