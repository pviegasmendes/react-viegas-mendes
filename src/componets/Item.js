import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <>
            <div className="w-80 border-solid  rounded-2xl mt-7 mb-9 shadow-xl overflow-hidden">
                <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-40 object-contain scale-95 hover:scale-100 transition-all duration-200 ease-out"
                    />
                </div>
                <h3 className="font-bold text-xl m-4 truncate w-72">
                    {product.title}
                </h3>
                <p className="font-semibold text-3xl text-violet-500 ml-4 mb-4  ">
                    $ {product.price}.-
                </p>

                <div className="p-4">
                    <Link
                        to={`/item/${product.id}`}
                        className="flex justify-center font-bold w-full p-4 mb-2 border-solid border-2 text-violet-500 border-violet-500 bg-white rounded-xl hover:bg-violet-500 hover:text-white"
                    >
                        Product Details
                    </Link>
                </div>
            </div>
        </>
    );
};

export { Item };
