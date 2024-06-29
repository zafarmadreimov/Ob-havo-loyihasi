import IWeather from '../../interfaces/weather.interface';
import WeatherCard from './weather-card/weather-card';
import './weather-details.css';

interface IProps {
  weather: IWeather;
}

const WeatherDetails = ({ weather }: IProps) => {
  return (
    <div className="weather__details">
      <WeatherCard type='Shamol' value={`${weather.wind.speed} km/h`} deg={`${weather.wind.deg}°`} />
      <WeatherCard type='Namlik' value={`${weather.main.humidity}%`} />
      <WeatherCard type='Odam his qiladigan harorat' value={`${Math.round(weather.main.feels_like)}°C`}/>
      <WeatherCard type='Bosim' value={`${weather.main.pressure} hPa`} />
    </div>
  )
}

export default WeatherDetails;
