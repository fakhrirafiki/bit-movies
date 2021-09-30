import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home';
import MoviePage from 'pages/moviePage';

function App() {
  return (
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:movieID">
        <MoviePage />
      </Route>
    </Switch>

  );
}

export default App;
