import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import './input.css'; 
import {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  getCurrentWeather:()=> Promise<void>
};

const Input = ({getCurrentWeather, ...props}:IProps) => {
  return (
  <div className='input-wrapper'>
    <input className="custom-input" {...props} />
     <MagnifyingGlassIcon width={32} height={32} fill='#758BF1'
     onClick={getCurrentWeather} className='search__icon'/>
  </div>
  )
}

export default Input;