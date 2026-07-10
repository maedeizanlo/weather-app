import { useState } from "react";
import {
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherSunny,
} from "react-icons/ti";

export default function HourlyForecast({ hourly }) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2 px-2">
        <h1 className="text-sm font-semibold text-gray-700">
          This Week
        </h1>
      </div>

      {/* HOURLY ROW */}
      <div className="flex gap-3 overflow-x-auto px-2 pb-1">

        {hourly?.length ? (
          hourly.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  min-w-[70px]
                  flex flex-col items-center
                  rounded-2xl
                  p-2
                  transition-all
                  duration-200
                  cursor-pointer
                  select-none
                  ${
                    isActive
                      ? "bg-white shadow-md scale-105"
                      : "bg-transparent"
                  }
                `}
              >
                {/* WEATHER ICON */}
                <div className="text-3xl text-black-500 mb-2">
                  {item.icon === "sun" && <TiWeatherSunny />}
                  {item.icon === "cloud" && <TiWeatherCloudy />}
                  {item.icon === "rain" && <TiWeatherShower />}
                </div>

                {/* TIME */}
                <p className="text-[10px] text-gray-500">
                  {item.time}:00
                </p>

                {/* TEMP */}
                <p className="text-xs font-bold text-gray-700">
                  {item.temp}°
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-xs text-gray-400 px-2">
            Loading...
          </p>
        )}

      </div>
    </div>
  );
}