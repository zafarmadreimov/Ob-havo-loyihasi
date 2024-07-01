import { semi_cloud, cloudy, sunny, rainny, mist } from "../../assets"; // mos rasmlarni import qiling
import IWeather from "../../interfaces/weather.interface";
import Input from "../input/input";
import './current-weather.css';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  weather: IWeather;
  value: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  getCurrentWeather: () => Promise<void>;
  selectedCity: string;
};

const CurrentWeather = ({ weather, setInputValue, value, getCurrentWeather, selectedCity }: IProps) => {
  const getWeatherDescription = (main: string) => {
    switch (main) {
      case 'Clear':
        return 'Ochiq osmon';
      case 'Clouds':
        return 'Bulutli';
      case 'Rain':
        return 'Yomg\'irli';
      case 'Mist':
        return 'Tumanli';
      default:
        return main; // Agar boshqa holatlar bo'lsa, o'zining nomini chiqaradi
    }
  };

  const getWeatherIcon = (main: string) => {
    switch (main) {
      case 'Clear':
        return sunny;
      case 'Clouds':
        return cloudy;
      case 'Rain':
        return rainny;
      case 'Mist':
          return mist;
      default:
        return semi_cloud; // default rasmni qo'yamiz
    }
  };

  return (
    <div className="current-weather">
      <Input value={value} onChange={e => setInputValue(e.target.value)} getCurrentWeather={getCurrentWeather} />
      <img src={getWeatherIcon(weather.weather[0].main)} alt={weather.weather[0].main} className="current-weather__icon" />
      <div className="current-weather__degree">
        <p>{Math.round(weather.main.temp)}</p>
        <p>°C</p>
      </div>
      <p className="current-weather__status">{getWeatherDescription(weather.weather[0].main)}</p>
      <div className="divider" />
      <p className="current-weather__city">{selectedCity}</p>
    </div>
  )
}

export default CurrentWeather;
