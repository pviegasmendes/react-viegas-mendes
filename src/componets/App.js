import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";

function App() {
    const brand = "SENSAROMAS";

    return (
        <>
            <Header brand={brand} />

            <ItemListContainer greeting="Fragances" />

            <Footer brand={brand} />
        </>
    );
}

export default App;
