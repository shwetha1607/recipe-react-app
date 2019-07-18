import React from 'react';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{

  key_a="97753ac532afaee19e10e0bd53e215e4"; 
  key_b="b0411751579e25ce6de6f05b965dba21";
  key_c="89bed7cf23be67af723ad893f9ac391f";
  key_d="a633711f01fe63ca20a580dcc42cd4eb";

  key="0e963d79063a037ddc16fafa055bf0ee";
  constructor(props){
    super(props);
    this.state={json:[]};
    this.search=this.search.bind(this);
  }

  async componentWillMount(){
      console.log("Getting popular recipes");     
      try{
          var res=await fetch("https://www.food2fork.com/api/search?key="+this.key+"&sort=r");
          var json = await res.json();
          console.log("json=======>",json);
          this.setState({json: json.recipes });
        }catch(err){
          alert("Oops something went wrong!");
      }
  }

  async search(searchWord){
    console.log(searchWord);
    console.log("Getting popular recipes");     
      try{
          var res=await fetch("https://www.food2fork.com/api/search?key="+this.key+"&q="+searchWord);
          var json = await res.json();
          console.log("json=======>",json);
          this.setState({json: json.recipes });
        }catch(err){
          alert("Oops something went wrong!");
      }
  }

  render(){
    return (
      <div>
        <h1>Recipe App</h1>
        <SearchBar onSearch={this.search}/>
        <Content recipeToRender={this.state.json}/>
      </div>
    ); 
  }
}

export default App;
