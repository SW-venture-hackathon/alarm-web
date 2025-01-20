import { gapi } from 'gapi-script';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];

export const initializeGapiClient = async () => {
  try {
    console.log('appapapa', API_KEY);
    await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
      redirect_uri: 'http://127.0.0.1:3000/', // 명시적으로 설정
    });
    console.log('Google API initialized');
  } catch (error) {
    console.error('Error during Google API initialization:', error);
  }
};

export const loadGapi = (callback) => {
  gapi.load('client:auth2', callback);
};
