import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* Colors */
  --text: #312d2c;
  --brown: #754A35;
  --white: #fff;
  --white-light: #EFE7DD;
  --yellow: #ffd900;
  --yellow-dark: #C88A36;

  /* Fonts */
  --base-font-family: sans-serif;
}

* {
  font-family: var(--base-font-family);
  color: var(--text);
}

body {
  margin: 0;
}

main {
  width: 80%;
  margin: 3rem auto;
}

a {
  text-decoration: none;
  color: var(--brown);
  
  &:hover, &:active {
    color: var(--white-light);
  }
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.btn {
  cursor: pointer;
  font: inherit;
  background-color: var(--brown);
  border: 1px solid var(--brown);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
 
  &:hover, &:active {
    background-color: var(--yellow-dark);
    border-color: var(--yellow-dark);
    color: var(--white);
  }
  
  &.--alt {
    background-color: transparent;
    border-color: transparent;
    color: var(--brown);

    &:hover, &:active {
      color: var(--white-light);
    }
  }
}

/* Global components */
`;

export default GlobalStyle;
