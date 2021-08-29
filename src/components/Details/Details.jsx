import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionChannel } from 'redux-saga/effects';
import { useHistory, useParams } from 'react-router-dom';


function Details(){
    //setup for dispatch 
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    
    //Set up to allow history between links
    let history = useHistory();

    let movieId = useParams()
    console.log('checking id', movieId.id);

    //this will send the user back to the home page onClick
    const backToList = () => {
        history.push('/');
    }

    //UseEffect is needed to run Fetch_DETAILS within component 
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: details});
    }, []);

    return(
 
        <section>
            {details.map(detail => {
                return (
                    <div key={detail.id} >
                        <img src={detail.poster} />
                        <h3>{detail.genres}</h3>
                        <h3>{detail.title}</h3>
                        <h4>{detail.description}</h4>
                        <button onClick={backToList} > BACK TO LIST</button>
                    </div>
                );
            })}
        </section>
    )
}


export default Details; 