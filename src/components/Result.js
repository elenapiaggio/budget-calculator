import React from "react";

const Result = ({ cost }) => {
  return (
    <div>
      {
        (cost === undefined) ? <p>Choose bootcamp, type and plan</p> : cost
      }
    </div>
   )
}
 
export default Result;