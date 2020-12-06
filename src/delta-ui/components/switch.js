import React from 'react';
import styled from 'styled-components';
const Label = styled.label `
  display: inline-flex;
  cursor: pointer;
`;
const Title = styled.div `
  line-height: 24px;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.secondary};
`;
const ButtonWrapper = styled.div `
  display: inline-block;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.secondary};
  transition-duration: 0.2s;
`;
const Button = styled.div `
  width: 18px;
  height: 18px;
  margin: ${(props) => (props.active ? '3px 3px 3px 26px' : '3px')};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.main};
  transition-duration: 0.2s;
`;
export const Switch = ({ title, handleChange, value, style = {} }) => {
    return (React.createElement(Label, { style: style, onClick: () => {
            handleChange(!value);
        } },
        React.createElement(ButtonWrapper, { active: value },
            React.createElement(Button, { active: value })),
        React.createElement(Title, null, title)));
};
//# sourceMappingURL=switch.js.map