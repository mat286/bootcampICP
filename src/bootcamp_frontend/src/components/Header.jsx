import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.logoLink}>Avatar</Link>
            </div>
            <nav className={styles.navigation}>
                <Link to="/tienda" className={styles.iconLink}>

                    <span>Tienda</span>
                </Link>
                <Link to="/carrito" className={styles.iconLink}>

                    <span>Carrito</span>
                </Link>
                <Link to="/armario" className={styles.iconLink}>

                    <span>Armario</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
