import styled from 'styled-components';


export const Wrapper = styled.div `
margin: 0 auto;
width: 100%;
text-align: center;
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

export const Note = styled.p `
  width: 100%;
  font-size: .7em;
`;

export const Form = styled.form `
  width: 95%;
  margin: 0 auto;
  padding: 5%;
  border: ${props => props.add ? '1px solid black' : null};
  display: flex;
  flex-direction: ${props => props.signIn ? 'column' : 'row'};
  align-items: ${props => props.list ? 'flex-start' : 'center'};
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input `
background: white;
color: #222;
width: ${props=> props.list ? '15%' : '50%'};
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
  color: #222;
  background: white;
  border: ${props => props.add ? '1px solid black' : '1px solid tomato'};
  border-radius: 3px;
  width: ${props => props.add ? '30%' : '80%'}
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
  cursor: pointer;
`;
