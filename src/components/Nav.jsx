import React from 'react';
import Logo from '../img/logo.png';
import SearchBar from '../components/SearchBar.jsx';
import Style from '../modules/Nav.module.css'

function Nav({onSearch}) {
    
  return (
    <div>
       <div className={Style.container}>
        <img className={Style.img} src={Logo} alt="logo" />
        <h1 className={Style.titulo}>Weather - App</h1>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  )
}

export default Nav

