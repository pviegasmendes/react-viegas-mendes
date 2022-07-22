function NavBar() {
    return (
        <>
            <nav >
                <ul className="flex gap-2 mr-4 ">
                    <li>
                        <a href="http://localhost:3000/" className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 ">Inicio</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/" className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 ">Productos</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/" className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 ">Contacto</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default NavBar;
