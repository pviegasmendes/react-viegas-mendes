import CartBtn from "./CartBtn";
import NavBar from "./NavBar";

function Header() {
    return (
        <>
            <header>
                <h1 className="brand">
                    <a href="http://localhost:3000/">SENSAROMAS</a>{" "}
                </h1>
                <div className="menu">
                    <NavBar />
                    <CartBtn />
                </div>
            </header>
        </>
    );
}

export default Header;
