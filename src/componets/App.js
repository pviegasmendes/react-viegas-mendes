import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

function App() {
    return (
        <>
            <Header />
            <main>
            <ItemListContainer/>
            </main>
            <footer>
                <h4 className="brand"><a href="http://localhost:3000/">SENSAROMAS </a>&copy; 2022</h4>
                <NavBar/>
            </footer>
        </>
    );
}

export default App;
