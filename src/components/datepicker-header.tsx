import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

const Header = styled.div`
  margin: 0.4rem;
`;
const HeaderRow = styled.div`
  display: flex;
  margin: 5px 0;
`;
const Button = styled.button`
  padding: 0;
  margin: 0 10px;
  outline: 0;
  border: 0;
  background: none;
  width: 24px;
  cursor: pointer;

  &:focus {
    outline: unset;
  }
`;
const Value = styled.div`
  flex-grow: 1;
  font: normal normal 13px/18px OpenSans;
  color: ${lightTheme.colors.dark.main};
`;
const Day = styled.div`
  flex-grow: 1;
  margin: 0 3px;
  font: normal normal 13px/16px OpenSans;
  color: ${lightTheme.colors.dark.main};
`;

interface IProps {
  date: Date;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;

  changeYear(year: number): void;

  changeMonth(month: number): void;

  decreaseMonth(): void;

  increaseMonth(): void;

  decreaseYear(): void;

  increaseYear(): void;
}

export const DatePickerHeader: React.FC<IProps> = (props) => {
  const {
    date,
    changeYear,
    prevYearButtonDisabled,
    nextYearButtonDisabled,
    changeMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  } = props;

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return (
    <Header>
      <HeaderRow>
        <Button
          disabled={prevYearButtonDisabled}
          onClick={() => {
            changeYear(date.getFullYear() - 1);
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0502 13.1007L5.99984 9.05029L10.0502 4.99992"
              stroke="#137FE2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Value>{date.getFullYear()}</Value>
        <Button
          disabled={nextYearButtonDisabled}
          onClick={() => {
            changeYear(date.getFullYear() + 1);
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.94979 4.89933L12.0002 8.94971L7.94979 13.0001"
              stroke="#137FE2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </HeaderRow>
      <HeaderRow>
        <Button
          disabled={prevMonthButtonDisabled}
          onClick={() => {
            changeMonth(date.getMonth() - 1);
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0502 13.1007L5.99984 9.05029L10.0502 4.99992"
              stroke="#137FE2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Value>{months[date.getMonth()]}</Value>
        <Button
          disabled={nextMonthButtonDisabled}
          onClick={() => {
            changeMonth(date.getMonth() + 1);
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.94979 4.89933L12.0002 8.94971L7.94979 13.0001"
              stroke="#137FE2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </HeaderRow>
      <HeaderRow>
        <Day>пн</Day>
        <Day>вт</Day>
        <Day>ср</Day>
        <Day>чт</Day>
        <Day>пт</Day>
        <Day>сб</Day>
        <Day>вс</Day>
      </HeaderRow>
    </Header>
  );
};
