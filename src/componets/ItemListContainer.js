import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-center mt-8 font-bold uppercase">
                    {props.greeting}
                </h2>
                <ItemCount />
            </div>
        </>
    );
}
export default ItemListContainer;
