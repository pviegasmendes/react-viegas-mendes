import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((x) => x.id === id);
    };
    const addItem = (product, enCarrito ) => {

        const newItem = {
            ...product, enCarrito
        }

        if (isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].enCarrito += enCarrito
            setCart(auxArray)
        }else{
            setCart([...cart, newItem])
        }
    };
    const emptyCart = () => {
        return setCart([]);
    };
    const deleteItem = (id) => {
        return setCart(cart.filter((x) => x.id !== id));
    };
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.enCarrito, 0);
    };
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.enCarrito * x.price, 0);
    };

    return <Provider value={{cart, isInCart, emptyCart, deleteItem, getItemQty, getItemPrice, addItem}}>{children}</Provider>;
};

export default MyProvider;
