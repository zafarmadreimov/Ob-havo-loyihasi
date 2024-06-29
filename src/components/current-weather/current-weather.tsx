

import { semi_cloud } from "../../assets";
import IWeather from "../../interfaces/weather.interface";
import Input from "../input/input";
import './current-weather.css'
import {Dispatch,SetStateAction} from 'react';

interface IProps {
  weather:IWeather;
  value:string;
  setInputValue: Dispatch<SetStateAction<string>>;
  getCurrentWeather: () => Promise<void>
  selectedCity:string;
};

const CurrentWeather = ({weather,setInputValue,value,getCurrentWeather,selectedCity}:IProps) => {
  return (
   <div className="current-weather">
    <Input value={value} onChange={e=> setInputValue(e.target.value)} getCurrentWeather={getCurrentWeather}/>
    <img src={semi_cloud} alt="semi_cloud" className="current-weather__icon" />
    <div className="current-weather__degree">
       <p>{Math.round(weather.main.temp)}</p>
       <p>°C</p>
    </div>
      <p className="current-weather__status">Semi Cloudy</p>
    <div className="divider"/>
    <p className="current-weather__city">{selectedCity}</p>
   </div>
  )
}

export default CurrentWeather;