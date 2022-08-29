import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { useState } from "react";

const Cart = () => {
    const { cart, getItemPrice, cartLength, emptyCart } =
        useContext(CartContext);
    const [checkout, setCheckout] = useState(false);


    return cartLength === 0 ? (
        <div className="grid justify-center">
            <h1 className="font-bold text-xl m-4">Carrito Vacio</h1>
            <Link
                to={"/"}
                className="font-bold mt-8 p-4 mb-2 border-solid border-2 text-white bg-violet-500  rounded-xl hover:bg-violet-700 "
            >
                Ver Productos
            </Link>
        </div>
    ) : (
        <div className="grid lg:grid-cols-6 p-9">
            <div className="col-span-4">
                <h2>Productos en carrito</h2>
                <div>
                    {cart.map((product) => (
                        <ItemCart key={product.id} product={product} />
                    ))}
                </div>
                <h3>Total: $ {getItemPrice()} </h3>
                <button
                    onClick={() => emptyCart()}
                    className="font-bold mt-8 p-4 mb-2 border-solid border-2 border-violet-500 text-violet-500 bg-white  rounded-xl hover:bg-violet-700 "
                >
                    Vaciar Carrito
                </button>
            </div>
            <div className="col-span-2">
                {!checkout ? (
                    <button
                        onClick={() => setCheckout(true)}
                        className="font-bold mt-8 p-4 mb-2 border-solid border-2 border-violet-500 text-violet-500 bg-white  rounded-xl hover:bg-violet-700 "
                    >
                        Checkout
                    </button>
                ) : (
                    <Checkout />
                )}
            </div>
        </div>
    );
};

export default Cart;
