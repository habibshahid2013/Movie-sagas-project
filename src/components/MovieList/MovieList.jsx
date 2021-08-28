import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {
    let history = useHistory();

    const nextPage = () => {
        history.push('/details');
    }

    const addMoviePage = () => {
        history.push('/addmovie');
    }

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <button onClick={nextPage}>Details</button>
                            <button onClick={addMoviePage}>ADD Movie</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;