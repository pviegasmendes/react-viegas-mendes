import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function ItemCount() {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(5);

    const agregarProducto = () => {
        if (stock > 0) {
            setStock(stock - 1);
            setContador(contador + 1);
        }
    };

    const quitarProducto = () => {
        if (contador > 0) {
            setStock(stock + 1);
            setContador(contador - 1);
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
                        <div className="p-4">{contador}</div>
                        <button
                            onClick={agregarProducto}
                            className="p-4 bg-slate-100 hover:bg-slate-200"
                        >
                            +
                        </button>
                    </div>
                    <button className="flex justify-center font-bold w-full p-4 bg-violet-500 rounded-xl hover:bg-violet-600 text-white">
                    <FaShoppingCart className="mr-2 mt-1" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}
export default ItemCount;
