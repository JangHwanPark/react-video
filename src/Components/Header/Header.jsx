import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Link to={'/'}>Youtube</Link>
            </div>
            <SearchBar/>
        </header>
    );
}