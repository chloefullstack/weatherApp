import React from 'react';
import './WeatherCard.css';
import sunny from '../images/sunny.png';
import axios from "axios";
import mockData from "../mockData/weather"

class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            day: 'Wed',
            weather: 'sunny',
            highest: 78,
            lowest:67
        }
    }

    componentDidMount() {
        this.getWeatherData()
    }

    getWeatherData = () => {
        mockData.then(res => {
            this.setState({
                city: res.city.name,
                day: res.list.dt_txt,
                weather: res.list.weather.main,
                highest: res.list.main.temp_max,
                lowest: res.list.main.temp_min
            })
        })
    }
    render() {
        // let { data } = this.state
        return <div>
            <div>
                <div className='card' >
                    <div>{this.state.day}</div>
                    <img src={sunny}></img>
                    <div>{this.state.highest}  {this.state.lowest}</div>
                </div>
            </div>
        </div>
    }
}

export default WeatherCard;