import React from 'react';
import styles from './InformacionAdicional.module.css';

const InformacionAdicional = () => {
    return (
        <div className={styles.informacionAdicional}>
            <h2>Información Importante</h2>
            <ul>
                <li>📦 Realizamos envíos a todo el país.</li>
                <li>💳 Aceptamos todos los medios de pago.</li>
                <li>🔄 Realizamos cambios en los primeros 7 días tras la compra.</li>
            </ul>
        </div>
    );
};

export default InformacionAdicional;
