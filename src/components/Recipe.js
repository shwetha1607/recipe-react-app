import React from 'react';

class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state='';
    }
    render(){
        return(
        <div>
            <img src={this.props.imgsrc} alt="Imagine delicious pic of food here."/>
            <p>{this.props.title}</p>
        </div>
        );
    }
}

export default Recipe;