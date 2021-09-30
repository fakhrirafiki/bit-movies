import Search from 'components/common/search';
import MoviesContainer from 'components/common/moviesContainer';

function Homepage() {
    return (
        <div >
            <Search />
            <div className="movies">
                <MoviesContainer />
            </div>
        </div>
    );
}

export default Homepage;
