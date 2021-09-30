import { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageParams } from 'redux/actions';

function useMoviesContainerState() {
    const [openModal, setOpenModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const movies = useSelector(state => state.movies.data);
    const isLastPage = useSelector(state => state.movies.isLastPage);
    const currentPage = useSelector(state => state.searchParams.page);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();


    const onClickImage = (e) => {
        setOpenModal(true);
        setModalImage(e.target.currentSrc);
    };

    const closeModal = () => setOpenModal(false);


    const observer = useRef();

    const lastMovieRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                if (isLastPage) return;
                dispatch(setPageParams(currentPage + 1));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading]);

    return {
        openModal,
        modalImage,
        onClickImage,
        closeModal,
        movies,
        lastMovieRef,
        observer,
        loading
    };
}

export default useMoviesContainerState;
