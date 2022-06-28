import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import Style from '../modules/SearchBar.module.css';

function SearchBar({onSearch}) {
  const [cities,setCities] =  useState('');

  return (
    <div className={Style.container}>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(cities);
           
        }}>
        <input 
            type="text" 
            placeholder="Search..."
            value={cities}
            onChange={ e => setCities(e.target.value)}
        />
        <button 
            type="submit"
            >
            <BsSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar