import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        

        <nav>
          <ul>
            <li>
              <Link to="/">MovieList</Link>
            </li>
            <li>
              <Link to="/details">details</Link>
            </li>
            <li>
              <Link to="/addmovie">Add Movies</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details" exact>
          <Details />
        </Route>

        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
