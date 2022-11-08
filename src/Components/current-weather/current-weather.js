import "./current-weather.css";


const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">London</p>
                    <p className="desc">Rainy</p>
                </div>
                <img alt="weather" className="icon" src="Assets/9.png" ></img>
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                  <div className="parameter-row">
                    <span className="parameter-label">Details</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-label">Feels like</span>
                    <span className="parameter-value">22°C</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value">5km/hC</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">5%</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">20Pa</span>
                  </div>
                </div>
            </div>
            
        </div>
    )
}

export default CurrentWeather;