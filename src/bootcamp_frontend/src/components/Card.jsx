import React from 'react';
import './Cart.css';

const Cart = ({ onClothingChange, producto }) => {
    return (
        <div className="cart-container">
            <h2>Carrito</h2>
            {producto ? producto.map((produc) => (
                <div key={produc.id} className="cart-item">
                    <img src={produc.imagen} alt={produc.titulo} className="cart-item-image" />
                    <div className="cart-item-details">
                        <h3>{produc.titulo}</h3>
                        <button onClick={() => onClothingChange(produc.tipo)}>Seleccionar</button>
                    </div>
                </div>
            )) : <p>El carrito está vacío.</p>}
            <button className="butonCompra">Comprar</button>
        </div>
    );
};

export default Cart;
