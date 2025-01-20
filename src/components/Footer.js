import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #d8d8d8;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  height: 100px; /* 명시적으로 높이 설정 */
`;

const FooterButton = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  font-size: 20px;
  text-align: center;
  flex: 1;
  padding: 10px;
  font-weight: bold;

  &:hover {
    color: #3498db;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterButton to="/alarms">알람 관리</FooterButton>
      <FooterButton to="/">홈</FooterButton>
      <FooterButton to="/todos">일정 관리</FooterButton>
    </FooterContainer>
  );
};

export default Footer;
