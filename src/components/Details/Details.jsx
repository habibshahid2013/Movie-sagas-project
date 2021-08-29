import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionChannel } from 'redux-saga/effects';
import { useHistory, useParams } from 'react-router-dom';
import './Details.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';


function Details(){
    //setup for dispatch 
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    
    //Set up to allow history between links
    let history = useHistory();

    let movieId = useParams()
    console.log('checking id', movieId)

    //this will send the user back to the home page onClick
    const backToList = () => {
        history.push('/');
    }

    //UseEffect is needed to run Fetch_DETAILS within component 
    useEffect(() => {
        dispatch({ type: 'SET_ID', payload: details});
    }, []);

    return(
 
        <section>
            {details.map(detail => {
                return (
                    <Card>
                    <CardContent>
                    <div key={detail.id} >
                        <h3>{detail.title}</h3>
                        <img src={detail.poster} />
                        <h3>{detail.genres}</h3>
                        <h4>{detail.description}</h4>
                        <Button variant="contained" color="secondary" onClick={backToList} > BACK TO LIST</Button>
                    </div>
                    </CardContent>
                    </Card>
                );
            })}
        </section>
    )
}


export default Details; 