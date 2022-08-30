import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const [costumer, setCostumer] = useState({
        name: "",
        lastname: "",
        email: "",
        address: "",
    });

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

        const ordersCollection = collection(db, "orders");
        const consulta = addDoc(ordersCollection, order);
        consulta
            .then((res) => {
                toast.success(`Thank You. Your Order ${res.id} Has Been Received!`);
            })
            .catch((error) => {
                toast.error(`Error! ${error}`);
            });
        navigate("/");
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
                <button
                    className="mt-4 w-full btn--primary"
                    type="submit"
                >
                    Confirmar Compra!
                </button>
            </form>
        </div>
    );
};
export default Checkout;
