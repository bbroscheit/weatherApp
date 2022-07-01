import React from 'react';
import './App.css';
import Nav from '../components/Nav';
import Cards from '../components/Cards';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import { Route } from 'react-router-dom';

export default function App() {
  const [cities, setCities] = React.useState([]);
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  const apiKey = '2c0aeb995bec448e7b0caa405bbb80cb';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return "ciudad no encontrada";
      }
    }

  return (
    <div className="App">
      
      
        <Route path="/"  render= { () => <Nav onSearch={onSearch}/>} />
        <Route path="/about" exact component ={About} />
        <Route path="/" exact render={() => <Cards cities={cities} onClose={onClose}/>} />
        <Route path="/ciudad/:ciudadId" exact render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
    </div>
  );
}

