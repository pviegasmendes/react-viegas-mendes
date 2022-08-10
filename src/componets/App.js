import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";

function App() {
    const brand = "Ecommerce Inc. ";

    return (
        <>
            <BrowserRouter>
                <Header brand={brand} />
                <main className="">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:id" element={<ItemListContainer />}/>
                        <Route path="/item/:id" element={<ItemDetailContainer />}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </main>
                <Footer brand={brand} />
            </BrowserRouter>
        </>
    );
}
export default App;
