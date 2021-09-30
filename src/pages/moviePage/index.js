import React from 'react';
import { Link } from 'react-router-dom';
import useMoviePageState from './state';
import './style.scss';
import { logoTransparent } from 'assets';

function MoviePage() {
    const { loading, movie } = useMoviePageState();

    const { Poster, Title, Year, Plot, Actors, Writer, Genre } = movie;

    return (
        <div className="MoviePage">
            <Link to="/">
                <img className="MoviePage__logo" src={logoTransparent} alt="logo" />
            </Link>
            <p className="MoviePage__back">
                <Link to="/"><span>{'< BACK'}</span></Link>
            </p>
            <div>

            </div>
            <div className="MoviePage__pane">
                {loading && (
                    <p className="loading">Loading...</p>
                )}
                {!loading && (
                    <>
                        <img className="MoviePage__poster" src={Poster} alt={Title} />
                        <div className="MoviePage__detail">
                            <h3 className="MoviePage__detail--title">{Title}</h3>
                            <p className="MoviePage__detail--year">{Genre} - {Year}</p>
                            <p className="MoviePage__detail--head">Synopsis:</p>
                            <div className="MoviePage__detail--plot">
                                <i>{Plot}</i>
                            </div>

                            <p className="MoviePage__detail--head">Actors:</p>
                            <div className="MoviePage__detail--plot">
                                <i>{Actors}</i>
                            </div>

                            <p className="MoviePage__detail--head">Writer:</p>
                            <div className="MoviePage__detail--plot">
                                <i>{Writer}</i>
                            </div>
                        </div>
                    </>)}
            </div>

        </div>
    );
}

export default MoviePage;
