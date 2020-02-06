import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import './App.css';

import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

import { movieReducer as reducer } from './reducers/movieReducer';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Studio Ghibli Films</h1>
        <MovieForm />
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
