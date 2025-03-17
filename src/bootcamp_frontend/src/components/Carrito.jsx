import React, { useState } from 'react';
import styles from './Carrito.module.css';

function Carrito({ carrito, eliminarProducto, actualizarCantidad }) {
    const [formapago, setFormaPago] = useState('tarjeta');
    const [datosEnvio, setDatosEnvio] = useState({
        direccion: '',
        ciudad: '',
        codigoPostal: '',
    });

    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    console.log(carrito, total)

    const handlePagoChange = (e) => {
        setFormaPago(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosEnvio((prevDatos) => ({
            ...prevDatos,
            [name]: value,
        }));
    };

    return (
        <div className={styles.carrito}>
            <h2>Carrito de Compras</h2>
            <div className={styles.listaProductos}>
                <h3>Productos en el carrito</h3>
                <ul>
                    {carrito.map((producto) => (
                        <li key={producto.id} className={styles.producto}>
                            <span className={styles.nombre}>{producto.nombre}</span>
                            <span className={styles.precio}>${producto.precio.toFixed(2)}</span>
                            <span className={styles.cantidad}>
                                x {producto.cantidad}
                                <button onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}>+</button>
                                <button onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)} disabled={producto.cantidad === 1}>-</button>
                            </span>
                            <span className={styles.subtotal}>Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</span>
                            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
                <div className={styles.total}>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            </div>
            <div className={styles.formasPago}>
                <h3>Forma de Pago</h3>
                <select value={formapago} onChange={handlePagoChange}>
                    <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                    <option value="paypal">PayPal</option>
                    <option value="transferencia">Transferencia Bancaria</option>
                </select>
            </div>
            <div className={styles.datosEnvio}>
                <h3>Datos de Envío</h3>
                <form>
                    <label>
                        Dirección:
                        <input
                            type="text"
                            name="direccion"
                            value={datosEnvio.direccion}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Ciudad:
                        <input
                            type="text"
                            name="ciudad"
                            value={datosEnvio.ciudad}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Código Postal:
                        <input
                            type="text"
                            name="codigoPostal"
                            value={datosEnvio.codigoPostal}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </form>
            </div>
            <button className={styles.button}>Finalizar Compra</button>
        </div>
    );
}

export default Carrito;
