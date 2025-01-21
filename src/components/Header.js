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

const Header = () => {
  return <HeaderContainer>서비스명</HeaderContainer>;
};

export default Header;
