import React from 'react';
import './style.scss';
import Popup from 'reactjs-popup';
import MovieBox from './movieBox';
import useMoviesContainerState from './state';

function MoviesContainer() {
    const {
        openModal,
        modalImage,
        onClickImage,
        closeModal,
        movies,
        lastMovieRef,
        loading
    } = useMoviesContainerState();

    return (
        <div className="movies">
            {movies?.length === 0 && !loading && (
                <p className="movies__nothing"><i>Search your favorite movies...</i></p>
            )}

            <div className='movies__container'>
                {movies?.map((movie, index) => {
                    if ((movies.length === index + 1) && (movies.length > 5)) {
                        return (
                            <MovieBox
                                key={movie.imdbID}
                                movie={movie}
                                onClickImage={onClickImage}
                                ref={lastMovieRef}
                            />);
                    } else {
                        return <MovieBox
                            key={movie.imdbID}
                            movie={movie}
                            onClickImage={onClickImage}
                        />;
                    }
                })}
            </div>

            <div>
                <div className="loading"><i>{loading && 'Loading...'}</i></div>
            </div>
            <Popup open={openModal} onClose={closeModal}>
                <img src={modalImage} alt="" />
            </Popup>
        </div>
    );
}

export default MoviesContainer;
