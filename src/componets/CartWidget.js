import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
    const { getItemQty, cartLength } = useContext(CartContext);
    return (
        <>
            <div className="relative">
                <Link to="/cart">
                    <FaShoppingCart className="ml-2 w-6 h-6 text-violet-500 hover:text-violet-600" />
                    {cartLength === 0 ? null : (
                        <p className="absolute bottom-6 left-6 bg-green-400 px-2 rounded  text-white text-sm">
                            {getItemQty()}
                        </p>
                    )}
                </Link>
            </div>
        </>
    );
}

export default CartWidget;
