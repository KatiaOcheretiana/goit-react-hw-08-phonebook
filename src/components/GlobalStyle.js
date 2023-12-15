import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: 'rgba(8, 10, 27, 1)'
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body,
p,
h1,
h2,
h3,
ol,
ul,
fieldset,
input,
button,
textarea {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

button{cursor: pointer;}

img {
  display: block;
  max-width: 100%;
}
`;
