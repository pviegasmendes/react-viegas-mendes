const Checkout = () => {
    return (
        <div>
            <h2>Complete sus datos</h2>
            <form className="flex flex-col gap-2">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="mail" placeholder="Correo Electronico" />
                <input type="text" placeholder="Domicilio" />
                <input type="submit" value="Terminar compra" />
            </form>
        </div>
    );
};
export default Checkout;
