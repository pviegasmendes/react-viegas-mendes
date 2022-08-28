import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
    const [enCarrito, setEnCarrito] = useState(1);
    const [stock, setStock] = useState(product.stock);

    const { isInCart, addItem } = useContext(CartContext);


    const onAdd = () => {
        if (stock > 0) {
            isInCart(product.id);
            addItem(product, enCarrito);
            setStock(stock - enCarrito);
            setEnCarrito(1)
        }
    };

    return (
        <>
            <div className="max-w-5xl mx-auto border-solid rounded-2xl p-4 mt-10 mb-9 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2">
                        <div className="flex justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-64 object-contain scale-95 hover:scale-100 transition-all duration-200 ease-out"
                            />
                        </div>
                        <h2 className="m-4 font-bold uppercase">
                            Item Description:
                        </h2>
                        <p className="font-semibold text-xl m-4">
                            {product.description}.-
                        </p>
                    </div>
                    <div className="grid md:flex lg:grid">
                        <div className="p-4 flex-grow">
                            <h3 className="font-bold text-xl m-4 truncate w-72">
                                {product.title}
                            </h3>
                            <p className="font-semibold text-6xl text-violet-500 ml-4 mb-4  ">
                                $ {product.price}.-
                            </p>
                        </div>
                        <div>
                            <ItemCount
                                enCarrito={enCarrito}
                                setEnCarrito={setEnCarrito}
                                onAdd={onAdd}
                                stock={stock}
                                setStock={setStock}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ItemDetail;
