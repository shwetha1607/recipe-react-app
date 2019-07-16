import React from 'react';
import Recipe from './Recipe';

class Content extends React.Component{

    url_a="https://www.food2fork.com/api/search?key=97753ac532afaee19e10e0bd53e215e4&sort=r";
    url_b="https://www.food2fork.com/api/search?key=b0411751579e25ce6de6f05b965dba21&sort=r";
    elements=[];
    json=null;
    constructor(props){
        super(props);
        this.state={json:null};
    }

    async componentWillMount(){
        try{
            var res=await fetch(this.url_a);
             this.setState({json:await res.json()});
        }catch(err){
            alert("Oops something went wrong!");
        }
    }

    render(){
        console.log("again");
        if(this.state.json!==null)
        for(var i=0;i<this.state.json["count"];i++){
            this.elements.push(<Recipe imgsrc={this.state.json["recipes"][i]["image_url"]} title={this.state.json["recipes"][i]["title"]}/>);
            console.log(this.elements[i]);
        }
        return (<div id='content'>
            {this.elements}
        </div>);
    }
}

export default Content;