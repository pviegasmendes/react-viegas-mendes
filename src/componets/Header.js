import NavBar from "./NavBar";

function Header({ brand, contador}) {
    return (
        <>
            <header className="sticky top-0 z-10 flex h-20 bg-violet-100 justify-between items-center px-4 drop-shadow-md">
                <h1 className="text-3xl font-semibold">
                    <a href="http://localhost:3000/">{brand}</a>
                </h1>
                <div className="flex">
                    <NavBar type="header" />
                </div>
            </header>
        </>
    );
}

export default Header;
