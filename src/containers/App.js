import React from 'react';
import './App.css';
import Nav from '../components/Nav';
import Cards from '../components/Cards';

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

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div>
        <Cards 
          cities={cities}
          onClose={onClose}/>
      </div>
    </div>
  );
}

