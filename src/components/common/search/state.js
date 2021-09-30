import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchParams, setMoviesData } from 'redux/actions';
import { getMovies } from 'api/movies';
import { setMovieLoading, resetMoviesData, setIsLastPage } from 'redux/actions';

function useSearchState() {
    const searchParams = useSelector(state => state.searchParams);
    const dispatch = useDispatch();

    const onChange = (e) => {
        console.log('here');
        dispatch(setSearchParams({ s: e.target.value, page: 1 }));
        dispatch(resetMoviesData([]));
    };

    useEffect(() => {
        if (!searchParams.s) return;
        dispatch(setMovieLoading(true));
        const delaySearch = setTimeout(async () => {
            dispatch(setMovieLoading(true));
            if (searchParams.s.length < 4) return;
            const { Search } = await getMovies(searchParams);
            dispatch(setMoviesData(Search || []));
            dispatch(setIsLastPage(!!Search ? false : true));
            dispatch(setMovieLoading(false));
        }, 1000);

        return () => clearTimeout(delaySearch);
    }, [searchParams, dispatch]);

    return {
        onChange
    };
}

export default useSearchState;
