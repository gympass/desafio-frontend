import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid #0d243c;
  box-shadow: 2px 2px 0px #0d243c;
  height: 64px;
  border-radius: 36px;
  transition: box-shadow 100ms linear;
`;

export const Input = styled.input`
  border: 0;
  flex-grow: 1;
  background: transparent;
  outline: none;
  font-family: Roboto;
  padding-left: 24px;
  letter-spacing: -0.5px;
  color: #0d243c;
  font-size: 16px;
  width: 250px;
  transition: width 200ms linear;

  &:focus {
    width: 300px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 8px;
  border-radius: 24px;
  min-width: 176px;
  background: #f46152;
  outline: none;
  border: 0;
  color: white;
`;
