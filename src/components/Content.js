import React from 'react';
import Recipe from './Recipe';

function Content(props){
    var elements=[];
    console.log("again");
    try{
        if((props.recipeToRender).length!==0){
            console.log(props.recipeToRender);
            for(var i=0;i<10;i++){
                elements.push(<Recipe
                    recipeId={props.recipeToRender[i].recipe_id}
                    title={props.recipeToRender[i].title} 
                    imgsrc={props.recipeToRender[i].image_url}
                    />);
                console.log(elements[i]);
            }
        }
        if(elements.length===0){
            return(<div>
                Loading.......
                </div>);
        }
        return (
            <div>
                {elements}
            </div>
        );
    }catch(err){
        return(<div><h3>Oh no! Seems-a like-a you have-a runn-a outta API Calls-a</h3></div>);
    }
}

export default Content;