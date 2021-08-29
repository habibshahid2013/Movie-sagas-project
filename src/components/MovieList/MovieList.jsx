import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';


function MovieList() {

    //Set up to allow history between links
    let history = useHistory();

    //Function to dispatch Fetch Details and history onClick 
    const nextPage = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: 0
        })
        history.push('/details');
    }
    //add movie page function will take you to the next onClick 
    const addMoviePage = () => {
        history.push('/addmovie');
    }

    //setup for dispatch 
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //UseEffect is needed to run Fetch_Movie within component 
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={nextPage} src={movie.poster} alt={movie.title}/>
                            <button onClick={addMoviePage}>ADD Movie</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;