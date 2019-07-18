import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';

class SelectedRecipe extends React.Component {


    constructor(props) {
        super(props);
        this.state = { json: null };
        console.log("Sel");
        this.key=process.env.REACT_APP_API_KEY;
    }

    async componentDidMount() {
        console.log("Getting particular recipes");
        try {
            var res = await fetch("https://www.food2fork.com/api/get?key=" + this.key + "&rId=" + this.props.location.state.id);
            var json = await res.json();
            console.log("json=======>", json);
            this.setState({ json: json.recipe });
        } catch (err) {
            alert("Oops something went wrong!");
        }
    }

    render() {

        if (this.state.json) {

            return (
                <div className="app">
                    <div className="displayed-recipe col-lg-12 col-md-12 col-sm-12">
                        <div>
                            <h2>{this.state.json.title}</h2>
                            <h5>By {this.state.json.publisher}</h5>
                            <img className="image col-lg-12 col-md-12 col-sm-12" src={this.state.json.image_url} alt="Food" />
                            <div>
                                <h7>Summary of preparation: </h7>
                                <IngredientList list={this.state.json.ingredients} />
                            </div>
                            <a href={this.state.json.source_url} target="_blank" rel="noopener noreferrer"><input type="submit" className="navigation-buttons btn btn-primary" value="Click here to view recipe"/></a>
                            <Link to="/"><input type="submit" className="navigation-buttons btn btn-light" value="Go to Homepage"/></Link>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="app"><ProgressBar animated now={100}/></div>
        );

    }
}

function IngredientList(props) {
    return (
        <ul>
            {props.list.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
        </ul>);
}

export default SelectedRecipe;