import React, {useState} from 'react';
import styles from "../Header/Header.module.css";
import {useNavigate} from "react-router-dom";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => setSearchInput(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput('');
        navigate(`/videos/${searchInput}`);
    }

    return (
        <form className={styles.search_wrap} onSubmit={handleSubmit}>
            <input type="text" value={searchInput} onChange={handleChange}/>
            <button>ok</button>
        </form>
    );
}