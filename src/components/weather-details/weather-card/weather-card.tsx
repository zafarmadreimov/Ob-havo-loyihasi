import './weather-card.css';

interface IProps {
  type: string;
  value: string;
  deg?: string;
}

const WeatherCard = ({ type, value, deg }: IProps) => {
  return (
    <div className='weather__card'>
      <p className='weather-card__type'>{type}</p>
      <p className='weather-card__value'>{value}</p>
      {deg && <p className='weather-card__deg'>{`Shamol yo'nalishi: ${deg}`}</p>}
    </div>
  )
}

export default WeatherCard;
