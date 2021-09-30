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
        display,
        onClickEnter
    } = useSearchState();

    return (
        <div className="search">
            <img className="search__logo" src={logo} alt="logo" />
            <div className="search__inputContent">
                <input value={searchParams.s} onChange={onChange} onKeyPress={onClickEnter} className="search__input" />
                <div className="search__icon">
                    <FaSearch />
                </div>
                {display && (
                    <div className="search__autoContainer">
                        {autoCompliteList
                            .map((value, i) => {
                                return (
                                    <div
                                        onClick={() => updateInputByAuto(value.Title)}
                                        className="search__autoCompliteList"
                                        key={i}
                                        tabIndex="0"
                                    >
                                        <span>{value.Title}</span>
                                        <img className="search__autoCompliteImage" src={value.Poster} alt="movie" />
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
