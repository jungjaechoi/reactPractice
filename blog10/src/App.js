import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Users from './pages/Users';

function App() {

  const [movies, setMovies] = useState([]); 
  
  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return(
      <Movie
       movie = {movie} 
       key={movie.id}
       removeMovie={removeMovie}
       />
    );
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]) //setmovie에서 ...movies로 앞에 것들 받아오고 ,{}로 text 추가
  };

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route path="/movies">
              <h1>Movie List</h1>
              <MovieForm addMovie={addMovie}/>
              {renderMovies}
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
       
      </div>
    </Router>
  );
}//submit하면 addMovie함수 실행, button type은 submit

export default App;
