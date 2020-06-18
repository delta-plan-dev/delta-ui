import React, { useState } from "react";

type Props = {
  handleChange: (value: boolean) => void;
  defaultValue?: boolean;
};

const Switch = ({ handleChange, defaultValue = false }: Props) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div
      onClick={() => {
        handleChange(!value);
        setValue(!value);
      }}
    >
      <div></div>
    </div>
  );
};

export default Switch;
