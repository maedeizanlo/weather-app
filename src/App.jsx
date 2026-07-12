import { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import WeatherMetrics from "./components/WeatherMetrics";
import HourlyForecast from "./components/HourlyForecast";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);

  const getWeather = async () => {
    try {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=36.26&longitude=59.62&current_weather=true&hourly=temperature_2m,relative_humidity_2m,cloud_cover"
      );

      const data = await res.json();

      const currentIndex = 0;

      setWeather({
        temp: data.current_weather.temperature,
        wind: data.current_weather.windspeed,
        humidity: data.hourly.relative_humidity_2m[currentIndex],
        cloud: data.hourly.cloud_cover[currentIndex],
      });

      const hours = data.hourly.time.map((t, i) => {
        const cloud = data.hourly.cloud_cover[i];

        let icon;

        if (cloud < 20) {
          icon = "rain";
        } else if (cloud < 60) {
          icon = "sun";
        } else {
          icon = "cloud";
        }

        return {
          time: new Date(t).getHours(),
          temp: Math.round(data.hourly.temperature_2m[i]),
          icon,
        };
      });

      // هر دو ساعت یک بار
      setHourly(hours.filter((_, i) => i % 2 === 0));
    } catch (err) {
      console.log("API Error:", err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-blue-200 px-3 sm:px-6 md:px-10 flex flex-col items-center">

      <div className="w-full max-w-300">
        <Header />
      </div>

      <div className="w-full max-w-300 flex flex-col items-center gap-6 mt-6">

        <div className="w-full flex justify-center">
          <WeatherCard weather={weather} />
        </div>

        <div className="w-full flex justify-center">
          <WeatherMetrics weather={weather} />
        </div>

        <div className="w-full flex justify-center">
          <HourlyForecast hourly={hourly} />
        </div>

      </div>
    </div>
  );
}