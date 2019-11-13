import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  body {
      height: 100vh;
  }
  
  html, #root, #root>div {
      height: 100vh;
  }
  
  @media only screen and (min-width: 480px) {
      body {
          font-size: 23px;
      }
  }
`;

export function AppContainer({ children }: { children: any }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
}
