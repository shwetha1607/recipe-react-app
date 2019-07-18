import React from 'react';

function SearchBar(props){

    return(
        <div className="search-form-container">
            <form onSubmit={(event)=>{
                event.preventDefault();
                props.onSearch(event.target.searchWord.value);
            }}>
                <div className="search-form form-inline">
                    <input type='text' className="search-input col-lg form-control" name="searchWord"/>
                    <input type='Submit' className="search-button btn btn-primary" value='Search'/>
                </div>
            </form>
        </div>
    );    
}

export default SearchBar;