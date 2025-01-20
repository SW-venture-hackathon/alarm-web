/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const CalendarView = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper function: Get the number of days in a month
  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  // Helper function: Generate days for the selected month
  const generateDays = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Sunday: 0, Saturday: 6

    // Adjust first day for Saturday-start week
    const adjustedFirstDay = (firstDayOfMonth + 6) % 7;

    // Add empty days at the start of the grid
    const daysArray = [];
    for (let i = 0; i < adjustedFirstDay; i++) {
      daysArray.push(null);
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        date: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
        number: i,
      });
    }

    return daysArray;
  };

  // Handle previous/next month navigation
  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1,
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );
    setCurrentDate(nextMonth);
  };

  // Generate days for the current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = generateDays(year, month);

  // Day names for the calendar header (Saturday-start, ending with Sunday)
  const dayNames = ['Sa', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'];

  return (
    <CalendarContainer>
      <Header>
        <ArrowButton onClick={handlePrevMonth}>&lt;</ArrowButton>
        <MonthTitle>
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
            new Date(year, month),
          )}{' '}
          {year}
        </MonthTitle>
        <ArrowButton onClick={handleNextMonth}>&gt;</ArrowButton>
      </Header>
      <Grid>
        {dayNames.map((day, index) => (
          <DayName
            key={index}
            isSaturday={day === 'Sa'}
            isSunday={day === 'Su'}
          >
            {day}
          </DayName>
        ))}
        {days.map((day, index) => (
          <DayCell key={index}>
            {day ? (
              <div>
                <DayNumber>{day.number}</DayNumber>
                <EventBarContainer>
                  {events
                    .filter((event) => event.date === day.date)
                    .map((event, idx) => (
                      <EventBar key={idx} color={event.color}>
                        {event.title}
                      </EventBar>
                    ))}
                </EventBarContainer>
              </div>
            ) : null}
          </DayCell>
        ))}
      </Grid>
    </CalendarContainer>
  );
};

export default CalendarView;

// Styled components
const CalendarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const MonthTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const DayName = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 8px 0;
  color: ${(props) =>
    props.isSaturday ? 'blue' : props.isSunday ? 'red' : 'black'};
`;

const DayCell = styled.div`
  position: relative;
  border: 1px solid #eee;
  padding: 8px;
  min-height: 80px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DayNumber = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  font-weight: bold;
`;

const EventBarContainer = styled.div`
  margin-top: 24px; /* Leaves space for the day number */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EventBar = styled.div`
  background-color: ${(props) => props.color || '#4285f4'};
  color: white;
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 4px;
  text-align: center;
`;
