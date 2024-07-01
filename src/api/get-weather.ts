import IWeather from "../interfaces/weather.interface";

const API_KEY = "7d492c1fd2841bd12e5f6408cfb6e3f1";

const getWeather = async (city: string): Promise<IWeather | null> => {
  try {
    // Shahar koordinatalarini olish
    const cityRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
    const cityData = await cityRes.json();
    
    if (cityData.length === 0) {
      throw new Error("Shahar topilmadi");
    }

    const lat = cityData[0].lat;
    const lon = cityData[0].lon;

    // Ob-havo ma'lumotlarini olish
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Ob-havo ma'lumotlarini olishda xatolik: ", error);
    return null; // Xatolik bo'lsa null qaytariladi
  }
}

export default getWeather;
