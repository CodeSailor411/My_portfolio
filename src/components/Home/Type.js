import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <span className="visually-hidden">
        Biomedical engineering student researcher specialising in biosignal
        processing, wearable AI, and embedded systems.
      </span>
      <div aria-hidden="true">
        <Typewriter
          options={{
            strings: [
              "Biomedical Engineering Student Researcher",
              "Biosignal Processing Researcher",
              "Wearable AI Developer",
              "Embedded Systems Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </>
  );
}

export default Type;
