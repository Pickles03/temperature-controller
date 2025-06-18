import React from 'react';

function HistoryList ({history}) {
    return (
        <div className="history-list">
            <h3>Temperature History</h3>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>
                        [{entry.currentTime}] → {entry.temp}°C
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryList;