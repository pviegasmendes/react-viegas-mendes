import CartWidget from "./CartWidget";

const NavBar = ({type}) => {
    if (type == "header") {
        return (
            <nav>
                <ul className="flex gap-2 mr-4 ">
                    <li>
                        <a
                            href="#"
                            className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 "
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 "
                        >
                            Productos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 "
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul className="flex gap-2 mr-4 ">
                    <li>
                        <a
                            href="#"
                            className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 "
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 "
                        >
                            Productos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-700 "
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};
export default NavBar;
