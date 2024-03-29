import styled from 'styled-components';

export const ButtonContainer = styled.button `
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
cursor: pointer;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem;
transition: 0.5s ease-in-out;
&: hover{
  background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--mainBlue); 
}
&:focus{
  outline:none;
}
`;