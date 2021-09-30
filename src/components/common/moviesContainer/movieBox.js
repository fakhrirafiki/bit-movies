import React from 'react';

const MovieBox = React.forwardRef(({ movie, onClickImage }, ref) => {
    return (
        <div ref={ref} className="movies__pane" key={movie.imdbID}>
            <img
                className="movies__img"
                src={movie.Poster} alt=""
                data={movie.Poster}
                onClick={onClickImage}
            />

            <div className="movies__detail">
                <p className="movies__type">{movie.Type}</p>
                <h3 className="movies__title">{movie.Title}</h3>
                <p className="movies__year">{movie.Year}</p>
            </div>
        </div>
    );
});

export default MovieBox;
