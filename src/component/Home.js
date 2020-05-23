import React from 'react';
import SearchMovies from './SearchMovies';
import '../App.css';

function Home() {
  return (
    <div className="container">
     <h1 className="title">Movie Search</h1>
     <SearchMovies/>
    </div>
  );
}

export default Home;
