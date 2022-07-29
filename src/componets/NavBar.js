import { useState } from "react";
import CartWidget from "./CartWidget";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = ({ type }) => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    if (type == "header") {
        return (
            <nav>
                <ul className="hidden  md:flex  gap-2 mr-4">
                    <li>
                        <a
                            href="#"
                            className=" py-1 px-3 hover:underline underline-offset-4 "
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" py-1 px-3 hover:underline underline-offset-4 "
                        >
                            Productos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" py-1 px-3 hover:underline underline-offset-4 "
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
                {/* Menu nobile */}
                <div onClick={handleNav} className="cursor-pointer block md:hidden ">
                {!nav ? <AiOutlineClose className="text-3xl text-slate-700" /> : <AiOutlineMenu className="text-3xl text-slate-700" />} 
                </div>
                <div className={!nav ? "fixed left-0 top-20 w-[60%] h-screen bg-violet-100 ease-in-out duration-300" : "fixed left-[-100%]"}>
                    <ul className="">
                        <li className="p-4  border-b border-slate-400">
                            <a
                                href="#"
                                className=" text-3xl py-1 px-3 rounded "
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="p-4  border-b border-slate-400">
                            <a
                                href="#"
                                className=" text-3xl py-1 px-3 rounded "
                            >
                                Productos
                            </a>
                        </li>
                        <li className="p-4  border-b border-slate-400">
                            <a
                                href="#"
                                className=" text-3xl py-1 px-3 rounded "
                            >
                                Contacto
                            </a>
                        </li>
                        <li className="p-4  ">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul className="flex gap-2 m-6">
                    <li>
                        <a
                            href="#"
                            className=" py-1 px-3 hover:underline underline-offset-4"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" py-1 px-3 hover:underline underline-offset-4"
                        >
                            Productos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" py-1 px-3 hover:underline underline-offset-4"
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
