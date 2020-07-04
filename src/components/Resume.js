import React from "react";
import styled from '@emotion/styled';
import { changeToUpperCase } from './Helper';

const ContentResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Resume = ({ data }) => {
  const { bootcamp, type, plan } = data;
  console.log("data", {data})

  return (
    <ContentResume>
      <h2>Resume</h2>
      <ul>
        <li>Bootcamp: {changeToUpperCase(bootcamp)}</li>
        <li>Type: {changeToUpperCase(type)}</li>
        <li>Plan: {changeToUpperCase(plan)}</li>
      </ul>
    </ContentResume>
  );
};

export default Resume;
