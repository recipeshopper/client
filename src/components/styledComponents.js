import styled from 'styled-components';

export const SignInWrapper = styled.div `
  background: #222;
  color: tomato;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Form = styled.form `
  width: 90%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input `
background: white;
color: #222;
width: 50%;
border-radius: 3px;
border: 1px solid tomato;
margin: 3%;
padding: 10px;
`;

export const Button = styled.button `
  background: #222;
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 10px;
  border: 1px solid tomato;
  border-radius: 3px;
  cursor: pointer;
  width: 40%;
  &:focus {
    outline: none;
  }
  &:hover {
    background: tomato;
    color: #222;
  }
`;
