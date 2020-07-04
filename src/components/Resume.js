import React, { Fragment } from "react";

const Resume = ({ data }) => {
  const { bootcamp, type, plan } = data;
  console.log("data", {data})

  return (
    <Fragment>
      <h2>Resume</h2>
      <ul>
        <li>Bootcamp: {bootcamp}</li>
        <li>Type: {type}</li>
        <li>Plan: {plan}</li>
      </ul>
    </Fragment>
  );
};

export default Resume;
