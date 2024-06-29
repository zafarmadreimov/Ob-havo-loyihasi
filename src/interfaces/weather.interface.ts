interface IWeather {
    main: {
        feels_like:number;
        temp:number;
        humidity:number;
        pressure:number;
    },
    wind: {
        speed:string;
        deg:string;
    }

    weather: {
        description:string;
        icon:string;
    }

}
export default IWeather;