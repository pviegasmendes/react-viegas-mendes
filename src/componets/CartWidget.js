import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom"

function CartWidget () {
    return <>
    <Link to="/cart">
    <FaShoppingCart className="ml-2 w-6 h-6 text-violet-500 hover:text-violet-600" />
    </Link>
    </>
}



export default CartWidget 