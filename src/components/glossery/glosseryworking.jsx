import React from "react";

export default function ComponentWorking({ points }) {
  return (
    <div>
      <h4 className="mb-2 text-lg font-semibold text-violet-400">
        Working Principle
      </h4>
      <ul className="list-disc list-inside space-y-2 text-sm">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
