import React from 'react';
import SearchBar from './components/SearchBar'
import Content from './components/Content'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state='';
  }

  render(){
    return (
      <div>
        <h1>Recipe App</h1>
        <SearchBar/>
        <Content/>
      </div>
    ); 
  }
}

export default App;
