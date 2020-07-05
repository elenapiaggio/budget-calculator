import React from "react";
import styled from '@emotion/styled';
import { changeToUpperCase } from './Helper';
import PropTypes from 'prop-types';

const ContentResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Resume = ({ data }) => {
  const { bootcamp, type, plan } = data;
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

Resume.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Resume;
