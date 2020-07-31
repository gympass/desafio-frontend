import React, { useState } from 'react';
import styled from 'styled-components';
import image from './logo.svg';
import BigNumber from '../../components/BigNumber/BigNumber';
import Input from '../../components/Input';

const Container = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  height: 100vh;
`;

const Titulo = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-size: 48px;
  letter-spacing: -2px;
  color: #0D243C;
  width: 450px;
  padding-bottom: 24px;
`;

const L = styled.div`
  min-width: 650px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const R = styled.div`
  display: flex;
  background: #f46152;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
`;

const Logo = styled.img``;

const Main = styled.div`
  flex-grow: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Home = () => {
  const [u, setU] = useState('');

  return  (
    <Container>
      <L>
        <Header>
          <Logo src={image} alt="img" />
        </Header>
        <Main>
          <Titulo>
            Simples forma de mostrar a quantidade de repositórios no seu GitHub.
          </Titulo>
          <div>
            <Input value={u} onChange={(e) => setU(e.target.value)} />
          </div>
        </Main>
      </L>
      <R>{!!u && <BigNumber login={u} />}</R>
    </Container>
  );
};

export default Home;
