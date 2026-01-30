import React from "react";

export default function ComponentTheory({ text }) {
  return (
    <div>
      <h4 className="mb-2 text-lg font-semibold text-cyan-400">
        Theory
      </h4>
      <p className="text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
