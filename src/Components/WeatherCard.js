import React from 'react';
import './WeatherCard.css';
import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import lightrain from '../images/lightrain.png';
import lightsun from '../images/lightsun.png';
import rainy from '../images/rainy.png';
import snowy from '../images/snowy.png';
import windy from '../images/windy.png';

import mockData from "../mockData/weather.js";
import moment from 'moment';


class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherData: []
        }
    }

    componentDidMount() {
        this.getWeatherData()
    }
    // get all data from local file
    getWeatherData = () => {
        mockData().then(res => {
            this.setState({
                weatherData: res
            })
            console.log(res)
        })
        
    }
    //get images depend on description fetch from res
    getImage = (main) => {
        if (main == 'sunny') { return sunny}
        else if (main === 'rainy') { return rainy}
        else if (main === 'windy') { return windy}
        else if (main === 'lightsun') { return lightsun}
        else if (main === 'lightrain') { return lightrain}
        else if (main === 'snowy') { return snowy}
        else if (main === 'cloudy') { return cloudy}


    }
    // change date to day by using moment
    changeDate = (dt_txt) => {
        return moment(dt_txt).format('ddd')
    }
    render() {
        let { weatherData } = this.state
        return <div>
            <div className='setting'>
                {weatherData.map((item, index) => (
                <div className='card' key={index}>
                    <div>{item.cityname}</div>
                    <div>{this.changeDate(item.dt_txt)}</div>
                    <img src={this.getImage(item.weather.main)}></img>
                    <div>{item.main.temp_max}  {item.main.temp_min}</div>
                </div>
                ))}
            </div>
        </div>
    }
}

export default WeatherCard;