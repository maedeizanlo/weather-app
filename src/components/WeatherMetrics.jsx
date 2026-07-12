export default function WeatherMetrics({ weather }) {
  return (
    <div className="w-full max-w-130 mt-20 flex flex-col gap-4">

      {/* HUMIDITY */}
      <div className="flex items-center justify-between p-4 rounded-2xl shadow-md backdrop-blur-md bg-white/30">
        <div className="flex items-center gap-3">
         <img
  src={`${import.meta.env.BASE_URL}rain2.png`}
  className="w-8 h-8"
/>
          <p className="text-sm text-gray-700">Humidity</p>
        </div>
        <p className="font-bold text-gray-800">
          {weather?.humidity ?? "--"}%
        </p>
      </div>

      {/* WIND */}
      <div className="flex items-center justify-between p-4 rounded-2xl shadow-md backdrop-blur-md bg-white/30">
        <div className="flex items-center gap-3">
         <img
  src={`${import.meta.env.BASE_URL}wind2.png`}
  className="w-8 h-8"
/>
          <p className="text-sm text-gray-700">Wind</p>
        </div>
        <p className="font-bold text-gray-800">
          {weather?.wind ?? "--"} km/h
        </p>
      </div>

      {/* CLOUD */}
      <div className="flex items-center justify-between p-4 rounded-2xl shadow-md backdrop-blur-md bg-white/30">
        <div className="flex items-center gap-3">
          <img
  src={`${import.meta.env.BASE_URL}cloud.png`}
  className="w-8 h-8"
/>
          <p className="text-sm text-gray-700">Cloud</p>
        </div>
        <p className="font-bold text-gray-800">
          {weather?.cloud ?? "--"}%
        </p>
      </div>

    </div>
  );
}