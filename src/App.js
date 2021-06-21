import './App.css';
import firebase from './firebase';
import axios from 'axios';
import {useState, useEffect} from 'react';
import MovieForm from './MovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState('');
  const dbRef = firebase.database().ref();

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    dbRef.push(userInput);
    setTimeout(() => {
      setUserInput('');

    }, 1000);
    console.log(userInput);
    // event.target.reset();
  }

  const removeMovie = (movieId) => {
    dbRef.child(movieId).remove();
  }

  useEffect(() => {
    // const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();
      console.log(data);
      const movieArray = [];

      for (let key in data) {
        movieArray.push({key: key, name: data[key]});
      }
      // Update state with the new movieArray
      setMovies(movieArray);
    })
  }, [])

  return (
    <div className="App">
      <MovieForm
        // handleChange={() => {handleChange()}}
        handleChange={handleChange}
        value={userInput}
        handleClick={handleClick}
        // handleClick={() => {handleClick()}}
      />
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.key}>
              <p>{movie.name}</p>
              <button onClick={() => removeMovie(movie.key)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

  /* onClick={() => props.removeMovie(movieId)} */


export default App;
