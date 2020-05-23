import React from "react";

import '../App.css';

export default function MovieResult({movie}) {

        return (

            <div className="card-list mx-auto">

            {movie.filter(movie => movie.poster_path).map(movie => (

                <div className="card " key={movie.id}>

                    <img className="card--image img-fluid"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                    />

                    <div className="card-body center mx-auto">

                        <h3 className="card-title">{movie.title}</h3>

                        <p><small>RELEASE DATE: {movie.release_date}</small></p>

                        <p><small>RATING: {movie.vote_average}</small></p>

                        <p className="card--desc">{movie.overview}</p>
                    </div>

                </div>
            ))}
        </div>
        )
}