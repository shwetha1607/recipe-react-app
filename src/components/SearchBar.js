import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={seachKeyWord:''};
    }
    render(){
        return(
            <div>
                <form>
                    <input type='text'/>
                    <input type='Submit' value='Search'/>
                </form>
            </div>
        );
    }
}

export default SearchBar;