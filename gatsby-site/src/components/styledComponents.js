import styled from 'styled-components';


export const Wrapper = styled.div `
margin: 0 auto;
width: 90%; 
`;
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
  align-items: ${props => props.signIn ? 'center' : 'flex-start'};
`;

export const Input = styled.input `
background: white;
color: #222;
width: ${props=> props.list ? '20%' : '50%'};
text-align: center;
border-radius: 3px;
border: 1px solid tomato;
margin: 3%;
padding: 10px;

&:focus {
  outline: none;
}
`;

export const Label = styled.label `
  color: tomato;
  background: white;
  border: 1px solid tomato;
  border-radius: 3px;
  width: 80%;
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


export const DeleteSpan = styled.span `
  margin-left: 5%;
`;
