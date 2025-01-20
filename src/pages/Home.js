import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

function Home() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
        ],
        scope: SCOPES,
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleAuthClick = async () => {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    if (!GoogleAuth.isSignedIn.get()) {
      await GoogleAuth.signIn();
    }
    const user = GoogleAuth.currentUser.get();
    console.log('User:', user);
    alert('Google Calendar 연동에 성공했습니다!');
  };

  return (
    <Container>
      <CalendarBox>
        캘린더를 연결해주세요
        <AddButton onClick={handleAuthClick}>+</AddButton>
      </CalendarBox>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const CalendarBox = styled.div`
  width: 90%;
  height: 200px;
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
  color: #666;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const AddButton = styled.div`
  position: absolute;
  bottom: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #666;
  border: 2px solid #666;
  border-radius: 50%;
  cursor: pointer;
`;
