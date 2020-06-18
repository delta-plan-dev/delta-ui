import React, { useState } from "react";
import Switch from "../Switch";

function App() {
  const [state, setState] = useState({
    switch: false,
  });

  return (
    <div>
      <label>
        <Switch
          handleChange={(value: boolean) =>
            setState({ ...state, switch: value })
          }
        />
        <span>{state.switch.toString()}</span>
      </label>
    </div>
  );
}

export default App;
