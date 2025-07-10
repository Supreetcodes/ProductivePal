import React from "react";

function SessionList({ sessions }) {
  return (
    <div className="card">
      <h3>📖 Study Log</h3>
      <ul>
        {sessions.length === 0 && <li>No sessions yet</li>}
        {sessions.map((s, i) => (
          <li key={i}>
            <strong>{s.subject}</strong> – {s.topic} – {s.timeSpent} mins on {s.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionList;
