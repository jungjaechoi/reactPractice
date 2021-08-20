import React, {useState} from 'react';
import InputField from './InputField';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
      setMovieTitle('');
      setMovieYear('');
    }

    const validateFrom = () => {
      let validated = true;
      resetError();
      if(!movieTitle){
        setTitleError('영화제목을 넣어주세요');
        validated = false;
      }
      if(!movieYear){
        setYearError('개봉년도를 넣어주세요');
        validated = false;
      }
      return validated;
    }

    const resetError = () => {
      setTitleError('');
      setYearError('');
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if(validateFrom()){
        addMovie({

          id: Date.now(),
          title: movieTitle,
          year: movieYear,
        });
        resetError();
        setMovieTitle('');
        setMovieYear('');
      }     
     
       
    };
  
    return (
        <form onSubmit={onSubmit}>
          <InputField
            type = 'text'
            value = {movieTitle}
            placeholder = "영화제목"
            onChange = {e=>setMovieTitle(e.target.value)}
            errorMessage = {titleError}
          /> 
          {/* <input 
            type="text"
            value={movieTitle}
            placeholder="영화제목"
            onChange={e=> setMovieTitle(e.target.value)}/>
            <br/>
            <div style = {{color:'red'}}>{titleError}</div> */}
            <InputField
            type = 'number'
            value = {movieYear}
            placeholder = "개봉년도"
            onChange = {e=> setMovieYear(e.target.value)}
            errorMessage = {yearError}
          /> 
            {/* <input 
            type="number"
            value={movieYear}

            placeholder="개봉년도"
            onChange={e=> setMovieYear(e.target.value)}/>
            <br/> 
            <div style = {{color:'red'}}>{yearError}</div> */}
            <button type="submit">영화추가</button>
        </form>
    );
};

export default MovieForm;