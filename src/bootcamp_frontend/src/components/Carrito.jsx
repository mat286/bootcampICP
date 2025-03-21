import React, { useState } from 'react';
import styles from './Carrito.module.css';
import { FaTrashAlt } from 'react-icons/fa';

function Carrito({ carrito, eliminarProducto, actualizarCantidad }) {
    const [walletAddress, setWalletAddress] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formapago, setFormaPago] = useState('eth');

    const total = carrito.reduce((acc, producto) => {
        return acc + Number(producto.precio) * Number(producto.cantidad);
    }, 0);


    // Función para conectar la wallet utilizando la API de Ethereum (ej. MetaMask)
    const conectarWallet = async () => {
        if (window.ethereum) {
            try {
                setIsConnecting(true);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                setErrorMessage('');
            } catch (error) {
                setErrorMessage('Error al conectar con la wallet');
            } finally {
                setIsConnecting(false);
            }
        } else {
            setErrorMessage('No se encontró una wallet compatible');
        }
    };

    const handlePagoChange = (e) => {
        setFormaPago(e.target.value);
    };

    return (
        <div className={styles.carrito}>
            <h2>🛒 Carrito Cripto</h2>

            <div className={styles.listaProductos}>
                {carrito.length > 0 ? (
                    carrito.map((producto) => (
                        <div key={producto.id} className={styles.producto}>
                            {producto.imagen && (
                                <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
                            )}
                            <div className={styles.detalles}>
                                <h3>{producto.nombre}</h3>
                                <p className={styles.precio}>Ξ {Number(producto.precio).toFixed(4)} ETH</p>
                                <div className={styles.cantidad}>
                                    <button
                                        onClick={() => actualizarCantidad(producto.id, Number(producto.cantidad) - 1)}
                                        disabled={Number(producto.cantidad) === 1}
                                    >
                                        -
                                    </button>
                                    <span>{Number(producto.cantidad)}</span>
                                    <button onClick={() => actualizarCantidad(producto.id, Number(producto.cantidad) + 1)}>+</button>
                                </div>
                                <p className={styles.subtotal}>
                                    Subtotal: Ξ {(Number(producto.precio) * Number(producto.cantidad)).toFixed(4)} ETH
                                </p>
                            </div>
                            <button className={styles.eliminar} onClick={() => eliminarProducto(producto.id)}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className={styles.vacio}>Tu carrito está vacío 🛸</p>
                )}
                <div className={styles.total}>
                    <h3>Total: Ξ {total.toFixed(4)} ETH</h3>
                </div>
            </div>

            <div className={styles.formasPago}>
                <h3>💰 Pagar con</h3>
                <select value={formapago} onChange={handlePagoChange}>
                    <option value="eth">Ethereum (ETH)</option>
                    <option value="btc">Bitcoin (BTC)</option>
                    <option value="usdt">USDT (Tether)</option>
                </select>
            </div>

            <div className={styles.conectarWallet}>
                {walletAddress ? (
                    <p className={styles.walletInfo}>Wallet conectada: {walletAddress}</p>
                ) : (
                    <button onClick={conectarWallet} disabled={isConnecting} className={styles.buttonWallet}>
                        {isConnecting ? 'Conectando...' : 'Conectar Wallet'}
                    </button>
                )}
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </div>

            <button className={styles.buttonPago} disabled={!walletAddress || carrito.length === 0}>
                💳 Pagar con Wallet
            </button>
        </div>
    );
}

export default Carrito;
