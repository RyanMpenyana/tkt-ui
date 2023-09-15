import { Details } from "./types";

const Event = (details: Details) => {
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

// {
//     "id": 2,
//     "description": "Hard Rock Cafe, Going Hard!",
//     "tickets": [],
//     "venue": "Sandton",
//     "time": "14:00:00",
//     "date": "2023-10-14",
//     "province": "Gauteng",
// }
export default Event;