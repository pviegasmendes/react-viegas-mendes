import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

function App() {
    const brand = "Ecommerce Inc. ";

    return (
        <>
            <BrowserRouter>
                <Header brand={brand} />

                <ItemDetailContainer />

                <ItemListContainer greeting="Related Products" />

                <Footer brand={brand} />
            </BrowserRouter>
        </>
    );
}
export default App;
