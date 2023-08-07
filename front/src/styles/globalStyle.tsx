import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Styled Components Global Style Reset
const GlobalStyle = createGlobalStyle`
:root {
    --gray: rgba(203, 210, 224, 1);
}
${reset}
`;

export default GlobalStyle;
