import Event from "./Event";
import { events } from "./mock";
const EventContainer = () => {
    return (
        <div>
            {events.map(event => {
                return <Event description={event.description} province={event.province} date={event.date} time={event.time} key={event.id} venue={event.venue} tickets={[]} id={event.id} />
            })}
        </div>
    )
}

export default EventContainer;