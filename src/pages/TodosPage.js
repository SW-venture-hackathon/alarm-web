/* eslint-disable react/prop-types */
import styled from 'styled-components';

const TodosPage = ({ events }) => {
  return (
    <Container>
      <Title>모든 일정</Title>
      {events.map((event, index) => (
        <EventCard key={index}>
          <EventDate>{event.date} 알람 일정</EventDate>
          <EventTitle>{event.title}</EventTitle>
        </EventCard>
      ))}
    </Container>
  );
};

export default TodosPage;

const Container = styled.div`
  width: 100%;
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
