import React from 'react';
import {Link} from 'react-router-dom';

/*Make this a class and add a function use API to get recipe details using the id passed using {props.location.state.id}. 
Then render all required stuff*/ 
function SelectedRecipe(props){
    return(
        <div>
            <h1>SelectedRecipe</h1>
            <p>{props.location.state.id}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default SelectedRecipe;