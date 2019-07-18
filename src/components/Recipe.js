import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';

function Recipe(props){
    return(
        <div key={props.recipeId}>           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgsrc} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>{props.publisher}</Card.Subtitle>
                    <Button variant="primary"><Link to={{pathname: `/recipe/${props.recipeId}`,state:{id:props.recipeId}}}/>View Recipe</Button>
                </Card.Body>
            </Card>
                         
        </div>
    );
}

export default Recipe;