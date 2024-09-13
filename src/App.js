import React from 'react';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Weather Application</h1>
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
