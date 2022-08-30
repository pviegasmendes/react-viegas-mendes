import { useState } from "react";
import CartWidget from "./CartWidget";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = ({ type }) => {
    const [nav, setNav] = useState(true);

    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
    ];

    const handleNav = () => {
        setNav(!nav);
    };

    if (type === "header") {
        return (
            <nav>
                <ul className="hidden lg:flex gap-2 mr-4">
                    <li>
                        {categories.map((element, index) => {
                            return (
                                <Link
                                    to={`/category/${element}`}
                                    key={index}
                                    className="py-1 px-3 hover:underline underline-offset-4 uppercase"
                                >
                                    {element}
                                </Link>
                            );
                        })}
                    </li>
                    <CartWidget />
                </ul>
                {/* Menu nobile */}
                <div className="flex gap-8">
                    <div className="lg:hidden">
                        <CartWidget />
                    </div>
                    <div
                        onClick={handleNav}
                        className="cursor-pointer block lg:hidden "
                    >
                        {!nav ? (
                            <div className="flex gap-4">
                                <AiOutlineClose className="text-3xl text-slate-700" />
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <AiOutlineMenu className="text-3xl text-slate-700" />
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className={
                        !nav
                            ? "fixed left-0 top-20 w-[80%] h-screen bg-violet-100 transition-all ease-in-out"
                            : "fixed left-[-100%] transition-all ease-in-out"
                    }
                >
                    <ul>
                        <li className="flex flex-col gap-6">
                            {categories.map((element, index) => {
                                return (
                                    <Link
                                        onClick={handleNav}
                                        to={`/category/${element}`}
                                        key={index}
                                        className=" text-xl py-1 px-4 rounded uppercase border-b border-slate-400"
                                    >
                                        {element}
                                    </Link>
                                );
                            })}
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
                        {categories.map((element, index) => {
                            return (
                                <Link
                                    to={`/category/${element}`}
                                    key={index}
                                    className="py-1 px-3 text-sm hover:underline underline-offset-4 uppercase"
                                >
                                    {element}
                                </Link>
                            );
                        })}
                    </li>
                </ul>
            </nav>
        );
    }
};
export default NavBar;
