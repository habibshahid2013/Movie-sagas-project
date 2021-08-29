import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {



    

    return (

        <>
        <h1>ADD MOVIES 🎥</h1>
        <form onSubmit={handleSubmit}></form>
        <input 
            type="text"
            placeholder="movie title"
            onChange=""
            value
            required></input>
        <input
            type="text"
            placeholder="movie poster url"
            onChange={}
            value={}
            required>URL</input>
        <textarea></textarea>
        <textarea></textarea>

        </>
    )
}


export default AddMovie;