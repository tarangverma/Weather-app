import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "./forecast.css";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

export const Forecast = ({data}) => {

    const CurrentDay = new Date().getDay();
    const ForecastDay = days.slice(CurrentDay, days.length).concat(days.slice(0, CurrentDay)
    )
    console.log(ForecastDay);

    return (
        <>
          <label className="title" >Daily</label>
           <Accordion allowZeroExpanded>
            {data.list.splice(0 , 7).map((item , indx) => (
                <AccordionItem key={indx}>
                       <AccordionItemHeading>
                          <AccordionItemButton>
                              <div className='daily-item'>
                                  <img className='icon-small' alt='no img' src={`Assets/${item.weather[0].icon}.png`}></img>
                                  <label className="day">{ForecastDay[indx]}</label>
                                  <label className='description'>{item.weather[0].description}</label>
                                  <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                              </div>
                          </AccordionItemButton>
                       </AccordionItemHeading>
                       <AccordionItemPanel>
                          <div className='daily-details-grid'>
                            <div className='daily-details-grid-item'>
                                <label>Pressure</label>
                                <label>{item.main.pressure} Pa</label>
                            </div>
                            <div className='daily-details-grid-item'>    
                                <label>Humidity</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className='daily-details-grid-item'>    
                                <label>Clouds</label>
                                <label>{item.clouds.all}</label>
                            </div>
                            <div className='daily-details-grid-item'>    
                                <label>Wind Speed</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className='daily-details-grid-item'>    
                                <label>Sea level</label>
                                <label>{item.main.sea_level}</label>
                            </div>
                            <div className='daily-details-grid-item'>    
                                <label>feels like</label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                          </div>
                       </AccordionItemPanel>
                </AccordionItem>
            ))}
               
           </Accordion>
        </>
    )
}