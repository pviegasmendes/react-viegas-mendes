import { FaShoppingCart } from "react-icons/fa";

function ItemCount({ enCarrito, setEnCarrito, onAdd, setStock, stock }) {
    const agregarProducto = () => {
        if (stock > 0 && enCarrito < stock) {
            setEnCarrito(enCarrito + 1);
        }
    };

    const quitarProducto = () => {
        if (enCarrito > 0) {
            setEnCarrito(enCarrito - 1);
        }
    };

    return (
        <>
            <div className="w-80 border-solid  rounded-2xl mt-7 mb-9overflow-hidden">
                <div className="p-4">
                    <p className="mb-6">
                        Unidades disponibles{" "}
                        <span className="font-semibold">{stock}</span>{" "}
                    </p>
                    <div className="flex justify-between border-solid border-2 border-slate-100 rounded-xl mb-2 overflow-hidden">
                        <button
                            onClick={quitarProducto}
                            className="p-4 bg-slate-100 hover:bg-slate-200"
                        >
                            -
                        </button>
                        <div className="p-4">{enCarrito}</div>
                        <button
                            onClick={agregarProducto}
                            className="p-4 bg-slate-100 hover:bg-slate-200"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => {
                            onAdd();
                        }}
                        className="flex justify-center font-bold w-full p-4 bg-violet-500 rounded-xl hover:bg-violet-600 text-white"
                    >
                        <FaShoppingCart className="mr-2 mt-1" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}
export default ItemCount;
