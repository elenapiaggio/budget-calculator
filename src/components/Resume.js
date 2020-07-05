import React from "react";
import styled from '@emotion/styled';
import { changeToUpperCase } from './Helper';
import PropTypes from 'prop-types';

const ContentResume = styled.div`
  padding: 1rem;
  text-align: center;
  color: #000;
  margin-top: 1rem;
  border: 1px solid #048E97;
`;

const Resume = ({ data }) => {
  const { bootcamp, type, plan } = data;
  return (
    <ContentResume>
      <h2>Resume</h2>
      <p>
      Bootcamp: {changeToUpperCase(bootcamp)} <br/>
      Type: {changeToUpperCase(type)} <br/>
      Plan: {changeToUpperCase(plan)} <br/>
      </p>
    </ContentResume>
  );
};

Resume.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Resume;
