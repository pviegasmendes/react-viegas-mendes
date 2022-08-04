import {FaShoppingCart} from "react-icons/fa";

const Item = ({ product }) => {
    return (
        <>
            <div className="w-80 border-solid  rounded-2xl mt-7 mb-9 shadow-xl overflow-hidden">
                <img src={product.image} alt={product.name} />
                <h3 className=" font-bold text-xl m-4 ">{product.product}</h3>
                <p className=" font-semibold text-3xl text-violet-500 ml-4 mb-8">$ {product.price}.-</p>

                <div className="p-4">
                    <button className="flex justify-center font-bold w-full p-4 mb-2 bg-slate-100 rounded-xl hover:bg-yellow-200">
                    Product Details
                    </button>
                    <button className="flex justify-center font-bold w-full p-4 bg-green-300 rounded-xl hover:bg-green-500 hover:text-white">
                    <FaShoppingCart className="mr-2 mt-1" />Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export { Item };
