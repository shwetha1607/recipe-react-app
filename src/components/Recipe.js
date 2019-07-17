import React from 'react';

function Recipe(props){
    return(
        <div>
            <img src={props.imgsrc} alt="Imagine delicious pic of food here."/>
            <p>{props.title}</p>
        </div>
    );
}

export default Recipe;