import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import { Item } from "./Item";
import ItemDetailContainer from "./ItemDetailContainer";

function App() {
    const brand = "Ecommerce Inc. ";

    return (
        <>
            <BrowserRouter>
                <Header brand={brand} />
                <main className="">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/detail"
                            element={<ItemDetailContainer />}
                        />
                        <Route
                            path="/jewelery"
                            element={<ItemListContainer />}
                        />
                    </Routes>
                </main>
                <Footer brand={brand} />
            </BrowserRouter>
        </>
    );
}
export default App;
