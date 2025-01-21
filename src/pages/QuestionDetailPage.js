import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/QuestionDetailPage.css';

const QuestionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [wakeUpTime, setWakeUpTime] = useState(6 * 60); // 초기 값: 오전 8시 (분 단위)

  const questions = [
    {
      id: 1,
      text: (
        <>
          초기 설정을 시작합니다. <br />
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            평소 알람을 사용할 때 <br />
            가장 자신과 가깝다고 생각되는
            <br /> 선택지를 골라주세요.
          </span>
        </>
      ),
      options: ['이해하였습니다'],
    },
    {
      id: 2,
      text: (
        <>
          <span style={{ fontWeight: 'bold', color: '#2c3e50' }}>
            평균 외출 준비 시간은?
          </span>
        </>
      ),
      options: [
        '30분 미만',
        '30분 이상~1시간 미만',
        '1시간 이상~1시간 30분 미만',
        '1시간 30분 이상~2시간 미만',
        '2시간 이상',
      ],
    },
    {
      id: 3,
      text: (
        <>
          <span style={{ fontWeight: 'bold' }}>나의 알람 반복 주기는?</span>
        </>
      ),
      options: ['5분 마다', '10분 마다', '15분 마다', '20분 마다', '30분 이상'],
    },
    {
      id: 4,
      text: (
        <>
          약속 시간이 <span style={{ color: 'blue' }}>오전 10시</span>이고,
          <br /> 약속 장소까지 <span style={{ color: 'blue' }}>15분</span>이
          걸린다면{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            몇 시에 일어나시나요?
          </span>
        </>
      ),
      options: null,
    },
    {
      id: 5,
      text: (
        <>
          약속 시간이 <span style={{ color: 'blue' }}>오전 10시</span>이고,
          <br /> 약속 장소까지 <span style={{ color: 'blue' }}>15분</span>이
          걸린다면{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            몇 시에 외출하시나요?
          </span>
        </>
      ),
      options: null,
    },
  ];

  // 질문 ID가 변경될 때마다 선택 초기화 및 wakeUpTime 설정
  useEffect(() => {
    setSelectedOption(null);
    if (id === '4') {
      setWakeUpTime(6 * 60); // ID 4: 슬라이더 최소값인 오전 6시로 초기화
    } else if (id === '5') {
      setWakeUpTime(9 * 60); // ID 5: 슬라이더 최소값인 오전 9시로 초기화
    }
  }, [id]);

  const question = questions.find((q) => q.id === parseInt(id));

  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= questions.length) {
      navigate(`/questions/${nextId}`);
    } else {
      alert('모든 질문을 완료했습니다!');
      navigate('/'); // 홈 페이지로 이동
    }
  };

  if (!question) {
    return <p>질문을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="question-container">
      <div className="question-text">{question.text}</div>

      {id === '4' || id === '5' ? (
        <div className="slider-container">
          <input
            className="time-slider"
            type="range"
            min={id === '4' ? 6 * 60 : 9 * 60}
            max={id === '4' ? 10 * 60 : 10 * 60}
            step={5}
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(parseInt(e.target.value))}
          />
          <div className="time-label">
            선택한 시간: {formatTime(wakeUpTime)}
          </div>
        </div>
      ) : (
        <div className="options-container">
          {question.options &&
            question.options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedOption === option ? 'selected' : ''
                } ${id === '1' ? 'full-width' : ''}`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}

      <div className="footer-container">
        <button
          className={`next-button ${
            selectedOption || id === '4' || id === '5' ? 'active' : ''
          }`}
          onClick={handleNext}
          disabled={!selectedOption && id !== '4' && id !== '5'} // 선택되지 않았을 때 비활성화
        >
          다음 질문
        </button>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
