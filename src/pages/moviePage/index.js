import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/movies';

function MoviePage() {
    const [movie, setMovie] = useState({});
    let { movieID } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            // const response = await getMovieById('tt8286894');
            const response = await getMovieById(movieID);
            setMovie(response);
        };

        fetchData();
    }, []);

    console.log('movie', movie);
    return (
        <div>

        </div>
    );
}

export default MoviePage;
