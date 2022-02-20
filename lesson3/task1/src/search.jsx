import React from "react";


const Search = (props) => {
    const element = (
    <div className="search">
        <h1 className="search__title">{`Hello, ${Tom} What to search for you?`}</h1>
        <div className="search__field">
            <input type="text" className="search__input" />
            <button className="search__button">Search</button>
        </div>
    </div >
    )
    return element 
}

export default Search