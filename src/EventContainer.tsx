import { useState } from "react";
import Event from "./Event";
import { events } from "./mock";



const EventContainer = () => {
    const [filteredEvent, setFilteredEvent] = useState('')
    const [data, setdata] = useState(events)



    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchEvent = event.target.value
        setFilteredEvent(searchEvent)
        const filtered = events.filter(item => {
            return item.province.toLowerCase().includes(searchEvent.toLowerCase()) || 
            item.date.toLowerCase().includes(searchEvent.toLowerCase())
        })
        setdata(filtered)
        console.log(filtered)
    }

    return (
        <div>
            <input type="date" name="" id="" onChange={inputChangeHandler} value={filteredEvent} />
            <input type="text" onChange={inputChangeHandler} />
            {data.map(event => {
                return <Event description={event.description} province={event.province} 
                date={event.date} time={event.time} key={event.id} 
                venue={event.venue} tickets={[]} id={event.id} />
            })}
        </div>
    )
}

export default EventContainer;