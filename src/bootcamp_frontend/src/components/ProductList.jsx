// src/components/ProductList.js 
import React from 'react';
import './ProductList.css';

const ProductList = ({ onClothingChange, armarioP }) => {
  return (
    <div className="wardrobe-container">
      <h2>Armario</h2>
      {/* Lista de productos ya comprados */}
      {armarioP ? armarioP.map((produc) => (
        <div key={produc.id} className="wardrobe-item">
          <img src={produc.imagen} alt={produc.titulo} className="wardrobe-item-image" />
          <div className="wardrobe-item-details">
            <h3>{produc.titulo}</h3>
            <button onClick={() => onClothingChange(produc.tipo)}>Seleccionar</button>
          </div>
        </div>
      )) : <p>El armario está vacío.</p>}
    </div>
  );
};

export default ProductList;
