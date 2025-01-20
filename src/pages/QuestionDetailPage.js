import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/QuestionDetailPage.css';

const QuestionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      text: '초기 설정을 시작합니다. 평소 알람을 사용할 때 가장 자신과 가깝다고 생각되는 선택지를 골라주세요.',
      options: ['이해하였습니다'],
    },
    {
      id: 2,
      text: '평균 외출 준비 시간은?',
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
      text: '나의 알람 반복 주기는?',
      options: ['5분 마다', '10분 마다', '15분 마다', '20분 마다', '30분 이상'],
    },
  ];

  const question = questions.find((q) => q.id === parseInt(id));

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= questions.length) {
      navigate(`/questions/${nextId}`);
    } else {
      alert('모든 질문을 완료했습니다!');
      navigate('/'); // HomePage로 이동
    }
  };

  if (!question) {
    return <p>질문을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="question-container">
      {/* 질문 텍스트 */}
      <div className="question-text">{question.text}</div>

      {/* 옵션 선택 영역 */}
      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            className="option"
            key={index}
            onClick={() => setSelectedOption(option)}
          >
            <input
              type="radio"
              id={`option-${index}`}
              name="question-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button className="next-button" onClick={handleNext}>
        다음 질문
      </button>
    </div>
  );
};

export default QuestionDetailPage;
