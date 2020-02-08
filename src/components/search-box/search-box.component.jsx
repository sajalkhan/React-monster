import React from 'react';
import './search-box.style.css'

const SearchBox = (props)=>(
    <input className='search' type="search" placeholder='search monster' onChange={props.change}/>
);

export default SearchBox;