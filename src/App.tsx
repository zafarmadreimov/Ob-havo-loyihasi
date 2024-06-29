import {useEffect ,useState} from 'react';
import  "./App.css";
import getWeather from "./api/get-weather";
import CurrentWeather from './components/current-weather/current-weather'
import WeatherDetails from './components/weather-details/weather-details'
import IWeather from './interfaces/weather.interface';
import Loader from './components/loader/loader';



function App() {
  const [weather,setweather]=useState<IWeather | null>(null);
  const [inputValue, setInputValue]=useState<string>('Tashkent');
  const [selectedCity,setSelectedCity]=useState<string>(inputValue);
  const getCurrentWeather= async() => {
    const data=await getWeather(inputValue);
    setweather(data);
    setSelectedCity(inputValue);
  }
    useEffect(()=> {
      getCurrentWeather();
    },[])
    
    if (!weather) {
      return <Loader/>;
    }
  return (
 <div className='container main'>
  {/*Current weather*/}
  <CurrentWeather weather={weather}  value={inputValue} setInputValue={setInputValue}
  getCurrentWeather={getCurrentWeather} selectedCity={selectedCity}/>
   {/*Current weather with details*/}
   <WeatherDetails weather={weather}/>
 </div>
  )
}

export default App
