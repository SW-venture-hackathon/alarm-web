import { useState } from 'react';
import styled from 'styled-components';
import CalendarView from '../features/home/CalendarView';
import CreatedAlarms from '../features/home/CreatedAlarms';
import UpcomingEvents from '../features/home/UpcomingEvents';

const EVENTS = [
  { date: '2025-05-18', title: 'Team Meeting', color: '#ff6347' },
  { date: '2025-05-18', title: 'Project Deadline', color: '#4285f4' },
];

const ALARMS = [
  {
    time: '09:00',
    date: '2025-5-18',
    day: '목',
    title: '내 생일파티',
    isActive: true,
  },
  {
    time: '17:30',
    date: '2025-5-18',
    day: '금',
    title: '저녁 약속',
    isActive: false,
  },
];

const HomePage = () => {
  const [events, setEvents] = useState(EVENTS);
  const [alarms, setAlarms] = useState(ALARMS);

  const handleEvent = () => {
    setEvents(1);
    setAlarms(1);
  };

  return (
    <Container>
      <CalendarView events={events} />
      <UpcomingContainer>
        <UpcomingEvents events={events} />
      </UpcomingContainer>
      <AlarmContainer>
        <CreatedAlarms alarms={alarms} />
      </AlarmContainer>
      <button style={{ display: 'none' }} onClick={handleEvent}></button>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpcomingContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const AlarmContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
