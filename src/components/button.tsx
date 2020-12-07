import React from 'react';

export const Button: React.FC = (props) => {
  const { children } = props;

  return (
    <button type="button" {...props}>
      {children ?? 'Submit'}
    </button>
  );
};
