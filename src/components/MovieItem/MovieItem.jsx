import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieItem.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
        <Card>
        <CardContent>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={nextPage} src={movie.poster} alt={movie.title} />
        </div>
        </CardContent>
            <Button variant="contained" color="secondary" onClick={addMoviePage}>ADD Movie</Button>
        </Card>
        
    )
}

export default MovieItem; 