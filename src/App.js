import React from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <WeatherCard></WeatherCard>
            </div>
        );
    }
}

export default App