import React, { useEffect, useState } from "react";

const tips = [
  "Stay consistent, even small progress counts!",
  "Take breaks, your brain needs recovery too.",
  "Focus on deep work, not just busy work.",
  "Sleep well. A fresh brain works faster.",
  "Review, don’t just re-read. Active recall wins.",
];

function TipBox() {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const random = tips[Math.floor(Math.random() * tips.length)];
    setTip(random);
  }, []);

  return (
    <div className="tip-box card">
      💡 <em>{tip}</em>
    </div>
  );
}

export default TipBox;
