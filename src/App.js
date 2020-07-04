import React, { useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [ resume, setResume ] = useState({});
  return (
    <Container>
      <Header title="Budget Calculator" />
      <ContainerForm>
        <Form
          setResume = {setResume}
        />
      </ContainerForm>
      
      
    </Container>
  );
}

export default App;
