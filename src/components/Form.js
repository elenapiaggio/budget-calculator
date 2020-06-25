import React, { useState } from "react";
import styled from '@emotion/styled';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover{
    cursor: pointer;
    background-color: #26C6DA;
  }
`;

const Form = () => {

  const [ data, saveData ] = useState({
    bootcamp: '',
    type: '',
    plan: '',
  });

  // extraer los valores
  const { bootcamp, type, plan } = data;

  // Read data of form and add to the state
  const getInformationForm = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value
    })
  };


  return (
    <form>
      <Field>
        <Label>Bootcamp</Label>
        <Select
          name='bootcamp'
          value={bootcamp}
          onChange={getInformationForm}
        >
          <option value="web">Web developoment</option>
          <option value="ux">UX-UI</option>
          <option value="big">Big Data</option>
        </Select>
      </Field>
      <Field>
        <Label>Type</Label>
        <Select
          name='type'
          value={type}
          onChange={getInformationForm}
        >
          <option value="ft">Full time</option>
          <option value="pt">Part time</option>
          <option value="fton">Full time online</option>
          <option value="pton">Part time online</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basic'
          checked={plan === 'basic'}
          onChange={getInformationForm}
        /> Basic
        <InputRadio
          type='radio'
          name='plan'
          value='full'
          checked={plan === 'full'}
          onChange={getInformationForm}
        /> Full
      </Field>
      <Button type='button'>Calculator</Button>
    </form>
  );
};

export default Form;
