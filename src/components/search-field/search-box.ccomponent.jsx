import React from 'react';
import './search-box.styles.css'

function SearchBox ({placeholder, value, handleChange}) {

    return (
    <div>
        <input
        className='search'
        onChange={handleChange}
        type='search'
        placeholder={placeholder}
        value={value}></input>
    </div>
    );
}

export default SearchBox;