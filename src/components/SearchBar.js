import React from 'react';

function SearchBar(props){

    return(
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
                props.onSearch(event.target.searchWord.value);
            }}>
                <input type='text' name="searchWord"/>
                <input type='Submit' value='Search'/>
            </form>
        </div>
    );    
}

export default SearchBar;