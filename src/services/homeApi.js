import axios from 'axios';

export const fetchEventsAndAlarms = async () => {
  try {
    const response = await axios.get(`/get-event/`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
        'Access-Control-Allow-Credentials': true,
      },
    });
    console.log(response);

    if (!response.headers['content-type'].includes('application/json')) {
      throw new Error('Unexpected content type. Expected application/json.');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching events and alarms:', error);
    throw error;
  }
};
