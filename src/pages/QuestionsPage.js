import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuestionsPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/questions/1'); // 첫 번째 질문으로 이동
  };

  return (
    <div>
      <h1>질문 목록</h1>
      <button onClick={handleStart}>질문 시작하기</button>
    </div>
  );
}
