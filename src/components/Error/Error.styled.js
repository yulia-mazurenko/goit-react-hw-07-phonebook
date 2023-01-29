import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 9;

  width: 100vw;
  height: 100vh;
  background-color: rgba(228, 228, 215, 80%);
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  z-index: 9999;

  font-size: 30px;
  color: #1337ca;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
