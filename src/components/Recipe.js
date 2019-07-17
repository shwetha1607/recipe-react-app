import React from 'react';
import {Link} from 'react-router-dom';

function Recipe(props){
    return(
        <div key={props.recipeId}>
            <img src={props.imgsrc} alt="Imagine delicious pic of food here."/>
            <p>{props.title}</p>
            <Link to={{pathname: `/recipe/${props.recipeId}`,state:{id:props.recipeId}}}>View Recipe</Link>
        </div>
    );
}

export default Recipe;