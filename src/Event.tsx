import { Details } from "./types";

const Event: React.FC<Details> = (details) => {
    return (
        <div>
            <h3>{details.description}</h3>
            <h5>{details.date}</h5>
            <p>{details.province}</p>
            <p>{details.time}</p>
            <p>{details.id}</p>
            <p>{details.venue}</p>
            <p>{details.tickets}</p>

        </div>
    )
}

export default Event;

