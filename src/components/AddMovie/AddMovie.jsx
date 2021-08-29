import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';


function AddMovie() {

    //Set up for the history
    const history = useHistory();

    //Set up for the dispatch
    const dispatch = useDispatch();

    //added useStates for the inputs 
    const [addMovie, setAddMovie] = useState("")
    const [addUrl, setAddUrl] = useState("")
    const [addDescription, setAddDescription] = useState("")
    const [addGenre, setAddGenre] = useState("")


    let stateObject = { movieTitle: addMovie, poster: addUrl, description: addDescription, genre_id: addGenre};

    //useEffect is enabled to to make sure FETCH_GENRE is initiated on start
    useEffect(() => {
        //dispatch over data in Saga
        dispatch({
            type: 'FETCH_GENRE',
        })
    }, []);

    //this function is to run the event of the input
    const handleSubmit = event => {
        event.preventDefault();

        if (addMovie.keys === ''){
            alert('add proper input')
        }
        dispatch({
            type: 'ADD_MOVIE',
            payload: stateObject
        });
        history.push('/')

    }
    //this function will cancel the add movie and take you back to the home page
    const cancel = () => {
        history.push('/')
    }


    return (
        <div>
            
        <h1>ADD MOVIES 🎥</h1>
        <form onSubmit={handleSubmit}></form>
        <input 
            required
            type="text"
            placeholder="movie title"
            onChange={(event) => setAddMovie({ ...addMovie, movieTitle: event.target.value })}
            value={addMovie.movieTitle}
             />
        <input
            required
            type="text"
            placeholder="movie poster url"
                onChange={(event) => setAddUrl({ ...addUrl, poster: event.target.value})}
            value={addMovie.poster}
             />
       <select 
        required
        name="genre"
                onChange={(event) => setAddGenre({ ...addGenre, genre: event.target.value })}
        value={addMovie.genre_id}>
            <option selected value=""> select here</option>
            <option value="1">Adventure</option>
            <option value="2">Animated</option>
            <option value="3">Biographical</option>
            <option value="4">Comedy</option>
            <option value="5">Disaster</option>
            <option value="6">Drama</option>
            <option value="7">Epic</option>
            <option value="8">Fantasy</option>
            <option value="9">Musical</option>
            <option value="10">Romantic</option>
            <option value="11">Science Fiction</option>
            <option value="12">Space-Opera</option>
            <option value="13">Superhero</option>
        </select>
        <textarea
            required
            cols="40"
            rows="6"
            name="description"
            placeholder="Descriptions"
            onChange={(event) => setAddDescription({ ...addDescription, description: event.target.value })}
            value={addMovie.description}

        />
        <br />
        <input type="submit" value="submit" />
        <button onClick={cancel}>Cancel</button>
        <form/>
        </div>
    );
 }
      


export default AddMovie;