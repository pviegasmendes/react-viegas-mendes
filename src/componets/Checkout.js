import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
    const [costumer, setCostumer] = useState({
        name: "",
        lastname: "",
        email: "",
        address: "",
    });

    const [submit, setSubmit] = useState(false);

    const { cart, emptyCart, getItemPrice } = useContext(CartContext);

    const handlerChangeInput = (e) => {
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value,
        });
    };

    const handlerSubmit = (e) => {
        e.preventDefault();

        const order = {
            items: cart,
            buyer: { ...costumer },
            price: getItemPrice(),
            date: serverTimestamp(),
        };

        setSubmit(true);

        const ordersCollection = collection(db, "orders");
        const consulta = addDoc(ordersCollection, order);
        consulta
            .then((res) => {
                toast.success(`Orden ${res.id} creada con exito!`);
            })
            .catch((error) => {
                console.log(error);
            });
        emptyCart();
    };

    return (
        <div>
            <h2>Complete tus datos</h2>
            <form
                onSubmit={handlerSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nombre"
                    name="name"
                    value={costumer.name}
                    onChange={handlerChangeInput}
                    required
                />
                <input
                    className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Apellido"
                    name="lastname"
                    value={costumer.lastname}
                    onChange={handlerChangeInput}
                    required
                />
                <input
                    className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Correo Electrónico"
                    name="email"
                    value={costumer.email}
                    onChange={handlerChangeInput}
                    required
                />
                <input
                    className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Domicilio"
                    name="address"
                    value={costumer.address}
                    onChange={handlerChangeInput}
                    required
                />
                <button className="mt-4 font-bold w-full p-4 bg-violet-500 rounded-xl hover:bg-violet-600 text-white" type="submit">Confirmar Compra!</button>
            </form>
        </div>
    );
};
export default Checkout;
