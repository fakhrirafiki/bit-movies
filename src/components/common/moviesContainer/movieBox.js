import React from 'react';
import { Link } from 'react-router-dom';

const MovieBox = React.forwardRef(({ movie, onClickImage }, ref) => {
    return (
        <div ref={ref} className="movies__pane" >
            <img
                className="movies__img"
                src={movie.Poster} alt=""
                data={movie.Poster}
                onClick={onClickImage}
            />
            <div className="movies__detail">
                <p className="movies__type">{movie.Type}</p>
                <Link to={`/${movie.imdbID}`}>
                    <h3 className="movies__title">
                        {movie.Title.length > 30 ? `${movie.Title.substring(0, 28)}...` : movie.Title}
                    </h3>
                </Link>
                <p className="movies__year">{movie.Year}</p>
            </div>
        </div>
    );
});

export default MovieBox;
