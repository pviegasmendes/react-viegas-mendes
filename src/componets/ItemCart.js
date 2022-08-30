import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemCart = ({ product }) => {
    const { deleteItem } = useContext(CartContext);
    return (
        <>
            <div className="border-solid grid grid-cols-8 items-end ounded-2xl mt-7 mb-9 shadow-xl overflow-hidden m-8">
            <div className="flex justify-center m-2">

                <Link to={`/item/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-14 scale-95 hover:scale-100 transition-all duration-200 ease-out"
                    />
                </Link>
            </div>
                <Link
                    className="m-4 col-span-3"
                    to={`/item/${product.id}`}
                >
                    <h3>{product.title}</h3>
                </Link>
                <p className="ml-4 mb-4  ">$ {product.price}.-</p>
                <p className="ml-4 mb-4  ">Qty {product.enCarrito}.-</p>
                <p className="ml-4 mb-4  ">
                    $ {product.price * product.enCarrito}.-
                </p>

                <button className="p-4 flex justify-center">
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
