import React from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Application</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;
