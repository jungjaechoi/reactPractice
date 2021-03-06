import React from 'react';
import Movie from './components/Movie';

function App() {

  const movies = [
    {title: 'kossie coder1', year: 2001},
    {title: 'kossie coder2', year: 2002},
    {title: 'kossie coder3', year: 2003},
    {title: 'kossie coder4', year: 2004}
  ];

  const renderMovies = movies.map(movie => {
    return(
      <Movie movie = {movie} key={movie.title}/>
    );
  });
  //blog7에서 중복부분 component(Movie.js)로 빼내기
  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  );
}

export default App;
