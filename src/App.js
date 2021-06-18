import './App.css';
import firebase from './firebase';
import axios from 'axios';
import {useState, useEffect} from 'react';
import MovieForm from './MovieForm';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();
      console.log(data);
      const movieArray = [];

      for (let key in data) {
        movieArray.push(data[key]);
      }
      // Update state with the new movieArray
      setMovies(movieArray);
    })
  }, [])

  return (
    <div className="App">
      <ul>
        {movies.map((movie) => {
          return (
            <li>
              <p>{movie}</p>
            </li>
          )
        })}
      </ul>
      <MovieForm />
    </div>
  );
}

export default App;
