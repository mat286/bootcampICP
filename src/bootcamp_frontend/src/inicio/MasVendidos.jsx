import React from 'react';
import Producto from '../Tienda/Producto.jsx';
import useProductos from '../hooks/useProductos';
import styles from './MasVendidos.module.css';
import { Link } from 'react-router-dom';

const MasVendidos = ({ handleProduct }) => {
  const productos = useProductos();
  const masVendidos = productos.slice(0, 3);

  return (
    <div className={styles.masVendidos}>
      <h2>Más Vendidos</h2>
      <div className={styles.productos}>
        {masVendidos.map(producto => (
          <Producto
            key={producto.id}
            id={producto.id}
            imagen={producto.imagen}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            marca={producto.marca}
            precio={producto.precio}
          />
        ))}
      </div>
      <div className={styles.verMas}>
        <Link to={`/tienda`} className={styles.boton}>
          Ver Más
        </Link>
      </div>
    </div>
  );
};

export default MasVendidos;
