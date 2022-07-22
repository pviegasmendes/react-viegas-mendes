import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

function Header() {
    return (
        <>
            <header className="sticky top-0 flex h-20 bg-violet-100 justify-between items-center px-4 drop-shadow-md">
                <h1 className="text-3xl font-semibold">
                    <a href="http://localhost:3000/">BRAND</a>{" "}
                </h1>
                <div className="flex">
                    <NavBar />
                    <CartWidget />
                </div>
            </header>
        </>     
    );
}


export default Header;
