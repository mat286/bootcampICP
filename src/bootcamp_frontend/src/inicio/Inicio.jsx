import React, { useState, useEffect } from 'react';
import MasVendidos from './MasVendidos.jsx';
import InformacionAdicional from './InformacionAdicional.jsx';
import styles from './Inicio.module.css';

const Inicio = (/* { handleProduct } */) => {
    /* const [productos, setProductos] = useState(handleProduct()); */

    return (
        <div className={styles.inicio}>
            <h1>Bienvenido a nuestra tienda</h1>


            <div className={styles.section}>
                {/* <h2>Más Vendidos</h2> */}
                <MasVendidos /* handleProduct={handleProduct} *//>
            </div>

            <div className={styles.section}>
                <InformacionAdicional />
            </div>
        </div>
    );
};

export default Inicio;
