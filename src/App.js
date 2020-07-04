import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
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
  const [resume, setResume] = useState({});
  const { data } = resume;

  return (
    <Container>
      <Header title="Budget Calculator" />
      <ContainerForm>
        <Form setResume={setResume} />

        { 
          data ? 
          <Resume 
            data = { data }
          /> : 
          null
        }

      </ContainerForm>
    </Container>
  );
}

export default App;
