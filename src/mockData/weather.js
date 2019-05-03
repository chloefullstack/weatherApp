const mockData = [
    {"coord": {"lon": -0.13,"lat": 51.51},
    "weather": {"id": 300,"main": "lightsun","description": "light intensity drizzle","icon": "09d"},
    "base": "stations",
    "main": {"temp": 280.32,"pressure": 1012,"humidity": 81,"temp_min": 67,"temp_max": 78},
    "visibility": 10000,
    "wind": {"speed": 4.1,"deg": 80},
    "clouds": {"all": 90},
    "dt": 1485789600,
    "sys": {"type": 1,"id": 5091,"message": 0.0103,"country": "GB","sunrise": 1485762037,"sunset": 1485794875},
    "dt_txt":"2014-07-23 09:00:00",
    "id": 2643743,
    "cityname": "Newark",
    "cod": 200
    },
    {"coord": {"lon": -0.13,"lat": 51.51},
    "weather": {"id": 300,"main": "windy","description": "light intensity drizzle","icon": "09d"},
    "base": "stations",
    "main": {"temp": 280.32,"pressure": 1012,"humidity": 81,"temp_min": 66,"temp_max": 83},
    "visibility": 10000,
    "wind": {"speed": 4.1,"deg": 80},
    "clouds": {"all": 90},
    "dt": 1485789600,
    "sys": {"type": 1,"id": 5091,"message": 0.0103,"country": "GB","sunrise": 1485762037,"sunset": 1485794875},
    "dt_txt":"2014-07-24 09:00:00",
    "id": 2643743,
    "cityname": "Newark",
    "cod": 200
    },{"coord": {"lon": -0.13,"lat": 51.51},
    "weather": {"id": 300,"main": "rainy","description": "light intensity drizzle","icon": "09d"},
    "base": "stations",
    "main": {"temp": 280.32,"pressure": 1012,"humidity": 81,"temp_min": 65,"temp_max": 77},
    "visibility": 10000,
    "wind": {"speed": 4.1,"deg": 80},
    "clouds": {"all": 90},
    "dt": 1485789600,
    "sys": {"type": 1,"id": 5091,"message": 0.0103,"country": "GB","sunrise": 1485762037,"sunset": 1485794875},
    "dt_txt":"2014-07-25 09:00:00",
    "id": 2643743,
    "cityname": "Newark",
    "cod": 200
    },
]
const mockPromise = () => {
    return new Promise((resolve) => {
        resolve(mockData)
    })
}
export default mockPromise