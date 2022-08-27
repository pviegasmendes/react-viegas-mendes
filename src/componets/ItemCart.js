import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineClose } from "react-icons/ai";

const ItemCart = ({ product }) => {
    const { deleteItem } = useContext(CartContext);
    return (
        <>
            <div className="border-solid grid grid-cols-6 items-end ounded-2xl mt-7 mb-9 shadow-xl overflow-hidden m-8">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 m-8 object-contain scale-95 hover:scale-100 transition-all duration-200 ease-out"
                    />
                </div>
                <h3 className="font-bold text-lg m-4 truncate">
                    {product.title}
                </h3>
                <p className="font-semibold text-md text-violet-500 ml-4 mb-4  ">
                    $ {product.price}.-
                </p>
                <p className="font-semibold text-md text-violet-500 ml-4 mb-4  ">
                    Qty {product.enCarrito}.-
                </p>
                <p className="font-semibold text-dm text-violet-500 ml-4 mb-4  ">
                    $ {product.price * product.enCarrito}.-
                </p>

                <button className="p-4">
                    <AiOutlineClose
                        onClick={() => deleteItem(product.id)}
                        className="text-3xl text-violet-500 cursor-pointer hover:text-violet-700"
                    />
                </button>
            </div>

        </>
    );
};

export { ItemCart };
