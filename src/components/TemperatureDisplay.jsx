import React from 'react';

function TemperatureDisplay ({temperature}) {
    return (
        <div className="temperature-display">
            <h2>Current temperature: {temperature}°C</h2>
            <p>{temperature < 15 ? "It is cold!" : temperature <= 25 ? "It is warm!" : "It is hot!"}</p>
        </div>
    )
}

export default TemperatureDisplay;