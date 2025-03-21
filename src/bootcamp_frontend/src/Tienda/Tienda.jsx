import React, { useState } from 'react';
import styles from './Tienda.module.css';
import Producto from './Producto';
import useProductos from '../hooks/useProductos';
import { useParams } from 'react-router-dom';
import ThreeScene from '../avatar/ThreeScene';

const Tienda = ({agregarCarrito}) => {
    const { marca } = useParams();
    const productos = useProductos();
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroTalle, setFiltroTalle] = useState('');
    const [filtroColor, setFiltroColor] = useState('');
    const [filtroMarca, setFiltroMarca] = useState('');


    const limpiarFiltros = () => {
        setFiltroCategoria('');
        setFiltroTalle('');
        setFiltroColor('');
        setFiltroMarca('');
    };

    const productosFiltrados = productos.filter(producto => {
        return (
            (!filtroCategoria || producto.categoria === filtroCategoria) &&
            (!filtroTalle || producto.talle === filtroTalle) &&
            (!filtroColor || producto.color === filtroColor) &&
            (!filtroMarca || producto.marca === filtroMarca)
        );
    });

    return (
        <div className={styles.contenedorTienda}>
            <aside className={styles.filtros}>
                <h2>Filtrar Productos</h2>

                <div className={styles.filtro}>
                    <label>Categoría:</label>
                    <select onChange={(e) => setFiltroCategoria(e.target.value)} value={filtroCategoria}>
                        <option value="">Todas</option>
                        <option value="Ropa">Ropa</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Calzado">Calzado</option>
                    </select>
                </div>

                <div className={styles.filtro}>
                    <label>Talle:</label>
                    <select onChange={(e) => setFiltroTalle(e.target.value)} value={filtroTalle}>
                        <option value="">Todos</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>

                <div className={styles.filtro}>
                    <label>Color:</label>
                    <select onChange={(e) => setFiltroColor(e.target.value)} value={filtroColor}>
                        <option value="">Todos</option>
                        <option value="Rojo">Rojo</option>
                        <option value="Azul">Azul</option>
                        <option value="Verde">Verde</option>
                        <option value="Negro">Negro</option>
                        <option value="Blanco">Blanco</option>
                    </select>
                </div>

                <div className={styles.filtro}>
                    <label>Marca:</label>
                    <select onChange={(e) => setFiltroMarca(e.target.value)} value={filtroMarca}>
                        <option value="">Todas</option>
                        <option value="Marca A">Marca A</option>
                        <option value="Marca B">Marca B</option>
                        <option value="Marca C">Marca C</option>
                        <option value="Marca D">Marca D</option>
                    </select>
                </div>

                <button className={styles.botonLimpiar} onClick={limpiarFiltros}>
                    Limpiar Filtros
                </button>

                <ThreeScene clothingModels={[{ tipo: 'cap2', scale: 0.02, position: [0, 0, 0], url: '/ropa/model2.glb' }]} mov={true} orbit={false} color={''} />
            </aside>

            <section className={styles.productos}>
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <Producto
                            key={producto.id}
                            id={producto.id}
                            imagen={producto.imagen}
                            titulo={producto.titulo}
                            descripcion={producto.descripcion}
                            marca={producto.marca}
                            precio={producto.precio}
                            agregar={() => agregarCarrito(producto)}
                        />
                    ))
                ) : (
                    <p className={styles.mensajeNoProductos}>No se encontraron productos.</p>
                )}
            </section>
        </div>
    );
};

export default Tienda;
