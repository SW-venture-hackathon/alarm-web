import { useState } from 'react';
import styled from 'styled-components';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchEvents = async () => {
    const calendarId =
      'e0fe6e867084ce29a8d5e4a9f76ce6c6207b6ff0b6d7cbd69f6bd937174dbbc6@group.calendar.google.com'; // 공개 캘린더 ID
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`,
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setEvents(data.items || []);
      console.log('Fetched Events:', data.items);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('이벤트를 가져오는 중 오류가 발생했습니다.');
    }
  };

  console.log('Client ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
  console.log('API Key:', process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <Container>
      <h1>Google Calendar 공개 캘린더 연동</h1>
      <Button onClick={handleFetchEvents}>이벤트 가져오기</Button>
      <EventsContainer>
        <h2>이벤트 목록</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventItem key={index}>
              <strong>{event.summary || '제목 없음'}</strong>
              <p>시작 시간: {event.start?.dateTime || event.start?.date}</p>
              <p>종료 시간: {event.end?.dateTime || event.end?.date}</p>
            </EventItem>
          ))
        ) : (
          <p>이벤트가 없습니다.</p>
        )}
      </EventsContainer>
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

const Button = styled.button`
  margin: 8px 0;
  padding: 12px 20px;
  background-color: #4285f4;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #357ae8;
  }
`;

const EventsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #f7f7f7;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventItem = styled.div`
  margin-bottom: 12px;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;
