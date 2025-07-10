import React, { useState } from "react";

function AddSession({ onAdd }) {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !topic || !timeSpent) return;
    const session = {
      subject,
      topic,
      timeSpent: parseInt(timeSpent),
      date: new Date().toLocaleDateString(),
    };
    onAdd(session);
    setSubject("");
    setTopic("");
    setTimeSpent("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic Studied"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        type="number"
        placeholder="Time Spent (mins)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(e.target.value)}
      />
      <button type="submit">➕ Add Session</button>
    </form>
  );
}

export default AddSession;
