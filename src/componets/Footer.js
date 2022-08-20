import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Footer = (props) => {
    return (
        <footer className="flex bg-violet-100 gap-4 items-center px-4">
            <h4>
                <Link to={"/"}>{props.brand}</Link>&copy; 2022
            </h4>
            <NavBar type="footer" />
        </footer>
    );
};

export default Footer;
