import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, getItemPrice, cartLength } = useContext(CartContext);
    console.log(cart.lenght);
    console.log(cart);

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
        <>
            <h2>Productos en carrito</h2>
            <div>
                {cart.map((product) => (
                    <ItemCart key={product.id} product={product} />
                ))}
            </div>
            <h3>Total: $ {getItemPrice()} </h3>
            <button className="font-bold mt-8 p-4 mb-2 border-solid border-2 text-white bg-violet-500  rounded-xl hover:bg-violet-700 ">
                Terminar compra
            </button>
        </>
    );
};

export default Cart;
