import './App.css';
import firebase from './firebase';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
