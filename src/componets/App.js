import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";

function App() {
    return (
        <>
            <Header brand="SENSAROMAS"/>
            <main className="flex justify-center">
            <ItemListContainer/>
            </main>
            <Footer brand="sensaromas"/>
        </>
    );
}

export default App;
