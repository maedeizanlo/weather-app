import { useEffect, useState } from "react";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=36.26&longitude=59.62&current_weather=true&hourly=relative_humidity_2m,apparent_temperature"
    );

    const data = await res.json();

    setWeather({
      temp: data.current_weather?.temperature,
      wind: data.current_weather?.windspeed,
      humidity: data.hourly?.relative_humidity_2m?.[0],
      feelsLike: data.hourly?.apparent_temperature?.[0],
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="w-full max-w-130 flex flex-col items-center text-center gap-4">

      {/* ICON */}
      <img
        src="wether.png"
        alt="weather icon"
        className="w-36 h-36 object-contain"
      />

      {/* TEMP */}
      <h1 className="text-7xl font-black text-gray-800 leading-none">
        {weather ? `${weather.temp}°` : "—"}
      </h1>

      {/* FEELS LIKE */}
      <p className="text-sm text-gray-500">
        Feels like {weather ? `${weather.feelsLike}°` : "—"}
      </p>

      {/* LOCATION */}
      <div className="text-gray-700">
        {/* <h3 className="text-lg font-semibold">Weather</h3> */}
        {/* <p className="text-sm opacity-70">Today</p> */}
      </div>

    </div>
  );
}