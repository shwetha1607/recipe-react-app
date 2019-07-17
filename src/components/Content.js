import React from 'react';
import Recipe from './Recipe';

function Content(props){
    var elements=[];
    console.log("again");
    if((props.recipeToRender).length!==0){
        console.log(props.recipeToRender);
        for(var i=0;i<10;i++){
            elements.push(<Recipe title={props.recipeToRender[i].title} 
                img_src={props.recipeToRender[i].img_src}
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
}

export default Content;