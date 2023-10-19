import React from "react";
import { styled } from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--primary);
  color: #fff;
  cursor: pointer;
  border: none;
  padding: 10px 14px;
  border-radius: 4px;
`

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <StyledButton onClick={() => setCount(count + 1)}>Counter: {count}</StyledButton>
  )
}

function Index() {
  return (
    <main>
      <h1>Index</h1>
      <Counter />
    </main>
  )
}

export default Index;