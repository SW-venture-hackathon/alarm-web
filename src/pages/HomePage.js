import { useState } from 'react';
import styled from 'styled-components';
import CalendarView from '../features/home/CalendarView';
import CreatedAlarms from '../features/home/CreatedAlarms';

const HomePage = () => {
  const [events, setEvents] = useState([
    { date: '2025-05-18', title: 'Team Meeting', color: '#ff6347' },
    { date: '2025-05-18', title: 'Project Deadline', color: '#4285f4' },
  ]);
  const [alarms, setAlarms] = useState([
    {
      time: '9:00',
      date: '5월 18일',
      day: '목',
      title: '내 생일파티',
      isActive: true,
    },
    {
      time: '7:30',
      date: '5월 18일',
      day: '금',
      title: '출근 준비',
      isActive: false,
    },
  ]);

  const handleEvent = () => {
    setEvents(1);
    setAlarms(1);
  };

  return (
    <Container>
      <CalendarView events={events} />
      <UpcomingContainer>
        <Title>다가오는 일정</Title>
        {events.map((event, index) => (
          <EventCard key={index}>
            <EventDate>{event.date} 알람 일정</EventDate>
            <EventTitle>{event.title}</EventTitle>
          </EventCard>
        ))}
      </UpcomingContainer>
      <CreatedAlarms alarms={alarms} />
      <button onClick={handleEvent}></button>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const UpcomingContainer = styled.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

const EventCard = styled.div`
  background-color: #ffe6e6;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventDate = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 4px;
`;

const EventTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;
