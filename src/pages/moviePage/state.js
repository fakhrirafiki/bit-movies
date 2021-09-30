import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/movies';

function useMoviePageState() {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    let { movieID } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            // const response = await getMovieById('tt8286894');
            setLoading(true);
            const response = await getMovieById(movieID);
            setMovie(response);
            setLoading(false);
        };

        fetchData();
    }, [movieID]);
    return {
        movie, loading
    };
}

export default useMoviePageState;
