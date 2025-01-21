import { useState, useEffect } from 'react';

const AlarmsPage = () => {
  const [alarms, setAlarms] = useState([
    { time: '11:41', title: '일어날 시간입니다!' },
    { time: '14:30', title: '점심 식사 후 휴식 시간입니다!' },
  ]);
  const [newAlarm, setNewAlarm] = useState({ time: '', title: '' });

  // 알림 권한 요청
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') {
          alert(
            '알림이 차단되었습니다. 브라우저 설정에서 알림을 허용해주세요.',
          );
        }
      });
    }

    // 알림 시간이 되었을 때 알림을 표시하는 함수
    const checkAlarms = () => {
      const now = new Date();
      const currentTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
      console.log('현재 시간: ', currentTime); // 현재 시간 확인

      alarms.forEach((alarm) => {
        console.log('알람 시간: ', alarm.time); // 알람 시간 확인
        if (alarm.time === currentTime) {
          new Notification(alarm.title, {
            body: '설정한 알람이 울립니다!',
            icon: '../public/icon.png', // public 폴더에 icon.png가 있어야 합니다.
          });
        }
      });
    };

    // 1분마다 알람 체크
    const alarmInterval = setInterval(() => {
      checkAlarms();
    }, 60000); // 60,000ms = 1분

    return () => clearInterval(alarmInterval); // 컴포넌트 언마운트 시 clearInterval
  }, [alarms]);

  // 알람 추가하기
  const handleAddAlarm = () => {
    if (newAlarm.time && newAlarm.title) {
      setAlarms([...alarms, newAlarm]);
      setNewAlarm({ time: '', title: '' }); // 알람 추가 후 입력창 초기화
    } else {
      alert('시간과 제목을 입력해주세요!');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>알람 설정</h1>

      {/* 알람 추가 입력란 */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="time"
          value={newAlarm.time}
          onChange={(e) => setNewAlarm({ ...newAlarm, time: e.target.value })}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="알람 제목"
          value={newAlarm.title}
          onChange={(e) => setNewAlarm({ ...newAlarm, title: e.target.value })}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button
          onClick={handleAddAlarm}
          style={{
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          알람 추가
        </button>
      </div>

      {/* 알람 리스트 */}
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {alarms.map((alarm, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              background: '#f9f9f9',
            }}
          >
            <strong>{alarm.time}</strong> - {alarm.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlarmsPage;
