import React, { useState } from 'react';
import styles from './VerProducto.module.css';
import { useParams } from 'react-router-dom';
import useProductos from '../hooks/useProductos';
/* import Avatar from '../components/Avatar'; */
/* import usePrendas from '../usePrendas'; */
import ThreeScene from '../avatar/ThreeScene';

const VerProducto = ({ agregarCarrito }) => {
    const { id } = useParams();
    const product = useProductos(id);
    const producto=product[0];
    /* const prendas = usePrendas(); */
    const [color, setColor] = useState('');
    const [talle, setTalle] = useState('');

    if (!producto) {
        return <div>No se encontró el producto.</div>;
    }
    /* console.log(producto) */

    const handleColorChange = (e) => setColor(e.target.value);
    const handleTalleChange = (e) => setTalle(e.target.value);

    return (
        <div className={styles.verProductoContainer}>
            <h2 className={styles.titulo}>{producto.titulo}</h2>
            <div className={styles.verProducto}>
                <div className={styles.avatar}>
                    <ThreeScene clothingModels={[producto.muestra]} mov={true} orbit={false} color={color} />
                    <img
                        src={producto.imagen}
                        alt={producto.titulo}
                        className={styles.imagen}
                    />
                </div>
                <div className={styles.productoInfo}>
                    <p className={styles.descripcion}>{producto.descripcion}</p>
                    <p className={styles.marca}>Marca: <strong>{producto.marca}</strong></p>
                    <p className={styles.categoria}>Categoría: <strong>{producto.categoria}</strong></p>
                    <p className={styles.precio}>Precio: <span className={styles.precioValor}>{producto.precio}$</span></p>
                    <p className={styles.promedioPuntuacion}>
                        Promedio de Puntuación: <strong>{producto.promedioPuntuacion}</strong>
                    </p>

                    <form className={styles.formulario}>
                        <div className={styles.formGroup}>
                            <label htmlFor="color">Color:</label>
                            <select
                                id="color"
                                value={color}
                                onChange={handleColorChange}
                                className={styles.select}
                            >
                                <option value="">Seleccionar color</option>
                                <option value="#ff0000">Rojo</option>
                                <option value="#0037b5">Azul</option>
                                <option value="#000000">Negro</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="talle">Talle:</label>
                            <select
                                id="talle"
                                value={talle}
                                onChange={handleTalleChange}
                                className={styles.select}
                            >
                                <option value="">Seleccionar talle</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                    </form>

                    <div className={styles.botones}>
                        <button
                            className={styles.botonAgregar}
                            onClick={() => agregarCarrito(producto)}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );



};

export default VerProducto;
