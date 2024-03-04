import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link, useNavigate} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {BsYoutube} from "react-icons/bs";

export default function Header() {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => setSearchInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput('');
        navigate(`/videos/${searchInput}`);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Link to={'/'}>
                    <BsYoutube/>
                    <h1>Youtube</h1>
                </Link>
            </div>
            <form className={styles.search_form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='검색'
                    value={searchInput}
                    onChange={handleChange}
                />
                <button>
                    <CiSearch/>
                </button>
            </form>
        </header>
    );
}