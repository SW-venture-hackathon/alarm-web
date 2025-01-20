import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function QuestionDetailPage() {
  const { id } = useParams(); // 현재 질문 ID 가져오기
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      title: 'React란 무엇인가요?',
      content: 'React는 UI 라이브러리입니다.',
    },
    {
      id: 2,
      title: 'React Router란 무엇인가요?',
      content: 'React Router는 라우팅 라이브러리입니다.',
    },
    {
      id: 3,
      title: 'useEffect 사용 방법',
      content: 'useEffect는 사이드 이펙트를 처리하는 Hook입니다.',
    },
    {
      id: 4,
      title: 'State와 Props의 차이점은?',
      content:
        'State는 컴포넌트 내부에서 관리하는 데이터이고, Props는 부모에서 전달된 데이터입니다.',
    },
  ];

  const question = questions.find((q) => q.id === parseInt(id));

  // "다음 질문" 버튼 클릭 시 다음 질문으로 이동
  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= questions.length) {
      navigate(`/questions/${nextId}`);
    } else {
      alert('모든 질문을 완료했습니다!');
      navigate('/questions'); // 목록 페이지로 돌아가기
    }
  };

  if (!question) {
    return <p>질문을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.content}</p>
      <button onClick={handleNext}>다음 질문</button>
    </div>
  );
}
