import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const Content = styled.main`
  padding: 16px;
`;

const HeaderOnlyLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default HeaderOnlyLayout;
