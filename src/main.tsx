import React from 'react'
import ReactDOM from 'react-dom/client'
import Event from './Event.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Event description='Party event' time='15:00' province='Gauteng' date='2023-10-12'/>
  </React.StrictMode>,
)
