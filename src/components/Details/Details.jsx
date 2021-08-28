import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details(){

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return(
 
        <section className="movies">
            {movies.map(movie => {
                return (
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title} />
                        <h4>{movie.description}</h4>
                    </div>
                );
            })}
        </section>
    )
}


export default Details; 