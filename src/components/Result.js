import React from "react";
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultCost = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextCost = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  margin:0;
`;

const Result = ({ cost }) => {
  return (
    <div>
      {
        (cost === undefined) 
        ? <Message>Choose bootcamp, type and plan</Message> 
        : (
          <ResultCost>
            <TextCost>Total is: {cost}€</TextCost>
          </ResultCost>
          
        )
      }
    </div>
   )
}
 
export default Result;