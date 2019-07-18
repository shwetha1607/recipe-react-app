import React from 'react';
import Recipe from './Recipe';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Content(props){
    var elements=[];
    console.log("again");
    try{
        if((props.recipeToRender).length!==0){
            console.log(props.recipeToRender.length);
            for(var i=0;i<props.recipeToRender.length;i++){
                elements.push(
                <Recipe
                    recipeId={props.recipeToRender[i].recipe_id}
                    title={props.recipeToRender[i].title} 
                    imgsrc={props.recipeToRender[i].image_url}
                    publisher={props.recipeToRender[i].publisher}
                    />
                );
                console.log(elements[i]);
            }
        }
        if(elements.length===0){
            return(<div><ProgressBar animated now={100}/></div>);
        }
        return (
            <div className="container">
                <div className="row">
                    {elements}
                </div>
            </div>
        );
    }catch(err){
        return(<div className="page-status">Oh no! Seems-a like-a you have-a runn-a outta API Calls-a :(</div>);
    }
}

export default Content;