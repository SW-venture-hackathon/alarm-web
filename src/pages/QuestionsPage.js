import { useEffect } from 'react'; // useEffect만 import
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
  const navigate = useNavigate();

  // 페이지가 로드되자마자 첫 번째 질문으로 이동
  useEffect(() => {
    navigate('/questions/1');
  }, [navigate]);

  return <div>Redirecting to the first question...</div>;
};

export default QuestionsPage;
