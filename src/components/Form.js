import React, { useState } from "react";
import styled from "@emotion/styled";
import { getTypeDifference, calculateBootcamp, getPlan } from "./Helper";

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
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setResume, setLoading }) => {
  const [ data, saveData ] = useState({
    bootcamp: "",
    type: "",
    plan: "",
  });

  // State for Error
  const [error, saveError] = useState(false);

  // extraer los valores
  const { bootcamp, type, plan } = data;

  // Read data of form and add to the state
  const getInformationForm = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bootcamp.trim() === "" || type.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    } else {
      saveError(false);
    }

    // Calculate cost final bootcamp
    const difference = getTypeDifference(type);
    const basicCostBootcamp = 5000;
    let incrementPlan = getPlan(plan);
    let resultCostBootcamp = 0;

    resultCostBootcamp = basicCostBootcamp + (basicCostBootcamp * difference) / 100;
    resultCostBootcamp = calculateBootcamp(bootcamp) * resultCostBootcamp;
    resultCostBootcamp = parseFloat(incrementPlan * resultCostBootcamp).toFixed(2);

    setLoading(true);
    
    setTimeout(() => {
      // Delete Spinner
      setLoading(false);

      // Send the information to the main component
      setResume({
        cost: resultCostBootcamp,
        data: data,
      })

    }, 2000);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Bootcamp</Label>
        <Select name="bootcamp" value={bootcamp} onChange={getInformationForm}>
          <option value="">---</option>
          <option value="web">Web developoment</option>
          <option value="ux">UX-UI</option>
          <option value="bigdata">Big Data</option>
        </Select>
      </Field>
      <Field>
        <Label>Type</Label>
        <Select name="type" value={type} onChange={getInformationForm}>
          <option value="">---</option>
          <option value="ft">Full time</option>
          <option value="pt">Part time</option>
          <option value="ft_online">Full time online</option>
          <option value="pt_online">Part time online</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getInformationForm}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={getInformationForm}
        />{" "}
        Full
      </Field>
      <Button type="submit">Calculator</Button>
    </form>
  );
};

export default Form;
