import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';


function MovieList() {

    
    //setup for dispatch 
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //UseEffect is needed to run Fetch_Movie within component 
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, []);

    return (
        <main>
            <h1>📰MovieList📰</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                    <MovieItem 
                    movie={movie}
                    /> 
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;