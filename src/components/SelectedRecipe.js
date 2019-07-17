import React from 'react';
import {Link} from 'react-router-dom';

class SelectedRecipe extends React.Component{

    key_a="97753ac532afaee19e10e0bd53e215e4"; 
    key_b="b0411751579e25ce6de6f05b965dba21";
    key_c="89bed7cf23be67af723ad893f9ac391f";
    key_d="a633711f01fe63ca20a580dcc42cd4eb";
    key_e="84a3fbb67dd942e588d19e2c859a3230";

    constructor(props){
        super(props);
        this.state={json:{}};
    }

    async componentWillMount(){
        console.log("Getting particular recipes");     
        try{
          var res=await fetch("https://www.food2fork.com/api/get?key="+this.key_d+"&rId="+this.props.location.state.id);
          var json = await res.json();
          console.log("json=======>",json);
          this.setState({json: json.recipe });
        }catch(err){
          alert("Oops something went wrong!");
        }
    }

    render(){
        return(            
            <div>
                <div>
                    <h2>{this.state.json.title}</h2>
                    <h4>By {this.state.json.publisher}</h4>
                    <img src={this.state.json.image_url} alt="Food"/>
                    <IngredientList list={this.state.json.ingredients}/>
                    <a href={this.state.json.source_url} target="_blank" rel="noopener noreferrer">Click here for full recipe</a>
                    </div>
                <Link to="/">Back to Home</Link>
            </div>
        );

    }
}

function IngredientList(props){
    return(
    <div>
        {props.list}
    </div>);
}

export default SelectedRecipe;