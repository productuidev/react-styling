import styled, { css } from 'styled-components'

// type string
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #FFF;
  color:#FFF;
  margin: 1.5em 1em;
  padding: 1em 2.5em;
  font-size:1em; 
  display:block;

  ${(props) =>
    props.primary && 
    css`
      background: #f00;
      color: #fff;
      border-color: #f00;
  `}
`;

export default StyledButton;