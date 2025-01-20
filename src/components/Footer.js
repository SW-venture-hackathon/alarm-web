import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #93a98b;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 14px;
`;

function Footer() {
  return <FooterContainer>© 2025 CALAL</FooterContainer>;
}

export default Footer;
