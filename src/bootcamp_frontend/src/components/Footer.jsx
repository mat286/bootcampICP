// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contenido}>
                <div className={styles.informacion}>
                    <p></p>
                </div>
                <div className={styles.enlaces}>
                    <a href="/contacto" className={styles.enlace}>Contacto</a>
                    <a href="/politica-privacidad" className={styles.enlace}>Política de Privacidad</a>
                    <a href="/terminos-condiciones" className={styles.enlace}>Términos y Condiciones</a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
