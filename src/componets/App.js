import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import MyProvider from "../context/CartContext";
import "../firebase"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const brand = "Ecommerce Inc. ";

    return (
        <>
            <BrowserRouter>
                <MyProvider>
                    <Header brand={brand} />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:category"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer brand={brand} />
                    <ToastContainer />
                </MyProvider>
            </BrowserRouter>
        </>
    );
}
export default App;
