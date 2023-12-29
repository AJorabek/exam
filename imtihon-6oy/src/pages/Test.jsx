import React from "react";

const Test = (test) => {
  return (
    <div>
      {test.map((li) => {
        <div>
          <ul>
            <li>{li}</li>
          </ul>
        </div>;
      })}
    </div>
  );
};

export default Test;
