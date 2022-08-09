import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { TailSpin } from "react-loader-spinner";

function ItemListContainer(props) {
    const [listProducts, setListProducs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setListProducs(data)
                setLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="flex flex-col ">
                <h2 className="text-center mt-8 font-bold uppercase">
                    {props.greeting}
                </h2>
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
