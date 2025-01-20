import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #93a98b;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

function Header() {
  return <HeaderContainer>CALAL</HeaderContainer>;
}

export default Header;
