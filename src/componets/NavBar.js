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
                <ul className="hidden  lg:flex  gap-2 mr-4">
                    <li>
                        <Link
                            to={`/category/${categories[0]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize "
                        >
                            {categories[0]}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/category/${categories[1]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize"
                        >
                            {categories[1]}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/category/${categories[2]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize "
                        >
                            {categories[2]}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/category/${categories[3]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize"
                        >
                            {categories[3]}
                        </Link>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
                {/* Menu nobile */}
                <div className="flex gap-8">
                    <CartWidget />

                    <div
                        onClick={handleNav}
                        className="cursor-pointer block lg:hidden "
                    >
                        {!nav ? (
                            <AiOutlineClose className="text-3xl text-slate-700" />
                        ) : (
                            <AiOutlineMenu className="text-3xl text-slate-700" />
                        )}
                    </div>
                </div>

                <div
                    className={
                        !nav
                            ? "fixed left-0 top-20 w-[60%] h-screen bg-violet-100 transition-all ease-in-out"
                            : "fixed left-[-100%] transition-all ease-in-out"
                    }
                >
                    <ul className="">
                        <li className="p-4  border-b border-slate-400">
                            <Link
                                onClick={handleNav}
                                to={`/category/${categories[0]}`}
                                className=" text-3xl py-1 px-3 rounded capitalize "
                            >
                                {categories[0]}
                            </Link>
                        </li>
                        <li className="p-4  border-b border-slate-400">
                            <Link
                                onClick={handleNav}
                                to={`/category/${categories[1]}`}
                                className=" text-3xl py-1 px-3 rounded capitalize "
                            >
                                {categories[1]}
                            </Link>
                        </li>
                        <li className="p-4  border-b border-slate-400">
                            <Link
                                onClick={handleNav}
                                to={`/category/${categories[2]}`}
                                className=" text-3xl py-1 px-3 rounded  capitalize"
                            >
                                {categories[2]}
                            </Link>
                        </li>
                        <li className="p-4  border-b border-slate-400">
                            <Link
                                onClick={handleNav}
                                to={`/category/${categories[3]}`}
                                className=" text-3xl py-1 px-3 rounded capitalize"
                            >
                                {categories[3]}
                            </Link>
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
                        <Link
                            to={`/category/${categories[0]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize"
                        >
                            {categories[0]}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/category/${categories[1]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize"
                        >
                            {categories[1]}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/category/${categories[2]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize"
                        >
                            {categories[2]}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/category/${categories[3]}`}
                            className=" py-1 px-3 hover:underline underline-offset-4 capitalize"
                        >
                            {categories[3]}
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
};
export default NavBar;
