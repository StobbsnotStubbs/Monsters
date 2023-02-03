import React from "react";

const DisplayDate = ({ currentYear }) => {
  return (
    <div>
      <span>
        Year here is passed as props<h4>{currentYear}</h4>
      </span>
    </div>
  );
};
export default DisplayDate;
