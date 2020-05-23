import React, { useState } from "react";

import '../App.css';

import MovieResult from './MovieResult.js';

export default function SearchMovies()
{

    //states- input query, movies
    const [query, setQuery] = useState('');

    //create the state for movies, and update that state appropriate
    const [movie, setMovies] = useState([]);

    const searchMovie = async (e) =>
    {

        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=fe67683396a90892577548f144b7273b&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);

            const data = await res.json();

            setMovies(data.results);

        } catch (err) {
            console.error(err);
        }
    }

    return (

        <>

            <form className="form" onSubmit={searchMovie}>

                <label htmlFor="query" className="label">Search</label>

                <input type="text" className="input" name="query" placeholder="e.g American Dad" value={query} onChange={(e) => setQuery(e.target.value)}></input>

                <button className="button" type="submit">Submit</button>

            </form>

            <MovieResult movie={movie} key={movie.id}/>

        </>
    )
}