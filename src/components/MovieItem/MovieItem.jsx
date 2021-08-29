import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieItem ({movie}){


    //setup for dispatch 
    const dispatch = useDispatch();

    //Set up to allow history between links
    let history = useHistory();

    //Function to dispatch Fetch Details and history onClick 
    const nextPage = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })
        history.push('/details');
    }

    //add movie page function will take you to the next onClick 
    const addMoviePage = () => {
        history.push('/addmovie');
    }
    return(

        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={nextPage} src={movie.poster} alt={movie.title} />
            <button onClick={addMoviePage}>ADD Movie</button>
        </div>
    )
}

export default MovieItem; 