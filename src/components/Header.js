import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #93a98b;
  height: 60px;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;

const Button = styled.button`
  all: unset; /* 기본 버튼 스타일 제거 */
  background-color: #93a98b;
  color: white;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
`;

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/questions');
  };

  return (
    <HeaderContainer>
      <Button onClick={handleNavigate}>Timely</Button>
    </HeaderContainer>
  );
};

export default Header;
