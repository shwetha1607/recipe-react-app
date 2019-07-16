import React from 'react';
import Content from './Content'

class SearchBar extends React.Component{
    key_a="97753ac532afaee19e10e0bd53e215e4";
    key_b="b0411751579e25ce6de6f05b965dba21";
    key_c="89bed7cf23be67af723ad893f9ac391f";
    constructor(props){
        super(props);
        this.state={seachKeyWord:'',json:null};
        this.inputChanged=this.inputChanged.bind(this);
        this.search=this.search.bind(this);
    }

    async componentWillMount(){
        console.log("Getting popular recipes");     
        try{
            var res=await fetch("https://www.food2fork.com/api/search?key="+this.key_a+"&sort=r");
             this.setState({json:await res.json()});
        }catch(err){
            alert("Oops something went wrong!");
        }
    }

    inputChanged(event){
        this.setState({seachKeyWord:event.target.value});
    }

    async search(event){         
        var searchParams=(this.state.seachKeyWord).replace(" ","%20");
        console.log("Getting recipes containing "+searchParams);
        try{
            var res=await fetch("https://www.food2fork.com/api/search?key="+this.key_a+"&q="+searchParams);
            this.setState({json:await res.json()});
        }catch(err){
            alert("Oops something went wrong with the search! Error Message : "+err);
        }
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.search}>
                    <input type='text' value={this.state.seachKeyWord} onChange={this.inputChanged}/>
                    <input type='Submit' value='Search'/>
                </form>

                <Content recipesToRender={this.state.json}/>
            </div>
        );
    }
}

export default SearchBar;