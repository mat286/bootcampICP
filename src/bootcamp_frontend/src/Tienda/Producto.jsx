import React from 'react';
import styles from './Producto.module.css';
import { Link } from 'react-router-dom';

const Producto = ({ id, imagen, titulo, descripcion, marca, precio, agregar }) => {
    return (
        <div className={styles.producto}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <img src={imagen} alt={titulo} className={styles.imagen} />
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.marca}>
                Precio: <span className={styles.precio}>{precio}$</span>
            </p>
            <div className={styles.botones}>
                <button className={styles.botonAgregar} onClick={agregar}>Agregar al carrito</button>
                <Link to={`/producto/${id}`} className={styles.botonVer}>
                    Ver
                </Link>
            </div>
        </div>
    );
};

export default Producto;
