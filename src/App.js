import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    price: 0
  });

  const [ loading, setLoading ] = useState(false);

  const { data, cost } = resume;

  return (
    <Container>
      <Header title="Budget Calculator" />
      <ContainerForm>
        <Form 
          setResume = {setResume} 
          setLoading = {setLoading}
        />

        { loading ? <Spinner/> : null}
        
        { 
          data ? 
          <Resume 
            data = { data }
          /> : 
          null
        }

        {
          !loading
          ? <Result
              cost = {cost}
            /> 
          : null 
        }

        

      </ContainerForm>
    </Container>
  );
}

export default App;
