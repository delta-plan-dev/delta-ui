import React, { useState } from "react";
import Switch from "../Switch";
import styled from "styled-components";
import DataPicker from "../Datapicker";

const Form = styled.div`
  position: relative;
  max-width: 900px;
  padding: 50px;
  margin: 50px;
  border-radius: 25px;
  background-color: #fcfcfc;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
`;

function App() {
  const [state, setState] = useState({
    switch: false,
  });

  return (
    <>
      <Form>
        <h1>Delta UI</h1>
        <div>
          <Switch
            title={state.switch.toString()}
            value={state.switch}
            handleChange={(value: boolean) =>
              setState({ ...state, switch: value })
            }
          />
        </div>
        <div>
          <DataPicker />
        </div>
      </Form>
    </>
  );
}

export default App;
