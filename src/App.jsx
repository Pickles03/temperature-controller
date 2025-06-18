import React, {useState, useEffect} from 'react';
import './App.css';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureControls from './components/TemperatureControls';
import HistoryList from './components/HistoryList';


function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([])

  useEffect(() => {
    const savedHistory = localStorage.getItem('temperatureHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('temperatureHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (temperature === 20 & history.length === 0) return;

    const currentTime = new Date().toLocaleString();
    const timeout = setTimeout(() => {
      setHistory(prev => [...prev, {currentTime, temp: temperature}]);
  }, 500);
  return () => clearTimeout(timeout);
  }, [temperature]);


  const increaseTemp = () => {
    setTemperature(prevTemp => {
      const newTemp = Math.min(prevTemp + 1, 40)
      return newTemp;
    })
  };

  const decreaseTemp = () => {
    setTemperature(prevTemp => {
      const newTemp = Math.max(prevTemp -1, 0)
      return newTemp;
    })
  };

  const resetTemp = () => {
    setTemperature(20) 
  };


  return (
    <div className="app">
      <h1>Temperature controller</h1>
      <TemperatureDisplay temperature={temperature}/>
      <TemperatureControls 
        addTemp={increaseTemp} 
        subtractTemp={decreaseTemp} 
        resetTemp={resetTemp}
      />
      < HistoryList history={history} />
    </div>
  )
}


export default App;