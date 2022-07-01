import React from 'react';
import Logo from '../img/logo.png';
import SearchBar from '../components/SearchBar.jsx';
import Style from '../modules/Nav.module.css';
import About from "../components/About.jsx";
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
    
  return (
    <div className={Style.container}>
      <Link to="/">
       
        <img className={Style.img} src={Logo} alt="logo" />
       
      
      </Link>
      <Link to="/">
       
        
        <h1 className={Style.titulo}>Weather - App</h1>
      
      </Link>

      <Link to="/About">
        <About />
      </Link>
      
        <SearchBar onSearch={onSearch}/>
      
    </div>
  )
}

export default Nav

