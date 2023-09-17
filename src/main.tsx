import React from 'react'
import ReactDOM from 'react-dom/client'
// import Event from './Event.tsx'
import './index.css'
import EventContainer from './EventContainer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EventContainer />
  </React.StrictMode>,
)
