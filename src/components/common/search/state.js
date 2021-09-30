import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesData } from 'redux/actions';
import { getMovies } from 'api/movies';
import { setMovieLoading, resetMoviesData, setIsLastPage, setSearchParams } from 'redux/actions';

function useSearchState() {
    const [display, setDisplay] = useState(true);
    const [autoCompliteList, setOptions] = useState([]);
    const searchParams = useSelector(state => state.searchParams);
    const dispatch = useDispatch();

    const updateInputByAuto = movie => {
        dispatch(resetMoviesData([]));
        dispatch(setSearchParams({ s: movie }));
        setDisplay(false);
    };

    const onChange = ({ target: { value } }) => {
        setDisplay(true);
        dispatch(setSearchParams({ s: value }));
        dispatch(resetMoviesData([]));
        if (value === "") {
            setDisplay(false);
        }
    };

    const onClickEnter = (e) => {
        if (e.charCode === 13) {
            dispatch(setSearchParams({ s: searchParams.s.trim() }));
            setDisplay(false);
        }
    };

    useEffect(() => {
        if (!searchParams.s) return dispatch(setMovieLoading(false));
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

    useEffect(() => {
        const fetchOptions = async () => {
            const { Search } = await getMovies({ s: 'batman', ...searchParams });
            if (Search?.length > 0) {
                setOptions(prev => [...Search]);
            }
        };
        fetchOptions();
    }, [searchParams]);

    useEffect(() => {
        dispatch(resetMoviesData([]));
        setDisplay(false);
    }, [dispatch]);

    return {
        searchParams,
        updateInputByAuto,
        autoCompliteList,
        onChange,
        display,
        onClickEnter
    };
}

export default useSearchState;
