import { gapi } from 'gapi-script';
import styled from 'styled-components';

const HomePage = () => {
  console.log('Client ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
  console.log('API Key:', process.env.REACT_APP_GOOGLE_API_KEY);

  const handleSignIn = async () => {
    const GoogleAuth = gapi.auth2?.getAuthInstance();
    console.log('asdfawfes', GoogleAuth);
    if (!GoogleAuth.isSignedIn.get()) {
      console.log('asdf');
      await GoogleAuth.signIn();
    }
    alert('Google Calendar 연동 성공!');
  };

  const handleFetchEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary', // 기본 캘린더
        timeMin: new Date().toISOString(), // 현재 시간 이후의 이벤트
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });

      const events = response.result.items;
      console.log('Events:', events);
      alert(`가져온 이벤트 수: ${events.length}`);
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('이벤트를 가져오는 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <h1>Google Calendar 연동</h1>
      <Button onClick={handleSignIn}>Google 로그인</Button>
      <Button onClick={handleFetchEvents}>이벤트 가져오기</Button>
      <EventsContainer>
        <h2>이벤트 목록</h2>
        {/* 가져온 이벤트를 여기에 렌더링할 수 있습니다 */}
        {/* 아래는 예시 */}
        <EventItem>이벤트 제목: 내 생일</EventItem>
        <EventItem>이벤트 제목: 팀 회의</EventItem>
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
