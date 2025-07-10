import React from "react";

function Summary({ sessions }) {
  const total = sessions.reduce((sum, s) => sum + s.timeSpent, 0);
  return (
    <div className="summary card">
      🧠 Total Time Spent: <strong>{total} minutes</strong>
    </div>
  );
}

export default Summary;
