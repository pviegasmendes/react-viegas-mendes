import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";

function App() {

    const brand = "SENSAROMAS";

    return (
        <>
            <Header brand={brand}/>
            <main className="grid justify-center">
                <ItemListContainer greeting="Lista de productos" />
            </main>
            <Footer brand={brand} />
        </>
    );
}

export default App;
