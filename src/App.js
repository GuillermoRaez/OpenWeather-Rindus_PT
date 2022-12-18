import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search';

const weather_url = "https://api.openweathermap.org/data/2.5/weather?";

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
    
    let endpoint_location = `${weather_url}appid=${process.env.REACT_APP_API_WEATHERKEY}&lat=${latitude}&lon=${longitude}`;
    fetch(endpoint_location)
    .then(response => response.json())
    .then((weatherLocation) => {
      setLocation(weatherLocation);
      console.log(weatherLocation)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <header className="Header">
        <h1>Rindus Weather App</h1>
        <Search />
      </header>
      <div className='container'>
        <h2>{location.name}</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;
