import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Link to={'/'}>Youtube</Link>
            </div>
            <div className={styles.search_wrap}>
                <input type="text"/>
                <button>ok</button>
            </div>
        </header>
    );
}