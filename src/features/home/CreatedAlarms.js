/* eslint-disable react/prop-types */
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const CreatedAlarms = ({ alarms }) => {
  return (
    <AlarmContainer>
      <Title>생성된 알람</Title>
      {alarms.map((alarm, index) => (
        <AlarmCard key={index}>
          <TimeSection>
            <Time>{alarm.time}</Time>
            <AmPm>{alarm.amPm}</AmPm>
          </TimeSection>
          <DetailsSection>
            <DateInfo>
              {alarm.date} ({alarm.day})
            </DateInfo>
            <AlarmTitle>{alarm.title}</AlarmTitle>
          </DetailsSection>
          <ToggleSwitch>
            <input type="checkbox" defaultChecked={alarm.isActive} />
            <Slider />
          </ToggleSwitch>
        </AlarmCard>
      ))}
    </AlarmContainer>
  );
};

export default CreatedAlarms;

// Styled components
const AlarmContainer = styled.div`
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

const AlarmCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e8f5e9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TimeSection = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const Time = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const AmPm = styled.div`
  font-size: 1rem;
  color: #666;
`;

const DetailsSection = styled.div`
  flex: 1;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

const DateInfo = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 4px;
`;

const AlarmTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
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
