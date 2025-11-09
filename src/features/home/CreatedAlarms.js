/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CreatedAlarms = ({ alarms, onToggle }) => {
  // Helper function to format time
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };
  console.log(alarms);
  return (
    <>
      <Title>생성된 알람</Title>
      {alarms.map((alarm, index) => {
        const midIndex = Math.ceil(alarm.alarms.length / 2); // 중간 인덱스 계산
        const morningAlarms = alarm.alarms.slice(0, midIndex); // 앞 절반
        const departureAlarms = alarm.alarms.slice(midIndex); // 뒤 절반

        return (
          <AlarmCard key={index}>
            <DetailsSection>
              <AlarmTitle>{alarm.title}</AlarmTitle>
              <EventTime>일정 시간: {alarm.event_time}</EventTime>

              <SectionTitle>기상 알람</SectionTitle>
              <AlarmTimes>
                {morningAlarms.map((time, idx) => (
                  <AlarmTime key={idx}>
                    {formatTime(time)}{' '}
                    <ToggleSwitch>
                      <input
                        type="checkbox"
                        checked={time.isActive || false}
                        onChange={() => onToggle(index, idx)}
                      />
                      <Slider />
                    </ToggleSwitch>
                  </AlarmTime>
                ))}
              </AlarmTimes>

              <SectionTitle>출발 알람</SectionTitle>
              <AlarmTimes>
                {departureAlarms.map((time, idx) => (
                  <AlarmTime key={idx + midIndex}>
                    {formatTime(time)}{' '}
                    <ToggleSwitch>
                      <input
                        type="checkbox"
                        checked={time.isActive || false}
                        onChange={() => onToggle(index, idx + midIndex)}
                      />
                      <Slider />
                    </ToggleSwitch>
                  </AlarmTime>
                ))}
              </AlarmTimes>
            </DetailsSection>
          </AlarmCard>
        );
      })}
    </>
  );
};

export default CreatedAlarms;

// Styled components
const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

const AlarmCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #e8f5e9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AlarmTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const EventTime = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 8px;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 8px;
  color: #2c3e50;
`;

const AlarmTimes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const AlarmTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #333;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: #4caf50;
  }

  input:checked + span:before {
    transform: translateX(20px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
