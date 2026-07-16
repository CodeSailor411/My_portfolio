import React from "react";

function Particle() {
  return (
    <div className="ambient-field" aria-hidden="true">
      <span className="ambient-field__orb ambient-field__orb--one" />
      <span className="ambient-field__orb ambient-field__orb--two" />
      <span className="ambient-field__orb ambient-field__orb--three" />
      <span className="ambient-field__grid" />
    </div>
  );
}

export default Particle;
