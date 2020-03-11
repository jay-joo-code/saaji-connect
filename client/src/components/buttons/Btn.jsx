import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: .3rem .7rem;
  background: ${props => props.theme.pmy};
  color: white;
  opactiy: .9;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border: none;
  font-size: .8rem;
  cursor: pointer;
  
  // color
  background: ${props => props.color ? props.theme[props.color] : ''};
`

const Btn = ({ children, color, ...rest }) => {
  return (
    <Button 
      {...rest}
      color={color}
    >
      {children}
    </Button>
    )
}

export default Btn;