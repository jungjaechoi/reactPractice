import logo from './logo.svg';
import './App.css';

function App() {
  const movies = [
    {title: "kossie coder1", year: 2001},
    {title: "kossie coder2", year: 2001},
    {title: "kossie coder3", year: 2001}
  ];

  const renderMovies = movies.map(movie => { //movies의 각 원소를 해당 return으로 바꿈
    return(
      <div className="movie" key = {movie.title}> 
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );//각 원소마다 key 값을 지정해줘야 react 동작시 개발자가 원하는대로 동작한다.
  });
  

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
