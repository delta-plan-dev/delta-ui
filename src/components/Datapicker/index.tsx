import React, { useState } from "react";
import { styled } from "../../theme";

const getMonth = (
  year: number,
  month: number,
  firstDay?: number
): Array<Array<number>> => {
  const days = 32 - new Date(year, month, 32).getDate();

  let weeks: Array<Array<number>> = new Array(Math.ceil(days / 7));
  for (let i = 0; i < weeks.length; i++) {
    weeks[i] = new Array<number>(7);
  }

  let weekNumber = 0;
  let weekDay = 0;
  for (let day = 0; day < days; day++) {
    weeks[weekNumber][weekDay] = day + 1;
    weekDay++;
    if (weekDay > 6) {
      weekNumber++;
      weekDay = 0;
    }
  }

  return weeks;
};

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const Input = styled.div`
  line-height: 24px;
  padding: 0 0.5rem;
  border-radius: 1px;
  background-color: ${(props) => props.theme.colors.color1};
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  width: 300px;
  top: 30px;
  padding: 25px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
`;

const Th = styled.th`
  width: 40px;
  line-height: 40px;
  text-align: center;
`;

const Td = styled.td<{ select: boolean }>`
  width: 40px;
  line-height: 40px;
  text-align: center;
  ${(props) => (props.select ? "background-color: red" : "")};
`;

const now = new Date();

const headerWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const DataPicker = () => {
  const [show, setShow] = useState(true);

  return (
    <Wrapper>
      <Input
        onClick={() => setShow(!show)}
      >{`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`}</Input>
      {show ? (
        <Modal>
          <Table>
            <thead>
              <tr>
                {headerWeek.map((day, index) => (
                  <Th key={`header-${index}`}>{day}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getMonth(
                now.getFullYear(),
                now.getMonth(),
                new Date(now.getFullYear(), now.getMonth(), 1).getDay()
              ).map((week, weekIndex) => (
                <tr key={`week-${weekIndex}`}>
                  {week.map((day, dayIndex) => (
                    <Td
                      key={`week-${weekIndex}-day-${dayIndex}`}
                      select={now.getDate() === day}
                    >
                      {day}
                    </Td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default DataPicker;
