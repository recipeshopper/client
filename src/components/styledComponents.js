import styled from 'styled-components';


export const Header = styled.h1 `
  text-align: center;
  margin: 0 auto;
  font-size: 60px;
  padding-top: 40px;
`;

export const SubHeader = styled.h3 `
  text-align: left;
  margin: 0 auto; 
  margin-left: 15%;
  padding-top: 70px;
  padding-bottom: 20px;
  font-size: 30px;
`;

export const Wrapper = styled.div `
margin: 0 auto;
margin-bottom: -30px;
width: 100%;
text-align: center;
`;

export const SignInWrapper = styled.div `
  background: #3AAFA9;
  height: 100vh;
  color: #02172c;
  margin-top: 30px;
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
  padding: 2%;
  display: flex;
  flex-direction: ${props => props.signIn ? 'column' : 'row'};
  align-items: ${props => props.list ? 'flex-start' : 'center'};
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Input = styled.input `
background: white;
color: #222;
width: ${props=> props.list ? '10%' : '30%'};
min-width: 80px;
text-align: center;
border-radius: 10px;
border: 2px solid #335461;
margin: 3%;
padding: 10px;
background-color: rgb(228, 228, 228);

&:focus {
  outline: none;
}
`;

export const Label = styled.label `
  color: #222;
  background: #3AAFA9;
  border-bottom: ${props => props.add ? '1px solid black' : '2px solid #2B7A78'};
  width: ${props => props.add ? '30%' : '80%'}
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:hover{
    background: #349C97;
  }
`;

export const AddLabel = styled.label `
  color: #222;
  background: #3AAFA9;
  // border-bottom: ${props => props.add ? '1px solid black' : '2px solid #2B7A78'};
  width: ${props => props.add ? '30%' : '80%'}
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:hover{
    background: #349C97;
  }
`;

export const Button = styled.button `
  background: rgb(131, 226, 202);
  border: 2px solid #2B7A78;
  font-size: 1em;
  margin: 1em;
  padding: 10px;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  width: 40%;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #349C97;
    border: 2px solid rgb(131, 226, 202);
    color: #222;
  }
`;


export const DeleteSpan = styled.span `
  margin-left: 5%;
  cursor: pointer;
  color: #02172c;

  &:hover {
    color: white;
  }
`;
