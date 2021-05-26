import { Link, Route } from 'react-router-dom';
import MovieCatalogue from './components/MovieCatalogue';
import MovieInfo from './components/MovieInfo';

const App = () => {
  return (
    <div>
      <header>
        <h1>Hackflix</h1>
      </header>
      <Route exact path="/" component={MovieCatalogue} />
      <Route path="/:movieId" component={MovieInfo} />
    </div>
  );
};

export default App;
