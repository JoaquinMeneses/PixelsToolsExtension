import React from 'react'

const TimerList = () => {
    let craftingTimers = JSON.parse(localStorage.getItem('craftingDataArray')) || [];
  return (
    <div>
      <h2>Lista de Tiempos de Elaboración</h2>
      <ul>
        {craftingTimers.map((craftingData, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {craftingData.name}, <strong>Tiempo:</strong> {craftingData.timer}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimerList