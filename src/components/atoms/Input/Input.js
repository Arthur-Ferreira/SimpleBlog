import { styled } from 'styled-components';

const Input = styled.input`
.btn {
  cursor: pointer;
  font: inherit;
  background-color: #754A35;
  border: 1px solid #754A35;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
 
  &:hover, &:active {
    background-color: #C88A36;
    border-color: #C88A36;
    color: white;
  }
  
  &.--alt {
    background-color: transparent;
    border-color: transparent;
    color: #754A35;
    
    &:hover, &:active {
      color: #EFE7DD;
    }
  }
}
`;

export default Input;
