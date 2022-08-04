import { useState } from "react";

function ItemCount() {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(5);

    const agregarProducto = () => {
        if (stock > 0) {
            setStock(stock - 1);
            setContador(contador + 1);
        }}
        

    const quitarProducto = () => {
        if (contador > 0) {
        setStock(stock + 1);
        setContador(contador - 1);
    }};

    return (
        <>
            <div className="w-80 border-solid  rounded-2xl mt-7 mb-9 shadow-xl overflow-hidden">
                <div className="h-72 bg-cover  bg-center bg-[url('https://d3ugyf2ht6aenh.cloudfront.net/stores/137/216/products/vanilla-jasmine-21-ae2fd8d8f3fbb64ad616450254712383-640-0.jpg')]"></div>
                <div className="p-4">
                    <h3 className=" font-bold text-xl ">Producto</h3>
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
                    <button className="font-bold w-full p-4 mt-1 bg-slate-100 rounded-xl hover:bg-green-500 hover:text-white">
                        Agregar
                    </button>
                </div>
            </div>
        </>
    );
}
export default ItemCount;
