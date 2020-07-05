import React from "react";
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultCost = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #048E97;
  margin-top: 1rem;
  position: relative;
`;

const TextCost = styled.p`
  color: #FF6363;
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
            <TransitionGroup
              component = 'span'
              className = 'result'
            >
              <CSSTransition
                classNames = 'result'
                key = {cost}
                timeout = {{enter: 500, exit: 500}}
              >
                <TextCost>Total: <span>{cost}€</span></TextCost>
              </CSSTransition>
            </TransitionGroup>
          </ResultCost>
        )
      }
    </div>
   )
}
 
Result.propTypes = {
  cost: PropTypes.number,
}

export default Result;