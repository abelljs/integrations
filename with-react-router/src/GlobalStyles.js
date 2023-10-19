import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #2734ab;
}

html, body {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

main {
  padding: 12px 42px;
}
`

export { GlobalStyles }