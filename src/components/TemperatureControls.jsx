import React from 'react';

function TemperatureControls({addTemp, subtractTemp, resetTemp}) {
    return (
        <div className="temperature-controls">
            <button onClick={addTemp} className="add">+</button>
            <button onClick={subtractTemp} className="subtract">-</button>
            <button onClick={resetTemp} className="reset">Reset</button>
        </div>
    )
}

export default TemperatureControls;