import React from 'react';
import Recipe from './Recipe';

class Content extends React.Component{

    url_a="https://www.food2fork.com/api/search?key=97753ac532afaee19e10e0bd53e215e4&sort=r";
    url_b="https://www.food2fork.com/api/search?key=b0411751579e25ce6de6f05b965dba21&sort=r";
    constructor(props){
        super(props);
        this.state='';
    }

    async getRecipe(){
        try{
            var res=await fetch(this.url_b);
            var json = await res.json();
            return json;
        }catch(err){
            alert("Oops something went wrong!");
        }
    }

    render(){
        var elements=[];
        (async ()=>{
            var d = await this.getRecipe();
            for(var i=0;i<10;i++){
                //console.log(d["recipes"][i]["title"]);
                elements.push(<Recipe title={d["recipes"][i]["title"]}/>);
                console.log(elements[i]);
            }
        })();
        return(<div>
            {elements}
        </div>);
    }
}

export default Content;