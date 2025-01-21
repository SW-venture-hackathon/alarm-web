import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 16px 16px 100px;
`;

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </MainLayoutContainer>
  );
};

export default MainLayout;
