import React from 'react';
import Recipe from './Recipe';

class Content extends React.Component{

    url_a="https://www.food2fork.com/api/search?key=97753ac532afaee19e10e0bd53e215e4&sort=r";
    url_b="https://www.food2fork.com/api/search?key=b0411751579e25ce6de6f05b965dba21&sort=r";
    elements=[];
    json=null;
    constructor(props){
        super(props);
        //this.state={json:null};
        this.getRecipe=this.getRecipe.bind(this);
    }
    /*
    async componentDidMount(){
        await this.getRecipe();
    }
    */

    async getRecipe(){
        try{
            var res=await fetch(this.url_b);
            this.setState({json:(await res.json())});
        }catch(err){
            alert("Oops something went wrong!");
        }
    }

    render(){
        //this.elements=[];
        console.log("again");
        (async ()=>{
            await this.getRecipe();
            for(var i=0;i<10;i++){
                //this.elements.push(<Recipe title={this.state.json["recipes"][i]["title"]}/>);
                //console.log(this.elements[i]);
                this.elements.push(<Recipe title={"You're breathtaking!"}/>);
            }
        }
        )();
        return (<div>
            {this.elements}
        </div>);
    }
}

export default Content;