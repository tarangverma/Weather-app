import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "./forecast.css";

export const Forecast = ({data}) => {
    return (
        <>
          <label className="title" >Daily</label>
           <Accordion allowZeroExpanded>
            {data.list.splice(0 , 7).map((item , indx) => (
                <AccordionItem key={indx}>
                       <AccordionItemHeading>
                          <AccordionItemButton>
                              <div>
                                  <img alt='no img' src={`Assets/${item.weather[0].icon}.png`}></img>
                              </div>
                          </AccordionItemButton>
                       </AccordionItemHeading>
                       <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
            ))}
               
           </Accordion>
        </>
    )
}