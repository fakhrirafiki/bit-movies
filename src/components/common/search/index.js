import React from 'react';
import { FaSearch } from "react-icons/fa";
import useSearchState from './state';

import { logo } from 'assets';
import './style.scss';

function Search() {
    const {
        searchParams,
        updateInputByAuto,
        autoCompliteList,
        onChange,
        display
    } = useSearchState();

    return (
        <div className="search">
            <img className="search__logo" src={logo} alt="logo" />
            <div className="search__inputContent">
                <input value={searchParams.s} onChange={onChange} className="search__input" />
                <div className="search__icon">
                    <FaSearch />
                </div>
                {display && (
                    <div className="autoContainer">
                        {autoCompliteList
                            .map((value, i) => {
                                return (
                                    <div
                                        onClick={() => updateInputByAuto(value.Title)}
                                        className="option"
                                        key={i}
                                        tabIndex="0"
                                    >
                                        <span>{value.Title}</span>
                                        <img src={value.Poster} alt="pokemon" />
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
