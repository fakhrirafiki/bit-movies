import React from 'react';
import { FaSearch } from "react-icons/fa";


import { logo } from 'assets';
import './style.scss';
import useSearchState from './state';


function Search() {
    const { onChange } = useSearchState();

    return (
        <div className="search">
            <img className="search__logo" src={logo} alt="logo" />
            <div className="search__inputContent">
                <input onChange={onChange} className="search__input" />
                <div className="search__icon">
                    <FaSearch />
                </div>
            </div>
        </div>
    );
}

export default Search;
