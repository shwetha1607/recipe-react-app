import React from "react";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: [] };
    this.search = this.search.bind(this);
    this.key = process.env.REACT_APP_API_KEY;
  }

  async componentWillMount() {
    console.log("Getting popular recipes");
    try {
      var res = await fetch(
        "https://www.food2fork.com/api/search?key=" + this.key + "&sort=r"
      );
      var json = await res.json();
      console.log("json=======>", json);
      this.setState({ json: json.recipes });
    } catch (err) {
      alert("Oops something went wrong!");
    }
  }

  async search(searchWord) {
    console.log(searchWord);
    console.log("Getting popular recipes");
    try {
      var res = await fetch(
        "https://www.food2fork.com/api/search?key=" +
          this.key +
          "&q=" +
          searchWord
      );
      var json = await res.json();
      console.log("json=======>", json);
      this.setState({ json: json.recipes });
    } catch (err) {
      alert("Oops something went wrong!");
    }
  }

  render() {
    return (
      <div className="app">
        <div id="page-title">
          <h1>Recipes</h1>
        </div>
        <SearchBar onSearch={this.search} />
        <Content recipeToRender={this.state.json} />
      </div>
    );
  }
}

export default App;
