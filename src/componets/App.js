import Header from "./Header";
import NavBar from "./NavBar";

function App() {
    return (
        <>
            <Header />
            <main>
                <h2 className="tittle">Titulo de la tienda</h2>
                <p>Articulos de la tienda</p>
            </main>
            <footer>
                <h4 className="brand"><a href="http://localhost:3000/">SENSAROMAS </a>&copy; 2022</h4>
                <NavBar/>
            </footer>
        </>
    );
}

export default App;
