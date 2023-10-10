import Button from 'react-bootstrap/Button';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledButton = styled(Button)`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 10px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Childcss(props) {
    return (
        <div>
            <Title>Hello World</Title>
            <Button>Click</Button>
            <StyledButton>Click</StyledButton>
        </div>
    );
}

export default Childcss;