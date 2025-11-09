import { useState } from 'react';
import styled from 'styled-components';
import CalendarView from '../features/home/CalendarView';
import CreatedAlarms from '../features/home/CreatedAlarms';
import UpcomingEvents from '../features/home/UpcomingEvents';

const EVENTS = [
  {
    title: 'ㅇㅇㅇㅇ',
    date: '2025-01-31',
    time: '21:15',
  },
  {
    title: 'ㅁㄴㅇㄹ',
    date: '2025-01-23',
    time: '01:45',
  },
  {
    title: 'test',
    date: '2025-01-21',
    time: '02:00',
  },
  {
    title: 'testaaaaa',
    date: '2025-01-28',
    time: '10:00',
  },
];
const ALARMS = [
  {
    title: 'ㅇㅇㅇㅇ',
    event_time: '2025-01-31 21:15',
    alarms: [
      '19:00',
      '19:05',
      '19:10',
      '19:15',
      '19:20',
      '19:25',
      '20:30',
      '20:35',
      '20:40',
      '20:45',
      '20:50',
      '20:55',
    ],
  },
  {
    title: 'ㅁㄴㅇㄹ',
    event_time: '2025-01-23 01:45',
    alarms: [
      '01:00',
      '01:05',
      '01:10',
      '01:15',
      '01:20',
      '01:25',
      '23:30',
      '23:35',
      '23:40',
      '23:45',
      '23:50',
      '23:55',
    ],
  },
];

const HomePage = () => {
  if (Notification.permission === 'default') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('알림 권한이 허용되었습니다.');
      } else {
        console.log('알림 권한이 거부되었습니다.');
      }
    });
  }

  const [events, setEvents] = useState(EVENTS);
  const [alarms, setAlarms] = useState(ALARMS);

  const handleEvent = () => {
    setEvents(1);
    setAlarms(1);
  };

  // 현재로부터 가장 가까운 일정 2개 가져오기
  const getUpcomingEvents = () => {
    const now = new Date();
    const sortedEvents = [...events]
      .sort(
        (a, b) =>
          new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time),
      )
      .filter((event) => new Date(event.date + ' ' + event.time) > now)
      .slice(0, 2); // 가장 가까운 2개만 선택
    return sortedEvents;
  };

  const handleToggle = (alarmIndex, timeIndex) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm, idx) =>
        idx === alarmIndex
          ? {
              ...alarm,
              alarms: alarm.alarms.map((time, tIdx) =>
                tIdx === timeIndex
                  ? { ...time, isActive: !time.isActive }
                  : time,
              ),
            }
          : alarm,
      ),
    );
  };

  return (
    <Container>
      <CalendarView events={events} />
      <UpcomingContainer>
        <UpcomingEvents events={getUpcomingEvents()} />
      </UpcomingContainer>
      <AlarmContainer>
        <CreatedAlarms alarms={alarms} onToggle={handleToggle} />
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
