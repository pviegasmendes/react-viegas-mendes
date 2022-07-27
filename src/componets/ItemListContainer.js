function ItemListContainer(props) {
    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-center mt-8 font-bold uppercase">
                    {props.greeting}
                </h2>
            </div>
        </>
    );
}
export default ItemListContainer;
