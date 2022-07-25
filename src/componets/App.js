import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

function App() {
    return (
        <>
            <Header />
            <main className="flex justify-center">
            <ItemListContainer/>
            </main>
            <footer className="flex h-20 bg-violet-100 gap-4 items-center px-4">
                <h4><a href="http://localhost:3000/">BRAND </a>&copy; 2022</h4>
                <NavBar 
                type="footer"
                    
                />
            </footer>
        </>
    );
}

export default App;
