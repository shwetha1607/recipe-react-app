import React from 'react';
import Recipe from './Recipe';

class Content extends React.Component{
    elements=[];
    json=null;
    constructor(props){
        super(props);
        this.state='';
    }

    render(){
        //console.log(this.props.recipesToRender);
        if(this.props.recipesToRender!==null)
        for(var i=0;i<this.props.recipesToRender["count"];i++){
            this.elements.push(<Recipe imgsrc={this.props.recipesToRender["recipes"][i]["image_url"]} title={this.props.recipesToRender["recipes"][i]["title"]}/>);
            console.log(this.elements[i]);
        }
        return (<div id='content'>
            {this.elements}
        </div>);
    }
}

export default Content;