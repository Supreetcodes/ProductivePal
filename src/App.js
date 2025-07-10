import React, { useState, useEffect } from "react";
import AddSession from "./components/AddSession";
import SessionList from "./components/SessionList";
import TipBox from "./components/TipBox";
import Summary from "./components/Summary";
import "./index.css";

function App() {
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem("sessions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  const addSession = (session) => {
    setSessions([session, ...sessions]);
  };

  return (
    <div className="container">
      <h1>📚 ProductivePal</h1>
      <TipBox />
      <AddSession onAdd={addSession} />
      <Summary sessions={sessions} />
      <SessionList sessions={sessions} />
    </div>
  );
}

export default App;
