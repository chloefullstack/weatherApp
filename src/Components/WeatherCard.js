import React from 'react';
import './WeatherCard.css';
import sunny from '../images/sunny.png';
class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 'Wed',
            weather: 'sunny',
            highest: 78,
            lowest:67
        }
    }
    render() {
        // let { data } = this.state
        return <div>
            <div>
                {/* {data.map((item, index) => ( */}
                    <div className='card' >
                        <div>{this.state.day}</div>
                        <img src={sunny}></img>
                        <div>{this.state.highest}  {this.state.lowest}</div>
                    </div>
                {/* )) */}
                } 
            </div>
        </div>
            
        
        
    }
    
}

export default WeatherCard;